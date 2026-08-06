"use client"

import Link from "next/link"
import { UserCircle } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"

/** Visible editorial block — helps E-E-A-T for AdSense / Search Quality. */
export function EditorialTrustSection() {
  const { t, href } = useI18n()
  const e = t.editorial

  return (
    <section className="border-t border-white/10 px-4 py-16">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:flex-row sm:items-start">
        <UserCircle className="size-12 shrink-0 text-primary" aria-hidden="true" />
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            {e.title}
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            {e.body}
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
            <Link href={href("/o-mnie")} className="text-primary hover:underline">
              {e.aboutCta} →
            </Link>
            <Link
              href={href("/jak-to-dziala")}
              className="text-muted-foreground hover:text-foreground"
            >
              {e.howCta} →
            </Link>
            <Link
              href={href("/redakcja")}
              className="text-muted-foreground hover:text-foreground"
            >
              {e.editorialCta} →
            </Link>
            <Link
              href={href("/poradniki")}
              className="text-muted-foreground hover:text-foreground"
            >
              {e.guidesCta} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
