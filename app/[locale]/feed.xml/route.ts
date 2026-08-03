import {
  fullyTranslatedLocales,
  normalizeToSupported,
  type SupportedLocale,
} from "@/lib/i18n/config"
import { buildRssXml, rssResponse } from "@/lib/seo/rss-feed"

export function generateStaticParams() {
  return fullyTranslatedLocales.map((locale) => ({ locale }))
}

export async function GET(
  _req: Request,
  context: { params: Promise<{ locale: string }> },
) {
  const { locale: raw } = await context.params
  const locale = (normalizeToSupported(raw) ?? "en") as SupportedLocale
  return rssResponse(buildRssXml({ locale }))
}
