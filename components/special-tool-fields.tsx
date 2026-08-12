"use client"

import type { SpecialEngine } from "@/lib/special-tools"

export type SpecialFieldValues = {
  splitMode: "all" | "range"
  pageRange: string
  rotation: "90" | "180" | "270"
  width: string
  height: string
  watermarkText: string
  trimStart: string
  trimEnd: string
}

export const defaultSpecialFields: SpecialFieldValues = {
  splitMode: "all",
  pageRange: "1-3",
  rotation: "90",
  width: "1920",
  height: "",
  watermarkText: "toolando.tech",
  trimStart: "0",
  trimEnd: "30",
}

export function buildSpecialFields(
  engine: SpecialEngine,
  values: SpecialFieldValues,
): Record<string, string> | undefined {
  switch (engine) {
    case "split-pdf":
      return {
        splitMode: values.splitMode,
        pageRange: values.pageRange,
      }
    case "rotate-pdf":
      return { rotation: values.rotation }
    case "resize-image":
      return {
        width: values.width,
        height: values.height,
      }
    case "watermark-image":
      return { watermarkText: values.watermarkText }
    case "trim-video":
      return {
        trimStart: values.trimStart,
        trimEnd: values.trimEnd,
      }
    default:
      return undefined
  }
}

export function SpecialToolFields({
  engine,
  values,
  onChange,
}: {
  engine: SpecialEngine
  values: SpecialFieldValues
  onChange: (patch: Partial<SpecialFieldValues>) => void
}) {
  const box =
    "rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 space-y-3"
  const label = "text-sm font-medium text-foreground"
  const input =
    "mt-1 w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-foreground focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/30"

  switch (engine) {
    case "split-pdf":
      return (
        <div className={box}>
          <p className={label}>Tryb podziału</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="splitMode"
                checked={values.splitMode === "all"}
                onChange={() => onChange({ splitMode: "all" })}
              />
              Każda strona osobno
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="splitMode"
                checked={values.splitMode === "range"}
                onChange={() => onChange({ splitMode: "range" })}
              />
              Wybrany zakres
            </label>
          </div>
          {values.splitMode === "range" && (
            <label className="block text-sm text-muted-foreground">
              Strony (np. 1-3,5)
              <input
                className={input}
                value={values.pageRange}
                onChange={(e) => onChange({ pageRange: e.target.value })}
              />
            </label>
          )}
        </div>
      )
    case "rotate-pdf":
      return (
        <div className={box}>
          <label className={label}>
            Kąt obrotu
            <select
              className={input}
              value={values.rotation}
              onChange={(e) =>
                onChange({ rotation: e.target.value as SpecialFieldValues["rotation"] })
              }
            >
              <option value="90">90°</option>
              <option value="180">180°</option>
              <option value="270">270°</option>
            </select>
          </label>
        </div>
      )
    case "resize-image":
      return (
        <div className={box}>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className={label}>
              Szerokość (px)
              <input
                className={input}
                type="number"
                min={1}
                value={values.width}
                onChange={(e) => onChange({ width: e.target.value })}
              />
            </label>
            <label className={label}>
              Wysokość (px, opcjonalnie)
              <input
                className={input}
                type="number"
                min={1}
                value={values.height}
                onChange={(e) => onChange({ height: e.target.value })}
                placeholder="auto"
              />
            </label>
          </div>
        </div>
      )
    case "watermark-image":
      return (
        <div className={box}>
          <label className={label}>
            Tekst znaku wodnego
            <input
              className={input}
              value={values.watermarkText}
              onChange={(e) => onChange({ watermarkText: e.target.value })}
            />
          </label>
        </div>
      )
    case "trim-video":
      return (
        <div className={box}>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className={label}>
              Początek (sek. lub MM:SS)
              <input
                className={input}
                value={values.trimStart}
                onChange={(e) => onChange({ trimStart: e.target.value })}
              />
            </label>
            <label className={label}>
              Koniec (sek. lub MM:SS)
              <input
                className={input}
                value={values.trimEnd}
                onChange={(e) => onChange({ trimEnd: e.target.value })}
              />
            </label>
          </div>
        </div>
      )
    default:
      return null
  }
}
