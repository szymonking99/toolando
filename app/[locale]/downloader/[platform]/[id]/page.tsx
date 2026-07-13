import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowLeft, Wrench, ArrowUpRight, ExternalLink } from "lucide-react"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { localeHref } from "@/lib/i18n/href"
import {
  isPlatform,
  rebuildFromParts,
  buildConverterUrl,
  PLATFORM_LABELS,
  PLATFORM_COLORS,
} from "@/lib/video-link"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; platform: string; id: string }>
}): Promise<Metadata> {
  const { locale, platform, id } = await params
  const dict = await getDictionary(locale)
  const d = dict.downloader
  const label = isPlatform(platform) ? PLATFORM_LABELS[platform] : platform
  return {
    title: `${label} → MP3 — Toolando.tech`,
    description: d.metaDescription,
    alternates: { canonical: `/${locale}/downloader/${platform}/${id}` },
    robots: { index: false, follow: true },
  }
}

export default async function DownloaderResultPage({
  params,
}: {
  params: Promise<{ locale: string; platform: string; id: string }>
}) {
  const { locale, platform, id } = await params
  const dict = await getDictionary(locale)
  const d = dict.downloader

  if (!isPlatform(platform)) notFound()

  const info = rebuildFromParts(platform, decodeURIComponent(id))
  const accent = PLATFORM_COLORS[platform]
  const externalUrl = buildConverterUrl(info.sourceUrl)

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
            href={localeHref(locale, "/downloader")}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            {d.resultsBack}
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-4 pb-24 pt-32">
        <div className="mb-2 flex items-center gap-2">
          <span
            className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold"
            style={{ color: accent, backgroundColor: `${accent}1a` }}
          >
            {PLATFORM_LABELS[platform]}
          </span>
          <span className="text-sm text-muted-foreground">{d.resultTitle}</span>
        </div>

        <div className="mt-4 flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row">
          <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-xl bg-white/5 sm:w-64">
            {info.thumbnail ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={info.thumbnail || "/placeholder.svg"}
                alt={d.thumbnailAlt}
                className="size-full object-cover"
              />
            ) : (
              <div
                className="flex size-full items-center justify-center text-xl font-semibold"
                style={{ color: accent }}
              >
                {PLATFORM_LABELS[platform]}
              </div>
            )}
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-3">
            <div>
              <p className="text-sm text-muted-foreground">{d.idLabel}</p>
              <p className="break-all font-mono text-foreground">{info.id}</p>
            </div>

            <div className="mt-auto flex flex-col gap-2">
              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/85"
              >
                {d.openPage}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              {info.sourceUrl && (
                <a
                  href={info.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.08]"
                >
                  <ExternalLink className="size-4" aria-hidden="true" />
                  {d.viewSource}
                </a>
              )}
            </div>
          </div>
        </div>

        <p className="mt-6 text-pretty text-xs leading-relaxed text-muted-foreground">
          {d.externalNote}
        </p>
      </main>
    </div>
  )
}
