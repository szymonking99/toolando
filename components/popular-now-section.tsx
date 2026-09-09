"use client"

import Link from "next/link"
import {
  FileText,
  ImageIcon,
  Music,
  Video,
  Shield,
  Globe2,
  Calculator,
  Archive,
  ArrowRight,
} from "lucide-react"
import { useI18n } from "@/components/i18n-provider"

const HUBS = [
  { id: "pdf", href: "/category/documents", icon: FileText, labelKey: "pdf" },
  { id: "image", href: "/category/image", icon: ImageIcon, labelKey: "image" },
  { id: "audio", href: "/category/audio", icon: Music, labelKey: "audio" },
  { id: "video", href: "/category/video", icon: Video, labelKey: "video" },
  { id: "documents", href: "/category/documents", icon: Archive, labelKey: "documents" },
  { id: "privacy", href: "/tools/inspektor-prywatnosci", icon: Shield, labelKey: "privacy" },
  { id: "web", href: "/tools#developer", icon: Globe2, labelKey: "web" },
  { id: "calculators", href: "/tools#kalkulatory", icon: Calculator, labelKey: "calculators" },
] as const

export function PopularNowSection() {
  const { t, href } = useI18n()
  const labels = (t.homeHubs?.items ?? {}) as Record<string, string>

  return (
    <section className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.homeHubs?.title ?? "Popular now"}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {t.homeHubs?.subtitle ?? "Jump straight into the category you need."}
          </p>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {HUBS.map((hub) => {
            const Icon = hub.icon
            return (
              <Link
                key={hub.id}
                href={href(hub.href)}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 transition-colors hover:border-primary/40 hover:bg-white/[0.06]"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="size-5" />
                </span>
                <span className="flex-1 text-sm font-semibold text-foreground">
                  {labels[hub.labelKey] ?? hub.labelKey}
                </span>
                <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
