import type { LocaleCopy } from "./locale-copy-types"

export type LocaleCopyTemplates = {
  categoryNames: Record<string, string>
  compressionLabels: Record<string, string>
  categoryContext: Record<string, string>
  descriptions: Record<string, string>
  paragraphFallback: string
  compressionTypeLabel: string
  toolandoParagraph: string
  useCases: Record<string, string[]>
  genericUseCases: Record<string, string[]>
  genericUseCaseFallback: string
  pros: {
    lossy: string
    lossless: string
    text: string
    mp3: string[]
    webp: string[]
    pdf: string[]
    fallback: string[]
  }
  cons: {
    lossy: string[]
    wav: string[]
    heic: string[]
    svg: string[]
    lossless: string[]
    fallback: string[]
  }
  compatibility: Record<string, string>
  compatibilityFallback: string
  faq: [
    { q: string; a: string },
    { q: string; a: string },
    { q: string; a: string },
    { q: string; a: string },
  ]
  comparisons: Record<string, { format: string; note: string }[]>
}

function fill(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => vars[key] ?? `{${key}}`)
}

export function createLocaleCopy(t: LocaleCopyTemplates): LocaleCopy {
  return {
    compressionLabels: t.compressionLabels,
    categoryContext: t.categoryContext,
    descriptions: t.descriptions,
    names: {},
    buildParagraphs(name, ext, category, compression) {
      const ctx = this.categoryContext[category] ?? ""
      const comp = this.compressionLabels[compression] ?? compression
      const custom = this.descriptions[ext]
      const cat = t.categoryNames[category] ?? category
      const vars = { name, ext, EXT: ext.toUpperCase(), category: cat, ctx, comp }
      const p1 =
        custom ??
        fill(t.paragraphFallback, { ...vars, NAME: name })
      return [p1, fill(t.compressionTypeLabel, vars), fill(t.toolandoParagraph, vars)]
    },
    buildUseCases(ext, category) {
      if (t.useCases[ext]) return t.useCases[ext]
      const generic = t.genericUseCases[category]
      if (generic) {
        return generic.map((line) => fill(line, { ext, EXT: ext.toUpperCase() }))
      }
      return [fill(t.genericUseCaseFallback, { ext, EXT: ext.toUpperCase() })]
    },
    buildPros(ext, compression) {
      const base: string[] = []
      if (compression === "lossy") base.push(t.pros.lossy)
      if (compression === "lossless" || compression === "none") base.push(t.pros.lossless)
      if (compression === "text") base.push(t.pros.text)
      if (ext === "mp3") return t.pros.mp3
      if (ext === "webp") return t.pros.webp
      if (ext === "pdf") return t.pros.pdf
      return base.length ? base : t.pros.fallback
    },
    buildCons(ext, compression) {
      if (compression === "lossy") return t.cons.lossy
      if (ext === "wav") return t.cons.wav
      if (ext === "heic") return t.cons.heic
      if (ext === "svg") return t.cons.svg
      if (compression === "lossless" || compression === "none") return t.cons.lossless
      return t.cons.fallback
    },
    buildCompatibility(ext, category) {
      if (t.compatibility[ext]) return t.compatibility[ext]
      const cat = t.categoryNames[category] ?? category
      return fill(t.compatibilityFallback, {
        ext,
        EXT: ext.toUpperCase(),
        category: cat,
      })
    },
    buildFaq(ext, name) {
      const vars = { ext, EXT: ext.toUpperCase(), name, NAME: name }
      return t.faq.map(({ q, a }) => ({
        q: fill(q, vars),
        a: fill(a, vars),
      }))
    },
    buildComparisons(ext, _category) {
      return t.comparisons[ext] ?? []
    },
  }
}
