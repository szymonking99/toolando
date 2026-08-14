# Rejestruje codzienny backup BadylTech MegaBot (FB / publikacja).
# NIE dotyczy doc-converter Toolando.
# Uruchom raz jako Administrator na Windows Server.

param(
  [string]$TaskName = "BadylTech-MegaBot-Backup",
  [string]$BotRoot = "F:\apps\badyltech-megabot",
  [string]$BackupTime = "03:00"
)

$ErrorActionPreference = "Stop"

$script = Join-Path $PSScriptRoot "backup-megabot.ps1"
if (-not (Test-Path $script)) {
  throw "Missing: $script"
}

# Skopiuj skrypt obok bota na serwerze (opcjonalnie — działa też z tego repo po sync Toolando)
$deployDir = Join-Path $BotRoot "_ops"
New-Item -ItemType Directory -Force -Path $deployDir | Out-Null
Copy-Item -Force $script (Join-Path $deployDir "backup-megabot.ps1")
$runScript = Join-Path $deployDir "backup-megabot.ps1"

$action = New-ScheduledTaskAction `
  -Execute "powershell.exe" `
  -Argument "-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File `"$runScript`" -BotRoot `"$BotRoot`"" `
  -WorkingDirectory $deployDir

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
  -Description "Daily backup of BadylTech MegaBot (FB posts / publishing) at $BotRoot" `
  -Force | Out-Null

Write-Host "OK: zadanie `$TaskName` codziennie o $BackupTime"
Write-Host "Backupuje: $BotRoot"
Write-Host "Skrypt:    $runScript"
Write-Host "Backupy:   F:\backups\megabot-YYYYMMDD-HHmmss\"
Write-Host "Log:       F:\logs\megabot-backup.log"
Write-Host ""
Write-Host "Test teraz:"
Write-Host "  powershell -File `"$runScript`" -BotRoot `"$BotRoot`""
