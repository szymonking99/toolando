# Jak podpiąć konwerter VPS (LibreOffice + ZIP/RAR)

Krótki przewodnik krok po kroku — bez znajomości DevOps.

Ten serwer na VPS obsługuje:
- **PDF ↔ DOCX** (LibreOffice)
- **ZIP ↔ RAR** (7-Zip + RAR)

Strona na Vercel **nie ma** LibreOffice ani RAR — dlatego potrzebujesz małego serwera obok.

---

## Krok 1 — wykup VPS (ok. 5–7 €/mies.)

Wystarczy najtańszy serwer z Ubuntu 22/24, np.:
- [Hetzner Cloud](https://www.hetzner.com/cloud) — CX22
- [Contabo](https://contabo.com) — VPS S
- [OVH](https://www.ovhcloud.com/pl/vps/)

Po zakupie dostaniesz **adres IP** serwera (np. `123.45.67.89`) i hasło root.

---

## Krok 2 — zaloguj się na serwer

**Windows:** otwórz PowerShell i wpisz:

```powershell
ssh root@123.45.67.89
```

(Zamień IP na swój.) Zaakceptuj fingerprint, wpisz hasło.

---

## Krok 3 — zainstaluj Docker (wklej całość)

```bash
apt update && apt install -y git docker.io docker-compose-v2
systemctl enable --now docker
```

Sprawdzenie:

```bash
docker --version
```

---

## Krok 4 — pobierz projekt i ustaw sekret

```bash
git clone https://github.com/TWOJ-USER/toolando.git
cd toolando
cp .env.converter.example .env
nano .env
```

W pliku `.env` ustaw **losowy długi sekret**, np.:

```
CONVERTER_SECRET=abc123xyz789losowyTekstMin32Znaki
DOC_CONVERTER_PORT=8080
MAX_UPLOAD_MB=50
```

Zapisz: `Ctrl+O`, Enter, `Ctrl+X`.

---

## Krok 5 — uruchom konwerter

```bash
docker compose up -d --build
```

Test:

```bash
curl http://127.0.0.1:8080/health
```

Powinno zwrócić JSON z `"ok": true`.

---

## Krok 6 — dodaj domenę i HTTPS (opcjonalnie, ale zalecane)

Najprościej z **Caddy** (automatyczny certyfikat SSL):

```bash
apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | tee /etc/apt/sources.list.d/caddy-stable.list
apt update && apt install -y caddy
nano /etc/caddy/Caddyfile
```

Wklej (zmień domenę):

```
converter.twojadomena.pl {
    reverse_proxy 127.0.0.1:8080
}
```

Potem:

```bash
systemctl reload caddy
```

Ustaw w DNS rekord **A** wskazujący na IP VPS.

Bez domeny możesz tymczasowo użyć `http://123.45.67.89:8080` — ale Vercel wymaga **HTTPS**, więc domena jest praktycznie konieczna.

---

## Krok 7 — dodaj zmienne w Vercel

1. Wejdź na [vercel.com](https://vercel.com) → projekt **toolando**
2. **Settings** → **Environment Variables**
3. Dodaj **3 zmienne** (Production + Preview + Development):

| Nazwa | Wartość | Przykład |
|-------|---------|----------|
| `DOC_CONVERTER_URL` | adres konwertera **bez** końcowego `/` | `https://converter.twojadomena.pl` |
| `DOC_CONVERTER_SECRET` | **ten sam** co `CONVERTER_SECRET` na VPS | `abc123xyz789...` |
| `DOC_CONVERTER_TIMEOUT_MS` | limit czasu (ms) | `120000` |

4. **Save**
5. **Deployments** → ostatni deploy → **⋯** → **Redeploy**

Gotowe — konwersje PDF/DOCX i ZIP/RAR pójdą przez VPS.

---

## Co działa bez VPS?

| Narzędzie | Bez VPS (sam Vercel) | Z VPS |
|-----------|----------------------|-------|
| RAR → ZIP | ✅ tak | ✅ tak |
| ZIP → RAR | ❌ nie (brak RAR) | ✅ tak |
| PDF ↔ DOCX | ⚠️ gorsza jakość (JS) | ✅ LibreOffice |

---

## Lokalnie na Windows (dev)

W `.env.local`:

```
LIBREOFFICE_PATH=C:\Program Files\LibreOffice\program\soffice.exe
RAR_PATH=C:\Program Files\WinRAR\Rar.exe
```

Wtedy ZIP→RAR działa bez VPS na Twoim PC.

---

## Problemy?

**`curl /health` nie działa**
```bash
docker compose logs -f
```

**401 Unauthorized z Vercel**
- Sekret w Vercel musi być **identyczny** jak `CONVERTER_SECRET` w `.env` na VPS.

**Konwersja timeout**
- Zwiększ `DOC_CONVERTER_TIMEOUT_MS` do `180000`.

**Aktualizacja po zmianach w repo**
```bash
cd toolando && git pull && docker compose up -d --build
```
