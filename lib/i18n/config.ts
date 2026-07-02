export const locales = ["pl", "en", "de", "es", "uk"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "pl"

export const localeNames: Record<Locale, string> = {
  pl: "Polski",
  en: "English",
  de: "Deutsch",
  es: "Español",
  uk: "Українська",
}

export const localeFlags: Record<Locale, string> = {
  pl: "PL",
  en: "EN",
  de: "DE",
  es: "ES",
  uk: "UA",
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

/** Pick the best matching supported locale from a browser language string. */
export function detectLocale(input: string | null | undefined): Locale {
  if (!input) return defaultLocale
  const lang = input.toLowerCase().split("-")[0]
  return isLocale(lang) ? lang : defaultLocale
}
