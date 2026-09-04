import type { MetadataRoute } from "next"
import { INDEXABLE_GUIDE_SLUGS, INDEXED_LOCALES } from "@/lib/seo/publisher-index"
import { languageAlternates } from "@/lib/seo/alternates"
import { SITE_URL } from "@/lib/seo/structured-data"
import {
  INDEXABLE_SPECIAL_IDS,
  isIndexableTool,
} from "@/lib/seo/indexable-tools"
import { tools } from "@/lib/tools"

/**
 * Small, original surface for crawlers. Format/glossary/comparison templates
 * and extra locales stay out — they were the AdSense “low value content” signal.
 */
/** Trust + editorial only — no thin support/FAQ filler in the crawler list. */
const STATIC_PATHS: {
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
}[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/poradniki", priority: 0.9, changeFrequency: "weekly" },
  { path: "/o-mnie", priority: 0.85, changeFrequency: "monthly" },
  { path: "/redakcja", priority: 0.85, changeFrequency: "monthly" },
  { path: "/jak-to-dziala", priority: 0.75, changeFrequency: "monthly" },
  { path: "/kontakt", priority: 0.6, changeFrequency: "monthly" },
  { path: "/polityka-prywatnosci", priority: 0.4, changeFrequency: "yearly" },
  { path: "/regulamin", priority: 0.3, changeFrequency: "yearly" },
]

function languagesFor(path: string): Record<string, string> {
  return languageAlternates(path)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const toolIds = [
    ...tools.filter((t) => isIndexableTool(t.id)).map((t) => t.id),
    ...INDEXABLE_SPECIAL_IDS,
  ]

  const entries: MetadataRoute.Sitemap = []
  const now = new Date()

  for (const locale of INDEXED_LOCALES) {
    for (const { path, priority, changeFrequency } of STATIC_PATHS) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency,
        priority,
        alternates: { languages: languagesFor(path) },
      })
    }

    for (const id of toolIds) {
      const path = `/tools/${id}`
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.55,
        alternates: { languages: languagesFor(path) },
      })
    }

    for (const slug of INDEXABLE_GUIDE_SLUGS) {
      const path = `/poradniki/${slug}`
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.75,
        alternates: { languages: languagesFor(path) },
      })
    }
  }

  return entries
}
