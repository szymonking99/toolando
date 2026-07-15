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
    title: `${t.pages.about.title} — Toolando.tech`,
    description: t.pages.about.intro,
    alternates: { canonical: `/${locale}/o-mnie` },
  }
}

export default async function AboutMePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const { about: p } = (await getDictionary(locale)).pages

  return (
    <ContentPageShell eyebrow={p.eyebrow} title={p.title} intro={p.intro}>
      <ContentSection title={p.whyTitle}>
        <p>{p.whyP1}</p>
        <p>{p.whyP2}</p>
      </ContentSection>

      <ContentSection title={p.howTitle}>
        <p>{p.howIntro}</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-foreground">{p.howFreeTerm}</strong> —{" "}
            {p.howFreeDesc}
          </li>
          <li>
            <strong className="text-foreground">{p.howPremiumTerm}</strong> —{" "}
            {p.howPremiumDesc}
          </li>
        </ul>
        <p>{p.howOutro}</p>
      </ContentSection>

      <ContentSection title={p.outsideTitle}>
        <p>{p.outsideP1}</p>
        <ul className="list-disc space-y-2 pl-6">
          {p.outsideList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{p.outsideP2}</p>
      </ContentSection>

      <ContentSection title={p.contactTitle}>
        <p>{p.contactP1}</p>
        <p>
          {p.emailLabel}{" "}
          <a
            href="mailto:badyltech@outlook.com"
            className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
          >
            badyltech@outlook.com
          </a>
        </p>
      </ContentSection>
    </ContentPageShell>
  )
}
