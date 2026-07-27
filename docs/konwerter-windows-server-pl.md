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

## Rozwiązywanie problemów

| Problem | Co zrobić |
|---------|-----------|
| `LibreOffice unavailable` | Sprawdź ścieżkę w `.env` — `LIBREOFFICE_PATH` |
| `401 Unauthorized` | Sekret w Vercel ≠ sekret w `.env` |
| Timeout | Zwiększ `DOC_CONVERTER_TIMEOUT_MS` do `180000` |
| Tunel padł | Uruchom ponownie `cloudflared` i zaktualizuj URL w Vercel |
| Po restarcie serwera nie działa | `pm2 status` — jeśli stopped: `pm2 restart toolando-converter` |

---

## Aktualizacja po zmianach w kodzie

```powershell
cd C:\Toolando\doc-converter
# skopiuj nowe pliki z repo
npm install
pm2 restart toolando-converter
```
