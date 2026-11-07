import type { Metadata, Viewport } from "next"
import { DM_Sans, Geist_Mono, Syne } from "next/font/google"
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

export const metadata: Metadata = {
  title: "Premium — Toolando.tech",
  description: "Zarządzaj subskrypcją Premium w Toolando.tech.",
  robots: { index: false, follow: false },
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f8f9" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1419" },
  ],
}

export default function PremiumLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pl"
      suppressHydrationWarning
      className={`bg-background ${dmSans.variable} ${syne.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-background font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
