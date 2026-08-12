"use client"

import { useEffect, useState } from "react"
import { Field, inputClass } from "./ui"

export function MarkdownPreviewTool() {
  const [markdown, setMarkdown] = useState("# Nagłówek\n\nTekst **pogrubiony** i [link](https://toolando.tech).")
  const [html, setHtml] = useState("")

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const { marked } = await import("marked")
      const out = await marked.parse(markdown)
      if (!cancelled) setHtml(typeof out === "string" ? out : "")
    })()
    return () => {
      cancelled = true
    }
  }, [markdown])

  return (
    <div className="space-y-4">
      <Field label="Markdown">
        <textarea
          className={`${inputClass} min-h-48 font-mono text-sm`}
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
      </Field>
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Podgląd
        </p>
        <article
          className="prose prose-invert max-w-none prose-headings:font-semibold prose-a:text-primary"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
