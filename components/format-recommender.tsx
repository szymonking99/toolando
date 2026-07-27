"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, HelpCircle } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"

type Step = "category" | "goal" | "result"

const RECOMMENDATIONS: Record<
  string,
  Record<string, { format: string; reason: string; tool?: string }>
> = {
  image: {
    web: { format: "webp", reason: "webp-web", tool: "jpg-to-webp" },
    email: { format: "jpg", reason: "jpg-email", tool: "png-to-jpg" },
    print: { format: "png", reason: "png-print" },
    iphone: { format: "jpg", reason: "heic-jpg", tool: "heic-to-jpg" },
  },
  audio: {
    listen: { format: "mp3", reason: "mp3-listen", tool: "wav-to-mp3" },
    edit: { format: "wav", reason: "wav-edit", tool: "mp3-to-wav" },
    archive: { format: "flac", reason: "flac-archive", tool: "wav-to-flac" },
  },
  video: {
    social: { format: "mp4", reason: "mp4-social", tool: "mov-to-mp4" },
    web: { format: "webm", reason: "webm-web", tool: "mp4-to-webm" },
    audio: { format: "mp3", reason: "mp3-audio", tool: "mp4-to-mp3" },
  },
  document: {
    share: { format: "pdf", reason: "pdf-share", tool: "docx-to-pdf" },
    edit: { format: "docx", reason: "docx-edit", tool: "pdf-to-docx" },
  },
}

export function FormatRecommender() {
  const { t, href } = useI18n()
  const r = t.recommender
  const [step, setStep] = useState<Step>("category")
  const [category, setCategory] = useState("")
  const [goal, setGoal] = useState("")
  const [result, setResult] = useState<{
    format: string
    reason: string
    tool?: string
  } | null>(null)

  function reset() {
    setStep("category")
    setCategory("")
    setGoal("")
    setResult(null)
  }

  function pickCategory(id: string) {
    setCategory(id)
    setStep("goal")
  }

  function pickGoal(id: string) {
    setGoal(id)
    const rec = RECOMMENDATIONS[category]?.[id]
    if (rec) {
      setResult(rec)
      setStep("result")
    }
  }

  return (
    <section className="border-t border-white/10 px-4 py-24">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center gap-3">
          <HelpCircle className="size-8 text-primary" aria-hidden="true" />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {r.title}
          </h2>
        </div>
        <p className="mt-3 text-muted-foreground">{r.subtitle}</p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          {step === "category" && (
            <>
              <p className="font-medium text-foreground">{r.step1}</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {(["image", "audio", "video", "document"] as const).map((id) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => pickCategory(id)}
                    className="rounded-lg border border-white/10 px-4 py-3 text-left text-sm font-medium transition-colors hover:border-primary/40 hover:bg-white/[0.06]"
                  >
                    {r.categories[id]}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === "goal" && category && (
            <>
              <p className="font-medium text-foreground">{r.step2}</p>
              <div className="mt-4 grid gap-2">
                {Object.keys(RECOMMENDATIONS[category] ?? {}).map((id) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => pickGoal(id)}
                    className="rounded-lg border border-white/10 px-4 py-3 text-left text-sm font-medium transition-colors hover:border-primary/40 hover:bg-white/[0.06]"
                  >
                    {r.goals[`${category}_${id}` as keyof typeof r.goals]}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={reset}
                className="mt-4 text-sm text-primary hover:underline"
              >
                ← {r.back}
              </button>
            </>
          )}

          {step === "result" && result && (
            <>
              <p className="font-medium text-foreground">{r.resultTitle}</p>
              <p className="mt-3 text-lg font-semibold text-primary">
                .{result.format.toUpperCase()}
              </p>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {r.reasons[result.reason as keyof typeof r.reasons]}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={href(`/formaty/${result.format}`)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40"
                >
                  {r.readFormat} <ArrowRight className="size-4" />
                </Link>
                {result.tool && (
                  <Link
                    href={href(`/tools/${result.tool}`)}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary/15 px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary/30 transition-colors hover:bg-primary/25"
                  >
                    {r.openConverter} <ArrowRight className="size-4" />
                  </Link>
                )}
              </div>
              <button
                type="button"
                onClick={reset}
                className="mt-4 text-sm text-primary hover:underline"
              >
                {r.tryAgain}
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
