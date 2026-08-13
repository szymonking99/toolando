import type { Metadata } from "next"
import {
  ContentPageShell,
  ContentSection,
} from "@/components/content-page-shell"
import { ContactEmailLink } from "@/components/contact-email-link"
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
  const t = await getDictionary(locale)
  const { about: p } = t.pages

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
          <ContactEmailLink
            subject={t.pages.contact.subject}
            ariaLabel={t.footer.emailAria}
            className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
          />
        </p>
      </ContentSection>

      <ContentSection title={p.methodologyTitle}>
        <p>{p.methodologyP1}</p>
        <ul className="list-disc space-y-2 pl-6">
          {p.methodologyList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{p.methodologyP2}</p>
        <p className="text-sm text-muted-foreground">
          {p.updatedLabel}: {p.updatedDate}
        </p>
      </ContentSection>
    </ContentPageShell>
  )
}
