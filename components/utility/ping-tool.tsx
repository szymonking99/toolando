"use client"

import { useState } from "react"
import { Field, ResultBox, PrimaryButton } from "./ui"

type PingResult = {
  host: string
  ip: string
  times: number[]
  avg: number
  min: number
  max: number
}

export function PingTool() {
  const [host, setHost] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<PingResult | null>(null)
  const [error, setError] = useState("")

  async function run() {
    const target = host.trim()
    if (!target) return
    setLoading(true)
    setError("")
    setResult(null)
    try {
      const res = await fetch("/api/network/ping", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ host: target }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Błąd")
      setResult(data)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <Field label="Host lub adres IP">
        <input
          type="text"
          value={host}
          onChange={(e) => setHost(e.target.value)}
          placeholder="np. google.com"
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
          onKeyDown={(e) => e.key === "Enter" && run()}
        />
      </Field>
      <PrimaryButton onClick={run} disabled={loading}>
        {loading ? "Pinguję..." : "Ping"}
      </PrimaryButton>
      {error && <p className="text-sm text-destructive">{error}</p>}
      {result && (
        <ResultBox>
          <div className="space-y-1 text-sm">
            <p>
              <strong>Host:</strong> {result.host} ({result.ip})
            </p>
            <p>
              <strong>Czasy:</strong>{" "}
              {result.times.map((t) => `${t}ms`).join(", ")}
            </p>
            <p>
              <strong>Min / Avg / Max:</strong> {result.min}ms / {result.avg}ms /{" "}
              {result.max}ms
            </p>
          </div>
        </ResultBox>
      )}
    </div>
  )
}
