/**
 * Titles and meta descriptions for indexable tool pages.
 * These are the phrases Google reads — not a field in Search Console.
 */

type SearchCopy = { title: string; description: string }

const pl: Record<string, SearchCopy> = {
  "heic-to-jpg": {
    title: "HEIC na JPG online — zdjęcia z iPhone",
    description:
      "Konwertuj HEIC z iPhone na JPG. Działa w przeglądarce, bez instalacji. Plik nie zostaje na serwerze.",
  },
  "pdf-to-jpg": {
    title: "PDF na JPG online — strony jako zdjęcia",
    description:
      "Zamień strony PDF na JPG. Do wniosku, prezentacji albo wstawienia na stronę. Bez rejestracji.",
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
  "mp4-to-webm": {
    title: "MP4 na WebM online",
    description:
      "Zamień MP4 na WebM pod wideo na stronie HTML5. Do social mediów zwykle zostaje MP4.",
  },
  "svg-to-png": {
    title: "SVG na PNG online",
    description:
      "Rasteryzuj logo SVG do PNG — do Worda, prezentacji i miejsc, które nie biorą wektorów.",
  },
  "kompresor-obrazow": {
    title: "Kompresor zdjęć online — zmniejsz JPG i PNG",
    description:
      "Zmniejsz rozmiar zdjęcia suwakiem jakości. JPG, PNG, WebP. Plik nie jest przechowywany.",
  },
  "laczenie-pdf": {
    title: "Połącz PDF online — scal kilka plików w jeden",
    description:
      "Złącz dwa lub więcej PDF-ów w jeden dokument. Kolejność zachowana, bez instalacji.",
  },
  "usun-exif": {
    title: "Usuń EXIF ze zdjęcia — GPS i dane aparatu",
    description:
      "Wytnij metadane EXIF (lokalizacja, aparat, data) przed wrzuceniem zdjęcia do sieci.",
  },
}

const en: Record<string, SearchCopy> = {
  "heic-to-jpg": {
    title: "HEIC to JPG online — iPhone photos",
    description:
      "Convert HEIC from iPhone to JPG in the browser. No install. The file is not stored.",
  },
  "pdf-to-jpg": {
    title: "PDF to JPG online",
    description: "Turn PDF pages into JPG images for print, email or a website.",
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
  "mp4-to-webm": {
    title: "MP4 to WebM online",
    description: "Convert MP4 to WebM for HTML5 video on a website.",
  },
  "svg-to-png": {
    title: "SVG to PNG online",
    description: "Rasterize an SVG logo to PNG for Word, slides and apps that reject vectors.",
  },
  "kompresor-obrazow": {
    title: "Image compressor online — shrink JPG and PNG",
    description: "Reduce photo size with a quality slider. The file is not stored.",
  },
  "laczenie-pdf": {
    title: "Merge PDF online",
    description: "Combine two or more PDFs into one file. No install.",
  },
  "usun-exif": {
    title: "Remove EXIF from a photo",
    description: "Strip GPS, camera and date metadata before you upload a photo.",
  },
}

export function getIndexableSearchCopy(
  locale: string,
  id: string,
): SearchCopy | null {
  const map = locale === "pl" ? pl : en
  return map[id] ?? en[id] ?? null
}
