"use client"

import { useState } from "react"
import { Field, inputClass, ResultBox, PrimaryButton, copyText } from "./ui"

export function UuidTool() {
  const [count, setCount] = useState(5)
  const [list, setList] = useState<string[]>([])

  function generate() {
    const n = Math.min(50, Math.max(1, count))
    setList(Array.from({ length: n }, () => crypto.randomUUID()))
  }

  return (
    <div className="space-y-4">
      <Field label="Liczba UUID (1–50)">
        <input
          type="number"
          min={1}
          max={50}
          className={inputClass}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
      </Field>
      <PrimaryButton onClick={generate}>Generuj</PrimaryButton>
      {list.length > 0 && (
        <ResultBox>
          <pre className="whitespace-pre-wrap font-mono text-xs">{list.join("\n")}</pre>
          <PrimaryButton className="mt-3" onClick={() => void copyText(list.join("\n"))}>
            Kopiuj
          </PrimaryButton>
        </ResultBox>
      )}
    </div>
  )
}
