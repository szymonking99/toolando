import { NextResponse, type NextRequest } from "next/server"
import {
  defaultLocale,
  detectLocale,
  localeFromCountry,
  normalizeToSupported,
} from "@/lib/i18n/config"
import { isDownloaderEnabled } from "@/lib/seo/ads-policy"

const LOCALE_COOKIE = "toolando-locale"
const LOCALE_MANUAL_COOKIE = "toolando-locale-manual"

/**
 * Matches paths that already start with a locale-like first segment, e.g.
 * `/pl`, `/en`, `/pt-br`, `/zh-hans`. Any ISO code is accepted here — routing
 * is permissive; the dictionary layer decides whether it has translations.
 */
const HAS_LOCALE_PREFIX = /^\/[a-z]{2,3}(-[a-z0-9]{2,8})?(\/|$)/i

/** Auth pages — no locale prefix. Bare `/premium` IS localized. */
const LOCALE_AGNOSTIC_EXACT = ["/sign-in", "/sign-up", "/account"]

function isLocaleAgnostic(pathname: string): boolean {
  if (LOCALE_AGNOSTIC_EXACT.includes(pathname)) return true
  if (pathname.startsWith("/sign-in/")) return true
  if (pathname.startsWith("/sign-up/")) return true
  if (pathname.startsWith("/account/")) return true
  if (pathname === "/premium/success" || pathname.startsWith("/premium/success/")) {
    return true
  }
  if (pathname === "/premium/cancel" || pathname.startsWith("/premium/cancel/")) {
    return true
  }
  return false
}

const DOWNLOADER_PATH = /\/downloader(\/|$)/

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (!isDownloaderEnabled() && DOWNLOADER_PATH.test(pathname)) {
    return new NextResponse(null, { status: 404 })
  }

  // Already locale-prefixed — sync cookie so /sign-in inherits browsing language.
  if (HAS_LOCALE_PREFIX.test(pathname)) {
    const seg = pathname.split("/").filter(Boolean)[0]
    const resolved = seg ? normalizeToSupported(seg) : undefined
    if (resolved) {
      const res = NextResponse.next()
      res.cookies.set(LOCALE_COOKIE, resolved, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      })
      return res
    }
    return NextResponse.next()
  }

  if (isLocaleAgnostic(pathname)) {
    return NextResponse.next()
  }

  // Saved choice only when the user picked a language in the switcher.
  const manualChoice = request.cookies.get(LOCALE_MANUAL_COOKIE)?.value === "1"
  const cookieRaw = manualChoice
    ? request.cookies.get(LOCALE_COOKIE)?.value
    : undefined
  const cookieLocale = cookieRaw ? normalizeToSupported(cookieRaw) : undefined

  const country = request.headers.get("x-vercel-ip-country")
  const fromHeader = detectLocale(request.headers.get("accept-language"))
  const locale =
    cookieLocale ||
    localeFromCountry(country) ||
    fromHeader ||
    defaultLocale

  const url = request.nextUrl.clone()
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  // Run on everything except API routes, Next internals and static files.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}
