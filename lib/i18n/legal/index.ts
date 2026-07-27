import type { LegalDocumentData } from "@/components/legal-document"
import { termsEn } from "./terms-en"
import { termsPl } from "./terms-pl"
import { termsDe } from "./terms-de"
import { termsEs } from "./terms-es"
import { termsUk } from "./terms-uk"
import { privacyEn } from "./privacy-en"
import { privacyPl } from "./privacy-pl"
import { privacyDe } from "./privacy-de"
import { privacyEs } from "./privacy-es"
import { privacyUk } from "./privacy-uk"

const termsByLocale: Record<string, typeof termsPl> = {
  pl: termsPl,
  en: termsEn,
  de: termsDe,
  es: termsEs,
  uk: termsUk,
}

const privacyByLocale: Record<string, typeof privacyPl> = {
  pl: privacyPl,
  en: privacyEn,
  de: privacyDe,
  es: privacyEs,
  uk: privacyUk,
}

export function getTermsDocument(locale: string) {
  return termsByLocale[locale] ?? termsEn
}

export function getPrivacyDocument(locale: string) {
  return privacyByLocale[locale] ?? privacyEn
}
