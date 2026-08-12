"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown, Menu, X, Wrench } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import { SupportButton } from "@/components/support-button"
import { AccountNavButton } from "@/components/account-nav-button"
import { GlobalSearch } from "@/components/global-search"

type NavLink = { label: string; href: string }

export function SiteNavbar() {
  const [open, setOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const moreRef = useRef<HTMLDivElement>(null)
  const { t, href } = useI18n()

  // Always visible from lg up — enough room with full-bleed bar.
  const primaryLinks: NavLink[] = [
    { label: t.nav.converters, href: href("/tools#konwertery") },
    { label: t.nav.calculators, href: href("/tools#kalkulatory") },
    { label: t.nav.aiTools, href: href("/#ai") },
    { label: t.nav.guides, href: href("/poradniki") },
    { label: t.nav.premium, href: href("/premium") },
    { label: t.nav.formats, href: href("/formaty") },
  ]

  // Secondary — shown inline from xl, otherwise under "More"
  const moreLinks: NavLink[] = [
    { label: t.nav.faq, href: href("/faq") },
    { label: t.nav.aboutMe, href: href("/o-mnie") },
    { label: t.nav.contact, href: href("/kontakt") },
  ]

  const allLinks = [...primaryLinks, ...moreLinks]

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
        className="mx-auto flex w-full max-w-[100rem] items-center gap-1.5 rounded-2xl border border-white/10 bg-background/70 px-2.5 py-2 backdrop-blur-xl sm:gap-2 sm:px-4 sm:py-2.5"
      >
        {/* Logo */}
        <a href={href("/")} className="flex shrink-0 items-center gap-2 pr-1">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
            <Wrench className="size-4" aria-hidden="true" />
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-foreground min-[900px]:inline lg:text-base">
            Toolando
          </span>
        </a>

        {/* Search */}
        <div className="relative hidden min-w-0 flex-[0_1_180px] md:block lg:flex-[0_1_220px] xl:flex-[0_1_280px]">
          <GlobalSearch compact className="relative w-full" />
        </div>

        {/* Primary links */}
        <div className="hidden min-w-0 flex-1 items-center justify-center gap-0 lg:flex">
          {primaryLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-lg px-1.5 py-1.5 text-[12px] font-medium text-muted-foreground transition-colors hover:bg-white/[0.05] hover:text-foreground xl:px-2.5 xl:text-[13px] 2xl:px-3 2xl:text-sm"
            >
              {link.label}
            </a>
          ))}

          {/* FAQ / O mnie / Kontakt — inline on xl+ */}
          <div className="hidden items-center xl:flex">
            {moreLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="shrink-0 rounded-lg px-2.5 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-white/[0.05] hover:text-foreground 2xl:px-3 2xl:text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* More menu — only below xl */}
          <div ref={moreRef} className="relative xl:hidden">
            <button
              type="button"
              onClick={() => setMoreOpen((v) => !v)}
              className="inline-flex items-center gap-0.5 rounded-lg px-1.5 py-1.5 text-[12px] font-medium text-muted-foreground transition-colors hover:bg-white/[0.05] hover:text-foreground"
              aria-expanded={moreOpen}
              aria-haspopup="true"
            >
              {t.nav.more}
              <ChevronDown className="size-3.5 opacity-70" aria-hidden="true" />
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full z-[70] mt-1 min-w-[11rem] rounded-xl border border-white/10 bg-background/95 py-1 shadow-xl backdrop-blur-md">
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

        {/* Desktop actions */}
        <div className="ml-auto hidden shrink-0 items-center gap-1.5 lg:flex">
          <LanguageSwitcher />
          <AccountNavButton />
          <SupportButton compact />
        </div>

        {/* Mobile / tablet */}
        <div className="ml-auto flex shrink-0 items-center gap-2 lg:hidden">
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
            <div className="mb-4 md:hidden">
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
