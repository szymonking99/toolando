"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { cn } from "@/lib/utils"

type SupportButtonProps = {
  /** Full-width, larger padding variant for mobile menus / stacked layouts. */
  fullWidth?: boolean
  className?: string
}

/**
 * Premium "Support us" call to action.
 *
 * Visual style: glass/blur surface with a subtle blue→indigo gradient, a soft
 * glow, bold typography and a gentle hover scale — deliberately more eye-catching
 * than the muted nav links, while staying on-brand with Toolando's dark UI.
 */
export function SupportButton({ fullWidth, className }: SupportButtonProps) {
  const { t, href } = useI18n()

  return (
    <Link
      href={href("/wsparcie")}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl",
        "border border-white/20 bg-white/10 backdrop-blur-md",
        "bg-gradient-to-r from-blue-600 to-indigo-600",
        "font-semibold text-white shadow-lg shadow-indigo-600/25",
        "transition-transform duration-200 ease-out hover:scale-[1.03]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        fullWidth
          ? "w-full px-6 py-3.5 text-base"
          : "px-3 py-2 text-sm lg:px-4",
        className,
      )}
    >
      {/* Sheen highlight on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />
      <Heart className={cn(fullWidth ? "size-5" : "size-4")} aria-hidden="true" />
      {/* In the compact top bar the label only appears once there's room (xl+),
          so on tighter widths it stays a neat icon-only button. */}
      <span className={cn(!fullWidth && "hidden xl:inline")}>
        {t.footer.support}
      </span>
    </Link>
  )
}
