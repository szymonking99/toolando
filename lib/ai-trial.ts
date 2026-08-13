import { cookies } from "next/headers"

const TRIAL_COOKIE = "toolando-ai-trial"
const DAILY_LIMIT = 1

type TrialUsage = Record<string, number>

function todayKey(userId: string): string {
  const day = new Date().toISOString().slice(0, 10)
  return `${userId}:${day}`
}

function readUsage(raw: string | undefined): TrialUsage {
  if (!raw) return {}
  try {
    const parsed = JSON.parse(raw) as TrialUsage
    return typeof parsed === "object" && parsed ? parsed : {}
  } catch {
    return {}
  }
}

export function getAiTrialRemaining(userId: string, usage: TrialUsage): number {
  const used = usage[todayKey(userId)] ?? 0
  return Math.max(0, DAILY_LIMIT - used)
}

/** Read current trial usage without mutating the cookie. */
export async function peekAiTrial(userId: string): Promise<number> {
  const cookieStore = await cookies()
  const usage = readUsage(cookieStore.get(TRIAL_COOKIE)?.value)
  return getAiTrialRemaining(userId, usage)
}

/** Consume one daily AI trial credit for a logged-in non-premium user. */
export async function consumeAiTrial(userId: string): Promise<boolean> {
  const cookieStore = await cookies()
  const usage = readUsage(cookieStore.get(TRIAL_COOKIE)?.value)
  const key = todayKey(userId)
  const used = usage[key] ?? 0

  if (used >= DAILY_LIMIT) return false

  usage[key] = used + 1
  cookieStore.set(TRIAL_COOKIE, JSON.stringify(usage), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 48,
    path: "/",
  })

  return true
}
