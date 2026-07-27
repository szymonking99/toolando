import Link from "next/link"
import type { ToolPageContent } from "@/lib/i18n/tool-content"
import { localeHref } from "@/lib/i18n/href"

type Labels = {
  howToTitle: string
  aboutSource: string
  aboutTarget: string
  whenToUseTitle: string
  faqTitle: string
  qualityTitle: string
  tipsTitle: string
  readFormatGuide: string
}

export function ToolPageContentSection({
  content,
  labels,
  locale,
  sourceFormat,
  targetFormat,
}: {
  content: ToolPageContent
  labels: Labels
  locale: string
  sourceFormat: string
  targetFormat: string
}) {
  return (
    <article className="mt-12 space-y-10 border-t border-white/10 pt-10">
      <section>
        <p className="text-pretty leading-relaxed text-muted-foreground">
          {content.extendedDescription}
        </p>
      </section>

      {content.qualityNote && (
        <section className="rounded-xl border border-primary/20 bg-primary/[0.04] p-5">
          <h2 className="text-lg font-semibold text-foreground">
            {labels.qualityTitle}
          </h2>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            {content.qualityNote}
          </p>
        </section>
      )}

      <section>
        <h2 className="text-xl font-semibold text-foreground">
          {labels.howToTitle}
        </h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 leading-relaxed text-muted-foreground">
          {content.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground">
          {labels.whenToUseTitle}
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground">
          {content.whenToUse.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <div className="grid gap-8 sm:grid-cols-2">
        <section>
          <h2 className="text-lg font-semibold text-foreground">
            {labels.aboutSource} ({sourceFormat.toUpperCase()})
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {content.sourceFormatInfo}
          </p>
          <Link
            href={localeHref(locale, `/formaty/${content.sourceFormatId}`)}
            className="mt-3 inline-flex text-sm font-medium text-primary hover:underline"
          >
            {labels.readFormatGuide} →
          </Link>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground">
            {labels.aboutTarget} ({targetFormat.toUpperCase()})
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {content.targetFormatInfo}
          </p>
          <Link
            href={localeHref(locale, `/formaty/${content.targetFormatId}`)}
            className="mt-3 inline-flex text-sm font-medium text-primary hover:underline"
          >
            {labels.readFormatGuide} →
          </Link>
        </section>
      </div>

      {content.tips.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            {labels.tipsTitle}
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground">
            {content.tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <h2 className="text-xl font-semibold text-foreground">
          {labels.faqTitle}
        </h2>
        <dl className="mt-4 space-y-6">
          {content.faq.map((item, i) => (
            <div key={i}>
              <dt className="font-medium text-foreground">{item.q}</dt>
              <dd className="mt-1.5 leading-relaxed text-muted-foreground">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </article>
  )
}
