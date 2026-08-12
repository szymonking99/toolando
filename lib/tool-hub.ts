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
  image: [
    "kompresor-obrazow",
    "usuwanie-tla",
    "zmiana-rozmiaru-obrazu",
    "usun-exif",
    "znak-wodny",
  ],
  documents: [
    "laczenie-pdf",
    "podzial-pdf",
    "kompresja-pdf",
    "obrot-pdf",
    "pdf-do-tekstu",
  ],
  pdf: ["podzial-pdf", "kompresja-pdf", "obrot-pdf", "pdf-do-tekstu", "laczenie-pdf"],
  video: ["wyciszenie-wideo", "przyciecie-wideo"],
}

export const CALCULATOR_CATEGORIES: UtilityCategory[] = [
  "finance",
  "time",
  "units",
  "media",
]

export const DEVELOPER_CATEGORIES: UtilityCategory[] = ["text", "dev"]

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
    utilityIds: ["przelicznik-walut", "kalkulator-vat", "kalkulator-kredytu"],
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
    utilityIds: ["kalkulator-bitrate", "konwerter-napisow"],
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
      "konwerter-kolorow",
      "base64",
      "unix-timestamp",
      "generator-uuid",
      "generator-hash",
    ],
  },
]
