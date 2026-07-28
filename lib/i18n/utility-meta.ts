import type { Locale } from "./config"
import type { UtilityToolId, UtilityCategory } from "@/lib/utility-tools"

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
  },
  en: {
    finance: "Finance",
    time: "Time & dates",
    units: "Units",
    text: "Text",
    dev: "Developer",
    media: "Media",
  },
  de: {
    finance: "Finanzen",
    time: "Zeit & Daten",
    units: "Einheiten",
    text: "Text",
    dev: "Entwickler",
    media: "Medien",
  },
  es: {
    finance: "Finanzas",
    time: "Tiempo y fechas",
    units: "Unidades",
    text: "Texto",
    dev: "Desarrolladores",
    media: "Medios",
  },
  uk: {
    finance: "Фінанси",
    time: "Час і дати",
    units: "Одиниці",
    text: "Текст",
    dev: "Для розробників",
    media: "Медіа",
  },
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
}

const maps: Record<string, UtilityMetaMap> = {
  pl,
  en,
  de: {
    ...en,
    "przelicznik-walut": {
      ...en["przelicznik-walut"],
      category: "Finanzen",
      name: "Währungsrechner",
      description:
        "Währungen online mit aktuellen EZB-Referenzkursen umrechnen. PLN, EUR, USD und viele weitere Paare.",
    },
    "kalkulator-dat": {
      ...en["kalkulator-dat"],
      category: "Zeit & Daten",
      name: "Datumsrechner",
      description:
        "Tage zwischen zwei Daten, Werktage und Wochentag berechnen — nützlich für Fristen und Verträge.",
    },
    "strefy-czasowe": {
      ...en["strefy-czasowe"],
      category: "Zeit & Daten",
      name: "Zeitzonenunterschied",
      description:
        "Ortszeiten vergleichen, Stundenunterschied sehen und Städte auf einer einfachen Weltkarte markieren.",
    },
    "przelicznik-jednostek": {
      ...en["przelicznik-jednostek"],
      category: "Einheiten",
      name: "Einheitenumrechner",
    },
    "kalkulator-vat": {
      ...en["kalkulator-vat"],
      category: "Finanzen",
      name: "MwSt- und Prozentrechner",
    },
    "kalkulator-wieku": {
      ...en["kalkulator-wieku"],
      category: "Zeit & Daten",
      name: "Alters- und Countdown-Rechner",
    },
    "generator-hasel": {
      ...en["generator-hasel"],
      category: "Entwickler",
      name: "Passwortgenerator",
    },
    "licznik-znakow": {
      ...en["licznik-znakow"],
      category: "Text",
      name: "Zeichen- und Wortzähler",
    },
    "generator-qr": {
      ...en["generator-qr"],
      category: "Entwickler",
      name: "QR-Code-Generator",
    },
    "kalkulator-bitrate": {
      ...en["kalkulator-bitrate"],
      category: "Medien",
      name: "Dateigrößen- und Bitrate-Rechner",
    },
    "konwerter-kolorow": {
      ...en["konwerter-kolorow"],
      category: "Entwickler",
      name: "Farbkonverter HEX RGB HSL",
    },
    base64: { ...en.base64, category: "Entwickler", name: "Base64 kodieren / dekodieren" },
    "unix-timestamp": {
      ...en["unix-timestamp"],
      category: "Entwickler",
      name: "Unix-Zeitstempel ↔ Datum",
    },
    "generator-uuid": {
      ...en["generator-uuid"],
      category: "Entwickler",
      name: "UUID-Generator",
    },
    "generator-hash": {
      ...en["generator-hash"],
      category: "Entwickler",
      name: "SHA- / MD5-Hash",
    },
  },
  es: {
    ...en,
    "przelicznik-walut": {
      ...en["przelicznik-walut"],
      category: "Finanzas",
      name: "Conversor de divisas",
      description:
        "Convierte divisas online con tipos de referencia del BCE. PLN, EUR, USD y muchas más pares.",
    },
    "kalkulator-dat": {
      ...en["kalkulator-dat"],
      category: "Tiempo y fechas",
      name: "Calculadora de fechas",
    },
    "strefy-czasowe": {
      ...en["strefy-czasowe"],
      category: "Tiempo y fechas",
      name: "Diferencia de husos horarios",
    },
    "przelicznik-jednostek": {
      ...en["przelicznik-jednostek"],
      category: "Unidades",
      name: "Conversor de unidades",
    },
    "kalkulator-vat": {
      ...en["kalkulator-vat"],
      category: "Finanzas",
      name: "Calculadora de IVA y porcentajes",
    },
    "kalkulator-wieku": {
      ...en["kalkulator-wieku"],
      category: "Tiempo y fechas",
      name: "Calculadora de edad y cuenta atrás",
    },
    "generator-hasel": {
      ...en["generator-hasel"],
      category: "Desarrolladores",
      name: "Generador de contraseñas",
    },
    "licznik-znakow": {
      ...en["licznik-znakow"],
      category: "Texto",
      name: "Contador de caracteres y palabras",
    },
    "generator-qr": {
      ...en["generator-qr"],
      category: "Desarrolladores",
      name: "Generador de códigos QR",
    },
    "kalkulator-bitrate": {
      ...en["kalkulator-bitrate"],
      category: "Medios",
      name: "Calculadora de tamaño y bitrate",
    },
    "konwerter-kolorow": {
      ...en["konwerter-kolorow"],
      category: "Desarrolladores",
      name: "Conversor de color HEX RGB HSL",
    },
    base64: {
      ...en.base64,
      category: "Desarrolladores",
      name: "Base64 codificar / decodificar",
    },
    "unix-timestamp": {
      ...en["unix-timestamp"],
      category: "Desarrolladores",
      name: "Timestamp Unix ↔ fecha",
    },
    "generator-uuid": {
      ...en["generator-uuid"],
      category: "Desarrolladores",
      name: "Generador UUID",
    },
    "generator-hash": {
      ...en["generator-hash"],
      category: "Desarrolladores",
      name: "Hash SHA / MD5",
    },
  },
  uk: {
    ...en,
    "przelicznik-walut": {
      ...en["przelicznik-walut"],
      category: "Фінанси",
      name: "Конвертер валют",
      description:
        "Конвертуйте валюти онлайн за курсами ЄЦБ. PLN, EUR, USD та десятки інших пар.",
    },
    "kalkulator-dat": {
      ...en["kalkulator-dat"],
      category: "Час і дати",
      name: "Калькулятор дат",
    },
    "strefy-czasowe": {
      ...en["strefy-czasowe"],
      category: "Час і дати",
      name: "Різниця часових поясів",
    },
    "przelicznik-jednostek": {
      ...en["przelicznik-jednostek"],
      category: "Одиниці",
      name: "Конвертер одиниць",
    },
    "kalkulator-vat": {
      ...en["kalkulator-vat"],
      category: "Фінанси",
      name: "Калькулятор ПДВ і відсотків",
    },
    "kalkulator-wieku": {
      ...en["kalkulator-wieku"],
      category: "Час і дати",
      name: "Калькулятор віку та зворотного відліку",
    },
    "generator-hasel": {
      ...en["generator-hasel"],
      category: "Для розробників",
      name: "Генератор паролів",
    },
    "licznik-znakow": {
      ...en["licznik-znakow"],
      category: "Текст",
      name: "Лічильник символів і слів",
    },
    "generator-qr": {
      ...en["generator-qr"],
      category: "Для розробників",
      name: "Генератор QR-кодів",
    },
    "kalkulator-bitrate": {
      ...en["kalkulator-bitrate"],
      category: "Медіа",
      name: "Калькулятор розміру файлу та бітрейту",
    },
    "konwerter-kolorow": {
      ...en["konwerter-kolorow"],
      category: "Для розробників",
      name: "Конвертер кольорів HEX RGB HSL",
    },
    base64: {
      ...en.base64,
      category: "Для розробників",
      name: "Base64 кодування / декодування",
    },
    "unix-timestamp": {
      ...en["unix-timestamp"],
      category: "Для розробників",
      name: "Unix timestamp ↔ дата",
    },
    "generator-uuid": {
      ...en["generator-uuid"],
      category: "Для розробників",
      name: "Генератор UUID",
    },
    "generator-hash": {
      ...en["generator-hash"],
      category: "Для розробників",
      name: "Хеш SHA / MD5",
    },
  },
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
