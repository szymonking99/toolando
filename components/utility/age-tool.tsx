"use client"

import { useMemo, useState } from "react"
import { Field, inputClass, selectClass, ResultBox } from "./ui"

function ageParts(birth: Date, now: Date) {
  let years = now.getFullYear() - birth.getFullYear()
  let months = now.getMonth() - birth.getMonth()
  let days = now.getDate() - birth.getDate()
  if (days < 0) {
    months -= 1
    const prev = new Date(now.getFullYear(), now.getMonth(), 0)
    days += prev.getDate()
  }
  if (months < 0) {
    years -= 1
    months += 12
  }
  return { years, months, days }
}

function daysUntil(target: Date, now: Date) {
  const a = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const b = new Date(target.getFullYear(), target.getMonth(), target.getDate())
  return Math.round((b.getTime() - a.getTime()) / 86_400_000)
}

export function AgeTool() {
  const today = useMemo(() => new Date().toISOString().slice(0, 10), [])
  const [mode, setMode] = useState<"age" | "countdown">("age")
  const [date, setDate] = useState("2000-01-01")
  const [target, setTarget] = useState(today)

  const now = new Date()
  const birth = new Date(`${date}T12:00:00`)
  const end = new Date(`${target}T12:00:00`)

  const age = Number.isNaN(birth.getTime()) ? null : ageParts(birth, now)
  const left = Number.isNaN(end.getTime()) ? null : daysUntil(end, now)

  let nextBirthday: number | null = null
  if (!Number.isNaN(birth.getTime())) {
    const nb = new Date(now.getFullYear(), birth.getMonth(), birth.getDate())
    if (nb < new Date(now.getFullYear(), now.getMonth(), now.getDate())) {
      nb.setFullYear(now.getFullYear() + 1)
    }
    nextBirthday = daysUntil(nb, now)
  }

  return (
    <div className="space-y-4">
      <Field label="Tryb">
        <select
          className={selectClass}
          value={mode}
          onChange={(e) => setMode(e.target.value as typeof mode)}
        >
          <option value="age">Wiek</option>
          <option value="countdown">Dni do daty</option>
        </select>
      </Field>
      {mode === "age" ? (
        <Field label="Data urodzenia">
          <input
            type="date"
            className={inputClass}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Field>
      ) : (
        <Field label="Data docelowa">
          <input
            type="date"
            className={inputClass}
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          />
        </Field>
      )}
      {mode === "age" && age && (
        <ResultBox>
          <div>
            Wiek: <strong>{age.years}</strong> lat, <strong>{age.months}</strong> mies.,{" "}
            <strong>{age.days}</strong> dni
          </div>
          {nextBirthday != null && (
            <div className="mt-1 text-sm text-muted-foreground">
              Do następnych urodzin: {nextBirthday} dni
            </div>
          )}
        </ResultBox>
      )}
      {mode === "countdown" && left != null && (
        <ResultBox>
          {left >= 0 ? (
            <>
              Pozostało: <strong>{left}</strong> dni
            </>
          ) : (
            <>
              Minęło: <strong>{Math.abs(left)}</strong> dni
            </>
          )}
        </ResultBox>
      )}
    </div>
  )
}
