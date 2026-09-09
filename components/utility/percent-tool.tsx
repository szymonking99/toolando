"use client"

import { useMemo, useState } from "react"
import { Field, inputClass, selectClass, ResultBox } from "./ui"

export function PercentTool() {
  const [mode, setMode] = useState<"of" | "change" | "reverse">("of")
  const [a, setA] = useState("15")
  const [b, setB] = useState("200")

  const result = useMemo(() => {
    const x = Number.parseFloat(a.replace(",", "."))
    const y = Number.parseFloat(b.replace(",", "."))
    if (!Number.isFinite(x) || !Number.isFinite(y)) return null
    if (mode === "of") return { label: `${x}% of ${y}`, value: (y * x) / 100 }
    if (mode === "change") {
      if (y === 0) return null
      return { label: `Change from ${x} to ${y}`, value: ((y - x) / x) * 100, suffix: "%" }
    }
    if (y === 0) return null
    return { label: `${x} is what % of ${y}`, value: (x / y) * 100, suffix: "%" }
  }, [a, b, mode])

  return (
    <div className="space-y-4">
      <Field label="Mode">
        <select className={selectClass} value={mode} onChange={(e) => setMode(e.target.value as typeof mode)}>
          <option value="of">What is X% of Y</option>
          <option value="change">Percent change X → Y</option>
          <option value="reverse">X is what % of Y</option>
        </select>
      </Field>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label={mode === "of" ? "Percent (X)" : "Value A"}>
          <input className={inputClass} inputMode="decimal" value={a} onChange={(e) => setA(e.target.value)} />
        </Field>
        <Field label={mode === "of" ? "Base (Y)" : "Value B"}>
          <input className={inputClass} inputMode="decimal" value={b} onChange={(e) => setB(e.target.value)} />
        </Field>
      </div>
      {result && (
        <ResultBox>
          <p className="text-muted-foreground">{result.label}</p>
          <p className="mt-1 text-2xl font-semibold tabular-nums">
            {result.value.toFixed(2)}
            {result.suffix ?? ""}
          </p>
        </ResultBox>
      )}
    </div>
  )
}
