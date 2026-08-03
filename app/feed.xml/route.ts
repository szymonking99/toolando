import { buildRssXml, rssResponse } from "@/lib/seo/rss-feed"

export async function GET() {
  return rssResponse(buildRssXml())
}
