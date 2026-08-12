import { Suspense } from "react"
import Link from "next/link"
import type { Metadata } from "next"
import {
  ArrowRight,
  BookOpen,
  FileType2,
  Music,
  Video,
  FileText,
  ImageIcon,
  Archive,
  Braces,
  Type,
  Coins,
  Code2,
} from "lucide-react"
import { countToolsForCategory } from "@/lib/tools"
import {
  getCalculatorUtilities,
  getConverterCategories,
  getDeveloperUtilities,
  getSpecialsForCategory,
} from "@/lib/tool-hub"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { GlobalSearch } from "@/components/global-search"
import { buildPageMetadata } from "@/lib/seo/metadata"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { getCategoryMeta } from "@/lib/i18n/content-meta"
import { getSpecialMeta } from "@/lib/i18n/tool-meta"
import { getUtilityMeta } from "@/lib/i18n/utility-meta"
import { localeHref } from "@/lib/i18n/href"
import { AdSlot } from "@/components/ad-slot"

const CONVERTER_ICONS: Record<string, typeof Music> = {
  audio: Music,
  video: Video,
  documents: FileText,
  image: ImageIcon,
  archive: Archive,
  data: Braces,
  font: Type,
}

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
    description: dict.hub.convertersDesc,
  })
}

export default async function ToolsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const converterCats = getConverterCategories()
  const calculators = getCalculatorUtilities()
  const developers = getDeveloperUtilities()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar />
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {dict.nav.allTools}
          </h1>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {dict.toolsIndex.intro}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#konwertery"
              className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium hover:border-primary/40"
            >
              {dict.nav.converters}
            </a>
            <a
              href="#kalkulatory"
              className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium hover:border-primary/40"
            >
              {dict.nav.calculators}
            </a>
            <a
              href="#deweloperzy"
              className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium hover:border-primary/40"
            >
              {dict.nav.developer}
            </a>
            <Link
              href={localeHref(locale, "/formaty")}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium hover:border-primary/40"
            >
              <FileType2 className="size-4 text-primary" aria-hidden="true" />
              {dict.toolsIndex.formatsLink}
            </Link>
            <Link
              href={localeHref(locale, "/poradniki")}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium hover:border-primary/40"
            >
              <BookOpen className="size-4 text-primary" aria-hidden="true" />
              {dict.toolsIndex.guidesLink}
            </Link>
          </div>
        </div>

        <Suspense fallback={null}>
          <GlobalSearch className="relative mx-auto mt-10 max-w-xl" />
        </Suspense>

        {/* 1. Converters */}
        <section id="konwertery" className="mt-20 scroll-mt-28">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                {dict.hub.convertersTitle}
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                {dict.hub.convertersDesc}
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {converterCats.map((category) => {
              const count =
                countToolsForCategory(category.slug) +
                getSpecialsForCategory(category.slug).length
              const cm = getCategoryMeta(locale, category.slug)
              const Icon = CONVERTER_ICONS[category.slug] ?? Braces
              return (
                <Link
                  key={category.slug}
                  href={localeHref(locale, `/category/${category.slug}`)}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all hover:border-accent/40 hover:bg-white/[0.06]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      {count}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {cm?.title ?? category.title}
                  </h3>
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
        </section>

        {/* 2. Calculators */}
        <section id="kalkulatory" className="mt-20 scroll-mt-28">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
              <Coins className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                {dict.hub.calculatorsTitle}
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                {dict.hub.calculatorsDesc}
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {calculators.map((tool) => {
              const meta = getUtilityMeta(locale, tool.id)
              return (
                <Link
                  key={tool.id}
                  href={localeHref(locale, `/tools/${tool.id}`)}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-primary/40 hover:bg-white/[0.06]"
                >
                  <div className="text-sm font-semibold text-foreground">
                    {meta.name}
                  </div>
                  <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                    {meta.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </section>

        {/* 3. Developer */}
        <section id="deweloperzy" className="mt-20 scroll-mt-28">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
              <Code2 className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                {dict.hub.developerTitle}
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                {dict.hub.developerDesc}
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {developers.map((tool) => {
              const meta = getUtilityMeta(locale, tool.id)
              return (
                <Link
                  key={tool.id}
                  href={localeHref(locale, `/tools/${tool.id}`)}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-primary/40 hover:bg-white/[0.06]"
                >
                  <div className="text-sm font-semibold text-foreground">
                    {meta.name}
                  </div>
                  <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                    {meta.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </section>

        <AdSlot
          placement="tools-index"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOLS}
          className="mt-12 px-0"
        />
      </main>
      <SiteFooter />
    </div>
  )
}
