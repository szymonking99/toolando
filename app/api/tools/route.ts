import { NextRequest } from "next/server"
import { getSpecialTool } from "@/lib/special-tools"
import { ConversionError } from "@/lib/convert"
import { readIntake } from "@/lib/upload-intake"
import {
  compressImage,
  mergePdfs,
  removeImageBackground,
  type SpecialResult,
} from "@/lib/special-convert"

export const runtime = "nodejs"
export const maxDuration = 300

// 500 MB per-file ceiling (large files arrive via Vercel Blob).
const MAX_BYTES = 500 * 1024 * 1024

export async function POST(req: NextRequest) {
  const id = new URL(req.url).searchParams.get("id")
  const tool = getSpecialTool(id ?? "")

  if (!tool) {
    return json({ error: "Nieznane narzędzie." }, 404)
  }

  let cleanup: (() => Promise<void>) | null = null

  try {
    const intake = await readIntake(req)
    cleanup = intake.cleanup

    const files = intake.files
    if (files.length === 0) {
      return json({ error: "Nie przesłano pliku." }, 400)
    }

    for (const file of files) {
      if (file.buffer.length === 0) {
        return json({ error: "Jeden z plików jest pusty." }, 400)
      }
      if (file.buffer.length > MAX_BYTES) {
        return json({ error: "Plik jest za duży (limit 500 MB)." }, 413)
      }
    }

    let result: SpecialResult

    switch (tool.engine) {
      case "compress-image": {
        const quality = Number(intake.field("quality") ?? 75)
        result = await compressImage(files[0].buffer, files[0].name, quality)
        break
      }
      case "merge-pdf": {
        result = await mergePdfs(
          files.map((f) => ({ buffer: f.buffer, name: f.name })),
        )
        break
      }
      case "remove-bg": {
        result = await removeImageBackground(
          files[0].buffer,
          files[0].name,
          files[0].type,
        )
        break
      }
      default:
        return json({ error: "Nieobsługiwane narzędzie." }, 400)
    }

    return new Response(new Uint8Array(result.buffer), {
      status: 200,
      headers: {
        "Content-Type": result.contentType,
        "Content-Disposition": `attachment; filename="${encodeURIComponent(
          result.filename,
        )}"`,
        "Content-Length": String(result.buffer.length),
        "Cache-Control": "no-store",
      },
    })
  } catch (err) {
    if (err instanceof ConversionError) {
      return json({ error: err.message }, err.status)
    }
    console.error("[v0] special tool failed:", err)
    return json({ error: "Wystąpił nieoczekiwany błąd." }, 500)
  } finally {
    if (cleanup) {
      await cleanup().catch((e) =>
        console.error("[v0] blob cleanup failed:", e),
      )
    }
  }
}

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  })
}
