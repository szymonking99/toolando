"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Clock, Star } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import {
  getRecentTools,
  getFavoriteTools,
  subscribePrefs,
  type RecentTool,
} from "@/lib/client-preferences"

export function RecentToolsSection() {
  const { t, href } = useI18n()
  const [recent, setRecent] = useState<RecentTool[]>([])
  const [favorites, setFavorites] = useState<string[]>([])

  useEffect(() => {
    function refresh() {
      setRecent(getRecentTools())
      setFavorites(getFavoriteTools())
    }
    refresh()
    return subscribePrefs(refresh)
  }, [])

  if (recent.length === 0 && favorites.length === 0) return null

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-2">
          <Clock className="size-5 text-primary" aria-hidden="true" />
          <h2 className="text-xl font-semibold text-foreground">
            {t.recent.title}
          </h2>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{t.recent.subtitle}</p>

        {recent.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {recent.map((tool) => (
              <li key={tool.id}>
                <Link
                  href={href(`/tools/${tool.id}`)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-white/[0.08]"
                >
                  {favorites.includes(tool.id) && (
                    <Star className="size-3.5 fill-amber-400 text-amber-400" />
                  )}
                  {tool.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
