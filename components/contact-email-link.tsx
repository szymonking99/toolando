import type { ReactNode } from "react"
import {
  buildMailtoUrl,
  CONTACT_EMAIL,
  type MailtoOptions,
} from "@/lib/contact-email"

type ContactEmailLinkProps = MailtoOptions & {
  className?: string
  children?: ReactNode
  ariaLabel?: string
}

/** Clickable address — opens the default mail client with a new message to us. */
export function ContactEmailLink({
  className,
  children,
  ariaLabel,
  ...mailto
}: ContactEmailLinkProps) {
  return (
    <a
      href={buildMailtoUrl(mailto)}
      className={className}
      aria-label={ariaLabel ?? CONTACT_EMAIL}
    >
      {children ?? CONTACT_EMAIL}
    </a>
  )
}
