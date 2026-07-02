"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getTool } from "@/lib/tools"
import { useI18n } from "@/components/i18n-provider"

// Curated most-popular converters, featuring both directions of each pair.
const POPULAR_IDS = [
  "mp3-to-wav",
  "wav-to-mp3",
  "avi-to-mp4",
  "mp4-to-avi",
  "pdf-to-docx",
  "docx-to-pdf",
  "jpg-to-png",
  "png-to-jpg",
  "pdf-to-jpg",
  "png-to-webp",
  "webp-to-png",
  "mp4-to-webm",
]

export function PopularToolsSection() {
  const { t } = useI18n()
  const popular = POPULAR_IDS.map((id) => getTool(id)).filter(
    (tool): tool is NonNullable<typeof tool> => Boolean(tool),
  )

  return (
    <section className="mt-24 space-y-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {t.features.popularTitle}
        </h2>
        <p className="mt-3 text-pretty text-muted-foreground">
          {t.features.popularSubtitle}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {popular.map((tool) => (
          <Link
            key={tool.id}
            href={`/tools/${tool.id}`}
            className="group relative flex items-center justify-between gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all hover:border-primary/40 hover:bg-white/[0.06]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-lg bg-primary/10 px-2.5 py-1 text-sm font-semibold text-primary ring-1 ring-primary/25">
                {tool.from.toUpperCase()}
              </span>
              <ArrowRight
                className="size-4 text-muted-foreground transition-colors group-hover:text-primary"
                aria-hidden="true"
              />
              <span className="inline-flex items-center rounded-lg bg-white/5 px-2.5 py-1 text-sm font-semibold text-foreground ring-1 ring-white/10">
                {tool.to.toUpperCase()}
              </span>
            </div>
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              {tool.category}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
