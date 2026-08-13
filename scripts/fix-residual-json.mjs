import fs from "node:fs"

const path = "scripts/residual-locale-fixes-data.json"
const lines = fs.readFileSync(path, "utf8").split("\n")

// Keep through pl section closing `  },`
const head = lines.slice(0, 1143)
const tail = `  "de": {
    "privacyBadge": { "title": "Datenschutz zuerst" },
    "privacyPage": { "badge": "Datenschutz zuerst" },
    "downloader": { "title": "Multi-Plattform → MP3-Downloader" },
    "nav": { "faq": "Häufige Fragen" },
    "footer": { "faq": "Häufige Fragen" },
    "cookieConsent": { "title": "Cookies" },
    "pages": {
      "faq": { "eyebrow": "Häufige Fragen" },
      "privacy": { "s4Title": "4. Cookies" },
      "contact": { "name": "Name" }
    }
  },
  "es": {
    "privacyBadge": { "title": "Privacidad primero" },
    "privacyPage": { "badge": "Privacidad primero" },
    "downloader": { "title": "Descargador MP3 multiplataforma" },
    "nav": { "faq": "Preguntas frecuentes" },
    "footer": { "faq": "Preguntas frecuentes" },
    "pages": { "faq": { "eyebrow": "Preguntas frecuentes" } }
  },
  "uk": {
    "privacyPage": { "badge": "Конфіденційність понад усе" },
    "downloader": { "title": "Мультиплатформний MP3-завантажувач" },
    "nav": { "faq": "Часті pytania" },
    "footer": { "faq": "Часті pytania" },
    "pages": { "faq": { "eyebrow": "Часті pytania" } }
  }
}`

// Fix uk typo
const fixed = [...head, tail].join("\n").replace(/Часті pytania/g, "Часті питання")
JSON.parse(fixed)
fs.writeFileSync(path, `${fixed}\n`)
console.log("Fixed JSON OK")
