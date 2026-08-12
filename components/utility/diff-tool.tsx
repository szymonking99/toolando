"use client"

import { useMemo, useState } from "react"
import { Field, inputClass } from "./ui"

function diffLines(a: string, b: string) {
  const left = a.replace(/\r\n/g, "\n").split("\n")
  const right = b.replace(/\r\n/g, "\n").split("\n")
  const max = Math.max(left.length, right.length)
  const rows: { left: string; right: string; kind: "same" | "diff" }[] = []
  for (let i = 0; i < max; i++) {
    const l = left[i] ?? ""
    const r = right[i] ?? ""
    rows.push({ left: l, right: r, kind: l === r ? "same" : "diff" })
  }
  return rows
}

export function DiffTool() {
  const [a, setA] = useState("")
  const [b, setB] = useState("")
  const rows = useMemo(() => diffLines(a, b), [a, b])

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Field label="Tekst A">
          <textarea
            className={`${inputClass} min-h-48 font-mono`}
            value={a}
            onChange={(e) => setA(e.target.value)}
          />
        </Field>
        <Field label="Tekst B">
          <textarea
            className={`${inputClass} min-h-48 font-mono`}
            value={b}
            onChange={(e) => setB(e.target.value)}
          />
        </Field>
      </div>
      {(a || b) && (
        <div className="overflow-auto rounded-xl border border-white/10">
          <table className="w-full text-xs font-mono">
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={
                    row.kind === "diff"
                      ? "bg-destructive/10"
                      : i % 2
                        ? "bg-white/[0.02]"
                        : ""
                  }
                >
                  <td className="w-1/2 border-r border-white/10 px-2 py-1 align-top text-muted-foreground">
                    {row.left || " "}
                  </td>
                  <td className="w-1/2 px-2 py-1 align-top">{row.right || " "}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
