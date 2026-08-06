import type { AdPlacement } from "@/lib/seo/ads-policy"

const PLACEMENT_ENV: Record<AdPlacement, string | undefined> = {
  home: process.env.NEXT_PUBLIC_EZOIC_PLACEMENT_HOME,
  "tools-index": process.env.NEXT_PUBLIC_EZOIC_PLACEMENT_TOOLS,
  tool: process.env.NEXT_PUBLIC_EZOIC_PLACEMENT_TOOL,
  footer: process.env.NEXT_PUBLIC_EZOIC_PLACEMENT_FOOTER,
}

/** Numeric Ezoic placeholder ID from the dashboard (e.g. 101). */
export function getEzoicPlacementId(placement: AdPlacement): number | null {
  const raw = PLACEMENT_ENV[placement]
  if (!raw) return null
  const id = Number.parseInt(raw, 10)
  return Number.isFinite(id) ? id : null
}
