import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, Wrench } from "lucide-react"
import { UniversalOpener } from "@/components/universal-opener"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { localeHref } from "@/lib/i18n/href"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  return {
    title: `${dict.openerPage.title} — Toolando`,
    description: dict.openerPage.subtitle,
    alternates: { canonical: `/${locale}/otworz` },
  }
}

export default async function OpenerPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return (
    <div className="min-h-dvh">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <nav className="mx-auto flex max-w-4xl items-center justify-between rounded-2xl border border-white/10 bg-background/60 px-5 py-3 backdrop-blur-xl">
          <Link href={localeHref(locale, "/")} className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
              <Wrench className="size-4" aria-hidden="true" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Toolando
            </span>
          </Link>
          <Link
            href={localeHref(locale, "/#narzedzia")}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            {dict.openerPage.back}
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-4 pb-24 pt-32">
        <div className="mb-2 text-sm font-medium text-primary">
          {dict.openerPage.eyebrow}
        </div>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {dict.openerPage.title}
        </h1>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          {dict.openerPage.subtitle}
        </p>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
          <UniversalOpener />
        </section>
      </main>
    </div>
  )
}
