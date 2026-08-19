export const dynamic = "force-static"

import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  GLOSSARY_SLUGS,
  getAllGlossaryTerms,
  getGlossaryHubMeta,
  getGlossaryTerm,
} from "@/lib/i18n/glossary"
import { localeHref } from "@/lib/i18n/href"
import { buildPageMetadata } from "@/lib/seo/metadata"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, definedTermSchema } from "@/lib/seo/structured-data"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { ShareButtons } from "@/components/share-buttons"

export function generateStaticParams() {
  return GLOSSARY_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const term = getGlossaryTerm(locale, slug)
  if (!term) return { title: "Glossary — Toolando.tech" }

  return buildPageMetadata({
    locale,
    path: `/slownik/${slug}`,
    title: `${term.term} — Toolando.tech`,
    description: term.definition.slice(0, 160),
    type: "article",
  })
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const term = getGlossaryTerm(locale, slug)
  if (!term) return notFound()

  const hub = getGlossaryHubMeta(locale)
  const allTerms = getAllGlossaryTerms(locale)
  const path = `/${locale}/slownik/${slug}`

  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Toolando.tech", path: `/${locale}` },
            { name: hub.backToHub, path: `/${locale}/slownik` },
            { name: term.term, path },
          ]),
          definedTermSchema({
            name: term.term,
            description: term.definition,
            path,
            locale,
          }),
        ]}
      />
      <SiteNavbar />
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-32">
        <Link
          href={localeHref(locale, "/slownik")}
          className="text-sm font-medium text-primary hover:underline"
        >
          ← {hub.backToHub}
        </Link>

        <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {term.term}
        </h1>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
          {term.definition}
        </p>

        {term.relatedFormats && term.relatedFormats.length > 0 && (
          <div className="mt-8">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Formats
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {term.relatedFormats.map((f) => (
                <Link
                  key={f}
                  href={localeHref(locale, `/formaty/${f}`)}
                  className="rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                >
                  .{f.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        )}

        <ShareButtons
          className="mt-10"
          title={term.term}
          path={`/slownik/${slug}`}
        />

        <section className="mt-14 border-t border-white/10 pt-10">
          <h2 className="text-lg font-semibold">{hub.title}</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {allTerms
              .filter((t) => t.slug !== slug)
              .slice(0, 8)
              .map((t) => (
                <li key={t.slug}>
                  <Link
                    href={localeHref(locale, `/slownik/${t.slug}`)}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {t.term}
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
