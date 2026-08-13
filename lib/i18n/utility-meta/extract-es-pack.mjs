/**
 * Extract es locale tools from utility-meta.ts Spanish overrides.
 */
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(join(__dirname, "..", "utility-meta.ts"), "utf8");

const esBlock = src.match(/es: \{\s*\.\.\.en,([\s\S]*?)\n  \},\n  uk:/)?.[1];
if (!esBlock) throw new Error("Could not find es block");

const TOOL_IDS = [
  "przelicznik-walut",
  "kalkulator-dat",
  "strefy-czasowe",
  "przelicznik-jednostek",
  "kalkulator-vat",
  "kalkulator-wieku",
  "generator-hasel",
  "licznik-znakow",
  "generator-qr",
  "kalkulator-bitrate",
  "konwerter-kolorow",
  "base64",
  "unix-timestamp",
  "generator-uuid",
  "generator-hash",
  "json-formatter",
  "diff-tekstu",
  "konwerter-wielkosci-liter",
  "usun-duplikaty-linii",
  "dekoder-jwt",
  "walidator-nip-pesel",
  "kalkulator-kredytu",
  "markdown-preview",
  "sila-hasla",
  "konwerter-napisow",
  "generator-nazw-plikow",
  "walidator-iban",
  "kalkulator-b2b",
];

const CAT_MAP = {
  Finanzas: "finance",
  "Tiempo y fechas": "time",
  Unidades: "units",
  Texto: "text",
  Desarrolladores: "dev",
  Medios: "media",
};

/** @type {Record<string, unknown>} */
const tools = {};

for (const id of TOOL_IDS) {
  const key = id === "base64" ? "base64:" : `"${id}":`;
  const re = new RegExp(`${id === "base64" ? "base64:" : `"${id}"`}[\\s\\S]*?category:\\s*"([^"]+)"[\\s\\S]*?name:\\s*"([^"]+)"[\\s\\S]*?description:\\s*"([^"]+)"[\\s\\S]*?steps:\\s*\\[([\\s\\S]*?)\\][\\s\\S]*?faq:\\s*(\\[[\\s\\S]*?\\]|\\[\\])`);
  const m = esBlock.match(re);
  if (!m) {
    console.warn("Missing", id);
    continue;
  }
  const [, category, name, description, stepsRaw, faqRaw] = m;
  const steps = [...stepsRaw.matchAll(/"((?:\\.|[^"\\])*)"/g)].map((x) =>
    x[1].replace(/\\"/g, '"'),
  );
  const faq = [];
  const faqRe = /\{\s*q:\s*"((?:\\.|[^"\\])*)"\s*,\s*a:\s*"((?:\\.|[^"\\])*)"\s*\}/g;
  let fm;
  while ((fm = faqRe.exec(faqRaw))) {
    faq.push({ q: fm[1].replace(/\\"/g, '"'), a: fm[2].replace(/\\"/g, '"') });
  }
  tools[id] = {
    cat: CAT_MAP[category] ?? "text",
    name,
    desc: description.replace(/\\"/g, '"'),
    steps,
    faq,
  };
}

mkdirSync(join(__dirname, "packs"), { recursive: true });
writeFileSync(
  join(__dirname, "packs", "es-ref.mjs"),
  `export const esTools = ${JSON.stringify(tools, null, 2)};\n`,
);
console.log("Extracted", Object.keys(tools).length, "es tools");
