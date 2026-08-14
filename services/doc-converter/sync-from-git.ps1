# Toolando repo sync — wrapper around sync-repo.ps1 (backward compatible).

param(
  [string]$RepoRoot = $env:TOOLANDO_ROOT,
  [string]$Branch = "main",
  [int]$BackupKeep = 0
)

if (-not $RepoRoot -or $RepoRoot.Trim() -eq "") {
  $RepoRoot = "F:\Toolando"
}

$converterDir = Join-Path $RepoRoot "services\doc-converter"
$postSync = @("cd /d `"$converterDir`" && npm install --omit=dev")

& "$PSScriptRoot\sync-repo.ps1" `
  -RepoRoot $RepoRoot.TrimEnd('\', '/') `
  -BackupPrefix "toolando" `
  -Branch $Branch `
  -BackupKeep $BackupKeep `
  -EnvFiles @("services\doc-converter\.env") `
  -PostSyncCommands $postSync `
  -GitCleanExclude @("backups", "logs", "services/doc-converter/.env")

exit $LASTEXITCODE
