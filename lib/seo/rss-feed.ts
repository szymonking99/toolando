import { fullyTranslatedLocales, type SupportedLocale } from "@/lib/i18n/config"
import { COMPARISON_SLUGS, getComparison } from "@/lib/i18n/comparisons"
import { GLOSSARY_SLUGS, getGlossaryTerm } from "@/lib/i18n/glossary"
import { GUIDE_SLUGS, getGuide } from "@/lib/i18n/guides"
import { SITE_URL } from "@/lib/seo/structured-data"

const COMPARISON_PUB_DATE = "2026-07-23T00:00:00.000Z"
const GLOSSARY_PUB_DATE = "2026-07-20T00:00:00.000Z"

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
    title: "Toolando.tech — poradniki, porównania i słownik",
    description:
      "Poradniki konwersji plików, porównania formatów i definicje ze słownika Toolando.tech",
    language: "pl",
  },
  en: {
    title: "Toolando.tech — guides, comparisons & glossary",
    description:
      "File conversion guides, format comparisons and glossary terms from Toolando.tech",
    language: "en",
  },
  de: {
    title: "Toolando.tech — Ratgeber, Vergleiche & Glossar",
    description:
      "Konvertierungsratgeber, Formatvergleiche und Glossarbegriffe von Toolando.tech",
    language: "de",
  },
  es: {
    title: "Toolando.tech — guías, comparaciones y glosario",
    description:
      "Guías de conversión, comparaciones de formatos y términos del glosario de Toolando.tech",
    language: "es",
  },
  uk: {
    title: "Toolando.tech — поради, порівняння та словник",
    description:
      "Поради з конвертації файлів, порівняння форматів і терміни словника Toolando.tech",
    language: "uk",
  },
}

function channelCopy(locale?: string) {
  if (locale && CHANNEL_COPY[locale]) return CHANNEL_COPY[locale]
  return {
    title: "Toolando.tech — guides, comparisons & glossary",
    description:
      "File conversion guides, format comparisons and glossary terms from Toolando.tech",
    language: locale || "en",
  }
}

function collectLocaleItems(locale: SupportedLocale): FeedItem[] {
  const items: FeedItem[] = []

  for (const slug of GUIDE_SLUGS) {
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

  for (const slug of COMPARISON_SLUGS) {
    const comparison = getComparison(locale, slug)
    if (!comparison) continue
    items.push({
      title: comparison.title,
      link: `${SITE_URL}/${locale}/porownania/${slug}`,
      description: comparison.description,
      pubDate: new Date(COMPARISON_PUB_DATE).toUTCString(),
      category: "comparison",
      locale,
    })
  }

  for (const slug of GLOSSARY_SLUGS) {
    const term = getGlossaryTerm(locale, slug)
    if (!term) continue
    items.push({
      title: term.term,
      link: `${SITE_URL}/${locale}/slownik/${slug}`,
      description: term.definition,
      pubDate: new Date(GLOSSARY_PUB_DATE).toUTCString(),
      category: "glossary",
      locale,
    })
  }

  return items
}

export function collectFeedItems(locale?: string): FeedItem[] {
  const locales = locale
    ? ([locale] as SupportedLocale[])
    : [...fullyTranslatedLocales]

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
