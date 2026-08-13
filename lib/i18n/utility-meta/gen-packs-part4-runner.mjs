/**
 * Generates locale pack files for part 4 locales (el, tr, ru, ar, zh, ja, ko, hi, id).
 * Run: node lib/i18n/utility-meta/gen-packs-part4-runner.mjs
 */
import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { registerPart4 } from "./gen-packs-part4.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const packsDir = join(__dirname, "packs");
mkdirSync(packsDir, { recursive: true });

const TOOL_IDS = [
  "przelicznik-walut", "kalkulator-dat", "strefy-czasowe", "przelicznik-jednostek",
  "kalkulator-vat", "kalkulator-wieku", "generator-hasel", "licznik-znakow",
  "generator-qr", "kalkulator-bitrate", "konwerter-kolorow", "base64",
  "unix-timestamp", "generator-uuid", "generator-hash", "json-formatter",
  "diff-tekstu", "konwerter-wielkosci-liter", "usun-duplikaty-linii", "dekoder-jwt",
  "walidator-nip-pesel", "kalkulator-kredytu", "markdown-preview", "sila-hasla",
  "konwerter-napisow", "generator-nazw-plikow", "walidator-iban", "kalkulator-b2b",
];

/** @type {Record<string, Record<string, Record<string, unknown>>>>} */
const ALL = {};

function T(cat, name, desc, steps, faq = []) {
  return { cat, name, desc, steps, faq };
}

function locale(code, tools) {
  if (tools.length !== 28) throw new Error(`${code}: expected 28, got ${tools.length}`);
  ALL[code] = Object.fromEntries(TOOL_IDS.map((id, i) => [id, tools[i]]));
}

registerPart4(locale, T);

for (const [code, tools] of Object.entries(ALL)) {
  const path = join(packsDir, `${code}.mjs`);
  writeFileSync(path, `export const ${code}Tools = ${JSON.stringify(tools, null, 2)};\n`);
  console.log("Wrote pack", code);
}

console.log("Total new packs:", Object.keys(ALL).length);
