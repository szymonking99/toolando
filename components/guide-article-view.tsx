import Link from "next/link"
import type { GuideArticle } from "@/lib/i18n/guides"
import type { GuidesHubMeta } from "@/lib/i18n/guides"
import { localeHref } from "@/lib/i18n/href"
import { JsonLd } from "@/components/json-ld"
import { articleSchema, breadcrumbSchema } from "@/lib/seo/structured-data"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { ShareButtons } from "@/components/share-buttons"
import { HelpfulFeedback } from "@/components/helpful-feedback"

export function GuideArticleView({
  locale,
  article,
  hub,
}: {
  locale: string
  article: GuideArticle
  hub: GuidesHubMeta
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Toolando.tech", path: `/${locale}` },
            { name: hub.backToHub, path: `/${locale}/poradniki` },
            { name: article.title, path: `/${locale}/poradniki/${article.slug}` },
          ]),
          articleSchema({
            title: article.title,
            description: article.description,
            path: `/${locale}/poradniki/${article.slug}`,
            author: article.author,
            published: article.published,
            updated: article.updated,
            locale,
          }),
        ]}
      />
      <SiteNavbar />
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-32">
        <div className="mb-2 text-sm font-medium text-primary">{hub.eyebrow}</div>
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {article.title}
        </h1>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          {article.description}
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          {hub.authorLabel}: {article.author} · {hub.publishedLabel}:{" "}
          {article.published} · {hub.updatedLabel}: {article.updated}
        </p>

        <ShareButtons
          className="mt-6"
          title={article.title}
          path={`/poradniki/${article.slug}`}
        />

        <div className="mt-10 space-y-8">
          {article.sections.map((section, i) => (
            <section key={i}>
              {section.title && (
                <h2 className="text-xl font-semibold text-foreground">
                  {section.title}
                </h2>
              )}
              <div
                className={`space-y-4 leading-relaxed text-muted-foreground ${section.title ? "mt-3" : ""}`}
              >
                {section.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {article.relatedFormats && article.relatedFormats.length > 0 && (
          <section className="mt-12 border-t border-white/10 pt-10">
            <h2 className="text-lg font-semibold">{hub.relatedFormatsTitle}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {article.relatedFormats.map((f) => (
                <Link
                  key={f}
                  href={localeHref(locale, `/formaty/${f}`)}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium transition-colors hover:border-primary/40"
                >
                  .{f.toUpperCase()}
                </Link>
              ))}
            </div>
          </section>
        )}

        {article.relatedTools && article.relatedTools.length > 0 && (
          <section className="mt-10">
            <h2 className="text-lg font-semibold">{hub.relatedToolsTitle}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {article.relatedTools.map((id) => (
                <Link
                  key={id}
                  href={localeHref(locale, `/tools/${id}`)}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium transition-colors hover:border-primary/40"
                >
                  {id.replace(/-to-/g, " → ").toUpperCase()}
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-12">
          <HelpfulFeedback pageId={`guide-${article.slug}`} />
        </div>

        <p className="mt-8">
          <Link
            href={localeHref(locale, "/poradniki")}
            className="text-sm font-medium text-primary hover:underline"
          >
            ← {hub.backToHub}
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  )
}
