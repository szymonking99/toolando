import fs from "node:fs"
import path from "node:path"

const dir = "lib/i18n/locale-packs/packs"
const fixes = {
  fr: {
    title: "Cookies",
    description:
      "Toolando.tech utilise des cookies nécessaires et, avec votre consentement, des cookies analytiques (Google Analytics) et publicitaires (Google AdSense). Vous pouvez tout accepter ou limiter aux cookies essentiels.",
    acceptAll: "Tout accepter",
    necessaryOnly: "Essentiels uniquement",
    privacyLink: "Politique de confidentialité",
  },
  it: {
    title: "Cookie",
    description:
      "Toolando.tech utilizza cookie necessari e, con il tuo consenso, cookie analitici (Google Analytics) e pubblicitari (Google AdSense). Puoi accettare tutti o limitarti a quelli essenziali.",
    acceptAll: "Accetta tutti",
    necessaryOnly: "Solo essenziali",
    privacyLink: "Informativa sulla privacy",
  },
  pt: {
    title: "Cookies",
    description:
      "O Toolando.tech utiliza cookies necessários e, com o seu consentimento, cookies analíticos (Google Analytics) e publicitários (Google AdSense). Pode aceitar todos ou limitar-se aos essenciais.",
    acceptAll: "Aceitar todos",
    necessaryOnly: "Apenas essenciais",
    privacyLink: "Política de privacidade",
  },
  nl: {
    title: "Cookies",
    description:
      "Toolando.tech gebruikt noodzakelijke cookies en, met uw toestemming, analytische (Google Analytics) en advertentiecookies (Google AdSense). U kunt alles accepteren of beperken tot essentiële cookies.",
    acceptAll: "Alles accepteren",
    necessaryOnly: "Alleen essentieel",
    privacyLink: "Privacybeleid",
  },
  sv: {
    title: "Cookies",
    description:
      "Toolando.tech använder nödvändiga cookies och, med ditt samtycke, analys- (Google Analytics) och annonscookies (Google AdSense). Du kan acceptera alla eller endast nödvändiga.",
    acceptAll: "Acceptera alla",
    necessaryOnly: "Endast nödvändiga",
    privacyLink: "Integritetspolicy",
  },
  no: {
    title: "Informasjonskapsler",
    description:
      "Toolando.tech bruker nødvendige informasjonskapsler og, med ditt samtykke, analyse- (Google Analytics) og annonsekapsler (Google AdSense). Du kan godta alle eller bare nødvendige.",
    acceptAll: "Godta alle",
    necessaryOnly: "Kun nødvendige",
    privacyLink: "Personvernerklæring",
  },
  da: {
    title: "Cookies",
    description:
      "Toolando.tech bruger nødvendige cookies og, med dit samtykke, analyse- (Google Analytics) og annoncercookies (Google AdSense). Du kan acceptere alle eller kun nødvendige.",
    acceptAll: "Acceptér alle",
    necessaryOnly: "Kun nødvendige",
    privacyLink: "Privatlivspolitik",
  },
  fi: {
    title: "Evästeet",
    description:
      "Toolando.tech käyttää välttämättömiä evästeitä ja suostumuksellasi analytiikka- (Google Analytics) ja mainosevästeitä (Google AdSense). Voit hyväksyä kaikki tai vain välttämättömät.",
    acceptAll: "Hyväksy kaikki",
    necessaryOnly: "Vain välttämättömät",
    privacyLink: "Tietosuojakäytäntö",
  },
  cs: {
    title: "Soubory cookie",
    description:
      "Toolando.tech používá nezbytné cookies a se souhlasem analytické (Google Analytics) a reklamní cookies (Google AdSense). Můžete přijmout vše nebo pouze nezbytné.",
    acceptAll: "Přijmout vše",
    necessaryOnly: "Pouze nezbytné",
    privacyLink: "Zásady ochrany osobních údajů",
  },
  ro: {
    title: "Cookie-uri",
    description:
      "Toolando.tech folosește cookie-uri necesare și, cu consimțământul dvs., cookie-uri analitice (Google Analytics) și publicitare (Google AdSense). Puteți accepta toate sau doar cele esențiale.",
    acceptAll: "Acceptă toate",
    necessaryOnly: "Doar esențiale",
    privacyLink: "Politica de confidențialitate",
  },
  hu: {
    title: "Sütik",
    description:
      "A Toolando.tech szükséges sütiket használ, és hozzájárulásával analitikai (Google Analytics) és hirdetési (Google AdSense) sütiket. Elfogadhat mindet, vagy csak a szükségeseket.",
    acceptAll: "Összes elfogadása",
    necessaryOnly: "Csak szükséges",
    privacyLink: "Adatvédelmi irányelvek",
  },
  el: {
    title: "Cookies",
    description:
      "Το Toolando.tech χρησιμοποιεί απαραίτητα cookies και, με τη συγκατάθεσή σας, αναλυτικά (Google Analytics) και διαφημιστικά cookies (Google AdSense). Μπορείτε να αποδεχτείτε όλα ή μόνο τα απαραίτητα.",
    acceptAll: "Αποδοχή όλων",
    necessaryOnly: "Μόνο απαραίτητα",
    privacyLink: "Πολιτική απορρήτου",
  },
  tr: {
    title: "Çerezler",
    description:
      "Toolando.tech gerekli çerezleri ve onayınızla analitik (Google Analytics) ve reklam çerezlerini (Google AdSense) kullanır. Tümünü kabul edebilir veya yalnızca gerekli olanlarla sınırlayabilirsiniz.",
    acceptAll: "Tümünü kabul et",
    necessaryOnly: "Yalnızca gerekli",
    privacyLink: "Gizlilik politikası",
  },
  ru: {
    title: "Файлы cookie",
    description:
      "Toolando.tech использует необходимые cookie и, с вашего согласия, аналитические (Google Analytics) и рекламные cookie (Google AdSense). Вы можете принять все или только необходимые.",
    acceptAll: "Принять все",
    necessaryOnly: "Только необходимые",
    privacyLink: "Политика конфиденциальности",
  },
  ar: {
    title: "ملفات تعريف الارتباط",
    description:
      "يستخدم Toolando.tech ملفات تعريف الارتباط الضرورية، وبموافقتك ملفات التحليلات (Google Analytics) والإعلانات (Google AdSense). يمكنك قبول الكل أو الاكتفاء بالضرورية.",
    acceptAll: "قبول الكل",
    necessaryOnly: "الضرورية فقط",
    privacyLink: "سياسة الخصوصية",
  },
  zh: {
    title: "Cookie",
    description:
      "Toolando.tech 使用必要的 Cookie，并在您同意后使用分析 Cookie（Google Analytics）和广告 Cookie（Google AdSense）。您可以接受全部或仅接受必要 Cookie。",
    acceptAll: "接受全部",
    necessaryOnly: "仅必要",
    privacyLink: "隐私政策",
  },
  ja: {
    title: "Cookie",
    description:
      "Toolando.tech は必要な Cookie を使用し、同意いただいた場合に分析（Google Analytics）および広告（Google AdSense）Cookie を使用します。すべて受け入れるか、必要なもののみに制限できます。",
    acceptAll: "すべて受け入れる",
    necessaryOnly: "必要なもののみ",
    privacyLink: "プライバシーポリシー",
  },
  ko: {
    title: "쿠키",
    description:
      "Toolando.tech는 필수 쿠키와, 동의 시 분석(Google Analytics) 및 광고(Google AdSense) 쿠키를 사용합니다. 모두 수락하거나 필수 쿠키만 허용할 수 있습니다.",
    acceptAll: "모두 수락",
    necessaryOnly: "필수만",
    privacyLink: "개인정보 처리방침",
  },
  hi: {
    title: "कुकीज़",
    description:
      "Toolando.tech आवश्यक कुकीज़ उपयोग करता है और आपकी सहमति पर विश्लेषण (Google Analytics) और विज्ञापन (Google AdSense) कुकीज़। आप सभी स्वीकार कर सकते हैं या केवल आवश्यक तक सीमित रख सकते हैं।",
    acceptAll: "सभी स्वीकार करें",
    necessaryOnly: "केवल आवश्यक",
    privacyLink: "गोपनीयता नीति",
  },
  id: {
    title: "Cookie",
    description:
      "Toolando.tech menggunakan cookie yang diperlukan dan, dengan persetujuan Anda, cookie analitik (Google Analytics) dan iklan (Google AdSense). Anda dapat menerima semua atau hanya yang esensial.",
    acceptAll: "Terima semua",
    necessaryOnly: "Hanya esensial",
    privacyLink: "Kebijakan privasi",
  },
}

for (const [loc, fix] of Object.entries(fixes)) {
  const file = path.join(dir, `${loc}.ts`)
  let s = fs.readFileSync(file, "utf8")
  const block = `  "cookieConsent": {
    "title": ${JSON.stringify(fix.title)},
    "description": ${JSON.stringify(fix.description)},
    "acceptAll": ${JSON.stringify(fix.acceptAll)},
    "necessaryOnly": ${JSON.stringify(fix.necessaryOnly)},
    "privacyLink": ${JSON.stringify(fix.privacyLink)}
  },`
  s = s.replace(/  "cookieConsent": \{[\s\S]*?\},/, block)
  fs.writeFileSync(file, s)
  console.log("fixed", loc)
}
