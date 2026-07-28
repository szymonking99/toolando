# Instaluje konwerter jako usluge PM2 (autostart po restarcie Windows).
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$envFile = Join-Path $PSScriptRoot ".env"
if (-not (Test-Path $envFile)) {
  Write-Host "Brak pliku .env - najpierw: copy .env.windows.example .env" -ForegroundColor Red
  exit 1
}

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Host "Zainstaluj Node.js: https://nodejs.org" -ForegroundColor Red
  exit 1
}

npm install -g pm2 2>$null
npm install

npm install -g pm2-windows-startup 2>$null
pm2-startup install 2>$null

pm2 delete toolando-converter 2>$null
pm2 start server.mjs --name toolando-converter --cwd $PSScriptRoot
pm2 save

Write-Host ""
Write-Host "Gotowe. Status:" -ForegroundColor Green
pm2 status
Write-Host ""
Write-Host "Logi: pm2 logs toolando-converter" -ForegroundColor Cyan
Write-Host "Test: curl http://127.0.0.1:8080/health" -ForegroundColor Cyan
