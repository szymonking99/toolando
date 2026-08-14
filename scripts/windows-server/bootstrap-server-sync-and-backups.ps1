# =============================================================================
# Bootstrap Windows Server: Toolando (GitHub sync + backup) + MegaBot (backup)
# =============================================================================
# Run as Administrator on the server:
#   powershell -ExecutionPolicy Bypass -File F:\bootstrap-server-sync-and-backups.ps1
#
# 1) Toolando: every 5 min detect GitHub changes -> backup -> git pull -> PM2 restart
# 2) MegaBot: daily local backup only (no GitHub = no sync)
# =============================================================================

$ErrorActionPreference = "Stop"

$ToolandoRoot = "F:\Toolando"
$MegaBotRoot  = "F:\apps\badyltech-megabot"
$OpsRoot      = "F:\ops"
$BackupRoot   = "F:\backups"
$LogDir       = "F:\logs"
$Branch       = "main"
$Pm2App       = "toolando-converter"

Write-Host "=== Bootstrap sync + backups ==="

if (-not (Test-Path (Join-Path $ToolandoRoot ".git"))) {
  throw "F:\Toolando is NOT a git clone. Run: git clone <repo-url> F:\Toolando and restore .env"
}
if (-not (Test-Path $MegaBotRoot)) {
  throw "Missing MegaBot folder: $MegaBotRoot"
}

$gitCmd = Get-Command git -ErrorAction SilentlyContinue
$git = if ($gitCmd) { $gitCmd.Source } else { $null }
if (-not $git) {
  if (Test-Path "C:\Program Files\Git\bin\git.exe") {
    $git = "C:\Program Files\Git\bin\git.exe"
  } else {
    throw "Git not found. Install Git for Windows."
  }
}

New-Item -ItemType Directory -Force -Path $OpsRoot, $BackupRoot, $LogDir | Out-Null

# -----------------------------------------------------------------------------
# 1) Toolando sync script
# -----------------------------------------------------------------------------
$toolandoSync = Join-Path $OpsRoot "toolando-sync-from-github.ps1"
$toolandoSyncBody = @'
param(
  [string]$RepoRoot = "F:\Toolando",
  [string]$Branch = "main",
  [string]$BackupRoot = "F:\backups",
  [string]$LogDir = "F:\logs",
  [string]$Pm2App = "toolando-converter",
  [int]$BackupKeep = 10
)

$ErrorActionPreference = "Stop"
$RepoRoot = $RepoRoot.TrimEnd('\', '/')
$LogFile = Join-Path $LogDir "toolando-sync.log"
$GitExe = if (Test-Path "C:\Program Files\Git\bin\git.exe") {
  "C:\Program Files\Git\bin\git.exe"
} else { "git" }

function Write-Log([string]$m) {
  $line = "[{0}] [toolando] {1}" -f (Get-Date -Format "yyyy-MM-dd HH:mm:ss"), $m
  New-Item -ItemType Directory -Force -Path $LogDir | Out-Null
  Add-Content -Path $LogFile -Value $line -Encoding UTF8
  Write-Host $line
}

Write-Log "=== sync start ==="
if (-not (Test-Path (Join-Path $RepoRoot ".git"))) {
  throw "Not a git repo: $RepoRoot"
}

$envFile = Join-Path $RepoRoot "services\doc-converter\.env"
$envBak = $null
if (Test-Path $envFile) {
  $envBak = Join-Path $env:TEMP "toolando-converter-env.bak"
  Copy-Item -Force $envFile $envBak
  Write-Log "Stashed .env"
}

New-Item -ItemType Directory -Force -Path $BackupRoot | Out-Null
Push-Location $RepoRoot
$short = (& $GitExe -c "safe.directory=*" rev-parse --short HEAD 2>$null)
if (-not $short) { $short = "nogit" }
Pop-Location
$stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$dest = Join-Path $BackupRoot ("toolando-{0}-{1}" -f $stamp, $short)
New-Item -ItemType Directory -Force -Path $dest | Out-Null
Write-Log "Backup -> $dest"
$robolog = Join-Path $env:TEMP "robocopy-toolando.log"
& robocopy $RepoRoot $dest /E /NFL /NDL /NJH /NJS /NP /R:1 /W:1 `
  /XD node_modules .next .git backups logs .vercel __pycache__ .venv venv `
  /XF *.log | Out-File $robolog -Encoding utf8
if ($LASTEXITCODE -ge 8) { throw "robocopy failed ($LASTEXITCODE)" }
if ($envBak -and (Test-Path $envBak)) {
  $envDestDir = Join-Path $dest "services\doc-converter"
  New-Item -ItemType Directory -Force -Path $envDestDir | Out-Null
  Copy-Item -Force $envBak (Join-Path $envDestDir ".env")
}

$dirs = Get-ChildItem $BackupRoot -Directory | Where-Object { $_.Name -like "toolando-*" } | Sort-Object Name -Descending
foreach ($d in ($dirs | Select-Object -Skip $BackupKeep)) {
  Write-Log "Prune $($d.FullName)"
  Remove-Item -Recurse -Force $d.FullName -ErrorAction SilentlyContinue
}

$commit = "unknown"
Push-Location $RepoRoot
try {
  & $GitExe -c "safe.directory=*" fetch origin $Branch 2>&1 | ForEach-Object { Write-Log "$_" }
  if ($LASTEXITCODE -ne 0) { throw "git fetch failed" }
  & $GitExe -c "safe.directory=*" reset --hard "origin/$Branch" 2>&1 | ForEach-Object { Write-Log "$_" }
  if ($LASTEXITCODE -ne 0) { throw "git reset failed" }
  & $GitExe -c "safe.directory=*" clean -fd -e "services/doc-converter/.env" 2>&1 | ForEach-Object { Write-Log "$_" }
  $commit = (& $GitExe -c "safe.directory=*" rev-parse --short HEAD).Trim()
  Write-Log "Now at $commit"
}
finally { Pop-Location }

if ($envBak -and (Test-Path $envBak)) {
  New-Item -ItemType Directory -Force -Path (Split-Path $envFile) | Out-Null
  Copy-Item -Force $envBak $envFile
  Remove-Item -Force $envBak -ErrorAction SilentlyContinue
  Write-Log "Restored .env"
}

$conv = Join-Path $RepoRoot "services\doc-converter"
if (Test-Path (Join-Path $conv "package.json")) {
  Push-Location $conv
  try {
    Write-Log "npm install --omit=dev"
    cmd /c "npm install --omit=dev" 2>&1 | ForEach-Object { Write-Log "$_" }
  }
  finally { Pop-Location }
}

$pm2cmd = Get-Command pm2 -ErrorAction SilentlyContinue
if ($pm2cmd) {
  Write-Log "pm2 restart $Pm2App"
  & pm2 restart $Pm2App 2>&1 | ForEach-Object { Write-Log "$_" }
}

Write-Log "=== sync ok ($commit) backup=$dest ==="
Write-Host "OK toolando sync: $commit"
'@
[System.IO.File]::WriteAllText($toolandoSync, $toolandoSyncBody, [System.Text.UTF8Encoding]::new($false))
Write-Host "Saved: $toolandoSync"

# -----------------------------------------------------------------------------
# 2) Toolando poll script (ASCII, no nested escaping tricks)
# -----------------------------------------------------------------------------
$toolandoPoll = Join-Path $OpsRoot "toolando-poll-github.ps1"
$pollSrc = Join-Path $PSScriptRoot "toolando-poll-github.ps1"
if (Test-Path $pollSrc) {
  Copy-Item -Force $pollSrc $toolandoPoll
} else {
  # Embedded fallback (ASCII only) when bootstrap is copied alone to F:\
  $toolandoPollBody = @'
$ErrorActionPreference = "Continue"
$RepoRoot = "F:\Toolando"
$Branch = "main"
$SyncScript = "F:\ops\toolando-sync-from-github.ps1"
$LogDir = "F:\logs"
$GitExe = if (Test-Path "C:\Program Files\Git\bin\git.exe") {
  "C:\Program Files\Git\bin\git.exe"
} else { "git" }

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
  $fetchOut = & $GitExe -c "safe.directory=*" fetch origin $Branch 2>&1
  $fetchCode = $LASTEXITCODE
  if ($fetchCode -ne 0) {
    Write-Log ("fetch failed ($fetchCode): " + ($fetchOut | Out-String).Trim())
    exit 1
  }
  $local = (& $GitExe -c "safe.directory=*" rev-parse HEAD 2>$null).Trim()
  $remote = (& $GitExe -c "safe.directory=*" rev-parse ("origin/" + $Branch) 2>$null).Trim()
}
finally { Pop-Location }

if (-not $local -or -not $remote) {
  Write-Log "ERROR: could not resolve local/remote HEAD"
  exit 1
}

if ($local -eq $remote) {
  Write-Log ("No changes (at " + $local + ")")
  exit 0
}

Write-Log ("Remote ahead (" + $local + " -> " + $remote + ") - syncing")
& powershell.exe -NoProfile -ExecutionPolicy Bypass -File $SyncScript
exit $LASTEXITCODE
'@
  [System.IO.File]::WriteAllText($toolandoPoll, $toolandoPollBody, [System.Text.UTF8Encoding]::new($false))
}
Write-Host "Saved: $toolandoPoll"

# -----------------------------------------------------------------------------
# 3) MegaBot backup script
# -----------------------------------------------------------------------------
$megaBackup = Join-Path $OpsRoot "megabot-backup.ps1"
$megaOps = Join-Path $MegaBotRoot "_ops"
New-Item -ItemType Directory -Force -Path $megaOps | Out-Null

$megaContent = @'
param(
  [string]$BotRoot = "F:\apps\badyltech-megabot",
  [int]$BackupKeep = 10
)
$ErrorActionPreference = "Stop"
$BotRoot = $BotRoot.TrimEnd('\', '/')
$LogDir = "F:\logs"
$LogFile = Join-Path $LogDir "megabot-backup.log"
$BackupRoot = "F:\backups"

function Write-Log([string]$m) {
  $line = "[{0}] [megabot] {1}" -f (Get-Date -Format "yyyy-MM-dd HH:mm:ss"), $m
  New-Item -ItemType Directory -Force -Path $LogDir | Out-Null
  Add-Content -Path $LogFile -Value $line -Encoding UTF8
  Write-Host $line
}

Write-Log "=== MegaBot backup start ==="
if (-not (Test-Path $BotRoot)) { throw "Missing: $BotRoot" }

New-Item -ItemType Directory -Force -Path $BackupRoot | Out-Null
$stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$dest = Join-Path $BackupRoot ("megabot-{0}" -f $stamp)
New-Item -ItemType Directory -Force -Path $dest | Out-Null
Write-Log "Backup -> $dest"

$robolog = Join-Path $env:TEMP "robocopy-megabot.log"
& robocopy $BotRoot $dest /E /NFL /NDL /NJH /NJS /NP /R:1 /W:1 `
  /XD __pycache__ .venv venv backups logs .git node_modules _ops `
  /XF *.log *.pyc | Out-File $robolog -Encoding utf8
if ($LASTEXITCODE -ge 8) { throw "robocopy failed ($LASTEXITCODE)" }

$envSrc = Join-Path $BotRoot ".env"
if (Test-Path $envSrc) { Copy-Item -Force $envSrc (Join-Path $dest ".env") }

$dirs = Get-ChildItem $BackupRoot -Directory | Where-Object { $_.Name -like "megabot-*" } | Sort-Object Name -Descending
foreach ($d in ($dirs | Select-Object -Skip $BackupKeep)) {
  Remove-Item -Recurse -Force $d.FullName -ErrorAction SilentlyContinue
}
Write-Log "=== MegaBot backup ok: $dest ==="
'@

[System.IO.File]::WriteAllText($megaBackup, $megaContent, [System.Text.UTF8Encoding]::new($false))
[System.IO.File]::WriteAllText((Join-Path $megaOps "backup-megabot.ps1"), $megaContent, [System.Text.UTF8Encoding]::new($false))
Write-Host "Saved: $megaBackup"

# -----------------------------------------------------------------------------
# 4) Task Scheduler
# -----------------------------------------------------------------------------
$settings = New-ScheduledTaskSettingsSet `
  -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -StartWhenAvailable `
  -MultipleInstances IgnoreNew -ExecutionTimeLimit (New-TimeSpan -Hours 2)

$pollAction = New-ScheduledTaskAction -Execute "powershell.exe" `
  -Argument "-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File `"$toolandoPoll`"" `
  -WorkingDirectory $OpsRoot
$pollTrigger = New-ScheduledTaskTrigger -Once -At (Get-Date).AddMinutes(1) `
  -RepetitionInterval (New-TimeSpan -Minutes 5) -RepetitionDuration (New-TimeSpan -Days 3650)

Register-ScheduledTask -TaskName "Toolando-GitHub-PollSync" `
  -Action $pollAction -Trigger $pollTrigger -Settings $settings `
  -Description "Detect GitHub changes for Toolando; backup + sync" -Force | Out-Null
Write-Host "Task: Toolando-GitHub-PollSync (every 5 min)"

$megaAction = New-ScheduledTaskAction -Execute "powershell.exe" `
  -Argument "-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File `"$megaBackup`" -BotRoot `"$MegaBotRoot`"" `
  -WorkingDirectory $OpsRoot
$megaTrigger = New-ScheduledTaskTrigger -Daily -At "03:00"

Register-ScheduledTask -TaskName "BadylTech-MegaBot-Backup" `
  -Action $megaAction -Trigger $megaTrigger -Settings $settings `
  -Description "Daily local backup of BadylTech MegaBot (FB)" -Force | Out-Null
Write-Host "Task: BadylTech-MegaBot-Backup (daily 03:00)"

# -----------------------------------------------------------------------------
# 5) Smoke tests
# -----------------------------------------------------------------------------
Write-Host ""
Write-Host "Test: MegaBot backup..."
& powershell.exe -NoProfile -ExecutionPolicy Bypass -File $megaBackup -BotRoot $MegaBotRoot
if ($LASTEXITCODE -ne 0) { throw "MegaBot backup test failed" }

Write-Host ""
Write-Host "Test: Toolando poll (sync only if GitHub is newer)..."
& powershell.exe -NoProfile -ExecutionPolicy Bypass -File $toolandoPoll
Write-Host "Poll exit: $LASTEXITCODE"

Write-Host ""
Write-Host "========================================"
Write-Host "DONE"
Write-Host "========================================"
Write-Host "Toolando:  GitHub -> server (poll every 5 min) + backup before sync"
Write-Host "MegaBot:   local backup only (no GitHub = no sync)"
Write-Host "Scripts:   $OpsRoot"
Write-Host "Backups:   $BackupRoot\toolando-*  and  $BackupRoot\megabot-*"
Write-Host "Logs:      $LogDir\toolando-sync.log, poll-sync.log, megabot-backup.log"
Write-Host ""
Write-Host "Optional instant sync after push - GitHub Secrets in Toolando repo:"
Write-Host "  CONVERTER_SYNC_URL    = https://converter.toolando.tech/hooks/sync"
Write-Host "  CONVERTER_SYNC_SECRET = same as DEPLOY_SYNC_SECRET in converter .env"
Write-Host ""
Write-Host "If you want MegaBot GitHub sync later, put MegaBot on GitHub first."
