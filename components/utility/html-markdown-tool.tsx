"use client"

import { useMemo, useState } from "react"
import { marked } from "marked"
import { Field, inputClass, selectClass, ResultBox, PrimaryButton, copyText } from "./ui"

function htmlToMarkdown(html: string): string {
  let s = html
  s = s.replace(/<h1[^>]*>(.*?)<\/h1>/gi, "# $1\n\n")
  s = s.replace(/<h2[^>]*>(.*?)<\/h2>/gi, "## $1\n\n")
  s = s.replace(/<h3[^>]*>(.*?)<\/h3>/gi, "### $1\n\n")
  s = s.replace(/<strong[^>]*>(.*?)<\/strong>/gi, "**$1**")
  s = s.replace(/<b[^>]*>(.*?)<\/b>/gi, "**$1**")
  s = s.replace(/<em[^>]*>(.*?)<\/em>/gi, "*$1*")
  s = s.replace(/<i[^>]*>(.*?)<\/i>/gi, "*$1*")
  s = s.replace(/<code[^>]*>(.*?)<\/code>/gi, "`$1`")
  s = s.replace(/<a[^>]*href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gi, "[$2]($1)")
  s = s.replace(/<li[^>]*>(.*?)<\/li>/gi, "- $1\n")
  s = s.replace(/<\/?ul[^>]*>/gi, "\n")
  s = s.replace(/<\/?ol[^>]*>/gi, "\n")
  s = s.replace(/<br\s*\/?>/gi, "\n")
  s = s.replace(/<p[^>]*>(.*?)<\/p>/gi, "$1\n\n")
  s = s.replace(/<[^>]+>/g, "")
  return s.replace(/\n{3,}/g, "\n\n").trim()
}

export function HtmlMarkdownTool() {
  const [mode, setMode] = useState<"md-html" | "html-md">("md-html")
  const [input, setInput] = useState("# Hello\n\nWrite **Markdown** here.")
  const [copied, setCopied] = useState(false)

  const output = useMemo(() => {
    if (mode === "md-html") return marked.parse(input, { async: false }) as string
    return htmlToMarkdown(input)
  }, [input, mode])

  return (
    <div className="space-y-4">
      <Field label="Direction">
        <select
          className={selectClass}
          value={mode}
          onChange={(e) => {
            const next = e.target.value as typeof mode
            setMode(next)
            setInput(next === "md-html" ? "# Hello\n\nWrite **Markdown** here." : "<h1>Hello</h1><p>Write <b>HTML</b> here.</p>")
          }}
        >
          <option value="md-html">Markdown → HTML</option>
          <option value="html-md">HTML → Markdown</option>
        </select>
      </Field>
      <Field label="Input">
        <textarea className={`${inputClass} min-h-36 font-mono text-xs`} value={input} onChange={(e) => setInput(e.target.value)} />
      </Field>
      <ResultBox>
        <pre className="max-h-72 overflow-auto whitespace-pre-wrap break-all font-mono text-xs">{output}</pre>
      </ResultBox>
      {mode === "md-html" && (
        <div
          className="prose prose-invert max-w-none rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm"
          dangerouslySetInnerHTML={{ __html: output }}
        />
      )}
      <PrimaryButton
        type="button"
        onClick={async () => {
          if (await copyText(output)) {
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
          }
        }}
      >
        {copied ? "Copied" : "Copy result"}
      </PrimaryButton>
    </div>
  )
}
