/** Public contact address — opens in the user's mail app via mailto: links. */
export const CONTACT_EMAIL = "badyltech@outlook.com"

export type MailtoOptions = {
  subject?: string
  body?: string
  cc?: string
  bcc?: string
}

/** Build a mailto: URL that opens a new message with the given fields prefilled. */
export function buildMailtoUrl(options: MailtoOptions = {}): string {
  const params = new URLSearchParams()
  if (options.subject) params.set("subject", options.subject)
  if (options.body) params.set("body", options.body)
  if (options.cc) params.set("cc", options.cc)
  if (options.bcc) params.set("bcc", options.bcc)
  const query = params.toString()
  return query
    ? `mailto:${CONTACT_EMAIL}?${query}`
    : `mailto:${CONTACT_EMAIL}`
}
