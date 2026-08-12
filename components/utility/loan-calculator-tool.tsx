"use client"

import { useMemo, useState } from "react"
import { Field, ResultBox, inputClass } from "./ui"

function annuityPayment(principal: number, annualRate: number, months: number) {
  if (months <= 0 || principal <= 0) return 0
  const r = annualRate / 100 / 12
  if (r === 0) return principal / months
  return (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1)
}

export function LoanCalculatorTool() {
  const [amount, setAmount] = useState("300000")
  const [rate, setRate] = useState("7.5")
  const [years, setYears] = useState("30")

  const result = useMemo(() => {
    const p = Number(amount)
    const y = Number(years)
    const r = Number(rate)
    if (!Number.isFinite(p) || !Number.isFinite(y) || !Number.isFinite(r) || p <= 0 || y <= 0) {
      return null
    }
    const months = Math.round(y * 12)
    const monthly = annuityPayment(p, r, months)
    const total = monthly * months
    return { monthly, total, interest: total - p, months }
  }, [amount, rate, years])

  const fmt = (n: number) =>
    n.toLocaleString("pl-PL", { style: "currency", currency: "PLN", maximumFractionDigits: 0 })

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Kwota kredytu (PLN)">
          <input className={inputClass} value={amount} onChange={(e) => setAmount(e.target.value)} />
        </Field>
        <Field label="Oprocentowanie (% rocznie)">
          <input className={inputClass} value={rate} onChange={(e) => setRate(e.target.value)} />
        </Field>
        <Field label="Okres (lat)">
          <input className={inputClass} value={years} onChange={(e) => setYears(e.target.value)} />
        </Field>
      </div>
      {result && (
        <ResultBox>
          <ul className="space-y-2 text-sm">
            <li>Rata miesięczna: <strong>{fmt(result.monthly)}</strong></li>
            <li>Suma spłaty: {fmt(result.total)}</li>
            <li>Odsetki łącznie: {fmt(result.interest)}</li>
            <li>Liczba rat: {result.months}</li>
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">
            Symulacja raty annuitetowej — bez prowizji, ubezpieczeń i opłat dodatkowych.
          </p>
        </ResultBox>
      )}
    </div>
  )
}
