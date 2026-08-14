"use client"

import { BookOpen } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { getSocialProofLine } from "@/lib/i18n/publisher-notes"

export function SocialProofBar() {
  const { locale } = useI18n()

  return (
    <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-muted-foreground">
      <span className="inline-flex items-center gap-2">
        <BookOpen className="size-4 text-primary" aria-hidden="true" />
        {getSocialProofLine(locale)}
      </span>
    </div>
  )
}
