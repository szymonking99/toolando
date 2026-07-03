import { NextResponse, type NextRequest } from "next/server"
import { detectLocale } from "@/lib/i18n/config"

const LOCALE_COOKIE = "toolando-locale"

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

  // Locale-agnostic routes (e.g. Stripe success/cancel URLs) are served as-is.
  if (pathname === "/premium" || pathname.startsWith("/premium/")) {
    return NextResponse.next()
  }

  // Resolve the preferred locale: saved cookie first, then Accept-Language.
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value
  const locale =
    (cookieLocale && cookieLocale.trim()) ||
    detectLocale(request.headers.get("accept-language"))

  const url = request.nextUrl.clone()
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  // Run on everything except API routes, Next internals and static files.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}
