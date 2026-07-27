import { supportedLocales } from "./config"

/** Locales with dedicated content modules (guides, formats hub, etc.). */
export const contentLocales = [
  "pl",
  "en",
  "de",
  "es",
  "uk",
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

export type ContentLocale = (typeof contentLocales)[number]

export function resolveContentLocale(locale: string): ContentLocale {
  if ((contentLocales as readonly string[]).includes(locale)) {
    return locale as ContentLocale
  }
  if ((supportedLocales as readonly string[]).includes(locale)) {
    return locale as ContentLocale
  }
  return "en"
}

/** Pick localized record with fallback to English. */
export function pickLocalized<T>(
  locale: string,
  map: Partial<Record<string, T>>,
  fallback: T,
): T {
  const resolved = resolveContentLocale(locale)
  return map[resolved] ?? map[locale] ?? fallback
}
