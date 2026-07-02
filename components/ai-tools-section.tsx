"use client"

import Link from "next/link"
import {
  Sparkles,
  PenLine,
  FileText,
  ImagePlus,
  Languages,
  MessageSquare,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"
import { aiTools } from "@/lib/ai-tools"
import { useI18n } from "@/components/i18n-provider"
import { aiMeta } from "@/lib/i18n/ai-meta"

const ICONS: Record<string, LucideIcon> = {
  PenLine,
  FileText,
  ImagePlus,
  Languages,
  MessageSquare,
}

export function AiToolsSection() {
  const { t, locale } = useI18n()
  const meta = aiMeta[locale]
  return (
    <section id="ai" className="relative px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="size-3.5" />
            {t.ai.badge}
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.ai.title}
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            {t.ai.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aiTools.map((tool) => {
            const Icon = ICONS[tool.icon] ?? Sparkles
            return (
              <Link
                key={tool.id}
                href={`/tools/${tool.id}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.07] to-white/[0.02] p-6 backdrop-blur-md transition-all hover:border-primary/40 hover:from-primary/[0.12]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-primary/25 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25 transition-colors group-hover:bg-primary/25">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {meta[tool.id].name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {meta[tool.id].tagline}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {meta[tool.id].description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                  {t.ai.openTool}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
