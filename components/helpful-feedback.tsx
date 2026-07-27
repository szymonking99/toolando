"use client"

import { useState } from "react"
import { ThumbsDown, ThumbsUp } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"

const STORAGE_PREFIX = "toolando-helpful-"

export function HelpfulFeedback({ pageId }: { pageId: string }) {
  const { t } = useI18n()
  const [vote, setVote] = useState<"yes" | "no" | null>(() => {
    if (typeof window === "undefined") return null
    const stored = localStorage.getItem(`${STORAGE_PREFIX}${pageId}`)
    return stored === "yes" || stored === "no" ? stored : null
  })

  function handleVote(value: "yes" | "no") {
    setVote(value)
    localStorage.setItem(`${STORAGE_PREFIX}${pageId}`, value)
  }

  if (vote) {
    return (
      <p className="text-sm text-muted-foreground">{t.feedback.thanks}</p>
    )
  }

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
      <p className="text-sm font-medium text-foreground">{t.feedback.question}</p>
      <div className="mt-3 flex gap-3">
        <button
          type="button"
          onClick={() => handleVote("yes")}
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-white/[0.06]"
        >
          <ThumbsUp className="size-4" aria-hidden="true" />
          {t.feedback.yes}
        </button>
        <button
          type="button"
          onClick={() => handleVote("no")}
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-white/[0.06]"
        >
          <ThumbsDown className="size-4" aria-hidden="true" />
          {t.feedback.no}
        </button>
      </div>
    </div>
  )
}
