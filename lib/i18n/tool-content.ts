import type { ToolConfig } from "@/lib/tools"
import type { Locale } from "./config"
import {
  getConversionQualityNote,
  getConversionTips,
} from "./conversion-quality"
import { getFormatProfile } from "./formats"
import { extraContentStrings, extraExtraFaq } from "./tool-content/extra-locales"

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
  de: {
    mp3: { name: "MP3", description: "Das weltweit beliebteste verlustbehaftete Audioformat. MP3-Dateien sind klein und laufen auf praktisch jedem Gerät — ideal für Musik, Podcasts und Sprachaufnahmen." },
    wav: { name: "WAV", description: "Unkomprimiertes, verlustfreies Audio. WAV-Dateien sind groß, bewahren aber die volle Klangqualität — bevorzugt in Tonstudios und beim Videoschnitt." },
    flac: { name: "FLAC", description: "Verlustfreie Audiokompression. FLAC liefert WAV-Qualität bei kleinerer Dateigröße — beliebt bei Audiophilen und Musiksammlern." },
    ogg: { name: "OGG", description: "Offenes Audioformat (Vorbis/Opus). OGG bietet gute Qualität bei geringer Größe und ist in Spielen und Open-Source-Anwendungen weit verbreitet." },
    m4a: { name: "M4A", description: "AAC-basiertes Audioformat, das Apple und YouTube verwenden. M4A bietet bei ähnlicher Dateigröße bessere Qualität als MP3." },
    aac: { name: "AAC", description: "Moderner verlustbehafteter Audio-Codec, der MP3 bei gleicher Bitrate übertrifft. Wird beim Streaming, in iTunes und auf vielen Videoplattformen eingesetzt." },
    opus: { name: "Opus", description: "Effizienter Codec für Streaming und VoIP. Opus verarbeitet Sprache und Musik auch bei sehr niedrigen Bitraten hervorragend." },
    aiff: { name: "AIFF", description: "Verlustfreies Audioformat von Apple. AIFF ist das Mac-Pendant zu WAV für professionelle Workstations." },
    wma: { name: "WMA", description: "Microsofts Audioformat (Windows Media Audio). WMA war im Windows-Ökosystem verbreitet, wird heute aber meist durch MP3 und AAC ersetzt." },
    mp4: { name: "MP4", description: "Universeller Video-Container mit H.264/H.265-Codecs. MP4 ist der Standard für Smartphones, YouTube, soziale Medien und die meisten Player." },
    webm: { name: "WebM", description: "Offenes, fürs Web optimiertes Videoformat. WebM liefert gute Qualität bei geringer Dateigröße und wird von Browsern nativ unterstützt." },
    mov: { name: "MOV", description: "Apples Videoformat (QuickTime). MOV ist der Standard für den Videoschnitt am Mac und wird häufig von Apple-Kameras genutzt." },
    avi: { name: "AVI", description: "Älteres, aber vielseitiges Videoformat von Microsoft. AVI unterstützt viele Codecs, die Dateien sind jedoch meist größer als MP4." },
    mkv: { name: "MKV", description: "Flexibler Video-Container (Matroska) mit Unterstützung für mehrere Tonspuren, Untertitel und Kapitel. Beliebt bei Filmen und Anime." },
    flv: { name: "FLV", description: "Flash-Video-Format, das früher beim Online-Streaming verwendet wurde. FLV ist heute selten, findet sich aber noch in älteren Aufnahmen." },
    wmv: { name: "WMV", description: "Microsofts Videoformat (Windows Media Video). WMV war unter Windows verbreitet, wird heute aber meist durch MP4 ersetzt." },
    "3gp": { name: "3GP", description: "Leichtgewichtiges Videoformat für ältere Mobiltelefone. 3GP-Dateien sind klein, die Bildqualität ist jedoch begrenzt." },
    m4v: { name: "M4V", description: "Apples MP4-Variante (iTunes, Apple TV). M4V kann DRM enthalten, ist ohne Kopierschutz aber MP4-kompatibel." },
    mpg: { name: "MPG", description: "MPEG-1/MPEG-2-Videoformat aus älteren Kameras und von DVDs. MPG ist breit kompatibel, die Dateien können aber groß sein." },
    gif: { name: "GIF", description: "Format für animierte Bilder ohne Ton. GIF eignet sich ideal für kurze Animationen, Memes und einfache Webgrafiken." },
    png: { name: "PNG", description: "Verlustfreies Bildformat mit Transparenz. PNG ist ideal für Grafiken, Logos, Screenshots und scharfe Illustrationen." },
    jpg: { name: "JPG", description: "Das beliebteste Fotoformat mit verlustbehafteter Kompression. JPG erzeugt kleine Dateien bei guter Qualität — der Standard für Web und Fotografie." },
    webp: { name: "WebP", description: "Googles modernes Format mit verlustbehafteter und verlustfreier Kompression sowie Animationen. WebP-Dateien sind bei gleicher Qualität 25–35 % kleiner als JPG." },
    avif: { name: "AVIF", description: "Neuestes Bildformat auf Basis von AV1. AVIF bietet hervorragende Kompression und wird von modernen Browsern unterstützt." },
    tiff: { name: "TIFF", description: "Verlustfreies Bildformat für professionellen Druck und Fotografie. TIFF bewahrt die volle Qualität, die Dateien sind jedoch groß." },
    svg: { name: "SVG", description: "Skalierbare Vektorgrafik auf XML-Basis. SVG eignet sich perfekt für Logos, Icons und Illustrationen, die in jeder Größe scharf bleiben müssen." },
    heic: { name: "HEIC", description: "Apples Fotoformat (High Efficiency Image Container). HEIC komprimiert besser als JPG, muss für breitere Kompatibilität aber konvertiert werden." },
    pdf: { name: "PDF", description: "Universelles Dokumentformat von Adobe. PDF bewahrt Layout, Schriften und Grafiken auf jedem Gerät — der Standard in Büro, Bildung und Druck." },
    docx: { name: "DOCX", description: "Dokumentformat von Microsoft Word (Office Open XML). DOCX ist bearbeitbar und in Beruf und Bildung weit verbreitet." },
    md: { name: "Markdown", description: "Leichtgewichtiges Textformat mit Formatierungssyntax. Markdown ist in Dokumentationen, GitHub-READMEs und CMS-Systemen beliebt." },
    html: { name: "HTML", description: "Hypertext-Auszeichnungssprache für Webseiten. HTML definiert Struktur und Inhalt von Websites und wird von jedem Browser dargestellt." },
    txt: { name: "TXT", description: "Reine Textdatei ohne Formatierung. TXT ist universell kompatibel und ideal für Notizen, Logs und einfache Dokumente." },
    rtf: { name: "RTF", description: "Rich Text Format mit einfacher Formatierung. RTF ist mit vielen Texteditoren und Textverarbeitungen kompatibel." },
    odt: { name: "ODT", description: "OpenDocument-Format (LibreOffice, OpenOffice). ODT ist die offene Standardalternative zu DOCX." },
    json: { name: "JSON", description: "Textbasiertes Datenaustauschformat. JSON ist der Standard in APIs, Konfigurationen und Webanwendungen." },
    csv: { name: "CSV", description: "Kommagetrennte Werte — der Standard für Tabellenkalkulationen und den Import und Export tabellarischer Daten." },
    tsv: { name: "TSV", description: "Datei mit tabulatorgetrennten Werten. TSV ist eine CSV-Alternative, die in Datenanalyse und Bioinformatik beliebt ist." },
    xml: { name: "XML", description: "Erweiterbare Auszeichnungssprache für strukturierte Daten. XML wird in Konfigurationen, RSS, SOAP und vielen Unternehmenssystemen eingesetzt." },
    yaml: { name: "YAML", description: "Gut lesbares Format zur Datenserialisierung. YAML ist in DevOps-Konfigurationen beliebt (Docker, Kubernetes, CI/CD)." },
    zip: { name: "ZIP", description: "Das beliebteste komprimierte Archivformat. ZIP wird von Windows, macOS und Linux nativ unterstützt." },
    rar: { name: "RAR", description: "Archivformat mit stärkerer Kompression als ZIP. RAR benötigt zum Entpacken spezielle Software (z. B. WinRAR, 7-Zip)." },
    ttf: { name: "TTF", description: "TrueType-Schriftformat — Standard unter Windows und macOS. TTF wird im Druck und auf Websites häufig verwendet." },
    otf: { name: "OTF", description: "OpenType-Schrift mit erweiterten Typografie-Funktionen. OTF ist TTF-kompatibel und wird in professionellen Projekten bevorzugt." },
    woff: { name: "WOFF", description: "Web Open Font Format, optimiert für das Laden im Browser. WOFF ist das Standardformat für Webschriften." },
    woff2: { name: "WOFF2", description: "Neuere WOFF-Version mit besserer Kompression. WOFF2 ist das empfohlene Webfont-Format für moderne Websites." },
  },
  es: {
    mp3: { name: "MP3", description: "El formato de audio con pérdida más popular del mundo. Los archivos MP3 son pequeños y funcionan en prácticamente cualquier dispositivo: ideales para música, pódcasts y grabaciones de voz." },
    wav: { name: "WAV", description: "Audio sin comprimir y sin pérdida. Los archivos WAV son grandes, pero conservan toda la calidad de sonido: los preferidos en estudios de grabación y edición de vídeo." },
    flac: { name: "FLAC", description: "Compresión de audio sin pérdida. FLAC ofrece calidad WAV en archivos más pequeños: popular entre audiófilos y coleccionistas de música." },
    ogg: { name: "OGG", description: "Formato de audio abierto (Vorbis/Opus). OGG ofrece buena calidad en archivos pequeños y se usa mucho en videojuegos y aplicaciones de código abierto." },
    m4a: { name: "M4A", description: "Formato de audio basado en AAC que usan Apple y YouTube. M4A ofrece mejor calidad que MP3 con un tamaño de archivo similar." },
    aac: { name: "AAC", description: "Códec de audio con pérdida moderno que supera a MP3 con el mismo bitrate. Se usa en streaming, iTunes y muchas plataformas de vídeo." },
    opus: { name: "Opus", description: "Códec eficiente diseñado para streaming y VoIP. Opus maneja bien tanto la voz como la música con bitrates muy bajos." },
    aiff: { name: "AIFF", description: "Formato de audio sin pérdida creado por Apple. AIFF es el equivalente de WAV en Mac para estaciones de trabajo profesionales." },
    wma: { name: "WMA", description: "Formato de audio de Microsoft (Windows Media Audio). WMA fue popular en el ecosistema Windows, pero hoy suele sustituirse por MP3 y AAC." },
    mp4: { name: "MP4", description: "Contenedor de vídeo universal con códecs H.264/H.265. MP4 es el estándar para smartphones, YouTube, redes sociales y la mayoría de reproductores." },
    webm: { name: "WebM", description: "Formato de vídeo abierto optimizado para la web. WebM ofrece buena calidad en archivos pequeños y los navegadores lo admiten de forma nativa." },
    mov: { name: "MOV", description: "Formato de vídeo de Apple (QuickTime). MOV es el estándar para editar vídeo en Mac y lo usan habitualmente las cámaras de Apple." },
    avi: { name: "AVI", description: "Formato de vídeo de Microsoft, antiguo pero versátil. AVI admite muchos códecs, aunque los archivos suelen ser más grandes que en MP4." },
    mkv: { name: "MKV", description: "Contenedor de vídeo flexible (Matroska) compatible con varias pistas de audio, subtítulos y capítulos. Muy usado en películas y anime." },
    flv: { name: "FLV", description: "Formato Flash Video que se usaba para el streaming en línea. Hoy FLV es poco frecuente, pero aún aparece en grabaciones antiguas." },
    wmv: { name: "WMV", description: "Formato de vídeo de Microsoft (Windows Media Video). WMV fue popular en Windows, pero hoy suele sustituirse por MP4." },
    "3gp": { name: "3GP", description: "Formato de vídeo ligero diseñado para móviles antiguos. Los archivos 3GP son pequeños, pero la calidad de imagen es limitada." },
    m4v: { name: "M4V", description: "Variante de MP4 de Apple (iTunes, Apple TV). M4V puede incluir DRM, pero sin protección es compatible con MP4." },
    mpg: { name: "MPG", description: "Formato de vídeo MPEG-1/MPEG-2 usado en cámaras antiguas y DVD. MPG es muy compatible, aunque los archivos pueden ser grandes." },
    gif: { name: "GIF", description: "Formato de imagen animada sin sonido. GIF es ideal para animaciones cortas, memes y gráficos web sencillos." },
    png: { name: "PNG", description: "Formato de imagen sin pérdida con soporte de transparencia. PNG es ideal para gráficos, logotipos, capturas de pantalla e ilustraciones nítidas." },
    jpg: { name: "JPG", description: "El formato de foto más popular, con compresión con pérdida. JPG genera archivos pequeños con buena calidad: el estándar de la web y la fotografía." },
    webp: { name: "WebP", description: "El formato moderno de Google que combina compresión con y sin pérdida y admite animación. Los archivos WebP son un 25–35 % más pequeños que JPG con la misma calidad." },
    avif: { name: "AVIF", description: "El formato de imagen más reciente, basado en AV1. AVIF ofrece una compresión excelente y es compatible con los navegadores modernos." },
    tiff: { name: "TIFF", description: "Formato de imagen sin pérdida usado en impresión y fotografía profesional. TIFF conserva toda la calidad, pero los archivos son grandes." },
    svg: { name: "SVG", description: "Gráfico vectorial escalable basado en XML. SVG es perfecto para logotipos, iconos e ilustraciones que deben verse nítidos a cualquier tamaño." },
    heic: { name: "HEIC", description: "Formato de foto de Apple (High Efficiency Image Container). HEIC comprime mejor que JPG, pero necesita conversión para una compatibilidad más amplia." },
    pdf: { name: "PDF", description: "Formato de documento universal de Adobe. PDF conserva el diseño, las fuentes y los gráficos en cualquier dispositivo: el estándar en oficina, educación e impresión." },
    docx: { name: "DOCX", description: "Formato de documento de Microsoft Word (Office Open XML). DOCX es editable y se usa mucho en el trabajo y la educación." },
    md: { name: "Markdown", description: "Formato de texto ligero con sintaxis de formato. Markdown es popular en documentación, archivos README de GitHub y sistemas CMS." },
    html: { name: "HTML", description: "Lenguaje de marcado de hipertexto para páginas web. HTML define la estructura y el contenido de los sitios que muestra cualquier navegador." },
    txt: { name: "TXT", description: "Archivo de texto plano sin formato. TXT es compatible con todo y resulta ideal para notas, registros y documentos sencillos." },
    rtf: { name: "RTF", description: "Rich Text Format, con formato básico. RTF es compatible con muchos editores y procesadores de texto." },
    odt: { name: "ODT", description: "Formato OpenDocument (LibreOffice, OpenOffice). ODT es la alternativa abierta y estándar a DOCX." },
    json: { name: "JSON", description: "Formato de intercambio de datos basado en texto. JSON es el estándar en API, archivos de configuración y aplicaciones web." },
    csv: { name: "CSV", description: "Valores separados por comas: el estándar para hojas de cálculo y para importar o exportar datos tabulares." },
    tsv: { name: "TSV", description: "Archivo de valores separados por tabulaciones. TSV es una alternativa a CSV muy usada en análisis de datos y bioinformática." },
    xml: { name: "XML", description: "Lenguaje de marcado extensible para datos estructurados. XML se usa en configuraciones, RSS, SOAP y muchos sistemas empresariales." },
    yaml: { name: "YAML", description: "Formato de serialización de datos fácil de leer. YAML es popular en configuraciones de DevOps (Docker, Kubernetes, CI/CD)." },
    zip: { name: "ZIP", description: "El formato de archivo comprimido más popular. ZIP es compatible de forma nativa con Windows, macOS y Linux." },
    rar: { name: "RAR", description: "Formato de archivo con más compresión que ZIP. RAR necesita software específico para extraerlo (por ejemplo, WinRAR o 7-Zip)." },
    ttf: { name: "TTF", description: "Formato de fuente TrueType: el estándar en Windows y macOS. TTF se usa mucho en impresión y en sitios web." },
    otf: { name: "OTF", description: "Fuente OpenType con funciones tipográficas ampliadas. OTF es compatible con TTF y se prefiere en proyectos profesionales." },
    woff: { name: "WOFF", description: "Web Open Font Format, optimizado para cargarse en el navegador. WOFF es el formato estándar de fuentes web." },
    woff2: { name: "WOFF2", description: "Versión más reciente de WOFF con mejor compresión. WOFF2 es el formato de fuente web recomendado para sitios modernos." },
  },
  uk: {
    mp3: { name: "MP3", description: "Найпопулярніший у світі аудіоформат зі стисненням із втратами. Файли MP3 маленькі й відтворюються практично на будь-якому пристрої — ідеально для музики, подкастів і голосових записів." },
    wav: { name: "WAV", description: "Нестиснене аудіо без втрат. Файли WAV великі, але зберігають повну якість звуку — їх обирають у студіях звукозапису та у відеомонтажі." },
    flac: { name: "FLAC", description: "Стиснення аудіо без втрат. FLAC дає якість рівня WAV за меншого розміру файлу — популярний серед аудіофілів і колекціонерів музики." },
    ogg: { name: "OGG", description: "Відкритий аудіоформат (Vorbis/Opus). OGG забезпечує хорошу якість за малого розміру й широко використовується в іграх та програмах з відкритим кодом." },
    m4a: { name: "M4A", description: "Аудіоформат на основі AAC, який використовують Apple і YouTube. M4A дає кращу якість, ніж MP3, за схожого розміру файлу." },
    aac: { name: "AAC", description: "Сучасний аудіокодек зі стисненням із втратами, який перевершує MP3 за однакового бітрейта. Використовується у стримінгу, iTunes і на багатьох відеоплатформах." },
    opus: { name: "Opus", description: "Ефективний кодек, створений для стримінгу та VoIP. Opus добре передає і мовлення, і музику навіть за дуже низького бітрейта." },
    aiff: { name: "AIFF", description: "Аудіоформат без втрат, створений Apple. AIFF — це відповідник WAV на Mac для професійних робочих станцій." },
    wma: { name: "WMA", description: "Аудіоформат Microsoft (Windows Media Audio). WMA був популярним в екосистемі Windows, але сьогодні його здебільшого замінюють MP3 і AAC." },
    mp4: { name: "MP4", description: "Універсальний відеоконтейнер із кодеками H.264/H.265. MP4 — стандарт для смартфонів, YouTube, соцмереж і більшості плеєрів." },
    webm: { name: "WebM", description: "Відкритий відеоформат, оптимізований для вебу. WebM забезпечує хорошу якість за малого розміру й підтримується браузерами нативно." },
    mov: { name: "MOV", description: "Відеоформат Apple (QuickTime). MOV — стандарт відеомонтажу на Mac, його часто використовують камери Apple." },
    avi: { name: "AVI", description: "Старіший, але універсальний відеоформат Microsoft. AVI підтримує багато кодеків, проте файли зазвичай більші, ніж MP4." },
    mkv: { name: "MKV", description: "Гнучкий відеоконтейнер (Matroska) з підтримкою кількох звукових доріжок, субтитрів і розділів. Популярний для фільмів та аніме." },
    flv: { name: "FLV", description: "Формат Flash Video, який колись використовували для онлайн-стримінгу. Сьогодні FLV трапляється рідко, здебільшого у старих записах." },
    wmv: { name: "WMV", description: "Відеоформат Microsoft (Windows Media Video). WMV був популярним у Windows, але сьогодні його переважно замінює MP4." },
    "3gp": { name: "3GP", description: "Легкий відеоформат, створений для старих мобільних телефонів. Файли 3GP невеликі, але якість зображення обмежена." },
    m4v: { name: "M4V", description: "Варіант MP4 від Apple (iTunes, Apple TV). M4V може містити DRM, але без захисту він сумісний із MP4." },
    mpg: { name: "MPG", description: "Відеоформат MPEG-1/MPEG-2, який використовували в старих камерах і на DVD. MPG сумісний майже з усім, але файли бувають великими." },
    gif: { name: "GIF", description: "Формат анімованих зображень без звуку. GIF ідеальний для коротких анімацій, мемів і простої вебграфіки." },
    png: { name: "PNG", description: "Формат зображень без втрат із підтримкою прозорості. PNG ідеально підходить для графіки, логотипів, знімків екрана та чітких ілюстрацій." },
    jpg: { name: "JPG", description: "Найпопулярніший формат фотографій зі стисненням із втратами. JPG дає невеликі файли з хорошою якістю — стандарт вебу та фотографії." },
    webp: { name: "WebP", description: "Сучасний формат Google, що поєднує стиснення з втратами й без втрат та підтримує анімацію. Файли WebP на 25–35 % менші за JPG за тієї самої якості." },
    avif: { name: "AVIF", description: "Найновіший формат зображень на основі AV1. AVIF пропонує чудове стиснення й підтримується сучасними браузерами." },
    tiff: { name: "TIFF", description: "Формат зображень без втрат, який використовують у професійному друці та фотографії. TIFF зберігає повну якість, але файли великі." },
    svg: { name: "SVG", description: "Масштабована векторна графіка на основі XML. SVG ідеально підходить для логотипів, іконок та ілюстрацій, які мають залишатися чіткими за будь-якого розміру." },
    heic: { name: "HEIC", description: "Формат фотографій Apple (High Efficiency Image Container). HEIC стискає краще за JPG, але для ширшої сумісності його потрібно конвертувати." },
    pdf: { name: "PDF", description: "Універсальний формат документів від Adobe. PDF зберігає макет, шрифти та графіку на будь-якому пристрої — стандарт в офісі, освіті й друці." },
    docx: { name: "DOCX", description: "Формат документів Microsoft Word (Office Open XML). DOCX можна редагувати, його широко використовують у бізнесі та освіті." },
    md: { name: "Markdown", description: "Легкий текстовий формат із синтаксисом форматування. Markdown популярний у документації, файлах README на GitHub і системах CMS." },
    html: { name: "HTML", description: "Мова розмітки гіпертексту для вебсторінок. HTML визначає структуру та вміст сайтів, які відображає кожен браузер." },
    txt: { name: "TXT", description: "Простий текстовий файл без форматування. TXT сумісний з усім і чудово підходить для нотаток, журналів і простих документів." },
    rtf: { name: "RTF", description: "Формат тексту з базовим форматуванням (Rich Text Format). RTF сумісний з багатьма текстовими редакторами та процесорами." },
    odt: { name: "ODT", description: "Формат OpenDocument (LibreOffice, OpenOffice). ODT — відкритий стандарт, альтернатива DOCX." },
    json: { name: "JSON", description: "Текстовий формат обміну даними. JSON — стандарт для API, конфігурацій і вебзастосунків." },
    csv: { name: "CSV", description: "Значення, розділені комами — стандарт для електронних таблиць та імпорту й експорту табличних даних." },
    tsv: { name: "TSV", description: "Файл зі значеннями, розділеними табуляцією. TSV — альтернатива CSV, популярна в аналізі даних і біоінформатиці." },
    xml: { name: "XML", description: "Розширювана мова розмітки для структурованих даних. XML використовують у конфігураціях, RSS, SOAP і багатьох корпоративних системах." },
    yaml: { name: "YAML", description: "Зручний для читання формат серіалізації даних. YAML популярний у конфігураціях DevOps (Docker, Kubernetes, CI/CD)." },
    zip: { name: "ZIP", description: "Найпопулярніший формат стиснутих архівів. ZIP підтримується нативно у Windows, macOS і Linux." },
    rar: { name: "RAR", description: "Формат архівів із вищим ступенем стиснення, ніж ZIP. Для розпакування RAR потрібне спеціальне програмне забезпечення (наприклад, WinRAR або 7-Zip)." },
    ttf: { name: "TTF", description: "Формат шрифтів TrueType — стандарт для Windows і macOS. TTF широко використовують у друці та на вебсайтах." },
    otf: { name: "OTF", description: "Шрифт OpenType з розширеними типографічними можливостями. OTF сумісний із TTF, його обирають для професійних проєктів." },
    woff: { name: "WOFF", description: "Формат вебшрифтів (Web Open Font Format), оптимізований для завантаження в браузері. WOFF — стандартний формат вебшрифтів." },
    woff2: { name: "WOFF2", description: "Новіша версія WOFF із кращим стисненням. WOFF2 — рекомендований формат вебшрифтів для сучасних сайтів." },
  },
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
  de: {
    extendedDesc: (from, to, fromName, toName) =>
      `Dieser kostenlose Online-Konverter wandelt ${fromName}-Dateien (${from.toUpperCase()}) in das Format ${toName} (${to.toUpperCase()}) um — ganz ohne Software-Installation. Lade einfach deine Datei hoch: Toolando.tech verarbeitet sie auf dem Server und stellt dir das Ergebnis zum Download bereit. Deine Dateien werden nicht gespeichert — sie werden direkt nach der Konvertierung gelöscht.`,
    whenToUse: (from, to, category) => {
      const base = [
        `Wenn du eine ${to.toUpperCase()}-Datei brauchst, sie aber nur im Format ${from.toUpperCase()} vorliegt.`,
        `Wenn dein Gerät oder deine App das Format ${from.toUpperCase()} nicht unterstützt.`,
      ]
      const catSpecific: Record<string, string[]> = {
        audio: [`Wenn du die Größe einer Audiodatei verringern oder die Kompatibilität mit deinem Player verbessern willst.`],
        video: [`Wenn du ein Video in einem anderen Format auf einer Website oder in sozialen Medien veröffentlichen musst.`],
        image: [`Wenn du ein Bild für Web, E-Mail oder Druck optimieren willst.`],
        pdf: [`Wenn du PDF-Seiten als Bilder exportieren oder ein Dokument in ein bearbeitbares Format umwandeln musst.`],
        doc: [`Wenn du mit Textdokumenten arbeitest und ein anderes Format zum Bearbeiten oder Veröffentlichen brauchst.`],
        data: [`Wenn du Daten in einem anderen Format zwischen Systemen, APIs oder Tabellenkalkulationen überträgst.`],
        font: [`Wenn du Webfonts für den Einsatz auf einer Website vorbereitest.`],
        archive: [`Wenn du das Archivformat ändern musst, um es auf einem anderen System zu entpacken.`],
      }
      return [...base, ...(catSpecific[category] ?? [])]
    },
    steps: (from, to) => [
      `Klicke auf „Datei auswählen“ oder zieh deine ${from.toUpperCase()}-Datei in den Upload-Bereich.`,
      `Warte, bis Upload und Konvertierung abgeschlossen sind — das dauert meist nur wenige Sekunden.`,
      `Lade die fertige ${to.toUpperCase()}-Datei mit einem Klick herunter.`,
      `Die Quelldatei wird direkt nach Abschluss des Vorgangs vom Server gelöscht.`,
    ],
    faq: (from, to) => [
      {
        q: `Ist die Konvertierung ${from.toUpperCase()} → ${to.toUpperCase()} kostenlos?`,
        a: `Ja. Dieser Konverter ist komplett kostenlos und du brauchst kein Konto. Du kannst beliebig viele Dateien konvertieren.`,
      },
      {
        q: `Ist meine ${from.toUpperCase()}-Datei sicher?`,
        a: `Ja. Deine Datei wird ausschließlich für die Konvertierung verarbeitet und danach sofort gelöscht. Wir speichern oder teilen deine Dateien niemals.`,
      },
      {
        q: `Wie groß darf die Datei maximal sein?`,
        a: `Du kannst Dateien bis zu 500 MB hochladen. Größere Dateien brauchen unter Umständen etwas länger.`,
      },
      {
        q: `Wird die Qualität der ${to.toUpperCase()}-Datei gut sein?`,
        a: `Toolando.tech nutzt professionelle Bibliotheken (FFmpeg, Sharp, MuPDF) für die Konvertierung. Die Qualität hängt vom Ausgangs- und Zielformat ab — von verlustbehaftet zu verlustfrei lassen sich verlorene Daten nicht zurückholen, das Ergebnis ist aber technisch einwandfrei.`,
      },
    ],
  },
  es: {
    extendedDesc: (from, to, fromName, toName) =>
      `Este conversor online gratuito transforma archivos ${fromName} (${from.toUpperCase()}) al formato ${toName} (${to.toUpperCase()}) sin instalar ningún programa. Sube tu archivo: Toolando.tech lo procesa en el servidor y te devuelve el resultado para descargar. Los archivos nunca se almacenan, se eliminan inmediatamente después de la conversión.`,
    whenToUse: (from, to, category) => {
      const base = [
        `Cuando necesitas un archivo ${to.toUpperCase()} pero solo lo tienes en formato ${from.toUpperCase()}.`,
        `Cuando el dispositivo o la aplicación que usas no admite archivos ${from.toUpperCase()}.`,
      ]
      const catSpecific: Record<string, string[]> = {
        audio: [`Cuando quieres reducir el tamaño de un archivo de audio o mejorar la compatibilidad con tu reproductor.`],
        video: [`Cuando necesitas publicar un vídeo en una web o en redes sociales en otro formato.`],
        image: [`Cuando quieres optimizar una imagen para la web, el correo o la impresión.`],
        pdf: [`Cuando necesitas extraer páginas de un PDF como imágenes o convertir un documento a un formato editable.`],
        doc: [`Cuando trabajas con documentos de texto y necesitas otro formato para editarlos o publicarlos.`],
        data: [`Cuando mueves datos entre sistemas, API u hojas de cálculo en otro formato.`],
        font: [`Cuando preparas fuentes web para publicarlas en un sitio.`],
        archive: [`Cuando necesitas cambiar el formato del archivo comprimido para extraerlo en otro sistema.`],
      }
      return [...base, ...(catSpecific[category] ?? [])]
    },
    steps: (from, to) => [
      `Haz clic en «Elegir archivo» o arrastra tu archivo ${from.toUpperCase()} a la zona de subida.`,
      `Espera a que terminen la subida y la conversión: normalmente tarda unos segundos.`,
      `Descarga el archivo ${to.toUpperCase()} ya listo con un solo clic.`,
      `El archivo de origen se elimina del servidor en cuanto termina la operación.`,
    ],
    faq: (from, to) => [
      {
        q: `¿La conversión ${from.toUpperCase()} → ${to.toUpperCase()} es gratis?`,
        a: `Sí. Este conversor es totalmente gratuito y no necesitas crear una cuenta. Puedes convertir archivos sin límite.`,
      },
      {
        q: `¿Mi archivo ${from.toUpperCase()} está seguro?`,
        a: `Sí. Tu archivo se procesa únicamente para la conversión y se elimina justo después. Nunca almacenamos ni compartimos tus archivos.`,
      },
      {
        q: `¿Cuál es el tamaño máximo de archivo?`,
        a: `Puedes subir archivos de hasta 500 MB. Los archivos más grandes pueden tardar más en procesarse.`,
      },
      {
        q: `¿La calidad del ${to.toUpperCase()} será buena?`,
        a: `Toolando.tech usa bibliotecas profesionales (FFmpeg, Sharp, MuPDF) para la conversión. La calidad depende de los formatos de origen y destino: pasar de un formato con pérdida a uno sin pérdida no recupera los datos perdidos, pero el resultado será técnicamente correcto.`,
      },
    ],
  },
  uk: {
    extendedDesc: (from, to, fromName, toName) =>
      `Цей безкоштовний онлайн-конвертер перетворює файли ${fromName} (${from.toUpperCase()}) на формат ${toName} (${to.toUpperCase()}) без встановлення програм. Просто завантажте файл — Toolando.tech обробить його на сервері та поверне готовий результат. Файли не зберігаються: одразу після конвертації їх видаляють.`,
    whenToUse: (from, to, category) => {
      const base = [
        `Коли вам потрібен файл ${to.toUpperCase()}, а він у вас лише у форматі ${from.toUpperCase()}.`,
        `Коли пристрій або програма, якою ви користуєтеся, не підтримує формат ${from.toUpperCase()}.`,
      ]
      const catSpecific: Record<string, string[]> = {
        audio: [`Коли потрібно зменшити розмір аудіофайлу або покращити сумісність із плеєром.`],
        video: [`Коли потрібно опублікувати відео на сайті чи в соцмережах в іншому форматі.`],
        image: [`Коли потрібно оптимізувати зображення для сайту, електронної пошти чи друку.`],
        pdf: [`Коли потрібно зберегти сторінки PDF як зображення або перетворити документ на редагований формат.`],
        doc: [`Коли ви працюєте з текстовими документами й потребуєте іншого формату для редагування чи публікації.`],
        data: [`Коли ви переносите дані між системами, API чи електронними таблицями в іншому форматі.`],
        font: [`Коли ви готуєте вебшрифти до розміщення на сайті.`],
        archive: [`Коли потрібно змінити формат архіву, щоб розпакувати його в іншій системі.`],
      }
      return [...base, ...(catSpecific[category] ?? [])]
    },
    steps: (from, to) => [
      `Натисніть «Вибрати файл» або перетягніть файл ${from.toUpperCase()} в область завантаження.`,
      `Зачекайте, поки завершиться передавання та конвертація — зазвичай це триває кілька секунд.`,
      `Завантажте готовий файл ${to.toUpperCase()} одним натисканням.`,
      `Вихідний файл видаляється з сервера одразу після завершення операції.`,
    ],
    faq: (from, to) => [
      {
        q: `Чи конвертація ${from.toUpperCase()} → ${to.toUpperCase()} безкоштовна?`,
        a: `Так. Цей конвертер повністю безкоштовний і не потребує реєстрації. Ви можете конвертувати файли без обмежень.`,
      },
      {
        q: `Чи мій файл ${from.toUpperCase()} у безпеці?`,
        a: `Так. Файл обробляється виключно для конвертації й видаляється одразу після її завершення. Ми не зберігаємо й нікому не передаємо ваші файли.`,
      },
      {
        q: `Який максимальний розмір файлу?`,
        a: `Ви можете завантажувати файли розміром до 500 МБ. Більші файли можуть оброблятися довше.`,
      },
      {
        q: `Чи буде якість файлу ${to.toUpperCase()} хорошою?`,
        a: `Toolando.tech використовує професійні бібліотеки (FFmpeg, Sharp, MuPDF). Якість залежить від вихідного та цільового форматів — конвертація з формату зі втратами у формат без втрат не поверне втрачених даних, але результат буде технічно коректним.`,
      },
    ],
  },
  ...extraContentStrings,
}

type ExtraFaqBuilder = (from: string, to: string) => { q: string; a: string }[]

const extraFaqStrings: Record<string, ExtraFaqBuilder> = {
  pl: (from, to) => [
    {
      q: `Gdzie dowiem się więcej o formacie ${from}?`,
      a: `Przeczytaj pełny opis formatu ${from} w encyklopedii formatów Toolando.tech — znajdziesz tam zastosowania, zalety, wady i porównania.`,
    },
    {
      q: `Czy mogę konwertować ${to} z powrotem na ${from}?`,
      a: `Tak — wybierz konwerter ${to} → ${from} na liście narzędzi. Pamiętaj, że konwersja ze stratnego formatu na inny nie przywraca utraconej jakości.`,
    },
  ],
  en: (from, to) => [
    {
      q: `Where can I learn more about ${from}?`,
      a: `Read the full ${from} format guide in the Toolando.tech formats encyclopedia — use cases, pros, cons, and comparisons.`,
    },
    {
      q: `Can I convert ${to} back to ${from}?`,
      a: `Yes — pick the ${to} → ${from} converter in the tools list. Converting from a lossy format won't restore lost quality.`,
    },
  ],
  de: (from, to) => [
    {
      q: `Wo erfahre ich mehr über das Format ${from}?`,
      a: `Lies den vollständigen ${from}-Formatguide in der Formate-Enzyklopädie von Toolando.tech — mit Einsatzzwecken, Vorteilen, Nachteilen und Vergleichen.`,
    },
    {
      q: `Kann ich ${to} wieder zurück in ${from} konvertieren?`,
      a: `Ja — wähle in der Werkzeugliste den Konverter ${to} → ${from}. Beachte: Die Konvertierung aus einem verlustbehafteten Format stellt verlorene Qualität nicht wieder her.`,
    },
  ],
  es: (from, to) => [
    {
      q: `¿Dónde puedo aprender más sobre el formato ${from}?`,
      a: `Lee la guía completa del formato ${from} en la enciclopedia de formatos de Toolando.tech: usos, ventajas, desventajas y comparativas.`,
    },
    {
      q: `¿Puedo convertir ${to} de nuevo a ${from}?`,
      a: `Sí: elige el conversor ${to} → ${from} en la lista de herramientas. Ten en cuenta que convertir desde un formato con pérdida no restaura la calidad perdida.`,
    },
  ],
  uk: (from, to) => [
    {
      q: `Де дізнатися більше про формат ${from}?`,
      a: `Прочитайте повний опис формату ${from} в енциклопедії форматів Toolando.tech — там зібрані сфери застосування, переваги, недоліки та порівняння.`,
    },
    {
      q: `Чи можна конвертувати ${to} назад у ${from}?`,
      a: `Так — оберіть конвертер ${to} → ${from} у списку інструментів. Пам’ятайте, що конвертація з формату зі втратами не відновлює втраченої якості.`,
    },
  ],
  ...extraExtraFaq,
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

  const buildExtraFaq = extraFaqStrings[locale] ?? extraFaqStrings.en
  const extraFaq = buildExtraFaq(tool.from.toUpperCase(), tool.to.toUpperCase())

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
