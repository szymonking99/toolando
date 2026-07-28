import type { Locale } from "./config"

/**
 * Prefix an internal path with the active locale.
 *
 * - Absolute internal paths (`/tools`) become `/{locale}/tools`.
 * - The home path (`/`) becomes `/{locale}`.
 * - Anchors (`#ai`), external URLs, `mailto:` and `tel:` links are returned as-is.
 */
export function localeHref(locale: Locale, href: string): string {
  if (!href.startsWith("/")) return href
  // Home anchors: /#ai → /pl#ai
  if (href.startsWith("/#")) return `/${locale}${href.slice(1)}`
  if (href === "/") return `/${locale}`
  return `/${locale}${href}`
}
