"use client"

import { useMemo, useState } from "react"
import { Field, ResultBox, inputClass } from "./ui"
import { useI18n } from "@/components/i18n-provider"

type Copy = {
  gross: string
  b2b: string
  taxForm: string
  ryczalt: string
  liniowy: string
  netEmployment: string
  employerCost: string
  netB2b: string
  diff: string
  disclaimer: string
}

const COPY: Record<string, Copy> = {
  pl: {
    gross: "Etat — brutto miesięcznie (PLN)",
    b2b: "B2B — przychód netto na fakturze (PLN)",
    taxForm: "Forma opodatkowania B2B",
    ryczalt: "Ryczałt 12% (IT / usługi)",
    liniowy: "Podatek liniowy 19%",
    netEmployment: "Etat „na rękę”",
    employerCost: "Koszt pracodawcy (brutto + ZUS)",
    netB2b: "B2B „na rękę” (szacunek)",
    diff: "Różnica B2B vs etat",
    disclaimer:
      "Uproszczona symulacja (2026) — bez ulg, chorobowego, PPK i indywidualnych stawek ZUS. Traktuj jako punkt wyjścia do rozmowy z księgowym.",
  },
  en: {
    gross: "Employment — monthly gross (PLN)",
    b2b: "B2B — net invoice revenue (PLN)",
    taxForm: "B2B tax form",
    ryczalt: "Flat tax 12% (IT / services)",
    liniowy: "Linear tax 19%",
    netEmployment: "Employment take-home",
    employerCost: "Employer cost (gross + social)",
    netB2b: "B2B take-home (estimate)",
    diff: "B2B vs employment difference",
    disclaimer:
      "Simplified 2026 simulation — no reliefs, sick leave, PPK or custom social rates. Use as a starting point with an accountant.",
  },
  de: {
    gross: "Anstellung — Brutto monatlich (PLN)",
    b2b: "B2B — Netto-Rechnungsumsatz (PLN)",
    taxForm: "B2B-Besteuerungsform",
    ryczalt: "Pauschale 12% (IT / Dienstleistungen)",
    liniowy: "Lineare Steuer 19%",
    netEmployment: "Anstellung netto",
    employerCost: "Arbeitgeberkosten (Brutto + Sozial)",
    netB2b: "B2B netto (Schätzung)",
    diff: "Differenz B2B vs Anstellung",
    disclaimer:
      "Vereinfachte Simulation (2026) — ohne Zulagen, Krankengeld, PPK und individuelle Sozialsätze. Ausgangspunkt für das Gespräch mit einem Buchhalter.",
  },
  es: {
    gross: "Empleo — bruto mensual (PLN)",
    b2b: "B2B — ingreso neto en factura (PLN)",
    taxForm: "Forma de tributación B2B",
    ryczalt: "Impuesto fijo 12% (IT / servicios)",
    liniowy: "Impuesto lineal 19%",
    netEmployment: "Nómina neta",
    employerCost: "Coste empleador (bruto + cotizaciones)",
    netB2b: "B2B neto (estimación)",
    diff: "Diferencia B2B vs empleo",
    disclaimer:
      "Simulación simplificada (2026) — sin desgravaciones, baja médica, PPK ni cotizaciones personalizadas. Punto de partida para hablar con un contable.",
  },
  uk: {
    gross: "Найм — брутто на місяць (PLN)",
    b2b: "B2B — чистий дохід за рахунком (PLN)",
    taxForm: "Форма оподаткування B2B",
    ryczalt: "Єдиний податок 12% (IT / послуги)",
    liniowy: "Лінійний податок 19%",
    netEmployment: "Найм «на руки»",
    employerCost: "Вартість для роботодавця (брутто + внески)",
    netB2b: "B2B «на руки» (оцінка)",
    diff: "Різниця B2B vs найм",
    disclaimer:
      "Спрощена симуляція (2026) — без пільг, лікарняних, PPK і індивідуальних ставок внесків. Точка відліку для розмови з бухгалтером.",
  },
}

/** Uproszczony kalkulator B2B (ryczałt / liniowy) vs etat brutto. */
export function B2bCalculatorTool() {
  const { locale } = useI18n()
  const t = COPY[locale] ?? COPY.en
  const [grossSalary, setGrossSalary] = useState("12000")
  const [b2bNet, setB2bNet] = useState("15000")
  const [taxForm, setTaxForm] = useState<"ryczalt" | "liniowy">("ryczalt")

  const result = useMemo(() => {
    const gross = Number(grossSalary)
    const netB2b = Number(b2bNet)
    if (!Number.isFinite(gross) || !Number.isFinite(netB2b) || gross <= 0 || netB2b <= 0) {
      return null
    }

    const employeeZus = gross * 0.1371
    const employeeTaxBase = gross - employeeZus
    const pit = employeeTaxBase * 0.12 - 300
    const netEmployment = gross - employeeZus - Math.max(0, pit)
    const employerZus = gross * 0.2048
    const employerCost = gross + employerZus

    const zusB2b = 1600
    const health = netB2b * 0.049
    const incomeTax =
      taxForm === "ryczalt" ? netB2b * 0.12 : Math.max(0, (netB2b - zusB2b) * 0.19)
    const netB2bAfter = netB2b - zusB2b - health - incomeTax

    return {
      netEmployment,
      employerCost,
      netB2bAfter,
      diff: netB2bAfter - netEmployment,
    }
  }, [b2bNet, grossSalary, taxForm])

  const fmt = (n: number) =>
    n.toLocaleString(locale === "en" ? "en-GB" : locale, {
      style: "currency",
      currency: "PLN",
      maximumFractionDigits: 0,
    })

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t.gross}>
          <input
            className={inputClass}
            value={grossSalary}
            onChange={(e) => setGrossSalary(e.target.value)}
          />
        </Field>
        <Field label={t.b2b}>
          <input
            className={inputClass}
            value={b2bNet}
            onChange={(e) => setB2bNet(e.target.value)}
          />
        </Field>
      </div>
      <Field label={t.taxForm}>
        <select
          className={inputClass}
          value={taxForm}
          onChange={(e) => setTaxForm(e.target.value as "ryczalt" | "liniowy")}
        >
          <option value="ryczalt">{t.ryczalt}</option>
          <option value="liniowy">{t.liniowy}</option>
        </select>
      </Field>
      {result && (
        <ResultBox>
          <ul className="space-y-2 text-sm">
            <li>
              {t.netEmployment}: <strong>{fmt(result.netEmployment)}</strong>
            </li>
            <li>
              {t.employerCost}: {fmt(result.employerCost)}
            </li>
            <li>
              {t.netB2b}: <strong>{fmt(result.netB2bAfter)}</strong>
            </li>
            <li className={result.diff >= 0 ? "text-primary" : "text-destructive"}>
              {t.diff}: {result.diff >= 0 ? "+" : ""}
              {fmt(result.diff)}
            </li>
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">{t.disclaimer}</p>
        </ResultBox>
      )}
    </div>
  )
}
