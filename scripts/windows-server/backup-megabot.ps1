# BadylTech MegaBot — lokalna kopia zapasowa (FB / publikacja).
# Projekt: F:\apps\badyltech-megabot  (NIE jest to doc-converter Toolando)
# Nie wymaga GitHuba — bot żyje tylko na serwerze.
#
# Uruchomienie:
#   powershell -File backup-megabot.ps1
# Albo Task Scheduler (install-megabot-backup.ps1) — codziennie 03:00

param(
  [string]$BotRoot = $env:MEGABOT_ROOT,
  [int]$BackupKeep = 0
)

$ErrorActionPreference = "Stop"

if (-not $BotRoot -or $BotRoot.Trim() -eq "") {
  $BotRoot = "F:\apps\badyltech-megabot"
}
$BotRoot = $BotRoot.TrimEnd('\', '/')

if ($BackupKeep -le 0) {
  $parsed = 0
  if ([int]::TryParse($env:SYNC_BACKUP_KEEP, [ref]$parsed) -and $parsed -gt 0) {
    $BackupKeep = $parsed
  }
  elseif ([int]::TryParse($env:MEGABOT_BACKUP_KEEP, [ref]$parsed) -and $parsed -gt 0) {
    $BackupKeep = $parsed
  }
  else {
    $BackupKeep = 10
  }
}

$LogDir = if ($env:SYNC_LOG_DIR -and $env:SYNC_LOG_DIR.Trim()) {
  $env:SYNC_LOG_DIR.Trim()
}
else {
  "F:\logs"
}
$LogFile = Join-Path $LogDir "megabot-backup.log"
$BackupRoot = if ($env:SYNC_BACKUP_DIR -and $env:SYNC_BACKUP_DIR.Trim()) {
  $env:SYNC_BACKUP_DIR.Trim()
}
elseif ($env:MEGABOT_BACKUP_DIR -and $env:MEGABOT_BACKUP_DIR.Trim()) {
  $env:MEGABOT_BACKUP_DIR.Trim()
}
else {
  "F:\backups"
}

function Write-Log([string]$Message) {
  $line = "[{0}] [megabot] {1}" -f (Get-Date -Format "yyyy-MM-dd HH:mm:ss"), $Message
  New-Item -ItemType Directory -Force -Path $LogDir | Out-Null
  Add-Content -Path $LogFile -Value $line -Encoding UTF8
  Write-Host $line
}

function Remove-OldBackups {
  param([string]$DestRoot, [int]$Keep)

  if (-not (Test-Path $DestRoot)) { return }
  $dirs = Get-ChildItem -Path $DestRoot -Directory -ErrorAction SilentlyContinue |
    Where-Object { $_.Name -like "megabot-*" } |
    Sort-Object Name -Descending

  if ($dirs.Count -le $Keep) { return }

  foreach ($d in ($dirs | Select-Object -Skip $Keep)) {
    Write-Log "Prune old backup $($d.FullName)"
    Remove-Item -Recurse -Force $d.FullName -ErrorAction SilentlyContinue
  }
}

Write-Log "=== MegaBot backup start (root=$BotRoot keep=$BackupKeep) ==="

if (-not (Test-Path $BotRoot)) {
  Write-Log "ERROR: folder missing: $BotRoot"
  @{ ok = $false; id = "megabot"; error = "Folder not found: $BotRoot" } | ConvertTo-Json -Compress
  exit 1
}

try {
  New-Item -ItemType Directory -Force -Path $BackupRoot | Out-Null
  $stamp = Get-Date -Format "yyyyMMdd-HHmmss"
  $dest = Join-Path $BackupRoot ("megabot-{0}" -f $stamp)
  New-Item -ItemType Directory -Force -Path $dest | Out-Null
  Write-Log "Backup -> $dest"

  $robolog = Join-Path $env:TEMP "robocopy-backup-megabot.log"
  $roboArgs = @(
    $BotRoot, $dest, "/E", "/NFL", "/NDL", "/NJH", "/NJS", "/NP", "/R:1", "/W:1",
    "/XD", "__pycache__", ".venv", "venv", "backups", "logs", ".git", "node_modules",
    "/XF", "*.log", "*.pyc"
  )
  & robocopy @roboArgs | Out-File -FilePath $robolog -Encoding utf8
  $code = $LASTEXITCODE
  if ($code -ge 8) {
    throw "robocopy failed (exit $code). See $robolog"
  }
  Write-Log "robocopy exit=$code"

  $envSrc = Join-Path $BotRoot ".env"
  if (Test-Path $envSrc) {
    Copy-Item -Force $envSrc (Join-Path $dest ".env")
    Write-Log "Included .env"
  }

  Remove-OldBackups -DestRoot $BackupRoot -Keep $BackupKeep

  Write-Log "=== MegaBot backup ok ==="
  @{
    ok     = $true
    id     = "megabot"
    mode   = "backup-only"
    root   = $BotRoot
    backup = $dest
    at     = (Get-Date).ToUniversalTime().ToString("o")
  } | ConvertTo-Json -Compress
  exit 0
}
catch {
  Write-Log "ERROR: $_"
  @{ ok = $false; id = "megabot"; error = "$_" } | ConvertTo-Json -Compress
  exit 1
}
