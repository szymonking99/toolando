import type { ToolConfig } from "@/lib/tools"
import type { Locale } from "./config"
import {
  getConversionQualityNote,
  getConversionTips,
} from "./conversion-quality"
import { getFormatProfile } from "./formats"

export type ToolPageContent = {
  extendedDescription: string
  sourceFormatInfo: string
  targetFormatInfo: string
  whenToUse: string[]
  steps: string[]
  faq: { q: string; a: string }[]
  qualityNote?: string
  tips: string[]
  sourceFormatId: string
  targetFormatId: string
}

type FormatInfo = { name: string; description: string }

const formatInfo: Record<Locale, Record<string, FormatInfo>> = {
  pl: {
    mp3: { name: "MP3", description: "Najpopularniejszy format audio ze stratną kompresją. Pliki MP3 są małe i działają na praktycznie każdym urządzeniu — idealne do muzyki, podcastów i nagrań głosowych." },
    wav: { name: "WAV", description: "Bezstratny format audio bez kompresji. Pliki WAV są duże, ale zachowują pełną jakość dźwięku — preferowany w studiach nagraniowych i montażu wideo." },
    flac: { name: "FLAC", description: "Bezstratna kompresja audio. FLAC daje jakość jak WAV przy mniejszym rozmiarze pliku — popularny wśród audiofilów i kolekcjonerów muzyki." },
    ogg: { name: "OGG", description: "Otwarty format audio (Vorbis/Opus). OGG oferuje dobrą jakość przy małym rozmiarze i jest powszechnie używany w grach oraz aplikacjach open source." },
    m4a: { name: "M4A", description: "Format audio oparty na AAC, stosowany przez Apple i YouTube. M4A zapewnia lepszą jakość niż MP3 przy podobnym rozmiarze pliku." },
    aac: { name: "AAC", description: "Nowoczesny format audio ze stratną kompresją, lepszy od MP3 przy tym samym bitrate. Używany w streamingu, iTunes i wielu platformach wideo." },
    opus: { name: "Opus", description: "Wydajny kodek audio zaprojektowany do streamingu i VoIP. Opus doskonale radzi sobie z mową i muzyką przy bardzo niskich bitrate." },
    aiff: { name: "AIFF", description: "Bezstratny format audio stworzony przez Apple. AIFF jest odpowiednikiem WAV na systemach Mac i profesjonalnych stacjach roboczych." },
    wma: { name: "WMA", description: "Format audio Microsoftu (Windows Media Audio). WMA był popularny w ekosystemie Windows, choć dziś częściej zastępowany jest przez MP3 i AAC." },
    mp4: { name: "MP4", description: "Uniwersalny kontener wideo z kodekiem H.264/H.265. MP4 to standard dla smartfonów, YouTube, mediów społecznościowych i większości odtwarzaczy." },
    webm: { name: "WebM", description: "Otwarty format wideo zoptymalizowany pod strony internetowe. WebM zapewnia dobrą jakość przy małym rozmiarze i jest natywnie wspierany przez przeglądarki." },
    mov: { name: "MOV", description: "Format wideo Apple (QuickTime). MOV jest standardem w montażu wideo na Macu i często używany przez kamery i smartfony Apple." },
    avi: { name: "AVI", description: "Starszy, ale wszechstronny format wideo Microsoftu. AVI obsługuje wiele kodeków, choć pliki bywają duże w porównaniu z MP4." },
    mkv: { name: "MKV", description: "Elastyczny kontener wideo (Matroska) obsługujący wiele ścieżek audio, napisów i rozdziałów. Popularny w filmach i anime." },
    flv: { name: "FLV", description: "Format wideo Flash Video, dawniej używany w streamingu online. FLV jest dziś rzadko stosowany, ale nadal spotykany w starszych nagraniach." },
    wmv: { name: "WMV", description: "Format wideo Microsoftu (Windows Media Video). WMV był popularny w systemach Windows, lecz dziś częściej zastępowany jest formatem MP4." },
    "3gp": { name: "3GP", description: "Lekki format wideo zaprojektowany dla starszych telefonów komórkowych. Pliki 3GP są małe, ale jakość obrazu jest ograniczona." },
    m4v: { name: "M4V", description: "Wariant MP4 stosowany przez Apple (iTunes, Apple TV). M4V może zawierać DRM, ale bez zabezpieczeń jest kompatybilny z MP4." },
    mpg: { name: "MPG", description: "Format wideo MPEG-1/MPEG-2 używany w starszych kamerach i DVD. MPG jest kompatybilny z większością odtwarzaczy, lecz pliki bywają duże." },
    gif: { name: "GIF", description: "Format animowanych obrazów bez dźwięku. GIF jest idealny do krótkich animacji, memów i prostych grafik na stronach internetowych." },
    png: { name: "PNG", description: "Format obrazu bezstratny z obsługą przezroczystości. PNG jest idealny do grafik, logo, zrzutów ekranu i ilustracji wymagających ostrej jakości." },
    jpg: { name: "JPG", description: "Najpopularniejszy format zdjęć ze stratną kompresją. JPG tworzy małe pliki przy dobrej jakości — standard dla fotografii i internetu." },
    webp: { name: "WebP", description: "Nowoczesny format Google łączący kompresję stratną i bezstratną z obsługą animacji. WebP daje pliki o 25–35% mniejsze niż JPG przy tej samej jakości." },
    avif: { name: "AVIF", description: "Najnowszy format obrazu oparty na AV1. AVIF oferuje doskonałą kompresję i jest wspierany przez nowoczesne przeglądarki." },
    tiff: { name: "TIFF", description: "Format obrazu bezstratny stosowany w druku i fotografii profesjonalnej. TIFF zachowuje pełną jakość, ale pliki są duże." },
    svg: { name: "SVG", description: "Skalowalna grafika wektorowa oparta na XML. SVG idealnie nadaje się do logo, ikon i ilustracji, które muszą wyglądać ostro w każdej skali." },
    heic: { name: "HEIC", description: "Format zdjęć Apple (High Efficiency Image Container). HEIC daje lepszą kompresję niż JPG, lecz wymaga konwersji do JPG/PNG dla szerszej kompatybilności." },
    pdf: { name: "PDF", description: "Uniwersalny format dokumentów Adobe. PDF zachowuje układ, czcionki i grafikę niezależnie od urządzenia — standard w biurze, edukacji i druku." },
    docx: { name: "DOCX", description: "Format dokumentów Microsoft Word (Office Open XML). DOCX jest edytowalny i powszechnie używany w biurze i edukacji." },
    md: { name: "Markdown", description: "Lekki format tekstu ze składnią formatowania. Markdown jest popularny w dokumentacji, README na GitHubie i systemach CMS." },
    html: { name: "HTML", description: "Język znaczników stron internetowych. HTML definiuje strukturę i treść stron www i jest renderowany przez każdą przeglądarkę." },
    txt: { name: "TXT", description: "Prosty plik tekstowy bez formatowania. TXT jest uniwersalnie kompatybilny i idealny do notatek, logów i prostych dokumentów." },
    rtf: { name: "RTF", description: "Format tekstu sformatowanego (Rich Text Format). RTF obsługuje podstawowe formatowanie i jest kompatybilny z wieloma edytorami tekstu." },
    odt: { name: "ODT", description: "Format dokumentów OpenDocument (LibreOffice, OpenOffice). ODT to otwarty standard alternatywny dla DOCX." },
    json: { name: "JSON", description: "Format wymiany danych oparty na tekście. JSON jest standardem w API, konfiguracjach i aplikacjach webowych." },
    csv: { name: "CSV", description: "Plik wartości rozdzielanych przecinkami — standard dla arkuszy kalkulacyjnych i importu/eksportu danych tabelarycznych." },
    tsv: { name: "TSV", description: "Plik wartości rozdzielanych tabulatorem. TSV jest alternatywą dla CSV, popularną w analizie danych i bioinformatyce." },
    xml: { name: "XML", description: "Rozszerzalny język znaczników do strukturyzacji danych. XML jest używany w konfiguracjach, RSS, SOAP i wielu systemach enterprise." },
    yaml: { name: "YAML", description: "Czytelny format serializacji danych. YAML jest popularny w konfiguracjach DevOps (Docker, Kubernetes, CI/CD)." },
    zip: { name: "ZIP", description: "Najpopularniejszy format archiwum z kompresją. ZIP jest wspierany natywnie przez Windows, macOS i Linux." },
    rar: { name: "RAR", description: "Format archiwum z wyższą kompresją niż ZIP. RAR wymaga specjalnego oprogramowania do rozpakowania (np. WinRAR, 7-Zip)." },
    ttf: { name: "TTF", description: "Format czcionki TrueType — standard dla systemów Windows i macOS. TTF jest powszechnie używany w druku i na stronach www." },
    otf: { name: "OTF", description: "Format czcionki OpenType z rozszerzoną obsługą typografii. OTF jest kompatybilny z TTF i preferowany w projektach profesjonalnych." },
    woff: { name: "WOFF", description: "Format czcionki webowej (Web Open Font Format). WOFF jest zoptymalizowany do ładowania w przeglądarkach." },
    woff2: { name: "WOFF2", description: "Nowsza wersja WOFF z lepszą kompresją. WOFF2 to rekomendowany format czcionek webowych w nowoczesnych stronach." },
  },
  en: {
    mp3: { name: "MP3", description: "The most popular lossy audio format. MP3 files are small and work on virtually every device — ideal for music, podcasts, and voice recordings." },
    wav: { name: "WAV", description: "Uncompressed lossless audio. WAV files are large but preserve full sound quality — preferred in recording studios and video editing." },
    flac: { name: "FLAC", description: "Lossless audio compression. FLAC delivers WAV-quality sound at smaller file sizes — popular among audiophiles and music collectors." },
    ogg: { name: "OGG", description: "Open audio format (Vorbis/Opus). OGG offers good quality at small sizes and is widely used in games and open-source apps." },
    m4a: { name: "M4A", description: "AAC-based audio format used by Apple and YouTube. M4A provides better quality than MP3 at similar file sizes." },
    aac: { name: "AAC", description: "Modern lossy audio codec outperforming MP3 at the same bitrate. Used in streaming, iTunes, and many video platforms." },
    opus: { name: "Opus", description: "Efficient codec designed for streaming and VoIP. Opus handles both speech and music well at very low bitrates." },
    aiff: { name: "AIFF", description: "Lossless audio format created by Apple. AIFF is the Mac equivalent of WAV for professional workstations." },
    wma: { name: "WMA", description: "Microsoft audio format (Windows Media Audio). WMA was popular in the Windows ecosystem but is now often replaced by MP3 and AAC." },
    mp4: { name: "MP4", description: "Universal video container with H.264/H.265 codecs. MP4 is the standard for smartphones, YouTube, social media, and most players." },
    webm: { name: "WebM", description: "Open video format optimized for the web. WebM delivers good quality at small sizes and is natively supported by browsers." },
    mov: { name: "MOV", description: "Apple video format (QuickTime). MOV is the standard for video editing on Mac and is commonly used by Apple cameras." },
    avi: { name: "AVI", description: "Older but versatile Microsoft video format. AVI supports many codecs but files tend to be larger than MP4." },
    mkv: { name: "MKV", description: "Flexible video container (Matroska) supporting multiple audio tracks, subtitles, and chapters. Popular for films and anime." },
    flv: { name: "FLV", description: "Flash Video format once used for online streaming. FLV is rare today but still found in older recordings." },
    wmv: { name: "WMV", description: "Microsoft video format (Windows Media Video). WMV was popular on Windows but is now often replaced by MP4." },
    "3gp": { name: "3GP", description: "Lightweight video format designed for older mobile phones. 3GP files are small but image quality is limited." },
    m4v: { name: "M4V", description: "Apple variant of MP4 (iTunes, Apple TV). M4V may include DRM but is MP4-compatible when unprotected." },
    mpg: { name: "MPG", description: "MPEG-1/MPEG-2 video format used in older cameras and DVDs. MPG is widely compatible but files can be large." },
    gif: { name: "GIF", description: "Animated image format without sound. GIF is ideal for short animations, memes, and simple web graphics." },
    png: { name: "PNG", description: "Lossless image format with transparency support. PNG is ideal for graphics, logos, screenshots, and sharp illustrations." },
    jpg: { name: "JPG", description: "The most popular photo format with lossy compression. JPG creates small files with good quality — the web and photography standard." },
    webp: { name: "WebP", description: "Google's modern format combining lossy and lossless compression with animation support. WebP files are 25–35% smaller than JPG at the same quality." },
    avif: { name: "AVIF", description: "Newest image format based on AV1. AVIF offers excellent compression and is supported by modern browsers." },
    tiff: { name: "TIFF", description: "Lossless image format used in professional printing and photography. TIFF preserves full quality but files are large." },
    svg: { name: "SVG", description: "Scalable vector graphics based on XML. SVG is perfect for logos, icons, and illustrations that must stay sharp at any size." },
    heic: { name: "HEIC", description: "Apple photo format (High Efficiency Image Container). HEIC compresses better than JPG but needs conversion for wider compatibility." },
    pdf: { name: "PDF", description: "Universal Adobe document format. PDF preserves layout, fonts, and graphics on any device — the office, education, and print standard." },
    docx: { name: "DOCX", description: "Microsoft Word document format (Office Open XML). DOCX is editable and widely used in business and education." },
    md: { name: "Markdown", description: "Lightweight text format with formatting syntax. Markdown is popular in documentation, GitHub READMEs, and CMS systems." },
    html: { name: "HTML", description: "Hypertext markup language for web pages. HTML defines the structure and content of websites rendered by every browser." },
    txt: { name: "TXT", description: "Plain text file without formatting. TXT is universally compatible and ideal for notes, logs, and simple documents." },
    rtf: { name: "RTF", description: "Rich Text Format with basic styling. RTF is compatible with many text editors and word processors." },
    odt: { name: "ODT", description: "OpenDocument format (LibreOffice, OpenOffice). ODT is an open standard alternative to DOCX." },
    json: { name: "JSON", description: "Text-based data exchange format. JSON is the standard in APIs, configs, and web applications." },
    csv: { name: "CSV", description: "Comma-separated values — the standard for spreadsheets and tabular data import/export." },
    tsv: { name: "TSV", description: "Tab-separated values file. TSV is a CSV alternative popular in data analysis and bioinformatics." },
    xml: { name: "XML", description: "Extensible markup language for structured data. XML is used in configs, RSS, SOAP, and many enterprise systems." },
    yaml: { name: "YAML", description: "Human-readable data serialization format. YAML is popular in DevOps configs (Docker, Kubernetes, CI/CD)." },
    zip: { name: "ZIP", description: "The most popular compressed archive format. ZIP is natively supported by Windows, macOS, and Linux." },
    rar: { name: "RAR", description: "Archive format with higher compression than ZIP. RAR requires special software to extract (e.g. WinRAR, 7-Zip)." },
    ttf: { name: "TTF", description: "TrueType font format — standard for Windows and macOS. TTF is widely used in print and on websites." },
    otf: { name: "OTF", description: "OpenType font with extended typography support. OTF is TTF-compatible and preferred in professional projects." },
    woff: { name: "WOFF", description: "Web Open Font Format optimized for browser loading. WOFF is the standard web font format." },
    woff2: { name: "WOFF2", description: "Newer WOFF version with better compression. WOFF2 is the recommended web font format for modern sites." },
  },
}

// German, Spanish, Ukrainian — reuse English format descriptions for now;
// category-specific prose is localized below.
for (const loc of ["de", "es", "uk"] as const) {
  formatInfo[loc] = formatInfo.en
}

type ContentStrings = {
  extendedDesc: (from: string, to: string, fromName: string, toName: string) => string
  whenToUse: (from: string, to: string, category: string) => string[]
  steps: (from: string, to: string) => string[]
  faq: (from: string, to: string) => { q: string; a: string }[]
}

const contentStrings: Record<string, ContentStrings> = {
  pl: {
    extendedDesc: (from, to, fromName, toName) =>
      `Ten darmowy konwerter online zamienia pliki ${fromName} (${from.toUpperCase()}) na format ${toName} (${to.toUpperCase()}) bez instalowania programów. Wystarczy przesłać plik, a Toolando.tech przetworzy go na serwerze i zwróci gotowy wynik do pobrania. Pliki nie są przechowywane — po konwersji są natychmiast usuwane.`,
    whenToUse: (from, to, category) => {
      const base = [
        `Gdy potrzebujesz pliku ${to.toUpperCase()}, a masz go tylko w formacie ${from.toUpperCase()}.`,
        `Gdy urządzenie lub aplikacja, z której korzystasz, nie obsługuje formatu ${from.toUpperCase()}.`,
      ]
      const catSpecific: Record<string, string[]> = {
        audio: [`Gdy chcesz zmniejszyć rozmiar pliku audio lub poprawić kompatybilność z odtwarzaczem.`],
        video: [`Gdy musisz opublikować wideo na stronie internetowej lub w mediach społecznościowych w innym formacie.`],
        image: [`Gdy chcesz zoptymalizować obraz pod stronę www, e-mail lub druk.`],
        pdf: [`Gdy musisz wyodrębnić strony PDF jako obrazy lub przekonwertować dokument do edytowalnego formatu.`],
        doc: [`Gdy pracujesz z dokumentami tekstowymi i potrzebujesz innego formatu do edycji lub publikacji.`],
        data: [`Gdy przenosisz dane między systemami, API lub arkuszami kalkulacyjnymi w innym formacie.`],
        font: [`Gdy przygotowujesz czcionki webowe do wdrożenia na stronie internetowej.`],
        archive: [`Gdy musisz zmienić format archiwum, aby rozpakować je na innym systemie.`],
      }
      return [...base, ...(catSpecific[category] ?? [])]
    },
    steps: (from, to) => [
      `Kliknij „Wybierz plik" lub przeciągnij plik ${from.toUpperCase()} do obszaru uploadu.`,
      `Poczekaj na zakończenie przesyłania i konwersji — zazwyczaj trwa to kilka sekund.`,
      `Pobierz gotowy plik ${to.toUpperCase()} jednym kliknięciem.`,
      `Plik źródłowy jest usuwany z serwera natychmiast po zakończeniu operacji.`,
    ],
    faq: (from, to) => [
      {
        q: `Czy konwersja ${from.toUpperCase()} → ${to.toUpperCase()} jest darmowa?`,
        a: `Tak. Ten konwerter jest w pełni darmowy i nie wymaga zakładania konta. Możesz konwertować pliki bez limitu.`,
      },
      {
        q: `Czy mój plik ${from.toUpperCase()} jest bezpieczny?`,
        a: `Tak. Plik jest przetwarzany wyłącznie w celu konwersji i natychmiast usuwany po zakończeniu. Nie przechowujemy ani nie udostępniamy Twoich plików.`,
      },
      {
        q: `Jaki jest maksymalny rozmiar pliku?`,
        a: `Możesz przesłać pliki do 500 MB. Większe pliki mogą wymagać więcej czasu na przetwarzanie.`,
      },
      {
        q: `Czy jakość pliku ${to.toUpperCase()} będzie dobra?`,
        a: `Toolando.tech używa profesjonalnych bibliotek (FFmpeg, Sharp, MuPDF) do konwersji. Jakość zależy od formatów źródłowego i docelowego — przy konwersji ze stratnego na bezstratny format nie odzyskasz utraconej jakości, ale wynik będzie poprawny technicznie.`,
      },
    ],
  },
  en: {
    extendedDesc: (from, to, fromName, toName) =>
      `This free online converter turns ${fromName} (${from.toUpperCase()}) files into ${toName} (${to.toUpperCase()}) format with no software to install. Upload your file and Toolando.tech processes it on the server, then returns the result for download. Files are never stored — they are deleted immediately after conversion.`,
    whenToUse: (from, to, category) => {
      const base = [
        `When you need a ${to.toUpperCase()} file but only have it in ${from.toUpperCase()} format.`,
        `When the device or app you use doesn't support ${from.toUpperCase()} files.`,
      ]
      const catSpecific: Record<string, string[]> = {
        audio: [`When you want to reduce audio file size or improve player compatibility.`],
        video: [`When you need to publish video on a website or social media in a different format.`],
        image: [`When you want to optimize an image for the web, email, or print.`],
        pdf: [`When you need to extract PDF pages as images or convert a document to an editable format.`],
        doc: [`When you work with text documents and need a different format for editing or publishing.`],
        data: [`When you move data between systems, APIs, or spreadsheets in a different format.`],
        font: [`When you prepare web fonts for deployment on a website.`],
        archive: [`When you need to change archive format to extract it on another system.`],
      }
      return [...base, ...(catSpecific[category] ?? [])]
    },
    steps: (from, to) => [
      `Click "Choose a file" or drag your ${from.toUpperCase()} file into the upload area.`,
      `Wait for the upload and conversion to finish — this usually takes a few seconds.`,
      `Download the ready ${to.toUpperCase()} file with one click.`,
      `The source file is deleted from the server immediately after the operation completes.`,
    ],
    faq: (from, to) => [
      {
        q: `Is ${from.toUpperCase()} → ${to.toUpperCase()} conversion free?`,
        a: `Yes. This converter is completely free and requires no account. You can convert files without limits.`,
      },
      {
        q: `Is my ${from.toUpperCase()} file safe?`,
        a: `Yes. Your file is processed solely for conversion and deleted immediately afterward. We never store or share your files.`,
      },
      {
        q: `What is the maximum file size?`,
        a: `You can upload files up to 500 MB. Larger files may take longer to process.`,
      },
      {
        q: `Will the ${to.toUpperCase()} quality be good?`,
        a: `Toolando.tech uses professional libraries (FFmpeg, Sharp, MuPDF) for conversion. Quality depends on source and target formats — converting from lossy to lossless won't recover lost data, but the output will be technically correct.`,
      },
    ],
  },
}

function getFormat(locale: string, ext: string): FormatInfo {
  const map = formatInfo[locale] ?? formatInfo.en
  return (
    map[ext] ?? {
      name: ext.toUpperCase(),
      description: `${ext.toUpperCase()} file format.`,
    }
  )
}

function getStrings(locale: string): ContentStrings {
  return contentStrings[locale] ?? contentStrings.en
}

export function getToolPageContent(
  locale: string,
  tool: ToolConfig,
): ToolPageContent {
  const strings = getStrings(locale)
  const fromProfile = getFormatProfile(locale, tool.from)
  const toProfile = getFormatProfile(locale, tool.to)
  const fromInfo = fromProfile
    ? { name: fromProfile.name, description: fromProfile.intro }
    : getFormat(locale, tool.from)
  const toInfo = toProfile
    ? { name: toProfile.name, description: toProfile.intro }
    : getFormat(locale, tool.to)

  const extraFaq =
    locale === "pl"
      ? [
          {
            q: `Gdzie dowiem się więcej o formacie ${tool.from.toUpperCase()}?`,
            a: `Przeczytaj pełny opis formatu ${tool.from.toUpperCase()} w encyklopedii formatów Toolando.tech — znajdziesz tam zastosowania, zalety, wady i porównania.`,
          },
          {
            q: `Czy mogę konwertować ${tool.to.toUpperCase()} z powrotem na ${tool.from.toUpperCase()}?`,
            a: `Tak — wybierz konwerter ${tool.to.toUpperCase()} → ${tool.from.toUpperCase()} na liście narzędzi. Pamiętaj, że konwersja ze stratnego formatu na inny nie przywraca utraconej jakości.`,
          },
        ]
      : [
          {
            q: `Where can I learn more about ${tool.from.toUpperCase()}?`,
            a: `Read the full ${tool.from.toUpperCase()} format guide in the Toolando.tech formats encyclopedia — use cases, pros, cons, and comparisons.`,
          },
          {
            q: `Can I convert ${tool.to.toUpperCase()} back to ${tool.from.toUpperCase()}?`,
            a: `Yes — pick the ${tool.to.toUpperCase()} → ${tool.from.toUpperCase()} converter in the tools list. Converting from a lossy format won't restore lost quality.`,
          },
        ]

  return {
    extendedDescription: strings.extendedDesc(
      tool.from,
      tool.to,
      fromInfo.name,
      toInfo.name,
    ),
    sourceFormatInfo: fromProfile?.paragraphs.join(" ") ?? fromInfo.description,
    targetFormatInfo: toProfile?.paragraphs.join(" ") ?? toInfo.description,
    whenToUse: strings.whenToUse(tool.from, tool.to, tool.category),
    steps: strings.steps(tool.from, tool.to),
    faq: [...strings.faq(tool.from, tool.to), ...extraFaq],
    qualityNote: getConversionQualityNote(locale, tool.from, tool.to),
    tips: getConversionTips(locale, tool.from, tool.to),
    sourceFormatId: tool.from,
    targetFormatId: tool.to,
  }
}
