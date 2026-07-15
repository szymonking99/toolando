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
    title: `${t.pages.terms.title} — Toolando.tech`,
    description: t.pages.terms.intro,
    alternates: { canonical: `/${locale}/regulamin` },
  }
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const { terms: p } = (await getDictionary(locale)).pages

  return (
    <ContentPageShell eyebrow={p.eyebrow} title={p.title} intro={p.intro}>
      <ContentSection title={p.s1Title}>
        <p>{p.s1P}</p>
      </ContentSection>

      <ContentSection title={p.s2Title}>
        <p>{p.s2Intro}</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-foreground">{p.s2FreeTerm}</strong> —{" "}
            {p.s2FreeDesc}
          </li>
          <li>
            <strong className="text-foreground">{p.s2PremiumTerm}</strong> —{" "}
            {p.s2PremiumDesc}
          </li>
        </ul>
        <p>{p.s2Outro}</p>
      </ContentSection>

      <ContentSection title={p.s3Title}>
        <p>{p.s3P1}</p>
        <p>{p.s3P2}</p>
        <ul className="list-disc space-y-2 pl-6">
          {p.s3List.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{p.s3Outro}</p>
      </ContentSection>

      <ContentSection title={p.s4Title}>
        <p>{p.s4P}</p>
      </ContentSection>

      <ContentSection title={p.s5Title}>
        <p>{p.s5P}</p>
      </ContentSection>

      <ContentSection title={p.s6Title}>
        <p>{p.s6P}</p>
      </ContentSection>

      <ContentSection title={p.s7Title}>
        <p>
          {p.s7Pre}{" "}
          <a
            href="mailto:badyltech@outlook.com"
            className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
          >
            badyltech@outlook.com
          </a>
          .
        </p>
      </ContentSection>

      <ContentSection title={p.s8Title}>
        <p>{p.s8P}</p>
      </ContentSection>
    </ContentPageShell>
  )
}
