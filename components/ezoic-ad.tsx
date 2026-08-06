"use client"

import { useEffect, useRef } from "react"
import { runEzoic } from "@/lib/ezoic"

type EzoicAdProps = {
  minHeight?: number
  className?: string
}

/**
 * Ezoic Step 3 — id-less placement: one showAds({}) per ad spot.
 * @see https://docs.ezoic.com/docs/ezoicads/implementation/
 */
export function EzoicAd({ minHeight = 120, className }: EzoicAdProps) {
  const calledRef = useRef(false)

  useEffect(() => {
    if (calledRef.current) return
    calledRef.current = true
    runEzoic(() => {
      window.ezstandalone?.showAds({})
    })
  }, [])

  return (
    <div
      className={className}
      style={{ minHeight, width: "100%" }}
      data-ezoic-ad-spot=""
    />
  )
}
