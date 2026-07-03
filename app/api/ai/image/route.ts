import { generateImage, gateway } from "ai"
import type { NextRequest } from "next/server"
import { checkPremiumAccess, premiumDeniedResponse } from "@/lib/premium-gate"

export const maxDuration = 60

const MODEL = "openai/gpt-image-1"

export async function POST(req: NextRequest) {
  try {
    const gate = await checkPremiumAccess()
    if (!gate.ok) return premiumDeniedResponse(gate)

    const { prompt, aspectRatio } = await req.json()

    if (!prompt || typeof prompt !== "string" || !prompt.trim()) {
      return Response.json({ error: "Opisz, co chcesz wygenerować." }, {
        status: 400,
      })
    }

    const size =
      aspectRatio === "portrait"
        ? "1024x1536"
        : aspectRatio === "landscape"
          ? "1536x1024"
          : "1024x1024"

    const { image } = await generateImage({
      model: gateway.imageModel(MODEL),
      prompt: prompt.slice(0, 4000),
      size: size as `${number}x${number}`,
    })

    return Response.json({
      image: `data:${image.mediaType};base64,${image.base64}`,
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.log("[v0] AI image error:", message)

    // Model obrazu wymaga płatnych kredytów AI Gateway (brak w darmowym planie).
    if (/free tier|paid credits|insufficient|quota|billing/i.test(message)) {
      return Response.json(
        {
          error:
            "Generator obrazów jest tymczasowo niedostępny — wymaga doładowania kredytów AI. Pozostałe narzędzia AI działają normalnie.",
        },
        { status: 503 },
      )
    }

    return Response.json(
      { error: "Nie udało się wygenerować obrazu. Spróbuj ponownie." },
      { status: 500 },
    )
  }
}
