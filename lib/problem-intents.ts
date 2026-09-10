/**
 * Problem-oriented SEO landings (/zrob/[intent]).
 * Maps real user problems → curated tool sets.
 */

export type ProblemIntentId =
  | "nie-otwiera-sie"
  | "za-duzy"
  | "prywatnosc"
  | "skan-do-pdf"
  | "ocr"
  | "podpis-pdf"
  | "porownaj"
  | "naprawa"
  | "redakcja"
  | "wypelnij"
  | "rozdziel-skan"

export type ProblemIntent = {
  id: ProblemIntentId
  toolIds: string[]
}

export const PROBLEM_INTENTS: ProblemIntent[] = [
  {
    id: "nie-otwiera-sie",
    toolIds: ["otworz", "naprawa-plikow", "heic-to-jpg", "ocr-skanu"],
  },
  {
    id: "za-duzy",
    toolIds: [
      "przygotuj-do-maila",
      "kompresja-pdf",
      "kompresor-obrazow",
      "rozdziel-skan",
    ],
  },
  {
    id: "prywatnosc",
    toolIds: [
      "inspektor-prywatnosci",
      "usun-exif",
      "redakcja-pdf",
      "przygotuj-do-maila",
    ],
  },
  {
    id: "skan-do-pdf",
    toolIds: [
      "zdjecia-do-pdf",
      "rozdziel-skan",
      "ocr-skanu",
      "laczenie-pdf",
      "przygotuj-do-maila",
    ],
  },
  {
    id: "ocr",
    toolIds: ["ocr-skanu", "pdf-do-tekstu", "zdjecia-do-pdf"],
  },
  {
    id: "podpis-pdf",
    toolIds: ["podpis-pdf", "wypelnij-pdf", "znak-wodny", "numeracja-pdf"],
  },
  {
    id: "porownaj",
    toolIds: ["porownaj-dokumenty", "ocr-skanu", "pdf-do-tekstu"],
  },
  {
    id: "naprawa",
    toolIds: ["naprawa-plikow", "otworz", "przygotuj-do-maila"],
  },
  {
    id: "redakcja",
    toolIds: ["redakcja-pdf", "inspektor-prywatnosci", "usun-exif", "przygotuj-do-maila"],
  },
  {
    id: "wypelnij",
    toolIds: ["wypelnij-pdf", "podpis-pdf", "numeracja-pdf"],
  },
  {
    id: "rozdziel-skan",
    toolIds: ["rozdziel-skan", "podzial-pdf", "zdjecia-do-pdf", "laczenie-pdf"],
  },
]

export const PROBLEM_INTENT_IDS = PROBLEM_INTENTS.map((p) => p.id)

export function getProblemIntent(id: string): ProblemIntent | undefined {
  return PROBLEM_INTENTS.find((p) => p.id === id)
}
