import type { SupportedLocale } from "@/lib/i18n/config"
import { INDEXED_LOCALES, isIndexableGuide } from "@/lib/seo/publisher-index"
import { GUIDE_SLUGS, getGuide } from "@/lib/i18n/guides"
import { SITE_URL } from "@/lib/seo/structured-data"

export function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

export type FeedItem = {
  title: string
  link: string
  description: string
  pubDate: string
  category: string
  locale: string
}

const CHANNEL_COPY: Record<
  string,
  { title: string; description: string; language: string }
> = {
  pl: {
    title: "Toolando.tech — poradniki o konwersji plików",
    description:
      "Poradniki z testów na realnych plikach: kiedy konwertować, kiedy zostawić oryginał i jak nie psuć jakości.",
    language: "pl",
  },
  en: {
    title: "Toolando.tech — file conversion guides",
    description:
      "Guides from real-file tests: when to convert, when to leave the original, and how not to wreck quality.",
    language: "en",
  },
}

function channelCopy(locale?: string) {
  if (locale && CHANNEL_COPY[locale]) return CHANNEL_COPY[locale]
  return CHANNEL_COPY.pl
}

function collectLocaleItems(locale: SupportedLocale): FeedItem[] {
  const items: FeedItem[] = []

  for (const slug of GUIDE_SLUGS) {
    if (!isIndexableGuide(locale, slug)) continue
    const article = getGuide(locale, slug)
    if (!article) continue
    items.push({
      title: article.title,
      link: `${SITE_URL}/${locale}/poradniki/${slug}`,
      description: article.description,
      pubDate: new Date(article.updated).toUTCString(),
      category: "guide",
      locale,
    })
  }

  return items
}

export function collectFeedItems(locale?: string): FeedItem[] {
  const locales = locale
    ? ([locale] as SupportedLocale[])
    : [...INDEXED_LOCALES]

  const items = locales.flatMap((code) => collectLocaleItems(code))
  return items.sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime(),
  )
}

export function buildRssXml(opts?: { locale?: string }): string {
  const locale = opts?.locale
  const items = collectFeedItems(locale)
  const copy = channelCopy(locale)
  const selfHref = locale
    ? `${SITE_URL}/${locale}/feed.xml`
    : `${SITE_URL}/feed.xml`
  const lastBuild = new Date().toUTCString()

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(copy.title)}</title>
    <link>${locale ? `${SITE_URL}/${locale}` : SITE_URL}</link>
    <description>${escapeXml(copy.description)}</description>
    <language>${escapeXml(copy.language)}</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${selfHref}" rel="self" type="application/rss+xml"/>
    ${items
      .map(
        (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${item.pubDate}</pubDate>
      <category>${escapeXml(item.category)}</category>
      <category>${escapeXml(item.locale)}</category>
    </item>`,
      )
      .join("")}
  </channel>
</rss>`
}

export function rssResponse(xml: string): Response {
  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
