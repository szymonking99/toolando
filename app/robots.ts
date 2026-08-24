import type { MetadataRoute } from "next"
import { isDownloaderEnabled } from "@/lib/seo/ads-policy"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://toolando.tech"

/**
 * Thin programmatic sections stay off Googlebot and the AdSense crawler.
 * Pages remain usable in the browser; they just are not advertised to bots.
 */
const THIN_PATHS = [
  "/*/formaty",
  "/*/formaty/",
  "/*/formaty/*",
  "/*/slownik",
  "/*/slownik/",
  "/*/slownik/*",
  "/*/porownania",
  "/*/porownania/",
  "/*/porownania/*",
  "/*/category",
  "/*/category/",
  "/*/category/*",
]

export default function robots(): MetadataRoute.Robots {
  const disallow: string[] = [...THIN_PATHS]
  if (!isDownloaderEnabled()) {
    disallow.push("/*/downloader", "/*/downloader/*")
  }

  return {
    rules: [
      {
        userAgent: ["Googlebot", "Mediapartners-Google", "Googlebot-Image"],
        allow: "/",
        disallow,
      },
      {
        userAgent: ["AhrefsBot", "SemrushBot", "MJ12bot", "DotBot", "BLEXBot", "PetalBot", "Bytespider"],
        disallow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL.replace(/^https?:\/\//, ""),
  }
}
