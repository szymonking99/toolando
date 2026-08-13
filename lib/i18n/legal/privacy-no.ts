import type { LegalDocumentData } from "@/components/legal-document"

export const privacyNo: LegalDocumentData = {
  eyebrow: "Personvernerklæring",
  title: "Personvernerklæring for Toolando.tech",
  intro:
    "Denne personvernerklæringen beskriver hvilke data som behandles på Toolando.tech, til hvilke formål, på hvilket rettslig grunnlag og hvilke rettigheter du har. Jeg behandler personopplysninger i samsvar med forordning (EU) 2016/679 (GDPR) og gjeldende polsk personvernlovgivning.",
  lastUpdated: "Sist oppdatert: 23. juli 2026",
  sections: [
    {
      title: "§1. Behandlingsansvarlig",
      paragraphs: [
        "1.1. Behandlingsansvarlig for databehandlingen (\"Behandlingsansvarlig\") er Szymon Badyl, eier av Toolando.tech, som driver nettbaserte verktøytjenester.",
        "1.2. Personvernkontakt: {{email}}.",
        "1.3. Behandlingsansvarlig har ikke utnevnt personvernombud, da dette ikke er påkrevd etter GDPR for denne virksomheten.",
      ],
    },
    {
      title: "§2. Hvilke data vi behandler",
      paragraphs: ["2.1. Avhengig av hvordan du bruker tjenesten, behandler vi følgende kategorier:"],
      list: [
        "Tekniske og bruksdata: IP-adresse, nettlesertype og versjon, operativsystem, språk, dato og klokkeslett for forespørsel, besøkte sider, trafikkilde, cookie-identifikatorer (etter samtykke).",
        "Kontodata: e-postadresse, passord (hash), bruker-ID, registreringsdato, Premium-status, Stripe-kunde-ID (hvis aktuelt).",
        "Betalingsdata: behandles av Stripe — Behandlingsansvarlig lagrer ikke fullstendige betalingskortnumre.",
        "Korrespondansedata: e-postadresse, meldingsinnhold, kontaktdato — når du skriver til {{email}} eller bruker kontaktskjemaet.",
        "Brukerfiler: behandles kun midlertidig for å utføre verktøyoperasjoner — lagres ikke etter at konverteringen er fullført.",
      ],
    },
    {
      title: "§3. Formål og rettslige grunnlag",
      paragraphs: ["3.1. Vi behandler data for følgende formål:"],
      definitions: [
        {
          term: "Levering av tjenesten",
          description:
            "Filkonvertering, drift av verktøy, kontoadministrasjon — rettslig grunnlag: art. 6 nr. 1 bokst. b GDPR (avtale) eller bokst. f (berettiget interesse: drift av tjenesten).",
        },
        {
          term: "Premium-abonnement",
          description:
            "Betaling og abonnementshåndtering — rettslig grunnlag: art. 6 nr. 1 bokst. b GDPR; regnskap: art. 6 nr. 1 bokst. c (rettslig forpliktelse).",
        },
        {
          term: "Trafikkanalyse",
          description:
            "Google Analytics — kun etter samtykke til analyse-cookies — rettslig grunnlag: art. 6 nr. 1 bokst. a GDPR (samtykke).",
        },
        {
          term: "Reklame",
          description:
            "Google AdSense — kun etter samtykke til reklame-cookies — rettslig grunnlag: art. 6 nr. 1 bokst. a GDPR (samtykke).",
        },
        {
          term: "Sikkerhet",
          description:
            "Forebygging av misbruk, serverlogger — rettslig grunnlag: art. 6 nr. 1 bokst. f GDPR (berettiget interesse).",
        },
        {
          term: "Kontakt og klager",
          description:
            "Besvaring av meldinger — rettslig grunnlag: art. 6 nr. 1 bokst. f GDPR eller bokst. b (hvis avtalerelatert).",
        },
      ],
    },
    {
      title: "§4. Cookies og lignende teknologier",
      paragraphs: [
        "4.1. Tjenesten bruker cookies og lignende teknologier. Ved første besøk viser vi et samtykkebanner der du kan godta alle cookies eller begrense deg til nødvendige.",
        "4.2. Typer cookies:",
      ],
      list: [
        "Nødvendige — kreves for tjenestens funksjon (f.eks. språk, økt, cookie-innstillinger). Ingen samtykke kreves.",
        "Analyse — Google Analytics, aggregert besøksstatistikk. Samtykke kreves.",
        "Reklame — Google AdSense, annonsepersonalisering. Samtykke kreves.",
      ],
      afterList: [
        "4.3. Du kan når som helst endre cookie-innstillingene via banneret eller nettleserinnstillingene.",
      ],
    },
    {
      title: "§5. Mottakere og databehandlere",
      paragraphs: ["5.1. Data kan deles med pålitelige databehandlere som handler på vegne av Behandlingsansvarlig:"],
      list: [
        "Vercel Inc. — hosting og infrastruktur (USA, EUs standardkontraktsklausuler).",
        "Stripe, Inc. — betalingsbehandling for Premium (USA/Irland, PCI DSS).",
        "Google LLC — Analytics og AdSense (etter samtykke; partnerpolicy: https://policies.google.com/technologies/partner-sites).",
        "Resend — transaksjons-e-post (f.eks. velkomst-e-post etter registrering), hvis konfigurert.",
        "AI-modellleverandører — behandling av prompts og filer kun innen Premium AI-verktøy, uten lagring etter fullføring.",
      ],
      afterList: ["5.2. Behandlingsansvarlig selger ikke personopplysninger til tredjeparter."],
    },
    {
      title: "§6. Filer lastet opp i verktøy",
      paragraphs: [
        "6.1. Filer lastet opp til konverterere og andre verktøy lagres ikke etter at operasjonen er fullført.",
        "6.2. Filer brukes ikke til AI-modelltrenings, profilering eller markedsføring.",
        "6.3. Noen verktøy (f.eks. den universelle filåpneren) behandler filer helt lokalt i nettleseren — filen forlater aldri enheten din.",
        "6.4. Ikke last opp filer med sensitive data (f.eks. helseinformasjon, personnummer) med mindre det er absolutt nødvendig — det skjer på egen risiko.",
      ],
    },
    {
      title: "§7. Lagringsperioder",
      paragraphs: ["7.1. Vi lagrer data i følgende perioder:"],
      list: [
        "Kontodata — til kontoen slettes eller en slettingsforespørsel mottas.",
        "Serverlogger — opptil 90 dager, med mindre lengre lagring kreves for å fremme krav.",
        "Korrespondanse — opptil 3 år etter at saken er avsluttet.",
        "Faktureringsdata (Stripe) — i henhold til skattelovgivning (vanligvis 5 år).",
        "Brukerfiler — slettes umiddelbart etter behandling (vanligvis sekunder til minutter).",
        "Cookie-innstillinger — opptil 12 måneder eller til samtykket trekkes tilbake.",
      ],
    },
    {
      title: "§8. Dine rettigheter (GDPR)",
      paragraphs: ["8.1. Du har følgende rettigheter:"],
      list: [
        "Rett til innsyn (art. 15 GDPR).",
        "Rett til retting (art. 16 GDPR).",
        "Rett til sletting — \"retten til å bli glemt\" (art. 17 GDPR).",
        "Rett til begrensning av behandling (art. 18 GDPR).",
        "Rett til dataportabilitet (art. 20 GDPR).",
        "Rett til å protestere mot behandling basert på art. 6 nr. 1 bokst. f GDPR (art. 21 GDPR).",
        "Rett til å når som helst trekke tilbake samtykke — uten å påvirke lovligheten av behandling før tilbaketrekkingen (art. 7 nr. 3 GDPR).",
        "Rett til å klage til tilsynsmyndighet (i Polen: PUODO, uodo.gov.pl).",
      ],
      afterList: [
        "8.2. For å utøve rettighetene dine, skriv til {{email}}. Jeg svarer uten unødig opphold, senest innen 30 dager.",
      ],
    },
    {
      title: "§9. Datasikkerhet",
      paragraphs: [
        "9.1. Jeg anvender tekniske og organisatoriske tiltak som er proporsjonale med risikoen, inkludert HTTPS-kryptering, begrenset systemtilgang og sletting av filer etter behandling.",
        "9.2. Intet system er 100 % sikkert. Ved et personvernbrudd som sannsynligvis innebærer høy risiko for dine rettigheter, informerer jeg deg i henhold til art. 34 GDPR.",
      ],
    },
    {
      title: "§10. Barn",
      paragraphs: [
        "10.1. Tjenesten er ikke rettet mot barn under 16 år. Jeg behandler bevisst ikke data om barn under 16 år uten samtykke fra foresatte.",
        "10.2. Hvis du tror at et barn har gitt data uten foresattes samtykke, kontakt {{email}} — dataene vil bli slettet.",
      ],
    },
    {
      title: "§11. Endringer i denne erklæringen",
      paragraphs: [
        "11.1. Denne erklæringen kan oppdateres for å gjenspeile endringer i tjenesten, teknologi eller lovgivning.",
        "11.2. Vesentlige endringer varsles via melding i tjenesten eller via e-post (for brukere med kontoer).",
        "11.3. Den gjeldende versjonen er alltid tilgjengelig på /polityka-prywatnosci.",
      ],
    },
  ],
  footerNote:
    "Spørsmål om personvern: {{email}}. Vilkår for bruk finnes på /regulamin.",
}
