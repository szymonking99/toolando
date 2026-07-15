import type { Metadata } from "next"
import { ChevronDown } from "lucide-react"
import { ContentPageShell } from "@/components/content-page-shell"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: "FAQ — najczęstsze pytania — Toolando.tech",
    description:
      "Odpowiedzi na najczęstsze pytania o Toolando.tech: narzędzia darmowe i premium, bezpieczeństwo plików, prywatność, działanie narzędzi i kontakt.",
    alternates: { canonical: `/${locale}/faq` },
  }
}

const faqs: { q: string; a: string }[] = [
  {
    q: "Czy narzędzia Toolando są darmowe?",
    a: "Większość narzędzi jest w pełni darmowa i dostępna bez zakładania konta. Część bardziej zaawansowanych funkcji oraz większe limity dostępne są w wariancie premium, który wspiera utrzymanie i rozwój serwisu.",
  },
  {
    q: "Czym różnią się narzędzia darmowe od premium?",
    a: "Narzędzia darmowe pokrywają codzienne, najczęstsze zadania i są otwarte dla każdego. Premium oferuje bardziej zaawansowane funkcje, większe pliki lub limity oraz korzystanie bez reklam. Zasada bezpieczeństwa plików jest w obu wariantach taka sama.",
  },
  {
    q: "Czy moje pliki są bezpieczne?",
    a: "Tak. Przesyłane pliki służą wyłącznie do wykonania konwersji i nie są przeze mnie przechowywane. Część operacji wykonywana jest lokalnie w przeglądarce, a jeśli plik trafia na serwer, jest przetwarzany tylko na czas zadania i następnie usuwany.",
  },
  {
    q: "Czy Toolando przechowuje przesyłane pliki?",
    a: "Nie. Nie zapisuję Twoich plików po zakończeniu operacji i nie wykorzystuję ich do żadnych innych celów.",
  },
  {
    q: "Jak dbasz o moją prywatność?",
    a: "Przetwarzam jedynie dane techniczne i statystyczne (np. adres IP, typ przeglądarki, system, ruch na stronie), zgodnie z RODO. Szczegóły znajdziesz w Polityce prywatności. Do korzystania z narzędzi darmowych nie musisz podawać danych osobowych.",
  },
  {
    q: "Czy muszę zakładać konto, aby korzystać z narzędzi?",
    a: "Nie. Narzędzia darmowe działają bez konta. Konto może być potrzebne jedynie do funkcji premium.",
  },
  {
    q: "Czy na stronie są reklamy?",
    a: "Tak, serwis może wyświetlać reklamy Google AdSense, które pomagają utrzymać darmowe narzędzia. Wariant premium pozwala korzystać z serwisu bez reklam.",
  },
  {
    q: "Jak działają narzędzia online?",
    a: "Otwierasz narzędzie w przeglądarce, wybierasz plik lub wpisujesz dane, a wynik otrzymujesz od razu — bez instalowania programów. Więcej szczegółów opisałem na stronie „Jak to działa?”.",
  },
  {
    q: "Jak mogę się skontaktować?",
    a: "Napisz na adres badyltech@outlook.com lub skorzystaj z formularza kontaktowego. Odpowiadam najszybciej, jak to możliwe.",
  },
]

export default function FaqPage() {
  return (
    <ContentPageShell
      eyebrow="FAQ"
      title="Najczęściej zadawane pytania"
      intro="Zebrałem tu odpowiedzi na pytania, które pojawiają się najczęściej. Jeśli nie znajdziesz tego, czego szukasz, napisz do mnie na badyltech@outlook.com."
    >
      <div className="space-y-3">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 [&_svg]:open:rotate-180"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-foreground">
              {item.q}
              <ChevronDown
                className="size-5 shrink-0 text-muted-foreground transition-transform"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </ContentPageShell>
  )
}
