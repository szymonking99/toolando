import type { GuideArticle } from "../types"
import type { GuideSlug } from "../slugs"
import { guidesEn } from "../guides-en"

export const guidesNo: Record<GuideSlug, GuideArticle> = {
  "choose-audio-bitrate": {
    ...guidesEn["choose-audio-bitrate"],
    title: "Hvilken MP3- eller AAC-bitrate bør du velge?",
    description: "128 vs 192 vs 320 kbps — praktiske valg for podkaster, musikk og video uten å sløse diskplass.",
    sections: [
      {
        paragraphs: [
          "Bitrate er mengden data per sekund lyd. Høyere bitrate betyr vanligvis bedre lyd, men større filer. Med MP3 er forskjellen mellom 128 og 320 kbps tydeligst på gode høyttalere og tett musikk.",
          "For tale (podkast, intervjuer) holder ofte 96–128 kbps mono. For musikk i hodetelefoner er 192–256 kbps stereo et godt kompromiss. 320 kbps er MP3s praktiske tak — høyere hjelper sjelden fordi formatet fortsatt er tapsgivende.",
        ],
      },
      {
        title: "MP3, AAC og Opus — rask sammenligning",
        paragraphs: [
          "AAC (M4A) ved samme bitrate slår vanligvis MP3 — derfor bruker YouTube og Apple Music det.",
          "Opus utmerker seg i VoIP og streaming ved lave bitrater (64–128 kbps).",
          "For studioarkiv, behold WAV eller FLAC — en tapsgivende bitrate gjenoppretter ikke manglende data.",
        ],
      },
      {
        title: "Vanlige feil",
        paragraphs: [
          "Å oppskalere en lavkvalitets-MP3 til høyere bitrate forbedrer ikke lyden — bare filstørrelsen vokser.",
          "Å omkode samme spor flere ganger (MP3 → AAC → MP3) forverrer kvaliteten hver gang.",
          "For videoprosjekter, hent ut lyd fra din egen MP4 i stedet for å laste ned andres musikk — opphavsrett gjelder.",
        ],
      },
    ],
  },
  "compress-images-without-quality-loss": {
    ...guidesEn["compress-images-without-quality-loss"],
    title: "Slik komprimerer du JPG- og PNG-bilder uten synlig kvalitetstap",
    description: "Når du bør bruke kompressoren, hvilket kvalitetsnivå du bør velge, og komprimering vs formatkonvertering.",
    sections: [
      {
        paragraphs: [
          "Å komprimere et bilde reduserer filstørrelsen uten å endre format — du har fortsatt JPG eller PNG, bare lettere. Å konvertere JPG → WebP endrer format og er ofte bedre for nettsteder, men utskriftsarbeidsflyter kan kreve JPG.",
          "På Toolando.tech testet jeg bildekompressoren på 2000×2000 produktbilder: ved kvalitet 80 % sank filstørrelsen 40–60 % uten synlige artefakter på skjermen.",
        ],
      },
      {
        title: "Når komprimere vs konvertere",
        paragraphs: [
          "Komprimer når formatet er OK (f.eks. butikk krever JPG), men filen er for tung for e-post eller CMS.",
          "Konverter til WebP/AVIF når du publiserer på ditt eget nettsted med <picture>-reserve.",
          "Lagre aldri samme JPG mange ganger — hver runde legger til artefakter.",
        ],
      },
      {
        title: "Typiske scenarier",
        paragraphs: [
          "E-postvedlegg: JPG-kvalitet ~75–85, maks bredde 1600 px.",
          "Netthandel: WebP med JPG-reserve; miniatyrbilder 800 px.",
          "UI-skjermbilder med tekst: PNG eller tapsfri WebP — unngå aggressiv JPG.",
        ],
      },
    ],
  },
  "convert-video-to-gif-properly": {
    ...guidesEn["convert-video-to-gif-properly"],
    title: "Slik lager du en god GIF fra video — oppløsning, FPS og lengde",
    description: "MP4/MOV til GIF uten kjempfil: praktiske grenser og alternativer.",
    sections: [
      {
        paragraphs: [
          "GIF har ingen lyd og bruker ikke H.264 — hvert bilde er en full bitmap (ofte 256-fargepalett). Så et 10-sekunders 1080p-klipp som GIF kan veie mer enn originalvideoen. Mål: kort, liten, lav oppløsning.",
          "Før MP4 → GIF, klipp klippet til 2–4 sekunder i en editor og bruk 10–15 FPS i stedet for 30 — GIF gjenoppretter uansett ikke filmens jevnhet.",
        ],
      },
      {
        title: "Startparametre",
        paragraphs: [
          "Maks bredde 480–640 px for memer og reaksjoner.",
          "Maks lengde 5 s — over det, vurder loopende MP4.",
          "Enkle bakgrunner (greenscreen) komprimeres lettere enn gradienter og støy.",
        ],
      },
      {
        title: "Etter konvertering",
        paragraphs: [
          "Sjekk filstørrelse — GIF over 5 MB gir sjelden mening på en side.",
          "Hvis GIF er for stor, GIF → MP4 og <video>-innebygging fikser ofte problemet.",
          "Toolando behandler videoen din bare under konvertering — den hoster ikke ferdige GIF-er offentlig.",
        ],
      },
    ],
  },
  "docx-pdf-workflow": {
    ...guidesEn["docx-pdf-workflow"],
    title: "DOCX → PDF for kontorarbeid — når og hvordan konvertere",
    description: "Sende CV, fakturaer og kontrakter: hvorfor PDF slår DOCX og hvordan du unngår ødelagte fonter.",
    sections: [
      {
        paragraphs: [
          "DOCX er for redigering — flott når mottakeren har Word og må endre tekst. PDF er for lesing — layout, fonter og marger ser identiske ut på Windows, Mac og mobil.",
          "Før du sender CV, tilbud eller kontrakt, konverter DOCX → PDF. Mottakere redigerer ikke innholdet ved et uhell, og du unngår at erstatningsfonter ødelegger merkevaren din.",
        ],
      },
      {
        title: "Når du IKKE bør konvertere PDF → DOCX",
        paragraphs: [
          "Skannede fakturaer og signerte kontrakter — behold PDF som arkiv; OCR er et eget steg.",
          "Komplekse flersidige layouter (kataloger, brosjyrer) — DOCX-konvertering bryter ofte sideinndeling.",
          "Hvis du bare trenger et tekstutdrag, kopier fra PDF i stedet for å konvertere hele filen.",
        ],
      },
      {
        title: "Sikkerhet og personvern",
        paragraphs: [
          "På Toolando.tech brukes DOCX- og PDF-filer kun til konvertering og slettes når jobben er ferdig.",
          "For sensitive dokumenter (ID, banknumre) bruk HTTPS og ikke la kopier ligge på offentlige skytjenester uten kryptering.",
        ],
      },
    ],
  },
  "extract-audio-from-video": {
    ...guidesEn["extract-audio-from-video"],
    title: "Hente ut lyd fra video — det lovlige alternativet",
    description: "Hvordan du lovlig henter ut et lydspor fra din egen videofil (MP4, MOV, MKV).",
    sections: [
      {
        paragraphs: [
          "Noen ganger har du en videofil og trenger bare lyden. Toolando.tech henter ut lyd fra MP4, MOV, AVI, MKV og lagrer det som MP3, WAV, FLAC eller AAC.",
          "Det er lovlig på din egen fil — i motsetning til å laste ned musikk fra YouTube eller TikTok, noe Toolando.tech bevisst ikke tilbyr.",
        ],
      },
    ],
  },
  "extract-images-from-pdf-pages": {
    ...guidesEn["extract-images-from-pdf-pages"],
    title: "Slik henter du ut bilder fra PDF-sider (JPG, PNG, WebP)",
    description: "Presentasjoner, kataloger og skanninger — når det er fornuftig å eksportere en side som bilde og hvilken oppløsning.",
    sections: [
      {
        paragraphs: [
          "PDF er en container — inni kan det være vektorer, fonter og innebygde bitmaps. PDF → JPG gjengir hver side som rasterbilde. Det er ikke det samme som å hente ut en enkelt innebygd logo (det krever PDF-editor), men for slides, plakater og skanninger fungerer det bra.",
          "En 16:9-presentasjon eksportert til PNG med 1920 px bredde ser skarp ut på skjerm; for A4-utskrift sikt mot ~2480×3508 px (300 DPI) hvis verktøyet støtter høy oppløsning.",
        ],
      },
      {
        title: "JPG vs PNG vs WebP",
        paragraphs: [
          "Slide med fotobakgrunn → JPG eller WebP.",
          "Slide med diagrammer og tekst → PNG (skarpere typografi).",
          "Nettstedminiatyrbilde → WebP med JPG-reserve etter videre konvertering.",
        ],
      },
      {
        title: "Flerstegs PDF-er",
        paragraphs: [
          "Eksporter enkeltsider hvis du bare trenger slide 5 og 12.",
          "For galleri av alle sider — konverter hele filen og sorter etter nummer i filnavn.",
          "Respekter opphavsrett — andres PDF er ikke ditt bilde å publisere fritt.",
        ],
      },
    ],
  },
  "flac-music-archive-guide": {
    ...guidesEn["flac-music-archive-guide"],
    title: "FLAC som musikkarkiv — når det lønner seg vs MP3",
    description: "Tapsfri FLAC vs MP3 320 kbps: sikkerhetskopier, hjemmestreaming og bilradio.",
    sections: [
      {
        paragraphs: [
          "FLAC (Free Lossless Audio Codec) er tapsfri komprimering — som ZIP for lyd. Ved avkoding får du samme signal som WAV, men filen tar omtrent halvparten av plassen. MP3 fjerner data permanent; selv 320 kbps er ikke bitidentisk med en CD-rip.",
          "I praksis: hvis du kjøper tapsfri musikk eller riper egne plater, er FLAC et fornuftig arkivformat. På mobil med Bluetooth-hodetelefoner er FLAC vs MP3 256 kbps ofte uhørbart — da sparer konvertering til MP3 gigabyte.",
        ],
      },
      {
        title: "Arkivarbeidsflyt",
        paragraphs: [
          "1) Master i FLAC (eller WAV) på NAS / skysikkerhetskopi.",
          "2) Arbeidskopier MP3/AAC for mobil og bil.",
          "3) Konverter aldri MP3 → FLAC «for kvalitet» — det blåser bare opp filen uten å gjenopprette data.",
          "Jeg testet FLAC → MP3-konvertereren på Toolando.tech på 40–60 minutters album; sjekk metadata (tittel, artist) i spilleren etter konvertering.",
        ],
      },
      {
        title: "Kompatibilitet",
        paragraphs: [
          "FLAC: VLC, Foobar2000, de fleste Android-spillere; svakere i native Apple Music (ALAC passer Apple bedre).",
          "Bilradio leser ofte bare MP3/WMA/AAC fra USB — FLAC → MP3 er nødvendig.",
          "Hjemmestreaming (Plex, Jellyfin) håndterer FLAC uten problemer.",
        ],
      },
    ],
  },
  "font-woff2-for-websites": {
    ...guidesEn["font-woff2-for-websites"],
    title: "TTF, OTF, WOFF, WOFF2 — fonter for nettet",
    description: "Konvertere fonter for @font-face, lisenser og påvirkning på sidehastighet.",
    sections: [
      {
        paragraphs: [
          "Nettlesere trenger WOFF/WOFF2 i CSS (@font-face), ikke råe Windows-fontfiler. WOFF2 gir minste overføringsstørrelse.",
          "Toolandos TTF/OTF → WOFF2-konverterer forbereder webklare filer. Sjekk fontlisensen før innebygging.",
        ],
      },
      {
        title: "Ytelse",
        paragraphs: [
          "Subsett fonter til brukte glyfer i proffverktøy hvis filene er store.",
          "Forhåndslast kritisk WOFF2 i <head> for tekst above-the-fold.",
          "Bruk font-display: swap slik at tekst forblir lesbar under lasting.",
        ],
      },
    ],
  },
  "gif-vs-mp4-for-animations": {
    ...guidesEn["gif-vs-mp4-for-animations"],
    title: "GIF vs MP4 — animasjoner på nettsteder og sosiale medier",
    description: "Når gammeldags GIF er fornuftig og når kort MP4 eller WebM sparer megabyte.",
    sections: [
      {
        paragraphs: [
          "GIF spilles overalt, men er teknisk en bildesekvens uten moderne videokomprimering — en 5-sekunders 720p-animasjon kan veie 10–20 MB. Det samme i MP4 (H.264) får ofte plass i 500 KB–1 MB ved akseptabel kvalitet.",
          "MP4 → GIF på Toolando.tech er fornuftig for korte løkker (loader, Slack-reaksjon) når plattformen ikke tillater innebygd video. På ditt eget nettsted, foretrekk <video autoplay loop muted playsinline> med MP4 eller WebM.",
        ],
      },
      {
        title: "Når GIF",
        paragraphs: [
          "Kort løkke (<5 s), liten oppløsning (≤480 px bredde).",
          "Plattformkrav (noen forum er kun GIF).",
          "Enkel grafikk med få farger — da kan GIF være virkelig lett.",
        ],
      },
      {
        title: "Når MP4/WebM",
        paragraphs: [
          "Animasjon med mange farger, gradienter eller videoklipp.",
          "Nettsteder — bedre LCP og mindre båndbredde.",
          "Instagram/TikTok krever video, ikke GIF.",
        ],
      },
      {
        title: "Tips for MP4 → GIF",
        paragraphs: [
          "Klipp lengden — hvert sekund er dusinvis av bilder.",
          "Reduser oppløsningen før konvertering.",
          "Begrens fargepaletten hvis verktøyet tilbyr det (mindre banding).",
        ],
      },
    ],
  },
  "heic-iphone-jpg": {
    ...guidesEn["heic-iphone-jpg"],
    title: "HEIC fra iPhone — hvordan åpne og konvertere til JPG",
    description: "Hvorfor iPhone lagrer HEIC, kompatibilitetsproblemer og hvordan du konverterer til JPG eller PNG.",
    sections: [
      {
        paragraphs: [
          "Apple lagrer bilder i HEIC som standard — mindre enn JPG ved samme kvalitet. Problem: Windows uten utvidelse, eldre apper og mange tjenester støtter ikke HEIC.",
          "Løsning: konverter HEIC → JPG eller HEIC → PNG i Toolando.tech før du sender e-post, laster opp eller skriver ut. Du kan også sette iPhone til «Mest kompatibel» (JPG) i Innstillinger.",
        ],
      },
    ],
  },
  "json-csv-xml": {
    ...guidesEn["json-csv-xml"],
    title: "JSON, CSV og XML — konvertere data mellom formater",
    description: "Når du bør bruke JSON, CSV, TSV og XML, og hvordan du konverterer mellom dem uten å miste struktur.",
    sections: [
      {
        paragraphs: [
          "JSON er standard for REST API og appkonfigurasjon. CSV og TSV brukes til Excel-import. XML brukes i eldre bedriftssystemer og RSS.",
          "JSON → CSV åpner et API-svar i Excel. CSV → JSON klargjør data for et REST API. Toolando.tech bevarer datastrukturen under konvertering.",
        ],
      },
    ],
  },
  "jwt-decode-safely-guide": {
    ...guidesEn["jwt-decode-safely-guide"],
    title: "JWT — hvordan lese en token uten å verifisere signaturen",
    description: "Header, payload og Base64URL — når du bør dekode lokalt og hva du ikke bør gjøre.",
    sections: [
      {
        paragraphs: [
          "En JSON Web Token har tre punktseparerte deler: header, payload og signature. JWT-dekoderen i Toolando viser header og payload etter Base64URL-dekoding — uten å sende token til server (kjører i nettleseren).",
          "Dette erstatter ikke signaturverifisering på backend. Dekoding er for feilsøking (f.eks. utløpt `exp`, feil `aud`) — behandle aldri payload alene som identitetsbevis.",
        ],
      },
      {
        title: "Sikre metoder",
        paragraphs: [
          "Ikke lim inn produksjonstokens med personopplysninger på offentlige sider — bruk lokal dekoder eller testmiljø.",
          "Sjekk `exp` og `nbf` før du feilsøker 401-feil.",
          "Etter analyse, fjern token fra utklippstavlehistorikk og logger.",
        ],
      },
    ],
  },
  "lossy-vs-lossless": {
    ...guidesEn["lossy-vs-lossless"],
    title: "Tapsgivende vs tapsfri komprimering — en enkel guide",
    description: "Hvordan tapsgivende og tapsfri komprimering skiller seg, og hvordan du unngår kvalitetstap ved konvertering.",
    sections: [
      {
        paragraphs: [
          "Tapsgivende formater (MP3, JPG, AAC, H.264) kaster data for å krympe filer. Tapsfrie formater (FLAC, PNG, WAV, ZIP) beholder all data, men gir større filer.",
          "Regel: konverter bare tapsgivende → tapsfri når du må — du gjenoppretter ikke tapt kvalitet. Konverter tapsgivende → tapsgivende bare én gang — hver omkonvertering forverrer resultatet.",
        ],
      },
    ],
  },
  "markdown-to-pdf-workflow": {
    ...guidesEn["markdown-to-pdf-workflow"],
    title: "Markdown til PDF — dokumentasjon, README og notater",
    description: "MD → HTML → PDF/DOCX: når editor-eksport holder, og når en nettkonverterer hjelper.",
    sections: [
      {
        paragraphs: [
          "Markdown er for skriving — overskrifter, lister, kode — uten WYSIWYG-layout. Utviklere beholder README.md i repos; så trenger du PDF for kunde eller utskrift. Typisk vei: MD → HTML (render) → PDF via nettleserens Skriv ut til PDF, eller MD → DOCX → PDF for bedre sidehoder.",
          "Jeg testet MD → HTML og DOCX → PDF-konverterere på Toolando.tech på 20–40 KB-filer; norske tegn og kodeblokker fungerer hvis MD-filen er UTF-8.",
        ],
      },
      {
        title: "Hvilken vei når",
        paragraphs: [
          "Rask forhåndsvisning: MD → HTML, åpne i nettleser.",
          "Formelt dokument med sidenummer: MD → DOCX (eller editor), bedriftsstil, deretter DOCX → PDF.",
          "Enkle notater uten styling: MD → TXT holder.",
        ],
      },
      {
        title: "Gode MD-vaner",
        paragraphs: [
          "Én fil = ett emne; del lange dokumenter i kapitler.",
          "Lenk bilder relativt — sjekk stier etter konvertering.",
          "MD-tabeller kan gå i stykker i PDF — vurder CSV eller DOCX for tabulære data.",
        ],
      },
    ],
  },
  "merge-pdf-online-guide": {
    ...guidesEn["merge-pdf-online-guide"],
    title: "Slå sammen flere PDF-er til én — når det er fornuftig",
    description: "Kombinere fakturaer, skanninger og vedlegg — sideorden, kvalitet og personvern.",
    sections: [
      {
        paragraphs: [
          "Å slå sammen PDF-er er daglig kontorarbeid: faktura + kontrakt + ID-skanning i ett vedlegg. Toolando.tech slår sammen filer i rekkefølgen du velger.",
          "PDF beholder vektortekst og bitmap-skanninger — sammenslåing reduserer ikke skanningsoppløsningen hvis kildene ikke var overkomprimert.",
        ],
      },
      {
        title: "Før du sender",
        paragraphs: [
          "Ordne filer logisk (omslag → innhold → vedlegg).",
          "Fjern duplikatsider fra skanninger.",
          "Hvis mottakeren bruker mobil, sikt mot ≤10–15 MB eller del via sky-lenke.",
        ],
      },
      {
        title: "Personvern",
        paragraphs: [
          "Behandle forretnings- og personlige dokumenter som konfidensielle. Toolando sletter filer etter behandling; følg likevel bedriftens retningslinjer for sensitive data.",
        ],
      },
    ],
  },
  "mortgage-loan-calculator-guide": {
    ...guidesEn["mortgage-loan-calculator-guide"],
    title: "Lånekalkulator — betaling, rente og hva du bør se etter",
    description: "Annuitet, gebyrer og forsikring — hvordan du leser resultatet fra en boliglånskalkulator.",
    sections: [
      {
        paragraphs: [
          "Lånekalkulatoren på Toolando beregner en annuitetsbetaling: et fast månedlig beløp av kapital pluss rente. Lengre løpetid senker betalingen — men øker total rentekostnad.",
          "Behandle dette som utgangspunkt for banksamtale, ikke som tilbud. Faktisk betaling avhenger av referanserente, margin, gebyrer, livsforsikring og egenkapital.",
        ],
      },
      {
        title: "Hva du bør legge til utover kalkulatoren",
        paragraphs: [
          "Etableringsgebyrer og gebyr for tidlig innfrielse (hvis i avtalen).",
          "Eiendoms- og livsforsikring — ofte krevd av banken.",
          "Notargebyrer og dokumentavgift ved boligkjøp.",
        ],
      },
    ],
  },
  "mp3-vs-wav": {
    ...guidesEn["mp3-vs-wav"],
    title: "MP3 vs WAV — når bør du konvertere lyd?",
    description: "MP3 vs WAV sammenlignet: tapsfri vs tapsgivende komprimering, filstørrelse, DAW-redigering og hvilket format du bør velge.",
    sections: [
      {
        paragraphs: [
          "MP3 bruker tapsgivende komprimering — filene er små, men noe lyddata går tapt for alltid. WAV bevarer full kvalitet (tapsfri eller ukomprimert), men filene kan være 10× større enn MP3.",
          "I praksis: lytte på mobilen → MP3 holder. Redigere podcast i Audacity eller miksing i FL Studio → jobb med WAV eller FLAC.",
        ],
      },
      {
        title: "Når konvertere MP3 → WAV",
        paragraphs: [
          "Når en plattform eller app krever tapsfritt format for videre redigering.",
          "Når du planlegger flere klipp, effekter og mastering — hver operasjon på MP3 forverrer kvaliteten.",
          "Merk: MP3 → WAV gjenoppretter ikke tapt kvalitet, men stopper ytterligere forringelse under redigering.",
        ],
      },
      {
        title: "Når konvertere WAV → MP3",
        paragraphs: [
          "Sende et opptak på e-post eller i chat — mindre fil = raskere overføring.",
          "Publisere podcast eller musikk for lytting, ikke redigering.",
          "Spare diskplass i et stort lydbibliotek.",
        ],
      },
    ],
  },
  "online-file-security": {
    ...guidesEn["online-file-security"],
    title: "Filsikkerhet i nettverktøy",
    description: "Hvordan Toolando.tech behandler filer, når verktøy kjører lokalt i nettleseren, og personvern.",
    sections: [
      {
        paragraphs: [
          "Å laste opp filer til nettverktøy vekker naturlige bekymringer. På Toolando.tech brukes filer utelukkende til operasjonen du ber om — konvertering, komprimering eller forhåndsvisning.",
          "Når jobben er ferdig, slettes filer fra serveren. Noen verktøy (universalåpner) kjører helt i nettleseren — filen forlater aldri datamaskinen din. Tilkoblingen er kryptert (HTTPS).",
        ],
      },
    ],
  },
  "pdf-to-jpg": {
    ...guidesEn["pdf-to-jpg"],
    title: "Slik konverterer du PDF til JPG for utskrift og web",
    description: "Når du bør eksportere PDF-sider som JPG, hvilken oppløsning du bør bruke, og når PNG er bedre.",
    sections: [
      {
        paragraphs: [
          "PDF bevarer sidelayout. Noen ganger trenger du enkeltsider som bilder — for nettsted, PowerPoint eller utskrift av én side.",
          "PDF → JPG-konvertereren på Toolando.tech gjengir hver side som en separat JPG. Filer lagres aldri — de slettes umiddelbart etter konvertering.",
        ],
      },
      {
        title: "JPG eller PNG fra PDF?",
        paragraphs: [
          "JPG — mindre filer, ideelt for bilder og dokumenter uten gjennomsiktighet.",
          "PNG — tapsfritt med gjennomsiktighet; bedre for grafikk med tekst og skarpe kanter.",
        ],
      },
    ],
  },
  "pdf-vs-docx": {
    ...guidesEn["pdf-vs-docx"],
    title: "PDF vs DOCX — hvilket format når?",
    description: "Forskjeller mellom PDF og DOCX: redigering, utskrift, arkivering og når du bør konvertere hvilken vei.",
    sections: [
      {
        paragraphs: [
          "DOCX (Word) er for tekstredigering — innhold, stiler, overskrifter. PDF låser layouten — identisk på alle enheter, ideelt for fakturaer, kontrakter og CV.",
          "Konverter DOCX → PDF før du sender «kun til lesing». Konverter PDF → DOCX bare når du trenger å redigere tekst — layouten kan gå i stykker. For arkivering og utskrift, velg alltid PDF.",
        ],
      },
    ],
  },
  "png-vs-jpg-photos-and-graphics": {
    ...guidesEn["png-vs-jpg-photos-and-graphics"],
    title: "PNG vs JPG — bilder vs grafikk med tekst",
    description: "Praktiske valg: bilder, skjermbilder, logoer med gjennomsiktighet og utskrift.",
    sections: [
      {
        paragraphs: [
          "PNG og JPG er de to mest forvekslede formatene. JPG komprimerer bilder godt — himmel, hud, landskap — men ødelegger skarpe kanter og tekst. PNG beholder hver piksel nøyaktig, inkludert gjennomsiktighet (alpha), men filer er ofte 5–10× større enn JPG ved samme oppløsning.",
          "Regel jeg bruker i Toolando.tech-tester: galleri- eller sosialt bilde → JPG (eller WebP med JPG-reserve). Ikon, logo, diagram, UI-skjermbilde → PNG. Blandet bilde + tekst (f.eks. omslag) → ofte PNG eller tapsfri WebP.",
        ],
      },
      {
        title: "Når velge JPG",
        paragraphs: [
          "Kamera- eller telefonbilder uten gjennomsiktighet.",
          "Produktminiatyrbilder når bakgrunnen er ensfarget og du ikke trenger alpha.",
          "E-postvedlegg — JPG-kvalitet 80–85 er vanligvis et godt kompromiss.",
          "Hjemmeutskrift av bilder — mange butikker aksepterer høyoppløselig JPG (300 DPI tilsvarende).",
        ],
      },
      {
        title: "Når velge PNG",
        paragraphs: [
          "Nettlogo på transparent bakgrunn — JPG fyller alltid med hvitt eller svart.",
          "Skjermbilder av UI, diagrammer, kode — tekst forblir skarp.",
          "Flat grafikk med få farger (infografikk, appikoner).",
          "Når du planlegger videre lagredigering — tapsfri PNG legger ikke til artefakter ved hver lagring (i motsetning til gjentatt JPG).",
        ],
      },
      {
        title: "Vanlige feil",
        paragraphs: [
          "Lagre logo som JPG — taggete kanter og ingen gjennomsiktighet.",
          "Lagre 4000×3000-bilde som PNG «for kvalitet» — unødvendig 15 MB i stedet for 2 MB JPG.",
          "PNG → JPG → PNG-løkker — hver JPG-runde taper kvalitet; behold master i PNG.",
        ],
      },
    ],
  },
  "podcast-export-mp3-aac-settings": {
    ...guidesEn["podcast-export-mp3-aac-settings"],
    title: "Podkasteksport — MP3 eller AAC og hvilken bitrate",
    description: "Innstillinger etter opptak i Audacity, Reaper eller på mobil: mono, 44,1 kHz, fornuftig komprimering.",
    sections: [
      {
        paragraphs: [
          "Podkast er mest tale — du trenger ikke stereo 320 kbps som studiomusikk. De fleste plattformer (Spotify, Apple Podcasts, RSS-verter) omkoder opplastinger uansett. Send likevel en fornuftig master: mono eller stereo, 44,1 eller 48 kHz, MP3 128–192 kbps eller AAC/M4A 128 kbps.",
          "Tatt opp i WAV eller FLAC? Slutteksport er nesten alltid MP3 eller AAC — jeg testet WAV → MP3 på Toolando.tech på 30–60 minutters episoder; ~30 MB WAV synker til ~28 MB ved 128 kbps stereo (mono tale kan bli ~15 MB).",
        ],
      },
      {
        title: "Anbefalte innstillinger",
        paragraphs: [
          "Solo / enstemmig intervju: mono, MP3 96–128 kbps.",
          "To stemmer på separate spor: stereo 128 kbps.",
          "Musikk intro/outro i stereo, resten mono — eksporter alt stereo 128 kbps for enkelhet.",
          "Unngå 64 kbps — harde s-lyder og støy på billige mikrofoner.",
        ],
      },
      {
        title: "MP3 vs AAC (M4A)",
        paragraphs: [
          "AAC ved samme bitrate slår vanligvis MP3 — Apple foretrekker M4A.",
          "MP3 har bredest kompatibilitet i gamle spillere og biler.",
          "Ikke last opp rå WAV til podkastverter — opplastingen tar evigheter.",
        ],
      },
    ],
  },
  "prepare-images-for-web": {
    ...guidesEn["prepare-images-for-web"],
    title: "Slik forbereder du bilder for nettet (JPG, WebP, AVIF)",
    description: "Oppløsning, komprimering og format — raskere nettsted uten synlig kvalitetstap.",
    sections: [
      {
        paragraphs: [
          "Store kamerabilder (4000×3000 px) gjør hver side treg. Før opplasting til blogg eller butikk, endre størrelse til faktisk visningsstørrelse — f.eks. 1600 px bredde for en hero-banner.",
          "JPG er fortsatt det trygge universelle valget. WebP og AVIF gir mindre filer ved samme visuelle kvalitet — bruk dem i moderne stacker med <picture>-reserve for eldre nettlesere.",
        ],
      },
      {
        title: "Når PNG i stedet for JPG",
        paragraphs: [
          "Logoer, ikoner og UI-skjermbilder — PNG eller tapsfri WebP beholder skarpe kanter.",
          "Produktbilder på hvit bakgrunn komprimeres ofte fint som JPG kvalitet 80–85.",
          "Unngå å lagre samme banner som JPG om og om igjen — hver runde legger til artefakter.",
        ],
      },
      {
        title: "Sjekkliste før publisering",
        paragraphs: [
          "1) Endre størrelse til målbredde i px. 2) Velg format (JPG/WebP/AVIF). 3) Sjekk filstørrelse (<200 KB miniatyrbilder, <500 KB store bloggbilder). 4) Kjør PageSpeed Insights og sammenlign LCP før/etter.",
        ],
      },
    ],
  },
  "remove-exif-privacy-guide": {
    ...guidesEn["remove-exif-privacy-guide"],
    title: "EXIF i bilder — hva du bør fjerne før publisering",
    description: "GPS, kameramodell og dato i EXIF-metadata — personvernrisiko og fjerning.",
    sections: [
      {
        paragraphs: [
          "EXIF er skjult metadata i JPEG-, PNG- eller HEIC-filer: GPS-posisjon, telefonmodell, orientering, noen ganger et forhåndsminiatyrbilde. Sosiale nettverk fjerner det ofte, men ditt eget nettsted, nyhetsbrev eller e-postvedlegg kanskje ikke.",
          "Før du publiserer bilder av barn, hjemmeinteriør eller dokumenter på skrivebord, fjern EXIF med et dedikert verktøy — på Toolando skjer behandling på serveren og filen sendes ikke til ekstern AI-sky.",
        ],
      },
      {
        title: "Hva som gjenstår etter fjerning av EXIF",
        paragraphs: [
          "Bildepiksler forblir uendret. Bare metadata fjernes — oppløsningen påvirkes ikke.",
          "Etter EXIF-rensing kan du fortsatt komprimere filen eller legge til vannmerke før porteføljepublisering.",
        ],
      },
    ],
  },
  "split-pdf-pages-guide": {
    ...guidesEn["split-pdf-pages-guide"],
    title: "Slik deler du en PDF i separate sider online",
    description: "Når du bør dele PDF-er, hvordan du velger sideintervaller og hva du gjør med ZIP-resultatet.",
    sections: [
      {
        paragraphs: [
          "Å dele PDF er vanlig etter skanning av flersidig kontrakt eller faktura — du kan trenge å sende én side på e-post eller legge ved et fragment et annet sted.",
          "På Toolando.tech kan du eksportere hver side separat eller angi intervall (f.eks. 1-3,5). Resultatet er et ZIP med PDF-filer, hver beholder original vektor- eller skanningskvalitet.",
        ],
      },
      {
        title: "Når dele vs slå sammen",
        paragraphs: [
          "Del — når mottakeren bare trenger et fragment (signaturside, vedlegg, omslag).",
          "Slå sammen — når du setter sammen skanninger til ett arkiv eller utsending.",
          "Etter oppdeling, vurder sidenummer eller komprimer store skanninger.",
        ],
      },
    ],
  },
  "spreadsheet-csv-json-guide": {
    ...guidesEn["spreadsheet-csv-json-guide"],
    title: "CSV, JSON og Excel — flytte data mellom regneark og API-er",
    description: "Når du bør velge CSV vs JSON, og hvordan du unngår ødelagte desimaler og koding.",
    sections: [
      {
        paragraphs: [
          "CSV er ren tekst — åpnes i Excel, Google Regneark og BI-verktøy. JSON håndterer nestede strukturer (API-er, konfigurasjoner). XLSX legger til celletyper og flere ark.",
          "Typisk flyt: API-eksport som JSON → JSON til CSV → analyse i Excel. Omvendt: kundeliste CSV → JSON → REST API.",
        ],
      },
      {
        title: "Koding og Excel",
        paragraphs: [
          "Bruk UTF-8 CSV for tegn utenfor ASCII. Hvis Excel forvrenger tekst, importer via Data → Fra tekst og velg UTF-8.",
          "CSV-skille tegn varierer etter språk (komma vs semikolon). TSV (tabulator) er tryggere når beskrivelser inneholder komma.",
        ],
      },
      {
        title: "Valider etter konvertering",
        paragraphs: [
          "Sammenlign antall rader før og etter.",
          "For JSON, sjekk nøkler og typer — ett manglende anførselstegn ødelegger hele filen.",
        ],
      },
    ],
  },
  "svg-vs-png-logos-and-icons": {
    ...guidesEn["svg-vs-png-logos-and-icons"],
    title: "SVG vs PNG — logoer og ikoner for nettet",
    description: "Vektor vs raster: når du bør levere SVG og når @2x PNG holder.",
    sections: [
      {
        paragraphs: [
          "SVG er vektorgrafikk beskrevet matematisk — skaleres på alle skjermer uten pikselering. PNG er en bitmap med fast oppløsning; på retina trenger du ofte en 2×-versjon. For nettsteder bør logoer og enkle ikoner nesten alltid være SVG (eller ikonfont), med mindre filen inneholder innebygd bilde.",
          "SVG → PNG-konvertereren på Toolando.tech hjelper når trykkeri vil ha PNG 300 DPI eller et system avviser SVG.",
        ],
      },
      {
        title: "SVG-fordeler",
        paragraphs: [
          "Én fil for mobil og desktop — mindre CSS, ingen srcset.",
          "Enkel fargeendring via CSS fill på enkle ikoner.",
          "Bedre Lighthouse-resultater enn tunge PNG-heroes.",
        ],
      },
      {
        title: "Når PNG i stedet for SVG",
        paragraphs: [
          "Logo med gradienter, skygger eller effekter som eksporteres dårlig fra vektor.",
          "Open Graph / sosiale forhåndsvisninger — plattformer rasteriserer uansett.",
          "Desktop-apper uten SVG-motor.",
          "Eksporter @2x PNG (f.eks. 512×512) som reserve i <img> ved siden av inline SVG.",
        ],
      },
    ],
  },
  "tiff-and-png-for-document-scans": {
    ...guidesEn["tiff-and-png-for-document-scans"],
    title: "Dokumentskanninger — TIFF, PNG eller JPG",
    description: "Fakturaer og kontrakter: tapsfri lagring, flersidighet og når PDF holder.",
    sections: [
      {
        paragraphs: [
          "Å skanne faktura eller kontrakt skiller seg fra feriebilde. Tekst og stempler krever skarpe kanter — aggressiv JPG gjør bokstaver uklare. TIFF (ofte LZW tapsfri) og PNG er tryggere for arkiv. For sending og OCR ender du ofte med PDF eller JPG med moderat kvalitet uansett.",
          "Flerstegs TIFF kan være én fil med mange lag — ikke alle visere håndterer det; for kontor og kunder er flersidig PDF tydeligere (slå sammen PDF i Toolando.tech).",
        ],
      },
      {
        title: "Anbefalt arbeidsflyt",
        paragraphs: [
          "Skanner → PNG eller TIFF per side (300 DPI for utskrift, 150 DPI for forhåndsvisning).",
          "Rett rotasjon/beskjæring i editor.",
          "Slå sammen sider til én PDF for levering.",
          "Valgfri JPG-kvalitet 90 bare hvis mottakeren ikke aksepterer PDF.",
        ],
      },
      {
        title: "Hva du bør unngå",
        paragraphs: [
          "JPG-kvalitet 60 på faktura — beløp kan bli uleselige.",
          "Gjentatte TIFF → JPG → TIFF-sykluser.",
          "Fargeskann i 600 DPI «for sikkerhets skyld» — gigabyte uten nytte for A4-tekst.",
        ],
      },
    ],
  },
  "toolando-editorial-standards": {
    ...guidesEn["toolando-editorial-standards"],
    title: "Toolando.tech redaksjonelle standarder — hvordan guider skrives",
    description: "Hvordan artikler, konverterartester og formatleksikonet produseres — åpenhet for lesere og anmeldere.",
    sections: [
      {
        paragraphs: [
          "Toolando.tech bygges alene av Szymon. Guider massegenereres ikke og kopieres ikke fra Wikipedia — de følger ekte konverteringstester.",
          "Hver artikkel har publiserings- og oppdateringsdato. Når plattformkrav eller biblioteker endres, reviderer jeg teksten.",
        ],
      },
      {
        title: "Hva jeg tester",
        paragraphs: [
          "Lyd-/videokonverterere: tid, utdatastørrelse, avspilling i VLC og på mobil.",
          "Bilder: visuelt før/etter, PNG-gjennomsiktighet, WebP vs JPG-størrelse.",
          "Dokumenter: layout etter PDF ↔ DOCX, koding i CSV/JSON.",
        ],
      },
      {
        title: "Hva jeg ikke lover",
        paragraphs: [
          "Ingen «100 % kvalitet» ved tapsgivende → tapsgivende konvertering.",
          "Ingen nedlasting av andres YouTube/TikTok-videoer — bare lovlige operasjoner på dine filer.",
          "Google-annonser kan vises, men redaksjonelt innhold skrives uavhengig av annonsører.",
        ],
      },
    ],
  },
  "video-compress-before-sharing": {
    ...guidesEn["video-compress-before-sharing"],
    title: "Krymp video før e-post eller WhatsApp",
    description: "MP4, oppløsning, bitrate — praktiske størrelsesgrenser og containerkonvertering.",
    sections: [
      {
        paragraphs: [
          "Telefonopptak i MOV/MKV kan være hundrevis av MB. Mange e-postkontoer blokkerer vedlegg >25 MB. Løsning: konverter til MP4 (H.264 + AAC) og senk oppløsningen ved behov.",
          "720p holder ofte for forhåndsvisning på mobil; behold 1080p for TV-visning.",
        ],
      },
      {
        title: "Steg før sending",
        paragraphs: [
          "1) Konverter MOV/MKV → MP4. 2) Sjekk filstørrelse. 3) Klipp bort unødvendig intro/outro i en editor hvis fortsatt for stor. 4) Bruk sky-lenke hvis >25 MB.",
        ],
      },
    ],
  },
  "video-social-media": {
    ...guidesEn["video-social-media"],
    title: "Video for sosiale medier — MP4, oppløsning og bitrate",
    description: "Hvordan du forbereder video for Instagram, TikTok, YouTube: MP4-format, H.264, 1080p-oppløsning.",
    sections: [
      {
        paragraphs: [
          "Instagram, TikTok, YouTube og Facebook foretrekker MP4 med H.264-video og AAC-lyd. Konverter MOV, AVI eller MKV til MP4 før publisering for å unngå opplastingsfeil.",
          "1080p (1920×1080) holder for de fleste plattformer. Høyere bitrate = bedre kvalitet, men større fil. Se formatleksikonet for detaljer om MP4, WebM og MOV.",
        ],
      },
    ],
  },
  "webp-avif-images": {
    ...guidesEn["webp-avif-images"],
    title: "WebP og AVIF — moderne bildeformater for nettsteder",
    description: "WebP og AVIF vs JPG/PNG: komprimering, nettleserstøtte og PageSpeed-optimalisering.",
    sections: [
      {
        paragraphs: [
          "JPG og PNG har dominert nettet i mange år, men WebP gir filer som er 25–35 % mindre enn JPG ved samme visuelle kvalitet. AVIF går lenger — filene kan være halvparten så store som WebP.",
          "Alle moderne nettlesere støtter WebP. AVIF har noe svakere støtte i eldre Safari-versjoner.",
        ],
      },
      {
        title: "Implementeringsstrategi",
        paragraphs: [
          "Konverter JPG → WebP for produktbilder og bannere — raskere sidelasting.",
          "Behold JPG som reserve for eldre nettlesere (HTML-taggen <picture>).",
          "For logoer med gjennomsiktighet: PNG → WebP i stedet for JPG.",
        ],
      },
    ],
  },
  "when-not-to-convert-files": {
    ...guidesEn["when-not-to-convert-files"],
    title: "Når du IKKE bør konvertere en fil — 7 situasjoner som skader kvaliteten",
    description: "Hopp over unødvendige konverteringer: behold originaler, tapsfrie arkiv og sikkerhetskopier før eksperimenter.",
    sections: [
      {
        paragraphs: [
          "Nettkonverterere er praktiske, men ikke hver operasjon hjelper. Noen ganger behold originalen eller bruk tapsfrie arkiv (ZIP, FLAC).",
          "Regel: forvent ikke mirakler ved tapsgivende → tapsfri — MP3 → WAV gjenoppretter ikke tapt data.",
        ],
      },
      {
        title: "La det være",
        paragraphs: [
          "Du har allerede PNG med gjennomsiktighet — konverter ikke til JPG uten grunn.",
          "Designprosjekter — behold lagkilder (PSD, SVG); eksporter JPG først til slutt.",
          "Studio WAV/FLAC — ikke flatt ut til MP3 før sluttmixen.",
          "Digitalt signert PDF — konvertering kan ugyldiggjøre signaturen.",
        ],
      },
      {
        title: "Før du klikker Konverter",
        paragraphs: [
          "Behold en kopi av originalen.",
          "Sjekk om målplattformen allerede aksepterer kildeformatet ditt.",
          "Les formatsammenligninger i Toolando-leksikonet for å hoppe over et unødvendig steg.",
        ],
      },
    ],
  },
  "zip-7z-rar-when-to-use": {
    ...guidesEn["zip-7z-rar-when-to-use"],
    title: "ZIP, 7z og RAR — hvilket arkiv du bør sende",
    description: "Størrelse, kompatibilitet og kryptering — når ZIP holder, og når 7z eller RAR hjelper.",
    sections: [
      {
        paragraphs: [
          "Et arkiv pakker mange filer i én — praktisk for e-post, sky og mappebackup. ZIP er universell standard: åpnes på Windows, macOS og Linux uten ekstra programvare. 7z gir vanligvis mindre resultat, men mottakeren kan trenge 7-Zip. RAR finnes i eldre arbeidsflyter; å lage RAR online har lisensbegrensninger — du konverterer oftere RAR → ZIP enn omvendt.",
        ],
      },
      {
        title: "Når ZIP",
        paragraphs: [
          "Sende til kunder eller myndigheter — lavest risiko for «kan ikke åpnes».",
          "Arkivere kode, kontordokumenter, sett med JPG-bilder.",
          "Systemer som bare aksepterer .zip-opplastinger.",
        ],
      },
      {
        title: "Når 7z",
        paragraphs: [
          "Store spillmapper, videoprosjekter, backup før ekstern disk — mindre fil = raskere opplasting.",
          "Når mottakeren er teknisk og har 7-Zip.",
          "ZIP → 7z-konvertering er fornuftig én gang — ikke pakk om samme data i loop.",
        ],
      },
      {
        title: "Sikkerhet",
        paragraphs: [
          "Arkivpassord stopper tilfeldig åpning, men erstatter ikke ende-til-ende-kryptering for sensitive dokumenter.",
          "Pakk ikke ut arkiv fra ukjente kilder uten antivirusskanning.",
          "Toolando behandler arkiv bare under containerkonvertering — innholdet må være lovlig og ditt.",
        ],
      },
    ],
  },
}
