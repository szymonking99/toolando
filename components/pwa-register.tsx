"use client"

import { useEffect } from "react"

/**
 * Register a lightweight SW for static assets only.
 * On update, claim clients so the new network-first navigate behavior applies ASAP.
 */
export function PwaRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return

    let cancelled = false

    async function register() {
      try {
        const reg = await navigator.serviceWorker.register("/sw.js")
        if (cancelled) return

        reg.addEventListener("updatefound", () => {
          const worker = reg.installing
          if (!worker) return
          worker.addEventListener("statechange", () => {
            if (worker.state === "installed" && navigator.serviceWorker.controller) {
              // New SW waiting — activate immediately via skipWaiting in sw.js
              worker.postMessage?.({ type: "SKIP_WAITING" })
            }
          })
        })
      } catch {
        /* ignore registration failures */
      }
    }

    void register()
    return () => {
      cancelled = true
    }
  }, [])

  return null
}
