import { fullyTranslatedLocales } from "@/lib/i18n/config"
import { COMPARISON_SLUGS, getComparison } from "@/lib/i18n/comparisons"
import { GUIDE_SLUGS, getGuide } from "@/lib/i18n/guides"
import { SITE_URL } from "@/lib/seo/structured-data"

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

type FeedItem = {
  title: string
  link: string
  description: string
  pubDate: string
  locale: string
}

function collectItems(): FeedItem[] {
  const items: FeedItem[] = []

  for (const locale of fullyTranslatedLocales) {
    for (const slug of GUIDE_SLUGS) {
      const article = getGuide(locale, slug)
      if (!article) continue
      items.push({
        title: article.title,
        link: `${SITE_URL}/${locale}/poradniki/${slug}`,
        description: article.description,
        pubDate: new Date(article.updated).toUTCString(),
        locale,
      })
    }

    for (const slug of COMPARISON_SLUGS) {
      const comparison = getComparison(locale, slug)
      if (!comparison) continue
      items.push({
        title: comparison.title,
        link: `${SITE_URL}/${locale}/porownania/${slug}`,
        description: comparison.description,
        pubDate: new Date("2026-07-23").toUTCString(),
        locale,
      })
    }
  }

  return items.sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime(),
  )
}

export async function GET() {
  const items = collectItems()
  const lastBuild = new Date().toUTCString()

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Toolando.tech — guides &amp; comparisons</title>
    <link>${SITE_URL}</link>
    <description>File conversion guides, format comparisons and tips from Toolando.tech</description>
    <language>en</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items
      .map(
        (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${item.pubDate}</pubDate>
      <category>${item.locale}</category>
    </item>`,
      )
      .join("")}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
