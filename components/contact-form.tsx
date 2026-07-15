"use client"

import { useState } from "react"
import { ContentPageShell } from "@/components/content-page-shell"
import { useI18n } from "@/components/i18n-provider"

export function ContactForm() {
  const { t } = useI18n()
  const c = t.pages.contact
  const [status, setStatus] = useState<"idle" | "sent">("idle")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const data = new FormData(form)

    const name = data.get("name")
    const email = data.get("email")
    const message = data.get("message")

    // mailto — działa bez backendu
    window.location.href = `mailto:badyltech@outlook.com?subject=${encodeURIComponent(
      c.subject,
    )}&body=${encodeURIComponent(
      `${c.name}: ${name}\n${c.email}: ${email}\n${c.message}:\n${message}`,
    )}`

    setStatus("sent")
  }

  return (
    <ContentPageShell eyebrow={c.eyebrow} title={c.title} intro={c.intro}>
      {status === "sent" ? (
        <div className="rounded-xl border border-green-600/30 bg-green-600/10 p-6 text-green-600">
          {c.sent}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              {c.name}
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-foreground"
              placeholder={c.namePlaceholder}
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              {c.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-foreground"
              placeholder={c.emailPlaceholder}
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              {c.message}
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="h-40 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-foreground"
              placeholder={c.messagePlaceholder}
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:bg-primary/80"
          >
            {c.submit}
          </button>
        </form>
      )}
    </ContentPageShell>
  )
}
