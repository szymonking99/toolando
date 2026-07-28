"use client"

import { useMemo, useState } from "react"
import { Field, inputClass, ResultBox } from "./ui"

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

function hexToRgb(hex: string) {
  const h = hex.replace("#", "").trim()
  const full =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h
  if (!/^[0-9a-fA-F]{6}$/.test(full)) return null
  return {
    r: Number.parseInt(full.slice(0, 2), 16),
    g: Number.parseInt(full.slice(2, 4), 16),
    b: Number.parseInt(full.slice(4, 6), 16),
  }
}

function rgbToHex(r: number, g: number, b: number) {
  return (
    "#" +
    [r, g, b]
      .map((v) => clamp(Math.round(v), 0, 255).toString(16).padStart(2, "0"))
      .join("")
  )
}

function rgbToHsl(r: number, g: number, b: number) {
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      default:
        h = (r - g) / d + 4
    }
    h /= 6
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  }
}

function relativeLuminance(r: number, g: number, b: number) {
  const f = (c: number) => {
    const s = c / 255
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
  }
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)
}

function contrastRatio(
  a: { r: number; g: number; b: number },
  b: { r: number; g: number; b: number },
) {
  const l1 = relativeLuminance(a.r, a.g, a.b)
  const l2 = relativeLuminance(b.r, b.g, b.b)
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)
  return (lighter + 0.05) / (darker + 0.05)
}

export function ColorTool() {
  const [hex, setHex] = useState("#3b82f6")
  const [bg, setBg] = useState("#0f172a")

  const rgb = useMemo(() => hexToRgb(hex), [hex])
  const hsl = rgb ? rgbToHsl(rgb.r, rgb.g, rgb.b) : null
  const bgRgb = useMemo(() => hexToRgb(bg), [bg])
  const contrast =
    rgb && bgRgb ? contrastRatio(rgb, bgRgb) : null

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Kolor (HEX)">
          <div className="flex gap-2">
            <input
              type="color"
              value={hexToRgb(hex) ? hex : "#000000"}
              onChange={(e) => setHex(e.target.value)}
              className="h-10 w-12 cursor-pointer rounded border border-white/10 bg-transparent"
            />
            <input
              className={inputClass}
              value={hex}
              onChange={(e) => setHex(e.target.value)}
            />
          </div>
        </Field>
        <Field label="Tło do kontrastu">
          <div className="flex gap-2">
            <input
              type="color"
              value={hexToRgb(bg) ? bg : "#000000"}
              onChange={(e) => setBg(e.target.value)}
              className="h-10 w-12 cursor-pointer rounded border border-white/10 bg-transparent"
            />
            <input
              className={inputClass}
              value={bg}
              onChange={(e) => setBg(e.target.value)}
            />
          </div>
        </Field>
      </div>
      {rgb && hsl && (
        <ResultBox>
          <div
            className="mb-3 h-16 rounded-lg border border-white/10"
            style={{ background: rgbToHex(rgb.r, rgb.g, rgb.b) }}
          />
          <ul className="space-y-1 font-mono text-sm">
            <li>HEX: {rgbToHex(rgb.r, rgb.g, rgb.b)}</li>
            <li>
              RGB: {rgb.r}, {rgb.g}, {rgb.b}
            </li>
            <li>
              HSL: {hsl.h}°, {hsl.s}%, {hsl.l}%
            </li>
            {contrast != null && (
              <li>
                Kontrast: {contrast.toFixed(2)}:1 —{" "}
                {contrast >= 7
                  ? "AAA"
                  : contrast >= 4.5
                    ? "AA"
                    : contrast >= 3
                      ? "AA large"
                      : "niedostateczny"}
              </li>
            )}
          </ul>
        </ResultBox>
      )}
    </div>
  )
}
