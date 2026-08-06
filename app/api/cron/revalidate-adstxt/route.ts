/**
 * Method 3 from Ezoic ads.txt docs — daily sync via cron.
 * @see https://docs.ezoic.com/docs/ezoicads/adstxt/
 */
import { revalidatePath } from "next/cache"
import { NextResponse, type NextRequest } from "next/server"

export const runtime = "nodejs"

export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET
  if (secret) {
    const auth = req.headers.get("authorization")
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
  }

  revalidatePath("/ads.txt")
  return NextResponse.json({ ok: true, revalidated: "/ads.txt" })
}
