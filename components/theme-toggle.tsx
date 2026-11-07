"use client"

import { useEffect, useState } from "react"
import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { useI18n } from "@/components/i18n-provider"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { preference, cycle } = useTheme()
  const { t } = useI18n()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const label =
    preference === "light"
      ? (t.nav.themeLight ?? "Light")
      : preference === "dark"
        ? (t.nav.themeDark ?? "Dark")
        : (t.nav.themeSystem ?? "System")

  const Icon =
    preference === "light" ? Sun : preference === "dark" ? Moon : Monitor

  return (
    <button
      type="button"
      onClick={cycle}
      className={cn(
        "flex size-9 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-muted",
        className,
      )}
      aria-label={t.nav.themeToggle ?? "Theme"}
      title={`${t.nav.themeToggle ?? "Theme"}: ${label}`}
    >
      {mounted ? (
        <Icon className="size-4" aria-hidden="true" />
      ) : (
        <span className="size-4" aria-hidden="true" />
      )}
    </button>
  )
}
