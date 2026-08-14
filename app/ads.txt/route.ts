import { fetchEzoicAdsTxt } from "@/lib/seo/ezoic-adstxt"
import { adsenseAdsTxt, useEzoicAdsTxt } from "@/lib/seo/ads-policy"

/**
 * Serves /ads.txt — Google-only during AdSense review; Ezoic-managed when
 * NEXT_PUBLIC_AD_NETWORK=ezoic.
 *
 * @see https://docs.ezoic.com/docs/ezoicads/adstxt/
 */
export const revalidate = 86400

const EZOIC_FALLBACK = `# toolando.tech — ads.txt (Ezoic fallback)
google.com, pub-1137300798632743, DIRECT, f08c47fec0942fa0
ezoic.com, ce6efd8f2b70c152305901379ddc96e3, DIRECT
`

export async function GET() {
  const body = useEzoicAdsTxt()
    ? (await fetchEzoicAdsTxt()) ?? EZOIC_FALLBACK
    : adsenseAdsTxt()

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}
