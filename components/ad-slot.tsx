"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { hasAnalyticsConsent } from "@/lib/consent"
import { useI18n } from "@/components/i18n-provider"
import { EzoicAd } from "@/components/ezoic-ad"
import { PremiumUpsellCard } from "@/components/premium-upsell-card"
import {
  adSlotEnabled,
  getAdNetwork,
  type AdPlacement,
} from "@/lib/seo/ads-policy"

const ADSENSE_CLIENT =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "ca-pub-1137300798632743"

type AdSlotProps = {
  placement: AdPlacement
  slot?: string
  format?: "auto" | "fluid" | "rectangle" | "horizontal" | "vertical"
  responsive?: boolean
  label?: string
  className?: string
  minHeight?: number
}

declare global {
  interface Window {
    adsbygoogle?: unknown[]
  }
}

export function AdSlot({
  placement,
  slot,
  format = "auto",
  responsive = true,
  label,
  className,
  minHeight = 120,
}: AdSlotProps) {
  const { t } = useI18n()
  const adLabel = label ?? t.ad.label
  const pushedRef = useRef(false)
  const [consented, setConsented] = useState(false)
  const network = getAdNetwork()
  const placementEnabled = adSlotEnabled(placement)
  const isEzoic = network === "ezoic" && placementEnabled
  const isAdSense =
    network === "adsense" && Boolean(ADSENSE_CLIENT && slot) && placementEnabled

  useEffect(() => {
    setConsented(hasAnalyticsConsent())
    function onConsentChange() {
      setConsented(hasAnalyticsConsent())
    }
    window.addEventListener("consent-change", onConsentChange)
    return () => window.removeEventListener("consent-change", onConsentChange)
  }, [])

  useEffect(() => {
    if (!isAdSense || !consented || pushedRef.current) return
    try {
      const existing = document.querySelector<HTMLScriptElement>(
        'script[src*="adsbygoogle.js"]',
      )
      if (!existing) {
        const script = document.createElement("script")
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`
        script.async = true
        script.crossOrigin = "anonymous"
        document.head.appendChild(script)
      }
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      pushedRef.current = true
    } catch {
      // Placeholder remains visible.
    }
  }, [isAdSense, consented])

  if (!placementEnabled) return null

  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-4 py-6",
        className,
      )}
      aria-label={adLabel}
      role="complementary"
    >
      <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground/60">
        {adLabel}
      </span>

      {isEzoic ? (
        <EzoicAd minHeight={minHeight} className="w-full" />
      ) : isAdSense && consented ? (
        <ins
          className="adsbygoogle block w-full"
          style={{ display: "block", minHeight }}
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        />
      ) : (
        <PremiumUpsellCard className="px-0" />
      )}
    </div>
  )
}
