# Generic GitHub sync with snapshot backup for any repo on the Windows server.
# 1) robocopy backup (minus heavy dirs)
# 2) git fetch + reset --hard origin/<branch>
# 3) optional post-sync shell commands (npm/pip/restart)
# Returns JSON on stdout (last line) for Node /hooks/sync.

param(
  [Parameter(Mandatory = $true)][string]$RepoRoot,
  [string]$BackupPrefix = "repo",
  [string]$Branch = "main",
  [int]$BackupKeep = 0,
  [string[]]$EnvFiles = @(),
  [string[]]$PostSyncCommands = @(),
  [string[]]$GitCleanExclude = @()
)

$ErrorActionPreference = "Stop"

if ($BackupKeep -le 0) {
  $parsed = 0
  if ([int]::TryParse($env:SYNC_BACKUP_KEEP, [ref]$parsed) -and $parsed -gt 0) {
    $BackupKeep = $parsed
  }
  else {
    $BackupKeep = 10
  }
}

$RepoRoot = $RepoRoot.TrimEnd('\', '/')
$LogDir = if ($env:SYNC_LOG_DIR -and $env:SYNC_LOG_DIR.Trim()) {
  $env:SYNC_LOG_DIR.Trim()
}
else {
  Join-Path (Split-Path $RepoRoot -Parent) "logs"
}
$LogFile = Join-Path $LogDir "sync.log"
$BackupRoot = if ($env:SYNC_BACKUP_DIR -and $env:SYNC_BACKUP_DIR.Trim()) {
  $env:SYNC_BACKUP_DIR.Trim()
}
else {
  Join-Path (Split-Path $RepoRoot -Parent) "backups"
}

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
  $line = "[{0}] [{1}] {2}" -f (Get-Date -Format "yyyy-MM-dd HH:mm:ss"), $BackupPrefix, $Message
  New-Item -ItemType Directory -Force -Path $LogDir | Out-Null
  Add-Content -Path $LogFile -Value $line -Encoding UTF8
}

function New-RepoBackup {
  param([string]$Source, [string]$DestRoot, [string]$Prefix)

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

  $dest = Join-Path $DestRoot ("{0}-{1}-{2}" -f $Prefix, $stamp, $short)
  New-Item -ItemType Directory -Force -Path $dest | Out-Null
  Write-Log "Backup -> $dest"

  $robolog = Join-Path $env:TEMP ("robocopy-backup-{0}.log" -f $Prefix)
  $args = @(
    $Source, $dest, "/E", "/NFL", "/NDL", "/NJH", "/NJS", "/NP", "/R:1", "/W:1",
    "/XD", "node_modules", ".next", ".git", "backups", "logs", ".vercel", ".snowflake", "__pycache__", ".venv", "venv",
    "/XF", "*.log"
  )
  & robocopy @args | Out-File -FilePath $robolog -Encoding utf8
  $code = $LASTEXITCODE
  if ($code -ge 8) {
    throw "robocopy backup failed (exit $code). See $robolog"
  }
  Write-Log "Backup robocopy exit=$code"

  foreach ($rel in $EnvFiles) {
    $envSrc = if ([System.IO.Path]::IsPathRooted($rel)) { $rel } else { Join-Path $Source $rel }
    if (-not (Test-Path $envSrc)) { continue }
    $envDest = Join-Path $dest $rel
    $envDestDir = Split-Path $envDest -Parent
    New-Item -ItemType Directory -Force -Path $envDestDir | Out-Null
    Copy-Item -Force $envSrc $envDest
    Write-Log "Backup included $rel"
  }

  return $dest
}

function Remove-OldBackups {
  param([string]$DestRoot, [string]$Prefix, [int]$Keep)

  if (-not (Test-Path $DestRoot)) { return }
  $dirs = Get-ChildItem -Path $DestRoot -Directory -ErrorAction SilentlyContinue |
    Where-Object { $_.Name -like "$Prefix-*" } |
    Sort-Object Name -Descending

  if ($dirs.Count -le $Keep) { return }

  foreach ($d in ($dirs | Select-Object -Skip $Keep)) {
    Write-Log "Prune old backup $($d.FullName)"
    Remove-Item -Recurse -Force $d.FullName -ErrorAction SilentlyContinue
  }
}

Write-Log "=== sync start (root=$RepoRoot branch=$Branch keep=$BackupKeep) ==="

if (-not (Test-Path (Join-Path $RepoRoot ".git"))) {
  Write-Log "ERROR: not a git repo: $RepoRoot"
  @{ ok = $false; id = $BackupPrefix; error = "Not a git repository: $RepoRoot" } | ConvertTo-Json -Compress
  exit 1
}

$envBackups = @{}
foreach ($rel in $EnvFiles) {
  $full = if ([System.IO.Path]::IsPathRooted($rel)) { $rel } else { Join-Path $RepoRoot $rel }
  if (Test-Path $full) {
    $bak = Join-Path $env:TEMP ("sync-env-{0}-{1}.bak" -f $BackupPrefix, ([IO.Path]::GetFileName($full)))
    Copy-Item -Force $full $bak
    $envBackups[$full] = $bak
    Write-Log "Stashed $rel"
  }
}

$backupPath = $null

try {
  $backupPath = New-RepoBackup -Source $RepoRoot -DestRoot $BackupRoot -Prefix $BackupPrefix
  Remove-OldBackups -DestRoot $BackupRoot -Prefix $BackupPrefix -Keep $BackupKeep

  Push-Location $RepoRoot
  $git = { param([Parameter(ValueFromRemainingArguments = $true)]$Args) & $GitExe -c "safe.directory=*" @Args }

  & $git fetch origin $Branch 2>&1 | ForEach-Object { Write-Log $_ }
  if ($LASTEXITCODE -ne 0) { throw "git fetch failed ($LASTEXITCODE)" }

  & $git reset --hard "origin/$Branch" 2>&1 | ForEach-Object { Write-Log $_ }
  if ($LASTEXITCODE -ne 0) { throw "git reset --hard failed ($LASTEXITCODE)" }

  $cleanArgs = @("clean", "-fd")
  foreach ($ex in $GitCleanExclude) {
    $cleanArgs += "-e"
    $cleanArgs += $ex
  }
  & $git @cleanArgs 2>&1 | ForEach-Object { Write-Log $_ }

  $commit = (& $git rev-parse --short HEAD).Trim()
  Write-Log "Now at $commit"

  foreach ($full in $envBackups.Keys) {
    Copy-Item -Force $envBackups[$full] $full
    Write-Log "Restored $(Split-Path $full -Leaf)"
  }

  foreach ($cmdLine in $PostSyncCommands) {
    if (-not $cmdLine -or $cmdLine.Trim() -eq "") { continue }
    Write-Log "Post-sync: $cmdLine"
    Push-Location $RepoRoot
    try {
      cmd.exe /c $cmdLine 2>&1 | ForEach-Object { Write-Log $_ }
      if ($LASTEXITCODE -ne 0) { throw "Post-sync command failed ($LASTEXITCODE): $cmdLine" }
    }
    finally {
      Pop-Location
    }
  }

  Write-Log "=== sync ok ($commit) backup=$backupPath ==="
  @{
    ok     = $true
    id     = $BackupPrefix
    commit = $commit
    root   = $RepoRoot
    backup = $backupPath
    at     = (Get-Date).ToUniversalTime().ToString("o")
  } | ConvertTo-Json -Compress
  exit 0
}
catch {
  Write-Log "ERROR: $_"
  foreach ($full in $envBackups.Keys) {
    if (Test-Path $envBackups[$full]) {
      Copy-Item -Force $envBackups[$full] $full
      Write-Log "Restored $(Split-Path $full -Leaf) after failure"
    }
  }
  @{
    ok     = $false
    id     = $BackupPrefix
    error  = "$_"
    backup = $backupPath
  } | ConvertTo-Json -Compress
  exit 1
}
finally {
  Pop-Location -ErrorAction SilentlyContinue
  foreach ($bak in $envBackups.Values) {
    if (Test-Path $bak) {
      Remove-Item -Force $bak -ErrorAction SilentlyContinue
    }
  }
}
