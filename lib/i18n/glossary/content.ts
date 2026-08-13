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

const termsDe: Record<GlossarySlug, GlossaryTerm> = {
  bitrate: {
    slug: "bitrate",
    term: "Bitrate",
    definition:
      "Datenmenge pro Sekunde Audio oder Video (z. B. 128 kbps, 320 kbps). Höherer Bitrate = bessere Qualität, aber größere Datei. Bei MP3-Konvertierung mindestens 192–256 kbps verwenden.",
    relatedFormats: ["mp3", "aac", "mp4"],
  },
  codec: {
    slug: "codec",
    term: "Codec",
    definition:
      "Algorithmus zum Kodieren/Dekodieren multimedialer Daten (z. B. H.264 Video, AAC Audio, JPEG Bild). Das Dateiformat (MP4, JPG) ist ein Container — der Codec bestimmt die Kompression.",
    relatedFormats: ["mp4", "mp3", "jpg"],
  },
  "lossy-compression": {
    slug: "lossy-compression",
    term: "Verlustbehaftete Kompression",
    definition:
      "Verkleinert Dateien durch dauerhaftes Entfernen von Daten (MP3, JPG, AAC). Jede erneute Konvertierung verschlechtert die Qualität. Verlorene Informationen können nicht wiederhergestellt werden.",
    relatedFormats: ["mp3", "jpg", "aac"],
  },
  "lossless-compression": {
    slug: "lossless-compression",
    term: "Verlustfreie Kompression",
    definition:
      "Verkleinert Dateien ohne Datenverlust (FLAC, PNG, ZIP). Nach dem Dekodieren erhalten Sie eine identische Kopie. Größer als verlustbehaftete Kompression.",
    relatedFormats: ["flac", "png", "wav"],
  },
  "container-format": {
    slug: "container-format",
    term: "Containerformat",
    definition:
      "Hülle, die Video-, Audio- und Untertitelströme kombiniert (MP4, MKV, AVI). Der Container bestimmt nicht die Qualität — der Codec darin schon (H.264, AAC).",
    relatedFormats: ["mp4", "mkv", "avi"],
  },
  "mime-type": {
    slug: "mime-type",
    term: "MIME-Typ",
    definition:
      "Standard-Dateitypkennung, die von Servern gesendet wird (z. B. image/jpeg, application/pdf). Browser und Betriebssysteme nutzen MIME, um die öffnende App auszuwählen.",
    relatedFormats: ["pdf", "jpg", "json"],
  },
  resolution: {
    slug: "resolution",
    term: "Auflösung",
    definition:
      "Pixelanzahl in einem Bild oder Videobild (z. B. 1920×1080 = Full HD). Höhere Auflösung = mehr Details, aber größere Datei. Herunterskalieren (4K → 1080p) verliert Details dauerhaft.",
    relatedFormats: ["mp4", "jpg", "png"],
  },
  dpi: {
    slug: "dpi",
    term: "DPI (Punkte pro Zoll)",
    definition:
      "Pixeldichte für den Druck. 72 DPI reichen für Bildschirme, 300 DPI ist Standard für Fotodruck. DPI ändern ohne Pixel zu ändern verbessert die Bildqualität nicht.",
    relatedFormats: ["jpg", "png", "pdf"],
  },
  "alpha-channel": {
    slug: "alpha-channel",
    term: "Alphakanal (Transparenz)",
    definition:
      "Zusätzliche Bildebene, die die Pixeltransparenz definiert. PNG und WebP unterstützen Alpha, JPG nicht. Logos und Icons sollten alpha-fähige Formate verwenden.",
    relatedFormats: ["png", "webp"],
  },
  metadata: {
    slug: "metadata",
    term: "Metadaten",
    definition:
      "Daten, die eine Datei beschreiben: Aufnahmedatum, Kameramodell, Autor, GPS. EXIF in JPG, ID3 in MP3. Konvertierung kann Metadaten entfernen oder ändern.",
    relatedFormats: ["jpg", "mp3", "mp4"],
  },
  transcoding: {
    slug: "transcoding",
    term: "Transcodierung",
    definition:
      "Konvertierung von einem Codec/Format in ein anderes (z. B. H.265 → H.264, FLAC → MP3). Erfordert vollständiges Dekodieren und erneutes Kodieren — beeinflusst Qualität und Verarbeitungszeit.",
    relatedFormats: ["mp4", "mp3", "webm"],
  },
  "sample-rate": {
    slug: "sample-rate",
    term: "Abtastrate",
    definition:
      "Audioproben pro Sekunde (Hz). CD: 44100 Hz, professionelle Aufnahmen: 48000 oder 96000 Hz. Höhere Rate = breiteres Frequenzband, größere Datei.",
    relatedFormats: ["wav", "mp3", "flac"],
  },
  "aspect-ratio": {
    slug: "aspect-ratio",
    term: "Seitenverhältnis",
    definition:
      "Verhältnis von Breite zu Höhe (z. B. 16:9, 4:3, 1:1). Instagram Stories: 9:16, YouTube: 16:9. Falsches Verhältnis verursacht schwarze Balken oder Beschnitt.",
    relatedFormats: ["mp4", "jpg"],
  },
  "color-space": {
    slug: "color-space",
    term: "Farbraum",
    definition:
      "System zur Farbbeschreibung (sRGB, Adobe RGB, CMYK). sRGB ist Web-/Bildschirmstandard. CMYK für den Druck. Konvertierung zwischen Räumen kann Farben verschieben.",
    relatedFormats: ["jpg", "png", "pdf"],
  },
  "vector-graphic": {
    slug: "vector-graphic",
    term: "Vektorgrafik",
    definition:
      "Mathematisch definiertes Bild (SVG, EPS) — skaliert ohne Unschärfe. Nicht für Fotos. Logos, Icons und technische Illustrationen sollten vektoriell sein.",
    relatedFormats: ["svg"],
  },
  "raster-graphic": {
    slug: "raster-graphic",
    term: "Rastergrafik",
    definition:
      "Pixelbasiertes Bild (JPG, PNG, WebP). Vergrößern verursacht Unschärfe. Fotos und 3D-Renderings sind Rastergrafiken.",
    relatedFormats: ["jpg", "png", "webp"],
  },
  ocr: {
    slug: "ocr",
    term: "OCR (Texterkennung)",
    definition:
      "Technologie zum Extrahieren von Text aus Bildern oder PDF. PDF → DOCX nutzt oft OCR. Qualität hängt von der Lesbarkeit des Originals und der Sprache ab.",
    relatedFormats: ["pdf", "docx"],
  },
  "dpi-print": {
    slug: "dpi-print",
    term: "Druckauflösung",
    definition:
      "Minimum für qualitativ hochwertigen Druck: 300 DPI für Fotos, 150 DPI für Text. Ein 1000×1000 px Bild bei 300 DPI druckt auf ca. 8,5×8,5 cm.",
    relatedFormats: ["jpg", "png", "pdf"],
  },
  hash: {
    slug: "hash",
    term: "Datei-Hash",
    definition:
      "Eindeutiger Datei-Fingerabdruck (MD5, SHA-256). Zwei identische Dateien haben denselben Hash. Wird zur Integritätsprüfung nach Download oder Konvertierung verwendet.",
  },
  encryption: {
    slug: "encryption",
    term: "Verschlüsselung (HTTPS/TLS)",
    definition:
      "Toolando.tech nutzt HTTPS — an den Server gesendete Dateien werden während der Übertragung verschlüsselt. Dateien werden nach der Konvertierung gelöscht. Verschlüsselung ersetzt keine Vorsicht bei sensiblen Dokumenten.",
  },
}

const termsEs: Record<GlossarySlug, GlossaryTerm> = {
  bitrate: {
    slug: "bitrate",
    term: "Bitrate",
    definition:
      "Cantidad de datos almacenados por segundo de audio o video (p. ej. 128 kbps, 320 kbps). Mayor bitrate = mejor calidad, pero archivo más grande. Para conversión MP3 use al menos 192–256 kbps.",
    relatedFormats: ["mp3", "aac", "mp4"],
  },
  codec: {
    slug: "codec",
    term: "Códec",
    definition:
      "Algoritmo de codificación/decodificación de datos multimedia (p. ej. H.264 video, AAC audio, JPEG imagen). El formato de archivo (MP4, JPG) es un contenedor — el códec define la compresión.",
    relatedFormats: ["mp4", "mp3", "jpg"],
  },
  "lossy-compression": {
    slug: "lossy-compression",
    term: "Compresión con pérdida",
    definition:
      "Reduce el tamaño del archivo eliminando datos de forma permanente (MP3, JPG, AAC). Cada reconversión degrada la calidad. La información perdida no se puede recuperar.",
    relatedFormats: ["mp3", "jpg", "aac"],
  },
  "lossless-compression": {
    slug: "lossless-compression",
    term: "Compresión sin pérdida",
    definition:
      "Reduce el tamaño del archivo sin perder datos (FLAC, PNG, ZIP). Tras decodificar obtiene una copia idéntica. Archivos más grandes que con compresión con pérdida.",
    relatedFormats: ["flac", "png", "wav"],
  },
  "container-format": {
    slug: "container-format",
    term: "Formato contenedor",
    definition:
      "Envoltorio que combina flujos de video, audio y subtítulos (MP4, MKV, AVI). El contenedor no define la calidad — lo hace el códec interno (H.264, AAC).",
    relatedFormats: ["mp4", "mkv", "avi"],
  },
  "mime-type": {
    slug: "mime-type",
    term: "Tipo MIME",
    definition:
      "Identificador estándar del tipo de archivo enviado por servidores (p. ej. image/jpeg, application/pdf). Navegadores y sistemas operativos usan MIME para elegir la app de apertura.",
    relatedFormats: ["pdf", "jpg", "json"],
  },
  resolution: {
    slug: "resolution",
    term: "Resolución",
    definition:
      "Número de píxeles en una imagen o fotograma de video (p. ej. 1920×1080 = Full HD). Mayor resolución = más detalle, pero archivo más grande. Reducir (4K → 1080p) pierde detalle de forma permanente.",
    relatedFormats: ["mp4", "jpg", "png"],
  },
  dpi: {
    slug: "dpi",
    term: "DPI (puntos por pulgada)",
    definition:
      "Densidad de píxeles para impresión. 72 DPI basta para pantallas, 300 DPI es el estándar de impresión fotográfica. Cambiar el DPI sin cambiar los píxeles no mejora la calidad de la imagen.",
    relatedFormats: ["jpg", "png", "pdf"],
  },
  "alpha-channel": {
    slug: "alpha-channel",
    term: "Canal alfa (transparencia)",
    definition:
      "Capa adicional de imagen que define la transparencia de los píxeles. PNG y WebP admiten alfa, JPG no. Logos e iconos deben usar formatos con canal alfa.",
    relatedFormats: ["png", "webp"],
  },
  metadata: {
    slug: "metadata",
    term: "Metadatos",
    definition:
      "Datos que describen un archivo: fecha de la foto, modelo de cámara, autor, GPS. EXIF en JPG, ID3 en MP3. La conversión puede eliminar o modificar metadatos.",
    relatedFormats: ["jpg", "mp3", "mp4"],
  },
  transcoding: {
    slug: "transcoding",
    term: "Transcodificación",
    definition:
      "Conversión de un códec/formato a otro (p. ej. H.265 → H.264, FLAC → MP3). Requiere decodificación completa y recodificación — afecta la calidad y el tiempo de procesamiento.",
    relatedFormats: ["mp4", "mp3", "webm"],
  },
  "sample-rate": {
    slug: "sample-rate",
    term: "Frecuencia de muestreo",
    definition:
      "Muestras de audio por segundo (Hz). CD: 44100 Hz, grabaciones profesionales: 48000 o 96000 Hz. Mayor frecuencia = mayor ancho de banda, archivo más grande.",
    relatedFormats: ["wav", "mp3", "flac"],
  },
  "aspect-ratio": {
    slug: "aspect-ratio",
    term: "Relación de aspecto",
    definition:
      "Proporción ancho/alto (p. ej. 16:9, 4:3, 1:1). Instagram Stories: 9:16, YouTube: 16:9. Una relación incorrecta causa bandas negras o recorte.",
    relatedFormats: ["mp4", "jpg"],
  },
  "color-space": {
    slug: "color-space",
    term: "Espacio de color",
    definition:
      "Sistema de descripción del color (sRGB, Adobe RGB, CMYK). sRGB es el estándar web/pantalla. CMYK para impresión. Convertir entre espacios puede alterar los colores.",
    relatedFormats: ["jpg", "png", "pdf"],
  },
  "vector-graphic": {
    slug: "vector-graphic",
    term: "Gráfico vectorial",
    definition:
      "Imagen definida matemáticamente (SVG, EPS) — escala sin desenfoque. No apta para fotos. Logos, iconos e ilustraciones técnicas deben ser vectoriales.",
    relatedFormats: ["svg"],
  },
  "raster-graphic": {
    slug: "raster-graphic",
    term: "Gráfico raster",
    definition:
      "Imagen basada en píxeles (JPG, PNG, WebP). Ampliar causa desenfoque. Fotos y renders 3D son gráficos raster.",
    relatedFormats: ["jpg", "png", "webp"],
  },
  ocr: {
    slug: "ocr",
    term: "OCR (reconocimiento de texto)",
    definition:
      "Tecnología que extrae texto de imágenes o PDF. PDF → DOCX suele usar OCR. La calidad depende de la claridad del original y del idioma.",
    relatedFormats: ["pdf", "docx"],
  },
  "dpi-print": {
    slug: "dpi-print",
    term: "Resolución de impresión",
    definition:
      "Mínimo para impresión de calidad: 300 DPI para fotos, 150 DPI para texto. Una imagen de 1000×1000 px a 300 DPI imprime aproximadamente 8,5×8,5 cm.",
    relatedFormats: ["jpg", "png", "pdf"],
  },
  hash: {
    slug: "hash",
    term: "Hash del archivo",
    definition:
      "Huella digital única del archivo (MD5, SHA-256). Dos archivos idénticos comparten el mismo hash. Se usa para verificar la integridad tras descarga o conversión.",
  },
  encryption: {
    slug: "encryption",
    term: "Cifrado (HTTPS/TLS)",
    definition:
      "Toolando.tech usa HTTPS — los archivos enviados al servidor se cifran en tránsito. Se eliminan tras la conversión. El cifrado no sustituye la precaución con documentos sensibles.",
  },
}

const termsUk: Record<GlossarySlug, GlossaryTerm> = {
  bitrate: {
    slug: "bitrate",
    term: "Бітрейт",
    definition:
      "Обсяг даних на секунду аудіо або відео (напр. 128 kbps, 320 kbps). Вищий бітрейт = краща якість, але більший файл. Для конвертації MP3 використовуйте щонайменше 192–256 kbps.",
    relatedFormats: ["mp3", "aac", "mp4"],
  },
  codec: {
    slug: "codec",
    term: "Кодек",
    definition:
      "Алгоритм кодування/декодування мультимедійних даних (напр. H.264 відео, AAC аудіо, JPEG зображення). Формат файлу (MP4, JPG) — це контейнер; кодек визначає стиснення.",
    relatedFormats: ["mp4", "mp3", "jpg"],
  },
  "lossy-compression": {
    slug: "lossy-compression",
    term: "Стиснення з втратами",
    definition:
      "Зменшує розмір файлу через остаточне видалення даних (MP3, JPG, AAC). Кожна повторна конвертація погіршує якість. Втрачену інформацію неможливо відновити.",
    relatedFormats: ["mp3", "jpg", "aac"],
  },
  "lossless-compression": {
    slug: "lossless-compression",
    term: "Стиснення без втрат",
    definition:
      "Зменшує розмір файлу без втрати даних (FLAC, PNG, ZIP). Після декодування отримуєте ідентичну копію. Файли більші, ніж при стисненні з втратами.",
    relatedFormats: ["flac", "png", "wav"],
  },
  "container-format": {
    slug: "container-format",
    term: "Формат контейнера",
    definition:
      "Обгортка, що об'єднує відео-, аудіо- та субтитрові потоки (MP4, MKV, AVI). Контейнер не визначає якість — це робить кодек всередині (H.264, AAC).",
    relatedFormats: ["mp4", "mkv", "avi"],
  },
  "mime-type": {
    slug: "mime-type",
    term: "Тип MIME",
    definition:
      "Стандартний ідентифікатор типу файлу, який надсилає сервер (напр. image/jpeg, application/pdf). Браузери та ОС використовують MIME для вибору програми відкриття.",
    relatedFormats: ["pdf", "jpg", "json"],
  },
  resolution: {
    slug: "resolution",
    term: "Роздільна здатність",
    definition:
      "Кількість пікселів у зображенні або кадрі відео (напр. 1920×1080 = Full HD). Вища роздільна здатність = більше деталей, але більший файл. Зменшення (4K → 1080p) назавжди втрачає деталі.",
    relatedFormats: ["mp4", "jpg", "png"],
  },
  dpi: {
    slug: "dpi",
    term: "DPI (точок на дюйм)",
    definition:
      "Щільність пікселів для друку. 72 DPI достатньо для екрана, 300 DPI — стандарт фотодруку. Зміна DPI без зміни пікселів не покращує якість зображення.",
    relatedFormats: ["jpg", "png", "pdf"],
  },
  "alpha-channel": {
    slug: "alpha-channel",
    term: "Альфа-канал (прозорість)",
    definition:
      "Додатковий шар зображення, що визначає прозорість пікселів. PNG і WebP підтримують альфа, JPG — ні. Логотипи та іконки слід зберігати у форматах з альфа-каналом.",
    relatedFormats: ["png", "webp"],
  },
  metadata: {
    slug: "metadata",
    term: "Метадані",
    definition:
      "Дані, що описують файл: дата знімка, модель камери, автор, GPS. EXIF у JPG, ID3 у MP3. Конвертація може видалити або змінити метадані.",
    relatedFormats: ["jpg", "mp3", "mp4"],
  },
  transcoding: {
    slug: "transcoding",
    term: "Транскодування",
    definition:
      "Конвертація з одного кодека/формату в інший (напр. H.265 → H.264, FLAC → MP3). Потребує повного декодування та повторного кодування — впливає на якість і час обробки.",
    relatedFormats: ["mp4", "mp3", "webm"],
  },
  "sample-rate": {
    slug: "sample-rate",
    term: "Частота дискретизації",
    definition:
      "Аудіовибірок на секунду (Гц). CD: 44100 Гц, професійні записи: 48000 або 96000 Гц. Вища частота = ширша смуга пропускання, більший файл.",
    relatedFormats: ["wav", "mp3", "flac"],
  },
  "aspect-ratio": {
    slug: "aspect-ratio",
    term: "Співвідношення сторін",
    definition:
      "Співвідношення ширини до висоти (напр. 16:9, 4:3, 1:1). Instagram Stories: 9:16, YouTube: 16:9. Неправильне співвідношення спричиняє чорні смуги або обрізання.",
    relatedFormats: ["mp4", "jpg"],
  },
  "color-space": {
    slug: "color-space",
    term: "Колірний простір",
    definition:
      "Система опису кольорів (sRGB, Adobe RGB, CMYK). sRGB — стандарт вебу та екранів. CMYK — для друку. Конвертація між просторами може змінити відтінки.",
    relatedFormats: ["jpg", "png", "pdf"],
  },
  "vector-graphic": {
    slug: "vector-graphic",
    term: "Векторна графіка",
    definition:
      "Зображення, описане математично (SVG, EPS) — масштабується без розмиття. Не підходить для фотографій. Логотипи, іконки та технічні ілюстрації мають бути векторними.",
    relatedFormats: ["svg"],
  },
  "raster-graphic": {
    slug: "raster-graphic",
    term: "Растрова графіка",
    definition:
      "Зображення з пікселів (JPG, PNG, WebP). Збільшення спричиняє розмиття. Фотографії та 3D-рендери — растрова графіка.",
    relatedFormats: ["jpg", "png", "webp"],
  },
  ocr: {
    slug: "ocr",
    term: "OCR (розпізнавання тексту)",
    definition:
      "Технологія витягування тексту зі зображень або PDF. PDF → DOCX часто використовує OCR. Якість залежить від чіткості оригіналу та мови документа.",
    relatedFormats: ["pdf", "docx"],
  },
  "dpi-print": {
    slug: "dpi-print",
    term: "Роздільна здатність друку",
    definition:
      "Мінімум для якісного друку: 300 DPI для фото, 150 DPI для тексту. Зображення 1000×1000 px при 300 DPI друкується приблизно 8,5×8,5 см.",
    relatedFormats: ["jpg", "png", "pdf"],
  },
  hash: {
    slug: "hash",
    term: "Хеш файлу",
    definition:
      "Унікальний «відбиток» файлу (MD5, SHA-256). Два однакові файли мають однаковий хеш. Використовується для перевірки цілісності після завантаження або конвертації.",
  },
  encryption: {
    slug: "encryption",
    term: "Шифрування (HTTPS/TLS)",
    definition:
      "Toolando.tech використовує HTTPS — файли, надіслані на сервер, шифруються під час передачі. Після конвертації файли видаляються. Шифрування не замінює обережність із конфіденційними документами.",
  },
}

const byLocale: Record<string, Record<GlossarySlug, GlossaryTerm>> = {
  pl: termsPl,
  en: termsEn,
  de: termsDe,
  es: termsEs,
  uk: termsUk,
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
