export const CONSENT_KEY = "toolando-consent"
export const COOKIE_PREFERENCES_EVENT = "cookie-preferences-open"

export type ConsentLevel = "all" | "necessary"

export function getStoredConsent(): ConsentLevel | null {
  if (typeof window === "undefined") return null
  const value = localStorage.getItem(CONSENT_KEY)
  if (value === "all" || value === "necessary") return value
  return null
}

export function hasAnalyticsConsent(): boolean {
  return getStoredConsent() === "all"
}

export function setStoredConsent(level: ConsentLevel): void {
  localStorage.setItem(CONSENT_KEY, level)
  window.dispatchEvent(new CustomEvent("consent-change", { detail: level }))
}

/** Re-open the cookie banner (e.g. from footer link). */
export function openCookiePreferences(): void {
  window.dispatchEvent(new CustomEvent(COOKIE_PREFERENCES_EVENT))
}
