# Full Toolando sync from GitHub onto the network disk.
# 1) Snapshot backup of current tree
# 2) git fetch + reset --hard origin/<branch>
# 3) npm install for doc-converter
# Called by POST /hooks/sync. PM2 restart is scheduled by Node after the HTTP response.

param(
  [string]$RepoRoot = $env:TOOLANDO_ROOT,
  [string]$Branch = "main",
  [int]$BackupKeep = 0
)

$ErrorActionPreference = "Stop"

if (-not $RepoRoot -or $RepoRoot.Trim() -eq "") {
  $RepoRoot = "F:\Toolando"
}

if ($BackupKeep -le 0) {
  $parsed = 0
  if ([int]::TryParse($env:SYNC_BACKUP_KEEP, [ref]$parsed) -and $parsed -gt 0) {
    $BackupKeep = $parsed
  }
  else {
    $BackupKeep = 10
  }
}

$RepoRoot = $RepoRoot.TrimEnd("\", "/")
$ConverterDir = Join-Path $RepoRoot "services\doc-converter"
$LogDir = Join-Path $RepoRoot "logs"
$LogFile = Join-Path $LogDir "sync.log"
$BackupRoot = if ($env:SYNC_BACKUP_DIR -and $env:SYNC_BACKUP_DIR.Trim()) {
  $env:SYNC_BACKUP_DIR.Trim()
}
else {
  Join-Path $RepoRoot "backups"
}
$EnvFile = Join-Path $ConverterDir ".env"
$EnvBackup = Join-Path $env:TEMP "toolando-converter.env.bak"
$GitExe = $env:GIT_EXE
if (-not $GitExe -or -not (Test-Path $GitExe)) {
  $cmd = Get-Command git -ErrorAction SilentlyContinue
  if ($cmd) { $GitExe = $cmd.Source }
  elseif (Test-Path "C:\Program Files\Git\bin\git.exe") {
    $GitExe = "C:\Program Files\Git\bin\git.exe"
  }
  else { $GitExe = "git" }
}

function Write-Log([string]$Message) {
  $line = "[{0}] {1}" -f (Get-Date -Format "yyyy-MM-dd HH:mm:ss"), $Message
  Add-Content -Path $LogFile -Value $line -Encoding UTF8
}

function New-RepoBackup {
  param([string]$Source, [string]$DestRoot)

  New-Item -ItemType Directory -Force -Path $DestRoot | Out-Null
  $stamp = Get-Date -Format "yyyyMMdd-HHmmss"
  $short = ""
  try {
    Push-Location $Source
    $short = (& $GitExe -c "safe.directory=*" rev-parse --short HEAD 2>$null)
    if ($LASTEXITCODE -ne 0) { $short = "nogit" }
  }
  finally {
    Pop-Location -ErrorAction SilentlyContinue
  }
  if (-not $short) { $short = "nogit" }

  $dest = Join-Path $DestRoot ("toolando-{0}-{1}" -f $stamp, $short)
  New-Item -ItemType Directory -Force -Path $dest | Out-Null
  Write-Log "Backup -> $dest"

  # Full tree minus heavy / recursive dirs. /XD excludes directory names anywhere.
  $robolog = Join-Path $env:TEMP "toolando-robocopy-backup.log"
  $args = @(
    $Source, $dest, "/E", "/NFL", "/NDL", "/NJH", "/NJS", "/NP", "/R:1", "/W:1",
    "/XD", "node_modules", ".next", ".git", "backups", "logs", ".vercel", ".snowflake",
    "/XF", "*.log"
  )
  & robocopy @args | Out-File -FilePath $robolog -Encoding utf8
  $code = $LASTEXITCODE
  # robocopy: 0-7 success-ish; >=8 failure
  if ($code -ge 8) {
    throw "robocopy backup failed (exit $code). See $robolog"
  }
  Write-Log "Backup robocopy exit=$code"

  # Always keep live .env in the snapshot (may be gitignored)
  $envSrc = Join-Path $Source "services\doc-converter\.env"
  if (Test-Path $envSrc) {
    $envDestDir = Join-Path $dest "services\doc-converter"
    New-Item -ItemType Directory -Force -Path $envDestDir | Out-Null
    Copy-Item -Force $envSrc (Join-Path $envDestDir ".env")
    Write-Log "Backup included converter .env"
  }

  return $dest
}

function Remove-OldBackups {
  param([string]$DestRoot, [int]$Keep)

  if (-not (Test-Path $DestRoot)) { return }
  $dirs = Get-ChildItem -Path $DestRoot -Directory -ErrorAction SilentlyContinue |
    Where-Object { $_.Name -like "toolando-*" } |
    Sort-Object Name -Descending

  if ($dirs.Count -le $Keep) { return }

  $toRemove = $dirs | Select-Object -Skip $Keep
  foreach ($d in $toRemove) {
    Write-Log "Prune old backup $($d.FullName)"
    Remove-Item -Recurse -Force $d.FullName -ErrorAction SilentlyContinue
  }
}

New-Item -ItemType Directory -Force -Path $LogDir | Out-Null
Write-Log "=== sync start (root=$RepoRoot branch=$Branch keep=$BackupKeep) ==="

if (-not (Test-Path (Join-Path $RepoRoot ".git"))) {
  Write-Log "ERROR: not a git repo: $RepoRoot"
  @{ ok = $false; error = "TOOLANDO_ROOT is not a git repository: $RepoRoot" } | ConvertTo-Json -Compress
  exit 1
}

if (-not (Test-Path $ConverterDir)) {
  Write-Log "ERROR: converter dir missing: $ConverterDir"
  @{ ok = $false; error = "Missing services/doc-converter under $RepoRoot" } | ConvertTo-Json -Compress
  exit 1
}

$hadEnv = Test-Path $EnvFile
if ($hadEnv) {
  Copy-Item -Force $EnvFile $EnvBackup
  Write-Log "Stashed live .env"
}

$backupPath = $null

try {
  $backupPath = New-RepoBackup -Source $RepoRoot -DestRoot $BackupRoot
  Remove-OldBackups -DestRoot $BackupRoot -Keep $BackupKeep

  Push-Location $RepoRoot

  # Avoid "dubious ownership" on network / multi-user Windows paths
  $git = { param([Parameter(ValueFromRemainingArguments = $true)]$Args) & $GitExe -c "safe.directory=*" @Args }

  & $git fetch origin $Branch 2>&1 | ForEach-Object { Write-Log $_ }
  if ($LASTEXITCODE -ne 0) { throw "git fetch failed ($LASTEXITCODE)" }

  & $git reset --hard "origin/$Branch" 2>&1 | ForEach-Object { Write-Log $_ }
  if ($LASTEXITCODE -ne 0) { throw "git reset --hard failed ($LASTEXITCODE)" }

  # Drop untracked junk that would drift from GitHub (keep backups/, logs/, local .env)
  & $git clean -fd -e backups -e logs -e "services/doc-converter/.env" 2>&1 | ForEach-Object { Write-Log $_ }

  $commit = (& $git rev-parse --short HEAD).Trim()
  Write-Log "Now at $commit"

  if ($hadEnv -and (Test-Path $EnvBackup)) {
    Copy-Item -Force $EnvBackup $EnvFile
    Write-Log "Restored .env"
  }

  Push-Location $ConverterDir
  try {
    npm install --omit=dev 2>&1 | ForEach-Object { Write-Log $_ }
    if ($LASTEXITCODE -ne 0) { throw "npm install failed ($LASTEXITCODE)" }
  }
  finally {
    Pop-Location
  }

  Write-Log "=== sync ok ($commit) backup=$backupPath ==="
  $syncMeta = @{
    ok        = $true
    commit    = $commit
    root      = $RepoRoot
    backup    = $backupPath
    restarted = $false
    at        = (Get-Date).ToUniversalTime().ToString("o")
  }
  ($syncMeta | ConvertTo-Json -Compress) | Set-Content -Path (Join-Path $LogDir "last-sync.json") -Encoding UTF8
  $syncMeta | ConvertTo-Json -Compress
  exit 0
}
catch {
  Write-Log "ERROR: $_"
  if ($hadEnv -and (Test-Path $EnvBackup)) {
    Copy-Item -Force $EnvBackup $EnvFile
    Write-Log "Restored .env after failure"
  }
  @{
    ok     = $false
    error  = "$_"
    backup = $backupPath
  } | ConvertTo-Json -Compress
  exit 1
}
finally {
  Pop-Location -ErrorAction SilentlyContinue
  if (Test-Path $EnvBackup) {
    Remove-Item -Force $EnvBackup -ErrorAction SilentlyContinue
  }
}
