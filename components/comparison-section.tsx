"use client"

import { Check, X } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"

export function ComparisonSection() {
  const { t } = useI18n()
  const rows = [
    { key: "privacy", us: true, them: false },
    { key: "offline", us: true, them: false },
    { key: "ai", us: true, them: false },
    { key: "free", us: true, them: true },
    { key: "limits", us: true, them: false },
  ] as const

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-semibold text-foreground">
          {t.comparison.title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground">
          {t.comparison.subtitle}
        </p>
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03]">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                  {t.comparison.feature}
                </th>
                <th className="px-4 py-3 text-center font-semibold text-primary">
                  Toolando
                </th>
                <th className="px-4 py-3 text-center font-medium text-muted-foreground">
                  {t.comparison.competitor}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.key} className="border-b border-white/10 last:border-0">
                  <td className="px-4 py-3 text-foreground">
                    {t.comparison.rows[row.key]}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {row.us ? (
                      <Check className="mx-auto size-4 text-emerald-400" />
                    ) : (
                      <X className="mx-auto size-4 text-muted-foreground" />
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {row.them ? (
                      <Check className="mx-auto size-4 text-emerald-400" />
                    ) : (
                      <X className="mx-auto size-4 text-muted-foreground" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
