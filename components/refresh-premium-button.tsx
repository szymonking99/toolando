"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { RefreshCw } from "lucide-react"

/**
 * Ręczne odświeżenie statusu Premium — sprawdza w Stripe aktywne subskrypcje
 * powiązanego klienta i aktualizuje konto. Przydatne, gdy webhook nie zdążył
 * lub zawiódł po zakupie.
 */
interface RefreshPremiumButtonProps {
  className?: string
  label?: string
  loadingLabel?: string
  noSubMessage?: string
  failedMessage?: string
  networkErrorMessage?: string
}

export function RefreshPremiumButton({
  className,
  label = "Odśwież status Premium",
  loadingLabel = "Sprawdzam...",
  noSubMessage = "Nie znaleziono aktywnej subskrypcji. Jeśli właśnie zapłaciłeś, odczekaj chwilę i spróbuj ponownie.",
  failedMessage = "Nie udało się odświeżyć statusu.",
  networkErrorMessage = "Wystąpił błąd sieci. Spróbuj ponownie.",
}: RefreshPremiumButtonProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  async function handleClick() {
    setLoading(true)
    setMessage(null)
    try {
      const res = await fetch("/api/premium/sync", { method: "POST" })
      const data = (await res.json()) as { premium?: boolean; error?: string }
      if (!res.ok) {
        setMessage(data.error ?? failedMessage)
        return
      }
      if (data.premium) {
        router.refresh()
      } else {
        setMessage(noSubMessage)
      }
    } catch {
      setMessage(networkErrorMessage)
    } finally {
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
          "inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
        }
      >
        <RefreshCw
          className={`size-4 ${loading ? "animate-spin" : ""}`}
          aria-hidden="true"
        />
        {loading ? loadingLabel : label}
      </button>
      {message ? (
        <p className="text-xs text-muted-foreground">{message}</p>
      ) : null}
    </div>
  )
}
