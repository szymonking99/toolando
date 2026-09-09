"use client"

import { useMemo, useState } from "react"
import { Field, inputClass, ResultBox } from "./ui"

const PRESETS = [
  { label: "16:9", w: 16, h: 9 },
  { label: "4:3", w: 4, h: 3 },
  { label: "1:1", w: 1, h: 1 },
  { label: "9:16", w: 9, h: 16 },
  { label: "21:9", w: 21, h: 9 },
]

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b)
}

export function AspectRatioTool() {
  const [width, setWidth] = useState("1920")
  const [height, setHeight] = useState("1080")
  const [lockW, setLockW] = useState("1280")

  const ratio = useMemo(() => {
    const w = Math.round(Number.parseFloat(width))
    const h = Math.round(Number.parseFloat(height))
    if (!Number.isFinite(w) || !Number.isFinite(h) || w <= 0 || h <= 0) return null
    const g = gcd(w, h)
    return { w: w / g, h: h / g, decimal: w / h }
  }, [width, height])

  const scaled = useMemo(() => {
    if (!ratio) return null
    const lw = Number.parseFloat(lockW)
    if (!Number.isFinite(lw) || lw <= 0) return null
    return { w: Math.round(lw), h: Math.round((lw * ratio.h) / ratio.w) }
  }, [ratio, lockW])

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={p.label}
            type="button"
            className="rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium hover:border-primary/40"
            onClick={() => {
              setWidth(String(p.w * 120))
              setHeight(String(p.h * 120))
            }}
          >
            {p.label}
          </button>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Width (px)">
          <input className={inputClass} inputMode="numeric" value={width} onChange={(e) => setWidth(e.target.value)} />
        </Field>
        <Field label="Height (px)">
          <input className={inputClass} inputMode="numeric" value={height} onChange={(e) => setHeight(e.target.value)} />
        </Field>
      </div>
      {ratio && (
        <ResultBox>
          <p>
            Ratio:{" "}
            <strong>
              {ratio.w}:{ratio.h}
            </strong>{" "}
            ({ratio.decimal.toFixed(4)})
          </p>
        </ResultBox>
      )}
      <Field label="Scale to width">
        <input className={inputClass} inputMode="numeric" value={lockW} onChange={(e) => setLockW(e.target.value)} />
      </Field>
      {scaled && (
        <ResultBox>
          <p className="tabular-nums">
            → {scaled.w} × {scaled.h} px
          </p>
        </ResultBox>
      )}
    </div>
  )
}
