"use client"

import { useEffect, useRef, useState } from "react"
import {
  Upload,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Download,
  X,
} from "lucide-react"
import type { SpecialToolConfig } from "@/lib/special-tools"
import { uploadManyAndProcess } from "@/lib/client-upload"
import { useI18n } from "@/components/i18n-provider"
import { getSpecialMeta } from "@/lib/i18n/tool-meta"
import { useFakeProgress } from "@/hooks/use-fake-progress"

type Status = "idle" | "uploading" | "working" | "done" | "error"

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export function SpecialTool({ tool }: { tool: SpecialToolConfig }) {
  const { t, locale } = useI18n()
  const meta = getSpecialMeta(locale, tool.id)
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<File[]>([])
  const [quality, setQuality] = useState(75)
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [result, setResult] = useState<{
    url: string
    name: string
    size: number
    isImage: boolean
  } | null>(null)

  const isImageResult = tool.engine !== "merge-pdf"
  const workProgress = useFakeProgress(status === "working")

  // Live thumbnails for selected image files (before processing).
  const [previews, setPreviews] = useState<string[]>([])
  useEffect(() => {
    const urls = files.map((f) =>
      f.type.startsWith("image/") ? URL.createObjectURL(f) : "",
    )
    setPreviews(urls)
    return () => {
      for (const url of urls) {
        if (url) URL.revokeObjectURL(url)
      }
    }
  }, [files])

  function clearResult() {
    if (result) URL.revokeObjectURL(result.url)
    setResult(null)
  }

  function reset() {
    setFiles([])
    setStatus("idle")
    setError(null)
    setProgress(0)
    clearResult()
    if (inputRef.current) inputRef.current.value = ""
  }

  function addFiles(list: FileList | null) {
    if (!list || list.length === 0) return
    setError(null)
    setStatus("idle")
    clearResult()
    const incoming = Array.from(list)
    setFiles((prev) => (tool.multiple ? [...prev, ...incoming] : incoming.slice(0, 1)))
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  async function run() {
    if (files.length === 0) return
    if (tool.engine === "merge-pdf" && files.length < 2) {
      setError(t.tool.needTwoPdf)
      return
    }

    const totalBytes = files.reduce((sum, f) => sum + f.size, 0)
    const isLarge = totalBytes > 4 * 1024 * 1024
    if (isLarge) {
      setStatus("uploading")
      setProgress(0)
    } else {
      setStatus("working")
    }
    setError(null)

    try {
      const res = await uploadManyAndProcess({
        files,
        endpoint: "/api/tools",
        id: tool.id,
        fields: tool.hasQuality ? { quality: String(quality) } : undefined,
        onUploadProgress: (pct) => {
          setProgress(pct)
          if (pct >= 100) setStatus("working")
        },
      })

      if (!res.ok) {
        let message = t.tool.operationFailed
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
      const name = match ? decodeURIComponent(match[1]) : t.tool.result

      setResult({
        url: URL.createObjectURL(blob),
        name,
        size: blob.size,
        isImage: isImageResult,
      })
      setStatus("done")
    } catch {
      setError(t.tool.connectionError)
      setStatus("error")
    }
  }

  const originalSize = files.reduce((sum, f) => sum + f.size, 0)

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
          addFiles(e.dataTransfer.files)
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
          accept={tool.accept}
          multiple={tool.multiple}
          className="sr-only"
          onChange={(e) => addFiles(e.target.files)}
        />
        <span className="flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Upload className="size-5" />
        </span>
        <span className="text-sm font-medium text-foreground">
          {tool.multiple ? t.tool.dropClickMulti : t.tool.dropClick}
        </span>
        <span className="text-xs text-muted-foreground">
          {t.tool.supported}: {meta.acceptLabel} • {t.tool.maxSize}
        </span>
      </label>

      {files.length > 0 && (
        <ul className="space-y-2">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${index}`}
              className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
            >
              <div className="flex min-w-0 items-center gap-3">
                {tool.multiple && (
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/15 text-xs font-semibold text-primary">
                    {index + 1}
                  </span>
                )}
                {previews[index] && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={previews[index] || "/placeholder.svg"}
                    alt={file.name}
                    className="size-12 shrink-0 rounded-md border border-white/10 object-cover"
                  />
                )}
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">
                    {file.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatBytes(file.size)}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="shrink-0 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
                aria-label={t.tool.removeFile}
              >
                <X className="size-4" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {tool.hasQuality && files.length > 0 && (
        <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="quality"
              className="text-sm font-medium text-foreground"
            >
              {t.tool.compressionQuality}
            </label>
            <span className="text-sm font-semibold text-primary">{quality}%</span>
          </div>
          <input
            id="quality"
            type="range"
            min={10}
            max={100}
            step={1}
            value={quality}
            onChange={(e) => setQuality(Number(e.target.value))}
            className="mt-3 w-full accent-primary"
          />
          <p className="mt-2 text-xs text-muted-foreground">
            {t.tool.qualityHint}
          </p>
        </div>
      )}

      {error && (
        <div className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive-foreground">
          <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" />
          <span className="leading-relaxed">{error}</span>
        </div>
      )}

      {status === "done" && result ? (
        <div className="space-y-4 rounded-xl border border-primary/25 bg-primary/[0.06] px-4 py-4">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <CheckCircle2 className="size-4 text-primary" />
            {t.tool.done}
            {tool.hasQuality && originalSize > 0 && (
              <span className="text-muted-foreground">
                {" "}
                — {formatBytes(originalSize)} → {formatBytes(result.size)} (
                {Math.max(0, Math.round((1 - result.size / originalSize) * 100))}
                % {t.tool.less})
              </span>
            )}
          </div>

          {result.isImage && (
            <div
              className="overflow-hidden rounded-lg border border-white/10"
              style={{
                backgroundColor: "#0b1020",
                backgroundImage:
                  "linear-gradient(45deg, rgba(255,255,255,0.08) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,0.08) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.08) 75%), linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.08) 75%)",
                backgroundSize: "20px 20px",
                backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={result.url || "/placeholder.svg"}
                alt={t.tool.resultPreview}
                className="mx-auto max-h-80 w-auto"
              />
            </div>
          )}

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
              {t.tool.startOver}
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {status === "uploading" && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{t.tool.uploadingFiles}</span>
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
          {status === "working" && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  {tool.engine === "remove-bg"
                    ? t.tool.processingLong
                    : t.tool.processing}
                </span>
                <span>{workProgress}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-200"
                  style={{ width: `${workProgress}%` }}
                />
              </div>
            </div>
          )}
          <button
            type="button"
            onClick={run}
            disabled={
              files.length === 0 ||
              status === "working" ||
              status === "uploading"
            }
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {status === "uploading" ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                {t.tool.uploading} {progress}%
              </>
            ) : status === "working" ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                {tool.engine === "remove-bg"
                  ? t.tool.processingLong
                  : t.tool.processing}
              </>
            ) : (
              meta.actionLabel
            )}
          </button>
        </div>
      )}
    </div>
  )
}
