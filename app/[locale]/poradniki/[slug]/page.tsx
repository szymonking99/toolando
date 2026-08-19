export const dynamic = "force-static"

import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { GuideArticleView } from "@/components/guide-article-view"
import { buildPageMetadata } from "@/lib/seo/metadata"
import {
  GUIDE_SLUGS,
  getGuide,
  getGuidesHubMeta,
} from "@/lib/i18n/guides"

export function generateStaticParams() {
  return GUIDE_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const article = getGuide(locale, slug)
  if (!article) return { title: "Guide — Toolando.tech" }
  return buildPageMetadata({
    locale,
    path: `/poradniki/${slug}`,
    title: `${article.title} — Toolando.tech`,
    description: article.description,
    type: "article",
  })
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const article = getGuide(locale, slug)
  if (!article) return notFound()
  const hub = getGuidesHubMeta(locale)

  return <GuideArticleView locale={locale} article={article} hub={hub} />
}
