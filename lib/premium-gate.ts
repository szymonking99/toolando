import { getCurrentUser, isUserPremium } from "@/lib/user"

export type PremiumGateResult =
  | { ok: true; userId: string }
  | { ok: false; status: 401 | 402; error: string }

/**
 * Serwerowa bramka dostępu do funkcji AI (tylko Premium).
 * Zwraca { ok: true } dla zalogowanych użytkowników z aktywnym Premium,
 * w przeciwnym razie odpowiedni status: 401 (brak logowania) lub 402 (brak Premium).
 */
export async function checkPremiumAccess(): Promise<PremiumGateResult> {
  const user = await getCurrentUser()
  if (!user) {
    return {
      ok: false,
      status: 401,
      error: "Zaloguj się, aby korzystać z narzędzi AI.",
    }
  }

  const premium = await isUserPremium(user.id)
  if (!premium) {
    return {
      ok: false,
      status: 402,
      error: "Ta funkcja jest dostępna w planie Premium.",
    }
  }

  return { ok: true, userId: user.id }
}

/** Buduje ujednoliconą odpowiedź JSON dla zablokowanego dostępu. */
export function premiumDeniedResponse(gate: {
  status: 401 | 402
  error: string
}): Response {
  return new Response(
    JSON.stringify({ error: gate.error, requiresPremium: gate.status === 402, requiresAuth: gate.status === 401 }),
    { status: gate.status, headers: { "content-type": "application/json" } },
  )
}
