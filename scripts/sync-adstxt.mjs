#!/usr/bin/env node
/**
 * Ezoic ads.txt — method 3 (manual / CI sync).
 * curl -L https://srv.adstxtmanager.com/19390/toolando.tech > public/ads.txt
 *
 * @see https://docs.ezoic.com/docs/ezoicads/adstxt/
 */
import { writeFileSync } from "node:fs"
import { join } from "node:path"

const ACCOUNT = process.env.EZOIC_ADSTXT_ACCOUNT_ID ?? "19390"
const DOMAIN = process.env.EZOIC_ADSTXT_DOMAIN ?? "toolando.tech"
const URL = `https://srv.adstxtmanager.com/${ACCOUNT}/${DOMAIN}`
const OUT = join(process.cwd(), "public", "ads.txt")

const res = await fetch(URL, { redirect: "follow" })
if (!res.ok) {
  console.error(`Failed to fetch ${URL}: HTTP ${res.status}`)
  process.exit(1)
}

const text = await res.text()
writeFileSync(OUT, text.trimEnd() + "\n", "utf8")
console.log(`Wrote ${OUT} (${text.split("\n").length} lines) from ${URL}`)
