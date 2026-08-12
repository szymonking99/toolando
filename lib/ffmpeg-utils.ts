import fs from "fs/promises"
import os from "os"
import path from "path"
import { spawn } from "child_process"
import { randomUUID } from "crypto"
import { ConversionError } from "@/lib/convert"

export async function resolveFfmpegPath(): Promise<string | null> {
  const envPath = process.env.FFMPEG_PATH?.trim()
  if (envPath) {
    try {
      await fs.access(envPath)
      return envPath
    } catch {
      /* ignore */
    }
  }

  try {
    const installer = (await import("@ffmpeg-installer/ffmpeg")) as {
      path?: string
      default?: { path?: string }
    }
    const p = installer.path ?? installer.default?.path
    if (p) {
      try {
        await fs.access(p)
        if (process.platform !== "win32") {
          await fs.chmod(p, 0o755).catch(() => {})
        }
        return p
      } catch {
        /* try PATH */
      }
    }
  } catch {
    /* package missing */
  }

  const candidates =
    process.platform === "win32" ? ["ffmpeg.exe", "ffmpeg"] : ["ffmpeg"]
  for (const bin of candidates) {
    if (await commandExists(bin)) return bin
  }
  return null
}

async function commandExists(command: string): Promise<boolean> {
  return new Promise((resolve) => {
    const checker = process.platform === "win32" ? "where" : "which"
    const proc = spawn(checker, [command], { stdio: "ignore" })
    proc.on("close", (code) => resolve(code === 0))
    proc.on("error", () => resolve(false))
  })
}

function runFfmpeg(bin: string, args: string[]): Promise<void> {
  return new Promise((resolve, reject) => {
    const proc = spawn(bin, args)
    let stderr = ""
    proc.stderr.on("data", (d) => {
      stderr += d.toString()
    })
    proc.on("error", (err) => reject(new ConversionError(err.message, 500)))
    proc.on("close", (code) => {
      if (code === 0) resolve()
      else
        reject(
          new ConversionError(
            `Operacja wideo nie powiodła się.\n${stderr.slice(-500)}`,
            500,
          ),
        )
    })
  })
}

/** Run ffmpeg with temp input/output files. */
export async function ffmpegTransform(
  input: Buffer,
  inputExt: string,
  outputExt: string,
  buildArgs: (inPath: string, outPath: string) => string[],
): Promise<Buffer> {
  const ffmpeg = await resolveFfmpegPath()
  if (!ffmpeg) {
    throw new ConversionError("Silnik ffmpeg jest niedostępny.", 500)
  }

  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "toolando-"))
  const inPath = path.join(tmpDir, `in-${randomUUID()}.${inputExt}`)
  const outPath = path.join(tmpDir, `out-${randomUUID()}.${outputExt}`)

  try {
    await fs.writeFile(inPath, input)
    await runFfmpeg(ffmpeg, buildArgs(inPath, outPath))
    return await fs.readFile(outPath)
  } finally {
    await fs.rm(tmpDir, { recursive: true, force: true }).catch(() => {})
  }
}

/** Parse "1:30" or "90" to seconds. */
export function parseTimeToSeconds(raw: string): number {
  const t = raw.trim()
  if (!t) return 0
  if (/^\d+(\.\d+)?$/.test(t)) return Number(t)
  const parts = t.split(":").map(Number)
  if (parts.some((n) => Number.isNaN(n))) {
    throw new ConversionError("Nieprawidłowy format czasu (użyj sekund lub MM:SS).")
  }
  if (parts.length === 2) return parts[0] * 60 + parts[1]
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2]
  throw new ConversionError("Nieprawidłowy format czasu.")
}
