"use client"

/** Parse Toolando compare TXT (lines starting with "  ", "- ", "+ "). */
export function parseCompareDiff(text: string): {
  left: string[]
  right: string[]
  rows: { left: string; right: string; kind: "same" | "del" | "add" | "change" }[]
} {
  const body = text.split("\n")
  // Skip header until blank line after legend
  let start = 0
  for (let i = 0; i < body.length; i++) {
    if (body[i].startsWith("  ") || body[i].startsWith("- ") || body[i].startsWith("+ ")) {
      start = i
      break
    }
  }
  const left: string[] = []
  const right: string[] = []
  const rows: {
    left: string
    right: string
    kind: "same" | "del" | "add" | "change"
  }[] = []

  let i = start
  while (i < body.length) {
    const line = body[i]
    if (line.startsWith("  ")) {
      const t = line.slice(2)
      left.push(t)
      right.push(t)
      rows.push({ left: t, right: t, kind: "same" })
      i++
    } else if (line.startsWith("- ")) {
      const del = line.slice(2)
      const next = body[i + 1]
      if (next?.startsWith("+ ")) {
        const add = next.slice(2)
        left.push(del)
        right.push(add)
        rows.push({ left: del, right: add, kind: "change" })
        i += 2
      } else {
        left.push(del)
        right.push("")
        rows.push({ left: del, right: "", kind: "del" })
        i++
      }
    } else if (line.startsWith("+ ")) {
      const add = line.slice(2)
      left.push("")
      right.push(add)
      rows.push({ left: "", right: add, kind: "add" })
      i++
    } else {
      i++
    }
  }
  return { left, right, rows }
}

export function CompareDiffView({
  text,
  leftLabel = "A",
  rightLabel = "B",
}: {
  text: string
  leftLabel?: string
  rightLabel?: string
}) {
  const { rows } = parseCompareDiff(text)
  if (rows.length === 0) return null

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
      <div className="grid grid-cols-2 border-b border-white/10 text-xs font-semibold text-muted-foreground">
        <div className="px-3 py-2">{leftLabel}</div>
        <div className="border-l border-white/10 px-3 py-2">{rightLabel}</div>
      </div>
      <div className="max-h-80 overflow-auto text-xs leading-5 font-mono">
        {rows.slice(0, 400).map((row, idx) => (
          <div key={idx} className="grid grid-cols-2">
            <div
              className={`whitespace-pre-wrap break-all px-3 py-0.5 ${
                row.kind === "del" || row.kind === "change"
                  ? "bg-red-500/15 text-red-100"
                  : "text-muted-foreground"
              }`}
            >
              {row.left || "\u00a0"}
            </div>
            <div
              className={`whitespace-pre-wrap break-all border-l border-white/10 px-3 py-0.5 ${
                row.kind === "add" || row.kind === "change"
                  ? "bg-emerald-500/15 text-emerald-100"
                  : "text-muted-foreground"
              }`}
            >
              {row.right || "\u00a0"}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
