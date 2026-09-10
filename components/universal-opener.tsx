"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import {
  Upload,
  Download,
  X,
  FileText,
  ImageIcon,
  Film,
  Music,
  FileType2,
  Binary,
  Loader2,
  ArrowRight,
  Wand2,
  CheckCircle2,
  AlertCircle,
  Shield,
  Eye,
  Info,
  Lightbulb,
} from "lucide-react"
import { getConversionsFrom, type ToolConfig } from "@/lib/tools"
import { uploadAndProcess } from "@/lib/client-upload"
import { useI18n } from "@/components/i18n-provider"
import { useFakeProgress } from "@/hooks/use-fake-progress"
import {
  detectFileKind,
  extOf,
  formatBytes,
  getFormatTipKey,
  getRecommendedActions,
  type FileAction,
  type FileKind,
} from "@/lib/file-assistant"
import {
  extractDocumentPreview,
} from "@/lib/client-doc-preview"
import { getSpecialMeta } from "@/lib/i18n/tool-meta"
import { getUtilityMeta } from "@/lib/i18n/utility-meta"
import type { UtilityToolId } from "@/lib/utility-tools"
import type { SpecialToolId } from "@/lib/special-tools"

type Kind = FileKind

const KIND_ICON: Record<string, typeof FileText> = {
  image: ImageIcon,
  video: Film,
  audio: Music,
  pdf: FileType2,
  text: FileText,
  document: FileText,
  data: FileText,
  archive: Binary,
  binary: Binary,
}

type Loaded = {
  file: File
  kind: Kind
  url: string | null
  text: string | null
  textTruncated: boolean
  hex: string | null
  width?: number
  height?: number
}

export function UniversalOpener() {
  const { t } = useI18n()
  const inputRef = useRef<HTMLInputElement>(null)
  const [loaded, setLoaded] = useState<Loaded | null>(null)
  const [loading, setLoading] = useState(false)
  const [dragging, setDragging] = useState(false)

  useEffect(() => {
    return () => {
      if (loaded?.url) URL.revokeObjectURL(loaded.url)
    }
  }, [loaded])

  function reset() {
    if (loaded?.url) URL.revokeObjectURL(loaded.url)
    setLoaded(null)
    if (inputRef.current) inputRef.current.value = ""
  }

  async function openFile(file: File | null) {
    if (!file) return
    if (loaded?.url) URL.revokeObjectURL(loaded.url)
    setLoading(true)

    const kind = detectFileKind(file)
    let url: string | null = null
    let text: string | null = null
    let textTruncated = false
    let hex: string | null = null
    let width: number | undefined
    let height: number | undefined

    try {
      if (kind === "image" || kind === "video" || kind === "audio" || kind === "pdf") {
        url = URL.createObjectURL(file)
        if (kind === "image" && url) {
          const dims = await readImageSize(url)
          width = dims?.width
          height = dims?.height
        }
      } else if (kind === "text" || kind === "data") {
        const MAX = 200_000
        const slice = file.slice(0, MAX)
        text = await slice.text()
        textTruncated = file.size > MAX
      } else if (kind === "document") {
        const preview = await extractDocumentPreview(file)
        if (preview) {
          text = preview.text
          textTruncated = preview.truncated
        } else {
          // Legacy .doc / unsupported — avoid showing ZIP/OLE as “binary code”.
          text = null
          hex = null
        }
      } else {
        const MAX = 4096
        const buf = new Uint8Array(await file.slice(0, MAX).arrayBuffer())
        hex = toHexDump(buf)
      }
    } catch {
      hex = t.opener.readError
    }

    setLoaded({ file, kind, url, text, textTruncated, hex, width, height })
    setLoading(false)
  }

  return (
    <div className="space-y-5">
      {!loaded && (
        <label
          onDragOver={(e) => {
            e.preventDefault()
            setDragging(true)
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault()
            setDragging(false)
            openFile(e.dataTransfer.files?.[0] ?? null)
          }}
          className={`flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-dashed p-12 text-center transition-colors ${
            dragging
              ? "border-primary bg-primary/[0.08]"
              : "border-white/15 bg-white/[0.02] hover:border-primary/40 hover:bg-white/[0.04]"
          }`}
        >
          <input
            ref={inputRef}
            type="file"
            className="sr-only"
            onChange={(e) => openFile(e.target.files?.[0] ?? null)}
          />
          <span className="flex size-14 items-center justify-center rounded-full bg-primary/15 text-primary">
            {loading ? (
              <Loader2 className="size-6 animate-spin" />
            ) : (
              <Upload className="size-6" />
            )}
          </span>
          <span className="text-base font-medium text-foreground">
            {t.opener.dropAny}
          </span>
          <span className="max-w-sm text-xs leading-relaxed text-muted-foreground">
            {t.opener.dropHint}
          </span>
        </label>
      )}

      {loaded && (
        <>
          <FileHeader loaded={loaded} onReset={reset} />
          <FileInspector loaded={loaded} />
          <ActionsPanel loaded={loaded} />
          <ConversionPanel file={loaded.file} />
          <Preview loaded={loaded} />
        </>
      )}
    </div>
  )
}

function readImageSize(url: string): Promise<{ width: number; height: number } | null> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight })
    img.onerror = () => resolve(null)
    img.src = url
  })
}

function FileInspector({ loaded }: { loaded: Loaded }) {
  const { t } = useI18n()
  const ext = extOf(loaded.file.name)
  const tipKey = getFormatTipKey(ext)
  const tip =
    tipKey && (t.assistant?.tips as Record<string, string> | undefined)?.[tipKey]

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <div className="mb-3 flex items-center gap-2">
        <Info className="size-4 text-primary" />
        <h3 className="text-sm font-semibold text-foreground">
          {t.assistant?.inspectorTitle ?? "File information"}
        </h3>
      </div>
      <dl className="grid gap-2 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-xs text-muted-foreground">{t.assistant?.name ?? "Name"}</dt>
          <dd className="truncate font-medium">{loaded.file.name}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted-foreground">{t.assistant?.size ?? "Size"}</dt>
          <dd className="font-medium">{formatBytes(loaded.file.size)}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted-foreground">{t.assistant?.type ?? "Type"}</dt>
          <dd className="font-medium uppercase">{ext || "—"}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted-foreground">MIME</dt>
          <dd className="font-medium">{loaded.file.type || "—"}</dd>
        </div>
        {loaded.width && loaded.height ? (
          <div className="sm:col-span-2">
            <dt className="text-xs text-muted-foreground">
              {t.assistant?.resolution ?? "Resolution"}
            </dt>
            <dd className="font-medium">
              {loaded.width} × {loaded.height} px
            </dd>
          </div>
        ) : null}
      </dl>
      {tip && (
        <p className="mt-3 flex items-start gap-2 rounded-lg border border-primary/20 bg-primary/[0.06] px-3 py-2 text-xs leading-relaxed text-foreground/90">
          <Lightbulb className="mt-0.5 size-3.5 shrink-0 text-primary" />
          {tip}
        </p>
      )}
    </div>
  )
}

function ActionsPanel({ loaded }: { loaded: Loaded }) {
  const { t, href, locale } = useI18n()
  const actions = useMemo(
    () => getRecommendedActions(loaded.file.name, loaded.kind),
    [loaded.file.name, loaded.kind],
  )

  const labeled = actions.map((action) => ({
    ...action,
    display: actionLabel(action, locale, t),
  }))

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <div className="mb-3 flex items-center gap-2">
        <Eye className="size-4 text-primary" />
        <h3 className="text-sm font-semibold text-foreground">
          {t.assistant?.actionsTitle ?? "What you can do"}
        </h3>
      </div>
      <p className="mb-3 text-xs text-muted-foreground">
        {t.assistant?.actionsSubtitle ??
          "Toolando recognised the format and suggests useful operations — you don’t have to convert if you only need a preview."}
      </p>
      {(() => {
        const preview = labeled.find((a) => a.kind === "preview")
        const primary = labeled.find((a) => a.primary)
        const rest = labeled.filter(
          (a) => a.kind !== "preview" && !a.primary,
        )
        return (
          <div className="space-y-3">
            {primary && (
              <Link
                href={href(primary.href)}
                className="flex w-full items-center justify-between gap-3 rounded-xl border border-primary/40 bg-primary/15 px-4 py-3 text-left transition-colors hover:bg-primary/20"
              >
                <span>
                  <span className="block text-[11px] font-medium uppercase tracking-wide text-primary/90">
                    {t.assistant?.primaryCta ?? "Recommended next step"}
                  </span>
                  <span className="mt-0.5 block text-sm font-semibold text-foreground">
                    {primary.display}
                  </span>
                </span>
                <ArrowRight className="size-4 shrink-0 text-primary" />
              </Link>
            )}
            <div className="flex flex-wrap gap-2">
              {preview && (
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-muted-foreground">
                  <Eye className="size-3.5" />
                  {preview.display}
                </span>
              )}
              {rest.map((action) => {
                const Icon =
                  action.kind === "special" && action.id === "usun-exif"
                    ? Shield
                    : ArrowRight
                return (
                  <Link
                    key={action.id}
                    href={href(action.href)}
                    className="group inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
                  >
                    <Icon className="size-3.5 text-primary" />
                    {action.display}
                  </Link>
                )
              })}
            </div>
          </div>
        )
      })()}
    </div>
  )
}

function actionLabel(
  action: FileAction,
  locale: string,
  t: ReturnType<typeof useI18n>["t"],
): string {
  if (action.kind === "preview") {
    return t.assistant?.preview ?? "Preview here"
  }
  if (action.kind === "convert" && action.to) {
    return `${t.assistant?.convertTo ?? "Convert to"} ${action.to}`
  }
  if (action.kind === "special") {
    const meta = getSpecialMeta(locale as never, action.id as SpecialToolId)
    return meta?.name ?? action.label
  }
  if (action.kind === "utility") {
    try {
      const meta = getUtilityMeta(locale as never, action.id as UtilityToolId)
      return meta?.name ?? action.label
    } catch {
      return action.label
    }
  }
  return action.label
}

function ConversionPanel({ file }: { file: File }) {
  const { t } = useI18n()
  const conversions = useMemo(
    () => getConversionsFrom(extOf(file.name)),
    [file],
  )
  const [busyId, setBusyId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [doneId, setDoneId] = useState<string | null>(null)
  const convProgress = useFakeProgress(busyId !== null)

  async function convert(tool: ToolConfig) {
    setBusyId(tool.id)
    setError(null)
    setDoneId(null)
    try {
      const res = await uploadAndProcess({
        file,
        endpoint: "/api/convert",
        id: tool.id,
      })
      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.error ?? t.tool.convertFailed)
      }
      const blob = await res.blob()
      const disposition = res.headers.get("Content-Disposition") ?? ""
      const match = disposition.match(/filename\*?=(?:UTF-8'')?"?([^"]+)"?/i)
      const filename = match
        ? decodeURIComponent(match[1])
        : `${file.name.replace(/\.[^.]+$/, "")}.${tool.to}`

      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = filename
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
      setDoneId(tool.id)
    } catch (err) {
      setError(err instanceof Error ? err.message : t.tool.convertFailed)
    } finally {
      setBusyId(null)
    }
  }

  if (conversions.length === 0) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-muted-foreground">
        {t.opener.noConverter}
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <div className="mb-3 flex items-center gap-2">
        <Wand2 className="size-4 text-primary" />
        <h3 className="text-sm font-semibold text-foreground">
          {t.opener.convertTo}
        </h3>
        <span className="text-xs text-muted-foreground">
          ({conversions.length}{" "}
          {conversions.length === 1 ? t.opener.optionOne : t.opener.optionMany})
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {conversions.map((tool) => {
          const busy = busyId === tool.id
          const done = doneId === tool.id
          return (
            <button
              key={tool.id}
              type="button"
              onClick={() => convert(tool)}
              disabled={busyId !== null}
              className="group inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {busy ? (
                <Loader2 className="size-3.5 animate-spin text-primary" />
              ) : done ? (
                <CheckCircle2 className="size-3.5 text-primary" />
              ) : (
                <ArrowRight className="size-3.5 text-primary" />
              )}
              {tool.to.toUpperCase()}
            </button>
          )
        })}
      </div>

      {busyId && (
        <div className="mt-3 space-y-1.5">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{t.tool.converting}</span>
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
      {error && (
        <p className="mt-3 flex items-start gap-2 text-sm text-destructive">
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          {error}
        </p>
      )}
      {doneId && !error && (
        <p className="mt-3 flex items-center gap-2 text-sm text-primary">
          <CheckCircle2 className="size-4" />
          {t.opener.downloadedOk}
        </p>
      )}
    </div>
  )
}

function FileHeader({ loaded, onReset }: { loaded: Loaded; onReset: () => void }) {
  const { t } = useI18n()
  const Icon = KIND_ICON[loaded.kind] ?? Binary
  const kindLabel =
    (t.opener.kinds as Record<string, string>)[loaded.kind] ??
    loaded.kind

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
      <div className="flex min-w-0 items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
          <Icon className="size-5" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-foreground">
            {loaded.file.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {kindLabel} • {formatBytes(loaded.file.size)}
            {loaded.file.type ? ` • ${loaded.file.type}` : ""}
            {loaded.width && loaded.height
              ? ` • ${loaded.width}×${loaded.height}`
              : ""}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {loaded.url && (
          <a
            href={loaded.url}
            download={loaded.file.name}
            className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
          >
            <Download className="size-4" />
            {t.opener.download}
          </a>
        )}
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
        >
          <X className="size-4" />
          {t.opener.close}
        </button>
      </div>
    </div>
  )
}

function Preview({ loaded }: { loaded: Loaded }) {
  const { t } = useI18n()
  const { kind, url, text, textTruncated, hex, file } = loaded

  if (kind === "image" && url) {
    return (
      <div
        className="flex items-center justify-center overflow-hidden rounded-xl border border-white/10 p-4"
        style={{
          backgroundColor: "#0b1020",
          backgroundImage:
            "linear-gradient(45deg, rgba(255,255,255,0.06) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,0.06) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.06) 75%), linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.06) 75%)",
          backgroundSize: "22px 22px",
          backgroundPosition: "0 0, 0 11px, 11px -11px, -11px 0px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={url || "/placeholder.svg"}
          alt={file.name}
          className="max-h-[70vh] w-auto max-w-full rounded"
        />
      </div>
    )
  }

  if (kind === "video" && url) {
    return (
      <video
        src={url}
        controls
        className="max-h-[70vh] w-full rounded-xl border border-white/10 bg-black"
      />
    )
  }

  if (kind === "audio" && url) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
        <audio src={url} controls className="w-full" />
      </div>
    )
  }

  if (kind === "pdf" && url) {
    return (
      <iframe
        src={url}
        title={file.name}
        className="h-[75vh] w-full rounded-xl border border-white/10 bg-white"
      />
    )
  }

  if ((kind === "text" || kind === "data" || kind === "document") && text !== null) {
    return (
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b1020]">
        {kind === "document" && (
          <div className="border-b border-white/10 px-4 py-2 text-xs font-medium text-muted-foreground">
            {t.opener?.documentPreview ?? "Document text preview"}
          </div>
        )}
        <pre className="max-h-[70vh] overflow-auto whitespace-pre-wrap p-4 text-xs leading-relaxed text-foreground/90">
          <code>{text || t.opener.emptyFile}</code>
        </pre>
        {textTruncated && (
          <p className="border-t border-white/10 px-4 py-2 text-xs text-muted-foreground">
            {t.opener.textTruncated}
          </p>
        )}
      </div>
    )
  }

  if (kind === "document") {
    return (
      <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-6 text-sm text-muted-foreground">
        <p className="font-medium text-foreground">
          {t.opener?.documentNoPreviewTitle ?? "No text preview for this document"}
        </p>
        <p className="mt-2 text-xs leading-relaxed">
          {t.opener?.documentNoPreviewBody ??
            "This Office format can’t be previewed as text here. Use the actions below to convert it (e.g. DOCX → PDF) or download the original."}
        </p>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b1020]">
      <div className="border-b border-white/10 px-4 py-2 text-xs font-medium text-muted-foreground">
        {t.opener.binaryPreview}
      </div>
      <pre className="max-h-[70vh] overflow-auto p-4 font-mono text-xs leading-relaxed text-foreground/80">
        <code>{hex}</code>
      </pre>
    </div>
  )
}

function toHexDump(bytes: Uint8Array): string {
  const lines: string[] = []
  for (let i = 0; i < bytes.length; i += 16) {
    const chunk = bytes.subarray(i, i + 16)
    const offset = i.toString(16).padStart(8, "0")
    const hex = Array.from(chunk)
      .map((b) => b.toString(16).padStart(2, "0"))
      .join(" ")
      .padEnd(47, " ")
    const ascii = Array.from(chunk)
      .map((b) => (b >= 32 && b <= 126 ? String.fromCharCode(b) : "."))
      .join("")
    lines.push(`${offset}  ${hex}  ${ascii}`)
  }
  if (bytes.length >= 4096) {
    lines.push("… (4 KB)")
  }
  return lines.join("\n")
}
