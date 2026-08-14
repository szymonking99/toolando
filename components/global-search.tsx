"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { Search, Command } from "lucide-react"
import { tools } from "@/lib/tools"
import { utilityTools } from "@/lib/utility-tools"
import { specialTools } from "@/lib/special-tools"
import { aiTools } from "@/lib/ai-tools"
import { getUtilityMeta } from "@/lib/i18n/utility-meta"
import { getSpecialMeta, getAiCategoryLabel } from "@/lib/i18n/tool-meta"
import { getAiMeta } from "@/lib/i18n/ai-meta"
import { useI18n } from "@/components/i18n-provider"

type SearchResult = {
  id: string
  title: string
  hint: string
  premium?: boolean
}

function safeLower(value: string | undefined | null): string {
  return (value ?? "").toLowerCase()
}

export function GlobalSearch({
  className,
  compact = false,
}: {
  className?: string
  compact?: boolean
}) {
  const { t, href, locale } = useI18n()
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  const corpus = useMemo(() => {
    const converters: SearchResult[] = tools
      .filter((tool) => tool.supported)
      .map((tool) => ({
        id: tool.id,
        title: `${tool.from.toUpperCase()} → ${tool.to.toUpperCase()}`,
        hint: tool.category,
      }))

    const utilities: SearchResult[] = utilityTools.map((tool) => {
      const meta = getUtilityMeta(locale, tool.id)
      return {
        id: tool.id,
        title: meta?.name ?? tool.id,
        hint: meta?.category ?? "",
      }
    })

    const specials: SearchResult[] = specialTools.map((tool) => {
      const meta = getSpecialMeta(locale, tool.id)
      return {
        id: tool.id,
        title: meta?.name ?? tool.id,
        hint: meta?.category ?? "",
      }
    })

    const aiMeta = getAiMeta(locale)
    const ai: SearchResult[] = aiTools.map((tool) => ({
      id: tool.id,
      title: aiMeta[tool.id]?.name ?? tool.id,
      hint: getAiCategoryLabel(locale, tool.id),
      premium: true,
    }))

    return [...utilities, ...specials, ...ai, ...converters]
  }, [locale])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (q.length < 2) return []
    return corpus
      .filter(
        (item) =>
          safeLower(item.id).includes(q) ||
          safeLower(item.title).includes(q) ||
          safeLower(item.hint).includes(q),
      )
      .slice(0, 12)
  }, [corpus, query])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen(true)
        rootRef.current?.querySelector("input")?.focus()
      }
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [])

  const onSelect = useCallback(() => {
    setQuery("")
    setOpen(false)
  }, [])

  return (
    <div ref={rootRef} className={className}>
      <label htmlFor="global-tool-search" className="sr-only">
        {t.search.placeholder}
      </label>
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          id="global-tool-search"
          type="text"
          role="searchbox"
          autoComplete="off"
          spellCheck={false}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter") e.preventDefault()
          }}
          placeholder={t.search.placeholder}
          className={`w-full rounded-xl border border-white/10 bg-white/[0.04] py-2.5 pl-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/30 ${
            compact ? "pr-3" : "pr-16"
          }`}
        />
        {!compact && (
          <span className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 items-center gap-1 rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[10px] text-muted-foreground sm:inline-flex">
            <Command className="size-3" aria-hidden="true" />
            K
          </span>
        )}
      </div>
      {open && results.length > 0 && (
        <ul
          role="listbox"
          className="absolute z-[70] mt-2 max-h-80 w-full overflow-auto rounded-xl border border-white/10 bg-background/95 shadow-xl backdrop-blur-md"
        >
          {results.map((tool) => (
            <li key={tool.id} role="option">
              <Link
                href={href(`/tools/${tool.id}`)}
                onClick={onSelect}
                className="flex items-center justify-between gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-white/[0.06]"
              >
                <span className="font-medium text-foreground">{tool.title}</span>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {tool.premium ? "Premium · " : ""}
                  {tool.hint}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {open && query.length >= 2 && results.length === 0 && (
        <p className="absolute z-[70] mt-2 w-full rounded-xl border border-white/10 bg-background/95 px-4 py-3 text-sm text-muted-foreground shadow-lg backdrop-blur-md">
          {t.search.noResults}
        </p>
      )}
    </div>
  )
}
