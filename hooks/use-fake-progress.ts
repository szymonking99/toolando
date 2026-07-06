"use client"

import { useEffect, useState } from "react"

/**
 * Symulowany pasek postępu dla operacji, które nie zwracają realnego
 * procentu (np. konwersja plików po stronie serwera w jednym żądaniu).
 *
 * Gdy `active` jest true, wartość płynnie rośnie do ~95% po krzywej
 * spowalniającej (im bliżej końca, tym wolniej), aby użytkownik widział
 * ciągły postęp. Po wyłączeniu (`active` = false) wartość jest resetowana.
 *
 * Zwraca liczbę całkowitą 0–95.
 */
export function useFakeProgress(active: boolean): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!active) {
      setProgress(0)
      return
    }

    // Widoczny start, żeby pasek od razu coś pokazywał.
    setProgress(8)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return 95
        const remaining = 95 - prev
        // Ease-out: większe kroki na początku, coraz mniejsze przy końcu.
        const step = Math.max(0.4, remaining * 0.06)
        return Math.min(95, prev + step)
      })
    }, 180)

    return () => clearInterval(interval)
  }, [active])

  return Math.round(progress)
}
