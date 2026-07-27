"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useI18n } from "@/components/i18n-provider"
import {
  COOKIE_PREFERENCES_EVENT,
  getStoredConsent,
  setStoredConsent,
  type ConsentLevel,
} from "@/lib/consent"
import { syncGoogleConsent } from "@/lib/google-consent"

export function CookieConsent() {
  const { t, href } = useI18n()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = getStoredConsent()
    if (!stored) {
      setVisible(true)
    } else {
      syncGoogleConsent(stored)
    }

    function onReopen() {
      setVisible(true)
    }
    window.addEventListener(COOKIE_PREFERENCES_EVENT, onReopen)
    return () => window.removeEventListener(COOKIE_PREFERENCES_EVENT, onReopen)
  }, [])

  function choose(level: ConsentLevel) {
    setStoredConsent(level)
    syncGoogleConsent(level)
    setVisible(false)
  }

  if (!visible) return null

  const c = t.cookieConsent

  return (
    <div
      role="dialog"
      aria-label={c.title}
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-white/10 bg-background/95 p-4 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="font-semibold text-foreground">{c.title}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {c.description}{" "}
            <Link
              href={href("/polityka-prywatnosci")}
              className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
            >
              {c.privacyLink}
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            type="button"
            onClick={() => choose("necessary")}
            className="rounded-xl border border-white/15 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.06]"
          >
            {c.necessaryOnly}
          </button>
          <button
            type="button"
            onClick={() => choose("all")}
            className="rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {c.acceptAll}
          </button>
        </div>
      </div>
    </div>
  )
}
