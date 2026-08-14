"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { runEzoic } from "@/lib/ezoic"
import {
  adScriptsEnabledForPath,
  isEzoicActive,
} from "@/lib/seo/ads-policy"

/**
 * Dynamic content / SPA navigation — Step 3 dynamic section.
 * @see https://docs.ezoic.com/docs/ezoicads/implementation/
 * @see https://docs.ezoic.com/docs/ezoicadsadvanced/nextjs/
 */
export function EzoicRouteHandler() {
  const pathname = usePathname()

  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !isEzoicActive()) {
      return
    }

    const segments = pathname.split("/").filter(Boolean)
    const page = segments[1]

    if (page === "downloader") {
      runEzoic(() => {
        window.ezstandalone?.destroyAll?.()
        window.ezstandalone?.setInterstitialAllowed?.(false, {
          reason: "policy-sensitive-page",
        })
        window.ezstandalone?.setOutstreamAllowed?.(false, {
          reason: "policy-sensitive-page",
        })
      })
      return
    }

    if (!adScriptsEnabledForPath(pathname)) {
      runEzoic(() => {
        window.ezstandalone?.destroyAll?.()
      })
      return
    }

    runEzoic(() => {
      window.ezstandalone?.destroyPlaceholders()
      requestAnimationFrame(() => {
        window.ezstandalone?.showAds()
      })
    })
  }, [pathname])

  return null
}
