import type { Metadata } from "next"
import Link from "next/link"
import { ContentPageShell } from "@/components/content-page-shell"
import { getGuide, getGuidesHubMeta } from "@/lib/i18n/guides"
import { localeHref } from "@/lib/i18n/href"
import { JsonLd } from "@/components/json-ld"
import { itemListSchema } from "@/lib/seo/structured-data"
import { buildPageMetadata } from "@/lib/seo/metadata"
import { INDEXABLE_GUIDE_SLUGS, isIndexedLocale } from "@/lib/seo/publisher-index"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const hub = getGuidesHubMeta(locale)
  return buildPageMetadata({
    locale,
    path: "/poradniki",
    title: `${hub.title} — Toolando.tech`,
    description: hub.intro,
    index: isIndexedLocale(locale),
  })
}

export default async function GuidesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const hub = getGuidesHubMeta(locale)
  const articles = [...INDEXABLE_GUIDE_SLUGS]
    .map((slug) => getGuide(locale, slug))
    .filter((article): article is NonNullable<typeof article> => Boolean(article))

  return (
    <>
      <JsonLd
        data={itemListSchema(
          articles.map((a) => ({
            name: a.title,
            path: `/${locale}/poradniki/${a.slug}`,
          })),
        )}
      />
      <ContentPageShell eyebrow={hub.eyebrow} title={hub.title} intro={hub.intro}>
        <div className="grid gap-4 sm:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={localeHref(locale, `/poradniki/${article.slug}`)}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-primary/40 hover:bg-white/[0.06]"
            >
              <h2 className="text-lg font-semibold text-foreground group-hover:text-primary">
                {article.title}
              </h2>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {article.description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-primary">
                {hub.readArticle} →
              </span>
            </Link>
          ))}
        </div>
      </ContentPageShell>
    </>
  )
}
