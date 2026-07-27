export type GlossaryTerm = {
  slug: string
  term: string
  definition: string
  relatedFormats?: string[]
}

export type GlossaryHubMeta = {
  title: string
  intro: string
  backToHub: string
}
