"use client"

import { useMemo, useRef, useState } from "react"
import Link from "next/link"
import {
  AlertTriangle,
  CheckCircle2,
  Info,
  Loader2,
  Shield,
  Upload,
} from "lucide-react"
import { inspectFilePrivacy, type PrivacyReport } from "@/lib/privacy-inspect"
import { Field, PrimaryButton } from "./ui"
import { useI18n } from "@/components/i18n-provider"

export function PrivacyInspectorTool() {
  const { t, href } = useI18n()
  const copy = (t as { privacyTool?: typeof fallback }).privacyTool ?? fallback
  const inputRef = useRef<HTMLInputElement>(null)
  const [report, setReport] = useState<PrivacyReport | null>(null)
  const [name, setName] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onFile(file: File | null) {
    if (!file) return
    setBusy(true)
    setError(null)
    setName(file.name)
    try {
      const r = await inspectFilePrivacy(file)
      setReport(r)
    } catch {
      setError(copy.error)
      setReport(null)
    } finally {
      setBusy(false)
    }
  }

  const summary = useMemo(() => {
    if (!report) return null
    if (report.summaryKey === "warn") return { icon: AlertTriangle, text: copy.summaryWarn, cls: "text-amber-300" }
    if (report.summaryKey === "info") return { icon: Info, text: copy.summaryInfo, cls: "text-sky-300" }
    return { icon: CheckCircle2, text: copy.summaryClean, cls: "text-emerald-300" }
  }, [report, copy])

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">{copy.intro}</p>
      <Field label={copy.pickFile}>
        <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-white/15 bg-white/[0.02] px-4 py-10 text-center hover:border-primary/40">
          <input
            ref={inputRef}
            type="file"
            className="sr-only"
            accept=".jpg,.jpeg,.png,.pdf,image/jpeg,image/png,application/pdf"
            onChange={(e) => onFile(e.target.files?.[0] ?? null)}
          />
          {busy ? (
            <Loader2 className="size-6 animate-spin text-primary" />
          ) : (
            <Upload className="size-6 text-primary" />
          )}
          <span className="text-sm font-medium">{name ?? copy.drop}</span>
        </label>
      </Field>

      {error && <p className="text-sm text-destructive">{error}</p>}

      {report && summary && (
        <div className="space-y-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <div className={`flex items-start gap-2 text-sm font-medium ${summary.cls}`}>
            <summary.icon className="mt-0.5 size-4 shrink-0" />
            <span>{summary.text}</span>
          </div>
          <ul className="space-y-2">
            {report.findings.map((f) => (
              <li
                key={f.key}
                className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/5 py-2 text-sm last:border-0"
              >
                <span className="text-muted-foreground">{f.label}</span>
                <span
                  className={
                    f.severity === "warn"
                      ? "font-medium text-amber-200"
                      : f.severity === "ok"
                        ? "text-emerald-300"
                        : "text-foreground"
                  }
                >
                  {f.severity === "warn" && f.key === "gps" ? "📍 " : ""}
                  {f.value}
                </span>
              </li>
            ))}
          </ul>
          {(report.hasGps || report.hasCamera || report.hasAuthor) && (
            <div className="flex flex-wrap gap-2 pt-2">
              <Link
                href={href("/tools/usun-exif")}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
              >
                <Shield className="size-4" />
                {copy.stripExif}
              </Link>
            </div>
          )}
        </div>
      )}

      {!report && (
        <PrimaryButton type="button" onClick={() => inputRef.current?.click()} disabled={busy}>
          {copy.cta}
        </PrimaryButton>
      )}
    </div>
  )
}

const fallback = {
  intro:
    "Drop a photo or PDF. We scan metadata locally in your browser — the file never leaves your device.",
  pickFile: "File",
  drop: "Drop JPG, PNG or PDF — or click to choose",
  cta: "Choose a file",
  error: "Could not inspect this file.",
  summaryWarn: "Before publishing, remove sensitive metadata (especially GPS).",
  summaryInfo: "Some metadata found — review before sharing publicly.",
  summaryClean: "No sensitive metadata found in the scanned portion.",
  stripExif: "Remove EXIF now",
}
