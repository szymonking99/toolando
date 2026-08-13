/**
 * Builds scripts/final-ui-translations-data.json from still-en patches + native fixes.
 * Run: node scripts/generate-final-ui-translations-data.mjs
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")
const STILL_EN_DIR = path.join(__dirname, "gap-patches", "still-en")
const EN = JSON.parse(fs.readFileSync(path.join(ROOT, "locales", "en.json"), "utf8"))

/** Native UI translations — one entry per still-en leaf (brands/URLs kept as EN where required). */
const FIXES = {
  ar: {
    newsletter: { placeholder: "name@example.com" },
    premiumPage: { title: "Toolando Premium", premiumTitle: "Premium", supporterTitle: "الداعم" },
    privacyPage: { badge: "الخصوصية أولاً" },
    nav: { downloader: "محمّل MP3", premium: "Premium" },
    footer: { facebook: "Facebook", instagram: "Instagram", messenger: "Messenger", youtube: "YouTube" },
    account: { premiumBadge: "Premium" },
    downloader: { inputPlaceholder: "https://www.tiktok.com/@user/video/..." },
    pages: { terms: { s2PremiumTerm: "Premium" } },
  },
  cs: {
    newsletter: { placeholder: "vase@example.com" },
    premiumPage: { title: "Toolando Premium", premiumTitle: "Premium", supporterTitle: "Podporovatel" },
    privacyPage: { badge: "Soukromí na prvním místě" },
    nav: { downloader: "MP3 stahovač", premium: "Premium", faq: "Často kladené otázky" },
    recommender: { categories: { video: "Video" } },
    opener: { kindVideo: "Video", kinds: { video: "Video" } },
    footer: { faq: "Často kladené otázky", facebook: "Facebook", instagram: "Instagram", messenger: "Messenger", youtube: "YouTube" },
    tool: { maxSize: "max. 500 MB" },
    account: { premiumBadge: "Premium" },
    downloader: {
      eyebrow: "Video → MP3",
      title: "Multiplatformní → MP3 stahovač",
      inputPlaceholder: "https://www.tiktok.com/@user/video/...",
      idLabel: "ID",
    },
    pages: {
      contact: { email: "E-mail" },
      howItWorks: { tiersPremiumTerm: "Premium" },
      faq: { eyebrow: "Často kladené otázky" },
      privacy: { s4Title: "4. Soubory cookie" },
      terms: { s2PremiumTerm: "Premium" },
    },
  },
  da: {
    newsletter: { placeholder: "dig@example.com" },
    premiumPage: {
      title: "Toolando Premium",
      premiumTitle: "Premium",
      supporterTitle: "Supporter",
      cta: "Aktivér Premium",
    },
    privacyPage: { badge: "Privatliv først" },
    nav: { downloader: "MP3-henter", premium: "Premium", faq: "Ofte stillede spørgsmål" },
    recommender: { categories: { video: "Video" }, readFormat: "Formatguide" },
    opener: { kindVideo: "Video", download: "Hent", kinds: { video: "Video" } },
    footer: { faq: "Ofte stillede spørgsmål", facebook: "Facebook", instagram: "Instagram", messenger: "Messenger", youtube: "YouTube" },
    openerPage: { download: "Hent" },
    tool: { downloadNamed: "Hent" },
    cookieConsent: { title: "Cookies" },
    aiTool: { tone: "Stil", download: "Hent", send: "Send", stop: "Stop", toneLabel: "Stil" },
    account: { premiumBadge: "Premium" },
    downloader: {
      eyebrow: "Video → MP3",
      title: "Multiplatform → MP3-henter",
      inputPlaceholder: "https://www.tiktok.com/@user/video/...",
      idLabel: "ID",
      download: "Hent MP3",
    },
    pages: {
      howItWorks: { tiersPremiumTerm: "Premium" },
      faq: { eyebrow: "Ofte stillede spørgsmål" },
      privacy: { s4Title: "4. Cookies og sporing" },
      terms: { s2PremiumTerm: "Premium" },
    },
  },
  el: {
    newsletter: { placeholder: "name@example.com" },
    premiumPage: { title: "Toolando Premium", premiumTitle: "Premium", supporterTitle: "Υποστηρικτής" },
    privacyPage: { badge: "Απόρρητο πρώτα" },
    nav: { downloader: "Λήψη MP3", premium: "Premium", faq: "Συχνές ερωτήσεις" },
    ai: { badge: "Premium AI" },
    footer: { faq: "Συχνές ερωτήσεις", facebook: "Facebook", instagram: "Instagram", messenger: "Messenger", youtube: "YouTube" },
    cookieConsent: { title: "Cookies" },
    account: { premiumBadge: "Premium" },
    downloader: {
      title: "Λήψη MP3 πολλαπλών πλατφορμών",
      inputPlaceholder: "https://www.tiktok.com/@user/video/...",
      idLabel: "ID",
    },
    pages: {
      contact: { email: "E-mail" },
      about: { emailLabel: "E-mail:" },
      howItWorks: { tiersPremiumTerm: "Premium" },
      faq: { eyebrow: "Συχνές ερωτήσεις" },
      privacy: { s4Title: "4. Διαδικτυακά cookie" },
      terms: { s2PremiumTerm: "Premium" },
    },
  },
  fi: {
    newsletter: { placeholder: "sina@example.com" },
    premiumPage: { title: "Toolando Premium", premiumTitle: "Premium", supporterTitle: "Tukija" },
    privacyPage: { badge: "Yksityisyys ensin" },
    nav: { downloader: "MP3-lataaja", premium: "Premium", faq: "Usein kysytyt kysymykset" },
    recommender: { categories: { video: "Video" } },
    opener: { kindVideo: "Video", kinds: { video: "Video" } },
    footer: { faq: "Usein kysytyt kysymykset", facebook: "Facebook", instagram: "Instagram", messenger: "Messenger", youtube: "YouTube" },
    account: { premiumBadge: "Premium" },
    downloader: {
      eyebrow: "Video → MP3",
      title: "Monialustainen → MP3-lataaja",
      inputPlaceholder: "https://www.tiktok.com/@user/video/...",
      idLabel: "ID",
    },
    pages: {
      howItWorks: { tiersPremiumTerm: "Premium" },
      faq: { eyebrow: "Usein kysytyt kysymykset" },
      terms: { s2PremiumTerm: "Premium" },
    },
  },
  fr: {
    premiumPage: { title: "Toolando Premium", premiumTitle: "Premium", supporterTitle: "Supporter" },
    privacyPage: { badge: "Confidentialité d'abord" },
    nav: {
      formats: "Formats de fichiers",
      contact: "Contacter",
      premium: "Premium",
      guides: "Guides pratiques",
      faq: "FAQ",
    },
    recommender: { categories: { document: "Documents" } },
    opener: {
      kindImages: "Images numériques",
      kindAudio: "Fichiers audio",
      optionOne: "choix",
      optionMany: "choix",
      kinds: { image: "Images", audio: "Fichiers audio" },
    },
    editorial: { guidesCta: "Voir les guides" },
    footer: {
      contact: "Contacter",
      faq: "FAQ",
      guides: "Guides pratiques",
      facebook: "Facebook",
      instagram: "Instagram",
      messenger: "Messenger",
      youtube: "YouTube",
    },
    openerPage: { optionOne: "choix", optionMany: "choix" },
    cookieConsent: { title: "Cookies" },
    aiTool: { aspectPortrait: "Format portrait", ratioPortrait: "Portrait 2:3" },
    account: { premiumBadge: "Premium" },
    downloader: { inputPlaceholder: "https://www.tiktok.com/@user/video/...", idLabel: "ID" },
    pages: {
      contact: { message: "Votre message" },
      faq: { eyebrow: "FAQ" },
      privacy: { s4Title: "4. Cookies et traceurs" },
      terms: { s2PremiumTerm: "Premium", s7Title: "7. Nous contacter" },
      guides: { eyebrow: "Guides pratiques" },
    },
  },
  hi: {
    newsletter: { placeholder: "aap@example.com" },
    premiumPage: { title: "Toolando Premium", premiumTitle: "Premium", supporterTitle: "समर्थक" },
    privacyPage: { badge: "गोपनीयता पहले" },
    nav: { downloader: "MP3 डाउनलोडर", premium: "Premium", faq: "अक्सर पूछे जाने वाले प्रश्न" },
    footer: { faq: "अक्सर पूछे जाने वाले प्रश्न", facebook: "Facebook", instagram: "Instagram", messenger: "Messenger", youtube: "YouTube" },
    account: { premiumBadge: "Premium" },
    downloader: {
      eyebrow: "वीडियो → MP3",
      title: "मल्टी-प्लेटफ़ॉर्म → MP3 डाउनलोडर",
      inputPlaceholder: "https://www.tiktok.com/@user/video/...",
      idLabel: "ID",
    },
    pages: { privacy: { s4Title: "4. कुकीज़" }, terms: { s2PremiumTerm: "Premium" } },
  },
  hu: {
    newsletter: { placeholder: "te@example.com" },
    premiumPage: { title: "Toolando Premium", premiumTitle: "Premium", supporterTitle: "Támogató" },
    privacyPage: { badge: "Adatvédelem az első" },
    nav: { downloader: "MP3 letöltő", premium: "Premium" },
    footer: { facebook: "Facebook", instagram: "Instagram", messenger: "Messenger", youtube: "YouTube" },
    tool: { maxSize: "max. 500 MB" },
    account: { premiumBadge: "Premium" },
    downloader: {
      title: "Többplatformos → MP3 letöltő",
      inputPlaceholder: "https://www.tiktok.com/@user/video/...",
      idLabel: "ID",
    },
    pages: { terms: { s2PremiumTerm: "Premium" } },
  },
  id: {
    newsletter: { placeholder: "anda@example.com" },
    premiumPage: { title: "Toolando Premium", premiumTitle: "Premium", supporterTitle: "Pendukung" },
    privacyPage: { badge: "Privasi diutamakan" },
    nav: { downloader: "Pengunduh MP3", premium: "Premium", faq: "Pertanyaan Umum" },
    recommender: { categories: { video: "Video" } },
    opener: { kindVideo: "Video", kindAudio: "Audio", kinds: { video: "Video", audio: "Audio" } },
    footer: {
      faq: "Pertanyaan Umum",
      editorial: "Redaksi",
      facebook: "Facebook",
      instagram: "Instagram",
      messenger: "Messenger",
      youtube: "YouTube",
    },
    aiTool: { tones: { formal: "resmi" } },
    account: { premiumBadge: "Premium" },
    downloader: {
      eyebrow: "Video → MP3",
      title: "Pengunduh Multi-Platform → MP3",
      inputPlaceholder: "https://www.tiktok.com/@user/video/...",
      idLabel: "ID",
    },
    pages: { editorial: { eyebrow: "Redaksi" }, terms: { s2PremiumTerm: "Premium" } },
  },
  it: {
    premiumPage: { title: "Toolando Premium", premiumTitle: "Premium", supporterTitle: "Supporter" },
    privacyPage: { badge: "Privacy al primo posto" },
    nav: { downloader: "Scaricatore MP3", premium: "Premium", faq: "Domande frequenti" },
    feedback: { no: "No" },
    recommender: { categories: { video: "Video" } },
    opener: { kindVideo: "Video", kindAudio: "Audio", kinds: { video: "Video", audio: "Audio" } },
    footer: { faq: "Domande frequenti", facebook: "Facebook", instagram: "Instagram", messenger: "Messenger", youtube: "YouTube" },
    tool: { maxSize: "max. 500 MB" },
    category: { back: "Inizio" },
    account: { premiumBadge: "Premium" },
    downloader: { eyebrow: "Video → MP3", inputPlaceholder: "https://www.tiktok.com/@user/video/...", idLabel: "ID" },
    pages: { terms: { s2PremiumTerm: "Premium", s6Title: "6. Diritti d'autore" } },
  },
  ja: {
    newsletter: { placeholder: "name@example.com" },
    premiumPage: { title: "Toolando Premium", premiumTitle: "Premium", supporterTitle: "サポーター" },
    privacyPage: { badge: "プライバシー第一" },
    nav: { downloader: "MP3ダウンローダー", premium: "Premium", faq: "よくある質問" },
    footer: { faq: "よくある質問", facebook: "Facebook", instagram: "Instagram", messenger: "Messenger", youtube: "YouTube" },
    account: { premiumBadge: "Premium" },
    downloader: {
      eyebrow: "動画 → MP3",
      title: "マルチプラットフォーム → MP3ダウンローダー",
      inputPlaceholder: "https://www.tiktok.com/@user/video/...",
      idLabel: "ID",
    },
    pages: { terms: { s2PremiumTerm: "Premium" } },
  },
  ko: {
    newsletter: { placeholder: "name@example.com" },
    premiumPage: { title: "Toolando Premium", premiumTitle: "Premium", supporterTitle: "서포터" },
    privacyPage: { badge: "프라이버시 우선" },
    nav: { downloader: "MP3 다운로더", premium: "Premium", faq: "자주 묻는 질문" },
    footer: { faq: "자주 묻는 질문", facebook: "Facebook", instagram: "Instagram", messenger: "Messenger", youtube: "YouTube" },
    account: { premiumBadge: "Premium" },
    downloader: {
      eyebrow: "동영상 → MP3",
      title: "멀티플랫폼 → MP3 다운로더",
      inputPlaceholder: "https://www.tiktok.com/@user/video/...",
      idLabel: "ID",
    },
    pages: { faq: { eyebrow: "자주 묻는 질문" }, terms: { s2PremiumTerm: "Premium" } },
  },
  nl: {
    privacyBadge: { title: "Privacy eerst" },
    newsletter: { placeholder: "jij@voorbeeld.nl" },
    premiumPage: {
      title: "Toolando Premium",
      premiumTitle: "Premium",
      supporterTitle: "Supporter",
      cta: "Premium starten",
    },
    privacyPage: { title: "Privacy eerst, by design", badge: "Privacy eerst" },
    nav: {
      tools: "Converteerders",
      contact: "Contact opnemen",
      downloader: "MP3-downloader",
      converters: "Converteerders",
      premium: "Premium",
      faq: "Veelgestelde vragen",
    },
    recommender: { categories: { video: "Video's", document: "Documenten" } },
    opener: { kindVideo: "Video's", kindAudio: "Geluid", kinds: { video: "Video's", audio: "Geluid" } },
    ai: { badge: "Premium AI" },
    why: { toolsTitle: "Meer dan 200 online tools" },
    footer: {
      tools: "Alle tools",
      contact: "Contact opnemen",
      faq: "Veelgestelde vragen",
      facebook: "Facebook",
      instagram: "Instagram",
      messenger: "Messenger",
      youtube: "YouTube",
    },
    tool: { maxSize: "maximaal 500 MB" },
    cookieConsent: { title: "Cookies" },
    category: { back: "Startpagina", toolsCount: "hulpmiddelen" },
    account: { premiumBadge: "Premium" },
    downloader: {
      eyebrow: "Video → MP3",
      title: "Multiplatform → MP3-downloader",
      inputPlaceholder: "https://www.tiktok.com/@user/video/...",
      idLabel: "ID",
    },
    pages: {
      contact: { eyebrow: "Contact opnemen" },
      about: { contactTitle: "Neem contact op" },
      privacy: { s4Title: "4. Cookies en tracking" },
      terms: { s2PremiumTerm: "Premium", s7Title: "7. Contact opnemen" },
    },
  },
  no: {
    newsletter: { placeholder: "deg@example.com" },
    premiumPage: {
      title: "Toolando Premium",
      premiumTitle: "Premium",
      supporterTitle: "Supporter",
      cta: "Aktiver Premium",
    },
    privacyPage: { badge: "Personvern først" },
    nav: { downloader: "MP3-nedlaster", premium: "Premium", faq: "Ofte stilte spørsmål" },
    recommender: { categories: { video: "Video" } },
    opener: { kindVideo: "Video", kinds: { video: "Video" } },
    footer: { faq: "Ofte stilte spørsmål", facebook: "Facebook", instagram: "Instagram", messenger: "Messenger", youtube: "YouTube" },
    aiTool: { tone: "Tone", send: "Send", toneLabel: "Tone" },
    account: { premiumBadge: "Premium" },
    downloader: {
      eyebrow: "Video → MP3",
      title: "Multiplattform → MP3-nedlaster",
      inputPlaceholder: "https://www.tiktok.com/@user/video/...",
      idLabel: "ID",
    },
    pages: {
      howItWorks: { tiersPremiumTerm: "Premium" },
      faq: { eyebrow: "Ofte stilte spørsmål" },
      terms: { s2PremiumTerm: "Premium" },
    },
  },
  pt: {
    premiumPage: { title: "Toolando Premium", premiumTitle: "Premium", supporterTitle: "Apoiante" },
    privacyPage: { badge: "Privacidade em primeiro lugar" },
    nav: { downloader: "Descarregador MP3", premium: "Premium", faq: "Perguntas frequentes" },
    footer: {
      faq: "Perguntas frequentes",
      editorial: "Editorial",
      facebook: "Facebook",
      instagram: "Instagram",
      messenger: "Messenger",
      youtube: "YouTube",
    },
    cookieConsent: { title: "Cookies" },
    aiTool: { tones: { formal: "formal" } },
    account: { premiumBadge: "Premium" },
    downloader: { inputPlaceholder: "https://www.tiktok.com/@user/video/...", idLabel: "ID" },
    pages: {
      editorial: { eyebrow: "Editorial" },
      privacy: { s4Title: "4. Cookies e rastreamento" },
      terms: { s2PremiumTerm: "Premium" },
    },
  },
  ro: {
    newsletter: { placeholder: "nume@example.com" },
    premiumPage: { title: "Toolando Premium", premiumTitle: "Premium", supporterTitle: "Susținător" },
    privacyPage: { badge: "Confidențialitatea pe primul loc" },
    nav: { contact: "Contact", downloader: "Descărcător MP3", premium: "Premium", faq: "Întrebări frecvente" },
    recommender: { categories: { document: "Document" } },
    opener: { kindVideo: "Video", kindAudio: "Audio", kinds: { video: "Video", audio: "Audio" } },
    footer: {
      contact: "Contact",
      faq: "Întrebări frecvente",
      editorial: "Editorial",
      facebook: "Facebook",
      instagram: "Instagram",
      messenger: "Messenger",
      youtube: "YouTube",
    },
    tool: { maxSize: "max. 500 MB" },
    aiTool: { tones: { formal: "formal" } },
    account: { premiumBadge: "Premium" },
    downloader: {
      eyebrow: "Video → MP3",
      title: "Descărcător multiplatformă → MP3",
      inputPlaceholder: "https://www.tiktok.com/@user/video/...",
      idLabel: "ID",
    },
    pages: {
      contact: { eyebrow: "Contactați-ne" },
      about: { contactTitle: "Contactați-ne" },
      editorial: { eyebrow: "Editorial" },
      howItWorks: { tiersPremiumTerm: "Premium" },
      terms: { s2PremiumTerm: "Premium", s7Title: "7. Contactați-ne" },
    },
  },
  ru: {
    premiumPage: { title: "Toolando Premium", premiumTitle: "Premium", supporterTitle: "Поддерживающий" },
    privacyPage: { badge: "Конфиденциальность прежде всего" },
    nav: { downloader: "MP3-загрузчик", premium: "Premium", faq: "Частые вопросы" },
    footer: { faq: "Частые вопросы", facebook: "Facebook", instagram: "Instagram", messenger: "Messenger", youtube: "YouTube" },
    account: { premiumBadge: "Premium" },
    downloader: {
      title: "Мультиплатформенный MP3-загрузчик",
      inputPlaceholder: "https://www.tiktok.com/@user/video/...",
      idLabel: "ID",
    },
    pages: { terms: { s2PremiumTerm: "Premium" } },
  },
  sv: {
    newsletter: { placeholder: "du@example.com" },
    premiumPage: { title: "Toolando Premium", premiumTitle: "Premium", supporterTitle: "Supporter" },
    privacyPage: { badge: "Integritet först" },
    nav: { downloader: "MP3-nedladdare", premium: "Premium", faq: "Vanliga frågor" },
    recommender: { categories: { video: "Video" } },
    opener: { kindVideo: "Video", kinds: { video: "Video" } },
    footer: { faq: "Vanliga frågor", facebook: "Facebook", instagram: "Instagram", messenger: "Messenger", youtube: "YouTube" },
    tool: { maxSize: "max. 500 MB" },
    cookieConsent: { title: "Cookies" },
    account: { premiumBadge: "Premium" },
    downloader: {
      eyebrow: "Video → MP3",
      title: "Multiplattform → MP3-nedladdare",
      inputPlaceholder: "https://www.tiktok.com/@user/video/...",
      idLabel: "ID",
    },
    pages: {
      howItWorks: { tiersPremiumTerm: "Premium" },
      faq: { eyebrow: "Vanliga frågor" },
      privacy: { s4Title: "4. Kakor" },
      terms: { s2PremiumTerm: "Premium" },
    },
  },
  tr: {
    newsletter: { placeholder: "siz@example.com" },
    premiumPage: { title: "Toolando Premium", premiumTitle: "Premium", supporterTitle: "Destekçi" },
    privacyPage: { badge: "Gizlilik öncelikli" },
    nav: { downloader: "MP3 İndirici", premium: "Premium" },
    opener: { kindVideo: "Video", kinds: { video: "Video" } },
    footer: { facebook: "Facebook", instagram: "Instagram", messenger: "Messenger", youtube: "YouTube" },
    account: { premiumBadge: "Premium" },
    downloader: {
      eyebrow: "Video → MP3",
      title: "Çoklu Platform → MP3 İndirici",
      inputPlaceholder: "https://www.tiktok.com/@user/video/...",
      idLabel: "ID",
    },
    pages: { terms: { s2PremiumTerm: "Premium" } },
  },
  zh: {
    newsletter: { placeholder: "name@example.com" },
    premiumPage: { title: "Toolando Premium", premiumTitle: "Premium", supporterTitle: "支持者" },
    privacyPage: { badge: "隐私优先" },
    nav: { downloader: "MP3 下载器", premium: "Premium" },
    footer: { facebook: "Facebook", instagram: "Instagram", messenger: "Messenger", youtube: "YouTube" },
    account: { premiumBadge: "Premium" },
    downloader: { inputPlaceholder: "https://www.tiktok.com/@user/video/...", idLabel: "ID" },
    pages: { terms: { s2PremiumTerm: "Premium" } },
  },
}

function getByPath(obj, pathStr) {
  return pathStr.split(".").reduce((o, k) => o?.[k], obj)
}

function collectLeaves(obj, prefix = "") {
  const out = []
  for (const [k, v] of Object.entries(obj)) {
    const p = prefix ? `${prefix}.${k}` : k
    if (v !== null && typeof v === "object" && !Array.isArray(v)) {
      out.push(...collectLeaves(v, p))
    } else {
      out.push({ path: p, value: v })
    }
  }
  return out
}

const stillEnFiles = fs.readdirSync(STILL_EN_DIR).filter((f) => f.endsWith(".json")).sort()
let totalKeys = 0
const perLocale = {}

for (const file of stillEnFiles) {
  const locale = file.replace(".json", "")
  const stillEn = JSON.parse(fs.readFileSync(path.join(STILL_EN_DIR, file), "utf8"))
  const fix = FIXES[locale]
  if (!fix) {
    console.error(`Missing FIXES for locale: ${locale}`)
    process.exit(1)
  }
  const stillLeaves = collectLeaves(stillEn)
  const fixLeaves = collectLeaves(fix)
  if (stillLeaves.length !== fixLeaves.length) {
    console.error(`${locale}: still-en has ${stillLeaves.length} keys, FIXES has ${fixLeaves.length}`)
    const stillPaths = new Set(stillLeaves.map((l) => l.path))
    const fixPaths = new Set(fixLeaves.map((l) => l.path))
    for (const p of stillPaths) if (!fixPaths.has(p)) console.error(`  missing fix: ${p}`)
    for (const p of fixPaths) if (!stillPaths.has(p)) console.error(`  extra fix: ${p}`)
    process.exit(1)
  }
  for (const { path: p } of stillLeaves) {
    if (getByPath(fix, p) === undefined) {
      console.error(`${locale}.${p}: missing fix value`)
      process.exit(1)
    }
  }
  perLocale[locale] = stillLeaves.length
  totalKeys += stillLeaves.length
}

const outPath = path.join(__dirname, "final-ui-translations-data.json")
fs.writeFileSync(outPath, `${JSON.stringify(FIXES, null, 2)}\n`)
console.log(`Wrote ${outPath}`)
console.log(`Locales: ${stillEnFiles.length}, total keys: ${totalKeys}`)
console.log(JSON.stringify(perLocale, null, 2))
