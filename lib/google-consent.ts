import type { ConsentLevel } from "./consent"

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

/** Sync Google Consent Mode v2 with the user's cookie choice. */
export function syncGoogleConsent(level: ConsentLevel): void {
  if (typeof window === "undefined") return
  window.dataLayer = window.dataLayer || []
  const gtag =
    window.gtag ??
    ((...args: unknown[]) => {
      window.dataLayer!.push(args)
    })
  window.gtag = gtag

  const granted = level === "all"
  gtag("consent", "update", {
    ad_storage: granted ? "granted" : "denied",
    ad_user_data: granted ? "granted" : "denied",
    ad_personalization: granted ? "granted" : "denied",
    analytics_storage: granted ? "granted" : "denied",
  })
}
