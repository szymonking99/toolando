import type { Metadata } from "next"
import Link from "next/link"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { getAllComparisons, getComparisonsHubMeta } from "@/lib/i18n/comparisons"
import { localeHref } from "@/lib/i18n/href"
import { JsonLd } from "@/components/json-ld"
import { itemListSchema } from "@/lib/seo/structured-data"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const hub = getComparisonsHubMeta(locale)
  return {
    title: `${hub.title} — Toolando.tech`,
    description: hub.intro,
    alternates: { canonical: `/${locale}/porownania` },
  }
}

export default async function ComparisonsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const hub = getComparisonsHubMeta(locale)
  const items = getAllComparisons(locale)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={itemListSchema(
          items.map((c) => ({
            name: c.title,
            path: `/${locale}/porownania/${c.slug}`,
          })),
        )}
      />
      <SiteNavbar />
      <main className="mx-auto max-w-5xl px-4 pb-24 pt-32">
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {hub.title}
        </h1>
        <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
          {hub.intro}
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={localeHref(locale, `/porownania/${item.slug}`)}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-primary/40 hover:bg-white/[0.06]"
            >
              <h2 className="text-lg font-semibold group-hover:text-primary">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-primary">
                {hub.readComparison} →
              </span>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
