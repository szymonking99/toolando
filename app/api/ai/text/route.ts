import { streamText } from "ai"
import type { NextRequest } from "next/server"
import { extractTextForAI } from "@/lib/ai-extract"
import { checkPremiumAccess, premiumDeniedResponse } from "@/lib/premium-gate"

export const maxDuration = 60

const MODEL = "openai/gpt-5.4"

type TextTask = "copywriting" | "summarize" | "translate"

const SYSTEM_PROMPTS: Record<TextTask, string> = {
  copywriting:
    "Jesteś światowej klasy copywriterem. Piszesz zwięzłe, przekonujące i naturalne teksty po polsku (chyba że użytkownik poprosi o inny język). Zwracasz wyłącznie gotowy tekst, bez komentarzy i wyjaśnień.",
  summarize:
    "Jesteś ekspertem od streszczeń. Tworzysz klarowne, rzeczowe podsumowania. Zwróć krótkie streszczenie (2-4 zdania), a następnie listę najważniejszych punktów w formie wypunktowania. Odpowiadaj po polsku.",
  translate:
    "Jesteś profesjonalnym tłumaczem. Tłumaczysz tekst wiernie, zachowując ton, styl i formatowanie. Zwracasz wyłącznie przetłumaczony tekst, bez żadnych dodatkowych komentarzy.",
}

export async function POST(req: NextRequest) {
  try {
    const gate = await checkPremiumAccess()
    if (!gate.ok) return premiumDeniedResponse(gate)

    const contentType = req.headers.get("content-type") ?? ""

    let task: TextTask = "copywriting"
    let prompt = ""
    let tone = ""
    let targetLang = ""

    if (contentType.includes("multipart/form-data")) {
      // Summarize flow: a file is uploaded.
      const form = await req.formData()
      task = (form.get("task") as TextTask) ?? "summarize"
      const file = form.get("file") as File | null
      const extra = (form.get("prompt") as string) ?? ""

      if (!file) {
        return new Response(JSON.stringify({ error: "Nie przesłano pliku." }), {
          status: 400,
          headers: { "content-type": "application/json" },
        })
      }
      const buffer = Buffer.from(await file.arrayBuffer())
      const text = await extractTextForAI(buffer, file.name)
      if (!text.trim()) {
        return new Response(
          JSON.stringify({
            error: "Nie udało się odczytać tekstu z tego pliku.",
          }),
          { status: 400, headers: { "content-type": "application/json" } },
        )
      }
      prompt = `${extra ? extra + "\n\n" : ""}Dokument do streszczenia:\n\n${text.slice(0, 24000)}`
    } else {
      const body = await req.json()
      task = body.task ?? "copywriting"
      prompt = body.prompt ?? ""
      tone = body.tone ?? ""
      targetLang = body.targetLang ?? ""
    }

    if (!prompt.trim()) {
      return new Response(JSON.stringify({ error: "Brak treści wejściowej." }), {
        status: 400,
        headers: { "content-type": "application/json" },
      })
    }

    const system = SYSTEM_PROMPTS[task] ?? SYSTEM_PROMPTS.copywriting

    let finalPrompt = prompt
    if (task === "copywriting" && tone) {
      finalPrompt = `Ton wypowiedzi: ${tone}.\n\n${prompt}`
    }
    if (task === "translate" && targetLang) {
      finalPrompt = `Przetłumacz poniższy tekst na język: ${targetLang}.\n\n${prompt}`
    }

    const result = streamText({
      model: MODEL,
      system,
      prompt: finalPrompt,
    })

    return result.toTextStreamResponse()
  } catch (err) {
    console.log("[v0] AI text error:", err instanceof Error ? err.message : err)
    return new Response(
      JSON.stringify({ error: "Wystąpił błąd podczas generowania." }),
      { status: 500, headers: { "content-type": "application/json" } },
    )
  }
}
