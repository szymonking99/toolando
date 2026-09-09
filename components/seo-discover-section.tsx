"use client"

import Link from "next/link"
import {
  ArrowRight,
  Shield,
  Smartphone,
  FileText,
  ImageIcon,
  Upload,
} from "lucide-react"
import { useI18n } from "@/components/i18n-provider"

const LINKS = [
  {
    id: "heic",
    href: "/tools/heic-to-jpg",
    icon: Smartphone,
    guide: "/poradniki/heic-iphone-jpg",
  },
  {
    id: "exif",
    href: "/tools/inspektor-prywatnosci",
    icon: Shield,
    guide: "/poradniki/remove-exif-privacy-guide",
  },
  {
    id: "pdf",
    href: "/tools/kompresja-pdf",
    icon: FileText,
    guide: "/poradniki/merge-pdf-online-guide",
  },
  {
    id: "webp",
    href: "/tools/jpg-to-webp",
    icon: ImageIcon,
    guide: "/poradniki/prepare-images-for-web",
  },
  {
    id: "assistant",
    href: "/otworz",
    icon: Upload,
    guide: "/poradniki/when-not-to-convert-files",
  },
] as const

export function SeoDiscoverSection() {
  const { t, href } = useI18n()
  const copy = t.seoDiscover
  if (!copy) return null

  return (
    <section className="border-t border-white/10 px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-3 text-muted-foreground">{copy.subtitle}</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LINKS.map((item) => {
            const Icon = item.icon
            const itemCopy = copy.items?.[item.id]
            return (
              <article
                key={item.id}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {itemCopy?.title ?? item.id}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {itemCopy?.desc ?? ""}
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium">
                  <Link
                    href={href(item.href)}
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    {copy.toolCta}
                    <ArrowRight className="size-3.5" />
                  </Link>
                  <Link
                    href={href(item.guide)}
                    className="text-muted-foreground hover:text-foreground hover:underline"
                  >
                    {copy.guideCta}
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
