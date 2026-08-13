import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const contentPath = path.join(__dirname, "../lib/i18n/guides/content.ts")
const lines = fs.readFileSync(contentPath, "utf8").split("\n")

const start = lines.findIndex((l) => l.startsWith("const AUTHOR = "))
const end = lines.findIndex((l) => l.startsWith("const guidesDe:"))
if (start === -1 || end === -1) {
  console.error("Could not find boundaries", start, end)
  process.exit(1)
}

const cleaned = [
  ...lines.slice(0, start),
  "",
  ...lines.slice(end),
]

let content = cleaned.join("\n")

content = content.replace('import { localizedGuideArticles } from "./localized-articles"\n', "")
content = content.replace(/import \{ guidesBatch2En \} from "\.\/batch-2"\n/, "")
content = content.replace(/import \{ guidesBatch3En \} from "\.\/batch-3"\n/, "")
content = content.replace(/  guidesBatch4En,\n/, "")
content = content.replace(/  guidesBatch4Pl,\n/, "")

fs.writeFileSync(contentPath, content)
console.log(`Removed lines ${start + 1}-${end} from content.ts`)
