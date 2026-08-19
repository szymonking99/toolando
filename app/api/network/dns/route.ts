import { NextRequest, NextResponse } from "next/server"
import dns from "dns/promises"

export const runtime = "nodejs"

const DOMAIN_RE = /^[a-zA-Z0-9]([a-zA-Z0-9\-\.]{0,253}[a-zA-Z0-9])?$/
const ALLOWED_TYPES = ["A", "AAAA", "CNAME", "MX", "NS", "TXT", "SOA"] as const

export async function POST(req: NextRequest) {
  try {
    const { domain, type } = await req.json()
    if (!domain || typeof domain !== "string" || !DOMAIN_RE.test(domain)) {
      return NextResponse.json(
        { error: "Nieprawidłowa domena" },
        { status: 400 },
      )
    }
    if (!ALLOWED_TYPES.includes(type)) {
      return NextResponse.json(
        { error: "Nieprawidłowy typ rekordu" },
        { status: 400 },
      )
    }

    const records: { type: string; value: string; ttl?: number }[] = []

    switch (type) {
      case "A": {
        const r = await dns.resolve4(domain, { ttl: true })
        for (const entry of r)
          records.push({ type: "A", value: entry.address, ttl: entry.ttl })
        break
      }
      case "AAAA": {
        const r = await dns.resolve6(domain, { ttl: true })
        for (const entry of r)
          records.push({ type: "AAAA", value: entry.address, ttl: entry.ttl })
        break
      }
      case "CNAME": {
        const r = await dns.resolveCname(domain)
        for (const v of r) records.push({ type: "CNAME", value: v })
        break
      }
      case "MX": {
        const r = await dns.resolveMx(domain)
        for (const entry of r)
          records.push({
            type: "MX",
            value: `${entry.priority} ${entry.exchange}`,
          })
        break
      }
      case "NS": {
        const r = await dns.resolveNs(domain)
        for (const v of r) records.push({ type: "NS", value: v })
        break
      }
      case "TXT": {
        const r = await dns.resolveTxt(domain)
        for (const entry of r)
          records.push({ type: "TXT", value: entry.join("") })
        break
      }
      case "SOA": {
        const r = await dns.resolveSoa(domain)
        records.push({
          type: "SOA",
          value: `${r.nsname} ${r.hostmaster} (serial: ${r.serial})`,
          ttl: r.minttl,
        })
        break
      }
    }

    return NextResponse.json({ records })
  } catch (e: any) {
    const msg = e?.code === "ENOTFOUND" ? "Domena nie istnieje" : "Błąd DNS"
    return NextResponse.json({ error: msg }, { status: 400 })
  }
}
