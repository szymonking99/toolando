import type { Metadata } from "next"
import { buildPageMetadata } from "@/lib/seo/metadata"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isPl = locale === "pl"
  return buildPageMetadata({
    locale,
    path: "/prywatnosc",
    title: isPl
      ? "Prywatność plików — lokalne narzędzia, bez przechowywania"
      : "File privacy — local tools, no file storage",
    description: isPl
      ? "Jak Toolando chroni pliki: lokalny podgląd, usuwanie EXIF, skaner metadanych i konwersje bez trzymania plików na serwerze."
      : "How Toolando protects files: local preview, EXIF removal, metadata scanning, and conversions without keeping files on the server.",
  })
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
