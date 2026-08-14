import type { Locale } from "./config"
import { resolveContentLocale } from "./content-locale"
import { localizedCategoryMeta } from "./category-meta/localized-categories"
import { localizedFeatureMeta } from "./feature-meta/localized-features"

import type { TextMeta, CategoryExtendedMeta } from "./category-meta/types"

export type { TextMeta, CategoryExtendedMeta } from "./category-meta/types"

/** Browse-category titles/descriptions keyed by category slug. */
const categoryMeta: Record<string, Record<string, CategoryExtendedMeta>> = {
  pl: {
    audio: {
      title: "Audio",
      description: "Konwersje między formatami dźwięku: MP3, WAV, FLAC i inne.",
      intro: "Formaty audio różnią się kompresją, jakością i kompatybilnością z urządzeniami. MP3 to standard dla muzyki i podcastów, WAV i FLAC zachowują pełną jakość dla montażu, a AAC i Opus są optymalne do streamingu. Poniżej znajdziesz wszystkie konwertery audio dostępne w Toolando.tech — każdy działa w przeglądarce, bez instalacji.",
      guide: "Wybierz format źródłowy i docelowy z listy poniżej. Jeśli nie wiesz, którego formatu potrzebujesz: do odsłuchu na telefonie wybierz MP3, do edycji w programie DAW — WAV lub FLAC, do publikacji w internecie — AAC lub Opus. Możesz też wyciągnąć dźwięk z pliku wideo (MP4, MOV) i zapisać go jako MP3 lub WAV.",
      faq: [
        { q: "Czy konwersja audio obniża jakość?", a: "Konwersja ze stratnego formatu (MP3, AAC) na inny stratny format obniża jakość. Konwersja na bezstratny format (WAV, FLAC) nie poprawi jakości, ale zachowa aktualny poziom." },
        { q: "Jaki format audio jest najlepszy?", a: "Zależy od celu: MP3 do codziennego słuchania, FLAC do archiwizacji muzyki, WAV do edycji, Opus do streamingu." },
        { q: "Czy mogę wyciągnąć dźwięk z wideo?", a: "Tak — konwertery w tej kategorii obsługują pliki wideo (MP4, MOV, AVI) jako źródło i zapisują samą ścieżkę audio." },
      ],
    },
    video: {
      title: "Wideo",
      description: "Konwersje wideo i eksport do GIF: MP4, WebM, MOV, MKV.",
      intro: "Formaty wideo różnią się rozmiarem, kompatybilnością i zastosowaniem. MP4 (H.264) to uniwersalny standard obsługiwany przez smartfony, YouTube i media społecznościowe. WebM jest lżejszy i lepiej nadaje się do stron internetowych. MOV to format Apple, a MKV obsługuje wiele ścieżek audio i napisów.",
      guide: "Wybierz konwerter z listy poniżej. Do publikacji w internecie najczęściej wystarczy MP4 lub WebM. Do edycji w programie montażowym zachowaj oryginalny format lub konwertuj na MOV. Aby stworzyć animowany GIF z fragmentu wideo, wybierz konwerter w kierunku GIF — pamiętaj, że GIF nie obsługuje dźwięku.",
      faq: [
        { q: "MP4 czy WebM — co wybrać?", a: "MP4 ma najszerszą kompatybilność. WebM daje mniejsze pliki i jest natywnie wspierany przez Chrome, Firefox i Edge." },
        { q: "Czy konwersja wideo trwa długo?", a: "Zależy od rozmiaru pliku i formatów. Pliki do 100 MB zazwyczaj konwertują się w kilkadziesiąt sekund." },
        { q: "Czy mogę konwertować wideo na GIF?", a: "Tak — wybierz konwerter z formatem docelowym GIF. Pamiętaj, że GIF ma ograniczoną paletę kolorów i brak dźwięku." },
      ],
    },
    image: {
      title: "Obrazy",
      description: "Konwersje grafiki rastrowej i wektorowej: PNG, JPG, WebP, AVIF.",
      intro: "Obrazy w internecie wymagają odpowiedniego formatu. JPG jest idealny do fotografii, PNG do grafik z przezroczystością, WebP i AVIF oferują lepszą kompresję dla stron www. SVG to format wektorowy dla logo i ikon, a HEIC to format zdjęć Apple wymagający konwersji dla szerszej kompatybilności.",
      guide: "Wybierz konwerter z listy. Do zdjęć na stronę www konwertuj JPG → WebP. Do logo z przezroczystym tłem użyj PNG. Do druku wybierz TIFF lub wysokiej jakości JPG. Zdjęcia z iPhone (HEIC) konwertuj na JPG, aby otworzyć je na Windows lub starszych urządzeniach.",
      faq: [
        { q: "PNG czy JPG?", a: "JPG do fotografii (mniejsze pliki). PNG do grafik, logo i zrzutów ekranu wymagających przezroczystości." },
        { q: "Co to jest WebP?", a: "Nowoczesny format Google — pliki o 25–35% mniejsze niż JPG przy tej samej jakości. Wspierany przez wszystkie nowoczesne przeglądarki." },
        { q: "Czy konwersja obrazu obniża jakość?", a: "Konwersja na format stratny (JPG, WebP) z obniżoną jakością zmniejsza plik kosztem detali. Konwersja PNG → PNG lub TIFF jest bezstratna." },
      ],
    },
    documents: {
      title: "Dokumenty",
      description: "PDF i pliki tekstowe: Markdown, HTML, TXT, DOCX.",
      intro: "Dokumenty tekstowe występują w wielu formatach — od prostego TXT, przez sformatowany DOCX, po uniwersalny PDF. Toolando.tech konwertuje między tymi formatami, umożliwiając edycję, publikację i archiwizację dokumentów bez instalowania pakietu Office.",
      guide: "PDF → DOCX pozwala edytować dokument w Wordzie. PDF → JPG/PNG wyodrębnia strony jako obrazy. Markdown → HTML konwertuje dokumentację do formatu webowego. DOCX → PDF tworzy dokument gotowy do druku i wysyłki.",
      faq: [
        { q: "Czy PDF → DOCX zachowuje formatowanie?", a: "Konwersja zachowuje tekst i podstawowe formatowanie. Skomplikowane układy mogą wymagać ręcznej korekty." },
        { q: "Co to jest Markdown?", a: "Lekki format tekstu ze składnią formatowania (# nagłówki, *pogrubienie*). Popularny w dokumentacji i na GitHubie." },
        { q: "Czy moje dokumenty są bezpieczne?", a: "Tak — pliki są przetwarzane wyłącznie w celu konwersji i natychmiast usuwane po zakończeniu." },
      ],
    },
    data: {
      title: "Dane",
      description: "Formaty danych: JSON, CSV, TSV, XML, YAML.",
      intro: "Formaty danych strukturalnych są podstawą w programowaniu, analizie danych i integracji systemów. JSON dominuje w API i konfiguracjach, CSV i TSV w arkuszach kalkulacyjnych, XML w systemach enterprise, a YAML w DevOps (Docker, Kubernetes).",
      guide: "Wybierz konwerter odpowiadający Twoim formatom źródłowemu i docelowemu. JSON → CSV otwiera odpowiedź API w Excelu. CSV → JSON przygotowuje dane do REST API. XML → JSON upraszcza pracę ze starszymi systemami. YAML → JSON konwertuje konfiguracje DevOps.",
      faq: [
        { q: "JSON vs XML — co wybrać?", a: "JSON jest lżejszy i powszechny w nowoczesnych API. XML jest używany w starszych systemach enterprise i RSS." },
        { q: "CSV vs TSV?", a: "CSV używa przecinków jako separatora (standard Excela). TSV używa tabulacji — lepszy, gdy dane zawierają przecinki." },
        { q: "Czy konwersja zachowuje strukturę danych?", a: "Tak — konwertery danych w Toolando.tech zachowują klucze, wartości i hierarchię przy konwersji między formatami." },
      ],
    },
    font: {
      title: "Fonty",
      description: "Konwersje czcionek webowych: TTF, OTF, WOFF, WOFF2.",
      intro: "Czcionki webowe wymagają odpowiedniego formatu do szybkiego ładowania strony. TTF i OTF to formaty desktopowe, WOFF i WOFF2 to zoptymalizowane formaty webowe z lepszą kompresją. WOFF2 jest rekomendowanym standardem dla nowoczesnych stron internetowych.",
      guide: "Przed wdrożeniem czcionki na stronę www konwertuj TTF/OTF → WOFF2. Jeśli potrzebujesz czcionki do projektu graficznego, konwertuj WOFF2 → TTF. Pamiętaj o licencji czcionki — konwersja formatu nie zmienia warunków licencyjnych.",
      faq: [
        { q: "WOFF vs WOFF2?", a: "WOFF2 ma lepszą kompresję (o ~30% mniejsze pliki) i jest wspierany przez wszystkie nowoczesne przeglądarki." },
        { q: "TTF vs OTF?", a: "OTF (OpenType) obsługuje więcej glifów typograficznych. TTF (TrueType) ma szerszą kompatybilność ze starszymi systemami." },
        { q: "Czy mogę konwertować czcionki komercyjne?", a: "Technicznie tak, ale upewnij się, że licencja czcionki pozwala na konwersję formatu i użycie webowe." },
      ],
    },
    archive: {
      title: "Archiwa",
      description: "Archiwa i kompresja: ZIP, RAR.",
      intro: "Archiwa pozwalają spakować wiele plików w jeden mniejszy plik. ZIP to uniwersalny standard wspierany natywnie przez Windows, macOS i Linux. RAR oferuje lepszą kompresję, ale wymaga specjalnego oprogramowania.",
      guide: "Konwertery archiwów w Toolando.tech pozwalają zmienić format archiwum. Jeśli otrzymałeś plik RAR i nie masz WinRAR, konwertuj RAR → ZIP, aby otworzyć go natywnie w systemie.",
      faq: [
        { q: "ZIP czy RAR?", a: "ZIP ma uniwersalną kompatybilność. RAR daje mniejsze pliki, ale wymaga dodatkowego oprogramowania." },
        { q: "Czy konwerter archiwów jest dostępny?", a: "Tak — RAR → ZIP działa od razu. ZIP → RAR wymaga WinRAR na PC lub serwera konwertera (instrukcja: docs/konwerter-vps-pl.md)." },
        { q: "Czy pliki w archiwum są bezpieczne?", a: "Tak — archiwa są przetwarzane wyłąncznie w celu konwersji i natychmiast usuwane." },
      ],
    },
  },
  en: {
    audio: {
      title: "Audio",
      description: "Conversions between audio formats: MP3, WAV, FLAC and more.",
      intro: "Audio formats differ in compression, quality, and device compatibility. MP3 is the standard for music and podcasts, WAV and FLAC preserve full quality for editing, and AAC and Opus are optimized for streaming. Below you'll find all audio converters available on Toolando.tech — each works in your browser with no installation.",
      guide: "Choose source and target formats from the list below. If you're unsure which format you need: for phone playback choose MP3, for DAW editing choose WAV or FLAC, for web publishing choose AAC or Opus. You can also extract audio from video files (MP4, MOV) and save it as MP3 or WAV.",
      faq: [
        { q: "Does audio conversion reduce quality?", a: "Converting from one lossy format (MP3, AAC) to another reduces quality. Converting to a lossless format (WAV, FLAC) won't improve quality but preserves the current level." },
        { q: "Which audio format is best?", a: "It depends on the purpose: MP3 for everyday listening, FLAC for music archiving, WAV for editing, Opus for streaming." },
        { q: "Can I extract audio from video?", a: "Yes — converters in this category accept video files (MP4, MOV, AVI) as source and save just the audio track." },
      ],
    },
    video: {
      title: "Video",
      description: "Video conversions and GIF export: MP4, WebM, MOV, MKV.",
      intro: "Video formats differ in size, compatibility, and use case. MP4 (H.264) is the universal standard supported by smartphones, YouTube, and social media. WebM is lighter and better suited for websites. MOV is Apple's format, and MKV supports multiple audio tracks and subtitles.",
      guide: "Choose a converter from the list below. For web publishing, MP4 or WebM is usually sufficient. For editing in video software, keep the original format or convert to MOV. To create an animated GIF from video, choose a converter targeting GIF — remember that GIF has no sound.",
      faq: [
        { q: "MP4 or WebM — which to choose?", a: "MP4 has the widest compatibility. WebM produces smaller files and is natively supported by Chrome, Firefox, and Edge." },
        { q: "Does video conversion take long?", a: "It depends on file size and formats. Files up to 100 MB usually convert in under a minute." },
        { q: "Can I convert video to GIF?", a: "Yes — choose a converter with GIF as the target format. Note that GIF has a limited color palette and no sound." },
      ],
    },
    image: {
      title: "Images",
      description: "Raster and vector graphics conversions: PNG, JPG, WebP, AVIF.",
      intro: "Images on the web require the right format. JPG is ideal for photos, PNG for graphics with transparency, WebP and AVIF offer better compression for websites. SVG is a vector format for logos and icons, and HEIC is Apple's photo format requiring conversion for wider compatibility.",
      guide: "Choose a converter from the list. For website photos, convert JPG → WebP. For logos with transparent backgrounds, use PNG. For print, choose TIFF or high-quality JPG. iPhone photos (HEIC) should be converted to JPG to open on Windows or older devices.",
      faq: [
        { q: "PNG or JPG?", a: "JPG for photos (smaller files). PNG for graphics, logos, and screenshots requiring transparency." },
        { q: "What is WebP?", a: "Google's modern format — files 25–35% smaller than JPG at the same quality. Supported by all modern browsers." },
        { q: "Does image conversion reduce quality?", a: "Converting to a lossy format (JPG, WebP) with reduced quality shrinks the file at the cost of detail. PNG → PNG or TIFF conversion is lossless." },
      ],
    },
    documents: {
      title: "Documents",
      description: "PDF and text files: Markdown, HTML, TXT, DOCX.",
      intro: "Text documents come in many formats — from plain TXT, through formatted DOCX, to universal PDF. Toolando.tech converts between these formats, enabling editing, publishing, and archiving documents without installing Office.",
      guide: "PDF → DOCX lets you edit a document in Word. PDF → JPG/PNG extracts pages as images. Markdown → HTML converts documentation to web format. DOCX → PDF creates a document ready for printing and sharing.",
      faq: [
        { q: "Does PDF → DOCX preserve formatting?", a: "Conversion preserves text and basic formatting. Complex layouts may need manual adjustment." },
        { q: "What is Markdown?", a: "A lightweight text format with formatting syntax (# headings, *bold*). Popular in documentation and on GitHub." },
        { q: "Are my documents safe?", a: "Yes — files are processed solely for conversion and deleted immediately afterward." },
      ],
    },
    data: {
      title: "Data",
      description: "Data formats: JSON, CSV, TSV, XML, YAML.",
      intro: "Structured data formats are fundamental in programming, data analysis, and system integration. JSON dominates in APIs and configs, CSV and TSV in spreadsheets, XML in enterprise systems, and YAML in DevOps (Docker, Kubernetes).",
      guide: "Choose a converter matching your source and target formats. JSON → CSV opens an API response in Excel. CSV → JSON prepares data for a REST API. XML → JSON simplifies working with legacy systems. YAML → JSON converts DevOps configs.",
      faq: [
        { q: "JSON vs XML — which to choose?", a: "JSON is lighter and common in modern APIs. XML is used in older enterprise systems and RSS." },
        { q: "CSV vs TSV?", a: "CSV uses commas as separators (Excel standard). TSV uses tabs — better when data contains commas." },
        { q: "Does conversion preserve data structure?", a: "Yes — data converters in Toolando.tech preserve keys, values, and hierarchy when converting between formats." },
      ],
    },
    font: {
      title: "Fonts",
      description: "Web font conversions: TTF, OTF, WOFF, WOFF2.",
      intro: "Web fonts require the right format for fast page loading. TTF and OTF are desktop formats, WOFF and WOFF2 are optimized web formats with better compression. WOFF2 is the recommended standard for modern websites.",
      guide: "Before deploying a font on your website, convert TTF/OTF → WOFF2. If you need a font for a graphic design project, convert WOFF2 → TTF. Remember the font license — converting the format doesn't change licensing terms.",
      faq: [
        { q: "WOFF vs WOFF2?", a: "WOFF2 has better compression (~30% smaller files) and is supported by all modern browsers." },
        { q: "TTF vs OTF?", a: "OTF (OpenType) supports more typographic glyphs. TTF (TrueType) has wider compatibility with older systems." },
        { q: "Can I convert commercial fonts?", a: "Technically yes, but make sure the font license allows format conversion and web use." },
      ],
    },
    archive: {
      title: "Archives",
      description: "Archives and compression: ZIP, RAR.",
      intro: "Archives let you pack multiple files into one smaller file. ZIP is the universal standard natively supported by Windows, macOS, and Linux. RAR offers better compression but requires special software.",
      guide: "Archive converters in Toolando.tech let you change archive format. If you received a RAR file and don't have WinRAR, convert RAR → ZIP to open it natively in your system.",
      faq: [
        { q: "ZIP or RAR?", a: "ZIP has universal compatibility. RAR produces smaller files but requires additional software." },
        { q: "Is the archive converter available?", a: "Yes — RAR → ZIP works out of the box. ZIP → RAR needs WinRAR locally or the VPS converter service." },
        { q: "Are files in the archive safe?", a: "Yes — archives are processed solely for conversion and deleted immediately." },
      ],
    },
  },
  ...localizedCategoryMeta,
}

/** Featured tool cards keyed by tool id. */
const featureMeta: Record<string, Record<string, TextMeta>> = {
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
  ...localizedFeatureMeta,
}

export function getCategoryMeta(locale: Locale, slug: string): CategoryExtendedMeta | undefined {
  const resolved = resolveContentLocale(locale)
  const map = categoryMeta[resolved] ?? categoryMeta.en
  return map[slug] ?? categoryMeta.en[slug]
}

export function getFeatureMeta(locale: Locale, id: string): TextMeta | undefined {
  const resolved = resolveContentLocale(locale)
  const map = featureMeta[resolved] ?? featureMeta.en
  return map[id] ?? featureMeta.en[id]
}
