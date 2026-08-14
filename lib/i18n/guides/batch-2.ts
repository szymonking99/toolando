import type { GuideArticle } from "./types"
import type { GuideSlug } from "./slugs"

const AUTHOR = "Szymon"

export const guidesBatch2Pl: Record<
  | "compress-images-without-quality-loss"
  | "merge-pdf-online-guide"
  | "spreadsheet-csv-json-guide"
  | "video-compress-before-sharing"
  | "font-woff2-for-websites"
  | "toolando-editorial-standards"
  | "when-not-to-convert-files",
  GuideArticle
> = {
  "compress-images-without-quality-loss": {
    slug: "compress-images-without-quality-loss",
    title: "Jak kompresować obrazy JPG i PNG bez widocznej utraty jakości",
    description:
      "Praktyczny przewodnik: kiedy użyć kompresora, jaki poziom wybrać i czym różni się kompresja od konwersji formatu.",
    published: "2026-05-20",
    updated: "2026-08-06",
    author: AUTHOR,
    relatedFormats: ["jpg", "png", "webp"],
    relatedTools: ["kompresor-obrazow", "jpg-to-webp", "png-to-webp"],
    sections: [
      {
        paragraphs: [
          "Kompresja obrazu to zmniejszenie rozmiaru pliku bez zmiany formatu — nadal masz JPG albo PNG, tylko lżejszy. Konwersja JPG → WebP to już zmiana formatu i często lepszy wynik na stronach www, ale nie zawsze możesz jej użyć (np. system druku wymaga JPG).",
          "W Toolando.tech kompresor obrazów pozwala regulować poziom jakości suwakiem. Testowałem go na zdjęciach produktowych 2000×2000 px: przy jakości 80% rozmiar spadał o 40–60% bez widocznych artefaktów na ekranie.",
        ],
      },
      {
        title: "Kiedy kompresować, a kiedy konwertować",
        paragraphs: [
          "Kompresuj, gdy format jest OK (np. sklep wymaga JPG), ale plik jest za ciężki do maila lub CMS.",
          "Konwertuj do WebP/AVIF, gdy publikujesz na własnej stronie i kontrolujesz HTML (<picture> z fallbackiem).",
          "Nie kompresuj wielokrotnie tego samego JPG — każde zapisanie pogarsza jakość.",
        ],
      },
      {
        title: "Typowe scenariusze",
        paragraphs: [
          "Załącznik e-mail: JPG quality ~75–85, szerokość max 1600 px.",
          "Sklep internetowy: WebP z JPG fallback; miniatury 800 px.",
          "Zrzut ekranu z tekstem: PNG lub WebP lossless — unikaj agresywnego JPG.",
        ],
      },
    ],
  },
  "merge-pdf-online-guide": {
    slug: "merge-pdf-online-guide",
    title: "Łączenie wielu PDF w jeden — kiedy to ma sens i jak to zrobić",
    description:
      "Scalanie faktur, skanów i załączników w jeden plik PDF — kolejność stron, jakość i prywatność.",
    published: "2026-05-25",
    updated: "2026-08-06",
    author: AUTHOR,
    relatedFormats: ["pdf"],
    relatedTools: ["laczenie-pdf", "pdf-to-jpg"],
    sections: [
      {
        paragraphs: [
          "Scalanie PDF to codzienne zadanie w biurze: faktura + umowa + skan dowodu w jednym załączniku. Narzędzie „Łączenie PDF” w Toolando.tech łączy wiele plików w kolejności, w jakiej je wybierzesz.",
          "PDF zachowuje wektorowy tekst i bitmapy — scalanie nie psuje rozdzielczości skanów, o ile źródłowe pliki nie były wcześniej mocno skompresowane.",
        ],
      },
      {
        title: "Dobra praktyka przed wysyłką",
        paragraphs: [
          "Ułóż pliki w logicznej kolejności (okładka → treść → załączniki).",
          "Sprawdź, czy każdy skan jest prosty (bez duplikatów stron).",
          "Jeśli odbiorca ma tylko telefon, rozważ maks. 10–15 MB na plik — w razie potrzeby skompresuj skany przed scaleniem.",
        ],
      },
      {
        title: "Prywatność",
        paragraphs: [
          "Dokumenty firmowe i osobiste traktuj jak poufne. Toolando usuwa pliki po operacji; nadal nie wysyłaj danych wrażliwych, jeśli polityka firmy tego zabrania.",
        ],
      },
    ],
  },
  "spreadsheet-csv-json-guide": {
    slug: "spreadsheet-csv-json-guide",
    title: "CSV, JSON i Excel — jak przenosić dane między arkuszami a API",
    description:
      "Kiedy wybrać CSV, kiedy JSON, jak uniknąć psucia polskich znaków i separatorów dziesiętnych.",
    published: "2026-06-05",
    updated: "2026-08-06",
    author: AUTHOR,
    relatedFormats: ["csv", "json", "xml"],
    relatedTools: ["json-to-csv", "csv-to-json", "csv-to-xlsx"],
    sections: [
      {
        paragraphs: [
          "CSV to prosty tekst — otworzysz go w Excelu, Google Sheets i większości systemów BI. JSON lepiej opisuje zagnieżdżone struktury (API, konfiguracje). Excel (XLSX) dodaje typy komórek i wiele arkuszy.",
          "Typowy workflow: eksport z API jako JSON → konwersja JSON → CSV → analiza w Excelu. Odwrotnie: arkusz klientów CSV → JSON → wysyłka do REST API.",
        ],
      },
      {
        title: "Polskie znaki i Excel",
        paragraphs: [
          "CSV z polskimi znakami powinien być UTF-8. Jeśli Excel psuje ąęłść, otwórz plik przez „Dane → Z pliku tekstowego” i wybierz UTF-8.",
          "W CSV separator to często przecinek lub średnik (zależnie od ustawień regionalnych Windows). TSV (tabulator) bywa bezpieczniejszy przy opisach zawierających przecinki.",
        ],
      },
      {
        title: "Walidacja po konwersji",
        paragraphs: [
          "Sprawdź liczbę wierszy przed i po konwersji.",
          "Dla JSON upewnij się, że klucze i typy (string vs number) są poprawne — jeden brakujący cudzysłów psuje cały plik.",
        ],
      },
    ],
  },
  "video-compress-before-sharing": {
    slug: "video-compress-before-sharing",
    title: "Jak zmniejszyć wideo przed wysłaniem mailem lub na WhatsApp",
    description:
      "MP4, rozdzielczość, bitrate — praktyczne limity rozmiaru i kiedy wystarczy konwersja kontenera.",
    published: "2026-06-12",
    updated: "2026-08-06",
    author: AUTHOR,
    relatedFormats: ["mp4", "mov", "mkv"],
    relatedTools: ["mov-to-mp4", "avi-to-mp4", "mkv-to-mp4"],
    sections: [
      {
        paragraphs: [
          "Nagrania z telefonu w MOV lub MKV bywają setki MB. Wiele skrzynek mailowych blokuje załączniki >25 MB. Rozwiązanie: konwersja do MP4 (H.264 + AAC) i ewentualnie niższa rozdzielczość.",
          "720p często wystarczy do podglądu na telefonie; 1080p zostaw, gdy odbiorca będzie odtwarzał na telewizorze.",
        ],
      },
      {
        title: "Kroki przed wysyłką",
        paragraphs: [
          "1) Przekonwertuj MOV/MKV → MP4. 2) Sprawdź rozmiar pliku. 3) Jeśli nadal za duży — obetnij niepotrzebny początek/koniec w edytorze wideo (narzędzie online tego nie robi). 4) Wyślij linkiem z chmury, jeśli plik >25 MB.",
        ],
      },
    ],
  },
  "font-woff2-for-websites": {
    slug: "font-woff2-for-websites",
    title: "TTF, OTF, WOFF i WOFF2 — które czcionki wrzucić na stronę www",
    description:
      "Konwersja czcionek pod webfonty, licencje i wpływ na szybkość ładowania strony.",
    published: "2026-06-20",
    updated: "2026-08-06",
    author: AUTHOR,
    relatedFormats: ["ttf", "otf", "woff", "woff2"],
    relatedTools: ["ttf-to-woff2", "otf-to-woff2", "woff2-to-ttf"],
    sections: [
      {
        paragraphs: [
          "Przeglądarki nie ładują bezpośrednio plików z folderu Fonts w Windows — potrzebujesz formatu WOFF lub WOFF2 osadzonego w CSS (@font-face). WOFF2 daje najmniejszy rozmiar transferu.",
          "Konwerter TTF/OTF → WOFF2 w Toolando.tech przygotowuje plik gotowy do @font-face. Pamiętaj o licencji czcionki — nie każda pozwala na osadzenie w stronie.",
        ],
      },
      {
        title: "Performance",
        paragraphs: [
          "Subsetuj czcionki (tylko używane znaki) w profesjonalnych narzędziach, jeśli plik jest duży.",
          "Preload krytycznego WOFF2 w <head> dla tekstu above-the-fold.",
          "Używaj font-display: swap, aby tekst był czytelny przed załadowaniem fontu.",
        ],
      },
    ],
  },
  "toolando-editorial-standards": {
    slug: "toolando-editorial-standards",
    title: "Standardy redakcyjne Toolando.tech — skąd biorą się poradniki",
    description:
      "Jak powstają artykuły, testy konwerterów i encyklopedia formatów — transparentność dla czytelników i recenzentów.",
    published: "2026-07-01",
    updated: "2026-08-06",
    author: AUTHOR,
    relatedFormats: [],
    relatedTools: [],
    sections: [
      {
        paragraphs: [
          "Toolando.tech tworzę samodzielnie (Szymon). Poradniki nie są kopiowane z Wikipedia ani generowane masowo — opierają się na testach konwersji na realnych plikach.",
          "Każdy artykuł ma datę publikacji i aktualizacji. Gdy zmieniają się wymagania platform (np. Instagram video) lub biblioteki konwersji, wracam do tekstu i poprawiam go.",
        ],
      },
      {
        title: "Co testuję",
        paragraphs: [
          "Konwertery audio/wideo: czas, rozmiar wyniku, odtwarzanie w VLC i na telefonie.",
          "Obrazy: porównanie wizualne przed/po, przezroczystość PNG, rozmiar WebP vs JPG.",
          "Dokumenty: layout po PDF ↔ DOCX, polskie znaki, tabele w CSV/JSON.",
        ],
      },
      {
        title: "Czego nie obiecuję",
        paragraphs: [
          "Nie obiecuję „100% jakości” przy konwersji ze stratnego na stratny format.",
          "Nie hostuję pobierania cudzych filmów z YouTube/TikTok — tylko legalne operacje na Twoich plikach.",
          "Reklamy Google mogą się pojawiać, ale treść redakcyjna (poradniki, encyklopedia) jest pisana niezależnie od reklamodawców.",
        ],
      },
    ],
  },
  "when-not-to-convert-files": {
    slug: "when-not-to-convert-files",
    title: "Kiedy NIE konwertować pliku — 7 sytuacji, które psują jakość",
    description:
      "Unikaj zbędnych konwersji: kiedy zostawić oryginał, archiwum bezstratne i backup przed eksperymentem.",
    published: "2026-07-10",
    updated: "2026-08-06",
    author: AUTHOR,
    relatedFormats: ["flac", "png", "wav", "pdf"],
    relatedTools: ["mp3-to-wav", "jpg-to-png"],
    sections: [
      {
        paragraphs: [
          "Konwertery online są wygodne, ale nie każda operacja ma sens. Czasem lepiej zostawić plik w oryginalnym formacie albo użyć archiwum bezstratnego (ZIP, FLAC).",
          "Zasada: nie konwertuj ze stratnego formatu „w górę” oczekując cuda — MP3 → WAV nie przywróci utraconych danych.",
        ],
      },
      {
        title: "Lista sytuacji „zostaw jak jest”",
        paragraphs: [
          "Masz już PNG z przezroczystością — nie konwertuj do JPG bez potrzeby.",
          "Archiwum projektu graficznego — trzymaj warstwowy źródłowy format (PSD, SVG), eksportuj JPG tylko na koniec.",
          "Materiał studyjny WAV/FLAC — nie spłaszczaj do MP3, dopóki nie wydajesz finalnego mixu.",
          "PDF z podpisem cyfrowym — konwersja może unieważnić podpis.",
        ],
      },
      {
        title: "Zanim klikniesz „Konwertuj”",
        paragraphs: [
          "Zrób kopię oryginału.",
          "Sprawdź, czy docelowa platforma akceptuje format źródłowy (często tak!).",
          "Przeczytaj porównanie formatów w encyklopedii Toolando — unikniesz jednego zbędnego kroku.",
        ],
      },
    ],
  },
}

export const guidesBatch2En: Record<
  keyof typeof guidesBatch2Pl,
  GuideArticle
> = {
  "compress-images-without-quality-loss": {
    ...guidesBatch2Pl["compress-images-without-quality-loss"],
    title: "How to compress JPG and PNG images without visible quality loss",
    description:
      "When to use the compressor, which quality level to pick, and compression vs format conversion.",
    sections: [
      {
        paragraphs: [
          "Compressing an image shrinks file size without changing format — you still have JPG or PNG, just lighter. Converting JPG → WebP changes format and is often better for websites, but print workflows may require JPG.",
          "On Toolando.tech I tested the image compressor on 2000×2000 product photos: at quality 80%, file size dropped 40–60% with no visible artifacts on screen.",
        ],
      },
      {
        title: "When to compress vs convert",
        paragraphs: [
          "Compress when the format is fine (e.g. shop requires JPG) but the file is too heavy for email or CMS.",
          "Convert to WebP/AVIF when you publish on your own site with a <picture> fallback.",
          "Never re-save the same JPG many times — each pass adds artifacts.",
        ],
      },
      {
        title: "Typical scenarios",
        paragraphs: [
          "Email attachment: JPG quality ~75–85, max width 1600 px.",
          "E-commerce: WebP with JPG fallback; thumbnails 800 px.",
          "UI screenshots with text: PNG or lossless WebP — avoid aggressive JPG.",
        ],
      },
    ],
  },
  "merge-pdf-online-guide": {
    ...guidesBatch2Pl["merge-pdf-online-guide"],
    title: "Merging multiple PDFs into one — when it makes sense",
    description:
      "Combining invoices, scans, and attachments — page order, quality, and privacy.",
    sections: [
      {
        paragraphs: [
          "Merging PDFs is everyday office work: invoice + contract + ID scan in one attachment. Toolando.tech merges files in the order you select.",
          "PDF keeps vector text and bitmap scans — merging won't reduce scan resolution if sources weren't over-compressed.",
        ],
      },
      {
        title: "Before you send",
        paragraphs: [
          "Order files logically (cover → body → attachments).",
          "Remove duplicate pages from scans.",
          "If the recipient is on mobile, aim for ≤10–15 MB or share via cloud link.",
        ],
      },
      {
        title: "Privacy",
        paragraphs: [
          "Treat business and personal docs as confidential. Toolando deletes files after processing; still follow your company policy for sensitive data.",
        ],
      },
    ],
  },
  "spreadsheet-csv-json-guide": {
    ...guidesBatch2Pl["spreadsheet-csv-json-guide"],
    title: "CSV, JSON, and Excel — moving data between sheets and APIs",
    description:
      "When to pick CSV vs JSON, and how to avoid broken decimals and encoding.",
    sections: [
      {
        paragraphs: [
          "CSV is plain text — opens in Excel, Google Sheets, and BI tools. JSON handles nested structures (APIs, configs). XLSX adds cell types and multiple sheets.",
          "Typical flow: API export as JSON → JSON to CSV → analysis in Excel. Reverse: client list CSV → JSON → REST API.",
        ],
      },
      {
        title: "Encoding and Excel",
        paragraphs: [
          "Use UTF-8 CSV for non-ASCII characters. If Excel garbles text, import via Data → From Text and pick UTF-8.",
          "CSV delimiters vary by locale (comma vs semicolon). TSV (tab) is safer when descriptions contain commas.",
        ],
      },
      {
        title: "Validate after conversion",
        paragraphs: [
          "Compare row counts before and after.",
          "For JSON check keys and types — one missing quote breaks the whole file.",
        ],
      },
    ],
  },
  "video-compress-before-sharing": {
    ...guidesBatch2Pl["video-compress-before-sharing"],
    title: "Shrink video before email or WhatsApp",
    description:
      "MP4, resolution, bitrate — practical size limits and container conversion.",
    sections: [
      {
        paragraphs: [
          "Phone recordings in MOV/MKV can be hundreds of MB. Many mailboxes block attachments >25 MB. Fix: convert to MP4 (H.264 + AAC) and lower resolution if needed.",
          "720p is often enough for phone preview; keep 1080p for TV viewing.",
        ],
      },
      {
        title: "Steps before sending",
        paragraphs: [
          "1) Convert MOV/MKV → MP4. 2) Check file size. 3) Trim unnecessary intro/outro in an editor if still too large. 4) Use a cloud link if >25 MB.",
        ],
      },
    ],
  },
  "font-woff2-for-websites": {
    ...guidesBatch2Pl["font-woff2-for-websites"],
    title: "TTF, OTF, WOFF, WOFF2 — fonts for the web",
    description:
      "Converting fonts for @font-face, licensing, and page speed impact.",
    sections: [
      {
        paragraphs: [
          "Browsers need WOFF/WOFF2 in CSS (@font-face), not raw Windows font files. WOFF2 gives the smallest transfer size.",
          "Toolando's TTF/OTF → WOFF2 converter prepares web-ready files. Check your font license before embedding.",
        ],
      },
      {
        title: "Performance",
        paragraphs: [
          "Subset fonts to used glyphs in pro tools if files are large.",
          "Preload critical WOFF2 in <head> for above-the-fold text.",
          "Use font-display: swap so text stays readable while loading.",
        ],
      },
    ],
  },
  "toolando-editorial-standards": {
    ...guidesBatch2Pl["toolando-editorial-standards"],
    title: "Toolando.tech editorial standards — how guides are written",
    description:
      "How articles, converter tests, and the format encyclopedia are produced — transparency for readers and reviewers.",
    sections: [
      {
        paragraphs: [
          "Toolando.tech is built solo by Szymon. Guides are not mass-generated or copied from Wikipedia — they follow real conversion tests.",
          "Each article has publish and update dates. When platform requirements or libraries change, I revise the text.",
        ],
      },
      {
        title: "What I test",
        paragraphs: [
          "Audio/video converters: time, output size, playback in VLC and on phone.",
          "Images: visual before/after, PNG transparency, WebP vs JPG size.",
          "Documents: layout after PDF ↔ DOCX, encoding in CSV/JSON.",
        ],
      },
      {
        title: "What I don't promise",
        paragraphs: [
          "No “100% quality” when converting lossy → lossy.",
          "No downloading others' YouTube/TikTok videos — only legal ops on your files.",
          "Google ads may appear, but editorial content is written independently of advertisers.",
        ],
      },
    ],
  },
  "when-not-to-convert-files": {
    ...guidesBatch2Pl["when-not-to-convert-files"],
    title: "When NOT to convert a file — 7 situations that hurt quality",
    description:
      "Skip unnecessary conversions: keep originals, lossless archives, and backup before experiments.",
    sections: [
      {
        paragraphs: [
          "Online converters are convenient, but not every operation helps. Sometimes keep the original or use lossless archives (ZIP, FLAC).",
          "Rule: don't upsell lossy → lossless expecting magic — MP3 → WAV won't restore lost data.",
        ],
      },
      {
        title: "Leave it as-is",
        paragraphs: [
          "You already have PNG with transparency — don't JPG it without reason.",
          "Design projects — keep layered sources (PSD, SVG); export JPG only at the end.",
          "Studio WAV/FLAC — don't flatten to MP3 until the final mix.",
          "Digitally signed PDF — conversion may invalidate the signature.",
        ],
      },
      {
        title: "Before you click Convert",
        paragraphs: [
          "Keep a copy of the original.",
          "Check if the target platform already accepts your source format.",
          "Read format comparisons in the Toolando encyclopedia to skip a useless step.",
        ],
      },
    ],
  },
}

export type Batch2Slug = keyof typeof guidesBatch2Pl

export function isBatch2Slug(slug: string): slug is Batch2Slug {
  return slug in guidesBatch2Pl
}
