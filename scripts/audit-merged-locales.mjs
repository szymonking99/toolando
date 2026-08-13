/**
 * Audit merged dictionaries (JSON + locale pack + pages + footer-ui).
 * Reports keys still identical to English after full merge.
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")

const PLACEHOLDER = [
  "fr", "it", "pt", "nl", "sv", "no", "da", "fi", "cs", "ro", "hu", "el", "tr",
  "ru", "ar", "zh", "ja", "ko", "hi", "id",
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

async function loadFooterUi() {
  const mod = await import(
    pathToFileURL(path.join(ROOT, "lib/i18n/footer-ui-labels.ts")).href
  )
  return mod
}

const en = JSON.parse(fs.readFileSync(path.join(ROOT, "locales/en.json"), "utf8"))
const enFlat = Object.fromEntries(flatten(en))
const { getFooterUiLabels } = await loadFooterUi()

for (const locale of ["pl", "de", "fr", "it", "ru", "ja", ...PLACEHOLDER]) {
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
  console.log(
    `${locale}: ${stillEn.length}/${Object.keys(enFlat).length} still EN (${Math.round((100 * stillEn.length) / Object.keys(enFlat).length)}%)`,
  )
  if (stillEn.length > 0 && stillEn.length <= 30) {
    for (const k of stillEn) console.log(`  - ${k}`)
  } else if (stillEn.length > 30) {
    const sections = {}
    for (const k of stillEn) {
      const s = k.split(".")[0]
      sections[s] = (sections[s] ?? 0) + 1
    }
    console.log("  sections:", JSON.stringify(sections))
  }
}
