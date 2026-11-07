import { NextRequest } from "next/server"
import { getSpecialTool } from "@/lib/special-tools"
import { ConversionError } from "@/lib/convert"
import { readIntake } from "@/lib/upload-intake"
import {
  compressImage,
  mergePdfs,
  removeImageBackground,
  splitPdf,
  rotatePdf,
  compressPdf,
  pdfToText,
  resizeImage,
  stripExif,
  watermarkImage,
  muteVideo,
  trimVideo,
  compressVideo,
  addPdfPageNumbers,
  imagesToPdf,
  extractAudio,
  videoToGif,
  protectPdf,
  rotateImage,
  cropImage,
  extractPdfPages,
  mergeVideos,
  packZip,
  unpackZip,
  pdfToImages,
  compressAudio,
  flipImage,
  resizeVideo,
  type SpecialResult,
} from "@/lib/special-convert"
import { repairFile } from "@/lib/file-repair"
import {
  ocrDocument,
  stampPdf,
  prepareForEmail,
  compareDocuments,
} from "@/lib/office-workflows"
import { redactPdf, fillPdfForm } from "@/lib/office-privacy"
import { parseTimeToSeconds } from "@/lib/ffmpeg-utils"
import { MAX_UPLOAD_BYTES, uploadTooLargeMessage } from "@/lib/upload-limit"

export const runtime = "nodejs"
export const maxDuration = 60

async function zipResults(
  results: SpecialResult[],
  zipName: string,
): Promise<SpecialResult> {
  const JSZip = (await import("jszip")).default
  const zip = new JSZip()
  const used = new Set<string>()
  for (const r of results) {
    let name = r.filename
    if (used.has(name)) {
      const dot = name.lastIndexOf(".")
      const stem = dot > 0 ? name.slice(0, dot) : name
      const ext = dot > 0 ? name.slice(dot) : ""
      let i = 2
      while (used.has(`${stem}-${i}${ext}`)) i++
      name = `${stem}-${i}${ext}`
    }
    used.add(name)
    zip.file(name, r.buffer)
  }
  const buffer = await zip.generateAsync({ type: "nodebuffer" })
  return {
    buffer,
    filename: zipName,
    contentType: "application/zip",
  }
}

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
      if (file.buffer.length > MAX_UPLOAD_BYTES) {
        return json({ error: uploadTooLargeMessage() }, 413)
      }
    }

    let result: SpecialResult

    switch (tool.engine) {
      case "compress-image": {
        const quality = Number(intake.field("quality") ?? 75)
        if (files.length > 1) {
          const parts = await Promise.all(
            files.map((f) => compressImage(f.buffer, f.name, quality)),
          )
          result = await zipResults(parts, "skompresowane-obrazy.zip")
        } else {
          result = await compressImage(files[0].buffer, files[0].name, quality)
        }
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
      case "split-pdf": {
        const splitMode =
          intake.field("splitMode") === "range" ? "range" : "all"
        result = await splitPdf(
          files[0].buffer,
          files[0].name,
          splitMode,
          intake.field("pageRange") ?? "",
        )
        break
      }
      case "rotate-pdf": {
        const rot = Number(intake.field("rotation") ?? 90)
        const degrees = rot === 180 || rot === 270 ? rot : 90
        result = await rotatePdf(
          files[0].buffer,
          files[0].name,
          degrees as 90 | 180 | 270,
        )
        break
      }
      case "compress-pdf": {
        result = await compressPdf(files[0].buffer, files[0].name)
        break
      }
      case "pdf-to-text": {
        result = await pdfToText(files[0].buffer, files[0].name)
        break
      }
      case "resize-image": {
        const width = Number(intake.field("width") ?? 0)
        const height = Number(intake.field("height") ?? 0)
        if (files.length > 1) {
          const parts = await Promise.all(
            files.map((f) =>
              resizeImage(
                f.buffer,
                f.name,
                width || undefined,
                height || undefined,
              ),
            ),
          )
          result = await zipResults(parts, "zmiana-rozmiaru.zip")
        } else {
          result = await resizeImage(
            files[0].buffer,
            files[0].name,
            width || undefined,
            height || undefined,
          )
        }
        break
      }
      case "strip-exif": {
        if (files.length > 1) {
          const parts = await Promise.all(
            files.map((f) => stripExif(f.buffer, f.name)),
          )
          result = await zipResults(parts, "bez-exif.zip")
        } else {
          result = await stripExif(files[0].buffer, files[0].name)
        }
        break
      }
      case "watermark-image": {
        result = await watermarkImage(
          files[0].buffer,
          files[0].name,
          intake.field("watermarkText") ?? "toolando.tech",
        )
        break
      }
      case "mute-video": {
        result = await muteVideo(files[0].buffer, files[0].name)
        break
      }
      case "trim-video": {
        const startSec = parseTimeToSeconds(intake.field("trimStart") ?? "0")
        const endSec = parseTimeToSeconds(intake.field("trimEnd") ?? "0")
        result = await trimVideo(
          files[0].buffer,
          files[0].name,
          startSec,
          endSec,
        )
        break
      }
      case "compress-video": {
        const quality = Number(intake.field("quality") ?? 75)
        result = await compressVideo(files[0].buffer, files[0].name, quality)
        break
      }
      case "pdf-page-numbers": {
        const pos =
          intake.field("pageNumberPosition") === "top" ? "top" : "bottom"
        result = await addPdfPageNumbers(files[0].buffer, files[0].name, pos)
        break
      }
      case "repair-file": {
        result = await repairFile(files[0].buffer, files[0].name)
        break
      }
      case "images-to-pdf": {
        const pageSize =
          intake.field("pageSize") === "letter" ? "letter" : "a4"
        const fit = intake.field("fit") === "cover" ? "cover" : "contain"
        const quality = Number(intake.field("quality") ?? 85)
        result = await imagesToPdf(
          files.map((f) => ({ buffer: f.buffer, name: f.name })),
          { pageSize, fit, quality },
        )
        break
      }
      case "ocr-document": {
        if (files.length > 1) {
          const parts = await Promise.all(
            files.map((f) => ocrDocument(f.buffer, f.name)),
          )
          result = await zipResults(parts, "ocr-batch.zip")
          result.note = `OCR: ${parts.length} plików w ZIP.`
        } else {
          result = await ocrDocument(files[0].buffer, files[0].name)
        }
        break
      }
      case "stamp-pdf": {
        const stampImage = files.find((f) =>
          /\.(png|jpe?g|webp)$/i.test(f.name),
        )
        const pdfs = files.filter((f) => f.name.toLowerCase().endsWith(".pdf"))
        if (pdfs.length === 0) {
          return json(
            { error: "Dodaj co najmniej jeden PDF (opcjonalnie obraz pieczątki)." },
            400,
          )
        }
        const positionRaw = intake.field("stampPosition") ?? "bottom-right"
        const position = (
          ["bottom-right", "bottom-left", "top-right", "center"] as const
        ).includes(positionRaw as never)
          ? (positionRaw as
              | "bottom-right"
              | "bottom-left"
              | "top-right"
              | "center")
          : "bottom-right"
        const stampOpts = {
          text: intake.field("stampText") ?? "toolando.tech",
          position,
          stampImage: stampImage?.buffer,
        }
        if (pdfs.length > 1) {
          const parts = await Promise.all(
            pdfs.map((f) => stampPdf(f.buffer, f.name, stampOpts)),
          )
          result = await zipResults(parts, "podpisane-pdf.zip")
        } else {
          result = await stampPdf(pdfs[0].buffer, pdfs[0].name, stampOpts)
        }
        break
      }
      case "prepare-email": {
        result = await prepareForEmail(
          files.map((f) => ({ buffer: f.buffer, name: f.name })),
          {
            quality: Number(intake.field("quality") ?? 72),
            makePdf: intake.field("makePdf") === "1",
          },
        )
        break
      }
      case "compare-documents": {
        if (files.length !== 2) {
          return json({ error: "Dodaj dokładnie dwa pliki do porównania." }, 400)
        }
        result = await compareDocuments(
          files.map((f) => ({ buffer: f.buffer, name: f.name })),
        )
        break
      }
      case "redact-pdf": {
        result = await redactPdf(files[0].buffer, files[0].name, {
          customPatterns: intake.field("redactPatterns") ?? "",
          emails: intake.field("redactEmails") !== "0",
          pesel: intake.field("redactPesel") !== "0",
          iban: intake.field("redactIban") !== "0",
          phones: intake.field("redactPhones") === "1",
        })
        break
      }
      case "fill-pdf": {
        const positionRaw = intake.field("stampPosition") ?? "bottom-right"
        const position = (
          ["bottom-right", "bottom-left", "top-right", "center"] as const
        ).includes(positionRaw as never)
          ? (positionRaw as
              | "bottom-right"
              | "bottom-left"
              | "top-right"
              | "center")
          : "bottom-right"
        result = await fillPdfForm(files[0].buffer, files[0].name, {
          fullName: intake.field("fillName") ?? "",
          nip: intake.field("fillNip") ?? "",
          date: intake.field("fillDate") ?? "",
          extra: intake.field("fillExtra") ?? "",
          position,
        })
        break
      }
      case "extract-audio": {
        const fmtRaw = (intake.field("audioFormat") ?? "mp3").toLowerCase()
        const format = (
          ["mp3", "m4a", "wav"] as const
        ).includes(fmtRaw as never)
          ? (fmtRaw as "mp3" | "m4a" | "wav")
          : "mp3"
        result = await extractAudio(files[0].buffer, files[0].name, format)
        break
      }
      case "video-to-gif": {
        const startSec = parseTimeToSeconds(intake.field("trimStart") ?? "0")
        const endSec = parseTimeToSeconds(intake.field("trimEnd") ?? "5")
        const quality = Number(intake.field("quality") ?? 70)
        result = await videoToGif(
          files[0].buffer,
          files[0].name,
          startSec,
          endSec,
          quality,
        )
        break
      }
      case "protect-pdf": {
        result = await protectPdf(
          files[0].buffer,
          files[0].name,
          intake.field("pdfPassword") ?? "",
        )
        break
      }
      case "rotate-image": {
        const rot = Number(intake.field("rotation") ?? 90)
        const degrees = ([90, 180, 270] as const).includes(rot as never)
          ? (rot as 90 | 180 | 270)
          : 90
        result = await rotateImage(files[0].buffer, files[0].name, degrees)
        break
      }
      case "crop-image": {
        result = await cropImage(
          files[0].buffer,
          files[0].name,
          Number(intake.field("cropLeft") ?? 0),
          Number(intake.field("cropTop") ?? 0),
          Number(intake.field("cropWidth") ?? 0),
          Number(intake.field("cropHeight") ?? 0),
        )
        break
      }
      case "extract-pdf-pages": {
        result = await extractPdfPages(
          files[0].buffer,
          files[0].name,
          intake.field("pageOrder") ?? "",
        )
        break
      }
      case "merge-video": {
        if (files.length < 2) {
          return json({ error: "Dodaj co najmniej dwa pliki wideo." }, 400)
        }
        result = await mergeVideos(
          files.map((f) => ({ buffer: f.buffer, name: f.name })),
        )
        break
      }
      case "pack-zip": {
        result = await packZip(
          files.map((f) => ({ buffer: f.buffer, name: f.name })),
        )
        break
      }
      case "unpack-zip": {
        result = await unpackZip(files[0].buffer, files[0].name)
        break
      }
      case "pdf-to-images": {
        result = await pdfToImages(files[0].buffer, files[0].name)
        break
      }
      case "compress-audio": {
        result = await compressAudio(
          files[0].buffer,
          files[0].name,
          Number(intake.field("quality") ?? 70),
        )
        break
      }
      case "flip-image": {
        const dirRaw = intake.field("flipDirection") ?? "horizontal"
        const direction = (
          ["horizontal", "vertical", "both"] as const
        ).includes(dirRaw as never)
          ? (dirRaw as "horizontal" | "vertical" | "both")
          : "horizontal"
        result = await flipImage(files[0].buffer, files[0].name, direction)
        break
      }
      case "resize-video": {
        result = await resizeVideo(
          files[0].buffer,
          files[0].name,
          Number(intake.field("width") ?? 1280),
          Number(intake.field("height") ?? 0),
        )
        break
      }
      default:
        return json({ error: "Nieobsługiwane narzędzie." }, 400)
    }

    const headers: Record<string, string> = {
      "Content-Type": result.contentType,
      "Content-Disposition": `attachment; filename="${encodeURIComponent(
        result.filename,
      )}"`,
      "Content-Length": String(result.buffer.length),
      "Cache-Control": "no-store",
    }
    if (result.note) {
      headers["X-Toolando-Report"] = encodeURIComponent(result.note.slice(0, 3500))
    }

    return new Response(new Uint8Array(result.buffer), {
      status: 200,
      headers,
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
