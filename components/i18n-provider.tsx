"use client"

import { createContext, useContext, useMemo } from "react"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries"
import { localeHref } from "@/lib/i18n/href"

type I18nContextValue = {
  locale: Locale
  t: Dictionary
  /** Prefix an internal path with the active locale. */
  href: (path: string) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

/**
 * Provides the active locale and its dictionary to client components. The
 * locale and dictionary are resolved on the server (from the `[locale]` route
 * segment) and passed down as props — there is no client-side detection.
 */
export function I18nProvider({
  locale,
  dictionary,
  children,
}: {
  locale: Locale
  dictionary: Dictionary
  children: React.ReactNode
}) {
  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      t: dictionary,
      href: (path: string) => localeHref(locale, path),
    }),
    [locale, dictionary],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return ctx
}
