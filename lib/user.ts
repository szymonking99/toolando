import { headers } from "next/headers"
import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { user as userTable } from "@/lib/db/schema"
import { eq } from "drizzle-orm"

/**
 * Zwraca zalogowanego użytkownika (z sesji) lub null.
 * Sesja Better Auth zawiera pola dodatkowe (isPremium, premiumUntil).
 */
export async function getCurrentUser() {
  const session = await auth.api.getSession({ headers: await headers() })
  return session?.user ?? null
}

/** Zwraca userId lub rzuca wyjątek — do użycia w akcjach wymagających logowania. */
export async function requireUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error("Unauthorized")
  return session.user.id
}

/**
 * Sprawdza w bazie, czy użytkownik ma aktywne Premium.
 * Premium jest aktywne, gdy isPremium = true ORAZ premiumUntil jest w przyszłości
 * (lub nie ustawione — dla subskrypcji bezterminowo aktywnych do anulowania).
 */
export async function isUserPremium(userId: string): Promise<boolean> {
  const rows = await db
    .select({
      isPremium: userTable.isPremium,
      premiumUntil: userTable.premiumUntil,
    })
    .from(userTable)
    .where(eq(userTable.id, userId))
    .limit(1)

  const row = rows[0]
  if (!row || !row.isPremium) return false
  if (row.premiumUntil && row.premiumUntil.getTime() < Date.now()) return false
  return true
}

/** Włącza Premium dla użytkownika, opcjonalnie z datą ważności. */
export async function activatePremium(userId: string, premiumUntil?: Date | null) {
  await db
    .update(userTable)
    .set({
      isPremium: true,
      premiumUntil: premiumUntil ?? null,
      updatedAt: new Date(),
    })
    .where(eq(userTable.id, userId))
}

/** Wyłącza Premium dla użytkownika (np. po anulowaniu subskrypcji). */
export async function deactivatePremium(userId: string) {
  await db
    .update(userTable)
    .set({ isPremium: false, premiumUntil: null, updatedAt: new Date() })
    .where(eq(userTable.id, userId))
}

/** Znajduje userId po stripeCustomerId (gdy zdarzenie nie ma metadanych). */
export async function findUserIdByStripeCustomer(
  stripeCustomerId: string,
): Promise<string | null> {
  const rows = await db
    .select({ id: userTable.id })
    .from(userTable)
    .where(eq(userTable.stripeCustomerId, stripeCustomerId))
    .limit(1)
  return rows[0]?.id ?? null
}

/**
 * Awaryjne uzgodnienie Premium na podstawie ID sesji checkout Stripe.
 * Używane na stronie sukcesu jako niezależne od webhooka zabezpieczenie:
 * jeśli płatność jest opłacona, aktywuje Premium bezpośrednio.
 * Zwraca true, gdy Premium zostało (lub już było) aktywne.
 */
export async function reconcilePremiumFromSession(
  sessionId: string,
): Promise<boolean> {
  const { getStripe } = await import("@/lib/stripe")
  const stripe = getStripe()

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["subscription"],
  })

  // Aktywujemy wyłącznie po potwierdzonej płatności.
  const paid =
    session.payment_status === "paid" || session.status === "complete"
  if (!paid) return false

  // userId: najpierw z metadanych sesji, potem po kliencie Stripe.
  let userId = session.metadata?.userId ?? null
  if (!userId) {
    const customerId =
      typeof session.customer === "string" ? session.customer : null
    if (customerId) userId = await findUserIdByStripeCustomer(customerId)
  }
  if (!userId) return false

  // Data ważności z subskrypcji (jeśli dostępna).
  let premiumUntil: Date | null = null
  const sub = session.subscription
  if (sub && typeof sub === "object") {
    const end = (sub as { current_period_end?: number }).current_period_end
    if (typeof end === "number") premiumUntil = new Date(end * 1000)
  }

  await activatePremium(userId, premiumUntil)
  return true
}

/**
 * Synchronizuje Premium użytkownika ze stanem w Stripe.
 * Sprawdza aktywne subskrypcje powiązanego klienta Stripe i ustawia Premium
 * zgodnie z rzeczywistością. Zwraca aktualny status Premium.
 * Używane jako ręczne "Odśwież status Premium" i naprawa kont po awarii webhooka.
 */
export async function syncPremiumFromStripe(userId: string): Promise<boolean> {
  const rows = await db
    .select({ stripeCustomerId: userTable.stripeCustomerId })
    .from(userTable)
    .where(eq(userTable.id, userId))
    .limit(1)

  const customerId = rows[0]?.stripeCustomerId
  if (!customerId) return isUserPremium(userId)

  const { getStripe } = await import("@/lib/stripe")
  const stripe = getStripe()

  const subs = await stripe.subscriptions.list({
    customer: customerId,
    status: "active",
    limit: 1,
  })

  const active = subs.data[0]
  if (active) {
    const end = (active as { current_period_end?: number }).current_period_end
    await activatePremium(
      userId,
      typeof end === "number" ? new Date(end * 1000) : null,
    )
    return true
  }

  // Brak aktywnej subskrypcji — nie wyłączamy tu Premium przyznanego ręcznie
  // z datą w przyszłości; wyłączeniem zajmuje się webhook subscription.deleted.
  return isUserPremium(userId)
}
