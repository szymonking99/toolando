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

/**
 * Locales advertised to search engines.
 * PL = original writing; EN = flagship + tools for the largest query market.
 * Other locales stay reachable but noindex.
 */
export const INDEXED_LOCALES: readonly SupportedLocale[] = [
  defaultLocale,
  "en",
]

/**
 * Long-form guides with first-hand notes — the pages a reviewer should
 * actually read. Keep this list curated; unlock guides that already have
 * real body copy (not stubs).
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
  // High-intent unlocks (existing long-form articles)
  "png-vs-jpg-photos-and-graphics",
  "webp-avif-images",
  "svg-vs-png-logos-and-icons",
  "gif-vs-mp4-for-animations",
  "merge-pdf-online-guide",
  "pdf-vs-docx",
  "podcast-export-mp3-aac-settings",
  "split-pdf-pages-guide",
  "video-compress-before-sharing",
  "extract-images-from-pdf-pages",
  "pdf-to-jpg",
  "video-social-media",
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
