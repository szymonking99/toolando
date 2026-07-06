"use client"

import { useRef, useState } from "react"
import { Upload, Loader2, CheckCircle2, AlertCircle, Download, X } from "lucide-react"
import type { ToolConfig } from "@/lib/tools"
import { uploadAndProcess } from "@/lib/client-upload"
import { useI18n } from "@/components/i18n-provider"

type Status = "idle" | "uploading" | "converting" | "done" | "error"

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export function ToolConverter({ tool }: { tool: ToolConfig }) {
  const { t } = useI18n()
  const inputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [result, setResult] = useState<{ url: string; name: string } | null>(
    null,
  )

  function reset() {
    setFile(null)
    setStatus("idle")
    setError(null)
    setProgress(0)
    if (result) URL.revokeObjectURL(result.url)
    setResult(null)
    if (inputRef.current) inputRef.current.value = ""
  }

  function pickFile(f: File | null) {
    if (!f) return
    setError(null)
    setStatus("idle")
    setFile(f)
    if (result) {
      URL.revokeObjectURL(result.url)
      setResult(null)
    }
  }

  const LARGE = 4 * 1024 * 1024

  async function convert() {
    if (!file) return
    setError(null)

    const isLarge = file.size > LARGE
    if (isLarge) {
      setStatus("uploading")
      setProgress(0)
    } else {
      setStatus("converting")
    }

    try {
      const res = await uploadAndProcess({
        file,
        endpoint: "/api/convert",
        id: tool.id,
        onUploadProgress: (pct) => {
          setProgress(pct)
          if (pct >= 100) setStatus("converting")
        },
      })

      if (!res.ok) {
        let message = t.tool.convertFailed
        try {
          const data = await res.json()
          if (data?.error) message = data.error
        } catch {
          /* keep default */
        }
        setError(message)
        setStatus("error")
        return
      }

      const blob = await res.blob()
      const disposition = res.headers.get("Content-Disposition") ?? ""
      const match = disposition.match(/filename="?([^"]+)"?/)
      const name = match
        ? decodeURIComponent(match[1])
        : `converted.${tool.to}`

      setResult({ url: URL.createObjectURL(blob), name })
      setStatus("done")
    } catch {
      setError(t.tool.connectionError)
      setStatus("error")
    }
  }

  if (!tool.supported) {
    return (
      <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.06] p-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-0.5 size-5 shrink-0 text-amber-300" />
          <div>
            <p className="font-medium text-foreground">
              {t.tool.unavailable}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {tool.unsupportedReason}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <label
        onDragOver={(e) => {
          e.preventDefault()
          setDragging(true)
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragging(false)
          pickFile(e.dataTransfer.files?.[0] ?? null)
        }}
        className={`flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-dashed p-10 text-center transition-colors ${
          dragging
            ? "border-primary bg-primary/[0.08]"
            : "border-white/15 bg-white/[0.02] hover:border-primary/40 hover:bg-white/[0.04]"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept={`.${tool.from}${tool.from === "jpg" ? ",.jpeg" : ""}`}
          className="sr-only"
          onChange={(e) => pickFile(e.target.files?.[0] ?? null)}
        />
        <span className="flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Upload className="size-5" />
        </span>
        <span className="text-sm font-medium text-foreground">
          {t.tool.dropClick}
        </span>
        <span className="text-xs text-muted-foreground">
          {t.tool.supportedFormat}: {tool.from.toUpperCase()} • {t.tool.maxSize}
        </span>
      </label>

      {file && (
        <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-foreground">
              {file.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {formatBytes(file.size)}
            </p>
          </div>
          <button
            type="button"
            onClick={reset}
            className="shrink-0 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
            aria-label={t.tool.removeFile}
          >
            <X className="size-4" />
          </button>
        </div>
      )}

      {error && (
        <div className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive-foreground">
          <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" />
          <span className="leading-relaxed">{error}</span>
        </div>
      )}

      {status === "done" && result ? (
        <div className="space-y-3 rounded-xl border border-primary/25 bg-primary/[0.06] px-4 py-4">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <CheckCircle2 className="size-4 text-primary" />
            {t.tool.convertDone}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={result.url}
              download={result.name}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
            >
              <Download className="size-4" />
              {t.tool.downloadNamed} {result.name}
            </a>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center rounded-md border border-white/15 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
            >
              {t.tool.convertAnother}
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {status === "uploading" && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{t.tool.uploadingFile}</span>
                <span>{progress}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
          <button
            type="button"
            onClick={convert}
            disabled={
              !file || status === "converting" || status === "uploading"
            }
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {status === "uploading" ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                {t.tool.uploading} {progress}%
              </>
            ) : status === "converting" ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                {t.tool.converting}
              </>
            ) : (
              `${t.tool.convertToPrefix} ${tool.to.toUpperCase()}`
            )}
          </button>
        </div>
      )}
    </div>
  )
}
