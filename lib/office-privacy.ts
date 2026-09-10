import { ConversionError } from "@/lib/convert"
import type { SpecialResult } from "@/lib/special-convert"

function stemOf(name: string): string {
  const base = name.split(/[\\/]/).pop() ?? name
  const dot = base.lastIndexOf(".")
  const stem = dot > 0 ? base.slice(0, dot) : base
  return stem.replace(/[^a-zA-Z0-9-_]+/g, "-").replace(/^-+|-+$/g, "") || "plik"
}

type Quad = [number, number, number, number, number, number, number, number]

function quadToRect(q: Quad): { x: number; y: number; w: number; h: number } {
  const xs = [q[0], q[2], q[4], q[6]]
  const ys = [q[1], q[3], q[5], q[7]]
  const minX = Math.min(...xs)
  const maxX = Math.max(...xs)
  const minY = Math.min(...ys)
  const maxY = Math.max(...ys)
  return {
    x: minX - 1,
    y: minY - 1,
    w: Math.max(2, maxX - minX + 2),
    h: Math.max(2, maxY - minY + 2),
  }
}

const EMAIL_RE = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi
/** Polish PESEL-like 11 digits, optionally spaced/dashed. */
const PESEL_RE = /\b\d{2}[\s-]?\d{2}[\s-]?\d{2}[\s-]?\d{3}[\s-]?\d{2}\b/g
const IBAN_RE = /\b[A-Z]{2}\d{2}(?:[\s-]?\d{4}){3,7}\b/gi
const PHONE_RE = /(?:\+48[\s-]?)?(?:\d{3}[\s-]?){2}\d{3}\b/g

function collectAutoNeedles(text: string, flags: {
  emails: boolean
  pesel: boolean
  iban: boolean
  phones: boolean
}): string[] {
  const found = new Set<string>()
  const pushMatches = (re: RegExp) => {
    const copy = new RegExp(re.source, re.flags)
    let m: RegExpExecArray | null
    while ((m = copy.exec(text))) {
      const v = m[0].trim()
      if (v.length >= 5) found.add(v)
    }
  }
  if (flags.emails) pushMatches(EMAIL_RE)
  if (flags.pesel) pushMatches(PESEL_RE)
  if (flags.iban) pushMatches(IBAN_RE)
  if (flags.phones) pushMatches(PHONE_RE)
  return [...found]
}

/**
 * Visual PDF redaction: black rectangles over matched text.
 * Does not rewrite the underlying text stream — honest “cover” redact.
 */
export async function redactPdf(
  input: Buffer,
  originalName: string,
  options: {
    customPatterns?: string
    emails?: boolean
    pesel?: boolean
    iban?: boolean
    phones?: boolean
  } = {},
): Promise<SpecialResult> {
  const mupdf = await import("mupdf")
  let srcDoc
  try {
    srcDoc = mupdf.Document.openDocument(
      new Uint8Array(input),
      "application/pdf",
    )
  } catch {
    throw new ConversionError("Nie udało się otworzyć PDF do redakcji.", 422)
  }

  const custom = (options.customPatterns ?? "")
    .split(/[\n,;]+/)
    .map((s) => s.trim())
    .filter((s) => s.length >= 2)

  const autoFlags = {
    emails: options.emails !== false,
    pesel: options.pesel !== false,
    iban: options.iban !== false,
    phones: options.phones === true,
  }

  const pageHits: { pageIndex: number; rects: ReturnType<typeof quadToRect>[] }[] =
    []
  let totalHits = 0
  const pageCount = srcDoc.countPages()

  for (let i = 0; i < pageCount; i++) {
    const page = srcDoc.loadPage(i)
    const text = page.toStructuredText("preserve-whitespace").asText()
    const needles = [
      ...custom,
      ...collectAutoNeedles(text, autoFlags),
    ]
    const unique = [...new Set(needles)]
    const rects: ReturnType<typeof quadToRect>[] = []
    for (const needle of unique) {
      try {
        const hits = page.search(needle, 200) as Quad[][]
        for (const group of hits) {
          for (const quad of group) {
            rects.push(quadToRect(quad))
            totalHits++
          }
        }
      } catch {
        /* skip needle */
      }
    }
    if (rects.length > 0) pageHits.push({ pageIndex: i, rects })
  }

  if (totalHits === 0) {
    throw new ConversionError(
      "Nie znaleziono tekstu do zaczernienia. Dodaj własne frazy albo upewnij się, że PDF ma warstwę tekstową (skany → najpierw OCR).",
      422,
    )
  }

  const { PDFDocument, rgb } = await import("pdf-lib")
  let pdf
  try {
    pdf = await PDFDocument.load(input, { ignoreEncryption: true })
  } catch {
    throw new ConversionError("Nie udało się zapisać zredagowanego PDF.", 422)
  }

  const pages = pdf.getPages()
  for (const hit of pageHits) {
    const page = pages[hit.pageIndex]
    if (!page) continue
    for (const r of hit.rects) {
      page.drawRectangle({
        x: r.x,
        y: r.y,
        width: r.w,
        height: r.h,
        color: rgb(0, 0, 0),
        borderWidth: 0,
      })
    }
  }

  const bytes = await pdf.save()
  return {
    buffer: Buffer.from(bytes),
    filename: `${stemOf(originalName)}-redakcja.pdf`,
    contentType: "application/pdf",
    note: `Wizualna redakcja: zaczerniono ${totalHits} fragment(ów) na ${pageHits.length} stron(ach). To przykrycie grafiki — nie usuwa w pełni tekstu spod warstwy. Nie używaj jako jedynego zabezpieczenia przed odzyskaniem danych.`,
  }
}

type StampPosition = "bottom-right" | "bottom-left" | "top-right" | "center"

/**
 * Fill AcroForm fields when present; always stamp a readable summary block.
 */
export async function fillPdfForm(
  input: Buffer,
  originalName: string,
  options: {
    fullName?: string
    nip?: string
    date?: string
    extra?: string
    position?: StampPosition
  },
): Promise<SpecialResult> {
  const { PDFDocument, rgb, StandardFonts } = await import("pdf-lib")
  let doc
  try {
    doc = await PDFDocument.load(input, { ignoreEncryption: true })
  } catch {
    throw new ConversionError("Nie udało się otworzyć PDF do wypełnienia.", 422)
  }

  const fullName = (options.fullName ?? "").trim().slice(0, 120)
  const nip = (options.nip ?? "").trim().slice(0, 20)
  const date = (options.date ?? "").trim().slice(0, 40)
  const extra = (options.extra ?? "").trim().slice(0, 200)
  if (!fullName && !nip && !date && !extra) {
    throw new ConversionError(
      "Podaj co najmniej jedno pole: imię i nazwisko, NIP, datę lub notatkę.",
      400,
    )
  }

  let formFilled = 0
  try {
    const form = doc.getForm()
    const fields = form.getFields()
    for (const field of fields) {
      const name = field.getName().toLowerCase()
      try {
        const textField = form.getTextField(field.getName())
        if (
          fullName &&
          /(name|imie|imię|nazwisk|fullname|fullname|osoba)/i.test(name)
        ) {
          textField.setText(fullName)
          formFilled++
        } else if (nip && /(nip|tax|vat|regon)/i.test(name)) {
          textField.setText(nip)
          formFilled++
        } else if (date && /(date|data|dzień|dzien)/i.test(name)) {
          textField.setText(date)
          formFilled++
        } else if (extra && /(uwag|note|extra|opis|comment)/i.test(name)) {
          textField.setText(extra)
          formFilled++
        }
      } catch {
        /* not a text field */
      }
    }
    try {
      form.flatten()
    } catch {
      /* some forms refuse flatten */
    }
  } catch {
    /* no AcroForm */
  }

  const lines = [
    fullName && `Imię i nazwisko: ${fullName}`,
    nip && `NIP: ${nip}`,
    date && `Data: ${date}`,
    extra && extra,
  ].filter(Boolean) as string[]

  const font = await doc.embedFont(StandardFonts.Helvetica)
  const size = 10
  const position = options.position ?? "bottom-right"
  const lineHeight = 14
  const blockHeight = lines.length * lineHeight + 16
  const maxLineWidth = Math.max(
    ...lines.map((l) => font.widthOfTextAtSize(l, size)),
    80,
  )

  for (const page of doc.getPages()) {
    const { width, height } = page.getSize()
    let x = width - maxLineWidth - 40
    let y = 28 + blockHeight
    if (position === "bottom-left") {
      x = 36
      y = 28 + blockHeight
    } else if (position === "top-right") {
      x = width - maxLineWidth - 40
      y = height - 36
    } else if (position === "center") {
      x = (width - maxLineWidth) / 2
      y = height / 2 + blockHeight / 2
    }

    page.drawRectangle({
      x: x - 8,
      y: y - blockHeight + 4,
      width: maxLineWidth + 16,
      height: blockHeight,
      color: rgb(1, 1, 1),
      opacity: 0.92,
      borderColor: rgb(0.75, 0.75, 0.78),
      borderWidth: 0.5,
    })

    lines.forEach((line, idx) => {
      page.drawText(line, {
        x,
        y: y - 12 - idx * lineHeight,
        size,
        font,
        color: rgb(0.15, 0.15, 0.2),
      })
    })
  }

  const bytes = await doc.save()
  return {
    buffer: Buffer.from(bytes),
    filename: `${stemOf(originalName)}-wypelniony.pdf`,
    contentType: "application/pdf",
    note:
      formFilled > 0
        ? `Wypełniono ${formFilled} pól formularza (AcroForm) i dodano pieczątkę z danymi.`
        : "PDF bez wykrytych pól formularza — dodano widoczną pieczątkę z danymi na każdej stronie.",
  }
}
