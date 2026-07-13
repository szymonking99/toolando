"use client"

import { useMemo, useRef, useState } from "react"
import { Link2, Music, Loader2, ArrowUpRight, AlertCircle } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import {
  detectVideoLink,
  buildConverterUrl,
  isPlatformEnabled,
  PLATFORM_LABELS,
  PLATFORM_COLORS,
  type DetectedLink,
} from "@/lib/video-link"

interface VideoToMp3LinkerProps {
  /**
   * Called once the (simulated) preparation completes. Defaults to navigating
   * to the localized results page `/downloader/{platform}/{id}`.
   */
  onConvert?: (platform: string, id: string) => void
}

type Phase = "idle" | "preparing" | "ready"

export function VideoToMp3Linker({ onConvert }: VideoToMp3LinkerProps) {
  const { t } = useI18n()
  const d = t.downloader

  const [value, setValue] = useState("")
  const [phase, setPhase] = useState<Phase>("idle")
  const [progress, setProgress] = useState(0)
  const [thumbOk, setThumbOk] = useState(true)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Detect platform + id live as the user types. Pure client-side parsing.
  const detected: DetectedLink | null = useMemo(
    () => detectVideoLink(value),
    [value],
  )

  const showInvalid = value.trim().length > 0 && !detected
  // Platform detected, but downloading it is temporarily disabled (e.g. YouTube).
  const disabledPlatform = detected && !isPlatformEnabled(detected.platform)

  function reset() {
    if (timerRef.current) clearInterval(timerRef.current)
    setPhase("idle")
    setProgress(0)
  }

  function handleConvert() {
    if (!detected || disabledPlatform) return
    reset()
    setPhase("preparing")
    setProgress(0)
    // Simulated progress — no server download happens here.
    timerRef.current = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 18 + 6
        if (next >= 100) {
          if (timerRef.current) clearInterval(timerRef.current)
          setPhase("ready")
          if (onConvert) onConvert(detected.platform, detected.id)
          return 100
        }
        return next
      })
    }, 240)
  }

  function openDownloadPage() {
    if (!detected) return
    if (onConvert) {
      onConvert(detected.platform, detected.id)
      return
    }
    // Hand the ORIGINAL pasted link off to the external converter, which
    // performs the actual MP3 download. Opening it directly (rather than the
    // reconstructed results route) guarantees the converter gets a valid URL.
    window.open(
      buildConverterUrl(detected.sourceUrl),
      "_blank",
      "noopener,noreferrer",
    )
  }

  const accent = detected ? PLATFORM_COLORS[detected.platform] : undefined

  return (
    <div className="flex flex-col gap-5">
      {/* Link input */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="video-link"
          className="text-sm font-medium text-foreground"
        >
          {d.inputLabel}
        </label>
        <div className="relative">
          <Link2
            className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            id="video-link"
            type="url"
            inputMode="url"
            autoComplete="off"
            spellCheck={false}
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
              setThumbOk(true)
              reset()
            }}
            placeholder={d.inputPlaceholder}
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3.5 pl-12 pr-4 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/50 focus:bg-white/[0.05]"
          />
        </div>

        {showInvalid && (
          <p className="flex items-center gap-1.5 text-sm text-destructive">
            <AlertCircle className="size-4" aria-hidden="true" />
            {d.invalidLink}
          </p>
        )}
      </div>

      {/* Detected platform + id */}
      {detected && (
        <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center">
          <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-lg bg-white/5 sm:w-48">
            {detected.thumbnail && thumbOk ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={detected.thumbnail || "/placeholder.svg"}
                alt={d.thumbnailAlt}
                crossOrigin="anonymous"
                onError={() => setThumbOk(false)}
                className="size-full object-cover"
              />
            ) : (
              <div
                className="flex size-full items-center justify-center text-lg font-semibold"
                style={{ color: accent }}
              >
                {PLATFORM_LABELS[detected.platform]}
              </div>
            )}
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <div className="flex items-center gap-2">
              <span
                className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold"
                style={{
                  color: accent,
                  backgroundColor: `${accent}1a`,
                }}
              >
                {PLATFORM_LABELS[detected.platform]}
              </span>
              <span className="text-xs text-muted-foreground">
                {d.detected}
              </span>
            </div>
            <p className="truncate text-sm text-muted-foreground">
              <span className="text-foreground">{d.idLabel}:</span>{" "}
              <span className="font-mono">{detected.id}</span>
            </p>
          </div>
        </div>
      )}

      {/* Temporarily disabled platform notice (e.g. YouTube) */}
      {disabledPlatform && (
        <div className="flex items-start gap-2.5 rounded-xl border border-amber-500/25 bg-amber-500/[0.07] p-4">
          <AlertCircle
            className="mt-0.5 size-4 shrink-0 text-amber-500"
            aria-hidden="true"
          />
          <p className="text-pretty text-sm leading-relaxed text-foreground">
            {d.platformDisabled.replace(
              "{platform}",
              PLATFORM_LABELS[detected.platform],
            )}
          </p>
        </div>
      )}

      {/* Progress bar */}
      {phase === "preparing" && (
        <div className="flex flex-col gap-2">
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-primary transition-all duration-200 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground">{d.preparing}</p>
        </div>
      )}

      {/* Result section */}
      {phase === "ready" && detected && (
        <div className="flex flex-col gap-3 rounded-xl border border-primary/25 bg-primary/[0.05] p-4">
          <p className="text-sm font-medium text-foreground">{d.ready}</p>
          <button
            type="button"
            onClick={openDownloadPage}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/85"
          >
            {d.openPage}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      )}

      {/* Primary action */}
      {phase !== "ready" && (
        <button
          type="button"
          disabled={!detected || !!disabledPlatform || phase === "preparing"}
          onClick={handleConvert}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-primary/85 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {phase === "preparing" ? (
            <Loader2 className="size-5 animate-spin" aria-hidden="true" />
          ) : (
            <Music className="size-5" aria-hidden="true" />
          )}
          {d.download}
        </button>
      )}

      {/* Legal / privacy note */}
      <p className="text-pretty text-xs leading-relaxed text-muted-foreground">
        {d.disclaimer}
      </p>
    </div>
  )
}
