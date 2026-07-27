import Link from "next/link"
import type { FormatProfile } from "@/lib/i18n/formats"
import type { FormatsHubMeta } from "@/lib/i18n/formats"
import { localeHref } from "@/lib/i18n/href"
import { getConversionsFrom, tools } from "@/lib/tools"
import { JsonLd } from "@/components/json-ld"
import { faqPageSchema, breadcrumbSchema } from "@/lib/seo/structured-data"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

export function FormatProfileView({
  locale,
  profile,
  hub,
}: {
  locale: string
  profile: FormatProfile
  hub: FormatsHubMeta
}) {
  const fromTools = getConversionsFrom(profile.id).slice(0, 12)
  const toTools = tools
    .filter((t) => t.supported && t.to === profile.id)
    .slice(0, 12)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Toolando.tech", path: `/${locale}` },
            { name: hub.allFormats, path: `/${locale}/formaty` },
            { name: profile.name, path: `/${locale}/formaty/${profile.id}` },
          ]),
          faqPageSchema(profile.faq),
        ]}
      />
      <SiteNavbar />
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-32">
        <div className="mb-2 text-sm font-medium text-primary">
          {hub.categoryLabels[profile.category]}
        </div>
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {profile.name}{" "}
          <span className="text-muted-foreground">
            (.{profile.extension.toUpperCase()})
          </span>
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          MIME: {profile.mimeType} · {hub.compressionTitle}: {profile.compression}
        </p>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          {profile.intro}
        </p>

        <div className="mt-8 space-y-4 leading-relaxed text-muted-foreground">
          {profile.paragraphs.slice(1).map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">{hub.useCasesTitle}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            {profile.useCases.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
        </section>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <section>
            <h2 className="text-lg font-semibold">{hub.prosTitle}</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
              {profile.pros.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold">{hub.consTitle}</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
              {profile.cons.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">{hub.compatibilityTitle}</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {profile.compatibility}
          </p>
        </section>

        {profile.comparisons && profile.comparisons.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold">{hub.comparisonsTitle}</h2>
            <dl className="mt-4 space-y-4">
              {profile.comparisons.map((c) => (
                <div key={c.format}>
                  <dt className="font-medium text-foreground">{c.format}</dt>
                  <dd className="mt-1 text-muted-foreground">{c.note}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {fromTools.length > 0 && (
          <section className="mt-12 border-t border-white/10 pt-10">
            <h2 className="text-xl font-semibold">{hub.convertFromTitle}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {fromTools.map((t) => (
                <Link
                  key={t.id}
                  href={localeHref(locale, `/tools/${t.id}`)}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-white/[0.08]"
                >
                  {t.from.toUpperCase()} → {t.to.toUpperCase()}
                </Link>
              ))}
            </div>
          </section>
        )}

        {toTools.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold">{hub.convertToTitle}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {toTools.map((t) => (
                <Link
                  key={t.id}
                  href={localeHref(locale, `/tools/${t.id}`)}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-white/[0.08]"
                >
                  {t.from.toUpperCase()} → {t.to.toUpperCase()}
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-12 border-t border-white/10 pt-10">
          <h2 className="text-xl font-semibold">{hub.faqTitle}</h2>
          <dl className="mt-4 space-y-6">
            {profile.faq.map((item) => (
              <div key={item.q}>
                <dt className="font-medium text-foreground">{item.q}</dt>
                <dd className="mt-1.5 text-muted-foreground">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <p className="mt-10">
          <Link
            href={localeHref(locale, "/formaty")}
            className="text-sm font-medium text-primary hover:underline"
          >
            ← {hub.allFormats}
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  )
}
