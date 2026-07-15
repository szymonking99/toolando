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
    title: "Jak to działa? — Toolando.tech",
    description:
      "Dowiedz się, jak działają narzędzia online w Toolando.tech: przetwarzanie plików, bezpieczeństwo oraz różnica między narzędziami darmowymi a premium.",
    alternates: { canonical: `/${locale}/jak-to-dziala` },
  }
}

export default function HowItWorksPage() {
  return (
    <ContentPageShell
      eyebrow="Jak to działa?"
      title="Jak działają narzędzia w Toolando"
      intro="Toolando.tech to zestaw narzędzi online, które uruchamiasz wprost w przeglądarce — bez instalowania programów. Poniżej wyjaśniam, jak przebiega przetwarzanie plików, jak dbam o bezpieczeństwo i czym różnią się narzędzia darmowe od premium."
    >
      <ContentSection title="Narzędzia działające w przeglądarce">
        <p>
          Otwierasz narzędzie, wybierasz plik lub wpisujesz dane, a wynik
          otrzymujesz od razu na stronie. Nie musisz zakładać konta, aby
          korzystać z narzędzi darmowych, i nie musisz niczego instalować na
          swoim komputerze.
        </p>
      </ContentSection>

      <ContentSection title="Jak przetwarzane są pliki">
        <p>
          W zależności od rodzaju narzędzia pliki są przetwarzane na dwa sposoby:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-foreground">Lokalnie w przeglądarce</strong>{" "}
            — część operacji odbywa się bezpośrednio na Twoim urządzeniu, a plik
            w ogóle nie opuszcza komputera.
          </li>
          <li>
            <strong className="text-foreground">Tymczasowo na serwerze</strong>{" "}
            — gdy narzędzie wymaga większej mocy obliczeniowej, plik jest
            przetwarzany na serwerze wyłącznie na czas wykonania konwersji, a
            następnie usuwany.
          </li>
        </ul>
        <p>
          W żadnym z tych przypadków nie przechowuję Twoich plików ani nie
          wykorzystuję ich do innych celów.
        </p>
      </ContentSection>

      <ContentSection title="Bezpieczeństwo">
        <p>
          Bezpieczeństwo i prywatność są dla mnie priorytetem. Połączenie ze
          stroną jest szyfrowane, a pliki służą wyłącznie do wykonania zadania,
          o które prosisz.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>przesyłane pliki nie są przechowywane po zakończeniu operacji,</li>
          <li>nie sprzedaję i nie udostępniam Twoich danych,</li>
          <li>
            do korzystania z narzędzi darmowych nie musisz podawać danych
            osobowych.
          </li>
        </ul>
      </ContentSection>

      <ContentSection title="Narzędzia darmowe a premium">
        <p>
          Toolando oferuje narzędzia w dwóch wariantach, ale zasada
          bezpieczeństwa jest w obu taka sama.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-foreground">Darmowe</strong> — dostępne dla
            wszystkich, bez konta. Idealne do codziennych, szybkich zadań.
          </li>
          <li>
            <strong className="text-foreground">Premium</strong> — bardziej
            zaawansowane funkcje oraz większe limity lub pliki. Premium wspiera
            utrzymanie serwerów i rozwój kolejnych narzędzi.
          </li>
        </ul>
      </ContentSection>
    </ContentPageShell>
  )
}
