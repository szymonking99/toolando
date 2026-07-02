"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"
import {
  defaultLocale,
  detectLocale,
  isLocale,
  type Locale,
} from "@/lib/i18n/config"
import { dictionaries, type Dictionary } from "@/lib/i18n/dictionaries"

const STORAGE_KEY = "toolando-locale"

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  // On mount, resolve the preferred locale: saved choice first, then browser.
  useEffect(() => {
    let resolved: Locale = defaultLocale
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved && isLocale(saved)) {
        resolved = saved
      } else if (typeof navigator !== "undefined") {
        resolved = detectLocale(navigator.language)
      }
    } catch {
      // localStorage may be unavailable; fall back to default.
    }
    setLocaleState(resolved)
  }, [])

  // Keep <html lang> in sync for accessibility and SEO.
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore write failures
    }
  }, [])

  return (
    <I18nContext.Provider
      value={{ locale, setLocale, t: dictionaries[locale] }}
    >
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return ctx
}
