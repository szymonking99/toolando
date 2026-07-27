import type { Metadata } from "next"
import { LegalDocument } from "@/components/legal-document"
import { JsonLd } from "@/components/json-ld"
import { getPrivacyDocument } from "@/lib/i18n/legal"
import { breadcrumbSchema } from "@/lib/seo/structured-data"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const doc = getPrivacyDocument(locale)
  return {
    title: `${doc.title} — Toolando.tech`,
    description: doc.intro.slice(0, 160),
    alternates: { canonical: `/${locale}/polityka-prywatnosci` },
  }
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const doc = getPrivacyDocument(locale)

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Toolando.tech", path: `/${locale}` },
          { name: doc.title, path: `/${locale}/polityka-prywatnosci` },
        ])}
      />
      <LegalDocument doc={doc} />
    </>
  )
}
