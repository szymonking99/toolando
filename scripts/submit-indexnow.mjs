/**
 * Submit sitemap URLs to Bing/Yandex IndexNow after deploy.
 * Usage: node scripts/submit-indexnow.mjs
 * Requires INDEXNOW_KEY in env (defaults to toolando-indexnow-2026).
 */
import fs from "node:fs"
import path from "node:path"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://toolando.tech"
const KEY = process.env.INDEXNOW_KEY || "toolando-indexnow-2026"
const BATCH = 100

async function fetchSitemapUrls() {
  const res = await fetch(`${SITE_URL}/sitemap.xml`)
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`)
  const xml = await res.text()
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  return [...new Set(urls)]
}

async function submitBatch(urls) {
  const body = {
    host: new URL(SITE_URL).hostname,
    key: KEY,
    keyLocation: `${SITE_URL}/${KEY}.txt`,
    urlList: urls,
  }

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  })

  if (!res.ok && res.status !== 202) {
    const text = await res.text()
    throw new Error(`IndexNow ${res.status}: ${text}`)
  }
}

async function main() {
  console.log("Fetching sitemap from", SITE_URL)
  const urls = await fetchSitemapUrls()
  console.log("URLs found:", urls.length)

  for (let i = 0; i < urls.length; i += BATCH) {
    const batch = urls.slice(i, i + BATCH)
    await submitBatch(batch)
    console.log(`Submitted batch ${i / BATCH + 1} (${batch.length} URLs)`)
  }

  console.log("IndexNow submission complete.")
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
