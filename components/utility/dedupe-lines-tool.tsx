"use client"

import { useMemo, useState } from "react"
import { Field, ResultBox, PrimaryButton, copyText, inputClass } from "./ui"

export function DedupeLinesTool() {
  const [input, setInput] = useState("")
  const [caseSensitive, setCaseSensitive] = useState(false)
  const [trimLines, setTrimLines] = useState(true)
  const [copied, setCopied] = useState(false)

  const output = useMemo(() => {
    const lines = input.replace(/\r\n/g, "\n").split("\n")
    const seen = new Set<string>()
    const out: string[] = []
    for (let line of lines) {
      if (trimLines) line = line.trim()
      const key = caseSensitive ? line : line.toLowerCase()
      if (seen.has(key)) continue
      seen.add(key)
      out.push(line)
    }
    return out.join("\n")
  }, [input, caseSensitive, trimLines])

  const removed = useMemo(() => {
    const total = input.replace(/\r\n/g, "\n").split("\n").length
    const kept = output ? output.split("\n").length : 0
    return Math.max(0, total - kept)
  }, [input, output])

  return (
    <div className="space-y-4">
      <Field label="Lista linii">
        <textarea
          className={`${inputClass} min-h-40 font-mono`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Field>
      <div className="flex flex-wrap gap-4 text-sm">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={caseSensitive}
            onChange={(e) => setCaseSensitive(e.target.checked)}
          />
          Rozróżniaj wielkość liter
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={trimLines}
            onChange={(e) => setTrimLines(e.target.checked)}
          />
          Trim linii
        </label>
      </div>
      {input && (
        <ResultBox>
          <p className="text-xs text-muted-foreground mb-2">
            Usunięto {removed} duplikatów
          </p>
          <pre className="max-h-60 overflow-auto whitespace-pre-wrap font-mono text-xs">
            {output}
          </pre>
          <PrimaryButton
            className="mt-3"
            onClick={async () => {
              setCopied(await copyText(output))
              setTimeout(() => setCopied(false), 1500)
            }}
          >
            {copied ? "Skopiowano" : "Kopiuj"}
          </PrimaryButton>
        </ResultBox>
      )}
    </div>
  )
}
