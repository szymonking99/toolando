import { spawn } from "node:child_process"
import { randomUUID } from "node:crypto"
import { promises as fs } from "node:fs"
import os from "node:os"
import path from "node:path"
import { pathToFileURL } from "node:url"

const DOC_PAIRS = new Set([
  "pdf->docx",
  "docx->pdf",
  "odt->docx",
  "odt->pdf",
  "docx->odt",
  "pdf->odt",
])

const ARCHIVE_PAIRS = new Set(["zip->rar", "rar->zip"])

function convertFilter(toExt) {
  switch (toExt.toLowerCase()) {
    case "pdf":
      return "pdf:writer_pdf_Export"
    case "docx":
      return "docx:MS Word 2007 XML"
    case "odt":
      return "odt"
    case "txt":
      return "txt:Text"
    default:
      return toExt.toLowerCase()
  }
}

function resolveLibreOfficePath() {
  const envPath =
    process.env.LIBREOFFICE_PATH?.trim() ||
    process.env.SOFFICE_PATH?.trim() ||
    "/usr/bin/soffice"
  return envPath
}

function runLibreOffice(bin, args) {
  return new Promise((resolve, reject) => {
    const proc = spawn(bin, args, {
      env: { ...process.env, SAL_DISABLE_OPENCL: "1" },
    })

    let logs = ""
    proc.stderr.on("data", (chunk) => {
      logs += chunk.toString()
    })
    proc.stdout.on("data", (chunk) => {
      logs += chunk.toString()
    })
    proc.on("error", reject)
    proc.on("close", (code) => {
      if (code === 0) resolve()
      else reject(new Error(`LibreOffice failed (${code}): ${logs.slice(-800)}`))
    })
  })
}

export async function getLibreOfficeVersion() {
  const bin = resolveLibreOfficePath()
  return new Promise((resolve) => {
    const proc = spawn(bin, ["--version"])
    let out = ""
    proc.stdout.on("data", (d) => {
      out += d.toString()
    })
    proc.on("close", () => resolve(out.trim() || "unknown"))
    proc.on("error", () => resolve("unavailable"))
  })
}

export async function convertDocument(input, fromExt, toExt) {
  const pair = `${fromExt.toLowerCase()}->${toExt.toLowerCase()}`
  if (!DOC_PAIRS.has(pair)) {
    throw new Error(`Unsupported conversion: ${pair}`)
  }

  const bin = resolveLibreOfficePath()
  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "doc-converter-"))
  const profileDir = path.join(tmpDir, "profile")
  const outDir = path.join(tmpDir, "out")
  const baseName = `input-${randomUUID()}`
  const inPath = path.join(tmpDir, `${baseName}.${fromExt.toLowerCase()}`)

  await fs.mkdir(profileDir, { recursive: true })
  await fs.mkdir(outDir, { recursive: true })
  await fs.writeFile(inPath, input)

  const args = [
    "--headless",
    "--norestore",
    "--nologo",
    "--nodefault",
    `--env:UserInstallation=${pathToFileURL(profileDir).href}`,
    "--convert-to",
    convertFilter(toExt),
    "--outdir",
    outDir,
  ]

  if (fromExt.toLowerCase() === "pdf") {
    args.push("--infilter", "writer_pdf_import")
  }
  args.push(inPath)

  try {
    await runLibreOffice(bin, args)
    const produced = await fs.readdir(outDir)
    const match = produced.find((name) =>
      name.toLowerCase().endsWith(`.${toExt.toLowerCase()}`),
    )
    if (!match) throw new Error("LibreOffice produced no output file")

    const outPath = path.join(outDir, match)
    const stat = await fs.stat(outPath)
    if (stat.size === 0) throw new Error("LibreOffice produced an empty file")

    return {
      buffer: await fs.readFile(outPath),
      filename: match,
    }
  } finally {
    await fs.rm(tmpDir, { recursive: true, force: true }).catch(() => {})
  }
}

function resolveRarPath() {
  return process.env.RAR_PATH?.trim() || "/usr/bin/rar"
}

function resolve7zPath() {
  return process.env.SEVEN_ZIP_PATH?.trim() || "7z"
}

function runCommand(bin, args, cwd) {
  return new Promise((resolve, reject) => {
    const proc = spawn(bin, args, {
      cwd,
      stdio: ["ignore", "ignore", "pipe"],
    })

    let stderr = ""
    proc.stderr.on("data", (chunk) => {
      stderr += chunk.toString()
    })

    proc.on("error", reject)
    proc.on("close", (code) => {
      if (code === 0) resolve()
      else reject(new Error(stderr.slice(-600) || `Exit code ${code}`))
    })
  })
}

export async function convertArchive(input, fromExt, toExt) {
  const pair = `${fromExt.toLowerCase()}->${toExt.toLowerCase()}`
  if (!ARCHIVE_PAIRS.has(pair)) {
    throw new Error(`Unsupported archive conversion: ${pair}`)
  }

  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "archive-converter-"))
  const workDir = path.join(tmpDir, "content")
  const inPath = path.join(tmpDir, `input.${fromExt.toLowerCase()}`)
  const outPath = path.join(tmpDir, `output.${toExt.toLowerCase()}`)

  await fs.mkdir(workDir, { recursive: true })
  await fs.writeFile(inPath, input)

  try {
    if (pair === "rar->zip") {
      await runCommand(resolve7zPath(), ["x", inPath, `-o${workDir}`, "-y"])
      await runCommand("zip", ["-r", "-q", outPath, "."], workDir)
    } else {
      await runCommand(resolve7zPath(), ["x", inPath, `-o${workDir}`, "-y"])
      await runCommand(
        resolveRarPath(),
        ["a", "-r", "-ep1", "-y", "-idq", outPath, "*"],
        workDir,
      )
    }

    const stat = await fs.stat(outPath)
    if (stat.size === 0) throw new Error("Archive converter produced an empty file")

    return {
      buffer: await fs.readFile(outPath),
      filename: `output.${toExt.toLowerCase()}`,
    }
  } finally {
    await fs.rm(tmpDir, { recursive: true, force: true }).catch(() => {})
  }
}
