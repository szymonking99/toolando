import { getTool, tools } from "@/lib/tools"
import { getAiTool } from "@/lib/ai-tools"
import { getSpecialTool, specialTools } from "@/lib/special-tools"
import { getUtilityTool } from "@/lib/utility-tools"

/**
 * Toolando is a converter product again: popular + long-tail X→Y pages
 * may appear in search (PL locale only via publisher-index).
 *
 * Format/glossary/comparison hubs stay noindex via robots + page meta.
 * AI/utility calculators stay noindex (thin template risk).
 */

/** Explicit high-intent converters — always indexed when supported. */
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
  "mov-to-mp4",
  "webm-to-mp4",
  "avi-to-mp4",
  "mkv-to-mp4",
  "webp-to-jpg",
  "png-to-webp",
  "gif-to-mp4",
  "mp4-to-gif",
  "wav-to-flac",
  "ogg-to-mp3",
  "m4a-to-mp3",
  "pdf-to-png",
  "jpg-to-pdf",
  "png-to-pdf",
])

export const INDEXABLE_SPECIAL_IDS = new Set([
  "kompresor-obrazow",
  "laczenie-pdf",
  "usun-exif",
  "zmiana-rozmiaru-obrazu",
  "obrot-pdf",
  "podzial-pdf",
  "kompresja-pdf",
  "usuwanie-tla",
])

/**
 * When true, every supported converter (not AI/utility) is indexable.
 * Keep false: mass X→Y templates rarely rank and previously sat in GSC as
 * “discovered / crawled, not indexed”. Prefer the allowlist of high-intent tools.
 */
const INDEX_ALL_SUPPORTED_CONVERTERS = false

export function isIndexableTool(id: string): boolean {
  if (getAiTool(id) || getUtilityTool(id) || getSpecialTool(id)) return false
  const tool = getTool(id)
  if (!tool?.supported) return false
  if (INDEX_ALL_SUPPORTED_CONVERTERS) return true
  return INDEXABLE_TOOL_IDS.has(id)
}

export function isIndexableSpecial(id: string): boolean {
  if (!getSpecialTool(id)) return false
  if (INDEX_ALL_SUPPORTED_CONVERTERS) return true
  return INDEXABLE_SPECIAL_IDS.has(id)
}

/** Converter, special, utility, or AI page that may appear in search. */
export function isPubliclyIndexableTool(id: string): boolean {
  if (getAiTool(id) || getUtilityTool(id)) return false
  if (getSpecialTool(id)) return isIndexableSpecial(id)
  return isIndexableTool(id)
}

/** Helper for sitemap size checks / scripts. */
export function listIndexableToolIds(): string[] {
  const converters = tools.filter((t) => isIndexableTool(t.id)).map((t) => t.id)
  const specials = specialTools
    .filter((t) => isIndexableSpecial(t.id))
    .map((t) => t.id)
  return [...converters, ...specials]
}
