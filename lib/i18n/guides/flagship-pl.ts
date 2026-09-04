import type { GuideArticle } from "./types"
import type { GuideSlug } from "./slugs"

const AUTHOR = "Szymon"
const UPDATED = "2026-09-04"

/**
 * Long-form originals for AdSense / Search Quality. These override the short
 * stub articles for the same slugs. Written from tests on Toolando itself.
 */
export const flagshipPl: Record<
  Extract<
    GuideSlug,
    | "when-not-to-convert-files"
    | "online-file-security"
    | "heic-iphone-jpg"
    | "mp3-vs-wav"
    | "lossy-vs-lossless"
    | "compress-images-without-quality-loss"
    | "docx-pdf-workflow"
    | "extract-audio-from-video"
    | "remove-exif-privacy-guide"
    | "prepare-images-for-web"
    | "flac-music-archive-guide"
    | "toolando-editorial-standards"
  >,
  GuideArticle
> = {
  "when-not-to-convert-files": {
    slug: "when-not-to-convert-files",
    title: "Kiedy NIE konwertować pliku — sytuacje, w których oryginał wygrywa",
    description:
      "Konwersja nie zawsze pomaga. Kiedy zostawić MP3, PNG, FLAC albo PDF z podpisem i jak nie psuć jakości „w górę”.",
    published: "2026-07-10",
    updated: UPDATED,
    author: AUTHOR,
    relatedFormats: ["flac", "png", "wav", "pdf", "mp3"],
    relatedTools: ["mp3-to-wav", "jpg-to-png"],
    sections: [
      {
        paragraphs: [
          "Narzędzie konwersji kusi, bo klik zajmuje sekundę. W testach na własnych plikach najczęściej psuję jakość właśnie wtedy, gdy konwertuję bez powodu — „na wszelki wypadek”, bo ktoś poprosił o inny format, albo bo myślałem, że WAV z MP3 brzmi jak studio.",
          "Zasada, której się trzymam: konwersja ma rozwiązać konkretny problem (odtwarzacz nie otwiera HEIC, mail nie przyjmuje 80 MB WAV, drukarnia chce PDF). Jeśli problemu nie ma, oryginał jest lepszy.",
        ],
      },
      {
        title: "Nie konwertuj „w górę” ze stratnego formatu",
        paragraphs: [
          "MP3 → WAV albo MP3 → FLAC nie przywraca dźwięków, które encoder już wyrzucił. Dostajesz większy plik z tą samą dziurą w spektrum. Sprawdzałem to na podcastcie 128 kbps: WAV po konwersji ważył ~10× więcej, a w Audacity spektrogram wyglądał jak ten sam MP3.",
          "JPG → PNG też nie odzyskuje detalu. PNG zapisze artefakty JPEG wiernie — tylko ciężej. JPG → PNG ma sens wyłącznie gdy potrzebujesz przezroczystości albo dalszej edycji bez kolejnej straty, a źródło i tak jest już JPG.",
        ],
      },
      {
        title: "Siedem sytuacji, w których zostawiam oryginał",
        paragraphs: [
          "PNG z przezroczystym logo — JPG wypełni tło kolorem. Nie „upraszczaj” logo do zdjęcia.",
          "WAV albo FLAC z sesji nagraniowej — MP3 dopiero na końcu, gdy wydajesz mix do słuchania. Nie spłaszczaj archiwum.",
          "PDF z podpisem kwalifikowanym albo pieczęcią — konwersja do DOCX albo obrazu zwykle unieważnia podpis.",
          "Wideo, które już jest H.264 w MP4 i odtwarza się wszędzie — przekodowanie do WebM „bo nowocześniej” kosztuje jakość i czas bez zysku dla odbiorcy na telefonie.",
          "Skany umów w PDF — nie ciągnij ich do DOCX, jeśli chcesz tylko wysłać załącznik. Układ się rozjedzie, a treść i tak jest bitmapą.",
          "SVG logo — rastrowanie do PNG ma sens na konkretny rozmiar (favicon, social). Nie zastępuj źródłowego SVG rastrem „na stałe”.",
          "Plik, którego platforma i tak zaakceptuje. Instagram, Gmail i większość CMS biorą JPG i MP4. Nie konwertuj prewencyjnie.",
        ],
      },
      {
        title: "Zanim klikniesz Konwertuj",
        paragraphs: [
          "Zrób kopię oryginału. Konwersja online nie cofa się, jeśli wybierzesz zły format.",
          "Sprawdź limit rozmiaru u odbiorcy, nie „jaki format jest ładniejszy”. Często wystarczy kompresja w tym samym formacie.",
          "Jeśli nie wiesz, czy format jest stratny, załóż że jest — i nie rób drugiej konwersji na tym samym materiale.",
        ],
      },
      {
        title: "Jak sprawdzam to na własnych plikach",
        paragraphs: [
          "Trzymam mały zestaw testowy: podcast 128 kbps, zdjęcie HEIC z iPhone’a, PNG z logo na przezroczystym tle, skan umowy w PDF i krótki MP4 z OBS. Na każdym robię konwersję „w górę” i „w bok”, potem porównuję w Audacity, Explorerze albo zwykłym podglądzie.",
          "Najczęstszy wniosek z tych testów: ludzie konwertują, bo boją się, że odbiorca „nie otworzy”. W praktyce Gmail, Chrome i Windows 11 otwierają więcej formatów niż się wydaje. Problem zwykle nie jest w formacie, tylko w limicie rozmiaru albo w starym programie po drugiej stronie.",
          "Dlatego w poradnikach Toolando najpierw tłumaczę, kiedy nie konwertować. Konwerter zostawiam na sytuacje, w których oryginał realnie blokuje workflow — nie na nawyk „na wszelki wypadek”.",
        ],
      },
      {
        title: "Krótka checklista zamiast automatycznej konwersji",
        paragraphs: [
          "1) Jaki program ma otworzyć plik po drugiej stronie? Jeśli nie wiesz — zapytaj, zanim przekodujesz.",
          "2) Czy problemem jest rozmiar, nie format? Wtedy kompresja JPG/WebP albo mniejszy bitrate MP3 zwykle wystarcza.",
          "3) Czy to archiwum, czy kopia do wysyłki? Archiwum trzymaj w oryginale (FLAC, HEIC, SVG, PDF z podpisem).",
          "4) Czy druga konwersja będzie stratna? Jeśli tak — zatrzymaj się. Jedna strata jest do przeżycia, łańcuch konwersji psuje materiał bezpowrotnie.",
        ],
      },
    ],
  },
  "online-file-security": {
    slug: "online-file-security",
    title: "Bezpieczeństwo plików w narzędziu online — jak to robię w Toolando",
    description:
      "Co dzieje się z plikiem po wrzuceniu, które narzędzia nie wychodzą z przeglądarki i czego świadomie nie robię z uploadem.",
    published: "2026-03-01",
    updated: UPDATED,
    author: AUTHOR,
    sections: [
      {
        paragraphs: [
          "Wrzucenie CV, faktury albo nagrania z telefonu na obcą stronę to rozsądny powód do niepokoju. Piszę to jako osoba, która ten serwis buduje: nie chcę Twoich plików. Potrzebuję ich tylko na czas operacji, o którą prosisz.",
          "Są dwa tryby. Część narzędzi (kalkulatory, dekoder JWT, otwieracz wielu formatów) liczy się w przeglądarce — plik w ogóle nie jedzie na serwer. Konwersje audio/wideo i dokumenty Word → PDF idą na serwer, bo przeglądarka nie uciągnie LibreOffice ani FFmpeg przy większych plikach.",
        ],
      },
      {
        title: "Co dzieje się na serwerze",
        paragraphs: [
          "Połączenie jest HTTPS. Plik ląduje w tymczasowym katalogu, silnik (FFmpeg, Sharp, LibreOffice) robi zadanie, wynik wraca do Ciebie, źródło i wynik są usuwane po zakończeniu.",
          "Nie mam „archiwum na wszelki wypadek”. Nie odsprzedaję uploadów. Nie dokładam ich do zbioru treningowego AI — i nie wrzucam Twojego PDF-a do cudzego modelu, żeby „pomóc z layoutem”.",
          "Konto premium może pamiętać historię operacji (jaki konwerter, kiedy), nie same pliki. Szczegóły są w polityce prywatności.",
        ],
      },
      {
        title: "Czego tu świadomie nie ma",
        paragraphs: [
          "Nie pobieram filmów ani muzyki z YouTube, TikToka, Instagrama ani Spotify. To nie jest „wygoda”, tylko cudza treść i cudze prawa. Możesz wrzucić własny plik z dysku — nagranie z OBS, export z telefonu, skan.",
          "Nie proszę o hasła do chmur. Nie ma logowania przez Google Drive jako skrótu do zgrania całego dysku.",
        ],
      },
      {
        title: "Kiedy nie wrzucać pliku nawet do mnie",
        paragraphs: [
          "Dokument z PESEL, skan dowodu, nagranie ze spotkania objęte tajemnicą firmy — jeśli polityka pracodawcy zabrania narzędzi SaaS, użyj programu offline (LibreOffice, FFmpeg lokalnie).",
          "Jeśli musisz konwertować coś poufnego online, sprawdź czy narzędzie działa w przeglądarce (pasek adresu, brak paska postępu serwera). W Toolando przy kalkulatorach i części narzędzi utility tak właśnie jest.",
        ],
      },
      {
        title: "Jak weryfikuję to jako autor serwisu",
        paragraphs: [
          "Nie publikuję tu marketingowych obietnic „zero logów na zawsze” bez kontekstu. Serwer ma logi techniczne (błąd FFmpeg, kod statusu), żeby naprawiać awarie — ale nie buduję z nich biblioteki Twoich CV.",
          "Gdy dodaję nowe narzędzie, najpierw pytam: czy da się policzyć w przeglądarce? Jeśli tak (QR, JWT, procenty kredytu), nie ma sensu pchać bajtów na VPS. Upload zostawiam tylko tam, gdzie bez silnika po stronie serwera wynik byłby bezużyteczny.",
          "Polityka prywatności i regulamin są po to, żebyś mógł to sprawdzić bez zgadywania. Jeśli coś się zmieni w ścieżce pliku (np. dłuższe przechowywanie pod premium), napiszę to wprost — nie „w aktualizacji cookies”.",
        ],
      },
      {
        title: "Praktyczna hierarchia ryzyka",
        paragraphs: [
          "Najbezpieczniej: narzędzie w 100% lokalne w przeglądarce — plik nie opuszcza urządzenia.",
          "Środek: krótki upload HTTPS z kasowaniem po jobie — standard dla FFmpeg/LibreOffice w Toolando.",
          "Najgorzej (i tego tu nie ma): wrzucenie pliku do cudzego chatbota „żeby streścił umowę” albo do downloadera linków z platform VOD. Świadomie tego nie buduję, bo miesza prywatność z cudzą treścią.",
        ],
      },
    ],
  },
  "heic-iphone-jpg": {
    slug: "heic-iphone-jpg",
    title: "HEIC z iPhone’a na Windows — jak otworzyć i kiedy iść w JPG",
    description:
      "Dlaczego zdjęcia z iPhone’a nie otwierają się w Explorerze, co traci HEIC → JPG i jak testuję konwersję na Windows.",
    published: "2026-03-15",
    updated: UPDATED,
    author: AUTHOR,
    relatedFormats: ["heic", "jpg", "png"],
    relatedTools: ["heic-to-jpg", "heic-to-png"],
    sections: [
      {
        paragraphs: [
          "Apple od kilku lat zapisuje zdjęcia w HEIC, bo plik jest wyraźnie lżejszy niż JPG przy podobnej ostrości. Problem zaczyna się, gdy wrzucasz galerię na Windows, do starego Worda albo na drukarnię internetową, która HEIC nie zna. Explorer pokazuje ikonę, nie miniaturę. Outlook bywa kapryśny. Drukarnia odsyła maila.",
          "Testuję to na Windows właśnie dlatego, że tak wygląda najczęstszy bilet: „dostałem zdjęcia z iPhone’a i nic się nie otwiera”. HEIC → JPG w Toolando jest po to, żeby ten bilet zamykać, nie żeby „ulepszyć” zdjęcie.",
        ],
      },
      {
        title: "Co tracisz przy HEIC → JPG",
        paragraphs: [
          "JPG nie ma przezroczystości (przy zdjęciach z aparatu i tak jej nie ma). Kompresja JPEG dokłada artefakty — przy quality ~85 są zwykle niewidoczne na telefonie, przy 60 już widać niebo i skórę.",
          "Część metadanych (orientacja, data) przenosi się; GPS w EXIF też, jeśli był w HEIC. Jeśli wysyłasz zdjęcie domu publicznie, najpierw usuń EXIF — to osobny krok, nie dzieje się samo przy zmianie rozszerzenia.",
          "Live Photo to dwa pliki (obraz + krótki MOV). Konwerter obrazu nie zrobi z tego „żywego” JPG. Zostaje klatka.",
        ],
      },
      {
        title: "JPG czy PNG z HEIC",
        paragraphs: [
          "Zdjęcia — JPG. PNG z 12 Mpx z telefonu jest niepotrzebnie ciężki.",
          "Zrzut ekranu z iPhone’a zapisany jako HEIC (rzadziej) albo grafika z ostrym tekstem — PNG, jeśli zależy Ci na krawędziach.",
          "Na iPhonie możesz też wyłączyć problem u źródła: Ustawienia → Aparat → Formaty → Najbardziej kompatybilne. Wtedy nowe zdjęcia są JPG. Starych HEIC to nie przerobi.",
        ],
      },
      {
        title: "Czego nie robić",
        paragraphs: [
          "Nie konwertuj HEIC → JPG → HEIC „dla oszczędności”. Druga strata nic nie daje.",
          "Nie wysyłaj oryginałów HEIC do urzędu albo banku „bo mniejszy plik” — przyjmą JPG albo PDF, nie eksperymentalny kontener Apple.",
        ],
      },
    ],
  },
  "mp3-vs-wav": {
    slug: "mp3-vs-wav",
    title: "MP3 vs WAV — kiedy konwertować audio, a kiedy nie",
    description:
      "WAV nie leczy MP3. Kiedy pracować bezstratnie, kiedy wysłać MP3 i co sprawdzam po konwersji (długość, bitrate, odtwarzacz).",
    published: "2026-01-15",
    updated: UPDATED,
    author: AUTHOR,
    relatedFormats: ["mp3", "wav", "flac"],
    relatedTools: ["mp3-to-wav", "wav-to-mp3"],
    sections: [
      {
        paragraphs: [
          "MP3 jest mały, bo encoder wyrzuca dźwięki, których „i tak nie słychać”. WAV trzyma próbki — plik z minuty stereo 16-bit 44,1 kHz to około 10 MB, ten sam materiał w MP3 192 kbps to około 1,4 MB.",
          "Na telefonie do słuchania MP3 wystarczy. Do cięcia podcastu w Audacity albo do dalszego mixu wolę WAV albo FLAC, żebym nie dokładał kolejnej straty przy każdym eksporcie.",
        ],
      },
      {
        title: "MP3 → WAV nie przywraca jakości",
        paragraphs: [
          "To najczęstszy mit, który powtarzam wprost przy narzędziu. WAV po MP3 to opakowanie tej samej dziurawej warstwy. Spektrogram powyżej ~16 kHz zostaje pusty, jeśli źródło było 128 kbps.",
          "Kiedy i tak konwertuję MP3 → WAV: program do edycji nie importuje MP3, albo chcę zatrzymać dalszą degradację (cięcia, fade, normalizacja) na już stratnym materiale. To nie mastering z płyty analogowej.",
        ],
      },
      {
        title: "Kiedy WAV → MP3 ma sens",
        paragraphs: [
          "Wysyłka mailem, Messenger, WhatsApp — limity rozmiaru.",
          "Podcast albo demo do odsłuchu, nie do dalszej produkcji.",
          "Archiwum słuchawkowe na telefon. Wtedy trzymam WAV/FLAC na dysku i robię MP3 jako kopię na wyjście, nie odwrotnie.",
        ],
      },
      {
        title: "Jak sprawdzam wynik",
        paragraphs: [
          "Długość w sekundach ma się zgadzać ze źródłem (różnica ułamka sekundy bywa z encoderem, kilka sekund to błąd).",
          "Bitrate MP3: do mowy 96–128 kbps, do muzyki 192–256, 320 to praktyczny sufit formatu.",
          "Otwieram wynik w zwykłym odtwarzaczu Windows, nie tylko w przeglądarce. Jeśli VLC nie gra, użytkownik też będzie miał problem.",
        ],
      },
    ],
  },
  "lossy-vs-lossless": {
    slug: "lossy-vs-lossless",
    title: "Kompresja stratna i bezstratna — jak nie zjeść jakości przy konwersji",
    description:
      "MP3, JPG, H.264 vs FLAC, PNG, WAV. Jedna zasada: nie koduj dwa razy tego samego materiału stratnie.",
    published: "2026-03-10",
    updated: UPDATED,
    author: AUTHOR,
    relatedFormats: ["mp3", "flac", "jpg", "png", "wav"],
    sections: [
      {
        paragraphs: [
          "Stratne (MP3, AAC, JPG, HEIC, H.264) wyrzucają dane, żeby plik był mały. Bezstratne (FLAC, PNG, WAV, ZIP) pakują albo nie pakują, ale po rozpakowaniu masz bit w bit to samo.",
          "Kontener (MP4, MKV, PDF) to pudełko — sam z siebie nie mówi, czy środek jest stratny. MP4 z H.264 jest stratny. ZIP z PNG jest bezstratny względem tych PNG.",
        ],
      },
      {
        title: "Jedna strata, nie pętla",
        paragraphs: [
          "Każde ponowne zakodowanie stratne dokłada artefakty. JPG z Messengera wgrany jeszcze raz na Facebooka i znowu skompresowany do maila wygląda jak akwarela. Tego nie naprawi konwerter.",
          "W audio to samo: MP3 → AAC → MP3. Nie rób tego. Jeśli musisz zmienić kontener, trzymaj się transkodowania tylko gdy odtwarzacz naprawdę nie łyka źródła.",
        ],
      },
      {
        title: "Przykłady z testów",
        paragraphs: [
          "Muzyka: FLAC w archiwum, MP3 na telefon. Nigdy FLAC → MP3 → FLAC.",
          "Zdjęcia: z aparatu JPG jest już stratny — dalej kompresuj ostrożnie (quality 80+), albo idź w WebP raz, na publikację.",
          "Zrzuty UI: PNG. JPG na tekście w interfejsie robi „błoto” wokół liter.",
          "Wideo: nie przekodowuj 4K H.264 do H.264 „dla kompatybilności”, jeśli plik już gra. Kompresja przed wysyłką — tak, ale jedna, ze świadomym bitrate.",
        ],
      },
      {
        title: "Szybki test zanim klikniesz",
        paragraphs: [
          "Czy odbiorca otworzy oryginał? Jeśli tak — nie konwertuj.",
          "Czy idziesz ze stratnego do bezstratnego i liczysz na cud? Nie licz.",
          "Czy to druga konwersja tego samego pliku w tym tygodniu? Zatrzymaj się i wróć do najstarszej kopii.",
        ],
      },
    ],
  },
  "compress-images-without-quality-loss": {
    slug: "compress-images-without-quality-loss",
    title: "Kompresja JPG i PNG — jak zejść z wagi bez widocznego szumu",
    description:
      "Kompresja to nie zmiana formatu. Jakie quality biorę na produkt 2000 px, kiedy WebP, a kiedy nie ruszać PNG z tekstem.",
    published: "2026-05-20",
    updated: UPDATED,
    author: AUTHOR,
    relatedFormats: ["jpg", "png", "webp"],
    relatedTools: ["kompresor-obrazow", "jpg-to-webp", "png-to-webp"],
    sections: [
      {
        paragraphs: [
          "Kompresja zostawia rozszerzenie: nadal JPG albo PNG, tylko lżejszy. Konwersja do WebP to już inny format — często mniejszy przy tej samej ostrości, ale drukarnia i część urzędów chcą JPG.",
          "Na kompresorze Toolando testowałem zdjęcia produktowe 2000×2000. Przy jakości około 80% waga spadała o 40–60% i na monitorze nie widziałem artefaktów. Przy 50% niebo i tło zaczynały „pływać”.",
        ],
      },
      {
        title: "Najpierw rozdzielczość, potem quality",
        paragraphs: [
          "Zdjęcie 4000 px wrzucone na bloga, który pokazuje 800 px, to marnowanie. Zmniejsz krawędź do realnego wyświetlania (np. 1600 px na hero), dopiero potem kręć quality.",
          "Miniatura sklepu: 800 px, JPG 75–85 albo WebP. Hero: 1600–1920 px. Nie trzymaj 12 Mpx „na ostrość” w CMS — przeglądarka i tak to przeskaluje, tylko wolniej.",
        ],
      },
      {
        title: "PNG z tekstem nie lubi agresji",
        paragraphs: [
          "Zrzut ekranu, wykres, UI — PNG albo WebP bezstratny. JPG na kodzie i etykietach robi kolorowy szum przy krawędziach.",
          "Logo z przezroczystością: PNG. Kompresja PNG (opti/oxipng) może zejść z wagi bez ruszania pikseli. Nie zamieniaj logo w JPG, bo zjesz alpha.",
        ],
      },
      {
        title: "Czego nie robić",
        paragraphs: [
          "Nie kompresuj tego samego JPG pięć razy. Każdy zapis dokłada DCT.",
          "Nie oczekuj, że kompresor „naprawi” już zjechany plik z Messengera. Źródło musi być najbliżej aparatu.",
          "Jeśli CMS wymaga JPG, kompresuj JPG. Jeśli masz swoją stronę — WebP z JPG w <picture>.",
        ],
      },
    ],
  },
  "docx-pdf-workflow": {
    slug: "docx-pdf-workflow",
    title: "DOCX → PDF w robocie biurowej — czcionki, tabele i LibreOffice",
    description:
      "Dlaczego CV i umowy wysyłam jako PDF, kiedy PDF → DOCX psuje layout i jak na serwerze odpalam LibreOffice zamiast silnika w przeglądarce.",
    published: "2026-06-01",
    updated: UPDATED,
    author: AUTHOR,
    relatedFormats: ["docx", "pdf", "odt"],
    relatedTools: ["docx-to-pdf", "pdf-to-docx", "odt-to-docx"],
    sections: [
      {
        paragraphs: [
          "DOCX jest do edycji. PDF jest do odczytu: ten sam układ na Windows, Macu i telefonie. CV, oferta i umowa idą u mnie do PDF zanim wyjdą z domu. Odbiorca nie zmieni akapitu przez przypadek i nie dostanie Calibri zamiast kroju, którego nie ma.",
          "Na Toolando Word → PDF idzie przez LibreOffice na serwerze. Świadomie nie zostawiam tego w czystym JavaScripcie w przeglądarce: tabele, nagłówki i polskie znaki sypią się, gdy silnik „zgaduje” layout. LibreOffice jest nudny i przewidywalny — o to chodzi.",
        ],
      },
      {
        title: "Kiedy DOCX → PDF",
        paragraphs: [
          "Wysyłka do rekrutera, klienta, urzędu.",
          "Wydruk i archiwum. PDF/A to osobna historia; zwykły PDF wystarcza do codziennej korespondencji.",
          "Gdy w dokumencie są nietypowe czcionki — osadzają się w PDF. W DOCX druga strona musi mieć ten sam font.",
        ],
      },
      {
        title: "Kiedy nie robić PDF → DOCX",
        paragraphs: [
          "Skany faktur i umów z podpisem odręcznym — to obrazy w PDF. Konwersja nie da magicznego, edytowalnego Worda. OCR to inna usługa i inna jakość.",
          "Katalogi, broszury, wielokolumnowy layout. DOCX spróbuje ułożyć to na nowo i rozjedzie paginację. Lepiej skopiować fragment tekstu albo poprosić o źródło.",
          "PDF z podpisem cyfrowym — po konwersji podpis znika albo staje się nieważny.",
        ],
      },
      {
        title: "Jak sprawdzam wynik",
        paragraphs: [
          "Otwieram PDF i patrzę na tabele: czy krawędzie się trzymają, czy polskie znaki nie wpadły w kwadraty.",
          "Jeśli źródło było ODT z LibreOffice, często lepiej iść ODT → PDF niż ODT → DOCX → PDF (jeden krok mniej zgadywania).",
          "Dane wrażliwe: PESEL, numery kont. Konwersja ich nie szyfruje. HTTPS chroni transfer, nie Twoją kopię na pulpicie odbiorcy.",
        ],
      },
    ],
  },
  "extract-audio-from-video": {
    slug: "extract-audio-from-video",
    title: "Ścieżka audio z własnego wideo — legalnie, bez ściągania z YouTube",
    description:
      "MP4/MOV/MKV → MP3 albo WAV z pliku, który już masz. Czemu Toolando nie pobiera filmów z internetu i jak nie pomylić extractu z piractwem.",
    published: "2026-02-10",
    updated: UPDATED,
    author: AUTHOR,
    relatedFormats: ["mp4", "mp3", "wav", "flac"],
    relatedTools: ["mp4-to-mp3", "mp4-to-wav"],
    sections: [
      {
        paragraphs: [
          "Masz nagranie z Zoomu, z kamery, z OBS albo prezentację MP4 i chcesz sam dźwięk — podcast, transkrypcję, podkład. Extract audio to skopiowanie ścieżki (albo lekkie przekodowanie) z kontenera wideo. To Twoja kopia Twojego pliku.",
          "Świadomie nie robię downloadera z YouTube, TikToka ani Spotify. To cudza treść, cudze CDN i cudze regulaminy. AdSense i tak by to zatopił, ale przede wszystkim nie chcę serwisu, który udaje „wygodny YouTube MP3”.",
        ],
      },
      {
        title: "MP3, WAV czy FLAC z wideo",
        paragraphs: [
          "Do słuchania i wysyłki — MP3 128–192 kbps przy mowie, 192+ przy muzyce z koncertu, który sam nagrałeś.",
          "Do dalszej edycji — WAV albo FLAC. Extract do MP3 i potem „poprawianie” w DAW to podwójna strata, jeśli źródło miało lepszą ścieżkę (AAC w MP4 często jest przyzwoite; nie koduj w dół bez potrzeby).",
          "Jeśli w MP4 audio już jest AAC i chcesz tylko „wyjąć” je bez re-encode — to idealny przypadek. Re-encode do MP3 rób, gdy odtwarzacz albo hosting podcastu wymaga MPEG.",
        ],
      },
      {
        title: "Praktyczne haczyki",
        paragraphs: [
          "Długość audio powinna trzymać się wideo. Jeśli MP3 jest o minutę krótszy, FFmpeg urwał strumień albo plik źródłowy jest uszkodzony.",
          "Dwa języki / dwa tracki — konwerter bierze zwykle domyślną ścieżkę. Jeśli potrzebujesz komentarza reżysera, wybierz plik albo program, który pozwala wskazać stream.",
          "Nie wrzucaj cudzego ripa „bo link nie działa”. Albo masz plik, albo nie.",
        ],
      },
    ],
  },
  "remove-exif-privacy-guide": {
    slug: "remove-exif-privacy-guide",
    title: "EXIF w zdjęciach — GPS, telefon i to, czego nie widać na miniaturze",
    description:
      "Co siedzi w JPEG/HEIC poza pikselami, kiedy to zostawić fotografowi i jak ściągam metadane przed publikacją.",
    published: "2026-08-02",
    updated: UPDATED,
    author: AUTHOR,
    relatedFormats: ["jpg", "png", "heic"],
    relatedTools: ["usun-exif", "kompresor-obrazow"],
    sections: [
      {
        paragraphs: [
          "Zdjęcie z telefonu to nie tylko piksele. W EXIF bywa GPS (dokładny do domu), model aparatu, godzina, czasem miniatura podglądu. Instagram często to obcina. Własna strona, newsletter i załącznik w mailu — nie zawsze.",
          "Zanim opublikuję zdjęcie dzieci, wnętrza albo dokumentów na biurku, zdejmuję EXIF. W Toolando to osobne narzędzie: piksele zostają, metadane wylatują. Rozdzielczość się nie zmienia.",
        ],
      },
      {
        title: "Kiedy EXIF zostawić",
        paragraphs: [
          "Archiwum własne, Lightroom, katalog klienta — data i obiektyw są pożyteczne.",
          "Wysyłka do fotografa do retuszu, jeśli tak się umówiliście.",
          "Nie zostawiaj GPS w pliku na ogólnodostępny FTP albo w ofercie mieszkania z adresem w nazwie pliku. To podwójna informacja.",
        ],
      },
      {
        title: "HEIC i PNG",
        paragraphs: [
          "HEIC też niesie metadane. Konwersja HEIC → JPG może je przenieść. Usuń EXIF po konwersji albo na końcu pipeline, nie „gdzieś po drodze i zapomniane”.",
          "PNG bywa biedniejszy w EXIF, ale bywa tEXt i inne chunki. Nie zakładaj, że PNG = prywatny.",
        ],
      },
      {
        title: "To nie jest anonimizacja człowieka na zdjęciu",
        paragraphs: [
          "Ściągnięcie GPS nie zamazuje twarzy i nie usuwa numeru domu z kadru. EXIF to warstwa pliku, nie cenzura obrazu.",
          "Po usunięciu metadanych nadal możesz skompresować albo dodać znak wodny — kolejność: najpierw treść/kadr, potem EXIF, potem publikacja.",
        ],
      },
    ],
  },
  "prepare-images-for-web": {
    slug: "prepare-images-for-web",
    title: "Obrazy pod stronę www — rozdzielczość, JPG, WebP i LCP",
    description:
      "Jak przygotowuję zdjęcia na bloga i sklep: szerokość w px, waga pliku, WebP z fallbackiem i czemu nie wrzucam 12 Mpx do WordPressa.",
    published: "2026-05-15",
    updated: UPDATED,
    author: AUTHOR,
    relatedFormats: ["jpg", "webp", "avif", "png"],
    relatedTools: ["jpg-to-webp", "png-to-webp", "png-to-avif"],
    sections: [
      {
        paragraphs: [
          "Największy winowajca wolnej strony to nie „zły hosting”, tylko hero 5 MB prosto z aparatu. Przeglądarka ściąga megapiksele, których layout i tak nie pokazuje.",
          "Zanim cokolwiek konwertuję, pytam: ile pikseli szerokości naprawdę widać? Baner na pełną szerokość — 1600–1920 px. Karta produktu — 800–1200. Miniatura — 400–600. Reszta to ego fotografa, nie UX.",
        ],
      },
      {
        title: "Format",
        paragraphs: [
          "JPG jest nudny i działa wszędzie, w tym w mailu i starym CMS.",
          "WebP jest zwykle 25–35% lżejszy przy podobnej ostrości. Nowoczesne przeglądarki go łykają. Fallback JPG w <picture> zostawiam, gdy muszę obsłużyć skrajności.",
          "AVIF bywa jeszcze lżejszy, wsparcie Safari historycznie spóźnione — nie robię z tego religii na małej stronie. WebP wystarcza.",
          "Logo i ikony: SVG gdy się da, PNG gdy rastrowanie. Nie pakuj logo w JPG.",
        ],
      },
      {
        title: "Checklist przed publikacją",
        paragraphs: [
          "Przeskaluj do docelowej szerokości.",
          "Wybierz format (JPG / WebP / PNG).",
          "Cel wagowy, nie dogmat: miniatura < 100–200 KB, duże zdjęcie na wpisie < 400–500 KB, chyba że to lightbox w pełnej rozdzielczości (wtedy osobny plik, nie ten sam co w siatce).",
          "Po wrzuceniu patrzę na LCP w PageSpeed albo przynajmniej na zakładkę Network: czy hero to jeden rozsądny request, czy trzy kopie tego samego.",
        ],
      },
      {
        title: "Czego nie robić",
        paragraphs: [
          "Nie zapisuj banera jako JPG w kółko w Photoshopie „jeszcze trochę mniejszy”. Wróć do źródła i zrób jeden eksport.",
          "Nie mieszaj sRGB z przypadkowym profilem, którego przeglądarka źle zinterpretuje — na web idzie sRGB.",
        ],
      },
    ],
  },
  "flac-music-archive-guide": {
    slug: "flac-music-archive-guide",
    title: "FLAC jako archiwum muzyki — kiedy MP3 jest kopią, nie źródłem",
    description:
      "FLAC trzyma bity, MP3 jest do słuchania w autobusie. Jak układam bibliotekę i czemu nie koduję FLAC z MP3.",
    published: "2026-07-16",
    updated: UPDATED,
    author: AUTHOR,
    relatedFormats: ["flac", "mp3", "wav"],
    relatedTools: ["flac-to-mp3", "wav-to-flac"],
    sections: [
      {
        paragraphs: [
          "FLAC to bezstratna kompresja audio: mniejszy niż WAV, po dekodowaniu ten sam PCM. MP3 jest do słuchania, nie do archiwum. Jeśli kupujesz albo zgrywasz muzykę, którą chcesz mieć za 10 lat, FLAC (albo oryginalny WAV z sesji) jest źródłem. MP3 jest pochodną.",
          "Nie koduję FLAC z gotowego MP3. To nie jest „upgrade”. To większy plik z tą samą stratą. FLAC ma sens z CD, z WAV z DAW, z pliku który już jest bezstratny.",
        ],
      },
      {
        title: "Jak to układam",
        paragraphs: [
          "Dysk / NAS: FLAC albo WAV. Tagowanie (artysta, album) w metadanych FLAC, nie w nazwie `track (1).mp3`.",
          "Telefon: MP3 albo AAC wygenerowane raz z archiwum. Jak zginie telefon, źródło zostaje.",
          "Wysyłka znajomemu: MP3. Nikt nie chce 400 MB na jeden album na WhatsAppie.",
        ],
      },
      {
        title: "Odtwarzacze",
        paragraphs: [
          "Komputer i telefon z 2020+ zwykle grają FLAC. Radio w aucie z 2012 — niekoniecznie. Dlatego kopia MP3 na pendrive do samochodu, nie zamiast archiwum.",
          "Po konwersji FLAC → MP3 sprawdzam długość i czy tagi (tytuł) przeszły. Puste tagi to nie błąd dźwięku, ale irytacja w samochodzie.",
        ],
      },
      {
        title: "Czego nie obiecywać",
        paragraphs: [
          "FLAC nie sprawi, że słaba realizacja zabrzmi jak mastering z Abbey Road.",
          "„Hi-res” 24/96 z YouTube ripa nie istnieje. Jeśli źródło było 16/44,1 ze streamu, zostaw 16/44,1.",
        ],
      },
    ],
  },
  "toolando-editorial-standards": {
    slug: "toolando-editorial-standards",
    title: "Standardy redakcyjne Toolando — skąd się biorą teksty i testy",
    description:
      "Kto pisze poradniki, jak testuję konwertery na realnych plikach i czego nie publikuję, nawet jeśli dobrze klikają się w SEO.",
    published: "2026-07-01",
    updated: UPDATED,
    author: AUTHOR,
    sections: [
      {
        paragraphs: [
          "Toolando piszę i koduję sam. Nie ma redakcji z pięciu freelancerów i hurtowni artykułów. Jeśli w poradniku jest konkret („LibreOffice na serwerze”, „HEIC na Windows”, „MP3 → WAV nie wraca”), to dlatego, że odpaliłem to na własnych plikach albo na pipeline, który sam utrzymuję.",
          "SEO nie dyktuje wniosku. Jeśli konwersja jest głupia, piszę że jest głupia — nawet gdy fraza „mp3 na wav” ciągnie ruch.",
        ],
      },
      {
        title: "Jak testuję",
        paragraphs: [
          "Audio: długość, bitrate, czy wynik otwiera się w zwykłym odtwarzaczu.",
          "Obrazy: przezroczystość PNG, artefakty JPG, czy WebP/AVIF w ogóle otworzy się tam, gdzie użytkownik go potrzebuje.",
          "Dokumenty: tabele i polskie znaki po DOCX → PDF przez LibreOffice, nie przez „mniej więcej” w przeglądarce.",
          "HEIC: Windows bez rozszerzeń Apple — bo taki jest scenariusz, nie Mac z podglądem.",
        ],
      },
      {
        title: "Czego nie publikuję",
        paragraphs: [
          "Poradników „jak ściągnąć film z YouTube”.",
          "Obietnicy 100% jakości przy transkodowaniu stratnym.",
          "Masowych stron-widm pod każde rozszerzenie bez treści, która różni się czymś więcej niż nazwą formatu. Część konwerterów jest w katalogu, bo ktoś ich potrzebuje; nie wszystkie idą do indeksu Google.",
        ],
      },
      {
        title: "Błędy i kontakt",
        paragraphs: [
          "Jeśli znajdziesz konkret, który się zdezaktualizował (wsparcie Safari, stawka, zachowanie silnika), napisz przez stronę kontaktu. Poprawiam źródło, nie doklejam disclaimeru na dole.",
          "Reklamy, jeśli są, nie redagują poradników. Tekst nie jest zamówiony przez reklamodawcę formatu.",
        ],
      },
    ],
  },
}
