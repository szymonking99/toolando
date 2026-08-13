/**
 * Apply gap-fill patches so every locale JSON matches en.json key parity.
 * Footer social labels: run scripts/sync-footer-ui-all-locales.mjs for ALL locales.
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")
const LOCALES = [
  "de",
  "es",
  "uk",
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

function deepMerge(target, patch) {
  for (const [key, value] of Object.entries(patch)) {
    if (
      value !== null &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      target[key] !== null &&
      typeof target[key] === "object" &&
      !Array.isArray(target[key])
    ) {
      deepMerge(target[key], value)
    } else {
      target[key] = value
    }
  }
  return target
}

function flatten(obj, prefix = "") {
  const keys = []
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k
    if (v && typeof v === "object" && !Array.isArray(v)) {
      keys.push(...flatten(v, key))
    } else {
      keys.push(key)
    }
  }
  return keys
}

for (const locale of LOCALES) {
  const localePath = path.join(ROOT, "locales", `${locale}.json`)
  const patchPath = path.join(ROOT, "scripts", "gap-patches", `${locale}.json`)
  if (!fs.existsSync(patchPath)) {
    console.log(`Skip ${locale}: no patch at scripts/gap-patches/${locale}.json`)
    continue
  }
  const localeData = JSON.parse(fs.readFileSync(localePath, "utf8"))
  const patch = JSON.parse(fs.readFileSync(patchPath, "utf8"))
  deepMerge(localeData, patch)
  fs.writeFileSync(localePath, `${JSON.stringify(localeData, null, 2)}\n`)
  console.log(`Applied patch to locales/${locale}.json`)
}

const en = JSON.parse(fs.readFileSync(path.join(ROOT, "locales", "en.json"), "utf8"))
const enKeys = new Set(flatten(en))
console.log(`\nVerification (reference: en.json = ${enKeys.size} keys):`)

let ok = true
for (const locale of LOCALES) {
  const data = JSON.parse(fs.readFileSync(path.join(ROOT, "locales", `${locale}.json`), "utf8"))
  const keys = new Set(flatten(data))
  const missing = [...enKeys].filter((k) => !keys.has(k))
  const extra = [...keys].filter((k) => !enKeys.has(k))
  const status = missing.length === 0 && extra.length === 0 ? "OK" : "MISMATCH"
  if (status !== "OK") ok = false
  console.log(
    `  ${locale}: ${keys.size}/${enKeys.size} keys — ${status}` +
      (missing.length ? ` (missing: ${missing.length})` : "") +
      (extra.length ? ` (extra: ${extra.length})` : "")
  )
  if (missing.length) {
    for (const k of missing.slice(0, 10)) console.log(`    - missing: ${k}`)
    if (missing.length > 10) console.log(`    ... and ${missing.length - 10} more`)
  }
}

process.exit(ok ? 0 : 1)
