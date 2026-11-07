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
  pageSize: "a4" | "letter"
  fit: "contain" | "cover"
  stampText: string
  stampPosition: "bottom-right" | "bottom-left" | "top-right" | "center"
  makePdf: boolean
  redactPatterns: string
  redactEmails: boolean
  redactPesel: boolean
  redactIban: boolean
  redactPhones: boolean
  fillName: string
  fillNip: string
  fillDate: string
  fillExtra: string
  audioFormat: "mp3" | "m4a" | "wav"
  pdfPassword: string
  cropLeft: string
  cropTop: string
  cropWidth: string
  cropHeight: string
  pageOrder: string
  flipDirection: "horizontal" | "vertical" | "both"
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
  pageSize: "a4",
  fit: "contain",
  stampText: "Podpisano elektronicznie",
  stampPosition: "bottom-right",
  makePdf: false,
  redactPatterns: "",
  redactEmails: true,
  redactPesel: true,
  redactIban: true,
  redactPhones: false,
  fillName: "",
  fillNip: "",
  fillDate: "",
  fillExtra: "",
  audioFormat: "mp3",
  pdfPassword: "",
  cropLeft: "0",
  cropTop: "0",
  cropWidth: "800",
  cropHeight: "600",
  pageOrder: "1-3",
  flipDirection: "horizontal",
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
    case "rotate-image":
      return { rotation: values.rotation }
    case "resize-image":
    case "resize-video":
      return {
        width: values.width,
        height: values.height,
      }
    case "flip-image":
      return { flipDirection: values.flipDirection }
    case "watermark-image":
      return { watermarkText: values.watermarkText }
    case "trim-video":
    case "video-to-gif":
      return {
        trimStart: values.trimStart,
        trimEnd: values.trimEnd,
      }
    case "extract-audio":
      return { audioFormat: values.audioFormat }
    case "protect-pdf":
      return { pdfPassword: values.pdfPassword }
    case "crop-image":
      return {
        cropLeft: values.cropLeft,
        cropTop: values.cropTop,
        cropWidth: values.cropWidth,
        cropHeight: values.cropHeight,
      }
    case "extract-pdf-pages":
      return { pageOrder: values.pageOrder }
    case "pdf-page-numbers":
      return { pageNumberPosition: values.pageNumberPosition }
    case "images-to-pdf":
      return {
        pageSize: values.pageSize,
        fit: values.fit,
      }
    case "stamp-pdf":
      return {
        stampText: values.stampText,
        stampPosition: values.stampPosition,
      }
    case "prepare-email":
      return { makePdf: values.makePdf ? "1" : "0" }
    case "redact-pdf":
      return {
        redactPatterns: values.redactPatterns,
        redactEmails: values.redactEmails ? "1" : "0",
        redactPesel: values.redactPesel ? "1" : "0",
        redactIban: values.redactIban ? "1" : "0",
        redactPhones: values.redactPhones ? "1" : "0",
      }
    case "fill-pdf":
      return {
        fillName: values.fillName,
        fillNip: values.fillNip,
        fillDate: values.fillDate,
        fillExtra: values.fillExtra,
        stampPosition: values.stampPosition,
      }
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
  pageSize: string
  fitMode: string
  fitContain: string
  fitCover: string
  stampText: string
  stampPosition: string
  makePdf: string
  posBottomRight?: string
  posBottomLeft?: string
  posTopRight?: string
  posCenter?: string
  redactPatterns?: string
  redactAuto?: string
  redactEmails?: string
  redactPesel?: string
  redactIban?: string
  redactPhones?: string
  fillName?: string
  fillNip?: string
  fillDate?: string
  fillExtra?: string
  audioFormat?: string
  pdfPassword?: string
  pdfPasswordHint?: string
  cropLeft?: string
  cropTop?: string
  cropWidth?: string
  cropHeight?: string
  pageOrder?: string
  pageOrderHint?: string
  flipDirection?: string
  flipHorizontal?: string
  flipVertical?: string
  flipBoth?: string
  videoSizeHint?: string
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
  pageSize: "Page size",
  fitMode: "How to place the image",
  fitContain: "Fit on page (with margins)",
  fitCover: "Fill page (may crop)",
  stampText: "Stamp / signature text",
  stampPosition: "Position",
  makePdf: "Also pack images into one PDF",
  posBottomRight: "Bottom right",
  posBottomLeft: "Bottom left",
  posTopRight: "Top right",
  posCenter: "Center",
  redactPatterns: "Custom phrases (one per line)",
  redactAuto: "Auto-detect",
  redactEmails: "E-mails",
  redactPesel: "PESEL / ID-like numbers",
  redactIban: "IBAN / account numbers",
  redactPhones: "Phone numbers",
  fillName: "Full name",
  fillNip: "NIP / tax ID",
  fillDate: "Date",
  fillExtra: "Extra note",
  audioFormat: "Audio format",
  pdfPassword: "Password",
  pdfPasswordHint: "Min. 4 characters. Remember it — without it you cannot open the file.",
  cropLeft: "Left (px)",
  cropTop: "Top (px)",
  cropWidth: "Width (px)",
  cropHeight: "Height (px)",
  pageOrder: "Pages in order",
  pageOrderHint: "e.g. 3,1,2 or 1-3,5 — order is kept",
  flipDirection: "Mirror",
  flipHorizontal: "Horizontal",
  flipVertical: "Vertical",
  flipBoth: "Both",
  videoSizeHint: "Height empty = keep aspect ratio. Width 160–3840 px.",
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
    "rounded-xl border border-border bg-muted/40 px-4 py-4 space-y-3"
  const label = "text-sm font-medium text-foreground"
  const input =
    "mt-1 w-full rounded-lg border border-border bg-muted/50 px-3 py-2 text-sm text-foreground focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/30"

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
    case "rotate-image":
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
    case "resize-video":
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
          {engine === "resize-video" && (
            <p className="text-xs text-muted-foreground">
              {f.videoSizeHint ??
                "Height empty = keep aspect ratio. Width 160–3840 px."}
            </p>
          )}
        </div>
      )
    case "flip-image":
      return (
        <div className={box}>
          <label className={label}>
            {f.flipDirection ?? "Mirror"}
            <select
              className={input}
              value={values.flipDirection}
              onChange={(e) =>
                onChange({
                  flipDirection: e.target
                    .value as SpecialFieldValues["flipDirection"],
                })
              }
            >
              <option value="horizontal">{f.flipHorizontal ?? "Horizontal"}</option>
              <option value="vertical">{f.flipVertical ?? "Vertical"}</option>
              <option value="both">{f.flipBoth ?? "Both"}</option>
            </select>
          </label>
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
    case "video-to-gif":
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
    case "extract-audio":
      return (
        <div className={box}>
          <label className={label}>
            {f.audioFormat ?? "Audio format"}
            <select
              className={input}
              value={values.audioFormat}
              onChange={(e) =>
                onChange({
                  audioFormat: e.target.value as SpecialFieldValues["audioFormat"],
                })
              }
            >
              <option value="mp3">MP3</option>
              <option value="m4a">M4A (AAC)</option>
              <option value="wav">WAV</option>
            </select>
          </label>
        </div>
      )
    case "protect-pdf":
      return (
        <div className={box}>
          <label className={label}>
            {f.pdfPassword ?? "Password"}
            <input
              className={input}
              type="password"
              autoComplete="new-password"
              value={values.pdfPassword}
              onChange={(e) => onChange({ pdfPassword: e.target.value })}
              placeholder="••••••••"
            />
          </label>
          <p className="text-xs text-muted-foreground">
            {f.pdfPasswordHint ??
              "Min. 4 characters. Remember it — without it you cannot open the file."}
          </p>
        </div>
      )
    case "crop-image":
      return (
        <div className={box}>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className={label}>
              {f.cropLeft ?? "Left (px)"}
              <input
                className={input}
                type="number"
                min={0}
                value={values.cropLeft}
                onChange={(e) => onChange({ cropLeft: e.target.value })}
              />
            </label>
            <label className={label}>
              {f.cropTop ?? "Top (px)"}
              <input
                className={input}
                type="number"
                min={0}
                value={values.cropTop}
                onChange={(e) => onChange({ cropTop: e.target.value })}
              />
            </label>
            <label className={label}>
              {f.cropWidth ?? "Width (px)"}
              <input
                className={input}
                type="number"
                min={1}
                value={values.cropWidth}
                onChange={(e) => onChange({ cropWidth: e.target.value })}
              />
            </label>
            <label className={label}>
              {f.cropHeight ?? "Height (px)"}
              <input
                className={input}
                type="number"
                min={1}
                value={values.cropHeight}
                onChange={(e) => onChange({ cropHeight: e.target.value })}
              />
            </label>
          </div>
        </div>
      )
    case "extract-pdf-pages":
      return (
        <div className={box}>
          <label className={label}>
            {f.pageOrder ?? "Pages in order"}
            <input
              className={input}
              value={values.pageOrder}
              onChange={(e) => onChange({ pageOrder: e.target.value })}
              placeholder="3,1,2"
            />
          </label>
          <p className="text-xs text-muted-foreground">
            {f.pageOrderHint ?? "e.g. 3,1,2 or 1-3,5 — order is kept"}
          </p>
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
    case "images-to-pdf":
      return (
        <div className={box}>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className={label}>
              {f.pageSize}
              <select
                className={input}
                value={values.pageSize}
                onChange={(e) =>
                  onChange({
                    pageSize: e.target.value as SpecialFieldValues["pageSize"],
                  })
                }
              >
                <option value="a4">A4</option>
                <option value="letter">Letter</option>
              </select>
            </label>
            <label className={label}>
              {f.fitMode}
              <select
                className={input}
                value={values.fit}
                onChange={(e) =>
                  onChange({
                    fit: e.target.value as SpecialFieldValues["fit"],
                  })
                }
              >
                <option value="contain">{f.fitContain}</option>
                <option value="cover">{f.fitCover}</option>
              </select>
            </label>
          </div>
        </div>
      )
    case "stamp-pdf":
      return (
        <div className={box}>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className={label}>
              {f.stampText}
              <input
                className={input}
                value={values.stampText}
                onChange={(e) => onChange({ stampText: e.target.value })}
              />
            </label>
            <label className={label}>
              {f.stampPosition}
              <select
                className={input}
                value={values.stampPosition}
                onChange={(e) =>
                  onChange({
                    stampPosition: e.target
                      .value as SpecialFieldValues["stampPosition"],
                  })
                }
              >
                <option value="bottom-right">
                  {f.posBottomRight ?? "Bottom right"}
                </option>
                <option value="bottom-left">
                  {f.posBottomLeft ?? "Bottom left"}
                </option>
                <option value="top-right">
                  {f.posTopRight ?? "Top right"}
                </option>
                <option value="center">{f.posCenter ?? "Center"}</option>
              </select>
            </label>
          </div>
        </div>
      )
    case "prepare-email":
      return (
        <div className={box}>
          <label className="flex items-center gap-2 text-sm text-foreground">
            <input
              type="checkbox"
              checked={values.makePdf}
              onChange={(e) => onChange({ makePdf: e.target.checked })}
            />
            {f.makePdf}
          </label>
        </div>
      )
    case "redact-pdf":
      return (
        <div className={box}>
          <label className={label}>
            {f.redactPatterns ?? "Custom phrases"}
            <textarea
              className={`${input} min-h-[5rem]`}
              value={values.redactPatterns}
              onChange={(e) => onChange({ redactPatterns: e.target.value })}
              placeholder="jan.kowalski@firma.pl&#10;90010112345"
            />
          </label>
          <p className="text-xs text-muted-foreground">
            {f.redactAuto ?? "Auto-detect"}
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-foreground">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={values.redactEmails}
                onChange={(e) => onChange({ redactEmails: e.target.checked })}
              />
              {f.redactEmails ?? "E-mails"}
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={values.redactPesel}
                onChange={(e) => onChange({ redactPesel: e.target.checked })}
              />
              {f.redactPesel ?? "PESEL"}
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={values.redactIban}
                onChange={(e) => onChange({ redactIban: e.target.checked })}
              />
              {f.redactIban ?? "IBAN"}
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={values.redactPhones}
                onChange={(e) => onChange({ redactPhones: e.target.checked })}
              />
              {f.redactPhones ?? "Phones"}
            </label>
          </div>
        </div>
      )
    case "fill-pdf":
      return (
        <div className={box}>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className={label}>
              {f.fillName ?? "Full name"}
              <input
                className={input}
                value={values.fillName}
                onChange={(e) => onChange({ fillName: e.target.value })}
              />
            </label>
            <label className={label}>
              {f.fillNip ?? "NIP"}
              <input
                className={input}
                value={values.fillNip}
                onChange={(e) => onChange({ fillNip: e.target.value })}
              />
            </label>
            <label className={label}>
              {f.fillDate ?? "Date"}
              <input
                className={input}
                value={values.fillDate}
                onChange={(e) => onChange({ fillDate: e.target.value })}
                placeholder="2026-09-10"
              />
            </label>
            <label className={label}>
              {f.stampPosition}
              <select
                className={input}
                value={values.stampPosition}
                onChange={(e) =>
                  onChange({
                    stampPosition: e.target
                      .value as SpecialFieldValues["stampPosition"],
                  })
                }
              >
                <option value="bottom-right">
                  {f.posBottomRight ?? "Bottom right"}
                </option>
                <option value="bottom-left">
                  {f.posBottomLeft ?? "Bottom left"}
                </option>
                <option value="top-right">
                  {f.posTopRight ?? "Top right"}
                </option>
                <option value="center">{f.posCenter ?? "Center"}</option>
              </select>
            </label>
          </div>
          <label className={label}>
            {f.fillExtra ?? "Extra note"}
            <input
              className={input}
              value={values.fillExtra}
              onChange={(e) => onChange({ fillExtra: e.target.value })}
            />
          </label>
        </div>
      )
    default:
      return null
  }
}
