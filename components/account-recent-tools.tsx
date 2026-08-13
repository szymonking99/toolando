"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Clock } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { getRecentTools, type RecentTool, subscribePrefs } from "@/lib/client-preferences"

export function AccountRecentTools() {
  const { href, t } = useI18n()
  const [recent, setRecent] = useState<RecentTool[]>([])
  const recentCopy = (t as { accountRecent?: { title: string; subtitle: string } })
    .accountRecent ?? {
    title: "Recently used",
    subtitle: "History saved locally in this browser.",
  }

  useEffect(() => {
    function refresh() {
      setRecent(getRecentTools())
    }
    refresh()
    return subscribePrefs(refresh)
  }, [])

  if (recent.length === 0) return null

  return (
    <section className="rounded-2xl border border-white/10 bg-background/60 p-6 backdrop-blur-xl">
      <div className="flex items-center gap-2 text-foreground">
        <Clock className="size-5 text-primary" aria-hidden="true" />
        <h2 className="text-lg font-semibold">{recentCopy.title}</h2>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{recentCopy.subtitle}</p>
      <ul className="mt-4 flex flex-col gap-2">
        {recent.map((tool) => (
          <li key={tool.id}>
            <Link
              href={href(`/tools/${tool.id}`)}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm transition-colors hover:bg-white/[0.06]"
            >
              <span className="font-medium text-foreground">{tool.title}</span>
              <span className="text-xs text-muted-foreground">
                {new Date(tool.visitedAt).toLocaleDateString()}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
