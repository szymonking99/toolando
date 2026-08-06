/** Ezoic Ads.txt Manager — account 19390 (default for most publishers). */
const EZOIC_ADS_TXT_URL = "https://srv.adstxtmanager.com/19390/toolando.tech"

/**
 * Fallback until Ezoic registers the domain in Ads.txt Manager.
 * Keep the AdSense line; Ezoic expands entries after onboarding.
 */
const FALLBACK_ADS_TXT = `# toolando.tech — ads.txt
google.com, pub-1137300798632743, DIRECT, f08c47fec0942fa0
ezoic.com, ce6efd8f2b70c152305901379ddc96e3, DIRECT
`

export const revalidate = 3600

export async function GET() {
  try {
    const res = await fetch(EZOIC_ADS_TXT_URL, {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "ToolandoAdsTxt/1.0" },
    })
    if (res.ok) {
      const text = (await res.text()).trim()
      if (text.length > 0) {
        return new Response(text, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
          },
        })
      }
    }
  } catch {
    // Use fallback below.
  }

  return new Response(FALLBACK_ADS_TXT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=300",
    },
  })
}
