/**
 * Inject footer social + emailAria into every lib/i18n/locale-packs/packs/*.ts file.
 * Run: node scripts/sync-locale-pack-footer-ui.mjs
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")
const PACKS_DIR = path.join(ROOT, "lib/i18n/locale-packs/packs")

const { footerUiLabels } = await import(
  pathToFileURL(path.join(ROOT, "lib/i18n/footer-ui-labels.ts")).href
)

const SOCIAL_KEYS = ["facebook", "instagram", "messenger", "youtube", "emailAria"]

function formatFooterLines(labels, quote = '"') {
  return SOCIAL_KEYS.map((key) => {
    const val = labels[key].replace(/\\/g, "\\\\").replace(/"/g, '\\"')
    return `    ${key}: ${quote}${val}${quote},`
  }).join("\n")
}

for (const file of fs.readdirSync(PACKS_DIR).filter((f) => f.endsWith(".ts"))) {
  const locale = file.replace(/\.ts$/, "")
  const labels = footerUiLabels[locale]
  if (!labels) continue

  const filePath = path.join(PACKS_DIR, file)
  let src = fs.readFileSync(filePath, "utf8")
  if (!src.includes('"footer"') && !src.includes("footer:")) continue

  for (const key of SOCIAL_KEYS) {
    const q = src.includes('footer: {') ? "" : '"'
    const pattern = new RegExp(`^\\s*${q}${key}${q}:.*$,`, "m")
    const line = src.includes('footer: {')
      ? `    ${key}: "${labels[key].replace(/"/g, '\\"')}",`
      : `    "${key}": "${labels[key].replace(/"/g, '\\"')}",`
    if (pattern.test(src)) {
      src = src.replace(pattern, line)
    } else if (src.match(/"footer"\s*:\s*\{|footer:\s*\{/)) {
      src = src.replace(/("footer"\s*:\s*\{|footer:\s*\{)/, `$1\n${line}`)
    }
  }

  fs.writeFileSync(filePath, src)
  console.log(`Updated footer UI in packs/${file}`)
}

console.log("Done.")
