/**
 * Export keys still identical to English after full merge (JSON + pack + pages + footer).
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")

const PLACEHOLDER = [
  "pl",
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

function flatten(obj, prefix = "") {
  const out = []
  for (const [k, v] of Object.entries(obj ?? {})) {
    const key = prefix ? `${prefix}.${k}` : k
    if (v && typeof v === "object" && !Array.isArray(v)) {
      out.push(...flatten(v, key))
    } else if (typeof v === "string") {
      out.push([key, v])
    }
  }
  return out
}

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

function setNested(obj, dotPath, value) {
  const parts = dotPath.split(".")
  let cur = obj
  for (let i = 0; i < parts.length - 1; i++) {
    if (!(parts[i] in cur) || typeof cur[parts[i]] !== "object") {
      cur[parts[i]] = {}
    }
    cur = cur[parts[i]]
  }
  cur[parts[parts.length - 1]] = value
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
const enFlat = Object.fromEntries(flatten(en))

const outDir = path.join(ROOT, "scripts", "gap-patches", "still-en")
fs.mkdirSync(outDir, { recursive: true })

for (const locale of PLACEHOLDER) {
  const json = JSON.parse(
    fs.readFileSync(path.join(ROOT, "locales", `${locale}.json`), "utf8"),
  )
  const pack = await loadPack(locale)
  const pages = await loadPages(locale)
  const footer = { footer: getFooterUiLabels(locale) }
  let dict = mergeWithFallback(en, json)
  dict = deepMerge(dict, pack)
  dict = deepMerge(dict, pages)
  dict = deepMerge(dict, footer)
  const flat = Object.fromEntries(flatten(dict))
  const stillEn = Object.keys(enFlat).filter((k) => flat[k] === enFlat[k])
  const patch = {}
  for (const k of stillEn) {
    setNested(patch, k, enFlat[k])
  }
  fs.writeFileSync(
    path.join(outDir, `${locale}.json`),
    `${JSON.stringify(patch, null, 2)}\n`,
  )
  console.log(`${locale}: ${stillEn.length} keys exported`)
}
