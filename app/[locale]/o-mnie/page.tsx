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
    title: "O mnie — Toolando.tech",
    description:
      "Poznaj Szymona, twórcę Toolando.tech — projektu z narzędziami online. Usługi informatyczne, serwis laptopów i tworzenie narzędzi webowych.",
    alternates: { canonical: `/${locale}/o-mnie` },
  }
}

export default function AboutMePage() {
  return (
    <ContentPageShell
      eyebrow="O mnie"
      title="Cześć, jestem Szymon — twórca Toolando"
      intro="Toolando.tech to mój autorski projekt, który rozwijam samodzielnie. Od pomysłu, przez kod, po treści, które teraz czytasz — wszystko powstaje w jednych rękach. Chcę, żeby proste zadania, takie jak konwersja pliku czy szybkie narzędzie online, były dostępne dla każdego, bez instalowania programów i bez zbędnych komplikacji."
    >
      <ContentSection title="Dlaczego powstało Toolando">
        <p>
          Na co dzień pracuję z komputerami i wielokrotnie widziałem, jak wiele
          czasu ludzie tracą na zadania, które powinny zająć chwilę — zamiana
          formatu pliku, wyciągnięcie dźwięku z nagrania czy szybka operacja,
          do której trzeba szukać przypadkowej strony pełnej reklam i pułapek.
        </p>
        <p>
          Toolando powstało po to, aby zebrać takie narzędzia w jednym,
          przejrzystym i bezpiecznym miejscu. Zależy mi na tym, żeby serwis był
          szybki, czytelny i uczciwy wobec użytkownika — bez naciągania i bez
          ukrytych kruczków.
        </p>
      </ContentSection>

      <ContentSection title="Jak działa Toolando">
        <p>
          Serwis udostępnia narzędzia online w dwóch wariantach: darmowym oraz
          premium.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-foreground">Narzędzia darmowe</strong> —
            dostępne dla każdego, bez zakładania konta. To codzienne, najczęściej
            używane funkcje, które chcę utrzymać otwarte dla wszystkich.
          </li>
          <li>
            <strong className="text-foreground">Narzędzia premium</strong> —
            bardziej zaawansowane funkcje lub większe limity, które pomagają
            utrzymać i rozwijać projekt. Środki z premium idą wprost na serwery,
            rozwój i nowe narzędzia.
          </li>
        </ul>
        <p>
          Niezależnie od wariantu stawiam na tę samą zasadę: przesyłane pliki
          służą wyłącznie do wykonania konwersji i nie są przeze mnie
          przechowywane.
        </p>
      </ContentSection>

      <ContentSection title="Co robię poza Toolando">
        <p>
          Zajmuję się usługami informatycznymi — pomagam osobom prywatnym i
          firmom w codziennych problemach ze sprzętem i oprogramowaniem.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>serwis i naprawa laptopów oraz komputerów,</li>
          <li>usługi informatyczne i wsparcie techniczne,</li>
          <li>tworzenie narzędzi i aplikacji webowych.</li>
        </ul>
        <p>
          Doświadczenie z serwisu i pracy z użytkownikami wprost przekłada się na
          to, jak projektuję Toolando — prosto, konkretnie i z myślą o realnych
          potrzebach.
        </p>
      </ContentSection>

      <ContentSection title="Kontakt">
        <p>
          Masz pytanie, pomysł na nowe narzędzie albo chcesz zgłosić problem?
          Napisz do mnie — chętnie odpowiem.
        </p>
        <p>
          E-mail:{" "}
          <a
            href="mailto:badyltech@outlook.com"
            className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
          >
            badyltech@outlook.com
          </a>
        </p>
      </ContentSection>
    </ContentPageShell>
  )
}
