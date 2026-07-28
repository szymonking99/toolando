"use client"

import { useMemo, useState } from "react"
import { Field, inputClass, selectClass, ResultBox } from "./ui"

export function VatTool() {
  const [mode, setMode] = useState<"net" | "gross" | "percent">("net")
  const [amount, setAmount] = useState("100")
  const [rate, setRate] = useState("23")
  const [percentOf, setPercentOf] = useState("200")
  const [percent, setPercent] = useState("15")

  const n = Number.parseFloat(amount.replace(",", "."))
  const r = Number.parseFloat(rate.replace(",", ".")) / 100

  const vatResult = useMemo(() => {
    if (!Number.isFinite(n) || !Number.isFinite(r)) return null
    if (mode === "net") {
      const vat = n * r
      return { net: n, vat, gross: n + vat }
    }
    if (mode === "gross") {
      const net = n / (1 + r)
      const vat = n - net
      return { net, vat, gross: n }
    }
    return null
  }, [mode, n, r])

  const pctBase = Number.parseFloat(percentOf.replace(",", "."))
  const pct = Number.parseFloat(percent.replace(",", "."))
  const pctResult =
    Number.isFinite(pctBase) && Number.isFinite(pct) ? (pctBase * pct) / 100 : null

  return (
    <div className="space-y-4">
      <Field label="Tryb">
        <select
          className={selectClass}
          value={mode}
          onChange={(e) => setMode(e.target.value as typeof mode)}
        >
          <option value="net">VAT od netto</option>
          <option value="gross">VAT od brutto</option>
          <option value="percent">Procent od kwoty</option>
        </select>
      </Field>

      {mode !== "percent" ? (
        <>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label={mode === "net" ? "Kwota netto" : "Kwota brutto"}>
              <input
                className={inputClass}
                inputMode="decimal"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Field>
            <Field label="Stawka VAT %">
              <select className={selectClass} value={rate} onChange={(e) => setRate(e.target.value)}>
                <option value="23">23%</option>
                <option value="8">8%</option>
                <option value="5">5%</option>
                <option value="0">0%</option>
              </select>
            </Field>
          </div>
          {vatResult && (
            <ResultBox>
              <ul className="space-y-1 tabular-nums">
                <li>Netto: <strong>{vatResult.net.toFixed(2)}</strong></li>
                <li>VAT: <strong>{vatResult.vat.toFixed(2)}</strong></li>
                <li>Brutto: <strong>{vatResult.gross.toFixed(2)}</strong></li>
              </ul>
            </ResultBox>
          )}
        </>
      ) : (
        <>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Kwota bazowa">
              <input
                className={inputClass}
                inputMode="decimal"
                value={percentOf}
                onChange={(e) => setPercentOf(e.target.value)}
              />
            </Field>
            <Field label="Procent %">
              <input
                className={inputClass}
                inputMode="decimal"
                value={percent}
                onChange={(e) => setPercent(e.target.value)}
              />
            </Field>
          </div>
          {pctResult != null && (
            <ResultBox>
              Wynik: <strong className="tabular-nums">{pctResult.toFixed(2)}</strong>
            </ResultBox>
          )}
        </>
      )}
    </div>
  )
}
