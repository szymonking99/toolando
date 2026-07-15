import type { MetadataRoute } from "next"
import { supportedLocales } from "@/lib/i18n/config"
import { categories, tools } from "@/lib/tools"
import { specialTools } from "@/lib/special-tools"
import { aiTools } from "@/lib/ai-tools"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://toolando.tech"

/**
 * Static (non-parameterized) paths that exist for every locale, with a search
 * priority and change frequency hint. Higher priority = more important to crawl.
 */
const STATIC_PATHS: {
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
}[] = [
  { path: "", priority: 1, changeFrequency: "daily" },
  { path: "/tools", priority: 0.9, changeFrequency: "weekly" },
  { path: "/downloader", priority: 0.8, changeFrequency: "weekly" },
  { path: "/otworz", priority: 0.7, changeFrequency: "weekly" },
  { path: "/jak-to-dziala", priority: 0.6, changeFrequency: "monthly" },
  { path: "/o-mnie", priority: 0.5, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/wsparcie", priority: 0.5, changeFrequency: "monthly" },
  { path: "/kontakt", priority: 0.5, changeFrequency: "monthly" },
  { path: "/regulamin", priority: 0.3, changeFrequency: "yearly" },
  { path: "/polityka-prywatnosci", priority: 0.3, changeFrequency: "yearly" },
]

/** Build the hreflang alternates map for a given path (shared across locales). */
function languagesFor(path: string): Record<string, string> {
  return Object.fromEntries(
    supportedLocales.map((l) => [l, `${SITE_URL}/${l}${path}`]),
  )
}

export default function sitemap(): MetadataRoute.Sitemap {
  const toolIds = [
    ...tools.map((t) => t.id),
    ...specialTools.map((t) => t.id),
    ...aiTools.map((t) => t.id),
  ]

  const entries: MetadataRoute.Sitemap = []
  const now = new Date()

  for (const locale of supportedLocales) {
    for (const { path, priority, changeFrequency } of STATIC_PATHS) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency,
        priority,
        alternates: { languages: languagesFor(path) },
      })
    }

    for (const category of categories) {
      const path = `/category/${category.slug}`
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: "weekly",
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
        priority: 0.6,
        alternates: { languages: languagesFor(path) },
      })
    }
  }

  return entries
}
