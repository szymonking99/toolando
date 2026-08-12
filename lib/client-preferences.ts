"use client"

const RECENT_KEY = "toolando-recent-tools"
const FAVORITES_KEY = "toolando-favorite-tools"
const USAGE_KEY = "toolando-usage-stats"
const ONBOARDING_KEY = "toolando-onboarding-done"
const MAX_RECENT = 8

export type RecentTool = {
  id: string
  title: string
  visitedAt: number
}

export type UsageStats = {
  totalUses: number
  dayKey: string
  dayUses: number
}

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

function writeJson(key: string, value: unknown) {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(key, JSON.stringify(value))
    window.dispatchEvent(new CustomEvent("toolando-prefs-change"))
  } catch {
    /* quota */
  }
}

export function recordToolVisit(id: string, title: string) {
  const list = readJson<RecentTool[]>(RECENT_KEY, [])
  const next = [
    { id, title, visitedAt: Date.now() },
    ...list.filter((t) => t.id !== id),
  ].slice(0, MAX_RECENT)
  writeJson(RECENT_KEY, next)

  const today = new Date().toISOString().slice(0, 10)
  const stats = readJson<UsageStats>(USAGE_KEY, {
    totalUses: 0,
    dayKey: today,
    dayUses: 0,
  })
  const dayUses = stats.dayKey === today ? stats.dayUses + 1 : 1
  writeJson(USAGE_KEY, {
    totalUses: stats.totalUses + 1,
    dayKey: today,
    dayUses,
  })
}

export function getRecentTools(): RecentTool[] {
  return readJson<RecentTool[]>(RECENT_KEY, [])
}

export function getFavoriteTools(): string[] {
  return readJson<string[]>(FAVORITES_KEY, [])
}

export function toggleFavorite(id: string): string[] {
  const favs = getFavoriteTools()
  const next = favs.includes(id)
    ? favs.filter((f) => f !== id)
    : [...favs, id]
  writeJson(FAVORITES_KEY, next)
  return next
}

export function isFavorite(id: string): boolean {
  return getFavoriteTools().includes(id)
}

export function getUsageStats(): UsageStats {
  const today = new Date().toISOString().slice(0, 10)
  const stats = readJson<UsageStats>(USAGE_KEY, {
    totalUses: 0,
    dayKey: today,
    dayUses: 0,
  })
  if (stats.dayKey !== today) {
    return { totalUses: stats.totalUses, dayKey: today, dayUses: 0 }
  }
  return stats
}

/** Baseline daily activity + local uses for social proof display. */
export function getSocialProofCount(): number {
  const stats = getUsageStats()
  const seed = new Date().toISOString().slice(0, 10)
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) | 0
  }
  const baseline = 1200 + (Math.abs(hash) % 800)
  return baseline + stats.dayUses
}

export function isOnboardingDone(): boolean {
  if (typeof window === "undefined") return true
  return localStorage.getItem(ONBOARDING_KEY) === "1"
}

export function markOnboardingDone() {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(ONBOARDING_KEY, "1")
    window.dispatchEvent(new CustomEvent("toolando-prefs-change"))
  } catch {
    /* ignore */
  }
}

export function subscribePrefs(listener: () => void) {
  window.addEventListener("toolando-prefs-change", listener)
  window.addEventListener("storage", listener)
  return () => {
    window.removeEventListener("toolando-prefs-change", listener)
    window.removeEventListener("storage", listener)
  }
}
