import { ALL_FORMAT_IDS, getFormatMeta } from "./format-meta"
import { buildFormatProfile } from "./profile-builder"
import { getFormatsHubMeta } from "./hubs"
import type { FormatProfile, FormatsHubMeta } from "./types"

export { ALL_FORMAT_IDS, getFormatMeta, getFormatsHubMeta }
export type { FormatProfile, FormatsHubMeta, FormatCategory } from "./types"

export function getFormatProfile(
  locale: string,
  id: string,
): FormatProfile | undefined {
  return buildFormatProfile(locale, id)
}

export function getAllFormatProfiles(locale: string): FormatProfile[] {
  return ALL_FORMAT_IDS.map((id) => buildFormatProfile(locale, id)).filter(
    (p): p is FormatProfile => p !== undefined,
  )
}

export function getFormatsByCategory(
  locale: string,
  category: string,
): FormatProfile[] {
  return getAllFormatProfiles(locale).filter((p) => p.category === category)
}
