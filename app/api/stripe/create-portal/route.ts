import { NextResponse } from "next/server"
import { getStripe } from "@/lib/stripe"
import { getCurrentUser } from "@/lib/user"

export const runtime = "nodejs"

const SITE_URL = "https://toolando.tech"

export async function POST() {
  try {
    const currentUser = await getCurrentUser()
    if (!currentUser) {
      return NextResponse.json(
        { error: "Zaloguj się, aby zarządzać subskrypcją.", requiresAuth: true },
        { status: 401 },
      )
    }

    const stripeCustomerId = (
      currentUser as { stripeCustomerId?: string | null }
    ).stripeCustomerId

    if (!stripeCustomerId) {
      return NextResponse.json(
        { error: "Nie znaleziono aktywnej subskrypcji na tym koncie." },
        { status: 400 },
      )
    }

    const stripe = getStripe()
    const session = await stripe.billingPortal.sessions.create({
      customer: stripeCustomerId,
      return_url: `${SITE_URL}/account`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("[stripe] create-portal error:", error)
    const message =
      error instanceof Error ? error.message : "Nieoczekiwany błąd serwera."
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
