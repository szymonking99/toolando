/** Suggested follow-up tools after a conversion completes. */

const NEXT_BY_TOOL: Record<string, string[]> = {
  "pdf-jpg": ["kompresor-obrazow", "pdf-png", "laczenie-pdf"],
  "pdf-png": ["kompresor-obrazow", "pdf-jpg", "podzial-pdf"],
  "jpg-png": ["kompresor-obrazow", "usun-exif", "znak-wodny"],
  "png-jpg": ["kompresor-obrazow", "zmiana-rozmiaru-obrazu"],
  "mp4-mp3": ["kalkulator-bitrate", "wyciszenie-wideo"],
  "mp4-webm": ["przyciecie-wideo", "kompresja-wideo", "wyciszenie-wideo"],
  "docx-pdf": ["podsumowanie", "pdf-do-tekstu", "laczenie-pdf"],
  "heic-jpg": ["kompresor-obrazow", "usun-exif"],
}

const NEXT_BY_SPECIAL: Record<string, string[]> = {
  "podzial-pdf": ["laczenie-pdf", "kompresja-pdf", "pdf-do-tekstu"],
  "rozdziel-skan": ["zdjecia-do-pdf", "przygotuj-do-maila", "ocr-skanu"],
  "laczenie-pdf": ["podzial-pdf", "kompresja-pdf", "numeracja-pdf"],
  "kompresja-pdf": ["numeracja-pdf", "podzial-pdf", "pdf-do-tekstu"],
  "numeracja-pdf": ["laczenie-pdf", "podsumowanie", "kompresja-pdf"],
  "kompresja-wideo": ["przyciecie-wideo", "wyciszenie-wideo"],
  "pdf-do-tekstu": ["podsumowanie", "generator-tekstu"],
  "kompresor-obrazow": ["usun-exif", "znak-wodny", "zmiana-rozmiaru-obrazu"],
  "zmiana-rozmiaru-obrazu": ["kompresor-obrazow", "znak-wodny"],
  "ocr-skanu": ["porownaj-dokumenty", "przygotuj-do-maila", "redakcja-pdf"],
  "podpis-pdf": ["wypelnij-pdf", "numeracja-pdf", "przygotuj-do-maila"],
  "przygotuj-do-maila": ["redakcja-pdf", "kompresja-pdf", "usun-exif"],
  "porownaj-dokumenty": ["ocr-skanu", "pdf-do-tekstu", "podsumowanie"],
  "redakcja-pdf": ["przygotuj-do-maila", "inspektor-prywatnosci", "usun-exif"],
  "wypelnij-pdf": ["podpis-pdf", "numeracja-pdf", "przygotuj-do-maila"],
  "zdjecia-do-pdf": ["rozdziel-skan", "ocr-skanu", "przygotuj-do-maila"],
}

export function getNextStepToolIds(toolId: string, limit = 3): string[] {
  const list =
    NEXT_BY_TOOL[toolId] ??
    NEXT_BY_SPECIAL[toolId] ??
    ["kompresor-obrazow", "laczenie-pdf", "json-formatter"]
  return list.slice(0, limit)
}
