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
import { JsonFormatterTool } from "./json-formatter-tool"
import { DiffTool } from "./diff-tool"
import { CaseConverterTool } from "./case-converter-tool"
import { DedupeLinesTool } from "./dedupe-lines-tool"
import { JwtTool } from "./jwt-tool"
import { PolishIdTool } from "./polish-id-tool"
import { LoanCalculatorTool } from "./loan-calculator-tool"
import { MarkdownPreviewTool } from "./markdown-preview-tool"
import { PasswordStrengthTool } from "./password-strength-tool"
import { SubtitleTool } from "./subtitle-tool"
import { BatchRenameTool } from "./batch-rename-tool"
import { IbanTool } from "./iban-tool"
import { B2bCalculatorTool } from "./b2b-calculator-tool"
import { PingTool } from "./ping-tool"
import { DnsLookupTool } from "./dns-lookup-tool"
import { SpeedtestTool } from "./speedtest-tool"

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
    case "kalkulator-kredytu":
      return <LoanCalculatorTool />
    case "kalkulator-b2b":
      return <B2bCalculatorTool />
    case "generator-hasel":
      return <PasswordTool />
    case "sila-hasla":
      return <PasswordStrengthTool />
    case "licznik-znakow":
      return <CharCounterTool />
    case "diff-tekstu":
      return <DiffTool />
    case "konwerter-wielkosci-liter":
      return <CaseConverterTool />
    case "usun-duplikaty-linii":
      return <DedupeLinesTool />
    case "markdown-preview":
      return <MarkdownPreviewTool />
    case "generator-nazw-plikow":
      return <BatchRenameTool />
    case "generator-qr":
      return <QrTool />
    case "json-formatter":
      return <JsonFormatterTool />
    case "dekoder-jwt":
      return <JwtTool />
    case "walidator-nip-pesel":
      return <PolishIdTool />
    case "walidator-iban":
      return <IbanTool />
    case "konwerter-napisow":
      return <SubtitleTool />
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
    case "test-ping":
      return <PingTool />
    case "dns-lookup":
      return <DnsLookupTool />
    case "speedtest":
      return <SpeedtestTool />
    default:
      return null
  }
}
