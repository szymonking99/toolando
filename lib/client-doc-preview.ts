/**
 * Client-side text preview for Office / ZIP-based documents.
 * Keeps the Universal File Assistant from dumping DOCX as hex.
 */

const PREVIEW_MAX = 200_000

function stripXml(xml: string): string {
  return xml
    .replace(/<w:tab\/>/g, "\t")
    .replace(/<w:br\/>/g, "\n")
    .replace(/<\/w:p>/g, "\n")
    .replace(/<a:t[^>]*>/g, "")
    .replace(/<\/a:t>/g, "")
    .replace(/<text:p[^>]*>/g, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

async function fromZipXml(
  file: File,
  paths: string[],
): Promise<string | null> {
  const JSZip = (await import("jszip")).default
  const zip = await JSZip.loadAsync(await file.arrayBuffer())
  const parts: string[] = []
  for (const p of paths) {
    const entry = zip.file(p)
    if (!entry) continue
    const xml = await entry.async("string")
    const text = stripXml(xml)
    if (text) parts.push(text)
  }
  // pptx: gather slide*.xml
  if (parts.length === 0 && paths[0]?.includes("ppt/")) {
    const slides = Object.keys(zip.files)
      .filter((n) => /^ppt\/slides\/slide\d+\.xml$/i.test(n))
      .sort()
    for (const n of slides) {
      const xml = await zip.files[n].async("string")
      const text = stripXml(xml)
      if (text) parts.push(`--- ${n} ---\n${text}`)
    }
  }
  if (parts.length === 0) return null
  return parts.join("\n\n")
}

async function extractDocx(file: File): Promise<string | null> {
  try {
    const mod = await import("mammoth")
    const mammoth = (mod as { default?: typeof mod }).default ?? mod
    const result = await mammoth.extractRawText({
      arrayBuffer: await file.arrayBuffer(),
    })
    const text = (result.value ?? "").trim()
    if (text) return text
  } catch {
    /* fall through to ZIP XML */
  }
  return fromZipXml(file, ["word/document.xml"])
}

async function extractXlsx(file: File): Promise<string | null> {
  // Keep preview light: read shared strings + first sheet cells via ZIP/XML.
  try {
    const JSZip = (await import("jszip")).default
    const zip = await JSZip.loadAsync(await file.arrayBuffer())
    const ssEntry = zip.file("xl/sharedStrings.xml")
    const strings: string[] = []
    if (ssEntry) {
      const ssXml = await ssEntry.async("string")
      const re = /<si\b[^>]*>([\s\S]*?)<\/si>/g
      let m: RegExpExecArray | null
      while ((m = re.exec(ssXml))) {
        const inner = m[1].replace(/<[^>]+>/g, "")
        strings.push(
          inner
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">"),
        )
      }
    }
    const sheet =
      zip.file("xl/worksheets/sheet1.xml") ??
      Object.keys(zip.files)
        .filter((n) => /^xl\/worksheets\/sheet\d+\.xml$/i.test(n))
        .sort()
        .map((n) => zip.file(n))[0]
    if (!sheet) {
      return strings.length ? strings.slice(0, 200).join("\n") : null
    }
    const sheetXml = await sheet.async("string")
    const rows: string[] = []
    const rowRe = /<row\b[^>]*>([\s\S]*?)<\/row>/g
    let rowMatch: RegExpExecArray | null
    let rowCount = 0
    while ((rowMatch = rowRe.exec(sheetXml)) && rowCount < 80) {
      const cells: string[] = []
      const cellRe = /<c\b([^>]*)>([\s\S]*?)<\/c>|<c\b([^>]*)\/>/g
      let c: RegExpExecArray | null
      while ((c = cellRe.exec(rowMatch[1] ?? ""))) {
        const attrs = c[1] || c[3] || ""
        const body = c[2] || ""
        const isShared = /\bt="s"/.test(attrs)
        const v = body.match(/<v>([\s\S]*?)<\/v>/)?.[1] ?? ""
        if (isShared) {
          const idx = Number(v)
          cells.push(Number.isFinite(idx) ? strings[idx] ?? "" : "")
        } else {
          const inline = body.match(/<t[^>]*>([\s\S]*?)<\/t>/)?.[1]
          cells.push(inline ?? v)
        }
      }
      if (cells.some((x) => x.trim())) {
        rows.push(cells.join("\t"))
        rowCount++
      }
    }
    const text = rows.join("\n").trim()
    return text || null
  } catch {
    return null
  }
}

/**
 * Returns plain-text preview for known document types, or null if unsupported.
 */
export async function extractDocumentPreview(
  file: File,
): Promise<{ text: string; truncated: boolean } | null> {
  const name = file.name.toLowerCase()
  const ext = name.includes(".") ? name.slice(name.lastIndexOf(".") + 1) : ""

  let raw: string | null = null
  if (ext === "docx") raw = await extractDocx(file)
  else if (ext === "xlsx") raw = await extractXlsx(file)
  else if (ext === "pptx") raw = await fromZipXml(file, ["ppt/slides/slide1.xml"])
  else if (ext === "odt") raw = await fromZipXml(file, ["content.xml"])
  else if (ext === "rtf") {
    const slice = await file.slice(0, PREVIEW_MAX).text()
    raw = slice
      .replace(/\\par[d]?/g, "\n")
      .replace(/\{\\[^{}]+/g, "")
      .replace(/[{}\\]/g, "")
      .replace(/\n{3,}/g, "\n\n")
      .trim()
  } else if (ext === "doc") {
    // Legacy .doc is OLE compound — don't dump as UTF-8 garbage.
    return null
  }

  if (!raw) return null
  const truncated = raw.length > PREVIEW_MAX
  return {
    text: truncated ? raw.slice(0, PREVIEW_MAX) : raw,
    truncated,
  }
}

export function isOfficeDocumentName(name: string): boolean {
  const ext = name.toLowerCase().split(".").pop() ?? ""
  return ["doc", "docx", "odt", "rtf", "xls", "xlsx", "ppt", "pptx", "odp", "ods"].includes(ext)
}
