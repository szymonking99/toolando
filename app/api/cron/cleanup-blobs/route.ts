import { list, del } from "@vercel/blob";
import { NextResponse, type NextRequest } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 60;

// Delete any uploaded input blob older than this. Inputs are normally removed
// right after conversion; this only sweeps files from abandoned/failed uploads.
const MAX_AGE_MS = 60 * 60 * 1000; // 1 hour

/**
 * Safety-net cleanup. Runs on a schedule (see vercel.json) and can also be
 * triggered manually. Removes stale upload blobs so storage stays near-empty.
 */
export async function GET(req: NextRequest) {
  // When configured, Vercel Cron sends the CRON_SECRET as a bearer token.
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = req.headers.get("authorization");
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  const cutoff = Date.now() - MAX_AGE_MS;
  let deleted = 0;
  let cursor: string | undefined;

  try {
    do {
      const { blobs, cursor: next, hasMore } = await list({ cursor });
      const stale = blobs
        .filter((b) => new Date(b.uploadedAt).getTime() < cutoff)
        .map((b) => b.url);

      if (stale.length > 0) {
        await del(stale);
        deleted += stale.length;
      }

      cursor = hasMore ? next : undefined;
    } while (cursor);

    return NextResponse.json({ ok: true, deleted });
  } catch (error) {
    console.error("[v0] blob cleanup cron failed:", error);
    return NextResponse.json(
      { error: "Cleanup failed" },
      { status: 500 },
    );
  }
}
