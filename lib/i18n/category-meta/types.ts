export type TextMeta = { title: string; description: string }

export type CategoryExtendedMeta = TextMeta & {
  intro: string
  guide: string
  faq: { q: string; a: string }[]
}
