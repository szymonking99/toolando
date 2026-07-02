"use client"

import { useState } from "react"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent">("idle")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const data = new FormData(form)

    const name = data.get("name")
    const email = data.get("email")
    const message = data.get("message")

    // mailto — działa bez backendu
    window.location.href = `mailto:badyltech@outlook.com?subject=Zgłoszenie z Toolando&body=Imię: ${name}%0AEmail: ${email}%0AWiadomość:%0A${message}`

    setStatus("sent")
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-24">
      <h1 className="text-3xl font-semibold text-foreground mb-6">
        Formularz kontaktowy
      </h1>

      <p className="text-muted-foreground mb-8">
        Masz pytanie, propozycję współpracy lub chcesz zgłosić problem?  
        Wypełnij formularz — odpowiemy tak szybko, jak to możliwe.
      </p>

      {status === "sent" ? (
        <div className="rounded-xl border border-green-600/30 bg-green-600/10 p-6 text-green-600">
          Dziękujemy! Twoja wiadomość została przygotowana w programie pocztowym.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Imię</label>
            <input
              name="name"
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-foreground"
              placeholder="Twoje imię"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-foreground"
              placeholder="Twój adres e‑mail"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Wiadomość</label>
            <textarea
              name="message"
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-foreground h-40"
              placeholder="Opisz swój problem lub pytanie..."
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-primary px-6 py-3 font-medium text-white hover:bg-primary/80 transition"
          >
            Wyślij wiadomość
          </button>
        </form>
      )}
    </main>
  )
}
