import type { Metadata } from "next"
import Link from "next/link"
import {
  ContentPageShell,
  ContentSection,
} from "@/components/content-page-shell"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { localeHref } from "@/lib/i18n/href"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getDictionary(locale)
  return {
    title: `${t.pages.editorial.title} — Toolando.tech`,
    description: t.pages.editorial.intro,
    alternates: { canonical: `/${locale}/redakcja` },
  }
}

export default async function EditorialPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const { editorial: p } = (await getDictionary(locale)).pages

  return (
    <ContentPageShell eyebrow={p.eyebrow} title={p.title} intro={p.intro}>
      <ContentSection title={p.whoTitle}>
        <p>{p.whoP1}</p>
        <p>{p.whoP2}</p>
      </ContentSection>

      <ContentSection title={p.standardsTitle}>
        <p>{p.standardsIntro}</p>
        <ul className="list-disc space-y-2 pl-6">
          {p.standardsList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection title={p.sourcesTitle}>
        <p>{p.sourcesP1}</p>
        <p>{p.sourcesP2}</p>
      </ContentSection>

      <ContentSection title={p.updatesTitle}>
        <p>{p.updatesP1}</p>
        <p className="text-sm text-muted-foreground">
          {p.updatedLabel}: {p.updatedDate}
        </p>
      </ContentSection>

      <p>
        <Link
          href={localeHref(locale, "/poradniki/toolando-editorial-standards")}
          className="font-medium text-primary hover:underline"
        >
          {p.fullGuideCta} →
        </Link>
      </p>
    </ContentPageShell>
  )
}
