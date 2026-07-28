"use client"

import { useEffect, useState } from "react"
import { Field, inputClass, PrimaryButton, ResultBox } from "./ui"

export function QrTool() {
  const [text, setText] = useState("https://toolando.tech")
  const [dataUrl, setDataUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function generate() {
    setError(null)
    try {
      const QR = (await import("qrcode")).default
      const url = await QR.toDataURL(text || " ", {
        width: 320,
        margin: 2,
        color: { dark: "#0f172a", light: "#ffffff" },
      })
      setDataUrl(url)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Błąd generowania QR")
      setDataUrl(null)
    }
  }

  useEffect(() => {
    void generate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="space-y-4">
      <Field label="Tekst / URL">
        <textarea
          className={`${inputClass} min-h-24 resize-y`}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Field>
      <PrimaryButton onClick={() => void generate()}>Generuj QR</PrimaryButton>
      {error && <p className="text-sm text-destructive">{error}</p>}
      {dataUrl && (
        <ResultBox className="flex flex-col items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={dataUrl} alt="Kod QR" className="size-56 rounded-lg bg-white p-2" />
          <a
            href={dataUrl}
            download="qrcode.png"
            className="text-sm font-medium text-primary underline"
          >
            Pobierz PNG
          </a>
        </ResultBox>
      )}
    </div>
  )
}
