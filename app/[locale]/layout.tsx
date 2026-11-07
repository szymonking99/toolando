import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { DM_Sans, Geist_Mono, Syne } from "next/font/google"
import { I18nProvider } from "@/components/i18n-provider"
import { CookieConsent } from "@/components/cookie-consent"
import { ConsentModeInit } from "@/components/consent-mode-init"
import { ConsentGatedScripts } from "@/components/consent-gated-scripts"
import { EzoicHeadScripts } from "@/components/ezoic-head-scripts"
import { EzoicRouteHandler } from "@/components/ezoic-route-handler"
import { PwaRegister } from "@/components/pwa-register"
import { JsonLd } from "@/components/json-ld"
import { ThemeProvider } from "@/components/theme-provider"
import { organizationSchema, websiteSchema, SITE_URL } from "@/lib/seo/structured-data"
import { themeInitScript } from "@/lib/theme-script"
import { getDictionary } from "@/lib/i18n/dictionaries"
import {
  supportedLocales,
  rtlLocales,
  normalizeToSupported,
  fallbackLocale,
} from "@/lib/i18n/config"
import { showAdSenseVerificationMeta } from "@/lib/seo/ads-policy"
import { INDEXED_LOCALES, isIndexedLocale, noindexRobots } from "@/lib/seo/publisher-index"
import "../globals.css"

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
})
const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

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

  // Build hreflang alternates for indexed locales only.
  const languages: Record<string, string> = {}
  for (const code of INDEXED_LOCALES) {
    languages[code] = `/${code}`
  }
  languages["x-default"] = "/pl"

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    ...(isIndexedLocale(resolved) ? {} : { robots: noindexRobots() }),
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
    // Google AdSense site verification (AdSense network or during review).
    other: showAdSenseVerificationMeta()
      ? { "google-adsense-account": ADSENSE_CLIENT }
      : {},
  }
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f8f9" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1419" },
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
      suppressHydrationWarning
      className={`overflow-x-hidden bg-background ${dmSans.variable} ${syne.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <EzoicHeadScripts />
      </head>
      <body className="overflow-x-hidden bg-background font-sans antialiased">
        <ConsentModeInit />
        {/* Site-wide structured data: brand identity + sitelinks search box */}
        <JsonLd data={[organizationSchema(), websiteSchema(locale)]} />
        <ThemeProvider>
          <I18nProvider locale={locale} dictionary={dictionary}>
            {children}
            <CookieConsent />
          </I18nProvider>
        </ThemeProvider>
        <ConsentGatedScripts />
        <EzoicRouteHandler />
        <PwaRegister />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
