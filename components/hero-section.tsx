"use client"

import { Sparkles } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-40 md:pb-32 md:pt-48">
      {/* Neon glow accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute -left-20 top-40 h-[320px] w-[320px] rounded-full bg-accent/25 blur-[130px]" />
        <div className="absolute -right-10 top-20 h-[280px] w-[280px] rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_75%)]" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md">
          <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
          {t.hero.badge}
        </span>

        <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          {t.hero.titleA}{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.hero.titleHighlight}
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {t.hero.subtitle}
        </p>

        {/* Przyciski zostały usunięte */}
      </div>
    </section>
  )
}
