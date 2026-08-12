"use client"

import { useMemo, useState } from "react"
import { Field, ResultBox, inputClass } from "./ui"

function decodePart(part: string): unknown {
  const padded = part.replace(/-/g, "+").replace(/_/g, "/")
  const pad = padded.length % 4 === 0 ? padded : padded + "=".repeat(4 - (padded.length % 4))
  const json = atob(pad)
  return JSON.parse(json)
}

export function JwtTool() {
  const [token, setToken] = useState("")
  const parsed = useMemo(() => {
    const t = token.trim()
    if (!t) return null
    const parts = t.split(".")
    if (parts.length < 2) return { error: "Token JWT musi mieć co najmniej header i payload." }
    try {
      return {
        header: decodePart(parts[0]),
        payload: decodePart(parts[1]),
        signature: parts[2] ?? "(brak)",
      }
    } catch {
      return { error: "Nie udało się zdekodować tokena — sprawdź format Base64URL." }
    }
  }, [token])

  return (
    <div className="space-y-4">
      <Field label="Token JWT">
        <textarea
          className={`${inputClass} min-h-28 font-mono text-xs`}
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="eyJhbGciOiJIUzI1NiIs..."
        />
      </Field>
      {parsed && (
        "error" in parsed ? (
          <p className="text-sm text-destructive">{parsed.error}</p>
        ) : (
          <div className="space-y-3">
            <ResultBox>
              <p className="mb-2 text-xs font-semibold uppercase text-muted-foreground">Header</p>
              <pre className="overflow-auto font-mono text-xs">{JSON.stringify(parsed.header, null, 2)}</pre>
            </ResultBox>
            <ResultBox>
              <p className="mb-2 text-xs font-semibold uppercase text-muted-foreground">Payload</p>
              <pre className="overflow-auto font-mono text-xs">{JSON.stringify(parsed.payload, null, 2)}</pre>
            </ResultBox>
            <ResultBox>
              <p className="mb-2 text-xs font-semibold uppercase text-muted-foreground">Signature</p>
              <p className="break-all font-mono text-xs">{String(parsed.signature)}</p>
            </ResultBox>
          </div>
        )
      )}
    </div>
  )
}
