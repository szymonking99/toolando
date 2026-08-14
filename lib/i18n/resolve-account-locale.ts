import {
  detectLocale,
  fallbackLocale,
  normalizeToSupported,
  type SupportedLocale,
} from "./config"

/** Locale for /sign-in, /sign-up, /account (no [locale] segment in URL). */
export function resolveAccountLocale(opts: {
  cookieLocale?: string | null
  referer?: string | null
  acceptLanguage?: string | null
}): SupportedLocale {
  if (opts.referer) {
    try {
      const seg = new URL(opts.referer).pathname.split("/").filter(Boolean)[0]
      const fromReferer = seg ? normalizeToSupported(seg) : undefined
      if (fromReferer) return fromReferer
    } catch {
      /* ignore malformed referer */
    }
  }

  if (opts.cookieLocale) {
    const fromCookie = normalizeToSupported(opts.cookieLocale)
    if (fromCookie) return fromCookie
  }

  return detectLocale(opts.acceptLanguage) ?? fallbackLocale
}
