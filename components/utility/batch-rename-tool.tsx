"use client"

import { useMemo, useState } from "react"
import { Field, ResultBox, PrimaryButton, copyText, inputClass } from "./ui"

function applyPattern(name: string, pattern: string, index: number): string {
  const ext = name.includes(".") ? name.slice(name.lastIndexOf(".")) : ""
  const stem = ext ? name.slice(0, -ext.length) : name
  return pattern
    .replace(/\{name\}/g, stem)
    .replace(/\{ext\}/g, ext.replace(/^\./, ""))
    .replace(/\{index\}/g, String(index))
    .replace(/\{index2\}/g, String(index).padStart(2, "0"))
    .replace(/\{index3\}/g, String(index).padStart(3, "0"))
    + (pattern.includes("{ext}") ? "" : ext)
}

export function BatchRenameTool() {
  const [names, setNames] = useState("photo-1.jpg\nphoto-2.jpg\nphoto-3.jpg")
  const [pattern, setPattern] = useState("img-{index2}{ext}")
  const [startIndex, setStartIndex] = useState("1")
  const [copied, setCopied] = useState(false)

  const lines = useMemo(
    () => names.replace(/\r\n/g, "\n").split("\n").filter((l) => l.trim()),
    [names],
  )

  const output = useMemo(() => {
    const start = Number(startIndex) || 1
    return lines
      .map((line, i) => `${line.trim()} → ${applyPattern(line.trim(), pattern, start + i)}`)
      .join("\n")
  }, [lines, pattern, startIndex])

  const renamedOnly = useMemo(() => {
    const start = Number(startIndex) || 1
    return lines.map((line, i) => applyPattern(line.trim(), pattern, start + i)).join("\n")
  }, [lines, pattern, startIndex])

  return (
    <div className="space-y-4">
      <Field label="Lista plików (jeden w linii)">
        <textarea
          className={`${inputClass} min-h-32 font-mono text-xs`}
          value={names}
          onChange={(e) => setNames(e.target.value)}
        />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Wzorzec ({name}, {ext}, {index}, {index2})">
          <input className={inputClass} value={pattern} onChange={(e) => setPattern(e.target.value)} />
        </Field>
        <Field label="Indeks startowy">
          <input className={inputClass} value={startIndex} onChange={(e) => setStartIndex(e.target.value)} />
        </Field>
      </div>
      {lines.length > 0 && (
        <ResultBox>
          <pre className="max-h-60 overflow-auto whitespace-pre-wrap font-mono text-xs">{output}</pre>
          <PrimaryButton
            className="mt-3"
            onClick={async () => {
              setCopied(await copyText(renamedOnly))
              setTimeout(() => setCopied(false), 1500)
            }}
          >
            {copied ? "Skopiowano" : "Kopiuj nowe nazwy"}
          </PrimaryButton>
        </ResultBox>
      )}
    </div>
  )
}
