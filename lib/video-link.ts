/**
 * Client- and server-safe helpers for the "Video link → MP3" tool.
 *
 * IMPORTANT — legal / safety boundary:
 * This module NEVER downloads media and NEVER calls any private or
 * ToS-violating API. It only parses a public URL to detect the platform and
 * extract the public video/track ID, and derives a PUBLIC thumbnail URL where
 * one is openly available (currently only YouTube's public image CDN). The
 * actual audio extraction is expected to happen on an external service or in
 * the user's browser — Toolando.tech only captures the id + public metadata.
 */

export type Platform =
  | "youtube"
  | "tiktok"
  | "instagram"
  | "facebook"
  | "twitter"
  | "vimeo"
  | "soundcloud"

export const PLATFORMS: Platform[] = [
  "youtube",
  "tiktok",
  "instagram",
  "facebook",
  "twitter",
  "vimeo",
  "soundcloud",
]

/** Human-facing display name for each platform. */
export const PLATFORM_LABELS: Record<Platform, string> = {
  youtube: "YouTube",
  tiktok: "TikTok",
  instagram: "Instagram",
  facebook: "Facebook",
  twitter: "Twitter / X",
  vimeo: "Vimeo",
  soundcloud: "SoundCloud",
}

/** Brand accent color (hex) per platform, used for the placeholder badge. */
export const PLATFORM_COLORS: Record<Platform, string> = {
  youtube: "#ff0000",
  tiktok: "#25f4ee",
  instagram: "#e1306c",
  facebook: "#1877f2",
  twitter: "#1d9bf0",
  vimeo: "#19b7ea",
  soundcloud: "#ff5500",
}

export interface DetectedLink {
  platform: Platform
  /** The public id (video id, status id, or track slug). */
  id: string
  /** Public thumbnail URL if one is openly available, otherwise null. */
  thumbnail: string | null
  /** Canonical public URL back to the original source. */
  sourceUrl: string
}

/** Strip surrounding whitespace and a leading `@` some users paste. */
function clean(raw: string): string {
  return raw.trim().replace(/^@/, "")
}

/**
 * Detect the platform and extract the public id from a pasted URL.
 * Returns `null` when the URL is empty or from an unsupported source.
 */
export function detectVideoLink(raw: string): DetectedLink | null {
  const input = clean(raw)
  if (!input) return null

  let url: URL
  try {
    url = new URL(input.includes("://") ? input : `https://${input}`)
  } catch {
    return null
  }

  const host = url.hostname.replace(/^www\./, "").toLowerCase()
  const path = url.pathname
  const q = url.searchParams

  // ---------------------------------------------------------------- YouTube
  if (host === "youtu.be") {
    const id = path.split("/").filter(Boolean)[0]
    if (id) return youtube(id)
  }
  if (host.endsWith("youtube.com") || host.endsWith("youtube-nocookie.com")) {
    const v = q.get("v")
    if (v) return youtube(v)
    const m = path.match(/\/(shorts|embed|v|live)\/([^/?#]+)/)
    if (m) return youtube(m[2])
  }

  // ----------------------------------------------------------------- TikTok
  if (host.endsWith("tiktok.com")) {
    const m = path.match(/\/video\/(\d+)/)
    if (m) return build("tiktok", m[1], url.href)
    // Short share links like vm.tiktok.com/XXXX or /t/XXXX
    const short = path.match(/\/(?:t\/)?([A-Za-z0-9]+)\/?$/)
    if (short) return build("tiktok", short[1], url.href)
  }

  // -------------------------------------------------------------- Instagram
  if (host.endsWith("instagram.com")) {
    const m = path.match(/\/(?:reel|reels|p|tv)\/([^/?#]+)/)
    if (m) return build("instagram", m[1], url.href)
  }

  // --------------------------------------------------------------- Facebook
  if (host.endsWith("facebook.com") || host === "fb.watch") {
    const v = q.get("v")
    if (v) return build("facebook", v, url.href)
    const m = path.match(/\/videos\/(?:[^/]+\/)?(\d+)/)
    if (m) return build("facebook", m[1], url.href)
    const reel = path.match(/\/reel\/(\d+)/)
    if (reel) return build("facebook", reel[1], url.href)
    if (host === "fb.watch") {
      const short = path.split("/").filter(Boolean)[0]
      if (short) return build("facebook", short, url.href)
    }
  }

  // ------------------------------------------------------------- Twitter / X
  if (host.endsWith("twitter.com") || host.endsWith("x.com")) {
    const m = path.match(/\/status\/(\d+)/)
    if (m) return build("twitter", m[1], url.href)
  }

  // ------------------------------------------------------------------- Vimeo
  if (host.endsWith("vimeo.com")) {
    const m = path.match(/\/(\d+)/)
    if (m) {
      const link = build("vimeo", m[1], url.href)
      // vumbnail.com is a public, no-auth thumbnail proxy for Vimeo.
      link.thumbnail = `https://vumbnail.com/${m[1]}.jpg`
      return link
    }
  }

  // -------------------------------------------------------------- SoundCloud
  if (host.endsWith("soundcloud.com")) {
    const slug = path.split("/").filter(Boolean).join("/")
    if (slug) return build("soundcloud", slug, url.href)
  }

  return null
}

function youtube(id: string): DetectedLink {
  return {
    platform: "youtube",
    id,
    // img.youtube.com is YouTube's public thumbnail CDN — no API key, no auth.
    thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    sourceUrl: `https://www.youtube.com/watch?v=${id}`,
  }
}

function build(platform: Platform, id: string, sourceUrl: string): DetectedLink {
  return { platform, id, thumbnail: null, sourceUrl }
}

/**
 * Platforms that are temporarily disabled for downloading.
 *
 * YouTube actively blocks downloaders and even the public cobalt.tools instance
 * has turned off YouTube. Until we run our own converter instance, YouTube is
 * detected (so we can show an honest notice) but not offered for download.
 *
 * Re-enabling later is a one-line switch: set the env var
 * NEXT_PUBLIC_YOUTUBE_DOWNLOAD_ENABLED="true" once a self-hosted API is ready.
 */
const YOUTUBE_ENABLED =
  process.env.NEXT_PUBLIC_YOUTUBE_DOWNLOAD_ENABLED === "true"

/** Whether a detected platform can currently be downloaded. */
export function isPlatformEnabled(platform: Platform): boolean {
  if (platform === "youtube") return YOUTUBE_ENABLED
  return true
}

/** Platforms shown in the UI as currently supported (excludes disabled ones). */
export const SUPPORTED_PLATFORMS: Platform[] =
  PLATFORMS.filter(isPlatformEnabled)

/** True when the given string is one of our supported platforms. */
export function isPlatform(value: string): value is Platform {
  return (PLATFORMS as string[]).includes(value)
}

/**
 * Build the external converter URL that actually performs the download.
 * Toolando.tech never downloads media itself — it hands the original public
 * link off to cobalt.tools (open-source, ad-free, cross-platform). The `#<url>`
 * hash prefills cobalt's input and starts the download automatically.
 *
 * Passing the *original* pasted URL (rather than one reconstructed from an id)
 * matters: some platforms (e.g. TikTok) need the full canonical link.
 */
export function buildConverterUrl(originalUrl: string): string {
  const template =
    process.env.NEXT_PUBLIC_DOWNLOADER_ENDPOINT ?? "https://cobalt.tools/#{url}"
  return template.replace("{url}", originalUrl.trim())
}

/**
 * Rebuild the public thumbnail + source URL from a stored `platform` + `id`
 * pair (used by the results page). Only derives values that are publicly
 * available without any API call.
 */
export function rebuildFromParts(platform: Platform, id: string): DetectedLink {
  switch (platform) {
    case "youtube":
      return youtube(id)
    case "vimeo":
      return {
        platform,
        id,
        thumbnail: `https://vumbnail.com/${id}.jpg`,
        sourceUrl: `https://vimeo.com/${id}`,
      }
    case "tiktok":
      return build("tiktok", id, `https://www.tiktok.com/video/${id}`)
    case "instagram":
      return build("instagram", id, `https://www.instagram.com/reel/${id}/`)
    case "facebook":
      return build("facebook", id, `https://www.facebook.com/watch/?v=${id}`)
    case "twitter":
      return build("twitter", id, `https://x.com/i/status/${id}`)
    case "soundcloud":
      return build("soundcloud", id, `https://soundcloud.com/${id}`)
    default:
      return build(platform, id, "")
  }
}
