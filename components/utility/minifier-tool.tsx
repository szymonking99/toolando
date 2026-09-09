"use client"

import { useMemo, useState } from "react"
import { Field, inputClass, selectClass, ResultBox, PrimaryButton, copyText } from "./ui"

function minifyCss(s: string) {
  return s
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}:;,])\s*/g, "$1")
    .replace(/;}/g, "}")
    .trim()
}

function minifyJs(s: string) {
  return s
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/(^|[^:])\/\/.*$/gm, "$1")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}()[\];,:])\s*/g, "$1")
    .trim()
}

function minifyHtml(s: string) {
  return s
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/\s+/g, " ")
    .replace(/>\s+</g, "><")
    .trim()
}

export function MinifierTool() {
  const [kind, setKind] = useState<"css" | "js" | "html">("css")
  const [input, setInput] = useState("body {\n  color: #111;\n  margin: 0;\n}")
  const [copied, setCopied] = useState(false)

  const output = useMemo(() => {
    if (kind === "css") return minifyCss(input)
    if (kind === "js") return minifyJs(input)
    return minifyHtml(input)
  }, [input, kind])

  const saved = input.length > 0 ? Math.max(0, Math.round((1 - output.length / input.length) * 100)) : 0

  return (
    <div className="space-y-4">
      <Field label="Type">
        <select
          className={selectClass}
          value={kind}
          onChange={(e) => {
            const k = e.target.value as typeof kind
            setKind(k)
            if (k === "css") setInput("body {\n  color: #111;\n  margin: 0;\n}")
            else if (k === "js") setInput("function hello ( name ) {\n  console.log( name );\n}")
            else setInput("<div class=\"box\">\n  <p>Hello</p>\n</div>")
          }}
        >
          <option value="css">CSS</option>
          <option value="js">JavaScript</option>
          <option value="html">HTML</option>
        </select>
      </Field>
      <Field label="Input">
        <textarea className={`${inputClass} min-h-40 font-mono text-xs`} value={input} onChange={(e) => setInput(e.target.value)} />
      </Field>
      <ResultBox>
        <p className="mb-2 text-xs text-muted-foreground">
          {output.length} chars ({saved}% smaller)
        </p>
        <pre className="max-h-72 overflow-auto whitespace-pre-wrap break-all font-mono text-xs">{output}</pre>
      </ResultBox>
      <PrimaryButton
        type="button"
        onClick={async () => {
          if (await copyText(output)) {
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
          }
        }}
      >
        {copied ? "Copied" : "Copy minified"}
      </PrimaryButton>
    </div>
  )
}
