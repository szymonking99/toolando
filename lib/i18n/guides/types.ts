export type GuideSection = {
  title?: string
  paragraphs: string[]
}

export type GuideArticle = {
  slug: string
  title: string
  description: string
  published: string
  updated: string
  author: string
  sections: GuideSection[]
  relatedFormats?: string[]
  relatedTools?: string[]
}

export type GuidesHubMeta = {
  eyebrow: string
  title: string
  intro: string
  readArticle: string
  backToHub: string
  authorLabel: string
  publishedLabel: string
  updatedLabel: string
  relatedFormatsTitle: string
  relatedToolsTitle: string
}
