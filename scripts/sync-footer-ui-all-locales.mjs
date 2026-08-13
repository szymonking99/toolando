/**
 * Sync footer social + email aria labels into every locales/*.json file.
 * Source of truth: lib/i18n/footer-ui-labels.ts
 *
 * Run: node scripts/sync-footer-ui-all-locales.mjs
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")

const { footerUiLabels } = await import(
  pathToFileURL(path.join(ROOT, "lib/i18n/footer-ui-labels.ts")).href
)

for (const [locale, labels] of Object.entries(footerUiLabels)) {
  const filePath = path.join(ROOT, "locales", `${locale}.json`)
  if (!fs.existsSync(filePath)) {
    console.warn(`Skip ${locale}: locales/${locale}.json not found`)
    continue
  }
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"))
  data.footer = { ...data.footer, ...labels }
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`)
  console.log(`Updated footer UI labels in locales/${locale}.json`)
}

console.log(`Done — ${Object.keys(footerUiLabels).length} locale files.`)
