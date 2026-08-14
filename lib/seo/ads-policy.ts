/**
 * Ad visibility policy — AdSense, Ezoic, or none.
 *
 * NEXT_PUBLIC_AD_NETWORK=ezoic|adsense|none
 * ADS_REVIEW_MODE=true → zero ad scripts/units (during network review)
 * MINIMAL (default)    → homepage placements only
 * ADS_FULL=true        → all placements
 */

export type AdPlacement = "home" | "tools-index" | "tool" | "footer"
export type AdNetwork = "none" | "adsense" | "ezoic"

export function isAdReviewMode(): boolean {
  return (
    process.env.NEXT_PUBLIC_ADS_REVIEW_MODE === "true" ||
    process.env.NEXT_PUBLIC_ADSENSE_REVIEW_MODE === "true"
  )
}

/** @deprecated Use isAdReviewMode */
export function isAdSenseReviewMode(): boolean {
  return isAdReviewMode()
}

export function isAdsFullMode(): boolean {
  return (
    process.env.NEXT_PUBLIC_ADS_FULL === "true" ||
    process.env.NEXT_PUBLIC_ADSENSE_FULL === "true"
  )
}

/** @deprecated Use isAdsFullMode */
export function isAdSenseFullMode(): boolean {
  return isAdsFullMode()
}

export function getAdNetwork(): AdNetwork {
  if (isAdReviewMode()) return "none"
  const network = process.env.NEXT_PUBLIC_AD_NETWORK?.toLowerCase()
  if (network === "ezoic") return "ezoic"
  if (network === "none") return "none"
  if (network === "adsense") return "adsense"
  // Legacy default: AdSense until Ezoic is configured in env
  return "adsense"
}

/** May load any ad network library. */
export function adScriptsEnabled(): boolean {
  return getAdNetwork() !== "none"
}

/** Load ad scripts only where a unit may render on this path. */
export function adScriptsEnabledForPath(pathname: string): boolean {
  if (!adScriptsEnabled()) return false

  const segments = pathname.split("/").filter(Boolean)
  const page = segments[1]

  if (page === "downloader") return false

  if (isAdsFullMode()) return true

  // Minimal (default): homepage only — /{locale}
  return segments.length === 1
}

/** @deprecated Use adScriptsEnabledForPath */
export function adSenseScriptsEnabled(): boolean {
  return adScriptsEnabled()
}

/** @deprecated Use adScriptsEnabledForPath */
export function adSenseScriptsEnabledForPath(pathname: string): boolean {
  return adScriptsEnabledForPath(pathname)
}

/** May render an ad unit in a given placement. */
export function adSlotEnabled(placement: AdPlacement): boolean {
  if (getAdNetwork() === "none") return false
  if (isAdsFullMode()) return true
  return placement === "home"
}

/**
 * Video-link downloader (TikTok/IG → MP3). Off during ad review and by default
 * when AdSense is the active network — policy risk for AdSense approval.
 * Set NEXT_PUBLIC_DOWNLOADER_ENABLED=true to override after acceptance.
 */
export function isDownloaderEnabled(): boolean {
  const override = process.env.NEXT_PUBLIC_DOWNLOADER_ENABLED
  if (override === "true") return true
  if (override === "false") return false
  if (isAdReviewMode()) return false
  const network = process.env.NEXT_PUBLIC_AD_NETWORK?.toLowerCase()
  if (!network || network === "adsense") return false
  return true
}

/** ads.txt body for Google AdSense only (no Ezoic lines). */
export function adsenseAdsTxt(): string {
  return `# toolando.tech — Google AdSense
google.com, pub-1137300798632743, DIRECT, f08c47fec0942fa0
`
}

/** Use Ezoic-managed ads.txt (includes Google + Ezoic sellers). */
export function useEzoicAdsTxt(): boolean {
  if (isAdReviewMode()) return false
  return process.env.NEXT_PUBLIC_AD_NETWORK?.toLowerCase() === "ezoic"
}

/** Load Ezoic scripts/placements (off during any ad-network review). */
export function isEzoicActive(): boolean {
  if (isAdReviewMode()) return false
  return process.env.NEXT_PUBLIC_AD_NETWORK?.toLowerCase() === "ezoic"
}

/** AdSense site-verification meta tag in <head>. */
export function showAdSenseVerificationMeta(): boolean {
  if (isAdReviewMode()) return true
  return process.env.NEXT_PUBLIC_AD_NETWORK?.toLowerCase() !== "ezoic"
}
