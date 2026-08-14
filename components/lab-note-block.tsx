import type { LabNote } from "@/lib/i18n/lab-notes"

export function LabNoteBlock({ note }: { note: LabNote }) {
  return (
    <section className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <h2 className="text-xl font-semibold tracking-tight text-foreground">
        {note.title}
      </h2>
      {note.paragraphs.map((p) => (
        <p
          key={p.slice(0, 48)}
          className="mt-3 text-pretty leading-relaxed text-muted-foreground"
        >
          {p}
        </p>
      ))}
    </section>
  )
}
