import { ConversionError } from "@/lib/convert"
import { ffmpegTransform } from "@/lib/ffmpeg-utils"
import type { SpecialResult } from "@/lib/special-convert"

export type RepairKind =
  | "pdf"
  | "image"
  | "video"
  | "audio"
  | "zip"
  | "office"
  | "json"
  | "unknown"

export type RepairReport = {
  kind: RepairKind
  detected: string
  actions: string[]
  warnings: string[]
  repaired: boolean
}

function stemOf(name: string): string {
  const base = name.split(/[/\\]/).pop() ?? name
  const dot = base.lastIndexOf(".")
  return dot > 0 ? base.slice(0, dot) : base
}

function extOf(name: string): string {
  const base = name.split(/[/\\]/).pop() ?? name
  const dot = base.lastIndexOf(".")
  return dot > 0 ? base.slice(dot + 1).toLowerCase() : ""
}

function sniffKind(buf: Buffer, filename: string): { kind: RepairKind; detected: string } {
  const ext = extOf(filename)
  if (buf.length >= 5 && buf.subarray(0, 5).toString("ascii") === "%PDF-") {
    return { kind: "pdf", detected: "PDF" }
  }
  if (buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) {
    return { kind: "image", detected: "JPEG" }
  }
  if (buf.length >= 8 && buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) {
    return { kind: "image", detected: "PNG" }
  }
  if (buf.length >= 12 && buf.subarray(0, 4).toString("ascii") === "RIFF" && buf.subarray(8, 12).toString("ascii") === "WEBP") {
    return { kind: "image", detected: "WebP" }
  }
  if (buf.length >= 6 && (buf.subarray(0, 6).toString("ascii") === "GIF87a" || buf.subarray(0, 6).toString("ascii") === "GIF89a")) {
    return { kind: "image", detected: "GIF" }
  }
  if (buf.length >= 4 && buf.subarray(0, 4).toString("ascii") === "ftyp") {
    // ISO BMFF often has ftyp at offset 4
  }
  if (buf.length >= 8 && buf.subarray(4, 8).toString("ascii") === "ftyp") {
    const brand = buf.subarray(8, 12).toString("ascii").replace(/\0/g, "")
    if (["mp4", "isom", "iso2", "avc1", "M4V", "M4A", "qt  "].some((b) => brand.includes(b.trim()) || brand === b)) {
      if (ext === "m4a" || brand.includes("M4A")) return { kind: "audio", detected: `MPEG-4 audio (${brand})` }
      return { kind: "video", detected: `MPEG-4 / QuickTime (${brand})` }
    }
    return { kind: "video", detected: `BMFF (${brand || "ftyp"})` }
  }
  if (buf.length >= 4 && buf[0] === 0x1a && buf[1] === 0x45 && buf[2] === 0xdf && buf[3] === 0xa3) {
    return { kind: ext === "webm" || ext === "weba" ? (ext === "weba" ? "audio" : "video") : "video", detected: "Matroska/WebM" }
  }
  if (buf.length >= 3 && buf.subarray(0, 3).toString("ascii") === "ID3") {
    return { kind: "audio", detected: "MP3 (ID3)" }
  }
  if (buf.length >= 2 && buf[0] === 0xff && (buf[1] & 0xe0) === 0xe0) {
    return { kind: "audio", detected: "MPEG audio frame" }
  }
  if (buf.length >= 4 && buf.subarray(0, 4).toString("ascii") === "fLaC") {
    return { kind: "audio", detected: "FLAC" }
  }
  if (buf.length >= 4 && buf.subarray(0, 4).toString("ascii") === "OggS") {
    return { kind: ext === "ogv" ? "video" : "audio", detected: "Ogg" }
  }
  if (buf.length >= 4 && buf.subarray(0, 4).toString("ascii") === "RIFF" && buf.subarray(8, 12).toString("ascii") === "WAVE") {
    return { kind: "audio", detected: "WAV" }
  }
  if (buf.length >= 4 && buf[0] === 0x50 && buf[1] === 0x4b && (buf[2] === 0x03 || buf[2] === 0x05 || buf[2] === 0x07)) {
    if (["docx", "xlsx", "pptx", "odt", "ods", "odp"].includes(ext)) {
      return { kind: "office", detected: `Office package (.${ext})` }
    }
    return { kind: "zip", detected: "ZIP archive" }
  }
  if (ext === "json" || (buf.length > 0 && (buf[0] === 0x7b || buf[0] === 0x5b))) {
    return { kind: "json", detected: "JSON-like text" }
  }
  if (["pdf"].includes(ext)) return { kind: "pdf", detected: `PDF (by extension)` }
  if (["jpg", "jpeg", "png", "webp", "gif", "avif", "tiff", "tif", "heic", "heif"].includes(ext)) {
    return { kind: "image", detected: `Image (.${ext})` }
  }
  if (["mp4", "mov", "webm", "mkv", "avi", "m4v"].includes(ext)) {
    return { kind: "video", detected: `Video (.${ext})` }
  }
  if (["mp3", "wav", "flac", "ogg", "m4a", "aac", "opus", "wma"].includes(ext)) {
    return { kind: "audio", detected: `Audio (.${ext})` }
  }
  if (["zip", "rar", "7z"].includes(ext)) return { kind: "zip", detected: `Archive (.${ext})` }
  if (["docx", "xlsx", "pptx"].includes(ext)) return { kind: "office", detected: `Office (.${ext})` }
  return { kind: "unknown", detected: ext ? `Unknown (.${ext})` : "Unknown binary" }
}

function formatReport(report: RepairReport, filename: string): string {
  const lines = [
    "Toolando — raport naprawy pliku",
    `Plik: ${filename}`,
    `Wykryto: ${report.detected} (${report.kind})`,
    `Status: ${report.repaired ? "naprawiono / przepisano" : "bez skutecznej naprawy"}`,
    "",
    "Wykonane kroki:",
    ...(report.actions.length ? report.actions.map((a) => `• ${a}`) : ["• (brak)"]),
    "",
    "Uwagi:",
    ...(report.warnings.length ? report.warnings.map((w) => `• ${w}`) : ["• brak"]),
    "",
    "Uwaga: naprawa nie odzyskuje jakości z formatów stratnych ani plików całkowicie nadpisanych.",
  ]
  return lines.join("\n")
}

async function repairPdf(input: Buffer, name: string, report: RepairReport): Promise<SpecialResult> {
  const { PDFDocument } = await import("pdf-lib")
  try {
    const doc = await PDFDocument.load(input, {
      ignoreEncryption: true,
      updateMetadata: false,
    })
    const pages = doc.getPageCount()
    report.actions.push(`Wczytano PDF (${pages} stron) i zapisano na nowo strukturę.`)
    if (pages === 0) {
      report.warnings.push("PDF nie zawiera stron — wynik może być pusty.")
    }
    const out = Buffer.from(await doc.save({ useObjectStreams: false }))
    report.repaired = true
    return {
      buffer: out,
      filename: `${stemOf(name)}-naprawiony.pdf`,
      contentType: "application/pdf",
      note: formatReport(report, name),
    }
  } catch (err) {
    report.warnings.push(
      `Nie udało się naprawić PDF (${err instanceof Error ? err.message : "błąd"}). Często pomaga otwarcie w Adobe/Preview i „Zapisz jako”.`,
    )
    throw new ConversionError(
      "Ten PDF jest zbyt uszkodzony, żeby go tu naprawić. Spróbuj innego źródła pliku albo zapisu w programie PDF.",
      422,
    )
  }
}

async function repairImage(input: Buffer, name: string, report: RepairReport): Promise<SpecialResult> {
  const sharp = (await import("sharp")).default
  try {
    let image = sharp(input, { failOn: "none", unlimited: true })
    const meta = await image.metadata()
    const format = String(meta.format || extOf(name) || "jpeg")
    report.actions.push(`Odczytano obraz (${format}, ${meta.width ?? "?"}×${meta.height ?? "?"}) z tolerancją błędów.`)
    image = image.rotate()

    let out: Buffer
    let ext: string
    let contentType: string
    switch (format) {
      case "png":
        out = await image.png({ compressionLevel: 9 }).toBuffer()
        ext = "png"
        contentType = "image/png"
        break
      case "webp":
        out = await image.webp({ quality: 90 }).toBuffer()
        ext = "webp"
        contentType = "image/webp"
        break
      case "gif":
        out = await image.gif().toBuffer()
        ext = "gif"
        contentType = "image/gif"
        break
      case "tiff":
        out = await image.tiff().toBuffer()
        ext = "tiff"
        contentType = "image/tiff"
        break
      case "avif":
        out = await image.avif({ quality: 80 }).toBuffer()
        ext = "avif"
        contentType = "image/avif"
        break
      default:
        out = await image.jpeg({ quality: 92, mozjpeg: true }).toBuffer()
        ext = "jpg"
        contentType = "image/jpeg"
        if (format !== "jpeg" && format !== "jpg") {
          report.warnings.push(`Zapisano jako JPG (źródło: ${format}).`)
        }
    }
    report.actions.push("Przepisano piksele do poprawnego kontenera.")
    report.warnings.push("Jeśli plik był obcięty, dolna część kadru może nadal brakować.")
    report.repaired = true
    return {
      buffer: out,
      filename: `${stemOf(name)}-naprawiony.${ext}`,
      contentType,
      note: formatReport(report, name),
    }
  } catch (err) {
    throw new ConversionError(
      `Nie udało się naprawić obrazu: ${err instanceof Error ? err.message : "nieznany błąd"}.`,
      422,
    )
  }
}

async function repairMedia(
  input: Buffer,
  name: string,
  report: RepairReport,
  kind: "video" | "audio",
): Promise<SpecialResult> {
  const ext = extOf(name) || (kind === "audio" ? "mp3" : "mp4")
  const outExt = kind === "audio"
    ? (["mp3", "wav", "flac", "ogg", "m4a", "aac", "opus"].includes(ext) ? ext : "mp3")
    : (["mp4", "webm", "mov", "mkv"].includes(ext) ? ext : "mp4")

  try {
    report.actions.push("Próba remuxu (kopiowanie strumieni bez rekodowania).")
    const remuxed = await ffmpegTransform(input, ext || "bin", outExt, (inPath, outPath) => [
      "-y",
      "-err_detect",
      "ignore_err",
      "-i",
      inPath,
      "-map",
      "0",
      "-c",
      "copy",
      outPath,
    ])
    report.actions.push("Remux zakończony — kontener przepisany.")
    report.repaired = true
    return {
      buffer: remuxed,
      filename: `${stemOf(name)}-naprawiony.${outExt}`,
      contentType: kind === "audio" ? "application/octet-stream" : "video/mp4",
      note: formatReport(report, name),
    }
  } catch {
    report.warnings.push("Remux nie wystarczył — próbuję lekkiego rekodowania.")
  }

  try {
    const encodeExt = kind === "audio" ? "m4a" : "mp4"
    const reencoded = await ffmpegTransform(input, ext || "bin", encodeExt, (inPath, outPath) => {
      if (kind === "audio") {
        return ["-y", "-err_detect", "ignore_err", "-i", inPath, "-vn", "-c:a", "aac", "-b:a", "192k", outPath]
      }
      return [
        "-y",
        "-err_detect",
        "ignore_err",
        "-i",
        inPath,
        "-c:v",
        "libx264",
        "-preset",
        "veryfast",
        "-crf",
        "23",
        "-c:a",
        "aac",
        "-b:a",
        "128k",
        "-movflags",
        "+faststart",
        outPath,
      ]
    })
    report.actions.push("Rekodowanie zakończone — plik powinien się otwierać w typowych odtwarzaczach.")
    report.warnings.push("Rekodowanie może lekko zmienić jakość / bitrate.")
    report.repaired = true
    return {
      buffer: reencoded,
      filename: `${stemOf(name)}-naprawiony.${encodeExt}`,
      contentType: kind === "audio" ? "audio/mp4" : "video/mp4",
      note: formatReport(report, name),
    }
  } catch (err) {
    throw new ConversionError(
      `Nie udało się naprawić pliku ${kind === "audio" ? "audio" : "wideo"}: ${
        err instanceof Error ? err.message.slice(0, 200) : "błąd FFmpeg"
      }`,
      422,
    )
  }
}

async function repairZipLike(input: Buffer, name: string, report: RepairReport): Promise<SpecialResult> {
  const JSZip = (await import("jszip")).default
  let zip: Awaited<ReturnType<typeof JSZip.loadAsync>>
  try {
    zip = await JSZip.loadAsync(input, { checkCRC32: false })
  } catch (err) {
    throw new ConversionError(
      `Archiwum ZIP jest zbyt uszkodzone: ${err instanceof Error ? err.message : "błąd odczytu"}.`,
      422,
    )
  }

  const outZip = new JSZip()
  let kept = 0
  let skipped = 0
  const names = Object.keys(zip.files)
  for (const entryName of names) {
    const entry = zip.files[entryName]
    if (!entry || entry.dir) {
      if (entry?.dir) outZip.folder(entryName)
      continue
    }
    try {
      const data = await entry.async("nodebuffer")
      outZip.file(entryName, data)
      kept++
    } catch {
      skipped++
      report.warnings.push(`Pominięto uszkodzony wpis: ${entryName}`)
    }
  }

  if (kept === 0) {
    throw new ConversionError("Nie udało się odzyskać żadnego pliku z archiwum.", 422)
  }

  report.actions.push(`Przepisano archiwum ZIP (${kept} plików${skipped ? `, pominięto ${skipped}` : ""}).`)
  report.repaired = true
  const ext = extOf(name) || "zip"
  const buffer = Buffer.from(await outZip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" }))
  return {
    buffer,
    filename: `${stemOf(name)}-naprawiony.${ext}`,
    contentType:
      ext === "docx"
        ? "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        : "application/zip",
    note: formatReport(report, name),
  }
}

async function repairJson(input: Buffer, name: string, report: RepairReport): Promise<SpecialResult> {
  const raw = input.toString("utf8")
  try {
    const parsed = JSON.parse(raw)
    const out = Buffer.from(JSON.stringify(parsed, null, 2), "utf8")
    report.actions.push("JSON był poprawny — zapisano sformatowaną kopię.")
    report.repaired = true
    return {
      buffer: out,
      filename: `${stemOf(name)}-naprawiony.json`,
      contentType: "application/json",
      note: formatReport(report, name),
    }
  } catch {
    // Light salvage: strip trailing commas before } or ]
    const salvaged = raw
      .replace(/,\s*([}\]])/g, "$1")
      .replace(/^\uFEFF/, "")
    try {
      const parsed = JSON.parse(salvaged)
      const out = Buffer.from(JSON.stringify(parsed, null, 2), "utf8")
      report.actions.push("Usunięto typowe błędy (np. trailing comma) i zapisano poprawny JSON.")
      report.repaired = true
      return {
        buffer: out,
        filename: `${stemOf(name)}-naprawiony.json`,
        contentType: "application/json",
        note: formatReport(report, name),
      }
    } catch (err) {
      throw new ConversionError(
        `JSON jest zbyt uszkodzony: ${err instanceof Error ? err.message : "błąd składni"}.`,
        422,
      )
    }
  }
}

/**
 * Diagnose + attempt repair for common file types.
 * Honest about limits: no magic recovery of overwritten / encrypted / fully truncated payloads.
 */
export async function repairFile(
  input: Buffer,
  originalName: string,
): Promise<SpecialResult> {
  if (!input.length) {
    throw new ConversionError("Plik jest pusty.", 400)
  }

  const sniff = sniffKind(input, originalName)
  const report: RepairReport = {
    kind: sniff.kind,
    detected: sniff.detected,
    actions: [`Wykryto typ: ${sniff.detected}.`],
    warnings: [],
    repaired: false,
  }

  switch (sniff.kind) {
    case "pdf":
      return repairPdf(input, originalName, report)
    case "image":
      return repairImage(input, originalName, report)
    case "video":
      return repairMedia(input, originalName, report, "video")
    case "audio":
      return repairMedia(input, originalName, report, "audio")
    case "zip":
    case "office":
      return repairZipLike(input, originalName, report)
    case "json":
      return repairJson(input, originalName, report)
    default:
      report.warnings.push(
        "Ten typ nie ma jeszcze automatycznej naprawy. Spróbuj Asystenta plików (/otworz) albo konwersji do popularnego formatu.",
      )
      throw new ConversionError(
        `Nie umiem jeszcze naprawić pliku typu „${sniff.detected}”. Wrzuć PDF, obraz, wideo/audio, ZIP/DOCX albo JSON.`,
        422,
      )
  }
}
