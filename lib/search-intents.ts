/**
 * Intent aliases + light NLP for “what do you want to do?” search.
 * Maps natural phrases → tool ids (boosted in ranking).
 * AI enrichment lives in /api/search/intent when local match is weak.
 */
import { tools } from "@/lib/tools"

export type SearchIntent = {
  aliases: string[]
  toolIds: string[]
  /** Short answer shown above results (i18n key under search.intents). */
  answerKey: string
}

export const SEARCH_INTENTS: SearchIntent[] = [
  {
    aliases: [
      "pdf na word", "pdf to word", "pdf do worda", "pdf to docx", "word z pdf",
      "pdf → word", "pdf->word", "edytowac pdf", "edytować pdf", "edit pdf",
      "pdf na docx", "chce edytowac pdf", "want to edit pdf",
    ],
    toolIds: ["pdf-to-docx"],
    answerKey: "pdfWord",
  },
  {
    aliases: [
      "zmniejszyc zdjecie", "zmniejszyć zdjęcie", "compress image", "shrink photo",
      "kompresja obrazu", "zmniejsz obraz", "image compressor", "obraz za duzy",
      "zdjecie za duze", "photo too big", "make image smaller", "zmniejsz rozmiar zdjecia",
    ],
    toolIds: ["kompresor-obrazow", "zmiana-rozmiaru-obrazu", "jpg-to-webp"],
    answerKey: "shrinkImage",
  },
  {
    aliases: [
      "iphone", "heic", "heif", "zdjecie z iphone", "iphone photo", "heic na jpg",
      "heic to jpg", "heic do jpg", "zdjecie z telefonu apple", "apple photo",
      "nie otwiera sie heic", "cant open heic", "heic windows",
    ],
    toolIds: ["heic-to-jpg", "heic-to-png", "otworz"],
    answerKey: "iphone",
  },
  {
    aliases: [
      "mp3 do wav", "mp3 to wav", "mp3 → wav", "wav z mp3",
    ],
    toolIds: ["mp3-to-wav"],
    answerKey: "mp3Wav",
  },
  {
    aliases: [
      "usunac metadane", "usuń metadane", "remove metadata", "exif", "remove exif",
      "usun gps", "remove gps", "prywatnosc pliku", "file privacy",
      "ukryc lokalizacje", "strip metadata", "co ujawnia plik", "what does this file reveal",
    ],
    toolIds: ["inspektor-prywatnosci", "usun-exif"],
    answerKey: "privacy",
  },
  {
    aliases: [
      "film na strone", "video for website", "mp4 na webm", "mp4 to webm",
      "wideo na www", "web video", "film na www",
    ],
    toolIds: ["mp4-to-webm", "kompresja-wideo"],
    answerKey: "videoWeb",
  },
  {
    aliases: [
      "csv do excel", "csv to excel", "csv to xlsx", "excel z csv", "csv → xlsx",
    ],
    toolIds: ["csv-to-xlsx", "csv-json"],
    answerKey: "csvExcel",
  },
  {
    aliases: [
      "otworzyc dwg", "open dwg", "dwg viewer", "podglad dwg",
      "otworzyc plik", "open file", "podglad pliku", "preview file",
      "nie wiem jaki format", "what format is this",
    ],
    toolIds: ["otworz"],
    answerKey: "dwg",
  },
  {
    aliases: [
      "zmniejszyc pdf", "zmniejszyć pdf", "compress pdf", "kompresja pdf",
      "pdf za duzy", "pdf too big", "shrink pdf", "odchudzic pdf",
    ],
    toolIds: ["kompresja-pdf"],
    answerKey: "shrinkPdf",
  },
  {
    aliases: [
      "polaczyc pdf", "połączyć pdf", "merge pdf", "laczenie pdf", "combine pdf",
      "skleic pdf", "zlaczyc pdf",
    ],
    toolIds: ["laczenie-pdf"],
    answerKey: "mergePdf",
  },
  {
    aliases: [
      "haslo", "password", "generator hasel", "password generator",
      "silne haslo", "strong password",
    ],
    toolIds: ["generator-hasel", "sila-hasla"],
    answerKey: "password",
  },
  {
    aliases: [
      "hash", "sha-256", "sha256", "md5", "checksum", "suma kontrolna",
    ],
    toolIds: ["generator-hash", "inspektor-prywatnosci"],
    answerKey: "hash",
  },
  {
    aliases: [
      "webp", "avif", "optymalizacja obrazu", "image for web", "obraz na strone",
      "zdjecie na strone", "photo for website",
    ],
    toolIds: ["jpg-to-webp", "png-to-webp", "jpg-to-avif", "kompresor-obrazow"],
    answerKey: "webImage",
  },
  {
    aliases: [
      "vat", "netto brutto", "brutto netto", "podatek",
    ],
    toolIds: ["kalkulator-vat"],
    answerKey: "vat",
  },
  {
    aliases: [
      "jwt", "decode jwt", "dekoder jwt",
    ],
    toolIds: ["dekoder-jwt"],
    answerKey: "jwt",
  },
  {
    aliases: [
      "json", "formatuj json", "json formatter", "pretty json",
    ],
    toolIds: ["json-formatter", "csv-json"],
    answerKey: "json",
  },
  {
    aliases: [
      "base64", "encode base64", "decode base64",
    ],
    toolIds: ["base64"],
    answerKey: "base64",
  },
  {
    aliases: [
      "url encode", "url decode", "encoder url", "procenty w url",
    ],
    toolIds: ["url-encoder"],
    answerKey: "url",
  },
  {
    aliases: [
      "ocr", "pdf do tekstu", "pdf to text", "wyciagnac tekst",
      "skopiowac tekst z pdf", "extract text from pdf",
    ],
    toolIds: ["pdf-do-tekstu"],
    answerKey: "ocr",
  },
  {
    aliases: [
      "favicon", "ikona strony", "site icon",
    ],
    toolIds: ["generator-favicon"],
    answerKey: "favicon",
  },
  {
    aliases: [
      "napraw plik", "naprawić plik", "naprawic plik", "repair file", "fix file",
      "uszkodzony plik", "corrupt file", "corrupted file", "broken pdf",
      "uszkodzony pdf", "nie da sie otworzyc pliku", "damaged file",
    ],
    toolIds: ["naprawa-plikow", "otworz"],
    answerKey: "repairFile",
  },
  {
    aliases: [
      "usunac tlo", "usuń tło", "remove background", "wytnij tlo",
      "background remover", "png bez tla",
    ],
    toolIds: ["usuwanie-tla"],
    answerKey: "removeBg",
  },
  {
    aliases: [
      "podzielic pdf", "podzielić pdf", "split pdf", "rozdziel pdf",
      "wyciac strony z pdf",
    ],
    toolIds: ["podzial-pdf"],
    answerKey: "splitPdf",
  },
  {
    aliases: [
      "obrocic pdf", "obrócić pdf", "rotate pdf", "obrot pdf",
    ],
    toolIds: ["obrot-pdf"],
    answerKey: "rotatePdf",
  },
  {
    aliases: [
      "znak wodny", "watermark", "nakladka na obraz",
    ],
    toolIds: ["znak-wodny"],
    answerKey: "watermark",
  },
  {
    aliases: [
      "strescic tekst", "streszczenie", "summarize", "podsumuj",
      "tlumacz", "translate", "przetlumacz", "napisz tekst",
      "generator obrazow", "generate image",
    ],
    toolIds: ["podsumowanie", "tlumacz", "generator-tekstu", "asystent"],
    answerKey: "aiHelp",
  },
]

/** Synonyms → canonical converter format id. */
export const FORMAT_SYNONYMS: Record<string, string> = {
  jpeg: "jpg",
  jpg: "jpg",
  jpe: "jpg",
  png: "png",
  webp: "webp",
  gif: "gif",
  avif: "avif",
  tiff: "tiff",
  tif: "tiff",
  heic: "heic",
  heif: "heic",
  svg: "svg",
  ico: "ico",
  mp3: "mp3",
  wav: "wav",
  flac: "flac",
  ogg: "ogg",
  m4a: "m4a",
  aac: "aac",
  opus: "opus",
  aiff: "aiff",
  wma: "wma",
  mp4: "mp4",
  webm: "webm",
  mov: "mov",
  avi: "avi",
  mkv: "mkv",
  flv: "flv",
  wmv: "wmv",
  "3gp": "3gp",
  m4v: "m4v",
  mpg: "mpg",
  mpeg: "mpg",
  pdf: "pdf",
  docx: "docx",
  doc: "docx",
  word: "docx",
  odt: "odt",
  rtf: "rtf",
  md: "md",
  markdown: "md",
  html: "html",
  htm: "html",
  txt: "txt",
  text: "txt",
  json: "json",
  csv: "csv",
  tsv: "tsv",
  xml: "xml",
  yaml: "yaml",
  yml: "yaml",
  xlsx: "xlsx",
  excel: "xlsx",
  xls: "xlsx",
  zip: "zip",
  rar: "rar",
  "7z": "7z",
  ttf: "ttf",
  otf: "otf",
  woff: "woff",
  woff2: "woff2",
}

const SUPPORTED_IDS = new Set(tools.filter((t) => t.supported).map((t) => t.id))

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ł/g, "l")
    .replace(/Ł/g, "l")
    .replace(/[→↔⇌]/g, " ")
    .replace(/[^a-z0-9\s.+-]/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
}

export type IntentHit = {
  intent: SearchIntent
  score: number
}

/** Detect “X to Y / X na Y / X do Y” even when the user writes a whole sentence. */
export function inferFormatConversion(query: string): {
  from: string
  to: string
  toolId: string
  score: number
} | null {
  const q = normalize(query)
  if (q.length < 3) return null

  const patterns = [
    /\b([a-z0-9]{2,8})\s*(?:na|do|to|->|→|>)\s*([a-z0-9]{2,8})\b/,
    /\b([a-z0-9]{2,8})\s+([a-z0-9]{2,8})\b/,
  ]

  for (const re of patterns) {
    const m = q.match(re)
    if (!m) continue
    const from = FORMAT_SYNONYMS[m[1]] ?? null
    const to = FORMAT_SYNONYMS[m[2]] ?? null
    if (!from || !to || from === to) continue
    const toolId = `${from}-to-${to}`
    if (!SUPPORTED_IDS.has(toolId)) continue
    const exactish = /(?:na|do|to|->)/.test(m[0])
    return { from, to, toolId, score: exactish ? 95 : 55 }
  }

  // Sentence with two distinct known formats anywhere
  const tokens = q.split(" ").filter(Boolean)
  const formats = tokens
    .map((t) => FORMAT_SYNONYMS[t])
    .filter((f): f is string => Boolean(f))
  const unique = [...new Set(formats)]
  if (unique.length >= 2) {
    const toolId = `${unique[0]}-to-${unique[1]}`
    if (SUPPORTED_IDS.has(toolId)) {
      return { from: unique[0], to: unique[1], toolId, score: 70 }
    }
  }

  return null
}

type ActionRule = {
  re: RegExp
  toolIds: string[]
  answerKey: string
  score: number
}

const ACTION_RULES: ActionRule[] = [
  {
    re: /\b(napraw\w*|repair\w*|fix\w*|odzysk\w*)\b.*\b(plik\w*|file\w*|pdf|zip|docx|obraz\w*|zdjec\w*|wideo|video|audio)\b|\b(uszkodzon\w*|corrupt\w*|damaged|broken)\b.*\b(plik\w*|file\w*|pdf|zip)\b/,
    toolIds: ["naprawa-plikow", "otworz"],
    answerKey: "repairFile",
    score: 90,
  },
  {
    re: /\b(zmniejsz\w*|skompresuj\w*|odchudz\w*|compress\w*|shrink\w*|optimize\w*)\b.*\bpdf\b|\bpdf\b.*\b(za duz\w*|too big|ciezk\w*|heavy)\b|\b(za duz\w*|too big|ciezk\w*|heavy)\b.*\bpdf\b/,
    toolIds: ["kompresja-pdf"],
    answerKey: "shrinkPdf",
    score: 85,
  },
  {
    re: /\b(zmniejsz\w*|skompresuj\w*|compress\w*|shrink\w*|resize\w*)\b.*\b(zdjec\w*|obraz\w*|foto\w*|image\w*|photo\w*|png|jpe?g)\b/,
    toolIds: ["kompresor-obrazow", "zmiana-rozmiaru-obrazu"],
    answerKey: "shrinkImage",
    score: 85,
  },
  {
    re: /\b(usun\w*|strip\w*|remove\w*)\b.*\b(exif|metadan\w*|gps|lokalizacj\w*|metadata|prywatn\w*)\b/,
    toolIds: ["inspektor-prywatnosci", "usun-exif"],
    answerKey: "privacy",
    score: 85,
  },
  {
    re: /\b(polacz\w*|sklej\w*|zlacz\w*|merge\w*|combine\w*)\b.*\bpdf\b/,
    toolIds: ["laczenie-pdf"],
    answerKey: "mergePdf",
    score: 85,
  },
  {
    re: /\b(podziel\w*|rozdziel\w*|split\w*)\b.*\bpdf\b/,
    toolIds: ["podzial-pdf"],
    answerKey: "splitPdf",
    score: 85,
  },
  {
    re: /\b(otworz\w*|open\w*|podglad\w*|preview\w*|zobacz\w*)\b.*\b(plik\w*|file\w*|heic|dwg|zdjec\w*)\b|\bnie (otwiera\w*|da sie otworzyc)\b/,
    toolIds: ["otworz"],
    answerKey: "openFile",
    score: 75,
  },
  {
    re: /\b(usun\w*|wytnij\w*|remove\w*)\b.*\b(tlo\w*|background\w*)\b/,
    toolIds: ["usuwanie-tla"],
    answerKey: "removeBg",
    score: 85,
  },
  {
    re: /\b(wyciagn\w*|extract\w*|skopiuj\w*)\b.*\b(tekst\w*|text\w*)\b.*\bpdf\b|\bpdf\b.*\b(do tekstu|to text)\b/,
    toolIds: ["pdf-do-tekstu"],
    answerKey: "ocr",
    score: 85,
  },
  {
    re: /\b(edytuj\w*|edytowac|edit\w*)\b.*\bpdf\b|\bpdf\b.*\b(word|docx)\b|\b(word|docx)\b.*\bpdf\b/,
    toolIds: ["pdf-to-docx"],
    answerKey: "pdfWord",
    score: 80,
  },
]

export function matchActionRules(query: string): IntentHit[] {
  const q = normalize(query)
  const hits: IntentHit[] = []
  for (const rule of ACTION_RULES) {
    if (rule.re.test(q)) {
      hits.push({
        intent: {
          aliases: [],
          toolIds: rule.toolIds,
          answerKey: rule.answerKey,
        },
        score: rule.score,
      })
    }
  }
  return hits
}

export function matchSearchIntents(query: string): IntentHit[] {
  const q = normalize(query)
  if (q.length < 2) return []
  const hits: IntentHit[] = []

  for (const intent of SEARCH_INTENTS) {
    let score = 0
    for (const alias of intent.aliases) {
      const a = normalize(alias)
      if (!a) continue
      let s = 0
      if (q === a) s = 100
      else if (q.includes(a)) s = 40 + Math.min(a.length, 20)
      else if (a.startsWith(q + " ") && q.length >= 3) s = 22
      else {
        const tokens = a.split(" ").filter((t) => t.length > 1)
        if (tokens.length >= 2) {
          const matched = tokens.filter((t) => q.includes(t)).length
          const need = Math.ceil(tokens.length * 0.7)
          if (matched >= need && matched >= 2) s = matched * 12
        }
      }
      if (s > score) score = s
    }
    if (score > 0) hits.push({ intent, score })
  }

  for (const hit of matchActionRules(query)) {
    hits.push(hit)
  }

  const conv = inferFormatConversion(query)
  if (conv) {
    hits.push({
      intent: {
        aliases: [],
        toolIds: [conv.toolId],
        answerKey: "formatConversion",
      },
      score: conv.score,
    })
  }

  return hits.sort((a, b) => b.score - a.score)
}

/** When true, GlobalSearch may call the free AI intent endpoint. */
export function shouldUseAiSearch(query: string, bestLocalScore: number): boolean {
  const raw = query.trim()
  if (raw.length < 6) return false
  if (bestLocalScore >= 70) return false

  const q = normalize(raw)
  const words = q.split(" ").filter((w) => w.length > 1)
  const looksLikePhrase =
    words.length >= 3 ||
    /[?]/.test(raw) ||
    /\b(chce|chcial|chcialbym|potrzebuje|jak|prosze|moges|czy|want|need|how|please|can you|help me|mam)\b/.test(
      q,
    )

  if (looksLikePhrase) return true
  if (bestLocalScore < 35 && words.length >= 2) return true
  return false
}

/** Extra searchable keywords per tool id (synonyms not in title). */
export const TOOL_KEYWORDS: Record<string, string[]> = {
  "heic-to-jpg": ["iphone", "ios", "apple photo", "zdjęcie z iphone"],
  "usun-exif": ["gps", "metadata", "prywatność", "privacy", "lokalizacja"],
  "inspektor-prywatnosci": [
    "exif viewer", "co ujawnia", "what does this file reveal", "gps check",
    "metadata viewer", "file inspector",
  ],
  "kompresor-obrazow": ["zmniejszyć", "shrink", "optymalizacja"],
  "kompresja-pdf": ["zmniejszyć pdf", "shrink pdf"],
  "pdf-to-docx": ["word", "edytować pdf"],
  "mp4-to-webm": ["strona", "website", "html5"],
  "generator-hasel": ["password", "hasło bezpieczne"],
  "generator-hash": ["sha256", "md5", "checksum"],
  "kalkulator-vat": ["netto", "brutto", "podatek"],
  "url-encoder": ["percent encoding", "encodeuri"],
  "csv-json": ["csv to json", "json to csv"],
  "html-markdown": ["md to html", "html to md"],
  "kalkulator-procentow": ["percent", "procent", "rabat"],
  "kalkulator-roi": ["return on investment", "zwrot"],
  "kalkulator-aspect-ratio": ["16:9", "4:3", "proporcje"],
  "kalkulator-rozmiaru-pliku": ["bitrate", "download time", "czas pobierania"],
  "generator-favicon": ["ico", "apple touch icon"],
  "minifikator": ["minify", "css minifier", "js minifier", "html minifier"],
  otworz: ["open file", "preview", "podglad", "nie wiem format"],
  "usuwanie-tla": ["remove background", "png transparent"],
  "naprawa-plikow": [
    "napraw", "repair", "fix", "uszkodzony", "corrupt", "broken file",
    "damaged pdf", "naprawic plik",
  ],
}
