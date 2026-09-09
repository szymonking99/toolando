import { utilityTools } from "@/lib/utility-tools"
import { specialTools } from "@/lib/special-tools"
import { aiTools } from "@/lib/ai-tools"
import { tools } from "@/lib/tools"
import { FORMAT_SYNONYMS } from "@/lib/search-intents"

/** Compact tool catalog for the free search-intent AI prompt. */
export function buildSearchCatalogText(): string {
  const specials = specialTools.map((t) => `${t.id}`).join(", ")
  const utilities = utilityTools.map((t) => `${t.id}`).join(", ")
  const ai = aiTools.map((t) => `${t.id}`).join(", ")
  const formats = [...new Set(Object.values(FORMAT_SYNONYMS))].sort().join(", ")
  const sampleConverters = tools
    .filter((t) => t.supported)
    .slice(0, 40)
    .map((t) => t.id)
    .join(", ")

  return [
    "Named tools (use these exact ids):",
    `opener: otworz`,
    `special: ${specials}`,
    `utility: ${utilities}`,
    `ai (premium): ${ai}`,
    "",
    "Converters use id `{from}-to-{to}` where from/to are one of:",
    formats,
    "",
    `Examples: ${sampleConverters}`,
  ].join("\n")
}

export type AiIntentResult = {
  answer: string
  toolIds: string[]
}

const ALL_KNOWN_IDS = (() => {
  const ids = new Set<string>()
  ids.add("otworz")
  for (const t of specialTools) ids.add(t.id)
  for (const t of utilityTools) ids.add(t.id)
  for (const t of aiTools) ids.add(t.id)
  for (const t of tools) {
    if (t.supported) ids.add(t.id)
  }
  return ids
})()

export function parseAiIntentResponse(raw: string): AiIntentResult | null {
  const text = raw.trim()
  if (!text) return null

  // Prefer fenced or bare JSON object
  const jsonMatch = text.match(/\{[\s\S]*\}/)
  if (!jsonMatch) return null
  try {
    const parsed = JSON.parse(jsonMatch[0]) as {
      answer?: unknown
      toolIds?: unknown
    }
    const answer = typeof parsed.answer === "string" ? parsed.answer.trim() : ""
    const toolIds = Array.isArray(parsed.toolIds)
      ? parsed.toolIds
          .filter((id): id is string => typeof id === "string")
          .map((id) => id.trim().toLowerCase())
          .filter((id) => ALL_KNOWN_IDS.has(id))
          .slice(0, 8)
      : []
    if (!answer && toolIds.length === 0) return null
    return { answer, toolIds }
  } catch {
    return null
  }
}

export function buildIntentSystemPrompt(locale: string): string {
  const lang =
    locale === "pl"
      ? "Polish"
      : locale === "en"
        ? "English"
        : `the user's language (locale code: ${locale}), falling back to English if unsure`

  return [
    "You are Toolando.tech search intent router.",
    "The user describes what they want to do with a file or online tool in natural language.",
    "Pick the best matching tools from the catalog. Prefer free converters/utilities over Premium AI unless they clearly ask for writing, translation, summarization, chat, or image generation.",
    "If conversion is unnecessary (e.g. they only need to open/preview), recommend otworz.",
    "If a requested conversion does not exist, say so briefly and suggest the closest available tools.",
    `Reply with ONLY a JSON object: {"answer":"one short helpful sentence in ${lang}","toolIds":["id1","id2"]}.`,
    "No markdown, no extra keys.",
    "",
    buildSearchCatalogText(),
  ].join("\n")
}
