import { getTool } from "@/lib/tools"
import { getAiTool } from "@/lib/ai-tools"

/**
 * Curated conversion pages safe for Google indexing.
 *
 * The site exposes 250+ converter URLs (matrix). Indexing all of them looks like
 * thin / doorway pages to AdSense and Search Quality. Only primary, high-intent
 * tools stay indexable; the rest remain usable with `noindex`.
 */
export const INDEXABLE_TOOL_IDS = new Set([
  // Audio — most searched
  "mp3-to-wav",
  "wav-to-mp3",
  "mp3-to-flac",
  "flac-to-mp3",
  "mp3-to-ogg",
  "ogg-to-mp3",
  "m4a-to-mp3",
  "aac-to-mp3",
  "wma-to-mp3",
  // Video → audio (own files)
  "mp4-to-mp3",
  "mov-to-mp3",
  "mkv-to-mp3",
  "webm-to-mp3",
  // Video
  "mp4-to-webm",
  "webm-to-mp4",
  "mov-to-mp4",
  "avi-to-mp4",
  "mkv-to-mp4",
  "mp4-to-mov",
  "mp4-to-gif",
  "webm-to-gif",
  "gif-to-mp4",
  // Image
  "jpg-to-png",
  "png-to-jpg",
  "jpg-to-webp",
  "png-to-webp",
  "webp-to-jpg",
  "webp-to-png",
  "png-to-avif",
  "jpg-to-avif",
  "heic-to-jpg",
  "heic-to-png",
  "svg-to-png",
  "tiff-to-jpg",
  // PDF & documents
  "pdf-to-jpg",
  "pdf-to-png",
  "pdf-to-webp",
  "pdf-to-docx",
  "docx-to-pdf",
  "docx-to-txt",
  "md-to-html",
  "html-to-md",
  // Data
  "json-to-csv",
  "csv-to-json",
  "json-to-xml",
  "xml-to-json",
  "csv-to-xlsx",
  "xlsx-to-csv",
  "yaml-to-json",
  "json-to-yaml",
  // Archive & font
  "zip-to-rar",
  "rar-to-zip",
  "ttf-to-woff2",
  "otf-to-woff2",
  "woff2-to-ttf",
])

export function isIndexableTool(id: string): boolean {
  if (getAiTool(id)) return false
  const tool = getTool(id)
  if (!tool?.supported) return false
  return INDEXABLE_TOOL_IDS.has(id)
}
