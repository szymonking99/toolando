import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const partial = readFileSync(join(__dirname, "translations-data-partial.mjs"), "utf8");

/** @type {Record<string, Record<string, unknown>>} */
const byLocale = {};

function reg(locale, id, cat, name, desc, steps, faq = []) {
  if (!byLocale[locale]) byLocale[locale] = {};
  byLocale[locale][id] = { cat, name, desc, steps, faq };
}

const block = partial.slice(partial.indexOf('reg("fr"'));
// eslint-disable-next-line no-eval
eval(block);

mkdirSync(join(__dirname, "packs"), { recursive: true });
for (const [loc, map] of Object.entries(byLocale)) {
  const content = `export const ${loc}Tools = ${JSON.stringify(map, null, 2)};\n`;
  writeFileSync(join(__dirname, "packs", `${loc}.mjs`), content);
  console.log(loc, Object.keys(map).length);
}
