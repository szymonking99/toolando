import type { GlossaryHubMeta, GlossaryTerm } from "./types"
import { GLOSSARY_SLUGS, type GlossarySlug } from "./slugs"
import { pickLocalized, resolveContentLocale } from "../content-locale"
import {
  localizedGlossaryHubs,
  localizedGlossaryTerms,
} from "./localized-terms"

export { GLOSSARY_SLUGS, type GlossarySlug } from "./slugs"

const hubPl: GlossaryHubMeta = {
  title: "Słownik pojęć konwersji plików",
  intro:
    "Krótkie definicje terminów technicznych związanych z formatami plików, kompresją i konwersją. Przydatne przy wyborze formatu docelowego.",
  backToHub: "Słownik pojęć",
}

const hubEn: GlossaryHubMeta = {
  title: "File conversion glossary",
  intro:
    "Short definitions of technical terms related to file formats, compression, and conversion. Useful when picking a target format.",
  backToHub: "Glossary",
}

const hubDe: GlossaryHubMeta = {
  title: "Glossar zur Dateikonvertierung",
  intro: "Kurze Definitionen technischer Begriffe zu Dateiformaten, Kompression und Konvertierung.",
  backToHub: "Glossar",
}

const hubEs: GlossaryHubMeta = {
  title: "Glosario de conversión de archivos",
  intro: "Definiciones breves de términos técnicos sobre formatos, compresión y conversión.",
  backToHub: "Glosario",
}

const hubUk: GlossaryHubMeta = {
  title: "Глосарій конвертації файлів",
  intro: "Короткі визначення технічних термінів про формати, стиснення та конвертацію.",
  backToHub: "Глосарій",
}

const termsPl: Record<GlossarySlug, GlossaryTerm> = {
  bitrate: {
    slug: "bitrate",
    term: "Bitrate",
    definition:
      "Ilość danych zapisywanych na sekundę audio lub wideo (np. 128 kbps, 320 kbps). Wyższy bitrate = lepsza jakość, ale większy plik. Przy konwersji MP3 warto używać co najmniej 192–256 kbps.",
    relatedFormats: ["mp3", "aac", "mp4"],
  },
  codec: {
    slug: "codec",
    term: "Kodek",
    definition:
      "Algorytm kodowania/dekodowania danych multimedialnych. Przykłady: H.264 (wideo), AAC (audio), JPEG (obraz). Format pliku (MP4, JPG) to kontener lub standard zapisu — kodek określa sposób kompresji.",
    relatedFormats: ["mp4", "mp3", "jpg"],
  },
  "lossy-compression": {
    slug: "lossy-compression",
    term: "Kompresja stratna",
    definition:
      "Metoda zmniejszania rozmiaru pliku przez trwałe usunięcie części danych (np. MP3, JPG, AAC). Każda ponowna konwersja pogarsza jakość. Nie da się odzyskać utraconych informacji.",
    relatedFormats: ["mp3", "jpg", "aac"],
  },
  "lossless-compression": {
    slug: "lossless-compression",
    term: "Kompresja bezstratna",
    definition:
      "Metoda zmniejszania pliku bez utraty danych (np. FLAC, PNG, ZIP). Po rozpakowaniu/dekodowaniu otrzymujesz identyczną kopię oryginału. Pliki większe niż przy kompresji stratnej.",
    relatedFormats: ["flac", "png", "wav"],
  },
  "container-format": {
    slug: "container-format",
    term: "Format kontenera",
    definition:
      "Opakowanie łączące strumienie wideo, audio i napisów w jeden plik (np. MP4, MKV, AVI). Sam kontener nie określa jakości — liczy się kodek w środku (H.264, AAC).",
    relatedFormats: ["mp4", "mkv", "avi"],
  },
  "mime-type": {
    slug: "mime-type",
    term: "Typ MIME",
    definition:
      "Standardowy identyfikator typu pliku wysyłany przez serwer (np. image/jpeg, application/pdf). Przeglądarki i systemy operacyjne używają MIME do wyboru aplikacji do otwarcia pliku.",
    relatedFormats: ["pdf", "jpg", "json"],
  },
  resolution: {
    slug: "resolution",
    term: "Rozdzielczość",
    definition:
      "Liczba pikseli w obrazie lub klatce wideo (np. 1920×1080 = Full HD). Wyższa rozdzielczość = więcej szczegółów, ale większy plik. Przy konwersji w dół (4K → 1080p) tracisz detale na zawsze.",
    relatedFormats: ["mp4", "jpg", "png"],
  },
  dpi: {
    slug: "dpi",
    term: "DPI (dots per inch)",
    definition:
      "Gęstość pikseli na cal — dotyczy druku. 72 DPI wystarczy na ekran, 300 DPI to standard druku fotograficznego. Zmiana DPI bez zmiany pikseli nie poprawia jakości zdjęcia.",
    relatedFormats: ["jpg", "png", "pdf"],
  },
  "alpha-channel": {
    slug: "alpha-channel",
    term: "Kanał alpha (przezroczystość)",
    definition:
      "Dodatkowa warstwa obrazu określająca przezroczystość pikseli. PNG i WebP obsługują alpha, JPG nie. Logo i ikony powinny używać formatu z kanałem alpha.",
    relatedFormats: ["png", "webp"],
  },
  metadata: {
    slug: "metadata",
    term: "Metadane",
    definition:
      "Dane opisujące plik: data wykonania zdjęcia, model aparatu, autor, GPS. EXIF w JPG, ID3 w MP3. Konwersja może usunąć lub zmienić metadane — sprawdź to przed publikacją.",
    relatedFormats: ["jpg", "mp3", "mp4"],
  },
  transcoding: {
    slug: "transcoding",
    term: "Transkodowanie",
    definition:
      "Konwersja z jednego kodeka/formatu na inny (np. H.265 → H.264, FLAC → MP3). Wymaga pełnego dekodowania i ponownego kodowania — może wpływać na jakość i czas przetwarzania.",
    relatedFormats: ["mp4", "mp3", "webm"],
  },
  "sample-rate": {
    slug: "sample-rate",
    term: "Częstotliwość próbkowania",
    definition:
      "Liczba próbek dźwięku na sekundę (Hz). CD: 44100 Hz, profesjonalne nagrania: 48000 Hz lub 96000 Hz. Wyższa częstotliwość = szersze pasmo, większy plik.",
    relatedFormats: ["wav", "mp3", "flac"],
  },
  "aspect-ratio": {
    slug: "aspect-ratio",
    term: "Proporcje obrazu (aspect ratio)",
    definition:
      "Stosunek szerokości do wysokości (np. 16:9, 4:3, 1:1). Instagram Stories: 9:16, YouTube: 16:9. Zła proporcja przy konwersji powoduje czarne pasy lub przycięcie.",
    relatedFormats: ["mp4", "jpg"],
  },
  "color-space": {
    slug: "color-space",
    term: "Przestrzeń kolorów",
    definition:
      "System opisu kolorów (sRGB, Adobe RGB, CMYK). sRGB to standard web i większości ekranów. CMYK służy do druku. Konwersja między przestrzeniami może zmienić wygląd kolorów.",
    relatedFormats: ["jpg", "png", "pdf"],
  },
  "vector-graphic": {
    slug: "vector-graphic",
    term: "Grafika wektorowa",
    definition:
      "Obraz opisany matematycznie (SVG, EPS) — skaluje się bez utraty ostrości. Nie nadaje się do fotografii. Logo, ikony i ilustracje techniczne powinny być wektorowe.",
    relatedFormats: ["svg"],
  },
  "raster-graphic": {
    slug: "raster-graphic",
    term: "Grafika rastrowa",
    definition:
      "Obraz złożony z pikseli (JPG, PNG, WebP). Powiększenie powoduje rozmycie. Fotografie i rendery 3D to grafika rastrowa.",
    relatedFormats: ["jpg", "png", "webp"],
  },
  ocr: {
    slug: "ocr",
    term: "OCR (rozpoznawanie tekstu)",
    definition:
      "Technologia wyciągania tekstu z obrazu lub PDF. Konwersja PDF → DOCX często używa OCR. Jakość zależy od czytelności oryginału i języka dokumentu.",
    relatedFormats: ["pdf", "docx"],
  },
  "dpi-print": {
    slug: "dpi-print",
    term: "Rozdzielczość druku",
    definition:
      "Minimalna rozdzielczość do jakościowego druku: 300 DPI dla fotografii, 150 DPI dla tekstu. Obraz 1000×1000 px przy 300 DPI wydrukuje się na ok. 8,5×8,5 cm.",
    relatedFormats: ["jpg", "png", "pdf"],
  },
  hash: {
    slug: "hash",
    term: "Hash pliku",
    definition:
      "Unikalny „odcisk palca” pliku (MD5, SHA-256). Dwa identyczne pliki mają ten sam hash. Używany do weryfikacji integralności po pobraniu lub konwersji.",
  },
  encryption: {
    slug: "encryption",
    term: "Szyfrowanie (HTTPS/TLS)",
    definition:
      "Toolando.tech używa HTTPS — pliki wysyłane do serwera są szyfrowane w tranzycie. Po konwersji pliki są usuwane. Szyfrowanie nie zastępuje ostrożności przy wrażliwych dokumentach.",
  },
}

const termsEn: Record<GlossarySlug, GlossaryTerm> = {
  bitrate: { ...termsPl.bitrate, term: "Bitrate", definition: "Amount of data stored per second of audio or video (e.g. 128 kbps, 320 kbps). Higher bitrate = better quality but larger file. For MP3 conversion use at least 192–256 kbps." },
  codec: { ...termsPl.codec, term: "Codec", definition: "Algorithm for encoding/decoding multimedia data (e.g. H.264 video, AAC audio, JPEG image). The file format (MP4, JPG) is a container — the codec defines compression." },
  "lossy-compression": { ...termsPl["lossy-compression"], term: "Lossy compression", definition: "Shrinks files by permanently removing data (MP3, JPG, AAC). Each re-conversion degrades quality. Lost information cannot be recovered." },
  "lossless-compression": { ...termsPl["lossless-compression"], term: "Lossless compression", definition: "Shrinks files without losing data (FLAC, PNG, ZIP). After decoding you get an identical copy. Larger than lossy compression." },
  "container-format": { ...termsPl["container-format"], term: "Container format", definition: "Wrapper combining video, audio, and subtitle streams (MP4, MKV, AVI). The container doesn't define quality — the codec inside does (H.264, AAC)." },
  "mime-type": { ...termsPl["mime-type"], term: "MIME type", definition: "Standard file type identifier sent by servers (e.g. image/jpeg, application/pdf). Browsers and OS use MIME to pick the opening app." },
  resolution: { ...termsPl.resolution, term: "Resolution", definition: "Pixel count in an image or video frame (e.g. 1920×1080 = Full HD). Higher resolution = more detail but larger file. Downscaling (4K → 1080p) loses detail permanently." },
  dpi: { ...termsPl.dpi, term: "DPI (dots per inch)", definition: "Pixel density for print. 72 DPI is enough for screens, 300 DPI is photo print standard. Changing DPI without changing pixels doesn't improve image quality." },
  "alpha-channel": { ...termsPl["alpha-channel"], term: "Alpha channel (transparency)", definition: "Extra image layer defining pixel transparency. PNG and WebP support alpha, JPG doesn't. Logos and icons should use alpha-capable formats." },
  metadata: { ...termsPl.metadata, term: "Metadata", definition: "Data describing a file: photo date, camera model, author, GPS. EXIF in JPG, ID3 in MP3. Conversion may remove or change metadata." },
  transcoding: { ...termsPl.transcoding, term: "Transcoding", definition: "Converting from one codec/format to another (e.g. H.265 → H.264, FLAC → MP3). Requires full decode and re-encode — affects quality and processing time." },
  "sample-rate": { ...termsPl["sample-rate"], term: "Sample rate", definition: "Audio samples per second (Hz). CD: 44100 Hz, pro recordings: 48000 or 96000 Hz. Higher rate = wider bandwidth, larger file." },
  "aspect-ratio": { ...termsPl["aspect-ratio"], term: "Aspect ratio", definition: "Width-to-height ratio (e.g. 16:9, 4:3, 1:1). Instagram Stories: 9:16, YouTube: 16:9. Wrong ratio causes black bars or cropping." },
  "color-space": { ...termsPl["color-space"], term: "Color space", definition: "Color description system (sRGB, Adobe RGB, CMYK). sRGB is web/screen standard. CMYK is for print. Converting between spaces may shift colors." },
  "vector-graphic": { ...termsPl["vector-graphic"], term: "Vector graphic", definition: "Mathematically defined image (SVG, EPS) — scales without blur. Not for photos. Logos, icons, and technical illustrations should be vector." },
  "raster-graphic": { ...termsPl["raster-graphic"], term: "Raster graphic", definition: "Pixel-based image (JPG, PNG, WebP). Enlarging causes blur. Photos and 3D renders are raster." },
  ocr: { ...termsPl.ocr, term: "OCR (text recognition)", definition: "Technology extracting text from images or PDF. PDF → DOCX often uses OCR. Quality depends on original clarity and language." },
  "dpi-print": { ...termsPl["dpi-print"], term: "Print resolution", definition: "Minimum for quality print: 300 DPI for photos, 150 DPI for text. A 1000×1000 px image at 300 DPI prints at roughly 8.5×8.5 cm." },
  hash: { ...termsPl.hash, term: "File hash", definition: "Unique file fingerprint (MD5, SHA-256). Two identical files share the same hash. Used to verify integrity after download or conversion." },
  encryption: { ...termsPl.encryption, term: "Encryption (HTTPS/TLS)", definition: "Toolando.tech uses HTTPS — files sent to the server are encrypted in transit. Files are deleted after conversion. Encryption doesn't replace caution with sensitive documents." },
}

const byLocale: Record<string, Record<GlossarySlug, GlossaryTerm>> = {
  pl: termsPl,
  en: termsEn,
  de: Object.fromEntries(GLOSSARY_SLUGS.map((s) => [s, { ...termsEn[s], term: termsPl[s].term }])) as Record<GlossarySlug, GlossaryTerm>,
  es: Object.fromEntries(GLOSSARY_SLUGS.map((s) => [s, termsEn[s]])) as Record<GlossarySlug, GlossaryTerm>,
  uk: Object.fromEntries(GLOSSARY_SLUGS.map((s) => [s, termsEn[s]])) as Record<GlossarySlug, GlossaryTerm>,
  ...localizedGlossaryTerms,
}

const hubByLocale: Record<string, GlossaryHubMeta> = {
  pl: hubPl,
  en: hubEn,
  de: hubDe,
  es: hubEs,
  uk: hubUk,
  ...localizedGlossaryHubs,
}

export function getGlossaryHubMeta(locale: string): GlossaryHubMeta {
  return pickLocalized(locale, hubByLocale, hubEn)
}

export function getGlossaryTerm(
  locale: string,
  slug: string,
): GlossaryTerm | undefined {
  const loc = resolveContentLocale(locale)
  const terms = byLocale[loc] ?? byLocale.en
  return terms[slug as GlossarySlug]
}

export function getAllGlossaryTerms(locale: string): GlossaryTerm[] {
  const loc = resolveContentLocale(locale)
  const terms = byLocale[loc] ?? byLocale.en
  return GLOSSARY_SLUGS.map((slug) => terms[slug]).filter(Boolean)
}
