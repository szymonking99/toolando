import { ConversionError } from "@/lib/convert"
import type { SpecialResult } from "@/lib/special-convert"

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

const OCR_MODEL = "openai/gpt-4o-mini"
const MAX_OCR_PAGES = 3

async function ocrImageBuffer(
  input: Buffer,
  mediaType: string,
): Promise<string> {
  if (!process.env.AI_GATEWAY_API_KEY) {
    throw new ConversionError(
      "OCR jest chwilowo niedostępne (brak konfiguracji AI).",
      503,
    )
  }
  const { generateText } = await import("ai")
  const result = await generateText({
    model: OCR_MODEL,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text:
              "Extract ALL readable text from this scan/photo. Preserve reading order and line breaks. " +
              "Return plain text only — no markdown fences, no commentary. If there is no text, return an empty string.",
          },
          {
            type: "file",
            mediaType,
            data: new Uint8Array(input),
          },
        ],
      },
    ],
    temperature: 0,
    maxOutputTokens: 4000,
  })
  return (result.text ?? "").trim()
}

async function rasterizePdfPages(
  input: Buffer,
  maxPages: number,
): Promise<{ png: Buffer; index: number }[]> {
  const mupdf = await import("mupdf")
  const doc = mupdf.Document.openDocument(
    new Uint8Array(input),
    "application/pdf",
  )
  const total = Math.min(doc.countPages(), maxPages)
  const matrix = mupdf.Matrix.scale(1.5, 1.5)
  const out: { png: Buffer; index: number }[] = []
  for (let i = 0; i < total; i++) {
    const page = doc.loadPage(i)
    const pixmap = page.toPixmap(matrix, mupdf.ColorSpace.DeviceRGB, false)
    out.push({ png: Buffer.from(pixmap.asPNG()), index: i + 1 })
  }
  return out
}

/** OCR for image or PDF scan (first pages). Free; uses AI vision. */
export async function ocrDocument(
  input: Buffer,
  originalName: string,
): Promise<SpecialResult> {
  const ext = extOf(originalName)
  const parts: string[] = []

  if (ext === "pdf" || input.subarray(0, 5).toString("ascii") === "%PDF-") {
    // Prefer native text layer when present.
    try {
      const mupdf = await import("mupdf")
      const doc = mupdf.Document.openDocument(
        new Uint8Array(input),
        "application/pdf",
      )
      const native: string[] = []
      const pages = doc.countPages()
      for (let i = 0; i < pages; i++) {
        const page = doc.loadPage(i)
        const t = page.toStructuredText("preserve-whitespace").asText().trim()
        if (t) native.push(t)
      }
      const joined = native.join("\n\n").trim()
      if (joined.length > 40) {
        return {
          buffer: Buffer.from(joined, "utf8"),
          filename: `${stemOf(originalName)}-tekst.txt`,
          contentType: "text/plain; charset=utf-8",
          note: "Wyodrębniono warstwę tekstową PDF (bez OCR). Jeśli to skan bez tekstu, wynik może być pusty — wtedy użyj skanu jako obrazu.",
        }
      }
    } catch {
      /* fall through to OCR raster */
    }

    const rasters = await rasterizePdfPages(input, MAX_OCR_PAGES)
    if (rasters.length === 0) {
      throw new ConversionError("PDF nie ma stron do OCR.", 422)
    }
    for (const page of rasters) {
      const text = await ocrImageBuffer(page.png, "image/png")
      if (text) parts.push(`--- strona ${page.index} ---\n${text}`)
    }
    if (parts.length === 0) {
      throw new ConversionError(
        "Nie wykryto tekstu na pierwszych stronach skanu.",
        422,
      )
    }
    const body =
      parts.join("\n\n") +
      `\n\n(OCR ograniczone do ${MAX_OCR_PAGES} stron w darmowym trybie.)`
    return {
      buffer: Buffer.from(body, "utf8"),
      filename: `${stemOf(originalName)}-ocr.txt`,
      contentType: "text/plain; charset=utf-8",
      note: `OCR skanu PDF (max ${MAX_OCR_PAGES} strony).`,
    }
  }

  const sharp = (await import("sharp")).default
  let mediaType = "image/jpeg"
  let payload = input
  try {
    const meta = await sharp(input, { failOn: "none" }).metadata()
    if (meta.format === "png") {
      mediaType = "image/png"
      payload = await sharp(input, { failOn: "none" }).png().toBuffer()
    } else {
      payload = await sharp(input, { failOn: "none" })
        .rotate()
        .jpeg({ quality: 90 })
        .toBuffer()
    }
  } catch {
    throw new ConversionError("Nie udało się odczytać obrazu do OCR.", 422)
  }

  const text = await ocrImageBuffer(payload, mediaType)
  if (!text) {
    throw new ConversionError("Nie wykryto tekstu na tym obrazie.", 422)
  }
  return {
    buffer: Buffer.from(text, "utf8"),
    filename: `${stemOf(originalName)}-ocr.txt`,
    contentType: "text/plain; charset=utf-8",
  }
}

type StampPosition = "bottom-right" | "bottom-left" | "top-right" | "center"

/** Draw text (and optional image) stamp on every PDF page. */
export async function stampPdf(
  pdfInput: Buffer,
  originalName: string,
  options: {
    text: string
    position?: StampPosition
    stampImage?: Buffer
  },
): Promise<SpecialResult> {
  const { PDFDocument, rgb, StandardFonts, degrees } = await import("pdf-lib")
  let doc
  try {
    doc = await PDFDocument.load(pdfInput, { ignoreEncryption: true })
  } catch {
    throw new ConversionError("Nie udało się otworzyć PDF do podpisu/pieczątki.")
  }

  const text = (options.text || "toolando.tech").slice(0, 80)
  const position = options.position ?? "bottom-right"
  const font = await doc.embedFont(StandardFonts.Helvetica)
  const size = 11

  let stampImg:
    | Awaited<ReturnType<typeof doc.embedPng>>
    | Awaited<ReturnType<typeof doc.embedJpg>>
    | null = null
  if (options.stampImage && options.stampImage.length > 0) {
    const sharp = (await import("sharp")).default
    const png = await sharp(options.stampImage, { failOn: "none" })
      .rotate()
      .resize({ width: 180, height: 180, fit: "inside" })
      .png()
      .toBuffer()
    stampImg = await doc.embedPng(png)
  }

  for (const page of doc.getPages()) {
    const { width, height } = page.getSize()
    const textWidth = font.widthOfTextAtSize(text, size)
    let x = width - textWidth - 36
    let y = 28
    if (position === "bottom-left") {
      x = 36
      y = 28
    } else if (position === "top-right") {
      x = width - textWidth - 36
      y = height - 36
    } else if (position === "center") {
      x = (width - textWidth) / 2
      y = height / 2
    }

    if (stampImg) {
      const iw = 72
      const ih = (stampImg.height / stampImg.width) * iw
      let ix = x
      let iy = y + 16
      if (position === "bottom-right") ix = width - iw - 36
      if (position === "bottom-left") ix = 36
      if (position === "top-right") {
        ix = width - iw - 36
        iy = height - ih - 48
      }
      if (position === "center") {
        ix = (width - iw) / 2
        iy = height / 2 + 20
      }
      page.drawImage(stampImg, { x: ix, y: iy, width: iw, height: ih, opacity: 0.85 })
    }

    page.drawText(text, {
      x,
      y,
      size,
      font,
      color: rgb(0.25, 0.25, 0.3),
      opacity: 0.9,
      rotate: degrees(0),
    })
  }

  const bytes = await doc.save()
  return {
    buffer: Buffer.from(bytes),
    filename: `${stemOf(originalName)}-podpis.pdf`,
    contentType: "application/pdf",
  }
}

/** Compress + strip EXIF (+ optional PDF pack) for email-ready files. */
export async function prepareForEmail(
  files: { buffer: Buffer; name: string }[],
  options: { quality?: number; makePdf?: boolean } = {},
): Promise<SpecialResult> {
  if (files.length === 0) {
    throw new ConversionError("Dodaj pliki do przygotowania.")
  }
  const quality = Math.min(90, Math.max(40, Math.round(options.quality ?? 72)))
  const sharp = (await import("sharp")).default
  const JSZip = (await import("jszip")).default
  const zip = new JSZip()
  const imageParts: { buffer: Buffer; name: string }[] = []
  const notes: string[] = []

  for (const file of files) {
    const ext = extOf(file.name)
    if (ext === "pdf") {
      const { compressPdf } = await import("@/lib/special-convert")
      const compressed = await compressPdf(file.buffer, file.name)
      zip.file(compressed.filename, compressed.buffer)
      notes.push(`${file.name} → skompresowany PDF`)
      continue
    }

    try {
      const image = sharp(file.buffer, { failOn: "none" }).rotate()
      const meta = await image.metadata()
      const hasAlpha = Boolean(meta.hasAlpha) || meta.format === "png"
      let out: Buffer
      let outName: string
      if (hasAlpha) {
        out = await image.png({ compressionLevel: 9 }).toBuffer()
        outName = `${stemOf(file.name)}-mail.png`
      } else {
        out = await image.jpeg({ quality, mozjpeg: true }).toBuffer()
        outName = `${stemOf(file.name)}-mail.jpg`
      }
      zip.file(outName, out)
      imageParts.push({ buffer: out, name: outName })
      notes.push(
        `${file.name} → bez EXIF, skompresowany (${Math.round(out.length / 1024)} KB)`,
      )
    } catch {
      throw new ConversionError(
        `Nie udało się przygotować „${file.name}". Użyj JPG/PNG/WebP/HEIC lub PDF.`,
      )
    }
  }

  if (options.makePdf && imageParts.length > 0) {
    const { imagesToPdf } = await import("@/lib/special-convert")
    const pdf = await imagesToPdf(imageParts, {
      quality,
      pageSize: "a4",
      fit: "contain",
    })
    zip.file(pdf.filename, pdf.buffer)
    notes.push(`Dodatkowo: ${pdf.filename}`)
  }

  zip.file(
    "raport.txt",
    [
      "Toolando — przygotowanie do maila",
      ...notes,
      "",
      "Metadane EXIF zostały usunięte przy rekodowaniu obrazów.",
    ].join("\n"),
  )

  const buffer = Buffer.from(
    await zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" }),
  )
  return {
    buffer,
    filename: "przygotowane-do-maila.zip",
    contentType: "application/zip",
    note: notes.join(" · "),
  }
}

function simpleDiff(a: string, b: string): string {
  const aLines = a.split(/\r?\n/)
  const bLines = b.split(/\r?\n/)
  const max = Math.max(aLines.length, bLines.length)
  const out: string[] = []
  for (let i = 0; i < max; i++) {
    const left = aLines[i]
    const right = bLines[i]
    if (left === right) {
      if (left !== undefined) out.push(`  ${left}`)
    } else {
      if (left !== undefined) out.push(`- ${left}`)
      if (right !== undefined) out.push(`+ ${right}`)
    }
  }
  return out.join("\n")
}

async function extractDocText(
  input: Buffer,
  name: string,
): Promise<string> {
  const ext = extOf(name)
  if (ext === "pdf" || input.subarray(0, 5).toString("ascii") === "%PDF-") {
    const mupdf = await import("mupdf")
    const doc = mupdf.Document.openDocument(
      new Uint8Array(input),
      "application/pdf",
    )
    const parts: string[] = []
    for (let i = 0; i < doc.countPages(); i++) {
      parts.push(
        doc.loadPage(i).toStructuredText("preserve-whitespace").asText(),
      )
    }
    return parts.join("\n").trim()
  }
  if (ext === "docx") {
    const mammoth = (await import("mammoth")).default
    const result = await mammoth.extractRawText({ buffer: input })
    return (result.value ?? "").trim()
  }
  if (ext === "txt" || ext === "md") {
    return input.toString("utf8")
  }
  throw new ConversionError(
    `Porównanie obsługuje PDF, DOCX i TXT — nie „${ext || "nieznany"}”.`,
  )
}

/** Compare two documents (PDF/DOCX/TXT) and return a text diff. */
export async function compareDocuments(
  files: { buffer: Buffer; name: string }[],
): Promise<SpecialResult> {
  if (files.length !== 2) {
    throw new ConversionError("Dodaj dokładnie dwa pliki do porównania.")
  }
  const [a, b] = files
  const textA = await extractDocText(a.buffer, a.name)
  const textB = await extractDocText(b.buffer, b.name)
  if (!textA && !textB) {
    throw new ConversionError(
      "Oba pliki są bez warstwy tekstowej (np. same skany). Najpierw użyj OCR.",
      422,
    )
  }
  const diff = simpleDiff(textA || "(pusty)", textB || "(pusty)")
  const report = [
    "Toolando — porównanie dokumentów",
    `A: ${a.name}`,
    `B: ${b.name}`,
    "",
    "Legenda: „- ” tylko w A, „+ ” tylko w B, „  ” bez zmian.",
    "",
    diff,
  ].join("\n")
  return {
    buffer: Buffer.from(report, "utf8"),
    filename: "porownanie.txt",
    contentType: "text/plain; charset=utf-8",
    note: report.slice(0, 3500),
  }
}
