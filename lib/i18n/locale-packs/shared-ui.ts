import type { LocalePack } from "./merge"

/** Shared pages + UI keys used by every locale pack builder. */
export type SharedUiKeys = Pick<
  LocalePack,
  | "nav"
  | "hero"
  | "search"
  | "feedback"
  | "recommender"
  | "toolsIndex"
  | "knowledgeHub"
  | "footer"
  | "tool"
  | "cookieConsent"
  | "support"
  | "ad"
>

export function uiPack(p: Partial<SharedUiKeys>): LocalePack {
  return p as unknown as LocalePack
}
