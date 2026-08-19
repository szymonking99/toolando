import { NextRequest, NextResponse } from "next/server"
import dns from "dns/promises"

export const runtime = "nodejs"

const HOST_RE = /^[a-zA-Z0-9]([a-zA-Z0-9\-\.]{0,253}[a-zA-Z0-9])?$/

export async function POST(req: NextRequest) {
  try {
    const { host } = await req.json()
    if (!host || typeof host !== "string" || !HOST_RE.test(host)) {
      return NextResponse.json({ error: "Nieprawidłowy host" }, { status: 400 })
    }

    // Resolve IP
    let ip: string
    try {
      const addrs = await dns.resolve4(host)
      ip = addrs[0]
    } catch {
      try {
        const addrs = await dns.resolve6(host)
        ip = addrs[0]
      } catch {
        return NextResponse.json(
          { error: "Nie można rozwiązać hosta" },
          { status: 400 },
        )
      }
    }

    // HTTP-based "ping" — measure TCP + TLS handshake time
    const times: number[] = []
    for (let i = 0; i < 4; i++) {
      const start = performance.now()
      try {
        await fetch(`https://${host}`, {
          method: "HEAD",
          signal: AbortSignal.timeout(5000),
          redirect: "manual",
        })
      } catch {
        // Even a connection error gives us timing
      }
      times.push(Math.round(performance.now() - start))
    }

    const avg = Math.round(times.reduce((a, b) => a + b, 0) / times.length)
    const min = Math.min(...times)
    const max = Math.max(...times)

    return NextResponse.json({ host, ip, times, avg, min, max })
  } catch {
    return NextResponse.json(
      { error: "Wewnętrzny błąd serwera" },
      { status: 500 },
    )
  }
}
