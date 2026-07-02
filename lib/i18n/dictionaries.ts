import "server-only"
import { normalizeToSupported, fallbackLocale, type Locale } from "./config"
import en from "@/locales/en.json"

/** The shape of a translation dictionary, inferred from the English base. */
export type Dictionary = typeof en

/**
 * Static map of dynamic importers, one per supported locale. Using a static map
 * (instead of a fully dynamic `import(variable)`) keeps the bundler happy and
 * lets each locale JSON be code-split and loaded on demand.
 */
const loaders: Record<string, () => Promise<{ default: Dictionary }>> = {
  pl: () => import("@/locales/pl.json"),
  en: () => import("@/locales/en.json"),
  de: () => import("@/locales/de.json"),
  es: () => import("@/locales/es.json"),
  uk: () => import("@/locales/uk.json"),
  fr: () => import("@/locales/fr.json"),
  it: () => import("@/locales/it.json"),
  pt: () => import("@/locales/pt.json"),
  nl: () => import("@/locales/nl.json"),
  sv: () => import("@/locales/sv.json"),
  no: () => import("@/locales/no.json"),
  da: () => import("@/locales/da.json"),
  fi: () => import("@/locales/fi.json"),
  cs: () => import("@/locales/cs.json"),
  ro: () => import("@/locales/ro.json"),
  hu: () => import("@/locales/hu.json"),
  el: () => import("@/locales/el.json"),
  tr: () => import("@/locales/tr.json"),
  ru: () => import("@/locales/ru.json"),
  ar: () => import("@/locales/ar.json"),
  zh: () => import("@/locales/zh.json"),
  ja: () => import("@/locales/ja.json"),
  ko: () => import("@/locales/ko.json"),
  hi: () => import("@/locales/hi.json"),
  id: () => import("@/locales/id.json"),
}

/** The English dictionary, used as the guaranteed fallback. */
export const fallbackDictionary: Dictionary = en

/**
 * Load the translation dictionary for any locale. Unsupported or malformed
 * locales gracefully fall back to English.
 */
export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const supported = normalizeToSupported(locale) ?? fallbackLocale
  const load = loaders[supported] ?? loaders[fallbackLocale]
  try {
    const mod = await load()
    return mod.default as Dictionary
  } catch {
    return fallbackDictionary
  }
}
