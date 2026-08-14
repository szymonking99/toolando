import type { LegalDocumentData } from "@/components/legal-document"

export const privacyPl: LegalDocumentData = {
  eyebrow: "Polityka prywatności",
  title: "Polityka prywatności Toolando.tech",
  intro:
    "Niniejsza Polityka prywatności opisuje, jakie dane są przetwarzane w serwisie Toolando.tech, w jakim celu, na jakiej podstawie prawnej oraz jakie prawa przysługują Użytkownikowi. Dbam o prywatność i przetwarzam dane zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO) oraz ustawą o ochronie danych osobowych.",
  lastUpdated: "Ostatnia aktualizacja: 23 lipca 2026 r.",
  sections: [
    {
      title: "§1. Administrator danych",
      paragraphs: [
        "1.1. Administratorem danych osobowych (dalej: „Administrator”) jest Szymon, właściciel serwisu Toolando.tech, działający w związku z udostępnianiem narzędzi online.",
        "1.2. Kontakt w sprawach ochrony danych: {{email}}.",
        "1.3. Administrator nie powołał Inspektora Ochrony Danych, ponieważ nie jest to wymagane przepisami RODO w przypadku niniejszej działalności.",
      ],
    },
    {
      title: "§2. Jakie dane przetwarzamy",
      paragraphs: ["2.1. W zależności od sposobu korzystania z Serwisu przetwarzamy następujące kategorie danych:"],
      list: [
        "Dane techniczne i eksploatacyjne: adres IP, typ i wersja przeglądarki, system operacyjny, język, data i czas żądania, odwiedzane podstrony, źródło ruchu, identyfikatory cookies (po wyrażeniu zgody).",
        "Dane konta: adres e-mail, hasło (hash), identyfikator użytkownika, data rejestracji, status Premium, identyfikator klienta Stripe (jeśli dotyczy).",
        "Dane płatności: przetwarzane przez Stripe — Administrator nie przechowuje pełnych numerów kart płatniczych.",
        "Dane korespondencji: adres e-mail, treść wiadomości, data kontaktu — gdy piszesz na {{email}} lub przez formularz kontaktowy.",
        "Pliki użytkownika: przetwarzane wyłącznie tymczasowo w celu wykonania operacji w narzędziu — nie są przechowywane po zakończeniu konwersji.",
      ],
    },
    {
      title: "§3. Cele i podstawy prawne przetwarzania",
      paragraphs: ["3.1. Dane przetwarzamy w następujących celach:"],
      definitions: [
        {
          term: "Świadczenie usług Serwisu",
          description:
            "Konwersja plików, działanie narzędzi, obsługa Konta — podstawa: art. 6 ust. 1 lit. b RODO (wykonanie umowy) lub lit. f (prawnie uzasadniony interes: utrzymanie działania Serwisu).",
        },
        {
          term: "Subskrypcja Premium",
          description:
            "Obsługa płatności i subskrypcji — podstawa: art. 6 ust. 1 lit. b RODO; rozliczenia: art. 6 ust. 1 lit. c (obowiązek prawny).",
        },
        {
          term: "Analityka ruchu",
          description:
            "Google Analytics — wyłącznie po wyrażeniu zgody na cookies analityczne — podstawa: art. 6 ust. 1 lit. a RODO (zgoda).",
        },
        {
          term: "Reklamy",
          description:
            "Google AdSense — wyłącznie po wyrażeniu zgody na cookies reklamowych — podstawa: art. 6 ust. 1 lit. a RODO (zgoda).",
        },
        {
          term: "Bezpieczeństwo",
          description:
            "Ochrona przed nadużyciami, logi serwera — podstawa: art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes Administratora).",
        },
        {
          term: "Kontakt i reklamacje",
          description:
            "Odpowiedź na wiadomości — podstawa: art. 6 ust. 1 lit. f RODO lub lit. b (gdy dotyczy zawartej umowy).",
        },
      ],
    },
    {
      title: "§4. Pliki cookies i podobne technologie",
      paragraphs: [
        "4.1. Serwis korzysta z plików cookies i podobnych technologii. Przy pierwszej wizycie wyświetlamy baner zgody, w którym możesz zaakceptować wszystkie cookies lub ograniczyć się do niezbędnych.",
        "4.2. Rodzaje cookies:",
      ],
      list: [
        "Niezbędne — wymagane do działania Serwisu (np. język, sesja, preferencje cookies). Nie wymagają zgody.",
        "Analityczne — Google Analytics, statystyki odwiedzin w formie zbiorczej. Wymagają zgody.",
        "Reklamowe — Google AdSense, personalizacja reklam. Wymagają zgody.",
      ],
      afterList: [
        "4.3. W każdej chwili możesz zmienić decyzję dotyczącą cookies w banerze lub ustawieniach przeglądarki.",
      ],
    },
    {
      title: "§5. Odbiorcy danych i podmioty przetwarzające",
      paragraphs: [
        "5.1. Dane mogą być przekazywane zaufanym podmiotom przetwarzającym dane w imieniu Administratora:",
      ],
      list: [
        "Vercel Inc. — hosting i infrastruktura Serwisu (USA, standardowe klauzule umowne UE).",
        "Stripe, Inc. — obsługa płatności Premium (USA/Irlandia, certyfikacja PCI DSS).",
        "Google LLC — Analytics i AdSense (po wyrażeniu zgody; polityka partnerów: https://policies.google.com/technologies/partner-sites).",
        "Resend — wysyłka e-maili transakcyjnych (np. powitanie po rejestracji), jeśli skonfigurowane.",
        "Dostawcy modeli AI — przetwarzanie promptów i plików wyłącznie w ramach narzędzi Premium AI, bez przechowywania po zakończeniu operacji.",
      ],
      afterList: [
        "5.2. Administrator nie sprzedaje danych osobowych podmiotom trzecim.",
      ],
    },
    {
      title: "§6. Pliki przesyłane do narzędzi",
      paragraphs: [
        "6.1. Pliki przesyłane do konwerterów i innych narzędzi nie są przechowywane po zakończeniu operacji.",
        "6.2. Pliki nie są wykorzystywane do trenowania modeli AI, profilowania ani marketingu.",
        "6.3. Część narzędzi (np. uniwersalny otwieracz) przetwarza pliki wyłącznie lokalnie w przeglądarce — wtedy plik nie opuszcza urządzenia Użytkownika.",
        "6.4. Nie przesyłaj do Serwisu plików zawierających dane wrażliwe (np. dane zdrowotne, PESEL), chyba że jest to absolutnie konieczne — robisz to na własną odpowiedzialność.",
      ],
    },
    {
      title: "§7. Okres przechowywania danych",
      paragraphs: ["7.1. Dane przechowujemy przez następujące okresy:"],
      list: [
        "Dane konta — do momentu usunięcia Konta lub żądania usunięcia danych.",
        "Logi serwera — do 90 dni, chyba że dłuższe przechowywanie jest wymagane do ustalenia roszczeń.",
        "Dane korespondencji — do 3 lat od zakończenia sprawy.",
        "Dane rozliczeniowe (Stripe) — zgodnie z wymogami prawa podatkowego (zwykle 5 lat).",
        "Pliki użytkownika — usuwane natychmiast po zakończeniu operacji (zwykle sekundy do minut).",
        "Preferencje cookies — do 12 miesięcy lub do wycofania zgody.",
      ],
    },
    {
      title: "§8. Prawa Użytkownika (RODO)",
      paragraphs: ["8.1. Przysługują Ci następujące prawa:"],
      list: [
        "Prawo dostępu do danych (art. 15 RODO).",
        "Prawo do sprostowania danych (art. 16 RODO).",
        "Prawo do usunięcia danych — „prawo do bycia zapomnianym” (art. 17 RODO).",
        "Prawo do ograniczenia przetwarzania (art. 18 RODO).",
        "Prawo do przenoszenia danych (art. 20 RODO).",
        "Prawo sprzeciwu wobec przetwarzania opartego na art. 6 ust. 1 lit. f RODO (art. 21 RODO).",
        "Prawo wycofania zgody w dowolnym momencie — bez wpływu na zgodność z prawem przetwarzania przed wycofaniem (art. 7 ust. 3 RODO).",
        "Prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO), ul. Stawki 2, 00-193 Warszawa, uodo.gov.pl.",
      ],
      afterList: [
        "8.2. Aby skorzystać z praw, napisz na {{email}}. Odpowiem bez zbędnej zwłoki, nie później niż w terminie 30 dni.",
      ],
    },
    {
      title: "§9. Bezpieczeństwo danych",
      paragraphs: [
        "9.1. Stosuję środki techniczne i organizacyjne adekwatne do ryzyka, w tym szyfrowanie połączenia HTTPS, ograniczony dostęp do systemów oraz usuwanie plików po przetworzeniu.",
        "9.2. Żaden system nie jest w 100% bezpieczny. W przypadku naruszenia ochrony danych osobowych, które może powodować wysokie ryzyko dla Twoich praw, poinformuję Cię zgodnie z art. 34 RODO.",
      ],
    },
    {
      title: "§10. Dzieci",
      paragraphs: [
        "10.1. Serwis nie jest skierowany do dzieci poniżej 16 roku życia. Nie przetwarzam świadomie danych dzieci poniżej tego wieku bez zgody opiekuna prawnego.",
        "10.2. Jeśli uważasz, że dziecko przekazało nam dane bez zgody opiekuna, skontaktuj się: {{email}} — dane zostaną usunięte.",
      ],
    },
    {
      title: "§11. Zmiany Polityki prywatności",
      paragraphs: [
        "11.1. Polityka prywatności może być aktualizowana w celu odzwierciedlenia zmian w Serwisie, technologiach lub przepisach prawa.",
        "11.2. O istotnych zmianach poinformuję poprzez komunikat w Serwisie lub e-mail (dla użytkowników z Kontem).",
        "11.3. Aktualna wersja jest zawsze dostępna pod adresem /polityka-prywatnosci.",
      ],
    },
  ],
  footerNote:
    "Pytania dotyczące prywatności: {{email}}. Regulamin Serwisu dostępny jest pod adresem /regulamin.",
}
