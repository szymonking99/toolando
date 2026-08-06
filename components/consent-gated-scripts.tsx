"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import { getStoredConsent, hasAnalyticsConsent } from "@/lib/consent"
import { syncGoogleConsent } from "@/lib/google-consent"
import { getAdNetwork } from "@/lib/seo/ads-policy"

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-HCDN6BEKZH"
const ADSENSE_CLIENT =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "ca-pub-1137300798632743"

/**
 * GA4 + AdSense only. Ezoic header scripts live in <head> via EzoicHeadScripts.
 */
export function ConsentGatedScripts() {
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    const stored = getStoredConsent()
    if (stored) syncGoogleConsent(stored)
    setConsented(hasAnalyticsConsent())

    function onConsentChange() {
      const level = getStoredConsent()
      if (level) syncGoogleConsent(level)
      setConsented(hasAnalyticsConsent())
    }
    window.addEventListener("consent-change", onConsentChange)
    return () => window.removeEventListener("consent-change", onConsentChange)
  }, [])

  if (!consented || process.env.NODE_ENV !== "production") return null

  const showAdSense =
    getAdNetwork() === "adsense" && Boolean(ADSENSE_CLIENT)

  return (
    <>
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}
      {showAdSense && (
        <Script
          id="adsbygoogle-init"
          async
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />
      )}
    </>
  )
}
