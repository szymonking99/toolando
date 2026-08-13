import { consumeAiTrial, peekAiTrial } from "@/lib/ai-trial"
import { getCurrentUser, isUserPremium } from "@/lib/user"

export type PremiumGateResult =
  | { ok: true; userId: string; trial?: boolean }
  | { ok: false; status: 401 | 402; error: string; trialExhausted?: boolean }

type AiAccessOptions = {
  /** Allow one free AI use per day for logged-in free users. */
  allowTrial?: boolean
}

/**
 * Serwerowa bramka dostępu do funkcji AI.
 * Premium — pełny dostęp. Free — opcjonalnie 1 próba dziennie (allowTrial).
 */
export async function checkAiAccess(
  options: AiAccessOptions = {},
): Promise<PremiumGateResult> {
  const { allowTrial = false } = options
  const user = await getCurrentUser()
  if (!user) {
    return {
      ok: false,
      status: 401,
      error: "Zaloguj się, aby korzystać z narzędzi AI.",
    }
  }

  const premium = await isUserPremium(user.id)
  if (premium) {
    return { ok: true, userId: user.id }
  }

  if (allowTrial) {
    const remaining = await peekAiTrial(user.id)
    if (remaining > 0) {
      const consumed = await consumeAiTrial(user.id)
      if (consumed) {
        return { ok: true, userId: user.id, trial: true }
      }
    }
    return {
      ok: false,
      status: 402,
      error: "Wykorzystałeś dzisiejszą darmową próbę AI. Odblokuj Premium, aby kontynuować.",
      trialExhausted: true,
    }
  }

  return {
    ok: false,
    status: 402,
    error: "Ta funkcja jest dostępna w planie Premium.",
  }
}

/** Premium-only gate (np. generowanie obrazów). */
export async function checkPremiumAccess(): Promise<PremiumGateResult> {
  return checkAiAccess({ allowTrial: false })
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
