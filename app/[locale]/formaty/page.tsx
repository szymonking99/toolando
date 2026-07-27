import type { Metadata } from "next"
import Link from "next/link"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import {
  getAllFormatProfiles,
  getFormatsHubMeta,
} from "@/lib/i18n/formats"
import { localeHref } from "@/lib/i18n/href"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const hub = getFormatsHubMeta(locale)
  return {
    title: `${hub.title} — Toolando.tech`,
    description: hub.intro.slice(0, 160),
    alternates: { canonical: `/${locale}/formaty` },
  }
}

export default async function FormatsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const hub = getFormatsHubMeta(locale)
  const profiles = getAllFormatProfiles(locale)

  const grouped = profiles.reduce<
    Record<string, typeof profiles>
  >((acc, p) => {
    if (!acc[p.category]) acc[p.category] = []
    acc[p.category].push(p)
    return acc
  }, {})

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar />
      <main className="mx-auto max-w-5xl px-4 pb-24 pt-32">
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {hub.title}
        </h1>
        <p className="mt-4 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {hub.intro}
        </p>

        <section className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-xl font-semibold text-foreground">
            {hub.basicsTitle}
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
            {hub.basicsParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        {Object.entries(grouped).map(([category, items]) => (
          <section key={category} className="mt-14">
            <h2 className="text-xl font-semibold text-foreground">
              {hub.categoryLabels[category as keyof typeof hub.categoryLabels]}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((p) => (
                <Link
                  key={p.id}
                  href={localeHref(locale, `/formaty/${p.id}`)}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-primary/40 hover:bg-white/[0.06]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-foreground">
                      {p.name}
                    </span>
                    <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary">
                      .{p.extension.toUpperCase()}
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {p.intro}
                  </p>
                  <span className="mt-3 inline-block text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    {hub.viewFormat} →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
      <SiteFooter />
    </div>
  )
}
