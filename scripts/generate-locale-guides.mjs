import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, "..")
const dataDir = path.join(__dirname, "guide-translations")
const outDir = path.join(root, "lib/i18n/guides/locale-guides")

const LOCALES = [
  "fr",
  "it",
  "pt",
  "nl",
  "sv",
  "no",
  "da",
  "fi",
  "cs",
  "ro",
  "hu",
  "el",
  "tr",
  "ru",
  "ar",
  "zh",
  "ja",
  "ko",
  "hi",
  "id",
]

function escapeTs(str) {
  return str.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$")
}

function formatSection(section, indent) {
  const pad = " ".repeat(indent)
  const lines = [`${pad}{`]
  if (section.title) {
    lines.push(`${pad}  title: ${JSON.stringify(section.title)},`)
  }
  lines.push(`${pad}  paragraphs: [`)
  for (const p of section.paragraphs) {
    lines.push(`${pad}    ${JSON.stringify(p)},`)
  }
  lines.push(`${pad}  ],`)
  lines.push(`${pad}},`)
  return lines.join("\n")
}

function formatSlugEntry(slug, tr) {
  const sections = tr.sections.map((s) => formatSection(s, 6)).join("\n")
  return `  "${slug}": {
    ...guidesEn["${slug}"],
    title: ${JSON.stringify(tr.title)},
    description: ${JSON.stringify(tr.description)},
    sections: [
${sections}
    ],
  },`
}

function generateLocaleFile(locale, data) {
  const entries = Object.keys(data)
    .sort()
    .map((slug) => formatSlugEntry(slug, data[slug]))
    .join("\n")

  return `import type { GuideArticle } from "../types"
import type { GuideSlug } from "../slugs"
import { guidesEn } from "../guides-en"

export const guides${locale.charAt(0).toUpperCase() + locale.slice(1)}: Record<GuideSlug, GuideArticle> = {
${entries}
}
`
}

function generateIndex() {
  const imports = LOCALES.map(
    (loc) =>
      `import { guides${loc.charAt(0).toUpperCase() + loc.slice(1)} } from "./${loc}"`,
  ).join("\n")
  const exports = LOCALES.map((loc) => `  guides${loc.charAt(0).toUpperCase() + loc.slice(1)},`).join(
    "\n",
  )
  return `${imports}

export {
${exports}
}
`
}

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

for (const locale of LOCALES) {
  const jsonPath = path.join(dataDir, `${locale}.json`)
  if (!fs.existsSync(jsonPath)) {
    console.error(`Missing ${jsonPath}`)
    process.exit(1)
  }
  const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"))
  const slugCount = Object.keys(data).length
  if (slugCount !== 34) {
    console.warn(`${locale}: expected 34 slugs, got ${slugCount}`)
  }
  const out = generateLocaleFile(locale, data)
  fs.writeFileSync(path.join(outDir, `${locale}.ts`), out)
  console.log(`Wrote ${locale}.ts (${slugCount} slugs)`)
}

fs.writeFileSync(path.join(outDir, "index.ts"), generateIndex())
console.log("Wrote index.ts")
