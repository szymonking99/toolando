import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, Wrench } from "lucide-react"
import { tools, getTool } from "@/lib/tools"
import { specialTools, getSpecialTool } from "@/lib/special-tools"
import { aiTools, getAiTool } from "@/lib/ai-tools"
import { ToolConverter } from "@/components/tool-converter"
import { SpecialTool } from "@/components/special-tool"
import { AiTool } from "@/components/ai-tool"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { localeHref } from "@/lib/i18n/href"

export function generateStaticParams() {
  return [
    ...tools.map((tool) => ({ id: tool.id })),
    ...specialTools.map((tool) => ({ id: tool.id })),
    ...aiTools.map((tool) => ({ id: tool.id })),
  ]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale: string }>
}): Promise<Metadata> {
  const { id, locale } = await params
  const dict = await getDictionary(locale)
  const tool = getTool(id) ?? getSpecialTool(id) ?? getAiTool(id)
  if (!tool) return { title: `${dict.tool.notFound} — Toolando` }
  return {
    title: `${tool.name} — Toolando`,
    description: tool.description,
    alternates: { canonical: `/${locale}/tools/${id}` },
  }
}

const CATEGORY_LABELS: Record<string, string> = {
  audio: "Audio",
  video: "Wideo",
  image: "Obrazy",
  pdf: "PDF",
  doc: "Dokumenty",
  data: "Dane",
  archive: "Archiwa",
  font: "Fonty",
}

function ToolShell({
  locale,
  backLabel,
  category,
  name,
  description,
  children,
}: {
  locale: string
  backLabel: string
  category: string
  name: string
  description: string
  children: React.ReactNode
}) {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <nav className="mx-auto flex max-w-4xl items-center justify-between rounded-2xl border border-white/10 bg-background/60 px-5 py-3 backdrop-blur-xl">
          <Link href={localeHref(locale, "/")} className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
              <Wrench className="size-4" aria-hidden="true" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Toolando
            </span>
          </Link>
          <Link
            href={localeHref(locale, "/#narzedzia")}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            {backLabel}
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-4 pb-24 pt-32">
        <div className="mb-2 text-sm font-medium text-primary">{category}</div>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {name}
        </h1>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
        {children}
      </main>
    </>
  )
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>
}) {
  const { id, locale } = await params
  const dict = await getDictionary(locale)

  const ai = getAiTool(id)
  if (ai) {
    const relatedAi = aiTools.filter((t) => t.id !== ai.id)
    return (
      <div className="min-h-dvh">
        <ToolShell
          locale={locale}
          backLabel={dict.tool.back}
          category={ai.category}
          name={ai.name}
          description={ai.description}
        >
          <section className="mt-8 rounded-2xl border border-primary/20 bg-primary/[0.04] p-6 backdrop-blur-md">
            <AiTool tool={ai} />
          </section>

          {relatedAi.length > 0 && (
            <section className="mt-12">
              <h2 className="text-lg font-semibold text-foreground">
                {dict.tool.otherTools}
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {relatedAi.map((t) => (
                  <Link
                    key={t.id}
                    href={localeHref(locale, `/tools/${t.id}`)}
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-primary/40 hover:bg-white/[0.06]"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {t.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {t.tagline}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </ToolShell>
      </div>
    )
  }

  const special = getSpecialTool(id)
  if (special) {
    const relatedSpecial = specialTools.filter((t) => t.id !== special.id)
    return (
      <div className="min-h-dvh">
        <ToolShell
          locale={locale}
          backLabel={dict.tool.back}
          category={special.category}
          name={special.name}
          description={special.description}
        >
          <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <SpecialTool tool={special} />
          </section>

          {relatedSpecial.length > 0 && (
            <section className="mt-12">
              <h2 className="text-lg font-semibold text-foreground">
                {dict.tool.otherTools}
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {relatedSpecial.map((t) => (
                  <Link
                    key={t.id}
                    href={localeHref(locale, `/tools/${t.id}`)}
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-primary/40 hover:bg-white/[0.06]"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {t.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {t.category}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </ToolShell>
      </div>
    )
  }

  const tool = getTool(id)

  if (!tool) return notFound()

  const related = tools
    .filter((t) => t.category === tool.category && t.id !== tool.id)
    .slice(0, 4)

  return (
    <div className="min-h-dvh">
      <ToolShell
        locale={locale}
        backLabel={dict.tool.back}
        category={CATEGORY_LABELS[tool.category] ?? tool.category}
        name={tool.name}
        description={tool.description}
      >
        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
          <ToolConverter tool={tool} />
        </section>

        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="text-lg font-semibold text-foreground">
              {dict.tool.relatedTools}
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {related.map((t) => (
                <Link
                  key={t.id}
                  href={localeHref(locale, `/tools/${t.id}`)}
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-primary/40 hover:bg-white/[0.06]"
                >
                  <span className="text-sm font-medium text-foreground">
                    {t.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {t.from.toUpperCase()} → {t.to.toUpperCase()}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </ToolShell>
    </div>
  )
}
