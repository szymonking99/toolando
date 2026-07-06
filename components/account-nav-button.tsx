"use client"

import Link from "next/link"
import { Crown, User } from "lucide-react"
import { useUser } from "@/hooks/use-user"
import { useI18n } from "@/components/i18n-provider"
import { cn } from "@/lib/utils"

type AccountNavButtonProps = {
  fullWidth?: boolean
  className?: string
}

/**
 * Link do konta w nawigacji. Pokazuje "Zaloguj się" dla gości,
 * a dla zalogowanych ikonę konta z odznaką Premium (jeśli aktywne).
 */
export function AccountNavButton({ fullWidth, className }: AccountNavButtonProps) {
  const { isLoggedIn, isPremium, isLoading } = useUser()
  const { t } = useI18n()

  if (isLoading) {
    return (
      <span
        className={cn(
          "inline-flex h-9 items-center rounded-xl border border-white/10 bg-white/5 px-4",
          fullWidth && "w-full",
          className,
        )}
        aria-hidden="true"
      >
        <span className="h-4 w-16 animate-pulse rounded bg-white/10" />
      </span>
    )
  }

  if (!isLoggedIn) {
    return (
      <Link
        href="/sign-in"
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/10",
          fullWidth && "w-full py-3",
          className,
        )}
      >
        <User className="size-4" aria-hidden="true" />
        {t.nav.signIn}
      </Link>
    )
  }

  return (
    <Link
      href="/account"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/10",
        fullWidth && "w-full py-3",
        className,
      )}
    >
      {isPremium ? (
        <Crown className="size-4 text-amber-300" aria-hidden="true" />
      ) : (
        <User className="size-4" aria-hidden="true" />
      )}
      {t.nav.account}
    </Link>
  )
}
