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
