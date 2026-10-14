"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown, Menu, Search, X, Wrench } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import { SupportButton } from "@/components/support-button"
import { AccountNavButton } from "@/components/account-nav-button"
import { GlobalSearch } from "@/components/global-search"

type NavLink = { label: string; href: string }

/**
 * Czysty navbar: max 3 linki w rzędzie + „Więcej”.
 * Problem-pages (Asystent / za duży / skan…) zostają w menu, bez ścisku.
 */
export function SiteNavbar() {
  const [open, setOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const moreRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)
  const { t, href } = useI18n()

  const primaryLinks: NavLink[] = [
    { label: t.nav.fileAssistant ?? "Asystent plików", href: href("/otworz") },
    { label: t.nav.converters, href: href("/tools#konwertery") },
    { label: t.nav.guides, href: href("/poradniki") },
  ]

  const moreLinks: NavLink[] = [
    {
      label: t.nav.wontOpen ?? "Nie otwiera się",
      href: href("/zrob/nie-otwiera-sie"),
    },
    {
      label: t.nav.tooBig ?? "Za duży",
      href: href("/zrob/za-duzy"),
    },
    {
      label: t.nav.scanToPdf ?? "Skan → PDF",
      href: href("/zrob/skan-do-pdf"),
    },
    {
      label: t.nav.privacyProblem ?? "Prywatność",
      href: href("/zrob/prywatnosc"),
    },
    { label: t.nav.premium, href: href("/premium") },
    { label: t.nav.calculators, href: href("/tools#kalkulatory") },
    { label: t.nav.aiTools, href: href("/#ai") },
    { label: t.nav.aboutMe, href: href("/o-mnie") },
    { label: t.nav.contact, href: href("/kontakt") },
    { label: t.nav.faq, href: href("/faq") },
  ]

  const allLinks = [...primaryLinks, ...moreLinks]

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as Node
      if (!moreRef.current?.contains(target)) setMoreOpen(false)
      if (!searchRef.current?.contains(target)) setSearchOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 w-full max-w-6xl items-center gap-2 rounded-2xl border border-white/10 bg-background/80 px-3 backdrop-blur-xl sm:gap-3 sm:px-4"
      >
        <a href={href("/")} className="flex shrink-0 items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
            <Wrench className="size-4" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold tracking-tight text-foreground sm:text-base">
            Toolando
          </span>
        </a>

        <div className="relative ml-1 hidden min-w-0 max-w-[14rem] flex-1 md:block lg:max-w-[16rem]">
          <GlobalSearch compact className="relative w-full" />
        </div>

        <div ref={searchRef} className="relative ml-auto md:hidden">
          <button
            type="button"
            onClick={() => {
              setSearchOpen((v) => !v)
              setOpen(false)
            }}
            className="flex size-9 items-center justify-center rounded-lg border border-white/10 text-foreground"
            aria-label={t.search.placeholder}
            aria-expanded={searchOpen}
          >
            <Search className="size-4" aria-hidden="true" />
          </button>
          {searchOpen && (
            <div className="absolute right-0 top-full z-[70] mt-2 w-[min(92vw,20rem)] rounded-xl border border-white/10 bg-background/95 p-2 shadow-xl backdrop-blur-md">
              <GlobalSearch compact className="relative w-full" />
            </div>
          )}
        </div>

        <div className="ml-auto hidden items-center gap-0.5 xl:flex">
          {primaryLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-lg px-2.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/[0.05] hover:text-foreground"
            >
              {link.label}
            </a>
          ))}

          <div ref={moreRef} className="relative shrink-0">
            <button
              type="button"
              onClick={() => setMoreOpen((v) => !v)}
              className="inline-flex items-center gap-0.5 rounded-lg px-2.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/[0.05] hover:text-foreground"
              aria-expanded={moreOpen}
              aria-haspopup="true"
            >
              {t.nav.more}
              <ChevronDown className="size-3.5 opacity-70" aria-hidden="true" />
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full z-[70] mt-1 max-h-[70vh] min-w-[13rem] overflow-y-auto rounded-xl border border-white/10 bg-background/95 py-1 shadow-xl backdrop-blur-md">
                {moreLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMoreOpen(false)}
                    className="block px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/[0.06] hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          <div className="hidden xl:flex xl:items-center xl:gap-2">
            <AccountNavButton />
            <SupportButton compact />
          </div>

          <button
            type="button"
            onClick={() => {
              setOpen((v) => !v)
              setSearchOpen(false)
            }}
            className="flex size-9 items-center justify-center rounded-lg border border-white/10 text-foreground xl:hidden"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <>
          <button
            type="button"
            aria-label={t.nav.closeMenu}
            className="fixed inset-0 z-40 bg-black/50 xl:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-50 mx-auto mt-2 max-h-[calc(100dvh-5.5rem)] w-full max-w-6xl overflow-y-auto rounded-2xl border border-white/10 bg-background/95 p-4 shadow-xl backdrop-blur-xl xl:hidden">
            <div className="mb-3 sm:hidden">
              <LanguageSwitcher />
            </div>
            <div className="flex flex-col gap-0.5">
              {allLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <AccountNavButton fullWidth className="mt-4" />
            <SupportButton fullWidth className="mt-2" />
          </div>
        </>
      )}
    </header>
  )
}
