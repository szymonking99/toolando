import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowLeft, Wrench } from "lucide-react"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { localeHref } from "@/lib/i18n/href"
import {
  AUDIENCE_IDS,
  getAudienceToolkit,
} from "@/lib/audiences"
import { getTool } from "@/lib/tools"
import { getSpecialTool } from "@/lib/special-tools"
import { getUtilityTool } from "@/lib/utility-tools"
import { getSpecialMeta } from "@/lib/i18n/tool-meta"
import { getUtilityMeta } from "@/lib/i18n/utility-meta"
import type { Locale } from "@/lib/i18n/config"

export function generateStaticParams() {
  return AUDIENCE_IDS.map((id) => ({ audience: id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; audience: string }>
}): Promise<Metadata> {
  const { locale, audience } = await params
  const dict = await getDictionary(locale)
  const items = (dict.audiences?.items ?? {}) as Record<
    string,
    { title: string; desc: string }
  >
  const copy = items[audience]
  return {
    title: `${copy?.title ?? audience} — Toolando.tech`,
    description: copy?.desc,
    alternates: { canonical: `/${locale}/dla/${audience}` },
  }
}

export default async function AudiencePage({
  params,
}: {
  params: Promise<{ locale: string; audience: string }>
}) {
  const { locale, audience } = await params
  const toolkit = getAudienceToolkit(audience)
  if (!toolkit) notFound()

  const dict = await getDictionary(locale)
  const items = (dict.audiences?.items ?? {}) as Record<
    string,
    { title: string; desc: string; intro?: string }
  >
  const copy = items[audience]
  const tools = resolveTools(toolkit.toolIds, locale as Locale)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar />
      <main className="mx-auto max-w-4xl px-4 pb-24 pt-32">
        <Link
          href={localeHref(locale, "/")}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Toolando
        </Link>
        <p className="mt-6 text-sm font-medium text-primary">
          {dict.audiences?.eyebrow ?? "Toolando for professionals"}
        </p>
        <h1 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {copy?.title ?? audience}
        </h1>
        <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {copy?.intro ?? copy?.desc}
        </p>

        <ul className="mt-10 space-y-3">
          {tools.map((tool) => (
            <li key={tool.id}>
              <Link
                href={localeHref(locale, tool.href)}
                className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-primary/40 hover:bg-white/[0.06]"
              >
                <span className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Wrench className="size-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-foreground">
                      {tool.title}
                    </span>
                    {tool.hint && (
                      <span className="text-xs text-muted-foreground">{tool.hint}</span>
                    )}
                  </span>
                </span>
                <span className="text-xs text-primary">{dict.audiences?.open ?? "Open"}</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </div>
  )
}

function resolveTools(ids: string[], locale: Locale) {
  return ids
    .map((id) => {
      if (id === "otworz") {
        return {
          id,
          href: "/otworz",
          title: "Universal File Assistant",
          hint: "Preview + recommended actions",
        }
      }
      const util = getUtilityTool(id)
      if (util) {
        const meta = getUtilityMeta(locale, util.id)
        return {
          id,
          href: `/tools/${id}`,
          title: meta.name,
          hint: meta.category,
        }
      }
      const special = getSpecialTool(id)
      if (special) {
        const meta = getSpecialMeta(locale, special.id)
        return {
          id,
          href: `/tools/${id}`,
          title: meta?.name ?? special.name,
          hint: meta?.category ?? special.category,
        }
      }
      const converter = getTool(id)
      if (converter) {
        return {
          id,
          href: `/tools/${id}`,
          title: `${converter.from.toUpperCase()} → ${converter.to.toUpperCase()}`,
          hint: converter.category,
        }
      }
      return null
    })
    .filter((t): t is NonNullable<typeof t> => Boolean(t))
}
