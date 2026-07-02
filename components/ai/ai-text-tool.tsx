"use client"

import { useRef, useState } from "react"
import {
  Loader2,
  Sparkles,
  Copy,
  Check,
  AlertCircle,
  Upload,
  X,
} from "lucide-react"
import type { AiToolConfig } from "@/lib/ai-tools"

type Mode = "copywriting" | "translate" | "summarize"

const TONES = [
  "profesjonalny",
  "przyjazny",
  "energiczny",
  "formalny",
  "zabawny",
  "perswazyjny",
]

const LANGUAGES = [
  "angielski",
  "niemiecki",
  "hiszpański",
  "francuski",
  "włoski",
  "ukraiński",
  "polski",
  "japoński",
]

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export function AiTextTool({ tool }: { tool: AiToolConfig }) {
  const mode: Mode =
    tool.engine === "text-translate"
      ? "translate"
      : tool.engine === "text-summarize"
        ? "summarize"
        : "copywriting"

  const [prompt, setPrompt] = useState("")
  const [tone, setTone] = useState(TONES[0])
  const [targetLang, setTargetLang] = useState(LANGUAGES[0])
  const [file, setFile] = useState<File | null>(null)
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const [output, setOutput] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const canRun =
    mode === "summarize" ? file !== null : prompt.trim().length > 0

  async function run() {
    if (!canRun || loading) return
    setLoading(true)
    setError(null)
    setOutput("")

    try {
      let res: Response
      if (mode === "summarize") {
        const body = new FormData()
        body.append("task", "summarize")
        body.append("file", file!)
        res = await fetch("/api/ai/text", { method: "POST", body })
      } else {
        res = await fetch("/api/ai/text", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            task: mode === "translate" ? "translate" : "copywriting",
            prompt,
            tone: mode === "copywriting" ? tone : undefined,
            targetLang: mode === "translate" ? targetLang : undefined,
          }),
        })
      }

      if (!res.ok || !res.body) {
        let message = "Nie udało się wygenerować odpowiedzi."
        try {
          const data = await res.json()
          if (data?.error) message = data.error
        } catch {
          /* keep default */
        }
        setError(message)
        setLoading(false)
        return
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let acc = ""
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        acc += decoder.decode(value, { stream: true })
        setOutput(acc)
      }
      if (!acc.trim()) {
        setError(
          "Usługa AI nie zwróciła treści. Sprawdź, czy AI Gateway jest aktywny (wymaga karty płatniczej).",
        )
      }
    } catch {
      setError("Wystąpił błąd połączenia. Spróbuj ponownie.")
    } finally {
      setLoading(false)
    }
  }

  async function copy() {
    await navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="space-y-5">
      {/* INPUT */}
      {mode === "summarize" ? (
        <div className="space-y-3">
          <label
            onDragOver={(e) => {
              e.preventDefault()
              setDragging(true)
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
              e.preventDefault()
              setDragging(false)
              const f = e.dataTransfer.files?.[0]
              if (f) setFile(f)
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
              accept=".pdf,.docx,.txt,.md,.csv,.json,.html,.rtf"
              className="sr-only"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            />
            <span className="flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Upload className="size-5" />
            </span>
            <span className="text-sm font-medium text-foreground">
              Przeciągnij dokument tutaj lub kliknij, aby wybrać
            </span>
            <span className="text-xs text-muted-foreground">
              PDF, DOCX, TXT, MD, CSV, JSON, HTML
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
                onClick={() => {
                  setFile(null)
                  if (inputRef.current) inputRef.current.value = ""
                }}
                className="shrink-0 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
                aria-label="Usuń plik"
              >
                <X className="size-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={mode === "translate" ? 5 : 4}
            placeholder={
              mode === "translate"
                ? "Wklej tekst do przetłumaczenia…"
                : "Opisz, co ma napisać AI, np. „opis produktu dla ekologicznej butelki na wodę”…"
            }
            className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50"
          />

          <div className="flex flex-wrap items-center gap-3">
            {mode === "copywriting" && (
              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                Ton:
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-foreground outline-none focus:border-primary/50"
                >
                  {TONES.map((t) => (
                    <option key={t} value={t} className="bg-background">
                      {t}
                    </option>
                  ))}
                </select>
              </label>
            )}
            {mode === "translate" && (
              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                Język docelowy:
                <select
                  value={targetLang}
                  onChange={(e) => setTargetLang(e.target.value)}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-foreground outline-none focus:border-primary/50"
                >
                  {LANGUAGES.map((l) => (
                    <option key={l} value={l} className="bg-background">
                      {l}
                    </option>
                  ))}
                </select>
              </label>
            )}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={run}
        disabled={!canRun || loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {loading ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Generowanie…
          </>
        ) : (
          <>
            <Sparkles className="size-4" />
            {mode === "translate"
              ? "Przetłumacz"
              : mode === "summarize"
                ? "Podsumuj dokument"
                : "Wygeneruj tekst"}
          </>
        )}
      </button>

      {error && (
        <div className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive-foreground">
          <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" />
          <span className="leading-relaxed">{error}</span>
        </div>
      )}

      {output && (
        <div className="rounded-xl border border-primary/25 bg-primary/[0.06] p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-semibold text-foreground">Wynik</span>
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-white/5"
            >
              {copied ? (
                <>
                  <Check className="size-3.5 text-primary" /> Skopiowano
                </>
              ) : (
                <>
                  <Copy className="size-3.5" /> Kopiuj
                </>
              )}
            </button>
          </div>
          <div className="whitespace-pre-wrap text-sm leading-relaxed text-foreground">
            {output}
          </div>
        </div>
      )}
    </div>
  )
}
