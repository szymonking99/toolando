import { NextResponse, type NextRequest } from "next/server"
import { getStripe } from "@/lib/stripe"

export const runtime = "nodejs"

const SITE_URL = "https://toolando.tech"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}))
    const priceId: unknown = body?.priceId

    if (!priceId || typeof priceId !== "string") {
      return NextResponse.json(
        { error: "Brak wymaganego parametru priceId." },
        { status: 400 },
      )
    }

    const session = await getStripe().checkout.sessions.create({
      mode: "subscription",
      // Nie ustawiamy payment_method_types — Stripe sam dobiera metody
      // płatności na podstawie ustawień w Dashboardzie (lepsza konwersja).
      line_items: [{ price: priceId, quantity: 1 }],
      billing_address_collection: "auto",
      allow_promotion_codes: true,
      success_url: `${SITE_URL}/premium/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/premium/cancel`,
    })

    if (!session.url) {
      return NextResponse.json(
        { error: "Nie udało się utworzyć sesji płatności." },
        { status: 500 },
      )
    }

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("[stripe] create-subscription error:", error)
    const message =
      error instanceof Error ? error.message : "Nieoczekiwany błąd serwera."
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
