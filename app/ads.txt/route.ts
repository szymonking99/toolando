import { fetchEzoicAdsTxt } from "@/lib/seo/ezoic-adstxt"

/**
 * Serves /ads.txt from Ezoic Ads.txt Manager (method 3 — automated updates).
 * Equivalent to: curl -L https://srv.adstxtmanager.com/19390/toolando.tech
 *
 * @see https://docs.ezoic.com/docs/ezoicads/adstxt/
 */
export const revalidate = 86400 // daily refresh per Ezoic cron recommendation

const FALLBACK = `# toolando.tech — ads.txt (fallback until Ezoic activates the manager URL)
# Complete Step 1 in the Ezoic dashboard, then this file auto-syncs from Ads.txt Manager.
google.com, pub-1137300798632743, DIRECT, f08c47fec0942fa0
ezoic.com, ce6efd8f2b70c152305901379ddc96e3, DIRECT
`

export async function GET() {
  const managed = await fetchEzoicAdsTxt()
  const body = managed ?? FALLBACK

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}
