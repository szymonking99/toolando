import type { Metadata, Viewport } from "next"
import { DM_Sans, Geist_Mono, Syne } from "next/font/google"
import { cookies, headers } from "next/headers"
import { rtlLocales } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { resolveAccountLocale } from "@/lib/i18n/resolve-account-locale"
import { I18nProvider } from "@/components/i18n-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { themeInitScript } from "@/lib/theme-script"
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

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f8f9" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1419" },
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
      suppressHydrationWarning
      className={`bg-background ${dmSans.variable} ${syne.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-background font-sans antialiased">
        <ThemeProvider>
          <I18nProvider locale={locale} dictionary={dictionary}>
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
