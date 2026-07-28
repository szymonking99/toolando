export type UtilityToolId =
  | "przelicznik-walut"
  | "kalkulator-dat"
  | "strefy-czasowe"
  | "przelicznik-jednostek"
  | "kalkulator-vat"
  | "kalkulator-wieku"
  | "generator-hasel"
  | "licznik-znakow"
  | "generator-qr"
  | "kalkulator-bitrate"
  | "konwerter-kolorow"
  | "base64"
  | "unix-timestamp"
  | "generator-uuid"
  | "generator-hash"

export type UtilityCategory =
  | "finance"
  | "time"
  | "units"
  | "text"
  | "dev"
  | "media"

export type UtilityToolConfig = {
  id: UtilityToolId
  category: UtilityCategory
  /** Icon hint for cards (lucide name). */
  icon: string
}

export const utilityTools: UtilityToolConfig[] = [
  { id: "przelicznik-walut", category: "finance", icon: "Coins" },
  { id: "kalkulator-dat", category: "time", icon: "CalendarRange" },
  { id: "strefy-czasowe", category: "time", icon: "Globe2" },
  { id: "przelicznik-jednostek", category: "units", icon: "Ruler" },
  { id: "kalkulator-vat", category: "finance", icon: "Percent" },
  { id: "kalkulator-wieku", category: "time", icon: "Cake" },
  { id: "generator-hasel", category: "dev", icon: "KeyRound" },
  { id: "licznik-znakow", category: "text", icon: "Type" },
  { id: "generator-qr", category: "dev", icon: "QrCode" },
  { id: "kalkulator-bitrate", category: "media", icon: "HardDrive" },
  { id: "konwerter-kolorow", category: "dev", icon: "Palette" },
  { id: "base64", category: "dev", icon: "Binary" },
  { id: "unix-timestamp", category: "dev", icon: "Clock" },
  { id: "generator-uuid", category: "dev", icon: "Fingerprint" },
  { id: "generator-hash", category: "dev", icon: "Hash" },
]

export function getUtilityTool(id: string): UtilityToolConfig | undefined {
  return utilityTools.find((t) => t.id === id)
}
