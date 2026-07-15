import type { Metadata } from "next"
import {
  ContentPageShell,
  ContentSection,
} from "@/components/content-page-shell"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: "Polityka prywatności — Toolando.tech",
    description:
      "Polityka prywatności Toolando.tech: jakie dane są przetwarzane, pliki cookies (techniczne, analityczne, reklamowe) oraz Twoje prawa zgodnie z RODO.",
    alternates: { canonical: `/${locale}/polityka-prywatnosci` },
  }
}

export default function PrivacyPolicyPage() {
  return (
    <ContentPageShell
      eyebrow="Polityka prywatności"
      title="Polityka prywatności Toolando.tech"
      intro="Toolando.tech to serwis udostępniający narzędzia online w wariancie darmowym i premium. Dbam o prywatność użytkowników i przetwarzam dane zgodnie z obowiązującymi przepisami, w tym z RODO."
    >
      <ContentSection title="1. Administrator danych">
        <p>
          Administratorem danych jest Szymon, właściciel serwisu Toolando.tech.
          W sprawach związanych z prywatnością możesz kontaktować się pod
          adresem:{" "}
          <a
            href="mailto:badyltech@outlook.com"
            className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
          >
            badyltech@outlook.com
          </a>
          .
        </p>
      </ContentSection>

      <ContentSection title="2. Jakie dane są przetwarzane">
        <p>
          Serwis przetwarza dane techniczne i statystyczne, które są zbierane
          automatycznie podczas korzystania ze strony:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>adres IP,</li>
          <li>typ i wersja przeglądarki,</li>
          <li>system operacyjny urządzenia,</li>
          <li>
            dane o ruchu i sposobie korzystania ze strony (np. odwiedzane
            podstrony).
          </li>
        </ul>
        <p>
          Jeśli kontaktujesz się przez e-mail lub formularz, przetwarzam także
          podany przez Ciebie adres e-mail oraz treść wiadomości.
        </p>
      </ContentSection>

      <ContentSection title="3. Pliki przesyłane do narzędzi">
        <p>
          Pliki, które przesyłasz do narzędzi w celu konwersji lub innej
          operacji, nie są przeze mnie przechowywane. Służą wyłącznie do
          wykonania zadania, o które prosisz, i są usuwane po jego zakończeniu.
          Nie wykorzystuję ich do żadnych innych celów.
        </p>
      </ContentSection>

      <ContentSection title="4. Pliki cookies">
        <p>Serwis korzysta z następujących rodzajów plików cookies:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-foreground">Techniczne</strong> — niezbędne
            do poprawnego działania strony i zapamiętania ustawień (np. języka).
          </li>
          <li>
            <strong className="text-foreground">Analityczne</strong> — narzędzia
            statystyczne (np. Google Analytics), które pomagają zrozumieć, jak
            używana jest strona, w formie zbiorczej i anonimowej.
          </li>
          <li>
            <strong className="text-foreground">Reklamowe</strong> — Google
            AdSense, który może wykorzystywać pliki cookies do wyświetlania i
            personalizacji reklam.
          </li>
        </ul>
        <p>
          W każdej chwili możesz zarządzać plikami cookies lub je wyłączyć w
          ustawieniach swojej przeglądarki.
        </p>
      </ContentSection>

      <ContentSection title="5. Narzędzia darmowe i premium">
        <p>
          Toolando udostępnia narzędzia darmowe (dostępne bez konta) oraz
          narzędzia premium. Zasady przetwarzania danych i ochrony plików są
          takie same w obu wariantach — różnią się one jedynie zakresem funkcji i
          limitami.
        </p>
      </ContentSection>

      <ContentSection title="6. Cel przetwarzania danych">
        <p>Dane przetwarzam wyłącznie w następujących celach:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>zapewnienia poprawnego i bezpiecznego działania serwisu,</li>
          <li>analizy statystycznej ruchu i ulepszania narzędzi,</li>
          <li>wyświetlania reklam,</li>
          <li>obsługi kontaktu z użytkownikiem.</li>
        </ul>
      </ContentSection>

      <ContentSection title="7. Twoje prawa">
        <p>Masz prawo do:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>dostępu do swoich danych,</li>
          <li>ich sprostowania lub usunięcia,</li>
          <li>ograniczenia przetwarzania,</li>
          <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
        </ul>
      </ContentSection>

      <ContentSection title="8. Zmiany polityki">
        <p>
          Polityka prywatności może być aktualizowana w celu dostosowania jej do
          zmian w serwisie lub w przepisach prawa. Aktualna wersja jest zawsze
          dostępna na tej stronie.
        </p>
      </ContentSection>
    </ContentPageShell>
  )
}
