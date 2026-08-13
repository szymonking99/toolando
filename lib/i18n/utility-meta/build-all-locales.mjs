/**
 * Builds translations-data.mjs with all 20 locales.
 * Run: node lib/i18n/utility-meta/build-all-locales.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

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

// Import locale packs
import { frTools } from "./packs/fr.mjs";
import { itTools } from "./packs/it.mjs";
import { ptTools } from "./packs/pt.mjs";
import { nlTools } from "./packs/nl.mjs";
import { svTools } from "./packs/sv.mjs";
import { noTools } from "./packs/no.mjs";
import { daTools } from "./packs/da.mjs";
import { fiTools } from "./packs/fi.mjs";
import { csTools } from "./packs/cs.mjs";
import { roTools } from "./packs/ro.mjs";
import { huTools } from "./packs/hu.mjs";
import { elTools } from "./packs/el.mjs";
import { trTools } from "./packs/tr.mjs";
import { ruTools } from "./packs/ru.mjs";
import { arTools } from "./packs/ar.mjs";
import { zhTools } from "./packs/zh.mjs";
import { jaTools } from "./packs/ja.mjs";
import { koTools } from "./packs/ko.mjs";
import { hiTools } from "./packs/hi.mjs";
import { idTools } from "./packs/id.mjs";

const partial = readFileSync(join(__dirname, "translations-data-partial.mjs"), "utf8");
const catBlock = partial.slice(0, partial.indexOf("export const toolTranslations"));

const localePacks = {
  fr: frTools,
  it: itTools,
  pt: ptTools,
  nl: nlTools,
  sv: svTools,
  no: noTools,
  da: daTools,
  fi: fiTools,
  cs: csTools,
  ro: roTools,
  hu: huTools,
  el: elTools,
  tr: trTools,
  ru: ruTools,
  ar: arTools,
  zh: zhTools,
  ja: jaTools,
  ko: koTools,
  hi: hiTools,
  id: idTools,
};

function validatePack(locale, pack) {
  for (const id of TOOL_IDS) {
    if (!pack[id]) throw new Error(`Missing ${locale}/${id}`);
  }
}

for (const [locale, pack] of Object.entries(localePacks)) {
  validatePack(locale, pack);
}

const out =
  catBlock +
  `\nexport const toolTranslations = ${JSON.stringify(localePacks, null, 2)};\n`;

writeFileSync(join(__dirname, "translations-data.mjs"), out, "utf8");
console.log("Wrote translations-data.mjs");
