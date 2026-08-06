declare global {
  interface Window {
    ezstandalone?: {
      cmd: Array<() => void>
      showAds: (...args: Array<number | string | Record<string, unknown>>) => void
      destroyPlaceholders: (...ids: number[]) => void
    }
  }
}

export {}
