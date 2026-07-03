import { streamText, convertToModelMessages, type UIMessage } from "ai"
import type { NextRequest } from "next/server"
import { checkPremiumAccess, premiumDeniedResponse } from "@/lib/premium-gate"

export const maxDuration = 60

const MODEL = "openai/gpt-4o-mini"

const SYSTEM =
  "Jesteś pomocnym asystentem AI o nazwie Toolando Assistant. Odpowiadasz zwięźle i rzeczowo, domyślnie po polsku. Pomagasz użytkownikom w codziennych zadaniach, pisaniu, pomysłach i pytaniach technicznych."

export async function POST(req: NextRequest) {
  try {
    const gate = await checkPremiumAccess()
    if (!gate.ok) return premiumDeniedResponse(gate)

    const { messages }: { messages: UIMessage[] } = await req.json()

    const result = streamText({
      model: MODEL,
      system: SYSTEM,
      messages: await convertToModelMessages(messages),
    })

    return result.toUIMessageStreamResponse()
  } catch (err) {
    console.log("[v0] AI chat error:", err instanceof Error ? err.message : err)
    return new Response(
      JSON.stringify({ error: "Wystąpił błąd asystenta." }),
      { status: 500, headers: { "content-type": "application/json" } },
    )
  }
}
