import type { FormatProfile } from "./types"
import { FORMAT_META } from "./format-meta"

type LocaleCopy = {
  compressionLabels: Record<string, string>
  categoryContext: Record<string, string>
  buildParagraphs: (name: string, ext: string, category: string, compression: string) => string[]
  buildUseCases: (ext: string, category: string) => string[]
  buildPros: (ext: string, compression: string) => string[]
  buildCons: (ext: string, compression: string) => string[]
  buildCompatibility: (ext: string, category: string) => string
  buildFaq: (ext: string, name: string) => { q: string; a: string }[]
  buildComparisons: (ext: string, category: string) => { format: string; note: string }[]
  descriptions: Record<string, string>
  names: Record<string, string>
}

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
    de: copyEn,
    es: copyEn,
    uk: copyEn,
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
