import type { MetadataRoute } from "next"
import { fullyTranslatedLocales } from "@/lib/i18n/config"
import { ALL_FORMAT_IDS } from "@/lib/i18n/formats"
import { GUIDE_SLUGS } from "@/lib/i18n/guides"
import { COMPARISON_SLUGS } from "@/lib/i18n/comparisons"
import { GLOSSARY_SLUGS } from "@/lib/i18n/glossary"
import { languageAlternates } from "@/lib/seo/alternates"
import { SITE_URL } from "@/lib/seo/structured-data"
import { isIndexableTool } from "@/lib/seo/indexable-tools"
import { categories, tools } from "@/lib/tools"
import { specialTools } from "@/lib/special-tools"
import { utilityTools } from "@/lib/utility-tools"

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
  { path: "/otworz", priority: 0.7, changeFrequency: "weekly" },
  { path: "/poradniki", priority: 0.8, changeFrequency: "monthly" },
  { path: "/formaty", priority: 0.85, changeFrequency: "monthly" },
  { path: "/porownania", priority: 0.8, changeFrequency: "monthly" },
  { path: "/slownik", priority: 0.75, changeFrequency: "monthly" },
  { path: "/jak-to-dziala", priority: 0.6, changeFrequency: "monthly" },
  { path: "/o-mnie", priority: 0.5, changeFrequency: "monthly" },
  { path: "/redakcja", priority: 0.55, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/wsparcie", priority: 0.5, changeFrequency: "monthly" },
  { path: "/kontakt", priority: 0.5, changeFrequency: "monthly" },
  { path: "/regulamin", priority: 0.3, changeFrequency: "yearly" },
  { path: "/polityka-prywatnosci", priority: 0.3, changeFrequency: "yearly" },
]

function languagesFor(path: string): Record<string, string> {
  return languageAlternates(path)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const toolIds = [
    ...tools.filter((t) => isIndexableTool(t.id)).map((t) => t.id),
    ...specialTools.map((t) => t.id),
    ...utilityTools.map((t) => t.id),
  ]

  const entries: MetadataRoute.Sitemap = []
  const now = new Date()

  for (const locale of fullyTranslatedLocales) {
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

    for (const format of ALL_FORMAT_IDS) {
      const path = `/formaty/${format}`
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.55,
        alternates: { languages: languagesFor(path) },
      })
    }

    for (const slug of GUIDE_SLUGS) {
      const path = `/poradniki/${slug}`
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.65,
        alternates: { languages: languagesFor(path) },
      })
    }

    for (const slug of COMPARISON_SLUGS) {
      const path = `/porownania/${slug}`
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: { languages: languagesFor(path) },
      })
    }

    for (const slug of GLOSSARY_SLUGS) {
      const path = `/slownik/${slug}`
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.5,
        alternates: { languages: languagesFor(path) },
      })
    }
  }

  return entries
}
