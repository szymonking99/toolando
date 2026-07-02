"use client"

import Link from "next/link"
import {
  FileImage,
  Minimize2,
  AudioLines,
  Film,
  FileStack,
  Scissors,
} from "lucide-react"
import { PopularToolsSection } from "@/components/ui/popular-tools-section"
import { useI18n } from "@/components/i18n-provider"
import { getFeatureMeta } from "@/lib/i18n/content-meta"

const features = [
  { icon: FileImage, id: "pdf-to-jpg", href: "/tools/pdf-to-jpg" },
  { icon: Minimize2, id: "kompresor-obrazow", href: "/tools/kompresor-obrazow" },
  { icon: AudioLines, id: "mp3-to-wav", href: "/tools/mp3-to-wav" },
  { icon: Film, id: "mp4-to-webm", href: "/tools/mp4-to-webm" },
  { icon: FileStack, id: "laczenie-pdf", href: "/tools/laczenie-pdf" },
  { icon: Scissors, id: "usuwanie-tla", href: "/tools/usuwanie-tla" },
]

export function FeaturesSection() {
  const { t, locale } = useI18n()
  return (
    <section id="narzedzia" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {t.features.title}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.features.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const fm = getFeatureMeta(locale, feature.id)
            return (
              <Link
                key={feature.id}
                href={feature.href}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all hover:border-primary/40 hover:bg-white/[0.06]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/25 transition-colors group-hover:bg-primary/20">
                  <feature.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {fm?.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {fm?.description}
                </p>
              </Link>
            )
          })}
        </div>

        <PopularToolsSection />
      </div>
    </section>
  )
}
