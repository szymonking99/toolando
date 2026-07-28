import "server-only";

import { spawn } from "node:child_process";
import { randomUUID } from "node:crypto";
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";

import {
  convertViaRemoteService,
  hasRemoteConverter,
} from "@/lib/remote-converter";

const ARCHIVE_PAIRS = new Set([
  "zip->rar",
  "rar->zip",
  "zip->7z",
  "7z->zip",
]);

async function commandExists(command: string): Promise<boolean> {
  return new Promise((resolve) => {
    const checker = process.platform === "win32" ? "where" : "which";
    const proc = spawn(checker, [command], { stdio: "ignore" });
    proc.on("close", (code) => resolve(code === 0));
    proc.on("error", () => resolve(false));
  });
}

async function resolveRarPath(): Promise<string | null> {
  const envPath = process.env.RAR_PATH?.trim();
  if (envPath) {
    try {
      await fs.access(envPath);
      return envPath;
    } catch {
      // ignore
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
      for (const name of ["WinRAR\\Rar.exe", "WinRAR\\rar.exe"]) {
        const candidate = path.join(root, name);
        try {
          await fs.access(candidate);
          return candidate;
        } catch {
          // try next
        }
      }
    }
  }

  for (const bin of ["rar", "rar.exe"]) {
    if (await commandExists(bin)) return bin;
  }

  return null;
}

async function resolve7zPath(): Promise<string | null> {
  const envPath = process.env.SEVEN_ZIP_PATH?.trim() || process.env.SEVENZ_PATH?.trim();
  if (envPath) {
    try {
      await fs.access(envPath);
      return envPath;
    } catch {
      // ignore
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
      for (const name of ["7-Zip\\7z.exe", "7-Zip\\7za.exe"]) {
        const candidate = path.join(root, name);
        try {
          await fs.access(candidate);
          return candidate;
        } catch {
          // try next
        }
      }
    }
  }

  for (const bin of ["7z", "7za", "7z.exe"]) {
    if (await commandExists(bin)) return bin;
  }

  return null;
}

function runCommand(
  bin: string,
  args: string[],
  cwd?: string,
): Promise<void> {
  return new Promise((resolve, reject) => {
    const proc = spawn(bin, args, {
      cwd,
      windowsHide: true,
      stdio: ["ignore", "ignore", "pipe"],
    });

    let stderr = "";
    proc.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    proc.on("error", (err) => reject(err));
    proc.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(stderr.slice(-600) || `Exit code ${code}`));
    });
  });
}

async function extractZipToDir(input: Buffer, destDir: string): Promise<void> {
  const JSZip = (await import("jszip")).default;
  const zip = await JSZip.loadAsync(input);

  for (const [name, entry] of Object.entries(zip.files)) {
    if (entry.dir) {
      await fs.mkdir(path.join(destDir, name), { recursive: true });
      continue;
    }

    const outPath = path.join(destDir, name);
    await fs.mkdir(path.dirname(outPath), { recursive: true });
    const data = await entry.async("nodebuffer");
    await fs.writeFile(outPath, data);
  }
}

async function packDirToZip(workDir: string): Promise<Buffer> {
  const JSZip = (await import("jszip")).default;
  const zip = new JSZip();

  async function walk(dir: string, prefix = "") {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) await walk(full, rel);
      else zip.file(rel, await fs.readFile(full));
    }
  }

  await walk(workDir);
  return zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" });
}

async function rarToZipLocal(input: Buffer): Promise<Buffer> {
  const { createExtractorFromData } = await import("node-unrar-js");
  const extractor = await createExtractorFromData({
    data: input.buffer.slice(
      input.byteOffset,
      input.byteOffset + input.byteLength,
    ),
  });

  const extracted = extractor.extract();
  const JSZip = (await import("jszip")).default;
  const zip = new JSZip();

  for (const file of extracted.files) {
    if (file.fileHeader.flags.directory) continue;
    if (!file.extraction) continue;
    zip.file(file.fileHeader.name, file.extraction);
  }

  const hasFiles = Object.keys(zip.files).length > 0;
  if (!hasFiles) {
    throw new Error(
      "Archiwum RAR jest puste lub używa niewspieranej wersji (np. RAR5 z hasłem).",
    );
  }

  return zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" });
}

async function zipToRarLocal(input: Buffer): Promise<Buffer> {
  const rarBin = await resolveRarPath();
  if (!rarBin) {
    throw new Error(
      "Konwersja ZIP → RAR wymaga programu RAR (WinRAR) lub serwera konwertera na VPS. " +
        "RAR → ZIP działa bez tego. Zobacz docs/konwerter-vps-pl.md.",
    );
  }

  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "toolando-zip-rar-"));
  const workDir = path.join(tmpDir, "content");
  const outPath = path.join(tmpDir, `output-${randomUUID()}.rar`);

  await fs.mkdir(workDir, { recursive: true });
  await extractZipToDir(input, workDir);

  try {
    await runCommand(
      rarBin,
      ["a", "-r", "-ep1", "-y", "-idq", outPath, "*"],
      workDir,
    );

    const stat = await fs.stat(outPath);
    if (stat.size === 0) {
      throw new Error("Program RAR wygenerował pusty plik.");
    }

    return await fs.readFile(outPath);
  } finally {
    await fs.rm(tmpDir, { recursive: true, force: true }).catch(() => {});
  }
}

async function sevenZipRoundTrip(
  input: Buffer,
  fromExt: string,
  toExt: string,
): Promise<Buffer> {
  const seven = await resolve7zPath();
  if (!seven) {
    throw new Error(
      "Konwersja ZIP ↔ 7Z wymaga programu 7-Zip (lub p7zip) / serwera konwertera na VPS.",
    );
  }

  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "toolando-7z-"));
  const workDir = path.join(tmpDir, "content");
  const inPath = path.join(tmpDir, `input.${fromExt}`);
  const outPath = path.join(tmpDir, `output.${toExt}`);

  await fs.mkdir(workDir, { recursive: true });
  await fs.writeFile(inPath, input);

  try {
    await runCommand(seven, ["x", inPath, `-o${workDir}`, "-y"]);

    if (toExt === "zip") {
      return packDirToZip(workDir);
    }

    await runCommand(seven, ["a", "-t7z", "-y", outPath, "*"], workDir);
    const stat = await fs.stat(outPath);
    if (stat.size === 0) throw new Error("7-Zip wygenerował pusty plik.");
    return await fs.readFile(outPath);
  } finally {
    await fs.rm(tmpDir, { recursive: true, force: true }).catch(() => {});
  }
}

export async function convertArchive(
  input: Buffer,
  fromExt: string,
  toExt: string,
): Promise<Buffer> {
  const pair = `${fromExt.toLowerCase()}->${toExt.toLowerCase()}`;
  if (!ARCHIVE_PAIRS.has(pair)) {
    throw new Error(`Nieobsługiwana konwersja archiwum: ${pair}`);
  }

  if (hasRemoteConverter()) {
    try {
      return await convertViaRemoteService(input, fromExt, toExt);
    } catch (err) {
      console.error("[archive] remote converter failed:", err);
    }
  }

  if (pair === "rar->zip") return rarToZipLocal(input);
  if (pair === "zip->rar") return zipToRarLocal(input);
  return sevenZipRoundTrip(input, fromExt.toLowerCase(), toExt.toLowerCase());
}
