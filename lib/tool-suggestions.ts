/** Suggested follow-up tools after a conversion completes. */

const NEXT_BY_TOOL: Record<string, string[]> = {
  "pdf-jpg": ["kompresor-obrazow", "pdf-png", "laczenie-pdf"],
  "pdf-png": ["kompresor-obrazow", "pdf-jpg", "podzial-pdf"],
  "jpg-png": ["kompresor-obrazow", "usun-exif", "znak-wodny"],
  "png-jpg": ["kompresor-obrazow", "zmiana-rozmiaru-obrazu"],
  "mp4-mp3": ["kalkulator-bitrate", "wyciszenie-wideo"],
  "mp4-webm": ["przyciecie-wideo", "wyciszenie-wideo"],
  "docx-pdf": ["podsumowanie", "pdf-do-tekstu", "laczenie-pdf"],
  "heic-jpg": ["kompresor-obrazow", "usun-exif"],
}

const NEXT_BY_SPECIAL: Record<string, string[]> = {
  "podzial-pdf": ["laczenie-pdf", "kompresja-pdf", "pdf-do-tekstu"],
  "laczenie-pdf": ["podzial-pdf", "kompresja-pdf", "obrot-pdf"],
  "pdf-do-tekstu": ["podsumowanie", "generator-tekstu"],
  "kompresor-obrazow": ["usun-exif", "znak-wodny", "zmiana-rozmiaru-obrazu"],
  "zmiana-rozmiaru-obrazu": ["kompresor-obrazow", "znak-wodny"],
}

export function getNextStepToolIds(toolId: string, limit = 3): string[] {
  const list =
    NEXT_BY_TOOL[toolId] ??
    NEXT_BY_SPECIAL[toolId] ??
    ["kompresor-obrazow", "laczenie-pdf", "json-formatter"]
  return list.slice(0, limit)
}
