"use client"

import { Wrench } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/components/i18n-provider"

export function SiteFooter() {
  const { t, href } = useI18n()

  const links = [
    { label: t.footer.tools, href: href("/tools") },
    { label: t.footer.support, href: href("/wsparcie") },
    { label: t.footer.contact, href: href("/kontakt") },
    { label: t.footer.privacy, href: href("/polityka-prywatnosci") },
    { label: t.footer.terms, href: href("/regulamin") },
  ]

  return (
    <footer className="border-t border-white/10 px-4 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        
        {/* Logo */}
        <Link href={href("/")} className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
            <Wrench className="size-4" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Toolando
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Copyright + Email */}
        <div className="flex flex-col items-center md:items-end">
          <p className="text-sm text-muted-foreground">{t.footer.rights}</p>
          <a
            href="mailto:badyltech@outlook.com"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            badyltech@outlook.com
          </a>
        </div>
      </div>
    </footer>
  )
}
