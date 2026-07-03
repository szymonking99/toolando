import Link from "next/link"
import { redirect } from "next/navigation"
import { Crown, Check, Sparkles, ArrowLeft } from "lucide-react"
import { getCurrentUser, isUserPremium } from "@/lib/user"
import { PREMIUM_PLAN } from "@/lib/premium"
import { BuyPremiumButton } from "@/components/BuyPremiumButton"
import { SignOutButton } from "@/components/sign-out-button"

export default async function AccountPage() {
  const user = await getCurrentUser()
  if (!user) redirect("/sign-in")

  const premium = await isUserPremium(user.id)

  return (
    <main className="mx-auto flex min-h-svh w-full max-w-2xl flex-col gap-6 px-4 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Powrót do strony głównej
      </Link>

      {/* Nagłówek konta */}
      <section className="rounded-2xl border border-white/10 bg-background/60 p-6 backdrop-blur-xl">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">
              {user.name || "Twoje konto"}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">{user.email}</p>
          </div>
          {premium ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-sm font-semibold text-amber-300">
              <Crown className="size-4" aria-hidden="true" />
              Premium
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-muted-foreground">
              Konto darmowe
            </span>
          )}
        </div>
      </section>

      {/* Sekcja Premium */}
      <section className="rounded-2xl border border-white/10 bg-background/60 p-6 backdrop-blur-xl">
        {premium ? (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-foreground">
              <Sparkles className="size-5 text-amber-300" aria-hidden="true" />
              <h2 className="text-lg font-semibold">Masz aktywne Premium</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dziękujemy za wsparcie! Masz pełny dostęp do wszystkich narzędzi AI
              bez ograniczeń.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-foreground">
              <Crown className="size-5 text-amber-300" aria-hidden="true" />
              <h2 className="text-lg font-semibold">Przejdź na Premium</h2>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              {[
                "Nieograniczony dostęp do narzędzi AI",
                "Usuwanie tła, generowanie obrazów i tekstów",
                "Priorytetowe przetwarzanie",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check className="size-4 text-primary" aria-hidden="true" />
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
            <BuyPremiumButton className="w-full sm:w-auto" />
          </div>
        )}
      </section>

      <div className="flex justify-end">
        <SignOutButton />
      </div>
    </main>
  )
}
