# Sync Toolando from GitHub + backup local bot (no GitHub for bot).
# Outputs JSON (last line) for /hooks/sync/all.

$ErrorActionPreference = "Stop"
$results = @()

function Invoke-SyncScript([string]$ScriptPath) {
  $output = & powershell.exe -NoProfile -ExecutionPolicy Bypass -File $ScriptPath 2>&1 |
    ForEach-Object { "$_" }

  $jsonLine = $output | Where-Object { $_.Trim().StartsWith("{") } | Select-Object -Last 1
  $parsed = $null
  if ($jsonLine) {
    try { $parsed = $jsonLine | ConvertFrom-Json } catch { $parsed = $null }
  }

  if ($LASTEXITCODE -ne 0 -or -not $parsed -or -not $parsed.ok) {
    $msg = if ($parsed.error) { $parsed.error } else { ($output -join "`n").Trim() }
    if (-not $msg) { $msg = "Failed: $ScriptPath" }
    throw $msg
  }

  return $parsed
}

try {
  $toolandoRoot = if ($env:TOOLANDO_ROOT) { $env:TOOLANDO_ROOT.Trim() } else { "F:\Toolando" }
  $botRoot = if ($env:BOT_ROOT) { $env:BOT_ROOT.Trim() } else { "F:\apps\badyltech-megabot" }

  if (Test-Path (Join-Path $toolandoRoot ".git")) {
    $results += Invoke-SyncScript (Join-Path $PSScriptRoot "sync-from-git.ps1")
  }
  else {
    Write-Warning "Skipping toolando — not a git repo: $toolandoRoot"
  }

  # Bot: local backup only (no GitHub)
  if ($env:BOT_BACKUP_ENABLED -ne "0" -and (Test-Path $botRoot)) {
    $results += Invoke-SyncScript (Join-Path $PSScriptRoot "sync-bot.ps1")
  }
  elseif ($env:BOT_BACKUP_ENABLED -ne "0") {
    Write-Warning "Skipping bot backup — folder missing: $botRoot"
  }

  @{
    ok      = $true
    synced  = @($results | ForEach-Object { $_.id })
    results = $results
    at      = (Get-Date).ToUniversalTime().ToString("o")
  } | ConvertTo-Json -Compress -Depth 5
  exit 0
}
catch {
  @{
    ok      = $false
    error   = "$_"
    results = $results
  } | ConvertTo-Json -Compress -Depth 5
  exit 1
}
