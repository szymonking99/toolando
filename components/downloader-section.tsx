"use client"

import Link from "next/link"
import { Music, ArrowRight } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { SUPPORTED_PLATFORMS, PLATFORM_LABELS } from "@/lib/video-link"

export function DownloaderSection() {
  const { t, href } = useI18n()

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-primary/[0.06] p-8 backdrop-blur-md md:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -bottom-16 size-56 rounded-full bg-primary/25 opacity-60 blur-3xl"
          />
          <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                <Music className="size-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {t.downloader.title}
              </h2>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                {t.downloader.subtitle}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {SUPPORTED_PLATFORMS.map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {PLATFORM_LABELS[p]}
                  </span>
                ))}
              </div>

              <Link
                href={href("/downloader")}
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
              >
                {t.downloader.download}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
