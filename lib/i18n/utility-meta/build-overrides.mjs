/**
 * Builds el, tr, ru, ar, zh, ja, ko, hi, id packs from FR template + overrides.
 */
import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const packsDir = join(__dirname, "packs");

const { frTools } = await import("./packs/fr.mjs");

const TOOL_IDS = Object.keys(frTools);

/** @type {Record<string, Record<string, Partial<{ name: string; desc: string; steps: string[]; faq: { q: string; a: string }[]; cat: string }>>>} */
const OVERRIDES = JSON.parse(
  readFileSync(join(__dirname, "locale-overrides.json"), "utf8"),
);

for (const [locale, tools] of Object.entries(OVERRIDES)) {
  /** @type {Record<string, unknown>} */
  const pack = {};
  for (const id of TOOL_IDS) {
    const base = frTools[id];
    const o = tools[id];
    if (!o) throw new Error(`Missing override ${locale}/${id}`);
    pack[id] = {
      cat: o.cat ?? base.cat,
      name: o.name,
      desc: o.desc,
      steps: o.steps,
      faq: o.faq ?? [],
    };
  }
  writeFileSync(
    join(packsDir, `${locale}.mjs`),
    `export const ${locale}Tools = ${JSON.stringify(pack, null, 2)};\n`,
  );
  console.log("Wrote", locale);
}
