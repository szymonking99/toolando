/**
 * What Google (and AdSense reviewers following the sitemap) should treat
 * as the site.
 *
 * Converter farms fail “low value content” when hundreds of template pages
 * (format stubs, glossary, locale copies) outnumber original writing.
 * Tools and hubs stay usable; they are simply not advertised to crawlers.
 */

import { defaultLocale, type SupportedLocale } from "@/lib/i18n/config"
import type { GuideSlug } from "@/lib/i18n/guides/slugs"

/** Only Polish originals go into the index. Translations stay noindex. */
export const INDEXED_LOCALES: readonly SupportedLocale[] = [defaultLocale]

/**
 * Long-form guides with first-hand notes — the pages a reviewer should
 * actually read. Everything else in /poradniki stays reachable but noindex.
 */
export const INDEXABLE_GUIDE_SLUGS = new Set<GuideSlug>([
  "when-not-to-convert-files",
  "online-file-security",
  "heic-iphone-jpg",
  "mp3-vs-wav",
  "lossy-vs-lossless",
  "compress-images-without-quality-loss",
  "docx-pdf-workflow",
  "extract-audio-from-video",
  "remove-exif-privacy-guide",
  "prepare-images-for-web",
  "flac-music-archive-guide",
  "toolando-editorial-standards",
])

export function isIndexedLocale(locale: string): boolean {
  return (INDEXED_LOCALES as readonly string[]).includes(locale)
}

export function isIndexableGuide(locale: string, slug: string): boolean {
  return isIndexedLocale(locale) && INDEXABLE_GUIDE_SLUGS.has(slug as GuideSlug)
}

export function noindexRobots(): { index: false; follow: true } {
  return { index: false, follow: true }
}
