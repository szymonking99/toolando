import "server-only";

import { promises as fs } from "node:fs";
import path from "node:path";

/**
 * High-fidelity document conversion helpers for the DOCX <-> PDF tools.
 *
 * The previous implementation rendered PDFs with pdf-lib's built-in Helvetica,
 * which only supports the WinAnsi character set. Every Polish diacritic
 * (ą ć ę ł ń ó ś ź ż …) was replaced with "?", and all structure (headings,
 * bold, lists) was flattened to plain text — hence the "very ugly" output.
 *
 * This module:
 *   - Embeds a real Unicode font (Noto Sans, 4 weights) so any language renders
 *     correctly.
 *   - Uses mammoth to preserve DOCX structure (headings, bold/italic, lists)
 *     when producing a PDF.
 *   - Uses mupdf's structured text (paragraph blocks + per-run font metadata)
 *     to rebuild readable, well-formed DOCX from a PDF instead of one paragraph
 *     per visual line.
 */

/* ------------------------------------------------------------------ */
/* Fonts                                                               */
/* ------------------------------------------------------------------ */

type FontBytes = {
  regular: Uint8Array;
  bold: Uint8Array;
  italic: Uint8Array;
  boldItalic: Uint8Array;
};

let fontCache: FontBytes | null = null;

async function loadFontBytes(): Promise<FontBytes> {
  if (fontCache) return fontCache;
  const dir = path.join(process.cwd(), "lib", "fonts");
  const read = async (file: string) =>
    new Uint8Array(await fs.readFile(path.join(dir, file)));

  fontCache = {
    regular: await read("NotoSans-Regular.ttf"),
    bold: await read("NotoSans-Bold.ttf"),
    italic: await read("NotoSans-Italic.ttf"),
    boldItalic: await read("NotoSans-BoldItalic.ttf"),
  };
  return fontCache;
}

/* ------------------------------------------------------------------ */
/* Shared inline model                                                 */
/* ------------------------------------------------------------------ */

type InlineRun = { text: string; bold: boolean; italic: boolean };

type Block = {
  kind: "heading" | "paragraph" | "listitem";
  level: number; // heading level 1-6, else 0
  runs: InlineRun[];
  ordered?: boolean;
  index?: number; // list item number for ordered lists
};

function decodeEntities(s: string): string {
  return s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

/**
 * Turn an inline HTML fragment (as emitted by mammoth) into styled runs,
 * tracking bold/italic nesting. Unknown tags are dropped but their text kept.
 */
function parseInlineRuns(html: string): InlineRun[] {
  const runs: InlineRun[] = [];
  let bold = 0;
  let italic = 0;
  let buffer = "";

  const flush = () => {
    if (!buffer) return;
    const text = decodeEntities(buffer).replace(/\s+/g, " ");
    if (text) runs.push({ text, bold: bold > 0, italic: italic > 0 });
    buffer = "";
  };

  const tokenizer = /<\s*(\/?)\s*([a-zA-Z0-9]+)[^>]*>|([^<]+)/g;
  let match: RegExpExecArray | null;
  while ((match = tokenizer.exec(html)) !== null) {
    const [, closing, tag, text] = match;
    if (text !== undefined) {
      buffer += text;
      continue;
    }
    const name = (tag ?? "").toLowerCase();
    if (name === "strong" || name === "b") {
      flush();
      bold += closing ? -1 : 1;
      if (bold < 0) bold = 0;
    } else if (name === "em" || name === "i") {
      flush();
      italic += closing ? -1 : 1;
      if (italic < 0) italic = 0;
    } else if (name === "br") {
      buffer += " ";
    }
    // other tags (a, span, sup, …) are ignored but their text is preserved
  }
  flush();
  return runs;
}

/* ------------------------------------------------------------------ */
/* DOCX -> PDF                                                         */
/* ------------------------------------------------------------------ */

/** Parse the (simple, well-formed) HTML mammoth produces into blocks. */
function htmlToBlocks(html: string): Block[] {
  const blocks: Block[] = [];

  // Match each top-level block element mammoth emits.
  const blockRe =
    /<(h[1-6]|p|ul|ol|table)[^>]*>([\s\S]*?)<\/\1>/gi;
  let match: RegExpExecArray | null;
  let matchedAny = false;

  while ((match = blockRe.exec(html)) !== null) {
    matchedAny = true;
    const tag = match[1].toLowerCase();
    const inner = match[2];

    if (/^h[1-6]$/.test(tag)) {
      blocks.push({
        kind: "heading",
        level: Number(tag[1]),
        runs: parseInlineRuns(inner),
      });
    } else if (tag === "p") {
      const runs = parseInlineRuns(inner);
      if (runs.length) blocks.push({ kind: "paragraph", level: 0, runs });
      else blocks.push({ kind: "paragraph", level: 0, runs: [] }); // blank line
    } else if (tag === "ul" || tag === "ol") {
      const ordered = tag === "ol";
      const liRe = /<li[^>]*>([\s\S]*?)<\/li>/gi;
      let li: RegExpExecArray | null;
      let i = 1;
      while ((li = liRe.exec(inner)) !== null) {
        blocks.push({
          kind: "listitem",
          level: 0,
          ordered,
          index: i++,
          runs: parseInlineRuns(li[1]),
        });
      }
    } else if (tag === "table") {
      // Flatten table rows into tab-separated paragraphs so nothing is lost.
      const rowRe = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
      let row: RegExpExecArray | null;
      while ((row = rowRe.exec(inner)) !== null) {
        const cellRe = /<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi;
        const cells: string[] = [];
        let cell: RegExpExecArray | null;
        while ((cell = cellRe.exec(row[1])) !== null) {
          cells.push(
            parseInlineRuns(cell[1])
              .map((r) => r.text)
              .join("")
              .trim(),
          );
        }
        blocks.push({
          kind: "paragraph",
          level: 0,
          runs: [{ text: cells.join("    "), bold: false, italic: false }],
        });
      }
    }
  }

  // Fallback: if mammoth produced no recognizable blocks, treat the whole
  // thing as plain text split on line breaks.
  if (!matchedAny) {
    const text = decodeEntities(html.replace(/<[^>]+>/g, ""));
    for (const line of text.split(/\n/)) {
      blocks.push({
        kind: "paragraph",
        level: 0,
        runs: line.trim()
          ? [{ text: line.trim(), bold: false, italic: false }]
          : [],
      });
    }
  }

  return blocks;
}

export async function docxToPdf(input: Buffer): Promise<Buffer> {
  const mammoth = (await import("mammoth")).default;
  const { PDFDocument } = await import("pdf-lib");
  const fontkit = (await import("@pdf-lib/fontkit")).default;

  const { value: html } = await mammoth.convertToHtml({ buffer: input });
  const blocks = htmlToBlocks(html);

  const pdf = await PDFDocument.create();
  pdf.registerFontkit(fontkit);

  const bytesSet = await loadFontBytes();
  // NOTE: `subset: true` MUST NOT be used here. pdf-lib's fontkit subsetter
  // corrupts composite glyphs (base letter + combining diacritic) for Noto
  // Sans, which is exactly how Polish/most-Latin accents are built. The result
  // is a tiny PDF whose text is still copyable (the ToUnicode CMap is intact)
  // but whose glyph outlines are broken — producing the "scattered single
  // letters" output users reported. Embedding the full font renders correctly.
  const fonts = {
    regular: await pdf.embedFont(bytesSet.regular, { subset: false }),
    bold: await pdf.embedFont(bytesSet.bold, { subset: false }),
    italic: await pdf.embedFont(bytesSet.italic, { subset: false }),
    boldItalic: await pdf.embedFont(bytesSet.boldItalic, { subset: false }),
  };

  const pickFont = (bold: boolean, italic: boolean) =>
    bold && italic
      ? fonts.boldItalic
      : bold
        ? fonts.bold
        : italic
          ? fonts.italic
          : fonts.regular;

  const pageWidth = 595.28; // A4
  const pageHeight = 841.89;
  const margin = 56;
  const maxWidth = pageWidth - margin * 2;

  let page = pdf.addPage([pageWidth, pageHeight]);
  let y = pageHeight - margin;

  const ensureSpace = (needed: number) => {
    if (y - needed < margin) {
      page = pdf.addPage([pageWidth, pageHeight]);
      y = pageHeight - margin;
    }
  };

  const headingSize = (level: number) =>
    ({ 1: 22, 2: 18, 3: 15, 4: 13, 5: 12, 6: 12 })[level] ?? 13;

  // A laid-out word carries its own font so mixed bold/italic lines render.
  type LaidWord = { text: string; width: number; font: typeof fonts.regular };

  const layoutBlock = (
    runs: InlineRun[],
    size: number,
    bold: boolean,
    availableWidth: number,
  ): LaidWord[][] => {
    const spaceWidths = new Map<typeof fonts.regular, number>();
    const words: LaidWord[] = [];
    for (const run of runs) {
      const font = pickFont(bold || run.bold, run.italic);
      if (!spaceWidths.has(font)) {
        spaceWidths.set(font, font.widthOfTextAtSize(" ", size));
      }
      for (const w of run.text.split(/\s+/).filter(Boolean)) {
        words.push({ text: w, width: font.widthOfTextAtSize(w, size), font });
      }
    }
    const lines: LaidWord[][] = [];
    let current: LaidWord[] = [];
    let currentWidth = 0;
    for (const word of words) {
      const space = current.length ? (spaceWidths.get(word.font) ?? 0) : 0;
      if (
        current.length &&
        currentWidth + space + word.width > availableWidth
      ) {
        lines.push(current);
        current = [word];
        currentWidth = word.width;
      } else {
        current.push(word);
        currentWidth += space + word.width;
      }
    }
    if (current.length) lines.push(current);
    return lines;
  };

  const drawLine = (
    words: LaidWord[],
    startX: number,
    size: number,
  ) => {
    let x = startX;
    for (let i = 0; i < words.length; i++) {
      const w = words[i];
      page.drawText(w.text, { x, y, size, font: w.font });
      const space = w.font.widthOfTextAtSize(" ", size);
      x += w.width + space;
    }
  };

  for (const block of blocks) {
    // Blank paragraph -> vertical gap.
    if (block.runs.length === 0) {
      y -= 11 * 1.4;
      continue;
    }

    const isHeading = block.kind === "heading";
    const size = isHeading ? headingSize(block.level) : 11;
    const lineHeight = size * 1.42;
    const indent = block.kind === "listitem" ? 18 : 0;
    const bulletGap = 14;

    if (isHeading) y -= size * 0.5; // extra space above headings

    const availableWidth =
      maxWidth - indent - (block.kind === "listitem" ? bulletGap : 0);
    const lines = layoutBlock(
      block.runs,
      size,
      isHeading,
      availableWidth,
    );

    for (let i = 0; i < lines.length; i++) {
      ensureSpace(lineHeight);
      const baseX = margin + indent;
      if (block.kind === "listitem" && i === 0) {
        const marker = block.ordered ? `${block.index}.` : "•";
        page.drawText(marker, {
          x: margin + indent - bulletGap,
          y,
          size,
          font: fonts.regular,
        });
      }
      drawLine(lines[i], block.kind === "listitem" ? baseX + bulletGap : baseX, size);
      y -= lineHeight;
    }

    // Space after block.
    y -= isHeading ? 6 : 4;
  }

  const out = await pdf.save();
  return Buffer.from(out);
}

/* ------------------------------------------------------------------ */
/* PDF -> DOCX                                                         */
/* ------------------------------------------------------------------ */

type MupdfLine = {
  text?: string;
  font?: { weight?: string; style?: string; size?: number };
  bbox?: { h?: number };
};
type MupdfBlock = { type?: string; lines?: MupdfLine[] };

type DocxPara = {
  runs: { text: string; bold: boolean; italic: boolean }[];
  size: number; // points
  heading: boolean;
};

/**
 * Convert a PDF into structured paragraphs using mupdf's block model.
 * Each text block becomes one paragraph (its lines are joined), which reads far
 * better than the old one-paragraph-per-visual-line approach.
 */
async function pdfToParagraphBlocks(input: Buffer): Promise<DocxPara[]> {
  const mupdf = await import("mupdf");
  const doc = mupdf.Document.openDocument(
    new Uint8Array(input),
    "application/pdf",
  );
  const pageCount = doc.countPages();
  if (pageCount === 0) return [];

  // First pass: gather all line sizes to establish a "body" baseline so we can
  // detect headings (noticeably larger than the median line).
  const sizes: number[] = [];
  const pages: MupdfBlock[][] = [];
  for (let i = 0; i < pageCount; i++) {
    const page = doc.loadPage(i);
    const json = JSON.parse(
      page.toStructuredText("preserve-whitespace").asJSON(),
    ) as { blocks?: MupdfBlock[] };
    const blocks = json.blocks ?? [];
    pages.push(blocks);
    for (const b of blocks) {
      for (const l of b.lines ?? []) {
        if (l.font?.size) sizes.push(l.font.size);
      }
    }
  }
  const median =
    sizes.length > 0
      ? sizes.slice().sort((a, b) => a - b)[Math.floor(sizes.length / 2)]
      : 11;

  const paragraphs: DocxPara[] = [];

  for (let p = 0; p < pages.length; p++) {
    for (const block of pages[p]) {
      if (block.type !== "text" || !block.lines?.length) continue;

      const runs: DocxPara["runs"] = [];
      let maxSize = 0;
      let anyBold = false;

      block.lines.forEach((line, idx) => {
        const text = (line.text ?? "").replace(/\s+$/g, "");
        if (!text) return;
        const bold = /bold|semibold|black|heavy/i.test(line.font?.weight ?? "");
        const italic = /italic|oblique/i.test(line.font?.style ?? "");
        const size = line.font?.size ?? median;
        if (size > maxSize) maxSize = size;
        if (bold) anyBold = true;
        // Join wrapped lines within a block with a space.
        const prefix = idx > 0 && runs.length ? " " : "";
        runs.push({ text: prefix + text, bold, italic });
      });

      if (!runs.length) continue;

      // A short block that is clearly larger than body text is a heading.
      const totalLen = runs.reduce((n, r) => n + r.text.length, 0);
      const heading =
        maxSize >= median * 1.25 && totalLen <= 120 && block.lines.length <= 3;

      paragraphs.push({
        runs,
        size: maxSize || median,
        heading: heading || (anyBold && maxSize >= median * 1.2 && totalLen <= 80),
      });
    }
    // Blank paragraph between pages.
    if (p < pages.length - 1) {
      paragraphs.push({ runs: [], size: median, heading: false });
    }
  }

  return paragraphs;
}

const xmlEscape = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Build a clean, Word-compatible .docx from structured paragraphs. */
function buildStyledDocx(paragraphs: DocxPara[]): Promise<Buffer> {
  const bodyXml = (paragraphs.length ? paragraphs : [{ runs: [], size: 11, heading: false }])
    .map((para) => {
      if (!para.runs.length) return "<w:p/>";

      // half-points; headings scale up from an 11pt (22 half-point) base.
      const baseHalfPts = para.heading
        ? Math.round(Math.min(para.size, 26) * 2)
        : 22;

      const spacing = para.heading
        ? '<w:spacing w:before="240" w:after="120"/>'
        : '<w:spacing w:after="120"/>';

      const runsXml = para.runs
        .map((r) => {
          const rPr =
            `<w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/>` +
            (para.heading || r.bold ? "<w:b/>" : "") +
            (r.italic ? "<w:i/>" : "") +
            `<w:sz w:val="${baseHalfPts}"/></w:rPr>`;
          return `<w:r>${rPr}<w:t xml:space="preserve">${xmlEscape(r.text)}</w:t></w:r>`;
        })
        .join("");

      return `<w:p><w:pPr>${spacing}</w:pPr>${runsXml}</w:p>`;
    })
    .join("");

  return buildDocxPackage(bodyXml);
}

async function buildDocxPackage(bodyXml: string): Promise<Buffer> {
  const JSZip = (await import("jszip")).default;
  const zip = new JSZip();

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
<w:body>${bodyXml}<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134"/></w:sectPr></w:body>
</w:document>`,
  );

  return zip.generateAsync({ type: "nodebuffer" });
}

export async function pdfToDocx(input: Buffer): Promise<Buffer> {
  const paragraphs = await pdfToParagraphBlocks(input);
  return buildStyledDocx(paragraphs);
}
