import { fallbackLocale, normalizeToSupported } from "./config"

type Extra = { title: string; paragraphs: string[] }

const pl: Extra[] = [
  {
    title: "Co stoi za konwersją na serwerze",
    paragraphs: [
      "Audio i wideo idą przez FFmpeg. Dokumenty DOCX↔PDF przez LibreOffice na moim Windows Server — nie przez „magiczny” skrypt w przeglądarce, który psuje spisy treści.",
      "Obrazy (JPG/PNG/WebP) często liczy Sharp. PDF do obrazu rasteryzuje strony; nie odzyskuje ostrości ze skanu.",
      "Limit rozmiaru jest celowy. Większy plik to dłuższy czas i większy koszt serwera, nie „brak funkcji”.",
    ],
  },
  {
    title: "Kalkulatory i hasła — bez wysyłki",
    paragraphs: [
      "VAT, NIP/PESEL, IBAN, generator haseł i hash liczą się w JavaScript po Twojej stronie. Nie ma sensu trzymać PESEL-u na hostingu.",
      "To dlatego te narzędzia nie są osobnymi artykułami SEO: nie mam przy nich historii testu konwersji, tylko lokalny licznik.",
    ],
  },
]

const en: Extra[] = [
  {
    title: "What actually runs a server conversion",
    paragraphs: [
      "Audio and video go through FFmpeg. DOCX↔PDF goes through LibreOffice on my Windows Server — not a browser script that wrecks tables of contents.",
      "Images (JPG/PNG/WebP) often use Sharp. PDF-to-image rasterizes pages; it does not sharpen a scan.",
      "File-size limits are intentional. A bigger file means more time and server cost, not a missing feature.",
    ],
  },
  {
    title: "Calculators and passwords stay local",
    paragraphs: [
      "VAT, tax IDs, IBAN, the password generator and hashes run in JavaScript on your device. There is no reason to park a national ID on a host.",
      "That is also why those tools are not SEO articles: I do not have a conversion-test story for them, only a local calculator.",
    ],
  },
]

export function getHowItWorksExtras(locale: string): Extra[] {
  const resolved = normalizeToSupported(locale) ?? fallbackLocale
  return resolved === "pl" ? pl : en
}
