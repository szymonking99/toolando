# Jeden skrypt do wklejenia/uruchomienia NA SERWERZE (nie wymaga F:\Toolando\scripts\...).
# Tworzy backup MegaBota + zadanie Task Scheduler.
# Uruchom jako Administrator:
#   powershell -ExecutionPolicy Bypass -File .\bootstrap-megabot-backup-on-server.ps1

$ErrorActionPreference = "Stop"

$BotRoot = "F:\apps\badyltech-megabot"
$OpsDir = Join-Path $BotRoot "_ops"
$BackupScript = Join-Path $OpsDir "backup-megabot.ps1"
$TaskName = "BadylTech-MegaBot-Backup"
$BackupTime = "03:00"

if (-not (Test-Path $BotRoot)) {
  throw "Brak folderu MegaBota: $BotRoot"
}

New-Item -ItemType Directory -Force -Path $OpsDir | Out-Null
New-Item -ItemType Directory -Force -Path "F:\backups" | Out-Null
New-Item -ItemType Directory -Force -Path "F:\logs" | Out-Null

@'
param(
  [string]$BotRoot = "F:\apps\badyltech-megabot",
  [int]$BackupKeep = 10
)

$ErrorActionPreference = "Stop"
$BotRoot = $BotRoot.TrimEnd('\', '/')
$LogDir = "F:\logs"
$LogFile = Join-Path $LogDir "megabot-backup.log"
$BackupRoot = "F:\backups"

function Write-Log([string]$Message) {
  $line = "[{0}] [megabot] {1}" -f (Get-Date -Format "yyyy-MM-dd HH:mm:ss"), $Message
  New-Item -ItemType Directory -Force -Path $LogDir | Out-Null
  Add-Content -Path $LogFile -Value $line -Encoding UTF8
  Write-Host $line
}

Write-Log "=== MegaBot backup start (root=$BotRoot keep=$BackupKeep) ==="

if (-not (Test-Path $BotRoot)) {
  throw "Folder not found: $BotRoot"
}

New-Item -ItemType Directory -Force -Path $BackupRoot | Out-Null
$stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$dest = Join-Path $BackupRoot ("megabot-{0}" -f $stamp)
New-Item -ItemType Directory -Force -Path $dest | Out-Null
Write-Log "Backup -> $dest"

$robolog = Join-Path $env:TEMP "robocopy-backup-megabot.log"
& robocopy $BotRoot $dest /E /NFL /NDL /NJH /NJS /NP /R:1 /W:1 `
  /XD __pycache__ .venv venv backups logs .git node_modules _ops `
  /XF *.log *.pyc | Out-File -FilePath $robolog -Encoding utf8

if ($LASTEXITCODE -ge 8) {
  throw "robocopy failed (exit $LASTEXITCODE). See $robolog"
}
Write-Log "robocopy exit=$LASTEXITCODE"

$envSrc = Join-Path $BotRoot ".env"
if (Test-Path $envSrc) {
  Copy-Item -Force $envSrc (Join-Path $dest ".env")
  Write-Log "Included .env"
}

$dirs = Get-ChildItem -Path $BackupRoot -Directory -ErrorAction SilentlyContinue |
  Where-Object { $_.Name -like "megabot-*" } |
  Sort-Object Name -Descending
foreach ($d in ($dirs | Select-Object -Skip $BackupKeep)) {
  Write-Log "Prune $($d.FullName)"
  Remove-Item -Recurse -Force $d.FullName -ErrorAction SilentlyContinue
}

Write-Log "=== MegaBot backup ok ==="
Write-Host "OK backup: $dest"
'@ | Set-Content -Path $BackupScript -Encoding UTF8

Write-Host "Zapisano: $BackupScript"

$action = New-ScheduledTaskAction `
  -Execute "powershell.exe" `
  -Argument "-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File `"$BackupScript`" -BotRoot `"$BotRoot`"" `
  -WorkingDirectory $OpsDir

$trigger = New-ScheduledTaskTrigger -Daily -At $BackupTime

$settings = New-ScheduledTaskSettingsSet `
  -AllowStartIfOnBatteries `
  -DontStopIfGoingOnBatteries `
  -StartWhenAvailable `
  -MultipleInstances IgnoreNew `
  -ExecutionTimeLimit (New-TimeSpan -Hours 2)

Register-ScheduledTask `
  -TaskName $TaskName `
  -Action $action `
  -Trigger $trigger `
  -Settings $settings `
  -Description "Daily backup of BadylTech MegaBot (FB) at $BotRoot" `
  -Force | Out-Null

Write-Host "Zarejestrowano zadanie: $TaskName (codziennie $BackupTime)"
Write-Host "Testuję backup teraz..."
& powershell.exe -NoProfile -ExecutionPolicy Bypass -File $BackupScript -BotRoot $BotRoot
if ($LASTEXITCODE -ne 0) {
  throw "Test backup failed (exit $LASTEXITCODE)"
}

Write-Host ""
Write-Host "Gotowe."
Write-Host "  Folder:  $BotRoot"
Write-Host "  Skrypt:  $BackupScript"
Write-Host "  Backupy: F:\backups\megabot-*"
Write-Host "  Log:     F:\logs\megabot-backup.log"
Write-Host "  Zadanie: $TaskName"
