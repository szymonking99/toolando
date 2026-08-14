import express from "express"
import multer from "multer"
import dotenv from "dotenv"
import { spawn } from "node:child_process"
import { promises as fs } from "node:fs"
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
const BOT_ROOT = process.env.BOT_ROOT?.trim() || "F:\\apps\\badyltech-megabot"
const PM2_APP_NAME = process.env.PM2_APP_NAME?.trim() || "toolando-converter"
/** Bot lives only on the server (no GitHub). Endpoints backup it locally. */
const BOT_BACKUP_ENABLED = process.env.BOT_BACKUP_ENABLED !== "0"
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

function runPowerShellScript(scriptName, extraArgs = []) {
  const scriptPath = path.join(__dirname, scriptName)
  return new Promise((resolve, reject) => {
    const proc = spawn(
      "powershell.exe",
      [
        "-NoProfile",
        "-ExecutionPolicy",
        "Bypass",
        "-File",
        scriptPath,
        ...extraArgs,
      ],
      {
        windowsHide: true,
        env: { ...process.env, TOOLANDO_ROOT, BOT_ROOT },
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
        `${scriptName} exited with code ${code}`
      reject(new Error(message))
    })
  })
}

function runSyncScript() {
  return runPowerShellScript("sync-from-git.ps1", ["-RepoRoot", TOOLANDO_ROOT])
}

function runBotBackupScript() {
  return runPowerShellScript("sync-bot.ps1", ["-RepoRoot", BOT_ROOT])
}

function runSyncAllScript() {
  return runPowerShellScript("sync-all.ps1")
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

function lastSyncPath() {
  return path.join(path.dirname(TOOLANDO_ROOT), "logs", "last-sync.json")
}

async function readLastSync() {
  try {
    const raw = await fs.readFile(lastSyncPath(), "utf8")
    return JSON.parse(raw)
  } catch {
    return null
  }
}

async function writeLastSync(payload) {
  try {
    const dir = path.join(path.dirname(TOOLANDO_ROOT), "logs")
    await fs.mkdir(dir, { recursive: true })
    await fs.writeFile(
      lastSyncPath(),
      JSON.stringify({ ...payload, at: new Date().toISOString() }, null, 2),
      "utf8",
    )
  } catch (err) {
    console.error("[doc-converter] failed to write last-sync.json", err)
  }
}

async function handleSync(target, res, { restartConverter = true } = {}) {
  try {
    let result
    if (target === "bot") {
      if (!BOT_BACKUP_ENABLED) {
        res.status(503).json({ ok: false, error: "BOT_BACKUP_ENABLED=0" })
        return
      }
      result = await runBotBackupScript()
    } else if (target === "all") {
      result = await runSyncAllScript()
    } else {
      result = await runSyncScript()
    }

    await writeLastSync({
      ok: true,
      target,
      commit: result.commit || null,
      synced: result.synced || [result.id].filter(Boolean),
      backup: result.backup || null,
      results: result.results || null,
      root: result.root || (target === "bot" ? BOT_ROOT : TOOLANDO_ROOT),
      mode: result.mode || null,
    })

    const body = {
      ok: true,
      target,
      commit: result.commit || null,
      synced: result.synced || [result.id].filter(Boolean),
      results: result.results || null,
      root: result.root || (target === "bot" ? BOT_ROOT : TOOLANDO_ROOT),
      backup: result.backup || null,
      mode: result.mode || null,
      restarted: restartConverter && target !== "bot",
    }
    res.json(body)

    if (restartConverter && target !== "bot") {
      schedulePm2Restart()
    }
  } catch (err) {
    console.error(`[doc-converter] sync (${target}) failed`, err)
    await writeLastSync({
      ok: false,
      target,
      error: err instanceof Error ? err.message : "Sync failed",
    })
    res.status(500).json({
      ok: false,
      target,
      error: err instanceof Error ? err.message : "Sync failed",
    })
  }
}

const startedAt = new Date().toISOString()

app.get("/health", async (_req, res) => {
  const version = await getLibreOfficeVersion()
  const lastSync = await readLastSync()
  res.json({
    ok: true,
    service: "toolando-doc-converter",
    libreoffice: version,
    archives: ["zip->rar", "rar->zip", "zip->7z", "7z->zip"],
    startedAt,
    syncConfigured: Boolean(DEPLOY_SYNC_SECRET),
    botBackupEnabled: BOT_BACKUP_ENABLED,
    botRoot: BOT_ROOT,
    lastSync,
  })
})

app.post("/hooks/restart", authorizeDeploySync, async (_req, res) => {
  res.json({ ok: true, restarted: true, app: PM2_APP_NAME })
  schedulePm2Restart()
})

app.post("/hooks/sync", authorizeDeploySync, express.json(), async (req, res) => {
  const target = String(req.body?.target || "toolando").toLowerCase()
  if (!["toolando", "bot", "all"].includes(target)) {
    res.status(400).json({ ok: false, error: "Invalid target. Use toolando, bot, or all." })
    return
  }
  await handleSync(target, res)
})

/** Local backup only — bot is not on GitHub. */
app.post("/hooks/sync/bot", authorizeDeploySync, async (_req, res) => {
  await handleSync("bot", res, { restartConverter: false })
})

app.post("/hooks/backup/bot", authorizeDeploySync, async (_req, res) => {
  await handleSync("bot", res, { restartConverter: false })
})

app.post("/hooks/sync/all", authorizeDeploySync, async (req, res) => {
  await handleSync("all", res)
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
