import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, ArrowRight, Wrench } from "lucide-react"
import {
  categories,
  getCategory,
  getToolsForCategory,
} from "@/lib/tools"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { getCategoryMeta } from "@/lib/i18n/content-meta"
import { getConversionDescription } from "@/lib/i18n/tool-meta"
import { localeHref } from "@/lib/i18n/href"

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; locale: string }>
}): Promise<Metadata> {
  const { category, locale } = await params
  const dict = await getDictionary(locale)
  const meta = getCategory(category)
  if (!meta) return { title: `${dict.category.notFound} — Toolando.tech` }
  const cm = getCategoryMeta(locale, category)
  const title = `${cm?.title ?? meta.title} — Toolando.tech`
  const description = cm?.description ?? meta.description
  return {
    title,
    description,
    alternates: { canonical: `/${locale}/category/${category}` },
    openGraph: {
      title,
      description,
      url: `/${locale}/category/${category}`,
      siteName: "Toolando.tech",
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string; locale: string }>
}) {
  const { category, locale } = await params
  const meta = getCategory(category)
  if (!meta) return notFound()

  const dict = await getDictionary(locale)
  const cm = getCategoryMeta(locale, category)
  const list = getToolsForCategory(category)

  return (
    <div className="min-h-dvh">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-2xl border border-white/10 bg-background/60 px-5 py-3 backdrop-blur-xl">
          <Link href={localeHref(locale, "/")} className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
              <Wrench className="size-4" aria-hidden="true" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Toolando.tech
            </span>
          </Link>
          <Link
            href={localeHref(locale, "/#kategorie")}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            {dict.category.allCategories}
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-24 pt-32">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {cm?.title ?? meta.title}
        </h1>
        <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {cm?.description ?? meta.description}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          {list.length}{" "}
          {list.length === 1
            ? dict.category.converterOne
            : dict.category.converterMany}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((tool) => (
            <Link
              key={tool.id}
              href={localeHref(locale, `/tools/${tool.id}`)}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all hover:border-primary/40 hover:bg-white/[0.06]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-2.5 py-1 font-mono text-xs font-medium text-primary ring-1 ring-primary/20">
                  {tool.from.toUpperCase()}
                  <ArrowRight className="size-3" aria-hidden="true" />
                  {tool.to.toUpperCase()}
                </span>
                {!tool.supported && (
                  <span className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                    {dict.category.soon}
                  </span>
                )}
              </div>
              <h2 className="mt-4 text-base font-semibold text-foreground">
                {tool.name}
              </h2>
              <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {getConversionDescription(locale, tool.from, tool.to)}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
