import express from "express"
import multer from "multer"
import dotenv from "dotenv"
import {
  convertArchive,
  convertDocument,
  getLibreOfficeVersion,
} from "./convert.mjs"

dotenv.config()

const PORT = Number(process.env.PORT || 8080)
const SECRET = process.env.CONVERTER_SECRET?.trim()
const MAX_BYTES = Number(process.env.MAX_UPLOAD_MB || 50) * 1024 * 1024

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_BYTES },
})

const app = express()
app.disable("x-powered-by")

/** Serialize conversions — LibreOffice handles one job at a time best. */
let queue = Promise.resolve()
function enqueue(task) {
  const run = queue.then(task)
  queue = run.catch(() => {})
  return run
}

function authorize(req, res, next) {
  if (!SECRET) return next()
  const header = req.headers.authorization || ""
  const token = header.startsWith("Bearer ") ? header.slice(7) : ""
  if (token !== SECRET) {
    res.status(401).json({ error: "Unauthorized" })
    return
  }
  next()
}

app.get("/health", async (_req, res) => {
  const version = await getLibreOfficeVersion()
  res.json({
    ok: true,
    service: "toolando-doc-converter",
    libreoffice: version,
    archives: ["zip->rar", "rar->zip"],
  })
})

app.post(
  "/v1/convert",
  authorize,
  upload.single("file"),
  async (req, res) => {
    try {
      const from = String(req.query.from || req.body?.from || "")
        .toLowerCase()
        .replace(/^\./, "")
      const to = String(req.query.to || req.body?.to || "")
        .toLowerCase()
        .replace(/^\./, "")

      if (!from || !to) {
        res.status(400).json({ error: "Query params `from` and `to` are required." })
        return
      }

      if (!req.file?.buffer?.length) {
        res.status(400).json({ error: "Missing file upload (field name: file)." })
        return
      }

      const pair = `${from}->${to}`
      const isArchive = pair === "zip->rar" || pair === "rar->zip"

      const result = await enqueue(() =>
        isArchive
          ? convertArchive(req.file.buffer, from, to)
          : convertDocument(req.file.buffer, from, to),
      )

      res.setHeader(
        "Content-Type",
        mimeFor(to),
      )
      res.setHeader(
        "Content-Disposition",
        `attachment; filename="${result.filename}"`,
      )
      res.send(result.buffer)
    } catch (err) {
      console.error("[doc-converter]", err)
      res.status(500).json({
        error: err instanceof Error ? err.message : "Conversion failed",
      })
    }
  },
)

function mimeFor(ext) {
  switch (ext) {
    case "pdf":
      return "application/pdf"
    case "docx":
      return "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    case "odt":
      return "application/vnd.oasis.opendocument.text"
    case "txt":
      return "text/plain; charset=utf-8"
    case "zip":
      return "application/zip"
    case "rar":
      return "application/vnd.rar"
    default:
      return "application/octet-stream"
  }
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`doc-converter listening on :${PORT}`)
})
