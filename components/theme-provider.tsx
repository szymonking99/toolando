"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { THEME_STORAGE_KEY } from "@/lib/theme-script"

export type ThemePreference = "system" | "light" | "dark"
export type ResolvedTheme = "light" | "dark"

type ThemeContextValue = {
  preference: ThemePreference
  resolved: ResolvedTheme
  setPreference: (value: ThemePreference) => void
  cycle: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "light"
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

function resolve(preference: ThemePreference): ResolvedTheme {
  return preference === "system" ? getSystemTheme() : preference
}

function applyDom(resolved: ResolvedTheme) {
  const root = document.documentElement
  root.classList.toggle("dark", resolved === "dark")
  root.style.colorScheme = resolved
}

function readStored(): ThemePreference {
  try {
    const raw = localStorage.getItem(THEME_STORAGE_KEY)
    if (raw === "light" || raw === "dark" || raw === "system") return raw
  } catch {
    /* ignore */
  }
  return "system"
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>("system")
  const [resolved, setResolved] = useState<ResolvedTheme>("light")

  useEffect(() => {
    const stored = readStored()
    setPreferenceState(stored)
    const next = resolve(stored)
    setResolved(next)
    applyDom(next)
  }, [])

  useEffect(() => {
    if (preference !== "system") return
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = () => {
      const next = getSystemTheme()
      setResolved(next)
      applyDom(next)
    }
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [preference])

  const setPreference = useCallback((value: ThemePreference) => {
    setPreferenceState(value)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, value)
    } catch {
      /* ignore */
    }
    const next = resolve(value)
    setResolved(next)
    applyDom(next)
  }, [])

  const cycle = useCallback(() => {
    const order: ThemePreference[] = ["system", "light", "dark"]
    const idx = order.indexOf(preference)
    setPreference(order[(idx + 1) % order.length])
  }, [preference, setPreference])

  const value = useMemo(
    () => ({ preference, resolved, setPreference, cycle }),
    [preference, resolved, setPreference, cycle],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return ctx
}
