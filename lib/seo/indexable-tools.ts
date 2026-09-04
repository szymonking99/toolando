import { getTool } from "@/lib/tools"
import { getAiTool } from "@/lib/ai-tools"
import { getSpecialTool } from "@/lib/special-tools"
import { getUtilityTool } from "@/lib/utility-tools"

/**
 * Pages Google may index. The live catalog has 250+ converter URLs —
 * indexing even a shortlist still reads as doorway / template pages to
 * AdSense (“low value content”).
 *
 * During publisher review: index ZERO tool URLs. Tools stay fully usable
 * with noindex; crawlers are pointed at long-form PL guides instead.
 * Re-enable a tiny allowlist only after AdSense approval.
 */
export const INDEXABLE_TOOL_IDS = new Set<string>([])

export const INDEXABLE_SPECIAL_IDS = new Set<string>([])

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
