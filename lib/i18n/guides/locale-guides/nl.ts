import type { GuideArticle } from "../types"
import type { GuideSlug } from "../slugs"
import { guidesEn } from "../guides-en"

export const guidesNl: Record<GuideSlug, GuideArticle> = {
  "choose-audio-bitrate": {
    ...guidesEn["choose-audio-bitrate"],
    title: "Welke MP3- of AAC-bitrate kies je?",
    description: "128 vs 192 vs 320 kbps — praktische keuzes voor podcasts, muziek en video zonder schijfruimte te verspillen.",
    sections: [
      {
        paragraphs: [
          "Bitrate is de hoeveelheid data per seconde audio. Hogere bitrate betekent meestal beter geluid maar grotere bestanden. Bij MP3 is het verschil tussen 128 en 320 kbps het meest hoorbaar op goede speakers en dichte muziek.",
          "Voor spraak (podcasts, interviews) is 96–128 kbps mono vaak genoeg. Voor muziek op koptelefoon is 192–256 kbps stereo een solide compromis. 320 kbps is het praktische MP3-plafond — hoger helpt zelden omdat het formaat nog steeds lossy is.",
        ],
      },
      {
        title: "MP3, AAC en Opus — korte vergelijking",
        paragraphs: [
          "AAC (M4A) bij dezelfde bitrate presteert meestal beter dan MP3 — daarom gebruiken YouTube en Apple Music het.",
          "Opus blinkt uit in VoIP en streaming bij lage bitrates (64–128 kbps).",
          "Voor studio-archieven bewaar WAV of FLAC — een lossy bitrate herstelt geen ontbrekende data.",
        ],
      },
      {
        title: "Veelgemaakte fouten",
        paragraphs: [
          "Een MP3 van lage kwaliteit opschalen naar een hogere bitrate verbetert het geluid niet — alleen de bestandsgrootte groeit.",
          "Hetzelfde nummer meerdere keren opnieuw encoderen (MP3 → AAC → MP3) verslechtert de kwaliteit elke ronde.",
          "Voor videoprojecten haal je audio uit je eigen MP4 in plaats van andermans muziek te downloaden — auteursrecht telt.",
        ],
      },
    ],
  },
  "compress-images-without-quality-loss": {
    ...guidesEn["compress-images-without-quality-loss"],
    title: "JPG- en PNG-afbeeldingen comprimeren zonder zichtbaar kwaliteitsverlies",
    description: "Wanneer je de compressor gebruikt, welk kwaliteitsniveau je kiest, en compressie vs formaatconversie.",
    sections: [
      {
        paragraphs: [
          "Een afbeelding comprimeren verkleint het bestand zonder het formaat te wijzigen — je hebt nog steeds JPG of PNG, alleen lichter. JPG → WebP converteren wijzigt het formaat en is vaak beter voor websites, maar printworkflows vereisen soms JPG.",
          "Op Toolando.tech testte ik de beeldcompressor op productfoto's van 2000×2000: bij kwaliteit 80% daalde de bestandsgrootte 40–60% zonder zichtbare artefacten op scherm.",
        ],
      },
      {
        title: "Wanneer comprimeren vs converteren",
        paragraphs: [
          "Comprimeer wanneer het formaat goed is (bijv. webshop vereist JPG) maar het bestand te zwaar is voor e-mail of CMS.",
          "Converteer naar WebP/AVIF wanneer je publiceert op je eigen site met een <picture>-fallback.",
          "Sla nooit hetzelfde JPG vele keren op — elke pass voegt artefacten toe.",
        ],
      },
      {
        title: "Typische scenario's",
        paragraphs: [
          "E-mailbijlage: JPG kwaliteit ~75–85, max breedte 1600 px.",
          "E-commerce: WebP met JPG-fallback; thumbnails 800 px.",
          "UI-screenshots met tekst: PNG of lossless WebP — vermijd agressieve JPG.",
        ],
      },
    ],
  },
  "convert-video-to-gif-properly": {
    ...guidesEn["convert-video-to-gif-properly"],
    title: "Een goede GIF uit video maken — resolutie, FPS en lengte",
    description: "MP4/MOV naar GIF zonder gigantisch bestand: praktische limieten en alternatieven.",
    sections: [
      {
        paragraphs: [
          "GIF heeft geen audio en gebruikt geen H.264 — elk frame is een volledige bitmap (vaak 256-kleurenpalet). Een clip van 10 seconden in 1080p als GIF kan zwaarder zijn dan de originele video. Doel: kort, klein, lage resolutie.",
          "Vóór MP4 → GIF knip je de clip in een editor tot 2–4 seconden en zet je 10–15 FPS in plaats van 30 — GIF herstelt toch geen filmvloeiendheid.",
        ],
      },
      {
        title: "Startparameters",
        paragraphs: [
          "Max breedte 480–640 px voor memes en reacties.",
          "Max lengte 5 s — daarboven overweeg lopende MP4.",
          "Eenvoudige achtergronden (greenscreen) comprimeren makkelijker dan gradiënten en ruis.",
        ],
      },
      {
        title: "Na conversie",
        paragraphs: [
          "Controleer bestandsgrootte — GIF's boven 5 MB hebben zelden zin op een pagina.",
          "Als de GIF te groot is, GIF → MP4 en een <video>-embed lost het vaak op.",
          "Toolando verwerkt je video alleen voor de conversie — het host geen klaar GIF's publiek.",
        ],
      },
    ],
  },
  "docx-pdf-workflow": {
    ...guidesEn["docx-pdf-workflow"],
    title: "DOCX → PDF voor kantoorwerk — wanneer en hoe converteren",
    description: "Cv's, facturen en contracten versturen: waarom PDF DOCX verslaat en hoe je kapotte lettertypen voorkomt.",
    sections: [
      {
        paragraphs: [
          "DOCX is voor bewerken — ideaal wanneer de ontvanger Word heeft en tekst moet wijzigen. PDF is voor lezen — layout, lettertypen en marges zien er identiek uit op Windows, Mac en telefoon.",
          "Converteer DOCX → PDF voordat je een cv, voorstel of contract verstuurt. Ontvangers bewerken per ongeluk geen inhoud en je voorkomt dat vervangende lettertypen je huisstijl breken.",
        ],
      },
      {
        title: "Wanneer NIET PDF → DOCX converteren",
        paragraphs: [
          "Gescande facturen en getekende contracten — bewaar PDF als archief; OCR is een aparte stap.",
          "Complexe meerpagina-layouts (catalogi, brochures) — DOCX-conversie breekt vaak paginering.",
          "Als je alleen een tekstfragment nodig hebt, kopieer uit PDF in plaats van het hele bestand te converteren.",
        ],
      },
      {
        title: "Beveiliging en privacy",
        paragraphs: [
          "Bij Toolando.tech worden DOCX- en PDF-bestanden alleen gebruikt voor conversie en verwijderd wanneer de taak klaar is.",
          "Voor gevoelige documenten (ID's, banknummers) gebruik HTTPS en laat geen kopieën achter op openbare clouddrives zonder versleuteling.",
        ],
      },
    ],
  },
  "extract-audio-from-video": {
    ...guidesEn["extract-audio-from-video"],
    title: "Audio uit video halen — het legale alternatief",
    description: "Hoe je legaal een audiotrack uit je eigen videobestand haalt (MP4, MOV, MKV).",
    sections: [
      {
        paragraphs: [
          "Soms heb je een videobestand en heb je alleen de audio nodig. Toolando.tech haalt audio uit MP4, MOV, AVI, MKV en slaat deze op als MP3, WAV, FLAC of AAC.",
          "Dit is legaal op je eigen bestand — in tegenstelling tot muziek downloaden van YouTube of TikTok, wat Toolando.tech bewust niet aanbiedt.",
        ],
      },
    ],
  },
  "extract-images-from-pdf-pages": {
    ...guidesEn["extract-images-from-pdf-pages"],
    title: "Afbeeldingen uit PDF-pagina's halen (JPG, PNG, WebP)",
    description: "Presentaties, catalogi en scans — wanneer een pagina als afbeelding exporteren zin heeft en welke resolutie.",
    sections: [
      {
        paragraphs: [
          "PDF is een container — binnenin kunnen vectoren, lettertypen en ingesloten bitmaps zitten. PDF → JPG rendert elke pagina als rasterafbeelding. Dat is niet hetzelfde als één ingesloten logo extraheren (dat vereist een PDF-editor), maar voor slides, posters en scans werkt het prima.",
          "Een 16:9-deck geëxporteerd naar PNG op 1920 px breedte ziet er scherp uit op scherm; voor A4-print streef naar ~2480×3508 px (300 DPI) als de tool hoge resolutie ondersteunt.",
        ],
      },
      {
        title: "JPG vs PNG vs WebP",
        paragraphs: [
          "Slide met fotachtergrond → JPG of WebP.",
          "Slide met grafieken en tekst → PNG (scherper letterbeeld).",
          "Websitethumbnail → WebP met JPG-fallback na verdere conversie.",
        ],
      },
      {
        title: "Meerpagina-PDF's",
        paragraphs: [
          "Exporteer losse pagina's als je alleen slides 5 en 12 nodig hebt.",
          "Voor een galerij van alle pagina's — converteer het hele bestand en sorteer op nummer in bestandsnamen.",
          "Respecteer auteursrecht — andermans PDF is niet vrij van jou om te publiceren.",
        ],
      },
    ],
  },
  "flac-music-archive-guide": {
    ...guidesEn["flac-music-archive-guide"],
    title: "FLAC als muziekarchief — wanneer het loont vs MP3",
    description: "Lossless FLAC vs MP3 320 kbps: backups, thuisstreaming en autospelers.",
    sections: [
      {
        paragraphs: [
          "FLAC (Free Lossless Audio Codec) is lossless compressie — als ZIP voor audio. Bij decoderen krijg je hetzelfde signaal als WAV, maar het bestand neemt ongeveer de helft van de ruimte in. MP3 verwijdert data permanent; zelfs 320 kbps is niet bit-identiek aan een CD-rip.",
          "In de praktijk: als je lossless muziek koopt of je eigen cd's ript, is FLAC een verstandig archiefformaat. Op een telefoon met Bluetooth-koptelefoon is FLAC vs MP3 256 kbps vaak onhoorbaar — dan bespaart converteren naar MP3 gigabytes.",
        ],
      },
      {
        title: "Archiefworkflow",
        paragraphs: [
          "1) Master in FLAC (of WAV) op NAS / cloudbackup.",
          "2) Werkkopieën MP3/AAC voor telefoon en auto.",
          "3) Converteer nooit MP3 → FLAC \"voor kwaliteit\" — het blaast het bestand alleen op zonder data te herstellen.",
          "Ik testte de FLAC → MP3-converter op Toolando.tech op albums van 40–60 minuten; controleer metadata (titel, artiest) in je speler na conversie.",
        ],
      },
      {
        title: "Compatibiliteit",
        paragraphs: [
          "FLAC: VLC, Foobar2000, de meeste Android-spelers; zwakker in native Apple Music (ALAC past beter bij Apple).",
          "Autoradio's lezen vaak alleen MP3/WMA/AAC van USB — FLAC → MP3 is dan vereist.",
          "Thuisstreaming (Plex, Jellyfin) ondersteunt FLAC prima.",
        ],
      },
    ],
  },
  "font-woff2-for-websites": {
    ...guidesEn["font-woff2-for-websites"],
    title: "TTF, OTF, WOFF, WOFF2 — lettertypen voor het web",
    description: "Lettertypen converteren voor @font-face, licenties en impact op paginasnelheid.",
    sections: [
      {
        paragraphs: [
          "Browsers hebben WOFF/WOFF2 in CSS (@font-face) nodig, geen ruwe Windows-lettertypen. WOFF2 levert de kleinste transfergrootte.",
          "De TTF/OTF → WOFF2-converter van Toolando bereidt webklare bestanden voor. Controleer je lettertypelicentie vóór insluiting.",
        ],
      },
      {
        title: "Prestaties",
        paragraphs: [
          "Subset lettertypen tot gebruikte tekens in pro-tools als bestanden groot zijn.",
          "Preload kritieke WOFF2 in <head> voor above-the-fold-tekst.",
          "Gebruik font-display: swap zodat tekst leesbaar blijft tijdens laden.",
        ],
      },
    ],
  },
  "gif-vs-mp4-for-animations": {
    ...guidesEn["gif-vs-mp4-for-animations"],
    title: "GIF vs MP4 — animaties op sites en social media",
    description: "Wanneer old-school GIF zin heeft en wanneer korte MP4 of WebM megabytes bespaart.",
    sections: [
      {
        paragraphs: [
          "GIF speelt overal af maar is technisch een framevolgorde zonder moderne videocompressie — een animatie van 5 seconden in 720p kan 10–20 MB wegen. Hetzelfde in MP4 (H.264) past vaak in 500 KB–1 MB bij acceptabele kwaliteit.",
          "MP4 → GIF op Toolando.tech heeft zin voor korte loops (loader, Slack-reactie) wanneer het platform geen video insluit. Op je eigen site liever <video autoplay loop muted playsinline> met MP4 of WebM.",
        ],
      },
      {
        title: "Wanneer GIF",
        paragraphs: [
          "Korte loop (<5 s), kleine resolutie (≤480 px breed).",
          "Platformvereiste (sommige forums zijn GIF-only).",
          "Eenvoudige grafiek met weinig kleuren — dan kan GIF echt licht zijn.",
        ],
      },
      {
        title: "Wanneer MP4/WebM",
        paragraphs: [
          "Animatie met veel kleuren, gradiënten of videoclips.",
          "Websites — betere LCP en minder bandbreedte.",
          "Instagram/TikTok vereisen video, geen GIF.",
        ],
      },
      {
        title: "Tips voor MP4 → GIF",
        paragraphs: [
          "Knip de lengte — elke seconde zijn tientallen frames.",
          "Verlaag resolutie vóór conversie.",
          "Beperk het kleurenpalet als de tool het biedt (minder banding).",
        ],
      },
    ],
  },
  "heic-iphone-jpg": {
    ...guidesEn["heic-iphone-jpg"],
    title: "HEIC van iPhone — openen en converteren naar JPG",
    description: "Waarom iPhone HEIC opslaat, compatibiliteitsproblemen en hoe je naar JPG of PNG converteert.",
    sections: [
      {
        paragraphs: [
          "Apple slaat foto's standaard op in HEIC — kleiner dan JPG bij dezelfde kwaliteit. Probleem: Windows zonder extensie, oudere apps en veel diensten ondersteunen HEIC niet.",
          "Oplossing: converteer HEIC → JPG of HEIC → PNG in Toolando.tech voordat je mailt, uploadt of print. Je kunt iPhone ook instellen op \"Meest compatibel\" (JPG) in Instellingen.",
        ],
      },
    ],
  },
  "json-csv-xml": {
    ...guidesEn["json-csv-xml"],
    title: "JSON, CSV en XML — gegevens tussen formaten converteren",
    description: "Wanneer je JSON, CSV, TSV en XML gebruikt en hoe je tussen formaten converteert zonder structuur te verliezen.",
    sections: [
      {
        paragraphs: [
          "JSON is de standaard voor REST-API's en app-configuratie. CSV en TSV worden gebruikt voor Excel-import. XML wordt gebruikt in oudere enterprise-systemen en RSS.",
          "JSON → CSV opent een API-response in Excel. CSV → JSON bereidt gegevens voor op een REST-API. Toolando.tech behoudt de gegevensstructuur tijdens conversie.",
        ],
      },
    ],
  },
  "jwt-decode-safely-guide": {
    ...guidesEn["jwt-decode-safely-guide"],
    title: "JWT — een token lezen zonder handtekening te verifiëren",
    description: "Header, payload en Base64URL — wanneer lokaal decoderen en wat je niet moet doen.",
    sections: [
      {
        paragraphs: [
          "Een JSON Web Token heeft drie door punten gescheiden delen: header, payload en signature. De JWT-decoder in Toolando toont header en payload na Base64URL-decodering — zonder het token naar een server te sturen (draait in de browser).",
          "Dit vervangt geen handtekeningverificatie op de backend. Decoderen is voor debuggen (bijv. verlopen `exp`, verkeerde `aud`) — behandel de payload nooit alleen als identiteitsbewijs.",
        ],
      },
      {
        title: "Veilige praktijken",
        paragraphs: [
          "Plak geen productietokens met persoonsgegevens op publieke sites — gebruik een lokale decoder of testomgeving.",
          "Controleer `exp` en `nbf` vóór debuggen van 401-fouten.",
          "Wis het token na analyse uit klembordgeschiedenis en logs.",
        ],
      },
    ],
  },
  "lossy-vs-lossless": {
    ...guidesEn["lossy-vs-lossless"],
    title: "Lossy vs lossless compressie — een eenvoudige gids",
    description: "Hoe lossy en lossless compressie verschillen en hoe je kwaliteitsverlies voorkomt bij converteren.",
    sections: [
      {
        paragraphs: [
          "Lossy formaten (MP3, JPG, AAC, H.264) gooien gegevens weg om bestanden te verkleinen. Lossless formaten (FLAC, PNG, WAV, ZIP) behouden alle gegevens maar leveren grotere bestanden op.",
          "Regel: converteer alleen lossy → lossless wanneer het moet — je herstelt geen verloren kwaliteit. Converteer lossy → lossy slechts één keer — elke herconversie verslechtert het resultaat.",
        ],
      },
    ],
  },
  "markdown-to-pdf-workflow": {
    ...guidesEn["markdown-to-pdf-workflow"],
    title: "Markdown naar PDF — docs, README en notities",
    description: "MD → HTML → PDF/DOCX: wanneer editor-export genoeg is en wanneer een online converter helpt.",
    sections: [
      {
        paragraphs: [
          "Markdown is voor schrijven — koppen, lijsten, code — zonder WYSIWYG-layout. Developers bewaren README.md in repos; dan heb je PDF nodig voor een klant of print. Typisch pad: MD → HTML (render) → PDF via browser Afdrukken naar PDF, of MD → DOCX → PDF voor betere paginakoppen.",
          "Ik testte MD → HTML- en DOCX → PDF-converters op Toolando.tech op bestanden van 20–40 KB; speciale tekens en codeblokken gaan goed als het MD-bestand UTF-8 is.",
        ],
      },
      {
        title: "Welk pad wanneer",
        paragraphs: [
          "Snelle preview: MD → HTML, open in browser.",
          "Formeel document met paginanummers: MD → DOCX (of editor), bedrijfsstijl, dan DOCX → PDF.",
          "Kale notities zonder styling: MD → TXT is genoeg.",
        ],
      },
      {
        title: "Goede MD-gewoonten",
        paragraphs: [
          "Eén bestand = één onderwerp; splits lange docs in hoofdstukken.",
          "Link afbeeldingen relatief — controleer paden na conversie.",
          "MD-tabellen kunnen breken in PDF — overweeg CSV of DOCX voor tabulaire data.",
        ],
      },
    ],
  },
  "merge-pdf-online-guide": {
    ...guidesEn["merge-pdf-online-guide"],
    title: "Meerdere PDF's samenvoegen — wanneer het zin heeft",
    description: "Facturen, scans en bijlagen combineren — paginavolgorde, kwaliteit en privacy.",
    sections: [
      {
        paragraphs: [
          "PDF's samenvoegen is dagelijks kantoorwerk: factuur + contract + ID-scan in één bijlage. Toolando.tech voegt bestanden samen in de volgorde die je selecteert.",
          "PDF behoudt vectortekst en bitmapscans — samenvoegen vermindert de scanresolutie niet als bronnen niet overmatig gecomprimeerd waren.",
        ],
      },
      {
        title: "Voordat je verstuurt",
        paragraphs: [
          "Orden bestanden logisch (omslag → inhoud → bijlagen).",
          "Verwijder dubbele pagina's uit scans.",
          "Als de ontvanger op mobiel zit, streef naar ≤10–15 MB of deel via cloudlink.",
        ],
      },
      {
        title: "Privacy",
        paragraphs: [
          "Behandel zakelijke en persoonlijke documenten als vertrouwelijk. Toolando verwijdert bestanden na verwerking; volg nog steeds het bedrijfsbeleid voor gevoelige data.",
        ],
      },
    ],
  },
  "mortgage-loan-calculator-guide": {
    ...guidesEn["mortgage-loan-calculator-guide"],
    title: "Leningcalculator — maandbedrag, rente en waar op letten",
    description: "Annuïteit, kosten en verzekeringen — hoe je het resultaat van een hypotheekcalculator leest.",
    sections: [
      {
        paragraphs: [
          "De leningcalculator op Toolando berekent een annuïteit: een vast maandbedrag van aflossing plus rente. Een langere looptijd verlaagt het maandbedrag — maar verhoogt de totale rentekosten.",
          "Beschouw dit als startpunt voor een bankgesprek, geen offerte. Het werkelijke maandbedrag hangt af van de referentierente, marge, kosten, levensverzekering en eigen inbreng.",
        ],
      },
      {
        title: "Wat je buiten de calculator meerekent",
        paragraphs: [
          "Afsluitkosten en boete voor vervroegde aflossing (indien in het contract).",
          "Opstal- en levensverzekering — vaak vereist door de bank.",
          "Notariskosten en overdrachtsbelasting bij aankoop van een woning.",
        ],
      },
    ],
  },
  "mp3-vs-wav": {
    ...guidesEn["mp3-vs-wav"],
    title: "MP3 vs WAV — wanneer audio converteren?",
    description: "MP3 vs WAV vergeleken: lossy vs lossless compressie, bestandsgrootte, DAW-bewerking en welk formaat je kiest.",
    sections: [
      {
        paragraphs: [
          "MP3 gebruikt lossy compressie — bestanden zijn klein, maar een deel van de audiodata gaat definitief verloren. WAV behoudt de volledige kwaliteit (lossless of ongecomprimeerd), maar bestanden kunnen 10× groter zijn dan MP3.",
          "In de praktijk: luisteren op je telefoon → MP3 is prima. Een podcast bewerken in Audacity of mixen in FL Studio → werk met WAV of FLAC.",
        ],
      },
      {
        title: "Wanneer MP3 → WAV converteren",
        paragraphs: [
          "Wanneer een platform of app een lossless formaat vereist voor verdere bewerking.",
          "Wanneer je meerdere knippen, effecten en mastering plant — elke bewerking op MP3 verslechtert de kwaliteit.",
          "Let op: MP3 → WAV herstelt geen verloren kwaliteit, maar voorkomt verdere degradatie tijdens het bewerken.",
        ],
      },
      {
        title: "Wanneer WAV → MP3 converteren",
        paragraphs: [
          "Een opname versturen per e-mail of chat — kleiner bestand = snellere overdracht.",
          "Een podcast of muziek publiceren om te luisteren, niet om te bewerken.",
          "Schijfruimte besparen in een grote audiobibliotheek.",
        ],
      },
    ],
  },
  "online-file-security": {
    ...guidesEn["online-file-security"],
    title: "Bestandsbeveiliging in online tools",
    description: "Hoe Toolando.tech bestanden verwerkt, wanneer tools lokaal in de browser draaien en privacydetails.",
    sections: [
      {
        paragraphs: [
          "Bestanden uploaden naar online tools roept begrijpelijke zorgen op. Bij Toolando.tech worden bestanden uitsluitend gebruikt voor de bewerking die je aanvraagt — conversie, compressie of preview.",
          "Na voltooiing worden bestanden van de server verwijderd. Sommige tools (universele opener) draaien volledig in je browser — het bestand verlaat nooit je computer. De verbinding is versleuteld (HTTPS).",
        ],
      },
    ],
  },
  "pdf-to-jpg": {
    ...guidesEn["pdf-to-jpg"],
    title: "PDF naar JPG converteren voor print en web",
    description: "Wanneer je PDF-pagina's als JPG exporteert, welke resolutie je kiest en wanneer PNG beter is.",
    sections: [
      {
        paragraphs: [
          "PDF behoudt de paginalayout. Soms heb je individuele pagina's als afbeeldingen nodig — voor een website, PowerPoint of het printen van één pagina.",
          "De PDF → JPG-converter op Toolando.tech rendert elke pagina als een apart JPG. Bestanden worden nooit opgeslagen — direct na conversie verwijderd.",
        ],
      },
      {
        title: "JPG of PNG vanuit PDF?",
        paragraphs: [
          "JPG — kleinere bestanden, ideaal voor foto's en documenten zonder transparantie.",
          "PNG — lossless met transparantie; beter voor grafiek met tekst en scherpe randen.",
        ],
      },
    ],
  },
  "pdf-vs-docx": {
    ...guidesEn["pdf-vs-docx"],
    title: "PDF vs DOCX — welk formaat wanneer?",
    description: "PDF vs DOCX verschillen: bewerken, printen, archiveren en wanneer je welke kant op converteert.",
    sections: [
      {
        paragraphs: [
          "DOCX (Word) is voor tekst bewerken — inhoud, stijlen, koppen. PDF vergrendelt de layout — identiek op elk apparaat, ideaal voor facturen, contracten en cv's.",
          "Converteer DOCX → PDF voordat je verstuurt \"alleen om te lezen.\" Converteer PDF → DOCX alleen wanneer je tekst moet bewerken — layout kan breken. Voor archivering en print kies altijd PDF.",
        ],
      },
    ],
  },
  "png-vs-jpg-photos-and-graphics": {
    ...guidesEn["png-vs-jpg-photos-and-graphics"],
    title: "PNG vs JPG — foto's vs grafiek met tekst",
    description: "Praktische keuzes: foto's, screenshots, logo's met transparantie en print.",
    sections: [
      {
        paragraphs: [
          "PNG en JPG zijn de twee meest verwarde formaten. JPG comprimeert foto's goed — luchten, huid, landschappen — maar ruïneert scherpe randen en tekst. PNG behoudt elke pixel exact, inclusief transparantie (alpha), maar bestanden zijn vaak 5–10× groter dan JPG bij dezelfde resolutie.",
          "Regel die ik gebruik in Toolando.tech-tests: galerij- of socialmediafoto → JPG (of WebP met JPG-fallback). Icoon, logo, diagram, UI-screenshot → PNG. Gemengde foto + tekst (bijv. aanbiedingsomslag) → vaak PNG of lossless WebP.",
        ],
      },
      {
        title: "Wanneer JPG kiezen",
        paragraphs: [
          "Foto's van camera of telefoon zonder transparantie.",
          "Productthumbnails wanneer de achtergrond effen is en je geen alpha nodig hebt.",
          "E-mailbijlagen — JPG kwaliteit 80–85 is meestal een fair compromis.",
          "Thuis fotoprinten — veel winkels accepteren hoge-resolutie JPG (300 DPI-equivalent).",
        ],
      },
      {
        title: "Wanneer PNG kiezen",
        paragraphs: [
          "Websitelogo op transparante achtergrond — JPG vult altijd met wit of zwart.",
          "Screenshots van UI, grafieken, code — tekst blijft scherp.",
          "Vlakke grafiek met weinig kleuren (infographics, app-iconen).",
          "Wanneer je verdere gelaagde bewerking plant — lossless PNG voegt geen artefacten toe bij elke save (in tegenstelling tot herhaald JPG).",
        ],
      },
      {
        title: "Veelgemaakte fouten",
        paragraphs: [
          "Een logo opslaan als JPG — gekartelde randen en geen transparantie.",
          "Een foto van 4000×3000 als PNG opslaan \"voor kwaliteit\" — onnodig 15 MB in plaats van 2 MB JPG.",
          "PNG → JPG → PNG-lussen — elke JPG-pass verliest kwaliteit; bewaar de master in PNG.",
        ],
      },
    ],
  },
  "podcast-export-mp3-aac-settings": {
    ...guidesEn["podcast-export-mp3-aac-settings"],
    title: "Podcast exporteren — MP3 of AAC en welke bitrate",
    description: "Instellingen na opname in Audacity, Reaper of op je telefoon: mono, 44,1 kHz, verstandige compressie.",
    sections: [
      {
        paragraphs: [
          "Podcasts zijn vooral spraak — je hebt geen stereo 320 kbps nodig zoals studiomuziek. De meeste platforms (Spotify, Apple Podcasts, RSS-hosts) herencoderen uploads toch. Stuur nog steeds een degelijke master: mono of stereo, 44,1 of 48 kHz, MP3 128–192 kbps of AAC/M4A 128 kbps.",
          "Opgenomen in WAV of FLAC? Finale export is bijna altijd MP3 of AAC — ik testte WAV → MP3 op Toolando.tech op afleveringen van 30–60 min; ~30 MB WAV daalt naar ~28 MB bij 128 kbps stereo (mono spraak kan ~15 MB zijn).",
        ],
      },
      {
        title: "Aanbevolen instellingen",
        paragraphs: [
          "Solo / enkelstem-interview: mono, MP3 96–128 kbps.",
          "Twee stemmen op aparte tracks: stereo 128 kbps.",
          "Muziek intro/outro in stereo, rest mono — exporteer alles stereo 128 kbps voor eenvoud.",
          "Vermijd 64 kbps — harde sisklanken en ruis op goedkope microfoons.",
        ],
      },
      {
        title: "MP3 vs AAC (M4A)",
        paragraphs: [
          "AAC bij dezelfde bitrate presteert meestal beter dan MP3 — Apple geeft de voorkeur aan M4A.",
          "MP3 heeft de breedste compatibiliteit in oude spelers en auto's.",
          "Upload geen ruwe WAV naar podcasthosts — uploads duren eeuwig.",
        ],
      },
    ],
  },
  "prepare-images-for-web": {
    ...guidesEn["prepare-images-for-web"],
    title: "Afbeeldingen voorbereiden voor het web (JPG, WebP, AVIF)",
    description: "Resolutie, compressie en formaat — versnel je site zonder zichtbaar kwaliteitsverlies.",
    sections: [
      {
        paragraphs: [
          "Enorme camerafoto's (4000×3000 px) vertragen elke pagina. Voordat je uploadt naar een blog of webshop, schaal je af naar de werkelijke weergavegrootte — bijv. 1600 px breedte voor een hero-banner.",
          "JPG blijft de veilige universele keuze. WebP en AVIF leveren kleinere bestanden bij dezelfde visuele kwaliteit — gebruik ze in moderne stacks met een <picture>-fallback voor oudere browsers.",
        ],
      },
      {
        title: "Wanneer PNG in plaats van JPG",
        paragraphs: [
          "Logo's, iconen en UI-screenshots — PNG of lossless WebP houden scherpe randen.",
          "Productfoto's op witte achtergronden comprimeren vaak prima als JPG kwaliteit 80–85.",
          "Vermijd het herhaaldelijk opslaan van dezelfde banner als JPG — elke pass voegt artefacten toe.",
        ],
      },
      {
        title: "Checklist vóór publicatie",
        paragraphs: [
          "1) Schaal af naar doelbreedte in px. 2) Kies formaat (JPG/WebP/AVIF). 3) Controleer bestandsgewicht (<200 KB thumbnails, <500 KB grote blogafbeeldingen). 4) Run PageSpeed Insights en vergelijk LCP voor/na.",
        ],
      },
    ],
  },
  "remove-exif-privacy-guide": {
    ...guidesEn["remove-exif-privacy-guide"],
    title: "EXIF in foto's — wat verwijderen vóór publicatie",
    description: "GPS, cameramodel en datums in EXIF-metadata — privacyrisico's en verwijdering.",
    sections: [
      {
        paragraphs: [
          "EXIF is verborgen metadata in JPEG-, PNG- of HEIC-bestanden: GPS-locatie, telefoonmodel, orientatie, soms een previewthumbnail. Social networks strippen het vaak, maar je eigen site, nieuwsbrief of e-mailbijlage doet dat niet altijd.",
          "Vóór publicatie van foto's van kinderen, huisinterieurs of documenten op een bureau verwijder je EXIF met een dedicated tool — bij Toolando gebeurt verwerking op de server en het bestand gaat niet naar een externe AI-cloud.",
        ],
      },
      {
        title: "Wat blijft na EXIF-verwijdering",
        paragraphs: [
          "Beeldpixels blijven ongewijzigd. Alleen metadata wordt verwijderd — resolutie is niet aangetast.",
          "Na EXIF strippen kun je het bestand nog comprimeren of een watermerk toevoegen vóór portfolio-publicatie.",
        ],
      },
    ],
  },
  "split-pdf-pages-guide": {
    ...guidesEn["split-pdf-pages-guide"],
    title: "Een PDF online in losse pagina's splitsen",
    description: "Wanneer je PDF's splitst, hoe je paginabereiken kiest en wat je met de ZIP-output doet.",
    sections: [
      {
        paragraphs: [
          "Een PDF splitsen komt vaak voor na het scannen van een meerpagina-contract of factuur — je moet misschien één pagina mailen of een fragment ergens anders bijvoegen.",
          "Op Toolando.tech kun je elke pagina apart exporteren of een bereik opgeven (bijv. 1-3,5). Het resultaat is een ZIP met PDF-bestanden, elk met de originele vector- of scankwaliteit.",
        ],
      },
      {
        title: "Wanneer splitsen vs samenvoegen",
        paragraphs: [
          "Splitsen — wanneer de ontvanger alleen een fragment nodig heeft (handtekeningpagina, bijlage, omslag).",
          "Samenvoegen — wanneer je scans bundelt tot één archief of verzending.",
          "Na splitsen overweeg paginanummering of comprimeren van grote scans.",
        ],
      },
    ],
  },
  "spreadsheet-csv-json-guide": {
    ...guidesEn["spreadsheet-csv-json-guide"],
    title: "CSV, JSON en Excel — gegevens tussen sheets en API's verplaatsen",
    description: "Wanneer je CSV vs JSON kiest en hoe je kapotte decimalen en encoding voorkomt.",
    sections: [
      {
        paragraphs: [
          "CSV is platte tekst — opent in Excel, Google Sheets en BI-tools. JSON verwerkt geneste structuren (API's, configuraties). XLSX voegt celtypen en meerdere sheets toe.",
          "Typische flow: API-export als JSON → JSON naar CSV → analyse in Excel. Omgekeerd: klantenlijst CSV → JSON → REST-API.",
        ],
      },
      {
        title: "Encoding en Excel",
        paragraphs: [
          "Gebruik UTF-8 CSV voor niet-ASCII-tekens. Als Excel tekst verknoopt, importeer via Gegevens → Uit tekst en kies UTF-8.",
          "CSV-scheidingstekens verschillen per locale (komma vs puntkomma). TSV (tab) is veiliger wanneer beschrijvingen komma's bevatten.",
        ],
      },
      {
        title: "Valideren na conversie",
        paragraphs: [
          "Vergelijk rijaantallen voor en na.",
          "Controleer bij JSON sleutels en types — één ontbrekend aanhalingsteken breekt het hele bestand.",
        ],
      },
    ],
  },
  "svg-vs-png-logos-and-icons": {
    ...guidesEn["svg-vs-png-logos-and-icons"],
    title: "SVG vs PNG — logo's en iconen voor het web",
    description: "Vector vs raster: wanneer SVG leveren en wanneer @2x PNG genoeg is.",
    sections: [
      {
        paragraphs: [
          "SVG is vectorgrafiek wiskundig beschreven — schaalt op elk scherm zonder pixelvorming. PNG is een bitmap met vaste resolutie; op retina heb je vaak een 2×-versie nodig. Voor websites horen logo's en eenvoudige iconen bijna altijd SVG te zijn (of een iconfont), tenzij het bestand een foto insluit.",
          "De SVG → PNG-converter op Toolando.tech helpt wanneer een drukkerij PNG 300 DPI wil of een systeem SVG weigert.",
        ],
      },
      {
        title: "Voordelen van SVG",
        paragraphs: [
          "Eén bestand voor mobiel en desktop — minder CSS, geen srcset.",
          "Eenvoudige kleurwijzigingen via CSS fill op simpele iconen.",
          "Betere Lighthouse-scores dan zware PNG-hero's.",
        ],
      },
      {
        title: "Wanneer PNG in plaats van SVG",
        paragraphs: [
          "Logo met gradiënten, schaduwen of effecten die slecht uit vector exporteren.",
          "Open Graph / social preview-thumbnails — platforms rasteriseren toch.",
          "Desktop-apps zonder SVG-engine.",
          "Export @2x PNG (bijv. 512×512) als fallback in <img> naast inline SVG.",
        ],
      },
    ],
  },
  "tiff-and-png-for-document-scans": {
    ...guidesEn["tiff-and-png-for-document-scans"],
    title: "Documentscans — TIFF, PNG of JPG",
    description: "Facturen en contracten: lossless opslag, meer pagina's en wanneer PDF genoeg is.",
    sections: [
      {
        paragraphs: [
          "Een factuur of contract scannen verschilt van een vakantiefoto. Tekst en stempels vereisen scherpe randen — agressieve JPG maakt letters wazig. TIFF (vaak LZW lossless) en PNG zijn veiliger voor archief. Voor verzending en OCR eindig je toch vaak met PDF of JPG van gematigde kwaliteit.",
          "Meerpagina-TIFF kan één bestand met veel lagen zijn — niet elke viewer ondersteunt dat; voor kantoren en klanten is meerpagina-PDF duidelijker (PDF's samenvoegen in Toolando.tech).",
        ],
      },
      {
        title: "Aanbevolen workflow",
        paragraphs: [
          "Scanner → PNG of TIFF per pagina (300 DPI voor print, 150 DPI voor preview).",
          "Rotatie/crop corrigeren in een editor.",
          "Pagina's samenvoegen tot één PDF voor levering.",
          "Optioneel JPG kwaliteit 90 alleen als de ontvanger geen PDF accepteert.",
        ],
      },
      {
        title: "Wat te vermijden",
        paragraphs: [
          "JPG kwaliteit 60 op facturen — bedragen kunnen onleesbaar worden.",
          "Herhaalde TIFF → JPG → TIFF-cycli.",
          "Kleurscans op 600 DPI \"voor de zekerheid\" — gigabytes zonder voordeel voor A4-tekst.",
        ],
      },
    ],
  },
  "toolando-editorial-standards": {
    ...guidesEn["toolando-editorial-standards"],
    title: "Redactionele standaarden Toolando.tech — hoe gidsen worden geschreven",
    description: "Hoe artikelen, converttests en de formaatencyclopedie tot stand komen — transparantie voor lezers en reviewers.",
    sections: [
      {
        paragraphs: [
          "Toolando.tech is solo gebouwd door Szymon Badyl (Badyl-Tech). Gidsen worden niet massaal gegenereerd of gekopieerd van Wikipedia — ze volgen echte converttests.",
          "Elk artikel heeft publicatie- en updatedatums. Wanneer platformvereisten of bibliotheken wijzigen, herzie ik de tekst.",
        ],
      },
      {
        title: "Wat ik test",
        paragraphs: [
          "Audio-/videoconverters: tijd, outputgrootte, afspelen in VLC en op telefoon.",
          "Afbeeldingen: visueel voor/na, PNG-transparantie, WebP vs JPG-grootte.",
          "Documenten: layout na PDF ↔ DOCX, encoding in CSV/JSON.",
        ],
      },
      {
        title: "Wat ik niet beloof",
        paragraphs: [
          "Geen \"100% kwaliteit\" bij lossy → lossy converteren.",
          "Geen downloaden van andermans YouTube/TikTok-video's — alleen legale bewerkingen op je bestanden.",
          "Google-advertenties kunnen verschijnen, maar redactionele content wordt onafhankelijk van adverteerders geschreven.",
        ],
      },
    ],
  },
  "video-compress-before-sharing": {
    ...guidesEn["video-compress-before-sharing"],
    title: "Video verkleinen vóór e-mail of WhatsApp",
    description: "MP4, resolutie, bitrate — praktische groottelimieten en containerconversie.",
    sections: [
      {
        paragraphs: [
          "Telefoonopnames in MOV/MKV kunnen honderden MB zijn. Veel mailboxen blokkeren bijlagen >25 MB. Oplossing: converteer naar MP4 (H.264 + AAC) en verlaag indien nodig de resolutie.",
          "720p is vaak genoeg voor telefoonpreview; houd 1080p voor tv-kijken.",
        ],
      },
      {
        title: "Stappen vóór verzending",
        paragraphs: [
          "1) Converteer MOV/MKV → MP4. 2) Controleer bestandsgrootte. 3) Knip onnodige intro/outro in een editor als het nog te groot is. 4) Gebruik een cloudlink als >25 MB.",
        ],
      },
    ],
  },
  "video-social-media": {
    ...guidesEn["video-social-media"],
    title: "Video voor social media — MP4, resolutie en bitrate",
    description: "Hoe je video voorbereidt voor Instagram, TikTok, YouTube: MP4-formaat, H.264, 1080p-resolutie.",
    sections: [
      {
        paragraphs: [
          "Instagram, TikTok, YouTube en Facebook geven de voorkeur aan MP4 met H.264-video en AAC-audio. Converteer MOV, AVI of MKV naar MP4 voordat je publiceert om uploadfouten te voorkomen.",
          "1080p (1920×1080) is genoeg voor de meeste platforms. Hogere bitrate = betere kwaliteit maar groter bestand. Zie de formaatencyclopedie voor details over MP4, WebM en MOV.",
        ],
      },
    ],
  },
  "webp-avif-images": {
    ...guidesEn["webp-avif-images"],
    title: "WebP en AVIF — moderne beeldformaten voor websites",
    description: "WebP en AVIF vs JPG/PNG: compressie, browserondersteuning en PageSpeed-optimalisatie.",
    sections: [
      {
        paragraphs: [
          "JPG en PNG domineerden jarenlang het web, maar WebP levert bestanden die 25–35% kleiner zijn dan JPG bij dezelfde visuele kwaliteit. AVIF gaat nog verder — bestanden kunnen de helft van WebP zijn.",
          "Alle moderne browsers ondersteunen WebP. AVIF heeft iets minder ondersteuning in oudere Safari-versies.",
        ],
      },
      {
        title: "Implementatiestrategie",
        paragraphs: [
          "Converteer JPG → WebP voor productfoto's en banners — versnelt het laden van pagina's.",
          "Houd JPG als fallback voor oudere browsers (HTML <picture>-tag).",
          "Voor logo's met transparantie: PNG → WebP in plaats van JPG.",
        ],
      },
    ],
  },
  "when-not-to-convert-files": {
    ...guidesEn["when-not-to-convert-files"],
    title: "Wanneer je een bestand NIET moet converteren — 7 situaties die kwaliteit schaden",
    description: "Sla onnodige conversies over: bewaar originelen, lossless archieven en backup vóór experimenteren.",
    sections: [
      {
        paragraphs: [
          "Online converters zijn handig, maar niet elke bewerking helpt. Soms bewaar je het origineel of gebruik je lossless archieven (ZIP, FLAC).",
          "Regel: converteer lossy → lossless niet verwachtend magie — MP3 → WAV herstelt geen verloren data.",
        ],
      },
      {
        title: "Laat het zoals het is",
        paragraphs: [
          "Je hebt al PNG met transparantie — zet het niet zomaar naar JPG.",
          "Ontwerpprojecten — bewaar gelaagde bronnen (PSD, SVG); exporteer JPG pas aan het eind.",
          "Studio WAV/FLAC — plat niet naar MP3 tot de finale mix.",
          "Digitaal ondertekende PDF — conversie kan de handtekening ongeldig maken.",
        ],
      },
      {
        title: "Voordat je op Converteren klikt",
        paragraphs: [
          "Bewaar een kopie van het origineel.",
          "Controleer of het doelplatform je bronformaat al accepteert.",
          "Lees formaatvergelijkingen in de Toolando-encyclopedie om een nutteloze stap over te slaan.",
        ],
      },
    ],
  },
  "zip-7z-rar-when-to-use": {
    ...guidesEn["zip-7z-rar-when-to-use"],
    title: "ZIP, 7z en RAR — welk archief versturen",
    description: "Grootte, compatibiliteit en versleuteling — wanneer ZIP genoeg is en wanneer 7z of RAR helpt.",
    sections: [
      {
        paragraphs: [
          "Een archief wikkelt veel bestanden in één — handig voor e-mail, cloud en mapbackup. ZIP is de universele standaard: open op Windows, macOS en Linux zonder extra software. 7z levert meestal een kleiner resultaat, maar ontvangers hebben misschien 7-Zip nodig. RAR komt voor in legacy-workflows; RAR online maken heeft licentielimieten — je converteert vaker RAR → ZIP dan omgekeerd.",
        ],
      },
      {
        title: "Wanneer ZIP",
        paragraphs: [
          "Versturen naar klanten of kantoren — laagste \"gaat niet open\"-risico.",
          "Archiveren van code, kantoorbestanden, een set JPG-foto's.",
          "Systemen die alleen .zip-uploads accepteren.",
        ],
      },
      {
        title: "Wanneer 7z",
        paragraphs: [
          "Grote gamemappen, videoprojecten, backup vóór externe schijf — kleiner bestand = snellere upload.",
          "Wanneer de ontvanger technisch is en 7-Zip heeft.",
          "ZIP → 7z-conversie heeft één keer zin — pak niet steeds dezelfde data opnieuw in.",
        ],
      },
      {
        title: "Beveiliging",
        paragraphs: [
          "Archiefwachtwoorden stoppen toevallig openen maar vervangen geen end-to-end-versleuteling voor gevoelige documenten.",
          "Pak archieven van onbekende bronnen niet uit zonder antivirusscan.",
          "Toolando verwerkt archieven alleen voor de duur van containerconversie — inhoud moet legaal en van jou zijn.",
        ],
      },
    ],
  },
}
