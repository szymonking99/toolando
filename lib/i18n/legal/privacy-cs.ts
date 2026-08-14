import type { LegalDocumentData } from "@/components/legal-document"

export const privacyCs: LegalDocumentData = {
  eyebrow: "Zásady ochrany osobních údajů",
  title: "Zásady ochrany osobních údajů Toolando.tech",
  intro:
    "Tyto zásady ochrany osobních údajů popisují, jaké údaje jsou na Toolando.tech zpracovávány, k jakým účelům, na jakém právním základě a jaká práva vám náleží. Osobní údaje zpracovávám v souladu s nařízením (EU) 2016/679 (GDPR) a platnou polskou legislativou o ochraně osobních údajů.",
  lastUpdated: "Poslední aktualizace: 23. července 2026",
  sections: [
    {
      title: "§1. Správce údajů",
      paragraphs: [
        "1.1. Správcem zpracování osobních údajů (\"Správce\") je Szymon, vlastník Toolando.tech, provozující online nástroje.",
        "1.2. Kontakt pro ochranu osobních údajů: {{email}}.",
        "1.3. Správce nejmenoval pověřence pro ochranu osobních údajů, protože to GDPR pro tuto činnost nevyžaduje.",
      ],
    },
    {
      title: "§2. Jaké údaje zpracováváme",
      paragraphs: ["2.1. V závislosti na způsobu používání služby zpracováváme následující kategorie:"],
      list: [
        "Technické a provozní údaje: IP adresa, typ a verze prohlížeče, operační systém, jazyk, datum a čas požadavku, navštívené stránky, zdroj návštěvnosti, identifikátory cookies (po udělení souhlasu).",
        "Údaje o účtu: e-mailová adresa, heslo (hash), ID uživatele, datum registrace, stav Premium, ID zákazníka Stripe (pokud je relevantní).",
        "Platební údaje: zpracovává Stripe — Správce neukládá úplná čísla platebních karet.",
        "Údaje z korespondence: e-mailová adresa, obsah zprávy, datum kontaktu — když píšete na {{email}} nebo používáte kontaktní formulář.",
        "Soubory uživatele: zpracovávány pouze dočasně pro provedení operace v nástroji — po dokončení konverze se neukládají.",
      ],
    },
    {
      title: "§3. Účely a právní základy",
      paragraphs: ["3.1. Údaje zpracováváme pro následující účely:"],
      definitions: [
        {
          term: "Poskytování služby",
          description:
            "Konverze souborů, provoz nástrojů, správa účtu — právní základ: čl. 6 odst. 1 písm. b GDPR (smlouva) nebo písm. f (oprávněný zájem: provoz služby).",
        },
        {
          term: "Premium předplatné",
          description:
            "Zpracování plateb a předplatného — právní základ: čl. 6 odst. 1 písm. b GDPR; účetnictví: čl. 6 odst. 1 písm. c (zákonná povinnost).",
        },
        {
          term: "Analýza návštěvnosti",
          description:
            "Google Analytics — pouze po souhlasu s analytickými cookies — právní základ: čl. 6 odst. 1 písm. a GDPR (souhlas).",
        },
        {
          term: "Reklama",
          description:
            "Google AdSense — pouze po souhlasu s reklamními cookies — právní základ: čl. 6 odst. 1 písm. a GDPR (souhlas).",
        },
        {
          term: "Bezpečnost",
          description:
            "Prevence zneužití, serverové logy — právní základ: čl. 6 odst. 1 písm. f GDPR (oprávněný zájem).",
        },
        {
          term: "Kontakt a stížnosti",
          description:
            "Odpovídání na zprávy — právní základ: čl. 6 odst. 1 písm. f GDPR nebo písm. b (pokud souvisí se smlouvou).",
        },
      ],
    },
    {
      title: "§4. Cookies a podobné technologie",
      paragraphs: [
        "4.1. Služba používá cookies a podobné technologie. Při první návštěvě zobrazíme banner se souhlasem, kde můžete přijmout všechny cookies nebo omezit se na nezbytné.",
        "4.2. Typy cookies:",
      ],
      list: [
        "Nezbytné — vyžadované pro fungování služby (např. jazyk, relace, nastavení cookies). Souhlas není nutný.",
        "Analytické — Google Analytics, agregované statistiky návštěv. Vyžaduje se souhlas.",
        "Reklamní — Google AdSense, personalizace reklam. Vyžaduje se souhlas.",
      ],
      afterList: [
        "4.3. Nastavení cookies můžete kdykoli změnit prostřednictvím banneru nebo nastavení prohlížeče.",
      ],
    },
    {
      title: "§5. Příjemci a zpracovatelé",
      paragraphs: ["5.1. Údaje mohou být předány důvěryhodným zpracovatelům jednajícím jménem Správce:"],
      list: [
        "Vercel Inc. — hosting a infrastruktura (USA, standardní smluvní doložky EU).",
        "Stripe, Inc. — zpracování plateb Premium (USA/Irsko, PCI DSS).",
        "Google LLC — Analytics a AdSense (po souhlasu; partnerská politika: https://policies.google.com/technologies/partner-sites).",
        "Resend — transakční e-maily (např. uvítací e-mail po registraci), pokud je nakonfigurováno.",
        "Poskytovatelé AI modelů — zpracování promptů a souborů pouze v rámci Premium AI nástrojů, bez uložení po dokončení.",
      ],
      afterList: ["5.2. Správce neprodává osobní údaje třetím stranám."],
    },
    {
      title: "§6. Soubory nahrané do nástrojů",
      paragraphs: [
        "6.1. Soubory nahrané do konvertorů a dalších nástrojů se po dokončení operace neukládají.",
        "6.2. Soubory se nepoužívají pro trénování AI modelů, profilování ani marketing.",
        "6.3. Některé nástroje (např. univerzální otevírač souborů) zpracovávají soubory zcela lokálně v prohlížeči — soubor nikdy neopustí vaše zařízení.",
        "6.4. Nenahrávejte soubory s citlivými údaji (např. zdravotní údaje, rodné číslo), pokud to není nezbytně nutné — činíte tak na vlastní riziko.",
      ],
    },
    {
      title: "§7. Doby uchovávání",
      paragraphs: ["7.1. Údaje uchováváme po následující dobu:"],
      list: [
        "Údaje o účtu — do smazání účtu nebo obdržení žádosti o smazání.",
        "Serverové logy — až 90 dní, pokud delší uchovávání není nutné pro uplatnění nároků.",
        "Korespondence — až 3 roky po ukončení případu.",
        "Fakturační údaje (Stripe) — dle daňových předpisů (obvykle 5 let).",
        "Soubory uživatele — smazány ihned po zpracování (obvykle sekundy až minuty).",
        "Nastavení cookies — až 12 měsíců nebo do odvolání souhlasu.",
      ],
    },
    {
      title: "§8. Vaše práva (GDPR)",
      paragraphs: ["8.1. Máte následující práva:"],
      list: [
        "Právo na přístup (čl. 15 GDPR).",
        "Právo na opravu (čl. 16 GDPR).",
        "Právo na výmaz — \"právo být zapomenut\" (čl. 17 GDPR).",
        "Právo na omezení zpracování (čl. 18 GDPR).",
        "Právo na přenositelnost údajů (čl. 20 GDPR).",
        "Právo vznést námitku proti zpracování na základě čl. 6 odst. 1 písm. f GDPR (čl. 21 GDPR).",
        "Právo kdykoli odvolat souhlas — bez vlivu na zákonnost zpracování před odvoláním (čl. 7 odst. 3 GDPR).",
        "Právo podat stížnost u dozorového úřadu (v Polsku: PUODO, uodo.gov.pl).",
      ],
      afterList: [
        "8.2. Pro uplatnění svých práv pište na {{email}}. Odpovím bez zbytečného odkladu, nejpozději do 30 dnů.",
      ],
    },
    {
      title: "§9. Bezpečnost údajů",
      paragraphs: [
        "9.1. Uplatňuji technická a organizační opatření přiměřená riziku, včetně šifrování HTTPS, omezeného přístupu k systémům a mazání souborů po zpracování.",
        "9.2. Žádný systém není 100% bezpečný. V případě porušení zabezpečení osobních údajů, které pravděpodobně představuje vysoké riziko pro vaše práva, vás informuji dle čl. 34 GDPR.",
      ],
    },
    {
      title: "§10. Děti",
      paragraphs: [
        "10.1. Služba není určena dětem mladším 16 let. Vědomě nezpracovávám údaje dětí mladších 16 let bez souhlasu zákonného zástupce.",
        "10.2. Pokud se domníváte, že dítě poskytlo údaje bez souhlasu zákonného zástupce, kontaktujte {{email}} — údaje budou smazány.",
      ],
    },
    {
      title: "§11. Změny těchto zásad",
      paragraphs: [
        "11.1. Tyto zásady mohou být aktualizovány, aby odrážely změny ve službě, technologiích nebo právních předpisech.",
        "11.2. O podstatných změnách budete informováni prostřednictvím oznámení ve službě nebo e-mailem (pro uživatele s účty).",
        "11.3. Aktuální verze je vždy dostupná na /polityka-prywatnosci.",
      ],
    },
  ],
  footerNote:
    "Dotazy k ochraně osobních údajů: {{email}}. Podmínky používání jsou dostupné na /regulamin.",
}
