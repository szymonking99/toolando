import type { Metadata } from "next"
import { canonicalPath, languageAlternates } from "@/lib/seo/alternates"

type PageMetadataInput = {
  locale: string
  path: string
  title: string
  description: string
  type?: "website" | "article"
  /** Override OG/Twitter image path (defaults to /opengraph-image). */
  imagePath?: string
}

const DEFAULT_OG = "/opengraph-image"

/** Rich metadata with hreflang, Open Graph and Twitter cards for indexed pages. */
export function buildPageMetadata(input: PageMetadataInput): Metadata {
  const {
    locale,
    path,
    title,
    description,
    type = "website",
    imagePath = DEFAULT_OG,
  } = input

  const canonical = canonicalPath(locale, path)
  const languages = languageAlternates(path)

  return {
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Toolando.tech",
      locale,
      type,
      images: [
        {
          url: imagePath,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imagePath],
    },
  }
}
