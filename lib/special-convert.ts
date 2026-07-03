import { ConversionError } from "@/lib/convert"

export type SpecialResult = {
  buffer: Buffer
  filename: string
  contentType: string
}

/* ------------------------------------------------------------------ */
/* Image compression (sharp)                                           */
/* ------------------------------------------------------------------ */

export async function compressImage(
  input: Buffer,
  originalName: string,
  quality: number,
): Promise<SpecialResult> {
  const sharp = (await import("sharp")).default
  const q = Math.min(100, Math.max(1, Math.round(quality) || 75))

  let image = sharp(input, { failOn: "none" })
  const meta = await image.metadata()
  const format = String(meta.format)

  // Auto-rotate based on EXIF, then re-encode with the chosen quality.
  image = image.rotate()

  let out: Buffer
  let ext: string
  let contentType: string

  switch (format) {
    case "jpeg":
    case "jpg":
      out = await image.jpeg({ quality: q, mozjpeg: true }).toBuffer()
      ext = "jpg"
      contentType = "image/jpeg"
      break
    case "png":
      // For PNG, map quality to palette compression.
      out = await image
        .png({ quality: q, compressionLevel: 9, palette: true })
        .toBuffer()
      ext = "png"
      contentType = "image/png"
      break
    case "webp":
      out = await image.webp({ quality: q }).toBuffer()
      ext = "webp"
      contentType = "image/webp"
      break
    case "avif":
      out = await image.avif({ quality: q }).toBuffer()
      ext = "avif"
      contentType = "image/avif"
      break
    case "tiff":
      out = await image.tiff({ quality: q }).toBuffer()
      ext = "tiff"
      contentType = "image/tiff"
      break
    case "gif":
      out = await image.gif().toBuffer()
      ext = "gif"
      contentType = "image/gif"
      break
    default:
      throw new ConversionError(
        "Nieobsługiwany format obrazu. Użyj JPG, PNG, WebP, AVIF, TIFF lub GIF.",
      )
  }

  const stem = stemOf(originalName)
  return {
    buffer: out,
    filename: `${stem}-skompresowany.${ext}`,
    contentType,
  }
}

/* ------------------------------------------------------------------ */
/* PDF merge (pdf-lib)                                                 */
/* ------------------------------------------------------------------ */

export async function mergePdfs(
  files: { buffer: Buffer; name: string }[],
): Promise<SpecialResult> {
  if (files.length < 2) {
    throw new ConversionError("Dodaj co najmniej dwa pliki PDF do połączenia.")
  }

  const { PDFDocument } = await import("pdf-lib")
  const merged = await PDFDocument.create()

  for (const file of files) {
    let doc
    try {
      doc = await PDFDocument.load(file.buffer, { ignoreEncryption: true })
    } catch {
      throw new ConversionError(
        `Nie udało się odczytać pliku „${file.name}". Upewnij się, że to prawidłowy PDF.`,
      )
    }
    const pages = await merged.copyPages(doc, doc.getPageIndices())
    for (const page of pages) merged.addPage(page)
  }

  const bytes = await merged.save()
  return {
    buffer: Buffer.from(bytes),
    filename: "polaczony.pdf",
    contentType: "application/pdf",
  }
}

/* ------------------------------------------------------------------ */
/* Background removal (AI Gateway image model)                         */
/* ------------------------------------------------------------------ */

// Nano Banana image model, called through the Vercel AI Gateway. Using a remote
// model keeps the serverless function small (no heavy onnxruntime / imgly
// binaries bundled) while still supporting one-click background removal.
const BACKGROUND_REMOVAL_MODEL = "google/gemini-3.1-flash-image"

export async function removeImageBackground(
  input: Buffer,
  originalName: string,
  mimeType: string,
): Promise<SpecialResult> {
  if (!process.env.AI_GATEWAY_API_KEY) {
    throw new ConversionError(
      "Usuwanie tła jest chwilowo niedostępne (brak konfiguracji AI).",
      503,
    )
  }

  const { generateText } = await import("ai")
  const type = mimeType && mimeType.startsWith("image/") ? mimeType : "image/png"

  let files: Array<{ mediaType: string; uint8Array: Uint8Array }>
  try {
    const result = await generateText({
      model: BACKGROUND_REMOVAL_MODEL,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text:
                "Remove the background from this image completely. Keep the main " +
                "subject exactly as it is — do not change, crop, recolor, or " +
                "stylize it in any way. Output a PNG image with a fully " +
                "transparent background.",
            },
            {
              type: "file",
              mediaType: type,
              data: new Uint8Array(input),
            },
          ],
        },
      ],
    })
    files = result.files.filter((f) => f.mediaType.startsWith("image/"))
  } catch (err) {
    console.error("[v0] background removal failed:", err)
    throw new ConversionError(
      "Nie udało się usunąć tła. Spróbuj ponownie za chwilę.",
      502,
    )
  }

  if (files.length === 0) {
    throw new ConversionError(
      "Nie udało się usunąć tła z tego zdjęcia. Spróbuj z innym obrazem.",
    )
  }

  // Normalize to a proper PNG with an alpha channel via sharp.
  const sharp = (await import("sharp")).default
  const buffer = await sharp(Buffer.from(files[0].uint8Array))
    .png()
    .ensureAlpha()
    .toBuffer()

  const stem = stemOf(originalName)
  return {
    buffer,
    filename: `${stem}-bez-tla.png`,
    contentType: "image/png",
  }
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function stemOf(name: string): string {
  const base = name.split(/[\\/]/).pop() ?? name
  const dot = base.lastIndexOf(".")
  const stem = dot > 0 ? base.slice(0, dot) : base
  return stem.replace(/[^a-zA-Z0-9-_]+/g, "-").replace(/^-+|-+$/g, "") || "plik"
}
