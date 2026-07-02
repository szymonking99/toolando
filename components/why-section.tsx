"use client"

import { Zap, MousePointerClick, Layers } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"

export function WhySection() {
  const { t } = useI18n()

  const reasons = [
    {
      icon: Zap,
      title: t.why.speedTitle,
      description: t.why.speedDesc,
    },
    {
      icon: MousePointerClick,
      title: t.why.simpleTitle,
      description: t.why.simpleDesc,
    },
    {
      icon: Layers,
      title: "Ponad 200 narzędzi online",
      description: "Ogromny zestaw konwerterów, generatorów i narzędzi AI w jednym miejscu.",
    },
  ]

  return (
    <section id="o-platformie" className="relative px-4 py-24 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {t.why.title}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.why.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-md"
            >
              <span className="mx-auto inline-flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/25">
                <reason.icon className="size-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
