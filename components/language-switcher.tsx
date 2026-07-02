"use client"

import { useEffect, useRef, useState } from "react"
import { Globe, Check } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import {
  supportedLocales,
  localeNames,
  localeFlags,
  type Locale,
} from "@/lib/i18n/config"
import { usePathname, useRouter } from "next/navigation"

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, t } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [])

  function choose(next: Locale) {
    // Remember the choice so the "/" redirect honors it on future visits.
    document.cookie = `toolando-locale=${next}; path=/; max-age=31536000; samesite=lax`
    // Strip the current locale segment, then prefix the newly chosen one.
    const segments = pathname.split("/")
    // segments[0] is "" (leading slash), segments[1] is the current locale.
    const rest = segments.slice(2).join("/")
    router.push(`/${next}${rest ? `/${rest}` : ""}`)
    setOpen(false)
  }

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.language.label}
      >
        <Globe className="size-4 text-muted-foreground" aria-hidden="true" />
        {localeFlags[locale] ?? locale.slice(0, 2).toUpperCase()}
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 max-h-80 w-44 overflow-y-auto rounded-xl border border-white/10 bg-background/95 p-1 shadow-lg backdrop-blur-xl"
        >
          {supportedLocales.map((code) => (
            <li key={code}>
              <button
                type="button"
                role="option"
                aria-selected={code === locale}
                onClick={() => choose(code)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-white/10"
              >
                <span className="flex items-center gap-2">
                  <span className="w-6 text-xs font-semibold text-muted-foreground">
                    {localeFlags[code]}
                  </span>
                  {localeNames[code]}
                </span>
                {code === locale && (
                  <Check className="size-4 text-primary" aria-hidden="true" />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
