"use client"

import Link from "next/link"
import {
  Coins,
  CalendarRange,
  Globe2,
  Ruler,
  Percent,
  Cake,
  KeyRound,
  Type,
  QrCode,
  HardDrive,
  Palette,
  Binary,
  Clock,
  Fingerprint,
  Hash,
  type LucideIcon,
} from "lucide-react"
import {
  getCalculatorUtilities,
  getDeveloperUtilities,
} from "@/lib/tool-hub"
import { getUtilityMeta } from "@/lib/i18n/utility-meta"
import { useI18n } from "@/components/i18n-provider"

const ICONS: Record<string, LucideIcon> = {
  Coins,
  CalendarRange,
  Globe2,
  Ruler,
  Percent,
  Cake,
  KeyRound,
  Type,
  QrCode,
  HardDrive,
  Palette,
  Binary,
  Clock,
  Fingerprint,
  Hash,
}

function UtilityGrid({
  tools,
}: {
  tools: ReturnType<typeof getCalculatorUtilities>
}) {
  const { locale, href } = useI18n()
  return (
    <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => {
        const meta = getUtilityMeta(locale, tool.id)
        const Icon = ICONS[tool.icon] ?? Coins
        return (
          <Link
            key={tool.id}
            href={href(`/tools/${tool.id}`)}
            className="group flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-primary/40 hover:bg-white/[0.06]"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
                {meta.name}
              </span>
              <span className="mt-1 line-clamp-2 block text-xs text-muted-foreground">
                {meta.description}
              </span>
            </span>
          </Link>
        )
      })}
    </div>
  )
}

export function CalculatorsSection() {
  const { t } = useI18n()
  return (
    <section id="kalkulatory" className="relative px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.hub.calculatorsTitle}
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            {t.hub.calculatorsDesc}
          </p>
        </div>
        <UtilityGrid tools={getCalculatorUtilities()} />
      </div>
    </section>
  )
}

export function DeveloperToolsSection() {
  const { t } = useI18n()
  return (
    <section id="deweloperzy" className="relative px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.hub.developerTitle}
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            {t.hub.developerDesc}
          </p>
        </div>
        <UtilityGrid tools={getDeveloperUtilities()} />
      </div>
    </section>
  )
}
