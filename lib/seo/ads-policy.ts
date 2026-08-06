/**
 * AdSense visibility policy — tuned for publisher network approval.
 *
 * REVIEW_MODE=true  → zero ad scripts/units (use during AdSense re-review)
 * MINIMAL (default) → homepage only — avoids "made for ads" signals
 * FULL              → all slots (set NEXT_PUBLIC_ADSENSE_FULL=true after approval)
 */

export type AdPlacement = "home" | "tools-index" | "tool" | "footer"

export function isAdSenseReviewMode(): boolean {
  return process.env.NEXT_PUBLIC_ADSENSE_REVIEW_MODE === "true"
}

export function isAdSenseFullMode(): boolean {
  return process.env.NEXT_PUBLIC_ADSENSE_FULL === "true"
}

/** May load the AdSense library at all. */
export function adSenseScriptsEnabled(): boolean {
  return !isAdSenseReviewMode()
}

/** Load AdSense script only where a unit may actually render. */
export function adSenseScriptsEnabledForPath(pathname: string): boolean {
  if (!adSenseScriptsEnabled()) return false

  const segments = pathname.split("/").filter(Boolean)
  const page = segments[1]

  if (page === "downloader") return false

  if (isAdSenseFullMode()) return true

  // Minimal (default): homepage only — /{locale}
  return segments.length === 1
}

/** May render an ad unit in a given placement. */
export function adSlotEnabled(
  placement: AdPlacement,
): boolean {
  if (isAdSenseReviewMode()) return false
  if (isAdSenseFullMode()) return true
  // Minimal (default): single placement on homepage only
  return placement === "home"
}
