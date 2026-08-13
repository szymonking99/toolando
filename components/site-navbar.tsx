"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown, Menu, X, Wrench } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import { SupportButton } from "@/components/support-button"
import { AccountNavButton } from "@/components/account-nav-button"
import { GlobalSearch } from "@/components/global-search"

type NavLink = { label: string; href: string }

const linkClass =
  "shrink-0 whitespace-nowrap rounded-lg px-2 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-white/[0.05] hover:text-foreground xl:px-2.5 xl:text-[13px] 2xl:text-sm"

export function SiteNavbar() {
  const [open, setOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const moreRef = useRef<HTMLDivElement>(null)
  const { t, href } = useI18n()

  const coreLinks: NavLink[] = [
    { label: t.nav.converters, href: href("/tools#konwertery") },
    { label: t.nav.calculators, href: href("/tools#kalkulatory") },
    { label: t.nav.aiTools, href: href("/#ai") },
    { label: t.nav.guides, href: href("/poradniki") },
  ]

  const extendedLinks: NavLink[] = [
    { label: t.nav.premium, href: href("/premium") },
    { label: t.nav.formats, href: href("/formaty") },
  ]

  const moreLinks: NavLink[] = [
    { label: t.nav.faq, href: href("/faq") },
    { label: t.nav.aboutMe, href: href("/o-mnie") },
    { label: t.nav.contact, href: href("/kontakt") },
  ]

  const allLinks = [...coreLinks, ...extendedLinks, ...moreLinks]

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!moreRef.current?.contains(e.target as Node)) setMoreOpen(false)
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
    <header className="fixed inset-x-0 top-0 z-50 px-2 pt-3 sm:px-3 sm:pt-4">
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-[100rem] items-center gap-2 rounded-2xl border border-white/10 bg-background/70 px-2.5 py-2 backdrop-blur-xl sm:gap-3 sm:px-4 sm:py-2.5"
      >
        {/* Logo */}
        <a href={href("/")} className="flex shrink-0 items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
            <Wrench className="size-4" aria-hidden="true" />
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-foreground lg:inline lg:text-base">
            Toolando
          </span>
        </a>

        {/* Search */}
        <div className="relative hidden w-[11rem] shrink-0 min-w-0 lg:block xl:w-[13rem] 2xl:w-[15rem]">
          <GlobalSearch compact className="relative w-full max-w-full" />
        </div>

        {/* Desktop links — zajmuje środek, nie wypycha akcji poza ekran */}
        <div className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 overflow-hidden lg:flex xl:gap-1">
          {coreLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}

          {/* Premium + Formaty — inline dopiero od 2xl */}
          {extendedLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${linkClass} hidden 2xl:inline-flex`}
            >
              {link.label}
            </a>
          ))}

          {/* FAQ / O mnie / Kontakt — tylko na bardzo szerokich ekranach */}
          {moreLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${linkClass} hidden min-[1700px]:inline-flex`}
            >
              {link.label}
            </a>
          ))}

          {/* Więcej — ukryte gdy wszystkie linki są inline */}
          <div ref={moreRef} className="relative min-[1700px]:hidden">
            <button
              type="button"
              onClick={() => setMoreOpen((v) => !v)}
              className="inline-flex items-center gap-0.5 rounded-lg px-2 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-white/[0.05] hover:text-foreground xl:text-[13px]"
              aria-expanded={moreOpen}
              aria-haspopup="true"
            >
              {t.nav.more}
              <ChevronDown className="size-3.5 opacity-70" aria-hidden="true" />
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full z-[70] mt-1 min-w-[11rem] rounded-xl border border-white/10 bg-background/95 py-1 shadow-xl backdrop-blur-md">
                {extendedLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMoreOpen(false)}
                    className="block px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/[0.06] hover:text-foreground 2xl:hidden"
                  >
                    {link.label}
                  </a>
                ))}
                {moreLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMoreOpen(false)}
                    className="block px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/[0.06] hover:text-foreground min-[1700px]:hidden"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Akcje — zawsze po prawej, bez zawijania */}
        <div className="ml-auto flex shrink-0 items-center justify-end gap-1.5 sm:gap-2 lg:ml-0">
          <div className="hidden items-center gap-1.5 sm:gap-2 lg:flex">
            <LanguageSwitcher />
            <AccountNavButton />
            <SupportButton compact />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex size-9 items-center justify-center rounded-lg border border-white/10 text-foreground"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <>
          <button
            type="button"
            aria-label={t.nav.closeMenu}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-50 mx-auto mt-2 max-h-[calc(100dvh-5.5rem)] w-full max-w-[100rem] overflow-y-auto rounded-2xl border border-white/10 bg-background/95 p-4 shadow-xl backdrop-blur-xl lg:hidden">
            <div className="mb-4">
              <GlobalSearch compact className="relative w-full" />
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
