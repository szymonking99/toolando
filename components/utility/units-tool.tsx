"use client"

import { useMemo, useState } from "react"
import { Field, inputClass, selectClass, ResultBox } from "./ui"

type Category = "length" | "mass" | "temperature" | "volume"

const UNITS: Record<Category, { id: string; label: string; toBase: (n: number) => number; fromBase: (n: number) => number }[]> = {
  length: [
    { id: "m", label: "metry (m)", toBase: (n) => n, fromBase: (n) => n },
    { id: "cm", label: "centymetry (cm)", toBase: (n) => n / 100, fromBase: (n) => n * 100 },
    { id: "mm", label: "milimetry (mm)", toBase: (n) => n / 1000, fromBase: (n) => n * 1000 },
    { id: "km", label: "kilometry (km)", toBase: (n) => n * 1000, fromBase: (n) => n / 1000 },
    { id: "in", label: "cale (in)", toBase: (n) => n * 0.0254, fromBase: (n) => n / 0.0254 },
    { id: "ft", label: "stopy (ft)", toBase: (n) => n * 0.3048, fromBase: (n) => n / 0.3048 },
    { id: "mi", label: "mile (mi)", toBase: (n) => n * 1609.344, fromBase: (n) => n / 1609.344 },
  ],
  mass: [
    { id: "kg", label: "kilogramy (kg)", toBase: (n) => n, fromBase: (n) => n },
    { id: "g", label: "gramy (g)", toBase: (n) => n / 1000, fromBase: (n) => n * 1000 },
    { id: "lb", label: "funty (lb)", toBase: (n) => n * 0.45359237, fromBase: (n) => n / 0.45359237 },
    { id: "oz", label: "uncje (oz)", toBase: (n) => n * 0.028349523125, fromBase: (n) => n / 0.028349523125 },
  ],
  temperature: [
    {
      id: "c",
      label: "°C",
      toBase: (n) => n,
      fromBase: (n) => n,
    },
    {
      id: "f",
      label: "°F",
      toBase: (n) => ((n - 32) * 5) / 9,
      fromBase: (n) => (n * 9) / 5 + 32,
    },
    {
      id: "k",
      label: "K",
      toBase: (n) => n - 273.15,
      fromBase: (n) => n + 273.15,
    },
  ],
  volume: [
    { id: "l", label: "litry (l)", toBase: (n) => n, fromBase: (n) => n },
    { id: "ml", label: "mililitry (ml)", toBase: (n) => n / 1000, fromBase: (n) => n * 1000 },
    { id: "gal", label: "galony US", toBase: (n) => n * 3.785411784, fromBase: (n) => n / 3.785411784 },
    { id: "cup", label: "kubki US", toBase: (n) => n * 0.2365882365, fromBase: (n) => n / 0.2365882365 },
  ],
}

export function UnitsTool() {
  const [category, setCategory] = useState<Category>("length")
  const [from, setFrom] = useState("cm")
  const [to, setTo] = useState("in")
  const [amount, setAmount] = useState("100")

  const units = UNITS[category]

  const result = useMemo(() => {
    const n = Number.parseFloat(amount.replace(",", "."))
    if (!Number.isFinite(n)) return null
    const src = units.find((u) => u.id === from)
    const dst = units.find((u) => u.id === to)
    if (!src || !dst) return null
    return dst.fromBase(src.toBase(n))
  }, [amount, from, to, units])

  function onCategory(next: Category) {
    setCategory(next)
    setFrom(UNITS[next][0].id)
    setTo(UNITS[next][1]?.id ?? UNITS[next][0].id)
  }

  return (
    <div className="space-y-4">
      <Field label="Kategoria">
        <select
          className={selectClass}
          value={category}
          onChange={(e) => onCategory(e.target.value as Category)}
        >
          <option value="length">Długość</option>
          <option value="mass">Masa</option>
          <option value="temperature">Temperatura</option>
          <option value="volume">Objętość</option>
        </select>
      </Field>
      <div className="grid gap-3 sm:grid-cols-3">
        <Field label="Wartość">
          <input
            className={inputClass}
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Field>
        <Field label="Z">
          <select className={selectClass} value={from} onChange={(e) => setFrom(e.target.value)}>
            {units.map((u) => (
              <option key={u.id} value={u.id}>
                {u.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Na">
          <select className={selectClass} value={to} onChange={(e) => setTo(e.target.value)}>
            {units.map((u) => (
              <option key={u.id} value={u.id}>
                {u.label}
              </option>
            ))}
          </select>
        </Field>
      </div>
      {result != null && (
        <ResultBox>
          <span className="text-2xl font-semibold tabular-nums">
            {result.toLocaleString(undefined, { maximumFractionDigits: 8 })}
          </span>
        </ResultBox>
      )}
    </div>
  )
}
