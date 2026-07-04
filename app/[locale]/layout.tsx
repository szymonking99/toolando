import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { I18nProvider } from "@/components/i18n-provider"
import { getDictionary } from "@/lib/i18n/dictionaries"
import {
  supportedLocales,
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

  // Build hreflang alternates for every supported locale.
  const languages: Record<string, string> = {}
  for (const code of supportedLocales) {
    languages[code] = `/${code}`
  }
  languages["x-default"] = `/${fallbackLocale}`

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    generator: "v0.app",
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `/${locale}`,
      siteName: "Toolando",
      locale,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Toolando",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/og-image.png"],
    },
    icons: {
      icon: [
        { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
        { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-icon.png",
    },
    // Google AdSense site verification (meta-tag method). Renders
    // <meta name="google-adsense-account" content="ca-pub-..."> in <head>.
    other: ADSENSE_CLIENT
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
        {ADSENSE_CLIENT && (
          // Plain <script> so the real AdSense loader appears verbatim in the
          // initial HTML <head> (Google's crawler needs the actual tag, not a
          // Next.js preload link).
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="overflow-x-hidden bg-background font-sans antialiased">
        <I18nProvider locale={locale} dictionary={dictionary}>
          {children}
        </I18nProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
