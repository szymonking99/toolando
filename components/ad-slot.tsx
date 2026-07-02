"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

/**
 * Google AdSense publisher ID, e.g. "ca-pub-1234567890123456".
 * Set NEXT_PUBLIC_ADSENSE_CLIENT in your project env to activate real ads.
 * When empty, a neutral placeholder is rendered so the layout stays intact
 * (and no AdSense policy is violated by empty units).
 */
const ADSENSE_CLIENT =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "ca-pub-1137300798632743"

type AdSlotProps = {
  /** The AdSense ad unit slot id (data-ad-slot). */
  slot?: string
  /** Ad format — "auto" is responsive and recommended. */
  format?: "auto" | "fluid" | "rectangle" | "horizontal" | "vertical"
  /** Whether the unit should be full-width responsive. */
  responsive?: boolean
  /** Optional label shown above the ad (AdSense requires clear labeling). */
  label?: string
  className?: string
  /** Minimum height to reserve, preventing layout shift (CLS). */
  minHeight?: number
}

declare global {
  interface Window {
    adsbygoogle?: unknown[]
  }
}

/**
 * A reusable, AdSense-ready ad container.
 *
 * Usage: drop <AdSlot slot="1234567890" /> anywhere in the layout.
 * Reserve vertical space to satisfy AdSense layout rules and avoid CLS.
 */
export function AdSlot({
  slot,
  format = "auto",
  responsive = true,
  label = "Advertisement",
  className,
  minHeight = 120,
}: AdSlotProps) {
  const pushedRef = useRef(false)

  const isConfigured = Boolean(ADSENSE_CLIENT && slot)

  useEffect(() => {
    if (!isConfigured || pushedRef.current) return
    try {
      // The AdSense library is loaded globally in the root layout. As a
      // fallback (e.g. if it hasn't been injected yet), load it once here.
      const existing = document.querySelector<HTMLScriptElement>(
        'script[src*="adsbygoogle.js"]',
      )
      if (!existing) {
        const script = document.createElement("script")
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`
        script.async = true
        script.crossOrigin = "anonymous"
        document.head.appendChild(script)
      }
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      pushedRef.current = true
    } catch {
      // Silently ignore — the placeholder container remains in place.
    }
  }, [isConfigured])

  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-4 py-6",
        className,
      )}
      aria-label={label}
      role="complementary"
    >
      <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground/60">
        {label}
      </span>

      {isConfigured ? (
        <ins
          className="adsbygoogle block w-full"
          style={{ display: "block", minHeight }}
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        />
      ) : (
        <div
          style={{ minHeight }}
          className="flex w-full items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/[0.02] text-xs text-muted-foreground/50"
        >
          Ad space
        </div>
      )}
    </div>
  )
}
