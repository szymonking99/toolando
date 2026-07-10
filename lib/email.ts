import { Resend } from "resend"

const RESEND_API_KEY = process.env.RESEND_API_KEY

/**
 * Adres nadawcy. Domyślnie no-reply@toolando.tech — wymaga zweryfikowania
 * domeny toolando.tech w panelu Resend (rekordy DNS SPF/DKIM). Dopóki domena
 * nie jest zweryfikowana, wysyłka będzie zwracać błąd (rejestracja działa dalej).
 * Można nadpisać zmienną EMAIL_FROM.
 */
const EMAIL_FROM = process.env.EMAIL_FROM || "Toolando.tech <no-reply@toolando.tech>"

/**
 * Adres, na który trafią odpowiedzi użytkowników (Twoja skrzynka Outlook).
 */
const REPLY_TO = process.env.EMAIL_REPLY_TO || "badyltech@outlook.com"

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null

/**
 * Wysyła e-mail powitalny po rejestracji.
 * Bezpiecznie pomija wysyłkę, gdy brak RESEND_API_KEY — rejestracja działa dalej.
 * Błędy nie przerywają rejestracji.
 */
export async function sendWelcomeEmail(to: string, name?: string | null) {
  if (!resend) {
    console.log("[v0] RESEND_API_KEY nie ustawione — pomijam e-mail powitalny.")
    return
  }

  const greeting = name ? `Cześć ${name}!` : "Cześć!"

  const html = `
  <div style="font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;color:#1a1a1a;">
    <h1 style="font-size:22px;margin:0 0 16px;">${greeting}</h1>
    <p style="font-size:15px;line-height:1.6;margin:0 0 16px;">
      Dziękujemy za założenie konta w <strong>Toolando.tech</strong>. Masz teraz dostęp do naszego zestawu narzędzi online — konwertery, generatory i asystent AI w jednym miejscu.
    </p>
    <p style="font-size:15px;line-height:1.6;margin:0 0 24px;">
      Aby odblokować narzędzia AI (czat, copywriting, streszczenia, tłumaczenia), rozważ plan <strong>Premium</strong>.
    </p>
    <a href="https://toolando.tech/account" style="display:inline-block;background:#4f46e5;color:#fff;text-decoration:none;font-weight:600;font-size:14px;padding:12px 22px;border-radius:10px;">
      Przejdź do konta
    </a>
    <p style="font-size:13px;line-height:1.6;color:#666;margin:28px 0 0;">
      Jeśli to nie Ty zakładałeś konto, po prostu zignoruj tę wiadomość.
    </p>
  </div>`

  const text = `${greeting}\n\nDziękujemy za założenie konta w Toolando.tech. Masz teraz dostęp do naszych narzędzi online.\n\nAby odblokować narzędzia AI, rozważ plan Premium: https://toolando.tech/account`

  try {
    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to,
      replyTo: REPLY_TO,
      subject: "Witaj w Toolando.tech!",
      html,
      text,
    })

    if (error) {
      console.log("[v0] Błąd wysyłki e-maila powitalnego:", error.message)
      return
    }

    console.log("[v0] E-mail powitalny wysłany do:", to)
  } catch (err) {
    console.log(
      "[v0] Wyjątek podczas wysyłki e-maila powitalnego:",
      err instanceof Error ? err.message : err,
    )
  }
}
