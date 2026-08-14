import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { cookies, headers } from "next/headers"
import { rtlLocales } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { resolveAccountLocale } from "@/lib/i18n/resolve-account-locale"
import { I18nProvider } from "@/components/i18n-provider"
import "../globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const headerStore = await headers()
  const locale = resolveAccountLocale({
    cookieLocale: cookieStore.get("toolando-locale")?.value,
    referer: headerStore.get("referer"),
    acceptLanguage: headerStore.get("accept-language"),
  })
  const dict = await getDictionary(locale)
  return {
    title: dict.auth.metaTitle,
    description: dict.auth.metaDescription,
    robots: { index: false, follow: false },
  }
}

export default async function AccountLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies()
  const headerStore = await headers()
  const locale = resolveAccountLocale({
    cookieLocale: cookieStore.get("toolando-locale")?.value,
    referer: headerStore.get("referer"),
    acceptLanguage: headerStore.get("accept-language"),
  })
  const dir = rtlLocales.has(locale) ? "rtl" : "ltr"
  const dictionary = await getDictionary(locale)

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
      </body>
    </html>
  )
}
