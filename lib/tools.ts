export type ToolEngine =
  | "ffmpeg-audio"
  | "ffmpeg-video"
  | "sharp-image"
  | "pdf-image"
  | "pdf-doc"
  | "doc-doc"
  | "data-parser"
  | "text"
  | "archive"
  | "font";

export type ToolCategory =
  | "audio"
  | "video"
  | "image"
  | "pdf"
  | "doc"
  | "data"
  | "archive"
  | "font";

export type ToolConfig = {
  id: string;
  category: ToolCategory;
  name: string;
  description: string;
  from: string;
  to: string;
  engine: ToolEngine;
  /** Whether the conversion is actually implemented on the server. */
  supported: boolean;
  /** Optional note shown when a converter is not (yet) available. */
  unsupportedReason?: string;
};

type RawTool = Omit<ToolConfig, "supported" | "unsupportedReason">;

/* ------------------------------------------------------------------ */
/* Generators                                                          */
/* ------------------------------------------------------------------ */

const upper = (s: string) => s.toUpperCase();

function make(
  category: ToolCategory,
  engine: ToolEngine,
  from: string,
  to: string,
): RawTool {
  return {
    id: `${from}-to-${to}`,
    category,
    engine,
    from,
    to,
    name: `${upper(from)} → ${upper(to)}`,
    description: `Konwersja pliku ${upper(from)} do formatu ${upper(to)}.`,
  };
}

/** All ordered pairs (from ≠ to) across a set of formats. */
function matrix(
  category: ToolCategory,
  engine: ToolEngine,
  formats: string[],
): RawTool[] {
  const out: RawTool[] = [];
  for (const from of formats) {
    for (const to of formats) {
      if (from !== to) out.push(make(category, engine, from, to));
    }
  }
  return out;
}

/** One source format fanned out to several targets. */
function fanOut(
  category: ToolCategory,
  engine: ToolEngine,
  from: string,
  targets: string[],
): RawTool[] {
  return targets.map((to) => make(category, engine, from, to));
}

/* ------------------------------------------------------------------ */
/* Format sets                                                         */
/* ------------------------------------------------------------------ */

const RASTER = ["png", "jpg", "webp", "gif", "avif", "tiff"];
const AUDIO = ["mp3", "wav", "flac", "ogg", "m4a", "aac", "opus", "aiff", "wma"];
const VIDEO = ["mp4", "webm", "mov", "avi", "mkv", "flv", "wmv", "3gp", "m4v", "mpg"];
const DATA = ["json", "csv", "tsv", "xml", "yaml"];

const rawTools: RawTool[] = [
  // -------------------------------------------------- AUDIO
  ...matrix("audio", "ffmpeg-audio", AUDIO),

  // -------------------------------------------------- VIDEO
  ...matrix("video", "ffmpeg-video", VIDEO),
  // Any common video source can be exported to an animated GIF, and back.
  ...fanOut("video", "ffmpeg-video", "mp4", ["gif"]),
  ...fanOut("video", "ffmpeg-video", "webm", ["gif"]),
  ...fanOut("video", "ffmpeg-video", "mov", ["gif"]),
  ...fanOut("video", "ffmpeg-video", "mkv", ["gif"]),
  ...fanOut("video", "ffmpeg-video", "avi", ["gif"]),
  make("video", "ffmpeg-video", "gif", "mp4"),
  make("video", "ffmpeg-video", "gif", "webm"),

  // -------------------------------------------------- IMAGE
  ...matrix("image", "sharp-image", RASTER),
  ...fanOut("image", "sharp-image", "svg", ["png", "jpg", "webp", "avif"]),
  ...fanOut("image", "sharp-image", "heic", ["jpg", "png", "webp"]),

  // -------------------------------------------------- PDF
  make("pdf", "pdf-image", "pdf", "png"),
  make("pdf", "pdf-image", "pdf", "jpg"),
  make("pdf", "pdf-image", "pdf", "webp"),
  make("pdf", "pdf-doc", "pdf", "docx"),

  // -------------------------------------------------- DOCUMENTS
  make("doc", "text", "md", "html"),
  make("doc", "text", "md", "txt"),
  make("doc", "text", "html", "txt"),
  make("doc", "text", "html", "md"),
  make("doc", "text", "txt", "html"),
  make("doc", "text", "txt", "md"),
  make("doc", "text", "docx", "txt"),
  make("doc", "text", "docx", "html"),
  make("doc", "text", "docx", "md"),
  make("doc", "text", "rtf", "txt"),
  make("doc", "doc-doc", "docx", "pdf"),
  make("doc", "doc-doc", "odt", "docx"),
  make("doc", "doc-doc", "odt", "txt"),

  // -------------------------------------------------- DATA (full matrix)
  ...matrix("data", "data-parser", DATA),

  // -------------------------------------------------- ARCHIVE
  make("archive", "archive", "zip", "rar"),
  make("archive", "archive", "rar", "zip"),

  // -------------------------------------------------- FONT
  make("font", "font", "ttf", "woff"),
  make("font", "font", "otf", "woff"),
  make("font", "font", "ttf", "woff2"),
  make("font", "font", "otf", "woff2"),
  make("font", "font", "woff2", "ttf"),
];

/* ------------------------------------------------------------------ */
/* Support flags                                                       */
/* ------------------------------------------------------------------ */

// Engines that are fully implemented on the server.
const SUPPORTED_ENGINES: ToolEngine[] = [
  "ffmpeg-audio",
  "ffmpeg-video",
  "sharp-image",
  "pdf-image",
  "pdf-doc",
  "doc-doc",
  "data-parser",
  "text",
  "font",
];

// Reasons for the conversions that cannot run in a serverless environment.
const UNSUPPORTED_REASONS: Partial<Record<ToolEngine, string>> = {
  archive:
    "Format RAR jest zamknięty — kodowanie oraz dekodowanie RAR nie jest możliwe bez zewnętrznych, licencjonowanych narzędzi.",
};

export const tools: ToolConfig[] = rawTools.map((tool) => {
  const supported = SUPPORTED_ENGINES.includes(tool.engine);
  return {
    ...tool,
    supported,
    unsupportedReason: supported ? undefined : UNSUPPORTED_REASONS[tool.engine],
  };
});

export function getTool(id: string): ToolConfig | undefined {
  return tools.find((t) => t.id === id);
}

/** Normalize common extension aliases to the canonical `from` used above. */
export function normalizeFormat(ext: string): string {
  const e = ext.toLowerCase().replace(/^\./, "");
  const aliases: Record<string, string> = {
    jpeg: "jpg",
    jpe: "jpg",
    tif: "tiff",
    yml: "yaml",
    htm: "html",
    markdown: "md",
    mpeg: "mpg",
    mpe: "mpg",
    heif: "heic",
    weba: "ogg",
    oga: "ogg",
  };
  return aliases[e] ?? e;
}

/** All supported conversions whose source matches the given extension. */
export function getConversionsFrom(ext: string): ToolConfig[] {
  const from = normalizeFormat(ext);
  return tools.filter((t) => t.supported && t.from === from);
}

/** Every source format we can accept, for building the opener's hint copy. */
export const SUPPORTED_SOURCE_FORMATS: string[] = Array.from(
  new Set(tools.filter((t) => t.supported).map((t) => t.from)),
).sort();

/* ------------------------------------------------------------------ */
/* Categories (for browsing)                                           */
/* ------------------------------------------------------------------ */

export type CategoryMeta = {
  slug: string;
  title: string;
  description: string;
  /** Tool categories included under this browse category. */
  includes: ToolCategory[];
};

export const categories: CategoryMeta[] = [
  {
    slug: "audio",
    title: "Audio",
    description: "Konwersje między formatami dźwięku: MP3, WAV, FLAC i inne.",
    includes: ["audio"],
  },
  {
    slug: "video",
    title: "Wideo",
    description: "Konwersje wideo i eksport do GIF: MP4, WebM, MOV, MKV.",
    includes: ["video"],
  },
  {
    slug: "image",
    title: "Obrazy",
    description: "Konwersje grafiki rastrowej i wektorowej: PNG, JPG, WebP, AVIF.",
    includes: ["image"],
  },
  {
    slug: "documents",
    title: "Dokumenty",
    description: "PDF i pliki tekstowe: Markdown, HTML, TXT, DOCX.",
    includes: ["pdf", "doc"],
  },
  {
    slug: "data",
    title: "Dane",
    description: "Formaty danych: JSON, CSV, TSV, XML, YAML.",
    includes: ["data"],
  },
  {
    slug: "font",
    title: "Fonty",
    description: "Konwersje czcionek webowych: TTF, OTF, WOFF, WOFF2.",
    includes: ["font"],
  },
  {
    slug: "archive",
    title: "Archiwa",
    description: "Archiwa i kompresja: ZIP, RAR.",
    includes: ["archive"],
  },
];

export function getCategory(slug: string): CategoryMeta | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getToolsForCategory(slug: string): ToolConfig[] {
  const meta = getCategory(slug);
  if (!meta) return [];
  return tools.filter((t) => meta.includes.includes(t.category));
}

export function countToolsForCategory(slug: string): number {
  return getToolsForCategory(slug).length;
}
