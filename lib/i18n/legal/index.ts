import type { LegalDocumentData } from "@/components/legal-document"
import { termsEn } from "./terms-en"
import { termsPl } from "./terms-pl"
import { termsDe } from "./terms-de"
import { termsEs } from "./terms-es"
import { termsUk } from "./terms-uk"
import { termsFr } from "./terms-fr"
import { termsIt } from "./terms-it"
import { termsPt } from "./terms-pt"
import { termsNl } from "./terms-nl"
import { termsSv } from "./terms-sv"
import { termsNo } from "./terms-no"
import { termsDa } from "./terms-da"
import { termsFi } from "./terms-fi"
import { termsCs } from "./terms-cs"
import { termsRo } from "./terms-ro"
import { termsHu } from "./terms-hu"
import { termsEl } from "./terms-el"
import { termsTr } from "./terms-tr"
import { termsRu } from "./terms-ru"
import { termsAr } from "./terms-ar"
import { termsZh } from "./terms-zh"
import { termsJa } from "./terms-ja"
import { termsKo } from "./terms-ko"
import { termsHi } from "./terms-hi"
import { termsId } from "./terms-id"
import { privacyEn } from "./privacy-en"
import { privacyPl } from "./privacy-pl"
import { privacyDe } from "./privacy-de"
import { privacyEs } from "./privacy-es"
import { privacyUk } from "./privacy-uk"
import { privacyFr } from "./privacy-fr"
import { privacyIt } from "./privacy-it"
import { privacyPt } from "./privacy-pt"
import { privacyNl } from "./privacy-nl"
import { privacySv } from "./privacy-sv"
import { privacyNo } from "./privacy-no"
import { privacyDa } from "./privacy-da"
import { privacyFi } from "./privacy-fi"
import { privacyCs } from "./privacy-cs"
import { privacyRo } from "./privacy-ro"
import { privacyHu } from "./privacy-hu"
import { privacyEl } from "./privacy-el"
import { privacyTr } from "./privacy-tr"
import { privacyRu } from "./privacy-ru"
import { privacyAr } from "./privacy-ar"
import { privacyZh } from "./privacy-zh"
import { privacyJa } from "./privacy-ja"
import { privacyKo } from "./privacy-ko"
import { privacyHi } from "./privacy-hi"
import { privacyId } from "./privacy-id"

const termsByLocale: Record<string, LegalDocumentData> = {
  pl: termsPl,
  en: termsEn,
  de: termsDe,
  es: termsEs,
  uk: termsUk,
  fr: termsFr,
  it: termsIt,
  pt: termsPt,
  nl: termsNl,
  sv: termsSv,
  no: termsNo,
  da: termsDa,
  fi: termsFi,
  cs: termsCs,
  ro: termsRo,
  hu: termsHu,
  el: termsEl,
  tr: termsTr,
  ru: termsRu,
  ar: termsAr,
  zh: termsZh,
  ja: termsJa,
  ko: termsKo,
  hi: termsHi,
  id: termsId,
}

const privacyByLocale: Record<string, LegalDocumentData> = {
  pl: privacyPl,
  en: privacyEn,
  de: privacyDe,
  es: privacyEs,
  uk: privacyUk,
  fr: privacyFr,
  it: privacyIt,
  pt: privacyPt,
  nl: privacyNl,
  sv: privacySv,
  no: privacyNo,
  da: privacyDa,
  fi: privacyFi,
  cs: privacyCs,
  ro: privacyRo,
  hu: privacyHu,
  el: privacyEl,
  tr: privacyTr,
  ru: privacyRu,
  ar: privacyAr,
  zh: privacyZh,
  ja: privacyJa,
  ko: privacyKo,
  hi: privacyHi,
  id: privacyId,
}

export function getTermsDocument(locale: string) {
  return termsByLocale[locale] ?? termsEn
}

export function getPrivacyDocument(locale: string) {
  return privacyByLocale[locale] ?? privacyEn
}
