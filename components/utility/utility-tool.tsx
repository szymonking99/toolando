"use client"

import type { UtilityToolConfig } from "@/lib/utility-tools"
import { CurrencyTool } from "./currency-tool"
import { DateRangeTool } from "./date-range-tool"
import { TimezoneTool } from "./timezone-tool"
import { UnitsTool } from "./units-tool"
import { VatTool } from "./vat-tool"
import { AgeTool } from "./age-tool"
import { PasswordTool } from "./password-tool"
import { CharCounterTool } from "./char-counter-tool"
import { QrTool } from "./qr-tool"
import { BitrateTool } from "./bitrate-tool"
import { ColorTool } from "./color-tool"
import { Base64Tool } from "./base64-tool"
import { TimestampTool } from "./timestamp-tool"
import { UuidTool } from "./uuid-tool"
import { HashTool } from "./hash-tool"

export function UtilityTool({ tool }: { tool: UtilityToolConfig }) {
  switch (tool.id) {
    case "przelicznik-walut":
      return <CurrencyTool />
    case "kalkulator-dat":
      return <DateRangeTool />
    case "strefy-czasowe":
      return <TimezoneTool />
    case "przelicznik-jednostek":
      return <UnitsTool />
    case "kalkulator-vat":
      return <VatTool />
    case "kalkulator-wieku":
      return <AgeTool />
    case "generator-hasel":
      return <PasswordTool />
    case "licznik-znakow":
      return <CharCounterTool />
    case "generator-qr":
      return <QrTool />
    case "kalkulator-bitrate":
      return <BitrateTool />
    case "konwerter-kolorow":
      return <ColorTool />
    case "base64":
      return <Base64Tool />
    case "unix-timestamp":
      return <TimestampTool />
    case "generator-uuid":
      return <UuidTool />
    case "generator-hash":
      return <HashTool />
    default:
      return null
  }
}
