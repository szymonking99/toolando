# Register Toolando GitHub poll task (every 5 minutes).
# Run as Administrator on the server:
#   powershell -ExecutionPolicy Bypass -File F:\ops\install-toolando-poll.ps1

$ErrorActionPreference = "Stop"

$OpsRoot = "F:\ops"
$PollScript = Join-Path $OpsRoot "toolando-poll-github.ps1"
$TaskName = "Toolando-GitHub-PollSync"

if (-not (Test-Path $PollScript)) {
  throw "Missing: $PollScript - copy toolando-poll-github.ps1 to F:\ops\ first"
}

$action = New-ScheduledTaskAction `
  -Execute "powershell.exe" `
  -Argument "-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File `"$PollScript`"" `
  -WorkingDirectory $OpsRoot

$trigger = New-ScheduledTaskTrigger -Once -At (Get-Date).AddMinutes(1) `
  -RepetitionInterval (New-TimeSpan -Minutes 5) `
  -RepetitionDuration (New-TimeSpan -Days 3650)

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
  -Description "Detect GitHub changes for Toolando; backup + sync when remote is ahead" `
  -Force | Out-Null

Write-Host "Registered: $TaskName"
Get-ScheduledTask -TaskName $TaskName | Format-Table TaskName, State
Write-Host "Test now:"
& powershell.exe -NoProfile -ExecutionPolicy Bypass -File $PollScript
Write-Host "Exit: $LASTEXITCODE"
