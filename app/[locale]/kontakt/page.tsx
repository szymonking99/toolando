import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { getDictionary } from "@/lib/i18n/dictionaries"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getDictionary(locale)
  return {
    title: `${t.pages.contact.title} — Toolando.tech`,
    description: t.pages.contact.intro,
    alternates: { canonical: `/${locale}/kontakt` },
  }
}

export default function ContactPage() {
  return <ContactForm />
}
