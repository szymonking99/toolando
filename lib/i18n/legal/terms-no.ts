import type { LegalDocumentData } from "@/components/legal-document"

export const termsNo: LegalDocumentData = {
  eyebrow: "Vilkår for bruk",
  title: "Vilkår for bruk av Toolando.tech",
  intro:
    "Disse vilkårene for bruk regulerer din bruk av nettstedet Toolando.tech på toolando.tech. Ved å bruke tjenesten — inkludert å bla på sider, laste opp filer, opprette en konto eller kjøpe et Premium-abonnement — godtar du disse vilkårene i sin helhet. Hvis du ikke godtar vilkårene, bruk ikke tjenesten.",
  lastUpdated: "Sist oppdatert: 23. juli 2026",
  sections: [
    {
      title: "§1. Generelle bestemmelser",
      paragraphs: [
        "1.1. Eier og operatør av Toolando.tech (\"Tjenesten\") er Szymon Badyl (\"Leverandøren\").",
        "1.2. Kontakt: {{email}}. For saker som krever formell korrespondanse, gir Leverandøren identifikasjonsdata i henhold til gjeldende lov ved berettiget forespørsel.",
        "1.3. Tjenesten tilbyr nettleserbaserte nettverktøy inkludert filkonverterere, spesialverktøy, AI-drevne verktøy og informasjonsinnhold (guider, FAQ).",
        "1.4. Disse vilkårene tilbys kostnadsfritt i tjenesten i en form som muliggjør nedlasting, lagring og utskrift.",
      ],
    },
    {
      title: "§2. Definisjoner",
      definitions: [
        {
          term: "Bruker",
          description:
            "Enhver fysisk eller juridisk person som bruker tjenesten, inkludert gjester (uten konto) og registrerte brukere.",
        },
        {
          term: "Konto",
          description:
            "En individuell brukerprofil opprettet for tilgang til funksjoner som krever registrering, inkludert Premium-abonnementer.",
        },
        {
          term: "Gratisverktøy",
          description:
            "Tjenestefunksjoner som er tilgjengelige kostnadsfritt og uten å opprette en konto, med mindre disse vilkårene bestemmer noe annet.",
        },
        {
          term: "Premium",
          description:
            "Et betalt abonnement med tilgang til utvidede funksjoner, inkludert utvalgte AI-verktøy og høyere grenser.",
        },
        {
          term: "Brukerfil",
          description:
            "Enhver fil, tekstinnhold eller data som brukeren laster opp til et verktøy i tjenesten for behandling.",
        },
        {
          term: "Generert innhold",
          description:
            "Resultater produsert av tjenestens verktøy, inkludert konverterte filer, tekster eller bilder generert av AI-verktøy.",
        },
      ],
    },
    {
      title: "§3. Tekniske krav og alder",
      paragraphs: [
        "3.1. Bruk av tjenesten krever en enhet med internettilgang, en oppdatert nettleser med JavaScript-støtte og — for noen verktøy — mulighet til å laste ned filer til enheten din.",
        "3.2. Tjenesten er rettet mot personer fra 16 års alder. Brukere under 16 år kan kun bruke tjenesten med samtykke og tilsyn av forelder eller foresatte.",
        "3.3. Brukeren erklærer at vedkommende er fullt rettshandlingsdyktig eller bruker tjenesten med foresattes samtykke.",
      ],
    },
    {
      title: "§4. Tjenestens omfang",
      paragraphs: [
        "4.1. Tjenesten tilbys \"som den er\". Leverandøren tilstreber at verktøyene fungerer korrekt, men garanterer ikke uavbrutt tilgjengelighet, kompatibilitet med alle filformater eller et bestemt resultat.",
        "4.2. Noen operasjoner kjører lokalt i brukerens nettleser (f.eks. den universelle filåpneren). Noen krever midlertidig serverbehandling — detaljer finnes i personvernerklæringen og på siden \"Slik fungerer det\".",
        "4.3. Leverandøren kan legge til, endre, begrense eller fjerne verktøy, funksjoner eller filformater, inkludert å merke konverterere som \"kommer snart\" eller midlertidig utilgjengelige.",
        "4.4. Informasjon i guider, FAQ og verktøybeskrivelser er kun informativ og utgjør ikke profesjonell juridisk, medisinsk, finansiell eller teknisk rådgivning.",
      ],
    },
    {
      title: "§5. Brukerkonto",
      paragraphs: [
        "5.1. Opprettelse av konto krever en gyldig e-postadresse og passord. Brukeren forplikter seg til å oppgi korrekte opplysninger og holde dem oppdatert.",
        "5.2. Brukeren er ansvarlig for konfidensialiteten av innloggingsopplysningene og for all aktivitet under sin konto. Ved mistanke om uautorisert tilgang, kontakt umiddelbart {{email}}.",
        "5.3. Leverandøren kan sperre eller slette en konto ved brudd på vilkårene, mistanke om misbruk, handlinger som truer tjenestens sikkerhet eller på ordre fra myndigheter, med forbehold om gjeldende lov.",
        "5.4. Brukeren kan når som helst slutte å bruke sin konto. Sletting av konto kan be om via {{email}}.",
      ],
    },
    {
      title: "§6. Gratisverktøy og Premium",
      paragraphs: [
        "6.1. Gratisverktøy er tilgjengelige uten kostnad. Leverandøren kan anvende tekniske grenser (f.eks. filstørrelse, antall operasjoner) som opplyses i tjenestens grensesnitt.",
        "6.2. Premium er et gjentakende betalt abonnement for utvidede funksjoner inkludert AI-verktøy. Det gjeldende Premium-omfanget vises i tjenesten før kjøp.",
        "6.3. Premium-gebyrer belastes på forhånd for hver faktureringsperiode (f.eks. månedlig) via Stripe. Priser vises i valutaen angitt ved checkout og inkluderer avgifter der det kreves etter lov.",
        "6.4. Premium kan når som helst sies opp via abonnementsadministrasjonspanelet (Stripe Customer Portal) i kontoen. Oppsigelse betyr at abonnementet ikke fornyes etter den gjeldende betalte perioden — Premium-tilgang varer til slutten av den perioden.",
        "6.5. Gebyrer for en påbegynt og betalt abonnementsperiode refunderes ikke, med mindre tvingende forbrukerlovgivning bestemmer noe annet. Ved tekniske avbrudd som hindrer Premium-bruk over lengre tid, kan brukeren rette klage til {{email}}.",
        "6.6. Forbrukere kan ha 14 dagers angrerett ved fjernavtaler, med mindre Leverandøren med brukerens uttrykkelige samtykke har startet Premium-leveransen før angrerperiodens utløp — i henhold til gjeldende EU-/polsk forbrukerlovgivning. Bruk av Premium før 14 dagers utløp kan innebære samtykke til umiddelbar levering og tap av angrerett i lovlig tillatt omfang.",
      ],
    },
    {
      title: "§7. Brukerfiler og databehandling",
      paragraphs: [
        "7.1. Filer lastet opp til tjenestens verktøy brukes utelukkende for å utføre operasjonen brukeren har bedt om (konvertering, komprimering, forhåndsvisning, innholdsskapelse osv.).",
        "7.2. Serverbehandlede filer lagres ikke etter at operasjonen er fullført og brukes ikke til andre formål, inkludert AI-modelltrenings, salg eller deling med tredjeparter.",
        "7.3. Brukeren er alene ansvarlig for innhold, lovlighet, konfidensialitet og rettigheter knyttet til opplastede brukerfiler.",
        "7.4. Behandling av personopplysninger reguleres av personvernerklæringen på /polityka-prywatnosci.",
      ],
    },
    {
      title: "§8. Tillatt og ulovlig bruk",
      paragraphs: [
        "8.1. Brukeren skal bruke tjenesten lovlig, i samsvar med disse vilkårene og god skikk.",
        "8.2. Følgende er særlig forbudt:",
      ],
      list: [
        "Opplasting av ulovlig innhold eller innhold som krenker tredjeparts rettigheter, inkludert opphavsrett, immaterielle rettigheter, personvernrettigheter eller forretningshemmeligheter;",
        "behandling av materialer brukeren ikke har rett til å bruke (f.eks. beskyttet musikk, filmer, programvare);",
        "bruk av tjenesten til å laste ned, konvertere eller spre innhold fra streamingplattformer, sosiale medier eller andre kilder i strid med disse plattformenes vilkår eller lov;",
        "opplasting av virus, skadelig programvare, exploits eller filer ment å skade tjenesten eller andre brukeres enheter;",
        "automatisert, massiv eller overdreven bruk (roboter, skrapere, serveroverbelastning), inkludert omgåelse av tekniske grenser;",
        "forsøk på uautorisert tilgang til tjenestens systemer, andre brukeres kontoer eller Leverandørens infrastruktur;",
        "fremstilling av å være en annen person eller organisasjon eller feilaktig fremstilling av tilhørighet til Leverandøren;",
        "bruk av AI-verktøy til å generere ulovlig, diskriminerende, villedende innhold eller innhold som krenker tredjeparts rettigheter.",
      ],
    },
    {
      title: "§9. Verktøy med kunstig intelligens (AI)",
      paragraphs: [
        "9.1. AI-verktøy genererer innhold automatisk med eksterne modeller. Leverandøren garanterer ikke nøyaktighet, fullstendighet, aktualitet eller egnethet av generert innhold for et bestemt formål.",
        "9.2. AI-generert innhold utgjør ikke profesjonell rådgivning (juridisk, medisinsk, finansiell, teknisk). Brukere må verifisere resultater før bruk.",
        "9.3. Brukeren er fullt ansvarlig for bruk av generert innhold, inkludert opphavsrettskrenkelser. Leverandøren gjør ikke krav på eierskap til brukerfiler eller generert innhold som tilhører brukeren etter gjeldende lov.",
        "9.4. Leverandøren kan innføre daglige grenser, moderering eller midlertidig deaktivering av AI-verktøy ved misbruk, infrastrukturoverbelastning eller krav fra AI-leverandører.",
      ],
    },
    {
      title: "§10. Verktøy for lydutvinning og nedlasting",
      paragraphs: [
        "10.1. Tjenesten muliggjør utvinning av lydspor fra videofiler lastet opp av brukeren (f.eks. egne opptak, materialer brukeren har rettigheter til).",
        "10.2. Tjenesten er ikke ment for nedlasting av innhold fra streamingtjenester, VOD-plattformer, sosiale medier eller andre kilder på måter som bryter opphavsrett eller plattformvilkår. Brukeren erklærer at vedkommende har rett til å behandle opplastet materiale.",
        "10.3. Leverandøren verifiserer ikke kilden til opplastede filer, men kan sperre tilgang ved rapporter om rettslige krenkelser eller alvorlig misbruk.",
      ],
    },
    {
      title: "§11. Reklame",
      paragraphs: [
        "11.1. Tjenesten kan vise reklame, inkludert Google AdSense, for å støtte gratisverktøy og utvikling.",
        "11.2. Reklametilbydere (inkludert Google) kan bruke cookies og lignende teknologier i henhold til personvernerklæringen og egne retningslinjer. Brukere kan administrere cookie-samtykker via tjenestens banner og nettleserinnstillinger.",
        "11.3. Reklameinnhold tilbys av tredjeparter. Leverandøren er ikke ansvarlig for reklameinnhold eller annonsørers produkter/tjenester.",
      ],
    },
    {
      title: "§12. Opphavsrett og immaterielle rettigheter",
      paragraphs: [
        "12.1. Navnet Toolando.tech, logo, tjenestens layout, tekster, verktøybeskrivelser, guider og kildekode er beskyttet. Kommersiell kopiering uten Leverandørens samtykke er forbudt.",
        "12.2. Brukere beholder rettigheter til brukerfiler. Opplasting overfører ikke opphavsrett til Leverandøren.",
        "12.3. Brukeren gir Leverandøren en ikke-eksklusiv, avgiftsfri lisens for den tiden som kreves for teknisk behandling av brukerfiler, utelukkende for å utføre den forespurte operasjonen.",
        "12.4. Kopiering, reverse engineering, dekompilering eller automatisert skraping av tjenesten uten skriftlig samtykke er forbudt.",
      ],
    },
    {
      title: "§13. Leverandørens ansvar",
      paragraphs: [
        "13.1. Tjenesten tilbys uten noen garanti i lovlig tillatt omfang.",
        "13.2. Leverandøren er ikke ansvarlig for:",
      ],
      list: [
        "konsekvenser av brukerens bruk av generert eller konvertert innhold;",
        "datatap på grunn av brukerens handlinger, enhetsfeil hos brukeren eller force majeure;",
        "tjenesteavbrudd på grunn av vedlikehold, hosting-/skyavbrudd eller internettavbrudd;",
        "indirekte skader, tapt fortjeneste, tap av omdømme eller data, i lovlig tillatt omfang;",
        "handlinger fra tredjeparter (Stripe, Google, AI-leverandører, hosting).",
      ],
    },
    {
      title: "§14. Force majeure",
      paragraphs: [
        "14.1. Leverandøren er ikke ansvarlig for manglende eller mangelfull oppfyllelse på grunn av force majeure, inkludert kritiske infrastrukturavbrudd, naturkatastrofer, krig, streiker, epidemier, myndighetsbeslutninger eller massive IT-angrep.",
      ],
    },
    {
      title: "§15. Klager",
      paragraphs: [
        "15.1. Klager om tjenesten, Premium-abonnementer eller brudd på vilkårene kan sendes til {{email}}.",
        "15.2. En klage bør beskrive problemet, dato for forekomsten og informasjon for identifisering av brukeren (konto-e-post).",
        "15.3. Leverandøren svarer innen 14 dager etter mottak, med mindre særlige regler bestemmer en annen frist.",
        "15.4. Forbrukere kan bruke utenrettslig tvisteløsning, inkludert EUs ODR-plattform: https://ec.europa.eu/consumers/odr",
      ],
    },
    {
      title: "§16. Endringer i vilkår og tjenesten",
      paragraphs: [
        "16.1. Leverandøren kan endre disse vilkårene av viktige grunner, inkludert lovendringer, endringer i tjenestefunksjoner, nye verktøy eller forretningsmodellendringer.",
        "16.2. Registrerte brukere informeres om vesentlige vilkårsendringer minst 14 dager i forveien via e-post eller melding i tjenesten, med mindre loven krever lengre frist.",
        "16.3. Fortsatt bruk etter at endringene trer i kraft innebærer aksept. Hvis du ikke godtar endringene, slutt å bruke tjenesten og si opp Premium før neste faktureringsperiode.",
      ],
    },
    {
      title: "§17. Avsluttende bestemmelser",
      paragraphs: [
        "17.1. For forhold som ikke er regulert i disse vilkårene, gjelder polsk lov, inkludert sivilrett og forbrukerlovgivning for forbrukere.",
        "17.2. Tvister avgjøres av domstoler med kompetanse etter alminnelig gjeldende regler. For forbrukere gjelder tvingende forbrukervernregler om domstolskompetanse.",
        "17.3. Hvis en bestemmelse er ugyldig, forblir de øvrige bestemmelsene i kraft. Ugyldige bestemmelser erstattes av gjeldende lovregler.",
        "17.4. Disse vilkårene trer i kraft ved publisering i tjenesten. Den gjeldende versjonen er alltid tilgjengelig på /regulamin.",
      ],
    },
  ],
  footerNote:
    "For spørsmål om vilkårene, klager eller forbrukerrettigheter, kontakt {{email}}. Personvernerklæringen er en integrert del av disse vilkårene.",
}
