export type AudienceId =
  | "fotograf"
  | "webmaster"
  | "biuro"
  | "student"
  | "creator"
  | "ecommerce"

export type AudienceToolkit = {
  id: AudienceId
  toolIds: string[]
}

export const AUDIENCE_TOOLKITS: AudienceToolkit[] = [
  {
    id: "fotograf",
    toolIds: [
      "heic-to-jpg",
      "otworz",
      "usun-exif",
      "inspektor-prywatnosci",
      "przygotuj-do-maila",
      "kompresor-obrazow",
      "zmiana-rozmiaru-obrazu",
      "jpg-to-webp",
      "png-to-avif",
      "znak-wodny",
      "usuwanie-tla",
      "zdjecia-do-pdf",
    ],
  },
  {
    id: "webmaster",
    toolIds: [
      "jpg-to-webp",
      "png-to-avif",
      "kompresor-obrazow",
      "generator-favicon",
      "minifikator",
      "svg-to-png",
      "json-formatter",
      "csv-json",
      "html-markdown",
      "url-encoder",
      "base64",
      "dekoder-jwt",
    ],
  },
  {
    id: "biuro",
    toolIds: [
      "pdf-to-docx",
      "docx-to-pdf",
      "ocr-skanu",
      "pdf-do-tekstu",
      "zdjecia-do-pdf",
      "rozdziel-skan",
      "redakcja-pdf",
      "wypelnij-pdf",
      "podpis-pdf",
      "porownaj-dokumenty",
      "przygotuj-do-maila",
      "laczenie-pdf",
      "kompresja-pdf",
      "podzial-pdf",
      "numeracja-pdf",
      "obrot-pdf",
      "naprawa-plikow",
      "kalkulator-vat",
      "kalkulator-procentow",
    ],
  },
  {
    id: "student",
    toolIds: [
      "pdf-to-docx",
      "md-to-html",
      "markdown-preview",
      "licznik-znakow",
      "generator-hasel",
      "kalkulator-dat",
      "przelicznik-jednostek",
      "otworz",
    ],
  },
  {
    id: "creator",
    toolIds: [
      "mp4-to-webm",
      "mp4-to-mp3",
      "kompresja-wideo",
      "przyciecie-wideo",
      "jpg-to-webp",
      "usuwanie-tla",
      "kalkulator-bitrate",
      "konwerter-napisow",
    ],
  },
  {
    id: "ecommerce",
    toolIds: [
      "usuwanie-tla",
      "kompresor-obrazow",
      "zmiana-rozmiaru-obrazu",
      "jpg-to-webp",
      "csv-json",
      "kalkulator-vat",
      "kalkulator-roi",
      "kalkulator-procentow",
      "generator-qr",
    ],
  },
]

export function getAudienceToolkit(id: string): AudienceToolkit | undefined {
  return AUDIENCE_TOOLKITS.find((a) => a.id === id)
}

export const AUDIENCE_IDS = AUDIENCE_TOOLKITS.map((a) => a.id)
