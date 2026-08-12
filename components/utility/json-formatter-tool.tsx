"use client"

import { useState } from "react"
import { Field, ResultBox, PrimaryButton, inputClass, copyText } from "./ui"

export function JsonFormatterTool() {
  const [input, setInput] = useState('{"hello":"world"}')
  const [output, setOutput] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  function format(minify: boolean) {
    setError(null)
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed, null, minify ? 0 : 2))
    } catch {
      setError("Nieprawidłowy JSON — sprawdź składnię.")
      setOutput("")
    }
  }

  return (
    <div className="space-y-4">
      <Field label="JSON">
        <textarea
          className={`${inputClass} min-h-40 font-mono`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Field>
      <div className="flex flex-wrap gap-2">
        <PrimaryButton onClick={() => format(false)}>Formatuj</PrimaryButton>
        <PrimaryButton onClick={() => format(true)}>Minifikuj</PrimaryButton>
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      {output && (
        <ResultBox>
          <pre className="max-h-80 overflow-auto whitespace-pre-wrap font-mono text-xs">
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
