import type { LegalDocumentData } from "@/components/legal-document"

export const privacySv: LegalDocumentData = {
  eyebrow: "Integritetspolicy",
  title: "Integritetspolicy för Toolando.tech",
  intro:
    "Denna integritetspolicy beskriver vilka uppgifter som behandlas på Toolando.tech, i vilket syfte, på vilken rättslig grund och vilka rättigheter du har. Jag behandlar personuppgifter i enlighet med förordning (EU) 2016/679 (GDPR) och tillämplig polsk dataskyddslagstiftning.",
  lastUpdated: "Senast uppdaterad: 23 juli 2026",
  sections: [
    {
      title: "§1. Personuppgiftsansvarig",
      paragraphs: [
        "1.1. Personuppgiftsansvarig för databehandlingen (\"Personuppgiftsansvarig\") är Szymon, ägare av Toolando.tech, som driver onlineverktygstjänster.",
        "1.2. Kontakt för dataskydd: {{email}}.",
        "1.3. Personuppgiftsansvarig har inte utsett dataskyddsombud, eftersom detta inte krävs enligt GDPR för denna verksamhet.",
      ],
    },
    {
      title: "§2. Vilka uppgifter vi behandlar",
      paragraphs: ["2.1. Beroende på hur du använder tjänsten behandlar vi följande kategorier:"],
      list: [
        "Tekniska och användningsuppgifter: IP-adress, webbläsartyp och version, operativsystem, språk, datum och tid för begäran, besökta sidor, trafikkälla, cookie-identifierare (efter samtycke).",
        "Kontouppgifter: e-postadress, lösenord (hash), användar-ID, registreringsdatum, Premium-status, Stripe-kund-ID (om tillämpligt).",
        "Betalningsuppgifter: behandlas av Stripe — Personuppgiftsansvarig lagrar inte fullständiga betalkortsnummer.",
        "Korrespondensuppgifter: e-postadress, meddelandeinnehåll, kontaktdatum — när du skriver till {{email}} eller använder kontaktformuläret.",
        "Användarfiler: behandlas endast tillfälligt för att utföra verktygsoperationer — lagras inte efter att konverteringen slutförts.",
      ],
    },
    {
      title: "§3. Syften och rättsliga grunder",
      paragraphs: ["3.1. Vi behandlar uppgifter för följande syften:"],
      definitions: [
        {
          term: "Tillhandahållande av tjänsten",
          description:
            "Filkonvertering, drift av verktyg, kontohantering — rättslig grund: art. 6.1 b GDPR (avtal) eller f (berättigat intresse: drift av tjänsten).",
        },
        {
          term: "Premium-prenumeration",
          description:
            "Betalnings- och prenumerationshantering — rättslig grund: art. 6.1 b GDPR; bokföring: art. 6.1 c (rättslig skyldighet).",
        },
        {
          term: "Trafikanalys",
          description:
            "Google Analytics — endast efter samtycke till analys-cookies — rättslig grund: art. 6.1 a GDPR (samtycke).",
        },
        {
          term: "Reklam",
          description:
            "Google AdSense — endast efter samtycke till reklam-cookies — rättslig grund: art. 6.1 a GDPR (samtycke).",
        },
        {
          term: "Säkerhet",
          description:
            "Förebyggande av missbruk, serverloggar — rättslig grund: art. 6.1 f GDPR (berättigat intresse).",
        },
        {
          term: "Kontakt och klagomål",
          description:
            "Besvarande av meddelanden — rättslig grund: art. 6.1 f GDPR eller b (om avtalsrelaterat).",
        },
      ],
    },
    {
      title: "§4. Cookies och liknande tekniker",
      paragraphs: [
        "4.1. Tjänsten använder cookies och liknande tekniker. Vid första besöket visar vi ett samtyckesbanner där du kan acceptera alla cookies eller begränsa dig till nödvändiga.",
        "4.2. Typer av cookies:",
      ],
      list: [
        "Nödvändiga — krävs för tjänstens funktion (t.ex. språk, session, cookie-inställningar). Inget samtycke krävs.",
        "Analys — Google Analytics, aggregerad besöksstatistik. Samtycke krävs.",
        "Reklam — Google AdSense, annonspersonalisering. Samtycke krävs.",
      ],
      afterList: [
        "4.3. Du kan när som helst ändra dina cookie-inställningar via bannern eller webbläsarinställningarna.",
      ],
    },
    {
      title: "§5. Mottagare och personuppgiftsbiträden",
      paragraphs: ["5.1. Uppgifter kan delas med betrodda personuppgiftsbiträden som agerar på uppdrag av Personuppgiftsansvarig:"],
      list: [
        "Vercel Inc. — hosting och infrastruktur (USA, EU:s standardavtalsklausuler).",
        "Stripe, Inc. — betalningshantering för Premium (USA/Irland, PCI DSS).",
        "Google LLC — Analytics och AdSense (efter samtycke; partnerpolicy: https://policies.google.com/technologies/partner-sites).",
        "Resend — transaktions-e-post (t.ex. välkomstmail efter registrering), om konfigurerat.",
        "AI-modellleverantörer — behandling av prompts och filer endast inom Premium AI-verktyg, utan lagring efter slutförande.",
      ],
      afterList: ["5.2. Personuppgiftsansvarig säljer inte personuppgifter till tredje part."],
    },
    {
      title: "§6. Filer uppladdade i verktyg",
      paragraphs: [
        "6.1. Filer som laddas upp till konverterare och andra verktyg lagras inte efter att operationen slutförts.",
        "6.2. Filer används inte för AI-modellträning, profilering eller marknadsföring.",
        "6.3. Vissa verktyg (t.ex. den universella filöppnaren) behandlar filer helt lokalt i webbläsaren — filen lämnar aldrig din enhet.",
        "6.4. Ladda inte upp filer med känsliga uppgifter (t.ex. hälsoinformation, personnummer) om det inte är absolut nödvändigt — det sker på egen risk.",
      ],
    },
    {
      title: "§7. Lagringsperioder",
      paragraphs: ["7.1. Vi lagrar uppgifter under följande perioder:"],
      list: [
        "Kontouppgifter — tills kontot raderas eller en raderingsbegäran inkommer.",
        "Serverloggar — upp till 90 dagar, om inte längre lagring krävs för att göra gällande anspråk.",
        "Korrespondens — upp till 3 år efter att ärendet avslutats.",
        "Faktureringsuppgifter (Stripe) — enligt skattelagstiftning (vanligtvis 5 år).",
        "Användarfiler — raderas omedelbart efter behandling (vanligtvis sekunder till minuter).",
        "Cookie-inställningar — upp till 12 månader eller tills samtycket återkallas.",
      ],
    },
    {
      title: "§8. Dina rättigheter (GDPR)",
      paragraphs: ["8.1. Du har följande rättigheter:"],
      list: [
        "Rätt till tillgång (art. 15 GDPR).",
        "Rätt till rättelse (art. 16 GDPR).",
        "Rätt till radering — \"rätten att bli bortglömd\" (art. 17 GDPR).",
        "Rätt till begränsning av behandling (art. 18 GDPR).",
        "Rätt till dataportabilitet (art. 20 GDPR).",
        "Rätt att invända mot behandling baserad på art. 6.1 f GDPR (art. 21 GDPR).",
        "Rätt att när som helst återkalla samtycke — utan att påverka lagligheten av behandling före återkallelsen (art. 7.3 GDPR).",
        "Rätt att lämna in klagomål till tillsynsmyndighet (i Polen: PUODO, uodo.gov.pl).",
      ],
      afterList: [
        "8.2. För att utöva dina rättigheter, skriv till {{email}}. Jag svarar utan dröjsmål, senast inom 30 dagar.",
      ],
    },
    {
      title: "§9. Datasäkerhet",
      paragraphs: [
        "9.1. Jag tillämpar tekniska och organisatoriska åtgärder som är proportionerliga mot risken, inklusive HTTPS-kryptering, begränsad systemåtkomst och radering av filer efter behandling.",
        "9.2. Inget system är 100 % säkert. Vid en personuppgiftsincident som sannolikt innebär hög risk för dina rättigheter informerar jag dig enligt art. 34 GDPR.",
      ],
    },
    {
      title: "§10. Barn",
      paragraphs: [
        "10.1. Tjänsten riktar sig inte till barn under 16 år. Jag behandlar medvetet inte uppgifter om barn under 16 år utan samtycke från vårdnadshavare.",
        "10.2. Om du tror att ett barn har lämnat uppgifter utan vårdnadshavares samtycke, kontakta {{email}} — uppgifterna kommer att raderas.",
      ],
    },
    {
      title: "§11. Ändringar av denna policy",
      paragraphs: [
        "11.1. Denna policy kan uppdateras för att återspegla ändringar i tjänsten, teknik eller lagstiftning.",
        "11.2. Väsentliga ändringar meddelas via meddelande i tjänsten eller via e-post (för användare med konton).",
        "11.3. Den aktuella versionen finns alltid tillgänglig på /polityka-prywatnosci.",
      ],
    },
  ],
  footerNote:
    "Frågor om integritet: {{email}}. Användarvillkor finns på /regulamin.",
}
