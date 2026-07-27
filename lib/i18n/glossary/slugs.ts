export const GLOSSARY_SLUGS = [
  "bitrate",
  "codec",
  "lossy-compression",
  "lossless-compression",
  "container-format",
  "mime-type",
  "resolution",
  "dpi",
  "alpha-channel",
  "metadata",
  "transcoding",
  "sample-rate",
  "aspect-ratio",
  "color-space",
  "vector-graphic",
  "raster-graphic",
  "ocr",
  "dpi-print",
  "hash",
  "encryption",
] as const

export type GlossarySlug = (typeof GLOSSARY_SLUGS)[number]
