"use client"

import { useEffect, useMemo, useState } from "react"
import { Field, selectClass, ResultBox } from "./ui"

type City = {
  id: string
  label: string
  zone: string
  /** Rough map position 0–100 */
  x: number
  y: number
}

const CITIES: City[] = [
  { id: "warsaw", label: "Warszawa", zone: "Europe/Warsaw", x: 54, y: 32 },
  { id: "london", label: "Londyn", zone: "Europe/London", x: 47, y: 31 },
  { id: "berlin", label: "Berlin", zone: "Europe/Berlin", x: 52, y: 30 },
  { id: "paris", label: "Paryż", zone: "Europe/Paris", x: 49, y: 33 },
  { id: "madrid", label: "Madryt", zone: "Europe/Madrid", x: 46, y: 38 },
  { id: "kyiv", label: "Kijów", zone: "Europe/Kyiv", x: 58, y: 31 },
  { id: "nyc", label: "Nowy Jork", zone: "America/New_York", x: 26, y: 38 },
  { id: "la", label: "Los Angeles", zone: "America/Los_Angeles", x: 14, y: 40 },
  { id: "tokyo", label: "Tokio", zone: "Asia/Tokyo", x: 86, y: 38 },
  { id: "dubai", label: "Dubaj", zone: "Asia/Dubai", x: 64, y: 44 },
  { id: "sydney", label: "Sydney", zone: "Australia/Sydney", x: 90, y: 72 },
  { id: "sao", label: "São Paulo", zone: "America/Sao_Paulo", x: 32, y: 68 },
]

function formatInZone(date: Date, zone: string) {
  return new Intl.DateTimeFormat("pl-PL", {
    timeZone: zone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date)
}

function offsetHours(date: Date, zoneA: string, zoneB: string) {
  const a = new Date(date.toLocaleString("en-US", { timeZone: zoneA }))
  const b = new Date(date.toLocaleString("en-US", { timeZone: zoneB }))
  return (b.getTime() - a.getTime()) / 3_600_000
}

export function TimezoneTool() {
  const [fromId, setFromId] = useState("warsaw")
  const [toId, setToId] = useState("nyc")
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const from = CITIES.find((c) => c.id === fromId)!
  const to = CITIES.find((c) => c.id === toId)!

  const diff = useMemo(
    () => offsetHours(now, from.zone, to.zone),
    [now, from.zone, to.zone],
  )

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Miasto A">
          <select
            className={selectClass}
            value={fromId}
            onChange={(e) => setFromId(e.target.value)}
          >
            {CITIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Miasto B">
          <select
            className={selectClass}
            value={toId}
            onChange={(e) => setToId(e.target.value)}
          >
            {CITIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <ResultBox>
        <div className="grid gap-2 sm:grid-cols-2">
          <div>
            <div className="text-xs text-muted-foreground">{from.label}</div>
            <div className="text-xl font-semibold tabular-nums">
              {formatInZone(now, from.zone)}
            </div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">{to.label}</div>
            <div className="text-xl font-semibold tabular-nums">
              {formatInZone(now, to.zone)}
            </div>
          </div>
        </div>
        <div className="mt-3 text-sm">
          Różnica:{" "}
          <strong>
            {diff >= 0 ? "+" : ""}
            {diff.toFixed(1)} h
          </strong>{" "}
          (B względem A)
        </div>
      </ResultBox>

      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b1220]">
        <svg viewBox="0 0 100 60" className="h-auto w-full" role="img" aria-label="Mapa świata">
          <rect width="100" height="60" fill="#0b1220" />
          <ellipse cx="50" cy="30" rx="46" ry="24" fill="#132038" stroke="#1e3a5f" />
          <path
            d="M12 28 C20 18, 35 16, 48 22 C55 18, 70 20, 82 26 C88 32, 90 40, 84 46 C70 50, 50 48, 35 44 C22 40, 12 36, 12 28 Z"
            fill="#1a3355"
            opacity="0.7"
          />
          {CITIES.map((c) => (
            <circle
              key={c.id}
              cx={c.x}
              cy={c.y}
              r={c.id === fromId || c.id === toId ? 1.6 : 0.7}
              fill={
                c.id === fromId
                  ? "#38bdf8"
                  : c.id === toId
                    ? "#a78bfa"
                    : "#64748b"
              }
            />
          ))}
          <line
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="#38bdf8"
            strokeWidth="0.35"
            strokeDasharray="1 0.6"
            opacity="0.8"
          />
        </svg>
        <div className="flex justify-between px-3 py-2 text-[10px] text-muted-foreground">
          <span className="text-sky-400">{from.label}</span>
          <span className="text-violet-400">{to.label}</span>
        </div>
      </div>
    </div>
  )
}
