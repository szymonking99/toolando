"use client"

import { useState } from "react"
import { Field, ResultBox, PrimaryButton, copyText } from "./ui"

function generatePassword(
  length: number,
  opts: { upper: boolean; lower: boolean; digits: boolean; symbols: boolean },
) {
  const upper = "ABCDEFGHJKLMNPQRSTUVWXYZ"
  const lower = "abcdefghijkmnopqrstuvwxyz"
  const digits = "23456789"
  const symbols = "!@#$%^&*_-+=?"
  let alphabet = ""
  if (opts.upper) alphabet += upper
  if (opts.lower) alphabet += lower
  if (opts.digits) alphabet += digits
  if (opts.symbols) alphabet += symbols
  if (!alphabet) alphabet = lower + digits
  const bytes = new Uint32Array(length)
  crypto.getRandomValues(bytes)
  return Array.from(bytes, (b) => alphabet[b % alphabet.length]).join("")
}

export function PasswordTool() {
  const [length, setLength] = useState(16)
  const [upper, setUpper] = useState(true)
  const [lower, setLower] = useState(true)
  const [digits, setDigits] = useState(true)
  const [symbols, setSymbols] = useState(true)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)

  function regen() {
    setPassword(generatePassword(length, { upper, lower, digits, symbols }))
    setCopied(false)
  }

  return (
    <div className="space-y-4">
      <Field label={`Długość: ${length}`}>
        <input
          type="range"
          min={8}
          max={64}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full"
        />
      </Field>
      <div className="grid grid-cols-2 gap-2 text-sm">
        {(
          [
            ["Wielkie litery", upper, setUpper],
            ["Małe litery", lower, setLower],
            ["Cyfry", digits, setDigits],
            ["Symbole", symbols, setSymbols],
          ] as const
        ).map(([label, val, set]) => (
          <label key={label} className="flex items-center gap-2 text-foreground">
            <input
              type="checkbox"
              checked={val}
              onChange={(e) => set(e.target.checked)}
            />
            {label}
          </label>
        ))}
      </div>
      <PrimaryButton onClick={regen}>Generuj</PrimaryButton>
      {password && (
        <ResultBox className="flex flex-wrap items-center justify-between gap-2">
          <code className="break-all font-mono text-base">{password}</code>
          <PrimaryButton
            onClick={async () => {
              const ok = await copyText(password)
              setCopied(ok)
            }}
          >
            {copied ? "Skopiowano" : "Kopiuj"}
          </PrimaryButton>
        </ResultBox>
      )}
    </div>
  )
}
