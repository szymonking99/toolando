import Link from "next/link"
import { Crown, Check, Lock } from "lucide-react"
import { PREMIUM_PLAN } from "@/lib/premium"
import { BuyPremiumButton } from "@/components/BuyPremiumButton"

type PremiumPaywallProps = {
  /** true, gdy użytkownik jest zalogowany, ale nie ma Premium. */
  isLoggedIn: boolean
  toolName: string
}

/**
 * Ekran blokady dla narzędzi AI dostępnych tylko w Premium.
 * Gość widzi zachętę do logowania, zalogowany bez Premium — przycisk zakupu.
 */
export function PremiumPaywall({ isLoggedIn, toolName }: PremiumPaywallProps) {
  return (
    <div className="flex flex-col items-center gap-6 px-4 py-8 text-center">
      <span className="flex size-14 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300 ring-1 ring-amber-400/30">
        <Lock className="size-6" aria-hidden="true" />
      </span>

      <div className="max-w-md">
        <h2 className="text-xl font-semibold tracking-tight text-foreground text-balance">
          {toolName} jest dostępne w Premium
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Odblokuj wszystkie narzędzia AI Toolando — generowanie tekstów i
          obrazów, tłumaczenia, podsumowania i asystenta — w jednym abonamencie.
        </p>
      </div>

      <ul className="flex flex-col gap-2 text-left text-sm text-muted-foreground">
        {[
          "Nieograniczony dostęp do wszystkich narzędzi AI",
          "Generator tekstu, obrazów i tłumacz",
          "Priorytetowe przetwarzanie zapytań",
        ].map((f) => (
          <li key={f} className="flex items-center gap-2">
            <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>

      <div className="flex items-baseline gap-1.5">
        <span className="text-3xl font-bold text-foreground">
          {PREMIUM_PLAN.displayPrice}
        </span>
        <span className="text-sm text-muted-foreground">
          / {PREMIUM_PLAN.displayPeriod}
        </span>
      </div>

      {isLoggedIn ? (
        <BuyPremiumButton
          label="Przejdź na Premium"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-50"
        />
      ) : (
        <div className="flex flex-col items-center gap-3">
          <Link
            href="/sign-in"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-transform hover:scale-[1.03]"
          >
            <Crown className="size-4" aria-hidden="true" />
            Zaloguj się, aby kupić Premium
          </Link>
          <p className="text-xs text-muted-foreground">
            Nie masz konta?{" "}
            <Link
              href="/sign-up"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Zarejestruj się
            </Link>
          </p>
        </div>
      )}
    </div>
  )
}
