"use client"

import Link from "next/link"
import {
  Camera,
  Code2,
  Briefcase,
  GraduationCap,
  PenLine,
  ShoppingBag,
  ArrowRight,
} from "lucide-react"
import { useI18n } from "@/components/i18n-provider"

const AUDIENCES = [
  { id: "fotograf", icon: Camera },
  { id: "webmaster", icon: Code2 },
  { id: "biuro", icon: Briefcase },
  { id: "student", icon: GraduationCap },
  { id: "creator", icon: PenLine },
  { id: "ecommerce", icon: ShoppingBag },
] as const

export function AudienceSection() {
  const { t, href } = useI18n()
  const items = (t.audiences?.items ?? {}) as Record<
    string,
    { title: string; desc: string }
  >

  return (
    <section className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.audiences?.title ?? "Toolando for professionals"}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {t.audiences?.subtitle ??
              "Curated toolkits for how you actually work — not a wall of 1000 converters."}
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map((a) => {
            const Icon = a.icon
            const copy = items[a.id]
            return (
              <Link
                key={a.id}
                href={href(`/dla/${a.id}`)}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-primary/40 hover:bg-white/[0.06]"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {copy?.title ?? a.id}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {copy?.desc ?? ""}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  {t.audiences?.cta ?? "Open toolkit"}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
