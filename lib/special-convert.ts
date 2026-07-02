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
/* Background removal (@imgly/background-removal-node)                 */
/* ------------------------------------------------------------------ */

export async function removeImageBackground(
  input: Buffer,
  originalName: string,
  mimeType: string,
): Promise<SpecialResult> {
  const { removeBackground } = await import(
    "@imgly/background-removal-node"
  )

  const type = mimeType && mimeType.startsWith("image/") ? mimeType : "image/png"
  const inputBlob = new Blob([new Uint8Array(input)], { type })

  let resultBlob: Blob
  try {
    resultBlob = await removeBackground(inputBlob, {
      output: { format: "image/png" },
    })
  } catch (err) {
    console.error("[v0] background removal failed:", err)
    throw new ConversionError(
      "Nie udało się usunąć tła. Spróbuj ponownie z innym zdjęciem.",
    )
  }

  const buffer = Buffer.from(await resultBlob.arrayBuffer())
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
