"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { X, Search } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"

const DISMISS_KEY = "toolando-exit-intent-dismissed"

export function ExitIntentModal() {
  const { t, href } = useI18n()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY) === "1") return

    function onLeave(e: MouseEvent) {
      if (e.clientY > 10) return
      setOpen(true)
    }

    document.addEventListener("mouseout", onLeave)
    return () => document.removeEventListener("mouseout", onLeave)
  }, [])

  if (!open) return null

  function dismiss() {
    sessionStorage.setItem(DISMISS_KEY, "1")
    setOpen(false)
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-background p-6 shadow-2xl">
        <button
          type="button"
          onClick={dismiss}
          className="float-right rounded-lg p-1.5 text-muted-foreground hover:bg-white/10"
          aria-label={t.exitIntent.close}
        >
          <X className="size-4" />
        </button>
        <Search className="size-8 text-primary" aria-hidden="true" />
        <h2 className="mt-3 text-lg font-semibold text-foreground">
          {t.exitIntent.title}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">{t.exitIntent.body}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link
            href={href("/tools")}
            onClick={dismiss}
            className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            {t.exitIntent.browse}
          </Link>
          <Link
            href={href("/kontakt?topic=tool-request")}
            onClick={dismiss}
            className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-foreground"
          >
            {t.exitIntent.request}
          </Link>
        </div>
      </div>
    </div>
  )
}
