"use client"

import Link from "next/link"
import { BookOpen, FileType2, GitCompare, BookMarked } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"

export function KnowledgeHubSection() {
  const { t, href } = useI18n()

  const cards = [
    {
      icon: FileType2,
      title: t.knowledgeHub.formatsTitle,
      description: t.knowledgeHub.formatsDesc,
      link: href("/formaty"),
      cta: t.knowledgeHub.formatsCta,
    },
    {
      icon: BookOpen,
      title: t.knowledgeHub.guidesTitle,
      description: t.knowledgeHub.guidesDesc,
      link: href("/poradniki"),
      cta: t.knowledgeHub.guidesCta,
    },
    {
      icon: GitCompare,
      title: t.knowledgeHub.comparisonsTitle,
      description: t.knowledgeHub.comparisonsDesc,
      link: href("/porownania"),
      cta: t.knowledgeHub.comparisonsCta,
    },
    {
      icon: BookMarked,
      title: t.knowledgeHub.glossaryTitle,
      description: t.knowledgeHub.glossaryDesc,
      link: href("/slownik"),
      cta: t.knowledgeHub.glossaryCta,
    },
  ]

  return (
    <section className="border-t border-white/10 px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.knowledgeHub.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t.knowledgeHub.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <Link
              key={card.link}
              href={card.link}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all hover:border-primary/40 hover:bg-white/[0.06]"
            >
              <card.icon
                className="size-10 text-primary"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                {card.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {card.description}
              </p>
              <span className="mt-6 inline-flex items-center text-sm font-medium text-primary">
                {card.cta} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
