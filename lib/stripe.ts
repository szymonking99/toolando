import "server-only"

import Stripe from "stripe"

let client: Stripe | null = null

/**
 * Zwraca współdzieloną instancję klienta Stripe.
 *
 * Klient tworzony jest leniwie, dzięki czemu sam import tego modułu nigdy nie
 * rzuca wyjątkiem — błąd o braku klucza pojawi się dopiero przy realnym użyciu
 * (np. podczas żądania), a nie na etapie budowania aplikacji.
 */
export function getStripe(): Stripe {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Missing STRIPE_SECRET_KEY environment variable")
  }
  if (!client) {
    client = new Stripe(process.env.STRIPE_SECRET_KEY)
  }
  return client
}
