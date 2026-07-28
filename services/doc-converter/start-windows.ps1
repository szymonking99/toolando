# Uruchom konwerter z pliku .env (test reczny).
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$envFile = Join-Path $PSScriptRoot ".env"
if (-not (Test-Path $envFile)) {
  Write-Host "Brak pliku .env - skopiuj: copy .env.windows.example .env" -ForegroundColor Red
  exit 1
}

Get-Content $envFile | ForEach-Object {
  $line = $_.Trim()
  if ($line -eq "" -or $line.StartsWith("#")) { return }
  $eq = $line.IndexOf("=")
  if ($eq -lt 1) { return }
  $key = $line.Substring(0, $eq).Trim()
  $val = $line.Substring($eq + 1).Trim()
  [Environment]::SetEnvironmentVariable($key, $val, "Process")
}

$lo = $env:LIBREOFFICE_PATH
if (-not $lo -or -not (Test-Path $lo)) {
  Write-Host "LibreOffice nie znaleziony. Ustaw LIBREOFFICE_PATH w .env" -ForegroundColor Red
  exit 1
}

Write-Host "Konwerter startuje na porcie $($env:PORT)..." -ForegroundColor Green
node server.mjs
