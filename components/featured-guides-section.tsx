import Link from "next/link"
import { BookOpen } from "lucide-react"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { getGuide } from "@/lib/i18n/guides"
import type { GuideSlug } from "@/lib/i18n/guides"
import { localeHref } from "@/lib/i18n/href"

const FEATURED_GUIDE_SLUGS: GuideSlug[] = [
  "online-file-security",
  "lossy-vs-lossless",
  "png-vs-jpg-photos-and-graphics",
  "podcast-export-mp3-aac-settings",
  "when-not-to-convert-files",
  "flac-music-archive-guide",
]

export async function FeaturedGuidesSection({
  locale,
}: {
  locale: string
}) {
  const { featuredGuides: copy } = await getDictionary(locale)
  const articles = FEATURED_GUIDE_SLUGS.map((slug) => getGuide(locale, slug))

  return (
    <section className="border-t border-white/10 px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <BookOpen
            className="mx-auto size-10 text-primary"
            aria-hidden="true"
          />
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {copy.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={localeHref(locale, `/poradniki/${article.slug}`)}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-primary/40 hover:bg-white/[0.06]"
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                {article.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {article.description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-primary">
                {copy.readArticle} →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={localeHref(locale, "/poradniki")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            {copy.allGuides} →
          </Link>
        </div>
      </div>
    </section>
  )
}
