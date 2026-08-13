import type { LegalDocumentData } from "@/components/legal-document"

export const termsSv: LegalDocumentData = {
  eyebrow: "Användarvillkor",
  title: "Användarvillkor för Toolando.tech",
  intro:
    "Dessa användarvillkor reglerar din användning av webbplatsen Toolando.tech på toolando.tech. Genom att använda tjänsten — inklusive att bläddra på sidor, ladda upp filer, skapa ett konto eller köpa en Premium-prenumeration — accepterar du dessa villkor i sin helhet. Om du inte accepterar villkoren, använd inte tjänsten.",
  lastUpdated: "Senast uppdaterad: 23 juli 2026",
  sections: [
    {
      title: "§1. Allmänna bestämmelser",
      paragraphs: [
        "1.1. Ägare och operatör av Toolando.tech (\"Tjänsten\") är Szymon Badyl (\"Leverantören\").",
        "1.2. Kontakt: {{email}}. För ärenden som kräver formell korrespondens tillhandahåller Leverantören identifieringsuppgifter enligt gällande lag vid berättigad begäran.",
        "1.3. Tjänsten erbjuder webbläsarbaserade onlineverktyg inklusive filkonverterare, specialverktyg, AI-drivna verktyg och informationsinnehåll (guider, FAQ).",
        "1.4. Dessa villkor tillhandahålls kostnadsfritt i tjänsten i en form som möjliggör nedladdning, lagring och utskrift.",
      ],
    },
    {
      title: "§2. Definitioner",
      definitions: [
        {
          term: "Användare",
          description:
            "Varje fysisk eller juridisk person som använder tjänsten, inklusive gäster (utan konto) och registrerade användare.",
        },
        {
          term: "Konto",
          description:
            "En individuell användarprofil skapad för tillgång till funktioner som kräver registrering, inklusive Premium-prenumerationer.",
        },
        {
          term: "Gratisverktyg",
          description:
            "Tjänstfunktioner som är tillgängliga kostnadsfritt och utan att skapa ett konto, om inte dessa villkor anger annat.",
        },
        {
          term: "Premium",
          description:
            "En betald prenumeration med tillgång till utökade funktioner, inklusive utvalda AI-verktyg och högre gränser.",
        },
        {
          term: "Användarfil",
          description:
            "Varje fil, textinnehåll eller data som användaren laddar upp till ett verktyg i tjänsten för behandling.",
        },
        {
          term: "Genererat innehåll",
          description:
            "Resultat som produceras av tjänstens verktyg, inklusive konverterade filer, texter eller bilder genererade av AI-verktyg.",
        },
      ],
    },
    {
      title: "§3. Tekniska krav och ålder",
      paragraphs: [
        "3.1. Användning av tjänsten kräver en enhet med internetåtkomst, en aktuell webbläsare med JavaScript-stöd och — för vissa verktyg — möjlighet att ladda ner filer till din enhet.",
        "3.2. Tjänsten riktar sig till personer från 16 års ålder. Användare under 16 år får endast använda tjänsten med samtycke och tillsyn av förälder eller vårdnadshavare.",
        "3.3. Användaren försäkrar att hen är fullt rättshandlingsförmögen eller använder tjänsten med vårdnadshavares samtycke.",
      ],
    },
    {
      title: "§4. Tjänstens omfattning",
      paragraphs: [
        "4.1. Tjänsten tillhandahålls \"i befintligt skick\". Leverantören strävar efter att verktygen fungerar korrekt men garanterar inte oavbruten tillgänglighet, kompatibilitet med alla filformat eller ett specifikt resultat.",
        "4.2. Vissa operationer körs lokalt i användarens webbläsare (t.ex. den universella filöppnaren). Vissa kräver tillfällig serverbehandling — detaljer finns i integritetspolicyn och på sidan \"Så fungerar det\".",
        "4.3. Leverantören kan lägga till, ändra, begränsa eller ta bort verktyg, funktioner eller filformat, inklusive att märka konverterare som \"kommer snart\" eller tillfälligt otillgängliga.",
        "4.4. Information i guider, FAQ och verktygsbeskrivningar är endast informativ och utgör inte professionell juridisk, medicinsk, finansiell eller teknisk rådgivning.",
      ],
    },
    {
      title: "§5. Användarkonto",
      paragraphs: [
        "5.1. Skapande av konto kräver en giltig e-postadress och lösenord. Användaren förbinder sig att lämna korrekta uppgifter och hålla dem aktuella.",
        "5.2. Användaren ansvarar för konfidentialiteten av inloggningsuppgifterna och för all aktivitet under sitt konto. Vid misstanke om obehörig åtkomst, kontakta omedelbart {{email}}.",
        "5.3. Leverantören kan spärra eller radera ett konto vid brott mot villkoren, misstanke om missbruk, handlingar som hotar tjänstens säkerhet eller på order av myndigheter, med förbehåll för gällande lag.",
        "5.4. Användaren kan när som helst upphöra med att använda sitt konto. Radering av konto kan begäras via {{email}}.",
      ],
    },
    {
      title: "§6. Gratisverktyg och Premium",
      paragraphs: [
        "6.1. Gratisverktyg är tillgängliga utan avgift. Leverantören kan tillämpa tekniska gränser (t.ex. filstorlek, antal operationer) som meddelas i tjänstens gränssnitt.",
        "6.2. Premium är en återkommande betald prenumeration för utökade funktioner inklusive AI-verktyg. Det aktuella Premium-omfattningen visas i tjänsten före köp.",
        "6.3. Premium-avgifter debiteras i förskott för varje faktureringsperiod (t.ex. månadsvis) via Stripe. Priser visas i den valuta som anges vid checkout och inkluderar skatter där det krävs enligt lag.",
        "6.4. Premium kan när som helst sägas upp via prenumerationshanteringspanelen (Stripe Customer Portal) i kontot. Uppsägning innebär att prenumerationen inte förnyas efter den aktuella betalda perioden — Premium-åtkomst kvarstår till slutet av den perioden.",
        "6.5. Avgifter för en påbörjad och betald prenumerationsperiod återbetalas inte, om inte tvingande konsumentlagstiftning föreskriver annat. Vid tekniska avbrott som förhindrar Premium-användning under längre tid kan användaren rikta klagomål till {{email}}.",
        "6.6. Konsumenter kan ha 14 dagars ångerrätt vid distansavtal, om inte Leverantören med användarens uttryckliga samtycke har påbörjat Premium-leveransen före ångerfristens utgång — enligt tillämplig EU-/polsk konsumentlagstiftning. Användning av Premium före 14 dagars utgång kan innebära samtycke till omedelbar leverans och förlust av ångerrätt i lagligt tillåten omfattning.",
      ],
    },
    {
      title: "§7. Användarfiler och databehandling",
      paragraphs: [
        "7.1. Filer som laddas upp till tjänstens verktyg används uteslutande för att utföra den operation som användaren begärt (konvertering, komprimering, förhandsvisning, innehållsskapande m.m.).",
        "7.2. Serverbehandlade filer lagras inte efter att operationen slutförts och används inte för andra syften, inklusive AI-modellträning, försäljning eller delning med tredje part.",
        "7.3. Användaren är ensam ansvarig för innehåll, laglighet, konfidentialitet och rättigheter avseende uppladdade användarfiler.",
        "7.4. Behandling av personuppgifter regleras av integritetspolicyn på /polityka-prywatnosci.",
      ],
    },
    {
      title: "§8. Tillåten och otillåten användning",
      paragraphs: [
        "8.1. Användaren ska använda tjänsten lagligt, i enlighet med dessa villkor och god sed.",
        "8.2. Följande är särskilt förbjudet:",
      ],
      list: [
        "Uppladdning av olagligt innehåll eller innehåll som kränker tredje parts rättigheter, inklusive upphovsrätt, immateriella rättigheter, personlighetsrättigheter eller affärshemligheter;",
        "behandling av material som användaren inte har rätt att använda (t.ex. skyddad musik, filmer, programvara);",
        "användning av tjänsten för att ladda ner, konvertera eller sprida innehåll från streamingplattformar, sociala medier eller andra källor i strid med dessa plattformars användarvillkor eller lag;",
        "uppladdning av virus, skadlig programvara, exploits eller filer avsedda att skada tjänsten eller andra användares enheter;",
        "automatiserad, massvis eller överdriven användning (botar, skrapare, serveröverbelastning), inklusive kringgående av tekniska gränser;",
        "försök till obehörig åtkomst till tjänstens system, andra användares konton eller Leverantörens infrastruktur;",
        "föreställning av att vara en annan person eller organisation eller felaktig framställning av tillhörighet till Leverantören;",
        "användning av AI-verktyg för att generera olagligt, diskriminerande, vilseledande innehåll eller innehåll som kränker tredje parts rättigheter.",
      ],
    },
    {
      title: "§9. Verktyg med artificiell intelligens (AI)",
      paragraphs: [
        "9.1. AI-verktyg genererar innehåll automatiskt med externa modeller. Leverantören garanterar inte noggrannhet, fullständighet, aktualitet eller lämplighet av genererat innehåll för ett specifikt syfte.",
        "9.2. AI-genererat innehåll utgör inte professionell rådgivning (juridisk, medicinsk, finansiell, teknisk). Användare måste verifiera resultat före användning.",
        "9.3. Användaren är fullt ansvarig för användning av genererat innehåll, inklusive upphovsrättsintrång. Leverantören gör inte anspråk på äganderätt till användarfiler eller genererat innehåll som tillhör användaren enligt gällande lag.",
        "9.4. Leverantören kan införa dagliga gränser, moderering eller tillfällig avaktivering av AI-verktyg vid missbruk, infrastrukturöverbelastning eller krav från AI-leverantörer.",
      ],
    },
    {
      title: "§10. Verktyg för ljudextraktion och nedladdning",
      paragraphs: [
        "10.1. Tjänsten möjliggör extraktion av ljudspår från videofiler som laddats upp av användaren (t.ex. egna inspelningar, material som användaren har rättigheter till).",
        "10.2. Tjänsten är inte avsedd för nedladdning av innehåll från streamingtjänster, VOD-plattformar, sociala medier eller andra källor på sätt som bryter mot upphovsrätt eller plattformsvillkor. Användaren försäkrar att hen har rätt att behandla uppladdat material.",
        "10.3. Leverantören verifierar inte källan till uppladdade filer men kan spärra åtkomst vid rapporter om rättsliga intrång eller allvarligt missbruk.",
      ],
    },
    {
      title: "§11. Reklam",
      paragraphs: [
        "11.1. Tjänsten kan visa reklam, inklusive Google AdSense, för att stödja gratisverktyg och utveckling.",
        "11.2. Reklamleverantörer (inklusive Google) kan använda cookies och liknande tekniker enligt integritetspolicyn och egna policyer. Användare kan hantera cookie-samtycken via tjänstens banner och webbläsarinställningar.",
        "11.3. Reklaminnehåll tillhandahålls av tredje part. Leverantören ansvarar inte för reklaminnehåll eller annonsörers produkter/tjänster.",
      ],
    },
    {
      title: "§12. Upphovsrätt och immateriella rättigheter",
      paragraphs: [
        "12.1. Namnet Toolando.tech, logotyp, tjänstens layout, texter, verktygsbeskrivningar, guider och källkod är skyddade. Kommersiell kopiering utan Leverantörens samtycke är förbjuden.",
        "12.2. Användare behåller rättigheter till användarfiler. Uppladdning överför inte upphovsrätt till Leverantören.",
        "12.3. Användaren beviljar Leverantören en icke-exklusiv, avgiftsfri licens för den tid som krävs för teknisk behandling av användarfiler, uteslutande för att utföra den begärda operationen.",
        "12.4. Kopiering, reverse engineering, dekompilering eller automatiserad skrapning av tjänsten utan skriftligt samtycke är förbjuden.",
      ],
    },
    {
      title: "§13. Leverantörens ansvar",
      paragraphs: [
        "13.1. Tjänsten tillhandahålls utan någon garanti i lagligt tillåten omfattning.",
        "13.2. Leverantören ansvarar inte för:",
      ],
      list: [
        "konsekvenser av användarens användning av genererat eller konverterat innehåll;",
        "dataförlust på grund av användarens handlingar, enhetsfel hos användaren eller force majeure;",
        "tjänstavbrott på grund av underhåll, hosting-/molnavbrott eller internetavbrott;",
        "indirekta skador, utebliven vinst, förlust av anseende eller data, i lagligt tillåten omfattning;",
        "handlingar av tredje part (Stripe, Google, AI-leverantörer, hosting).",
      ],
    },
    {
      title: "§14. Force majeure",
      paragraphs: [
        "14.1. Leverantören ansvarar inte för utebliven eller bristfällig fullgörelse på grund av force majeure, inklusive kritiska infrastrukturavbrott, naturkatastrofer, krig, strejker, epidemier, myndighetsbeslut eller massiva IT-attacker.",
      ],
    },
    {
      title: "§15. Klagomål",
      paragraphs: [
        "15.1. Klagomål om tjänsten, Premium-prenumerationer eller brott mot villkoren kan skickas till {{email}}.",
        "15.2. Ett klagomål bör beskriva problemet, datum för förekomsten och information för identifiering av användaren (konto-e-post).",
        "15.3. Leverantören svarar inom 14 dagar efter mottagande, om inte särskilda regler föreskriver annan tidsfrist.",
        "15.4. Konsumenter kan använda utomrättslig tvistlösning, inklusive EU:s ODR-plattform: https://ec.europa.eu/consumers/odr",
      ],
    },
    {
      title: "§16. Ändringar av villkor och tjänsten",
      paragraphs: [
        "16.1. Leverantören kan ändra dessa villkor av viktiga skäl, inklusive lagändringar, ändringar av tjänstefunktioner, nya verktyg eller affärsmodellsändringar.",
        "16.2. Registrerade användare informeras om väsentliga villkorsändringar minst 14 dagar i förväg via e-post eller meddelande i tjänsten, om inte lagen föreskriver längre tidsfrist.",
        "16.3. Fortsatt användning efter att ändringarna trätt i kraft innebär acceptans. Om du inte accepterar ändringarna, upphör med användningen och säg upp Premium före nästa faktureringsperiod.",
      ],
    },
    {
      title: "§17. Slutbestämmelser",
      paragraphs: [
        "17.1. För frågor som inte regleras i dessa villkor gäller polsk lag, inklusive civilrätt och konsumentlagstiftning för konsumenter.",
        "17.2. Tvister avgörs av domstolar med behörighet enligt allmänt gällande regler. För konsumenter gäller tvingande konsumentskyddsregler om domstolsbehörighet.",
        "17.3. Om en bestämmelse är ogiltig förblir övriga bestämmelser i kraft. Ogiltiga bestämmelser ersätts av tillämpliga lagregler.",
        "17.4. Dessa villkor träder i kraft vid publicering i tjänsten. Den aktuella versionen finns alltid tillgänglig på /regulamin.",
      ],
    },
  ],
  footerNote:
    "För frågor om villkoren, klagomål eller konsumenträttigheter, kontakta {{email}}. Integritetspolicyn är en integrerad del av dessa villkor.",
}
