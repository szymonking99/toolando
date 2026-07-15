import type { Metadata } from "next"
import {
  ContentPageShell,
  ContentSection,
} from "@/components/content-page-shell"
import { getDictionary } from "@/lib/i18n/dictionaries"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getDictionary(locale)
  return {
    title: `${t.pages.howItWorks.title} — Toolando.tech`,
    description: t.pages.howItWorks.intro,
    alternates: { canonical: `/${locale}/jak-to-dziala` },
  }
}

export default async function HowItWorksPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const { howItWorks: p } = (await getDictionary(locale)).pages

  return (
    <ContentPageShell eyebrow={p.eyebrow} title={p.title} intro={p.intro}>
      <ContentSection title={p.browserTitle}>
        <p>{p.browserP}</p>
      </ContentSection>

      <ContentSection title={p.filesTitle}>
        <p>{p.filesIntro}</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-foreground">{p.filesLocalTerm}</strong> —{" "}
            {p.filesLocalDesc}
          </li>
          <li>
            <strong className="text-foreground">{p.filesServerTerm}</strong> —{" "}
            {p.filesServerDesc}
          </li>
        </ul>
        <p>{p.filesOutro}</p>
      </ContentSection>

      <ContentSection title={p.securityTitle}>
        <p>{p.securityP}</p>
        <ul className="list-disc space-y-2 pl-6">
          {p.securityList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection title={p.tiersTitle}>
        <p>{p.tiersP}</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-foreground">{p.tiersFreeTerm}</strong> —{" "}
            {p.tiersFreeDesc}
          </li>
          <li>
            <strong className="text-foreground">{p.tiersPremiumTerm}</strong> —{" "}
            {p.tiersPremiumDesc}
          </li>
        </ul>
      </ContentSection>
    </ContentPageShell>
  )
}
