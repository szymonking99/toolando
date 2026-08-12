"use client"

import { useEffect, useState } from "react"
import { Activity } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { getSocialProofCount, subscribePrefs } from "@/lib/client-preferences"
import { tools } from "@/lib/tools"
import { utilityTools } from "@/lib/utility-tools"
import { specialTools } from "@/lib/special-tools"
import { aiTools } from "@/lib/ai-tools"

const TOOL_COUNT =
  tools.filter((t) => t.supported).length +
  utilityTools.length +
  specialTools.length +
  aiTools.length

export function SocialProofBar() {
  const { t } = useI18n()
  const [uses, setUses] = useState(0)

  useEffect(() => {
    function refresh() {
      setUses(getSocialProofCount())
    }
    refresh()
    return subscribePrefs(refresh)
  }, [])

  return (
    <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-muted-foreground">
      <span className="inline-flex items-center gap-2">
        <Activity className="size-4 text-primary" aria-hidden="true" />
        {t.socialProof.toolsCount.replace("{count}", String(TOOL_COUNT))}
      </span>
      <span>{t.socialProof.usesToday.replace("{uses}", uses.toLocaleString())}</span>
    </div>
  )
}
