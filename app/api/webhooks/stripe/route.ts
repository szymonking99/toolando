import { NextResponse, type NextRequest } from "next/server"
import type Stripe from "stripe"
import { getStripe } from "@/lib/stripe"
import {
  activatePremium,
  deactivatePremium,
  findUserIdByStripeCustomer,
} from "@/lib/user"

export const runtime = "nodejs"

/** Wyciąga userId ze zdarzenia: najpierw z metadanych, potem po kliencie Stripe. */
async function resolveUserId(opts: {
  metadataUserId?: string | null
  customerId?: string | null
}): Promise<string | null> {
  if (opts.metadataUserId) return opts.metadataUserId
  if (opts.customerId) return findUserIdByStripeCustomer(opts.customerId)
  return null
}

/** Bezpiecznie zamienia sekundy epoki (Stripe) na Date. */
function toDate(unixSeconds: number | null | undefined): Date | null {
  return typeof unixSeconds === "number" ? new Date(unixSeconds * 1000) : null
}

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

  const stripe = getStripe()

  // Podpis Stripe weryfikujemy na surowym ciele żądania.
  const rawBody = await request.text()

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret)
  } catch (error) {
    console.error("[stripe] Weryfikacja podpisu nie powiodła się:", error)
    return NextResponse.json({ error: "Nieprawidłowy podpis." }, { status: 400 })
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session
        const userId = await resolveUserId({
          metadataUserId: session.metadata?.userId,
          customerId:
            typeof session.customer === "string" ? session.customer : null,
        })

        if (!userId) {
          console.warn("[stripe] checkout.session.completed bez userId:", session.id)
          break
        }

        // Pobierz subskrypcję, aby ustawić datę ważności Premium.
        let premiumUntil: Date | null = null
        if (typeof session.subscription === "string") {
          const sub = await stripe.subscriptions.retrieve(session.subscription)
          premiumUntil = toDate(
            (sub as unknown as { current_period_end?: number })
              .current_period_end,
          )
        }

        await activatePremium(userId, premiumUntil)
        console.log("[stripe] Premium aktywowane dla:", userId)
        break
      }

      case "invoice.paid": {
        const invoice = event.data.object as Stripe.Invoice
        const customerId =
          typeof invoice.customer === "string" ? invoice.customer : null
        // W różnych wersjach API metadane subskrypcji bywają w innym miejscu;
        // dla faktur wiążemy użytkownika po kliencie Stripe.
        const invoiceMeta = (
          invoice as unknown as {
            subscription_details?: { metadata?: { userId?: string } }
          }
        ).subscription_details?.metadata?.userId
        const userId = await resolveUserId({
          metadataUserId: invoiceMeta,
          customerId,
        })

        if (!userId) {
          console.warn("[stripe] invoice.paid bez userId:", invoice.id)
          break
        }

        // Odnowienie — przedłuż ważność Premium do końca nowego okresu.
        const periodEnd = toDate(
          (invoice as unknown as { period_end?: number }).period_end,
        )
        await activatePremium(userId, periodEnd)
        console.log("[stripe] Premium odnowione dla:", userId)
        break
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription
        const customerId =
          typeof subscription.customer === "string"
            ? subscription.customer
            : null
        const userId = await resolveUserId({
          metadataUserId: subscription.metadata?.userId,
          customerId,
        })

        if (!userId) {
          console.warn(
            "[stripe] subscription.deleted bez userId:",
            subscription.id,
          )
          break
        }

        await deactivatePremium(userId)
        console.log("[stripe] Premium dezaktywowane dla:", userId)
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
