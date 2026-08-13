export type IbanValidation = {
  valid: boolean
  country: string
  formatted: string
  message: string
  messageKey?: IbanMessageKey
  messageParams?: Record<string, string | number>
}

export type IbanMessageKey =
  | "empty"
  | "format"
  | "unknownCountry"
  | "length"
  | "checksum"
  | "ok"

const COUNTRY_LENGTHS: Record<string, number> = {
  AD: 24,
  AE: 23,
  AL: 28,
  AT: 20,
  AZ: 28,
  BA: 20,
  BE: 16,
  BG: 22,
  BH: 22,
  BR: 29,
  BY: 28,
  CH: 21,
  CR: 22,
  CY: 28,
  CZ: 24,
  DE: 22,
  DK: 18,
  DO: 28,
  EE: 20,
  EG: 29,
  ES: 24,
  FI: 18,
  FO: 18,
  FR: 27,
  GB: 22,
  GE: 22,
  GI: 23,
  GL: 18,
  GR: 27,
  GT: 28,
  HR: 21,
  HU: 28,
  IE: 22,
  IL: 23,
  IS: 26,
  IT: 27,
  JO: 30,
  KW: 30,
  KZ: 20,
  LB: 28,
  LC: 32,
  LI: 21,
  LT: 20,
  LU: 20,
  LV: 21,
  MC: 27,
  MD: 24,
  ME: 22,
  MK: 19,
  MR: 27,
  MT: 31,
  MU: 30,
  NL: 18,
  NO: 15,
  PK: 24,
  PL: 28,
  PS: 29,
  PT: 25,
  QA: 29,
  RO: 24,
  RS: 22,
  SA: 24,
  SE: 24,
  SI: 19,
  SK: 24,
  SM: 27,
  TN: 24,
  TR: 26,
  UA: 29,
  VA: 22,
  VG: 24,
  XK: 20,
}

const MESSAGES: Record<string, Record<IbanMessageKey, string>> = {
  pl: {
    empty: "Wpisz numer IBAN.",
    format: "IBAN musi zaczynać się od dwuliterowego kodu kraju.",
    unknownCountry: "Nieobsługiwany lub nieznany kod kraju: {country}.",
    length: "Dla {country} oczekiwana długość to {expected} znaków (podano {length}).",
    checksum: "Suma kontrolna IBAN jest niepoprawna.",
    ok: "Numer IBAN jest poprawny.",
  },
  en: {
    empty: "Enter an IBAN number.",
    format: "IBAN must start with a two-letter country code.",
    unknownCountry: "Unsupported or unknown country code: {country}.",
    length: "For {country} the expected length is {expected} characters (got {length}).",
    checksum: "IBAN checksum is invalid.",
    ok: "IBAN number is valid.",
  },
  de: {
    empty: "IBAN-Nummer eingeben.",
    format: "IBAN muss mit einem zweistelligen Ländercode beginnen.",
    unknownCountry: "Nicht unterstützter oder unbekannter Ländercode: {country}.",
    length: "Für {country} beträgt die erwartete Länge {expected} Zeichen (angegeben: {length}).",
    checksum: "IBAN-Prüfsumme ist ungültig.",
    ok: "IBAN-Nummer ist gültig.",
  },
  es: {
    empty: "Introduce un número IBAN.",
    format: "El IBAN debe empezar con un código de país de dos letras.",
    unknownCountry: "Código de país no admitido o desconocido: {country}.",
    length: "Para {country} la longitud esperada es de {expected} caracteres (se indicaron {length}).",
    checksum: "La suma de control del IBAN no es válida.",
    ok: "El número IBAN es válido.",
  },
  uk: {
    empty: "Введіть номер IBAN.",
    format: "IBAN має починатися з дволітерного коду країни.",
    unknownCountry: "Непідтримуваний або невідомий код країни: {country}.",
    length: "Для {country} очікувана довжина — {expected} символів (вказано {length}).",
    checksum: "Контрольна сума IBAN неправильна.",
    ok: "Номер IBAN правильний.",
  },
}

function mod97(digits: string): number {
  let remainder = 0
  for (let i = 0; i < digits.length; i++) {
    remainder = (remainder * 10 + Number(digits[i])) % 97
  }
  return remainder
}

function ibanChecksum(iban: string): boolean {
  const rearranged = iban.slice(4) + iban.slice(0, 4)
  const expanded = rearranged
    .split("")
    .map((ch) => (/[A-Z]/.test(ch) ? String(ch.charCodeAt(0) - 55) : ch))
    .join("")
  return mod97(expanded) === 1
}

function formatMessage(
  locale: string,
  key: IbanMessageKey,
  params?: Record<string, string | number>,
): string {
  const map = MESSAGES[locale] ?? MESSAGES.en
  let msg = map[key] ?? MESSAGES.en[key]
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      msg = msg.replace(`{${k}}`, String(v))
    }
  }
  return msg
}

export function formatIban(raw: string): string {
  const compact = raw.replace(/\s+/g, "").toUpperCase()
  return compact.replace(/(.{4})/g, "$1 ").trim()
}

export function validateIban(raw: string, locale = "en"): IbanValidation {
  const iban = raw.replace(/\s+/g, "").toUpperCase()
  const formatted = formatIban(iban)

  if (!iban) {
    return {
      valid: false,
      country: "",
      formatted: "",
      message: formatMessage(locale, "empty"),
      messageKey: "empty",
    }
  }

  if (!/^[A-Z]{2}[0-9A-Z]+$/.test(iban)) {
    return {
      valid: false,
      country: iban.slice(0, 2),
      formatted,
      message: formatMessage(locale, "format"),
      messageKey: "format",
    }
  }

  const country = iban.slice(0, 2)
  const expected = COUNTRY_LENGTHS[country]

  if (!expected) {
    return {
      valid: false,
      country,
      formatted,
      message: formatMessage(locale, "unknownCountry", { country }),
      messageKey: "unknownCountry",
      messageParams: { country },
    }
  }

  if (iban.length !== expected) {
    return {
      valid: false,
      country,
      formatted,
      message: formatMessage(locale, "length", {
        country,
        expected,
        length: iban.length,
      }),
      messageKey: "length",
      messageParams: { country, expected, length: iban.length },
    }
  }

  if (!ibanChecksum(iban)) {
    return {
      valid: false,
      country,
      formatted,
      message: formatMessage(locale, "checksum"),
      messageKey: "checksum",
    }
  }

  return {
    valid: true,
    country,
    formatted,
    message: formatMessage(locale, "ok"),
    messageKey: "ok",
  }
}
