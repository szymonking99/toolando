"use client"

import { useState } from "react"
import { Menu, X, Wrench } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import { SupportButton } from "@/components/support-button"
import { AccountNavButton } from "@/components/account-nav-button"
import { GlobalSearch } from "@/components/global-search"

export function SiteNavbar() {
  const [open, setOpen] = useState(false)
  const { t, href } = useI18n()

  const links = [
    { label: t.nav.converters, href: href("/tools#konwertery") },
    { label: t.nav.calculators, href: href("/tools#kalkulatory") },
    { label: t.nav.aiTools, href: href("/#ai") },
    { label: t.nav.guides, href: href("/poradniki") },
    { label: t.nav.premium, href: href("/premium") },
    { label: t.nav.formats, href: href("/formaty") },
    { label: t.nav.faq, href: href("/faq") },
    { label: t.nav.contact, href: href("/kontakt") },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-4 sm:px-4">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-background/60 px-3 py-3 backdrop-blur-xl sm:px-4 lg:gap-3">
        <a href={href("/")} className="flex shrink-0 items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
            <Wrench className="size-4" aria-hidden="true" />
          </span>
          <span className="hidden text-base font-semibold tracking-tight text-foreground sm:inline lg:text-lg">
            Toolando.tech
          </span>
        </a>

        <div className="order-3 w-full min-[1024px]:order-none min-[1024px]:max-w-md min-[1024px]:flex-1">
          <GlobalSearch compact className="relative w-full" />
        </div>

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-2 whitespace-nowrap xl:gap-3 min-[1280px]:flex">
          {links.slice(0, 6).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="truncate text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="relative z-[60] ml-auto hidden shrink-0 items-center gap-1.5 min-[1024px]:flex lg:gap-2">
          <LanguageSwitcher />
          <AccountNavButton />
          <SupportButton compact />
        </div>

        <div className="relative z-[60] ml-auto flex shrink-0 items-center gap-2 min-[1024px]:hidden">
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
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-background/80 p-4 backdrop-blur-xl min-[1024px]:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <AccountNavButton fullWidth className="mt-3" />
            <SupportButton fullWidth className="mt-2" />
          </div>
        </div>
      )}
    </header>
  )
}
