"use client"

import Link from "next/link"
import { MessageSquarePlus } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"

export function ToolRequestBanner() {
  const { t, href } = useI18n()

  return (
    <section className="px-4 py-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center sm:flex-row sm:text-left">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
          <MessageSquarePlus className="size-6" aria-hidden="true" />
        </span>
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-foreground">
            {t.toolRequest.title}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">{t.toolRequest.body}</p>
        </div>
        <Link
          href={href("/kontakt?topic=tool-request")}
          className="shrink-0 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
        >
          {t.toolRequest.cta}
        </Link>
      </div>
    </section>
  )
}
