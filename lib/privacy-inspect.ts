/**
 * Lightweight client-side JPEG / PNG / WebP privacy inspector.
 * Parses common EXIF / PNG text chunks without uploading the file.
 */

export type PrivacyFinding = {
  key: string
  label: string
  value: string
  severity: "info" | "warn" | "ok"
}

export type PrivacyReport = {
  findings: PrivacyFinding[]
  hasGps: boolean
  hasCamera: boolean
  hasAuthor: boolean
  hasDate: boolean
  summaryKey: "clean" | "warn" | "info"
}

function readAscii(view: DataView, offset: number, length: number): string {
  let s = ""
  for (let i = 0; i < length; i++) {
    const c = view.getUint8(offset + i)
    if (c === 0) break
    if (c >= 32 && c < 127) s += String.fromCharCode(c)
  }
  return s.trim()
}

function readUtf8(bytes: Uint8Array, offset: number, length: number): string {
  try {
    return new TextDecoder("utf-8").decode(bytes.subarray(offset, offset + length)).replace(/\0/g, "").trim()
  } catch {
    return ""
  }
}

type TiffCtx = {
  view: DataView
  little: boolean
  base: number
}

function u16(ctx: TiffCtx, off: number) {
  return ctx.view.getUint16(off, ctx.little)
}
function u32(ctx: TiffCtx, off: number) {
  return ctx.view.getUint32(off, ctx.little)
}

function readTagValue(ctx: TiffCtx, entry: number): number | number[] | string | null {
  const type = u16(ctx, entry + 2)
  const count = u32(ctx, entry + 4)
  const valueOffset = entry + 8
  const typeSize = [0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8][type] ?? 1
  const size = typeSize * count
  let dataOff = valueOffset
  if (size > 4) dataOff = ctx.base + u32(ctx, valueOffset)

  if (type === 2) {
    return readAscii(ctx.view, dataOff, count)
  }
  if (type === 5 && count >= 1) {
    // rational
    const nums: number[] = []
    for (let i = 0; i < Math.min(count, 3); i++) {
      const num = u32(ctx, dataOff + i * 8)
      const den = u32(ctx, dataOff + i * 8 + 4) || 1
      nums.push(num / den)
    }
    return count === 1 ? nums[0]! : nums
  }
  if (type === 3) {
    if (count === 1) return u16(ctx, size > 4 ? dataOff : valueOffset)
    const arr: number[] = []
    for (let i = 0; i < count; i++) arr.push(u16(ctx, dataOff + i * 2))
    return arr
  }
  if (type === 4 || type === 9) {
    if (count === 1) return u32(ctx, size > 4 ? dataOff : valueOffset)
  }
  if (type === 1 || type === 7) {
    if (count === 1) return ctx.view.getUint8(size > 4 ? dataOff : valueOffset)
  }
  return null
}

function parseIfd(
  ctx: TiffCtx,
  offset: number,
  tags: Map<number, number | number[] | string>,
) {
  if (offset <= 0 || offset + 2 > ctx.view.byteLength) return 0
  const count = u16(ctx, offset)
  for (let i = 0; i < count; i++) {
    const entry = offset + 2 + i * 12
    if (entry + 12 > ctx.view.byteLength) break
    const tag = u16(ctx, entry)
    const value = readTagValue(ctx, entry)
    if (value !== null) tags.set(tag, value)
  }
  const next = offset + 2 + count * 12
  if (next + 4 > ctx.view.byteLength) return 0
  return u32(ctx, next)
}

function dmsToDecimal(dms: number[], ref: string): number | null {
  if (!Array.isArray(dms) || dms.length < 3) return null
  let dec = Math.abs(dms[0]!) + dms[1]! / 60 + dms[2]! / 3600
  if (ref === "S" || ref === "W") dec = -dec
  return dec
}

function parseJpegExif(bytes: Uint8Array): Map<number, number | number[] | string> {
  const tags = new Map<number, number | number[] | string>()
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
  if (view.byteLength < 4 || view.getUint16(0) !== 0xffd8) return tags

  let offset = 2
  while (offset + 4 < view.byteLength) {
    if (view.getUint8(offset) !== 0xff) break
    const marker = view.getUint8(offset + 1)
    const size = view.getUint16(offset + 2)
    if (marker === 0xe1) {
      const start = offset + 4
      if (readAscii(view, start, 4) === "Exif") {
        const tiffStart = start + 6
        const endian = view.getUint16(tiffStart)
        const little = endian === 0x4949
        const ctx: TiffCtx = { view, little, base: tiffStart }
        const ifd0 = tiffStart + u32(ctx, tiffStart + 4)
        parseIfd(ctx, ifd0, tags)
        const exifPtr = tags.get(0x8769)
        if (typeof exifPtr === "number") {
          parseIfd(ctx, tiffStart + exifPtr, tags)
        }
        const gpsPtr = tags.get(0x8825)
        if (typeof gpsPtr === "number") {
          parseIfd(ctx, tiffStart + gpsPtr, tags)
        }
      }
      break
    }
    if (marker === 0xda) break // SOS
    offset += 2 + size
  }
  return tags
}

function parsePngText(bytes: Uint8Array): { key: string; value: string }[] {
  const out: { key: string; value: string }[] = []
  if (bytes.length < 8) return out
  // PNG signature
  const sig = [137, 80, 78, 71, 13, 10, 26, 10]
  for (let i = 0; i < 8; i++) if (bytes[i] !== sig[i]) return out

  let offset = 8
  while (offset + 8 < bytes.length) {
    const view = new DataView(bytes.buffer, bytes.byteOffset + offset, 8)
    const length = view.getUint32(0)
    const type = String.fromCharCode(
      bytes[offset + 4]!,
      bytes[offset + 5]!,
      bytes[offset + 6]!,
      bytes[offset + 7]!,
    )
    const dataStart = offset + 8
    if (dataStart + length + 4 > bytes.length) break
    if (type === "tEXt") {
      const data = bytes.subarray(dataStart, dataStart + length)
      const nullIdx = data.indexOf(0)
      if (nullIdx > 0) {
        const key = readUtf8(data, 0, nullIdx)
        const value = readUtf8(data, nullIdx + 1, data.length - nullIdx - 1)
        if (key) out.push({ key, value })
      }
    } else if (type === "iTXt") {
      const data = bytes.subarray(dataStart, dataStart + length)
      const nullIdx = data.indexOf(0)
      if (nullIdx > 0) {
        const key = readUtf8(data, 0, nullIdx)
        // skip compression flag, method, language, translated key
        let p = nullIdx + 1
        p += 2 // compression
        while (p < data.length && data[p] !== 0) p++
        p++
        while (p < data.length && data[p] !== 0) p++
        p++
        const value = readUtf8(data, p, data.length - p)
        if (key) out.push({ key, value })
      }
    }
    if (type === "IEND") break
    offset = dataStart + length + 4
  }
  return out
}

const EXIF_LABELS: Record<number, string> = {
  0x010f: "Camera make",
  0x0110: "Camera model",
  0x0131: "Software",
  0x0132: "Date/time",
  0x013b: "Artist",
  0x8298: "Copyright",
  0x9003: "Date taken",
  0x9004: "Date digitized",
  0xa002: "Width",
  0xa003: "Height",
  0x920a: "Focal length",
  0x829a: "Exposure time",
  0x829d: "F-number",
  0x8827: "ISO",
  0x0001: "GPS lat ref",
  0x0002: "GPS latitude",
  0x0003: "GPS lon ref",
  0x0004: "GPS longitude",
}

export async function inspectFilePrivacy(file: File): Promise<PrivacyReport> {
  const findings: PrivacyFinding[] = []
  const buf = new Uint8Array(await file.slice(0, Math.min(file.size, 512 * 1024)).arrayBuffer())
  const name = file.name.toLowerCase()
  const isJpeg = name.endsWith(".jpg") || name.endsWith(".jpeg") || file.type === "image/jpeg"
  const isPng = name.endsWith(".png") || file.type === "image/png"

  let hasGps = false
  let hasCamera = false
  let hasAuthor = false
  let hasDate = false

  findings.push({
    key: "name",
    label: "File name",
    value: file.name,
    severity: "info",
  })
  findings.push({
    key: "size",
    label: "Size",
    value:
      file.size < 1024 * 1024
        ? `${(file.size / 1024).toFixed(1)} KB`
        : `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
    severity: "info",
  })
  findings.push({
    key: "type",
    label: "MIME",
    value: file.type || "unknown",
    severity: "info",
  })

  if (isJpeg) {
    const tags = parseJpegExif(buf)
    const lat = tags.get(0x0002)
    const lon = tags.get(0x0004)
    const latRef = String(tags.get(0x0001) ?? "N")
    const lonRef = String(tags.get(0x0003) ?? "E")
    if (Array.isArray(lat) && Array.isArray(lon)) {
      const dLat = dmsToDecimal(lat as number[], latRef)
      const dLon = dmsToDecimal(lon as number[], lonRef)
      if (dLat !== null && dLon !== null) {
        hasGps = true
        findings.push({
          key: "gps",
          label: "GPS",
          value: `${dLat.toFixed(5)}, ${dLon.toFixed(5)}`,
          severity: "warn",
        })
      }
    }

    const make = tags.get(0x010f)
    const model = tags.get(0x0110)
    if (typeof make === "string" || typeof model === "string") {
      hasCamera = true
      findings.push({
        key: "camera",
        label: "Camera",
        value: [make, model].filter((x) => typeof x === "string").join(" "),
        severity: "warn",
      })
    }

    const artist = tags.get(0x013b)
    const copyright = tags.get(0x8298)
    if (typeof artist === "string" && artist) {
      hasAuthor = true
      findings.push({
        key: "author",
        label: "Author",
        value: artist,
        severity: "warn",
      })
    } else if (typeof copyright === "string" && copyright) {
      hasAuthor = true
      findings.push({
        key: "copyright",
        label: "Copyright",
        value: copyright,
        severity: "info",
      })
    } else {
      findings.push({
        key: "author",
        label: "Author",
        value: "—",
        severity: "ok",
      })
    }

    const date =
      (typeof tags.get(0x9003) === "string" && tags.get(0x9003)) ||
      (typeof tags.get(0x0132) === "string" && tags.get(0x0132))
    if (typeof date === "string" && date) {
      hasDate = true
      findings.push({
        key: "date",
        label: "Date taken",
        value: date,
        severity: "info",
      })
    }

    const software = tags.get(0x0131)
    if (typeof software === "string" && software) {
      findings.push({
        key: "software",
        label: "Software",
        value: software,
        severity: "info",
      })
    }

    // Remaining interesting tags
    for (const [tag, value] of tags) {
      if ([0x010f, 0x0110, 0x0131, 0x0132, 0x013b, 0x8298, 0x9003, 0x9004, 0x0001, 0x0002, 0x0003, 0x0004, 0x8769, 0x8825].includes(tag))
        continue
      const label = EXIF_LABELS[tag]
      if (!label) continue
      if (typeof value === "string" || typeof value === "number") {
        findings.push({
          key: `tag-${tag}`,
          label,
          value: String(value),
          severity: "info",
        })
      }
    }

    if (!hasGps && !hasCamera && !hasAuthor && tags.size === 0) {
      findings.push({
        key: "exif",
        label: "EXIF",
        value: "No EXIF metadata found in the first scan",
        severity: "ok",
      })
    }
  } else if (isPng) {
    const texts = parsePngText(buf)
    if (texts.length === 0) {
      findings.push({
        key: "png",
        label: "PNG metadata",
        value: "No text chunks found",
        severity: "ok",
      })
    }
    for (const t of texts) {
      const sensitive = /author|copyright|software|comment|description|create|gps|location/i.test(t.key)
      if (/author|artist|copyright/i.test(t.key)) hasAuthor = true
      findings.push({
        key: `png-${t.key}`,
        label: t.key,
        value: t.value || "—",
        severity: sensitive ? "warn" : "info",
      })
    }
  } else if (name.endsWith(".pdf") || file.type === "application/pdf") {
    // Scan PDF info dictionary strings in the head of the file
    const head = readUtf8(buf, 0, Math.min(buf.length, 64 * 1024))
    const fields: [RegExp, string, "warn" | "info"][] = [
      [/\/Author\s*\(([^)]+)\)/i, "Author", "warn"],
      [/\/Creator\s*\(([^)]+)\)/i, "Creator", "info"],
      [/\/Producer\s*\(([^)]+)\)/i, "Producer", "info"],
      [/\/Title\s*\(([^)]+)\)/i, "Title", "info"],
      [/\/CreationDate\s*\(([^)]+)\)/i, "Created", "info"],
      [/\/ModDate\s*\(([^)]+)\)/i, "Modified", "info"],
    ]
    let found = false
    for (const [re, label, severity] of fields) {
      const m = head.match(re)
      if (m?.[1]) {
        found = true
        if (label === "Author") hasAuthor = true
        if (label === "Created" || label === "Modified") hasDate = true
        findings.push({ key: label.toLowerCase(), label, value: m[1], severity })
      }
    }
    if (!found) {
      findings.push({
        key: "pdf",
        label: "PDF metadata",
        value: "No obvious Info dictionary fields in the scanned header",
        severity: "ok",
      })
    }
  } else {
    findings.push({
      key: "format",
      label: "Note",
      value: "Deep metadata scan is available for JPG, PNG and PDF. You can still strip EXIF from supported images.",
      severity: "info",
    })
  }

  const summaryKey: PrivacyReport["summaryKey"] = hasGps || hasAuthor ? "warn" : hasCamera || hasDate ? "info" : "clean"

  return { findings, hasGps, hasCamera, hasAuthor, hasDate, summaryKey }
}
