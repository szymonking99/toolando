import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { cookies } from "next/headers"
import { normalizeToSupported, fallbackLocale, rtlLocales } from "@/lib/i18n/config"
import "../globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Konto — Toolando.tech",
  description: "Zaloguj się lub załóż konto w Toolando.tech.",
  robots: { index: false, follow: false },
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default async function AccountLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies()
  const raw = cookieStore.get("toolando-locale")?.value || fallbackLocale
  const locale = normalizeToSupported(raw) ?? fallbackLocale
  const dir = rtlLocales.has(locale) ? "rtl" : "ltr"

  return (
    <html
      lang={locale}
      dir={dir}
      className={`dark bg-background ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-background font-sans antialiased">{children}</body>
    </html>
  )
}
