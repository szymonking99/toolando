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
  | "json-formatter"
  | "diff-tekstu"
  | "konwerter-wielkosci-liter"
  | "usun-duplikaty-linii"
  | "dekoder-jwt"
  | "walidator-nip-pesel"
  | "kalkulator-kredytu"
  | "markdown-preview"
  | "sila-hasla"
  | "konwerter-napisow"
  | "generator-nazw-plikow"
  | "walidator-iban"
  | "kalkulator-b2b"
  | "test-ping"
  | "dns-lookup"
  | "speedtest"
  | "inspektor-prywatnosci"
  | "kalkulator-procentow"
  | "kalkulator-roi"
  | "kalkulator-aspect-ratio"
  | "kalkulator-rozmiaru-pliku"
  | "url-encoder"
  | "csv-json"
  | "html-markdown"
  | "minifikator"
  | "generator-favicon"

export type UtilityCategory =
  | "finance"
  | "time"
  | "units"
  | "text"
  | "dev"
  | "media"
  | "network"
  | "privacy"

export type UtilityToolConfig = {
  id: UtilityToolId
  category: UtilityCategory
  icon: string
}

export const utilityTools: UtilityToolConfig[] = [
  { id: "przelicznik-walut", category: "finance", icon: "Coins" },
  { id: "kalkulator-dat", category: "time", icon: "CalendarRange" },
  { id: "strefy-czasowe", category: "time", icon: "Globe2" },
  { id: "przelicznik-jednostek", category: "units", icon: "Ruler" },
  { id: "kalkulator-vat", category: "finance", icon: "Percent" },
  { id: "kalkulator-wieku", category: "time", icon: "Cake" },
  { id: "kalkulator-kredytu", category: "finance", icon: "Landmark" },
  { id: "kalkulator-b2b", category: "finance", icon: "Briefcase" },
  { id: "generator-hasel", category: "dev", icon: "KeyRound" },
  { id: "sila-hasla", category: "dev", icon: "ShieldCheck" },
  { id: "licznik-znakow", category: "text", icon: "Type" },
  { id: "diff-tekstu", category: "text", icon: "GitCompare" },
  { id: "konwerter-wielkosci-liter", category: "text", icon: "CaseSensitive" },
  { id: "usun-duplikaty-linii", category: "text", icon: "ListX" },
  { id: "markdown-preview", category: "text", icon: "FileText" },
  { id: "generator-nazw-plikow", category: "text", icon: "Files" },
  { id: "generator-qr", category: "dev", icon: "QrCode" },
  { id: "json-formatter", category: "dev", icon: "Braces" },
  { id: "dekoder-jwt", category: "dev", icon: "Key" },
  { id: "walidator-nip-pesel", category: "dev", icon: "BadgeCheck" },
  { id: "walidator-iban", category: "dev", icon: "Landmark" },
  { id: "konwerter-napisow", category: "media", icon: "Subtitles" },
  { id: "kalkulator-bitrate", category: "media", icon: "HardDrive" },
  { id: "konwerter-kolorow", category: "dev", icon: "Palette" },
  { id: "base64", category: "dev", icon: "Binary" },
  { id: "unix-timestamp", category: "dev", icon: "Clock" },
  { id: "generator-uuid", category: "dev", icon: "Fingerprint" },
  { id: "generator-hash", category: "dev", icon: "Hash" },
  { id: "test-ping", category: "network", icon: "Radar" },
  { id: "dns-lookup", category: "network", icon: "Search" },
  { id: "speedtest", category: "network", icon: "Gauge" },
  { id: "inspektor-prywatnosci", category: "privacy", icon: "ShieldAlert" },
  { id: "kalkulator-procentow", category: "finance", icon: "Percent" },
  { id: "kalkulator-roi", category: "finance", icon: "TrendingUp" },
  { id: "kalkulator-aspect-ratio", category: "media", icon: "Ratio" },
  { id: "kalkulator-rozmiaru-pliku", category: "media", icon: "HardDriveDownload" },
  { id: "url-encoder", category: "dev", icon: "Link" },
  { id: "csv-json", category: "dev", icon: "Table" },
  { id: "html-markdown", category: "text", icon: "FileCode" },
  { id: "minifikator", category: "dev", icon: "Minimize2" },
  { id: "generator-favicon", category: "dev", icon: "AppWindow" },
]

export function getUtilityTool(id: string): UtilityToolConfig | undefined {
  return utilityTools.find((t) => t.id === id)
}

/** Privacy / security oriented utilities for hub browse. */
export const PRIVACY_UTILITY_IDS: UtilityToolId[] = [
  "inspektor-prywatnosci",
  "generator-hasel",
  "sila-hasla",
  "generator-hash",
]
