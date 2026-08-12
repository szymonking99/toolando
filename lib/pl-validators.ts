export type ValidationResult = {
  valid: boolean
  type: "NIP" | "PESEL" | "REGON"
  message: string
}

function digitsOnly(value: string): string {
  return value.replace(/\D/g, "")
}

export function validateNip(raw: string): ValidationResult {
  const nip = digitsOnly(raw)
  if (nip.length !== 10) {
    return { valid: false, type: "NIP", message: "NIP musi mieć 10 cyfr." }
  }
  const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7]
  let sum = 0
  for (let i = 0; i < 9; i++) sum += Number(nip[i]) * weights[i]
  const check = sum % 11
  if (check === 10 || check !== Number(nip[9])) {
    return { valid: false, type: "NIP", message: "Nieprawidłowa suma kontrolna NIP." }
  }
  return { valid: true, type: "NIP", message: "Numer NIP jest poprawny." }
}

export function validatePesel(raw: string): ValidationResult {
  const pesel = digitsOnly(raw)
  if (pesel.length !== 11) {
    return { valid: false, type: "PESEL", message: "PESEL musi mieć 11 cyfr." }
  }
  const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3]
  let sum = 0
  for (let i = 0; i < 10; i++) sum += Number(pesel[i]) * weights[i]
  const check = (10 - (sum % 10)) % 10
  if (check !== Number(pesel[10])) {
    return { valid: false, type: "PESEL", message: "Nieprawidłowa suma kontrolna PESEL." }
  }
  return { valid: true, type: "PESEL", message: "Numer PESEL jest poprawny." }
}

export function validateRegon(raw: string): ValidationResult {
  const regon = digitsOnly(raw)
  if (regon.length === 9) {
    const weights = [8, 9, 2, 3, 4, 5, 6, 7]
    let sum = 0
    for (let i = 0; i < 8; i++) sum += Number(regon[i]) * weights[i]
    const check = sum % 11 === 10 ? 0 : sum % 11
    if (check !== Number(regon[8])) {
      return { valid: false, type: "REGON", message: "Nieprawidłowa suma kontrolna REGON (9 cyfr)." }
    }
    return { valid: true, type: "REGON", message: "Numer REGON (9 cyfr) jest poprawny." }
  }
  if (regon.length === 14) {
    const weights = [2, 4, 8, 5, 0, 9, 7, 3, 6, 1, 2, 4, 8]
    let sum = 0
    for (let i = 0; i < 13; i++) sum += Number(regon[i]) * weights[i]
    const check = sum % 11 === 10 ? 0 : sum % 11
    if (check !== Number(regon[13])) {
      return { valid: false, type: "REGON", message: "Nieprawidłowa suma kontrolna REGON (14 cyfr)." }
    }
    return { valid: true, type: "REGON", message: "Numer REGON (14 cyfr) jest poprawny." }
  }
  return { valid: false, type: "REGON", message: "REGON musi mieć 9 lub 14 cyfr." }
}

export function validatePolishId(raw: string): ValidationResult {
  const d = digitsOnly(raw)
  if (d.length === 10) return validateNip(raw)
  if (d.length === 11) return validatePesel(raw)
  if (d.length === 9 || d.length === 14) return validateRegon(raw)
  return {
    valid: false,
    type: "NIP",
    message: "Wpisz NIP (10), PESEL (11) lub REGON (9/14 cyfr).",
  }
}
