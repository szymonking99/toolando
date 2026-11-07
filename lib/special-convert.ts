import { ConversionError } from "@/lib/convert"

export type SpecialResult = {
  buffer: Buffer
  filename: string
  contentType: string
  /** Optional human-readable report (e.g. file repair). */
  note?: string
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

/** Like parsePageList but keeps user order (for reorder / extract-to-one-PDF). */
function parsePageOrder(spec: string, total: number): number[] {
  const pages: number[] = []
  for (const part of spec.split(",")) {
    const p = part.trim()
    if (!p) continue
    if (p.includes("-")) {
      const [aStr, bStr] = p.split("-")
      const a = Number(aStr.trim())
      const b = Number(bStr.trim())
      if (!Number.isFinite(a) || !Number.isFinite(b)) continue
      if (a <= b) {
        for (let i = a; i <= b; i++) {
          if (i >= 1 && i <= total) pages.push(i)
        }
      } else {
        for (let i = a; i >= b; i--) {
          if (i >= 1 && i <= total) pages.push(i)
        }
      }
    } else {
      const n = Number(p)
      if (Number.isFinite(n) && n >= 1 && n <= total) pages.push(n)
    }
  }
  return pages
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

export async function compressVideo(
  input: Buffer,
  originalName: string,
  quality: number,
): Promise<SpecialResult> {
  const q = Math.min(100, Math.max(1, Math.round(quality) || 75))
  const crf = Math.round(51 - (q / 100) * 33)
  const ext = extOf(originalName) || "mp4"
  const outExt = "mp4"
  const { ffmpegTransform } = await import("@/lib/ffmpeg-utils")

  const out = await ffmpegTransform(input, ext, outExt, (inPath, outPath) => [
    "-y",
    "-i",
    inPath,
    "-c:v",
    "libx264",
    "-crf",
    String(crf),
    "-preset",
    "medium",
    "-c:a",
    "aac",
    "-b:a",
    "128k",
    "-movflags",
    "+faststart",
    outPath,
  ])

  const stem = stemOf(originalName)
  return {
    buffer: out,
    filename: `${stem}-skompresowany.mp4`,
    contentType: "video/mp4",
  }
}

/* ------------------------------------------------------------------ */
/* Extract audio / video→GIF / protect PDF / rotate image              */
/* ------------------------------------------------------------------ */

export async function extractAudio(
  input: Buffer,
  originalName: string,
  format: "mp3" | "m4a" | "wav",
): Promise<SpecialResult> {
  const ext = extOf(originalName) || "mp4"
  const { ffmpegTransform } = await import("@/lib/ffmpeg-utils")

  const codecArgs: string[] =
    format === "wav"
      ? ["-codec:a", "pcm_s16le"]
      : format === "m4a"
        ? ["-codec:a", "aac", "-b:a", "192k"]
        : ["-codec:a", "libmp3lame", "-q:a", "2"]

  const out = await ffmpegTransform(input, ext, format, (inPath, outPath) => [
    "-y",
    "-i",
    inPath,
    "-vn",
    ...codecArgs,
    outPath,
  ])

  const contentType =
    format === "wav"
      ? "audio/wav"
      : format === "m4a"
        ? "audio/mp4"
        : "audio/mpeg"

  const stem = stemOf(originalName)
  return {
    buffer: out,
    filename: `${stem}-audio.${format}`,
    contentType,
  }
}

export async function videoToGif(
  input: Buffer,
  originalName: string,
  startSec: number,
  endSec: number,
  quality: number,
): Promise<SpecialResult> {
  if (endSec <= startSec) {
    throw new ConversionError("Czas końca musi być większy niż początek.")
  }
  if (endSec - startSec > 30) {
    throw new ConversionError(
      "GIF max. 30 sekund — skróć zakres początku i końca.",
    )
  }

  const q = Math.min(100, Math.max(1, Math.round(quality) || 70))
  const width = Math.round(240 + (q / 100) * 240)
  const fps = Math.round(8 + (q / 100) * 8)
  const ext = extOf(originalName) || "mp4"
  const { ffmpegTransform } = await import("@/lib/ffmpeg-utils")

  const out = await ffmpegTransform(input, ext, "gif", (inPath, outPath) => [
    "-y",
    "-ss",
    String(startSec),
    "-to",
    String(endSec),
    "-i",
    inPath,
    "-vf",
    `fps=${fps},scale=${width}:-1:flags=lanczos`,
    "-an",
    outPath,
  ])

  const stem = stemOf(originalName)
  return {
    buffer: out,
    filename: `${stem}.gif`,
    contentType: "image/gif",
  }
}

export async function protectPdf(
  input: Buffer,
  originalName: string,
  password: string,
): Promise<SpecialResult> {
  const pw = password.trim()
  if (pw.length < 4) {
    throw new ConversionError("Hasło musi mieć co najmniej 4 znaki.")
  }
  if (pw.length > 64) {
    throw new ConversionError("Hasło jest za długie (max 64 znaki).")
  }
  if (/[,=]/.test(pw)) {
    throw new ConversionError(
      "Hasło nie może zawierać przecinka ani znaku równości.",
    )
  }

  const mupdf = await import("mupdf")
  let doc
  try {
    doc = mupdf.Document.openDocument(input, "application/pdf")
  } catch {
    throw new ConversionError("Nie udało się odczytać pliku PDF.")
  }

  if (doc.needsPassword()) {
    throw new ConversionError(
      "Ten PDF ma już hasło. Najpierw otwórz go hasłem w innym programie i zapisz bez zabezpieczenia.",
    )
  }

  const pdf = doc.asPDF()
  if (!pdf) {
    throw new ConversionError("Plik nie jest prawidłowym PDF.")
  }

  let bytes: Uint8Array
  try {
    const buf = pdf.saveToBuffer(
      `encrypt=aes-256,owner-password=${pw},user-password=${pw}`,
    )
    bytes = buf.asUint8Array()
  } catch {
    throw new ConversionError("Nie udało się zaszyfrować PDF.")
  }

  const stem = stemOf(originalName)
  return {
    buffer: Buffer.from(bytes),
    filename: `${stem}-haslo.pdf`,
    contentType: "application/pdf",
    note: "PDF zabezpieczony hasłem (AES-256). Zapamiętaj hasło — bez niego nie otworzysz pliku.",
  }
}

export async function rotateImage(
  input: Buffer,
  originalName: string,
  degrees: 90 | 180 | 270,
): Promise<SpecialResult> {
  const sharp = (await import("sharp")).default
  let image = sharp(input, { failOn: "none" })
  const meta = await image.metadata()
  const format = String(meta.format || "")

  image = image.rotate(degrees)

  let out: Buffer
  let ext: string
  let contentType: string

  switch (format) {
    case "jpeg":
    case "jpg":
      out = await image.jpeg({ quality: 92, mozjpeg: true }).toBuffer()
      ext = "jpg"
      contentType = "image/jpeg"
      break
    case "png":
      out = await image.png({ compressionLevel: 9 }).toBuffer()
      ext = "png"
      contentType = "image/png"
      break
    case "webp":
      out = await image.webp({ quality: 92 }).toBuffer()
      ext = "webp"
      contentType = "image/webp"
      break
    case "avif":
      out = await image.avif({ quality: 80 }).toBuffer()
      ext = "avif"
      contentType = "image/avif"
      break
    case "tiff":
      out = await image.tiff({ quality: 90 }).toBuffer()
      ext = "tiff"
      contentType = "image/tiff"
      break
    case "gif":
      out = await image.gif().toBuffer()
      ext = "gif"
      contentType = "image/gif"
      break
    case "heif":
    case "heic":
      out = await image.jpeg({ quality: 92, mozjpeg: true }).toBuffer()
      ext = "jpg"
      contentType = "image/jpeg"
      break
    default:
      throw new ConversionError(
        "Nieobsługiwany format obrazu. Użyj JPG, PNG, WebP, AVIF, TIFF, GIF lub HEIC.",
      )
  }

  const stem = stemOf(originalName)
  return {
    buffer: out,
    filename: `${stem}-obrocony.${ext}`,
    contentType,
  }
}

export async function cropImage(
  input: Buffer,
  originalName: string,
  left: number,
  top: number,
  width: number,
  height: number,
): Promise<SpecialResult> {
  const sharp = (await import("sharp")).default
  let image = sharp(input, { failOn: "none" })
  const meta = await image.metadata()
  const iw = meta.width ?? 0
  const ih = meta.height ?? 0
  if (iw < 1 || ih < 1) {
    throw new ConversionError("Nie udało się odczytać wymiarów obrazu.")
  }

  const l = Math.max(0, Math.floor(left))
  const t = Math.max(0, Math.floor(top))
  const w = Math.floor(width)
  const h = Math.floor(height)
  if (w < 1 || h < 1) {
    throw new ConversionError("Szerokość i wysokość muszą być większe od 0.")
  }
  if (l + w > iw || t + h > ih) {
    throw new ConversionError(
      `Przycięcie wychodzi poza obraz (${iw}×${ih} px). Sprawdź lewy/górny róg i rozmiar.`,
    )
  }

  image = image.extract({ left: l, top: t, width: w, height: h })
  const format = String(meta.format || "")

  let out: Buffer
  let ext: string
  let contentType: string

  switch (format) {
    case "jpeg":
    case "jpg":
      out = await image.jpeg({ quality: 92, mozjpeg: true }).toBuffer()
      ext = "jpg"
      contentType = "image/jpeg"
      break
    case "png":
      out = await image.png({ compressionLevel: 9 }).toBuffer()
      ext = "png"
      contentType = "image/png"
      break
    case "webp":
      out = await image.webp({ quality: 92 }).toBuffer()
      ext = "webp"
      contentType = "image/webp"
      break
    case "avif":
      out = await image.avif({ quality: 80 }).toBuffer()
      ext = "avif"
      contentType = "image/avif"
      break
    case "tiff":
      out = await image.tiff({ quality: 90 }).toBuffer()
      ext = "tiff"
      contentType = "image/tiff"
      break
    case "gif":
      out = await image.gif().toBuffer()
      ext = "gif"
      contentType = "image/gif"
      break
    case "heif":
    case "heic":
      out = await image.jpeg({ quality: 92, mozjpeg: true }).toBuffer()
      ext = "jpg"
      contentType = "image/jpeg"
      break
    default:
      throw new ConversionError(
        "Nieobsługiwany format obrazu. Użyj JPG, PNG, WebP, AVIF, TIFF, GIF lub HEIC.",
      )
  }

  const stem = stemOf(originalName)
  return {
    buffer: out,
    filename: `${stem}-crop.${ext}`,
    contentType,
  }
}

export async function extractPdfPages(
  input: Buffer,
  originalName: string,
  pageSpec: string,
): Promise<SpecialResult> {
  const { PDFDocument } = await import("pdf-lib")
  let source
  try {
    source = await PDFDocument.load(input, { ignoreEncryption: true })
  } catch {
    throw new ConversionError("Nie udało się odczytać pliku PDF.")
  }

  const total = source.getPageCount()
  const pages = parsePageOrder(pageSpec, total)
  if (pages.length === 0) {
    throw new ConversionError(
      "Podaj strony w kolejności docelowej (np. 3,1,2 albo 1-3,5).",
    )
  }

  const out = await PDFDocument.create()
  const indices = pages.map((p) => p - 1)
  const copied = await out.copyPages(source, indices)
  for (const page of copied) out.addPage(page)

  const bytes = await out.save()
  const stem = stemOf(originalName)
  return {
    buffer: Buffer.from(bytes),
    filename: `${stem}-wybrane.pdf`,
    contentType: "application/pdf",
    note: `Złożono ${pages.length} stron w kolejności: ${pages.join(", ")}.`,
  }
}

export async function mergeVideos(
  files: { buffer: Buffer; name: string }[],
): Promise<SpecialResult> {
  if (files.length < 2) {
    throw new ConversionError("Dodaj co najmniej dwa pliki wideo.")
  }

  const { ffmpegConcat } = await import("@/lib/ffmpeg-utils")
  const inputs = files.map((f) => ({
    buffer: f.buffer,
    ext: extOf(f.name) || "mp4",
  }))

  let out: Buffer
  try {
    out = await ffmpegConcat(inputs, "mp4", ["-c", "copy"])
  } catch {
    // Re-encode when stream copy fails (mixed codecs).
    out = await ffmpegConcat(inputs, "mp4", [
      "-c:v",
      "libx264",
      "-preset",
      "fast",
      "-crf",
      "23",
      "-c:a",
      "aac",
      "-b:a",
      "128k",
      "-movflags",
      "+faststart",
    ])
  }

  return {
    buffer: out,
    filename: `scalone-${files.length}-klipow.mp4`,
    contentType: "video/mp4",
  }
}

export async function packZip(
  files: { buffer: Buffer; name: string }[],
): Promise<SpecialResult> {
  if (files.length === 0) {
    throw new ConversionError("Dodaj co najmniej jeden plik.")
  }

  const JSZip = (await import("jszip")).default
  const zip = new JSZip()
  const used = new Set<string>()

  for (const file of files) {
    let name = file.name.replace(/[/\\]/g, "_").trim() || "plik"
    if (used.has(name)) {
      const dot = name.lastIndexOf(".")
      const stem = dot > 0 ? name.slice(0, dot) : name
      const ext = dot > 0 ? name.slice(dot) : ""
      let i = 2
      while (used.has(`${stem}-${i}${ext}`)) i++
      name = `${stem}-${i}${ext}`
    }
    used.add(name)
    zip.file(name, file.buffer)
  }

  const buffer = await zip.generateAsync({ type: "nodebuffer" })
  return {
    buffer,
    filename: files.length === 1 ? `${stemOf(files[0].name)}.zip` : "archiwum.zip",
    contentType: "application/zip",
  }
}

const UNPACK_MAX_FILES = 80
const UNPACK_MAX_BYTES = 150 * 1024 * 1024

function zipEntryName(raw: string): string | null {
  const base = raw.split(/[/\\]/).pop()?.trim() ?? ""
  if (!base || base === "." || base === "..") return null
  if (base === ".DS_Store" || base.startsWith("._")) return null
  const cleaned = base.replace(/[\u0000-\u001f]/g, "").slice(0, 140)
  return cleaned || null
}

export async function unpackZip(
  input: Buffer,
  originalName: string,
): Promise<SpecialResult> {
  const JSZip = (await import("jszip")).default
  let zip
  try {
    zip = await JSZip.loadAsync(input)
  } catch {
    throw new ConversionError(
      "Nie udało się otworzyć ZIP. Plik może być uszkodzony albo chroniony hasłem.",
    )
  }

  const entries = Object.values(zip.files).filter((entry) => {
    if (entry.dir) return false
    const path = entry.name.replace(/\\/g, "/")
    if (path.startsWith("__MACOSX/") || path.split("/").includes("..")) return false
    return true
  })

  if (entries.length === 0) {
    throw new ConversionError("Archiwum nie zawiera plików do wyciągnięcia.")
  }
  if (entries.length > UNPACK_MAX_FILES) {
    throw new ConversionError(
      `Za dużo plików w archiwum (maks. ${UNPACK_MAX_FILES}).`,
    )
  }

  const extracted: { name: string; buffer: Buffer }[] = []
  const used = new Set<string>()
  let total = 0

  for (const entry of entries) {
    let name = zipEntryName(entry.name)
    if (!name) continue
    if (used.has(name)) {
      const dot = name.lastIndexOf(".")
      const stem = dot > 0 ? name.slice(0, dot) : name
      const ext = dot > 0 ? name.slice(dot) : ""
      let i = 2
      while (used.has(`${stem}-${i}${ext}`)) i++
      name = `${stem}-${i}${ext}`
    }

    let buffer: Buffer
    try {
      buffer = Buffer.from(await entry.async("nodebuffer"))
    } catch {
      throw new ConversionError(
        "Nie udało się rozpakować. Archiwa z hasłem nie są obsługiwane.",
      )
    }
    total += buffer.length
    if (total > UNPACK_MAX_BYTES) {
      throw new ConversionError(
        "Rozpakowana zawartość jest za duża (limit 150 MB).",
      )
    }
    used.add(name)
    extracted.push({ name, buffer })
  }

  if (extracted.length === 0) {
    throw new ConversionError("Archiwum nie zawiera plików do wyciągnięcia.")
  }

  if (extracted.length === 1) {
    return {
      buffer: extracted[0].buffer,
      filename: extracted[0].name,
      contentType: "application/octet-stream",
      note: "Wyciągnięto jeden plik z archiwum.",
    }
  }

  const flat = new JSZip()
  for (const file of extracted) flat.file(file.name, file.buffer)
  const buffer = await flat.generateAsync({ type: "nodebuffer" })
  return {
    buffer,
    filename: `${stemOf(originalName)}-rozpakowane.zip`,
    contentType: "application/zip",
    note: `Wyciągnięto ${extracted.length} plików. Ścieżki folderów zostały spłaszczone.`,
  }
}

const PDF_IMAGE_MAX_PAGES = 40

export async function pdfToImages(
  input: Buffer,
  originalName: string,
): Promise<SpecialResult> {
  const mupdf = await import("mupdf")
  let doc
  try {
    doc = mupdf.Document.openDocument(input, "application/pdf")
  } catch {
    throw new ConversionError("Nie udało się odczytać pliku PDF.")
  }

  if (doc.needsPassword()) {
    throw new ConversionError("Ten PDF jest chroniony hasłem.")
  }

  const pageCount = doc.countPages()
  if (pageCount === 0) {
    throw new ConversionError("Plik PDF nie zawiera żadnych stron.")
  }
  if (pageCount > PDF_IMAGE_MAX_PAGES) {
    throw new ConversionError(
      `Za dużo stron (maks. ${PDF_IMAGE_MAX_PAGES}). Najpierw wybierz zakres w narzędziu „Wybór stron PDF”.`,
    )
  }

  const matrix = mupdf.Matrix.scale(2, 2)
  const stem = stemOf(originalName)
  const renderPage = (index: number): Buffer => {
    const page = doc.loadPage(index)
    const pixmap = page.toPixmap(matrix, mupdf.ColorSpace.DeviceRGB, false)
    return Buffer.from(pixmap.asJPEG(90, false))
  }

  if (pageCount === 1) {
    return {
      buffer: renderPage(0),
      filename: `${stem}.jpg`,
      contentType: "image/jpeg",
    }
  }

  const JSZip = (await import("jszip")).default
  const zip = new JSZip()
  const pad = String(pageCount).length
  for (let i = 0; i < pageCount; i++) {
    zip.file(
      `${stem}-${String(i + 1).padStart(pad, "0")}.jpg`,
      renderPage(i),
    )
  }
  const buffer = await zip.generateAsync({ type: "nodebuffer" })
  return {
    buffer,
    filename: `${stem}-strony.zip`,
    contentType: "application/zip",
    note: `Zapisano ${pageCount} stron jako JPG.`,
  }
}

export async function compressAudio(
  input: Buffer,
  originalName: string,
  quality: number,
): Promise<SpecialResult> {
  const q = Math.min(100, Math.max(1, Math.round(quality) || 70))
  const rates = [64, 96, 128, 160, 192, 256, 320]
  const target = 64 + (q / 100) * 256
  const bitrate = rates.reduce((best, rate) =>
    Math.abs(rate - target) < Math.abs(best - target) ? rate : best,
  )
  const ext = extOf(originalName) || "mp3"
  const { ffmpegTransform } = await import("@/lib/ffmpeg-utils")

  const out = await ffmpegTransform(input, ext, "mp3", (inPath, outPath) => [
    "-y",
    "-i",
    inPath,
    "-vn",
    "-codec:a",
    "libmp3lame",
    "-b:a",
    `${bitrate}k`,
    outPath,
  ])

  return {
    buffer: out,
    filename: `${stemOf(originalName)}-${bitrate}k.mp3`,
    contentType: "audio/mpeg",
    note: `Zapisano MP3 ${bitrate} kb/s. To kompresja stratna — oryginału z tego pliku nie odzyskasz.`,
  }
}

async function encodeSharpImage(
  image: import("sharp").Sharp,
  format: string,
): Promise<{ out: Buffer; ext: string; contentType: string }> {
  switch (format) {
    case "jpeg":
    case "jpg":
      return {
        out: await image.jpeg({ quality: 92, mozjpeg: true }).toBuffer(),
        ext: "jpg",
        contentType: "image/jpeg",
      }
    case "png":
      return {
        out: await image.png({ compressionLevel: 9 }).toBuffer(),
        ext: "png",
        contentType: "image/png",
      }
    case "webp":
      return {
        out: await image.webp({ quality: 92 }).toBuffer(),
        ext: "webp",
        contentType: "image/webp",
      }
    case "avif":
      return {
        out: await image.avif({ quality: 80 }).toBuffer(),
        ext: "avif",
        contentType: "image/avif",
      }
    case "tiff":
      return {
        out: await image.tiff({ quality: 90 }).toBuffer(),
        ext: "tiff",
        contentType: "image/tiff",
      }
    case "gif":
      return {
        out: await image.gif().toBuffer(),
        ext: "gif",
        contentType: "image/gif",
      }
    case "heif":
    case "heic":
      return {
        out: await image.jpeg({ quality: 92, mozjpeg: true }).toBuffer(),
        ext: "jpg",
        contentType: "image/jpeg",
      }
    default:
      throw new ConversionError(
        "Nieobsługiwany format obrazu. Użyj JPG, PNG, WebP, AVIF, TIFF, GIF lub HEIC.",
      )
  }
}

export async function flipImage(
  input: Buffer,
  originalName: string,
  direction: "horizontal" | "vertical" | "both",
): Promise<SpecialResult> {
  const sharp = (await import("sharp")).default
  let image = sharp(input, { failOn: "none" })
  const meta = await image.metadata()
  const format = String(meta.format || "")

  if (direction === "horizontal" || direction === "both") image = image.flop()
  if (direction === "vertical" || direction === "both") image = image.flip()

  const encoded = await encodeSharpImage(image, format)
  return {
    buffer: encoded.out,
    filename: `${stemOf(originalName)}-lustro.${encoded.ext}`,
    contentType: encoded.contentType,
  }
}

export async function resizeVideo(
  input: Buffer,
  originalName: string,
  width: number,
  height: number,
): Promise<SpecialResult> {
  const w = Math.floor(width)
  if (!Number.isFinite(w) || w < 160 || w > 3840) {
    throw new ConversionError("Szerokość musi być między 160 a 3840 px.")
  }
  const evenW = w % 2 === 0 ? w : w - 1
  let scale = `scale=${evenW}:-2`
  if (Number.isFinite(height) && height > 0) {
    const h = Math.floor(height)
    if (h < 160 || h > 2160) {
      throw new ConversionError("Wysokość musi być między 160 a 2160 px.")
    }
    const evenH = h % 2 === 0 ? h : h - 1
    scale = `scale=${evenW}:${evenH}`
  }

  const ext = extOf(originalName) || "mp4"
  const { ffmpegTransform } = await import("@/lib/ffmpeg-utils")
  const out = await ffmpegTransform(input, ext, "mp4", (inPath, outPath) => [
    "-y",
    "-i",
    inPath,
    "-vf",
    scale,
    "-c:v",
    "libx264",
    "-preset",
    "fast",
    "-crf",
    "23",
    "-c:a",
    "aac",
    "-b:a",
    "128k",
    "-movflags",
    "+faststart",
    outPath,
  ])

  return {
    buffer: out,
    filename: `${stemOf(originalName)}-${evenW}.mp4`,
    contentType: "video/mp4",
  }
}

/* ------------------------------------------------------------------ */
/* PDF page numbers (pdf-lib)                                          */
/* ------------------------------------------------------------------ */

export async function addPdfPageNumbers(
  input: Buffer,
  originalName: string,
  position: "bottom" | "top",
): Promise<SpecialResult> {
  const { PDFDocument, rgb, StandardFonts } = await import("pdf-lib")

  let doc
  try {
    doc = await PDFDocument.load(input, { ignoreEncryption: true })
  } catch {
    throw new ConversionError("Nie udało się otworzyć pliku PDF.")
  }

  const font = await doc.embedFont(StandardFonts.Helvetica)
  const pages = doc.getPages()
  const total = pages.length
  const size = 10

  pages.forEach((page, index) => {
    const { width, height } = page.getSize()
    const text = `${index + 1} / ${total}`
    const textWidth = font.widthOfTextAtSize(text, size)
    const x = (width - textWidth) / 2
    const y = position === "top" ? height - 28 : 20
    page.drawText(text, {
      x,
      y,
      size,
      font,
      color: rgb(0.35, 0.35, 0.35),
    })
  })

  const bytes = await doc.save()
  const stem = stemOf(originalName)
  return {
    buffer: Buffer.from(bytes),
    filename: `${stem}-numeracja.pdf`,
    contentType: "application/pdf",
  }
}

/* ------------------------------------------------------------------ */
/* Images / scans → single PDF                                         */
/* ------------------------------------------------------------------ */

const PAGE_SIZES = {
  a4: { width: 595.28, height: 841.89 },
  letter: { width: 612, height: 792 },
} as const

export async function imagesToPdf(
  files: { buffer: Buffer; name: string }[],
  options: {
    quality?: number
    pageSize?: "a4" | "letter"
    /** Fill page edge-to-edge (crop) vs fit with margins. */
    fit?: "contain" | "cover"
  } = {},
): Promise<SpecialResult> {
  if (files.length === 0) {
    throw new ConversionError("Dodaj co najmniej jedno zdjęcie lub skan.")
  }

  const sharp = (await import("sharp")).default
  const { PDFDocument } = await import("pdf-lib")
  const pageSize = options.pageSize === "letter" ? "letter" : "a4"
  const fit = options.fit === "cover" ? "cover" : "contain"
  const q = Math.min(95, Math.max(40, Math.round(options.quality ?? 85)))
  const { width: pageW, height: pageH } = PAGE_SIZES[pageSize]
  const margin = fit === "contain" ? 24 : 0
  const maxW = pageW - margin * 2
  const maxH = pageH - margin * 2

  const pdf = await PDFDocument.create()

  for (const file of files) {
    let normalized: Buffer
    let usePng = false
    try {
      const image = sharp(file.buffer, { failOn: "none", unlimited: true }).rotate()
      const meta = await image.metadata()
      const hasAlpha = Boolean(meta.hasAlpha) || meta.format === "png" || meta.format === "gif"
      if (hasAlpha) {
        normalized = await image.png({ compressionLevel: 8 }).toBuffer()
        usePng = true
      } else {
        normalized = await image.jpeg({ quality: q, mozjpeg: true }).toBuffer()
      }
    } catch {
      throw new ConversionError(
        `Nie udało się odczytać obrazu „${file.name}". Użyj JPG, PNG, WebP, HEIC lub TIFF.`,
      )
    }

    const embedded = usePng
      ? await pdf.embedPng(normalized)
      : await pdf.embedJpg(normalized)

    const page = pdf.addPage([pageW, pageH])
    const iw = embedded.width
    const ih = embedded.height
    const scale =
      fit === "cover"
        ? Math.max(maxW / iw, maxH / ih)
        : Math.min(maxW / iw, maxH / ih, 1)
    const drawW = iw * scale
    const drawH = ih * scale
    const x = margin + (maxW - drawW) / 2
    const y = margin + (maxH - drawH) / 2
    page.drawImage(embedded, { x, y, width: drawW, height: drawH })
  }

  const bytes = await pdf.save()
  const filename =
    files.length === 1
      ? `${stemOf(files[0].name)}-skan.pdf`
      : `skany-${files.length}-stron.pdf`

  return {
    buffer: Buffer.from(bytes),
    filename,
    contentType: "application/pdf",
  }
}
