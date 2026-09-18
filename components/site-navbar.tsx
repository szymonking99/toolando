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
  "inline-flex shrink-0 items-center rounded-lg px-2 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-white/[0.05] hover:text-foreground xl:px-2.5"

const menuItemClass =
  "block px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/[0.06] hover:text-foreground"

function NavDropdown({
  label,
  links,
}: {
  label: string
  links: NavLink[]
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [])

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`${linkClass} gap-0.5`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown
          className={`size-3.5 opacity-70 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-[70] mt-1.5 min-w-[13.5rem] rounded-xl border border-white/10 bg-background py-1.5 shadow-2xl ring-1 ring-black/40">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={menuItemClass}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export function SiteNavbar() {
  const [open, setOpen] = useState(false)
  const { t, href } = useI18n()

  const mainLinks: NavLink[] = [
    {
      label: t.nav.assistantShort ?? t.nav.fileAssistant ?? "Assistant",
      href: href("/otworz"),
    },
    { label: t.nav.converters, href: href("/tools#konwertery") },
    { label: t.nav.guides, href: href("/poradniki") },
    { label: t.nav.premium, href: href("/premium") },
  ]

  const problemLinks: NavLink[] = [
    {
      label: t.nav.wontOpen ?? "Won’t open",
      href: href("/zrob/nie-otwiera-sie"),
    },
    {
      label: t.nav.tooBig ?? "Too big",
      href: href("/zrob/za-duzy"),
    },
    {
      label: t.nav.scanToPdf ?? "Scan → PDF",
      href: href("/zrob/skan-do-pdf"),
    },
    {
      label: t.nav.privacyProblem ?? "Privacy",
      href: href("/zrob/prywatnosc"),
    },
  ]

  const moreLinks: NavLink[] = [
    { label: t.nav.aboutMe, href: href("/o-mnie") },
    { label: t.nav.contact, href: href("/kontakt") },
    { label: t.nav.calculators, href: href("/tools#kalkulatory") },
    { label: t.nav.aiTools, href: href("/#ai") },
    { label: t.nav.faq, href: href("/faq") },
  ]

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
        className="mx-auto flex h-14 w-full max-w-6xl items-center gap-2 rounded-2xl border border-white/10 bg-background/80 px-3 backdrop-blur-xl sm:h-[3.75rem] sm:gap-3 sm:px-4"
      >
        <a href={href("/")} className="flex shrink-0 items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
            <Wrench className="size-4" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold tracking-tight text-foreground sm:text-base">
            Toolando
          </span>
        </a>

        <div className="ml-1 hidden items-center gap-0.5 lg:flex">
          {mainLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
          <NavDropdown
            label={t.nav.problems ?? "Problems"}
            links={problemLinks}
          />
          <NavDropdown label={t.nav.more} links={moreLinks} />
        </div>

        <div className="mx-2 hidden min-w-0 flex-1 xl:block xl:max-w-xs 2xl:max-w-sm">
          <GlobalSearch compact className="relative w-full" />
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <div className="hidden items-center gap-2 lg:flex">
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
          <div className="relative z-50 mx-auto mt-2 max-h-[calc(100dvh-5.5rem)] w-full max-w-6xl overflow-y-auto rounded-2xl border border-white/10 bg-background/95 p-4 shadow-xl backdrop-blur-xl lg:hidden">
            <div className="mb-4">
              <GlobalSearch compact className="relative w-full" />
            </div>

            <p className="mb-1 px-3 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              {t.nav.menu ?? "Menu"}
            </p>
            <div className="mb-3 flex flex-col">
              {mainLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <p className="mb-1 px-3 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              {t.nav.problems ?? "Problems"}
            </p>
            <div className="mb-3 flex flex-col">
              {problemLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <p className="mb-1 px-3 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              {t.nav.more}
            </p>
            <div className="flex flex-col">
              {moreLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
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
