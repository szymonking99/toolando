"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { hasAnalyticsConsent } from "@/lib/consent"
import { runEzoic } from "@/lib/ezoic"
import {
  adScriptsEnabledForPath,
  getAdNetwork,
} from "@/lib/seo/ads-policy"

/**
 * Re-scan Ezoic placeholders after Next.js client-side navigation.
 * @see https://docs.ezoic.com/docs/ezoicadsadvanced/nextjs/
 */
export function EzoicRouteHandler() {
  const pathname = usePathname()
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    setConsented(hasAnalyticsConsent())
    function onConsentChange() {
      setConsented(hasAnalyticsConsent())
    }
    window.addEventListener("consent-change", onConsentChange)
    return () => window.removeEventListener("consent-change", onConsentChange)
  }, [])

  useEffect(() => {
    if (
      process.env.NODE_ENV !== "production" ||
      getAdNetwork() !== "ezoic" ||
      !consented ||
      !adScriptsEnabledForPath(pathname)
    ) {
      return
    }

    runEzoic(() => {
      window.ezstandalone?.destroyPlaceholders()
      requestAnimationFrame(() => {
        window.ezstandalone?.showAds()
      })
    })
  }, [pathname, consented])

  return null
}
