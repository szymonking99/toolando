import { Suspense } from "react"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, BookOpen, FileType2 } from "lucide-react"
import { categories, countToolsForCategory } from "@/lib/tools"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { ToolSearch } from "@/components/tool-search"
import { buildPageMetadata } from "@/lib/seo/metadata"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { getCategoryMeta } from "@/lib/i18n/content-meta"
import { localeHref } from "@/lib/i18n/href"
import { AdSlot } from "@/components/ad-slot"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  return buildPageMetadata({
    locale,
    path: "/tools",
    title: `${dict.nav.allTools} — Toolando.tech`,
    description: dict.categories.subtitle,
  })
}

export default async function ToolsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar />
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {dict.nav.allTools}
          </h1>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {dict.categories.subtitle}
          </p>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            {dict.toolsIndex.intro}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={localeHref(locale, "/formaty")}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-white/[0.08]"
            >
              <FileType2 className="size-4 text-primary" aria-hidden="true" />
              {dict.toolsIndex.formatsLink}
            </Link>
            <Link
              href={localeHref(locale, "/poradniki")}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-white/[0.08]"
            >
              <BookOpen className="size-4 text-primary" aria-hidden="true" />
              {dict.toolsIndex.guidesLink}
            </Link>
          </div>
        </div>

        <Suspense fallback={null}>
          <ToolSearch className="mx-auto mt-10 max-w-xl" />
        </Suspense>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => {
            const count = countToolsForCategory(category.slug)
            const cm = getCategoryMeta(locale, category.slug)
            return (
              <Link
                key={category.slug}
                href={localeHref(locale, `/category/${category.slug}`)}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all hover:border-accent/40 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-foreground">
                    {cm?.title ?? category.title}
                  </h2>
                  <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    {count}
                  </span>
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {cm?.description ?? category.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white/90">
                  {dict.categories.browse}
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            )
          })}
        </div>

        {/* Ad placement: below the tools grid */}
        <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOLS} className="mt-12 px-0" />
      </main>
      <SiteFooter />
    </div>
  )
}
