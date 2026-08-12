"use client"

import Link from "next/link"
import { Crown, Check } from "lucide-react"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { BuyPremiumButton } from "@/components/BuyPremiumButton"
import { useI18n } from "@/components/i18n-provider"
import { useUser } from "@/hooks/use-user"
import { PREMIUM_PLAN } from "@/lib/premium"
import { JsonLd } from "@/components/json-ld"
import { premiumProductSchema } from "@/lib/seo/structured-data"

export default function PremiumPage() {
  const { t, href, locale } = useI18n()
  const { isLoggedIn } = useUser()

  const tiers = [
    { title: t.premiumPage.freeTitle, desc: t.premiumPage.freeDesc, price: "0", highlight: false },
    { title: t.premiumPage.premiumTitle, desc: t.premiumPage.premiumDesc, price: PREMIUM_PLAN.displayPrice, highlight: true },
    { title: t.premiumPage.supporterTitle, desc: t.premiumPage.supporterDesc, price: "—", highlight: false },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={premiumProductSchema(locale)} />
      <SiteNavbar />
      <main className="px-4 pb-20 pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <Crown className="mx-auto size-10 text-amber-300" aria-hidden="true" />
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">{t.premiumPage.title}</h1>
          <p className="mt-3 text-muted-foreground">{t.premiumPage.subtitle}</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className={`rounded-2xl border p-6 ${
                tier.highlight
                  ? "border-primary/40 bg-primary/[0.08] shadow-lg shadow-primary/10"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <h2 className="text-lg font-semibold">{tier.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{tier.desc}</p>
              <p className="mt-6 text-3xl font-bold">{tier.price}</p>
              {tier.highlight && (
                <ul className="mt-4 space-y-2 text-left text-sm text-muted-foreground">
                  {[t.paywall.feature1, t.paywall.feature2, t.paywall.feature3].map((f) => (
                    <li key={f} className="flex gap-2">
                      <Check className="size-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex justify-center">
          {isLoggedIn ? (
            <BuyPremiumButton
              label={t.premiumPage.cta}
              loadingLabel={t.paywall.redirecting}
              className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 text-sm font-semibold text-white"
            />
          ) : (
            <Link
              href="/sign-in"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 text-sm font-semibold text-white"
            >
              {t.premiumPage.signIn}
            </Link>
          )}
        </div>

        <section className="mx-auto mt-16 max-w-2xl">
          <h2 className="text-xl font-semibold">{t.premiumPage.faqTitle}</h2>
          <dl className="mt-6 space-y-6">
            {[
              [t.premiumPage.faq1q, t.premiumPage.faq1a],
              [t.premiumPage.faq2q, t.premiumPage.faq2a],
              [t.premiumPage.faq3q, t.premiumPage.faq3a],
            ].map(([q, a]) => (
              <div key={q}>
                <dt className="font-medium text-foreground">{q}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-muted-foreground">
          <Link href={href("/prywatnosc")} className="text-primary hover:underline">
            {t.privacyPage.readPolicy}
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  )
}
