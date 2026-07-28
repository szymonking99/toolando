"use client"

import { useMemo, useState } from "react"
import { Field, inputClass, selectClass, ResultBox } from "./ui"

export function BitrateTool() {
  const [mode, setMode] = useState<"size" | "bitrate">("size")
  const [hours, setHours] = useState("0")
  const [minutes, setMinutes] = useState("60")
  const [bitrate, setBitrate] = useState("320")
  const [limitMb, setLimitMb] = useState("100")

  const seconds =
    (Number.parseFloat(hours) || 0) * 3600 + (Number.parseFloat(minutes) || 0) * 60

  const result = useMemo(() => {
    if (seconds <= 0) return null
    if (mode === "size") {
      const kbps = Number.parseFloat(bitrate)
      if (!Number.isFinite(kbps)) return null
      const bits = kbps * 1000 * seconds
      const mb = bits / 8 / 1_000_000
      return { label: "Szacowany rozmiar", value: `${mb.toFixed(2)} MB` }
    }
    const mb = Number.parseFloat(limitMb)
    if (!Number.isFinite(mb)) return null
    const kbps = (mb * 8 * 1_000_000) / seconds / 1000
    return { label: "Maksymalny bitrate", value: `${kbps.toFixed(1)} kbps` }
  }, [mode, seconds, bitrate, limitMb])

  return (
    <div className="space-y-4">
      <Field label="Tryb">
        <select
          className={selectClass}
          value={mode}
          onChange={(e) => setMode(e.target.value as typeof mode)}
        >
          <option value="size">Rozmiar z bitrate</option>
          <option value="bitrate">Bitrate z limitu MB</option>
        </select>
      </Field>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Godziny">
          <input className={inputClass} inputMode="decimal" value={hours} onChange={(e) => setHours(e.target.value)} />
        </Field>
        <Field label="Minuty">
          <input className={inputClass} inputMode="decimal" value={minutes} onChange={(e) => setMinutes(e.target.value)} />
        </Field>
      </div>
      {mode === "size" ? (
        <Field label="Bitrate (kbps)">
          <input className={inputClass} inputMode="decimal" value={bitrate} onChange={(e) => setBitrate(e.target.value)} />
        </Field>
      ) : (
        <Field label="Limit (MB)">
          <input className={inputClass} inputMode="decimal" value={limitMb} onChange={(e) => setLimitMb(e.target.value)} />
        </Field>
      )}
      {result && (
        <ResultBox>
          {result.label}: <strong className="tabular-nums">{result.value}</strong>
        </ResultBox>
      )}
    </div>
  )
}
