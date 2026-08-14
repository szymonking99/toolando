import type { MetadataRoute } from "next"
import { isDownloaderEnabled } from "@/lib/seo/ads-policy"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://toolando.tech"

export default function robots(): MetadataRoute.Robots {
  const disallow: string[] = []
  if (!isDownloaderEnabled()) {
    disallow.push("/*/downloader", "/*/downloader/*")
  }

  return {
    rules: [
      {
        userAgent: "Mediapartners-Google",
        allow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
        ...(disallow.length > 0 ? { disallow } : {}),
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL.replace(/^https?:\/\//, ""),
  }
}
