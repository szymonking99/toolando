"use client"

import Link from "next/link"
import { FolderOpen, ArrowRight, ImageIcon, Film, Music, FileText } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"

export function UniversalOpenerSection() {
  const { t } = useI18n()

  const kinds = [
    { icon: ImageIcon, label: t.opener.kindImages },
    { icon: Film, label: t.opener.kindVideo },
    { icon: Music, label: t.opener.kindAudio },
    { icon: FileText, label: t.opener.kindDocs },
  ]

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-primary/[0.06] p-8 backdrop-blur-md md:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-primary/25 opacity-60 blur-3xl"
          />
          <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                <FolderOpen className="size-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {t.opener.title}
              </h2>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                {t.opener.subtitle}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {kinds.map((k) => (
                  <span
                    key={k.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    <k.icon className="size-3.5" aria-hidden="true" />
                    {k.label}
                  </span>
                ))}
              </div>

              <Link
                href="/otworz"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
              >
                {t.opener.cta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
