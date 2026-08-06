"use client"

import { useEffect, useId, useRef, useState } from "react"
import { runEzoic } from "@/lib/ezoic"
import { getEzoicPlacementId } from "@/lib/seo/ezoic-placements"
import type { AdPlacement } from "@/lib/seo/ads-policy"

type EzoicAdProps = {
  placement: AdPlacement
  minHeight?: number
  className?: string
}

/**
 * Ezoic ad spot — uses dashboard placement ID when set, otherwise id-less
 * `.ezoicad` container (no Ezoic dashboard IDs required).
 * @see https://docs.ezoic.com/docs/ezoicads/implementation/
 */
export function EzoicAd({ placement, minHeight = 120, className }: EzoicAdProps) {
  const spotRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const reactId = useId()
  const placementId = getEzoicPlacementId(placement)
  const spotClass = `ezoicad-${placement}-${reactId.replace(/:/g, "")}`

  useEffect(() => {
    setMounted(true)
    runEzoic(() => {
      if (placementId !== null) {
        window.ezstandalone?.showAds(placementId)
        return
      }
      window.ezstandalone?.showAds(`.${spotClass}`)
    })
    return () => {
      runEzoic(() => {
        if (placementId !== null) {
          window.ezstandalone?.destroyPlaceholders(placementId)
        }
      })
    }
  }, [placementId, spotClass])

  if (placementId !== null) {
    return (
      <div className={className} style={{ minHeight }} aria-hidden={!mounted}>
        {mounted && <div id={`ezoic-pub-ad-placeholder-${placementId}`} />}
      </div>
    )
  }

  return (
    <div
      ref={spotRef}
      className={`ezoicad ${spotClass} ${className ?? ""}`.trim()}
      style={{ minHeight, width: "100%" }}
      data-placement={placement}
      aria-hidden={!mounted}
    />
  )
}
