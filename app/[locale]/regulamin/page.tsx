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
    title: "Regulamin — Toolando.tech",
    description:
      "Regulamin korzystania z Toolando.tech: narzędzia darmowe i premium, korzystanie na własną odpowiedzialność, brak przechowywania plików oraz reklamy Google AdSense.",
    alternates: { canonical: `/${locale}/regulamin` },
  }
}

export default function TermsPage() {
  return (
    <ContentPageShell
      eyebrow="Regulamin"
      title="Regulamin korzystania z Toolando.tech"
      intro="Poniższy regulamin określa zasady korzystania z serwisu Toolando.tech. Korzystanie z serwisu oznacza akceptację tych zasad."
    >
      <ContentSection title="1. Postanowienia ogólne">
        <p>
          Właścicielem serwisu Toolando.tech jest Szymon. Serwis udostępnia
          narzędzia online do konwersji plików, generowania treści oraz
          narzędzia wspierane sztuczną inteligencją.
        </p>
      </ContentSection>

      <ContentSection title="2. Narzędzia darmowe i premium">
        <p>
          Toolando oferuje narzędzia w dwóch wariantach:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-foreground">Darmowe</strong> — dostępne dla
            wszystkich, bez konieczności zakładania konta.
          </li>
          <li>
            <strong className="text-foreground">Premium</strong> — z bardziej
            zaawansowanymi funkcjami, większymi limitami oraz korzystaniem bez
            reklam.
          </li>
        </ul>
        <p>
          Zasady dotyczące ewentualnych płatności lub subskrypcji za funkcje
          premium są prezentowane w odpowiednich miejscach serwisu.
        </p>
      </ContentSection>

      <ContentSection title="3. Korzystanie na własną odpowiedzialność">
        <p>
          Z serwisu korzystasz na własną odpowiedzialność. Dokładam starań, aby
          narzędzia działały poprawnie, jednak serwis udostępniany jest w modelu
          „tak jak jest” (as is), bez gwarancji dostępności, poprawności wyników
          ani przydatności do konkretnego celu.
        </p>
        <p>Właściciel serwisu nie ponosi odpowiedzialności za:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>skutki wykorzystania wyników działania narzędzi,</li>
          <li>utracone korzyści,</li>
          <li>szkody wynikające z przerw w działaniu serwisu.</li>
        </ul>
        <p>
          Użytkownik zobowiązuje się korzystać z serwisu zgodnie z prawem i
          ponosi odpowiedzialność za treści oraz pliki, które przetwarza.
        </p>
      </ContentSection>

      <ContentSection title="4. Pliki użytkownika">
        <p>
          Pliki przesyłane do narzędzi nie są przechowywane. Służą wyłącznie do
          wykonania danej operacji i są usuwane po jej zakończeniu.
        </p>
      </ContentSection>

      <ContentSection title="5. Reklamy">
        <p>
          Serwis może wyświetlać reklamy Google AdSense. Reklamy pomagają
          utrzymać darmowe narzędzia i rozwijać projekt. Dostawca reklam może
          wykorzystywać pliki cookies zgodnie z Polityką prywatności.
        </p>
      </ContentSection>

      <ContentSection title="6. Prawa autorskie">
        <p>
          Nazwa Toolando.tech, elementy graficzne oraz treści serwisu podlegają
          ochronie prawnej. Zabronione jest ich kopiowanie i wykorzystywanie bez
          zgody właściciela.
        </p>
      </ContentSection>

      <ContentSection title="7. Kontakt">
        <p>
          W sprawach związanych z regulaminem możesz kontaktować się pod
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

      <ContentSection title="8. Zmiany regulaminu">
        <p>
          Regulamin może być aktualizowany w celu dostosowania go do zmian w
          serwisie lub w przepisach prawa. Aktualna wersja jest zawsze dostępna
          na tej stronie.
        </p>
      </ContentSection>
    </ContentPageShell>
  )
}
