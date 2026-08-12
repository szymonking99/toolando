import type { Locale } from "./config"
import type { ToolCategory } from "@/lib/tools"
import type { SpecialToolId } from "@/lib/special-tools"
import type { AiToolId } from "@/lib/ai-tools"

/* ------------------------------------------------------------------ */
/* Short category labels (for conversion tools)                        */
/* ------------------------------------------------------------------ */

type CategoryLabels = Record<ToolCategory, string>

const categoryLabels: Record<string, CategoryLabels> = {
  pl: {
    audio: "Audio",
    video: "Wideo",
    image: "Obrazy",
    pdf: "PDF",
    doc: "Dokumenty",
    data: "Dane",
    archive: "Archiwa",
    font: "Fonty",
  },
  en: {
    audio: "Audio",
    video: "Video",
    image: "Images",
    pdf: "PDF",
    doc: "Documents",
    data: "Data",
    archive: "Archives",
    font: "Fonts",
  },
  de: {
    audio: "Audio",
    video: "Video",
    image: "Bilder",
    pdf: "PDF",
    doc: "Dokumente",
    data: "Daten",
    archive: "Archive",
    font: "Schriften",
  },
  es: {
    audio: "Audio",
    video: "Vídeo",
    image: "Imágenes",
    pdf: "PDF",
    doc: "Documentos",
    data: "Datos",
    archive: "Archivos",
    font: "Fuentes",
  },
  uk: {
    audio: "Аудіо",
    video: "Відео",
    image: "Зображення",
    pdf: "PDF",
    doc: "Документи",
    data: "Дані",
    archive: "Архіви",
    font: "Шрифти",
  },
}

/** Localized short label for a conversion tool category, falling back to English. */
export function getCategoryLabel(locale: Locale, category: ToolCategory | string): string {
  const map = categoryLabels[locale] ?? categoryLabels.en
  return (
    map[category as ToolCategory] ??
    categoryLabels.en[category as ToolCategory] ??
    String(category)
  )
}

/* ------------------------------------------------------------------ */
/* Conversion descriptions (templated per locale)                     */
/* ------------------------------------------------------------------ */

const conversionTemplates: Record<string, (from: string, to: string) => string> = {
  pl: (from, to) => `Konwersja pliku ${from} do formatu ${to}.`,
  en: (from, to) => `Convert ${from} files to the ${to} format.`,
  de: (from, to) => `${from}-Dateien in das Format ${to} konvertieren.`,
  es: (from, to) => `Convierte archivos ${from} al formato ${to}.`,
  uk: (from, to) => `Конвертація файлів ${from} у формат ${to}.`,
}

/** Localized description for a `from → to` conversion, falling back to English. */
export function getConversionDescription(locale: Locale, from: string, to: string): string {
  const fn = conversionTemplates[locale] ?? conversionTemplates.en
  return fn(from.toUpperCase(), to.toUpperCase())
}

/* ------------------------------------------------------------------ */
/* Special tools                                                       */
/* ------------------------------------------------------------------ */

export type SpecialMeta = {
  category: string
  name: string
  description: string
  actionLabel: string
  acceptLabel: string
}

type SpecialMap = Partial<Record<SpecialToolId, SpecialMeta>>

const specialMaps: Record<string, SpecialMap> = {
  pl: {
    "kompresor-obrazow": {
      category: "Obrazy",
      name: "Kompresor obrazów",
      description:
        "Zmniejsz rozmiar zdjęć JPG, PNG, WebP lub AVIF bez widocznej utraty jakości. Dostosuj poziom kompresji suwakiem.",
      actionLabel: "Kompresuj obraz",
      acceptLabel: "JPG, PNG, WebP, AVIF, TIFF, GIF",
    },
    "laczenie-pdf": {
      category: "Dokumenty",
      name: "Łączenie plików PDF",
      description:
        "Scal wiele dokumentów PDF w jeden plik, zachowując kolejność i pełną jakość treści. Dodaj co najmniej dwa pliki.",
      actionLabel: "Połącz pliki PDF",
      acceptLabel: "PDF (co najmniej 2 pliki)",
    },
    "usuwanie-tla": {
      category: "Obrazy",
      name: "Usuwanie tła ze zdjęcia",
      description:
        "Automatycznie wytnij tło ze zdjęcia jednym kliknięciem dzięki sztucznej inteligencji. Wynik zapisywany jest jako PNG z przezroczystością.",
      actionLabel: "Usuń tło",
      acceptLabel: "JPG, PNG, WebP",
    },
    "podzial-pdf": {
      category: "Dokumenty",
      name: "Podział PDF na strony",
      description:
        "Rozdziel dokument PDF na osobne pliki — każda strona osobno albo wybrany zakres. Wynik w archiwum ZIP.",
      actionLabel: "Podziel PDF",
      acceptLabel: "PDF",
    },
    "kompresja-pdf": {
      category: "Dokumenty",
      name: "Kompresja PDF",
      description:
        "Zmniejsz rozmiar pliku PDF przez optymalizację struktury dokumentu.",
      actionLabel: "Kompresuj PDF",
      acceptLabel: "PDF",
    },
    "obrot-pdf": {
      category: "Dokumenty",
      name: "Obrót stron PDF",
      description: "Obróć wszystkie strony dokumentu PDF o 90°, 180° lub 270°.",
      actionLabel: "Obróć PDF",
      acceptLabel: "PDF",
    },
    "pdf-do-tekstu": {
      category: "Dokumenty",
      name: "PDF do tekstu",
      description: "Wyodrębnij tekst z pliku PDF do pliku TXT.",
      actionLabel: "Wyodrębnij tekst",
      acceptLabel: "PDF",
    },
    "zmiana-rozmiaru-obrazu": {
      category: "Obrazy",
      name: "Zmiana rozmiaru obrazu",
      description: "Zmień wymiary zdjęcia w pikselach z zachowaniem proporcji.",
      actionLabel: "Zmień rozmiar",
      acceptLabel: "JPG, PNG, WebP, AVIF, TIFF, GIF",
    },
    "usun-exif": {
      category: "Obrazy",
      name: "Usuń metadane EXIF",
      description: "Usuń dane EXIF (GPS, aparat, daty) ze zdjęcia przed publikacją.",
      actionLabel: "Usuń EXIF",
      acceptLabel: "JPG, PNG, WebP, TIFF, HEIC",
    },
    "znak-wodny": {
      category: "Obrazy",
      name: "Znak wodny na zdjęciu",
      description: "Dodaj półprzezroczysty tekstowy znak wodny na obrazie.",
      actionLabel: "Dodaj znak wodny",
      acceptLabel: "JPG, PNG, WebP",
    },
    "wyciszenie-wideo": {
      category: "Wideo",
      name: "Wyciszenie wideo",
      description: "Usuń ścieżkę dźwiękową z pliku wideo.",
      actionLabel: "Wycisz wideo",
      acceptLabel: "MP4, WebM, MOV, MKV",
    },
    "przyciecie-wideo": {
      category: "Wideo",
      name: "Przycięcie wideo",
      description: "Wytnij fragment wideo między podanym czasem początku i końca.",
      actionLabel: "Przytnij wideo",
      acceptLabel: "MP4, WebM, MOV, MKV",
    },
  },
  en: {
    "kompresor-obrazow": {
      category: "Images",
      name: "Image compressor",
      description:
        "Reduce the size of JPG, PNG, WebP or AVIF photos with no visible quality loss. Adjust the compression level with a slider.",
      actionLabel: "Compress image",
      acceptLabel: "JPG, PNG, WebP, AVIF, TIFF, GIF",
    },
    "laczenie-pdf": {
      category: "Documents",
      name: "Merge PDF files",
      description:
        "Combine multiple PDF documents into a single file, keeping the order and full content quality. Add at least two files.",
      actionLabel: "Merge PDF files",
      acceptLabel: "PDF (at least 2 files)",
    },
    "usuwanie-tla": {
      category: "Images",
      name: "Remove image background",
      description:
        "Automatically cut out the background from a photo in one click with AI. The result is saved as a PNG with transparency.",
      actionLabel: "Remove background",
      acceptLabel: "JPG, PNG, WebP",
    },
    "podzial-pdf": {
      category: "Documents",
      name: "Split PDF pages",
      description:
        "Split a PDF into separate files — every page or a selected range. Result packaged as a ZIP archive.",
      actionLabel: "Split PDF",
      acceptLabel: "PDF",
    },
    "kompresja-pdf": {
      category: "Documents",
      name: "Compress PDF",
      description: "Reduce PDF file size by optimizing the document structure.",
      actionLabel: "Compress PDF",
      acceptLabel: "PDF",
    },
    "obrot-pdf": {
      category: "Documents",
      name: "Rotate PDF pages",
      description: "Rotate all pages in a PDF by 90°, 180° or 270°.",
      actionLabel: "Rotate PDF",
      acceptLabel: "PDF",
    },
    "pdf-do-tekstu": {
      category: "Documents",
      name: "PDF to text",
      description: "Extract plain text from a PDF file into a TXT download.",
      actionLabel: "Extract text",
      acceptLabel: "PDF",
    },
    "zmiana-rozmiaru-obrazu": {
      category: "Images",
      name: "Resize image",
      description: "Change image dimensions in pixels while keeping aspect ratio.",
      actionLabel: "Resize image",
      acceptLabel: "JPG, PNG, WebP, AVIF, TIFF, GIF",
    },
    "usun-exif": {
      category: "Images",
      name: "Strip EXIF metadata",
      description: "Remove EXIF data (GPS, camera, dates) before publishing online.",
      actionLabel: "Strip EXIF",
      acceptLabel: "JPG, PNG, WebP, TIFF, HEIC",
    },
    "znak-wodny": {
      category: "Images",
      name: "Image watermark",
      description: "Add a semi-transparent text watermark to your image.",
      actionLabel: "Add watermark",
      acceptLabel: "JPG, PNG, WebP",
    },
    "wyciszenie-wideo": {
      category: "Video",
      name: "Mute video",
      description: "Remove the audio track from a video file.",
      actionLabel: "Mute video",
      acceptLabel: "MP4, WebM, MOV, MKV",
    },
    "przyciecie-wideo": {
      category: "Video",
      name: "Trim video",
      description: "Cut a video clip between a start and end time.",
      actionLabel: "Trim video",
      acceptLabel: "MP4, WebM, MOV, MKV",
    },
  },
  de: {
    "kompresor-obrazow": {
      category: "Bilder",
      name: "Bildkompressor",
      description:
        "Reduziere die Größe von JPG-, PNG-, WebP- oder AVIF-Fotos ohne sichtbaren Qualitätsverlust. Passe die Kompressionsstufe mit einem Schieberegler an.",
      actionLabel: "Bild komprimieren",
      acceptLabel: "JPG, PNG, WebP, AVIF, TIFF, GIF",
    },
    "laczenie-pdf": {
      category: "Dokumente",
      name: "PDF-Dateien zusammenführen",
      description:
        "Füge mehrere PDF-Dokumente zu einer Datei zusammen und behalte Reihenfolge und volle Qualität bei. Füge mindestens zwei Dateien hinzu.",
      actionLabel: "PDF-Dateien zusammenführen",
      acceptLabel: "PDF (mindestens 2 Dateien)",
    },
    "usuwanie-tla": {
      category: "Bilder",
      name: "Bildhintergrund entfernen",
      description:
        "Entferne den Hintergrund eines Fotos automatisch mit einem Klick dank KI. Das Ergebnis wird als PNG mit Transparenz gespeichert.",
      actionLabel: "Hintergrund entfernen",
      acceptLabel: "JPG, PNG, WebP",
    },
  },
  es: {
    "kompresor-obrazow": {
      category: "Imágenes",
      name: "Compresor de imágenes",
      description:
        "Reduce el tamaño de fotos JPG, PNG, WebP o AVIF sin pérdida visible de calidad. Ajusta el nivel de compresión con un control deslizante.",
      actionLabel: "Comprimir imagen",
      acceptLabel: "JPG, PNG, WebP, AVIF, TIFF, GIF",
    },
    "laczenie-pdf": {
      category: "Documentos",
      name: "Combinar archivos PDF",
      description:
        "Une varios documentos PDF en un solo archivo, manteniendo el orden y la calidad completa del contenido. Añade al menos dos archivos.",
      actionLabel: "Combinar archivos PDF",
      acceptLabel: "PDF (al menos 2 archivos)",
    },
    "usuwanie-tla": {
      category: "Imágenes",
      name: "Quitar fondo de imagen",
      description:
        "Recorta automáticamente el fondo de una foto con un clic gracias a la IA. El resultado se guarda como PNG con transparencia.",
      actionLabel: "Quitar fondo",
      acceptLabel: "JPG, PNG, WebP",
    },
  },
  uk: {
    "kompresor-obrazow": {
      category: "Зображення",
      name: "Компресор зображень",
      description:
        "Зменшуй розмір фото JPG, PNG, WebP чи AVIF без помітної втрати якості. Налаштуй рівень стиснення повзунком.",
      actionLabel: "Стиснути зображення",
      acceptLabel: "JPG, PNG, WebP, AVIF, TIFF, GIF",
    },
    "laczenie-pdf": {
      category: "Документи",
      name: "Об’єднання файлів PDF",
      description:
        "Об’єднай кілька документів PDF в один файл зі збереженням порядку та повної якості вмісту. Додай щонайменше два файли.",
      actionLabel: "Об’єднати файли PDF",
      acceptLabel: "PDF (щонайменше 2 файли)",
    },
    "usuwanie-tla": {
      category: "Зображення",
      name: "Видалення фону зі зображення",
      description:
        "Автоматично видали фон із фото одним кліком завдяки штучному інтелекту. Результат зберігається як PNG з прозорістю.",
      actionLabel: "Видалити фон",
      acceptLabel: "JPG, PNG, WebP",
    },
  },
}

/** Localized metadata for a special tool, falling back to English. */
export function getSpecialMeta(locale: Locale, id: SpecialToolId): SpecialMeta {
  const map = specialMaps[locale] ?? specialMaps.en
  return map[id] ?? specialMaps.en[id]
}

/* ------------------------------------------------------------------ */
/* AI tool category labels                                             */
/* ------------------------------------------------------------------ */

type AiCategoryMap = Record<AiToolId, string>

const aiCategoryMaps: Record<string, AiCategoryMap> = {
  pl: {
    "generator-tekstu": "AI · Tekst",
    podsumowanie: "AI · Dokumenty",
    "generator-obrazow": "AI · Obrazy",
    tlumacz: "AI · Tekst",
    asystent: "AI · Czat",
  },
  en: {
    "generator-tekstu": "AI · Text",
    podsumowanie: "AI · Documents",
    "generator-obrazow": "AI · Images",
    tlumacz: "AI · Text",
    asystent: "AI · Chat",
  },
  de: {
    "generator-tekstu": "KI · Text",
    podsumowanie: "KI · Dokumente",
    "generator-obrazow": "KI · Bilder",
    tlumacz: "KI · Text",
    asystent: "KI · Chat",
  },
  es: {
    "generator-tekstu": "IA · Texto",
    podsumowanie: "IA · Documentos",
    "generator-obrazow": "IA · Imágenes",
    tlumacz: "IA · Texto",
    asystent: "IA · Chat",
  },
  uk: {
    "generator-tekstu": "ШІ · Текст",
    podsumowanie: "ШІ · Документи",
    "generator-obrazow": "ШІ · Зображення",
    tlumacz: "ШІ · Текст",
    asystent: "ШІ · Чат",
  },
}

/** Localized category label for an AI tool, falling back to English. */
export function getAiCategoryLabel(locale: Locale, id: AiToolId): string {
  const map = aiCategoryMaps[locale] ?? aiCategoryMaps.en
  return map[id] ?? aiCategoryMaps.en[id]
}
