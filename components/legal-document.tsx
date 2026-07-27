import type { ReactNode } from "react"
import {
  ContentPageShell,
  ContentSection,
} from "@/components/content-page-shell"

export type LegalBlock = {
  title: string
  paragraphs?: string[]
  list?: string[]
  definitions?: { term: string; description: string }[]
  afterList?: string[]
}

export type LegalDocumentData = {
  eyebrow: string
  title: string
  intro: string
  lastUpdated?: string
  sections: LegalBlock[]
  footerNote?: string
}

const emailLink = (
  <a
    href="mailto:badyltech@outlook.com"
    className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
  >
    badyltech@outlook.com
  </a>
)

/** Renders {{email}} placeholder as a mailto link. */
function renderText(text: string): ReactNode {
  if (!text.includes("{{email}}")) return text
  const parts = text.split("{{email}}")
  return parts.flatMap((part, i) =>
    i < parts.length - 1 ? [part, emailLink] : [part],
  )
}

export function LegalDocument({ doc }: { doc: LegalDocumentData }) {
  return (
    <ContentPageShell eyebrow={doc.eyebrow} title={doc.title} intro={doc.intro}>
      {doc.lastUpdated && (
        <p className="-mt-6 text-sm text-muted-foreground">{doc.lastUpdated}</p>
      )}

      {doc.sections.map((section) => (
        <ContentSection key={section.title} title={section.title}>
          {section.paragraphs?.map((p) => (
            <p key={p}>{renderText(p)}</p>
          ))}

          {section.definitions && section.definitions.length > 0 && (
            <dl className="space-y-4">
              {section.definitions.map((d) => (
                <div key={d.term}>
                  <dt className="font-medium text-foreground">{d.term}</dt>
                  <dd className="mt-1 leading-relaxed text-muted-foreground">
                    {renderText(d.description)}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          {section.list && section.list.length > 0 && (
            <ul className="list-disc space-y-2 pl-6">
              {section.list.map((item) => (
                <li key={item}>{renderText(item)}</li>
              ))}
            </ul>
          )}

          {section.afterList?.map((p) => (
            <p key={p}>{renderText(p)}</p>
          ))}
        </ContentSection>
      ))}

      {doc.footerNote && (
        <p className="border-t border-white/10 pt-8 text-sm leading-relaxed text-muted-foreground">
          {renderText(doc.footerNote)}
        </p>
      )}
    </ContentPageShell>
  )
}
