"use client"

import Link from "next/link"
import { ArrowUpRight, Upload } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { GlobalSearch } from "@/components/global-search"

export function HeroSection() {
  const { t, href } = useI18n()

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 md:pb-28 md:pt-44">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-15%,color-mix(in_oklab,var(--primary)_22%,transparent),transparent_58%)]" />
        <div className="absolute -left-24 top-28 size-[28rem] rounded-full bg-primary/[0.07] blur-3xl dark:bg-primary/10" />
        <div className="absolute -right-20 top-40 size-[22rem] rounded-full bg-accent/40 blur-3xl dark:bg-accent/20" />
        <div className="absolute inset-0 toolando-grid opacity-60 dark:opacity-40" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="animate-in fade-in slide-in-from-bottom-2 fill-mode-both text-xs font-semibold uppercase tracking-[0.22em] text-primary duration-700">
          Toolando.tech
        </p>

        <h1 className="font-display animate-in fade-in slide-in-from-bottom-3 fill-mode-both mt-4 text-[clamp(3rem,9vw,6rem)] font-semibold leading-[0.92] tracking-tight text-foreground duration-700 delay-75">
          Toolando
        </h1>

        <p className="animate-in fade-in slide-in-from-bottom-3 fill-mode-both mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground duration-700 delay-150 md:text-xl">
          {t.hero.subtitle}
        </p>

        <div className="animate-in fade-in slide-in-from-bottom-3 fill-mode-both mt-10 flex w-full max-w-md flex-col gap-3 duration-700 delay-200 sm:max-w-none sm:flex-row sm:justify-center">
          <Link
            href={href("/otworz")}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-[transform,box-shadow] hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30 active:scale-[0.99] sm:w-auto"
          >
            <Upload className="size-5" aria-hidden="true" />
            {t.hero.convertCta}
          </Link>
          <Link
            href={href("/tools")}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-border/80 bg-card/80 px-8 py-3.5 text-base font-medium text-foreground shadow-sm backdrop-blur-sm transition-colors hover:border-primary/35 hover:bg-muted sm:w-auto"
          >
            {t.hero.browse}
            <ArrowUpRight className="size-4 opacity-70" aria-hidden="true" />
          </Link>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both relative z-10 mt-14 w-full max-w-xl rounded-2xl border border-border/70 bg-card/70 p-4 shadow-xl shadow-foreground/[0.04] backdrop-blur-md duration-700 delay-300 dark:bg-card/50 dark:shadow-black/30">
          <p className="mb-2 text-left text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {t.hero.askLabel ?? "What do you want to do?"}
          </p>
          <GlobalSearch />
          <p className="mt-2.5 text-left text-xs text-muted-foreground">
            {t.hero.askHint ??
              'Try “shrink PDF”, “HEIC to JPG”, “remove metadata”…'}
          </p>
        </div>
      </div>
    </section>
  )
}
