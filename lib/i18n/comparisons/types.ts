export type ComparisonArticle = {
  slug: string
  title: string
  description: string
  formatA: string
  formatB: string
  sections: { title: string; paragraphs: string[] }[]
  verdict: string
  relatedTools?: string[]
}

export type ComparisonsHubMeta = {
  title: string
  intro: string
  readComparison: string
  backToHub: string
  verdictTitle: string
}
