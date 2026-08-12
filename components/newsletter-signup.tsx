"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Check } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"

export function NewsletterSignup() {
  const { t, href } = useI18n()
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    try {
      localStorage.setItem("toolando-newsletter-pending", email.trim())
    } catch {
      /* ignore */
    }
    setDone(true)
  }

  if (done) {
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
            className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-foreground focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/30"
          />
          <button
            type="submit"
            className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            {t.newsletter.cta}
          </button>
        </form>
      </div>
    </section>
  )
}
