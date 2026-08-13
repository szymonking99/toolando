import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const contentPath = path.join(__dirname, "../lib/i18n/guides/content.ts")
const content = fs.readFileSync(contentPath, "utf8")
const start = content.indexOf("const guidesPl:")
const end = content.indexOf("// English, German")
const plBlock = content.slice(start, end)
const header = `import type { GuideArticle } from "./types"
import type { GuideSlug } from "./slugs"
import { guidesBatch2Pl } from "./batch-2"
import { guidesBatch3Pl } from "./batch-3"
import { guidesBatch4Pl } from "./batch-4"

const AUTHOR = "Szymon Badyl"

export `
const out = header + plBlock.replace("const guidesPl:", "export const guidesPl:")
const outPath = path.join(__dirname, "../lib/i18n/guides/guides-pl.ts")
fs.writeFileSync(outPath, out)
console.log("Written", outPath, out.length, "bytes")
