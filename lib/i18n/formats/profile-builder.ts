import type { FormatProfile } from "./types"
import { FORMAT_META } from "./format-meta"
import type { LocaleCopy } from "./locale-copy-types"
import {
  copyFr,
  copyIt,
  copyPt,
  copyNl,
  copySv,
  copyNo,
  copyDa,
  copyFi,
  copyCs,
  copyRo,
  copyHu,
  copyEl,
  copyTr,
  copyRu,
  copyAr,
  copyZh,
  copyJa,
  copyKo,
  copyHi,
  copyId,
} from "./locale-copies"

const copyPl: LocaleCopy = {
  compressionLabels: {
    lossy: "Stratna — plik jest mniejszy, ale część danych jest tracona przy każdej konwersji.",
    lossless: "Bezstratna — zachowuje pełną jakość, pliki są większe.",
    none: "Bez kompresji danych — oryginalna reprezentacja.",
    container: "Kontener — opakowuje strumienie wideo/audio bez określania samej kompresji.",
    text: "Format tekstowy — czytelny dla człowieka i maszyn.",
    vector: "Wektorowy — opisany matematycznie, skaluje się bez utraty ostrości.",
    mixed: "Mieszany — może zawierać tekst, grafikę i metadane.",
    both: "Stratna i bezstratna — zależnie od ustawień zapisu.",
  },
  categoryContext: {
    audio: "Format audio służy do przechowywania muzyki, podcastów, nagrań głosowych i ścieżek dźwiękowych w wideo.",
    video: "Format wideo przechowuje obraz i często także ścieżkę dźwiękową — używany w nagraniach, filmach i streamingu.",
    image: "Format obrazu przechowuje grafikę rastrową lub wektorową — zdjęcia, ilustracje, ikony.",
    document: "Format dokumentu przechowuje tekst sformatowany lub niesformatowany — raporty, umowy, notatki.",
    data: "Format danych służy do wymiany informacji strukturalnych między systemami i aplikacjami.",
    font: "Format czcionki przechowuje kształty liter używane w druku i na stronach internetowych.",
    archive: "Format archiwum pakuje wiele plików w jeden, często z kompresją.",
  },
  descriptions: {
    mp3: "MP3 to najpopularniejszy format audio na świecie. Wykorzystuje stratną kompresję, która usuwa dźwięki mało słyszalne dla ludzkiego ucha, dzięki czemu pliki są nawet 10-krotnie mniejsze niż WAV przy akceptowalnej jakości.",
    wav: "WAV (Waveform Audio File Format) to bezstratny format audio opracowany przez Microsoft i IBM. Przechowuje surowe próbki dźwięku bez kompresji — standard w studiach nagraniowych.",
    flac: "FLAC (Free Lossless Audio Codec) to bezstratna kompresja audio — pliki są mniejsze niż WAV, ale bez utraty jakości. Idealny do archiwizacji muzyki.",
    mp4: "MP4 to uniwersalny kontener multimedialny oparty na MPEG-4. Najczęściej zawiera wideo H.264/H.265 i audio AAC. Standard YouTube, smartfonów i telewizorów.",
    webm: "WebM to otwarty format Google zaprojektowany dla internetu. Używa kodeków VP9/AV1 i Opus — natywnie wspierany przez Chrome, Firefox i Edge.",
    docx: "DOCX (Office Open XML) to format dokumentów Microsoft Word. Umożliwia edycję tekstu, stylów i układu — standard biurowy obok PDF.",
    heic: "HEIC (High Efficiency Image Container) to format zdjęć Apple domyślnie na iPhone i iPad. Mniejszy niż JPG przy tej samej jakości, ale słaba kompatybilność poza ekosystemem Apple.",
    png: "PNG to bezstratny format obrazu z obsługą przezroczystości (kanał alpha). Idealny do logo, ikon, zrzutów ekranu i grafik wymagających ostrych krawędzi.",
    jpg: "JPG (JPEG) to dominujący format fotografii cyfrowej. Stratna kompresja DCT daje małe pliki przy dobrej jakości wizualnej — standard internetu od lat 90.",
    webp: "WebP to nowoczesny format Google obsługujący stratną i bezstratną kompresję, animacje i przezroczystość. Pliki są 25–35% mniejsze niż JPG.",
    pdf: "PDF (Portable Document Format) to standard Adobe do dokumentów o stałym układzie. Zachowuje czcionki, grafikę i formatowanie na każdym urządzeniu.",
    json: "JSON (JavaScript Object Notation) to lekki format wymiany danych tekstowych. Standard REST API, konfiguracji aplikacji i NoSQL.",
  },
  names: {},
  buildParagraphs(name, ext, category, compression) {
    const ctx = this.categoryContext[category] ?? ""
    const comp = this.compressionLabels[compression] ?? compression
    const custom = this.descriptions[ext]
    const p1 = custom ?? `${name} (.${ext.toUpperCase()}) to format pliku z kategorii ${category}. ${ctx}`
    return [
      p1,
      `Typ kompresji: ${comp}`,
      `W Toolando.tech możesz konwertować pliki ${ext.toUpperCase()} na wiele innych formatów i odwrotnie — bez instalacji oprogramowania, bezpośrednio w przeglądarce. Pliki są przetwarzane bezpiecznie i usuwane po konwersji.`,
    ]
  },
  buildUseCases(ext, category) {
    const map: Record<string, string[]> = {
      mp3: ["Muzyka do smartfona i odtwarzacza MP3", "Podcasty i audiobooki", "Nagrania głosowe do wysyłki e-mailem", "Tło muzyczne w filmach i grach (jako kompromis rozmiar/jakość)"],
      wav: ["Montaż audio w DAW (Audacity, FL Studio)", "Mastering i archiwizacja nagrań", "Eksport z programu do dalszej edycji", "Nagrania, gdzie liczy się każdy detal dźwięku"],
      flac: ["Archiwizacja kolekcji muzyki bez utraty jakości", "Audiofilskie odtwarzanie w domu", "Backup nagrań studyjnych"],
      mp4: ["YouTube, TikTok, Instagram Reels", "Nagrania ze smartfona", "Prezentacje wideo", "Wysyłka wideo e-mailem lub komunikatorem"],
      webm: ["Wideo osadzone na stronie www", "HTML5 video w przeglądarce", "Streamowanie z niskim transferem"],
      png: ["Logo i ikony z przezroczystym tłem", "Zrzuty ekranu UI/UX", "Grafiki z tekstem i ostrymi krawędziami", "Grafiki do druku (krótkie serie)"],
      jpg: ["Zdjęcia z aparatu i smartfona", "Galerie internetowe", "Miniaturki i podglądy", "E-mail z załącznikami graficznymi"],
      webp: ["Optymalizacja stron www (PageSpeed)", "Sklepy e-commerce — zdjęcia produktów", "Grafiki responsywne"],
      pdf: ["Umowy, faktury, CV do wysyłki", "Dokumenty do druku", "Archiwizacja dokumentów", "E-booki i instrukcje"],
      json: ["REST API — request/response", "Konfiguracja aplikacji (package.json, tsconfig)", "Wymiana danych między mikroserwisami"],
    }
    if (map[ext]) return map[ext]
    const generic: Record<string, string[]> = {
      audio: [`Odtwarzanie dźwięku w formacie ${ext.toUpperCase()}`, "Konwersja do lepiej wspieranego formatu", "Przygotowanie pliku do edycji lub publikacji"],
      video: [`Odtwarzanie w formacie ${ext.toUpperCase()}`, "Konwersja pod platformę społecznościową", "Wyciąganie ścieżki audio z nagrania"],
      image: [`Wyświetlanie grafiki ${ext.toUpperCase()}`, "Konwersja pod web lub druk", "Optymalizacja rozmiaru pliku"],
      document: [`Edycja dokumentu ${ext.toUpperCase()}`, "Konwersja do PDF lub HTML", "Archiwizacja i wymiana z innymi"],
      data: [`Import/eksport danych ${ext.toUpperCase()}`, "Integracja z API lub Excel", "Migracja między systemami"],
      font: [`Publikacja czcionki ${ext.toUpperCase()} na stronie www`, "Przygotowanie fontu do druku", "Konwersja między formatami web/desktop"],
      archive: [`Rozpakowanie archiwum ${ext.toUpperCase()}`, "Konwersja do uniwersalnego ZIP", "Kompresja plików do wysyłki"],
    }
    return generic[category] ?? [`Praca z plikami ${ext.toUpperCase()}`]
  },
  buildPros(ext, compression) {
    const base: string[] = []
    if (compression === "lossy") base.push("Mały rozmiar pliku")
    if (compression === "lossless" || compression === "none") base.push("Wysoka lub pełna jakość")
    if (compression === "text") base.push("Czytelny dla człowieka, łatwy do debugowania")
    if (ext === "mp3") return ["Uniwersalna kompatybilność — działa wszędzie", "Bardzo małe pliki", "Regulowany poziom jakości (bitrate)"]
    if (ext === "webp") return ["25–35% mniejszy niż JPG", "Obsługa przezroczystości i animacji", "Wspierany przez wszystkie nowoczesne przeglądarki"]
    if (ext === "pdf") return ["Identyczny wygląd na każdym urządzeniu", "Obsługa czcionek i grafiki", "Standard w biznesie i edukacji"]
    return base.length ? base : ["Szerokie wsparcie w ekosystemie Toolando.tech", "Możliwość konwersji online bez instalacji"]
  },
  buildCons(ext, compression) {
    if (compression === "lossy") return ["Utrata jakości przy każdej ponownej konwersji", "Nie nadaje się do wielokrotnej edycji"]
    if (ext === "wav") return ["Bardzo duże pliki (ok. 10 MB/min stereo CD)", "Niepraktyczny do streamingu"]
    if (ext === "heic") return ["Słaba kompatybilność z Windows i starszymi urządzeniami", "Wymaga konwersji do JPG/PNG dla wysyłki"]
    if (ext === "svg") return ["Nie nadaje się do fotografii", "Może zawierać skrypty — wymaga ostrożności"]
    if (compression === "lossless" || compression === "none") return ["Większy rozmiar pliku niż formaty stratne"]
    return ["Może wymagać konwersji dla pełnej kompatybilności"]
  },
  buildCompatibility(ext, category) {
    const specific: Record<string, string> = {
      mp3: "Obsługiwany przez każdy smartfon, komputer, samochodowy odtwarzacz, telewizor i platformę streamingową. De facto standard audio.",
      wav: "Natywnie wspierany przez Windows, macOS, Linux i wszystkie programy DAW. Uniwersalny w produkcji audio.",
      mp4: "Odtwarzany na iPhone, Android, Windows, macOS, smart TV, przeglądarkach i platformach wideo.",
      webp: "Chrome, Firefox, Edge, Safari 14+, Opera. Brak wsparcia w Internet Explorer.",
      heic: "Domyślny format zdjęć iPhone/iPad. Windows 10+ z rozszerzeniem, Android 10+. Starsze systemy wymagają konwersji.",
      pdf: "Adobe Acrobat, przeglądarki, LibreOffice, Google Docs, systemy macOS/iOS (podgląd natywny).",
    }
    return specific[ext] ?? `Format ${ext.toUpperCase()} jest obsługiwany przez narzędzia Toolando.tech i większość nowoczesnego oprogramowania w kategorii ${category}.`
  },
  buildFaq(ext, name) {
    return [
      { q: `Czym jest plik ${name}?`, a: `${name} to format pliku z rozszerzeniem .${ext.toUpperCase()}, używany do przechowywania i wymiany danych. Szczegóły techniczne i zastosowania opisano powyżej.` },
      { q: `Jak przekonwertować ${ext.toUpperCase()} online?`, a: `Wejdź na Toolando.tech, wybierz konwerter z listy (np. ${ext.toUpperCase()} → inny format), prześlij plik i pobierz wynik. Nie musisz instalować programów.` },
      { q: `Czy konwersja ${ext.toUpperCase()} obniża jakość?`, a: `Zależy od formatów. Konwersja stratna → stratna obniża jakość. Konwersja na bezstratny format nie poprawi już utraconych danych, ale zachowa aktualny poziom.` },
      { q: `Czy moje pliki ${ext.toUpperCase()} są bezpieczne?`, a: `Tak. Toolando.tech przetwarza pliki wyłącznie w celu konwersji i natychmiast je usuwa. Połączenie jest szyfrowane (HTTPS).` },
    ]
  },
  buildComparisons(ext, category) {
    const map: Record<string, { format: string; note: string }[]> = {
      mp3: [
        { format: "WAV", note: "WAV jest bezstratny i duży — MP3 jest mały ze stratą. Do słuchania: MP3. Do edycji: WAV." },
        { format: "FLAC", note: "FLAC bezstratny, mniejszy niż WAV. MP3 mniejszy, ale ze stratą." },
        { format: "AAC/M4A", note: "AAC daje lepszą jakość niż MP3 przy tym samym bitrate." },
      ],
      jpg: [
        { format: "PNG", note: "PNG bezstratny z przezroczystością — JPG mniejszy, bez alpha. Do zdjęć: JPG. Do logo: PNG." },
        { format: "WebP", note: "WebP 25–35% mniejszy od JPG przy tej samej jakości." },
        { format: "AVIF", note: "AVIF jeszcze mniejszy, ale słabsze wsparcie w starszych przeglądarkach." },
      ],
      mp4: [
        { format: "WebM", note: "WebM lepszy pod web, MP4 lepszy pod uniwersalną kompatybilność." },
        { format: "MOV", note: "MOV standard Apple/edycja, MP4 standard publikacji." },
        { format: "MKV", note: "MKV elastyczny kontener z napisami — MP4 prostszy i powszechniejszy." },
      ],
    }
    return map[ext] ?? []
  },
}

const copyEn: LocaleCopy = {
  ...copyPl,
  compressionLabels: {
    lossy: "Lossy — smaller files, but data is lost on each conversion.",
    lossless: "Lossless — preserves full quality, larger files.",
    none: "Uncompressed — original representation.",
    container: "Container — wraps video/audio streams without fixing compression.",
    text: "Text format — human and machine readable.",
    vector: "Vector — mathematically defined, scales without blur.",
    mixed: "Mixed — may contain text, graphics, and metadata.",
    both: "Lossy and lossless — depends on save settings.",
  },
  categoryContext: {
    audio: "Audio formats store music, podcasts, voice recordings, and video soundtracks.",
    video: "Video formats store moving images and often audio — used in recordings, films, and streaming.",
    image: "Image formats store raster or vector graphics — photos, illustrations, icons.",
    document: "Document formats store formatted or plain text — reports, contracts, notes.",
    data: "Data formats exchange structured information between systems and apps.",
    font: "Font formats store letter shapes used in print and on websites.",
    archive: "Archive formats pack multiple files into one, often compressed.",
  },
  descriptions: {
    mp3: "MP3 is the world's most popular audio format. It uses lossy compression that removes barely audible sounds, making files up to 10× smaller than WAV at acceptable quality.",
    wav: "WAV (Waveform Audio File Format) is uncompressed lossless audio by Microsoft and IBM. It stores raw samples — the studio standard.",
    flac: "FLAC (Free Lossless Audio Codec) compresses audio without quality loss — smaller than WAV, bit-perfect. Ideal for music archiving.",
    mp4: "MP4 is a universal MPEG-4 container. Usually holds H.264/H.265 video and AAC audio. The YouTube, smartphone, and TV standard.",
    webm: "WebM is Google's open web format using VP9/AV1 and Opus — natively supported by Chrome, Firefox, and Edge.",
    png: "PNG is a lossless image format with alpha transparency. Ideal for logos, icons, screenshots, and sharp graphics.",
    jpg: "JPG (JPEG) dominates digital photography. DCT lossy compression yields small files at good visual quality — the web standard since the 90s.",
    webp: "WebP is Google's modern format with lossy/lossless modes, animation, and transparency. Files are 25–35% smaller than JPG.",
    pdf: "PDF (Portable Document Format) is Adobe's fixed-layout document standard. Preserves fonts and graphics on any device.",
    json: "JSON (JavaScript Object Notation) is a lightweight text data format. The REST API, app config, and NoSQL standard.",
    docx: "DOCX (Office Open XML) is Microsoft Word's document format. Enables editing text, styles, and layout — the office standard alongside PDF.",
    heic: "HEIC (High Efficiency Image Container) is Apple's default iPhone/iPad photo format. Smaller than JPG at the same quality but poor compatibility outside Apple's ecosystem.",
  },
  buildParagraphs(name, ext, category, compression) {
    const ctx = this.categoryContext[category] ?? ""
    const comp = this.compressionLabels[compression] ?? compression
    const custom = this.descriptions[ext]
    const p1 = custom ?? `${name} (.${ext.toUpperCase()}) is a ${category} file format. ${ctx}`
    return [
      p1,
      `Compression type: ${comp}`,
      `On Toolando.tech you can convert ${ext.toUpperCase()} files to many other formats and back — no software to install, directly in your browser. Files are processed securely and deleted after conversion.`,
    ]
  },
  buildUseCases(ext, category) {
    const map: Record<string, string[]> = {
      mp3: ["Music on phones and MP3 players", "Podcasts and audiobooks", "Voice recordings for email", "Background music in videos (size/quality tradeoff)"],
      wav: ["Audio editing in a DAW (Audacity, FL Studio)", "Mastering and archiving", "Export for further editing", "Recordings where every detail matters"],
      flac: ["Music collection archiving without quality loss", "Audiophile home playback", "Studio recording backup"],
      mp4: ["YouTube, TikTok, Instagram Reels", "Smartphone recordings", "Video presentations", "Sharing video via email or chat"],
      webm: ["Embedded web video", "HTML5 video in browsers", "Low-bandwidth streaming"],
      png: ["Logos and icons with transparency", "UI/UX screenshots", "Graphics with text and sharp edges", "Short-run print graphics"],
      jpg: ["Camera and phone photos", "Web galleries", "Thumbnails and previews", "Email attachments"],
      webp: ["Website optimization (PageSpeed)", "E-commerce product photos", "Responsive graphics"],
      pdf: ["Contracts, invoices, CVs", "Print-ready documents", "Document archiving", "E-books and manuals"],
      json: ["REST API request/response", "App configuration (package.json, tsconfig)", "Microservice data exchange"],
    }
    if (map[ext]) return map[ext]
    const generic: Record<string, string[]> = {
      audio: [`Playing ${ext.toUpperCase()} audio`, "Converting to a better-supported format", "Preparing for editing or publishing"],
      video: [`Playing ${ext.toUpperCase()} video`, "Converting for social platforms", "Extracting audio from a recording"],
      image: [`Displaying ${ext.toUpperCase()} graphics`, "Converting for web or print", "Optimizing file size"],
      document: [`Editing ${ext.toUpperCase()} documents`, "Converting to PDF or HTML", "Archiving and sharing"],
      data: [`Import/export ${ext.toUpperCase()} data`, "API or Excel integration", "System migration"],
      font: [`Publishing ${ext.toUpperCase()} fonts on the web`, "Print font preparation", "Web/desktop format conversion"],
      archive: [`Extracting ${ext.toUpperCase()} archives`, "Converting to universal ZIP", "Compressing files for sending"],
    }
    return generic[category] ?? [`Working with ${ext.toUpperCase()} files`]
  },
  buildPros(ext, compression) {
    const base: string[] = []
    if (compression === "lossy") base.push("Small file size")
    if (compression === "lossless" || compression === "none") base.push("High or full quality")
    if (compression === "text") base.push("Human readable, easy to debug")
    if (ext === "mp3") return ["Universal compatibility — works everywhere", "Very small files", "Adjustable quality (bitrate)"]
    if (ext === "webp") return ["25–35% smaller than JPG", "Transparency and animation support", "Supported by all modern browsers"]
    if (ext === "pdf") return ["Identical appearance on every device", "Font and graphics support", "Business and education standard"]
    return base.length ? base : ["Wide support in the Toolando.tech ecosystem", "Online conversion without installation"]
  },
  buildCons(ext, compression) {
    if (compression === "lossy") return ["Quality loss on each re-conversion", "Not suitable for repeated editing"]
    if (ext === "wav") return ["Very large files (~10 MB/min stereo CD)", "Impractical for streaming"]
    if (ext === "heic") return ["Poor compatibility with Windows and older devices", "Needs JPG/PNG conversion for sharing"]
    if (ext === "svg") return ["Not for photography", "May contain scripts — use with care"]
    if (compression === "lossless" || compression === "none") return ["Larger file size than lossy formats"]
    return ["May need conversion for full compatibility"]
  },
  buildCompatibility(ext, category) {
    const specific: Record<string, string> = {
      mp3: "Supported by every smartphone, computer, car player, TV, and streaming platform. The de facto audio standard.",
      wav: "Native on Windows, macOS, Linux, and all DAW software. Universal in audio production.",
      mp4: "Plays on iPhone, Android, Windows, macOS, smart TVs, browsers, and video platforms.",
      webp: "Chrome, Firefox, Edge, Safari 14+, Opera. No support in Internet Explorer.",
      heic: "Default iPhone/iPad photo format. Windows 10+ with extension, Android 10+. Older systems need conversion.",
      pdf: "Adobe Acrobat, browsers, LibreOffice, Google Docs, native preview on macOS/iOS.",
    }
    return specific[ext] ?? `${ext.toUpperCase()} is supported by Toolando.tech tools and most modern ${category} software.`
  },
  buildFaq(ext, name) {
    return [
      { q: `What is a ${name} file?`, a: `${name} is a file format with the .${ext.toUpperCase()} extension used to store and exchange data. Technical details and use cases are described above.` },
      { q: `How do I convert ${ext.toUpperCase()} online?`, a: `Go to Toolando.tech, pick a converter (e.g. ${ext.toUpperCase()} → another format), upload your file, and download the result. No software needed.` },
      { q: `Does ${ext.toUpperCase()} conversion reduce quality?`, a: `It depends on the formats. Lossy → lossy reduces quality. Converting to lossless won't recover lost data but preserves the current level.` },
      { q: `Are my ${ext.toUpperCase()} files safe?`, a: `Yes. Toolando.tech processes files only for conversion and deletes them immediately. The connection is encrypted (HTTPS).` },
    ]
  },
  buildComparisons(ext, _category) {
    const map: Record<string, { format: string; note: string }[]> = {
      mp3: [
        { format: "WAV", note: "WAV is lossless and large — MP3 is small with loss. For listening: MP3. For editing: WAV." },
        { format: "FLAC", note: "FLAC is lossless, smaller than WAV. MP3 is smaller but lossy." },
        { format: "AAC/M4A", note: "AAC beats MP3 quality at the same bitrate." },
      ],
      jpg: [
        { format: "PNG", note: "PNG is lossless with transparency — JPG is smaller, no alpha. Photos: JPG. Logos: PNG." },
        { format: "WebP", note: "WebP is 25–35% smaller than JPG at the same quality." },
        { format: "AVIF", note: "AVIF is even smaller but weaker support in older browsers." },
      ],
      mp4: [
        { format: "WebM", note: "WebM better for web, MP4 better for universal compatibility." },
        { format: "MOV", note: "MOV is Apple's editing standard, MP4 is the publishing standard." },
        { format: "MKV", note: "MKV is a flexible container with subtitles — MP4 is simpler and more common." },
      ],
    }
    return map[ext] ?? []
  },
}

/** Category slugs are English identifiers; these render them in the page language. */
const categoryNamesDe: Record<string, string> = {
  audio: "Audio",
  video: "Video",
  image: "Bild",
  document: "Dokument",
  data: "Daten",
  font: "Schrift",
  archive: "Archiv",
}

const categoryNamesEs: Record<string, string> = {
  audio: "audio",
  video: "vídeo",
  image: "imagen",
  document: "documento",
  data: "datos",
  font: "fuentes",
  archive: "archivo comprimido",
}

const categoryNamesUk: Record<string, string> = {
  audio: "аудіо",
  video: "відео",
  image: "зображення",
  document: "документи",
  data: "дані",
  font: "шрифти",
  archive: "архіви",
}

const copyDe: LocaleCopy = {
  ...copyEn,
  compressionLabels: {
    lossy: "Verlustbehaftet — kleinere Dateien, aber bei jeder Konvertierung gehen Daten verloren.",
    lossless: "Verlustfrei — bewahrt die volle Qualität, größere Dateien.",
    none: "Unkomprimiert — die originale Repräsentation.",
    container: "Container — umschließt Video- und Audiostreams, ohne die Kompression festzulegen.",
    text: "Textformat — für Mensch und Maschine lesbar.",
    vector: "Vektor — mathematisch beschrieben, skaliert ohne Unschärfe.",
    mixed: "Gemischt — kann Text, Grafiken und Metadaten enthalten.",
    both: "Verlustbehaftet und verlustfrei — je nach Speichereinstellungen.",
  },
  categoryContext: {
    audio: "Audioformate speichern Musik, Podcasts, Sprachaufnahmen und Tonspuren von Videos.",
    video: "Videoformate speichern Bewegtbilder und oft auch Ton — für Aufnahmen, Filme und Streaming.",
    image: "Bildformate speichern Raster- oder Vektorgrafiken — Fotos, Illustrationen, Icons.",
    document: "Dokumentformate speichern formatierten oder reinen Text — Berichte, Verträge, Notizen.",
    data: "Datenformate tauschen strukturierte Informationen zwischen Systemen und Anwendungen aus.",
    font: "Schriftformate speichern Buchstabenformen für Druck und Websites.",
    archive: "Archivformate packen mehrere Dateien in eine, oft komprimiert.",
  },
  descriptions: {
    mp3: "MP3 ist das beliebteste Audioformat der Welt. Die verlustbehaftete Kompression entfernt kaum hörbare Anteile, wodurch Dateien bis zu 10× kleiner werden als WAV — bei akzeptabler Qualität.",
    wav: "WAV (Waveform Audio File Format) ist unkomprimiertes, verlustfreies Audio von Microsoft und IBM. Es speichert die rohen Samples — der Studiostandard.",
    flac: "FLAC (Free Lossless Audio Codec) komprimiert Audio ohne Qualitätsverlust — kleiner als WAV und bitgenau. Ideal zum Archivieren von Musik.",
    mp4: "MP4 ist ein universeller MPEG-4-Container. Er enthält meist H.264/H.265-Video und AAC-Audio. Der Standard für YouTube, Smartphones und Fernseher.",
    webm: "WebM ist Googles offenes Webformat mit VP9/AV1 und Opus — von Chrome, Firefox und Edge nativ unterstützt.",
    png: "PNG ist ein verlustfreies Bildformat mit Alpha-Transparenz. Ideal für Logos, Icons, Screenshots und scharfe Grafiken.",
    jpg: "JPG (JPEG) dominiert die digitale Fotografie. Die verlustbehaftete DCT-Kompression liefert kleine Dateien bei guter Bildqualität — seit den 90ern der Webstandard.",
    webp: "WebP ist Googles modernes Format mit verlustbehaftetem und verlustfreiem Modus, Animation und Transparenz. Die Dateien sind 25–35 % kleiner als JPG.",
    pdf: "PDF (Portable Document Format) ist Adobes Standard für Dokumente mit festem Layout. Es bewahrt Schriften und Grafiken auf jedem Gerät.",
    json: "JSON (JavaScript Object Notation) ist ein leichtgewichtiges textbasiertes Datenformat. Der Standard für REST-APIs, App-Konfigurationen und NoSQL.",
    docx: "DOCX (Office Open XML) ist das Dokumentformat von Microsoft Word. Es erlaubt das Bearbeiten von Text, Stilen und Layout — neben PDF der Bürostandard.",
    heic: "HEIC (High Efficiency Image Container) ist Apples Standard-Fotoformat auf iPhone und iPad. Kleiner als JPG bei gleicher Qualität, aber außerhalb der Apple-Welt schlecht kompatibel.",
  },
  buildParagraphs(name, ext, category, compression) {
    const ctx = this.categoryContext[category] ?? ""
    const comp = this.compressionLabels[compression] ?? compression
    const custom = this.descriptions[ext]
    const p1 = custom ?? `${name} (.${ext.toUpperCase()}) ist ein Dateiformat aus der Kategorie „${categoryNamesDe[category] ?? category}“. ${ctx}`
    return [
      p1,
      `Kompressionstyp: ${comp}`,
      `Auf Toolando.tech kannst du ${ext.toUpperCase()}-Dateien in viele andere Formate umwandeln und wieder zurück — ohne Software-Installation, direkt im Browser. Die Dateien werden sicher verarbeitet und nach der Konvertierung gelöscht.`,
    ]
  },
  buildUseCases(ext, category) {
    const map: Record<string, string[]> = {
      mp3: ["Musik auf Handy und MP3-Player", "Podcasts und Hörbücher", "Sprachaufnahmen für den E-Mail-Versand", "Hintergrundmusik in Videos (Kompromiss aus Größe und Qualität)"],
      wav: ["Audiobearbeitung in der DAW (Audacity, FL Studio)", "Mastering und Archivierung", "Export zur weiteren Bearbeitung", "Aufnahmen, bei denen jedes Detail zählt"],
      flac: ["Musiksammlung ohne Qualitätsverlust archivieren", "Audiophile Wiedergabe zu Hause", "Backup von Studioaufnahmen"],
      mp4: ["YouTube, TikTok, Instagram Reels", "Smartphone-Aufnahmen", "Video-Präsentationen", "Videos per E-Mail oder Messenger teilen"],
      webm: ["Eingebettete Videos auf Websites", "HTML5-Video im Browser", "Streaming mit geringer Bandbreite"],
      png: ["Logos und Icons mit Transparenz", "UI/UX-Screenshots", "Grafiken mit Text und scharfen Kanten", "Druckgrafiken für kleine Auflagen"],
      jpg: ["Fotos von Kamera und Handy", "Web-Galerien", "Vorschaubilder und Thumbnails", "E-Mail-Anhänge"],
      webp: ["Website-Optimierung (PageSpeed)", "Produktfotos im E-Commerce", "Responsive Grafiken"],
      pdf: ["Verträge, Rechnungen, Lebensläufe", "Druckfertige Dokumente", "Dokumentenarchivierung", "E-Books und Handbücher"],
      json: ["REST-API-Request und -Response", "App-Konfiguration (package.json, tsconfig)", "Datenaustausch zwischen Microservices"],
    }
    if (map[ext]) return map[ext]
    const generic: Record<string, string[]> = {
      audio: [`${ext.toUpperCase()}-Audio abspielen`, "In ein besser unterstütztes Format konvertieren", "Für Bearbeitung oder Veröffentlichung vorbereiten"],
      video: [`${ext.toUpperCase()}-Video abspielen`, "Für soziale Plattformen konvertieren", "Ton aus einer Aufnahme extrahieren"],
      image: [`${ext.toUpperCase()}-Grafiken anzeigen`, "Für Web oder Druck konvertieren", "Dateigröße optimieren"],
      document: [`${ext.toUpperCase()}-Dokumente bearbeiten`, "In PDF oder HTML konvertieren", "Archivieren und teilen"],
      data: [`${ext.toUpperCase()}-Daten importieren und exportieren`, "Integration mit API oder Excel", "Migration zwischen Systemen"],
      font: [`${ext.toUpperCase()}-Schriften im Web veröffentlichen`, "Schriften für den Druck vorbereiten", "Konvertierung zwischen Web- und Desktop-Formaten"],
      archive: [`${ext.toUpperCase()}-Archive entpacken`, "In universelles ZIP konvertieren", "Dateien für den Versand komprimieren"],
    }
    return generic[category] ?? [`Arbeiten mit ${ext.toUpperCase()}-Dateien`]
  },
  buildPros(ext, compression) {
    const base: string[] = []
    if (compression === "lossy") base.push("Geringe Dateigröße")
    if (compression === "lossless" || compression === "none") base.push("Hohe oder volle Qualität")
    if (compression === "text") base.push("Für Menschen lesbar, leicht zu debuggen")
    if (ext === "mp3") return ["Universelle Kompatibilität — funktioniert überall", "Sehr kleine Dateien", "Einstellbare Qualität (Bitrate)"]
    if (ext === "webp") return ["25–35 % kleiner als JPG", "Unterstützt Transparenz und Animation", "Von allen modernen Browsern unterstützt"]
    if (ext === "pdf") return ["Identische Darstellung auf jedem Gerät", "Unterstützt Schriften und Grafiken", "Standard in Wirtschaft und Bildung"]
    return base.length ? base : ["Breite Unterstützung im Toolando.tech-Ökosystem", "Online-Konvertierung ohne Installation"]
  },
  buildCons(ext, compression) {
    if (compression === "lossy") return ["Qualitätsverlust bei jeder erneuten Konvertierung", "Für wiederholtes Bearbeiten ungeeignet"]
    if (ext === "wav") return ["Sehr große Dateien (ca. 10 MB pro Minute in Stereo-CD-Qualität)", "Für Streaming unpraktisch"]
    if (ext === "heic") return ["Schlechte Kompatibilität mit Windows und älteren Geräten", "Zum Teilen ist eine Konvertierung nach JPG oder PNG nötig"]
    if (ext === "svg") return ["Nicht für Fotografie geeignet", "Kann Skripte enthalten — mit Vorsicht verwenden"]
    if (compression === "lossless" || compression === "none") return ["Größere Dateien als bei verlustbehafteten Formaten"]
    return ["Für volle Kompatibilität ist eventuell eine Konvertierung nötig"]
  },
  buildCompatibility(ext, category) {
    const specific: Record<string, string> = {
      mp3: "Wird von jedem Smartphone, Computer, Autoradio, Fernseher und jeder Streaming-Plattform unterstützt. Der De-facto-Standard für Audio.",
      wav: "Nativ unter Windows, macOS, Linux und in jeder DAW-Software. Universell in der Audioproduktion.",
      mp4: "Läuft auf iPhone, Android, Windows, macOS, Smart-TVs, in Browsern und auf Videoplattformen.",
      webp: "Chrome, Firefox, Edge, Safari 14+, Opera. Keine Unterstützung im Internet Explorer.",
      heic: "Standard-Fotoformat auf iPhone und iPad. Windows 10+ mit Erweiterung, Android 10+. Ältere Systeme benötigen eine Konvertierung.",
      pdf: "Adobe Acrobat, Browser, LibreOffice, Google Docs, native Vorschau unter macOS und iOS.",
    }
    return specific[ext] ?? `${ext.toUpperCase()} wird von den Tools auf Toolando.tech und den meisten modernen Programmen der Kategorie „${categoryNamesDe[category] ?? category}“ unterstützt.`
  },
  buildFaq(ext, name) {
    return [
      { q: `Was ist eine ${name}-Datei?`, a: `${name} ist ein Dateiformat mit der Endung .${ext.toUpperCase()}, das zum Speichern und Austauschen von Daten dient. Technische Details und Einsatzzwecke findest du weiter oben.` },
      { q: `Wie konvertiere ich ${ext.toUpperCase()} online?`, a: `Öffne Toolando.tech, wähle einen Konverter (z. B. ${ext.toUpperCase()} → anderes Format), lade deine Datei hoch und lade das Ergebnis herunter. Du brauchst keine Software.` },
      { q: `Verringert die Konvertierung von ${ext.toUpperCase()} die Qualität?`, a: `Das hängt von den Formaten ab. Verlustbehaftet → verlustbehaftet verringert die Qualität. Die Konvertierung in ein verlustfreies Format holt verlorene Daten nicht zurück, bewahrt aber das aktuelle Niveau.` },
      { q: `Sind meine ${ext.toUpperCase()}-Dateien sicher?`, a: `Ja. Toolando.tech verarbeitet Dateien ausschließlich für die Konvertierung und löscht sie sofort danach. Die Verbindung ist verschlüsselt (HTTPS).` },
    ]
  },
  buildComparisons(ext, _category) {
    const map: Record<string, { format: string; note: string }[]> = {
      mp3: [
        { format: "WAV", note: "WAV ist verlustfrei und groß — MP3 ist klein, aber verlustbehaftet. Zum Hören: MP3. Zum Bearbeiten: WAV." },
        { format: "FLAC", note: "FLAC ist verlustfrei und kleiner als WAV. MP3 ist kleiner, aber verlustbehaftet." },
        { format: "AAC/M4A", note: "AAC schlägt MP3 bei gleicher Bitrate in der Qualität." },
      ],
      jpg: [
        { format: "PNG", note: "PNG ist verlustfrei und unterstützt Transparenz — JPG ist kleiner, aber ohne Alphakanal. Fotos: JPG. Logos: PNG." },
        { format: "WebP", note: "WebP ist bei gleicher Qualität 25–35 % kleiner als JPG." },
        { format: "AVIF", note: "AVIF ist noch kleiner, wird von älteren Browsern aber schlechter unterstützt." },
      ],
      mp4: [
        { format: "WebM", note: "WebM ist besser fürs Web, MP4 besser für universelle Kompatibilität." },
        { format: "MOV", note: "MOV ist Apples Schnittstandard, MP4 der Standard zur Veröffentlichung." },
        { format: "MKV", note: "MKV ist ein flexibler Container mit Untertiteln — MP4 ist einfacher und weiter verbreitet." },
      ],
    }
    return map[ext] ?? []
  },
}

const copyEs: LocaleCopy = {
  ...copyEn,
  compressionLabels: {
    lossy: "Con pérdida: archivos más pequeños, pero se pierden datos en cada conversión.",
    lossless: "Sin pérdida: conserva toda la calidad, archivos más grandes.",
    none: "Sin comprimir: la representación original.",
    container: "Contenedor: envuelve flujos de vídeo y audio sin fijar la compresión.",
    text: "Formato de texto: legible por humanos y máquinas.",
    vector: "Vectorial: definido matemáticamente, se escala sin perder nitidez.",
    mixed: "Mixto: puede contener texto, gráficos y metadatos.",
    both: "Con y sin pérdida: depende de los ajustes de guardado.",
  },
  categoryContext: {
    audio: "Los formatos de audio almacenan música, pódcasts, grabaciones de voz y bandas sonoras de vídeo.",
    video: "Los formatos de vídeo almacenan imágenes en movimiento y, a menudo, audio: se usan en grabaciones, películas y streaming.",
    image: "Los formatos de imagen almacenan gráficos rasterizados o vectoriales: fotos, ilustraciones, iconos.",
    document: "Los formatos de documento almacenan texto con o sin formato: informes, contratos, notas.",
    data: "Los formatos de datos intercambian información estructurada entre sistemas y aplicaciones.",
    font: "Los formatos de fuente almacenan las formas de las letras que se usan en impresión y en sitios web.",
    archive: "Los formatos de archivo comprimido agrupan varios ficheros en uno, normalmente con compresión.",
  },
  descriptions: {
    mp3: "MP3 es el formato de audio más popular del mundo. Usa compresión con pérdida que elimina los sonidos apenas audibles, así que los archivos son hasta 10 veces más pequeños que WAV con una calidad aceptable.",
    wav: "WAV (Waveform Audio File Format) es audio sin comprimir y sin pérdida creado por Microsoft e IBM. Guarda las muestras en bruto: el estándar de estudio.",
    flac: "FLAC (Free Lossless Audio Codec) comprime el audio sin perder calidad: más pequeño que WAV y bit a bit idéntico. Ideal para archivar música.",
    mp4: "MP4 es un contenedor MPEG-4 universal. Suele incluir vídeo H.264/H.265 y audio AAC. El estándar de YouTube, los smartphones y los televisores.",
    webm: "WebM es el formato web abierto de Google, con VP9/AV1 y Opus, compatible de forma nativa con Chrome, Firefox y Edge.",
    png: "PNG es un formato de imagen sin pérdida con transparencia alfa. Ideal para logotipos, iconos, capturas de pantalla y gráficos nítidos.",
    jpg: "JPG (JPEG) domina la fotografía digital. Su compresión con pérdida DCT genera archivos pequeños con buena calidad visual: el estándar de la web desde los años 90.",
    webp: "WebP es el formato moderno de Google, con modos con y sin pérdida, animación y transparencia. Sus archivos son un 25–35 % más pequeños que JPG.",
    pdf: "PDF (Portable Document Format) es el estándar de Adobe para documentos de diseño fijo. Conserva las fuentes y los gráficos en cualquier dispositivo.",
    json: "JSON (JavaScript Object Notation) es un formato de datos de texto ligero. El estándar en API REST, configuración de aplicaciones y NoSQL.",
    docx: "DOCX (Office Open XML) es el formato de documento de Microsoft Word. Permite editar texto, estilos y diseño: el estándar de oficina junto con PDF.",
    heic: "HEIC (High Efficiency Image Container) es el formato de foto predeterminado de iPhone y iPad. Comprime mejor que JPG con la misma calidad, pero tiene poca compatibilidad fuera del ecosistema de Apple.",
  },
  buildParagraphs(name, ext, category, compression) {
    const ctx = this.categoryContext[category] ?? ""
    const comp = this.compressionLabels[compression] ?? compression
    const custom = this.descriptions[ext]
    const p1 = custom ?? `${name} (.${ext.toUpperCase()}) es un formato de archivo de la categoría «${categoryNamesEs[category] ?? category}». ${ctx}`
    return [
      p1,
      `Tipo de compresión: ${comp}`,
      `En Toolando.tech puedes convertir archivos ${ext.toUpperCase()} a muchos otros formatos y al revés, sin instalar nada y directamente en tu navegador. Los archivos se procesan de forma segura y se eliminan después de la conversión.`,
    ]
  },
  buildUseCases(ext, category) {
    const map: Record<string, string[]> = {
      mp3: ["Música en el móvil y en reproductores MP3", "Pódcasts y audiolibros", "Grabaciones de voz para enviar por correo", "Música de fondo en vídeos (equilibrio entre tamaño y calidad)"],
      wav: ["Edición de audio en un DAW (Audacity, FL Studio)", "Masterización y archivado", "Exportar para seguir editando", "Grabaciones en las que cada detalle cuenta"],
      flac: ["Archivar tu colección de música sin perder calidad", "Escucha audiófila en casa", "Copias de seguridad de grabaciones de estudio"],
      mp4: ["YouTube, TikTok, Instagram Reels", "Grabaciones con el móvil", "Presentaciones en vídeo", "Compartir vídeo por correo o mensajería"],
      webm: ["Vídeo insertado en páginas web", "Vídeo HTML5 en el navegador", "Streaming con poco ancho de banda"],
      png: ["Logotipos e iconos con transparencia", "Capturas de pantalla de UI/UX", "Gráficos con texto y bordes nítidos", "Gráficos de impresión en tiradas cortas"],
      jpg: ["Fotos de cámara y móvil", "Galerías web", "Miniaturas y vistas previas", "Adjuntos de correo electrónico"],
      webp: ["Optimización de sitios web (PageSpeed)", "Fotos de producto en e-commerce", "Gráficos adaptables"],
      pdf: ["Contratos, facturas y currículums", "Documentos listos para imprimir", "Archivado de documentos", "Libros electrónicos y manuales"],
      json: ["Peticiones y respuestas de API REST", "Configuración de aplicaciones (package.json, tsconfig)", "Intercambio de datos entre microservicios"],
    }
    if (map[ext]) return map[ext]
    const generic: Record<string, string[]> = {
      audio: [`Reproducir audio ${ext.toUpperCase()}`, "Convertir a un formato mejor soportado", "Preparar el archivo para editarlo o publicarlo"],
      video: [`Reproducir vídeo ${ext.toUpperCase()}`, "Convertir para redes sociales", "Extraer el audio de una grabación"],
      image: [`Mostrar gráficos ${ext.toUpperCase()}`, "Convertir para web o impresión", "Optimizar el tamaño del archivo"],
      document: [`Editar documentos ${ext.toUpperCase()}`, "Convertir a PDF o HTML", "Archivar y compartir"],
      data: [`Importar y exportar datos ${ext.toUpperCase()}`, "Integración con API o Excel", "Migración entre sistemas"],
      font: [`Publicar fuentes ${ext.toUpperCase()} en la web`, "Preparar fuentes para impresión", "Convertir entre formatos web y de escritorio"],
      archive: [`Extraer archivos ${ext.toUpperCase()}`, "Convertir a ZIP universal", "Comprimir archivos para enviarlos"],
    }
    return generic[category] ?? [`Trabajar con archivos ${ext.toUpperCase()}`]
  },
  buildPros(ext, compression) {
    const base: string[] = []
    if (compression === "lossy") base.push("Tamaño de archivo pequeño")
    if (compression === "lossless" || compression === "none") base.push("Calidad alta o completa")
    if (compression === "text") base.push("Legible para las personas y fácil de depurar")
    if (ext === "mp3") return ["Compatibilidad universal: funciona en todas partes", "Archivos muy pequeños", "Calidad ajustable (bitrate)"]
    if (ext === "webp") return ["Un 25–35 % más pequeño que JPG", "Admite transparencia y animación", "Compatible con todos los navegadores modernos"]
    if (ext === "pdf") return ["Aspecto idéntico en cualquier dispositivo", "Admite fuentes y gráficos", "Estándar en empresas y educación"]
    return base.length ? base : ["Amplio soporte en el ecosistema de Toolando.tech", "Conversión online sin instalar nada"]
  },
  buildCons(ext, compression) {
    if (compression === "lossy") return ["Pérdida de calidad en cada reconversión", "No sirve para editar repetidamente"]
    if (ext === "wav") return ["Archivos muy grandes (unos 10 MB por minuto en estéreo calidad CD)", "Poco práctico para streaming"]
    if (ext === "heic") return ["Poca compatibilidad con Windows y dispositivos antiguos", "Hay que convertirlo a JPG o PNG para compartirlo"]
    if (ext === "svg") return ["No sirve para fotografía", "Puede contener scripts: úsalo con precaución"]
    if (compression === "lossless" || compression === "none") return ["Archivos más grandes que en los formatos con pérdida"]
    return ["Puede que necesites convertirlo para una compatibilidad total"]
  },
  buildCompatibility(ext, category) {
    const specific: Record<string, string> = {
      mp3: "Compatible con todos los smartphones, ordenadores, equipos de coche, televisores y plataformas de streaming. El estándar de facto del audio.",
      wav: "Nativo en Windows, macOS, Linux y en todos los DAW. Universal en producción de audio.",
      mp4: "Se reproduce en iPhone, Android, Windows, macOS, smart TV, navegadores y plataformas de vídeo.",
      webp: "Chrome, Firefox, Edge, Safari 14+ y Opera. No es compatible con Internet Explorer.",
      heic: "Formato de foto predeterminado en iPhone y iPad. Windows 10+ con la extensión, Android 10+. Los sistemas antiguos necesitan conversión.",
      pdf: "Adobe Acrobat, navegadores, LibreOffice, Google Docs y vista previa nativa en macOS e iOS.",
    }
    return specific[ext] ?? `${ext.toUpperCase()} es compatible con las herramientas de Toolando.tech y con la mayoría del software moderno de la categoría «${categoryNamesEs[category] ?? category}».`
  },
  buildFaq(ext, name) {
    return [
      { q: `¿Qué es un archivo ${name}?`, a: `${name} es un formato de archivo con la extensión .${ext.toUpperCase()} que sirve para almacenar e intercambiar datos. Arriba encontrarás los detalles técnicos y los usos habituales.` },
      { q: `¿Cómo convierto ${ext.toUpperCase()} online?`, a: `Entra en Toolando.tech, elige un conversor (por ejemplo, ${ext.toUpperCase()} → otro formato), sube tu archivo y descarga el resultado. No necesitas instalar nada.` },
      { q: `¿La conversión de ${ext.toUpperCase()} reduce la calidad?`, a: `Depende de los formatos. De con pérdida a con pérdida sí reduce la calidad. Convertir a un formato sin pérdida no recupera los datos perdidos, pero conserva el nivel actual.` },
      { q: `¿Están seguros mis archivos ${ext.toUpperCase()}?`, a: `Sí. Toolando.tech procesa los archivos solo para convertirlos y los elimina de inmediato. La conexión está cifrada (HTTPS).` },
    ]
  },
  buildComparisons(ext, _category) {
    const map: Record<string, { format: string; note: string }[]> = {
      mp3: [
        { format: "WAV", note: "WAV es sin pérdida y grande; MP3 es pequeño pero con pérdida. Para escuchar: MP3. Para editar: WAV." },
        { format: "FLAC", note: "FLAC es sin pérdida y más pequeño que WAV. MP3 es más pequeño, pero con pérdida." },
        { format: "AAC/M4A", note: "AAC supera a MP3 en calidad con el mismo bitrate." },
      ],
      jpg: [
        { format: "PNG", note: "PNG es sin pérdida y con transparencia; JPG es más pequeño, pero sin canal alfa. Fotos: JPG. Logotipos: PNG." },
        { format: "WebP", note: "WebP es un 25–35 % más pequeño que JPG con la misma calidad." },
        { format: "AVIF", note: "AVIF es aún más pequeño, pero tiene peor soporte en navegadores antiguos." },
      ],
      mp4: [
        { format: "WebM", note: "WebM es mejor para la web; MP4, para la compatibilidad universal." },
        { format: "MOV", note: "MOV es el estándar de edición de Apple; MP4, el estándar de publicación." },
        { format: "MKV", note: "MKV es un contenedor flexible con subtítulos; MP4 es más sencillo y más común." },
      ],
    }
    return map[ext] ?? []
  },
}

const copyUk: LocaleCopy = {
  ...copyEn,
  compressionLabels: {
    lossy: "Із втратами — файл менший, але частина даних губиться під час кожної конвертації.",
    lossless: "Без втрат — зберігає повну якість, файли більші.",
    none: "Без стиснення — оригінальне представлення даних.",
    container: "Контейнер — упаковує відео- та аудіопотоки, не визначаючи саме стиснення.",
    text: "Текстовий формат — читабельний для людини й машини.",
    vector: "Векторний — описаний математично, масштабується без втрати чіткості.",
    mixed: "Змішаний — може містити текст, графіку та метадані.",
    both: "Із втратами і без втрат — залежно від налаштувань збереження.",
  },
  categoryContext: {
    audio: "Аудіоформати зберігають музику, подкасти, голосові записи та звукові доріжки до відео.",
    video: "Відеоформати зберігають рухоме зображення й зазвичай також звук — їх використовують у записах, фільмах і стримінгу.",
    image: "Формати зображень зберігають растрову або векторну графіку — фотографії, ілюстрації, іконки.",
    document: "Формати документів зберігають форматований або звичайний текст — звіти, договори, нотатки.",
    data: "Формати даних служать для обміну структурованою інформацією між системами та застосунками.",
    font: "Формати шрифтів зберігають накреслення літер, які використовують у друці та на вебсайтах.",
    archive: "Формати архівів пакують кілька файлів в один, зазвичай зі стисненням.",
  },
  descriptions: {
    mp3: "MP3 — найпопулярніший аудіоформат у світі. Він використовує стиснення з втратами, яке прибирає ледь чутні для людського вуха звуки, тому файли до 10 разів менші за WAV за прийнятної якості.",
    wav: "WAV (Waveform Audio File Format) — нестиснене аудіо без втрат від Microsoft та IBM. Зберігає необроблені звукові семпли — стандарт студій звукозапису.",
    flac: "FLAC (Free Lossless Audio Codec) стискає аудіо без втрати якості — менший за WAV і побітово точний. Ідеальний для архівування музики.",
    mp4: "MP4 — універсальний контейнер MPEG-4. Зазвичай містить відео H.264/H.265 та аудіо AAC. Стандарт YouTube, смартфонів і телевізорів.",
    webm: "WebM — відкритий вебформат Google на кодеках VP9/AV1 та Opus, який нативно підтримують Chrome, Firefox і Edge.",
    png: "PNG — формат зображень без втрат з альфа-прозорістю. Ідеальний для логотипів, іконок, знімків екрана та чіткої графіки.",
    jpg: "JPG (JPEG) домінує в цифровій фотографії. Стиснення з втратами на основі DCT дає невеликі файли з хорошою візуальною якістю — вебстандарт із 90-х років.",
    webp: "WebP — сучасний формат Google з режимами стиснення з втратами й без втрат, підтримкою анімації та прозорості. Файли на 25–35 % менші за JPG.",
    pdf: "PDF (Portable Document Format) — стандарт Adobe для документів із фіксованим макетом. Зберігає шрифти та графіку на будь-якому пристрої.",
    json: "JSON (JavaScript Object Notation) — легкий текстовий формат даних. Стандарт для REST API, конфігурацій застосунків і NoSQL.",
    docx: "DOCX (Office Open XML) — формат документів Microsoft Word. Дає змогу редагувати текст, стилі та макет — офісний стандарт поряд із PDF.",
    heic: "HEIC (High Efficiency Image Container) — формат фотографій, який Apple використовує за замовчуванням на iPhone та iPad. Стискає краще за JPG за тієї самої якості, але має слабку сумісність поза екосистемою Apple.",
  },
  buildParagraphs(name, ext, category, compression) {
    const ctx = this.categoryContext[category] ?? ""
    const comp = this.compressionLabels[compression] ?? compression
    const custom = this.descriptions[ext]
    const p1 = custom ?? `${name} (.${ext.toUpperCase()}) — це формат файлу з категорії «${categoryNamesUk[category] ?? category}». ${ctx}`
    return [
      p1,
      `Тип стиснення: ${comp}`,
      `У Toolando.tech ви можете конвертувати файли ${ext.toUpperCase()} у багато інших форматів і навпаки — без встановлення програм, просто у браузері. Файли обробляються безпечно й видаляються після конвертації.`,
    ]
  },
  buildUseCases(ext, category) {
    const map: Record<string, string[]> = {
      mp3: ["Музика на смартфоні та MP3-плеєрі", "Подкасти й аудіокниги", "Голосові записи для надсилання електронною поштою", "Фонова музика у відео (компроміс між розміром і якістю)"],
      wav: ["Монтаж аудіо в DAW (Audacity, FL Studio)", "Мастеринг і архівування записів", "Експорт для подальшого редагування", "Записи, де важлива кожна деталь звуку"],
      flac: ["Архівування музичної колекції без втрати якості", "Аудіофільське прослуховування вдома", "Резервні копії студійних записів"],
      mp4: ["YouTube, TikTok, Instagram Reels", "Записи зі смартфона", "Відеопрезентації", "Надсилання відео поштою або в месенджері"],
      webm: ["Відео, вбудоване на вебсторінку", "HTML5-відео у браузері", "Стримінг за низької швидкості з’єднання"],
      png: ["Логотипи та іконки з прозорим тлом", "Знімки екрана інтерфейсів", "Графіка з текстом і чіткими краями", "Графіка для друку невеликими накладами"],
      jpg: ["Фотографії з камери та смартфона", "Вебгалереї", "Мініатюри та попередній перегляд", "Вкладення до електронних листів"],
      webp: ["Оптимізація сайтів (PageSpeed)", "Фотографії товарів в інтернет-магазинах", "Адаптивна графіка"],
      pdf: ["Договори, рахунки, резюме", "Документи, готові до друку", "Архівування документів", "Електронні книги та інструкції"],
      json: ["Запити й відповіді REST API", "Конфігурація застосунків (package.json, tsconfig)", "Обмін даними між мікросервісами"],
    }
    if (map[ext]) return map[ext]
    const generic: Record<string, string[]> = {
      audio: [`Відтворення аудіо ${ext.toUpperCase()}`, "Конвертація у формат із кращою підтримкою", "Підготовка файлу до редагування чи публікації"],
      video: [`Відтворення відео ${ext.toUpperCase()}`, "Конвертація для соціальних платформ", "Вилучення звукової доріжки із запису"],
      image: [`Перегляд графіки ${ext.toUpperCase()}`, "Конвертація для вебу або друку", "Оптимізація розміру файлу"],
      document: [`Редагування документів ${ext.toUpperCase()}`, "Конвертація у PDF або HTML", "Архівування та обмін з іншими"],
      data: [`Імпорт та експорт даних ${ext.toUpperCase()}`, "Інтеграція з API або Excel", "Міграція між системами"],
      font: [`Публікація шрифтів ${ext.toUpperCase()} на сайті`, "Підготовка шрифту до друку", "Конвертація між вебформатами та настільними форматами"],
      archive: [`Розпакування архівів ${ext.toUpperCase()}`, "Конвертація в універсальний ZIP", "Стиснення файлів для надсилання"],
    }
    return generic[category] ?? [`Робота з файлами ${ext.toUpperCase()}`]
  },
  buildPros(ext, compression) {
    const base: string[] = []
    if (compression === "lossy") base.push("Малий розмір файлу")
    if (compression === "lossless" || compression === "none") base.push("Висока або повна якість")
    if (compression === "text") base.push("Зрозумілий людині, легко налагоджувати")
    if (ext === "mp3") return ["Універсальна сумісність — працює всюди", "Дуже малі файли", "Регульований рівень якості (бітрейт)"]
    if (ext === "webp") return ["На 25–35 % менший за JPG", "Підтримка прозорості та анімації", "Підтримується всіма сучасними браузерами"]
    if (ext === "pdf") return ["Однаковий вигляд на будь-якому пристрої", "Підтримка шрифтів і графіки", "Стандарт у бізнесі та освіті"]
    return base.length ? base : ["Широка підтримка в екосистемі Toolando.tech", "Онлайн-конвертація без встановлення програм"]
  },
  buildCons(ext, compression) {
    if (compression === "lossy") return ["Втрата якості під час кожної повторної конвертації", "Не підходить для багаторазового редагування"]
    if (ext === "wav") return ["Дуже великі файли (близько 10 МБ на хвилину стерео якості CD)", "Непрактичний для стримінгу"]
    if (ext === "heic") return ["Слабка сумісність із Windows і старішими пристроями", "Для надсилання потрібна конвертація у JPG або PNG"]
    if (ext === "svg") return ["Не підходить для фотографій", "Може містити скрипти — потребує обережності"]
    if (compression === "lossless" || compression === "none") return ["Більший розмір файлу, ніж у форматів із втратами"]
    return ["Може знадобитися конвертація для повної сумісності"]
  },
  buildCompatibility(ext, category) {
    const specific: Record<string, string> = {
      mp3: "Підтримується будь-яким смартфоном, комп’ютером, автомобільним плеєром, телевізором і стримінговою платформою. Фактичний стандарт аудіо.",
      wav: "Нативно підтримується у Windows, macOS, Linux і в усіх програмах DAW. Універсальний у виробництві аудіо.",
      mp4: "Відтворюється на iPhone, Android, Windows, macOS, смарт-телевізорах, у браузерах і на відеоплатформах.",
      webp: "Chrome, Firefox, Edge, Safari 14+, Opera. Не підтримується в Internet Explorer.",
      heic: "Формат фотографій за замовчуванням на iPhone та iPad. Windows 10+ із розширенням, Android 10+. Старіші системи потребують конвертації.",
      pdf: "Adobe Acrobat, браузери, LibreOffice, Google Docs, нативний перегляд у macOS та iOS.",
    }
    return specific[ext] ?? `Формат ${ext.toUpperCase()} підтримується інструментами Toolando.tech і більшістю сучасного програмного забезпечення з категорії «${categoryNamesUk[category] ?? category}».`
  },
  buildFaq(ext, name) {
    return [
      { q: `Що таке файл ${name}?`, a: `${name} — це формат файлу з розширенням .${ext.toUpperCase()}, який використовують для зберігання та обміну даними. Технічні деталі й сфери застосування описані вище.` },
      { q: `Як конвертувати ${ext.toUpperCase()} онлайн?`, a: `Відкрийте Toolando.tech, виберіть конвертер зі списку (наприклад, ${ext.toUpperCase()} → інший формат), завантажте файл і збережіть результат. Встановлювати програми не потрібно.` },
      { q: `Чи знижує конвертація ${ext.toUpperCase()} якість?`, a: `Це залежить від форматів. Конвертація з формату із втратами в інший формат із втратами знижує якість. Конвертація у формат без втрат не поверне втрачених даних, але збереже поточний рівень.` },
      { q: `Чи мої файли ${ext.toUpperCase()} у безпеці?`, a: `Так. Toolando.tech обробляє файли виключно для конвертації й одразу їх видаляє. З’єднання захищене шифруванням (HTTPS).` },
    ]
  },
  buildComparisons(ext, _category) {
    const map: Record<string, { format: string; note: string }[]> = {
      mp3: [
        { format: "WAV", note: "WAV — без втрат і великий, MP3 — малий, але зі втратами. Для прослуховування: MP3. Для редагування: WAV." },
        { format: "FLAC", note: "FLAC — без втрат і менший за WAV. MP3 менший, але зі втратами." },
        { format: "AAC/M4A", note: "AAC дає кращу якість, ніж MP3, за однакового бітрейта." },
      ],
      jpg: [
        { format: "PNG", note: "PNG — без втрат і з прозорістю, JPG — менший, але без альфа-каналу. Для фотографій: JPG. Для логотипів: PNG." },
        { format: "WebP", note: "WebP на 25–35 % менший за JPG за тієї самої якості." },
        { format: "AVIF", note: "AVIF ще менший, але має слабшу підтримку в старіших браузерах." },
      ],
      mp4: [
        { format: "WebM", note: "WebM краще підходить для вебу, MP4 — для універсальної сумісності." },
        { format: "MOV", note: "MOV — стандарт Apple для монтажу, MP4 — стандарт для публікації." },
        { format: "MKV", note: "MKV — гнучкий контейнер із субтитрами, MP4 простіший і поширеніший." },
      ],
    }
    return map[ext] ?? []
  },
}

function displayName(ext: string): string {
  const special: Record<string, string> = {
    md: "Markdown",
    "3gp": "3GP",
    heic: "HEIC",
    docx: "DOCX",
    odt: "ODT",
    yaml: "YAML",
    json: "JSON",
    csv: "CSV",
    tsv: "TSV",
    xml: "XML",
    pdf: "PDF",
    svg: "SVG",
    avif: "AVIF",
    webp: "WebP",
    woff2: "WOFF2",
  }
  return special[ext] ?? ext.toUpperCase()
}

export function buildFormatProfile(locale: string, id: string): FormatProfile | undefined {
  const meta = FORMAT_META[id]
  if (!meta) return undefined
  const copyMap: Record<string, LocaleCopy> = {
    pl: copyPl,
    en: copyEn,
    de: copyDe,
    es: copyEs,
    uk: copyUk,
    fr: copyFr,
    it: copyIt,
    pt: copyPt,
    nl: copyNl,
    sv: copySv,
    no: copyNo,
    da: copyDa,
    fi: copyFi,
    cs: copyCs,
    ro: copyRo,
    hu: copyHu,
    el: copyEl,
    tr: copyTr,
    ru: copyRu,
    ar: copyAr,
    zh: copyZh,
    ja: copyJa,
    ko: copyKo,
    hi: copyHi,
    id: copyId,
  }
  const copy = copyMap[locale] ?? copyEn
  const name = displayName(id)
  return {
    id,
    name,
    category: meta.category,
    compression: meta.compression,
    extension: id,
    mimeType: meta.mimeType,
    intro: copy.descriptions[id] ?? copy.buildParagraphs(name, id, meta.category, meta.compression)[0],
    paragraphs: copy.buildParagraphs(name, id, meta.category, meta.compression),
    useCases: copy.buildUseCases(id, meta.category),
    pros: copy.buildPros(id, meta.compression),
    cons: copy.buildCons(id, meta.compression),
    compatibility: copy.buildCompatibility(id, meta.category),
    faq: copy.buildFaq(id, name),
    comparisons: copy.buildComparisons(id, meta.category),
  }
}
