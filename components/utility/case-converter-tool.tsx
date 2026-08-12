"use client"

import { useMemo, useState } from "react"
import { Field, ResultBox, PrimaryButton, copyText, inputClass } from "./ui"

type Mode = "upper" | "lower" | "title" | "sentence"

function convert(text: string, mode: Mode): string {
  switch (mode) {
    case "upper":
      return text.toUpperCase()
    case "lower":
      return text.toLowerCase()
    case "title":
      return text.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    case "sentence":
      return text.replace(/(^\s*\w|[.!?]\s+\w)/g, (c) => c.toUpperCase())
  }
}

export function CaseConverterTool() {
  const [input, setInput] = useState("")
  const [mode, setMode] = useState<Mode>("upper")
  const [copied, setCopied] = useState(false)
  const output = useMemo(() => convert(input, mode), [input, mode])

  return (
    <div className="space-y-4">
      <Field label="Tekst">
        <textarea
          className={`${inputClass} min-h-32`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Field>
      <Field label="Tryb">
        <select
          className={inputClass}
          value={mode}
          onChange={(e) => setMode(e.target.value as Mode)}
        >
          <option value="upper">WIELKIE LITERY</option>
          <option value="lower">małe litery</option>
          <option value="title">Title Case</option>
          <option value="sentence">Sentence case</option>
        </select>
      </Field>
      {output && (
        <ResultBox>
          <p className="whitespace-pre-wrap break-words">{output}</p>
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
