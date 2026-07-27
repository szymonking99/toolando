import type { Metadata } from "next"
import Link from "next/link"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { buildPageMetadata } from "@/lib/seo/metadata"
import { getAllGlossaryTerms, getGlossaryHubMeta } from "@/lib/i18n/glossary"
import { localeHref } from "@/lib/i18n/href"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const hub = getGlossaryHubMeta(locale)
  return buildPageMetadata({
    locale,
    path: "/slownik",
    title: `${hub.title} — Toolando.tech`,
    description: hub.intro,
  })
}

export default async function GlossaryPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const hub = getGlossaryHubMeta(locale)
  const terms = getAllGlossaryTerms(locale)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar />
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-32">
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {hub.title}
        </h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">{hub.intro}</p>

        <dl className="mt-12 space-y-8">
          {terms.map((term) => (
            <div key={term.slug}>
              <dt className="text-lg font-semibold text-foreground">
                <Link
                  href={localeHref(locale, `/slownik/${term.slug}`)}
                  className="hover:text-primary hover:underline"
                >
                  {term.term}
                </Link>
              </dt>
              <dd className="mt-2 leading-relaxed text-muted-foreground">
                {term.definition}
              </dd>
              {term.relatedFormats && term.relatedFormats.length > 0 && (
                <dd className="mt-3 flex flex-wrap gap-2">
                  {term.relatedFormats.map((f) => (
                    <Link
                      key={f}
                      href={localeHref(locale, `/formaty/${f}`)}
                      className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                    >
                      .{f.toUpperCase()}
                    </Link>
                  ))}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </main>
      <SiteFooter />
    </div>
  )
}
