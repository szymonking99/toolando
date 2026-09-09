"use client"

import { useMemo, useState } from "react"
import { Field, inputClass, ResultBox } from "./ui"

export function RoiTool() {
  const [invested, setInvested] = useState("1000")
  const [returned, setReturned] = useState("1300")

  const result = useMemo(() => {
    const i = Number.parseFloat(invested.replace(",", "."))
    const r = Number.parseFloat(returned.replace(",", "."))
    if (!Number.isFinite(i) || !Number.isFinite(r) || i === 0) return null
    const profit = r - i
    const roi = (profit / i) * 100
    return { profit, roi }
  }, [invested, returned])

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Amount invested">
          <input className={inputClass} inputMode="decimal" value={invested} onChange={(e) => setInvested(e.target.value)} />
        </Field>
        <Field label="Amount returned">
          <input className={inputClass} inputMode="decimal" value={returned} onChange={(e) => setReturned(e.target.value)} />
        </Field>
      </div>
      {result && (
        <ResultBox>
          <ul className="space-y-1 tabular-nums">
            <li>
              Profit / loss: <strong>{result.profit.toFixed(2)}</strong>
            </li>
            <li>
              ROI: <strong>{result.roi.toFixed(2)}%</strong>
            </li>
          </ul>
        </ResultBox>
      )}
    </div>
  )
}
