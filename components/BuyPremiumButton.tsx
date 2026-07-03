"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { PREMIUM_PLAN } from "@/lib/premium"

interface BuyPremiumButtonProps {
  priceId?: string
  label?: string
  className?: string
}

export function BuyPremiumButton({
  priceId = PREMIUM_PLAN.priceId,
  label = "Kup Premium",
  className,
}: BuyPremiumButtonProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleClick() {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/stripe/create-subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      })

      const data = await res.json()

      if (!res.ok || !data?.url) {
        throw new Error(data?.error || "Nie udało się rozpocząć płatności.")
      }

      // Przekierowanie do Stripe Checkout.
      window.location.href = data.url as string
    } catch (err) {
      setError(err instanceof Error ? err.message : "Wystąpił błąd.")
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className={
          className ??
          "inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85 disabled:cursor-not-allowed disabled:opacity-50"
        }
      >
        {loading ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Przekierowywanie…
          </>
        ) : (
          label
        )}
      </button>
      {error && (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}

export default BuyPremiumButton
