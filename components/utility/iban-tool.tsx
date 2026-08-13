"use client"

import { useMemo, useState } from "react"
import { Field, ResultBox, inputClass } from "./ui"
import { validateIban } from "@/lib/iban"
import { useI18n } from "@/components/i18n-provider"

const LABELS: Record<string, { label: string; placeholder: string }> = {
  pl: { label: "Numer IBAN", placeholder: "np. PL61109010140000071219812874" },
  en: { label: "IBAN number", placeholder: "e.g. DE89370400440532013000" },
  de: { label: "IBAN-Nummer", placeholder: "z. B. DE89370400440532013000" },
  es: { label: "Número IBAN", placeholder: "p. ej. ES9121000418450200051332" },
  uk: { label: "Номер IBAN", placeholder: "напр. UA213223130000026007233566001" },
}

export function IbanTool() {
  const { locale } = useI18n()
  const [value, setValue] = useState("")
  const copy = LABELS[locale] ?? LABELS.en

  const result = useMemo(() => {
    const v = value.trim()
    if (!v) return null
    return validateIban(v, locale)
  }, [value, locale])

  return (
    <div className="space-y-4">
      <Field label={copy.label}>
        <input
          className={inputClass}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={copy.placeholder}
          spellCheck={false}
        />
      </Field>
      {result && (
        <ResultBox>
          <p className="font-medium">{result.country || "IBAN"}</p>
          <p className={result.valid ? "text-primary" : "text-destructive"}>
            {result.message}
          </p>
          {result.formatted && (
            <p className="mt-2 font-mono text-sm text-muted-foreground">
              {result.formatted}
            </p>
          )}
        </ResultBox>
      )}
    </div>
  )
}
