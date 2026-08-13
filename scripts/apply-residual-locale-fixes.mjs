/**
 * Apply final native-string fixes for keys that legitimately differ from English
 * but were still identical after merge (residual EN in UI copy).
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")
const FIXES_PATH = path.join(__dirname, "residual-locale-fixes-data.json")

/** @type {Record<string, Record<string, unknown>>} */
const FIXES = JSON.parse(fs.readFileSync(FIXES_PATH, "utf8"))

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

let totalKeys = 0
for (const [locale, patch] of Object.entries(FIXES)) {
  const filePath = path.join(ROOT, "locales", `${locale}.json`)
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"))
  deepMerge(data, patch)
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`)
  const keyCount = countLeaves(patch)
  totalKeys += keyCount
  console.log(`Fixed ${keyCount} residual EN keys in locales/${locale}.json`)
}

console.log(`Done: ${Object.keys(FIXES).length} locales, ${totalKeys} keys fixed.`)
