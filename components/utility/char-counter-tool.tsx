"use client"

import { useMemo, useState } from "react"
import { Field, inputClass, ResultBox } from "./ui"

export function CharCounterTool() {
  const [text, setText] = useState("")

  const stats = useMemo(() => {
    const chars = text.length
    const charsNoSpace = text.replace(/\s/g, "").length
    const words = text.trim() ? text.trim().split(/\s+/).length : 0
    const lines = text ? text.split(/\n/).length : 0
    const paragraphs = text.trim()
      ? text
          .trim()
          .split(/\n\s*\n/)
          .filter(Boolean).length
      : 0
    const sentences = text.trim()
      ? text.split(/[.!?]+/).filter((s) => s.trim()).length
      : 0
    return { chars, charsNoSpace, words, lines, paragraphs, sentences }
  }, [text])

  return (
    <div className="space-y-4">
      <Field label="Tekst">
        <textarea
          className={`${inputClass} min-h-40 resize-y`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Wklej lub napisz tekst…"
        />
      </Field>
      <ResultBox>
        <ul className="grid gap-1 sm:grid-cols-2 tabular-nums">
          <li>Znaki: <strong>{stats.chars}</strong></li>
          <li>Bez spacji: <strong>{stats.charsNoSpace}</strong></li>
          <li>Słowa: <strong>{stats.words}</strong></li>
          <li>Zdania: <strong>{stats.sentences}</strong></li>
          <li>Linie: <strong>{stats.lines}</strong></li>
          <li>Akapity: <strong>{stats.paragraphs}</strong></li>
        </ul>
      </ResultBox>
    </div>
  )
}
