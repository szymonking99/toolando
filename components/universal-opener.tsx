"use client"

import { useEffect, useMemo, useRef, useState } from "react"
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
} from "lucide-react"
import { getConversionsFrom, type ToolConfig } from "@/lib/tools"
import { uploadAndProcess } from "@/lib/client-upload"

type Kind = "image" | "video" | "audio" | "pdf" | "text" | "binary"

const IMAGE_EXT = new Set([
  "png", "jpg", "jpeg", "gif", "webp", "avif", "bmp", "ico", "svg", "apng",
])
const VIDEO_EXT = new Set(["mp4", "webm", "mov", "mkv", "avi", "m4v", "ogv"])
const AUDIO_EXT = new Set(["mp3", "wav", "ogg", "oga", "flac", "m4a", "aac", "opus", "weba"])
const TEXT_EXT = new Set([
  "txt", "md", "markdown", "json", "csv", "tsv", "xml", "yaml", "yml", "html",
  "htm", "css", "js", "jsx", "ts", "tsx", "mjs", "cjs", "log", "ini", "conf",
  "cfg", "toml", "sql", "py", "rb", "go", "rs", "java", "c", "h", "cpp", "cc",
  "cs", "php", "sh", "bash", "zsh", "env", "gitignore", "dockerfile", "svg",
  "vue", "svelte", "kt", "swift", "r", "lua", "pl", "properties", "gradle",
])

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function extOf(name: string) {
  const dot = name.lastIndexOf(".")
  return dot >= 0 ? name.slice(dot + 1).toLowerCase() : ""
}

function detectKind(file: File): Kind {
  const ext = extOf(file.name)
  const mime = file.type
  if (mime.startsWith("image/") || IMAGE_EXT.has(ext)) return "image"
  if (mime.startsWith("video/") || VIDEO_EXT.has(ext)) return "video"
  if (mime.startsWith("audio/") || AUDIO_EXT.has(ext)) return "audio"
  if (mime === "application/pdf" || ext === "pdf") return "pdf"
  if (mime.startsWith("text/") || TEXT_EXT.has(ext) || mime.includes("json") || mime.includes("xml"))
    return "text"
  return "binary"
}

const KIND_META: Record<Kind, { label: string; icon: typeof FileText }> = {
  image: { label: "Obraz", icon: ImageIcon },
  video: { label: "Wideo", icon: Film },
  audio: { label: "Audio", icon: Music },
  pdf: { label: "Dokument PDF", icon: FileType2 },
  text: { label: "Tekst / kod", icon: FileText },
  binary: { label: "Plik binarny", icon: Binary },
}

type Loaded = {
  file: File
  kind: Kind
  url: string | null
  text: string | null
  textTruncated: boolean
  hex: string | null
}

export function UniversalOpener() {
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

    const kind = detectKind(file)
    let url: string | null = null
    let text: string | null = null
    let textTruncated = false
    let hex: string | null = null

    try {
      if (kind === "image" || kind === "video" || kind === "audio" || kind === "pdf") {
        url = URL.createObjectURL(file)
      } else if (kind === "text") {
        const MAX = 200_000
        const slice = file.slice(0, MAX)
        text = await slice.text()
        textTruncated = file.size > MAX
      } else {
        // Binary: build a hex + ASCII dump of the first bytes.
        const MAX = 4096
        const buf = new Uint8Array(await file.slice(0, MAX).arrayBuffer())
        hex = toHexDump(buf)
      }
    } catch {
      // fall back to binary view on any read error
      hex = "Nie udało się odczytać zawartości pliku."
    }

    setLoaded({ file, kind, url, text, textTruncated, hex })
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
            Przeciągnij dowolny plik tutaj lub kliknij, aby wybrać
          </span>
          <span className="max-w-sm text-xs leading-relaxed text-muted-foreground">
            Obrazy, wideo, audio, PDF, dokumenty, kod, dane — każdy format.
            Pliki są otwierane lokalnie w przeglądarce i nie są nigdzie wysyłane.
          </span>
        </label>
      )}

      {loaded && (
        <>
          <FileHeader loaded={loaded} onReset={reset} />
          <ConversionPanel file={loaded.file} />
          <Preview loaded={loaded} />
        </>
      )}
    </div>
  )
}

function extName(name: string) {
  const dot = name.lastIndexOf(".")
  return dot >= 0 ? name.slice(dot + 1).toLowerCase() : ""
}

function ConversionPanel({ file }: { file: File }) {
  const conversions = useMemo(
    () => getConversionsFrom(extName(file.name)),
    [file],
  )
  const [busyId, setBusyId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [doneId, setDoneId] = useState<string | null>(null)

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
        throw new Error(data?.error ?? "Konwersja nie powiodła się.")
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
      setError(err instanceof Error ? err.message : "Konwersja nie powiodła się.")
    } finally {
      setBusyId(null)
    }
  }

  if (conversions.length === 0) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-muted-foreground">
        Dla tego formatu nie mamy jeszcze konwertera — możesz jednak podejrzeć i
        pobrać plik poniżej.
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <div className="mb-3 flex items-center gap-2">
        <Wand2 className="size-4 text-primary" />
        <h3 className="text-sm font-semibold text-foreground">
          Konwertuj na inny format
        </h3>
        <span className="text-xs text-muted-foreground">
          ({conversions.length}{" "}
          {conversions.length === 1 ? "opcja" : "opcji"})
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

      {error && (
        <p className="mt-3 flex items-start gap-2 text-sm text-destructive">
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          {error}
        </p>
      )}
      {doneId && !error && (
        <p className="mt-3 flex items-center gap-2 text-sm text-primary">
          <CheckCircle2 className="size-4" />
          Gotowe! Plik został pobrany.
        </p>
      )}
    </div>
  )
}

function FileHeader({ loaded, onReset }: { loaded: Loaded; onReset: () => void }) {
  const meta = KIND_META[loaded.kind]
  const Icon = meta.icon
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
            {meta.label} • {formatBytes(loaded.file.size)}
            {loaded.file.type ? ` • ${loaded.file.type}` : ""}
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
            Pobierz
          </a>
        )}
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
        >
          <X className="size-4" />
          Zamknij
        </button>
      </div>
    </div>
  )
}

function Preview({ loaded }: { loaded: Loaded }) {
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

  if (kind === "text" && text !== null) {
    return (
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b1020]">
        <pre className="max-h-[70vh] overflow-auto p-4 text-xs leading-relaxed text-foreground/90">
          <code>{text || "(pusty plik)"}</code>
        </pre>
        {textTruncated && (
          <p className="border-t border-white/10 px-4 py-2 text-xs text-muted-foreground">
            Podgląd skrócony do pierwszych 200 000 znaków. Pobierz plik, aby
            zobaczyć całość.
          </p>
        )}
      </div>
    )
  }

  // Binary fallback
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b1020]">
      <div className="border-b border-white/10 px-4 py-2 text-xs font-medium text-muted-foreground">
        Podgląd binarny (pierwsze bajty w formacie szesnastkowym)
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
    lines.push("… (podgląd ograniczony do 4 KB)")
  }
  return lines.join("\n")
}
