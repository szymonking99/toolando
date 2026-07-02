import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, Coffee, Heart, Wrench } from "lucide-react"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { localeHref } from "@/lib/i18n/href"

// Placeholder support links — replace with your real Buy Me a Coffee / donation URLs.
const COFFEE_URL = "https://www.buymeacoffee.com/"
const DONATE_URL = "https://www.paypal.com/donate"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  return {
    title: `${dict.support.title} — Toolando`,
    description: dict.support.subtitle,
    alternates: { canonical: `/${locale}/wsparcie` },
  }
}

export default async function SupportPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return (
    <div className="min-h-dvh">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <nav className="mx-auto flex max-w-3xl items-center justify-between rounded-2xl border border-white/10 bg-background/60 px-5 py-3 backdrop-blur-xl">
          <Link href={localeHref(locale, "/")} className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
              <Wrench className="size-4" aria-hidden="true" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Toolando
            </span>
          </Link>
          <Link
            href={localeHref(locale, "/")}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            {dict.support.back}
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-4 pb-24 pt-32">
        <div className="mb-2 text-sm font-medium text-primary">
          {dict.support.eyebrow}
        </div>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {dict.support.title}
        </h1>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          {dict.support.subtitle}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={COFFEE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/85"
          >
            <Coffee className="size-4" aria-hidden="true" />
            {dict.support.coffee}
          </a>
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 font-medium text-foreground transition-colors hover:bg-white/[0.08]"
          >
            <Heart className="size-4" aria-hidden="true" />
            {dict.support.donate}
          </a>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          {dict.support.thanks}
        </p>
      </main>
    </div>
  )
}
