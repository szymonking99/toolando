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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://toolando.app"

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
      locale,
      type: "website",
    },
    icons: {
      icon: [
        { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
        { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-icon.png",
    },
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
      className={`dark bg-background ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-background font-sans antialiased">
        <I18nProvider locale={locale} dictionary={dictionary}>
          {children}
        </I18nProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
