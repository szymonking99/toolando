export const dynamic = "force-static"

import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { FormatProfileView } from "@/components/format-profile-view"
import { buildPageMetadata } from "@/lib/seo/metadata"
import {
  ALL_FORMAT_IDS,
  getFormatProfile,
  getFormatsHubMeta,
} from "@/lib/i18n/formats"

export function generateStaticParams() {
  return ALL_FORMAT_IDS.map((format) => ({ format }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; format: string }>
}): Promise<Metadata> {
  const { locale, format } = await params
  const profile = getFormatProfile(locale, format)
  if (!profile) return { title: "Format — Toolando.tech" }
  return buildPageMetadata({
    locale,
    path: `/formaty/${format}`,
    title: `${profile.name} (.${profile.extension.toUpperCase()}) — Toolando.tech`,
    description: profile.intro.slice(0, 160),
    type: "article",
  })
}

export default async function FormatDetailPage({
  params,
}: {
  params: Promise<{ locale: string; format: string }>
}) {
  const { locale, format } = await params
  const profile = getFormatProfile(locale, format)
  if (!profile) return notFound()
  const hub = getFormatsHubMeta(locale)

  return <FormatProfileView locale={locale} profile={profile} hub={hub} />
}
