"use client"

import { useMemo, useState } from "react"
import { Field, inputClass, ResultBox } from "./ui"

function parseDate(value: string): Date | null {
  if (!value) return null
  const d = new Date(`${value}T12:00:00`)
  return Number.isNaN(d.getTime()) ? null : d
}

function daysBetween(a: Date, b: Date) {
  const ms = Math.abs(b.getTime() - a.getTime())
  return Math.round(ms / 86_400_000)
}

function workingDays(a: Date, b: Date) {
  const start = a < b ? a : b
  const end = a < b ? b : a
  let count = 0
  const cur = new Date(start)
  while (cur <= end) {
    const day = cur.getDay()
    if (day !== 0 && day !== 6) count += 1
    cur.setDate(cur.getDate() + 1)
  }
  return count
}

const WEEKDAYS = [
  "Niedziela",
  "Poniedziałek",
  "Wtorek",
  "Środa",
  "Czwartek",
  "Piątek",
  "Sobota",
]

export function DateRangeTool() {
  const today = useMemo(() => new Date().toISOString().slice(0, 10), [])
  const [from, setFrom] = useState(today)
  const [to, setTo] = useState(today)

  const start = parseDate(from)
  const end = parseDate(to)

  const total = start && end ? daysBetween(start, end) : null
  const work = start && end ? workingDays(start, end) : null

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Data od">
          <input
            type="date"
            className={inputClass}
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </Field>
        <Field label="Data do">
          <input
            type="date"
            className={inputClass}
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </Field>
      </div>
      {start && end && total != null && work != null && (
        <ResultBox>
          <ul className="space-y-1">
            <li>
              Różnica: <strong>{total}</strong> dni ({(total / 7).toFixed(1)} tygodni)
            </li>
            <li>
              Dni robocze (bez sobót/niedziel): <strong>{work}</strong>
            </li>
            <li>
              Dzień startu: <strong>{WEEKDAYS[start.getDay()]}</strong>
            </li>
            <li>
              Dzień końca: <strong>{WEEKDAYS[end.getDay()]}</strong>
            </li>
          </ul>
        </ResultBox>
      )}
    </div>
  )
}
