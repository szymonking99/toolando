"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { getNextStepToolIds } from "@/lib/tool-suggestions"
import { getSpecialMeta } from "@/lib/i18n/tool-meta"
import { getUtilityMeta } from "@/lib/i18n/utility-meta"
import { getTool } from "@/lib/tools"
import { getUtilityTool } from "@/lib/utility-tools"
import { getSpecialTool } from "@/lib/special-tools"
import { ShareButtons } from "@/components/share-buttons"

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

  return (
    <div className="mt-4 space-y-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
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
