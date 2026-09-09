"use client"

import { useState } from "react"
import { Field, inputClass, selectClass, ResultBox, PrimaryButton, copyText } from "./ui"

export function UrlEncoderTool() {
  const [mode, setMode] = useState<"encode" | "decode">("encode")
  const [input, setInput] = useState("https://toolando.tech/tools?q=heic to jpg")
  const [copied, setCopied] = useState(false)

  let output = ""
  let error: string | null = null
  try {
    output = mode === "encode" ? encodeURIComponent(input) : decodeURIComponent(input)
  } catch {
    error = "Could not decode — check the input."
  }

  return (
    <div className="space-y-4">
      <Field label="Mode">
        <select className={selectClass} value={mode} onChange={(e) => setMode(e.target.value as typeof mode)}>
          <option value="encode">Encode</option>
          <option value="decode">Decode</option>
        </select>
      </Field>
      <Field label="Input">
        <textarea className={`${inputClass} min-h-28 font-mono text-xs`} value={input} onChange={(e) => setInput(e.target.value)} />
      </Field>
      {error ? (
        <p className="text-sm text-destructive">{error}</p>
      ) : (
        <ResultBox>
          <pre className="whitespace-pre-wrap break-all font-mono text-xs">{output}</pre>
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
        {copied ? "Copied" : "Copy"}
      </PrimaryButton>
    </div>
  )
}
