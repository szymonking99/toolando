import nodemailer from "nodemailer"

const SMTP_USER = process.env.SMTP_USER ?? "badyltech@outlook.com"
const SMTP_PASS = process.env.SMTP_PASSWORD
const FROM_NAME = "Toolando"

/**
 * Transporter SMTP dla Outlook / Microsoft 365.
 * Wymaga zmiennej SMTP_PASSWORD (hasło konta lub hasło aplikacji przy 2FA).
 */
function getTransporter() {
  if (!SMTP_PASS) return null
  return nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false, // STARTTLS
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })
}

/** Wysyła e-mail powitalny po rejestracji. Błędy nie przerywają rejestracji. */
export async function sendWelcomeEmail(to: string, name?: string) {
  const transporter = getTransporter()
  if (!transporter) {
    console.log("[v0] SMTP_PASSWORD nie ustawione — pomijam e-mail powitalny.")
    return
  }

  const greeting = name ? `Cześć ${name}!` : "Cześć!"

  const html = `
  <div style="font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;color:#1a1a1a;">
    <h1 style="font-size:22px;margin:0 0 16px;">${greeting}</h1>
    <p style="font-size:15px;line-height:1.6;margin:0 0 16px;">
      Dziękujemy za założenie konta w <strong>Toolando</strong>. Masz teraz dostęp do naszego zestawu narzędzi online — konwertery, generatory i asystent AI w jednym miejscu.
    </p>
    <p style="font-size:15px;line-height:1.6;margin:0 0 24px;">
      Aby odblokować narzędzia AI (czat, copywriting, streszczenia, tłumaczenia), rozważ plan <strong>Premium</strong> — już od 9 zł miesięcznie.
    </p>
    <a href="https://toolando.tech/account" style="display:inline-block;background:#4f46e5;color:#fff;text-decoration:none;font-weight:600;font-size:14px;padding:12px 22px;border-radius:10px;">
      Przejdź do konta
    </a>
    <p style="font-size:13px;line-height:1.6;color:#666;margin:28px 0 0;">
      Jeśli to nie Ty zakładałeś konto, po prostu zignoruj tę wiadomość.
    </p>
  </div>`

  try {
    await transporter.sendMail({
      from: `"${FROM_NAME}" <${SMTP_USER}>`,
      to,
      subject: "Witaj w Toolando!",
      html,
      text: `${greeting}\n\nDziękujemy za założenie konta w Toolando. Masz teraz dostęp do naszych narzędzi online.\n\nAby odblokować narzędzia AI, rozważ plan Premium (od 9 zł/mies.): https://toolando.tech/account`,
    })
    console.log("[v0] E-mail powitalny wysłany do:", to)
  } catch (err) {
    console.log(
      "[v0] Błąd wysyłki e-maila powitalnego:",
      err instanceof Error ? err.message : err,
    )
  }
}
