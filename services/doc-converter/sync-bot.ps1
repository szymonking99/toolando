# BadylTech MegaBot backup wrapper (FB / publikacja).
# Delegates to scripts/windows-server/backup-megabot.ps1
# Kept here so optional /hooks/backup/bot still works after Toolando sync.

param(
  [string]$RepoRoot = $env:BOT_ROOT,
  [int]$BackupKeep = 0
)

if (-not $RepoRoot -or $RepoRoot.Trim() -eq "") {
  $RepoRoot = if ($env:MEGABOT_ROOT) { $env:MEGABOT_ROOT.Trim() } else { "F:\apps\badyltech-megabot" }
}

$target = Join-Path $PSScriptRoot "..\..\scripts\windows-server\backup-megabot.ps1"
$target = [IO.Path]::GetFullPath($target)

if (-not (Test-Path $target)) {
  Write-Error "Missing MegaBot backup script: $target"
  @{ ok = $false; id = "megabot"; error = "Missing backup-megabot.ps1" } | ConvertTo-Json -Compress
  exit 1
}

$argsList = @("-NoProfile", "-ExecutionPolicy", "Bypass", "-File", $target, "-BotRoot", $RepoRoot)
if ($BackupKeep -gt 0) {
  $argsList += @("-BackupKeep", "$BackupKeep")
}

& powershell.exe @argsList
exit $LASTEXITCODE
