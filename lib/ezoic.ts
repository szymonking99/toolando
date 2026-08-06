/** Push a callback onto the Ezoic command queue (safe before sa.min.js loads). */
export function runEzoic(fn: () => void): void {
  if (typeof window === "undefined") return
  window.ezstandalone = window.ezstandalone ?? { cmd: [], showAds: () => {}, destroyPlaceholders: () => {} }
  window.ezstandalone.cmd = window.ezstandalone.cmd ?? []
  window.ezstandalone.cmd.push(fn)
}
