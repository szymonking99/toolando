"use client"

import { useState } from "react"
import { Loader2, Sparkles, Download, AlertCircle } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"

type Ratio = "square" | "portrait" | "landscape"

const RATIO_IDS: Ratio[] = ["square", "landscape", "portrait"]

export function AiImageTool() {
  const { t } = useI18n()
  const ratioLabels: Record<Ratio, string> = {
    square: t.aiTool.ratioSquare,
    landscape: t.aiTool.ratioLandscape,
    portrait: t.aiTool.ratioPortrait,
  }
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
        setError(data?.error ?? t.aiTool.imageFailed)
        return
      }
      setImage(data.image)
    } catch {
      setError(t.aiTool.connectionError)
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
        placeholder={t.aiTool.imagePromptPlaceholder}
        className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50"
      />

      <div className="flex flex-wrap gap-2">
        {RATIO_IDS.map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => setRatio(id)}
            className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
              ratio === id
                ? "border-primary/60 bg-primary/15 text-foreground"
                : "border-white/10 bg-white/[0.03] text-muted-foreground hover:border-primary/40"
            }`}
          >
            {ratioLabels[id]}
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
            {t.aiTool.generatingImage}
          </>
        ) : (
          <>
            <Sparkles className="size-4" />
            {t.aiTool.generateImage}
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
              alt={t.aiTool.generatedImageAlt}
              className="mx-auto max-h-[32rem] w-auto"
            />
          </div>
          <a
            href={image}
            download="obraz-ai.png"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
          >
            <Download className="size-4" />
            {t.aiTool.downloadImage}
          </a>
        </div>
      )}
    </div>
  )
}
