import type { Locale } from "./config"

export type TextMeta = { title: string; description: string }

/** Browse-category titles/descriptions keyed by category slug. */
const categoryMeta: Record<Locale, Record<string, TextMeta>> = {
  pl: {
    audio: { title: "Audio", description: "Konwersje między formatami dźwięku: MP3, WAV, FLAC i inne." },
    video: { title: "Wideo", description: "Konwersje wideo i eksport do GIF: MP4, WebM, MOV, MKV." },
    image: { title: "Obrazy", description: "Konwersje grafiki rastrowej i wektorowej: PNG, JPG, WebP, AVIF." },
    documents: { title: "Dokumenty", description: "PDF i pliki tekstowe: Markdown, HTML, TXT, DOCX." },
    data: { title: "Dane", description: "Formaty danych: JSON, CSV, TSV, XML, YAML." },
    font: { title: "Fonty", description: "Konwersje czcionek webowych: TTF, OTF, WOFF, WOFF2." },
    archive: { title: "Archiwa", description: "Archiwa i kompresja: ZIP, RAR." },
  },
  en: {
    audio: { title: "Audio", description: "Conversions between audio formats: MP3, WAV, FLAC and more." },
    video: { title: "Video", description: "Video conversions and GIF export: MP4, WebM, MOV, MKV." },
    image: { title: "Images", description: "Raster and vector graphics conversions: PNG, JPG, WebP, AVIF." },
    documents: { title: "Documents", description: "PDF and text files: Markdown, HTML, TXT, DOCX." },
    data: { title: "Data", description: "Data formats: JSON, CSV, TSV, XML, YAML." },
    font: { title: "Fonts", description: "Web font conversions: TTF, OTF, WOFF, WOFF2." },
    archive: { title: "Archives", description: "Archives and compression: ZIP, RAR." },
  },
  de: {
    audio: { title: "Audio", description: "Konvertierungen zwischen Audioformaten: MP3, WAV, FLAC und mehr." },
    video: { title: "Video", description: "Videokonvertierungen und GIF-Export: MP4, WebM, MOV, MKV." },
    image: { title: "Bilder", description: "Konvertierungen von Raster- und Vektorgrafiken: PNG, JPG, WebP, AVIF." },
    documents: { title: "Dokumente", description: "PDF- und Textdateien: Markdown, HTML, TXT, DOCX." },
    data: { title: "Daten", description: "Datenformate: JSON, CSV, TSV, XML, YAML." },
    font: { title: "Schriften", description: "Webschrift-Konvertierungen: TTF, OTF, WOFF, WOFF2." },
    archive: { title: "Archive", description: "Archive und Komprimierung: ZIP, RAR." },
  },
  es: {
    audio: { title: "Audio", description: "Conversiones entre formatos de audio: MP3, WAV, FLAC y más." },
    video: { title: "Vídeo", description: "Conversiones de vídeo y exportación a GIF: MP4, WebM, MOV, MKV." },
    image: { title: "Imágenes", description: "Conversiones de gráficos rasterizados y vectoriales: PNG, JPG, WebP, AVIF." },
    documents: { title: "Documentos", description: "Archivos PDF y de texto: Markdown, HTML, TXT, DOCX." },
    data: { title: "Datos", description: "Formatos de datos: JSON, CSV, TSV, XML, YAML." },
    font: { title: "Fuentes", description: "Conversiones de fuentes web: TTF, OTF, WOFF, WOFF2." },
    archive: { title: "Archivos", description: "Archivos y compresión: ZIP, RAR." },
  },
  uk: {
    audio: { title: "Аудіо", description: "Конвертації між аудіоформатами: MP3, WAV, FLAC та інші." },
    video: { title: "Відео", description: "Конвертації відео й експорт у GIF: MP4, WebM, MOV, MKV." },
    image: { title: "Зображення", description: "Конвертації растрової та векторної графіки: PNG, JPG, WebP, AVIF." },
    documents: { title: "Документи", description: "PDF і текстові файли: Markdown, HTML, TXT, DOCX." },
    data: { title: "Дані", description: "Формати даних: JSON, CSV, TSV, XML, YAML." },
    font: { title: "Шрифти", description: "Конвертації вебшрифтів: TTF, OTF, WOFF, WOFF2." },
    archive: { title: "Архіви", description: "Архіви та стиснення: ZIP, RAR." },
  },
}

/** Featured tool cards keyed by tool id. */
const featureMeta: Record<Locale, Record<string, TextMeta>> = {
  pl: {
    "pdf-to-jpg": { title: "Konwerter PDF → JPG", description: "Zamień strony dokumentu PDF na obrazy JPG w wysokiej jakości — szybko i bez instalacji." },
    "kompresor-obrazow": { title: "Kompresor obrazów", description: "Zmniejsz rozmiar zdjęć bez widocznej utraty jakości, aby przyspieszyć swoją stronę." },
    "mp3-to-wav": { title: "Konwerter MP3 → WAV", description: "Przekształć pliki audio MP3 na bezstratny format WAV bez utraty jakości dźwięku." },
    "mp4-to-webm": { title: "Konwerter MP4 → WebM", description: "Zamień wideo MP4 na lekki format WebM idealny do stron internetowych i streamingu." },
    "laczenie-pdf": { title: "Łączenie plików PDF", description: "Scal wiele dokumentów PDF w jeden plik, zachowując kolejność i pełną jakość treści." },
    "usuwanie-tla": { title: "Usuwanie tła ze zdjęcia", description: "Automatycznie wytnij tło ze zdjęcia jednym kliknięciem dzięki precyzyjnej sztucznej inteligencji." },
  },
  en: {
    "pdf-to-jpg": { title: "PDF → JPG converter", description: "Turn PDF pages into high-quality JPG images — fast and with no installation." },
    "kompresor-obrazow": { title: "Image compressor", description: "Reduce image size with no visible quality loss to speed up your website." },
    "mp3-to-wav": { title: "MP3 → WAV converter", description: "Convert MP3 audio to the lossless WAV format without losing sound quality." },
    "mp4-to-webm": { title: "MP4 → WebM converter", description: "Turn MP4 video into the lightweight WebM format, ideal for the web and streaming." },
    "laczenie-pdf": { title: "Merge PDF files", description: "Combine multiple PDF documents into one file, keeping order and full quality." },
    "usuwanie-tla": { title: "Remove image background", description: "Automatically cut out the background from a photo in one click with precise AI." },
  },
  de: {
    "pdf-to-jpg": { title: "PDF → JPG-Konverter", description: "Wandle PDF-Seiten in hochwertige JPG-Bilder um — schnell und ohne Installation." },
    "kompresor-obrazow": { title: "Bildkompressor", description: "Reduziere die Bildgröße ohne sichtbaren Qualitätsverlust, um deine Website zu beschleunigen." },
    "mp3-to-wav": { title: "MP3 → WAV-Konverter", description: "Konvertiere MP3-Audio in das verlustfreie WAV-Format ohne Klangverlust." },
    "mp4-to-webm": { title: "MP4 → WebM-Konverter", description: "Wandle MP4-Videos in das leichte WebM-Format um, ideal für Web und Streaming." },
    "laczenie-pdf": { title: "PDF-Dateien zusammenführen", description: "Füge mehrere PDF-Dokumente zu einer Datei zusammen, mit Reihenfolge und voller Qualität." },
    "usuwanie-tla": { title: "Bildhintergrund entfernen", description: "Entferne den Hintergrund eines Fotos automatisch mit einem Klick dank präziser KI." },
  },
  es: {
    "pdf-to-jpg": { title: "Conversor PDF → JPG", description: "Convierte páginas de PDF en imágenes JPG de alta calidad — rápido y sin instalación." },
    "kompresor-obrazow": { title: "Compresor de imágenes", description: "Reduce el tamaño de las imágenes sin pérdida visible de calidad para acelerar tu web." },
    "mp3-to-wav": { title: "Conversor MP3 → WAV", description: "Convierte audio MP3 al formato WAV sin pérdidas y sin perder calidad de sonido." },
    "mp4-to-webm": { title: "Conversor MP4 → WebM", description: "Convierte vídeo MP4 al ligero formato WebM, ideal para la web y el streaming." },
    "laczenie-pdf": { title: "Combinar archivos PDF", description: "Une varios documentos PDF en un solo archivo, manteniendo el orden y la calidad." },
    "usuwanie-tla": { title: "Quitar fondo de imagen", description: "Recorta automáticamente el fondo de una foto con un clic gracias a una IA precisa." },
  },
  uk: {
    "pdf-to-jpg": { title: "Конвертер PDF → JPG", description: "Перетвори сторінки PDF на якісні зображення JPG — швидко й без встановлення." },
    "kompresor-obrazow": { title: "Компресор зображень", description: "Зменш розмір зображень без помітної втрати якості, щоб пришвидшити свій сайт." },
    "mp3-to-wav": { title: "Конвертер MP3 → WAV", description: "Перетвори аудіо MP3 у формат WAV без втрат і без погіршення якості звуку." },
    "mp4-to-webm": { title: "Конвертер MP4 → WebM", description: "Перетвори відео MP4 у легкий формат WebM, ідеальний для вебу та стрімінгу." },
    "laczenie-pdf": { title: "Об’єднання файлів PDF", description: "Об’єднай кілька документів PDF в один файл зі збереженням порядку та якості." },
    "usuwanie-tla": { title: "Видалення фону зі зображення", description: "Автоматично видали фон із фото одним кліком завдяки точному ШІ." },
  },
}

export function getCategoryMeta(locale: Locale, slug: string): TextMeta | undefined {
  return categoryMeta[locale][slug] ?? categoryMeta.pl[slug]
}

export function getFeatureMeta(locale: Locale, id: string): TextMeta | undefined {
  return featureMeta[locale][id] ?? featureMeta.pl[id]
}
