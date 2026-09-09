import { getConversionsFrom, type ToolConfig } from "@/lib/tools"
import { specialTools, type SpecialToolConfig } from "@/lib/special-tools"

export type FileKind =
  | "image"
  | "video"
  | "audio"
  | "pdf"
  | "text"
  | "document"
  | "data"
  | "archive"
  | "binary"

export type FileAction = {
  id: string
  href: string
  kind: "convert" | "special" | "utility" | "preview"
  /** Stable label key for i18n; UI may also show format names. */
  labelKey: string
  /** Fallback English label */
  label: string
  to?: string
  tipKey?: string
}

const IMAGE_EXT = new Set([
  "png", "jpg", "jpeg", "gif", "webp", "avif", "bmp", "ico", "svg", "apng",
  "heic", "heif", "tiff", "tif", "raw", "cr2", "nef", "arw",
])
const VIDEO_EXT = new Set(["mp4", "webm", "mov", "mkv", "avi", "m4v", "ogv", "wmv", "flv"])
const AUDIO_EXT = new Set(["mp3", "wav", "ogg", "oga", "flac", "m4a", "aac", "opus", "weba", "wma", "aiff"])
const DOC_EXT = new Set(["doc", "docx", "odt", "rtf", "xls", "xlsx", "ppt", "pptx", "odp", "ods"])
const DATA_EXT = new Set(["json", "csv", "tsv", "xml", "yaml", "yml", "toml"])
const ARCHIVE_EXT = new Set(["zip", "rar", "7z", "tar", "gz", "bz2"])
const TEXT_EXT = new Set([
  "txt", "md", "markdown", "html", "htm", "css", "js", "jsx", "ts", "tsx",
  "mjs", "cjs", "log", "ini", "conf", "cfg", "sql", "py", "rb", "go", "rs",
  "java", "c", "h", "cpp", "cs", "php", "sh", "env",
])

/** Special tools recommended per file kind / extension. */
const SPECIAL_BY_EXT: Record<string, string[]> = {
  jpg: ["naprawa-plikow", "kompresor-obrazow", "zmiana-rozmiaru-obrazu", "usun-exif", "usuwanie-tla", "znak-wodny"],
  jpeg: ["naprawa-plikow", "kompresor-obrazow", "zmiana-rozmiaru-obrazu", "usun-exif", "usuwanie-tla", "znak-wodny"],
  png: ["naprawa-plikow", "kompresor-obrazow", "zmiana-rozmiaru-obrazu", "usun-exif", "usuwanie-tla", "znak-wodny"],
  webp: ["naprawa-plikow", "kompresor-obrazow", "zmiana-rozmiaru-obrazu", "usun-exif"],
  avif: ["naprawa-plikow", "kompresor-obrazow", "zmiana-rozmiaru-obrazu"],
  heic: ["naprawa-plikow", "usun-exif", "kompresor-obrazow", "zmiana-rozmiaru-obrazu"],
  heif: ["naprawa-plikow", "usun-exif", "kompresor-obrazow", "zmiana-rozmiaru-obrazu"],
  tiff: ["naprawa-plikow", "kompresor-obrazow", "zmiana-rozmiaru-obrazu", "usun-exif"],
  tif: ["naprawa-plikow", "kompresor-obrazow", "zmiana-rozmiaru-obrazu", "usun-exif"],
  gif: ["naprawa-plikow", "kompresor-obrazow", "zmiana-rozmiaru-obrazu"],
  pdf: [
    "naprawa-plikow",
    "kompresja-pdf",
    "laczenie-pdf",
    "podzial-pdf",
    "obrot-pdf",
    "pdf-do-tekstu",
    "numeracja-pdf",
  ],
  mp4: ["naprawa-plikow", "kompresja-wideo", "przyciecie-wideo", "wyciszenie-wideo"],
  webm: ["naprawa-plikow", "kompresja-wideo", "przyciecie-wideo", "wyciszenie-wideo"],
  mov: ["naprawa-plikow", "kompresja-wideo", "przyciecie-wideo", "wyciszenie-wideo"],
  mkv: ["naprawa-plikow", "kompresja-wideo", "przyciecie-wideo", "wyciszenie-wideo"],
  zip: ["naprawa-plikow"],
  docx: ["naprawa-plikow"],
  xlsx: ["naprawa-plikow"],
  pptx: ["naprawa-plikow"],
  json: ["naprawa-plikow"],
  mp3: ["naprawa-plikow"],
  wav: ["naprawa-plikow"],
  flac: ["naprawa-plikow"],
  m4a: ["naprawa-plikow"],
}

const UTILITY_BY_KIND: Partial<Record<FileKind, { id: string; labelKey: string; label: string }[]>> = {
  image: [
    { id: "inspektor-prywatnosci", labelKey: "privacyCheck", label: "What does this file reveal?" },
    { id: "kalkulator-rozmiaru-pliku", labelKey: "fileSizeCalc", label: "File size calculator" },
    { id: "kalkulator-aspect-ratio", labelKey: "aspectRatio", label: "Aspect ratio" },
  ],
  video: [
    { id: "kalkulator-bitrate", labelKey: "bitrate", label: "Bitrate → file size" },
    { id: "kalkulator-rozmiaru-pliku", labelKey: "fileSizeCalc", label: "File size calculator" },
  ],
  audio: [
    { id: "kalkulator-bitrate", labelKey: "bitrate", label: "Bitrate → file size" },
  ],
  pdf: [
    { id: "inspektor-prywatnosci", labelKey: "privacyCheck", label: "What does this file reveal?" },
  ],
  data: [
    { id: "json-formatter", labelKey: "jsonFormat", label: "JSON formatter" },
    { id: "csv-json", labelKey: "csvJson", label: "CSV ↔ JSON" },
  ],
  text: [
    { id: "markdown-preview", labelKey: "markdown", label: "Markdown preview" },
    { id: "html-markdown", labelKey: "htmlMd", label: "HTML ↔ Markdown" },
  ],
}

export function extOf(name: string): string {
  const dot = name.lastIndexOf(".")
  return dot >= 0 ? name.slice(dot + 1).toLowerCase() : ""
}

export function detectFileKind(file: { name: string; type?: string }): FileKind {
  const ext = extOf(file.name)
  const mime = file.type ?? ""
  if (mime.startsWith("image/") || IMAGE_EXT.has(ext)) return "image"
  if (mime.startsWith("video/") || VIDEO_EXT.has(ext)) return "video"
  if (mime.startsWith("audio/") || AUDIO_EXT.has(ext)) return "audio"
  if (mime === "application/pdf" || ext === "pdf") return "pdf"
  if (DOC_EXT.has(ext)) return "document"
  if (DATA_EXT.has(ext) || mime.includes("json") || mime.includes("csv")) return "data"
  if (ARCHIVE_EXT.has(ext)) return "archive"
  if (mime.startsWith("text/") || TEXT_EXT.has(ext)) return "text"
  return "binary"
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

/** Tip shown for known formats — "sometimes better not to convert". */
export function getFormatTipKey(ext: string): string | null {
  const e = ext.toLowerCase()
  if (e === "heic" || e === "heif") return "heic"
  if (e === "flac") return "flac"
  if (e === "png") return "png"
  if (e === "pdf") return "pdf"
  if (e === "webp" || e === "avif") return "webImage"
  if (e === "wav" || e === "aiff") return "wav"
  return null
}

function specialById(id: string): SpecialToolConfig | undefined {
  return specialTools.find((t) => t.id === id)
}

export function getRecommendedActions(fileName: string, kind: FileKind): FileAction[] {
  const ext = extOf(fileName)
  const actions: FileAction[] = []
  const seen = new Set<string>()

  const push = (action: FileAction) => {
    if (seen.has(action.id)) return
    seen.add(action.id)
    actions.push(action)
  }

  // Preview is always available on the opener page itself.
  push({
    id: "preview",
    href: "/otworz",
    kind: "preview",
    labelKey: "preview",
    label: "Preview here",
  })

  // Special tools first (operations, not just format swaps).
  const specialIds = SPECIAL_BY_EXT[ext] ?? []
  for (const id of specialIds) {
    const tool = specialById(id)
    if (!tool) continue
    push({
      id,
      href: `/tools/${id}`,
      kind: "special",
      labelKey: id,
      label: tool.name,
    })
  }

  // Converters — prefer popular targets first.
  const conversions = getConversionsFrom(ext)
  const preferredTo = preferredTargets(ext, kind)
  const sorted = [...conversions].sort((a, b) => {
    const ai = preferredTo.indexOf(a.to)
    const bi = preferredTo.indexOf(b.to)
    const av = ai === -1 ? 99 : ai
    const bv = bi === -1 ? 99 : bi
    return av - bv
  })

  for (const tool of sorted.slice(0, 8)) {
    push(convertAction(tool))
  }

  // Utilities
  for (const u of UTILITY_BY_KIND[kind] ?? []) {
    push({
      id: u.id,
      href: `/tools/${u.id}`,
      kind: "utility",
      labelKey: u.labelKey,
      label: u.label,
    })
  }

  // Rename utility for any file
  push({
    id: "generator-nazw-plikow",
    href: "/tools/generator-nazw-plikow",
    kind: "utility",
    labelKey: "rename",
    label: "Rename files",
  })

  return actions
}

function convertAction(tool: ToolConfig): FileAction {
  return {
    id: tool.id,
    href: `/tools/${tool.id}`,
    kind: "convert",
    labelKey: "convertTo",
    label: `Convert to ${tool.to.toUpperCase()}`,
    to: tool.to.toUpperCase(),
  }
}

function preferredTargets(ext: string, kind: FileKind): string[] {
  if (ext === "heic" || ext === "heif") return ["jpg", "png", "webp"]
  if (kind === "image") return ["webp", "jpg", "png", "avif", "pdf"]
  if (kind === "audio") return ["mp3", "wav", "flac", "ogg"]
  if (kind === "video") return ["mp4", "webm", "mp3", "gif"]
  if (kind === "pdf" || kind === "document") return ["docx", "png", "jpg", "txt", "pdf"]
  if (kind === "data") return ["xlsx", "csv", "json", "xml"]
  return []
}

export type ProblemMatch = {
  id: string
  keywords: string[]
  titleKey: string
  answerKey: string
  toolIds: string[]
}

/** Natural-language problem → tools (for “What should I do with this file?”). */
export const PROBLEM_MATCHES: ProblemMatch[] = [
  {
    id: "iphone-heic",
    keywords: [
      "iphone", "heic", "heif", "nie moge otworzyc", "can't open", "cannot open",
      "windows", "zdjecie z iphone", "photo from iphone", "ios photo",
    ],
    titleKey: "iphoneHeic",
    answerKey: "iphoneHeic",
    toolIds: ["heic-to-jpg", "heic-to-png", "otworz", "usun-exif"],
  },
  {
    id: "shrink-image",
    keywords: [
      "zmniejszyc zdjecie", "zmniejszyć zdjęcie", "compress image", "shrink photo",
      "za duzy plik", "too large", "kompresja obrazu", "image size",
    ],
    titleKey: "shrinkImage",
    answerKey: "shrinkImage",
    toolIds: ["kompresor-obrazow", "zmiana-rozmiaru-obrazu", "jpg-to-webp"],
  },
  {
    id: "remove-metadata",
    keywords: [
      "usunac metadane", "usuń metadane", "remove metadata", "exif", "gps",
      "prywatnosc", "privacy", "lokalizacja", "location data",
    ],
    titleKey: "removeMeta",
    answerKey: "removeMeta",
    toolIds: ["inspektor-prywatnosci", "usun-exif"],
  },
  {
    id: "pdf-word",
    keywords: [
      "pdf na word", "pdf to word", "pdf do worda", "pdf to docx", "word z pdf",
    ],
    titleKey: "pdfWord",
    answerKey: "pdfWord",
    toolIds: ["pdf-to-docx"],
  },
  {
    id: "video-web",
    keywords: [
      "film na strone", "video for web", "mp4 na webm", "strona internetowa",
      "website video", "webm",
    ],
    titleKey: "videoWeb",
    answerKey: "videoWeb",
    toolIds: ["mp4-to-webm", "kompresja-wideo"],
  },
  {
    id: "mp3-wav",
    keywords: ["mp3 do wav", "mp3 to wav", "wav z mp3", "bezstratne audio"],
    titleKey: "mp3Wav",
    answerKey: "mp3Wav",
    toolIds: ["mp3-to-wav", "mp3-to-flac"],
  },
  {
    id: "csv-excel",
    keywords: ["csv do excel", "csv to excel", "csv to xlsx", "excel z csv"],
    titleKey: "csvExcel",
    answerKey: "csvExcel",
    toolIds: ["csv-to-json", "csv-json"],
  },
  {
    id: "shrink-pdf",
    keywords: [
      "zmniejszyc pdf", "zmniejszyć pdf", "compress pdf", "kompresja pdf",
      "pdf za duzy", "pdf too large",
    ],
    titleKey: "shrinkPdf",
    answerKey: "shrinkPdf",
    toolIds: ["kompresja-pdf", "podzial-pdf"],
  },
  {
    id: "open-dwg",
    keywords: ["otworzyc dwg", "open dwg", "dwg", "autocad"],
    titleKey: "openDwg",
    answerKey: "openDwg",
    toolIds: ["otworz"],
  },
  {
    id: "repair-file",
    keywords: [
      "napraw plik", "naprawic plik", "naprawić plik", "repair file", "fix file",
      "uszkodzony", "corrupt", "corrupted", "nie otwiera sie", "nie otwiera się",
      "broken file", "damaged pdf", "uszkodzony pdf", "uszkodzony zip",
    ],
    titleKey: "repairFile",
    answerKey: "repairFile",
    toolIds: ["naprawa-plikow", "otworz"],
  },
]

export function matchProblem(query: string): ProblemMatch | null {
  const q = query
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
  if (q.length < 3) return null
  let best: ProblemMatch | null = null
  let bestScore = 0
  for (const match of PROBLEM_MATCHES) {
    let score = 0
    for (const kw of match.keywords) {
      const n = kw
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
      if (q.includes(n) || n.includes(q)) score += n.length
    }
    if (score > bestScore) {
      bestScore = score
      best = match
    }
  }
  return bestScore >= 4 ? best : null
}
