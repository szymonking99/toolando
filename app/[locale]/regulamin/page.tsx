import type { Metadata } from "next"
import { LegalDocument } from "@/components/legal-document"
import { JsonLd } from "@/components/json-ld"
import { getTermsDocument } from "@/lib/i18n/legal"
import { breadcrumbSchema } from "@/lib/seo/structured-data"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const doc = getTermsDocument(locale)
  return {
    title: `${doc.title} — Toolando.tech`,
    description: doc.intro.slice(0, 160),
    alternates: { canonical: `/${locale}/regulamin` },
  }
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const doc = getTermsDocument(locale)

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Toolando.tech", path: `/${locale}` },
          { name: doc.title, path: `/${locale}/regulamin` },
        ])}
      />
      <LegalDocument doc={doc} />
    </>
  )
}
