import { getTool } from "@/lib/tools"
import { getAiTool } from "@/lib/ai-tools"
import { getSpecialTool } from "@/lib/special-tools"
import { getUtilityTool } from "@/lib/utility-tools"

/**
 * Pages Google may index. The live catalog has 250+ converter URLs plus
 * calculators — indexing all of them looks like doorway / template pages to
 * AdSense and Search Quality.
 *
 * Only flagship conversions (backed by unique guides) and a few special tools
 * with original notes stay indexable. Everything else remains usable with noindex.
 */
export const INDEXABLE_TOOL_IDS = new Set([
  "mp3-to-wav",
  "wav-to-mp3",
  "flac-to-mp3",
  "mp4-to-mp3",
  "mp4-to-webm",
  "png-to-jpg",
  "jpg-to-png",
  "jpg-to-webp",
  "heic-to-jpg",
  "pdf-to-jpg",
  "pdf-to-docx",
  "docx-to-pdf",
  "svg-to-png",
])

export const INDEXABLE_SPECIAL_IDS = new Set([
  "kompresor-obrazow",
  "laczenie-pdf",
  "usun-exif",
])

export function isIndexableTool(id: string): boolean {
  if (getAiTool(id) || getUtilityTool(id) || getSpecialTool(id)) return false
  const tool = getTool(id)
  if (!tool?.supported) return false
  return INDEXABLE_TOOL_IDS.has(id)
}

export function isIndexableSpecial(id: string): boolean {
  return INDEXABLE_SPECIAL_IDS.has(id) && Boolean(getSpecialTool(id))
}

/** Converter, special, utility, or AI page that may appear in search. */
export function isPubliclyIndexableTool(id: string): boolean {
  if (getAiTool(id) || getUtilityTool(id)) return false
  if (getSpecialTool(id)) return isIndexableSpecial(id)
  return isIndexableTool(id)
}
