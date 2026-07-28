"use client"

import { useState } from "react"
import { Field, inputClass, ResultBox, PrimaryButton, copyText } from "./ui"

function encodeUtf8(text: string) {
  return btoa(unescape(encodeURIComponent(text)))
}

function decodeUtf8(b64: string) {
  return decodeURIComponent(escape(atob(b64)))
}

export function Base64Tool() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [error, setError] = useState<string | null>(null)

  function encode() {
    try {
      setError(null)
      setOutput(encodeUtf8(input))
    } catch {
      setError("Nie udało się zakodować.")
    }
  }

  function decode() {
    try {
      setError(null)
      setOutput(decodeUtf8(input.trim()))
    } catch {
      setError("Nieprawidłowy Base64.")
    }
  }

  return (
    <div className="space-y-4">
      <Field label="Wejście">
        <textarea
          className={`${inputClass} min-h-28 resize-y`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Field>
      <div className="flex flex-wrap gap-2">
        <PrimaryButton onClick={encode}>Encode</PrimaryButton>
        <PrimaryButton onClick={decode}>Decode</PrimaryButton>
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      {output && (
        <ResultBox>
          <pre className="whitespace-pre-wrap break-all font-mono text-xs">{output}</pre>
          <PrimaryButton className="mt-3" onClick={() => void copyText(output)}>
            Kopiuj
          </PrimaryButton>
        </ResultBox>
      )}
    </div>
  )
}
