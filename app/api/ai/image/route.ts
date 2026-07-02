import { generateImage, gateway } from "ai"
import type { NextRequest } from "next/server"

export const maxDuration = 60

const MODEL = "openai/gpt-image-1"

export async function POST(req: NextRequest) {
  try {
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
    console.log("[v0] AI image error:", err instanceof Error ? err.message : err)
    return Response.json(
      { error: "Nie udało się wygenerować obrazu. Spróbuj ponownie." },
      { status: 500 },
    )
  }
}
