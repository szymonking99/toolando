/** Extract English utility meta map for use as translation base. */
import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(join(__dirname, "..", "utility-meta.ts"), "utf8");
const block = src.match(/const en: UtilityMetaMap = (\{[\s\S]*?\n\})/)?.[1];
if (!block) throw new Error("en block not found");

const CAT_TO_KEY = {
  Finance: "finance",
  "Time & dates": "time",
  Units: "units",
  Text: "text",
  Developer: "dev",
  Media: "media",
};

/** @type {Record<string, { cat: string; name: string; desc: string; steps: string[]; faq: { q: string; a: string }[] }>} */
const en = {};

// Parse tool entries with regex
const toolRe =
  /"(przelicznik-walut|kalkulator-dat|strefy-czasowe|przelicznik-jednostek|kalkulator-vat|kalkulator-wieku|generator-hasel|licznik-znakow|generator-qr|kalkulator-bitrate|konwerter-kolorow|unix-timestamp|generator-uuid|generator-hash|json-formatter|diff-tekstu|konwerter-wielkosci-liter|usun-duplikaty-linii|dekoder-jwt|walidator-nip-pesel|kalkulator-kredytu|markdown-preview|sila-hasla|konwerter-napisow|generator-nazw-plikow|walidator-iban|kalkulator-b2b)"[\s\S]*?category:\s*"([^"]+)"[\s\S]*?name:\s*"([^"]+)"[\s\S]*?description:\s*\n?\s*"([^"]+)"[\s\S]*?steps:\s*\[([\s\S]*?)\][\s\S]*?faq:\s*(\[[\s\S]*?\])/g;

let m;
while ((m = toolRe.exec(block))) {
  const [, id, category, name, description, stepsRaw, faqRaw] = m;
  const steps = [...stepsRaw.matchAll(/"((?:\\.|[^"\\])*)"/g)].map((x) =>
    x[1].replace(/\\"/g, '"'),
  );
  const faq = [];
  const faqItemRe = /\{\s*q:\s*"((?:\\.|[^"\\])*)"\s*,\s*a:\s*"((?:\\.|[^"\\])*)"\s*\}/g;
  let fm;
  while ((fm = faqItemRe.exec(faqRaw))) {
    faq.push({ q: fm[1], a: fm[2] });
  }
  en[id] = {
    cat: CAT_TO_KEY[category] ?? "text",
    name,
    desc: description,
    steps,
    faq,
  };
}

// base64 special case
const b64 = block.match(
  /base64:\s*\{[\s\S]*?category:\s*"([^"]+)"[\s\S]*?name:\s*"([^"]+)"[\s\S]*?description:\s*\n?\s*"([^"]+)"[\s\S]*?steps:\s*\[([\s\S]*?)\][\s\S]*?faq:\s*(\[[\s\S]*?\])/,
);
if (b64) {
  const [, category, name, description, stepsRaw, faqRaw] = b64;
  const steps = [...stepsRaw.matchAll(/"((?:\\.|[^"\\])*)"/g)].map((x) =>
    x[1].replace(/\\"/g, '"'),
  );
  const faq = [];
  const faqItemRe = /\{\s*q:\s*"((?:\\.|[^"\\])*)"\s*,\s*a:\s*"((?:\\.|[^"\\])*)"\s*\}/g;
  let fm;
  while ((fm = faqItemRe.exec(faqRaw))) {
    faq.push({ q: fm[1], a: fm[2] });
  }
  en.base64 = {
    cat: CAT_TO_KEY[category] ?? "dev",
    name,
    desc: description,
    steps,
    faq,
  };
}

writeFileSync(join(__dirname, "en-base.json"), JSON.stringify(en, null, 2));
console.log("Extracted", Object.keys(en).length, "tools");
