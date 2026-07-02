import type { MetadataRoute } from "next"
import { supportedLocales } from "@/lib/i18n/config"
import { categories, tools } from "@/lib/tools"
import { specialTools } from "@/lib/special-tools"
import { aiTools } from "@/lib/ai-tools"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://toolando.com"

/** Static (non-parameterized) paths that exist for every locale. */
const STATIC_PATHS = [
  "",
  "/tools",
  "/otworz",
  "/wsparcie",
  "/kontakt",
  "/regulamin",
  "/polityka-prywatnosci",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const toolIds = [
    ...tools.map((t) => t.id),
    ...specialTools.map((t) => t.id),
    ...aiTools.map((t) => t.id),
  ]

  const entries: MetadataRoute.Sitemap = []

  for (const locale of supportedLocales) {
    for (const path of STATIC_PATHS) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: new Date(),
        alternates: {
          languages: Object.fromEntries(
            supportedLocales.map((l) => [l, `${SITE_URL}/${l}${path}`]),
          ),
        },
      })
    }

    for (const category of categories) {
      entries.push({ url: `${SITE_URL}/${locale}/category/${category.slug}` })
    }

    for (const id of toolIds) {
      entries.push({ url: `${SITE_URL}/${locale}/tools/${id}` })
    }
  }

  return entries
}
