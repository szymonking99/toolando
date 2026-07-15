import type { Metadata } from "next"
import { ChevronDown } from "lucide-react"
import { ContentPageShell } from "@/components/content-page-shell"
import { getDictionary } from "@/lib/i18n/dictionaries"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getDictionary(locale)
  return {
    title: `${t.pages.faq.title} — Toolando.tech`,
    description: t.pages.faq.intro,
    alternates: { canonical: `/${locale}/faq` },
  }
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const { faq: p } = (await getDictionary(locale)).pages

  return (
    <ContentPageShell eyebrow={p.eyebrow} title={p.title} intro={p.intro}>
      <div className="space-y-3">
        {p.items.map((item) => (
          <details
            key={item.q}
            className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 [&_svg]:open:rotate-180"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-foreground">
              {item.q}
              <ChevronDown
                className="size-5 shrink-0 text-muted-foreground transition-transform"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </ContentPageShell>
  )
}
