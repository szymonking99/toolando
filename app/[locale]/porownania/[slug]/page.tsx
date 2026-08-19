export const dynamic = "force-static"

import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { buildPageMetadata } from "@/lib/seo/metadata"
import {
  COMPARISON_SLUGS,
  getComparison,
  getComparisonsHubMeta,
} from "@/lib/i18n/comparisons"
import { localeHref } from "@/lib/i18n/href"
import { JsonLd } from "@/components/json-ld"
import { articleSchema, breadcrumbSchema } from "@/lib/seo/structured-data"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { ShareButtons } from "@/components/share-buttons"
import { HelpfulFeedback } from "@/components/helpful-feedback"

export function generateStaticParams() {
  return COMPARISON_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const item = getComparison(locale, slug)
  if (!item) return { title: "Comparison — Toolando.tech" }
  return buildPageMetadata({
    locale,
    path: `/porownania/${slug}`,
    title: `${item.title} — Toolando.tech`,
    description: item.description,
    type: "article",
  })
}

export default async function ComparisonDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const item = getComparison(locale, slug)
  if (!item) return notFound()
  const hub = getComparisonsHubMeta(locale)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Toolando.tech", path: `/${locale}` },
            { name: hub.backToHub, path: `/${locale}/porownania` },
            { name: item.title, path: `/${locale}/porownania/${slug}` },
          ]),
          articleSchema({
            title: item.title,
            description: item.description,
            path: `/${locale}/porownania/${slug}`,
            author: "Szymon",
            published: "2026-01-01",
            updated: "2026-07-23",
            locale,
          }),
        ]}
      />
      <SiteNavbar />
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-32">
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {item.title}
        </h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">{item.description}</p>

        <ShareButtons
          className="mt-6"
          title={item.title}
          path={`/porownania/${slug}`}
        />

        <div className="mt-10 space-y-8">
          {item.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">
                {section.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-xl border border-primary/20 bg-primary/[0.04] p-6">
          <h2 className="text-lg font-semibold">{hub.verdictTitle}</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">{item.verdict}</p>
        </section>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link
            href={localeHref(locale, `/formaty/${item.formatA}`)}
            className="rounded-lg border border-white/10 px-3 py-1.5 text-sm font-medium hover:border-primary/40"
          >
            .{item.formatA.toUpperCase()}
          </Link>
          <Link
            href={localeHref(locale, `/formaty/${item.formatB}`)}
            className="rounded-lg border border-white/10 px-3 py-1.5 text-sm font-medium hover:border-primary/40"
          >
            .{item.formatB.toUpperCase()}
          </Link>
        </div>

        <div className="mt-12">
          <HelpfulFeedback pageId={`comparison-${slug}`} />
        </div>

        <p className="mt-8">
          <Link
            href={localeHref(locale, "/porownania")}
            className="text-sm font-medium text-primary hover:underline"
          >
            ← {hub.backToHub}
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  )
}
