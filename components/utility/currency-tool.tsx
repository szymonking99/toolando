"use client"

import { useEffect, useState } from "react"
import { Field, inputClass, selectClass, ResultBox, PrimaryButton } from "./ui"

const CURRENCIES = [
  "PLN",
  "EUR",
  "USD",
  "GBP",
  "CHF",
  "CZK",
  "UAH",
  "SEK",
  "NOK",
  "DKK",
  "CAD",
  "AUD",
  "JPY",
  "CNY",
  "TRY",
  "RON",
  "HUF",
]

type Rates = Record<string, number>

let cache: { at: number; base: string; rates: Rates } | null = null

async function fetchRates(base: string): Promise<Rates> {
  if (cache && cache.base === base && Date.now() - cache.at < 3_600_000) {
    return cache.rates
  }
  const res = await fetch(
    `https://api.frankfurter.app/latest?from=${encodeURIComponent(base)}`,
  )
  if (!res.ok) throw new Error("Nie udało się pobrać kursów.")
  const data = (await res.json()) as { rates: Rates }
  const rates = { ...data.rates, [base]: 1 }
  cache = { at: Date.now(), base, rates }
  return rates
}

export function CurrencyTool() {
  const [amount, setAmount] = useState("100")
  const [from, setFrom] = useState("PLN")
  const [to, setTo] = useState("EUR")
  const [rates, setRates] = useState<Rates | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    fetchRates(from)
      .then((r) => {
        if (!cancelled) setRates(r)
      })
      .catch((e) => {
        if (!cancelled) setError(e instanceof Error ? e.message : "Błąd")
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [from])

  const value = Number.parseFloat(amount.replace(",", "."))
  const rate = rates?.[to]
  const result =
    Number.isFinite(value) && rate != null ? value * rate : null

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        <Field label="Kwota">
          <input
            className={inputClass}
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Field>
        <Field label="Z">
          <select
            className={selectClass}
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          >
            {CURRENCIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Na">
          <select
            className={selectClass}
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            {CURRENCIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <PrimaryButton
        onClick={() => {
          setFrom(to)
          setTo(from)
        }}
      >
        Zamień waluty
      </PrimaryButton>
      {loading && <p className="text-sm text-muted-foreground">Pobieranie kursów…</p>}
      {error && <p className="text-sm text-destructive">{error}</p>}
      {result != null && rate != null && (
        <ResultBox>
          <div className="text-2xl font-semibold tabular-nums">
            {result.toLocaleString(undefined, { maximumFractionDigits: 4 })} {to}
          </div>
          <div className="mt-1 text-xs text-muted-foreground">
            1 {from} = {rate.toLocaleString(undefined, { maximumFractionDigits: 6 })} {to}
          </div>
        </ResultBox>
      )}
    </div>
  )
}
