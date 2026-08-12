/** SRT ↔ VTT subtitle conversion (plain text). */

export function srtToVtt(srt: string): string {
  const blocks = srt.trim().replace(/\r\n/g, "\n").split(/\n\n+/)
  const cues: string[] = ["WEBVTT", ""]
  for (const block of blocks) {
    const lines = block.split("\n").filter(Boolean)
    if (lines.length < 2) continue
    const timeLine = lines.find((l) => l.includes("-->"))
    if (!timeLine) continue
    const textStart = lines.indexOf(timeLine) + 1
    const text = lines.slice(textStart).join("\n")
    cues.push(timeLine.replace(/,/g, "."))
    cues.push(text)
    cues.push("")
  }
  return cues.join("\n").trim() + "\n"
}

export function vttToSrt(vtt: string): string {
  let body = vtt.replace(/\r\n/g, "\n").trim()
  if (body.startsWith("WEBVTT")) {
    body = body.replace(/^WEBVTT[^\n]*\n/, "").trim()
  }
  const blocks = body.split(/\n\n+/)
  const out: string[] = []
  let index = 1
  for (const block of blocks) {
    const lines = block.split("\n").filter(Boolean)
    const timeLine = lines.find((l) => l.includes("-->"))
    if (!timeLine) continue
    const textStart = lines.indexOf(timeLine) + 1
    const text = lines.slice(textStart).join("\n")
    const [startRaw, endRaw] = timeLine.split("-->").map((s) => s.trim())
    const start = startRaw.replace(/\./g, ",")
    const end = endRaw.replace(/\./g, ",")
    out.push(String(index++))
    out.push(`${start} --> ${end}`)
    out.push(text)
    out.push("")
  }
  return out.join("\n").trim() + "\n"
}

export function detectSubtitleFormat(text: string): "srt" | "vtt" | "unknown" {
  const t = text.trimStart()
  if (t.startsWith("WEBVTT")) return "vtt"
  if (/\d+\s*\n\d{2}:\d{2}:\d{2},\d{3}\s*-->/.test(t)) return "srt"
  if (/\d{2}:\d{2}:\d{2}\.\d{3}\s*-->/.test(t)) return "vtt"
  return "unknown"
}
