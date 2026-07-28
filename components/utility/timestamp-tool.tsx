"use client"

import { useMemo, useState } from "react"
import { Field, inputClass, selectClass, ResultBox, PrimaryButton, copyText } from "./ui"

export function TimestampTool() {
  const [unit, setUnit] = useState<"auto" | "s" | "ms">("auto")
  const [ts, setTs] = useState(() => String(Math.floor(Date.now() / 1000)))
  const [iso, setIso] = useState(() => new Date().toISOString().slice(0, 19))

  const fromTs = useMemo(() => {
    const n = Number(ts)
    if (!Number.isFinite(n)) return null
    let ms = n
    if (unit === "s" || (unit === "auto" && String(Math.trunc(n)).length <= 10)) {
      ms = n * 1000
    }
    const d = new Date(ms)
    if (Number.isNaN(d.getTime())) return null
    return d
  }, [ts, unit])

  function fromDate() {
    const d = new Date(iso)
    if (Number.isNaN(d.getTime())) return
    setTs(String(Math.floor(d.getTime() / 1000)))
    setUnit("s")
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Timestamp">
          <input className={inputClass} value={ts} onChange={(e) => setTs(e.target.value)} />
        </Field>
        <Field label="Jednostka">
          <select className={selectClass} value={unit} onChange={(e) => setUnit(e.target.value as typeof unit)}>
            <option value="auto">Auto</option>
            <option value="s">Sekundy</option>
            <option value="ms">Milisekundy</option>
          </select>
        </Field>
      </div>
      {fromTs && (
        <ResultBox>
          <div>ISO: <code>{fromTs.toISOString()}</code></div>
          <div className="mt-1">Lokalnie: {fromTs.toLocaleString()}</div>
          <PrimaryButton className="mt-3" onClick={() => void copyText(fromTs.toISOString())}>
            Kopiuj ISO
          </PrimaryButton>
        </ResultBox>
      )}
      <Field label="Data → timestamp (ISO lokalne lub UTC)">
        <input
          className={inputClass}
          value={iso}
          onChange={(e) => setIso(e.target.value)}
          placeholder="2026-07-28T12:00:00"
        />
      </Field>
      <PrimaryButton onClick={fromDate}>Przelicz datę na timestamp</PrimaryButton>
    </div>
  )
}
