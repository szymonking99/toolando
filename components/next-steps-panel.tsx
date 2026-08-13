"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { getNextStepToolIds } from "@/lib/tool-suggestions"
import { getSpecialMeta } from "@/lib/i18n/tool-meta"
import { getUtilityMeta } from "@/lib/i18n/utility-meta"
import { getTool } from "@/lib/tools"
import { getUtilityTool } from "@/lib/utility-tools"
import { getSpecialTool } from "@/lib/special-tools"
import { ShareButtons } from "@/components/share-buttons"

const AI_SUMMARIZE_TOOLS = new Set([
  "docx-pdf",
  "pdf-do-tekstu",
  "podzial-pdf",
  "laczenie-pdf",
  "kompresja-pdf",
  "numeracja-pdf",
  "pdf-jpg",
  "pdf-png",
  "pdf-docx",
])

function resolveTitle(locale: string, id: string): string {
  if (getUtilityTool(id)) return getUtilityMeta(locale, id as never).name
  if (getSpecialTool(id)) return getSpecialMeta(locale, id as never).name
  const tool = getTool(id)
  if (tool) return `${tool.from.toUpperCase()} → ${tool.to.toUpperCase()}`
  return id
}

export function NextStepsPanel({
  toolId,
  toolTitle,
}: {
  toolId: string
  toolTitle: string
}) {
  const { t, href, locale } = useI18n()
  const nextIds = getNextStepToolIds(toolId)
  const showAiCta = AI_SUMMARIZE_TOOLS.has(toolId)
  const aiTitle =
    (t.nextSteps as { aiSummarizeTitle?: string }).aiSummarizeTitle ??
    "Summarize document with AI"
  const aiBody =
    (t.nextSteps as { aiSummarizeBody?: string }).aiSummarizeBody ??
    "Generate a PDF or DOCX summary in seconds."

  return (
    <div className="mt-4 space-y-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
      {showAiCta && (
        <Link
          href={href("/tools/podsumowanie")}
          className="flex items-center gap-3 rounded-xl border border-primary/30 bg-primary/[0.08] p-4 transition-colors hover:bg-primary/[0.14]"
        >
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Sparkles className="size-5" aria-hidden="true" />
          </span>
          <span className="flex-1 text-left">
            <span className="block text-sm font-semibold text-foreground">
              {aiTitle}
            </span>
            <span className="mt-0.5 block text-xs text-muted-foreground">
              {aiBody}
            </span>
          </span>
          <ArrowRight className="size-4 shrink-0 text-primary" aria-hidden="true" />
        </Link>
      )}
      <div>
        <p className="text-sm font-semibold text-foreground">{t.nextSteps.title}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {nextIds.map((id) => (
            <li key={id}>
              <Link
                href={href(`/tools/${id}`)}
                className="inline-flex items-center gap-1 rounded-full border border-primary/25 bg-primary/[0.08] px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-primary/[0.14]"
              >
                {resolveTitle(locale, id)}
                <ArrowRight className="size-3" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ShareButtons
        title={toolTitle}
        path={`/tools/${toolId}`}
        className="border-t border-white/10 pt-4"
      />
    </div>
  )
}
