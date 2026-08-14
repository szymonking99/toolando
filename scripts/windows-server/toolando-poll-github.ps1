# Detect GitHub changes for Toolando; backup + sync when remote is ahead.
# Installed by bootstrap / install-toolando-poll.ps1

$ErrorActionPreference = "Continue"
$RepoRoot = "F:\Toolando"
$Branch = "main"
$SyncScript = "F:\ops\toolando-sync-from-github.ps1"
$LogDir = "F:\logs"
$GitExe = if (Test-Path "C:\Program Files\Git\bin\git.exe") {
  "C:\Program Files\Git\bin\git.exe"
} else {
  "git"
}

function Write-Log([string]$Message) {
  $line = "[{0}] [poll] {1}" -f (Get-Date -Format "yyyy-MM-dd HH:mm:ss"), $Message
  New-Item -ItemType Directory -Force -Path $LogDir | Out-Null
  Add-Content -Path (Join-Path $LogDir "poll-sync.log") -Value $line -Encoding UTF8
  Write-Host $line
}

if (-not (Test-Path (Join-Path $RepoRoot ".git"))) {
  Write-Log "ERROR: not a git repo: $RepoRoot"
  exit 1
}

Push-Location $RepoRoot
try {
  # git writes progress to stderr - do not treat as terminating error
  $fetchOut = & $GitExe -c "safe.directory=*" fetch origin $Branch 2>&1
  $fetchCode = $LASTEXITCODE
  if ($fetchCode -ne 0) {
    Write-Log ("fetch failed ($fetchCode): " + ($fetchOut | Out-String).Trim())
    exit 1
  }

  $local = (& $GitExe -c "safe.directory=*" rev-parse HEAD 2>$null).Trim()
  $remote = (& $GitExe -c "safe.directory=*" rev-parse ("origin/" + $Branch) 2>$null).Trim()
}
finally {
  Pop-Location
}

if (-not $local -or -not $remote) {
  Write-Log "ERROR: could not resolve local/remote HEAD"
  exit 1
}

if ($local -eq $remote) {
  Write-Log ("No changes (at " + $local + ")")
  exit 0
}

Write-Log ("Remote ahead (" + $local + " -> " + $remote + ") - syncing")
if (-not (Test-Path $SyncScript)) {
  Write-Log "ERROR: missing sync script: $SyncScript"
  exit 1
}

& powershell.exe -NoProfile -ExecutionPolicy Bypass -File $SyncScript
$syncCode = $LASTEXITCODE
if ($syncCode -ne 0) {
  Write-Log ("sync failed exit=$syncCode")
  exit $syncCode
}
Write-Log "sync ok"
exit 0
