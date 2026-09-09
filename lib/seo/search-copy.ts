/**
 * Titles and meta descriptions for indexable tool pages.
 * These are the phrases Google reads — not a field in Search Console.
 */

type SearchCopy = { title: string; description: string }

const pl: Record<string, SearchCopy> = {
  "heic-to-jpg": {
    title: "HEIC na JPG online — zdjęcia z iPhone na Windows",
    description:
      "Konwertuj HEIC z iPhone na JPG w przeglądarce. Bez instalacji. Plik nie zostaje na serwerze. Batch wielu zdjęć → ZIP.",
  },
  "heic-to-png": {
    title: "HEIC na PNG online",
    description:
      "Zamień HEIC z iPhone na PNG z zachowaniem szczegółów. Działa online, bez rejestracji.",
  },
  "heic-to-webp": {
    title: "HEIC na WebP online — lżejsze zdjęcia na stronę",
    description:
      "Konwertuj HEIC do WebP pod WWW. Mniejszy plik przy dobrej jakości.",
  },
  "pdf-to-jpg": {
    title: "PDF na JPG online — strony jako zdjęcia",
    description:
      "Zamień strony PDF na JPG. Do wniosku, prezentacji albo wstawienia na stronę. Bez rejestracji.",
  },
  "pdf-to-png": {
    title: "PDF na PNG online",
    description:
      "Eksportuj strony PDF do PNG w wysokiej jakości — do grafik i dokumentów.",
  },
  "pdf-to-docx": {
    title: "PDF na Word (DOCX) online",
    description:
      "Konwertuj PDF na DOCX, żeby edytować tekst w Wordzie. Układ może się rozjechać przy skanach.",
  },
  "docx-to-pdf": {
    title: "Word na PDF online — DOCX na PDF",
    description:
      "Zamień dokument Word (DOCX) na PDF do wysyłki, druku i CV. Układ strony zostaje zamrożony.",
  },
  "mp4-to-mp3": {
    title: "MP4 na MP3 — wyciągnij dźwięk z filmu",
    description:
      "Wytnij ścieżkę audio z MP4 i zapisz jako MP3. Do własnych plików, nie do pobierania z YouTube.",
  },
  "jpg-to-webp": {
    title: "JPG na WebP online — mniejsze zdjęcia na stronę",
    description:
      "Konwertuj JPG na WebP. Pliki zwykle wychodzą lżejsze przy podobnej jakości — dobre na strony www.",
  },
  "png-to-jpg": {
    title: "PNG na JPG online",
    description:
      "Zamień PNG na JPG, gdy nie potrzebujesz przezroczystości i chcesz mniejszy plik.",
  },
  "jpg-to-png": {
    title: "JPG na PNG online",
    description:
      "Konwertuj JPG na PNG. Przydatne do dalszej edycji grafiki; plik będzie zwykle większy.",
  },
  "png-to-webp": {
    title: "PNG na WebP online",
    description:
      "Zamień PNG na WebP pod WWW — mniejszy plik, często z przezroczystością.",
  },
  "jpg-to-avif": {
    title: "JPG na AVIF online",
    description:
      "Konwertuj JPG do AVIF — nowoczesny format obrazów na szybkie strony.",
  },
  "png-to-avif": {
    title: "PNG na AVIF online",
    description:
      "Zamień PNG na AVIF, gdy celujesz w maksymalną kompresję na WWW.",
  },
  "webp-to-jpg": {
    title: "WebP na JPG online",
    description:
      "Konwertuj WebP do JPG, gdy odbiorca nie otwiera WebP (np. starszy Word/mail).",
  },
  "mp3-to-wav": {
    title: "MP3 na WAV online",
    description:
      "Konwertuj MP3 na WAV do edycji w DAW. Jakości z MP3 to nie odzyska — zatrzymuje tylko dalszą stratę.",
  },
  "wav-to-mp3": {
    title: "WAV na MP3 online",
    description:
      "Zamień WAV na MP3 do słuchania, maila albo podcastu. Mniejszy plik, kompresja stratna.",
  },
  "flac-to-mp3": {
    title: "FLAC na MP3 online",
    description:
      "Konwertuj FLAC na MP3, gdy potrzebujesz pliku, który otworzy każdy odtwarzacz i telefon.",
  },
  "wav-to-flac": {
    title: "WAV na FLAC online",
    description:
      "Spakuj WAV do FLAC bez utraty jakości — archiwum muzyki w mniejszym pliku.",
  },
  "ogg-to-mp3": {
    title: "OGG na MP3 online",
    description: "Konwertuj OGG/Vorbis do uniwersalnego MP3.",
  },
  "m4a-to-mp3": {
    title: "M4A na MP3 online",
    description: "Zamień M4A (iTunes/Apple) na MP3 do odtwarzania wszędzie.",
  },
  "mp4-to-webm": {
    title: "MP4 na WebM online — wideo na stronę WWW",
    description:
      "Zamień MP4 na WebM pod wideo na stronie HTML5. Do social mediów zwykle zostaje MP4.",
  },
  "mov-to-mp4": {
    title: "MOV na MP4 online — filmy z iPhone/Mac",
    description:
      "Konwertuj MOV (QuickTime) na MP4, które otworzy Windows, Android i większość odtwarzaczy.",
  },
  "webm-to-mp4": {
    title: "WebM na MP4 online",
    description: "Zamień WebM na MP4 pod szerszą kompatybilność i social media.",
  },
  "avi-to-mp4": {
    title: "AVI na MP4 online",
    description: "Konwertuj starsze AVI do nowoczesnego MP4.",
  },
  "mkv-to-mp4": {
    title: "MKV na MP4 online",
    description: "Zamień MKV na MP4 do odtwarzania na TV, telefonie i w przeglądarce.",
  },
  "gif-to-mp4": {
    title: "GIF na MP4 online",
    description: "Zamień ciężki GIF na lżejsze MP4 — lepsza jakość przy mniejszym pliku.",
  },
  "mp4-to-gif": {
    title: "MP4 na GIF online",
    description: "Zrób GIF z krótkiego klipu MP4. Pamiętaj: GIF jest zwykle cięższy.",
  },
  "svg-to-png": {
    title: "SVG na PNG online",
    description:
      "Rasteryzuj logo SVG do PNG — do Worda, prezentacji i miejsc, które nie biorą wektorów.",
  },
  "csv-to-json": {
    title: "CSV na JSON online",
    description: "Konwertuj tabelę CSV do JSON pod API, skrypty i import danych.",
  },
  "json-to-csv": {
    title: "JSON na CSV online",
    description: "Zamień tablicę JSON na CSV do Excela i arkuszy.",
  },
  "md-to-html": {
    title: "Markdown na HTML online",
    description: "Konwertuj Markdown do HTML pod dokumentację i strony.",
  },
  "html-to-md": {
    title: "HTML na Markdown online",
    description: "Wyciągnij treść HTML do czytelnego Markdown.",
  },
  "kompresor-obrazow": {
    title: "Kompresor zdjęć online — zmniejsz JPG i PNG",
    description:
      "Zmniejsz rozmiar zdjęcia suwakiem jakości. JPG, PNG, WebP. Batch wielu plików → ZIP.",
  },
  "laczenie-pdf": {
    title: "Połącz PDF online — scal kilka plików w jeden",
    description:
      "Złącz dwa lub więcej PDF-ów w jeden dokument. Kolejność zachowana, bez instalacji.",
  },
  "usun-exif": {
    title: "Usuń EXIF ze zdjęcia — GPS i dane aparatu",
    description:
      "Wytnij metadane EXIF (lokalizacja, aparat, data) przed wrzuceniem zdjęcia do sieci. Batch OK.",
  },
  "zmiana-rozmiaru-obrazu": {
    title: "Zmiana rozmiaru zdjęcia online — resize",
    description:
      "Zmień wymiary obrazu w pikselach z zachowaniem proporcji. Idealne pod social media.",
  },
  "obrot-pdf": {
    title: "Obróć PDF online — 90°, 180°, 270°",
    description: "Obróć wszystkie strony PDF po skanie lub złym imporcie.",
  },
  "podzial-pdf": {
    title: "Podziel PDF online — strony osobno lub zakres",
    description: "Rozdziel PDF na osobne pliki. Wynik w ZIP.",
  },
  "kompresja-pdf": {
    title: "Kompresja PDF online — zmniejsz rozmiar",
    description:
      "Zmniejsz duży PDF przed wysyłką maila. Najlepsze efekty przy skanach i ciężkich dokumentach.",
  },
  "usuwanie-tla": {
    title: "Usuń tło ze zdjęcia online",
    description:
      "Automatycznie wytnij tło ze zdjęcia. Wynik PNG z przezroczystością — produkt, CV, social.",
  },
  "pdf-do-tekstu": {
    title: "PDF do tekstu online — wyodrębnij TXT",
    description:
      "Wyciągnij tekst z PDF do pliku TXT. Działa lokalnie na serwerze Toolando.",
  },
  "numeracja-pdf": {
    title: "Numeracja stron PDF online",
    description: "Dodaj numery stron „1 / N” na dole lub górze dokumentu PDF.",
  },
  "kompresja-wideo": {
    title: "Kompresja wideo online — zmniejsz MP4",
    description:
      "Zmniejsz rozmiar MP4/WebM/MOV przez ponowne kodowanie. Dostosuj jakość suwakiem.",
  },
  "znak-wodny": {
    title: "Znak wodny na zdjęciu online",
    description: "Dodaj tekstowy znak wodny na obraz — ochrona przed kopiowaniem.",
  },
  "naprawa-plikow": {
    title: "Naprawa plików online — PDF, obraz, wideo, ZIP",
    description:
      "Uratuj uszkodzony plik: diagnostyka i przepisanie kontenera. PDF, obrazy, audio/wideo, ZIP/DOCX, JSON — za darmo.",
  },
  "inspektor-prywatnosci": {
    title: "Co ten plik ujawnia o mnie? — skaner EXIF / GPS",
    description:
      "Sprawdź lokalnie w przeglądarce: GPS, aparat, autora, daty w JPG/PNG/PDF. Plik nie wychodzi z urządzenia.",
  },
  "generator-hasel": {
    title: "Generator haseł online — silne hasło",
    description:
      "Wygeneruj silne hasło lokalnie w przeglądarce. Nic nie jest wysyłane na serwer.",
  },
  "generator-hash": {
    title: "Generator hash SHA-256 / MD5 online",
    description: "Policz sumę kontrolną tekstu (SHA-1/256/512, MD5) w przeglądarce.",
  },
  "kalkulator-vat": {
    title: "Kalkulator VAT — netto brutto online",
    description: "Policz VAT od netto lub brutto. Stawki 23%, 8%, 5%, 0%.",
  },
  "json-formatter": {
    title: "JSON formatter online — formatuj i waliduj",
    description: "Sformatuj i sprawdź JSON lokalnie w przeglądarce.",
  },
  "dekoder-jwt": {
    title: "Dekoder JWT online",
    description: "Zdekoduj payload JWT lokalnie — token nie jest wysyłany na serwer.",
  },
  "base64": {
    title: "Base64 encode / decode online",
    description: "Koduj i dekoduj Base64 w przeglądarce.",
  },
  "url-encoder": {
    title: "URL encoder / decoder online",
    description: "Percent-encoding URL — encode i decode lokalnie.",
  },
  "csv-json": {
    title: "CSV ↔ JSON online",
    description: "Konwertuj CSV do JSON i z powrotem — lokalnie, bez uploadu.",
  },
  "generator-favicon": {
    title: "Generator favicon online — paczka PNG ZIP",
    description:
      "Wygeneruj favicony 16–512 px z jednego obrazu i pobierz ZIP. Działa w przeglądarce.",
  },
  "kalkulator-rozmiaru-pliku": {
    title: "Kalkulator rozmiaru pliku i czasu pobierania",
    description:
      "Oszacuj MB z bitrate'u albo czas uploadu/downloadu przy danej prędkości łącza.",
  },
}

const en: Record<string, SearchCopy> = {
  "heic-to-jpg": {
    title: "HEIC to JPG online — iPhone photos on Windows",
    description:
      "Convert iPhone HEIC to JPG in the browser. No install. Files are not stored. Batch → ZIP.",
  },
  "heic-to-png": {
    title: "HEIC to PNG online",
    description: "Convert iPhone HEIC to PNG online. No sign-up.",
  },
  "heic-to-webp": {
    title: "HEIC to WebP online",
    description: "Convert HEIC to WebP for smaller website images.",
  },
  "pdf-to-jpg": {
    title: "PDF to JPG online",
    description: "Turn PDF pages into JPG images for print, email or a website.",
  },
  "pdf-to-png": {
    title: "PDF to PNG online",
    description: "Export PDF pages to high-quality PNG images.",
  },
  "pdf-to-docx": {
    title: "PDF to Word (DOCX) online",
    description: "Convert PDF to DOCX to edit text in Word. Scans may not convert cleanly.",
  },
  "docx-to-pdf": {
    title: "Word to PDF online — DOCX to PDF",
    description: "Convert a Word document to PDF for sending, print and CVs.",
  },
  "mp4-to-mp3": {
    title: "MP4 to MP3 — extract audio from video",
    description: "Pull the audio track from an MP4 and save it as MP3. For your own files.",
  },
  "jpg-to-webp": {
    title: "JPG to WebP online",
    description: "Convert JPG to WebP for smaller images on websites.",
  },
  "png-to-jpg": {
    title: "PNG to JPG online",
    description: "Convert PNG to JPG when you do not need transparency and want a smaller file.",
  },
  "jpg-to-png": {
    title: "JPG to PNG online",
    description: "Convert JPG to PNG for further editing. The file is usually larger.",
  },
  "png-to-webp": {
    title: "PNG to WebP online",
    description: "Convert PNG to WebP for the web — smaller files, often with transparency.",
  },
  "jpg-to-avif": {
    title: "JPG to AVIF online",
    description: "Convert JPG to AVIF for modern, efficient website images.",
  },
  "png-to-avif": {
    title: "PNG to AVIF online",
    description: "Convert PNG to AVIF when you want maximum web compression.",
  },
  "webp-to-jpg": {
    title: "WebP to JPG online",
    description: "Convert WebP to JPG when the recipient cannot open WebP.",
  },
  "mp3-to-wav": {
    title: "MP3 to WAV online",
    description: "Convert MP3 to WAV for DAW editing. This does not restore lost quality.",
  },
  "wav-to-mp3": {
    title: "WAV to MP3 online",
    description: "Convert WAV to MP3 for listening, email or a podcast.",
  },
  "flac-to-mp3": {
    title: "FLAC to MP3 online",
    description: "Convert FLAC to MP3 so it plays on any phone or player.",
  },
  "wav-to-flac": {
    title: "WAV to FLAC online",
    description: "Pack WAV into lossless FLAC for music archives.",
  },
  "ogg-to-mp3": {
    title: "OGG to MP3 online",
    description: "Convert OGG/Vorbis to universal MP3.",
  },
  "m4a-to-mp3": {
    title: "M4A to MP3 online",
    description: "Convert Apple M4A to MP3 for wider playback support.",
  },
  "mp4-to-webm": {
    title: "MP4 to WebM online — video for websites",
    description: "Convert MP4 to WebM for HTML5 video on a website.",
  },
  "mov-to-mp4": {
    title: "MOV to MP4 online — iPhone/Mac videos",
    description: "Convert QuickTime MOV to MP4 for Windows, Android and most players.",
  },
  "webm-to-mp4": {
    title: "WebM to MP4 online",
    description: "Convert WebM to MP4 for broader compatibility and social apps.",
  },
  "avi-to-mp4": {
    title: "AVI to MP4 online",
    description: "Convert older AVI files to modern MP4.",
  },
  "mkv-to-mp4": {
    title: "MKV to MP4 online",
    description: "Convert MKV to MP4 for TVs, phones and browsers.",
  },
  "gif-to-mp4": {
    title: "GIF to MP4 online",
    description: "Replace a heavy GIF with a lighter MP4 clip.",
  },
  "mp4-to-gif": {
    title: "MP4 to GIF online",
    description: "Make a GIF from a short MP4 clip. GIFs are usually heavier.",
  },
  "svg-to-png": {
    title: "SVG to PNG online",
    description: "Rasterize an SVG logo to PNG for Word, slides and apps that reject vectors.",
  },
  "csv-to-json": {
    title: "CSV to JSON online",
    description: "Convert a CSV table to JSON for APIs and scripts.",
  },
  "json-to-csv": {
    title: "JSON to CSV online",
    description: "Convert a JSON array to CSV for Excel and spreadsheets.",
  },
  "md-to-html": {
    title: "Markdown to HTML online",
    description: "Convert Markdown to HTML for docs and web pages.",
  },
  "html-to-md": {
    title: "HTML to Markdown online",
    description: "Turn HTML content into readable Markdown.",
  },
  "kompresor-obrazow": {
    title: "Image compressor online — shrink JPG and PNG",
    description: "Reduce photo size with a quality slider. Batch files → ZIP. Files are not stored.",
  },
  "laczenie-pdf": {
    title: "Merge PDF online",
    description: "Combine two or more PDFs into one file. No install.",
  },
  "usun-exif": {
    title: "Remove EXIF from a photo — GPS and camera data",
    description: "Strip GPS, camera and date metadata before you upload a photo. Batch OK.",
  },
  "zmiana-rozmiaru-obrazu": {
    title: "Resize image online",
    description: "Change image dimensions in pixels while keeping aspect ratio.",
  },
  "obrot-pdf": {
    title: "Rotate PDF online",
    description: "Rotate all PDF pages by 90°, 180° or 270° after a bad scan.",
  },
  "podzial-pdf": {
    title: "Split PDF online",
    description: "Split a PDF into separate pages or a range. Download as ZIP.",
  },
  "kompresja-pdf": {
    title: "Compress PDF online",
    description: "Shrink a large PDF before email. Best on scans and heavy docs.",
  },
  "usuwanie-tla": {
    title: "Remove background from photo online",
    description: "Cut out the background automatically. PNG with transparency.",
  },
  "pdf-do-tekstu": {
    title: "PDF to text online — extract TXT",
    description: "Extract text from a PDF to a TXT file on Toolando.",
  },
  "numeracja-pdf": {
    title: "PDF page numbers online",
    description: "Add “1 / N” page numbers to the top or bottom of a PDF.",
  },
  "kompresja-wideo": {
    title: "Compress video online — shrink MP4",
    description: "Reduce MP4/WebM/MOV size with re-encoding. Adjust quality.",
  },
  "znak-wodny": {
    title: "Watermark image online",
    description: "Add a text watermark to a photo before sharing.",
  },
  "naprawa-plikow": {
    title: "Repair files online — PDF, image, video, ZIP",
    description:
      "Salvage a broken file: diagnose and rewrite the container. PDF, images, audio/video, ZIP/DOCX, JSON — free.",
  },
  "inspektor-prywatnosci": {
    title: "What does this file reveal? — EXIF / GPS scanner",
    description:
      "Check GPS, camera, author and dates in JPG/PNG/PDF locally in your browser.",
  },
  "generator-hasel": {
    title: "Password generator online",
    description: "Generate a strong password locally in your browser. Nothing is uploaded.",
  },
  "generator-hash": {
    title: "SHA-256 / MD5 hash generator online",
    description: "Compute SHA-1/256/512 or MD5 checksums in your browser.",
  },
  "kalkulator-vat": {
    title: "VAT calculator — net to gross",
    description: "Calculate VAT from net or gross amounts.",
  },
  "json-formatter": {
    title: "JSON formatter online",
    description: "Format and validate JSON locally in your browser.",
  },
  "dekoder-jwt": {
    title: "JWT decoder online",
    description: "Decode a JWT payload locally — the token never leaves your device.",
  },
  "base64": {
    title: "Base64 encode / decode online",
    description: "Encode and decode Base64 in your browser.",
  },
  "url-encoder": {
    title: "URL encoder / decoder online",
    description: "Percent-encode or decode URLs locally.",
  },
  "csv-json": {
    title: "CSV ↔ JSON online",
    description: "Convert CSV to JSON and back — locally, no upload.",
  },
  "generator-favicon": {
    title: "Favicon generator online — PNG ZIP pack",
    description: "Generate 16–512 px favicons from one image and download a ZIP.",
  },
  "kalkulator-rozmiaru-pliku": {
    title: "File size & download time calculator",
    description: "Estimate MB from bitrate, or upload/download time at a given speed.",
  },
}

export function getIndexableSearchCopy(
  locale: string,
  id: string,
): SearchCopy | null {
  const map = locale === "pl" ? pl : en
  return map[id] ?? en[id] ?? null
}
