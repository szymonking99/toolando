import { fallbackLocale, normalizeToSupported } from "./config"

export type LabNote = {
  title: string
  paragraphs: string[]
}

const pl: Record<string, LabNote> = {
  "mp3-to-wav": {
    title: "Notatka z testów — MP3 → WAV",
    paragraphs: [
      "WAV po konwersji z MP3 jest większy i wygodniejszy w DAW, ale spektrum nadal ma dziurę po kompresji MPEG. W Audacity widać to od razu na wykresie częstotliwości — nie obiecuję „studio quality z MP3”.",
      "Testuję 128, 192 i 320 kbps. Przy 128 kbps szum na hi-hatcie zostaje w WAV. Jeśli edytujesz podcast, lepiej szukać oryginału z rejestratora, a nie „naprawiać” MP3 ze Spotify.",
    ],
  },
  "wav-to-mp3": {
    title: "Notatka z testów — WAV → MP3",
    paragraphs: [
      "Do wysyłki mailem i podcastów używam 192 kbps stereo / 64–96 kbps mono. 320 kbps ma sens przy muzyce, nie przy nagraniu ze smartfona.",
      "FFmpeg w Toolando koduje LAME. Po konwersji sprawdzam, czy tagi ID3 nie są wymagane — ten konwerter ich nie przepisuje z WAV, bo WAV zwykle ich nie ma.",
    ],
  },
  "flac-to-mp3": {
    title: "Notatka z testów — FLAC → MP3",
    paragraphs: [
      "FLAC zostawiam jako archiwum. MP3 robię tylko gdy odtwarzacz w aucie albo stary telefon nie czyta FLAC.",
      "Jedna strata jest nieodwracalna: po MP3 nie wrócisz do FLAC z tą samą jakością. Dlatego na stronie archiwum FLAC tłumaczę, kiedy w ogóle nie konwertować.",
    ],
  },
  "mp4-to-mp3": {
    title: "Notatka z testów — MP4 → MP3",
    paragraphs: [
      "To wyciągnięcie ścieżki z Twojego pliku, nie z linku do serwisu VOD. Wrzuć nagranie z Zoom, OBS albo aparatu.",
      "Jeśli w kontenerze jest AAC, konwersja do MP3 to kolejna strata. Do edycji lepiej wyeksportować WAV. MP3 zostawiam do słuchania i wysyłki.",
    ],
  },
  "mp4-to-webm": {
    title: "Notatka z testów — MP4 → WebM",
    paragraphs: [
      "WebM (VP9) ma sens przy wklejaniu wideo na stronę HTML bez transkodowania przez YouTube. Instagram i TikTok i tak chcą MP4 — nie konwertuj w tę stronę „na social media”.",
      "Długie 1080p może chwilę potrwać na serwerze. Krótsze klipy (poniżej minuty) są praktycznym limitem, przy którym jakość jeszcze da się ocenić na oko.",
    ],
  },
  "png-to-jpg": {
    title: "Notatka z testów — PNG → JPG",
    paragraphs: [
      "Przezroczystość znika — podkładam białe tło. Logo z przezroczystością zostaw w PNG albo WebP lossless.",
      "Zdjęcie-zrzut z tekstem UI po JPG-u myje krawędzie liter. Jeśli to dokument lub mem z napisem, PNG albo WebP bezstratny jest uczciwszym wyborem.",
    ],
  },
  "jpg-to-png": {
    title: "Notatka z testów — JPG → PNG",
    paragraphs: [
      "PNG będzie większy i nie odzyska detalu, którego JPG już wyrzucił. Robię tę konwersję, gdy program (np. starszy edytor) nie przyjmuje JPG albo gdy potrzebuję kanału alfa dodać ręcznie później.",
      "Nie używaj tego jako „poprawy jakości zdjęcia z internetu”. Tego się nie da.",
    ],
  },
  "jpg-to-webp": {
    title: "Notatka z testów — JPG → WebP",
    paragraphs: [
      "Na typowych zdjęciach ze smartfona WebP wychodzi 25–35% mniejszy przy zbliżonej ostrości. Sprawdzam to na stronie testowej w Chrome i Firefox.",
      "Mail i Word nadal wolą JPG. WebP zostawiam do WWW i PageSpeed, nie do załącznika dla księgowej.",
    ],
  },
  "heic-to-jpg": {
    title: "Notatka z testów — HEIC → JPG",
    paragraphs: [
      "Zdjęcia z iPhone’a (iOS 11+) na Windows Explorerze często w ogóle się nie otwierają. To najczęstszy ticket, jaki dostaję mailem.",
      "JPG jest kompromisem kompatybilności. Jeśli chcesz archiwum bez kolejnej straty, trzymaj HEIC i dawaj JPG tylko odbiorcy na Windows.",
    ],
  },
  "pdf-to-jpg": {
    title: "Notatka z testów — PDF → JPG",
    paragraphs: [
      "Każda strona to osobny obraz. Drobny druk (np. umowa 9 pt) na 150 DPI jest na granicy czytelności — do podglądu OK, do podpisu lepiej PNG albo wyższy DPI w innym workflow.",
      "Skan już zapisany jako JPG w PDF-ie nie stanie się ostrzejszy. Konwerter tylko rasteryzuje stronę.",
    ],
  },
  "pdf-to-docx": {
    title: "Notatka z testów — PDF → DOCX",
    paragraphs: [
      "Układ wielokolumnowy i tabele z faktur wychodzą krzywo — to ograniczenie OCR/struktury PDF, nie „zepsuty przycisk”. Po konwersji zawsze otwieram plik w Wordzie i poprawiam nagłówki.",
      "PDF będący skanem obrazu nie zamieni się w edytowalny tekst bez OCR. Ten konwerter nie udaje, że czyta zdjęcie umowy.",
    ],
  },
  "docx-to-pdf": {
    title: "Notatka z testów — DOCX → PDF",
    paragraphs: [
      "Na serwerze stoi LibreOffice właśnie dlatego, że czysty pipeline JS psuje spisy treści i pola. Porównuję marginesy z wydrukiem z Worda na Windows.",
      "Czcionki niestandardowe, których nie ma na serwerze, zostaną podmienione. Osadzaj fonty w DOCX albo trzymaj się Calibri/Liberation.",
    ],
  },
  "svg-to-png": {
    title: "Notatka z testów — SVG → PNG",
    paragraphs: [
      "SVG skaluje się bez rozmazania; PNG jest rastrem pod social media, Word i miejsca, które SVG odrzucają.",
      "Złożone filtry i fonty w SVG mogą wypaść inaczej niż w przeglądarce. Proste logo i ikony przechodzą test; ilustracje z 200 pathami sprawdzam ręcznie.",
    ],
  },
  "kompresor-obrazow": {
    title: "Notatka z testów — kompresor obrazów",
    paragraphs: [
      "Suwak jakości to kompromis, nie magia. Na zdjęciach z telefonu schodzę zwykle do punktu, w którym JPEG jest ~40–60% mniejszy, zanim pojawią się krawędzie wokół nieba.",
      "PNG z dużymi płaskimi kolorami kompresuje się inaczej niż zdjęcie — nie porównuj ich tym samym oczekiwanym procentem.",
    ],
  },
  "laczenie-pdf": {
    title: "Notatka z testów — łączenie PDF",
    paragraphs: [
      "Kolejność plików to kolejność stron. Skan A4 zmieszany z PDF-em poziomym A3 nie „wyrówna się sam” — sprawdzam to na umowach + załącznikach map.",
      "Hasła i ograniczenia drukowania w źródłowym PDF mogą zablokować scalanie. Wtedy narzędzie zgłosi błąd zamiast cicho pominąć strony.",
    ],
  },
  "usun-exif": {
    title: "Notatka z testów — usuwanie EXIF",
    paragraphs: [
      "GPS z iPhone’a w JPG to najczęstszy wyciek, o którym piszę w poradniku prywatności. Po stripie otwieram plik w przeglądarce metadanych i sprawdzam, czy zostałe GPS, model aparatu i miniatura.",
      "To nie anonimizuje twarzy na zdjęciu. Usuwa metadane, nie treść kadru.",
    ],
  },
  "usuwanie-tla": {
    title: "Notatka z testów — usuwanie tła",
    paragraphs: [
      "To nie jest magiczny „Photoshop w jednym kliku”. Na włosach i szkle model zostawia halację; na produkcie na białym stole działa znacznie lepiej.",
      "Wynik to PNG z alfabetą. Nie indeksuję setek wariantów tego narzędzia — jest jedno, z tym zastrzeżeniem. Do skomplikowanego retuszu i tak otworzysz edytor.",
    ],
  },
}

const en: Record<string, LabNote> = {
  "mp3-to-wav": {
    title: "Lab note — MP3 → WAV",
    paragraphs: [
      "WAV after MP3 is larger and easier in a DAW, but the spectrum still has the MPEG hole. Audacity shows it immediately — I will not promise “studio quality from MP3”.",
      "I test 128, 192 and 320 kbps. At 128 kbps hi-hat smear stays in the WAV. For podcast editing, find the recorder original instead of “fixing” a Spotify rip.",
    ],
  },
  "wav-to-mp3": {
    title: "Lab note — WAV → MP3",
    paragraphs: [
      "For email and podcasts I use 192 kbps stereo / 64–96 kbps mono. 320 kbps is for music, not a phone voice note.",
      "FFmpeg here encodes LAME. ID3 tags are not copied from WAV, because WAV usually has none.",
    ],
  },
  "flac-to-mp3": {
    title: "Lab note — FLAC → MP3",
    paragraphs: [
      "I keep FLAC as the archive. MP3 is only for a car stereo or old phone that cannot read FLAC.",
      "The loss is one-way: you cannot round-trip back to FLAC. That is why the FLAC archive guide tells you when not to convert.",
    ],
  },
  "mp4-to-mp3": {
    title: "Lab note — MP4 → MP3",
    paragraphs: [
      "This extracts audio from a file you already have — Zoom, OBS, a camera — not from a VOD URL.",
      "If the container already holds AAC, MP3 is another generation of loss. For editing, export WAV. MP3 is for listening and sending.",
    ],
  },
  "mp4-to-webm": {
    title: "Lab note — MP4 → WebM",
    paragraphs: [
      "WebM (VP9) helps when you embed video in HTML without sending it through YouTube. Instagram and TikTok still want MP4 — do not convert this way “for social”.",
      "Long 1080p jobs take time on the server. Sub-minute clips are the practical range where I can still judge quality by eye.",
    ],
  },
  "png-to-jpg": {
    title: "Lab note — PNG → JPG",
    paragraphs: [
      "Transparency is gone — I composite on white. Keep logos in PNG or lossless WebP.",
      "UI screenshots with text get muddy letter edges as JPEG. For documents or captioned graphics, PNG or lossless WebP is the honest choice.",
    ],
  },
  "jpg-to-png": {
    title: "Lab note — JPG → PNG",
    paragraphs: [
      "The PNG will be larger and will not restore detail JPEG already discarded. I use this when an old editor rejects JPEG, or when I plan to add an alpha channel later.",
      "This is not a way to “enhance” a photo from the web. That is not possible.",
    ],
  },
  "jpg-to-webp": {
    title: "Lab note — JPG → WebP",
    paragraphs: [
      "On typical phone photos WebP lands 25–35% smaller at similar sharpness. I check Chrome and Firefox.",
      "Email and Word still prefer JPEG. WebP is for websites and PageSpeed, not an attachment for accounting.",
    ],
  },
  "heic-to-jpg": {
    title: "Lab note — HEIC → JPG",
    paragraphs: [
      "iPhone photos (iOS 11+) often will not open in Windows Explorer. That is the most common email I get.",
      "JPEG is the compatibility compromise. Keep HEIC as the archive and send JPEG only to the Windows recipient.",
    ],
  },
  "pdf-to-jpg": {
    title: "Lab note — PDF → JPG",
    paragraphs: [
      "Each page becomes its own image. 9 pt contract type at 150 DPI is barely readable — fine for a preview, weak for a signature workflow.",
      "A scan already stored as JPEG inside the PDF will not get sharper. The converter only rasterizes the page.",
    ],
  },
  "pdf-to-docx": {
    title: "Lab note — PDF → DOCX",
    paragraphs: [
      "Multi-column layouts and invoice tables come out crooked — that is PDF structure, not a broken button. I always open the result in Word and fix headings.",
      "An image-only scan will not become editable text without OCR. This converter does not pretend to read a photo of a contract.",
    ],
  },
  "docx-to-pdf": {
    title: "Lab note — DOCX → PDF",
    paragraphs: [
      "LibreOffice runs on the server because a pure JS pipeline wrecks tables of contents and fields. I compare margins with a Word print on Windows.",
      "Custom fonts missing on the server get substituted. Embed fonts in the DOCX or stick to Calibri/Liberation.",
    ],
  },
  "svg-to-png": {
    title: "Lab note — SVG → PNG",
    paragraphs: [
      "SVG scales cleanly; PNG is the raster you need for social apps, Word, and anything that rejects SVG.",
      "Complex filters and fonts inside SVG can render differently than in a browser. Simple logos pass; illustrations with hundreds of paths I spot-check.",
    ],
  },
  "kompresor-obrazow": {
    title: "Lab note — image compressor",
    paragraphs: [
      "The quality slider is a tradeoff, not magic. On phone photos I usually stop once JPEG is ~40–60% smaller, before ringing appears in the sky.",
      "Flat-color PNG compresses unlike a photograph — do not expect the same percentage on both.",
    ],
  },
  "laczenie-pdf": {
    title: "Lab note — merge PDF",
    paragraphs: [
      "File order is page order. Mixing A4 scans with a landscape A3 map will not auto-fit — I test this on contracts plus map annexes.",
      "Passwords and print restrictions on a source PDF can block the merge. The tool errors instead of silently dropping pages.",
    ],
  },
  "usun-exif": {
    title: "Lab note — strip EXIF",
    paragraphs: [
      "iPhone GPS in JPEG is the leak I write about in the privacy guide. After stripping I reopen the file in a metadata viewer and check GPS, camera model, and thumbnail.",
      "This does not anonymize faces. It removes metadata, not the picture.",
    ],
  },
  "usuwanie-tla": {
    title: "Lab note — background removal",
    paragraphs: [
      "This is not “Photoshop in one click”. Hair and glass leave a halo; a product on a white table works far better.",
      "The output is PNG with alpha. I do not index a dozen clones of this tool — there is one, with that caveat. For real retouching you will still open an editor.",
    ],
  },
}

const byLocale: Record<string, Record<string, LabNote>> = { pl, en }

export function getLabNote(locale: string, toolId: string): LabNote | null {
  const resolved = normalizeToSupported(locale) ?? fallbackLocale
  return byLocale[resolved]?.[toolId] ?? en[toolId] ?? null
}
