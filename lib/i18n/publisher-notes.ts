import { fallbackLocale, normalizeToSupported } from "./config"

export type PublisherNotes = {
  title: string
  lead: string
  sections: { title: string; paragraphs: string[] }[]
}

const notesPl: PublisherNotes = {
  title: "Jak testuję konwersje — i czego tu nie znajdziesz",
  lead:
    "Toolando.tech nie jest katalogiem tysięcy identycznych stron „X na Y”. Piszę poradniki i profile formatów na podstawie plików, które sam wrzucam do konwerterów. Poniżej jest to, czego recenzent ani użytkownik nie zobaczy w szablonie SEO.",
  sections: [
    {
      title: "Co sprawdzam, zanim opiszę konwersję",
      paragraphs: [
        "Dla audio porównuję czas trwania, bitrate i to, czy wynik otwiera się w VLC oraz w odtwarzaczu Windows. Konwersja MP3 → WAV nigdy nie „naprawia” wcześniejszej kompresji stratnej — jeśli poradnik tego nie mówi wprost, jest niewiarygodny.",
        "Dla obrazów sprawdzam przezroczystość PNG, artefakty JPG przy agresywnej kompresji i to, czy WebP/AVIF w ogóle otworzy się w danej przeglądarce. HEIC z iPhone’a testuję na Windows — to najczęstszy powód, dla którego ktoś w ogóle szuka konwertera.",
        "Dla PDF renderuję strony do JPG/PNG i porównuję czytelność drobnego tekstu. DOCX → PDF odsyłam na silnik LibreOffice na moim serwerze, bo czysty JavaScript psuje nagłówki i tabele.",
      ],
    },
    {
      title: "Czego świadomie nie robię",
      paragraphs: [
        "Nie pobieram filmów ani muzyki z YouTube, TikToka ani Spotify. Jeśli potrzebujesz ścieżki z własnego nagrania, wrzucasz plik MP4, który masz na dysku.",
        "Nie indeksuję setek par formatów różniących się tylko literkami w adresie. Wyszukiwarka i lista narzędzi nadal je otwierają — Google dostaje tylko te strony, przy których mam coś konkretnego do powiedzenia.",
        "Nie trzymam Twoich plików po konwersji i nie używam ich do trenowania modeli. Kalkulatory (VAT, NIP, hasła) liczą lokalnie w przeglądarce — te dane nie idą na serwer.",
      ],
    },
    {
      title: "Jak czytać ten serwis",
      paragraphs: [
        "Zacznij od poradnika albo profilu formatu, jeśli nie jesteś pewien, czy w ogóle konwertować. Często lepsza decyzja to zostawić oryginał.",
        "Konwerter jest narzędziem na końcu artykułu, nie odwrotnie. Reklamy — gdy się pojawią — nie zmieniają werdyktu w poradniku: czasem piszę, żebyś w ogóle nie wrzucał pliku do przeglądarki.",
      ],
    },
  ],
}

const notesEn: PublisherNotes = {
  title: "How I test conversions — and what you will not find here",
  lead:
    "Toolando.tech is not a directory of thousands of identical “X to Y” pages. I write guides and format profiles from files I actually run through the converters. This is the part a template cannot fake.",
  sections: [
    {
      title: "What I check before I describe a conversion",
      paragraphs: [
        "For audio I compare duration, bitrate, and whether the result opens in VLC and the Windows player. MP3 → WAV never “repairs” earlier lossy compression — if a guide does not say that, it is not trustworthy.",
        "For images I check PNG transparency, JPEG artifacts under heavy compression, and whether WebP/AVIF even opens in a given browser. I test iPhone HEIC on Windows — that is why most people need this converter.",
        "For PDF I render pages to JPG/PNG and check whether small type stays readable. DOCX → PDF goes through LibreOffice on my server, because a pure JavaScript pipeline wrecks headers and tables.",
      ],
    },
    {
      title: "What I refuse to ship",
      paragraphs: [
        "I do not download video or music from YouTube, TikTok, or Spotify. If you need audio from your own recording, you upload an MP4 you already have.",
        "I do not index hundreds of format pairs that only differ by letters in the URL. Search and the tools list still open them — Google only gets pages where I have something specific to say.",
        "I do not keep your files after conversion and I do not use them to train models. Calculators (VAT, ID numbers, passwords) run locally in the browser — that data never hits the server.",
      ],
    },
    {
      title: "How to read this site",
      paragraphs: [
        "Start with a guide or a format profile if you are unsure whether to convert at all. Leaving the original is often the better call.",
        "The converter sits at the end of the article, not the other way around. Ads — when they appear — do not change a verdict: sometimes I tell you not to upload the file to a browser at all.",
      ],
    },
  ],
}

const byLocale: Record<string, PublisherNotes> = {
  pl: notesPl,
  en: notesEn,
}

export function getSocialProofLine(locale: string): string {
  const resolved = normalizeToSupported(locale) ?? fallbackLocale
  if (resolved === "pl") {
    return "Poradniki z testów konwersji — nie farma stron X→Y"
  }
  return "Guides from real conversion tests — not an X→Y page farm"
}

export function getPublisherNotes(locale: string): PublisherNotes {
  const resolved = normalizeToSupported(locale) ?? fallbackLocale
  return byLocale[resolved] ?? notesEn
}
