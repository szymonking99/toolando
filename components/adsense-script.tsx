"use client"

import Script from "next/script"
import { usePathname } from "next/navigation"

/**
 * Loads the Google AdSense auto-ads loader on every page EXCEPT the downloader
 * tool. AdSense policies are sensitive to media-download tools, so we
 * deliberately keep ads off `/[locale]/downloader` (and its sub-routes) to
 * reduce risk to the account.
 */
export function AdSenseScript({ client }: { client: string }) {
  const pathname = usePathname()

  // pathname is locale-prefixed, e.g. "/pl/downloader" or "/en/downloader/...".
  // Strip the leading locale segment and check the first real segment.
  const segments = pathname.split("/").filter(Boolean)
  const firstSegment = segments[1] // [0] is the locale
  const isDownloader = firstSegment === "downloader"

  if (isDownloader) return null

  return (
    <Script
      id="adsbygoogle-init"
      async
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
    />
  )
}
