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
  fr: {
    audio: "Audio",
    video: "Vidéo",
    image: "Images",
    pdf: "PDF",
    doc: "Documents",
    data: "Données",
    archive: "Archives",
    font: "Polices",
  },
  it: {
    audio: "Audio",
    video: "Video",
    image: "Immagini",
    pdf: "PDF",
    doc: "Documenti",
    data: "Dati",
    archive: "Archivi",
    font: "Font",
  },
  pt: {
    audio: "Áudio",
    video: "Vídeo",
    image: "Imagens",
    pdf: "PDF",
    doc: "Documentos",
    data: "Dados",
    archive: "Arquivos",
    font: "Fontes",
  },
  nl: {
    audio: "Audio",
    video: "Video",
    image: "Afbeeldingen",
    pdf: "PDF",
    doc: "Documenten",
    data: "Gegevens",
    archive: "Archieven",
    font: "Lettertypen",
  },
  sv: {
    audio: "Ljud",
    video: "Video",
    image: "Bilder",
    pdf: "PDF",
    doc: "Dokument",
    data: "Data",
    archive: "Arkiv",
    font: "Teckensnitt",
  },
  no: {
    audio: "Lyd",
    video: "Video",
    image: "Bilder",
    pdf: "PDF",
    doc: "Dokumenter",
    data: "Data",
    archive: "Arkiver",
    font: "Skrifttyper",
  },
  da: {
    audio: "Lyd",
    video: "Video",
    image: "Billeder",
    pdf: "PDF",
    doc: "Dokumenter",
    data: "Data",
    archive: "Arkiver",
    font: "Skrifttyper",
  },
  fi: {
    audio: "Ääni",
    video: "Video",
    image: "Kuvat",
    pdf: "PDF",
    doc: "Asiakirjat",
    data: "Data",
    archive: "Arkistot",
    font: "Fontit",
  },
  cs: {
    audio: "Audio",
    video: "Video",
    image: "Obrázky",
    pdf: "PDF",
    doc: "Dokumenty",
    data: "Data",
    archive: "Archivy",
    font: "Fonty",
  },
  ro: {
    audio: "Audio",
    video: "Video",
    image: "Imagini",
    pdf: "PDF",
    doc: "Documente",
    data: "Date",
    archive: "Arhive",
    font: "Fonturi",
  },
  hu: {
    audio: "Hang",
    video: "Videó",
    image: "Képek",
    pdf: "PDF",
    doc: "Dokumentumok",
    data: "Adatok",
    archive: "Archívumok",
    font: "Betűtípusok",
  },
  el: {
    audio: "Ήχος",
    video: "Βίντεο",
    image: "Εικόνες",
    pdf: "PDF",
    doc: "Έγγραφα",
    data: "Δεδομένα",
    archive: "Αρχεία",
    font: "Γραμματοσειρές",
  },
  tr: {
    audio: "Ses",
    video: "Video",
    image: "Görseller",
    pdf: "PDF",
    doc: "Belgeler",
    data: "Veri",
    archive: "Arşivler",
    font: "Yazı tipleri",
  },
  ru: {
    audio: "Аудио",
    video: "Видео",
    image: "Изображения",
    pdf: "PDF",
    doc: "Документы",
    data: "Данные",
    archive: "Архивы",
    font: "Шрифты",
  },
  ar: {
    audio: "صوت",
    video: "فيديو",
    image: "صور",
    pdf: "PDF",
    doc: "مستندات",
    data: "بيانات",
    archive: "أرشيف",
    font: "خطوط",
  },
  zh: {
    audio: "音频",
    video: "视频",
    image: "图片",
    pdf: "PDF",
    doc: "文档",
    data: "数据",
    archive: "归档",
    font: "字体",
  },
  ja: {
    audio: "オーディオ",
    video: "動画",
    image: "画像",
    pdf: "PDF",
    doc: "ドキュメント",
    data: "データ",
    archive: "アーカイブ",
    font: "フォント",
  },
  ko: {
    audio: "오디오",
    video: "동영상",
    image: "이미지",
    pdf: "PDF",
    doc: "문서",
    data: "데이터",
    archive: "아카이브",
    font: "글꼴",
  },
  hi: {
    audio: "ऑडियो",
    video: "वीडियो",
    image: "छवियाँ",
    pdf: "PDF",
    doc: "दस्तावेज़",
    data: "डेटा",
    archive: "संग्रह",
    font: "फ़ॉन्ट",
  },
  id: {
    audio: "Audio",
    video: "Video",
    image: "Gambar",
    pdf: "PDF",
    doc: "Dokumen",
    data: "Data",
    archive: "Arsip",
    font: "Font",
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
  fr: (from, to) => `Convertir des fichiers ${from} au format ${to}.`,
  it: (from, to) => `Converti file ${from} nel formato ${to}.`,
  pt: (from, to) => `Converter ficheiros ${from} para o formato ${to}.`,
  nl: (from, to) => `${from}-bestanden converteren naar het ${to}-formaat.`,
  sv: (from, to) => `Konvertera ${from}-filer till formatet ${to}.`,
  no: (from, to) => `Konverter ${from}-filer til ${to}-format.`,
  da: (from, to) => `Konverter ${from}-filer til ${to}-format.`,
  fi: (from, to) => `Muunna ${from}-tiedostot ${to}-muotoon.`,
  cs: (from, to) => `Převod souborů ${from} do formátu ${to}.`,
  ro: (from, to) => `Conversia fișierelor ${from} în formatul ${to}.`,
  hu: (from, to) => `${from} fájlok konvertálása ${to} formátumba.`,
  el: (from, to) => `Μετατροπή αρχείων ${from} σε μορφή ${to}.`,
  tr: (from, to) => `${from} dosyalarını ${to} biçimine dönüştürün.`,
  ru: (from, to) => `Конвертация файлов ${from} в формат ${to}.`,
  ar: (from, to) => `تحويل ملفات ${from} إلى صيغة ${to}.`,
  zh: (from, to) => `将 ${from} 文件转换为 ${to} 格式。`,
  ja: (from, to) => `${from} ファイルを ${to} 形式に変換します。`,
  ko: (from, to) => `${from} 파일을 ${to} 형식으로 변환합니다.`,
  hi: (from, to) => `${from} फ़ाइलों को ${to} प्रारूप में बदलें।`,
  id: (from, to) => `Konversi file ${from} ke format ${to}.`,
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
    "kompresja-wideo": {
      category: "Wideo",
      name: "Kompresja wideo",
      description: "Zmniejsz rozmiar pliku wideo przez ponowne kodowanie H.264.",
      actionLabel: "Kompresuj wideo",
      acceptLabel: "MP4, WebM, MOV, MKV",
    },
    "numeracja-pdf": {
      category: "Dokumenty",
      name: "Numeracja stron PDF",
      description: "Dodaj numerację na każdej stronie dokumentu PDF.",
      actionLabel: "Dodaj numery stron",
      acceptLabel: "PDF",
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
    "kompresja-wideo": {
      category: "Video",
      name: "Compress video",
      description: "Reduce video file size by re-encoding with H.264.",
      actionLabel: "Compress video",
      acceptLabel: "MP4, WebM, MOV, MKV",
    },
    "numeracja-pdf": {
      category: "Documents",
      name: "Add PDF page numbers",
      description: "Add page numbering to every page of a PDF document.",
      actionLabel: "Add page numbers",
      acceptLabel: "PDF",
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
    "podzial-pdf": {
      category: "Dokumente",
      name: "PDF-Seiten aufteilen",
      description:
        "Teile ein PDF in separate Dateien auf — jede Seite einzeln oder einen ausgewählten Bereich. Ergebnis als ZIP-Archiv.",
      actionLabel: "PDF aufteilen",
      acceptLabel: "PDF",
    },
    "kompresja-pdf": {
      category: "Dokumente",
      name: "PDF komprimieren",
      description: "Reduziere die PDF-Dateigröße durch Optimierung der Dokumentstruktur.",
      actionLabel: "PDF komprimieren",
      acceptLabel: "PDF",
    },
    "obrot-pdf": {
      category: "Dokumente",
      name: "PDF-Seiten drehen",
      description: "Drehe alle Seiten eines PDF um 90°, 180° oder 270°.",
      actionLabel: "PDF drehen",
      acceptLabel: "PDF",
    },
    "pdf-do-tekstu": {
      category: "Dokumente",
      name: "PDF zu Text",
      description: "Extrahiere Klartext aus einer PDF-Datei als TXT-Download.",
      actionLabel: "Text extrahieren",
      acceptLabel: "PDF",
    },
    "zmiana-rozmiaru-obrazu": {
      category: "Bilder",
      name: "Bildgröße ändern",
      description: "Ändere die Bildabmessungen in Pixeln unter Beibehaltung des Seitenverhältnisses.",
      actionLabel: "Größe ändern",
      acceptLabel: "JPG, PNG, WebP, AVIF, TIFF, GIF",
    },
    "usun-exif": {
      category: "Bilder",
      name: "EXIF-Metadaten entfernen",
      description: "Entferne EXIF-Daten (GPS, Kamera, Daten) vor der Online-Veröffentlichung.",
      actionLabel: "EXIF entfernen",
      acceptLabel: "JPG, PNG, WebP, TIFF, HEIC",
    },
    "znak-wodny": {
      category: "Bilder",
      name: "Bildwasserzeichen",
      description: "Füge ein halbtransparentes Textwasserzeichen zu deinem Bild hinzu.",
      actionLabel: "Wasserzeichen hinzufügen",
      acceptLabel: "JPG, PNG, WebP",
    },
    "wyciszenie-wideo": {
      category: "Video",
      name: "Video stummschalten",
      description: "Entferne die Audiospur aus einer Videodatei.",
      actionLabel: "Video stummschalten",
      acceptLabel: "MP4, WebM, MOV, MKV",
    },
    "przyciecie-wideo": {
      category: "Video",
      name: "Video zuschneiden",
      description: "Schneide einen Videoclip zwischen Start- und Endzeit aus.",
      actionLabel: "Video zuschneiden",
      acceptLabel: "MP4, WebM, MOV, MKV",
    },
    "kompresja-wideo": {
      category: "Video",
      name: "Video komprimieren",
      description: "Reduziere die Videodateigröße durch erneutes Kodieren mit H.264.",
      actionLabel: "Video komprimieren",
      acceptLabel: "MP4, WebM, MOV, MKV",
    },
    "numeracja-pdf": {
      category: "Dokumente",
      name: "PDF-Seitenzahlen hinzufügen",
      description: "Füge auf jeder Seite eines PDF-Dokuments eine Nummerierung hinzu.",
      actionLabel: "Seitenzahlen hinzufügen",
      acceptLabel: "PDF",
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
    "podzial-pdf": {
      category: "Documentos",
      name: "Dividir páginas PDF",
      description:
        "Divide un PDF en archivos separados — cada página o un rango seleccionado. El resultado se empaqueta en un archivo ZIP.",
      actionLabel: "Dividir PDF",
      acceptLabel: "PDF",
    },
    "kompresja-pdf": {
      category: "Documentos",
      name: "Comprimir PDF",
      description: "Reduce el tamaño del archivo PDF optimizando la estructura del documento.",
      actionLabel: "Comprimir PDF",
      acceptLabel: "PDF",
    },
    "obrot-pdf": {
      category: "Documentos",
      name: "Rotar páginas PDF",
      description: "Rota todas las páginas de un PDF 90°, 180° o 270°.",
      actionLabel: "Rotar PDF",
      acceptLabel: "PDF",
    },
    "pdf-do-tekstu": {
      category: "Documentos",
      name: "PDF a texto",
      description: "Extrae texto plano de un archivo PDF a una descarga TXT.",
      actionLabel: "Extraer texto",
      acceptLabel: "PDF",
    },
    "zmiana-rozmiaru-obrazu": {
      category: "Imágenes",
      name: "Cambiar tamaño de imagen",
      description: "Cambia las dimensiones de la imagen en píxeles manteniendo la relación de aspecto.",
      actionLabel: "Cambiar tamaño",
      acceptLabel: "JPG, PNG, WebP, AVIF, TIFF, GIF",
    },
    "usun-exif": {
      category: "Imágenes",
      name: "Eliminar metadatos EXIF",
      description: "Elimina datos EXIF (GPS, cámara, fechas) antes de publicar en línea.",
      actionLabel: "Eliminar EXIF",
      acceptLabel: "JPG, PNG, WebP, TIFF, HEIC",
    },
    "znak-wodny": {
      category: "Imágenes",
      name: "Marca de agua en imagen",
      description: "Añade una marca de agua de texto semitransparente a tu imagen.",
      actionLabel: "Añadir marca de agua",
      acceptLabel: "JPG, PNG, WebP",
    },
    "wyciszenie-wideo": {
      category: "Vídeo",
      name: "Silenciar vídeo",
      description: "Elimina la pista de audio de un archivo de vídeo.",
      actionLabel: "Silenciar vídeo",
      acceptLabel: "MP4, WebM, MOV, MKV",
    },
    "przyciecie-wideo": {
      category: "Vídeo",
      name: "Recortar vídeo",
      description: "Corta un clip de vídeo entre una hora de inicio y de fin.",
      actionLabel: "Recortar vídeo",
      acceptLabel: "MP4, WebM, MOV, MKV",
    },
    "kompresja-wideo": {
      category: "Vídeo",
      name: "Comprimir vídeo",
      description: "Reduce el tamaño del archivo de vídeo recodificando con H.264.",
      actionLabel: "Comprimir vídeo",
      acceptLabel: "MP4, WebM, MOV, MKV",
    },
    "numeracja-pdf": {
      category: "Documentos",
      name: "Añadir números de página PDF",
      description: "Añade numeración a cada página de un documento PDF.",
      actionLabel: "Añadir números de página",
      acceptLabel: "PDF",
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
    "podzial-pdf": {
      category: "Документи",
      name: "Розділення PDF на сторінки",
      description:
        "Розділи PDF на окремі файли — кожну сторінку окремо або вибраний діапазон. Результат у архіві ZIP.",
      actionLabel: "Розділити PDF",
      acceptLabel: "PDF",
    },
    "kompresja-pdf": {
      category: "Документи",
      name: "Стиснення PDF",
      description: "Зменш розмір файлу PDF шляхом оптимізації структури документа.",
      actionLabel: "Стиснути PDF",
      acceptLabel: "PDF",
    },
    "obrot-pdf": {
      category: "Документи",
      name: "Поворот сторінок PDF",
      description: "Поверни всі сторінки PDF на 90°, 180° або 270°.",
      actionLabel: "Повернути PDF",
      acceptLabel: "PDF",
    },
    "pdf-do-tekstu": {
      category: "Документи",
      name: "PDF у текст",
      description: "Витягни звичайний текст із файлу PDF у завантаження TXT.",
      actionLabel: "Витягнути текст",
      acceptLabel: "PDF",
    },
    "zmiana-rozmiaru-obrazu": {
      category: "Зображення",
      name: "Зміна розміру зображення",
      description: "Зміни розміри зображення в пікселях зі збереженням пропорцій.",
      actionLabel: "Змінити розмір",
      acceptLabel: "JPG, PNG, WebP, AVIF, TIFF, GIF",
    },
    "usun-exif": {
      category: "Зображення",
      name: "Видалення метаданих EXIF",
      description: "Видали дані EXIF (GPS, камера, дати) перед публікацією онлайн.",
      actionLabel: "Видалити EXIF",
      acceptLabel: "JPG, PNG, WebP, TIFF, HEIC",
    },
    "znak-wodny": {
      category: "Зображення",
      name: "Водяний знак на зображенні",
      description: "Додай напівпрозорий текстовий водяний знак на зображення.",
      actionLabel: "Додати водяний знак",
      acceptLabel: "JPG, PNG, WebP",
    },
    "wyciszenie-wideo": {
      category: "Відео",
      name: "Вимкнення звуку відео",
      description: "Видали звукову доріжку з відеофайлу.",
      actionLabel: "Вимкнути звук",
      acceptLabel: "MP4, WebM, MOV, MKV",
    },
    "przyciecie-wideo": {
      category: "Відео",
      name: "Обрізання відео",
      description: "Виріж фрагмент відео між заданим часом початку та кінця.",
      actionLabel: "Обрізати відео",
      acceptLabel: "MP4, WebM, MOV, MKV",
    },
    "kompresja-wideo": {
      category: "Відео",
      name: "Стиснення відео",
      description: "Зменш розмір відеофайлу шляхом повторного кодування H.264.",
      actionLabel: "Стиснути відео",
      acceptLabel: "MP4, WebM, MOV, MKV",
    },
    "numeracja-pdf": {
      category: "Документи",
      name: "Нумерація сторінок PDF",
      description: "Додай нумерацію на кожну сторінку документа PDF.",
      actionLabel: "Додати номери сторінок",
      acceptLabel: "PDF",
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
  fr: {
    "generator-tekstu": "IA · Texte",
    podsumowanie: "IA · Documents",
    "generator-obrazow": "IA · Images",
    tlumacz: "IA · Texte",
    asystent: "IA · Chat",
  },
  it: {
    "generator-tekstu": "IA · Testo",
    podsumowanie: "IA · Documenti",
    "generator-obrazow": "IA · Immagini",
    tlumacz: "IA · Testo",
    asystent: "IA · Chat",
  },
  pt: {
    "generator-tekstu": "IA · Texto",
    podsumowanie: "IA · Documentos",
    "generator-obrazow": "IA · Imagens",
    tlumacz: "IA · Texto",
    asystent: "IA · Chat",
  },
  nl: {
    "generator-tekstu": "AI · Tekst",
    podsumowanie: "AI · Documenten",
    "generator-obrazow": "AI · Afbeeldingen",
    tlumacz: "AI · Tekst",
    asystent: "AI · Chat",
  },
  sv: {
    "generator-tekstu": "AI · Text",
    podsumowanie: "AI · Dokument",
    "generator-obrazow": "AI · Bilder",
    tlumacz: "AI · Text",
    asystent: "AI · Chatt",
  },
  no: {
    "generator-tekstu": "AI · Tekst",
    podsumowanie: "AI · Dokumenter",
    "generator-obrazow": "AI · Bilder",
    tlumacz: "AI · Tekst",
    asystent: "AI · Chat",
  },
  da: {
    "generator-tekstu": "AI · Tekst",
    podsumowanie: "AI · Dokumenter",
    "generator-obrazow": "AI · Billeder",
    tlumacz: "AI · Tekst",
    asystent: "AI · Chat",
  },
  fi: {
    "generator-tekstu": "AI · Teksti",
    podsumowanie: "AI · Asiakirjat",
    "generator-obrazow": "AI · Kuvat",
    tlumacz: "AI · Teksti",
    asystent: "AI · Chat",
  },
  cs: {
    "generator-tekstu": "AI · Text",
    podsumowanie: "AI · Dokumenty",
    "generator-obrazow": "AI · Obrázky",
    tlumacz: "AI · Text",
    asystent: "AI · Chat",
  },
  ro: {
    "generator-tekstu": "IA · Text",
    podsumowanie: "IA · Documente",
    "generator-obrazow": "IA · Imagini",
    tlumacz: "IA · Text",
    asystent: "IA · Chat",
  },
  hu: {
    "generator-tekstu": "MI · Szöveg",
    podsumowanie: "MI · Dokumentumok",
    "generator-obrazow": "MI · Képek",
    tlumacz: "MI · Szöveg",
    asystent: "MI · Chat",
  },
  el: {
    "generator-tekstu": "AI · Κείμενο",
    podsumowanie: "AI · Έγγραφα",
    "generator-obrazow": "AI · Εικόνες",
    tlumacz: "AI · Κείμενο",
    asystent: "AI · Συνομιλία",
  },
  tr: {
    "generator-tekstu": "YZ · Metin",
    podsumowanie: "YZ · Belgeler",
    "generator-obrazow": "YZ · Görseller",
    tlumacz: "YZ · Metin",
    asystent: "YZ · Sohbet",
  },
  ru: {
    "generator-tekstu": "ИИ · Текст",
    podsumowanie: "ИИ · Документы",
    "generator-obrazow": "ИИ · Изображения",
    tlumacz: "ИИ · Текст",
    asystent: "ИИ · Чат",
  },
  ar: {
    "generator-tekstu": "ذكاء اصطناعي · نص",
    podsumowanie: "ذكاء اصطناعي · مستندات",
    "generator-obrazow": "ذكاء اصطناعي · صور",
    tlumacz: "ذكاء اصطناعي · نص",
    asystent: "ذكاء اصطناعي · محادثة",
  },
  zh: {
    "generator-tekstu": "AI · 文本",
    podsumowanie: "AI · 文档",
    "generator-obrazow": "AI · 图像",
    tlumacz: "AI · 文本",
    asystent: "AI · 对话",
  },
  ja: {
    "generator-tekstu": "AI · テキスト",
    podsumowanie: "AI · ドキュメント",
    "generator-obrazow": "AI · 画像",
    tlumacz: "AI · テキスト",
    asystent: "AI · チャット",
  },
  ko: {
    "generator-tekstu": "AI · 텍스트",
    podsumowanie: "AI · 문서",
    "generator-obrazow": "AI · 이미지",
    tlumacz: "AI · 텍스트",
    asystent: "AI · 채팅",
  },
  hi: {
    "generator-tekstu": "AI · पाठ",
    podsumowanie: "AI · दस्तावेज़",
    "generator-obrazow": "AI · छवियाँ",
    tlumacz: "AI · पाठ",
    asystent: "AI · चैट",
  },
  id: {
    "generator-tekstu": "AI · Teks",
    podsumowanie: "AI · Dokumen",
    "generator-obrazow": "AI · Gambar",
    tlumacz: "AI · Teks",
    asystent: "AI · Chat",
  },
}

/** Localized category label for an AI tool, falling back to English. */
export function getAiCategoryLabel(locale: Locale, id: AiToolId): string {
  const map = aiCategoryMaps[locale] ?? aiCategoryMaps.en
  return map[id] ?? aiCategoryMaps.en[id]
}
