export type ToolContentTemplates = {
  extendedDesc: string
  whenToUseBase: [string, string]
  whenToUseCategory: Record<string, string>
  steps: [string, string, string, string]
  faq: [
    { q: string; a: string },
    { q: string; a: string },
    { q: string; a: string },
    { q: string; a: string },
  ]
  extraFaq: [{ q: string; a: string }, { q: string; a: string }]
}

function fill(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => vars[key] ?? `{${key}}`)
}

export function createToolContentStrings(t: ToolContentTemplates) {
  return {
    extendedDesc: (from: string, to: string, fromName: string, toName: string) =>
      fill(t.extendedDesc, {
        from,
        to,
        fromName,
        toName,
        FROM: from.toUpperCase(),
        TO: to.toUpperCase(),
      }),
    whenToUse: (from: string, to: string, category: string) => {
      const base = t.whenToUseBase.map((line) =>
        fill(line, { from, to, FROM: from.toUpperCase(), TO: to.toUpperCase() }),
      )
      const extra = t.whenToUseCategory[category]
      return extra ? [...base, extra] : base
    },
    steps: (from: string, to: string) =>
      t.steps.map((line) =>
        fill(line, { from, to, FROM: from.toUpperCase(), TO: to.toUpperCase() }),
      ),
    faq: (from: string, to: string) =>
      t.faq.map(({ q, a }) => ({
        q: fill(q, { from, to, FROM: from.toUpperCase(), TO: to.toUpperCase() }),
        a: fill(a, { from, to, FROM: from.toUpperCase(), TO: to.toUpperCase() }),
      })),
  }
}

export function createExtraFaqBuilder(t: ToolContentTemplates) {
  return (from: string, to: string) =>
    t.extraFaq.map(({ q, a }) => ({
      q: fill(q, { from, to, FROM: from.toUpperCase(), TO: to.toUpperCase() }),
      a: fill(a, { from, to, FROM: from.toUpperCase(), TO: to.toUpperCase() }),
    }))
}
