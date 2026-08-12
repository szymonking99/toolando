"use client"

import { useMemo, useState } from "react"
import { Field, ResultBox, inputClass } from "./ui"

function scorePassword(pw: string) {
  let score = 0
  if (pw.length >= 8) score += 1
  if (pw.length >= 12) score += 1
  if (pw.length >= 16) score += 1
  if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) score += 1
  if (/\d/.test(pw)) score += 1
  if (/[^a-zA-Z0-9]/.test(pw)) score += 1
  if (/(.)\1{2,}/.test(pw)) score -= 1
  if (/^(12345|password|qwerty|haslo)/i.test(pw)) score -= 2
  const clamped = Math.max(0, Math.min(6, score))
  const labels = ["Bardzo słabe", "Słabe", "Średnie", "Dobre", "Silne", "Bardzo silne", "Doskonałe"]
  return { score: clamped, label: labels[clamped] }
}

export function PasswordStrengthTool() {
  const [password, setPassword] = useState("")
  const analysis = useMemo(() => scorePassword(password), [password])

  return (
    <div className="space-y-4">
      <Field label="Hasło do oceny">
        <input
          className={inputClass}
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
        />
      </Field>
      {password && (
        <ResultBox>
          <p className="font-medium">{analysis.label}</p>
          <div className="mt-3 flex gap-1">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full ${
                  i <= analysis.score ? "bg-primary" : "bg-white/10"
                }`}
              />
            ))}
          </div>
          <ul className="mt-4 space-y-1 text-xs text-muted-foreground">
            <li>{password.length >= 12 ? "✓" : "○"} Co najmniej 12 znaków</li>
            <li>{/[A-Z]/.test(password) && /[a-z]/.test(password) ? "✓" : "○"} Małe i wielkie litery</li>
            <li>{/\d/.test(password) ? "✓" : "○"} Cyfry</li>
            <li>{/[^a-zA-Z0-9]/.test(password) ? "✓" : "○"} Znaki specjalne</li>
          </ul>
        </ResultBox>
      )}
    </div>
  )
}
