export const COMPARISON_SLUGS = [
  "mp3-vs-flac",
  "jpg-vs-webp",
  "pdf-vs-docx",
  "png-vs-jpg",
  "mp4-vs-webm",
  "heic-vs-jpg",
] as const

export type ComparisonSlug = (typeof COMPARISON_SLUGS)[number]
