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
// Locale JSONs may be partial (placeholder locales omit sections like `pages`).
// Missing keys are backfilled from the English base by `mergeWithFallback`, so
// the override is typed loosely here.
const loaders: Record<string, () => Promise<{ default: unknown }>> = {
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
 * Deep-merge a partial locale dictionary on top of the English base so that any
 * missing key (or entire section) transparently falls back to English instead
 * of rendering `undefined`. Values present in the locale always win.
 */
function mergeWithFallback<T>(base: T, override: unknown): T {
  if (
    typeof base !== "object" ||
    base === null ||
    Array.isArray(base) ||
    typeof override !== "object" ||
    override === null ||
    Array.isArray(override)
  ) {
    // Use the override only when it is a non-empty string; otherwise keep base.
    if (typeof override === "string" && override.trim() !== "") {
      return override as T
    }
    return override === undefined || override === null ? base : (override as T)
  }

  const result: Record<string, unknown> = { ...(base as Record<string, unknown>) }
  const ov = override as Record<string, unknown>
  for (const key of Object.keys(base as Record<string, unknown>)) {
    result[key] = mergeWithFallback(
      (base as Record<string, unknown>)[key],
      ov[key],
    )
  }
  return result as T
}

/**
 * Load the translation dictionary for any locale. Unsupported or malformed
 * locales gracefully fall back to English, and any individual missing key is
 * backfilled from the English dictionary.
 */
export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const supported = normalizeToSupported(locale) ?? fallbackLocale
  if (supported === fallbackLocale) return fallbackDictionary
  const load = loaders[supported] ?? loaders[fallbackLocale]
  try {
    const mod = await load()
    return mergeWithFallback(fallbackDictionary, mod.default)
  } catch {
    return fallbackDictionary
  }
}
