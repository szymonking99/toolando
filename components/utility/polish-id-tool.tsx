"use client"

import { useMemo, useState } from "react"
import { Field, ResultBox, inputClass } from "./ui"
import { validatePolishId } from "@/lib/pl-validators"

export function PolishIdTool() {
  const [value, setValue] = useState("")

  const result = useMemo(() => {
    const v = value.trim()
    if (!v) return null
    return validatePolishId(v)
  }, [value])

  return (
    <div className="space-y-4">
      <Field label="NIP, PESEL lub REGON">
        <input
          className={inputClass}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="np. 5261040828"
        />
      </Field>
      {result && (
        <ResultBox>
          <p className="font-medium">{result.type}</p>
          <p className={result.valid ? "text-primary" : "text-destructive"}>
            {result.message}
          </p>
        </ResultBox>
      )}
    </div>
  )
}
