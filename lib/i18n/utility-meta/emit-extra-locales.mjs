/**
 * Emits extra-locales.ts from translation data.
 * Run: node lib/i18n/utility-meta/emit-extra-locales.mjs
 */
import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { extraCategoryLabels, toolTranslations } from "./translations-data.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const TOOL_IDS = Object.keys(toolTranslations.fr);

function esc(s) {
  return JSON.stringify(s);
}

function emitFaq(faq, indent) {
  if (!faq.length) return "[]";
  const items = faq
    .map(
      (f) =>
        `${indent}      { q: ${esc(f.q)}, a: ${esc(f.a)} },`,
    )
    .join("\n");
  return `[\n${items}\n${indent}    ]`;
}

function emitSteps(steps, indent) {
  const items = steps.map((s) => `${indent}      ${esc(s)},`).join("\n");
  return `[\n${items}\n${indent}    ]`;
}

function emitTool(id, meta, indent) {
  return `${indent}  ${JSON.stringify(id)}: {
${indent}    category: ${esc(meta.category)},
${indent}    name: ${esc(meta.name)},
${indent}    description: ${esc(meta.description)},
${indent}    steps: ${emitSteps(meta.steps, indent)},
${indent}    faq: ${emitFaq(meta.faq, indent)},
${indent}  },`;
}

function buildLocaleMap(locale) {
  const cats = extraCategoryLabels[locale];
  const src = toolTranslations[locale];
  const map = {};
  for (const id of TOOL_IDS) {
    const t = src[id];
    map[id] = {
      category: cats[t.cat],
      name: t.name,
      description: t.desc,
      steps: t.steps,
      faq: t.faq,
    };
  }
  return map;
}

function emitCategoryLabels() {
  const locales = Object.keys(extraCategoryLabels);
  const lines = locales.map((loc) => {
    const cats = extraCategoryLabels[loc];
    const entries = Object.entries(cats)
      .map(([k, v]) => `    ${k}: ${esc(v)},`)
      .join("\n");
    return `  ${loc}: {\n${entries}\n  },`;
  });
  return lines.join("\n");
}

function emitUtilityMaps() {
  const locales = Object.keys(toolTranslations);
  return locales
    .map((loc) => {
      const map = buildLocaleMap(loc);
      const tools = TOOL_IDS.map((id) => emitTool(id, map[id], "    ")).join("\n");
      return `  ${loc}: {\n${tools}\n  },`;
    })
    .join("\n");
}

const out = `import type { UtilityToolId, UtilityCategory } from "@/lib/utility-tools"
import type { UtilityMeta } from "../utility-meta"

export type UtilityMetaMap = Record<UtilityToolId, UtilityMeta>

export const extraCategoryLabels: Record<string, Record<UtilityCategory, string>> = {
${emitCategoryLabels()}
}

export const extraUtilityMaps: Record<string, UtilityMetaMap> = {
${emitUtilityMaps()}
}
`;

const target = join(__dirname, "extra-locales.ts");
writeFileSync(target, out, "utf8");
const lineCount = out.split("\n").length;
console.log(`Wrote ${target} (${lineCount} lines)`);
