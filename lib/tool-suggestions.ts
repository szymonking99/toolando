/** Suggested follow-up tools after a conversion completes. */

const NEXT_BY_TOOL: Record<string, string[]> = {
  "pdf-to-jpg": ["kompresor-obrazow", "pdf-do-obrazow", "laczenie-pdf"],
  "pdf-to-png": ["kompresor-obrazow", "pdf-do-obrazow", "podzial-pdf"],
  "jpg-to-png": ["kompresor-obrazow", "usun-exif", "znak-wodny"],
  "png-to-jpg": ["kompresor-obrazow", "zmiana-rozmiaru-obrazu", "lustro-obrazu"],
  "mp4-to-mp3": ["kompresja-audio", "kalkulator-bitrate"],
  "mp4-to-webm": ["przyciecie-wideo", "kompresja-wideo", "zmiana-rozmiaru-wideo"],
  "docx-to-pdf": ["pdf-do-tekstu", "laczenie-pdf", "kompresja-pdf"],
  "heic-to-jpg": ["kompresor-obrazow", "usun-exif", "lustro-obrazu"],
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
  "audio-z-wideo": ["kompresja-audio", "wyciszenie-wideo", "kalkulator-bitrate"],
  "kompresja-audio": ["audio-z-wideo", "kalkulator-bitrate"],
  "pdf-do-obrazow": ["kompresor-obrazow", "zdjecia-do-pdf", "ocr-skanu"],
  "rozpakuj-zip": ["spakuj-zip", "naprawa-plikow"],
  "spakuj-zip": ["rozpakuj-zip", "przygotuj-do-maila"],
  "lustro-obrazu": ["obrot-obrazu", "przyciecie-obrazu", "kompresor-obrazow"],
  "obrot-obrazu": ["lustro-obrazu", "przyciecie-obrazu", "kompresor-obrazow"],
  "przyciecie-obrazu": ["zmiana-rozmiaru-obrazu", "kompresor-obrazow"],
  "zmiana-rozmiaru-wideo": ["kompresja-wideo", "przyciecie-wideo", "scalanie-wideo"],
  "scalanie-wideo": ["kompresja-wideo", "zmiana-rozmiaru-wideo"],
  "wideo-do-gif": ["przyciecie-wideo", "kompresja-wideo"],
  "pdf-haslo": ["redakcja-pdf", "przygotuj-do-maila"],
  "wybor-stron-pdf": ["podzial-pdf", "laczenie-pdf", "pdf-do-obrazow"],
}

export function getNextStepToolIds(toolId: string, limit = 3): string[] {
  const list =
    NEXT_BY_TOOL[toolId] ??
    NEXT_BY_SPECIAL[toolId] ??
    ["kompresor-obrazow", "laczenie-pdf", "json-formatter"]
  return list.slice(0, limit)
}
