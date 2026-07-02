import "server-only"

/**
 * Extract plain text from a user-uploaded document for AI processing.
 * Supports PDF, DOCX, and common plain-text / data formats.
 */
export async function extractTextForAI(
  input: Buffer,
  filename: string,
): Promise<string> {
  const ext = filename.split(".").pop()?.toLowerCase() ?? ""

  switch (ext) {
    case "pdf":
      return extractPdf(input)
    case "docx":
      return extractDocx(input)
    case "txt":
    case "md":
    case "markdown":
    case "csv":
    case "tsv":
    case "json":
    case "xml":
    case "yaml":
    case "yml":
    case "html":
    case "htm":
    case "rtf":
      return input.toString("utf8")
    default:
      // Best-effort: treat unknown files as UTF-8 text.
      return input.toString("utf8")
  }
}

async function extractPdf(input: Buffer): Promise<string> {
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
  return parts.join("\n\n")
}

async function extractDocx(input: Buffer): Promise<string> {
  const JSZip = (await import("jszip")).default
  const zip = await JSZip.loadAsync(input)
  const doc = zip.file("word/document.xml")
  if (!doc) return ""
  const xml = await doc.async("string")
  return xml
    .replace(/<w:p[^>]*>/g, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}
