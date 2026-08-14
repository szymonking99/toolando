import type { GuideArticle } from "./types"
import type { GuideSlug } from "./slugs"
import { guidesBatch2Pl } from "./batch-2"
import { guidesBatch3Pl } from "./batch-3"
import { guidesBatch4Pl } from "./batch-4"

const AUTHOR = "Szymon"

export const guidesPl: Record<GuideSlug, GuideArticle> = {
  "mp3-vs-wav": {
    slug: "mp3-vs-wav",
    title: "MP3 vs WAV — kiedy konwertować audio?",
    description:
      "Porównanie MP3 i WAV: kompresja stratna vs bezstratna, rozmiar pliku, edycja w DAW i kiedy wybrać który format.",
    published: "2026-01-15",
    updated: "2026-07-23",
    author: AUTHOR,
    relatedFormats: ["mp3", "wav", "flac"],
    relatedTools: ["mp3-to-wav", "wav-to-mp3"],
    sections: [
      {
        paragraphs: [
          "MP3 to format ze stratną kompresją — pliki są małe, ale część danych dźwiękowych jest tracona na zawsze. WAV zachowuje pełną jakość (bezstratny lub nieskompresowany), lecz pliki mogą być 10-krotnie większe niż MP3.",
          "W praktyce: słuchasz muzyki na telefonie → MP3 w zupełności wystarczy. Edytujesz podcast w Audacity lub miksujesz w FL Studio → lepiej pracować na WAV lub FLAC.",
        ],
      },
      {
        title: "Kiedy konwertować MP3 → WAV",
        paragraphs: [
          "Gdy platforma lub program wymaga formatu bezstratnego do dalszej edycji.",
          "Gdy planujesz wielokrotne cięcie, efekty i mastering — każda operacja na MP3 pogarsza jakość.",
          "Pamiętaj: konwersja MP3 → WAV nie przywraca utraconej jakości, ale zatrzymuje dalszą degradację podczas edycji.",
        ],
      },
      {
        title: "Kiedy konwertować WAV → MP3",
        paragraphs: [
          "Wysyłka nagrania e-mailem lub komunikatorem — mniejszy plik = szybszy transfer.",
          "Publikacja podcastu lub muzyki do słuchania, nie do edycji.",
          "Oszczędność miejsca na dysku w dużej bibliotece audio.",
        ],
      },
    ],
  },
  "pdf-to-jpg": {
    slug: "pdf-to-jpg",
    title: "Jak przekonwertować PDF na JPG do druku i internetu",
    description:
      "Kiedy warto wyeksportować strony PDF jako JPG, jaka rozdzielczość i kiedy lepiej wybrać PNG.",
    published: "2026-01-20",
    updated: "2026-07-23",
    author: AUTHOR,
    relatedFormats: ["pdf", "jpg", "png"],
    relatedTools: ["pdf-to-jpg", "pdf-to-png"],
    sections: [
      {
        paragraphs: [
          "PDF to format dokumentów ze stałym układem strony. Czasem potrzebujesz poszczególnych stron jako obrazów — do wstawienia na stronę www, w prezentację PowerPoint lub do wydruku pojedynczej strony.",
          "Konwerter PDF → JPG w Toolando.tech renderuje każdą stronę PDF jako osobny obraz JPG. Pliki nie są przechowywane — po konwersji są natychmiast usuwane.",
        ],
      },
      {
        title: "JPG czy PNG z PDF?",
        paragraphs: [
          "JPG — mniejsze pliki, idealne do zdjęć i dokumentów bez przezroczystości.",
          "PNG — bezstratny, z przezroczystością; lepszy do grafik z tekstem i ostrymi krawędziami.",
        ],
      },
    ],
  },
  "webp-avif-images": {
    slug: "webp-avif-images",
    title: "WebP i AVIF — nowoczesne formaty obrazów dla stron www",
    description:
      "Porównanie WebP i AVIF z JPG/PNG: kompresja, wsparcie przeglądarek i optymalizacja PageSpeed.",
    published: "2026-02-01",
    updated: "2026-07-23",
    author: AUTHOR,
    relatedFormats: ["webp", "avif", "jpg", "png"],
    relatedTools: ["jpg-to-webp", "png-to-webp", "png-to-avif"],
    sections: [
      {
        paragraphs: [
          "JPG i PNG dominują w internecie od lat, ale WebP (Google) daje pliki o 25–35% mniejsze niż JPG przy tej samej jakości wizualnej. AVIF idzie jeszcze dalej — pliki mogą być o połowę mniejsze niż WebP.",
          "Wszystkie nowoczesne przeglądarki (Chrome, Firefox, Edge, Safari 14+) obsługują WebP. AVIF ma nieco słabsze wsparcie w starszych wersjach Safari.",
        ],
      },
      {
        title: "Strategia wdrożenia",
        paragraphs: [
          "Konwertuj JPG → WebP dla zdjęć produktów i banerów — przyspieszy to ładowanie strony.",
          "Zachowaj JPG jako fallback dla starszych przeglądarek (tag <picture> w HTML).",
          "Do logo z przezroczystością: PNG → WebP zamiast JPG.",
        ],
      },
    ],
  },
  "extract-audio-from-video": {
    slug: "extract-audio-from-video",
    title: "Wyciąganie dźwięku z wideo — legalna alternatywa",
    description:
      "Jak legalnie wyciągnąć ścieżkę audio z własnego nagrania wideo (MP4, MOV, MKV).",
    published: "2026-02-10",
    updated: "2026-07-23",
    author: AUTHOR,
    relatedFormats: ["mp4", "mp3", "wav", "flac"],
    relatedTools: ["mp4-to-mp3", "mp4-to-wav"],
    sections: [
      {
        paragraphs: [
          "Czasem masz plik wideo (nagranie z kamery, prezentacja) i potrzebujesz tylko ścieżki audio. Toolando.tech pozwala wyciągnąć dźwięk z MP4, MOV, AVI, MKV i innych formatów, zapisując go jako MP3, WAV, FLAC lub AAC.",
          "To legalna operacja na Twoim własnym pliku — w przeciwieństwie do pobierania muzyki z YouTube czy TikTok, czego Toolando.tech świadomie nie oferuje.",
        ],
      },
    ],
  },
  "json-csv-xml": {
    slug: "json-csv-xml",
    title: "JSON, CSV i XML — konwersja danych między formatami",
    description:
      "Kiedy używać JSON, CSV, TSV i XML oraz jak konwertować dane między nimi bez utraty struktury.",
    published: "2026-02-15",
    updated: "2026-07-23",
    author: AUTHOR,
    relatedFormats: ["json", "csv", "xml", "tsv"],
    relatedTools: ["json-to-csv", "csv-to-json", "json-to-xml"],
    sections: [
      {
        paragraphs: [
          "JSON jest standardem w API REST i konfiguracjach aplikacji. CSV i TSV służą do importu do Excela i arkuszy kalkulacyjnych. XML jest używany w starszych systemach enterprise i RSS.",
          "JSON → CSV pozwala otworzyć odpowiedź API w Excelu. CSV → JSON przygotowuje dane do wysłania do REST API. Toolando.tech zachowuje strukturę danych podczas konwersji.",
        ],
      },
    ],
  },
  "online-file-security": {
    slug: "online-file-security",
    title: "Bezpieczeństwo plików w narzędziach online",
    description:
      "Jak Toolando.tech przetwarza pliki, kiedy działają lokalnie w przeglądarce i co z prywatnością.",
    published: "2026-03-01",
    updated: "2026-07-23",
    author: AUTHOR,
    sections: [
      {
        paragraphs: [
          "Przesyłanie plików do narzędzi online budzi naturalne obawy. W Toolando.tech pliki służą wyłącznie do wykonania operacji, o którą prosisz — konwersji, kompresji lub podglądu.",
          "Po zakończeniu pracy pliki są usuwane z serwera. Część narzędzi (uniwersalny otwieracz) działa w całości w przeglądarce — wtedy plik w ogóle nie opuszcza Twojego komputera. Połączenie jest szyfrowane (HTTPS).",
        ],
      },
      {
        title: "Co NIE robimy z Twoimi plikami",
        paragraphs: [
          "Nie sprzedajemy plików ani metadanych osobom trzecim.",
          "Nie używamy uploadów do trenowania modeli AI.",
          "Nie trzymamy kopii „na wszelki wypadek” — po zakończeniu zadania plik znika z dysku serwera.",
        ],
      },
      {
        title: "Kiedy plik zostaje na serwerze dłużej",
        paragraphs: [
          "Tylko na czas trwania konwersji (zwykle sekundy do minuty). Przy dużych wideo do 500 MB operacja może trwać dłużej — plik nadal jest usuwany po zakończeniu.",
          "Opcja premium z kontem może zapisywać historię operacji (metadane, nie pliki) — szczegóły w polityce prywatności.",
        ],
      },
    ],
  },
  "lossy-vs-lossless": {
    slug: "lossy-vs-lossless",
    title: "Kompresja stratna vs bezstratna — prosty przewodnik",
    description:
      "Czym różni się kompresja stratna od bezstratnej i jak unikać utraty jakości przy konwersji.",
    published: "2026-03-10",
    updated: "2026-07-23",
    author: AUTHOR,
    relatedFormats: ["mp3", "flac", "jpg", "png", "wav"],
    sections: [
      {
        paragraphs: [
          "Formaty stratne (MP3, JPG, AAC, H.264) usuwają część danych, aby zmniejszyć rozmiar pliku. Formaty bezstratne (FLAC, PNG, WAV, ZIP) zachowują wszystkie dane, ale pliki są większe.",
          "Zasada: konwertuj ze stratnego na bezstratny tylko gdy musisz — utraconej jakości nie odzyskasz. Konwertuj ze stratnego na stratny tylko raz — każda kolejna konwersja pogarsza wynik.",
        ],
      },
      {
        title: "Przykłady w praktyce",
        paragraphs: [
          "Muzyka: FLAC → MP3 przed wysłaniem znajomemu OK; MP3 → FLAC przed masteringiem NIE.",
          "Zdjęcia: RAW/JPG z aparatu → eksport JPG do webu OK; wielokrotne JPG → JPG w messangerze psuje jakość.",
          "Wideo: MP4 (H.264) jest stratny, ale standardem — nie przekodowuj bez powodu.",
        ],
      },
      {
        title: "Gdzie sprawdzić typ formatu",
        paragraphs: [
          "W encyklopedii formatów Toolando każdy format ma oznaczenie stratny/bezstratny/kontener.",
          "Porównania MP3 vs FLAC i JPG vs WebP wyjaśniają werdykt w jednej stronie.",
        ],
      },
    ],
  },
  "heic-iphone-jpg": {
    slug: "heic-iphone-jpg",
    title: "HEIC z iPhone — jak otworzyć i przekonwertować na JPG",
    description:
      "Dlaczego iPhone zapisuje HEIC, problemy z kompatybilnością i jak konwertować na JPG lub PNG.",
    published: "2026-03-15",
    updated: "2026-07-23",
    author: AUTHOR,
    relatedFormats: ["heic", "jpg", "png"],
    relatedTools: ["heic-to-jpg", "heic-to-png"],
    sections: [
      {
        paragraphs: [
          "Apple domyślnie zapisuje zdjęcia w HEIC (HEIF) — mniejszy niż JPG przy tej samej jakości. Problem: Windows bez rozszerzenia, starsze programy i wiele serwisów nie obsługuje HEIC.",
          "Rozwiązanie: konwertuj HEIC → JPG lub HEIC → PNG w Toolando.tech przed wysłaniem zdjęć mailem, wgraniem na stronę lub drukiem. W Ustawieniach iPhone możesz też włączyć „Najbardziej kompatybilne” (JPG).",
        ],
      },
    ],
  },
  "pdf-vs-docx": {
    slug: "pdf-vs-docx",
    title: "PDF vs DOCX — kiedy który format?",
    description:
      "Różnice między PDF a DOCX: edycja, druk, archiwizacja i kiedy konwertować w którą stronę.",
    published: "2026-04-01",
    updated: "2026-07-23",
    author: AUTHOR,
    relatedFormats: ["pdf", "docx"],
    relatedTools: ["docx-to-pdf", "pdf-to-docx"],
    sections: [
      {
        paragraphs: [
          "DOCX (Word) służy do edycji tekstu — zmieniasz treść, style, nagłówki. PDF zamraża układ strony: wygląda identycznie na każdym urządzeniu, idealny do faktur, umów i CV.",
          "Konwertuj DOCX → PDF przed wysłaniem dokumentu „do odczytu”. Konwertuj PDF → DOCX tylko gdy musisz edytować tekst — layout może się rozjechać. Do archiwizacji i druku zawsze wybieraj PDF.",
        ],
      },
    ],
  },
  "video-social-media": {
    slug: "video-social-media",
    title: "Wideo na social media — MP4, rozdzielczość i bitrate",
    description:
      "Jak przygotować wideo pod Instagram, TikTok, YouTube: format MP4, H.264, rozdzielczość 1080p.",
    published: "2026-04-10",
    updated: "2026-08-06",
    author: AUTHOR,
    relatedFormats: ["mp4", "webm", "mov"],
    relatedTools: ["mov-to-mp4", "avi-to-mp4", "mp4-to-webm"],
    sections: [
      {
        paragraphs: [
          "Instagram, TikTok, YouTube i Facebook preferują MP4 z kodekiem H.264 i ścieżką AAC. Przed publikacją warto przekonwertować MOV, AVI lub MKV na MP4 — unikniesz błędów uploadu.",
          "Rozdzielczość 1080p (1920×1080) wystarczy większości platform. Wyższy bitrate = lepsza jakość, ale większy plik. Szczegóły o MP4, WebM i MOV znajdziesz w encyklopedii formatów Toolando.tech.",
        ],
      },
    ],
  },
  "choose-audio-bitrate": {
    slug: "choose-audio-bitrate",
    title: "Jaki bitrate MP3 lub AAC wybrać? Praktyczny przewodnik",
    description:
      "128 vs 192 vs 320 kbps — jak dobrać bitrate pod podcast, muzykę i wideo bez marnowania miejsca na dysku.",
    published: "2026-05-01",
    updated: "2026-08-06",
    author: AUTHOR,
    relatedFormats: ["mp3", "aac", "m4a", "opus"],
    relatedTools: ["wav-to-mp3", "flac-to-mp3", "mp4-to-mp3"],
    sections: [
      {
        paragraphs: [
          "Bitrate to ilość danych na sekundę dźwięku. Wyższy bitrate zwykle oznacza lepszą jakość, ale też większy plik. Przy MP3 różnica między 128 a 320 kbps jest słyszalna głównie na dobrej aparaturze i w muzyce z dużą dynamiką.",
          "Dla mowy (podcast, wywiad, notatka głosowa) 96–128 kbps mono często wystarczy. Dla muzyki do słuchania w słuchawkach sensowny kompromis to 192–256 kbps stereo. 320 kbps to praktyczny „sufit” MP3 — dalsze podnoszenie bitrate nie daje dużej korzyści, bo format i tak jest stratny.",
        ],
      },
      {
        title: "MP3, AAC i Opus — krótkie porównanie",
        paragraphs: [
          "AAC (M4A) przy tym samym bitrate brzmi zwykle lepiej niż MP3 — stąd popularność w YouTube i Apple Music.",
          "Opus świetnie sprawdza się w VoIP i streamingu przy niskich bitrate (64–128 kbps).",
          "Jeśli archiwizujesz nagrania studyjne, trzymaj WAV lub FLAC — bitrate stratnego formatu nie naprawi utraconych danych.",
        ],
      },
      {
        title: "Typowe błędy",
        paragraphs: [
          "Konwersja niskiej jakości MP3 → wyższy bitrate nie poprawia brzmienia — powstaje tylko większy plik.",
          "Wielokrotne przekodowanie tego samego utworu (np. MP3 → AAC → MP3) za każdym razem pogarsza jakość.",
          "Przed publikacją wideo wyciągnij audio z własnego pliku MP4 zamiast pobierać cudzą muzykę z internetu — to kwestia praw autorskich.",
        ],
      },
    ],
  },
  "prepare-images-for-web": {
    slug: "prepare-images-for-web",
    title: "Jak przygotować obrazy pod stronę www (JPG, WebP, AVIF)",
    description:
      "Rozdzielczość, kompresja i format — jak przyspieszyć witrynę bez widocznej utraty jakości.",
    published: "2026-05-15",
    updated: "2026-08-06",
    author: AUTHOR,
    relatedFormats: ["jpg", "webp", "avif", "png"],
    relatedTools: ["jpg-to-webp", "png-to-webp", "png-to-avif"],
    sections: [
      {
        paragraphs: [
          "Duże zdjęcia z aparatu (4000×3000 px) spowalniają każdą stronę. Zanim wgrasz je na blog lub sklep, zmniejsz rozdzielczość do realnego rozmiaru wyświetlania — np. 1600 px szerokości dla hero banera.",
          "JPG nadal jest bezpiecznym wyborem uniwersalnym. WebP i AVIF dają mniejsze pliki przy tej samej jakości wizualnej — warto je stosować w nowoczesnych projektach z tagiem <picture> jako fallback dla starszych przeglądarek.",
        ],
      },
      {
        title: "Kiedy PNG zamiast JPG",
        paragraphs: [
          "Logo, ikony, zrzuty ekranu z tekstem i UI — PNG lub WebP bezstratny zachowają ostre krawędzie.",
          "Zdjęcia produktów na białym tle często można spokojnie kompresować JPG quality 80–85 bez widocznych artefaktów.",
          "Unikaj zapisywania tego samego banera wielokrotnie jako JPG — każde kolejne zapisanie pogarsza jakość.",
        ],
      },
      {
        title: "Checklist przed publikacją",
        paragraphs: [
          "1) Przeskaluj do docelowej szerokości w px. 2) Wybierz format (JPG/WebP/AVIF). 3) Sprawdź wagę pliku (<200 KB dla miniatur, <500 KB dla dużych zdjęć na blogu). 4) Otwórz stronę w PageSpeed Insights i porównaj LCP przed/po.",
        ],
      },
    ],
  },
  "docx-pdf-workflow": {
    slug: "docx-pdf-workflow",
    title: "DOCX → PDF w pracy biurowej — kiedy i jak konwertować",
    description:
      "Wysyłka CV, faktur i umów: dlaczego PDF wygrywa z DOCX i jak uniknąć rozjechanych czcionek.",
    published: "2026-06-01",
    updated: "2026-08-06",
    author: AUTHOR,
    relatedFormats: ["docx", "pdf", "odt"],
    relatedTools: ["docx-to-pdf", "pdf-to-docx", "odt-to-docx"],
    sections: [
      {
        paragraphs: [
          "DOCX to format do edycji — świetny, gdy odbiorca ma Worda i ma coś poprawić. PDF to format do odczytu — układ, czcionki i marginesy wyglądają tak samo na Windows, Macu i telefonie.",
          "Przed wysłaniem CV, oferty lub umowy do klienta konwertuj DOCX → PDF. Odbiorca nie zmieni przypadkiem treści i nie zobaczysz „zastępczych czcionek” zamiast Twojego brandingowego kroju.",
        ],
      },
      {
        title: "Kiedy NIE konwertować PDF → DOCX",
        paragraphs: [
          "Skany faktur i umów podpisanych odręcznie — PDF zostaje archiwem; OCR to osobny proces.",
          "Dokumenty wielostronicowe ze skomplikowanym układem (katalogi, broszury) — konwersja do DOCX często psuje paginację.",
          "Jeśli potrzebujesz tylko fragmentu tekstu, skopiuj go z PDF zamiast konwertować cały plik.",
        ],
      },
      {
        title: "Bezpieczeństwo i prywatność",
        paragraphs: [
          "W Toolando.tech pliki DOCX i PDF służą wyłącznie do konwersji i są usuwane po zakończeniu zadania.",
          "Dla dokumentów z danymi wrażliwymi (PESEL, numery kont) używaj HTTPS i nie przechowuj kopii na publicznych dyskach chmurowych bez szyfrowania.",
        ],
      },
    ],
  },
  ...guidesBatch2Pl,
  ...guidesBatch3Pl,
  ...guidesBatch4Pl,
}

