# Register Task Scheduler: poll GitHub for Toolando ONLY.
# MegaBot (FB) backup = osobny skrypt: scripts/windows-server/install-megabot-backup.ps1

param(
  [string]$PollTaskName = "Toolando-GitHub-PollSync",
  [int]$IntervalMinutes = 5
)

$ErrorActionPreference = "Stop"
$scriptDir = $PSScriptRoot
$pollScript = Join-Path $scriptDir "poll-github-sync.ps1"

if (-not (Test-Path $pollScript)) {
  throw "Missing poll script: $pollScript"
}

$action = New-ScheduledTaskAction `
  -Execute "powershell.exe" `
  -Argument "-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File `"$pollScript`"" `
  -WorkingDirectory $scriptDir

$trigger = New-ScheduledTaskTrigger -Once -At (Get-Date).AddMinutes(1) `
  -RepetitionInterval (New-TimeSpan -Minutes $IntervalMinutes) `
  -RepetitionDuration (New-TimeSpan -Days 3650)

$settings = New-ScheduledTaskSettingsSet `
  -AllowStartIfOnBatteries `
  -DontStopIfGoingOnBatteries `
  -StartWhenAvailable `
  -MultipleInstances IgnoreNew `
  -ExecutionTimeLimit (New-TimeSpan -Hours 1)

Register-ScheduledTask `
  -TaskName $PollTaskName `
  -Action $action `
  -Trigger $trigger `
  -Settings $settings `
  -Description "Poll GitHub for Toolando updates; backup + sync when remote is ahead." `
  -Force | Out-Null

Write-Host "Registered: $PollTaskName (every $IntervalMinutes min) — tylko Toolando"
Write-Host ""
Write-Host "Backup MegaBota (FB) — osobno:"
Write-Host "  powershell -File ..\..\scripts\windows-server\install-megabot-backup.ps1"
