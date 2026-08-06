declare global {
  interface Window {
    ezstandalone?: {
      cmd: Array<() => void>
      showAds: (...args: Array<number | string | Record<string, unknown>>) => void
      destroyPlaceholders: (...ids: number[]) => void
      destroyAll?: () => void
      setInterstitialAllowed?: (
        allowed: boolean,
        options?: { reason?: string; requestAdOnAllow?: boolean },
      ) => void
      setOutstreamAllowed?: (
        allowed: boolean,
        options?: { reason?: string; requestAdOnAllow?: boolean },
      ) => void
    }
  }
}

export {}
