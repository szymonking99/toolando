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

function extOf(name: string): string {
  const base = name.split(/[\\/]/).pop() ?? name
  const dot = base.lastIndexOf(".")
  return dot > 0 ? base.slice(dot + 1).toLowerCase() : ""
}

/* ------------------------------------------------------------------ */
/* PDF split / rotate / compress / text                                */
/* ------------------------------------------------------------------ */

function parsePageList(spec: string, total: number): number[] {
  const pages = new Set<number>()
  for (const part of spec.split(",")) {
    const p = part.trim()
    if (!p) continue
    if (p.includes("-")) {
      const [aStr, bStr] = p.split("-")
      const a = Number(aStr.trim())
      const b = Number(bStr.trim())
      if (!Number.isFinite(a) || !Number.isFinite(b)) continue
      for (let i = Math.min(a, b); i <= Math.max(a, b); i++) pages.add(i)
    } else {
      const n = Number(p)
      if (Number.isFinite(n)) pages.add(n)
    }
  }
  return [...pages]
    .filter((p) => p >= 1 && p <= total)
    .sort((a, b) => a - b)
}

export async function splitPdf(
  input: Buffer,
  originalName: string,
  mode: "all" | "range",
  range?: string,
): Promise<SpecialResult> {
  const { PDFDocument } = await import("pdf-lib")
  let source
  try {
    source = await PDFDocument.load(input, { ignoreEncryption: true })
  } catch {
    throw new ConversionError("Nie udało się odczytać pliku PDF.")
  }

  const total = source.getPageCount()
  const indices =
    mode === "all"
      ? Array.from({ length: total }, (_, i) => i)
      : parsePageList(range ?? "", total).map((p) => p - 1)

  if (indices.length === 0) {
    throw new ConversionError("Podaj prawidłowy zakres stron (np. 1-3,5).")
  }

  const stem = stemOf(originalName)
  const JSZip = (await import("jszip")).default
  const zip = new JSZip()

  for (const pageIndex of indices) {
    const out = await PDFDocument.create()
    const [page] = await out.copyPages(source, [pageIndex])
    out.addPage(page)
    const bytes = await out.save()
    zip.file(`strona-${pageIndex + 1}.pdf`, Buffer.from(bytes))
  }

  const zipBuffer = await zip.generateAsync({ type: "nodebuffer" })
  return {
    buffer: zipBuffer,
    filename: `${stem}-strony.zip`,
    contentType: "application/zip",
  }
}

export async function rotatePdf(
  input: Buffer,
  originalName: string,
  degrees: 90 | 180 | 270,
): Promise<SpecialResult> {
  const { PDFDocument, degrees: deg } = await import("pdf-lib")
  let doc
  try {
    doc = await PDFDocument.load(input, { ignoreEncryption: true })
  } catch {
    throw new ConversionError("Nie udało się odczytać pliku PDF.")
  }

  for (const page of doc.getPages()) {
    const current = page.getRotation().angle
    page.setRotation(deg(current + degrees))
  }

  const bytes = await doc.save()
  const stem = stemOf(originalName)
  return {
    buffer: Buffer.from(bytes),
    filename: `${stem}-obrocony.pdf`,
    contentType: "application/pdf",
  }
}

export async function compressPdf(
  input: Buffer,
  originalName: string,
): Promise<SpecialResult> {
  const { PDFDocument } = await import("pdf-lib")
  let doc
  try {
    doc = await PDFDocument.load(input, { ignoreEncryption: true })
  } catch {
    throw new ConversionError("Nie udało się odczytać pliku PDF.")
  }

  const bytes = await doc.save({ useObjectStreams: true })
  const stem = stemOf(originalName)
  return {
    buffer: Buffer.from(bytes),
    filename: `${stem}-skompresowany.pdf`,
    contentType: "application/pdf",
  }
}

export async function pdfToText(
  input: Buffer,
  originalName: string,
): Promise<SpecialResult> {
  const mupdf = await import("mupdf")
  const doc = mupdf.Document.openDocument(
    new Uint8Array(input),
    "application/pdf",
  )
  const pages = doc.countPages()
  const parts: string[] = []
  for (let i = 0; i < pages; i++) {
    const page = doc.loadPage(i)
    parts.push(page.toStructuredText("preserve-whitespace").asText())
  }
  const text = parts.join("\n\n").trim()
  const stem = stemOf(originalName)
  return {
    buffer: Buffer.from(text, "utf8"),
    filename: `${stem}.txt`,
    contentType: "text/plain; charset=utf-8",
  }
}

/* ------------------------------------------------------------------ */
/* Image resize / EXIF strip / watermark                               */
/* ------------------------------------------------------------------ */

export async function resizeImage(
  input: Buffer,
  originalName: string,
  width?: number,
  height?: number,
): Promise<SpecialResult> {
  const sharp = (await import("sharp")).default
  const w = width && width > 0 ? Math.round(width) : undefined
  const h = height && height > 0 ? Math.round(height) : undefined
  if (!w && !h) {
    throw new ConversionError("Podaj szerokość lub wysokość w pikselach.")
  }

  let pipeline = sharp(input, { failOn: "none" }).rotate()
  const meta = await pipeline.metadata()
  pipeline = pipeline.resize(w, h, {
    fit: "inside",
    withoutEnlargement: true,
  })

  const format = String(meta.format ?? "jpeg")
  let out: Buffer
  let ext: string
  let contentType: string

  switch (format) {
    case "png":
      out = await pipeline.png({ compressionLevel: 9 }).toBuffer()
      ext = "png"
      contentType = "image/png"
      break
    case "webp":
      out = await pipeline.webp({ quality: 85 }).toBuffer()
      ext = "webp"
      contentType = "image/webp"
      break
    default:
      out = await pipeline.jpeg({ quality: 85, mozjpeg: true }).toBuffer()
      ext = "jpg"
      contentType = "image/jpeg"
  }

  const stem = stemOf(originalName)
  return {
    buffer: out,
    filename: `${stem}-${w ?? "auto"}x${h ?? "auto"}.${ext}`,
    contentType,
  }
}

export async function stripExif(
  input: Buffer,
  originalName: string,
): Promise<SpecialResult> {
  const sharp = (await import("sharp")).default
  const image = sharp(input, { failOn: "none" }).rotate()
  const meta = await image.metadata()
  const format = String(meta.format ?? "jpeg")

  let out: Buffer
  let ext: string
  let contentType: string

  switch (format) {
    case "png":
      out = await image.png().toBuffer()
      ext = "png"
      contentType = "image/png"
      break
    case "webp":
      out = await image.webp({ quality: 90 }).toBuffer()
      ext = "webp"
      contentType = "image/webp"
      break
    default:
      out = await image.jpeg({ quality: 90, mozjpeg: true }).toBuffer()
      ext = "jpg"
      contentType = "image/jpeg"
  }

  const stem = stemOf(originalName)
  return {
    buffer: out,
    filename: `${stem}-bez-exif.${ext}`,
    contentType,
  }
}

export async function watermarkImage(
  input: Buffer,
  originalName: string,
  text: string,
): Promise<SpecialResult> {
  const label = text.trim() || "toolando.tech"
  const sharp = (await import("sharp")).default
  const image = sharp(input, { failOn: "none" }).rotate()
  const meta = await image.metadata()
  const width = meta.width ?? 800
  const height = meta.height ?? 600
  const fontSize = Math.max(16, Math.round(Math.min(width, height) / 24))

  const svg = `<svg width="${width}" height="${height}">
    <text x="50%" y="95%" text-anchor="middle" font-family="Arial,sans-serif" font-size="${fontSize}" fill="rgba(255,255,255,0.55)" stroke="rgba(0,0,0,0.35)" stroke-width="1">${escapeXml(label)}</text>
  </svg>`

  const format = String(meta.format ?? "jpeg")
  let pipeline = image.composite([{ input: Buffer.from(svg), gravity: "southeast" }])
  let out: Buffer
  let ext: string
  let contentType: string

  switch (format) {
    case "png":
      out = await pipeline.png().toBuffer()
      ext = "png"
      contentType = "image/png"
      break
    case "webp":
      out = await pipeline.webp({ quality: 90 }).toBuffer()
      ext = "webp"
      contentType = "image/webp"
      break
    default:
      out = await pipeline.jpeg({ quality: 90, mozjpeg: true }).toBuffer()
      ext = "jpg"
      contentType = "image/jpeg"
  }

  const stem = stemOf(originalName)
  return {
    buffer: out,
    filename: `${stem}-znak-wodny.${ext}`,
    contentType,
  }
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

/* ------------------------------------------------------------------ */
/* Video mute / trim (ffmpeg)                                          */
/* ------------------------------------------------------------------ */

export async function muteVideo(
  input: Buffer,
  originalName: string,
): Promise<SpecialResult> {
  const ext = extOf(originalName) || "mp4"
  const outExt = ["mp4", "webm", "mov", "mkv"].includes(ext) ? ext : "mp4"
  const out = await (
    await import("@/lib/ffmpeg-utils")
  ).ffmpegTransform(input, ext, outExt, (inPath, outPath) => [
    "-y",
    "-i",
    inPath,
    "-c:v",
    "copy",
    "-an",
    outPath,
  ])

  const stem = stemOf(originalName)
  return {
    buffer: out,
    filename: `${stem}-bez-dzwieku.${outExt}`,
    contentType: outExt === "webm" ? "video/webm" : "video/mp4",
  }
}

export async function trimVideo(
  input: Buffer,
  originalName: string,
  startSec: number,
  endSec: number,
): Promise<SpecialResult> {
  if (endSec <= startSec) {
    throw new ConversionError("Czas końca musi być większy niż początek.")
  }

  const ext = extOf(originalName) || "mp4"
  const outExt = ["mp4", "webm", "mov", "mkv"].includes(ext) ? ext : "mp4"
  const { ffmpegTransform } = await import("@/lib/ffmpeg-utils")

  const out = await ffmpegTransform(input, ext, outExt, (inPath, outPath) => [
    "-y",
    "-ss",
    String(startSec),
    "-to",
    String(endSec),
    "-i",
    inPath,
    "-c",
    "copy",
    outPath,
  ])

  const stem = stemOf(originalName)
  return {
    buffer: out,
    filename: `${stem}-trim.${outExt}`,
    contentType: outExt === "webm" ? "video/webm" : "video/mp4",
  }
}
