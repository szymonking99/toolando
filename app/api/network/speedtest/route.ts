import { NextRequest, NextResponse } from "next/server"

export const runtime = "edge"

export async function GET(req: NextRequest) {
  const size = Math.min(
    Number(req.nextUrl.searchParams.get("size") || "0"),
    5_000_000,
  )

  if (size <= 0) {
    return new NextResponse("ok", {
      headers: { "Cache-Control": "no-store" },
    })
  }

  const data = new Uint8Array(size)
  return new NextResponse(data, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Cache-Control": "no-store",
      "Content-Length": String(size),
    },
  })
}
