"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/components/i18n-provider"

export function CtaSection() {
  const { t, href } = useI18n()

  return (
    <section className="px-4 py-24 md:py-32">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center backdrop-blur-md md:px-16 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-accent/25 blur-[110px]" />
        </div>

        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {t.ctaSection.title}
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {t.ctaSection.subtitle}
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href={href("/tools")}
            className="group inline-flex items-center rounded-xl bg-primary px-8 py-3 text-primary-foreground shadow-[0_0_32px_-6px] shadow-primary/60 hover:bg-primary/90 transition"
          >
            {t.ctaSection.browse}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
