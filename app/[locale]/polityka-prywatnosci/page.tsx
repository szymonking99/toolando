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
    title: `${t.pages.privacy.title} — Toolando.tech`,
    description: t.pages.privacy.intro,
    alternates: { canonical: `/${locale}/polityka-prywatnosci` },
  }
}

const emailLink = (
  <a
    href="mailto:badyltech@outlook.com"
    className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
  >
    badyltech@outlook.com
  </a>
)

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const { privacy: p } = (await getDictionary(locale)).pages

  return (
    <ContentPageShell eyebrow={p.eyebrow} title={p.title} intro={p.intro}>
      <ContentSection title={p.s1Title}>
        <p>
          {p.s1Pre} {emailLink}.
        </p>
      </ContentSection>

      <ContentSection title={p.s2Title}>
        <p>{p.s2Intro}</p>
        <ul className="list-disc space-y-2 pl-6">
          {p.s2List.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{p.s2Outro}</p>
      </ContentSection>

      <ContentSection title={p.s3Title}>
        <p>{p.s3P}</p>
      </ContentSection>

      <ContentSection title={p.s4Title}>
        <p>{p.s4Intro}</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-foreground">{p.s4TechTerm}</strong> —{" "}
            {p.s4TechDesc}
          </li>
          <li>
            <strong className="text-foreground">{p.s4AnalyticsTerm}</strong> —{" "}
            {p.s4AnalyticsDesc}
          </li>
          <li>
            <strong className="text-foreground">{p.s4AdsTerm}</strong> —{" "}
            {p.s4AdsDesc}
          </li>
        </ul>
        <p>{p.s4Outro}</p>
      </ContentSection>

      <ContentSection title={p.s5Title}>
        <p>{p.s5P}</p>
      </ContentSection>

      <ContentSection title={p.s6Title}>
        <p>{p.s6Intro}</p>
        <ul className="list-disc space-y-2 pl-6">
          {p.s6List.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection title={p.s7Title}>
        <p>{p.s7Intro}</p>
        <ul className="list-disc space-y-2 pl-6">
          {p.s7List.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection title={p.s8Title}>
        <p>{p.s8P}</p>
      </ContentSection>
    </ContentPageShell>
  )
}
