"use client"

import { useState } from "react"
import { Loader2, Sparkles, Download, AlertCircle } from "lucide-react"

type Ratio = "square" | "portrait" | "landscape"

const RATIOS: { id: Ratio; label: string }[] = [
  { id: "square", label: "Kwadrat 1:1" },
  { id: "landscape", label: "Poziomy 3:2" },
  { id: "portrait", label: "Pionowy 2:3" },
]

export function AiImageTool() {
  const [prompt, setPrompt] = useState("")
  const [ratio, setRatio] = useState<Ratio>("square")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [image, setImage] = useState<string | null>(null)

  async function run() {
    if (!prompt.trim() || loading) return
    setLoading(true)
    setError(null)
    setImage(null)

    try {
      const res = await fetch("/api/ai/image", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ prompt, aspectRatio: ratio }),
      })
      const data = await res.json()
      if (!res.ok || !data.image) {
        setError(data?.error ?? "Nie udało się wygenerować obrazu.")
        return
      }
      setImage(data.image)
    } catch {
      setError("Wystąpił błąd połączenia. Spróbuj ponownie.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-5">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={4}
        placeholder="Opisz obraz, np. „futurystyczne miasto o zachodzie słońca, styl akwareli”…"
        className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50"
      />

      <div className="flex flex-wrap gap-2">
        {RATIOS.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={() => setRatio(r.id)}
            className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
              ratio === r.id
                ? "border-primary/60 bg-primary/15 text-foreground"
                : "border-white/10 bg-white/[0.03] text-muted-foreground hover:border-primary/40"
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={run}
        disabled={!prompt.trim() || loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {loading ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Generowanie obrazu (może potrwać kilkanaście sekund)…
          </>
        ) : (
          <>
            <Sparkles className="size-4" />
            Wygeneruj obraz
          </>
        )}
      </button>

      {error && (
        <div className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive-foreground">
          <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" />
          <span className="leading-relaxed">{error}</span>
        </div>
      )}

      {loading && !image && (
        <div className="flex aspect-square w-full max-w-md items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
          <Loader2 className="size-8 animate-spin text-primary" />
        </div>
      )}

      {image && (
        <div className="space-y-4">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image || "/placeholder.svg"}
              alt="Wygenerowany obraz"
              className="mx-auto max-h-[32rem] w-auto"
            />
          </div>
          <a
            href={image}
            download="obraz-ai.png"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
          >
            <Download className="size-4" />
            Pobierz obraz
          </a>
        </div>
      )}
    </div>
  )
}
