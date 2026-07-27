import "server-only";

import { spawn } from "node:child_process";
import { randomUUID } from "node:crypto";
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";

import {
  convertViaRemoteService,
  hasRemoteConverter,
} from "@/lib/remote-converter";

const SUPPORTED_PAIRS = new Set([
  "pdf->docx",
  "docx->pdf",
  "odt->docx",
  "odt->pdf",
  "docx->odt",
  "pdf->odt",
]);

/** Map target extension to LibreOffice --convert-to filter name. */
function convertFilter(toExt: string): string {
  switch (toExt.toLowerCase()) {
    case "pdf":
      return "pdf:writer_pdf_Export";
    case "docx":
      return "docx:MS Word 2007 XML";
    case "odt":
      return "odt";
    case "txt":
      return "txt:Text";
    default:
      return toExt.toLowerCase();
  }
}

async function commandExists(command: string): Promise<boolean> {
  return new Promise((resolve) => {
    const checker = process.platform === "win32" ? "where" : "which";
    const proc = spawn(checker, [command], { stdio: "ignore" });
    proc.on("close", (code) => resolve(code === 0));
    proc.on("error", () => resolve(false));
  });
}

/**
 * Resolve a usable LibreOffice `soffice` binary.
 *
 * Order:
 * 1. LIBREOFFICE_PATH / SOFFICE_PATH env var
 * 2. Common Windows install locations
 * 3. `soffice` / `libreoffice` from PATH
 */
export async function resolveLibreOfficePath(): Promise<string | null> {
  for (const key of ["LIBREOFFICE_PATH", "SOFFICE_PATH"]) {
    const envPath = process.env[key]?.trim();
    if (!envPath) continue;
    try {
      await fs.access(envPath);
      return envPath;
    } catch {
      // ignore invalid env path
    }
  }

  if (process.platform === "win32") {
    const roots = [
      process.env["ProgramFiles"],
      process.env["ProgramFiles(x86)"],
      "C:\\Program Files",
      "C:\\Program Files (x86)",
    ].filter(Boolean) as string[];

    for (const root of roots) {
      const candidate = path.join(root, "LibreOffice", "program", "soffice.exe");
      try {
        await fs.access(candidate);
        return candidate;
      } catch {
        // try next
      }
    }
  }

  for (const bin of ["soffice", "libreoffice", "soffice.exe"]) {
    if (await commandExists(bin)) return bin;
  }

  return null;
}

export async function isLibreOfficeAvailable(): Promise<boolean> {
  if (process.env.LIBREOFFICE_DISABLE === "1") return false;
  if (hasRemoteConverter()) return true;
  return (await resolveLibreOfficePath()) !== null;
}

function runLibreOffice(bin: string, args: string[]): Promise<void> {
  return new Promise((resolve, reject) => {
    const proc = spawn(bin, args, {
      windowsHide: true,
      env: {
        ...process.env,
        // Avoid stale lock files when many conversions run in parallel.
        SAL_DISABLE_OPENCL: "1",
      },
    });

    let stderr = "";
    proc.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });
    proc.stdout.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    proc.on("error", (err) => {
      reject(new Error(`LibreOffice: ${err.message}`));
    });

    proc.on("close", (code) => {
      if (code === 0) resolve();
      else {
        reject(
          new Error(
            `Konwersja LibreOffice nie powiodła się.\n${stderr.slice(-800)}`,
          ),
        );
      }
    });
  });
}

/**
 * Convert a document buffer using headless LibreOffice.
 * Returns null when LibreOffice is unavailable or disabled (caller should fallback).
 * Throws ConversionError when LibreOffice is present but conversion fails.
 */
export async function tryConvertWithLibreOffice(
  input: Buffer,
  fromExt: string,
  toExt: string,
): Promise<Buffer | null> {
  if (process.env.LIBREOFFICE_DISABLE === "1") return null;

  const pair = `${fromExt.toLowerCase()}->${toExt.toLowerCase()}`;
  if (!SUPPORTED_PAIRS.has(pair)) return null;

  const remoteUrl = hasRemoteConverter();
  if (remoteUrl) {
    try {
      return await convertViaRemoteService(input, fromExt, toExt);
    } catch (err) {
      console.error("[libreoffice] remote converter failed:", err);
      // Fall through to local LibreOffice if available.
    }
  }

  const bin = await resolveLibreOfficePath();
  if (!bin) return null;

  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "toolando-lo-"));
  const profileDir = path.join(tmpDir, "profile");
  const outDir = path.join(tmpDir, "out");
  const baseName = `input-${randomUUID()}`;
  const inPath = path.join(tmpDir, `${baseName}.${fromExt.toLowerCase()}`);

  await fs.mkdir(profileDir, { recursive: true });
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(inPath, input);

  const userInstall = pathToFileURL(profileDir).href;
  const args = [
    "--headless",
    "--norestore",
    "--nologo",
    "--nodefault",
    `--env:UserInstallation=${userInstall}`,
    "--convert-to",
    convertFilter(toExt),
    "--outdir",
    outDir,
  ];

  if (fromExt.toLowerCase() === "pdf") {
    args.push("--infilter", "writer_pdf_import");
  }

  args.push(inPath);

  try {
    await runLibreOffice(bin, args);

    const produced = await fs.readdir(outDir);
    const match = produced.find((name) =>
      name.toLowerCase().endsWith(`.${toExt.toLowerCase()}`),
    );
    if (!match) {
      throw new Error("LibreOffice nie wygenerował pliku wynikowego.");
    }

    const outPath = path.join(outDir, match);
    const stat = await fs.stat(outPath);
    if (stat.size === 0) {
      throw new Error("LibreOffice wygenerował pusty plik.");
    }

    return await fs.readFile(outPath);
  } finally {
    await fs.rm(tmpDir, { recursive: true, force: true }).catch(() => {});
  }
}
