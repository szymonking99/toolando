import type { FormatCategory } from "./types"

export type FormatMeta = {
  category: FormatCategory
  compression: string
  mimeType: string
}

/** Technical metadata for every supported format extension. */
export const FORMAT_META: Record<string, FormatMeta> = {
  mp3: { category: "audio", compression: "lossy", mimeType: "audio/mpeg" },
  wav: { category: "audio", compression: "lossless", mimeType: "audio/wav" },
  flac: { category: "audio", compression: "lossless", mimeType: "audio/flac" },
  ogg: { category: "audio", compression: "lossy", mimeType: "audio/ogg" },
  m4a: { category: "audio", compression: "lossy", mimeType: "audio/mp4" },
  aac: { category: "audio", compression: "lossy", mimeType: "audio/aac" },
  opus: { category: "audio", compression: "lossy", mimeType: "audio/opus" },
  aiff: { category: "audio", compression: "lossless", mimeType: "audio/aiff" },
  wma: { category: "audio", compression: "lossy", mimeType: "audio/x-ms-wma" },
  mp4: { category: "video", compression: "lossy", mimeType: "video/mp4" },
  webm: { category: "video", compression: "lossy", mimeType: "video/webm" },
  mov: { category: "video", compression: "lossy", mimeType: "video/quicktime" },
  avi: { category: "video", compression: "lossy", mimeType: "video/x-msvideo" },
  mkv: { category: "video", compression: "container", mimeType: "video/x-matroska" },
  flv: { category: "video", compression: "lossy", mimeType: "video/x-flv" },
  wmv: { category: "video", compression: "lossy", mimeType: "video/x-ms-wmv" },
  "3gp": { category: "video", compression: "lossy", mimeType: "video/3gpp" },
  m4v: { category: "video", compression: "lossy", mimeType: "video/x-m4v" },
  mpg: { category: "video", compression: "lossy", mimeType: "video/mpeg" },
  gif: { category: "image", compression: "lossless", mimeType: "image/gif" },
  png: { category: "image", compression: "lossless", mimeType: "image/png" },
  jpg: { category: "image", compression: "lossy", mimeType: "image/jpeg" },
  webp: { category: "image", compression: "both", mimeType: "image/webp" },
  avif: { category: "image", compression: "lossy", mimeType: "image/avif" },
  tiff: { category: "image", compression: "lossless", mimeType: "image/tiff" },
  svg: { category: "image", compression: "vector", mimeType: "image/svg+xml" },
  heic: { category: "image", compression: "lossy", mimeType: "image/heic" },
  pdf: { category: "document", compression: "mixed", mimeType: "application/pdf" },
  docx: { category: "document", compression: "container", mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" },
  md: { category: "document", compression: "text", mimeType: "text/markdown" },
  html: { category: "document", compression: "text", mimeType: "text/html" },
  txt: { category: "document", compression: "text", mimeType: "text/plain" },
  rtf: { category: "document", compression: "text", mimeType: "application/rtf" },
  odt: { category: "document", compression: "container", mimeType: "application/vnd.oasis.opendocument.text" },
  json: { category: "data", compression: "text", mimeType: "application/json" },
  csv: { category: "data", compression: "text", mimeType: "text/csv" },
  tsv: { category: "data", compression: "text", mimeType: "text/tab-separated-values" },
  xml: { category: "data", compression: "text", mimeType: "application/xml" },
  yaml: { category: "data", compression: "text", mimeType: "application/yaml" },
  xlsx: { category: "data", compression: "container", mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" },
  zip: { category: "archive", compression: "lossless", mimeType: "application/zip" },
  rar: { category: "archive", compression: "lossless", mimeType: "application/vnd.rar" },
  "7z": { category: "archive", compression: "lossless", mimeType: "application/x-7z-compressed" },
  ico: { category: "image", compression: "lossless", mimeType: "image/x-icon" },
  ttf: { category: "font", compression: "none", mimeType: "font/ttf" },
  otf: { category: "font", compression: "none", mimeType: "font/otf" },
  woff: { category: "font", compression: "lossless", mimeType: "font/woff" },
  woff2: { category: "font", compression: "lossless", mimeType: "font/woff2" },
}

export const ALL_FORMAT_IDS = Object.keys(FORMAT_META).sort()

export function getFormatMeta(id: string): FormatMeta | undefined {
  return FORMAT_META[id]
}
