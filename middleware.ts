import { NextResponse, type NextRequest } from "next/server"
import {
  defaultLocale,
  detectLocale,
  localeFromCountry,
  normalizeToSupported,
} from "@/lib/i18n/config"

const LOCALE_COOKIE = "toolando-locale"
const LOCALE_MANUAL_COOKIE = "toolando-locale-manual"

/**
 * Matches paths that already start with a locale-like first segment, e.g.
 * `/pl`, `/en`, `/pt-br`, `/zh-hans`. Any ISO code is accepted here — routing
 * is permissive; the dictionary layer decides whether it has translations.
 */
const HAS_LOCALE_PREFIX = /^\/[a-z]{2,3}(-[a-z0-9]{2,8})?(\/|$)/i

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Already locale-prefixed — let it through.
  if (HAS_LOCALE_PREFIX.test(pathname)) {
    return NextResponse.next()
  }

  // Locale-agnostic routes (Stripe URLs, auth & account pages) are served as-is.
  const LOCALE_AGNOSTIC = ["/premium", "/sign-in", "/sign-up", "/account"]
  if (LOCALE_AGNOSTIC.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return NextResponse.next()
  }

  // Saved choice only when the user picked a language in the switcher.
  const manualChoice = request.cookies.get(LOCALE_MANUAL_COOKIE)?.value === "1"
  const cookieRaw = manualChoice
    ? request.cookies.get(LOCALE_COOKIE)?.value
    : undefined
  const cookieLocale = cookieRaw ? normalizeToSupported(cookieRaw) : undefined

  const country = request.headers.get("x-vercel-ip-country")
  const locale =
    cookieLocale ||
    localeFromCountry(country) ||
    detectLocale(request.headers.get("accept-language")) ||
    defaultLocale

  const url = request.nextUrl.clone()
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  // Run on everything except API routes, Next internals and static files.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}
