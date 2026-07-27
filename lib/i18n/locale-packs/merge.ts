import type { Dictionary } from "../dictionaries"

/** Deep partial dictionary overlay for a locale. */
export type LocalePack = {
  [K in keyof Dictionary]?: Dictionary[K] extends object
    ? Partial<Dictionary[K]>
    : Dictionary[K]
}

export function mergeLocalePack(
  base: Dictionary,
  pack: LocalePack | undefined,
): Dictionary {
  if (!pack) return base
  return deepMerge(base, pack) as Dictionary
}

function deepMerge<T>(base: T, override: unknown): T {
  if (
    typeof base !== "object" ||
    base === null ||
    Array.isArray(base) ||
    typeof override !== "object" ||
    override === null ||
    Array.isArray(override)
  ) {
    if (override === undefined || override === null) return base
    return override as T
  }
  const result = { ...(base as Record<string, unknown>) }
  const ov = override as Record<string, unknown>
  for (const key of Object.keys(base as Record<string, unknown>)) {
    result[key] = deepMerge(
      (base as Record<string, unknown>)[key],
      ov[key],
    )
  }
  for (const key of Object.keys(ov)) {
    if (!(key in result)) result[key] = ov[key]
  }
  return result as T
}

export const localePackLoaders: Record<
  string,
  () => Promise<{ default: LocalePack }>
> = {
  de: () => import("./packs/de"),
  es: () => import("./packs/es"),
  uk: () => import("./packs/uk"),
  fr: () => import("./packs/fr"),
  it: () => import("./packs/it"),
  pt: () => import("./packs/pt"),
  nl: () => import("./packs/nl"),
  sv: () => import("./packs/sv"),
  no: () => import("./packs/no"),
  da: () => import("./packs/da"),
  fi: () => import("./packs/fi"),
  cs: () => import("./packs/cs"),
  ro: () => import("./packs/ro"),
  hu: () => import("./packs/hu"),
  el: () => import("./packs/el"),
  tr: () => import("./packs/tr"),
  ru: () => import("./packs/ru"),
  ar: () => import("./packs/ar"),
  zh: () => import("./packs/zh"),
  ja: () => import("./packs/ja"),
  ko: () => import("./packs/ko"),
  hi: () => import("./packs/hi"),
  id: () => import("./packs/id"),
}

export async function loadLocalePack(
  locale: string,
): Promise<LocalePack | undefined> {
  const load = localePackLoaders[locale]
  if (!load) return undefined
  try {
    const mod = await load()
    return mod.default
  } catch {
    return undefined
  }
}
