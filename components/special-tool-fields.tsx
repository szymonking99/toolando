"use client"

import type { SpecialEngine } from "@/lib/special-tools"
import { useI18n } from "@/components/i18n-provider"

export type SpecialFieldValues = {
  splitMode: "all" | "range"
  pageRange: string
  rotation: "90" | "180" | "270"
  width: string
  height: string
  watermarkText: string
  trimStart: string
  trimEnd: string
  pageNumberPosition: "bottom" | "top"
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
  pageNumberPosition: "bottom",
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
    case "pdf-page-numbers":
      return { pageNumberPosition: values.pageNumberPosition }
    default:
      return undefined
  }
}

type SpecialFieldsCopy = {
  splitMode: string
  everyPage: string
  pageRange: string
  pagesHint: string
  rotation: string
  width: string
  height: string
  watermark: string
  trimStart: string
  trimEnd: string
  pageNumberPos: string
  bottom: string
  top: string
}

const FALLBACK_FIELDS: SpecialFieldsCopy = {
  splitMode: "Split mode",
  everyPage: "Every page separately",
  pageRange: "Selected range",
  pagesHint: "Pages (e.g. 1-3,5)",
  rotation: "Rotation angle",
  width: "Width (px)",
  height: "Height (px, optional)",
  watermark: "Watermark text",
  trimStart: "Start (sec or MM:SS)",
  trimEnd: "End (sec or MM:SS)",
  pageNumberPos: "Page number position",
  bottom: "Bottom of page",
  top: "Top of page",
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
  const { t } = useI18n()
  const f =
    ((t as { specialFields?: SpecialFieldsCopy }).specialFields) ?? FALLBACK_FIELDS

  const box =
    "rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 space-y-3"
  const label = "text-sm font-medium text-foreground"
  const input =
    "mt-1 w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-foreground focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/30"

  switch (engine) {
    case "split-pdf":
      return (
        <div className={box}>
          <p className={label}>{f.splitMode}</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="splitMode"
                checked={values.splitMode === "all"}
                onChange={() => onChange({ splitMode: "all" })}
              />
              {f.everyPage}
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="splitMode"
                checked={values.splitMode === "range"}
                onChange={() => onChange({ splitMode: "range" })}
              />
              {f.pageRange}
            </label>
          </div>
          {values.splitMode === "range" && (
            <label className="block text-sm text-muted-foreground">
              {f.pagesHint}
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
            {f.rotation}
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
              {f.width}
              <input
                className={input}
                type="number"
                min={1}
                value={values.width}
                onChange={(e) => onChange({ width: e.target.value })}
              />
            </label>
            <label className={label}>
              {f.height}
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
            {f.watermark}
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
              {f.trimStart}
              <input
                className={input}
                value={values.trimStart}
                onChange={(e) => onChange({ trimStart: e.target.value })}
              />
            </label>
            <label className={label}>
              {f.trimEnd}
              <input
                className={input}
                value={values.trimEnd}
                onChange={(e) => onChange({ trimEnd: e.target.value })}
              />
            </label>
          </div>
        </div>
      )
    case "pdf-page-numbers":
      return (
        <div className={box}>
          <label className={label}>
            {f.pageNumberPos}
            <select
              className={input}
              value={values.pageNumberPosition}
              onChange={(e) =>
                onChange({
                  pageNumberPosition: e.target
                    .value as SpecialFieldValues["pageNumberPosition"],
                })
              }
            >
              <option value="bottom">{f.bottom}</option>
              <option value="top">{f.top}</option>
            </select>
          </label>
        </div>
      )
    default:
      return null
  }
}
