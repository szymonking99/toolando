import express from "express"
import multer from "multer"
import dotenv from "dotenv"
import { spawn } from "node:child_process"
import path from "node:path"
import { fileURLToPath } from "node:url"
import {
  convertArchive,
  convertDocument,
  getLibreOfficeVersion,
} from "./convert.mjs"

dotenv.config()

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PORT = Number(process.env.PORT || 8080)
const SECRET = process.env.CONVERTER_SECRET?.trim()
const DEPLOY_SYNC_SECRET = process.env.DEPLOY_SYNC_SECRET?.trim()
const TOOLANDO_ROOT = process.env.TOOLANDO_ROOT?.trim() || "F:\\Toolando"
const PM2_APP_NAME = process.env.PM2_APP_NAME?.trim() || "toolando-converter"
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

function bearerToken(req) {
  const header = req.headers.authorization || ""
  return header.startsWith("Bearer ") ? header.slice(7) : ""
}

function authorize(req, res, next) {
  if (!SECRET) return next()
  if (bearerToken(req) !== SECRET) {
    res.status(401).json({ error: "Unauthorized" })
    return
  }
  next()
}

function authorizeDeploySync(req, res, next) {
  if (!DEPLOY_SYNC_SECRET) {
    res.status(503).json({ error: "DEPLOY_SYNC_SECRET is not configured" })
    return
  }
  if (bearerToken(req) !== DEPLOY_SYNC_SECRET) {
    res.status(401).json({ error: "Unauthorized" })
    return
  }
  next()
}

function runSyncScript() {
  const scriptPath = path.join(__dirname, "sync-from-git.ps1")
  return new Promise((resolve, reject) => {
    const proc = spawn(
      "powershell.exe",
      [
        "-NoProfile",
        "-ExecutionPolicy",
        "Bypass",
        "-File",
        scriptPath,
        "-RepoRoot",
        TOOLANDO_ROOT,
      ],
      {
        windowsHide: true,
        env: { ...process.env, TOOLANDO_ROOT },
      },
    )

    let stdout = ""
    let stderr = ""
    proc.stdout.on("data", (chunk) => {
      stdout += chunk.toString()
    })
    proc.stderr.on("data", (chunk) => {
      stderr += chunk.toString()
    })
    proc.on("error", reject)
    proc.on("close", (code) => {
      const lines = stdout
        .split(/\r?\n/)
        .map((l) => l.trim())
        .filter(Boolean)
      const jsonLine = [...lines].reverse().find((l) => l.startsWith("{"))
      let parsed = null
      if (jsonLine) {
        try {
          parsed = JSON.parse(jsonLine)
        } catch {
          parsed = null
        }
      }

      if (code === 0 && parsed?.ok) {
        resolve(parsed)
        return
      }

      const message =
        parsed?.error ||
        stderr.trim() ||
        stdout.trim() ||
        `sync-from-git.ps1 exited with code ${code}`
      reject(new Error(message))
    })
  })
}

function schedulePm2Restart() {
  setTimeout(() => {
    const proc = spawn("pm2", ["restart", PM2_APP_NAME], {
      windowsHide: true,
      detached: true,
      stdio: "ignore",
      shell: true,
    })
    proc.unref()
  }, 750)
}

app.get("/health", async (_req, res) => {
  const version = await getLibreOfficeVersion()
  res.json({
    ok: true,
    service: "toolando-doc-converter",
    libreoffice: version,
    archives: ["zip->rar", "rar->zip", "zip->7z", "7z->zip"],
  })
})

app.post("/hooks/sync", authorizeDeploySync, async (_req, res) => {
  try {
    const result = await runSyncScript()
    res.json({
      ok: true,
      commit: result.commit,
      root: result.root || TOOLANDO_ROOT,
      backup: result.backup || null,
      restarted: true,
    })
    schedulePm2Restart()
  } catch (err) {
    console.error("[doc-converter] sync failed", err)
    res.status(500).json({
      ok: false,
      error: err instanceof Error ? err.message : "Sync failed",
    })
  }
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
      const isArchive =
        pair === "zip->rar" ||
        pair === "rar->zip" ||
        pair === "zip->7z" ||
        pair === "7z->zip"

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
    case "7z":
      return "application/x-7z-compressed"
    default:
      return "application/octet-stream"
  }
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`doc-converter listening on :${PORT}`)
})
