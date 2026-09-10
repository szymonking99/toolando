import { categories, type CategoryMeta } from "@/lib/tools"
import { specialTools, type SpecialToolConfig } from "@/lib/special-tools"
import {
  utilityTools,
  type UtilityCategory,
  type UtilityToolConfig,
} from "@/lib/utility-tools"

/** Top-level product hubs (navbar + /tools). */
export type ToolHubId = "converters" | "calculators" | "developer" | "ai"

export type UtilityBrowseGroup = {
  id: UtilityCategory
  hub: "calculators" | "developer"
  utilityIds: UtilityToolConfig["id"][]
}

/** Special file tools attached to converter browse categories. */
const SPECIALS_BY_CATEGORY: Record<string, SpecialToolConfig["id"][]> = {
  documents: [
    "zdjecia-do-pdf",
    "ocr-skanu",
    "podpis-pdf",
    "porownaj-dokumenty",
    "przygotuj-do-maila",
    "laczenie-pdf",
    "podzial-pdf",
    "kompresja-pdf",
    "obrot-pdf",
    "pdf-do-tekstu",
    "numeracja-pdf",
    "naprawa-plikow",
  ],
  pdf: [
    "zdjecia-do-pdf",
    "ocr-skanu",
    "podpis-pdf",
    "porownaj-dokumenty",
    "przygotuj-do-maila",
    "podzial-pdf",
    "kompresja-pdf",
    "obrot-pdf",
    "pdf-do-tekstu",
    "laczenie-pdf",
    "numeracja-pdf",
    "naprawa-plikow",
  ],
  image: [
    "zdjecia-do-pdf",
    "przygotuj-do-maila",
    "ocr-skanu",
    "kompresor-obrazow",
    "usuwanie-tla",
    "zmiana-rozmiaru-obrazu",
    "usun-exif",
    "znak-wodny",
    "naprawa-plikow",
  ],
  video: ["wyciszenie-wideo", "przyciecie-wideo", "kompresja-wideo", "naprawa-plikow"],
  audio: ["naprawa-plikow"],
  archive: ["naprawa-plikow"],
  data: ["naprawa-plikow"],
}

export const CALCULATOR_CATEGORIES: UtilityCategory[] = [
  "finance",
  "time",
  "units",
  "media",
]

export const DEVELOPER_CATEGORIES: UtilityCategory[] = ["text", "dev", "privacy"]

export function getConverterCategories(): CategoryMeta[] {
  return categories
}

export function getSpecialsForCategory(slug: string): SpecialToolConfig[] {
  const ids = SPECIALS_BY_CATEGORY[slug] ?? []
  return ids
    .map((id) => specialTools.find((t) => t.id === id))
    .filter((t): t is SpecialToolConfig => Boolean(t))
}

export function getUtilitiesByCategory(
  category: UtilityCategory,
): UtilityToolConfig[] {
  return utilityTools.filter((t) => t.category === category)
}

export function getCalculatorUtilities(): UtilityToolConfig[] {
  return utilityTools.filter((t) =>
    CALCULATOR_CATEGORIES.includes(t.category),
  )
}

export function getDeveloperUtilities(): UtilityToolConfig[] {
  return utilityTools.filter((t) =>
    DEVELOPER_CATEGORIES.includes(t.category),
  )
}

export const utilityBrowseGroups: UtilityBrowseGroup[] = [
  {
    id: "finance",
    hub: "calculators",
    utilityIds: ["przelicznik-walut", "kalkulator-vat", "kalkulator-kredytu", "kalkulator-b2b", "kalkulator-procentow", "kalkulator-roi"],
  },
  {
    id: "time",
    hub: "calculators",
    utilityIds: ["kalkulator-dat", "strefy-czasowe", "kalkulator-wieku"],
  },
  {
    id: "units",
    hub: "calculators",
    utilityIds: ["przelicznik-jednostek"],
  },
  {
    id: "media",
    hub: "calculators",
    utilityIds: ["kalkulator-bitrate", "konwerter-napisow", "kalkulator-aspect-ratio", "kalkulator-rozmiaru-pliku"],
  },
  {
    id: "text",
    hub: "developer",
    utilityIds: [
      "licznik-znakow",
      "diff-tekstu",
      "konwerter-wielkosci-liter",
      "usun-duplikaty-linii",
      "markdown-preview",
      "generator-nazw-plikow",
      "html-markdown",
    ],
  },
  {
    id: "dev",
    hub: "developer",
    utilityIds: [
      "generator-hasel",
      "sila-hasla",
      "generator-qr",
      "json-formatter",
      "dekoder-jwt",
      "walidator-nip-pesel",
      "walidator-iban",
      "konwerter-kolorow",
      "base64",
      "unix-timestamp",
      "generator-uuid",
      "generator-hash",
      "url-encoder",
      "csv-json",
      "minifikator",
      "generator-favicon",
    ],
  },
  {
    id: "privacy",
    hub: "developer",
    utilityIds: ["inspektor-prywatnosci", "generator-hasel", "sila-hasla", "generator-hash"],
  },
]
