import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Geist, Geist_Mono } from "next/font/google"
import { I18nProvider } from "@/components/i18n-provider"
import { CookieConsent } from "@/components/cookie-consent"
import { ConsentModeInit } from "@/components/consent-mode-init"
import { ConsentGatedScripts } from "@/components/consent-gated-scripts"
import { EzoicHeadScripts } from "@/components/ezoic-head-scripts"
import { EzoicRouteHandler } from "@/components/ezoic-route-handler"
import { PwaRegister } from "@/components/pwa-register"
import { JsonLd } from "@/components/json-ld"
import { organizationSchema, websiteSchema } from "@/lib/seo/structured-data"
import { getDictionary } from "@/lib/i18n/dictionaries"
import {
  supportedLocales,
  fullyTranslatedLocales,
  rtlLocales,
  normalizeToSupported,
  fallbackLocale,
} from "@/lib/i18n/config"
import "../globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://toolando.tech"
const ADSENSE_CLIENT =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "ca-pub-1137300798632743"

/** Pre-render every supported locale at build time. */
export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const resolved = normalizeToSupported(locale) ?? fallbackLocale
  const isFullyTranslated = (fullyTranslatedLocales as readonly string[]).includes(resolved)

  // Build hreflang alternates for indexed locales only.
  const languages: Record<string, string> = {}
  for (const code of fullyTranslatedLocales) {
    languages[code] = `/${code}`
  }
  languages["x-default"] = `/${fallbackLocale}`

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    ...(isFullyTranslated ? {} : { robots: { index: false, follow: true } }),
    alternates: {
      canonical: `/${locale}`,
      languages,
      types: {
        "application/rss+xml": [
          { url: `${SITE_URL}/feed.xml`, title: "Toolando RSS (all)" },
          {
            url: `${SITE_URL}/${resolved}/feed.xml`,
            title: `Toolando RSS (${resolved})`,
          },
        ],
      },
    },
    manifest: "/manifest.webmanifest",
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `/${locale}`,
      siteName: "Toolando.tech",
      locale,
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Toolando.tech",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/opengraph-image"],
    },
    icons: {
      icon: [
        { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
        { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-icon.png",
    },
    // Google AdSense site verification (only when AdSense is the active network).
    other:
      ADSENSE_CLIENT && process.env.NEXT_PUBLIC_AD_NETWORK !== "ezoic"
        ? { "google-adsense-account": ADSENSE_CLIENT }
        : {},
  }
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)
  const resolved = normalizeToSupported(locale) ?? locale
  const dir = rtlLocales.has(resolved) ? "rtl" : "ltr"

  return (
    <html
      lang={locale}
      dir={dir}
      className={`dark overflow-x-hidden bg-background ${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <EzoicHeadScripts />
      </head>
      <body className="overflow-x-hidden bg-background font-sans antialiased">
        <ConsentModeInit />
        {/* Site-wide structured data: brand identity + sitelinks search box */}
        <JsonLd data={[organizationSchema(), websiteSchema(locale)]} />
        <I18nProvider locale={locale} dictionary={dictionary}>
          {children}
          <CookieConsent />
        </I18nProvider>
        <ConsentGatedScripts />
        <EzoicRouteHandler />
        <PwaRegister />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
