/**
 * Global i18n configuration.
 *
 * The routing layer accepts ANY ISO language code (e.g. `pl`, `en`, `zh`, `pt-br`).
 * `supportedLocales` are the ones we ship translation files for. Any unsupported
 * code still renders, but falls back to the `fallbackLocale` dictionary.
 */

/** A locale can be any ISO code string at the routing level. */
export type Locale = string

/** Locales we ship real translation files for (or English placeholders). */
export const supportedLocales = [
  // Full translations
  "pl",
  "en",
  "de",
  "es",
  "uk",
  // Placeholder translations (English base, ready to be localized)
  "fr",
  "it",
  "pt",
  "nl",
  "sv",
  "no",
  "da",
  "fi",
  "cs",
  "ro",
  "hu",
  "el",
  "tr",
  "ru",
  "ar",
  "zh",
  "ja",
  "ko",
  "hi",
  "id",
] as const

export type SupportedLocale = (typeof supportedLocales)[number]

/** Fallback used when a requested language is not supported. */
export const fallbackLocale: SupportedLocale = "en"

/** Right-to-left locales — used to set the <html dir> attribute. */
export const rtlLocales = new Set<string>(["ar", "he", "fa", "ur"])

/** Native display names for the locales we surface in the switcher. */
export const localeNames: Record<string, string> = {
  pl: "Polski",
  en: "English",
  de: "Deutsch",
  es: "Español",
  uk: "Українська",
  fr: "Français",
  it: "Italiano",
  pt: "Português",
  nl: "Nederlands",
  sv: "Svenska",
  no: "Norsk",
  da: "Dansk",
  fi: "Suomi",
  cs: "Čeština",
  ro: "Română",
  hu: "Magyar",
  el: "Ελληνικά",
  tr: "Türkçe",
  ru: "Русский",
  ar: "العربية",
  zh: "中文",
  ja: "日本語",
  ko: "한국어",
  hi: "हिन्दी",
  id: "Bahasa Indonesia",
}

/** Short label (uppercase code) shown as a compact "flag" in the switcher. */
export const localeFlags: Record<string, string> = {
  pl: "PL",
  en: "EN",
  de: "DE",
  es: "ES",
  uk: "UA",
  fr: "FR",
  it: "IT",
  pt: "PT",
  nl: "NL",
  sv: "SV",
  no: "NO",
  da: "DA",
  fi: "FI",
  cs: "CS",
  ro: "RO",
  hu: "HU",
  el: "EL",
  tr: "TR",
  ru: "RU",
  ar: "AR",
  zh: "ZH",
  ja: "JA",
  ko: "KO",
  hi: "HI",
  id: "ID",
}

export function isSupportedLocale(value: string): value is SupportedLocale {
  return (supportedLocales as readonly string[]).includes(value)
}

/**
 * Normalize any incoming code to its base language (e.g. `pt-BR` -> `pt`) and
 * return it if we support it, otherwise `undefined`.
 */
export function normalizeToSupported(code: string): SupportedLocale | undefined {
  const lower = code.toLowerCase().trim()
  if (!lower) return undefined
  if (isSupportedLocale(lower)) return lower
  const base = lower.split("-")[0]
  return isSupportedLocale(base) ? base : undefined
}

/**
 * Pick the best supported locale from an `Accept-Language` header value.
 * Respects quality (q) weighting and falls back to `fallbackLocale`.
 */
export function detectLocale(acceptLanguage: string | null | undefined): SupportedLocale {
  if (!acceptLanguage) return fallbackLocale

  const parsed = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";")
      const qParam = params.find((p) => p.trim().startsWith("q="))
      const q = qParam ? Number.parseFloat(qParam.split("=")[1]) : 1
      return { tag: tag.trim(), q: Number.isNaN(q) ? 1 : q }
    })
    .filter((entry) => entry.tag)
    .sort((a, b) => b.q - a.q)

  for (const { tag } of parsed) {
    const match = normalizeToSupported(tag)
    if (match) return match
  }

  return fallbackLocale
}
