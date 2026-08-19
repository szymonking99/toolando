import type { Locale } from "./config"
import type { UtilityToolId, UtilityCategory } from "@/lib/utility-tools"
import { extraCategoryLabels, extraUtilityMaps } from "./utility-meta/extra-locales"

export type UtilityMeta = {
  category: string
  name: string
  description: string
  steps: string[]
  faq: { q: string; a: string }[]
}

type UtilityMetaMap = Record<UtilityToolId, UtilityMeta>

const categoryLabels: Record<string, Record<UtilityCategory, string>> = {
  pl: {
    finance: "Finanse",
    time: "Czas i daty",
    units: "Jednostki",
    text: "Tekst",
    dev: "Dla developerów",
    media: "Media",
    network: "Sieć",
  },
  en: {
    finance: "Finance",
    time: "Time & dates",
    units: "Units",
    text: "Text",
    dev: "Developer",
    media: "Media",
    network: "Network",
  },
  de: {
    finance: "Finanzen",
    time: "Zeit & Daten",
    units: "Einheiten",
    text: "Text",
    dev: "Entwickler",
    media: "Medien",
    network: "Netzwerk",
  },
  es: {
    finance: "Finanzas",
    time: "Tiempo y fechas",
    units: "Unidades",
    text: "Texto",
    dev: "Desarrolladores",
    media: "Medios",
    network: "Red",
  },
  uk: {
    finance: "Фінанси",
    time: "Час і дати",
    units: "Одиниці",
    text: "Текст",
    dev: "Для розробників",
    media: "Медіа",
    network: "Мережа",
  },
  ...extraCategoryLabels,
}

const pl: UtilityMetaMap = {
  "przelicznik-walut": {
    category: "Finanse",
    name: "Przelicznik walut",
    description:
      "Przelicz waluty online według aktualnych kursów ECB. PLN, EUR, USD i dziesiątki innych par — bez rejestracji.",
    steps: [
      "Wpisz kwotę i wybierz walutę źródłową.",
      "Wybierz walutę docelową.",
      "Odczytaj wynik i kurs z dnia.",
    ],
    faq: [
      {
        q: "Skąd pochodzą kursy?",
        a: "Kursy pochodzą z Europejskiego Banku Centralnego (Frankfurter API) i są aktualizowane codziennie w dni robocze.",
      },
      {
        q: "Czy kursy są w czasie rzeczywistym?",
        a: "To oficjalne kursy referencyjne ECB, nie kursy kantorów ani banków. Do płatności sprawdź kurs u swojego dostawcy.",
      },
    ],
  },
  "kalkulator-dat": {
    category: "Czas i daty",
    name: "Kalkulator dat",
    description:
      "Oblicz liczbę dni między dwiema datami, dni robocze oraz dzień tygodnia. Przydatny do umów, urlopów i terminów.",
    steps: [
      "Wybierz datę początkową i końcową.",
      "Zobacz różnicę w dniach i tygodniach.",
      "Opcjonalnie policz tylko dni robocze (bez sobót i niedziel).",
    ],
    faq: [
      {
        q: "Czy święta państwowe są wykluczane?",
        a: "Domyślnie wykluczamy soboty i niedziele. Święta zależą od kraju — możesz je doliczyć ręcznie.",
      },
    ],
  },
  "strefy-czasowe": {
    category: "Czas i daty",
    name: "Różnica stref czasowych",
    description:
      "Porównaj godziny w miastach na świecie, zobacz różnicę stref i aktualny czas lokalny na prostej mapie.",
    steps: [
      "Wybierz miasto źródłowe i docelowe.",
      "Sprawdź aktualny czas w obu miejscach.",
      "Zobacz różnicę godzin i lokalizację na mapie.",
    ],
    faq: [
      {
        q: "Czy uwzględniacie czas letni?",
        a: "Tak — używamy stref IANA (np. Europe/Warsaw), które automatycznie uwzględniają DST.",
      },
    ],
  },
  "przelicznik-jednostek": {
    category: "Jednostki",
    name: "Przelicznik jednostek",
    description:
      "Przelicz długość, masę, temperaturę i objętość: cm↔cale, kg↔lb, °C↔°F i więcej.",
    steps: [
      "Wybierz kategorię jednostek.",
      "Wpisz wartość i jednostki.",
      "Odczytaj wynik natychmiast.",
    ],
    faq: [
      {
        q: "Czy przeliczenia są dokładne?",
        a: "Tak — używamy standardowych współczynników SI. Temperatura ma osobne formuły (nie proste mnożenie).",
      },
    ],
  },
  "kalkulator-vat": {
    category: "Finanse",
    name: "Kalkulator VAT i procentów",
    description:
      "Dodaj lub odejmij VAT (23%, 8%, 5%), policz netto/brutto oraz proste procenty od kwoty.",
    steps: [
      "Wpisz kwotę netto lub brutto.",
      "Wybierz stawkę VAT lub własny procent.",
      "Zobacz rozbicie netto, VAT i brutto.",
    ],
    faq: [
      {
        q: "Jakie stawki VAT są w Polsce?",
        a: "Standardowo 23%, obniżone 8% i 5%. Możesz też wpisać własną stawkę.",
      },
    ],
  },
  "kalkulator-wieku": {
    category: "Czas i daty",
    name: "Kalkulator wieku i dni do daty",
    description:
      "Oblicz dokładny wiek w latach, miesiącach i dniach albo ile dni zostało do wybranej daty.",
    steps: [
      "Podaj datę urodzenia lub datę docelową.",
      "Zobacz wiek lub odliczanie.",
      "Sprawdź też następne urodziny.",
    ],
    faq: [
      {
        q: "Jak liczony jest wiek?",
        a: "Od daty urodzenia do dziś, z uwzględnieniem miesięcy i dni — nie tylko lat kalendarzowych.",
      },
    ],
  },
  "generator-hasel": {
    category: "Dla developerów",
    name: "Generator haseł",
    description:
      "Wygeneruj silne hasło lokalnie w przeglądarce. Ustaw długość, znaki specjalne i cyfry — nic nie wysyłamy na serwer.",
    steps: [
      "Ustaw długość i opcje znaków.",
      "Kliknij Generuj.",
      "Skopiuj hasło jednym kliknięciem.",
    ],
    faq: [
      {
        q: "Czy hasło trafia na serwer?",
        a: "Nie — generowanie odbywa się w pełni w Twojej przeglądarce.",
      },
    ],
  },
  "licznik-znakow": {
    category: "Tekst",
    name: "Licznik znaków i słów",
    description:
      "Policz znaki, słowa, zdania i akapity. Przydatne do SEO, postów społecznościowych i limitów formularzy.",
    steps: [
      "Wklej lub napisz tekst.",
      "Zobacz statystyki na żywo.",
      "Sprawdź długość bez spacji.",
    ],
    faq: [
      {
        q: "Jak liczone są słowa?",
        a: "Słowa to sekwencje znaków oddzielone spacją lub nową linią.",
      },
    ],
  },
  "generator-qr": {
    category: "Dla developerów",
    name: "Generator kodów QR",
    description:
      "Utwórz kod QR z linku, tekstu lub kontaktu i pobierz go jako PNG. Działa lokalnie w przeglądarce.",
    steps: [
      "Wpisz tekst lub URL.",
      "Wygeneruj podgląd QR.",
      "Pobierz obraz PNG.",
    ],
    faq: [
      {
        q: "Czy dane QR są wysyłane?",
        a: "Nie — kod powstaje lokalnie. Nie przechowujemy treści.",
      },
    ],
  },
  "kalkulator-bitrate": {
    category: "Media",
    name: "Kalkulator rozmiaru pliku i bitrate",
    description:
      "Oblicz, ile zajmie plik audio/wideo przy danym bitrate i czasie — albo jaki bitrate zmieści się w limicie MB.",
    steps: [
      "Wybierz tryb: rozmiar z bitrate lub bitrate z limitu.",
      "Podaj czas trwania i wartości.",
      "Odczytaj wynik w MB / kbps.",
    ],
    faq: [
      {
        q: "Czy to uwzględnia kontener (MP4)?",
        a: "To szacunek czystego strumienia. Kontenery i ścieżki audio dodają zwykle kilka procent.",
      },
    ],
  },
  "konwerter-kolorow": {
    category: "Dla developerów",
    name: "Konwerter kolorów HEX RGB HSL",
    description:
      "Konwertuj kolory między HEX, RGB i HSL oraz sprawdź kontrast WCAG względem tła.",
    steps: [
      "Wpisz kolor w dowolnym formacie.",
      "Zobacz odpowiedniki HEX/RGB/HSL.",
      "Sprawdź kontrast względem wybranego tła.",
    ],
    faq: [
      {
        q: "Co oznacza AA / AAA?",
        a: "To poziomy dostępności WCAG dla kontrastu tekstu względem tła.",
      },
    ],
  },
  base64: {
    category: "Dla developerów",
    name: "Base64 encode / decode",
    description:
      "Zakoduj tekst do Base64 lub zdekoduj Base64 z powrotem. Lokalnie, bez wysyłania danych.",
    steps: [
      "Wklej tekst lub Base64.",
      "Wybierz Encode albo Decode.",
      "Skopiuj wynik.",
    ],
    faq: [
      {
        q: "Czy działa z UTF-8?",
        a: "Tak — obsługujemy znaki Unicode (np. polskie litery).",
      },
    ],
  },
  "unix-timestamp": {
    category: "Dla developerów",
    name: "Unix timestamp ↔ data",
    description:
      "Przelicz timestamp Uniksa (sekundy/ms) na datę i odwrotnie. Przydatne przy logach i API.",
    steps: [
      "Wklej timestamp lub wybierz datę.",
      "Zobacz wynik w ISO i lokalnej strefie.",
      "Skopiuj wartość.",
    ],
    faq: [
      {
        q: "Sekundy czy milisekundy?",
        a: "Automatycznie rozpoznajemy długość. Możesz też wymusić jednostkę.",
      },
    ],
  },
  "generator-uuid": {
    category: "Dla developerów",
    name: "Generator UUID",
    description:
      "Wygeneruj UUID v4 (losowy) jednym kliknięciem. Możesz wygenerować wiele naraz.",
    steps: [
      "Ustaw liczbę UUID.",
      "Kliknij Generuj.",
      "Skopiuj listę.",
    ],
    faq: [
      {
        q: "Jaka wersja UUID?",
        a: "UUID v4 — losowy, zgodny z RFC 4122, generowany w przeglądarce.",
      },
    ],
  },
  "generator-hash": {
    category: "Dla developerów",
    name: "Hash SHA / MD5",
    description:
      "Policz skrót SHA-1, SHA-256, SHA-512 lub MD5 z tekstu. Lokalnie przez Web Crypto.",
    steps: [
      "Wklej tekst.",
      "Wybierz algorytm.",
      "Skopiuj hex hash.",
    ],
    faq: [
      {
        q: "Czy MD5 jest bezpieczne?",
        a: "MD5 nie nadaje się do haseł. Używaj SHA-256+ do bezpieczeństwa; MD5 tylko do sum kontrolnych.",
      },
    ],
  },
  "json-formatter": {
    category: "Dla developerów",
    name: "Formatter JSON",
    description: "Formatuj i minifikuj JSON w przeglądarce — bez wysyłania danych na serwer.",
    steps: ["Wklej JSON.", "Kliknij Formatuj lub Minifikuj.", "Skopiuj wynik."],
    faq: [{ q: "Czy dane są wysyłane?", a: "Nie — przetwarzanie odbywa się lokalnie w przeglądarce." }],
  },
  "diff-tekstu": {
    category: "Tekst",
    name: "Porównanie tekstu (diff)",
    description: "Porównaj dwa fragmenty tekstu linia po linii i zobacz różnice.",
    steps: ["Wklej tekst A i B.", "Przejrzyj podświetlone różnice."],
    faq: [{ q: "Czy to pełny diff?", a: "To porównanie linia po linii — idealne do krótkich fragmentów i list." }],
  },
  "konwerter-wielkosci-liter": {
    category: "Tekst",
    name: "Konwerter wielkości liter",
    description: "Zmień tekst na wielkie, małe litery, Title Case lub sentence case.",
    steps: ["Wklej tekst.", "Wybierz tryb.", "Skopiuj wynik."],
    faq: [],
  },
  "usun-duplikaty-linii": {
    category: "Tekst",
    name: "Usuń duplikaty linii",
    description: "Usuń powtarzające się linie z listy e-maili, SKU lub tagów.",
    steps: ["Wklej listę.", "Ustaw opcje.", "Skopiuj oczyszczoną listę."],
    faq: [],
  },
  "dekoder-jwt": {
    category: "Dla developerów",
    name: "Dekoder JWT",
    description: "Odczytaj nagłówek i payload tokena JWT bez weryfikacji podpisu.",
    steps: ["Wklej token.", "Przejrzyj header i payload."],
    faq: [{ q: "Czy to weryfikuje podpis?", a: "Nie — tylko dekoduje Base64URL. Podpisu nie sprawdzamy." }],
  },
  "walidator-nip-pesel": {
    category: "Dla developerów",
    name: "Walidator NIP / PESEL / REGON",
    description: "Sprawdź poprawność numeru NIP, PESEL lub REGON według sumy kontrolnej.",
    steps: ["Wpisz numer.", "Zobacz wynik walidacji."],
    faq: [{ q: "Czy to sprawdza w rejestrze GUS?", a: "Nie — tylko sumę kontrolną i długość numeru." }],
  },
  "kalkulator-kredytu": {
    category: "Finanse",
    name: "Kalkulator kredytu",
    description: "Oblicz ratę annuitetową, sumę spłaty i koszt odsetek.",
    steps: ["Podaj kwotę, oprocentowanie i okres.", "Odczytaj ratę miesięczną."],
    faq: [{ q: "Czy uwzględnia prowizje?", a: "To uproszczona symulacja — bez prowizji bankowych i ubezpieczeń." }],
  },
  "markdown-preview": {
    category: "Tekst",
    name: "Podgląd Markdown",
    description: "Pisz Markdown i zobacz podgląd HTML na żywo w przeglądarce.",
    steps: ["Wpisz Markdown po lewej.", "Podgląd aktualizuje się automatycznie."],
    faq: [],
  },
  "sila-hasla": {
    category: "Dla developerów",
    name: "Siła hasła",
    description: "Oceń siłę hasła według długości, zróżnicowania znaków i typowych wzorców.",
    steps: ["Wpisz hasło.", "Zobacz ocenę i wskazówki."],
    faq: [{ q: "Czy hasło jest wysyłane?", a: "Nie — ocena dzieje się lokalnie w przeglądarce." }],
  },
  "konwerter-napisow": {
    category: "Media",
    name: "Konwerter napisów SRT / VTT",
    description: "Konwertuj napisy między formatami SRT i WebVTT.",
    steps: ["Wklej napisy.", "Wybierz kierunek lub auto.", "Skopiuj wynik."],
    faq: [],
  },
  "generator-nazw-plikow": {
    category: "Tekst",
    name: "Generator nazw plików (batch)",
    description: "Masowo zmieniaj nazwy plików według wzorca z {name}, {ext}, {index}.",
    steps: ["Wklej listę plików.", "Ustaw wzorzec.", "Skopiuj nowe nazwy."],
    faq: [],
  },
  "walidator-iban": {
    category: "Dla developerów",
    name: "Walidator IBAN",
    description: "Sprawdź poprawność numeru IBAN (suma kontrolna mod 97 i długość dla kraju).",
    steps: ["Wklej numer IBAN.", "Zobacz sformatowany wynik i walidację."],
    faq: [{ q: "Czy sprawdza konto w banku?", a: "Nie — tylko format i sumę kontrolną IBAN." }],
  },
  "kalkulator-b2b": {
    category: "Finanse",
    name: "Kalkulator B2B vs etat",
    description: "Porównaj „na rękę” etat brutto z fakturą B2B (ryczałt lub liniowy).",
    steps: ["Podaj brutto etatu i przychód B2B.", "Wybierz formę opodatkowania.", "Porównaj wyniki."],
    faq: [{ q: "Czy to porada podatkowa?", a: "Nie — uproszczona symulacja do rozmowy z księgowym." }],
  },
  "test-ping": {
    category: "Sieć",
    name: "Test Ping",
    description: "Zmierz czas odpowiedzi serwera (latency) dla dowolnej domeny lub adresu IP.",
    steps: ["Wpisz adres hosta (np. google.com).", "Kliknij Ping.", "Odczytaj czasy odpowiedzi i średnią."],
    faq: [
      { q: "Czy to prawdziwy ICMP ping?", a: "Nie — mierzymy czas HTTP HEAD request z serwera, bo ICMP jest niedostępne w środowisku serverless." },
      { q: "Dlaczego czasy mogą się różnić?", a: "Ping zależy od lokalizacji serwera, obciążenia sieci i trasy pakietów." },
    ],
  },
  "dns-lookup": {
    category: "Sieć",
    name: "DNS Lookup",
    description: "Sprawdź rekordy DNS dla dowolnej domeny — A, AAAA, MX, CNAME, NS, TXT, SOA.",
    steps: ["Wpisz domenę.", "Wybierz typ rekordu.", "Zobacz wyniki."],
    faq: [
      { q: "Skąd pochodzą wyniki?", a: "Zapytania DNS są wykonywane z serwera — wyniki mogą się różnić od Twojego lokalnego resolvera." },
      { q: "Czy mogę sprawdzić subdomenę?", a: "Tak — wpisz pełną subdomenę, np. mail.example.com." },
    ],
  },
  "speedtest": {
    category: "Sieć",
    name: "Test prędkości",
    description: "Zmierz prędkość pobierania i opóźnienie połączenia z naszym serwerem.",
    steps: ["Kliknij „Uruchom test prędkości".", "Poczekaj na zakończenie pomiaru.", "Odczytaj wyniki (Mbps i latency)."],
    faq: [
      { q: "Czy to dokładny test?", a: "To pomiar prędkości do naszego serwera (Vercel Edge). Wynik może się różnić od testów do innych lokalizacji." },
      { q: "Ile danych pobiera test?", a: "Około 2 MB — nie obciąży znacząco Twojego pakietu danych." },
    ],
  },
}

const en: UtilityMetaMap = {
  "przelicznik-walut": {
    category: "Finance",
    name: "Currency converter",
    description:
      "Convert currencies online with current ECB reference rates. PLN, EUR, USD and dozens of other pairs — no sign-up.",
    steps: [
      "Enter an amount and source currency.",
      "Pick the target currency.",
      "Read the result and daily rate.",
    ],
    faq: [
      {
        q: "Where do rates come from?",
        a: "European Central Bank reference rates via the Frankfurter API, updated on business days.",
      },
      {
        q: "Are rates real-time?",
        a: "These are ECB reference rates, not bank or exchange desk quotes.",
      },
    ],
  },
  "kalkulator-dat": {
    category: "Time & dates",
    name: "Date calculator",
    description:
      "Calculate days between two dates, working days, and the day of the week — useful for contracts and deadlines.",
    steps: [
      "Pick start and end dates.",
      "See the difference in days and weeks.",
      "Optionally count weekdays only.",
    ],
    faq: [
      {
        q: "Are public holidays excluded?",
        a: "By default we exclude Saturdays and Sundays. Holidays depend on the country.",
      },
    ],
  },
  "strefy-czasowe": {
    category: "Time & dates",
    name: "Timezone difference",
    description:
      "Compare local times across cities, see the hour difference, and spot locations on a simple world map.",
    steps: [
      "Choose source and target cities.",
      "Compare current local times.",
      "See the offset and map markers.",
    ],
    faq: [
      {
        q: "Do you handle daylight saving?",
        a: "Yes — we use IANA zones (e.g. Europe/Warsaw) that apply DST automatically.",
      },
    ],
  },
  "przelicznik-jednostek": {
    category: "Units",
    name: "Unit converter",
    description:
      "Convert length, mass, temperature and volume: cm↔in, kg↔lb, °C↔°F and more.",
    steps: [
      "Choose a unit category.",
      "Enter a value and units.",
      "Get the result instantly.",
    ],
    faq: [
      {
        q: "Are conversions accurate?",
        a: "Yes — standard SI factors. Temperature uses proper formulas, not simple multiplication.",
      },
    ],
  },
  "kalkulator-vat": {
    category: "Finance",
    name: "VAT & percentage calculator",
    description:
      "Add or remove VAT (23%, 8%, 5%), compute net/gross, and simple percentages of an amount.",
    steps: [
      "Enter a net or gross amount.",
      "Pick a VAT rate or custom percent.",
      "See net, VAT and gross breakdown.",
    ],
    faq: [
      {
        q: "What VAT rates exist in Poland?",
        a: "Standard 23%, reduced 8% and 5%. You can also enter a custom rate.",
      },
    ],
  },
  "kalkulator-wieku": {
    category: "Time & dates",
    name: "Age & countdown calculator",
    description:
      "Calculate exact age in years, months and days — or how many days remain until a date.",
    steps: [
      "Enter a birth date or target date.",
      "See age or countdown.",
      "Check the next birthday too.",
    ],
    faq: [
      {
        q: "How is age calculated?",
        a: "From birth date to today, counting years, months and days — not calendar years alone.",
      },
    ],
  },
  "generator-hasel": {
    category: "Developer",
    name: "Password generator",
    description:
      "Generate a strong password locally in your browser. Set length and character sets — nothing is sent to a server.",
    steps: [
      "Set length and character options.",
      "Click Generate.",
      "Copy with one click.",
    ],
    faq: [
      {
        q: "Is the password uploaded?",
        a: "No — generation happens entirely in your browser.",
      },
    ],
  },
  "licznik-znakow": {
    category: "Text",
    name: "Character & word counter",
    description:
      "Count characters, words, sentences and paragraphs — handy for SEO, social posts and form limits.",
    steps: [
      "Paste or type text.",
      "Watch live stats.",
      "Check length without spaces.",
    ],
    faq: [
      {
        q: "How are words counted?",
        a: "Words are sequences separated by spaces or new lines.",
      },
    ],
  },
  "generator-qr": {
    category: "Developer",
    name: "QR code generator",
    description:
      "Create a QR code from a link or text and download it as PNG. Runs locally in the browser.",
    steps: [
      "Enter text or a URL.",
      "Generate the QR preview.",
      "Download a PNG image.",
    ],
    faq: [
      {
        q: "Is QR content uploaded?",
        a: "No — the code is created locally. We do not store the content.",
      },
    ],
  },
  "kalkulator-bitrate": {
    category: "Media",
    name: "File size & bitrate calculator",
    description:
      "Estimate how large an audio/video file will be at a given bitrate and duration — or the bitrate that fits a MB limit.",
    steps: [
      "Choose size-from-bitrate or bitrate-from-limit.",
      "Enter duration and values.",
      "Read the result in MB / kbps.",
    ],
    faq: [
      {
        q: "Does this include the container?",
        a: "It estimates the raw stream. Containers and extra tracks usually add a few percent.",
      },
    ],
  },
  "konwerter-kolorow": {
    category: "Developer",
    name: "HEX RGB HSL color converter",
    description:
      "Convert colors between HEX, RGB and HSL and check WCAG contrast against a background.",
    steps: [
      "Enter a color in any format.",
      "See HEX/RGB/HSL equivalents.",
      "Check contrast against a background.",
    ],
    faq: [
      {
        q: "What do AA / AAA mean?",
        a: "WCAG accessibility levels for text contrast against a background.",
      },
    ],
  },
  base64: {
    category: "Developer",
    name: "Base64 encode / decode",
    description:
      "Encode text to Base64 or decode Base64 back. Locally, without uploading data.",
    steps: [
      "Paste text or Base64.",
      "Choose Encode or Decode.",
      "Copy the result.",
    ],
    faq: [
      {
        q: "Does it support UTF-8?",
        a: "Yes — Unicode characters are supported.",
      },
    ],
  },
  "unix-timestamp": {
    category: "Developer",
    name: "Unix timestamp ↔ date",
    description:
      "Convert a Unix timestamp (seconds/ms) to a date and back. Useful for logs and APIs.",
    steps: [
      "Paste a timestamp or pick a date.",
      "See ISO and local results.",
      "Copy the value.",
    ],
    faq: [
      {
        q: "Seconds or milliseconds?",
        a: "We auto-detect by length. You can also force the unit.",
      },
    ],
  },
  "generator-uuid": {
    category: "Developer",
    name: "UUID generator",
    description:
      "Generate UUID v4 (random) with one click. Create many at once if you need.",
    steps: [
      "Set how many UUIDs.",
      "Click Generate.",
      "Copy the list.",
    ],
    faq: [
      {
        q: "Which UUID version?",
        a: "UUID v4 — random, RFC 4122, generated in the browser.",
      },
    ],
  },
  "generator-hash": {
    category: "Developer",
    name: "SHA / MD5 hash",
    description:
      "Compute SHA-1, SHA-256, SHA-512 or MD5 of text. Locally via Web Crypto.",
    steps: [
      "Paste text.",
      "Pick an algorithm.",
      "Copy the hex hash.",
    ],
    faq: [
      {
        q: "Is MD5 safe?",
        a: "MD5 is not for passwords. Use SHA-256+ for security; MD5 only for checksums.",
      },
    ],
  },
  "json-formatter": {
    category: "Developer",
    name: "JSON formatter",
    description: "Format and minify JSON in the browser — no server upload.",
    steps: ["Paste JSON.", "Click Format or Minify.", "Copy the result."],
    faq: [{ q: "Is data uploaded?", a: "No — processing happens locally in your browser." }],
  },
  "diff-tekstu": {
    category: "Text",
    name: "Text diff",
    description: "Compare two text snippets line by line and highlight differences.",
    steps: ["Paste text A and B.", "Review highlighted differences."],
    faq: [{ q: "Is this a full diff?", a: "It is a line-by-line comparison — great for short snippets and lists." }],
  },
  "konwerter-wielkosci-liter": {
    category: "Text",
    name: "Case converter",
    description: "Convert text to upper, lower, Title Case or sentence case.",
    steps: ["Paste text.", "Pick a mode.", "Copy the result."],
    faq: [],
  },
  "usun-duplikaty-linii": {
    category: "Text",
    name: "Remove duplicate lines",
    description: "Remove repeated lines from email lists, SKUs or tags.",
    steps: ["Paste a list.", "Set options.", "Copy the cleaned list."],
    faq: [],
  },
  "dekoder-jwt": {
    category: "Developer",
    name: "JWT decoder",
    description: "Read the header and payload of a JWT without verifying the signature.",
    steps: ["Paste a token.", "Inspect header and payload."],
    faq: [{ q: "Does it verify the signature?", a: "No — it only Base64URL-decodes the token." }],
  },
  "walidator-nip-pesel": {
    category: "Developer",
    name: "NIP / PESEL / REGON validator",
    description: "Validate Polish tax and ID numbers using checksum rules.",
    steps: ["Enter a number.", "See the validation result."],
    faq: [{ q: "Does it query GUS?", a: "No — checksum and length only." }],
  },
  "kalkulator-kredytu": {
    category: "Finance",
    name: "Loan calculator",
    description: "Calculate annuity payments, total repayment and interest cost.",
    steps: ["Enter amount, rate and term.", "Read the monthly payment."],
    faq: [{ q: "Does it include bank fees?", a: "This is a simplified simulation without fees or insurance." }],
  },
  "markdown-preview": {
    category: "Text",
    name: "Markdown preview",
    description: "Write Markdown and see a live HTML preview in the browser.",
    steps: ["Type Markdown.", "Preview updates automatically."],
    faq: [],
  },
  "sila-hasla": {
    category: "Developer",
    name: "Password strength",
    description: "Score password strength by length, character variety and common patterns.",
    steps: ["Enter a password.", "See the score and tips."],
    faq: [{ q: "Is the password uploaded?", a: "No — scoring happens locally in your browser." }],
  },
  "konwerter-napisow": {
    category: "Media",
    name: "SRT / VTT subtitle converter",
    description: "Convert subtitles between SRT and WebVTT formats.",
    steps: ["Paste subtitles.", "Pick direction or auto.", "Copy the result."],
    faq: [],
  },
  "generator-nazw-plikow": {
    category: "Text",
    name: "Batch file renamer",
    description: "Bulk-rename files using a pattern with {name}, {ext}, {index}.",
    steps: ["Paste a file list.", "Set a pattern.", "Copy new names."],
    faq: [],
  },
  "walidator-iban": {
    category: "Developer",
    name: "IBAN validator",
    description: "Validate IBAN checksum (mod 97) and country-specific length.",
    steps: ["Paste an IBAN.", "See formatted output and validation."],
    faq: [{ q: "Does it verify the bank account?", a: "No — format and checksum only." }],
  },
  "kalkulator-b2b": {
    category: "Finance",
    name: "B2B vs employment calculator",
    description: "Compare net employment salary vs B2B invoice income (flat or linear tax).",
    steps: ["Enter gross salary and B2B revenue.", "Pick tax form.", "Compare results."],
    faq: [{ q: "Is this tax advice?", a: "No — a simplified simulation for discussion with an accountant." }],
  },
  "test-ping": {
    category: "Network",
    name: "Ping Test",
    description: "Measure server response time (latency) for any domain or IP address.",
    steps: ["Enter a host (e.g. google.com).", "Click Ping.", "Read response times and average."],
    faq: [
      { q: "Is this a real ICMP ping?", a: "No — we measure HTTP HEAD request time from the server, since ICMP is unavailable in serverless environments." },
      { q: "Why do times vary?", a: "Ping depends on server location, network load, and packet routing." },
    ],
  },
  "dns-lookup": {
    category: "Network",
    name: "DNS Lookup",
    description: "Check DNS records for any domain — A, AAAA, MX, CNAME, NS, TXT, SOA.",
    steps: ["Enter a domain.", "Select record type.", "View results."],
    faq: [
      { q: "Where do results come from?", a: "DNS queries run from the server — results may differ from your local resolver." },
      { q: "Can I check a subdomain?", a: "Yes — enter the full subdomain, e.g. mail.example.com." },
    ],
  },
  "speedtest": {
    category: "Network",
    name: "Speed Test",
    description: "Measure download speed and latency to our server.",
    steps: ["Click 'Run speed test'.", "Wait for measurement.", "Read results (Mbps and latency)."],
    faq: [
      { q: "Is this accurate?", a: "It measures speed to our server (Vercel Edge). Results may differ from other speed test services." },
      { q: "How much data does it use?", a: "About 2 MB — won't significantly impact your data plan." },
    ],
  },
}

const maps: Record<string, UtilityMetaMap> = {
  pl,
  en,
  de: {
    ...en,
    "przelicznik-walut": {
      category: "Finanzen",
      name: "Währungsrechner",
      description:
        "Währungen online mit aktuellen EZB-Referenzkursen umrechnen. PLN, EUR, USD und Dutzende weiterer Paare — ohne Anmeldung.",
      steps: [
        "Betrag und Quellwährung eingeben.",
        "Zielwährung wählen.",
        "Ergebnis und Tageskurs ablesen.",
      ],
      faq: [
        {
          q: "Woher kommen die Kurse?",
          a: "Referenzkurse der Europäischen Zentralbank über die Frankfurter API, aktualisiert an Werktagen.",
        },
        {
          q: "Sind die Kurse in Echtzeit?",
          a: "Das sind EZB-Referenzkurse, keine Bank- oder Wechselstubenkurse.",
        },
      ],
    },
    "kalkulator-dat": {
      category: "Zeit & Daten",
      name: "Datumsrechner",
      description:
        "Tage zwischen zwei Daten, Werktage und Wochentag berechnen — nützlich für Verträge und Fristen.",
      steps: [
        "Start- und Enddatum wählen.",
        "Differenz in Tagen und Wochen ansehen.",
        "Optional nur Werktage zählen.",
      ],
      faq: [
        {
          q: "Werden Feiertage ausgeschlossen?",
          a: "Standardmäßig schließen wir Samstage und Sonntage aus. Feiertage hängen vom Land ab.",
        },
      ],
    },
    "strefy-czasowe": {
      category: "Zeit & Daten",
      name: "Zeitzonenunterschied",
      description:
        "Ortszeiten in Städten vergleichen, Stundenunterschied sehen und Orte auf einer einfachen Weltkarte markieren.",
      steps: [
        "Quell- und Zielstadt wählen.",
        "Aktuelle Ortszeiten vergleichen.",
        "Offset und Kartenmarkierungen ansehen.",
      ],
      faq: [
        {
          q: "Berücksichtigt ihr die Sommerzeit?",
          a: "Ja — wir nutzen IANA-Zonen (z. B. Europe/Warsaw), die die Sommerzeit automatisch anwenden.",
        },
      ],
    },
    "przelicznik-jednostek": {
      category: "Einheiten",
      name: "Einheitenumrechner",
      description:
        "Länge, Masse, Temperatur und Volumen umrechnen: cm↔Zoll, kg↔lb, °C↔°F und mehr.",
      steps: [
        "Einheitenkategorie wählen.",
        "Wert und Einheiten eingeben.",
        "Ergebnis sofort ablesen.",
      ],
      faq: [
        {
          q: "Sind die Umrechnungen genau?",
          a: "Ja — Standard-SI-Faktoren. Temperatur nutzt eigene Formeln, keine einfache Multiplikation.",
        },
      ],
    },
    "kalkulator-vat": {
      category: "Finanzen",
      name: "MwSt- und Prozentrechner",
      description:
        "MwSt hinzufügen oder abziehen (23 %, 8 %, 5 %), Netto/Brutto und einfache Prozente eines Betrags berechnen.",
      steps: [
        "Netto- oder Bruttobetrag eingeben.",
        "MwSt-Satz oder eigenen Prozentsatz wählen.",
        "Aufschlüsselung Netto, MwSt und Brutto sehen.",
      ],
      faq: [
        {
          q: "Welche MwSt-Sätze gibt es in Polen?",
          a: "Standard 23 %, ermäßigt 8 % und 5 %. Sie können auch einen eigenen Satz eingeben.",
        },
      ],
    },
    "kalkulator-wieku": {
      category: "Zeit & Daten",
      name: "Alters- und Countdown-Rechner",
      description:
        "Genaues Alter in Jahren, Monaten und Tagen berechnen — oder wie viele Tage bis zu einem Datum bleiben.",
      steps: [
        "Geburtsdatum oder Zieldatum eingeben.",
        "Alter oder Countdown ansehen.",
        "Auch den nächsten Geburtstag prüfen.",
      ],
      faq: [
        {
          q: "Wie wird das Alter berechnet?",
          a: "Vom Geburtsdatum bis heute, mit Jahren, Monaten und Tagen — nicht nur Kalenderjahre.",
        },
      ],
    },
    "generator-hasel": {
      category: "Entwickler",
      name: "Passwortgenerator",
      description:
        "Starkes Passwort lokal im Browser erzeugen. Länge und Zeichensätze einstellen — nichts wird an einen Server gesendet.",
      steps: [
        "Länge und Zeichenoptionen einstellen.",
        "Auf Generieren klicken.",
        "Mit einem Klick kopieren.",
      ],
      faq: [
        {
          q: "Wird das Passwort hochgeladen?",
          a: "Nein — die Erzeugung läuft vollständig in Ihrem Browser.",
        },
      ],
    },
    "licznik-znakow": {
      category: "Text",
      name: "Zeichen- und Wortzähler",
      description:
        "Zeichen, Wörter, Sätze und Absätze zählen — praktisch für SEO, Social-Media-Posts und Formularlimits.",
      steps: [
        "Text einfügen oder tippen.",
        "Live-Statistiken ansehen.",
        "Länge ohne Leerzeichen prüfen.",
      ],
      faq: [
        {
          q: "Wie werden Wörter gezählt?",
          a: "Wörter sind durch Leerzeichen oder Zeilenumbrüche getrennte Zeichenfolgen.",
        },
      ],
    },
    "generator-qr": {
      category: "Entwickler",
      name: "QR-Code-Generator",
      description:
        "QR-Code aus Link oder Text erstellen und als PNG herunterladen. Läuft lokal im Browser.",
      steps: [
        "Text oder URL eingeben.",
        "QR-Vorschau erzeugen.",
        "PNG-Bild herunterladen.",
      ],
      faq: [
        {
          q: "Wird der QR-Inhalt hochgeladen?",
          a: "Nein — der Code entsteht lokal. Wir speichern den Inhalt nicht.",
        },
      ],
    },
    "kalkulator-bitrate": {
      category: "Medien",
      name: "Dateigrößen- und Bitrate-Rechner",
      description:
        "Schätzen, wie groß eine Audio-/Videodatei bei gegebener Bitrate und Dauer wird — oder welche Bitrate in ein MB-Limit passt.",
      steps: [
        "Modus wählen: Größe aus Bitrate oder Bitrate aus Limit.",
        "Dauer und Werte eingeben.",
        "Ergebnis in MB / kbps ablesen.",
      ],
      faq: [
        {
          q: "Enthält das den Container?",
          a: "Es schätzt den Rohstream. Container und zusätzliche Spuren addieren meist einige Prozent.",
        },
      ],
    },
    "konwerter-kolorow": {
      category: "Entwickler",
      name: "Farbkonverter HEX RGB HSL",
      description:
        "Farben zwischen HEX, RGB und HSL konvertieren und WCAG-Kontrast gegen einen Hintergrund prüfen.",
      steps: [
        "Farbe in beliebigem Format eingeben.",
        "HEX-/RGB-/HSL-Äquivalente sehen.",
        "Kontrast gegen einen Hintergrund prüfen.",
      ],
      faq: [
        {
          q: "Was bedeuten AA / AAA?",
          a: "WCAG-Barrierefreiheitsstufen für Textkontrast gegenüber einem Hintergrund.",
        },
      ],
    },
    base64: {
      category: "Entwickler",
      name: "Base64 kodieren / dekodieren",
      description:
        "Text zu Base64 kodieren oder Base64 zurück dekodieren. Lokal, ohne Datenupload.",
      steps: [
        "Text oder Base64 einfügen.",
        "Encode oder Decode wählen.",
        "Ergebnis kopieren.",
      ],
      faq: [
        {
          q: "Unterstützt es UTF-8?",
          a: "Ja — Unicode-Zeichen werden unterstützt.",
        },
      ],
    },
    "unix-timestamp": {
      category: "Entwickler",
      name: "Unix-Zeitstempel ↔ Datum",
      description:
        "Unix-Zeitstempel (Sekunden/ms) in ein Datum und zurück umrechnen. Nützlich für Logs und APIs.",
      steps: [
        "Zeitstempel einfügen oder Datum wählen.",
        "ISO- und lokale Ergebnisse sehen.",
        "Wert kopieren.",
      ],
      faq: [
        {
          q: "Sekunden oder Millisekunden?",
          a: "Wir erkennen die Einheit automatisch anhand der Länge. Sie können sie auch erzwingen.",
        },
      ],
    },
    "generator-uuid": {
      category: "Entwickler",
      name: "UUID-Generator",
      description:
        "UUID v4 (zufällig) mit einem Klick erzeugen. Bei Bedarf viele auf einmal.",
      steps: [
        "Anzahl der UUIDs festlegen.",
        "Auf Generieren klicken.",
        "Liste kopieren.",
      ],
      faq: [
        {
          q: "Welche UUID-Version?",
          a: "UUID v4 — zufällig, RFC 4122, im Browser erzeugt.",
        },
      ],
    },
    "generator-hash": {
      category: "Entwickler",
      name: "SHA- / MD5-Hash",
      description:
        "SHA-1, SHA-256, SHA-512 oder MD5 eines Texts berechnen. Lokal über Web Crypto.",
      steps: [
        "Text einfügen.",
        "Algorithmus wählen.",
        "Hex-Hash kopieren.",
      ],
      faq: [
        {
          q: "Ist MD5 sicher?",
          a: "MD5 eignet sich nicht für Passwörter. Für Sicherheit SHA-256+ nutzen; MD5 nur für Prüfsummen.",
        },
      ],
    },
    "json-formatter": {
      category: "Entwickler",
      name: "JSON-Formatter",
      description: "JSON im Browser formatieren und minifizieren — ohne Server-Upload.",
      steps: ["JSON einfügen.", "Formatieren oder Minifizieren klicken.", "Ergebnis kopieren."],
      faq: [{ q: "Werden Daten hochgeladen?", a: "Nein — die Verarbeitung läuft lokal in Ihrem Browser." }],
    },
    "diff-tekstu": {
      category: "Text",
      name: "Text-Diff",
      description: "Zwei Textausschnitte Zeile für Zeile vergleichen und Unterschiede hervorheben.",
      steps: ["Text A und B einfügen.", "Hervorgehobene Unterschiede prüfen."],
      faq: [
        {
          q: "Ist das ein vollständiger Diff?",
          a: "Es ist ein Zeilenvergleich — ideal für kurze Ausschnitte und Listen.",
        },
      ],
    },
    "konwerter-wielkosci-liter": {
      category: "Text",
      name: "Groß-/Kleinschreibung",
      description: "Text in Groß-, Kleinbuchstaben, Title Case oder Sentence Case umwandeln.",
      steps: ["Text einfügen.", "Modus wählen.", "Ergebnis kopieren."],
      faq: [],
    },
    "usun-duplikaty-linii": {
      category: "Text",
      name: "Doppelte Zeilen entfernen",
      description: "Wiederholte Zeilen aus E-Mail-Listen, SKUs oder Tags entfernen.",
      steps: ["Liste einfügen.", "Optionen setzen.", "Bereinigte Liste kopieren."],
      faq: [],
    },
    "dekoder-jwt": {
      category: "Entwickler",
      name: "JWT-Decoder",
      description: "Header und Payload eines JWT lesen, ohne die Signatur zu prüfen.",
      steps: ["Token einfügen.", "Header und Payload prüfen."],
      faq: [
        {
          q: "Wird die Signatur geprüft?",
          a: "Nein — es wird nur Base64URL dekodiert.",
        },
      ],
    },
    "walidator-nip-pesel": {
      category: "Entwickler",
      name: "NIP- / PESEL- / REGON-Validator",
      description: "Polnische Steuer- und Ausweisnummern anhand der Prüfziffern validieren.",
      steps: ["Nummer eingeben.", "Validierungsergebnis ansehen."],
      faq: [{ q: "Wird GUS abgefragt?", a: "Nein — nur Prüfziffer und Länge." }],
    },
    "kalkulator-kredytu": {
      category: "Finanzen",
      name: "Kreditrechner",
      description: "Annuitätenrate, Gesamtrückzahlung und Zinskosten berechnen.",
      steps: ["Betrag, Zinssatz und Laufzeit eingeben.", "Monatliche Rate ablesen."],
      faq: [
        {
          q: "Enthält das Bankgebühren?",
          a: "Das ist eine vereinfachte Simulation ohne Gebühren oder Versicherungen.",
        },
      ],
    },
    "markdown-preview": {
      category: "Text",
      name: "Markdown-Vorschau",
      description: "Markdown schreiben und eine Live-HTML-Vorschau im Browser sehen.",
      steps: ["Markdown tippen.", "Vorschau aktualisiert sich automatisch."],
      faq: [],
    },
    "sila-hasla": {
      category: "Entwickler",
      name: "Passwortstärke",
      description: "Passwortstärke nach Länge, Zeichenvielfalt und typischen Mustern bewerten.",
      steps: ["Passwort eingeben.", "Bewertung und Tipps ansehen."],
      faq: [{ q: "Wird das Passwort hochgeladen?", a: "Nein — die Bewertung läuft lokal in Ihrem Browser." }],
    },
    "konwerter-napisow": {
      category: "Medien",
      name: "SRT- / VTT-Untertitelkonverter",
      description: "Untertitel zwischen SRT und WebVTT konvertieren.",
      steps: ["Untertitel einfügen.", "Richtung oder Auto wählen.", "Ergebnis kopieren."],
      faq: [],
    },
    "generator-nazw-plikow": {
      category: "Text",
      name: "Batch-Dateiumbenennung",
      description: "Dateien massenhaft mit einem Muster aus {name}, {ext}, {index} umbenennen.",
      steps: ["Dateiliste einfügen.", "Muster festlegen.", "Neue Namen kopieren."],
      faq: [],
    },
    "walidator-iban": {
      category: "Entwickler",
      name: "IBAN-Validator",
      description: "IBAN-Prüfsumme (mod 97) und länderspezifische Länge prüfen.",
      steps: ["IBAN einfügen.", "Formatiertes Ergebnis und Validierung ansehen."],
      faq: [{ q: "Wird das Bankkonto geprüft?", a: "Nein — nur Format und Prüfsumme." }],
    },
    "kalkulator-b2b": {
      category: "Finanzen",
      name: "B2B- vs. Anstellungsrechner",
      description: "Netto-Gehalt aus Anstellung mit B2B-Rechnungseinkommen (Pauschal- oder Linearsteuer) vergleichen.",
      steps: ["Bruttogehalt und B2B-Umsatz eingeben.", "Steuerform wählen.", "Ergebnisse vergleichen."],
      faq: [
        {
          q: "Ist das Steuerberatung?",
          a: "Nein — eine vereinfachte Simulation zur Besprechung mit einem Buchhalter.",
        },
      ],
    },
  },
  es: {
    ...en,
    "przelicznik-walut": {
      category: "Finanzas",
      name: "Conversor de divisas",
      description:
        "Convierte divisas online con tipos de referencia del BCE. PLN, EUR, USD y docenas de otros pares — sin registro.",
      steps: [
        "Introduce un importe y la moneda de origen.",
        "Elige la moneda de destino.",
        "Consulta el resultado y el tipo del día.",
      ],
      faq: [
        {
          q: "¿De dónde salen los tipos?",
          a: "Tipos de referencia del Banco Central Europeo a través de la API Frankfurter, actualizados en días laborables.",
        },
        {
          q: "¿Son tipos en tiempo real?",
          a: "Son tipos de referencia del BCE, no cotizaciones de bancos ni casas de cambio.",
        },
      ],
    },
    "kalkulator-dat": {
      category: "Tiempo y fechas",
      name: "Calculadora de fechas",
      description:
        "Calcula los días entre dos fechas, los días laborables y el día de la semana — útil para contratos y plazos.",
      steps: [
        "Elige las fechas de inicio y fin.",
        "Consulta la diferencia en días y semanas.",
        "Opcionalmente cuenta solo días laborables.",
      ],
      faq: [
        {
          q: "¿Se excluyen los festivos?",
          a: "Por defecto excluimos sábados y domingos. Los festivos dependen del país.",
        },
      ],
    },
    "strefy-czasowe": {
      category: "Tiempo y fechas",
      name: "Diferencia de husos horarios",
      description:
        "Compara horas locales entre ciudades, ve la diferencia horaria y ubica los lugares en un mapa sencillo.",
      steps: [
        "Elige las ciudades de origen y destino.",
        "Compara las horas locales actuales.",
        "Consulta el desfase y los marcadores del mapa.",
      ],
      faq: [
        {
          q: "¿Tenéis en cuenta el horario de verano?",
          a: "Sí — usamos zonas IANA (p. ej. Europe/Warsaw) que aplican el DST automáticamente.",
        },
      ],
    },
    "przelicznik-jednostek": {
      category: "Unidades",
      name: "Conversor de unidades",
      description:
        "Convierte longitud, masa, temperatura y volumen: cm↔pulgadas, kg↔lb, °C↔°F y más.",
      steps: [
        "Elige una categoría de unidades.",
        "Introduce un valor y las unidades.",
        "Obtén el resultado al instante.",
      ],
      faq: [
        {
          q: "¿Las conversiones son exactas?",
          a: "Sí — factores SI estándar. La temperatura usa fórmulas propias, no una simple multiplicación.",
        },
      ],
    },
    "kalkulator-vat": {
      category: "Finanzas",
      name: "Calculadora de IVA y porcentajes",
      description:
        "Añade o quita IVA (23 %, 8 %, 5 %), calcula neto/bruto y porcentajes sencillos de un importe.",
      steps: [
        "Introduce un importe neto o bruto.",
        "Elige un tipo de IVA o un porcentaje personalizado.",
        "Consulta el desglose de neto, IVA y bruto.",
      ],
      faq: [
        {
          q: "¿Qué tipos de IVA hay en Polonia?",
          a: "Estándar 23 %, reducidos 8 % y 5 %. También puedes introducir un tipo personalizado.",
        },
      ],
    },
    "kalkulator-wieku": {
      category: "Tiempo y fechas",
      name: "Calculadora de edad y cuenta atrás",
      description:
        "Calcula la edad exacta en años, meses y días — o cuántos días faltan hasta una fecha.",
      steps: [
        "Introduce una fecha de nacimiento o de destino.",
        "Consulta la edad o la cuenta atrás.",
        "Comprueba también el próximo cumpleaños.",
      ],
      faq: [
        {
          q: "¿Cómo se calcula la edad?",
          a: "Desde la fecha de nacimiento hasta hoy, contando años, meses y días — no solo años calendario.",
        },
      ],
    },
    "generator-hasel": {
      category: "Desarrolladores",
      name: "Generador de contraseñas",
      description:
        "Genera una contraseña segura localmente en el navegador. Define longitud y conjuntos de caracteres — nada se envía a un servidor.",
      steps: [
        "Define la longitud y las opciones de caracteres.",
        "Haz clic en Generar.",
        "Copia con un clic.",
      ],
      faq: [
        {
          q: "¿Se sube la contraseña?",
          a: "No — la generación ocurre por completo en tu navegador.",
        },
      ],
    },
    "licznik-znakow": {
      category: "Texto",
      name: "Contador de caracteres y palabras",
      description:
        "Cuenta caracteres, palabras, oraciones y párrafos — útil para SEO, publicaciones sociales y límites de formularios.",
      steps: [
        "Pega o escribe texto.",
        "Observa las estadísticas en vivo.",
        "Comprueba la longitud sin espacios.",
      ],
      faq: [
        {
          q: "¿Cómo se cuentan las palabras?",
          a: "Las palabras son secuencias separadas por espacios o saltos de línea.",
        },
      ],
    },
    "generator-qr": {
      category: "Desarrolladores",
      name: "Generador de códigos QR",
      description:
        "Crea un código QR a partir de un enlace o texto y descárgalo como PNG. Funciona localmente en el navegador.",
      steps: [
        "Introduce texto o una URL.",
        "Genera la vista previa del QR.",
        "Descarga una imagen PNG.",
      ],
      faq: [
        {
          q: "¿Se sube el contenido del QR?",
          a: "No — el código se crea localmente. No almacenamos el contenido.",
        },
      ],
    },
    "kalkulator-bitrate": {
      category: "Medios",
      name: "Calculadora de tamaño y bitrate",
      description:
        "Estima cuánto ocupará un archivo de audio/vídeo con un bitrate y duración dados — o el bitrate que cabe en un límite de MB.",
      steps: [
        "Elige tamaño desde bitrate o bitrate desde límite.",
        "Introduce la duración y los valores.",
        "Consulta el resultado en MB / kbps.",
      ],
      faq: [
        {
          q: "¿Incluye el contenedor?",
          a: "Estima el flujo bruto. Los contenedores y pistas extra suelen añadir unos pocos porcentajes.",
        },
      ],
    },
    "konwerter-kolorow": {
      category: "Desarrolladores",
      name: "Conversor de color HEX RGB HSL",
      description:
        "Convierte colores entre HEX, RGB y HSL y comprueba el contraste WCAG respecto a un fondo.",
      steps: [
        "Introduce un color en cualquier formato.",
        "Consulta los equivalentes HEX/RGB/HSL.",
        "Comprueba el contraste respecto a un fondo.",
      ],
      faq: [
        {
          q: "¿Qué significan AA / AAA?",
          a: "Niveles de accesibilidad WCAG para el contraste del texto respecto a un fondo.",
        },
      ],
    },
    base64: {
      category: "Desarrolladores",
      name: "Base64 codificar / decodificar",
      description:
        "Codifica texto a Base64 o decodifica Base64 de vuelta. Localmente, sin subir datos.",
      steps: [
        "Pega texto o Base64.",
        "Elige Encode o Decode.",
        "Copia el resultado.",
      ],
      faq: [
        {
          q: "¿Admite UTF-8?",
          a: "Sí — se admiten caracteres Unicode.",
        },
      ],
    },
    "unix-timestamp": {
      category: "Desarrolladores",
      name: "Timestamp Unix ↔ fecha",
      description:
        "Convierte un timestamp Unix (segundos/ms) a fecha y viceversa. Útil para logs y APIs.",
      steps: [
        "Pega un timestamp o elige una fecha.",
        "Consulta resultados ISO y locales.",
        "Copia el valor.",
      ],
      faq: [
        {
          q: "¿Segundos o milisegundos?",
          a: "Detectamos la unidad por la longitud. También puedes forzarla.",
        },
      ],
    },
    "generator-uuid": {
      category: "Desarrolladores",
      name: "Generador UUID",
      description:
        "Genera UUID v4 (aleatorio) con un clic. Crea muchos a la vez si lo necesitas.",
      steps: [
        "Define cuántos UUID.",
        "Haz clic en Generar.",
        "Copia la lista.",
      ],
      faq: [
        {
          q: "¿Qué versión de UUID?",
          a: "UUID v4 — aleatorio, RFC 4122, generado en el navegador.",
        },
      ],
    },
    "generator-hash": {
      category: "Desarrolladores",
      name: "Hash SHA / MD5",
      description:
        "Calcula SHA-1, SHA-256, SHA-512 o MD5 de un texto. Localmente mediante Web Crypto.",
      steps: [
        "Pega el texto.",
        "Elige un algoritmo.",
        "Copia el hash en hex.",
      ],
      faq: [
        {
          q: "¿Es seguro MD5?",
          a: "MD5 no sirve para contraseñas. Usa SHA-256+ para seguridad; MD5 solo para sumas de comprobación.",
        },
      ],
    },
    "json-formatter": {
      category: "Desarrolladores",
      name: "Formateador JSON",
      description: "Formatea y minifica JSON en el navegador — sin subir datos al servidor.",
      steps: ["Pega JSON.", "Haz clic en Formatear o Minificar.", "Copia el resultado."],
      faq: [{ q: "¿Se suben los datos?", a: "No — el procesamiento ocurre localmente en tu navegador." }],
    },
    "diff-tekstu": {
      category: "Texto",
      name: "Diff de texto",
      description: "Compara dos fragmentos de texto línea a línea y resalta las diferencias.",
      steps: ["Pega el texto A y B.", "Revisa las diferencias resaltadas."],
      faq: [
        {
          q: "¿Es un diff completo?",
          a: "Es una comparación línea a línea — ideal para fragmentos cortos y listas.",
        },
      ],
    },
    "konwerter-wielkosci-liter": {
      category: "Texto",
      name: "Conversor de mayúsculas/minúsculas",
      description: "Convierte texto a mayúsculas, minúsculas, Title Case o sentence case.",
      steps: ["Pega el texto.", "Elige un modo.", "Copia el resultado."],
      faq: [],
    },
    "usun-duplikaty-linii": {
      category: "Texto",
      name: "Eliminar líneas duplicadas",
      description: "Elimina líneas repetidas de listas de correos, SKU o etiquetas.",
      steps: ["Pega una lista.", "Configura las opciones.", "Copia la lista limpia."],
      faq: [],
    },
    "dekoder-jwt": {
      category: "Desarrolladores",
      name: "Decodificador JWT",
      description: "Lee el encabezado y el payload de un JWT sin verificar la firma.",
      steps: ["Pega un token.", "Inspecciona el header y el payload."],
      faq: [
        {
          q: "¿Verifica la firma?",
          a: "No — solo decodifica Base64URL del token.",
        },
      ],
    },
    "walidator-nip-pesel": {
      category: "Desarrolladores",
      name: "Validador NIP / PESEL / REGON",
      description: "Valida números fiscales e identificativos polacos según las reglas de dígito de control.",
      steps: ["Introduce un número.", "Consulta el resultado de la validación."],
      faq: [{ q: "¿Consulta GUS?", a: "No — solo dígito de control y longitud." }],
    },
    "kalkulator-kredytu": {
      category: "Finanzas",
      name: "Calculadora de préstamos",
      description: "Calcula cuotas de anualidad, reembolso total y coste de intereses.",
      steps: ["Introduce importe, tipo y plazo.", "Consulta la cuota mensual."],
      faq: [
        {
          q: "¿Incluye comisiones bancarias?",
          a: "Es una simulación simplificada sin comisiones ni seguros.",
        },
      ],
    },
    "markdown-preview": {
      category: "Texto",
      name: "Vista previa de Markdown",
      description: "Escribe Markdown y ve una vista previa HTML en vivo en el navegador.",
      steps: ["Escribe Markdown.", "La vista previa se actualiza automáticamente."],
      faq: [],
    },
    "sila-hasla": {
      category: "Desarrolladores",
      name: "Fortaleza de contraseña",
      description: "Evalúa la fortaleza de una contraseña según longitud, variedad de caracteres y patrones comunes.",
      steps: ["Introduce una contraseña.", "Consulta la puntuación y los consejos."],
      faq: [{ q: "¿Se sube la contraseña?", a: "No — la evaluación ocurre localmente en tu navegador." }],
    },
    "konwerter-napisow": {
      category: "Medios",
      name: "Conversor de subtítulos SRT / VTT",
      description: "Convierte subtítulos entre los formatos SRT y WebVTT.",
      steps: ["Pega los subtítulos.", "Elige la dirección o auto.", "Copia el resultado."],
      faq: [],
    },
    "generator-nazw-plikow": {
      category: "Texto",
      name: "Renombrador de archivos por lotes",
      description: "Renombra archivos en masa con un patrón que usa {name}, {ext}, {index}.",
      steps: ["Pega una lista de archivos.", "Define un patrón.", "Copia los nuevos nombres."],
      faq: [],
    },
    "walidator-iban": {
      category: "Desarrolladores",
      name: "Validador IBAN",
      description: "Valida la suma de comprobación IBAN (mod 97) y la longitud específica del país.",
      steps: ["Pega un IBAN.", "Consulta la salida formateada y la validación."],
      faq: [{ q: "¿Verifica la cuenta bancaria?", a: "No — solo formato y suma de comprobación." }],
    },
    "kalkulator-b2b": {
      category: "Finanzas",
      name: "Calculadora B2B vs empleo",
      description: "Compara el salario neto de empleo con ingresos por factura B2B (impuesto fijo o lineal).",
      steps: ["Introduce el bruto del empleo y los ingresos B2B.", "Elige la forma fiscal.", "Compara los resultados."],
      faq: [
        {
          q: "¿Es asesoramiento fiscal?",
          a: "No — una simulación simplificada para hablarlo con un contable.",
        },
      ],
    },
  },
  uk: {
    ...en,
    "przelicznik-walut": {
      category: "Фінанси",
      name: "Конвертер валют",
      description:
        "Конвертуйте валюти онлайн за поточними довідковими курсами ЄЦБ. PLN, EUR, USD та десятки інших пар — без реєстрації.",
      steps: [
        "Введіть суму та валюту джерела.",
        "Оберіть цільову валюту.",
        "Перегляньте результат і денний курс.",
      ],
      faq: [
        {
          q: "Звідки беруться курси?",
          a: "Довідкові курси Європейського центрального банку через API Frankfurter, оновлюються в робочі дні.",
        },
        {
          q: "Чи курси в реальному часі?",
          a: "Це довідкові курси ЄЦБ, а не котирування банків чи обмінників.",
        },
      ],
    },
    "kalkulator-dat": {
      category: "Час і дати",
      name: "Калькулятор дат",
      description:
        "Обчисліть кількість днів між двома датами, робочі дні та день тижня — корисно для договорів і дедлайнів.",
      steps: [
        "Оберіть початкову та кінцеву дати.",
        "Перегляньте різницю в днях і тижнях.",
        "За бажанням рахуйте лише робочі дні.",
      ],
      faq: [
        {
          q: "Чи виключаються державні свята?",
          a: "За замовчуванням ми виключаємо суботи та неділі. Свята залежать від країни.",
        },
      ],
    },
    "strefy-czasowe": {
      category: "Час і дати",
      name: "Різниця часових поясів",
      description:
        "Порівнюйте місцевий час у містах, дивіться різницю годин і позначки на простій карті світу.",
      steps: [
        "Оберіть місто джерела та призначення.",
        "Порівняйте поточний місцевий час.",
        "Перегляньте зміщення та маркери на карті.",
      ],
      faq: [
        {
          q: "Чи враховуєте літній час?",
          a: "Так — ми використовуємо зони IANA (напр. Europe/Warsaw), які автоматично застосовують DST.",
        },
      ],
    },
    "przelicznik-jednostek": {
      category: "Одиниці",
      name: "Конвертер одиниць",
      description:
        "Конвертуйте довжину, масу, температуру та об’єм: см↔дюйми, кг↔lb, °C↔°F тощо.",
      steps: [
        "Оберіть категорію одиниць.",
        "Введіть значення та одиниці.",
        "Отримайте результат миттєво.",
      ],
      faq: [
        {
          q: "Чи точні перетворення?",
          a: "Так — стандартні коефіцієнти SI. Температура використовує окремі формули, а не просте множення.",
        },
      ],
    },
    "kalkulator-vat": {
      category: "Фінанси",
      name: "Калькулятор ПДВ і відсотків",
      description:
        "Додайте або відніміть ПДВ (23%, 8%, 5%), обчисліть нетто/брутто та прості відсотки від суми.",
      steps: [
        "Введіть суму нетто або брутто.",
        "Оберіть ставку ПДВ або власний відсоток.",
        "Перегляньте розбивку нетто, ПДВ і брутто.",
      ],
      faq: [
        {
          q: "Які ставки ПДВ у Польщі?",
          a: "Стандартна 23%, знижені 8% і 5%. Також можна ввести власну ставку.",
        },
      ],
    },
    "kalkulator-wieku": {
      category: "Час і дати",
      name: "Калькулятор віку та зворотного відліку",
      description:
        "Обчисліть точний вік у роках, місяцях і днях — або скільки днів залишилось до дати.",
      steps: [
        "Введіть дату народження або цільову дату.",
        "Перегляньте вік або зворотний відлік.",
        "Також перевірте наступний день народження.",
      ],
      faq: [
        {
          q: "Як обчислюється вік?",
          a: "Від дати народження до сьогодні, з урахуванням років, місяців і днів — не лише календарних років.",
        },
      ],
    },
    "generator-hasel": {
      category: "Для розробників",
      name: "Генератор паролів",
      description:
        "Згенеруйте надійний пароль локально в браузері. Встановіть довжину та набори символів — нічого не надсилається на сервер.",
      steps: [
        "Встановіть довжину та параметри символів.",
        "Натисніть Згенерувати.",
        "Скопіюйте одним кліком.",
      ],
      faq: [
        {
          q: "Чи завантажується пароль?",
          a: "Ні — генерація відбувається повністю у вашому браузері.",
        },
      ],
    },
    "licznik-znakow": {
      category: "Текст",
      name: "Лічильник символів і слів",
      description:
        "Підрахуйте символи, слова, речення та абзаци — зручно для SEO, соцмереж і лімітів форм.",
      steps: [
        "Вставте або введіть текст.",
        "Дивіться статистику наживо.",
        "Перевірте довжину без пробілів.",
      ],
      faq: [
        {
          q: "Як рахуються слова?",
          a: "Слова — це послідовності, розділені пробілами або новими рядками.",
        },
      ],
    },
    "generator-qr": {
      category: "Для розробників",
      name: "Генератор QR-кодів",
      description:
        "Створіть QR-код із посилання чи тексту та завантажте його як PNG. Працює локально в браузері.",
      steps: [
        "Введіть текст або URL.",
        "Згенеруйте попередній перегляд QR.",
        "Завантажте зображення PNG.",
      ],
      faq: [
        {
          q: "Чи завантажується вміст QR?",
          a: "Ні — код створюється локально. Ми не зберігаємо вміст.",
        },
      ],
    },
    "kalkulator-bitrate": {
      category: "Медіа",
      name: "Калькулятор розміру файлу та бітрейту",
      description:
        "Оцініть, який розмір матиме аудіо-/відеофайл за заданим бітрейтом і тривалістю — або який бітрейт вміститься в ліміт МБ.",
      steps: [
        "Оберіть режим: розмір з бітрейту або бітрейт з ліміту.",
        "Введіть тривалість і значення.",
        "Перегляньте результат у МБ / кбіт/с.",
      ],
      faq: [
        {
          q: "Чи враховується контейнер?",
          a: "Це оцінка «сирого» потоку. Контейнери та додаткові доріжки зазвичай додають кілька відсотків.",
        },
      ],
    },
    "konwerter-kolorow": {
      category: "Для розробників",
      name: "Конвертер кольорів HEX RGB HSL",
      description:
        "Конвертуйте кольори між HEX, RGB і HSL та перевіряйте контраст WCAG відносно фону.",
      steps: [
        "Введіть колір у будь-якому форматі.",
        "Перегляньте еквіваленти HEX/RGB/HSL.",
        "Перевірте контраст відносно фону.",
      ],
      faq: [
        {
          q: "Що означають AA / AAA?",
          a: "Рівні доступності WCAG для контрасту тексту відносно фону.",
        },
      ],
    },
    base64: {
      category: "Для розробників",
      name: "Base64 кодування / декодування",
      description:
        "Закодуйте текст у Base64 або декодуйте Base64 назад. Локально, без завантаження даних.",
      steps: [
        "Вставте текст або Base64.",
        "Оберіть Encode або Decode.",
        "Скопіюйте результат.",
      ],
      faq: [
        {
          q: "Чи підтримується UTF-8?",
          a: "Так — підтримуються символи Unicode.",
        },
      ],
    },
    "unix-timestamp": {
      category: "Для розробників",
      name: "Unix timestamp ↔ дата",
      description:
        "Перетворюйте Unix timestamp (секунди/мс) на дату і навпаки. Корисно для логів і API.",
      steps: [
        "Вставте timestamp або оберіть дату.",
        "Перегляньте результати ISO та локальні.",
        "Скопіюйте значення.",
      ],
      faq: [
        {
          q: "Секунди чи мілісекунди?",
          a: "Ми автоматично визначаємо одиницю за довжиною. Можна також примусово задати.",
        },
      ],
    },
    "generator-uuid": {
      category: "Для розробників",
      name: "Генератор UUID",
      description:
        "Згенеруйте UUID v4 (випадковий) одним кліком. За потреби створіть багато одразу.",
      steps: [
        "Встановіть кількість UUID.",
        "Натисніть Згенерувати.",
        "Скопіюйте список.",
      ],
      faq: [
        {
          q: "Яка версія UUID?",
          a: "UUID v4 — випадковий, RFC 4122, генерується в браузері.",
        },
      ],
    },
    "generator-hash": {
      category: "Для розробників",
      name: "Хеш SHA / MD5",
      description:
        "Обчисліть SHA-1, SHA-256, SHA-512 або MD5 тексту. Локально через Web Crypto.",
      steps: [
        "Вставте текст.",
        "Оберіть алгоритм.",
        "Скопіюйте hex-хеш.",
      ],
      faq: [
        {
          q: "Чи безпечний MD5?",
          a: "MD5 не підходить для паролів. Для безпеки використовуйте SHA-256+; MD5 лише для контрольних сум.",
        },
      ],
    },
    "json-formatter": {
      category: "Для розробників",
      name: "Форматувальник JSON",
      description: "Форматуйте та мініфікуйте JSON у браузері — без завантаження на сервер.",
      steps: ["Вставте JSON.", "Натисніть Форматувати або Мініфікувати.", "Скопіюйте результат."],
      faq: [{ q: "Чи завантажуються дані?", a: "Ні — обробка відбувається локально у вашому браузері." }],
    },
    "diff-tekstu": {
      category: "Текст",
      name: "Порівняння тексту (diff)",
      description: "Порівняйте два фрагменти тексту рядок за рядком і підсвітіть відмінності.",
      steps: ["Вставте текст A і B.", "Перегляньте підсвічені відмінності."],
      faq: [
        {
          q: "Чи це повний diff?",
          a: "Це порівняння рядок за рядком — ідеально для коротких фрагментів і списків.",
        },
      ],
    },
    "konwerter-wielkosci-liter": {
      category: "Текст",
      name: "Конвертер регістру",
      description: "Перетворюйте текст на великі, малі літери, Title Case або sentence case.",
      steps: ["Вставте текст.", "Оберіть режим.", "Скопіюйте результат."],
      faq: [],
    },
    "usun-duplikaty-linii": {
      category: "Текст",
      name: "Видалити дублікати рядків",
      description: "Видаліть повторювані рядки зі списків email, SKU або тегів.",
      steps: ["Вставте список.", "Встановіть параметри.", "Скопіюйте очищений список."],
      faq: [],
    },
    "dekoder-jwt": {
      category: "Для розробників",
      name: "Декодер JWT",
      description: "Прочитайте заголовок і payload токена JWT без перевірки підпису.",
      steps: ["Вставте токен.", "Перегляньте header і payload."],
      faq: [
        {
          q: "Чи перевіряється підпис?",
          a: "Ні — лише декодується Base64URL токена.",
        },
      ],
    },
    "walidator-nip-pesel": {
      category: "Для розробників",
      name: "Валідатор NIP / PESEL / REGON",
      description: "Перевірте польські податкові та ідентифікаційні номери за правилами контрольної суми.",
      steps: ["Введіть номер.", "Перегляньте результат валідації."],
      faq: [{ q: "Чи запитує GUS?", a: "Ні — лише контрольна сума та довжина." }],
    },
    "kalkulator-kredytu": {
      category: "Фінанси",
      name: "Калькулятор кредиту",
      description: "Обчисліть ануїтетний платіж, загальну суму погашення та вартість відсотків.",
      steps: ["Введіть суму, ставку та строк.", "Перегляньте щомісячний платіж."],
      faq: [
        {
          q: "Чи враховуються банківські комісії?",
          a: "Це спрощена симуляція без комісій і страхування.",
        },
      ],
    },
    "markdown-preview": {
      category: "Текст",
      name: "Попередній перегляд Markdown",
      description: "Пишіть Markdown і дивіться живий HTML-попередній перегляд у браузері.",
      steps: ["Введіть Markdown.", "Попередній перегляд оновлюється автоматично."],
      faq: [],
    },
    "sila-hasla": {
      category: "Для розробників",
      name: "Надійність пароля",
      description: "Оцініть надійність пароля за довжиною, різноманітністю символів і типовими шаблонами.",
      steps: ["Введіть пароль.", "Перегляньте оцінку та поради."],
      faq: [{ q: "Чи завантажується пароль?", a: "Ні — оцінка відбувається локально у вашому браузері." }],
    },
    "konwerter-napisow": {
      category: "Медіа",
      name: "Конвертер субтитрів SRT / VTT",
      description: "Конвертуйте субтитри між форматами SRT і WebVTT.",
      steps: ["Вставте субтитри.", "Оберіть напрямок або auto.", "Скопіюйте результат."],
      faq: [],
    },
    "generator-nazw-plikow": {
      category: "Текст",
      name: "Пакетне перейменування файлів",
      description: "Масово перейменовуйте файли за шаблоном з {name}, {ext}, {index}.",
      steps: ["Вставте список файлів.", "Встановіть шаблон.", "Скопіюйте нові імена."],
      faq: [],
    },
    "walidator-iban": {
      category: "Для розробників",
      name: "Валідатор IBAN",
      description: "Перевірте контрольну суму IBAN (mod 97) і довжину для країни.",
      steps: ["Вставте IBAN.", "Перегляньте відформатований результат і валідацію."],
      faq: [{ q: "Чи перевіряється банківський рахунок?", a: "Ні — лише формат і контрольна сума." }],
    },
    "kalkulator-b2b": {
      category: "Фінанси",
      name: "Калькулятор B2B vs працевлаштування",
      description: "Порівняйте «на руки» зарплату з працевлаштування з доходом за рахунком B2B (паушальний або лінійний податок).",
      steps: ["Введіть брутто зарплати та дохід B2B.", "Оберіть форму оподаткування.", "Порівняйте результати."],
      faq: [
        {
          q: "Чи це податкова консультація?",
          a: "Ні — спрощена симуляція для обговорення з бухгалтером.",
        },
      ],
    },
  },
  ...extraUtilityMaps,
}

export function getUtilityCategoryLabel(
  locale: Locale,
  category: UtilityCategory,
): string {
  const map = categoryLabels[locale] ?? categoryLabels.en
  return map[category] ?? categoryLabels.en[category]
}

export function getUtilityMeta(locale: Locale, id: UtilityToolId): UtilityMeta {
  const map = maps[locale] ?? maps.en
  return map[id] ?? maps.en[id]
}
