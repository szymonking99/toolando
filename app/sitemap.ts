import type { MetadataRoute } from "next"
import { INDEXABLE_GUIDE_SLUGS, INDEXED_LOCALES } from "@/lib/seo/publisher-index"
import { languageAlternates } from "@/lib/seo/alternates"
import { SITE_URL } from "@/lib/seo/structured-data"
import { listIndexableToolIds } from "@/lib/seo/indexable-tools"
import { AUDIENCE_IDS } from "@/lib/audiences"
import { PROBLEM_INTENT_IDS } from "@/lib/problem-intents"

/**
 * Product-first sitemap: indexed locales + high-intent tools + flagship guides
 * + discovery surfaces (/otworz, /dla/*). Thin format/glossary hubs stay out.
 */
const STATIC_PATHS: {
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
}[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/tools", priority: 0.95, changeFrequency: "weekly" },
  { path: "/otworz", priority: 0.95, changeFrequency: "weekly" },
  { path: "/poradniki", priority: 0.8, changeFrequency: "weekly" },
  { path: "/o-mnie", priority: 0.55, changeFrequency: "monthly" },
  { path: "/jak-to-dziala", priority: 0.6, changeFrequency: "monthly" },
  { path: "/redakcja", priority: 0.5, changeFrequency: "monthly" },
  { path: "/prywatnosc", priority: 0.55, changeFrequency: "monthly" },
  { path: "/kontakt", priority: 0.4, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.45, changeFrequency: "monthly" },
  { path: "/wsparcie", priority: 0.35, changeFrequency: "monthly" },
  { path: "/regulamin", priority: 0.2, changeFrequency: "yearly" },
  { path: "/polityka-prywatnosci", priority: 0.25, changeFrequency: "yearly" },
]

function languagesFor(path: string): Record<string, string> {
  return languageAlternates(path)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const toolIds = listIndexableToolIds()
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

    for (const id of AUDIENCE_IDS) {
      const path = `/dla/${id}`
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.65,
        alternates: { languages: languagesFor(path) },
      })
    }

    for (const id of PROBLEM_INTENT_IDS) {
      const path = `/zrob/${id}`
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: { languages: languagesFor(path) },
      })
    }

    for (const id of toolIds) {
      const path = `/tools/${id}`
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.75,
        alternates: { languages: languagesFor(path) },
      })
    }

    for (const slug of INDEXABLE_GUIDE_SLUGS) {
      const path = `/poradniki/${slug}`
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: { languages: languagesFor(path) },
      })
    }
  }

  return entries
}
