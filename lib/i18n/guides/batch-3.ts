import type { GuideArticle } from "./types"

const AUTHOR = "Szymon Badyl"

export const guidesBatch3Pl: Record<
  | "png-vs-jpg-photos-and-graphics"
  | "flac-music-archive-guide"
  | "zip-7z-rar-when-to-use"
  | "svg-vs-png-logos-and-icons"
  | "podcast-export-mp3-aac-settings"
  | "gif-vs-mp4-for-animations"
  | "tiff-and-png-for-document-scans"
  | "markdown-to-pdf-workflow"
  | "extract-images-from-pdf-pages"
  | "convert-video-to-gif-properly",
  GuideArticle
> = {
  "png-vs-jpg-photos-and-graphics": {
    slug: "png-vs-jpg-photos-and-graphics",
    title: "PNG vs JPG — kiedy zdjęcie, a kiedy grafika z tekstem",
    description:
      "Praktyczny wybór między PNG a JPG: fotografie, zrzuty ekranu, logo z przezroczystością i druk.",
    published: "2026-07-15",
    updated: "2026-08-06",
    author: AUTHOR,
    relatedFormats: ["png", "jpg", "webp"],
    relatedTools: ["png-to-jpg", "jpg-to-png", "png-to-webp"],
    sections: [
      {
        paragraphs: [
          "PNG i JPG to dwa najczęściej mylone formaty. JPG świetnie kompresuje fotografie — gradienty nieba, skóra, krajobraz — ale psuje ostre krawędzie i tekst. PNG zachowuje każdy piksel dokładnie, w tym przezroczystość (kanał alpha), lecz pliki bywają 5–10× większe niż JPG tej samej rozdzielczości.",
          "Zasada, której używam w testach na Toolando.tech: zdjęcie do galerii lub social media → JPG (albo WebP z JPG fallback). Ikona, logo, schemat, zrzut ekranu z tekstem → PNG. Mieszanka zdjęcia i tekstu (np. okładka oferty) → często PNG lub WebP lossless.",
        ],
      },
      {
        title: "Kiedy wybrać JPG",
        paragraphs: [
          "Fotografie z aparatu lub telefonu bez warstwy przezroczystości.",
          "Miniatury produktów w sklepie, gdy tło jest jednolite i nie potrzebujesz alpha.",
          "Załączniki mailowe — JPG quality 80–85 zwykle daje rozsądny kompromis.",
          "Druk domowy zdjęć — wiele punktów akceptuje JPG w wysokiej rozdzielczości (300 DPI po przeliczeniu).",
        ],
      },
      {
        title: "Kiedy wybrać PNG",
        paragraphs: [
          "Logo na stronie z przezroczystym tłem — JPG zawsze wypełni tło białym lub czarnym.",
          "Zrzuty ekranu interfejsu, wykresów, kodu — tekst pozostaje ostry.",
          "Grafika płaską z kilkoma kolorami (infografiki, ikony aplikacji).",
          "Gdy planujesz dalszą edycję warstwową — PNG bezstratny nie dokłada artefaktów przy każdym zapisie (w odróżnieniu od wielokrotnego JPG).",
        ],
      },
      {
        title: "Typowe błędy",
        paragraphs: [
          "Zapis logo jako JPG — „schodki” wokół krawędzi i brak przezroczystości.",
          "Zapis zdjęcia 4000×3000 jako PNG „dla jakości” — niepotrzebnie 15 MB zamiast 2 MB JPG.",
          "Konwersja PNG → JPG → PNG w pętli — każdy cykl przez JPG traci jakość; trzymaj master w PNG.",
        ],
      },
    ],
  },
  "flac-music-archive-guide": {
    slug: "flac-music-archive-guide",
    title: "FLAC jako archiwum muzyki — kiedy warto, a kiedy MP3 wystarczy",
    description:
      "Bezstratny FLAC vs MP3 320 kbps: backup kolekcji, streaming w domu i odtwarzacze w samochodzie.",
    published: "2026-07-18",
    updated: "2026-08-06",
    author: AUTHOR,
    relatedFormats: ["flac", "mp3", "wav", "aac"],
    relatedTools: ["flac-to-mp3", "mp3-to-flac", "wav-to-flac"],
    sections: [
      {
        paragraphs: [
          "FLAC (Free Lossless Audio Codec) to kompresja bezstratna — jak ZIP dla dźwięku. Po rozpakowaniu (odtwarzaniu) masz ten sam sygnał co w źródle WAV, ale plik zajmuje około połowę miejsca. MP3 z kolei usuwa dane na stałe; nawet 320 kbps nie jest identyczne z oryginałem CD.",
          "W praktyce: jeśli kupujesz muzykę w jakości lossless albo ripujesz własne płyty, FLAC to sensowny format archiwum. Na telefonie w słuchawkach Bluetooth różnica FLAC vs MP3 256 kbps bywa niesłyszalna — wtedy konwersja do MP3 oszczędza gigabajty.",
        ],
      },
      {
        title: "Workflow archiwum",
        paragraphs: [
          "1) Master w FLAC (lub WAV) na dysku NAS / backupie chmurowym.",
          "2) Kopie robocze MP3/AAC na telefon i samochód.",
          "3) Nigdy nie konwertuj MP3 → FLAC „dla jakości” — to tylko powiększy plik bez odzyskania danych.",
          "Konwerter FLAC → MP3 w Toolando.tech testowałem na albumach 40–60 min: batch wychodzi przewidywalnie, metadata (tytuł, wykonawca) warto sprawdzić w odtwarzaczu po konwersji.",
        ],
      },
      {
        title: "Kompatybilność",
        paragraphs: [
          "FLAC: VLC, Foobar2000, większość odtwarzaczy na Androidzie; słabsze wsparcie w natywnym Apple Music (lepiej ALAC w ekosystemie Apple).",
          "Samochodowe radia często czytają tylko MP3/WMA/AAC z pendrive — tu FLAC → MP3 to konieczność.",
          "Streaming w domu (Plex, Jellyfin) obsługuje FLAC bez problemu.",
        ],
      },
    ],
  },
  "zip-7z-rar-when-to-use": {
    slug: "zip-7z-rar-when-to-use",
    title: "ZIP, 7z i RAR — które archiwum wybrać do wysyłki plików",
    description:
      "Rozmiar, kompatybilność i szyfrowanie — kiedy ZIP wystarczy, a kiedy 7z lub RAR ma sens.",
    published: "2026-07-20",
    updated: "2026-08-06",
    author: AUTHOR,
    relatedFormats: ["zip", "7z", "rar"],
    relatedTools: ["zip-to-7z", "7z-to-zip", "zip-to-rar", "rar-to-zip"],
    sections: [
      {
        paragraphs: [
          "Archiwum to jeden plik opakowujący wiele innych — wygodne do maila, chmury i backupu folderów. ZIP jest standardem uniwersalnym: otworzysz go na Windows, macOS i Linuxie bez dodatkowego softu. 7z daje zwykle mniejszy wynik przy tych samych danych, ale odbiorca może potrzebować 7-Zip. RAR bywa wymagany w starych workflow’ach, lecz tworzenie RAR online ma ograniczenia licencyjne — częściej konwertujesz RAR → ZIP niż odwrotnie.",
        ],
      },
      {
        title: "Kiedy ZIP",
        paragraphs: [
          "Wysyłka do klienta lub urzędu — najmniejsze ryzyko „nie otwiera mi się”.",
          "Archiwum kodu, dokumentów biurowych, zestawu zdjęć JPG.",
          "Integracja z systemami, które akceptują tylko .zip (niektóre formularze upload).",
        ],
      },
      {
        title: "Kiedy 7z",
        paragraphs: [
          "Duży folder gier, projektów wideo, backup przed wysłaniem na dysk zewnętrzny — mniejszy plik = szybszy upload.",
          "Gdy odbiorca techniczny ma zainstalowany 7-Zip lub podobny.",
          "Konwersja ZIP → 7z ma sens tylko raz — nie pakuj w kółko tych samych danych.",
        ],
      },
      {
        title: "Bezpieczeństwo",
        paragraphs: [
          "Hasło na archiwum chroni przed przypadkowym otwarciem, ale nie zastępuje szyfrowania end-to-end dla dokumentów wrażliwych.",
          "Nie rozpakowuj archiwów z nieznanych źródeł bez skanu antywirusowego.",
          "Toolando przetwarza archiwum tylko na czas konwersji formatu kontenera — zawartość powinna być legalna i Twoja.",
        ],
      },
    ],
  },
  "svg-vs-png-logos-and-icons": {
    slug: "svg-vs-png-logos-and-icons",
    title: "SVG vs PNG — logo i ikony na stronę www",
    description:
      "Wektory vs raster: kiedy eksportować logo do SVG, a kiedy PNG @2x wystarczy.",
    published: "2026-07-22",
    updated: "2026-08-06",
    author: AUTHOR,
    relatedFormats: ["svg", "png", "webp"],
    relatedTools: ["svg-to-png", "svg-to-webp", "png-to-webp"],
    sections: [
      {
        paragraphs: [
          "SVG to grafika wektorowa opisana matematycznie — skaluje się na każdym ekranie bez „pikselozy”. PNG to mapa pikseli o stałej rozdzielczości; na retina trzeba często podać wersję 2× większą. Na stronach www logo i proste ikony prawie zawsze powinny być SVG (lub ikonfont), o ile plik nie zawiera osadzonej fotografii.",
          "Konwerter SVG → PNG w Toolando.tech przydaje się, gdy musisz wysłać logo do drukarni (często wymaga PNG 300 DPI) albo do systemu, który nie akceptuje SVG.",
        ],
      },
      {
        title: "Zalety SVG",
        paragraphs: [
          "Jeden plik na mobile i desktop — mniejszy CSS, brak srcset.",
          "Łatwa zmiana koloru przez CSS (fill) w prostych ikonach.",
          "Lepszy wynik w audytach Lighthouse niż ciężkie PNG hero.",
        ],
      },
      {
        title: "Kiedy PNG zamiast SVG",
        paragraphs: [
          "Logo z gradientem, cieniem lub efektem, który źle eksportuje się z wektora.",
          "Miniaturki w Open Graph / social preview — wiele platform i tak raster.",
          "Aplikacje desktopowe bez silnika SVG.",
          "Eksport @2x PNG (np. 512×512) jako fallback w <img> obok inline SVG.",
        ],
      },
    ],
  },
  "podcast-export-mp3-aac-settings": {
    slug: "podcast-export-mp3-aac-settings",
    title: "Eksport podcastu — MP3 czy AAC i jaka bitrate",
    description:
      "Ustawienia po nagraniu w Audacity, Reaper lub na telefonie: mono, 44,1 kHz i sensowna kompresja.",
    published: "2026-07-25",
    updated: "2026-08-06",
    author: AUTHOR,
    relatedFormats: ["mp3", "aac", "m4a", "wav"],
    relatedTools: ["wav-to-mp3", "wav-to-aac", "mp3-to-aac"],
    sections: [
      {
        paragraphs: [
          "Podcast to głównie mowa — nie potrzebujesz stereo 320 kbps jak przy muzyce studyjnej. Większość platform (Spotify, Apple Podcasts, hosting RSS) i tak transkoduje upload do własnych profili. Nadal warto wysłać sensowny master: mono lub stereo, 44,1 kHz lub 48 kHz, MP3 128–192 kbps albo AAC/M4A 128 kbps.",
          "Nagrywasz w WAV lub FLAC? Eksport końcowy prawie zawsze to MP3 lub AAC — konwerter WAV → MP3 na Toolando.tech sprawdziłem na odcinkach 30–60 min; plik ~30 MB WAV schodzi do ~28 MB przy 128 kbps stereo (dla samej mowy mono zejdzie do ~15 MB).",
        ],
      },
      {
        title: "Rekomendowane ustawienia",
        paragraphs: [
          "Solo / wywiad jeden głos: mono, MP3 96–128 kbps — mniejszy plik, ta sama zrozumiałość.",
          "Dwa głosy na osobnych ścieżkach: stereo 128 kbps.",
          "Muzyka intro/outro w stereo, reszta mono — eksportuj całość stereo 128 kbps dla prostoty.",
          "Unikaj 64 kbps — syczące „s” i szumy tła przy słabych mikrofonach.",
        ],
      },
      {
        title: "MP3 vs AAC (M4A)",
        paragraphs: [
          "AAC przy tej samej bitrate brzmi nieco lepiej niż MP3 — Apple ekosystem preferuje M4A.",
          "MP3 ma najszerszą kompatybilność w starych odtwarzaczach i samochodach.",
          "Nie wysyłaj surowego WAV do hostingu podcastu — niepotrzebnie długi upload.",
        ],
      },
    ],
  },
  "gif-vs-mp4-for-animations": {
    slug: "gif-vs-mp4-for-animations",
    title: "GIF vs MP4 — animacje na stronie i w mediach społecznościowych",
    description:
      "Kiedy stary GIF ma sens, a kiedy krótkie MP4 lub WebM zaoszczędzi megabajty.",
    published: "2026-07-28",
    updated: "2026-08-06",
    author: AUTHOR,
    relatedFormats: ["gif", "mp4", "webm"],
    relatedTools: ["mp4-to-gif", "gif-to-mp4", "webm-to-gif"],
    sections: [
      {
        paragraphs: [
          "GIF odtwarza się wszędzie, ale technicznie to sekwencja klatek bez nowoczesnej kompresji wideo — 5-sekundowa animacja 720p potrafi ważyć 10–20 MB. To samo w MP4 (H.264) często mieści się w 500 KB–1 MB przy akceptowalnej jakości.",
          "Konwersja MP4 → GIF na Toolando.tech ma sens dla krótkich pętli (loader, reakcja na Slacku), gdy platforma nie pozwala osadzić wideo. Dla własnej strony lepiej <video autoplay loop muted playsinline> z MP4 lub WebM.",
        ],
      },
      {
        title: "Kiedy GIF",
        paragraphs: [
          "Krótka pętla (<5 s), mała rozdzielczość (≤480 px szerokości).",
          "Wymóg platformy (niektóre fora tylko GIF).",
          "Prosta grafika z kilkoma kolorami — wtedy GIF bywa naprawdę lekki.",
        ],
      },
      {
        title: "Kiedy MP4/WebM",
        paragraphs: [
          "Animacja z wieloma kolorami, gradientami, wideo-klipem.",
          "Strona www — lepszy LCP i mniejszy transfer.",
          "Instagram/TikTok i tak wymagają wideo, nie GIF.",
        ],
      },
      {
        title: "Wskazówki przy MP4 → GIF",
        paragraphs: [
          "Obetnij długość — każda sekunda to dziesiątki klatek.",
          "Zmniejsz rozdzielczość przed konwersją.",
          "Ogranicz paletę kolorów, jeśli narzędzie to oferuje (mniej bandingu).",
        ],
      },
    ],
  },
  "tiff-and-png-for-document-scans": {
    slug: "tiff-and-png-for-document-scans",
    title: "Skany dokumentów — TIFF, PNG czy JPG",
    description:
      "Archiwizacja faktur i umów: bezstratność, wielostronicowość i kiedy można zejść do PDF.",
    published: "2026-08-01",
    updated: "2026-08-06",
    author: AUTHOR,
    relatedFormats: ["tiff", "png", "jpg", "pdf"],
    relatedTools: ["tiff-to-jpg", "tiff-to-png", "png-to-jpg", "pdf-to-jpg"],
    sections: [
      {
        paragraphs: [
          "Skanowanie faktury czy umowy to inny przypadek niż zdjęcie wakacyjne. Tekst i pieczątki wymagają ostrych krawędzi — agresywny JPG tworzy „rozmaz” wokół liter. TIFF (często LZW bezstratny) i PNG są bezpieczniejsze na etapie archiwum. Do wysyłki i OCR finalnie i tak konwertujesz często do PDF lub JPG w umiarkowanej jakości.",
          "Wielostronicowy skan w TIFF bywa jednym plikiem z wieloma warstwami — nie każdy viewer to obsługuje; dla urzędu i klienta PDF multi-page jest czytelniejszy (łączenie PDF w Toolando.tech).",
        ],
      },
      {
        title: "Rekomendowany workflow",
        paragraphs: [
          "Skaner → PNG lub TIFF per strona (300 DPI dla druku, 150 DPI dla podglądu).",
          "Korekta obrotu/kadrowania w edytorze.",
          "Scal strony do jednego PDF do wysyłki.",
          "Opcjonalnie JPG quality 90 tylko jeśli odbiorca nie akceptuje PDF.",
        ],
      },
      {
        title: "Czego unikać",
        paragraphs: [
          "JPG quality 60 na fakturze — kwoty mogą być nieczytelne.",
          "Wielokrotna konwersja TIFF → JPG → TIFF.",
          "Skan kolorowy w 600 DPI „na zapas” — gigabajty bez korzyści dla A4 tekstu.",
        ],
      },
    ],
  },
  "markdown-to-pdf-workflow": {
    slug: "markdown-to-pdf-workflow",
    title: "Z Markdown do PDF — dokumentacja, README i notatki",
    description:
      "Ścieżka MD → HTML → PDF/DOCX: kiedy wystarczy eksport z edytora, a kiedy konwerter online.",
    published: "2026-08-02",
    updated: "2026-08-06",
    author: AUTHOR,
    relatedFormats: ["md", "html", "pdf", "docx"],
    relatedTools: ["md-to-html", "md-to-txt", "docx-to-pdf"],
    sections: [
      {
        paragraphs: [
          "Markdown to format pisania — nagłówki, listy, kod — bez layoutu WYSIWYG. Developerzy trzymają README.md w repozytorium; potem trzeba wysłać wersję PDF klientowi lub drukować specyfikację. Typowa ścieżka: MD → HTML (render) → PDF przez przeglądarkę „Drukuj do PDF” albo MD → DOCX → PDF dla lepszej kontroli nagłówków.",
          "Konwertery MD → HTML i DOCX → PDF w Toolando.tech testowałem na plikach 20–40 KB: polskie znaki i bloki kodu przechodzą poprawnie, o ile plik MD jest w UTF-8.",
        ],
      },
      {
        title: "Kiedy która ścieżka",
        paragraphs: [
          "Szybki podgląd: MD → HTML, otwórz w przeglądarce.",
          "Formalny dokument z numeracją stron: MD → DOCX (lub bezpośrednio edytor), styl firmowy, potem DOCX → PDF.",
          "Same notatki bez stylu: MD → TXT wystarczy.",
        ],
      },
      {
        title: "Dobre praktyki MD",
        paragraphs: [
          "Jeden plik = jeden temat; długie dokumenty dziel na rozdziały.",
          "Obrazki linkuj względnie — po konwersji sprawdź, czy ścieżki działają.",
          "Tabele w MD bywają problematyczne w PDF — rozważ CSV lub DOCX dla tabelarycznych danych.",
        ],
      },
    ],
  },
  "extract-images-from-pdf-pages": {
    slug: "extract-images-from-pdf-pages",
    title: "Jak wyciągnąć obrazy ze stron PDF (JPG, PNG, WebP)",
    description:
      "Prezentacje, katalogi i skany — kiedy eksport strony jako obraz ma sens i jaka rozdzielczość.",
    published: "2026-08-03",
    updated: "2026-08-06",
    author: AUTHOR,
    relatedFormats: ["pdf", "jpg", "png", "webp"],
    relatedTools: ["pdf-to-jpg", "pdf-to-png", "pdf-to-webp"],
    sections: [
      {
        paragraphs: [
          "PDF to kontener — w środku mogą być wektory, fonty i osadzone bitmapy. Konwersja PDF → JPG renderuje każdą stronę jako raster (obraz). To nie to samo co „wyciągnięcie” pojedynczego logo osadzonego w PDF (to wymaga edytora PDF), ale dla slajdów, plakatów i skanów działa świetnie.",
          "Prezentacja 16:9 po eksporcie do PNG 1920 px szerokości wygląda ostro na ekranie; do druku A4 celuj w ok. 2480×3508 px (300 DPI) jeśli narzędzie pozwala na wysoką rozdzielczość.",
        ],
      },
      {
        title: "JPG vs PNG vs WebP",
        paragraphs: [
          "Slajd ze zdjęciem tła → JPG lub WebP.",
          "Slajd z wykresem i tekstem → PNG (ostrzejsze litery).",
          "Miniatura na stronę www → WebP z JPG fallback po dalszej konwersji.",
        ],
      },
      {
        title: "Wielostronicowe PDF",
        paragraphs: [
          "Eksportuj strony pojedynczo, jeśli potrzebujesz tylko slajdu 5 i 12.",
          "Do galerii wszystkich stron — konwertuj całość i sortuj pliki po numerze w nazwie.",
          "Pamiętaj o prawach autorskich — cudzy PDF to nie Twoje zdjęcie do swobodnej publikacji.",
        ],
      },
    ],
  },
  "convert-video-to-gif-properly": {
    slug: "convert-video-to-gif-properly",
    title: "Jak zrobić dobry GIF z wideo — rozdzielczość, FPS i długość",
    description:
      "Konwersja MP4/MOV do GIF bez gigantycznego pliku: praktyczne limity i alternatywy.",
    published: "2026-08-05",
    updated: "2026-08-06",
    author: AUTHOR,
    relatedFormats: ["mp4", "mov", "gif", "webm"],
    relatedTools: ["mp4-to-gif", "mov-to-gif", "gif-to-mp4"],
    sections: [
      {
        paragraphs: [
          "GIF nie ma dźwięku i nie używa kodeków H.264 — każda klatka to pełna bitmapa (często z ograniczoną paletą 256 kolorów). Dlatego 10-sekundowy klip 1080p jako GIF może ważyć więcej niż oryginalne wideo. Cel: krótko, mało, w niskiej rozdzielczości.",
          "Przed MP4 → GIF warto w zewnętrznym edytorze przyciąć klip do 2–4 sekund i ustawić 10–15 FPS zamiast 30 — GIF i tak nie odzyska płynności filmu.",
        ],
      },
      {
        title: "Parametry startowe",
        paragraphs: [
          "Szerokość max 480–640 px dla memów i reakcji.",
          "Długość max 5 s — powyżej rozważ MP4 w pętli.",
          "Proste tło (zielone screen) łatwiej kompresuje niż gradient i szum.",
        ],
      },
      {
        title: "Po konwersji",
        paragraphs: [
          "Sprawdź rozmiar pliku — powyżej 5 MB GIF rzadko ma sens na stronie.",
          "Jeśli GIF jest za duży, konwersja GIF → MP4 i osadzenie <video> często ratuje sytuację.",
          "Toolando przetwarza Twoje wideo tylko na czas konwersji — nie hostuje gotowych GIFów publicznie.",
        ],
      },
    ],
  },
}

export const guidesBatch3En: Record<
  keyof typeof guidesBatch3Pl,
  GuideArticle
> = {
  "png-vs-jpg-photos-and-graphics": {
    ...guidesBatch3Pl["png-vs-jpg-photos-and-graphics"],
    title: "PNG vs JPG — photos vs graphics with text",
    description:
      "Practical choices: photos, screenshots, logos with transparency, and print.",
    sections: [
      {
        paragraphs: [
          "PNG and JPG are the two most confused formats. JPG compresses photos well — skies, skin, landscapes — but ruins sharp edges and text. PNG keeps every pixel exactly, including transparency (alpha), but files are often 5–10× larger than JPG at the same resolution.",
          "Rule I use in Toolando.tech tests: gallery or social photo → JPG (or WebP with JPG fallback). Icon, logo, diagram, UI screenshot → PNG. Mixed photo + text (e.g. offer cover) → often PNG or lossless WebP.",
        ],
      },
      {
        title: "When to choose JPG",
        paragraphs: [
          "Camera or phone photos without transparency.",
          "Product thumbnails when the background is solid and you don't need alpha.",
          "Email attachments — JPG quality 80–85 is usually a fair trade-off.",
          "Home photo printing — many shops accept high-resolution JPG (300 DPI equivalent).",
        ],
      },
      {
        title: "When to choose PNG",
        paragraphs: [
          "Website logo on transparent background — JPG always fills with white or black.",
          "Screenshots of UI, charts, code — text stays sharp.",
          "Flat graphics with few colors (infographics, app icons).",
          "When you plan further layered editing — lossless PNG doesn't add artifacts on each save (unlike repeated JPG).",
        ],
      },
      {
        title: "Common mistakes",
        paragraphs: [
          "Saving a logo as JPG — jagged edges and no transparency.",
          "Saving a 4000×3000 photo as PNG “for quality” — unnecessarily 15 MB instead of 2 MB JPG.",
          "PNG → JPG → PNG loops — each JPG pass loses quality; keep the master in PNG.",
        ],
      },
    ],
  },
  "flac-music-archive-guide": {
    ...guidesBatch3Pl["flac-music-archive-guide"],
    title: "FLAC as a music archive — when it pays off vs MP3",
    description:
      "Lossless FLAC vs MP3 320 kbps: backups, home streaming, and car players.",
    sections: [
      {
        paragraphs: [
          "FLAC (Free Lossless Audio Codec) is lossless compression — like ZIP for audio. When decoded you get the same signal as WAV, but the file takes about half the space. MP3 permanently removes data; even 320 kbps is not bit-identical to a CD rip.",
          "In practice: if you buy lossless music or rip your own discs, FLAC is a sensible archive format. On a phone with Bluetooth headphones FLAC vs MP3 256 kbps is often inaudible — then converting to MP3 saves gigabytes.",
        ],
      },
      {
        title: "Archive workflow",
        paragraphs: [
          "1) Master in FLAC (or WAV) on NAS / cloud backup.",
          "2) Working copies MP3/AAC for phone and car.",
          "3) Never convert MP3 → FLAC “for quality” — it only inflates the file without recovering data.",
          "I tested the FLAC → MP3 converter on Toolando.tech on 40–60 minute albums; check metadata (title, artist) in your player after conversion.",
        ],
      },
      {
        title: "Compatibility",
        paragraphs: [
          "FLAC: VLC, Foobar2000, most Android players; weaker in native Apple Music (ALAC fits Apple better).",
          "Car stereos often read only MP3/WMA/AAC from USB — FLAC → MP3 is required.",
          "Home streaming (Plex, Jellyfin) handles FLAC fine.",
        ],
      },
    ],
  },
  "zip-7z-rar-when-to-use": {
    ...guidesBatch3Pl["zip-7z-rar-when-to-use"],
    title: "ZIP, 7z and RAR — which archive to send",
    description:
      "Size, compatibility, and encryption — when ZIP is enough and when 7z or RAR helps.",
    sections: [
      {
        paragraphs: [
          "An archive wraps many files into one — handy for email, cloud, and folder backup. ZIP is the universal standard: open on Windows, macOS, and Linux without extra software. 7z usually yields a smaller result, but recipients may need 7-Zip. RAR appears in legacy workflows; creating RAR online has licensing limits — you more often convert RAR → ZIP than the reverse.",
        ],
      },
      {
        title: "When ZIP",
        paragraphs: [
          "Sending to clients or offices — lowest “won't open” risk.",
          "Archiving code, office docs, a set of JPG photos.",
          "Systems that accept only .zip uploads.",
        ],
      },
      {
        title: "When 7z",
        paragraphs: [
          "Large game folders, video projects, backup before external drive — smaller file = faster upload.",
          "When the recipient is technical and has 7-Zip.",
          "ZIP → 7z conversion makes sense once — don't re-pack the same data in circles.",
        ],
      },
      {
        title: "Security",
        paragraphs: [
          "Archive passwords stop casual opening but don't replace end-to-end encryption for sensitive docs.",
          "Don't unpack archives from unknown sources without an antivirus scan.",
          "Toolando processes archives only for the duration of container conversion — content must be legal and yours.",
        ],
      },
    ],
  },
  "svg-vs-png-logos-and-icons": {
    ...guidesBatch3Pl["svg-vs-png-logos-and-icons"],
    title: "SVG vs PNG — logos and icons for the web",
    description:
      "Vector vs raster: when to ship SVG and when @2x PNG is enough.",
    sections: [
      {
        paragraphs: [
          "SVG is vector graphics described mathematically — scales on any screen without pixelation. PNG is a fixed-resolution bitmap; on retina you often need a 2× version. For websites, logos and simple icons should almost always be SVG (or an icon font), unless the file embeds a photo.",
          "The SVG → PNG converter on Toolando.tech helps when a print shop wants PNG 300 DPI or a system rejects SVG.",
        ],
      },
      {
        title: "SVG advantages",
        paragraphs: [
          "One file for mobile and desktop — less CSS, no srcset.",
          "Easy color changes via CSS fill on simple icons.",
          "Better Lighthouse scores than heavy PNG heroes.",
        ],
      },
      {
        title: "When PNG instead of SVG",
        paragraphs: [
          "Logo with gradients, shadows, or effects that export poorly from vector.",
          "Open Graph / social preview thumbnails — platforms rasterize anyway.",
          "Desktop apps without an SVG engine.",
          "Export @2x PNG (e.g. 512×512) as fallback in <img> beside inline SVG.",
        ],
      },
    ],
  },
  "podcast-export-mp3-aac-settings": {
    ...guidesBatch3Pl["podcast-export-mp3-aac-settings"],
    title: "Podcast export — MP3 or AAC and which bitrate",
    description:
      "Settings after recording in Audacity, Reaper, or on your phone: mono, 44.1 kHz, sensible compression.",
    sections: [
      {
        paragraphs: [
          "Podcasts are mostly speech — you don't need stereo 320 kbps like studio music. Most platforms (Spotify, Apple Podcasts, RSS hosts) re-encode uploads anyway. Still send a decent master: mono or stereo, 44.1 or 48 kHz, MP3 128–192 kbps or AAC/M4A 128 kbps.",
          "Recorded in WAV or FLAC? Final export is almost always MP3 or AAC — I tested WAV → MP3 on Toolando.tech on 30–60 minute episodes; ~30 MB WAV drops to ~28 MB at 128 kbps stereo (mono speech can be ~15 MB).",
        ],
      },
      {
        title: "Recommended settings",
        paragraphs: [
          "Solo / single-voice interview: mono, MP3 96–128 kbps.",
          "Two voices on separate tracks: stereo 128 kbps.",
          "Music intro/outro in stereo, rest mono — export all stereo 128 kbps for simplicity.",
          "Avoid 64 kbps — harsh sibilance and noise on cheap mics.",
        ],
      },
      {
        title: "MP3 vs AAC (M4A)",
        paragraphs: [
          "AAC at the same bitrate usually beats MP3 — Apple prefers M4A.",
          "MP3 has widest compatibility in old players and cars.",
          "Don't upload raw WAV to podcast hosts — uploads take forever.",
        ],
      },
    ],
  },
  "gif-vs-mp4-for-animations": {
    ...guidesBatch3Pl["gif-vs-mp4-for-animations"],
    title: "GIF vs MP4 — animations on sites and social media",
    description:
      "When old-school GIF makes sense and when short MP4 or WebM saves megabytes.",
    sections: [
      {
        paragraphs: [
          "GIF plays everywhere but is technically a frame sequence without modern video compression — a 5-second 720p animation can weigh 10–20 MB. The same in MP4 (H.264) often fits in 500 KB–1 MB at acceptable quality.",
          "MP4 → GIF on Toolando.tech makes sense for short loops (loader, Slack reaction) when the platform won't embed video. On your own site prefer <video autoplay loop muted playsinline> with MP4 or WebM.",
        ],
      },
      {
        title: "When GIF",
        paragraphs: [
          "Short loop (<5 s), small resolution (≤480 px wide).",
          "Platform requirement (some forums are GIF-only).",
          "Simple graphics with few colors — then GIF can be truly light.",
        ],
      },
      {
        title: "When MP4/WebM",
        paragraphs: [
          "Animation with many colors, gradients, or video clips.",
          "Websites — better LCP and less bandwidth.",
          "Instagram/TikTok require video, not GIF.",
        ],
      },
      {
        title: "Tips for MP4 → GIF",
        paragraphs: [
          "Trim length — each second is dozens of frames.",
          "Reduce resolution before conversion.",
          "Limit the color palette if the tool offers it (less banding).",
        ],
      },
    ],
  },
  "tiff-and-png-for-document-scans": {
    ...guidesBatch3Pl["tiff-and-png-for-document-scans"],
    title: "Document scans — TIFF, PNG, or JPG",
    description:
      "Invoices and contracts: lossless storage, multi-page, and when PDF is enough.",
    sections: [
      {
        paragraphs: [
          "Scanning an invoice or contract differs from a holiday photo. Text and stamps need sharp edges — aggressive JPG blurs letters. TIFF (often LZW lossless) and PNG are safer for archives. For sending and OCR you often end up with PDF or moderate-quality JPG anyway.",
          "Multi-page TIFF can be one file with many layers — not every viewer handles that; for offices and clients multi-page PDF is clearer (merge PDFs in Toolando.tech).",
        ],
      },
      {
        title: "Recommended workflow",
        paragraphs: [
          "Scanner → PNG or TIFF per page (300 DPI for print, 150 DPI for preview).",
          "Fix rotation/crop in an editor.",
          "Merge pages into one PDF for delivery.",
          "Optional JPG quality 90 only if the recipient won't accept PDF.",
        ],
      },
      {
        title: "What to avoid",
        paragraphs: [
          "JPG quality 60 on invoices — amounts may become unreadable.",
          "Repeated TIFF → JPG → TIFF cycles.",
          "Color scans at 600 DPI “just in case” — gigabytes with no benefit for A4 text.",
        ],
      },
    ],
  },
  "markdown-to-pdf-workflow": {
    ...guidesBatch3Pl["markdown-to-pdf-workflow"],
    title: "Markdown to PDF — docs, README, and notes",
    description:
      "MD → HTML → PDF/DOCX: when editor export is enough and when an online converter helps.",
    sections: [
      {
        paragraphs: [
          "Markdown is for writing — headings, lists, code — without WYSIWYG layout. Developers keep README.md in repos; then you need PDF for a client or print. Typical path: MD → HTML (render) → PDF via browser Print to PDF, or MD → DOCX → PDF for better page headers.",
          "I tested MD → HTML and DOCX → PDF converters on Toolando.tech on 20–40 KB files; Polish characters and code blocks pass fine if the MD file is UTF-8.",
        ],
      },
      {
        title: "Which path when",
        paragraphs: [
          "Quick preview: MD → HTML, open in browser.",
          "Formal doc with page numbers: MD → DOCX (or editor), company style, then DOCX → PDF.",
          "Plain notes without styling: MD → TXT is enough.",
        ],
      },
      {
        title: "Good MD habits",
        paragraphs: [
          "One file = one topic; split long docs into chapters.",
          "Link images relatively — check paths after conversion.",
          "MD tables can break in PDF — consider CSV or DOCX for tabular data.",
        ],
      },
    ],
  },
  "extract-images-from-pdf-pages": {
    ...guidesBatch3Pl["extract-images-from-pdf-pages"],
    title: "How to extract images from PDF pages (JPG, PNG, WebP)",
    description:
      "Slides, catalogs, and scans — when exporting a page as an image makes sense and which resolution.",
    sections: [
      {
        paragraphs: [
          "PDF is a container — inside there may be vectors, fonts, and embedded bitmaps. PDF → JPG renders each page as a raster image. That's not the same as extracting a single embedded logo (that needs a PDF editor), but for slides, posters, and scans it works well.",
          "A 16:9 deck exported to PNG at 1920 px width looks sharp on screen; for A4 print aim for ~2480×3508 px (300 DPI) if the tool supports high resolution.",
        ],
      },
      {
        title: "JPG vs PNG vs WebP",
        paragraphs: [
          "Slide with photo background → JPG or WebP.",
          "Slide with charts and text → PNG (sharper type).",
          "Website thumbnail → WebP with JPG fallback after further conversion.",
        ],
      },
      {
        title: "Multi-page PDFs",
        paragraphs: [
          "Export single pages if you only need slides 5 and 12.",
          "For a gallery of all pages — convert the whole file and sort by number in filenames.",
          "Respect copyright — someone else's PDF isn't yours to publish freely.",
        ],
      },
    ],
  },
  "convert-video-to-gif-properly": {
    ...guidesBatch3Pl["convert-video-to-gif-properly"],
    title: "How to make a good GIF from video — resolution, FPS, length",
    description:
      "MP4/MOV to GIF without a giant file: practical limits and alternatives.",
    sections: [
      {
        paragraphs: [
          "GIF has no audio and doesn't use H.264 — each frame is a full bitmap (often 256-color palette). So a 10-second 1080p clip as GIF can weigh more than the original video. Goal: short, small, low resolution.",
          "Before MP4 → GIF trim the clip to 2–4 seconds in an editor and use 10–15 FPS instead of 30 — GIF won't recover film smoothness anyway.",
        ],
      },
      {
        title: "Starting parameters",
        paragraphs: [
          "Max width 480–640 px for memes and reactions.",
          "Max length 5 s — above that consider looping MP4.",
          "Simple backgrounds (greenscreen) compress easier than gradients and noise.",
        ],
      },
      {
        title: "After conversion",
        paragraphs: [
          "Check file size — GIFs over 5 MB rarely make sense on a page.",
          "If the GIF is too big, GIF → MP4 and a <video> embed often fixes it.",
          "Toolando processes your video only for the conversion — it doesn't publicly host finished GIFs.",
        ],
      },
    ],
  },
}
