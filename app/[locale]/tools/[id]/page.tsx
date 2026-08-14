import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, Wrench } from "lucide-react"
import { tools, getTool } from "@/lib/tools"
import { specialTools, getSpecialTool } from "@/lib/special-tools"
import { aiTools, getAiTool } from "@/lib/ai-tools"
import { utilityTools, getUtilityTool } from "@/lib/utility-tools"
import { ToolPageChrome } from "@/components/tool-page-chrome"
import { ToolConverter } from "@/components/tool-converter"
import { SpecialTool } from "@/components/special-tool"
import { AiTool } from "@/components/ai-tool"
import { UtilityTool } from "@/components/utility/utility-tool"
import { PremiumPaywall } from "@/components/premium-paywall"
import { getCurrentUser, isUserPremium } from "@/lib/user"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { getAiMeta } from "@/lib/i18n/ai-meta"
import { getUtilityMeta } from "@/lib/i18n/utility-meta"
import {
  getCategoryLabel,
  getConversionDescription,
  getSpecialMeta,
  getAiCategoryLabel,
} from "@/lib/i18n/tool-meta"
import { localeHref } from "@/lib/i18n/href"
import { AdSlot } from "@/components/ad-slot"
import { SiteFooter } from "@/components/site-footer"
import { ToolPageContentSection } from "@/components/tool-page-content"
import { getToolPageContent } from "@/lib/i18n/tool-content"
import { JsonLd } from "@/components/json-ld"
import { buildPageMetadata } from "@/lib/seo/metadata"
import {
  softwareApplicationSchema,
  breadcrumbSchema,
  howToSchema,
  faqPageSchema,
} from "@/lib/seo/structured-data"
import { isPubliclyIndexableTool } from "@/lib/seo/indexable-tools"
import { getLabNote } from "@/lib/i18n/lab-notes"
import { LabNoteBlock } from "@/components/lab-note-block"

/** Resolve a localized display name + description for any tool id. */
function resolveToolText(
  locale: string,
  id: string,
): { name: string; description: string } | undefined {
  const utility = getUtilityTool(id)
  if (utility) {
    const meta = getUtilityMeta(locale, utility.id)
    return { name: meta.name, description: meta.description }
  }
  const special = getSpecialTool(id)
  if (special) {
    const meta = getSpecialMeta(locale, special.id)
    return { name: meta.name, description: meta.description }
  }
  const ai = getAiTool(id)
  if (ai) {
    const meta = getAiMeta(locale)[ai.id]
    return { name: meta.name, description: meta.description }
  }
  const tool = getTool(id)
  if (tool) {
    return {
      name: tool.name,
      description: getConversionDescription(locale, tool.from, tool.to),
    }
  }
  return undefined
}

export function generateStaticParams() {
  return [
    ...tools.map((tool) => ({ id: tool.id })),
    ...specialTools.map((tool) => ({ id: tool.id })),
    ...aiTools.map((tool) => ({ id: tool.id })),
    ...utilityTools.map((tool) => ({ id: tool.id })),
  ]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale: string }>
}): Promise<Metadata> {
  const { id, locale } = await params
  const dict = await getDictionary(locale)
  const text = resolveToolText(locale, id)
  if (!text) return { title: `${dict.tool.notFound} — Toolando.tech` }
  const tool = getTool(id)
  const pageContent = tool ? getToolPageContent(locale, tool) : null
  const description = pageContent?.extendedDescription ?? text.description
  const title = `${text.name} — Toolando.tech`
  const noindex = !isPubliclyIndexableTool(id)
  const meta = buildPageMetadata({
    locale,
    path: `/tools/${id}`,
    title,
    description,
  })
  return {
    ...meta,
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  }
}

function ToolShell({
  locale,
  id,
  toolsLabel,
  backLabel,
  category,
  name,
  description,
  children,
}: {
  locale: string
  id: string
  toolsLabel: string
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
              Toolando.tech
            </span>
          </Link>
          <Link
            href={localeHref(locale, "/tools")}
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
        {/* Ad placement: below the tool, before related tools scroll away */}
        <AdSlot
          placement="tool"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL}
          className="mt-12 px-0"
        />
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
    const aiMeta = getAiMeta(locale)
    const aiText = aiMeta[ai.id]
    // Narzędzia AI są dostępne wyłącznie dla użytkowników Premium.
    const currentUser = await getCurrentUser()
    const hasPremium = currentUser ? await isUserPremium(currentUser.id) : false
    return (
      <div className="min-h-dvh">
        <JsonLd
          data={[
            softwareApplicationSchema({
              name: aiText.name,
              description: aiText.description,
              path: `/${locale}/tools/${id}`,
              locale,
            }),
            breadcrumbSchema([
              { name: "Toolando.tech", path: `/${locale}` },
              { name: dict.nav.allTools, path: `/${locale}/tools` },
              { name: aiText.name, path: `/${locale}/tools/${id}` },
            ]),
          ]}
        />
        <ToolShell
          locale={locale}
          id={id}
          toolsLabel={dict.nav.allTools}
          backLabel={dict.tool.back}
          category={getAiCategoryLabel(locale, ai.id)}
          name={aiText.name}
          description={aiText.description}
        >
          <section className="mt-8 rounded-2xl border border-primary/20 bg-primary/[0.04] p-6 backdrop-blur-md">
            {hasPremium ? (
              <AiTool tool={ai} />
            ) : (
              <PremiumPaywall
                isLoggedIn={Boolean(currentUser)}
                toolName={aiText.name}
              />
            )}
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
                      {aiMeta[t.id].name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {aiMeta[t.id].tagline}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </ToolShell>
        <SiteFooter />
      </div>
    )
  }

  const utility = getUtilityTool(id)
  if (utility) {
    const meta = getUtilityMeta(locale, utility.id)
    const related = utilityTools.filter((t) => t.id !== utility.id).slice(0, 6)
    const path = `/${locale}/tools/${id}`
    return (
      <div className="min-h-dvh">
        <JsonLd
          data={[
            softwareApplicationSchema({
              name: meta.name,
              description: meta.description,
              path,
              locale,
            }),
            breadcrumbSchema([
              { name: "Toolando.tech", path: `/${locale}` },
              { name: dict.nav.allTools, path: `/${locale}/tools` },
              { name: meta.name, path },
            ]),
            howToSchema({
              name: meta.name,
              description: meta.description,
              path,
              steps: meta.steps,
            }),
            faqPageSchema(meta.faq),
          ]}
        />
        <ToolShell
          locale={locale}
          id={id}
          toolsLabel={dict.nav.allTools}
          backLabel={dict.tool.back}
          category={meta.category}
          name={meta.name}
          description={meta.description}
        >
          <ToolPageChrome id={id} title={meta.name} localOnly />
          <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <UtilityTool tool={utility} />
          </section>

          <section className="mt-10 space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                {dict.tool.howToTitle}
              </h2>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
                {meta.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                {dict.tool.faqTitle}
              </h2>
              <dl className="mt-3 space-y-4">
                {meta.faq.map((item) => (
                  <div key={item.q}>
                    <dt className="text-sm font-medium text-foreground">{item.q}</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{item.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {related.length > 0 && (
            <section className="mt-12">
              <h2 className="text-lg font-semibold text-foreground">
                {dict.tool.otherTools}
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {related.map((t) => {
                  const m = getUtilityMeta(locale, t.id)
                  return (
                    <Link
                      key={t.id}
                      href={localeHref(locale, `/tools/${t.id}`)}
                      className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-primary/40 hover:bg-white/[0.06]"
                    >
                      <span className="text-sm font-medium text-foreground">
                        {m.name}
                      </span>
                      <span className="text-xs text-muted-foreground">{m.category}</span>
                    </Link>
                  )
                })}
              </div>
            </section>
          )}
        </ToolShell>
        <SiteFooter />
      </div>
    )
  }

  const special = getSpecialTool(id)
  if (special) {
    const relatedSpecial = specialTools.filter(
      (t) => t.id !== special.id && isPubliclyIndexableTool(t.id),
    )
    const specialText = getSpecialMeta(locale, special.id)
    const specialLab = getLabNote(locale, special.id)
    return (
      <div className="min-h-dvh">
        <JsonLd
          data={[
            softwareApplicationSchema({
              name: specialText.name,
              description: specialText.description,
              path: `/${locale}/tools/${id}`,
              locale,
            }),
            breadcrumbSchema([
              { name: "Toolando.tech", path: `/${locale}` },
              { name: dict.nav.allTools, path: `/${locale}/tools` },
              { name: specialText.name, path: `/${locale}/tools/${id}` },
            ]),
          ]}
        />
        <ToolShell
          locale={locale}
          id={id}
          toolsLabel={dict.nav.allTools}
          backLabel={dict.tool.back}
          category={specialText.category}
          name={specialText.name}
          description={specialText.description}
        >
          <ToolPageChrome id={id} title={specialText.name} />
          <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <SpecialTool tool={special} />
          </section>

          {specialLab ? <LabNoteBlock note={specialLab} /> : null}

          {relatedSpecial.length > 0 && (
            <section className="mt-12">
              <h2 className="text-lg font-semibold text-foreground">
                {dict.tool.otherTools}
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {relatedSpecial.map((t) => {
                  const meta = getSpecialMeta(locale, t.id)
                  return (
                    <Link
                      key={t.id}
                      href={localeHref(locale, `/tools/${t.id}`)}
                      className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-primary/40 hover:bg-white/[0.06]"
                    >
                      <span className="text-sm font-medium text-foreground">
                        {meta.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {meta.category}
                      </span>
                    </Link>
                  )
                })}
              </div>
            </section>
          )}
        </ToolShell>
        <SiteFooter />
      </div>
    )
  }

  const tool = getTool(id)

  if (!tool) return notFound()

  const related = tools
    .filter(
      (t) =>
        t.category === tool.category &&
        t.id !== tool.id &&
        isPubliclyIndexableTool(t.id),
    )
    .slice(0, 4)

  const pageContent = getToolPageContent(locale, tool)
  const path = `/${locale}/tools/${id}`
  const labNote = getLabNote(locale, id)

  return (
    <div className="min-h-dvh">
      <JsonLd
        data={[
          softwareApplicationSchema({
            name: tool.name,
            description: pageContent.extendedDescription,
            path,
            locale,
          }),
          breadcrumbSchema([
            { name: "Toolando.tech", path: `/${locale}` },
            { name: dict.nav.allTools, path: `/${locale}/tools` },
            { name: tool.name, path },
          ]),
          howToSchema({
            name: tool.name,
            description: pageContent.extendedDescription,
            path,
            steps: pageContent.steps,
          }),
          faqPageSchema(pageContent.faq),
        ]}
      />
      <ToolShell
        locale={locale}
        id={id}
        toolsLabel={dict.nav.allTools}
        backLabel={dict.tool.back}
        category={getCategoryLabel(locale, tool.category)}
        name={tool.name}
        description={pageContent.extendedDescription}
      >
        <ToolPageChrome
          id={id}
          title={`${tool.from.toUpperCase()} → ${tool.to.toUpperCase()}`}
        />
        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
          <ToolConverter tool={tool} />
        </section>

        <ToolPageContentSection
          content={pageContent}
          locale={locale}
          labels={{
            howToTitle: dict.tool.howToTitle,
            aboutSource: dict.tool.aboutSource,
            aboutTarget: dict.tool.aboutTarget,
            whenToUseTitle: dict.tool.whenToUseTitle,
            faqTitle: dict.tool.faqTitle,
            qualityTitle: dict.tool.qualityTitle,
            tipsTitle: dict.tool.tipsTitle,
            readFormatGuide: dict.tool.readFormatGuide,
          }}
          sourceFormat={tool.from}
          targetFormat={tool.to}
          labNote={labNote}
        />

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
      <SiteFooter />
    </div>
  )
}
