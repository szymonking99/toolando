# Poll GitHub for Toolando updates (bot has no GitHub — backed up separately).
# Run via Task Scheduler every 5–10 min (install-sync-scheduler.ps1).

$ErrorActionPreference = "Stop"

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
  $logDir = if ($env:SYNC_LOG_DIR) { $env:SYNC_LOG_DIR.Trim() } else { "F:\logs" }
  New-Item -ItemType Directory -Force -Path $logDir | Out-Null
  $line = "[{0}] [poll] {1}" -f (Get-Date -Format "yyyy-MM-dd HH:mm:ss"), $Message
  Add-Content -Path (Join-Path $logDir "poll-sync.log") -Value $line -Encoding UTF8
}

function Test-RemoteAhead {
  param([string]$RepoRoot, [string]$Branch)

  if (-not (Test-Path (Join-Path $RepoRoot ".git"))) {
    return $false
  }

  Push-Location $RepoRoot
  try {
    & $GitExe -c "safe.directory=*" fetch origin $Branch 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) { return $false }

    $local = (& $GitExe -c "safe.directory=*" rev-parse HEAD).Trim()
    $remote = (& $GitExe -c "safe.directory=*" rev-parse "origin/$Branch").Trim()
    return ($local -ne $remote)
  }
  finally {
    Pop-Location
  }
}

$toolandoRoot = if ($env:TOOLANDO_ROOT) { $env:TOOLANDO_ROOT.Trim() } else { "F:\Toolando" }
$branch = if ($env:SYNC_BRANCH) { $env:SYNC_BRANCH.Trim() } else { "main" }
$exitCode = 0

try {
  if (Test-RemoteAhead -RepoRoot $toolandoRoot -Branch $branch) {
    Write-Log "Toolando remote ahead — syncing"
    $script = Join-Path $PSScriptRoot "sync-from-git.ps1"
    & powershell.exe -NoProfile -ExecutionPolicy Bypass -File $script
    if ($LASTEXITCODE -ne 0) {
      $exitCode = 1
    }
    else {
      $pm2 = $env:PM2_APP_NAME
      if ($pm2) {
        Write-Log "Restarting PM2 app $pm2"
        & pm2 restart $pm2 2>&1 | ForEach-Object { Write-Log $_ }
      }
      Write-Log "Synced: toolando"
    }
  }
  else {
    Write-Log "No Toolando changes on remote"
  }
}
catch {
  Write-Log "ERROR: $_"
  exit 1
}

exit $exitCode
