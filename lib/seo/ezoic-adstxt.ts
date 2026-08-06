/**
 * Ezoic Ads.txt Manager — Step 1 from
 * https://docs.ezoic.com/docs/ezoicads/adstxt/
 *
 * Default account ID for most Ezoic publishers: 19390
 */
export const EZOIC_ADSTXT_ACCOUNT_ID =
  process.env.EZOIC_ADSTXT_ACCOUNT_ID ?? "19390"

export const EZOIC_ADSTXT_DOMAIN =
  process.env.EZOIC_ADSTXT_DOMAIN ?? "toolando.tech"

export function ezoicAdsTxtManagerUrl(
  accountId = EZOIC_ADSTXT_ACCOUNT_ID,
  domain = EZOIC_ADSTXT_DOMAIN,
): string {
  return `https://srv.adstxtmanager.com/${accountId}/${domain}`
}

/** Fetch managed ads.txt (curl -L equivalent for method 3). */
export async function fetchEzoicAdsTxt(): Promise<string | null> {
  const url = ezoicAdsTxtManagerUrl()
  try {
    const res = await fetch(url, {
      redirect: "follow",
      headers: { "User-Agent": "ToolandoAdsTxt/1.0" },
      next: { revalidate: 86400 },
    })
    if (!res.ok) return null
    const text = (await res.text()).trim()
    return text.length > 0 ? text : null
  } catch {
    return null
  }
}
