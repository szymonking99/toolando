"use client"

import { useRef, useState } from "react"
import { Upload, Loader2, CheckCircle2, AlertCircle, Download, X } from "lucide-react"
import type { ToolConfig } from "@/lib/tools"
import { uploadAndProcess } from "@/lib/client-upload"
import { useI18n } from "@/components/i18n-provider"
import { useFakeProgress } from "@/hooks/use-fake-progress"
import { NextStepsPanel } from "@/components/next-steps-panel"
import { recordToolVisit } from "@/lib/client-preferences"
import JSZip from "jszip"

type Status = "idle" | "uploading" | "converting" | "done" | "error"

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export function ToolConverter({ tool }: { tool: ToolConfig }) {
  const { t } = useI18n()
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<File[]>([])
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)
  const [batchIndex, setBatchIndex] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [result, setResult] = useState<{ url: string; name: string } | null>(
    null,
  )
  const convProgress = useFakeProgress(status === "converting")
  const batch = files.length > 1

  function reset() {
    setFiles([])
    setStatus("idle")
    setError(null)
    setProgress(0)
    setBatchIndex(0)
    if (result) URL.revokeObjectURL(result.url)
    setResult(null)
    if (inputRef.current) inputRef.current.value = ""
  }

  function pickFiles(list: FileList | File[] | null) {
    if (!list || list.length === 0) return
    const arr = Array.from(list)
    setError(null)
    setStatus("idle")
    setFiles(arr)
    if (result) {
      URL.revokeObjectURL(result.url)
      setResult(null)
    }
  }

  const LARGE = 4 * 1024 * 1024

  async function convertOne(file: File): Promise<{ blob: Blob; name: string }> {
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
        /* keep */
      }
      throw new Error(message)
    }
    const blob = await res.blob()
    const disposition = res.headers.get("Content-Disposition") ?? ""
    const match = disposition.match(/filename="?([^"]+)"?/)
    const name = match
      ? decodeURIComponent(match[1])
      : `${file.name.replace(/\.[^.]+$/, "")}.${tool.to}`
    return { blob, name }
  }

  async function convert() {
    if (files.length === 0) return
    setError(null)

    const firstLarge = files[0]!.size > LARGE
    if (firstLarge) {
      setStatus("uploading")
      setProgress(0)
    } else {
      setStatus("converting")
    }

    try {
      if (files.length === 1) {
        const { blob, name } = await convertOne(files[0]!)
        setResult({ url: URL.createObjectURL(blob), name })
        setStatus("done")
        recordToolVisit(tool.id, `${tool.from.toUpperCase()} → ${tool.to.toUpperCase()}`)
        return
      }

      const zip = new JSZip()
      for (let i = 0; i < files.length; i++) {
        setBatchIndex(i + 1)
        setStatus(files[i]!.size > LARGE ? "uploading" : "converting")
        const { blob, name } = await convertOne(files[i]!)
        zip.file(name, blob)
      }
      const zipBlob = await zip.generateAsync({ type: "blob" })
      const zipName = `${tool.from}-to-${tool.to}-batch.zip`
      setResult({ url: URL.createObjectURL(zipBlob), name: zipName })
      setStatus("done")
      recordToolVisit(tool.id, `${tool.from.toUpperCase()} → ${tool.to.toUpperCase()} (batch)`)
    } catch (err) {
      setError(err instanceof Error ? err.message : t.tool.connectionError)
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
          pickFiles(e.dataTransfer.files)
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
          multiple
          accept={`.${tool.from}${tool.from === "jpg" ? ",.jpeg" : ""}`}
          className="sr-only"
          onChange={(e) => pickFiles(e.target.files)}
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
        <span className="text-xs text-primary/90">
          {t.tool.batchHint ?? "You can select multiple files — results download as a ZIP."}
        </span>
      </label>

      {files.length > 0 && (
        <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
          <div className="mb-2 flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-foreground">
              {files.length === 1
                ? files[0]!.name
                : `${files.length} ${t.tool.filesSelected ?? "files selected"}`}
            </p>
            <button
              type="button"
              onClick={reset}
              className="shrink-0 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
              aria-label={t.tool.removeFile}
            >
              <X className="size-4" />
            </button>
          </div>
          {files.length === 1 ? (
            <p className="text-xs text-muted-foreground">{formatBytes(files[0]!.size)}</p>
          ) : (
            <ul className="max-h-40 space-y-1 overflow-auto text-xs text-muted-foreground">
              {files.map((f) => (
                <li key={f.name + f.size} className="truncate">
                  {f.name} · {formatBytes(f.size)}
                </li>
              ))}
            </ul>
          )}
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
            {batch
              ? (t.tool.batchDone ?? "Batch done — download the ZIP.")
              : t.tool.convertDone}
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
          <NextStepsPanel
            toolId={tool.id}
            toolTitle={`${tool.from.toUpperCase()} → ${tool.to.toUpperCase()}`}
          />
        </div>
      ) : (
        <div className="space-y-3">
          {status === "uploading" && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  {t.tool.uploadingFile}
                  {batch ? ` (${batchIndex}/${files.length})` : ""}
                </span>
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
          {status === "converting" && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  {t.tool.converting}
                  {batch ? ` (${batchIndex}/${files.length})` : ""}
                </span>
                <span>{convProgress}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-200"
                  style={{ width: `${convProgress}%` }}
                />
              </div>
            </div>
          )}
          <button
            type="button"
            onClick={convert}
            disabled={
              files.length === 0 || status === "converting" || status === "uploading"
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
            ) : batch ? (
              `${t.tool.convertToPrefix} ${tool.to.toUpperCase()} (${files.length})`
            ) : (
              `${t.tool.convertToPrefix} ${tool.to.toUpperCase()}`
            )}
          </button>
        </div>
      )}
    </div>
  )
}
