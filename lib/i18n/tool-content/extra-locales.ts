import { createExtraFaqBuilder, createToolContentStrings } from "./locale-factory"
import { frToolContentTemplates } from "./packs/fr"
import { itToolContentTemplates } from "./packs/it"
import { ptToolContentTemplates } from "./packs/pt"
import { nlToolContentTemplates } from "./packs/nl"
import { svToolContentTemplates } from "./packs/sv"
import { noToolContentTemplates } from "./packs/no"
import { daToolContentTemplates } from "./packs/da"
import { fiToolContentTemplates } from "./packs/fi"
import { csToolContentTemplates } from "./packs/cs"
import { roToolContentTemplates } from "./packs/ro"
import { huToolContentTemplates } from "./packs/hu"
import { elToolContentTemplates } from "./packs/el"
import { trToolContentTemplates } from "./packs/tr"
import { ruToolContentTemplates } from "./packs/ru"
import { arToolContentTemplates } from "./packs/ar"
import { zhToolContentTemplates } from "./packs/zh"
import { jaToolContentTemplates } from "./packs/ja"
import { koToolContentTemplates } from "./packs/ko"
import { hiToolContentTemplates } from "./packs/hi"
import { idToolContentTemplates } from "./packs/id"

const packs = {
  fr: frToolContentTemplates,
  it: itToolContentTemplates,
  pt: ptToolContentTemplates,
  nl: nlToolContentTemplates,
  sv: svToolContentTemplates,
  no: noToolContentTemplates,
  da: daToolContentTemplates,
  fi: fiToolContentTemplates,
  cs: csToolContentTemplates,
  ro: roToolContentTemplates,
  hu: huToolContentTemplates,
  el: elToolContentTemplates,
  tr: trToolContentTemplates,
  ru: ruToolContentTemplates,
  ar: arToolContentTemplates,
  zh: zhToolContentTemplates,
  ja: jaToolContentTemplates,
  ko: koToolContentTemplates,
  hi: hiToolContentTemplates,
  id: idToolContentTemplates,
} as const

export const extraContentStrings = Object.fromEntries(
  Object.entries(packs).map(([locale, templates]) => [
    locale,
    createToolContentStrings(templates),
  ]),
)

export const extraExtraFaq = Object.fromEntries(
  Object.entries(packs).map(([locale, templates]) => [
    locale,
    createExtraFaqBuilder(templates),
  ]),
)
