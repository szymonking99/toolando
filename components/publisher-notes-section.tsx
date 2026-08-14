import { getPublisherNotes } from "@/lib/i18n/publisher-notes"

export function PublisherNotesSection({ locale }: { locale: string }) {
  const notes = getPublisherNotes(locale)

  return (
    <section className="border-t border-white/10 px-4 py-20">
      <article className="mx-auto max-w-3xl">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {notes.title}
        </h2>
        <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
          {notes.lead}
        </p>
        {notes.sections.map((section) => (
          <div key={section.title} className="mt-12">
            <h3 className="text-xl font-semibold text-foreground">
              {section.title}
            </h3>
            {section.paragraphs.map((p) => (
              <p
                key={p.slice(0, 48)}
                className="mt-3 text-pretty leading-relaxed text-muted-foreground"
              >
                {p}
              </p>
            ))}
          </div>
        ))}
      </article>
    </section>
  )
}
