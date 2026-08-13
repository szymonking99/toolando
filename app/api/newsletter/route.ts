import type { NextRequest } from "next/server"
import { sendNewsletterSignupEmail } from "@/lib/email"

export const runtime = "nodejs"

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { email?: string; locale?: string }
    const email = body.email?.trim().toLowerCase() ?? ""

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Podaj prawidłowy adres e-mail." }, { status: 400 })
    }

    await sendNewsletterSignupEmail(email, body.locale ?? "pl")

    return Response.json({ ok: true })
  } catch (err) {
    console.error("[newsletter]", err)
    return Response.json(
      { error: "Nie udało się zapisać. Spróbuj ponownie później." },
      { status: 500 },
    )
  }
}
