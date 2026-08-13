/**
 * Build complete locale JSON files from merged sources:
 * en.json base → locale JSON → locale pack → pages pack → footer-ui labels.
 * Writes the merged native strings back to locales/{locale}.json for full parity.
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")

const LOCALES = [
  "pl",
  "en",
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

function mergeWithFallback(base, override) {
  if (
    typeof base !== "object" ||
    base === null ||
    Array.isArray(base) ||
    typeof override !== "object" ||
    override === null ||
    Array.isArray(override)
  ) {
    if (typeof override === "string" && override.trim() !== "") return override
    return override === undefined || override === null ? base : override
  }
  const result = { ...base }
  const ov = override
  for (const key of Object.keys(base)) {
    result[key] = mergeWithFallback(base[key], ov[key])
  }
  return result
}

function deepMerge(base, override) {
  if (
    typeof base !== "object" ||
    base === null ||
    Array.isArray(base) ||
    typeof override !== "object" ||
    override === null ||
    Array.isArray(override)
  ) {
    if (override === undefined || override === null) return base
    return override
  }
  const result = { ...base }
  for (const key of Object.keys(base)) {
    result[key] = deepMerge(base[key], override[key])
  }
  for (const key of Object.keys(override)) {
    if (!(key in result)) result[key] = override[key]
  }
  return result
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

async function loadPack(locale) {
  try {
    const mod = await import(
      pathToFileURL(path.join(ROOT, "lib/i18n/locale-packs/packs", `${locale}.ts`)).href
    )
    return mod.default ?? {}
  } catch {
    return {}
  }
}

async function loadPages(locale) {
  try {
    const mod = await import(
      pathToFileURL(path.join(ROOT, "lib/i18n/locale-packs/pages", `${locale}.ts`)).href
    )
    return mod.default ? { pages: mod.default } : {}
  } catch {
    return {}
  }
}

const { getFooterUiLabels } = await import(
  pathToFileURL(path.join(ROOT, "lib/i18n/footer-ui-labels.ts")).href
)

const en = JSON.parse(fs.readFileSync(path.join(ROOT, "locales/en.json"), "utf8"))
const enKeys = new Set(flatten(en))

let ok = true
for (const locale of LOCALES) {
  if (locale === "en") continue
  const jsonPath = path.join(ROOT, "locales", `${locale}.json`)
  const json = JSON.parse(fs.readFileSync(jsonPath, "utf8"))
  const pack = await loadPack(locale)
  const pages = await loadPages(locale)
  const footer = { footer: getFooterUiLabels(locale) }

  let dict = mergeWithFallback(en, json)
  dict = deepMerge(dict, pack)
  dict = deepMerge(dict, pages)
  dict = deepMerge(dict, footer)

  fs.writeFileSync(jsonPath, `${JSON.stringify(dict, null, 2)}\n`)

  const keys = new Set(flatten(dict))
  const missing = [...enKeys].filter((k) => !keys.has(k))
  const status = missing.length === 0 ? "OK" : "MISMATCH"
  if (status !== "OK") ok = false
  console.log(`${locale}: ${keys.size}/${enKeys.size} keys — ${status}`)
}

process.exit(ok ? 0 : 1)
