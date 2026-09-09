/**
 * Intent aliases for “what do you want to do?” search.
 * Maps natural phrases → tool ids (boosted in ranking).
 */
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
      "pdf → word", "pdf->word",
    ],
    toolIds: ["pdf-to-docx"],
    answerKey: "pdfWord",
  },
  {
    aliases: [
      "zmniejszyc zdjecie", "zmniejszyć zdjęcie", "compress image", "shrink photo",
      "kompresja obrazu", "zmniejsz obraz", "image compressor",
    ],
    toolIds: ["kompresor-obrazow", "zmiana-rozmiaru-obrazu", "jpg-to-webp"],
    answerKey: "shrinkImage",
  },
  {
    aliases: [
      "iphone", "heic", "heif", "zdjecie z iphone", "iphone photo", "heic na jpg",
      "heic to jpg", "heic do jpg",
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
    ],
    toolIds: ["inspektor-prywatnosci", "usun-exif"],
    answerKey: "privacy",
  },
  {
    aliases: [
      "film na strone", "video for website", "mp4 na webm", "mp4 to webm",
      "wideo na www", "web video",
    ],
    toolIds: ["mp4-to-webm", "kompresja-wideo"],
    answerKey: "videoWeb",
  },
  {
    aliases: [
      "csv do excel", "csv to excel", "csv to xlsx", "excel z csv", "csv → xlsx",
    ],
    toolIds: ["csv-to-json", "csv-json"],
    answerKey: "csvExcel",
  },
  {
    aliases: [
      "otworzyc dwg", "open dwg", "dwg viewer", "podglad dwg",
    ],
    toolIds: ["otworz"],
    answerKey: "dwg",
  },
  {
    aliases: [
      "zmniejszyc pdf", "zmniejszyć pdf", "compress pdf", "kompresja pdf",
      "pdf za duzy",
    ],
    toolIds: ["kompresja-pdf"],
    answerKey: "shrinkPdf",
  },
  {
    aliases: [
      "polaczyc pdf", "połączyć pdf", "merge pdf", "laczenie pdf", "combine pdf",
    ],
    toolIds: ["laczenie-pdf"],
    answerKey: "mergePdf",
  },
  {
    aliases: [
      "haslo", "password", "generator hasel", "password generator",
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
]

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[→↔⇌]/g, " ")
    .replace(/[^a-z0-9ąćęłńóśźż\s.+-]/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
}

export type IntentHit = {
  intent: SearchIntent
  score: number
}

export function matchSearchIntents(query: string): IntentHit[] {
  const q = normalize(query)
  if (q.length < 2) return []
  const hits: IntentHit[] = []
  for (const intent of SEARCH_INTENTS) {
    let score = 0
    for (const alias of intent.aliases) {
      const a = normalize(alias)
      if (q === a) score += 100
      else if (q.includes(a) || a.includes(q)) score += 40 + Math.min(a.length, 20)
      else {
        const tokens = a.split(" ").filter(Boolean)
        const matched = tokens.filter((t) => q.includes(t)).length
        if (matched > 0 && matched >= Math.ceil(tokens.length * 0.6)) {
          score += matched * 12
        }
      }
    }
    if (score > 0) hits.push({ intent, score })
  }
  return hits.sort((a, b) => b.score - a.score)
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
}
