"use client"

import { useMemo, useState } from "react"
import { Field, ResultBox, PrimaryButton, copyText, inputClass } from "./ui"
import {
  detectSubtitleFormat,
  srtToVtt,
  vttToSrt,
} from "@/lib/subtitle-convert"

export function SubtitleTool() {
  const [input, setInput] = useState("")
  const [direction, setDirection] = useState<"auto" | "srt-vtt" | "vtt-srt">("auto")
  const [copied, setCopied] = useState(false)

  const output = useMemo(() => {
    if (!input.trim()) return ""
    const fmt = detectSubtitleFormat(input)
    if (direction === "srt-vtt" || (direction === "auto" && fmt === "srt")) {
      return srtToVtt(input)
    }
    if (direction === "vtt-srt" || (direction === "auto" && fmt === "vtt")) {
      return vttToSrt(input)
    }
    return srtToVtt(input)
  }, [input, direction])

  return (
    <div className="space-y-4">
      <Field label="Kierunek konwersji">
        <select
          className={inputClass}
          value={direction}
          onChange={(e) => setDirection(e.target.value as typeof direction)}
        >
          <option value="auto">Auto (wykryj format)</option>
          <option value="srt-vtt">SRT → VTT</option>
          <option value="vtt-srt">VTT → SRT</option>
        </select>
      </Field>
      <Field label="Napisy">
        <textarea
          className={`${inputClass} min-h-48 font-mono text-xs`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Field>
      {output && (
        <ResultBox>
          <pre className="max-h-60 overflow-auto whitespace-pre-wrap font-mono text-xs">
            {output}
          </pre>
          <PrimaryButton
            className="mt-3"
            onClick={async () => {
              setCopied(await copyText(output))
              setTimeout(() => setCopied(false), 1500)
            }}
          >
            {copied ? "Skopiowano" : "Kopiuj wynik"}
          </PrimaryButton>
        </ResultBox>
      )}
    </div>
  )
}
