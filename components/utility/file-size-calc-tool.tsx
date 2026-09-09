"use client"

import { useMemo, useState } from "react"
import { Field, inputClass, selectClass, ResultBox } from "./ui"

export function FileSizeCalcTool() {
  const [mode, setMode] = useState<"bitrate" | "transfer">("bitrate")
  const [bitrate, setBitrate] = useState("5000")
  const [duration, setDuration] = useState("10")
  const [sizeMb, setSizeMb] = useState("100")
  const [speedMbps, setSpeedMbps] = useState("50")

  const bitrateResult = useMemo(() => {
    const br = Number.parseFloat(bitrate.replace(",", "."))
    const mins = Number.parseFloat(duration.replace(",", "."))
    if (!Number.isFinite(br) || !Number.isFinite(mins)) return null
    const bits = br * 1000 * mins * 60
    const mb = bits / 8 / 1_000_000
    return mb
  }, [bitrate, duration])

  const transferResult = useMemo(() => {
    const mb = Number.parseFloat(sizeMb.replace(",", "."))
    const mbps = Number.parseFloat(speedMbps.replace(",", "."))
    if (!Number.isFinite(mb) || !Number.isFinite(mbps) || mbps <= 0) return null
    const seconds = (mb * 8) / mbps
    return seconds
  }, [sizeMb, speedMbps])

  function fmtSec(s: number) {
    if (s < 60) return `${s.toFixed(1)} s`
    if (s < 3600) return `${(s / 60).toFixed(1)} min`
    return `${(s / 3600).toFixed(2)} h`
  }

  return (
    <div className="space-y-4">
      <Field label="Calculator">
        <select className={selectClass} value={mode} onChange={(e) => setMode(e.target.value as typeof mode)}>
          <option value="bitrate">Bitrate → file size</option>
          <option value="transfer">Upload / download time</option>
        </select>
      </Field>
      {mode === "bitrate" ? (
        <>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Bitrate (kbps)">
              <input className={inputClass} inputMode="decimal" value={bitrate} onChange={(e) => setBitrate(e.target.value)} />
            </Field>
            <Field label="Duration (minutes)">
              <input className={inputClass} inputMode="decimal" value={duration} onChange={(e) => setDuration(e.target.value)} />
            </Field>
          </div>
          {bitrateResult !== null && (
            <ResultBox>
              Estimated size: <strong>{bitrateResult.toFixed(2)} MB</strong>
            </ResultBox>
          )}
        </>
      ) : (
        <>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="File size (MB)">
              <input className={inputClass} inputMode="decimal" value={sizeMb} onChange={(e) => setSizeMb(e.target.value)} />
            </Field>
            <Field label="Speed (Mbps)">
              <input className={inputClass} inputMode="decimal" value={speedMbps} onChange={(e) => setSpeedMbps(e.target.value)} />
            </Field>
          </div>
          {transferResult !== null && (
            <ResultBox>
              Estimated time: <strong>{fmtSec(transferResult)}</strong>
            </ResultBox>
          )}
        </>
      )}
    </div>
  )
}
