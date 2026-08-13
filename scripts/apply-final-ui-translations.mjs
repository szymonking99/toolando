/**
 * Apply final native UI string fixes from scripts/final-ui-translations-data.json
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")
const FIXES = JSON.parse(
  fs.readFileSync(path.join(__dirname, "final-ui-translations-data.json"), "utf8"),
)

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

function countLeaves(obj) {
  let n = 0
  for (const value of Object.values(obj)) {
    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      n += countLeaves(value)
    } else {
      n += 1
    }
  }
  return n
}

let total = 0
for (const [locale, patch] of Object.entries(FIXES)) {
  const filePath = path.join(ROOT, "locales", `${locale}.json`)
  if (!fs.existsSync(filePath)) {
    console.log(`Skip ${locale}: locales/${locale}.json not found`)
    continue
  }
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"))
  deepMerge(data, patch)
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`)
  const n = countLeaves(patch)
  total += n
  console.log(`Fixed ${n} keys in locales/${locale}.json`)
}
console.log(`Done: ${Object.keys(FIXES).length} locales, ${total} keys.`)
