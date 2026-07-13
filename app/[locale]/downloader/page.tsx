import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, Wrench, Music } from "lucide-react"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { localeHref } from "@/lib/i18n/href"
import { PLATFORM_LABELS, PLATFORMS } from "@/lib/video-link"
import { VideoToMp3Linker } from "@/components/video-to-mp3-linker"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const d = dict.downloader
  return {
    title: `${d.title} — Toolando.tech`,
    description: d.metaDescription,
    alternates: { canonical: `/${locale}/downloader` },
    openGraph: {
      title: `${d.title} — Toolando.tech`,
      description: d.metaDescription,
      url: `/${locale}/downloader`,
      siteName: "Toolando.tech",
      type: "website",
    },
  }
}

export default async function DownloaderPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const d = dict.downloader

  // FAQ questions are stored as an array in the dictionary.
  const faq = Array.isArray(d.faq) ? d.faq : []

  return (
    <div className="min-h-dvh">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <nav className="mx-auto flex max-w-3xl items-center justify-between rounded-2xl border border-white/10 bg-background/60 px-5 py-3 backdrop-blur-xl">
          <Link
            href={localeHref(locale, "/")}
            className="flex items-center gap-2"
          >
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
              <Wrench className="size-4" aria-hidden="true" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Toolando.tech
            </span>
          </Link>
          <Link
            href={localeHref(locale, "/")}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            {d.back}
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-4 pb-24 pt-32">
        <div className="mb-2 flex items-center gap-2 text-sm font-medium text-primary">
          <Music className="size-4" aria-hidden="true" />
          {d.eyebrow}
        </div>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {d.title}
        </h1>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          {d.subtitle}
        </p>

        {/* Supported platforms */}
        <div className="mt-5 flex flex-wrap gap-2">
          {PLATFORMS.map((p) => (
            <span
              key={p}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {PLATFORM_LABELS[p]}
            </span>
          ))}
        </div>

        {/* Tool */}
        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
          <VideoToMp3Linker />
        </section>

        {/* FAQ */}
        {faq.length > 0 && (
          <section className="mt-14">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              {d.faqTitle}
            </h2>
            <dl className="mt-5 flex flex-col gap-4">
              {faq.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <dt className="font-medium text-foreground">{item.q}</dt>
                  <dd className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}
      </main>
    </div>
  )
}
