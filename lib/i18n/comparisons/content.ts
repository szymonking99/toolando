import type { ComparisonArticle } from "./types"
import type { ComparisonSlug } from "./slugs"
import { COMPARISON_SLUGS } from "./slugs"
import { resolveContentLocale } from "../content-locale"
import { localizedComparisonArticles } from "./localized-articles"
import { getComparisonsHubMeta } from "./hubs"

export { getComparisonsHubMeta }
export { COMPARISON_SLUGS, type ComparisonSlug } from "./slugs"
export type { ComparisonArticle, ComparisonsHubMeta } from "./types"

const comparisonsPl: Record<ComparisonSlug, ComparisonArticle> = {
  "mp3-vs-flac": {
    slug: "mp3-vs-flac",
    title: "MP3 vs FLAC — słuchanie czy archiwum?",
    description: "MP3 to małe pliki ze stratą, FLAC bezstratny i większy. Kiedy który?",
    formatA: "mp3",
    formatB: "flac",
    relatedTools: ["mp3-to-flac", "flac-to-mp3"],
    verdict:
      "Do słuchania w podróży i na telefonie: MP3. Do archiwizacji kolekcji i audiofilskiego odtwarzania: FLAC. Nigdy nie konwertuj FLAC → MP3 → FLAC — stracisz jakość na zawsze.",
    sections: [
      {
        title: "MP3",
        paragraphs: [
          "Stratna kompresja — pliki 5–10× mniejsze niż WAV/FLAC.",
          "Uniwersalna kompatybilność: każdy odtwarzacz, samochód, smartfon.",
          "Regulowany bitrate (128–320 kbps) — kompromis rozmiar/jakość.",
        ],
      },
      {
        title: "FLAC",
        paragraphs: [
          "Bezstratna kompresja — bit-perfect, mniejszy niż WAV.",
          "Idealny do archiwizacji muzyki bez utraty jakości.",
          "Słabsze wsparcie w starszych odtwarzaczach samochodowych.",
        ],
      },
    ],
  },
  "jpg-vs-webp": {
    slug: "jpg-vs-webp",
    title: "JPG vs WebP — co wybrać na stronę www?",
    description: "WebP jest mniejszy od JPG, ale czy warto rezygnować z JPG?",
    formatA: "jpg",
    formatB: "webp",
    relatedTools: ["jpg-to-webp", "webp-to-jpg"],
    verdict:
      "Do nowoczesnych stron www: WebP (z JPG jako fallback). Do maksymalnej kompatybilności i e-maila: JPG. Do logo z przezroczystością: PNG/WebP, nie JPG.",
    sections: [
      {
        title: "JPG",
        paragraphs: [
          "Dominujący format fotografii — działa wszędzie.",
          "Stratna kompresja DCT — małe pliki, brak przezroczystości.",
          "Obsługiwany przez każdą przeglądarkę i program.",
        ],
      },
      {
        title: "WebP",
        paragraphs: [
          "25–35% mniejszy niż JPG przy tej samej jakości.",
          "Obsługuje przezroczystość i animacje.",
          "Wspierany przez Chrome, Firefox, Edge, Safari 14+.",
        ],
      },
    ],
  },
  "pdf-vs-docx": {
    slug: "pdf-vs-docx",
    title: "PDF vs DOCX — edycja czy publikacja?",
    description: "PDF zamraża układ, DOCX służy do edycji. Kiedy który format?",
    formatA: "pdf",
    formatB: "docx",
    relatedTools: ["docx-to-pdf", "pdf-to-docx"],
    verdict:
      "Edycja tekstu → DOCX. Wysyłka do klienta/rekrutera → PDF. Archiwizacja i druk → PDF. Konwersja PDF → DOCX tylko gdy musisz edytować istniejący dokument.",
    sections: [
      {
        title: "PDF",
        paragraphs: [
          "Stały układ strony — identyczny wygląd na każdym urządzeniu.",
          "Standard faktur, umów, CV, e-booków.",
          "Trudniejsza edycja tekstu (wymaga specjalistycznych narzędzi).",
        ],
      },
      {
        title: "DOCX",
        paragraphs: [
          "Format Microsoft Word — pełna edycja tekstu i stylów.",
          "Layout może się różnić między wersjami Worda i LibreOffice.",
          "Nie nadaje się jako finalna wersja do druku bez konwersji na PDF.",
        ],
      },
    ],
  },
  "png-vs-jpg": {
    slug: "png-vs-jpg",
    title: "PNG vs JPG — zdjęcia czy grafiki?",
    description: "PNG bezstratny z przezroczystością, JPG mniejszy dla fotografii.",
    formatA: "png",
    formatB: "jpg",
    relatedTools: ["png-to-jpg", "jpg-to-png"],
    verdict:
      "Fotografie i galerie → JPG. Logo, ikony, zrzuty ekranu, grafiki z tekstem → PNG. Nigdy nie zapisuj zdjęć jako PNG — pliki będą ogromne.",
    sections: [
      {
        title: "PNG",
        paragraphs: [
          "Bezstratna kompresja — ostre krawędzie, kanał alpha (przezroczystość).",
          "Idealny do logo, ikon, UI, zrzutów ekranu.",
          "Duże pliki dla fotografii — nie używaj do zdjęć z aparatu.",
        ],
      },
      {
        title: "JPG",
        paragraphs: [
          "Stratna kompresja zoptymalizowana pod fotografie.",
          "Małe pliki, brak przezroczystości.",
          "Standard internetu od lat 90.",
        ],
      },
    ],
  },
  "mp4-vs-webm": {
    slug: "mp4-vs-webm",
    title: "MP4 vs WebM — uniwersalność czy web?",
    description: "MP4 dla smartfonów i platform, WebM dla osadzania w HTML5.",
    formatA: "mp4",
    formatB: "webm",
    relatedTools: ["mp4-to-webm", "webm-to-mp4"],
    verdict:
      "YouTube, Instagram, smartfony, telewizory → MP4. Osadzone wideo na stronie www (HTML5) → WebM. Do maksymalnej kompatybilności zawsze trzymaj kopię MP4.",
    sections: [
      {
        title: "MP4",
        paragraphs: [
          "Kontener H.264/AAC — standard smartfonów, YouTube, TikTok.",
          "Najszersza kompatybilność ze sprzętem i platformami.",
          "Większe pliki niż WebM przy tej samej jakości.",
        ],
      },
      {
        title: "WebM",
        paragraphs: [
          "Otwarty format Google — VP9/AV1 + Opus.",
          "Mniejsze pliki, natywnie w Chrome, Firefox, Edge.",
          "Słabsze wsparcie w natywnych aplikacjach mobilnych.",
        ],
      },
    ],
  },
  "heic-vs-jpg": {
    slug: "heic-vs-jpg",
    title: "HEIC vs JPG — iPhone a reszta świata",
    description: "HEIC oszczędza miejsce na iPhone, JPG działa wszędzie.",
    formatA: "heic",
    formatB: "jpg",
    relatedTools: ["heic-to-jpg"],
    verdict:
      "Na iPhone: HEIC OK. Do wysyłki innym, Windows bez rozszerzenia, druku i stron www: konwertuj na JPG. W ustawieniach iPhone możesz włączyć „Najbardziej kompatybilne”.",
    sections: [
      {
        title: "HEIC",
        paragraphs: [
          "Domyślny format zdjęć Apple — mniejszy niż JPG przy tej samej jakości.",
          "Wsparcie: iOS, macOS, Windows 10+ z rozszerzeniem, Android 10+.",
          "Problemy ze starszymi programami i serwisami online.",
        ],
      },
      {
        title: "JPG",
        paragraphs: [
          "Uniwersalny format zdjęć — działa na każdym urządzeniu.",
          "Stratna kompresja — większy niż HEIC przy tej samej jakości.",
          "Standard e-maila, druku i stron internetowych.",
        ],
      },
    ],
  },
}

function translateComparison(
  base: ComparisonArticle,
  title: string,
  description: string,
  verdict: string,
): ComparisonArticle {
  return { ...base, title, description, verdict }
}

const comparisonsEn: Record<ComparisonSlug, ComparisonArticle> = {
  "mp3-vs-flac": {
    ...comparisonsPl["mp3-vs-flac"],
    title: "MP3 vs FLAC — listening or archiving?",
    description: "MP3 is small with loss, FLAC is lossless and larger. When to pick which?",
    verdict:
      "For travel and phone listening: MP3. For music archiving and audiophile playback: FLAC. Never convert FLAC → MP3 → FLAC — quality is lost forever.",
    sections: [
      {
        title: "MP3",
        paragraphs: [
          "Lossy compression — files 5–10× smaller than WAV/FLAC.",
          "Universal compatibility: every player, car stereo, smartphone.",
          "Adjustable bitrate (128–320 kbps) — size/quality tradeoff.",
        ],
      },
      {
        title: "FLAC",
        paragraphs: [
          "Lossless compression — bit-perfect, smaller than WAV.",
          "Ideal for archiving music without quality loss.",
          "Weaker support in older car players.",
        ],
      },
    ],
  },
  "jpg-vs-webp": {
    ...comparisonsPl["jpg-vs-webp"],
    title: "JPG vs WebP — which for websites?",
    description: "WebP is smaller than JPG — but should you drop JPG?",
    verdict:
      "For modern websites: WebP (with JPG fallback). For max compatibility and email: JPG. For logos with transparency: PNG/WebP, not JPG.",
    sections: [
      {
        title: "JPG",
        paragraphs: [
          "Dominant photo format — works everywhere.",
          "Lossy DCT compression — small files, no transparency.",
          "Supported by every browser and app.",
        ],
      },
      {
        title: "WebP",
        paragraphs: [
          "25–35% smaller than JPG at the same quality.",
          "Supports transparency and animation.",
          "Supported by Chrome, Firefox, Edge, Safari 14+.",
        ],
      },
    ],
  },
  "pdf-vs-docx": {
    ...comparisonsPl["pdf-vs-docx"],
    title: "PDF vs DOCX — editing or publishing?",
    description: "PDF locks layout, DOCX is for editing. When to use which?",
    verdict:
      "Editing text → DOCX. Sending to client/recruiter → PDF. Archiving and print → PDF. PDF → DOCX only when you must edit an existing document.",
    sections: [
      {
        title: "PDF",
        paragraphs: [
          "Fixed page layout — identical appearance on every device.",
          "Standard for invoices, contracts, CVs, e-books.",
          "Harder to edit text (requires specialized tools).",
        ],
      },
      {
        title: "DOCX",
        paragraphs: [
          "Microsoft Word format — full text and style editing.",
          "Layout may differ between Word and LibreOffice versions.",
          "Not suitable as a final print version without converting to PDF.",
        ],
      },
    ],
  },
  "png-vs-jpg": {
    ...comparisonsPl["png-vs-jpg"],
    title: "PNG vs JPG — photos or graphics?",
    description: "PNG is lossless with transparency, JPG is smaller for photos.",
    verdict:
      "Photos and galleries → JPG. Logos, icons, screenshots, text graphics → PNG. Never save photos as PNG — files will be huge.",
    sections: [
      {
        title: "PNG",
        paragraphs: [
          "Lossless compression — sharp edges, alpha channel (transparency).",
          "Ideal for logos, icons, UI, screenshots.",
          "Large files for photos — don't use for camera shots.",
        ],
      },
      {
        title: "JPG",
        paragraphs: [
          "Lossy compression optimized for photographs.",
          "Small files, no transparency.",
          "Web standard since the 1990s.",
        ],
      },
    ],
  },
  "mp4-vs-webm": {
    ...comparisonsPl["mp4-vs-webm"],
    title: "MP4 vs WebM — universal or web?",
    description: "MP4 for phones and platforms, WebM for HTML5 embedding.",
    verdict:
      "YouTube, Instagram, phones, TVs → MP4. Embedded web video (HTML5) → WebM. For max compatibility always keep an MP4 copy.",
    sections: [
      {
        title: "MP4",
        paragraphs: [
          "H.264/AAC container — standard for phones, YouTube, TikTok.",
          "Widest hardware and platform compatibility.",
          "Larger files than WebM at the same quality.",
        ],
      },
      {
        title: "WebM",
        paragraphs: [
          "Google's open format — VP9/AV1 + Opus.",
          "Smaller files, native in Chrome, Firefox, Edge.",
          "Weaker support in native mobile apps.",
        ],
      },
    ],
  },
  "heic-vs-jpg": {
    ...comparisonsPl["heic-vs-jpg"],
    title: "HEIC vs JPG — iPhone vs the rest of the world",
    description: "HEIC saves space on iPhone, JPG works everywhere.",
    verdict:
      "On iPhone: HEIC is fine. For sharing, Windows without extension, print, and websites: convert to JPG. In iPhone Settings you can enable \"Most Compatible\".",
    sections: [
      {
        title: "HEIC",
        paragraphs: [
          "Apple's default photo format — smaller than JPG at the same quality.",
          "Support: iOS, macOS, Windows 10+ with extension, Android 10+.",
          "Issues with older apps and online services.",
        ],
      },
      {
        title: "JPG",
        paragraphs: [
          "Universal photo format — works on every device.",
          "Lossy compression — larger than HEIC at the same quality.",
          "Standard for email, print, and websites.",
        ],
      },
    ],
  },
}

const byLocale: Record<string, Record<ComparisonSlug, ComparisonArticle>> = {
  pl: comparisonsPl,
  en: comparisonsEn,
  de: {
    "mp3-vs-flac": translateComparison(
      comparisonsEn["mp3-vs-flac"],
      "MP3 vs FLAC — Hören oder Archivieren?",
      "MP3 ist klein mit Verlust, FLAC verlustfrei.",
      comparisonsEn["mp3-vs-flac"].verdict,
    ),
    "jpg-vs-webp": translateComparison(
      comparisonsEn["jpg-vs-webp"],
      "JPG vs WebP — was für Websites?",
      "WebP ist kleiner als JPG.",
      comparisonsEn["jpg-vs-webp"].verdict,
    ),
    "pdf-vs-docx": translateComparison(
      comparisonsEn["pdf-vs-docx"],
      "PDF vs DOCX — Bearbeiten oder Veröffentlichen?",
      "PDF fixiert Layout, DOCX zum Bearbeiten.",
      comparisonsEn["pdf-vs-docx"].verdict,
    ),
    "png-vs-jpg": translateComparison(
      comparisonsEn["png-vs-jpg"],
      "PNG vs JPG — Fotos oder Grafiken?",
      "PNG verlustfrei, JPG kleiner für Fotos.",
      comparisonsEn["png-vs-jpg"].verdict,
    ),
    "mp4-vs-webm": translateComparison(
      comparisonsEn["mp4-vs-webm"],
      "MP4 vs WebM — universal oder Web?",
      "MP4 für Geräte, WebM für HTML5.",
      comparisonsEn["mp4-vs-webm"].verdict,
    ),
    "heic-vs-jpg": translateComparison(
      comparisonsEn["heic-vs-jpg"],
      "HEIC vs JPG — iPhone und die Welt",
      "HEIC spart Platz, JPG funktioniert überall.",
      comparisonsEn["heic-vs-jpg"].verdict,
    ),
  },
  es: {
    "mp3-vs-flac": translateComparison(
      comparisonsEn["mp3-vs-flac"],
      "MP3 vs FLAC — ¿escuchar o archivar?",
      "MP3 pequeño con pérdida, FLAC sin pérdida.",
      comparisonsEn["mp3-vs-flac"].verdict,
    ),
    "jpg-vs-webp": translateComparison(
      comparisonsEn["jpg-vs-webp"],
      "JPG vs WebP — ¿cuál para sitios web?",
      "WebP es más pequeño que JPG.",
      comparisonsEn["jpg-vs-webp"].verdict,
    ),
    "pdf-vs-docx": translateComparison(
      comparisonsEn["pdf-vs-docx"],
      "PDF vs DOCX — ¿editar o publicar?",
      "PDF fija diseño, DOCX para editar.",
      comparisonsEn["pdf-vs-docx"].verdict,
    ),
    "png-vs-jpg": translateComparison(
      comparisonsEn["png-vs-jpg"],
      "PNG vs JPG — ¿fotos o gráficos?",
      "PNG sin pérdida, JPG más pequeño.",
      comparisonsEn["png-vs-jpg"].verdict,
    ),
    "mp4-vs-webm": translateComparison(
      comparisonsEn["mp4-vs-webm"],
      "MP4 vs WebM — ¿universal o web?",
      "MP4 para dispositivos, WebM para HTML5.",
      comparisonsEn["mp4-vs-webm"].verdict,
    ),
    "heic-vs-jpg": translateComparison(
      comparisonsEn["heic-vs-jpg"],
      "HEIC vs JPG — iPhone y el resto",
      "HEIC ahorra espacio, JPG funciona en todas partes.",
      comparisonsEn["heic-vs-jpg"].verdict,
    ),
  },
  uk: {
    "mp3-vs-flac": translateComparison(
      comparisonsEn["mp3-vs-flac"],
      "MP3 vs FLAC — слухати чи архівувати?",
      "MP3 малий з втратами, FLAC без втрат.",
      comparisonsEn["mp3-vs-flac"].verdict,
    ),
    "jpg-vs-webp": translateComparison(
      comparisonsEn["jpg-vs-webp"],
      "JPG vs WebP — що для сайтів?",
      "WebP менший за JPG.",
      comparisonsEn["jpg-vs-webp"].verdict,
    ),
    "pdf-vs-docx": translateComparison(
      comparisonsEn["pdf-vs-docx"],
      "PDF vs DOCX — редагувати чи публікувати?",
      "PDF фіксує макет, DOCX для редагування.",
      comparisonsEn["pdf-vs-docx"].verdict,
    ),
    "png-vs-jpg": translateComparison(
      comparisonsEn["png-vs-jpg"],
      "PNG vs JPG — фото чи графіка?",
      "PNG без втрат, JPG менший для фото.",
      comparisonsEn["png-vs-jpg"].verdict,
    ),
    "mp4-vs-webm": translateComparison(
      comparisonsEn["mp4-vs-webm"],
      "MP4 vs WebM — універсальний чи веб?",
      "MP4 для пристроїв, WebM для HTML5.",
      comparisonsEn["mp4-vs-webm"].verdict,
    ),
    "heic-vs-jpg": translateComparison(
      comparisonsEn["heic-vs-jpg"],
      "HEIC vs JPG — iPhone і решта світу",
      "HEIC економить місце, JPG працює всюди.",
      comparisonsEn["heic-vs-jpg"].verdict,
    ),
  },
  ...localizedComparisonArticles,
}

export function getComparison(
  locale: string,
  slug: string,
): ComparisonArticle | undefined {
  const loc = resolveContentLocale(locale)
  const items = byLocale[loc] ?? byLocale.en
  return items[slug as ComparisonSlug]
}

export function getAllComparisons(locale: string): ComparisonArticle[] {
  const loc = resolveContentLocale(locale)
  const items = byLocale[loc] ?? byLocale.en
  return COMPARISON_SLUGS.map((slug) => items[slug]).filter(Boolean)
}
