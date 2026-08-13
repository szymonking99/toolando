"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Check, Loader2 } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"

export function NewsletterSignup() {
  const { t, href, locale } = useI18n()
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")
  const [error, setError] = useState<string | null>(null)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) return

    setStatus("loading")
    setError(null)

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, locale }),
      })
      const data = (await res.json()) as { error?: string }
      if (!res.ok) {
        setError(data.error ?? t.newsletter.error)
        setStatus("error")
        return
      }
      try {
        localStorage.setItem("toolando-newsletter-pending", trimmed)
      } catch {
        /* ignore */
      }
      setStatus("done")
    } catch {
      setError(t.newsletter.error)
      setStatus("error")
    }
  }

  if (status === "done") {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-primary/25 bg-primary/[0.06] p-6 text-center">
        <Check className="mx-auto size-8 text-primary" aria-hidden="true" />
        <p className="mt-3 text-sm text-foreground">{t.newsletter.thanks}</p>
        <Link
          href={href(`/kontakt?email=${encodeURIComponent(email)}&topic=newsletter`)}
          className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
        >
          {t.newsletter.confirmViaContact}
        </Link>
      </div>
    )
  }

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-xl text-center">
        <Mail className="mx-auto size-8 text-primary" aria-hidden="true" />
        <h2 className="mt-4 text-2xl font-semibold text-foreground">
          {t.newsletter.title}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">{t.newsletter.subtitle}</p>
        <form onSubmit={submit} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.newsletter.placeholder}
            disabled={status === "loading"}
            className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-foreground focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/30 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground disabled:opacity-60"
          >
            {status === "loading" && (
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            )}
            {t.newsletter.cta}
          </button>
        </form>
        {error && (
          <p className="mt-3 text-sm text-destructive" role="alert">
            {error}
          </p>
        )}
      </div>
    </section>
  )
}
