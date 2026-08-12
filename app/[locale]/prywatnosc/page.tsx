"use client"

import Link from "next/link"
import { Shield, Laptop, Server, Sparkles } from "lucide-react"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { useI18n } from "@/components/i18n-provider"

export default function PrivacyFirstPage() {
  const { t, href } = useI18n()

  const blocks = [
    { icon: Laptop, title: t.privacyPage.localTitle, body: t.privacyPage.localBody },
    { icon: Server, title: t.privacyPage.serverTitle, body: t.privacyPage.serverBody },
    { icon: Sparkles, title: t.privacyPage.aiTitle, body: t.privacyPage.aiBody },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar />
      <main className="px-4 pb-20 pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-200">
            <Shield className="size-4" aria-hidden="true" />
            {t.privacyPage.badge}
          </span>
          <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">{t.privacyPage.title}</h1>
          <p className="mt-3 text-muted-foreground">{t.privacyPage.subtitle}</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6">
          {blocks.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <Icon className="size-8 text-primary" aria-hidden="true" />
              <h2 className="mt-4 text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 text-center">
          <Link
            href={href("/polityka-prywatnosci")}
            className="text-sm font-medium text-primary hover:underline"
          >
            {t.privacyPage.readPolicy} →
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  )
}
