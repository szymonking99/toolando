"use client"

import { useState } from "react"
import { ResultBox, PrimaryButton } from "./ui"

export function SpeedtestTool() {
  const [loading, setLoading] = useState(false)
  const [download, setDownload] = useState<number | null>(null)
  const [latency, setLatency] = useState<number | null>(null)
  const [error, setError] = useState("")

  async function run() {
    setLoading(true)
    setError("")
    setDownload(null)
    setLatency(null)

    try {
      // Measure latency
      const t0 = performance.now()
      await fetch("/api/network/speedtest?size=0", { cache: "no-store" })
      const ping = Math.round(performance.now() - t0)
      setLatency(ping)

      // Measure download (~2MB)
      const start = performance.now()
      const res = await fetch("/api/network/speedtest?size=2000000", {
        cache: "no-store",
      })
      const blob = await res.blob()
      const elapsed = (performance.now() - start) / 1000
      const bits = blob.size * 8
      const mbps = bits / elapsed / 1_000_000
      setDownload(Math.round(mbps * 100) / 100)
    } catch (e: any) {
      setError(e.message || "Nie udało się zmierzyć prędkości")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Test mierzy prędkość pobierania danych z serwera i opóźnienie (latency).
      </p>
      <PrimaryButton onClick={run} disabled={loading}>
        {loading ? "Testowanie..." : "Uruchom test prędkości"}
      </PrimaryButton>
      {error && <p className="text-sm text-destructive">{error}</p>}
      {(download !== null || latency !== null) && (
        <ResultBox>
          <div className="grid grid-cols-2 gap-4 text-center">
            {latency !== null && (
              <div>
                <p className="text-2xl font-bold">{latency} ms</p>
                <p className="text-xs text-muted-foreground">Latency</p>
              </div>
            )}
            {download !== null && (
              <div>
                <p className="text-2xl font-bold">{download} Mbps</p>
                <p className="text-xs text-muted-foreground">Download</p>
              </div>
            )}
          </div>
        </ResultBox>
      )}
    </div>
  )
}
