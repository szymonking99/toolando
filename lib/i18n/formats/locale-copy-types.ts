export type LocaleCopy = {
  compressionLabels: Record<string, string>
  categoryContext: Record<string, string>
  buildParagraphs: (name: string, ext: string, category: string, compression: string) => string[]
  buildUseCases: (ext: string, category: string) => string[]
  buildPros: (ext: string, compression: string) => string[]
  buildCons: (ext: string, compression: string) => string[]
  buildCompatibility: (ext: string, category: string) => string
  buildFaq: (ext: string, name: string) => { q: string; a: string }[]
  buildComparisons: (ext: string, category: string) => { format: string; note: string }[]
  descriptions: Record<string, string>
  names: Record<string, string>
}
