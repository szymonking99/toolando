import { generateText } from "ai"
import type { NextRequest } from "next/server"
import {
  buildIntentSystemPrompt,
  parseAiIntentResponse,
} from "@/lib/search-ai"

export const maxDuration = 20

const MODEL = "openai/gpt-4o-mini"

/** Simple sliding-window rate limit (per IP, in-memory). */
const hits = new Map<string, number[]>()
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 20

function clientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  )
}

function allow(ip: string): boolean {
  const now = Date.now()
  const prev = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  if (prev.length >= MAX_PER_WINDOW) {
    hits.set(ip, prev)
    return false
  }
  prev.push(now)
  hits.set(ip, prev)
  return true
}

export async function POST(req: NextRequest) {
  try {
    if (!allow(clientIp(req))) {
      return Response.json(
        { error: "Too many requests", answer: null, toolIds: [] },
        { status: 429 },
      )
    }

    if (!process.env.AI_GATEWAY_API_KEY) {
      return Response.json({
        answer: null,
        toolIds: [],
        unavailable: true,
      })
    }

    const body = (await req.json().catch(() => ({}))) as {
      query?: unknown
      locale?: unknown
    }
    const query = typeof body.query === "string" ? body.query.trim() : ""
    const locale =
      typeof body.locale === "string" && body.locale.length <= 12
        ? body.locale
        : "pl"

    if (query.length < 4 || query.length > 280) {
      return Response.json(
        { error: "Invalid query", answer: null, toolIds: [] },
        { status: 400 },
      )
    }

    const result = await generateText({
      model: MODEL,
      system: buildIntentSystemPrompt(locale),
      prompt: query,
      temperature: 0.2,
      maxOutputTokens: 220,
    })

    const parsed = parseAiIntentResponse(result.text)
    if (!parsed) {
      return Response.json({ answer: null, toolIds: [] })
    }

    return Response.json({
      answer: parsed.answer,
      toolIds: parsed.toolIds,
    })
  } catch (err) {
    console.log(
      "[v0] search intent error:",
      err instanceof Error ? err.message : err,
    )
    return Response.json(
      { error: "Intent lookup failed", answer: null, toolIds: [] },
      { status: 500 },
    )
  }
}
