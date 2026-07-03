import { NextResponse, type NextRequest } from "next/server"
import type Stripe from "stripe"
import { getStripe } from "@/lib/stripe"

export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!webhookSecret) {
    console.error("[stripe] Missing STRIPE_WEBHOOK_SECRET")
    return NextResponse.json(
      { error: "Webhook nie jest skonfigurowany." },
      { status: 500 },
    )
  }

  const signature = request.headers.get("stripe-signature")
  if (!signature) {
    return NextResponse.json({ error: "Brak podpisu." }, { status: 400 })
  }

  // Podpis Stripe weryfikujemy na surowym ciele żądania.
  const rawBody = await request.text()

  let event: Stripe.Event
  try {
    event = getStripe().webhooks.constructEvent(rawBody, signature, webhookSecret)
  } catch (error) {
    console.error("[stripe] Weryfikacja podpisu nie powiodła się:", error)
    return NextResponse.json({ error: "Nieprawidłowy podpis." }, { status: 400 })
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session
        console.log("[stripe] checkout.session.completed:", session.id)
        // TODO: aktywacja Premium
        // Tu należy powiązać session.customer / session.subscription
        // z kontem użytkownika i oznaczyć je jako Premium w bazie danych.
        break
      }

      case "invoice.paid": {
        const invoice = event.data.object as Stripe.Invoice
        console.log("[stripe] invoice.paid:", invoice.id)
        // TODO: aktywacja Premium
        // Odnowienie subskrypcji — utrzymaj/przedłuż status Premium
        // dla powiązanego użytkownika.
        break
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription
        console.log("[stripe] customer.subscription.deleted:", subscription.id)
        // TODO: dezaktywacja Premium
        // Subskrypcja zakończona — usuń status Premium dla użytkownika.
        break
      }

      default:
        // Pozostałe zdarzenia ignorujemy, ale potwierdzamy odbiór.
        break
    }
  } catch (error) {
    console.error("[stripe] Błąd obsługi zdarzenia:", error)
    return NextResponse.json({ error: "Błąd obsługi zdarzenia." }, { status: 500 })
  }

  return NextResponse.json({ received: true })
}
