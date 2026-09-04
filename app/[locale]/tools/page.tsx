import { Suspense } from "react"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, BookOpen, Wrench } from "lucide-react"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { GlobalSearch } from "@/components/global-search"
import { buildPageMetadata } from "@/lib/seo/metadata"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { getSpecialMeta, getConversionDescription } from "@/lib/i18n/tool-meta"
import { getTool } from "@/lib/tools"
import { getSpecialTool } from "@/lib/special-tools"
import { localeHref } from "@/lib/i18n/href"

/**
 * Curated hub for AdSense / Search Quality reviewers.
 * The full converter matrix stays reachable by search + direct URLs,
 * but this page must not look like a doorway farm of hundreds of X→Y tiles.
 */
const FEATURED_TOOL_IDS = [
  "heic-to-jpg",
  "mp3-to-wav",
  "wav-to-mp3",
  "flac-to-mp3",
  "mp4-to-mp3",
  "png-to-jpg",
  "jpg-to-webp",
  "pdf-to-docx",
  "docx-to-pdf",
  "kompresor-obrazow",
  "laczenie-pdf",
  "usun-exif",
] as const

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  return {
    ...buildPageMetadata({
      locale,
      path: "/tools",
      title: `${dict.nav.allTools} — Toolando.tech`,
      description: dict.hub.convertersDesc,
    }),
    robots: { index: false, follow: true },
  }
}

function resolveFeaturedName(locale: string, id: string): {
  name: string
  description: string
} | null {
  const special = getSpecialTool(id)
  if (special) {
    const meta = getSpecialMeta(locale, special.id)
    return { name: meta.name, description: meta.description }
  }
  const tool = getTool(id)
  if (!tool) return null
  return {
    name: tool.name,
    description: getConversionDescription(locale, tool.from, tool.to),
  }
}

export default async function ToolsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const featured = FEATURED_TOOL_IDS.map((id) => {
    const text = resolveFeaturedName(locale, id)
    if (!text) return null
    return { id, ...text }
  }).filter((row): row is NonNullable<typeof row> => Boolean(row))

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar />
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-32">
        <div className="mx-auto max-w-2xl text-center">
          <Wrench
            className="mx-auto size-10 text-primary"
            aria-hidden="true"
          />
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {dict.nav.allTools}
          </h1>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {dict.toolsIndex.intro}
          </p>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
            {locale === "pl"
              ? "Poniżej są narzędzia, które sam najczęściej polecam przy realnych plikach. Reszta katalogu działa, ale nie jest celem tej strony — najpierw czytaj poradniki, potem konwertuj tylko gdy oryginał nie wystarcza."
              : "These are the tools I recommend most often for real files. The rest of the catalog still works via search — read the guides first, then convert only when the original is not enough."}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={localeHref(locale, "/poradniki")}
              className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:border-primary/50"
            >
              <BookOpen className="size-4" aria-hidden="true" />
              {dict.toolsIndex.guidesLink}
            </Link>
            <Link
              href={localeHref(locale, "/o-mnie")}
              className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium hover:border-primary/40"
            >
              {dict.nav.aboutMe}
            </Link>
          </div>
        </div>

        <Suspense fallback={null}>
          <GlobalSearch className="relative mx-auto mt-10 max-w-xl" />
        </Suspense>

        <ul className="mt-12 space-y-3">
          {featured.map((tool) => (
            <li key={tool.id}>
              <Link
                href={localeHref(locale, `/tools/${tool.id}`)}
                className="group flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-primary/40 hover:bg-white/[0.06]"
              >
                <div>
                  <h2 className="text-base font-semibold text-foreground group-hover:text-primary">
                    {tool.name}
                  </h2>
                  <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {tool.description}
                  </p>
                </div>
                <ArrowRight
                  className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </div>
  )
}
