# Toolando: backup + git pull from GitHub + npm + pm2 restart
# Used by F:\ops\toolando-poll-github.ps1

param(
  [string]$RepoRoot = "F:\Toolando",
  [string]$Branch = "main",
  [string]$BackupRoot = "F:\backups",
  [string]$LogDir = "F:\logs",
  [string]$Pm2App = "toolando-converter",
  [int]$BackupKeep = 10
)

# Continue: native git writes progress to stderr and would abort under Stop
$ErrorActionPreference = "Continue"
$RepoRoot = $RepoRoot.TrimEnd('\', '/')
$LogFile = Join-Path $LogDir "toolando-sync.log"
$GitExe = if (Test-Path "C:\Program Files\Git\bin\git.exe") {
  "C:\Program Files\Git\bin\git.exe"
} else { "git" }

function Write-Log([string]$m) {
  $line = "[{0}] [toolando] {1}" -f (Get-Date -Format "yyyy-MM-dd HH:mm:ss"), $m
  New-Item -ItemType Directory -Force -Path $LogDir | Out-Null
  Add-Content -Path $LogFile -Value $line -Encoding UTF8
  Write-Host $line
}

function Invoke-GitLogged {
  param([Parameter(ValueFromRemainingArguments = $true)][string[]]$GitArgs)
  $out = & $GitExe -c "safe.directory=*" @GitArgs 2>&1
  $code = $LASTEXITCODE
  foreach ($line in @($out)) {
    if ($null -ne $line -and "$line".Trim() -ne "") { Write-Log "$line" }
  }
  return $code
}

Write-Log "=== sync start ==="
if (-not (Test-Path (Join-Path $RepoRoot ".git"))) {
  Write-Log "ERROR: Not a git repo: $RepoRoot"
  exit 1
}

$envFile = Join-Path $RepoRoot "services\doc-converter\.env"
$envBak = $null
if (Test-Path $envFile) {
  $envBak = Join-Path $env:TEMP "toolando-converter-env.bak"
  Copy-Item -Force $envFile $envBak
  Write-Log "Stashed .env"
}

New-Item -ItemType Directory -Force -Path $BackupRoot | Out-Null
Push-Location $RepoRoot
$short = (& $GitExe -c "safe.directory=*" rev-parse --short HEAD 2>$null)
if (-not $short) { $short = "nogit" }
Pop-Location

$stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$dest = Join-Path $BackupRoot ("toolando-{0}-{1}" -f $stamp, $short)
New-Item -ItemType Directory -Force -Path $dest | Out-Null
Write-Log "Backup -> $dest"

$robolog = Join-Path $env:TEMP "robocopy-toolando.log"
& robocopy $RepoRoot $dest /E /NFL /NDL /NJH /NJS /NP /R:1 /W:1 `
  /XD node_modules .next .git backups logs .vercel __pycache__ .venv venv `
  /XF *.log | Out-File $robolog -Encoding utf8
if ($LASTEXITCODE -ge 8) {
  Write-Log "ERROR: robocopy failed ($LASTEXITCODE)"
  exit 1
}
if ($envBak -and (Test-Path $envBak)) {
  $envDestDir = Join-Path $dest "services\doc-converter"
  New-Item -ItemType Directory -Force -Path $envDestDir | Out-Null
  Copy-Item -Force $envBak (Join-Path $envDestDir ".env")
}

$dirs = Get-ChildItem $BackupRoot -Directory -ErrorAction SilentlyContinue |
  Where-Object { $_.Name -like "toolando-*" } |
  Sort-Object Name -Descending
foreach ($d in ($dirs | Select-Object -Skip $BackupKeep)) {
  Write-Log "Prune $($d.FullName)"
  Remove-Item -Recurse -Force $d.FullName -ErrorAction SilentlyContinue
}

$commit = "unknown"
Push-Location $RepoRoot
try {
  if ((Invoke-GitLogged fetch origin $Branch) -ne 0) {
    Write-Log "ERROR: git fetch failed"
    exit 1
  }
  if ((Invoke-GitLogged reset --hard ("origin/" + $Branch)) -ne 0) {
    Write-Log "ERROR: git reset failed"
    exit 1
  }
  $null = Invoke-GitLogged clean -fd -e "services/doc-converter/.env"
  $commit = (& $GitExe -c "safe.directory=*" rev-parse --short HEAD 2>$null).Trim()
  Write-Log "Now at $commit"
}
finally {
  Pop-Location
}

if ($envBak -and (Test-Path $envBak)) {
  New-Item -ItemType Directory -Force -Path (Split-Path $envFile) | Out-Null
  Copy-Item -Force $envBak $envFile
  Remove-Item -Force $envBak -ErrorAction SilentlyContinue
  Write-Log "Restored .env"
}

$conv = Join-Path $RepoRoot "services\doc-converter"
if (Test-Path (Join-Path $conv "package.json")) {
  Push-Location $conv
  try {
    Write-Log "npm install --omit=dev"
    cmd /c "npm install --omit=dev" 2>&1 | ForEach-Object { Write-Log "$_" }
  }
  finally { Pop-Location }
}

$pm2cmd = Get-Command pm2 -ErrorAction SilentlyContinue
if ($pm2cmd) {
  Write-Log "pm2 restart $Pm2App"
  & pm2 restart $Pm2App 2>&1 | ForEach-Object { Write-Log "$_" }
}

Write-Log "=== sync ok ($commit) backup=$dest ==="
Write-Host "OK toolando sync: $commit"
exit 0
