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

## KROK 10 — Auto-sync całego kodu + kopie zapasowe (`F:\Toolando`)

Vercel **nie** wysyła plików do domu. Po **każdym** `push` na `main` GitHub Action woła
`POST https://converter.toolando.tech/hooks/sync`. Serwer:

1. robi **kopię zapasową** aktualnego drzewa do `F:\Toolando\backups\toolando-YYYYMMDD-HHMMSS-<commit>\`
2. ściąga **całe repo** z GitHub (`git fetch` + `reset --hard origin/main`)
3. `npm install` w konwerterze i restart PM2

Trzymane są ostatnie **10** backupów (konfiguracja: `SYNC_BACKUP_KEEP`).  
Z backupu wyłączone: `node_modules`, `.next`, `.git`, `backups`, `logs` (żeby nie puchło).  
Lokalny `.env` konwertera jest zachowywany i też kopiowany do snapshotu.

### Wymagania

1. **Git** zainstalowany na Windows Server
2. `F:\Toolando` to klon repozytorium (nie tylko skopiowany folder):

```powershell
# Jeśli folder już istnieje bez .git — zrób świeży klon obok albo:
cd F:\
# przykład: przenieś stare pliki, potem:
git clone https://github.com/szymonking99/toolando.git Toolando
# przywróć services\doc-converter\.env
```

3. W `F:\Toolando\services\doc-converter\.env` dodaj:

```
DEPLOY_SYNC_SECRET=inny-losowy-sekret-min-32-znaki
TOOLANDO_ROOT=F:\Toolando
PM2_APP_NAME=toolando-converter
SYNC_BACKUP_KEEP=10
```

4. Restart konwertera: `pm2 restart toolando-converter`

5. W GitHub → repo → **Settings → Secrets and variables → Actions**:

| Secret | Wartość |
|--------|---------|
| `CONVERTER_SYNC_URL` | `https://converter.toolando.tech/hooks/sync` |
| `CONVERTER_SYNC_SECRET` | ten sam co `DEPLOY_SYNC_SECRET` |

### Test ręczny

```powershell
curl -X POST https://converter.toolando.tech/hooks/sync `
  -H "Authorization: Bearer TWÓJ_DEPLOY_SYNC_SECRET" `
  -H "Content-Type: application/json" `
  -d "{}"
```

Oczekiwane: JSON z `"ok": true`, hashem commita i ścieżką `"backup"`.  
Log: `F:\Toolando\logs\sync.log`. Backupy: `F:\Toolando\backups\`.

Workflow: `.github/workflows/sync-windows-converter.yml` (każdy push na `main` albo ręczne **Run workflow**).

### Przywracanie z backupu

```powershell
# przykład — dostosuj nazwę folderu
$bak = "F:\Toolando\backups\toolando-20260729-153000-abc1234"
robocopy $bak F:\Toolando /E /XD node_modules .next .git backups logs
# przywróć .env jeśli trzeba, potem:
cd F:\Toolando\services\doc-converter
npm install
pm2 restart toolando-converter
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

**Automatycznie:** każdy push na `main` → GitHub Action → backup + pełny sync + `/hooks/sync`.

**Ręcznie:**

```powershell
cd F:\Toolando\services\doc-converter
powershell -NoProfile -ExecutionPolicy Bypass -File .\sync-from-git.ps1 -RepoRoot F:\Toolando
pm2 restart toolando-converter
```
