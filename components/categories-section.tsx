"use client"

import Link from "next/link"
import {
  Music,
  Video,
  FileText,
  ImageIcon,
  Archive,
  Braces,
  Type,
  ArrowRight,
} from "lucide-react"
import { categories, countToolsForCategory } from "@/lib/tools"
import { useI18n } from "@/components/i18n-provider"
import { getCategoryMeta } from "@/lib/i18n/content-meta"

const ICONS: Record<string, typeof Music> = {
  audio: Music,
  video: Video,
  documents: FileText,
  image: ImageIcon,
  archive: Archive,
  data: Braces,
  font: Type,
}

export function CategoriesSection() {
  const { t, locale, href } = useI18n()
  return (
    <section id="kategorie" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {t.categories.title}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.categories.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => {
            const Icon = ICONS[category.slug] ?? Braces
            const count = countToolsForCategory(category.slug)
            const cm = getCategoryMeta(locale, category.slug)
            return (
              <Link
                key={category.slug}
                href={href(`/category/${category.slug}`)}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all hover:border-accent/40 hover:bg-white/[0.06]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-8 -top-8 size-24 rounded-full bg-accent/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/25 transition-colors group-hover:bg-accent/20">
                  <Icon className="size-6 text-white/90" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    {count}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {cm?.title ?? category.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {cm?.description ?? category.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white/90">
                  {t.categories.browse}
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
