"use client"

import { useRef, useState } from "react"
import { Download, Loader2, Upload } from "lucide-react"
import { Field, PrimaryButton } from "./ui"
import JSZip from "jszip"

const SIZES = [16, 32, 48, 180, 192, 512]

async function loadImage(file: File): Promise<HTMLImageElement> {
  const url = URL.createObjectURL(file)
  try {
    const img = new Image()
    img.decoding = "async"
    img.src = url
    await img.decode()
    return img
  } finally {
    URL.revokeObjectURL(url)
  }
}

function drawSize(img: HTMLImageElement, size: number): Blob | null {
  const canvas = document.createElement("canvas")
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext("2d")
  if (!ctx) return null
  const scale = Math.min(size / img.width, size / img.height)
  const w = img.width * scale
  const h = img.height * scale
  ctx.clearRect(0, 0, size, size)
  ctx.drawImage(img, (size - w) / 2, (size - h) / 2, w, h)
  const data = canvas.toDataURL("image/png")
  const bin = atob(data.split(",")[1]!)
  const bytes = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i)
  return new Blob([bytes], { type: "image/png" })
}

export function FaviconTool() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)

  async function generate(file: File | null) {
    if (!file) return
    setBusy(true)
    setError(null)
    setFileName(file.name)
    try {
      const img = await loadImage(file)
      const zip = new JSZip()
      for (const size of SIZES) {
        const blob = drawSize(img, size)
        if (blob) zip.file(`favicon-${size}x${size}.png`, blob)
      }
      const out = await zip.generateAsync({ type: "blob" })
      const url = URL.createObjectURL(out)
      const a = document.createElement("a")
      a.href = url
      a.download = "favicon-pack.zip"
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
    } catch {
      setError("Could not process this image. Try PNG or JPG.")
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Upload a square-ish image. We generate PNG favicons (16–512px) and download them as a ZIP — entirely in your browser.
      </p>
      <Field label="Source image">
        <label className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-dashed border-white/15 px-4 py-10 text-center hover:border-primary/40">
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={(e) => generate(e.target.files?.[0] ?? null)}
          />
          {busy ? <Loader2 className="size-6 animate-spin text-primary" /> : <Upload className="size-6 text-primary" />}
          <span className="text-sm">{fileName ?? "Drop image or click"}</span>
        </label>
      </Field>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <PrimaryButton type="button" disabled={busy} onClick={() => inputRef.current?.click()}>
        <Download className="mr-2 size-4" />
        {busy ? "Generating…" : "Generate favicon pack"}
      </PrimaryButton>
    </div>
  )
}
