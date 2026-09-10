import { getTool, tools } from "@/lib/tools"
import { getAiTool } from "@/lib/ai-tools"
import { getSpecialTool, specialTools } from "@/lib/special-tools"
import { getUtilityTool, utilityTools } from "@/lib/utility-tools"

/**
 * Toolando is a converter product again: popular + long-tail X→Y pages
 * may appear in search (indexed locales via publisher-index).
 *
 * Format/glossary/comparison hubs stay noindex via robots + page meta.
 * Most AI/utility calculators stay noindex (thin template risk) except a
 * small allowlist of high-intent utilities.
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
  "heic-to-png",
  "heic-to-webp",
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
  "jpg-to-avif",
  "png-to-avif",
  "gif-to-mp4",
  "mp4-to-gif",
  "wav-to-flac",
  "ogg-to-mp3",
  "m4a-to-mp3",
  "pdf-to-png",
  "csv-to-json",
  "json-to-csv",
  "md-to-html",
  "html-to-md",
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
  "pdf-do-tekstu",
  "numeracja-pdf",
  "kompresja-wideo",
  "znak-wodny",
  "naprawa-plikow",
  "zdjecia-do-pdf",
])

/** High-intent utilities that deserve their own SERP entry. */
export const INDEXABLE_UTILITY_IDS = new Set([
  "inspektor-prywatnosci",
  "generator-hasel",
  "generator-hash",
  "kalkulator-vat",
  "json-formatter",
  "dekoder-jwt",
  "base64",
  "url-encoder",
  "csv-json",
  "generator-favicon",
  "kalkulator-rozmiaru-pliku",
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

export function isIndexableUtility(id: string): boolean {
  if (!getUtilityTool(id)) return false
  return INDEXABLE_UTILITY_IDS.has(id)
}

/** Converter, special, utility, or AI page that may appear in search. */
export function isPubliclyIndexableTool(id: string): boolean {
  if (getAiTool(id)) return false
  if (getUtilityTool(id)) return isIndexableUtility(id)
  if (getSpecialTool(id)) return isIndexableSpecial(id)
  return isIndexableTool(id)
}

/** Helper for sitemap size checks / scripts. */
export function listIndexableToolIds(): string[] {
  const converters = tools.filter((t) => isIndexableTool(t.id)).map((t) => t.id)
  const specials = specialTools
    .filter((t) => isIndexableSpecial(t.id))
    .map((t) => t.id)
  const utilities = utilityTools
    .filter((t) => isIndexableUtility(t.id))
    .map((t) => t.id)
  return [...converters, ...specials, ...utilities]
}
