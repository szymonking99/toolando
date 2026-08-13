import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, "guide-translations")

const SLUGS = [
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
  "choose-audio-bitrate",
  "prepare-images-for-web",
  "docx-pdf-workflow",
  "compress-images-without-quality-loss",
  "merge-pdf-online-guide",
  "spreadsheet-csv-json-guide",
  "video-compress-before-sharing",
  "font-woff2-for-websites",
  "toolando-editorial-standards",
  "when-not-to-convert-files",
  "png-vs-jpg-photos-and-graphics",
  "flac-music-archive-guide",
  "zip-7z-rar-when-to-use",
  "svg-vs-png-logos-and-icons",
  "podcast-export-mp3-aac-settings",
  "gif-vs-mp4-for-animations",
  "tiff-and-png-for-document-scans",
  "markdown-to-pdf-workflow",
  "extract-images-from-pdf-pages",
  "convert-video-to-gif-properly",
  "split-pdf-pages-guide",
  "remove-exif-privacy-guide",
  "jwt-decode-safely-guide",
  "mortgage-loan-calculator-guide",
]

const locales = ["cs", "ro", "hu", "el"]

for (const locale of locales) {
  const mod = await import(`./guide-translations/locale-${locale}.mjs`)
  const data = mod.default
  const keys = Object.keys(data)
  const missing = SLUGS.filter((s) => !data[s])
  const extra = keys.filter((k) => !SLUGS.includes(k))
  if (missing.length) {
    console.error(`${locale}: missing slugs:`, missing.join(", "))
    process.exit(1)
  }
  if (extra.length) console.warn(`${locale}: extra keys:`, extra.join(", "))
  const ordered = {}
  for (const slug of SLUGS) ordered[slug] = data[slug]
  fs.writeFileSync(
    path.join(outDir, `${locale}.json`),
    JSON.stringify(ordered, null, 2) + "\n",
  )
  console.log(`Wrote ${locale}.json (${Object.keys(ordered).length} slugs)`)
}
