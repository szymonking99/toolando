import type { LegalDocumentData } from "@/components/legal-document"

export const privacyDa: LegalDocumentData = {
  eyebrow: "Privatlivspolitik",
  title: "Privatlivspolitik for Toolando.tech",
  intro:
    "Denne privatlivspolitik beskriver, hvilke data der behandles på Toolando.tech, til hvilke formål, på hvilket retslig grundlag og hvilke rettigheder du har. Jeg behandler personoplysninger i overensstemmelse med forordning (EU) 2016/679 (GDPR) og gældende polsk databeskyttelseslovgivning.",
  lastUpdated: "Sidst opdateret: 23. juli 2026",
  sections: [
    {
      title: "§1. Dataansvarlig",
      paragraphs: [
        "1.1. Dataansvarlig for databehandlingen (\"Dataansvarlig\") er Szymon Badyl, ejer af Toolando.tech, som driver onlineværktøjstjenester.",
        "1.2. Kontakt vedrørende databeskyttelse: {{email}}.",
        "1.3. Dataansvarlig har ikke udpeget en databeskyttelsesrådgiver, da dette ikke er påkrævet efter GDPR for denne virksomhed.",
      ],
    },
    {
      title: "§2. Hvilke data vi behandler",
      paragraphs: ["2.1. Afhængigt af, hvordan du bruger tjenesten, behandler vi følgende kategorier:"],
      list: [
        "Tekniske og brugsdata: IP-adresse, browsertype og -version, operativsystem, sprog, dato og tidspunkt for anmodning, besøgte sider, trafikkilde, cookie-identifikatorer (efter samtykke).",
        "Kontodata: e-mailadresse, adgangskode (hash), bruger-ID, registreringsdato, Premium-status, Stripe-kunde-ID (hvis relevant).",
        "Betalingsdata: behandles af Stripe — Dataansvarlig gemmer ikke fulde betalingskortnumre.",
        "Korrespondancedata: e-mailadresse, beskedindhold, kontaktdato — når du skriver til {{email}} eller bruger kontaktformularen.",
        "Brugerfiler: behandles kun midlertidigt for at udføre værktøjsoperationer — gemmes ikke efter konverteringen er afsluttet.",
      ],
    },
    {
      title: "§3. Formål og retslige grundlag",
      paragraphs: ["3.1. Vi behandler data til følgende formål:"],
      definitions: [
        {
          term: "Levering af tjenesten",
          description:
            "Filkonvertering, drift af værktøjer, kontoadministration — retsligt grundlag: art. 6 stk. 1 litra b GDPR (kontrakt) eller litra f (berettiget interesse: drift af tjenesten).",
        },
        {
          term: "Premium-abonnement",
          description:
            "Betaling og abonnementshåndtering — retsligt grundlag: art. 6 stk. 1 litra b GDPR; bogføring: art. 6 stk. 1 litra c (retlig forpligtelse).",
        },
        {
          term: "Trafikanalyse",
          description:
            "Google Analytics — kun efter samtykke til analyse-cookies — retsligt grundlag: art. 6 stk. 1 litra a GDPR (samtykke).",
        },
        {
          term: "Reklame",
          description:
            "Google AdSense — kun efter samtykke til reklame-cookies — retsligt grundlag: art. 6 stk. 1 litra a GDPR (samtykke).",
        },
        {
          term: "Sikkerhed",
          description:
            "Forebyggelse af misbrug, serverlogs — retsligt grundlag: art. 6 stk. 1 litra f GDPR (berettiget interesse).",
        },
        {
          term: "Kontakt og klager",
          description:
            "Besvarelse af beskeder — retsligt grundlag: art. 6 stk. 1 litra f GDPR eller litra b (hvis kontraktrelateret).",
        },
      ],
    },
    {
      title: "§4. Cookies og lignende teknologier",
      paragraphs: [
        "4.1. Tjenesten bruger cookies og lignende teknologier. Ved første besøg viser vi et samtykkebanner, hvor du kan acceptere alle cookies eller begrænse dig til nødvendige.",
        "4.2. Typer af cookies:",
      ],
      list: [
        "Nødvendige — kræves for tjenestens funktion (f.eks. sprog, session, cookie-indstillinger). Intet samtykke kræves.",
        "Analyse — Google Analytics, aggregeret besøgsstatistik. Samtykke kræves.",
        "Reklame — Google AdSense, annoncepersonalisering. Samtykke kræves.",
      ],
      afterList: [
        "4.3. Du kan til enhver tid ændre dine cookie-indstillinger via banneret eller browserindstillingerne.",
      ],
    },
    {
      title: "§5. Modtagere og databehandlere",
      paragraphs: ["5.1. Data kan deles med betroede databehandlere, der handler på vegne af Dataansvarlig:"],
      list: [
        "Vercel Inc. — hosting og infrastruktur (USA, EUs standardkontraktbestemmelser).",
        "Stripe, Inc. — betalingsbehandling for Premium (USA/Irland, PCI DSS).",
        "Google LLC — Analytics og AdSense (efter samtykke; partnerpolitik: https://policies.google.com/technologies/partner-sites).",
        "Resend — transaktions-e-mails (f.eks. velkomst-e-mail efter registrering), hvis konfigureret.",
        "AI-modelleverandører — behandling af prompts og filer kun inden for Premium AI-værktøjer, uden lagring efter afslutning.",
      ],
      afterList: ["5.2. Dataansvarlig sælger ikke personoplysninger til tredjeparter."],
    },
    {
      title: "§6. Filer uploadet i værktøjer",
      paragraphs: [
        "6.1. Filer uploadet til konverteringsværktøjer og andre værktøjer gemmes ikke efter operationen er afsluttet.",
        "6.2. Filer bruges ikke til AI-modeltræning, profilering eller markedsføring.",
        "6.3. Nogle værktøjer (f.eks. den universelle filåbner) behandler filer helt lokalt i browseren — filen forlader aldrig din enhed.",
        "6.4. Upload ikke filer med følsomme data (f.eks. helbredsoplysninger, CPR-nummer), medmindre det er absolut nødvendigt — det sker på egen risiko.",
      ],
    },
    {
      title: "§7. Opbevaringsperioder",
      paragraphs: ["7.1. Vi opbevarer data i følgende perioder:"],
      list: [
        "Kontodata — indtil kontoen slettes eller en sletningsanmodning modtages.",
        "Serverlogs — op til 90 dage, medmindre længere opbevaring kræves for at gøre krav gældende.",
        "Korrespondance — op til 3 år efter sagen er afsluttet.",
        "Faktureringsdata (Stripe) — i henhold til skattelovgivning (typisk 5 år).",
        "Brugerfiler — slettes straks efter behandling (typisk sekunder til minutter).",
        "Cookie-indstillinger — op til 12 måneder eller indtil samtykket tilbagekaldes.",
      ],
    },
    {
      title: "§8. Dine rettigheder (GDPR)",
      paragraphs: ["8.1. Du har følgende rettigheder:"],
      list: [
        "Ret til indsigt (art. 15 GDPR).",
        "Ret til berigtigelse (art. 16 GDPR).",
        "Ret til sletning — \"retten til at blive glemt\" (art. 17 GDPR).",
        "Ret til begrænsning af behandling (art. 18 GDPR).",
        "Ret til dataportabilitet (art. 20 GDPR).",
        "Ret til at gøre indsigelse mod behandling baseret på art. 6 stk. 1 litra f GDPR (art. 21 GDPR).",
        "Ret til at til enhver tid tilbagekalde samtykke — uden at påvirke lovligheden af behandling før tilbagekaldelsen (art. 7 stk. 3 GDPR).",
        "Ret til at indgive klage til tilsynsmyndighed (i Polen: PUODO, uodo.gov.pl).",
      ],
      afterList: [
        "8.2. For at udøve dine rettigheder, skriv til {{email}}. Jeg svarer uden unødig ophold, senest inden for 30 dage.",
      ],
    },
    {
      title: "§9. Datasikkerhed",
      paragraphs: [
        "9.1. Jeg anvender tekniske og organisatoriske foranstaltninger, der er proportionale med risikoen, herunder HTTPS-kryptering, begrænset systemadgang og sletning af filer efter behandling.",
        "9.2. Intet system er 100 % sikkert. Ved et brud på persondatasikkerheden, der sandsynligvis indebærer høj risiko for dine rettigheder, informerer jeg dig i henhold til art. 34 GDPR.",
      ],
    },
    {
      title: "§10. Børn",
      paragraphs: [
        "10.1. Tjenesten henvender sig ikke til børn under 16 år. Jeg behandler bevidst ikke data om børn under 16 år uden samtykke fra forældre eller værge.",
        "10.2. Hvis du mener, at et barn har givet data uden forældres eller værges samtykke, kontakt {{email}} — dataene vil blive slettet.",
      ],
    },
    {
      title: "§11. Ændringer af denne politik",
      paragraphs: [
        "11.1. Denne politik kan opdateres for at afspejle ændringer i tjenesten, teknologi eller lovgivning.",
        "11.2. Væsentlige ændringer meddeles via meddelelse i tjenesten eller via e-mail (for brugere med konti).",
        "11.3. Den aktuelle version er altid tilgængelig på /polityka-prywatnosci.",
      ],
    },
  ],
  footerNote:
    "Spørgsmål om privatliv: {{email}}. Vilkår for brug findes på /regulamin.",
}
