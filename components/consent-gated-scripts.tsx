"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import { usePathname } from "next/navigation"
import { getStoredConsent, hasAnalyticsConsent } from "@/lib/consent"
import { syncGoogleConsent } from "@/lib/google-consent"
import {
  adScriptsEnabledForPath,
  getAdNetwork,
} from "@/lib/seo/ads-policy"

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-HCDN6BEKZH"
const ADSENSE_CLIENT =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "ca-pub-1137300798632743"

/**
 * Loads GA4 and the active ad network (AdSense or Ezoic) after cookie consent.
 * Downloader pages are excluded from ads (policy-sensitive).
 */
export function ConsentGatedScripts() {
  const pathname = usePathname()
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

  const network = getAdNetwork()
  const adsOnPath = adScriptsEnabledForPath(pathname)
  const showAdSense =
    network === "adsense" && Boolean(ADSENSE_CLIENT) && adsOnPath
  const showEzoic = network === "ezoic" && adsOnPath

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
      {showEzoic && (
        <>
          <Script
            id="ezoic-cmp"
            src="https://cmp.gatekeeperconsent.com/min.js"
            strategy="afterInteractive"
            data-cfasync="false"
          />
          <Script
            id="ezoic-cmp-2"
            src="https://the.gatekeeperconsent.com/cmp.min.js"
            strategy="afterInteractive"
            data-cfasync="false"
          />
          <Script
            id="ezoic-sa"
            src="https://www.ezojs.com/ezoic/sa.min.js"
            strategy="afterInteractive"
          />
          <Script id="ezoic-init" strategy="afterInteractive">
            {`
              window.ezstandalone = window.ezstandalone || {};
              window.ezstandalone.cmd = window.ezstandalone.cmd || [];
            `}
          </Script>
          <Script
            id="ezoic-analytics"
            src="https://ezoicanalytics.com/analytics.js"
            strategy="afterInteractive"
          />
        </>
      )}
    </>
  )
}
