import { NextResponse, type NextRequest } from "next/server"
import { eq } from "drizzle-orm"
import { getStripe } from "@/lib/stripe"
import { getCurrentUser } from "@/lib/user"
import { db } from "@/lib/db"
import { user as userTable } from "@/lib/db/schema"
import { PREMIUM_PLAN } from "@/lib/premium"

export const runtime = "nodejs"

const SITE_URL = "https://toolando.tech"

export async function POST(request: NextRequest) {
  try {
    // Subskrypcję może kupić wyłącznie zalogowany użytkownik —
    // dzięki temu webhook powiąże płatność z konkretnym kontem.
    const currentUser = await getCurrentUser()
    if (!currentUser) {
      return NextResponse.json(
        { error: "Zaloguj się, aby kupić Premium.", requiresAuth: true },
        { status: 401 },
      )
    }

    // Cena pochodzi wyłącznie z konfiguracji serwera (STRIPE_PRICE_ID) —
    // ignorujemy ewentualne priceId z klienta ze względów bezpieczeństwa.
    const priceId = PREMIUM_PLAN.priceId

    const stripe = getStripe()

    // Utwórz (lub użyj istniejącego) klienta Stripe powiązanego z kontem.
    let stripeCustomerId = (currentUser as { stripeCustomerId?: string | null })
      .stripeCustomerId

    if (!stripeCustomerId) {
      const customer = await stripe.customers.create({
        email: currentUser.email,
        name: currentUser.name ?? undefined,
        metadata: { userId: currentUser.id },
      })
      stripeCustomerId = customer.id
      await db
        .update(userTable)
        .set({ stripeCustomerId, updatedAt: new Date() })
        .where(eq(userTable.id, currentUser.id))
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer: stripeCustomerId,
      line_items: [{ price: priceId, quantity: 1 }],
      billing_address_collection: "auto",
      allow_promotion_codes: true,
      // userId w metadanych sesji i subskrypcji — webhook użyje go do
      // przypisania Premium właściwemu użytkownikowi.
      metadata: { userId: currentUser.id },
      subscription_data: { metadata: { userId: currentUser.id } },
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
