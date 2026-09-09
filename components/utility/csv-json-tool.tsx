"use client"

import { useMemo, useState } from "react"
import { Field, inputClass, selectClass, ResultBox, PrimaryButton, copyText } from "./ui"

function csvToJson(text: string): string {
  const lines = text.trim().split(/\r?\n/).filter(Boolean)
  if (lines.length === 0) return "[]"
  const headers = splitCsvLine(lines[0]!)
  const rows = lines.slice(1).map((line) => {
    const cols = splitCsvLine(line)
    const obj: Record<string, string> = {}
    headers.forEach((h, i) => {
      obj[h] = cols[i] ?? ""
    })
    return obj
  })
  return JSON.stringify(rows, null, 2)
}

function splitCsvLine(line: string): string[] {
  const out: string[] = []
  let cur = ""
  let inQuotes = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]!
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        cur += '"'
        i++
      } else inQuotes = !inQuotes
    } else if (ch === "," && !inQuotes) {
      out.push(cur)
      cur = ""
    } else cur += ch
  }
  out.push(cur)
  return out.map((s) => s.trim())
}

function jsonToCsv(text: string): string {
  const data = JSON.parse(text) as unknown
  if (!Array.isArray(data) || data.length === 0) return ""
  const rows = data as Record<string, unknown>[]
  const headers = Array.from(
    rows.reduce((set, row) => {
      Object.keys(row).forEach((k) => set.add(k))
      return set
    }, new Set<string>()),
  )
  const escape = (v: unknown) => {
    const s = v == null ? "" : String(v)
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
  }
  return [headers.join(","), ...rows.map((r) => headers.map((h) => escape(r[h])).join(","))].join("\n")
}

export function CsvJsonTool() {
  const [mode, setMode] = useState<"csv-json" | "json-csv">("csv-json")
  const [input, setInput] = useState("name,role\nAda,engineer\nGrace,scientist")
  const [copied, setCopied] = useState(false)

  const { output, error } = useMemo(() => {
    try {
      if (mode === "csv-json") return { output: csvToJson(input), error: null as string | null }
      return { output: jsonToCsv(input), error: null as string | null }
    } catch (e) {
      return { output: "", error: e instanceof Error ? e.message : "Parse error" }
    }
  }, [input, mode])

  return (
    <div className="space-y-4">
      <Field label="Direction">
        <select className={selectClass} value={mode} onChange={(e) => setMode(e.target.value as typeof mode)}>
          <option value="csv-json">CSV → JSON</option>
          <option value="json-csv">JSON → CSV</option>
        </select>
      </Field>
      <Field label="Input">
        <textarea className={`${inputClass} min-h-36 font-mono text-xs`} value={input} onChange={(e) => setInput(e.target.value)} />
      </Field>
      {error ? (
        <p className="text-sm text-destructive">{error}</p>
      ) : (
        <ResultBox>
          <pre className="max-h-72 overflow-auto whitespace-pre-wrap break-all font-mono text-xs">{output}</pre>
        </ResultBox>
      )}
      <PrimaryButton
        type="button"
        disabled={!!error}
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
