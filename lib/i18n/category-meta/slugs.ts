export const CATEGORY_SLUGS = [
  "audio",
  "video",
  "image",
  "documents",
  "data",
  "font",
  "archive",
] as const

export type CategorySlug = (typeof CATEGORY_SLUGS)[number]
