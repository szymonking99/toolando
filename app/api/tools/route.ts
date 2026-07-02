import { NextRequest } from "next/server"
import { getSpecialTool } from "@/lib/special-tools"
import { ConversionError } from "@/lib/convert"
import {
  compressImage,
  mergePdfs,
  removeImageBackground,
  type SpecialResult,
} from "@/lib/special-convert"

export const runtime = "nodejs"
export const maxDuration = 300

// 100 MB per-file ceiling.
const MAX_BYTES = 100 * 1024 * 1024

export async function POST(req: NextRequest) {
  const id = new URL(req.url).searchParams.get("id")
  const tool = getSpecialTool(id ?? "")

  if (!tool) {
    return json({ error: "Nieznane narzędzie." }, 404)
  }

  let formData: FormData
  try {
    formData = await req.formData()
  } catch {
    return json({ error: "Nieprawidłowe dane formularza." }, 400)
  }

  const files = formData.getAll("file").filter((f): f is File => f instanceof File)

  if (files.length === 0) {
    return json({ error: "Nie przesłano pliku." }, 400)
  }

  for (const file of files) {
    if (file.size === 0) {
      return json({ error: "Jeden z plików jest pusty." }, 400)
    }
    if (file.size > MAX_BYTES) {
      return json({ error: "Plik jest za duży (limit 100 MB)." }, 413)
    }
  }

  try {
    let result: SpecialResult

    switch (tool.engine) {
      case "compress-image": {
        const quality = Number(formData.get("quality") ?? 75)
        const buffer = Buffer.from(await files[0].arrayBuffer())
        result = await compressImage(buffer, files[0].name, quality)
        break
      }
      case "merge-pdf": {
        const buffers = await Promise.all(
          files.map(async (f) => ({
            buffer: Buffer.from(await f.arrayBuffer()),
            name: f.name,
          })),
        )
        result = await mergePdfs(buffers)
        break
      }
      case "remove-bg": {
        const buffer = Buffer.from(await files[0].arrayBuffer())
        result = await removeImageBackground(
          buffer,
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
  }
}

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  })
}
