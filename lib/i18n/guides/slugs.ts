export const GUIDE_SLUGS = [
  "mp3-vs-wav",
  "pdf-to-jpg",
  "webp-avif-images",
  "extract-audio-from-video",
  "json-csv-xml",
  "online-file-security",
  "lossy-vs-lossless",
  "heic-iphone-jpg",
  "pdf-vs-docx",
  "video-social-media",
] as const

export type GuideSlug = (typeof GUIDE_SLUGS)[number]
