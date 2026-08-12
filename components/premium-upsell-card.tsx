"use client"

import Link from "next/link"
import { Crown, Sparkles, Shield, Zap } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { PREMIUM_PLAN } from "@/lib/premium"
import { BuyPremiumButton } from "@/components/BuyPremiumButton"

export function PremiumUpsellCard({ className }: { className?: string }) {
  const { t, href } = useI18n()

  return (
    <div
      className={`mx-auto w-full max-w-2xl rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/[0.12] to-white/[0.03] p-6 text-center ${className ?? ""}`}
    >
      <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300">
        <Crown className="size-3.5" aria-hidden="true" />
        Premium
      </span>
      <h3 className="mt-4 text-lg font-semibold text-foreground">
        {t.premiumUpsell.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {t.premiumUpsell.description}
      </p>
      <ul className="mt-4 space-y-2 text-left text-sm text-muted-foreground">
        {[t.premiumUpsell.point1, t.premiumUpsell.point2, t.premiumUpsell.point3].map(
          (item) => (
            <li key={item} className="flex items-start gap-2">
              <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" />
              {item}
            </li>
          ),
        )}
      </ul>
      <p className="mt-5 text-2xl font-bold text-foreground">
        {PREMIUM_PLAN.displayPrice}
        <span className="text-sm font-normal text-muted-foreground">
          {" "}
          / {PREMIUM_PLAN.displayPeriod}
        </span>
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
        <BuyPremiumButton
          label={t.premiumUpsell.cta}
          loadingLabel={t.paywall.redirecting}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-transform hover:scale-[1.02]"
        />
        <Link
          href={href("/premium")}
          className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.06]"
        >
          {t.premiumUpsell.compare}
        </Link>
      </div>
      <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
        <Shield className="size-3.5" aria-hidden="true" />
        {t.premiumUpsell.trialHint}
      </p>
    </div>
  )
}

export function PrivacyFirstBadge({ localOnly }: { localOnly?: boolean }) {
  const { t, href } = useI18n()
  return (
    <Link
      href={href("/prywatnosc")}
      className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.08] px-3 py-1.5 text-xs font-medium text-emerald-200 transition-colors hover:bg-emerald-400/[0.12]"
    >
      <Shield className="size-3.5" aria-hidden="true" />
      {localOnly ? t.privacyBadge.local : t.privacyBadge.title}
      <Zap className="size-3 opacity-60" aria-hidden="true" />
    </Link>
  )
}
