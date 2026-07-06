import Link from "next/link"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { Crown, Check, Sparkles, ArrowLeft } from "lucide-react"
import { getCurrentUser, isUserPremium } from "@/lib/user"
import { PREMIUM_PLAN } from "@/lib/premium"
import { BuyPremiumButton } from "@/components/BuyPremiumButton"
import { ManageSubscriptionButton } from "@/components/manage-subscription-button"
import { RefreshPremiumButton } from "@/components/refresh-premium-button"
import { SignOutButton } from "@/components/sign-out-button"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { fallbackLocale } from "@/lib/i18n/config"

export default async function AccountPage() {
  const user = await getCurrentUser()
  if (!user) redirect("/sign-in")

  const premium = await isUserPremium(user.id)

  const cookieStore = await cookies()
  const locale = cookieStore.get("toolando-locale")?.value || fallbackLocale
  const dict = await getDictionary(locale)
  const t = dict.account

  return (
    <main className="mx-auto flex min-h-svh w-full max-w-2xl flex-col gap-6 px-4 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        {t.backToHome}
      </Link>

      {/* Nagłówek konta */}
      <section className="rounded-2xl border border-white/10 bg-background/60 p-6 backdrop-blur-xl">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">
              {user.name || t.yourAccount}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">{user.email}</p>
          </div>
          {premium ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-sm font-semibold text-amber-300">
              <Crown className="size-4" aria-hidden="true" />
              {t.premiumBadge}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-muted-foreground">
              {t.freeBadge}
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
              <h2 className="text-lg font-semibold">{t.premiumActiveTitle}</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.premiumActiveDesc}
            </p>
            <div className="mt-2">
              <ManageSubscriptionButton
                label={t.manageSubscription}
                loadingLabel={t.manageOpening}
                portalError={t.managePortalError}
                genericError={t.manageGenericError}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-foreground">
              <Crown className="size-5 text-amber-300" aria-hidden="true" />
              <h2 className="text-lg font-semibold">{t.goPremiumTitle}</h2>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              {[t.feature1, t.feature2, t.feature3].map((f) => (
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
            <BuyPremiumButton
              label={t.buyPremium}
              loadingLabel={t.buyRedirecting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            />
            <div className="mt-1 border-t border-white/10 pt-4">
              <p className="mb-2 text-xs text-muted-foreground">
                {t.refreshHint}
              </p>
              <RefreshPremiumButton
                label={t.refreshStatus}
                loadingLabel={t.refreshChecking}
                noSubMessage={t.refreshNoSub}
                failedMessage={t.refreshFailed}
                networkErrorMessage={t.refreshNetworkError}
              />
            </div>
          </div>
        )}
      </section>

      <div className="flex justify-end">
        <SignOutButton label={t.signOut} />
      </div>
    </main>
  )
}
