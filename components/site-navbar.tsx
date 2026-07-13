"use client"

import { useState } from "react"
import { Menu, X, Wrench } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import { SupportButton } from "@/components/support-button"
import { AccountNavButton } from "@/components/account-nav-button"

export function SiteNavbar() {
  const [open, setOpen] = useState(false)
  const { t, href } = useI18n()

  const links = [
    { label: t.nav.aiTools, href: "#ai" },
    { label: t.nav.tools, href: "#narzedzia" },
    { label: t.nav.categories, href: "#kategorie" },
    { label: t.nav.downloader, href: href("/downloader") },
    { label: t.nav.about, href: "#o-platformie" },
    { label: t.nav.contact, href: href("/kontakt") },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-2xl border border-white/10 bg-background/60 px-6 py-3 backdrop-blur-xl">
        
        {/* Logo */}
        <a href={href("/")} className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
            <Wrench className="size-4" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Toolando.tech
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 whitespace-nowrap lg:flex xl:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop right side */}
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <AccountNavButton />
          <SupportButton />
        </div>

        {/* Mobile hamburger */}
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
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-background/80 p-4 backdrop-blur-xl lg:hidden">
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
