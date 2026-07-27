import { fullyTranslatedLocales, fallbackLocale } from "@/lib/i18n/config"
import { SITE_URL } from "@/lib/seo/structured-data"

/** Build hreflang map for HTML metadata and sitemap (indexed locales only). */
export function languageAlternates(path: string): Record<string, string> {
  const normalized = path.startsWith("/") ? path : `/${path}`
  const map = Object.fromEntries(
    fullyTranslatedLocales.map((locale) => [
      locale,
      `${SITE_URL}/${locale}${normalized}`,
    ]),
  )
  map["x-default"] = `${SITE_URL}/${fallbackLocale}${normalized}`
  return map
}

/** Canonical path for a locale + relative path, e.g. `/pl/tools/mp3-to-wav`. */
export function canonicalPath(locale: string, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `/${locale}${normalized}`
}
