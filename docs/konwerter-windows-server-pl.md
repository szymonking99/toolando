# Konwerter PDF/DOCX na Windows Server (dom)

Instrukcja krok po kroku — serwer druku/plików w LAN + Toolando na Vercel.

---

## Co będziesz mieć na końcu

- Mały serwis na porcie **8080** (LibreOffice)
- Działa w tle po restarcie Windows Server
- Vercel wysyła pliki PDF/DOCX do Twojego domu (przez tunel Cloudflare)

---

## KROK 1 — Node.js

1. Na serwerze otwórz przeglądarkę: https://nodejs.org
2. Pobierz **LTS** (20.x lub 22.x)
3. Instaluj domyślnie (Next → Next)
4. Sprawdź w **PowerShell (Administrator)**:

```powershell
node --version
npm --version
```

Powinno pokazać numery wersji.

---

## KROK 2 — LibreOffice

1. Pobierz: https://www.libreoffice.org/download/download/
2. Zainstaluj (domyślna ścieżka)
3. Sprawdź, czy istnieje plik:

```powershell
Test-Path "C:\Program Files\LibreOffice\program\soffice.exe"
```

Powinno zwrócić `True`.

---

## KROK 3 — Skopiuj folder konwertera

Potrzebujesz folderu `services\doc-converter` z projektu Toolando.

**Opcja A — masz Git na serwerze:**

```powershell
cd C:\
git clone https://github.com/TWOJ-USER/toolando.git
cd C:\toolando\services\doc-converter
```

**Opcja B — kopiujesz z PC przez udział sieciowy:**

1. Na swoim PC spakuj folder `services\doc-converter` do ZIP
2. Skopiuj ZIP na serwer (np. `\\TWOJ-SERWER\C$\Toolando\`)
3. Rozpakuj do `C:\Toolando\doc-converter\`

Docelowo pliki:

```
C:\Toolando\doc-converter\
  server.mjs
  convert.mjs
  package.json
  start-windows.ps1
  install-service.ps1
```

---

## KROK 4 — Zainstaluj zależności

PowerShell **jako Administrator**:

```powershell
cd C:\Toolando\doc-converter
npm install
```

---

## KROK 5 — Utwórz plik `.env`

```powershell
cd C:\Toolando\doc-converter
copy .env.windows.example .env
notepad .env
```

Ustaw **własny losowy sekret** (min. 32 znaki), np.:

```
CONVERTER_SECRET=Toolando2026MojLosowySekret42ZnakiMin
PORT=8080
MAX_UPLOAD_MB=50
LIBREOFFICE_PATH=C:\Program Files\LibreOffice\program\soffice.exe
```

Zapisz plik.

> **Zapisz ten sekret** — ten sam wpiszesz później w Vercel jako `DOC_CONVERTER_SECRET`.

---

## KROK 6 — Test ręczny

```powershell
cd C:\Toolando\doc-converter
.\start-windows.ps1
```

Powinno pojawić się: `doc-converter listening on :8080`

W **drugim oknie** PowerShell:

```powershell
curl http://127.0.0.1:8080/health
```

Oczekiwany wynik (fragment):

```json
{"ok":true,"service":"toolando-doc-converter","libreoffice":"LibreOffice ...
```

Jeśli działa — w pierwszym oknie naciśnij **Ctrl+C** (na razie zatrzymujemy).

---

## KROK 7 — Uruchom jako usługa (działa po restarcie)

```powershell
cd C:\Toolando\doc-converter
.\install-service.ps1
```

Sprawdzenie:

```powershell
pm2 status
pm2 logs toolando-converter --lines 20
```

---

## KROK 8 — Cloudflare Tunnel (dostęp z internetu dla Vercel)

### 8a. Szybki test (5 minut, bez zmian w OVH)

1. Pobierz cloudflared: https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/
2. Rozpakuj `cloudflared.exe` np. do `C:\Toolando\cloudflared\`
3. Uruchom:

```powershell
cd C:\Toolando\cloudflared
.\cloudflared.exe tunnel --url http://127.0.0.1:8080
```

4. Skopiuj adres HTTPS z ekranu, np. `https://abc-xyz.trycloudflare.com`
5. W **Vercel → Settings → Environment Variables**:

| Nazwa | Wartość |
|-------|---------|
| `DOC_CONVERTER_URL` | `https://abc-xyz.trycloudflare.com` |
| `DOC_CONVERTER_SECRET` | ten sam co w `.env` |
| `DOC_CONVERTER_TIMEOUT_MS` | `120000` |

6. **Redeploy** projektu na Vercel.

> Adres `trycloudflare.com` zmienia się po restarcie tunelu — tylko na testy.

### 8b. Stały adres `converter.twojadomena.pl` (później)

1. Dodaj domenę w Cloudflare (DNS przenosisz z OVH — domena zostaje w OVH)
2. Cloudflare Zero Trust → Tunnels → Create tunnel
3. Public hostname: `converter` + Twoja domena → `http://127.0.0.1:8080`
4. Zainstaluj tunel jako usługę Windows (token z panelu Cloudflare)
5. W Vercel ustaw `DOC_CONVERTER_URL=https://converter.twojadomena.pl`

---

## KROK 9 — Test końcowy

1. Wejdź na Toolando → konwerter **PDF → DOCX** lub **DOCX → PDF**
2. Wgraj mały plik testowy
3. Jeśli błąd — sprawdź logi:

```powershell
pm2 logs toolando-converter
```

---

## KROK 10 — Auto-sync Toolando + backup MegaBota (FB)

Vercel **nie** wysyła plików na serwer domowy.

| Projekt | Źródło | Co robi serwer |
|---------|--------|----------------|
| **Toolando** (+ jego doc-converter) | GitHub | backup → `git pull` → restart konwertera |
| **BadylTech MegaBot** (FB / publikacja) | tylko lokalnie `F:\apps\badyltech-megabot` | codzienny lokalny backup (bez GitHuba) |

### Toolando — sync z GitHub

Dwa sposoby:

1. **Webhook** — push na `main` → GitHub Action → `POST /hooks/sync`
2. **Polling** (co 5 min) — Task Scheduler → `poll-github-sync.ps1` gdy `origin/main` jest nowszy

Serwer:

1. kopia zapasowa → `F:\backups\toolando-YYYYMMDD-HHMMSS-<commit>\`
2. `git fetch` + `reset --hard origin/main`
3. `npm install` w konwerterze + restart PM2

Trzymane są ostatnie **10** backupów (`SYNC_BACKUP_KEEP`).  
Z backupu wyłączone: `node_modules`, `.next`, `.git`, `backups`, `logs`, `venv`, `__pycache__`.  
Lokalny `.env` konwertera jest zachowywany.

### Bot BadylTech MegaBot (FB / publikacja) — tylko lokalny backup

**To nie jest doc-converter.** MegaBot to osobny projekt: `F:\apps\badyltech-megabot` (posty FB, publikacja).  
Nie ma GitHuba — backup jest lokalny.

Skrypty (w repo Toolando, ale dotyczą MegaBota):

- `scripts/windows-server/backup-megabot.ps1`
- `scripts/windows-server/install-megabot-backup.ps1`

```powershell
# Na serwerze — raz jako Administrator:
cd F:\Toolando\scripts\windows-server
powershell -ExecutionPolicy Bypass -File .\install-megabot-backup.ps1
# → zadanie BadylTech-MegaBot-Backup codziennie 03:00
# → kopiuje skrypt do F:\apps\badyltech-megabot\_ops\
# → backupy: F:\backups\megabot-YYYYMMDD-HHmmss\
```

Test:

```powershell
powershell -File F:\apps\badyltech-megabot\_ops\backup-megabot.ps1
```

### Endpointy Toolando sync (ten sam `DEPLOY_SYNC_SECRET`)

| Endpoint | Działanie |
|----------|-----------|
| `POST /hooks/sync` | Toolando: backup + git pull + restart |
| `POST /hooks/sync/all` | Toolando sync + opcjonalny lokalny backup MegaBota |
| `POST /hooks/backup/bot` | lokalny backup MegaBota (`F:\apps\badyltech-megabot`) |

### Wymagania

1. **Git** na Windows Server
2. `F:\Toolando` to klon GitHub (nie tylko skopiowany folder):

```powershell
cd F:\
git clone https://github.com/szymonking99/toolando.git Toolando
# przywróć services\doc-converter\.env
```

3. MegaBot już leży w `F:\apps\badyltech-megabot` (bez GitHuba — OK).

4. W `F:\Toolando\services\doc-converter\.env`:

```
DEPLOY_SYNC_SECRET=inny-losowy-sekret-min-32-znaki
TOOLANDO_ROOT=F:\Toolando
PM2_APP_NAME=toolando-converter
BOT_ROOT=F:\apps\badyltech-megabot
SYNC_BACKUP_KEEP=10
SYNC_BACKUP_DIR=F:\backups
SYNC_LOG_DIR=F:\logs
```

5. Restart konwertera: `pm2 restart toolando-converter`

6. **GitHub Secrets** (tylko repo Toolando):

| Secret | Wartość |
|--------|---------|
| `CONVERTER_SYNC_URL` | `https://converter.toolando.tech/hooks/sync` |
| `CONVERTER_SYNC_SECRET` | ten sam co `DEPLOY_SYNC_SECRET` |

7. **Task Scheduler:**

```powershell
# Toolando — poll GitHub co 5 min
cd F:\Toolando\services\doc-converter
powershell -ExecutionPolicy Bypass -File .\install-sync-scheduler.ps1

# MegaBot (FB) — codzienny lokalny backup (OSOBNO)
cd F:\Toolando\scripts\windows-server
powershell -ExecutionPolicy Bypass -File .\install-megabot-backup.ps1
```

### Test ręczny

```powershell
# Toolando (backup + pull)
curl -X POST https://converter.toolando.tech/hooks/sync `
  -H "Authorization: Bearer TWÓJ_DEPLOY_SYNC_SECRET" `
  -H "Content-Type: application/json" `
  -d "{}"

# Bot (tylko lokalny backup MegaBota — FB)
curl -X POST https://converter.toolando.tech/hooks/backup/bot `
  -H "Authorization: Bearer TWÓJ_DEPLOY_SYNC_SECRET" `
  -H "Content-Type: application/json" `
  -d "{}"

# Albo lokalnie (zalecane):
powershell -File F:\Toolando\scripts\windows-server\backup-megabot.ps1
```

Oczekiwane: JSON z `"ok": true` i ścieżką `"backup"`.  
Logi Toolando: `F:\logs\sync.log`, `F:\logs\poll-sync.log`.  
Log MegaBot: `F:\logs\megabot-backup.log`.  
Backupy: `F:\backups\toolando-...`, `F:\backups\megabot-...`.

Workflow Toolando: `.github/workflows/sync-windows-converter.yml`.

### Restart bez pełnego sync

```powershell
curl.exe -X POST https://converter.toolando.tech/hooks/restart `
  -H "Authorization: Bearer TWÓJ_DEPLOY_SYNC_SECRET" `
  -H "Content-Type: application/json" `
  -d "{}"
```

Albo lokalnie: `pm2 restart toolando-converter`.

`GET /health` zwraca `lastSync`, `botBackupEnabled`, `botRoot` (ścieżka MegaBota), `startedAt`.

### Autostart po restarcie Windows

```powershell
pm2 startup
pm2 save
Get-Service cloudflared
```

### Przywracanie z backupu

```powershell
# Toolando
$bak = "F:\backups\toolando-20260729-153000-abc1234"
robocopy $bak F:\Toolando /E /XD node_modules .next .git backups logs venv __pycache__
cd F:\Toolando\services\doc-converter
npm install
pm2 restart toolando-converter

# Bot
$bak = "F:\backups\megabot-20260729-153000"
robocopy $bak F:\apps\badyltech-megabot /E /XD backups logs venv __pycache__
# potem uruchom MegaBota jak zwykle
```

---

## Rozwiązywanie problemów

| Problem | Co zrobić |
|---------|-----------|
| `LibreOffice unavailable` | Sprawdź ścieżkę w `.env` — `LIBREOFFICE_PATH` |
| `401 Unauthorized` | Sekret w Vercel ≠ sekret w `.env` |
| Timeout | Zwiększ `DOC_CONVERTER_TIMEOUT_MS` do `180000` |
| Tunel padł | Uruchom ponownie `cloudflared` i zaktualizuj URL w Vercel |
| Po restarcie serwera nie działa | `pm2 status` — jeśli stopped: `pm2 restart toolando-converter` |
| Sync `not a git repository` | Zrób `git clone` do `F:\Toolando` (KROK 10) |
| Sync `DEPLOY_SYNC_SECRET is not configured` | Dopisz sekret do `.env` i zrestartuj PM2 |
| Sync Action failed / timeout | Sprawdź Secrets, tunel Healthy, `logs\sync.log`; backup+pull może trwać kilka minut |
| Brak miejsca na dysku | Zmniejsz `SYNC_BACKUP_KEEP` albo przenieś `SYNC_BACKUP_DIR` na inny dysk |

---

## Aktualizacja po zmianach w kodzie

**Automatycznie:** push na `main` w Toolando → backup + sync. Task Scheduler: poll GitHub (Toolando) + osobno codzienny backup MegaBota (FB).

**Ręcznie:**

```powershell
cd F:\Toolando\services\doc-converter
powershell -NoProfile -ExecutionPolicy Bypass -File .\sync-from-git.ps1 -RepoRoot F:\Toolando
pm2 restart toolando-converter
```
