import "server-only";

import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { spawn } from "node:child_process";

import type { ToolConfig } from "@/lib/tools";

export type ConversionResult = {
  buffer: Buffer;
  filename: string;
  contentType: string;
};

export class ConversionError extends Error {
  status: number;
  constructor(message: string, status = 400) {
    super(message);
    this.name = "ConversionError";
    this.status = status;
  }
}

const MIME: Record<string, string> = {
  // audio
  mp3: "audio/mpeg",
  wav: "audio/wav",
  flac: "audio/flac",
  m4a: "audio/mp4",
  aac: "audio/aac",
  ogg: "audio/ogg",
  opus: "audio/opus",
  aiff: "audio/aiff",
  wma: "audio/x-ms-wma",
  // video
  mp4: "video/mp4",
  webm: "video/webm",
  mov: "video/quicktime",
  avi: "video/x-msvideo",
  mkv: "video/x-matroska",
  flv: "video/x-flv",
  wmv: "video/x-ms-wmv",
  "3gp": "video/3gpp",
  m4v: "video/x-m4v",
  mpg: "video/mpeg",
  gif: "image/gif",
  // image
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  webp: "image/webp",
  avif: "image/avif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  heic: "image/heic",
  // documents / data
  pdf: "application/pdf",
  json: "application/json",
  csv: "text/csv",
  tsv: "text/tab-separated-values",
  xml: "application/xml",
  yaml: "application/x-yaml",
  html: "text/html",
  txt: "text/plain",
  md: "text/markdown",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  odt: "application/vnd.oasis.opendocument.text",
  rtf: "application/rtf",
  // fonts
  woff: "font/woff",
  woff2: "font/woff2",
  ttf: "font/ttf",
  otf: "font/otf",
  // archives
  zip: "application/zip",
};

function mimeFor(ext: string): string {
  return MIME[ext.toLowerCase()] ?? "application/octet-stream";
}

function baseName(filename: string): string {
  const dot = filename.lastIndexOf(".");
  return dot > 0 ? filename.slice(0, dot) : filename;
}

/**
 * Main dispatcher. Routes a file to the correct engine based on tool config.
 */
export async function convertFile(
  tool: ToolConfig,
  input: Buffer,
  originalName: string,
): Promise<ConversionResult> {
  if (!tool.supported) {
    throw new ConversionError(
      tool.unsupportedReason ?? "Ta konwersja nie jest obecnie obsługiwana.",
      501,
    );
  }

  const stem = baseName(originalName);
  const outName = `${stem}.${tool.to}`;

  switch (tool.engine) {
    case "sharp-image":
      return {
        buffer: await convertImage(input, tool.to),
        filename: outName,
        contentType: mimeFor(tool.to),
      };
    case "data-parser":
      return {
        buffer: await convertData(input, tool.from, tool.to),
        filename: outName,
        contentType: mimeFor(tool.to),
      };
    case "text":
      return {
        buffer: await convertText(input, tool.from, tool.to),
        filename: outName,
        contentType: mimeFor(tool.to),
      };
    case "font":
      return {
        buffer: await convertFont(input, tool.from, tool.to),
        filename: outName,
        contentType: mimeFor(tool.to),
      };
    case "pdf-image":
      return convertPdfToImage(input, stem, tool.to);
    case "pdf-doc":
      return {
        buffer: await convertPdfToDocx(input),
        filename: outName,
        contentType: mimeFor(tool.to),
      };
    case "doc-doc":
      return {
        buffer: await convertDocument(input, tool.from, tool.to),
        filename: outName,
        contentType: mimeFor(tool.to),
      };
    case "ffmpeg-audio":
    case "ffmpeg-video":
      return {
        buffer: await convertMedia(
          input,
          tool.from,
          tool.to,
          tool.engine === "ffmpeg-video",
        ),
        filename: outName,
        contentType: mimeFor(tool.to),
      };
    default:
      throw new ConversionError("Nieznany silnik konwersji.", 500);
  }
}

/* ------------------------------------------------------------------ */
/* Images (sharp)                                                      */
/* ------------------------------------------------------------------ */

async function convertImage(input: Buffer, to: string): Promise<Buffer> {
  const sharp = (await import("sharp")).default;
  // `animated` keeps multi-frame GIF/WebP frames where possible.
  let pipeline = sharp(input, { failOn: "none", animated: true });

  switch (to.toLowerCase()) {
    case "jpg":
    case "jpeg":
      pipeline = sharp(input, { failOn: "none" })
        .flatten({ background: "#ffffff" })
        .jpeg({ quality: 90 });
      break;
    case "png":
      pipeline = pipeline.png();
      break;
    case "webp":
      pipeline = pipeline.webp({ quality: 90 });
      break;
    case "avif":
      pipeline = sharp(input, { failOn: "none" }).avif({ quality: 55 });
      break;
    case "tiff":
      pipeline = sharp(input, { failOn: "none" }).tiff();
      break;
    case "gif":
      pipeline = pipeline.gif();
      break;
    default:
      throw new ConversionError(`Nieobsługiwany format docelowy: ${to}`);
  }

  return pipeline.toBuffer();
}

/* ------------------------------------------------------------------ */
/* Data (CSV / TSV / JSON / XML / YAML)                                */
/* ------------------------------------------------------------------ */

async function convertData(
  input: Buffer,
  from: string,
  to: string,
): Promise<Buffer> {
  const text = input.toString("utf8");
  // Every data format is parsed into a plain JS value, then serialized to the
  // target format. This yields a full any→any matrix through one intermediate.
  const value = await parseData(text, from);
  return serializeData(value, to);
}

async function parseData(text: string, from: string): Promise<unknown> {
  switch (from) {
    case "json":
      return JSON.parse(text);
    case "csv":
      return dsvToRows(text, ",");
    case "tsv":
      return dsvToRows(text, "\t");
    case "yaml": {
      const YAML = (await import("yaml")).default;
      return YAML.parse(text);
    }
    case "xml": {
      const { XMLParser } = await import("fast-xml-parser");
      return new XMLParser({ ignoreAttributes: false }).parse(text);
    }
    default:
      throw new ConversionError(`Nieobsługiwany format źródłowy: ${from}`);
  }
}

async function serializeData(value: unknown, to: string): Promise<Buffer> {
  switch (to) {
    case "json":
      return json(value);
    case "csv":
      return Buffer.from(rowsToDsv(value, ","), "utf8");
    case "tsv":
      return Buffer.from(rowsToDsv(value, "\t"), "utf8");
    case "yaml": {
      const YAML = (await import("yaml")).default;
      return Buffer.from(YAML.stringify(value), "utf8");
    }
    case "xml": {
      const { XMLBuilder } = await import("fast-xml-parser");
      const builder = new XMLBuilder({
        ignoreAttributes: false,
        format: true,
        arrayNodeName: "item",
      });
      const wrapped = Array.isArray(value) ? { root: { item: value } } : value;
      return Buffer.from(builder.build(wrapped), "utf8");
    }
    default:
      throw new ConversionError(`Nieobsługiwany format docelowy: ${to}`);
  }
}

function json(value: unknown): Buffer {
  return Buffer.from(JSON.stringify(value, null, 2), "utf8");
}

function dsvToRows(text: string, delim: string): Record<string, string>[] {
  const rows = parseDsv(text, delim);
  if (rows.length === 0) return [];
  const [header, ...body] = rows;
  return body
    .filter((r) => r.length > 0 && !(r.length === 1 && r[0] === ""))
    .map((cells) => {
      const obj: Record<string, string> = {};
      header.forEach((key, i) => {
        obj[key] = cells[i] ?? "";
      });
      return obj;
    });
}

/** Minimal RFC-4180-style parser that handles quotes and embedded newlines. */
function parseDsv(text: string, delim: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === delim) {
      row.push(field);
      field = "";
    } else if (ch === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (ch === "\r") {
      // ignore, handled by \n
    } else {
      field += ch;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

function rowsToDsv(data: unknown, delim: string): string {
  const rows = Array.isArray(data) ? data : [data];
  if (rows.length === 0) return "";

  const keys = Array.from(
    rows.reduce<Set<string>>((set, r) => {
      if (r && typeof r === "object") {
        Object.keys(r as object).forEach((k) => set.add(k));
      }
      return set;
    }, new Set<string>()),
  );

  const escape = (v: unknown) => {
    const s =
      v === null || v === undefined
        ? ""
        : typeof v === "object"
          ? JSON.stringify(v)
          : String(v);
    return new RegExp(`["${delim === "\t" ? "\\t" : delim}\n]`).test(s)
      ? `"${s.replace(/"/g, '""')}"`
      : s;
  };

  const lines = [keys.join(delim)];
  for (const r of rows) {
    const obj = (r ?? {}) as Record<string, unknown>;
    lines.push(keys.map((k) => escape(obj[k])).join(delim));
  }
  return lines.join("\n");
}

/* ------------------------------------------------------------------ */
/* Text / documents (md, html, txt, docx-text)                         */
/* ------------------------------------------------------------------ */

async function convertText(
  input: Buffer,
  from: string,
  to: string,
): Promise<Buffer> {
  const pair = `${from}->${to}`;

  switch (pair) {
    case "md->html": {
      const { marked } = await import("marked");
      const html = await marked.parse(input.toString("utf8"));
      return Buffer.from(wrapHtml(html), "utf8");
    }
    case "md->txt": {
      const { marked } = await import("marked");
      const html = await marked.parse(input.toString("utf8"));
      return Buffer.from(stripHtml(html), "utf8");
    }
    case "txt->html": {
      const escaped = escapeHtml(input.toString("utf8"));
      return Buffer.from(wrapHtml(`<pre>${escaped}</pre>`), "utf8");
    }
    case "txt->md":
      // Plain text is already valid Markdown; normalize line endings.
      return Buffer.from(
        input.toString("utf8").replace(/\r\n/g, "\n"),
        "utf8",
      );
    case "html->txt":
      return Buffer.from(stripHtml(input.toString("utf8")), "utf8");
    case "html->md":
      return Buffer.from(htmlToMarkdown(input.toString("utf8")), "utf8");
    case "docx->txt":
      return Buffer.from(await docxToText(input), "utf8");
    case "docx->md":
      return Buffer.from(await docxToText(input), "utf8");
    case "docx->html": {
      const paragraphs = (await docxToText(input)).split(/\n/);
      const body = paragraphs
        .map((p) => (p.trim() ? `<p>${escapeHtml(p)}</p>` : ""))
        .join("\n");
      return Buffer.from(wrapHtml(body), "utf8");
    }
    case "rtf->txt":
      return Buffer.from(rtfToText(input.toString("utf8")), "utf8");
    default:
      throw new ConversionError(`Nieobsługiwana konwersja tekstu: ${pair}`);
  }
}

/** Very small HTML → Markdown converter for common block/inline tags. */
function htmlToMarkdown(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, "# $1\n\n")
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, "## $1\n\n")
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, "### $1\n\n")
    .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, "#### $1\n\n")
    .replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi, "**$2**")
    .replace(/<(em|i)[^>]*>([\s\S]*?)<\/\1>/gi, "*$2*")
    .replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, "[$2]($1)")
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, "- $1\n")
    .replace(/<\/(p|div|h[1-6]|ul|ol|tr)>/gi, "\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/** Strip RTF control words and groups to recover plain text. */
function rtfToText(rtf: string): string {
  return rtf
    .replace(/\\par[d]?/g, "\n")
    .replace(/\\tab/g, "\t")
    .replace(/\{\\\*[^{}]*\}/g, "")
    .replace(/\\'[0-9a-fA-F]{2}/g, "")
    .replace(/\\[a-zA-Z]+-?\d* ?/g, "")
    .replace(/[{}]/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function wrapHtml(body: string): string {
  return `<!doctype html>
<html lang="pl">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body>
${body}
</body>
</html>
`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<\/(p|div|h[1-6]|li|tr|br)>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

async function docxToText(input: Buffer): Promise<string> {
  const JSZip = (await import("jszip")).default;
  const zip = await JSZip.loadAsync(input);
  const doc = zip.file("word/document.xml");
  if (!doc) {
    throw new ConversionError("Plik DOCX jest nieprawidłowy lub uszkodzony.");
  }
  const xml = await doc.async("string");
  return xml
    .replace(/<\/w:p>/g, "\n")
    .replace(/<w:tab[^>]*\/>/g, "\t")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/* ------------------------------------------------------------------ */
/* Fonts (ttf/otf -> woff/woff2, woff2 -> ttf)                         */
/* ------------------------------------------------------------------ */

async function convertFont(
  input: Buffer,
  from: string,
  to: string,
): Promise<Buffer> {
  const pair = `${from}->${to}`;
  switch (pair) {
    case "ttf->woff":
    case "otf->woff": {
      const ttf2woff = (await import("ttf2woff")).default;
      return Buffer.from(ttf2woff(new Uint8Array(input)));
    }
    case "ttf->woff2":
    case "otf->woff2": {
      const wawoff2 = await import("wawoff2");
      return Buffer.from(await wawoff2.compress(input));
    }
    case "woff2->ttf": {
      const wawoff2 = await import("wawoff2");
      return Buffer.from(await wawoff2.decompress(input));
    }
    default:
      throw new ConversionError(`Nieobsługiwana konwersja fontów: ${pair}`);
  }
}

/* ------------------------------------------------------------------ */
/* PDF -> image (mupdf). Multi-page PDFs are zipped.                   */
/* ------------------------------------------------------------------ */

async function convertPdfToImage(
  input: Buffer,
  stem: string,
  to: string,
): Promise<ConversionResult> {
  const mupdf = await import("mupdf");
  const doc = mupdf.Document.openDocument(
    new Uint8Array(input),
    "application/pdf",
  );
  const pageCount = doc.countPages();
  if (pageCount === 0) {
    throw new ConversionError("Plik PDF nie zawiera żadnych stron.");
  }

  // Render at ~150 DPI (scale 2x from 72dpi baseline).
  const matrix = mupdf.Matrix.scale(2, 2);
  const target = to.toLowerCase();
  const isJpg = target === "jpg" || target === "jpeg";

  const renderPage = async (index: number): Promise<Buffer> => {
    const page = doc.loadPage(index);
    const pixmap = page.toPixmap(matrix, mupdf.ColorSpace.DeviceRGB, false);
    // mupdf renders PNG/JPEG natively; other targets go through sharp.
    if (target === "png") return Buffer.from(pixmap.asPNG());
    if (isJpg) return Buffer.from(pixmap.asJPEG(90, false));
    const png = Buffer.from(pixmap.asPNG());
    return convertImage(png, target);
  };

  if (pageCount === 1) {
    return {
      buffer: await renderPage(0),
      filename: `${stem}.${to}`,
      contentType: mimeFor(to),
    };
  }

  const JSZip = (await import("jszip")).default;
  const zip = new JSZip();
  const pad = String(pageCount).length;
  for (let i = 0; i < pageCount; i++) {
    const name = `${stem}-${String(i + 1).padStart(pad, "0")}.${to}`;
    zip.file(name, await renderPage(i));
  }
  const zipBuffer = await zip.generateAsync({ type: "nodebuffer" });
  return {
    buffer: zipBuffer,
    filename: `${stem}-${to}.zip`,
    contentType: "application/zip",
  };
}

/* ------------------------------------------------------------------ */
/* PDF <-> DOCX and office documents                                   */
/* ------------------------------------------------------------------ */

/** Extract the plain-text content of each PDF page via mupdf. */
async function pdfToParagraphs(input: Buffer): Promise<string[]> {
  const mupdf = await import("mupdf");
  const doc = mupdf.Document.openDocument(
    new Uint8Array(input),
    "application/pdf",
  );
  const pageCount = doc.countPages();
  if (pageCount === 0) {
    throw new ConversionError("Plik PDF nie zawiera żadnych stron.");
  }

  const paragraphs: string[] = [];
  for (let i = 0; i < pageCount; i++) {
    const page = doc.loadPage(i);
    const text = page.toStructuredText("preserve-whitespace").asText();
    for (const line of text.split(/\r?\n/)) {
      paragraphs.push(line);
    }
    if (i < pageCount - 1) paragraphs.push("");
  }
  return paragraphs;
}

/** Build a valid, openable .docx from a list of text paragraphs. */
async function buildDocx(paragraphs: string[]): Promise<Buffer> {
  const JSZip = (await import("jszip")).default;
  const zip = new JSZip();

  const esc = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  const body = (paragraphs.length ? paragraphs : [""])
    .map((p) => {
      const run = p
        ? `<w:r><w:t xml:space="preserve">${esc(p)}</w:t></w:r>`
        : "";
      return `<w:p>${run}</w:p>`;
    })
    .join("");

  zip.file(
    "[Content_Types].xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
</Types>`,
  );

  zip.file(
    "_rels/.rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`,
  );

  zip.file(
    "word/document.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
<w:body>${body}<w:sectPr/></w:body>
</w:document>`,
  );

  return zip.generateAsync({ type: "nodebuffer" });
}

async function convertPdfToDocx(input: Buffer): Promise<Buffer> {
  const paragraphs = await pdfToParagraphs(input);
  return buildDocx(paragraphs);
}

/** Extract text paragraphs from an ODT (OpenDocument) file. */
async function odtToParagraphs(input: Buffer): Promise<string[]> {
  const JSZip = (await import("jszip")).default;
  const zip = await JSZip.loadAsync(input);
  const content = zip.file("content.xml");
  if (!content) {
    throw new ConversionError("Plik ODT jest nieprawidłowy lub uszkodzony.");
  }
  const xml = await content.async("string");
  return xml
    .replace(/<text:tab[^>]*\/>/g, "\t")
    .replace(/<\/text:p>/g, "\n")
    .replace(/<\/text:h>/g, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .split(/\r?\n/);
}

/** Render text paragraphs into a simple, multi-page PDF via pdf-lib. */
async function textToPdf(paragraphs: string[]): Promise<Buffer> {
  const { PDFDocument, StandardFonts } = await import("pdf-lib");
  const pdf = await PDFDocument.create();
  const font = await pdf.embedFont(StandardFonts.Helvetica);

  const fontSize = 11;
  const lineHeight = 16;
  const margin = 56;
  const pageWidth = 595.28; // A4
  const pageHeight = 841.89;
  const maxWidth = pageWidth - margin * 2;

  // pdf-lib's StandardFont only supports WinAnsi; drop unsupported glyphs.
  const sanitize = (s: string) =>
    // eslint-disable-next-line no-control-regex
    s.replace(/[^\x00-\xFF]/g, "?").replace(/\t/g, "    ");

  const wrap = (text: string): string[] => {
    if (!text) return [""];
    const words = text.split(/\s+/);
    const lines: string[] = [];
    let current = "";
    for (const word of words) {
      const candidate = current ? `${current} ${word}` : word;
      if (font.widthOfTextAtSize(candidate, fontSize) > maxWidth && current) {
        lines.push(current);
        current = word;
      } else {
        current = candidate;
      }
    }
    if (current) lines.push(current);
    return lines.length ? lines : [""];
  };

  let page = pdf.addPage([pageWidth, pageHeight]);
  let y = pageHeight - margin;

  for (const paragraph of paragraphs) {
    for (const line of wrap(sanitize(paragraph))) {
      if (y < margin) {
        page = pdf.addPage([pageWidth, pageHeight]);
        y = pageHeight - margin;
      }
      page.drawText(line, { x: margin, y, size: fontSize, font });
      y -= lineHeight;
    }
  }

  const bytes = await pdf.save();
  return Buffer.from(bytes);
}

async function convertDocument(
  input: Buffer,
  from: string,
  to: string,
): Promise<Buffer> {
  const pair = `${from}->${to}`;
  switch (pair) {
    case "docx->pdf": {
      const text = await docxToText(input);
      return textToPdf(text.split(/\r?\n/));
    }
    case "odt->docx": {
      const paragraphs = await odtToParagraphs(input);
      return buildDocx(paragraphs);
    }
    case "odt->txt": {
      const paragraphs = await odtToParagraphs(input);
      return Buffer.from(paragraphs.join("\n").trim(), "utf8");
    }
    default:
      throw new ConversionError(`Nieobsługiwana konwersja dokumentu: ${pair}`);
  }
}

/* ------------------------------------------------------------------ */
/* Audio / Video (ffmpeg)                                              */
/* ------------------------------------------------------------------ */

/**
 * Resolve a usable ffmpeg binary path.
 *
 * Prefers `@ffmpeg-installer/ffmpeg`, which ships the binary as an ordinary
 * package file (no network download in a postinstall script), so it is always
 * present and gets traced into the serverless function. Falls back to
 * `ffmpeg-static`. As a safety net we ensure the file is executable, since some
 * build environments skip the permission-setting install script.
 */
async function resolveFfmpegPath(): Promise<string | null> {
  const candidates: string[] = [];

  try {
    const installer = (await import("@ffmpeg-installer/ffmpeg")) as {
      path?: string;
      default?: { path?: string };
    };
    const p = installer.path ?? installer.default?.path;
    if (p) candidates.push(p);
  } catch {
    // package not available — fall through to ffmpeg-static
  }

  try {
    const staticPath = (await import("ffmpeg-static")).default as
      | string
      | null;
    if (staticPath) candidates.push(staticPath);
  } catch {
    // ignore
  }

  for (const p of candidates) {
    try {
      await fs.access(p);
      // Ensure the binary is executable (install scripts are sometimes skipped).
      await fs.chmod(p, 0o755).catch(() => {});
      return p;
    } catch {
      // try next candidate
    }
  }

  return null;
}

async function convertMedia(
  input: Buffer,
  from: string,
  to: string,
  isVideo: boolean,
): Promise<Buffer> {
  const ffmpegStatic = await resolveFfmpegPath();
  if (!ffmpegStatic) {
    throw new ConversionError("Silnik ffmpeg jest niedostępny.", 500);
  }

  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "toolando-"));
  const inPath = path.join(tmpDir, `in-${randomUUID()}.${from}`);
  const outPath = path.join(tmpDir, `out-${randomUUID()}.${to}`);

  try {
    await fs.writeFile(inPath, input);
    const args = isVideo
      ? videoArgs(to, inPath, outPath)
      : audioArgs(to, inPath, outPath);
    await runFfmpeg(ffmpegStatic, args);
    return await fs.readFile(outPath);
  } finally {
    await fs.rm(tmpDir, { recursive: true, force: true }).catch(() => {});
  }
}

function audioArgs(to: string, inPath: string, outPath: string): string[] {
  const base = ["-y", "-i", inPath, "-vn"];
  switch (to.toLowerCase()) {
    case "mp3":
      return [...base, "-codec:a", "libmp3lame", "-q:a", "2", outPath];
    case "wav":
      return [...base, outPath];
    case "flac":
      return [...base, "-codec:a", "flac", outPath];
    case "ogg":
      return [...base, "-codec:a", "libvorbis", "-q:a", "5", outPath];
    case "opus":
      return [...base, "-codec:a", "libopus", "-b:a", "128k", outPath];
    case "aac":
    case "m4a":
      return [...base, "-codec:a", "aac", "-b:a", "192k", outPath];
    case "aiff":
      return [...base, "-codec:a", "pcm_s16be", outPath];
    case "wma":
      return [...base, "-codec:a", "wmav2", "-b:a", "192k", outPath];
    default:
      return [...base, outPath];
  }
}

function videoArgs(to: string, inPath: string, outPath: string): string[] {
  const base = ["-y", "-i", inPath];
  switch (to.toLowerCase()) {
    case "webm":
      return [
        ...base,
        "-c:v",
        "libvpx-vp9",
        "-b:v",
        "1M",
        "-c:a",
        "libopus",
        outPath,
      ];
    case "mp4":
    case "mov":
    case "mkv":
    case "m4v":
    case "3gp":
      return [
        ...base,
        "-c:v",
        "libx264",
        "-preset",
        "veryfast",
        "-crf",
        "23",
        "-pix_fmt",
        "yuv420p",
        "-c:a",
        "aac",
        outPath,
      ];
    case "avi":
      return [
        ...base,
        "-c:v",
        "mpeg4",
        "-qscale:v",
        "4",
        "-c:a",
        "libmp3lame",
        outPath,
      ];
    case "flv":
      return [
        ...base,
        "-c:v",
        "flv",
        "-qscale:v",
        "4",
        "-c:a",
        "libmp3lame",
        "-ar",
        "44100",
        outPath,
      ];
    case "wmv":
      return [
        ...base,
        "-c:v",
        "wmv2",
        "-qscale:v",
        "4",
        "-c:a",
        "wmav2",
        "-b:a",
        "192k",
        outPath,
      ];
    case "mpg":
      return [
        ...base,
        "-c:v",
        "mpeg2video",
        "-qscale:v",
        "4",
        "-c:a",
        "mp2",
        "-b:a",
        "192k",
        outPath,
      ];
    case "gif":
      return [
        ...base,
        "-vf",
        "fps=12,scale=480:-1:flags=lanczos",
        "-an",
        outPath,
      ];
    default:
      return [...base, outPath];
  }
}

function runFfmpeg(bin: string, args: string[]): Promise<void> {
  return new Promise((resolve, reject) => {
    const proc = spawn(bin, args);
    let stderr = "";
    proc.stderr.on("data", (d) => {
      stderr += d.toString();
    });
    proc.on("error", (err) => reject(new ConversionError(err.message, 500)));
    proc.on("close", (code) => {
      if (code === 0) resolve();
      else
        reject(
          new ConversionError(
            `Konwersja multimediów nie powiodła się.\n${stderr.slice(-500)}`,
            500,
          ),
        );
    });
  });
}
