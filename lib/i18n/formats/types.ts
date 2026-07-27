export type FormatCategory =
  | "audio"
  | "video"
  | "image"
  | "document"
  | "data"
  | "font"
  | "archive"

export type FormatProfile = {
  id: string
  name: string
  category: FormatCategory
  /** lossy | lossless | none | container | text */
  compression: string
  extension: string
  mimeType: string
  intro: string
  paragraphs: string[]
  useCases: string[]
  pros: string[]
  cons: string[]
  compatibility: string
  faq: { q: string; a: string }[]
  comparisons?: { format: string; note: string }[]
}

export type FormatsHubMeta = {
  title: string
  intro: string
  categoryLabels: Record<FormatCategory, string>
  compressionTitle: string
  useCasesTitle: string
  prosTitle: string
  consTitle: string
  compatibilityTitle: string
  faqTitle: string
  comparisonsTitle: string
  convertFromTitle: string
  convertToTitle: string
  viewFormat: string
  allFormats: string
  basicsTitle: string
  basicsParagraphs: string[]
}
