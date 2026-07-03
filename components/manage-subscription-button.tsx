"use client"

import { useState } from "react"
import { Loader2, Settings } from "lucide-react"

interface ManageSubscriptionButtonProps {
  className?: string
}

export function ManageSubscriptionButton({
  className,
}: ManageSubscriptionButtonProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleClick() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/stripe/create-portal", { method: "POST" })
      const data = await res.json()

      if (res.status === 401 || data?.requiresAuth) {
        window.location.href = "/sign-in"
        return
      }
      if (!res.ok || !data?.url) {
        throw new Error(data?.error || "Nie udało się otworzyć panelu.")
      }
      window.location.href = data.url
    } catch (err) {
      setError(err instanceof Error ? err.message : "Wystąpił błąd.")
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className={
          className ??
          "inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
        }
      >
        {loading ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          <Settings className="size-4" aria-hidden="true" />
        )}
        {loading ? "Otwieranie…" : "Zarządzaj subskrypcją"}
      </button>
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  )
}
