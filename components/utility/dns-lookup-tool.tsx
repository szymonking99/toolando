"use client"

import { useState } from "react"
import { Field, ResultBox, PrimaryButton } from "./ui"

type DnsRecord = { type: string; value: string; ttl?: number }

export function DnsLookupTool() {
  const [domain, setDomain] = useState("")
  const [recordType, setRecordType] = useState("A")
  const [loading, setLoading] = useState(false)
  const [records, setRecords] = useState<DnsRecord[]>([])
  const [error, setError] = useState("")

  async function run() {
    const target = domain.trim()
    if (!target) return
    setLoading(true)
    setError("")
    setRecords([])
    try {
      const res = await fetch("/api/network/dns", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain: target, type: recordType }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Błąd")
      setRecords(data.records)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <Field label="Domena">
        <input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="np. example.com"
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
          onKeyDown={(e) => e.key === "Enter" && run()}
        />
      </Field>
      <Field label="Typ rekordu">
        <select
          value={recordType}
          onChange={(e) => setRecordType(e.target.value)}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
        >
          {["A", "AAAA", "CNAME", "MX", "NS", "TXT", "SOA"].map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>
      <PrimaryButton onClick={run} disabled={loading}>
        {loading ? "Szukam..." : "Sprawdź DNS"}
      </PrimaryButton>
      {error && <p className="text-sm text-destructive">{error}</p>}
      {records.length > 0 && (
        <ResultBox>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="py-1 pr-4">Typ</th>
                  <th className="py-1 pr-4">Wartość</th>
                  <th className="py-1">TTL</th>
                </tr>
              </thead>
              <tbody>
                {records.map((r, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-1 pr-4 font-mono">{r.type}</td>
                    <td className="py-1 pr-4 break-all">{r.value}</td>
                    <td className="py-1">{r.ttl ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ResultBox>
      )}
    </div>
  )
}
