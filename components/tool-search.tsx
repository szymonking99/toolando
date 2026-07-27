"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Search } from "lucide-react"
import { tools } from "@/lib/tools"
import { useI18n } from "@/components/i18n-provider"

export function ToolSearch({ className }: { className?: string }) {
  const { t, href } = useI18n()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState("")

  useEffect(() => {
    const q = searchParams.get("q")
    if (q) setQuery(q)
  }, [searchParams])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (q.length < 2) return []
    return tools
      .filter((tool) => tool.supported)
      .filter(
        (tool) =>
          tool.id.includes(q) ||
          tool.from.includes(q) ||
          tool.to.includes(q) ||
          tool.name.toLowerCase().includes(q) ||
          `${tool.from} ${tool.to}`.includes(q.replace(/\s+/g, " ")),
      )
      .slice(0, 8)
  }, [query])

  return (
    <div className={className}>
      <label htmlFor="tool-search" className="sr-only">
        {t.search.placeholder}
      </label>
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          id="tool-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.search.placeholder}
          className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/30"
        />
      </div>
      {results.length > 0 && (
        <ul className="mt-2 overflow-hidden rounded-xl border border-white/10 bg-background/95 shadow-lg backdrop-blur-md">
          {results.map((tool) => (
            <li key={tool.id}>
              <Link
                href={href(`/tools/${tool.id}`)}
                onClick={() => setQuery("")}
                className="flex items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-white/[0.06]"
              >
                <span className="font-medium text-foreground">
                  {tool.from.toUpperCase()} → {tool.to.toUpperCase()}
                </span>
                <span className="text-xs text-muted-foreground">{tool.category}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {query.length >= 2 && results.length === 0 && (
        <p className="mt-2 text-sm text-muted-foreground">{t.search.noResults}</p>
      )}
    </div>
  )
}
