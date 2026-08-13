import type { GuideArticle } from "../types"
import type { GuideSlug } from "../slugs"
import { guidesEn } from "../guides-en"

export const guidesFi: Record<GuideSlug, GuideArticle> = {
  "choose-audio-bitrate": {
    ...guidesEn["choose-audio-bitrate"],
    title: "Minkä MP3- tai AAC-bittinopeuden valita?",
    description: "128 vs 192 vs 320 kbps — käytännön valinnat podcasteihin, musiikkiin ja videoon ilman levytilan tuhlausta.",
    sections: [
      {
        paragraphs: [
          "Bittinopeus on datan määrä äänisekuntia kohti. Korkeampi bittinopeus tarkoittaa yleensä parempaa ääntä mutta suurempia tiedostoja. MP3:lla 128 ja 320 kbps:n ero kuuluu parhaiten hyvillä kaiuttimilla ja tiheässä musiikissa.",
          "Puheelle (podcastit, haastattelut) 96–128 kbps mono riittää usein. Musiikkiin kuulokkeilla 192–256 kbps stereo on hyvä kompromissi. 320 kbps on MP3:n käytännön yläraja — korkeampi harvoin auttaa, koska formaatti on edelleen häviöllinen.",
        ],
      },
      {
        title: "MP3, AAC ja Opus — nopea vertailu",
        paragraphs: [
          "AAC (M4A) samalla bittinopeudella voittaa yleensä MP3:n — siksi YouTube ja Apple Music käyttävät sitä.",
          "Opus loistaa VoIP:ssä ja suoratoistossa matalilla bittinopeuksilla (64–128 kbps).",
          "Studioarkistoon pidä WAV tai FLAC — häviöllinen bittinopeus ei palauta puuttuvaa dataa.",
        ],
      },
      {
        title: "Yleiset virheet",
        paragraphs: [
          "Heikkolaatuisen MP3:n skaalaaminen korkeampaan bittinopeuteen ei paranna ääntä — vain tiedostokoko kasvaa.",
          "Saman kappaleen uudelleenkoodaus (MP3 → AAC → MP3) heikentää laatua joka kierroksella.",
          "Videoprojekteissa erota ääni omasta MP4:stä sen sijaan, että lataat jonkun toisen musiikin — tekijänoikeudet ovat tärkeitä.",
        ],
      },
    ],
  },
  "compress-images-without-quality-loss": {
    ...guidesEn["compress-images-without-quality-loss"],
    title: "JPG- ja PNG-kuvien pakkaaminen ilman näkyvää laadun heikkenemistä",
    description: "Milloin käyttää pakkaajaa, mikä laatutaso valitaan ja pakkaus vs formaattimuunnos.",
    sections: [
      {
        paragraphs: [
          "Kuvan pakkaaminen pienentää tiedostokokoa muuttamatta formaattia — sinulla on edelleen JPG tai PNG, vain kevyempi. JPG → WebP -muunnos vaihtaa formaattia ja on usein parempi verkkosivuille, mutta tulostustyönkulut voivat vaatia JPG:tä.",
          "Toolando.techissä testasin kuvanpakkaajaa 2000×2000 tuotekuvilla: laadulla 80 % tiedostokoko pieneni 40–60 % ilman näkyviä artefakteja näytöllä.",
        ],
      },
      {
        title: "Milloin pakata vs muuntaa",
        paragraphs: [
          "Pakkaa kun formaatti on OK (esim. kauppa vaatii JPG:tä) mutta tiedosto on liian raskas sähköpostiin tai CMS:ään.",
          "Muunna WebP/AVIF:ksi kun julkaiset omalla sivustollasi <picture>-varalla.",
          "Älä tallenna samaa JPG:tä monta kertaa — jokainen kierros lisää artefakteja.",
        ],
      },
      {
        title: "Tyypilliset skenaariot",
        paragraphs: [
          "Sähköpostiliite: JPG-laatu ~75–85, max leveys 1600 px.",
          "Verkkokauppa: WebP JPG-varalla; pikkukuvat 800 px.",
          "UI-kuvakaappaukset tekstillä: PNG tai häviötön WebP — vältä aggressiivista JPG:tä.",
        ],
      },
    ],
  },
  "convert-video-to-gif-properly": {
    ...guidesEn["convert-video-to-gif-properly"],
    title: "Hyvän GIF:n tekeminen videosta — resoluutio, FPS ja pituus",
    description: "MP4/MOV GIF:ksi ilman jättitiedostoa: käytännön rajat ja vaihtoehdot.",
    sections: [
      {
        paragraphs: [
          "GIF:llä ei ole ääntä eikä se käytä H.264:ää — jokainen ruutu on täysi bittikartta (usein 256 värin paletti). Joten 10 sekunnin 1080p-klippi GIF:nä voi painaa enemmän kuin alkuperäinen video. Tavoite: lyhyt, pieni, matala resoluutio.",
          "Ennen MP4 → GIF, leikkaa klippi 2–4 sekuntiin editorissa ja käytä 10–15 FPS 30:n sijaan — GIF ei palauta elokuvan sulavuutta.",
        ],
      },
      {
        title: "Aloitusparametrit",
        paragraphs: [
          "Max leveys 480–640 px memeille ja reaktioille.",
          "Max pituus 5 s — sen yli harkitse silmukkaavaa MP4:ää.",
          "Yksinkertaiset taustat (greenscreen) pakkaavat helpommin kuin gradientit ja kohina.",
        ],
      },
      {
        title: "Muunnoksen jälkeen",
        paragraphs: [
          "Tarkista tiedostokoko — yli 5 MB GIF harvoin järkevä sivulla.",
          "Jos GIF on liian suuri, GIF → MP4 ja <video>-upotus korjaa usein tilanteen.",
          "Toolando käsittelee videosi vain muunnoksen ajan — se ei isännöi valmiita GIF:ejä julkisesti.",
        ],
      },
    ],
  },
  "docx-pdf-workflow": {
    ...guidesEn["docx-pdf-workflow"],
    title: "DOCX → PDF toimistotyöhön — milloin ja miten muuntaa",
    description: "CV:n, laskujen ja sopimusten lähettäminen: miksi PDF voittaa DOCX:n ja miten välttää rikkinäiset fontit.",
    sections: [
      {
        paragraphs: [
          "DOCX on muokkausta varten — hyvä kun vastaanottajalla on Word ja tekstiä pitää muuttaa. PDF on lukemista varten — asettelu, fontit ja marginaalit näyttävät identtisiltä Windowsilla, Macilla ja puhelimella.",
          "Ennen CV:n, tarjouksen tai sopimuksen lähettämistä muunna DOCX → PDF. Vastaanottajat eivät vahingossa muokkaa sisältöä, etkä vältä korvaavien fonttien rikkomasta brändiäsi.",
        ],
      },
      {
        title: "Milloin EI muuntaa PDF → DOCX",
        paragraphs: [
          "Skannatut laskut ja allekirjoitetut sopimukset — pidä PDF arkistona; OCR on erillinen vaihe.",
          "Monimutkaiset monisivuiset asettelut (katalogit, esitteet) — DOCX-muunnos rikkoo usein sivutuksen.",
          "Jos tarvitset vain tekstikatkelman, kopioi PDF:stä sen sijaan, että muunnat koko tiedoston.",
        ],
      },
      {
        title: "Turvallisuus ja yksityisyys",
        paragraphs: [
          "Toolando.techissä DOCX- ja PDF-tiedostoja käytetään vain muunnokseen ja poistetaan työn valmistuttua.",
          "Arkaluonteisissa dokumenteissa (henkilöllisyystodistus, pankkinumerot) käytä HTTPS:ää äläkä jätä kopioita julkisiin pilvipalveluihin ilman salausta.",
        ],
      },
    ],
  },
  "extract-audio-from-video": {
    ...guidesEn["extract-audio-from-video"],
    title: "Äänen erottaminen videosta — laillinen vaihtoehto",
    description: "Kuinka erotat laillisesti ääniraidan omasta videotiedostostasi (MP4, MOV, MKV).",
    sections: [
      {
        paragraphs: [
          "Joskus sinulla on videotiedosto ja tarvitset vain äänen. Toolando.tech erottaa äänen MP4-, MOV-, AVI- ja MKV-tiedostoista ja tallentaa sen MP3-, WAV-, FLAC- tai AAC-muodossa.",
          "Tämä on laillista omassa tiedostossasi — toisin kuin musiikin lataaminen YouTubesta tai TikTokista, mitä Toolando.tech tarkoituksella ei tarjoa.",
        ],
      },
    ],
  },
  "extract-images-from-pdf-pages": {
    ...guidesEn["extract-images-from-pdf-pages"],
    title: "Kuvien erottaminen PDF-sivuista (JPG, PNG, WebP)",
    description: "Esitykset, katalogit ja skannaukset — milloin sivun vienti kuvana on järkevää ja mikä resoluutio.",
    sections: [
      {
        paragraphs: [
          "PDF on kontti — sisällä voi olla vektoreita, fontteja ja upotettuja bitmapeja. PDF → JPG renderöi jokaisen sivun rasterikuvaksi. Se ei ole sama kuin yksittäisen upotetun logon erottaminen (tarvitsee PDF-editorin), mutta dioille, julisteille ja skannauksille toimii hyvin.",
          "16:9-esitys vietynä PNG:ksi 1920 px leveydellä näyttää terävältä näytöllä; A4-tulostukseen tähtää ~2480×3508 px (300 DPI) jos työkalu tukee korkeaa resoluutiota.",
        ],
      },
      {
        title: "JPG vs PNG vs WebP",
        paragraphs: [
          "Dia valokuvataustalla → JPG tai WebP.",
          "Dia kaavioilla ja tekstillä → PNG (tervempi typografia).",
          "Verkkosivun pikkukuva → WebP JPG-varalla jatkomuunnoksen jälkeen.",
        ],
      },
      {
        title: "Monisivuiset PDF:t",
        paragraphs: [
          "Vie yksittäisiä sivuja jos tarvitset vain diat 5 ja 12.",
          "Kaikkien sivujen galleriaan — muunna koko tiedosto ja lajittele numeron mukaan tiedostonimissä.",
          "Kunnioita tekijänoikeuksia — jonkun toisen PDF ei ole sinun kuva vapaaseen julkaisuun.",
        ],
      },
    ],
  },
  "flac-music-archive-guide": {
    ...guidesEn["flac-music-archive-guide"],
    title: "FLAC musiikkiarkistona — milloin se kannattaa vs MP3",
    description: "Häviötön FLAC vs MP3 320 kbps: varmuuskopiot, kotistreaming ja autosoittimet.",
    sections: [
      {
        paragraphs: [
          "FLAC (Free Lossless Audio Codec) on häviötön pakkaus — kuin ZIP äänelle. Dekoodatessa saat saman signaalin kuin WAV, mutta tiedosto vie noin puolet tilasta. MP3 poistaa dataa pysyvästi; edes 320 kbps ei ole bittitarkasti identtinen CD-ripin kanssa.",
          "Käytännössä: jos ostat häviötöntä musiikkia tai ripaat omat levyjäsi, FLAC on järkevä arkistomuoto. Puhelimella Bluetooth-kuulokkeilla FLAC vs MP3 256 kbps on usein kuulematon — silloin MP3-muunnos säästää gigatavuja.",
        ],
      },
      {
        title: "Arkistotyönkulku",
        paragraphs: [
          "1) Master FLAC:ssa (tai WAV) NAS:lla / pilvivarmuuskopiossa.",
          "2) Työkopiot MP3/AAC puhelimeen ja autoon.",
          "3) Älä koskaan muunna MP3 → FLAC \"laadun vuoksi\" — se vain paisuttaa tiedostoa palauttamatta dataa.",
          "Testasin FLAC → MP3 -muuntimen Toolando.techissä 40–60 minuutin albumeilla; tarkista metadata (otsikko, artisti) soittimessa muunnoksen jälkeen.",
        ],
      },
      {
        title: "Yhteensopivuus",
        paragraphs: [
          "FLAC: VLC, Foobar2000, useimmat Android-soittimet; heikompi natiivissa Apple Musicissa (ALAC sopii Appleen paremmin).",
          "Autoradiot lukevat usein vain MP3/WMA/AAC USB:stä — FLAC → MP3 on välttämätön.",
          "Kotistreaming (Plex, Jellyfin) käsittelee FLAC:n ongelmitta.",
        ],
      },
    ],
  },
  "font-woff2-for-websites": {
    ...guidesEn["font-woff2-for-websites"],
    title: "TTF, OTF, WOFF, WOFF2 — fontit verkkoon",
    description: "Fonttien muuntaminen @font-face-käyttöön, lisenssit ja vaikutus sivun nopeuteen.",
    sections: [
      {
        paragraphs: [
          "Selaimet tarvitsevat WOFF/WOFF2 CSS:ssä (@font-face), eivät raakoja Windows-fonttitiedostoja. WOFF2 antaa pienimmän siirtokoon.",
          "Toolandon TTF/OTF → WOFF2 -muunnin valmistelee verkkovalmiit tiedostot. Tarkista fonttilisenssi ennen upotusta.",
        ],
      },
      {
        title: "Suorituskyky",
        paragraphs: [
          "Subsetoi fontit käytettyihin glyfeihin ammattityökaluissa jos tiedostot ovat suuria.",
          "Esilataa kriittinen WOFF2 <head>-osiossa above-the-fold-tekstille.",
          "Käytä font-display: swap jotta teksti pysyy luettavana latauksen aikana.",
        ],
      },
    ],
  },
  "gif-vs-mp4-for-animations": {
    ...guidesEn["gif-vs-mp4-for-animations"],
    title: "GIF vs MP4 — animaatiot sivuilla ja somessa",
    description: "Milloin vanha GIF on järkevä ja milloin lyhyt MP4 tai WebM säästää megatavuja.",
    sections: [
      {
        paragraphs: [
          "GIF toistuu kaikkialla, mutta teknisesti se on ruutusekvenssi ilman modernia videopakkausta — 5 sekunnin 720p-animaatio voi painaa 10–20 MB. Sama MP4:nä (H.264) mahtuu usein 500 KB–1 MB hyväksyttävällä laadulla.",
          "MP4 → GIF Toolando.techissä on järkevä lyhyille silmukoille (loader, Slack-reaktio), kun alusta ei salli upotettua videota. Omalla sivustolla suosi <video autoplay loop muted playsinline> MP4:llä tai WebM:llä.",
        ],
      },
      {
        title: "Milloin GIF",
        paragraphs: [
          "Lyhyt silmukka (<5 s), pieni resoluutio (≤480 px leveys).",
          "Alustavaatimus (jotkut foorumit ovat vain GIF).",
          "Yksinkertainen grafiikka vähällä värillä — silloin GIF voi olla todella kevyt.",
        ],
      },
      {
        title: "Milloin MP4/WebM",
        paragraphs: [
          "Animaatio monilla väreillä, gradienteilla tai videoklipillä.",
          "Verkkosivut — parempi LCP ja vähemmän kaistaa.",
          "Instagram/TikTok vaatii videota, ei GIF:ää.",
        ],
      },
      {
        title: "Vinkit MP4 → GIF",
        paragraphs: [
          "Leikkaa pituus — jokainen sekunti on kymmeniä ruutuja.",
          "Pienennä resoluutio ennen muunnosta.",
          "Rajoita väripalettia jos työkalu tarjoaa sen (vähemmän bandingia).",
        ],
      },
    ],
  },
  "heic-iphone-jpg": {
    ...guidesEn["heic-iphone-jpg"],
    title: "HEIC iPhonesta — avaaminen ja muuntaminen JPG:ksi",
    description: "Miksi iPhone tallentaa HEIC-muodossa, yhteensopivuusongelmat ja muuntaminen JPG:ksi tai PNG:ksi.",
    sections: [
      {
        paragraphs: [
          "Apple tallentaa kuvat oletuksena HEIC-muodossa — pienempi kuin JPG samalla laadulla. Ongelma: Windows ilman lisäosaa, vanhat sovellukset ja monet palvelut eivät tue HEIC:ää.",
          "Ratkaisu: muunna HEIC → JPG tai HEIC → PNG Toolando.techissä ennen sähköpostia, latausta tai tulostusta. Voit myös asettaa iPhonen asetuksissa \"Yhteensopivin\" (JPG).",
        ],
      },
    ],
  },
  "json-csv-xml": {
    ...guidesEn["json-csv-xml"],
    title: "JSON, CSV ja XML — datan muuntaminen formaattien välillä",
    description: "Milloin käyttää JSON:ia, CSV:tä, TSV:tä ja XML:ää sekä kuinka muuntaa niiden välillä menettämättä rakennetta.",
    sections: [
      {
        paragraphs: [
          "JSON on REST API:n ja sovellusasetusten standardi. CSV ja TSV käytetään Excel-tuontiin. XML:ää käytetään vanhemmissa yritysjärjestelmissä ja RSS:ssä.",
          "JSON → CSV avaa API-vastauksen Excelissä. CSV → JSON valmistelee datan REST API:lle. Toolando.tech säilyttää datan rakenteen muunnoksen aikana.",
        ],
      },
    ],
  },
  "jwt-decode-safely-guide": {
    ...guidesEn["jwt-decode-safely-guide"],
    title: "JWT — tokenin lukeminen ilman allekirjoituksen tarkistusta",
    description: "Header, payload ja Base64URL — milloin dekoodata paikallisesti ja mitä ei tehdä.",
    sections: [
      {
        paragraphs: [
          "JSON Web Token koostuu kolmesta pisteellä erotetusta osasta: header, payload ja signature. Toolandon JWT-dekooderi näyttää headerin ja payloadin Base64URL-dekoodauksen jälkeen — lähettämättä tokenia palvelimelle (toimii selaimessa).",
          "Tämä ei korvaa allekirjoituksen tarkistusta backendissä. Dekoodaus on vianetsintää varten (esim. vanhentunut `exp`, väärä `aud`) — älä koskaan pidä payloadia yksin identiteettitodistuksena.",
        ],
      },
      {
        title: "Turvalliset käytännöt",
        paragraphs: [
          "Älä liitä tuotantotokeneita henkilötiedoilla julkisille sivuille — käytä paikallista dekooderia tai testiympäristöä.",
          "Tarkista `exp` ja `nbf` ennen 401-virheiden vianetsintää.",
          "Analyysin jälkeen poista token leikepöydän historiasta ja lokeista.",
        ],
      },
    ],
  },
  "lossy-vs-lossless": {
    ...guidesEn["lossy-vs-lossless"],
    title: "Häviöllinen vs häviötön pakkaus — yksinkertainen opas",
    description: "Miten häviöllinen ja häviötön pakkaus eroavat ja kuinka välttää laadun heikkenemistä muunnoksessa.",
    sections: [
      {
        paragraphs: [
          "Häviölliset formaatit (MP3, JPG, AAC, H.264) hylkäävät dataa tiedostojen pienentämiseksi. Häviöttömät formaatit (FLAC, PNG, WAV, ZIP) säilyttävät kaiken datan mutta tuottavat suurempia tiedostoja.",
          "Sääntö: muunna häviöllinen → häviötön vain pakosta — menetettyä laatua ei palauteta. Muunna häviöllinen → häviöllinen vain kerran — jokainen uudelleenmuunnos heikentää tulosta.",
        ],
      },
    ],
  },
  "markdown-to-pdf-workflow": {
    ...guidesEn["markdown-to-pdf-workflow"],
    title: "Markdownista PDF:ksi — dokumentaatio, README ja muistiinpanot",
    description: "MD → HTML → PDF/DOCX: milloin editorin vienti riittää ja milloin verkkomuunnin auttaa.",
    sections: [
      {
        paragraphs: [
          "Markdown on kirjoittamista varten — otsikot, listat, koodi — ilman WYSIWYG-asettelua. Kehittäjät pitävät README.md:t repossa; sitten tarvitaan PDF asiakkaalle tai tulostukseen. Tyypillinen polku: MD → HTML (renderöinti) → PDF selaimen Tulosta PDF:ksi, tai MD → DOCX → PDF parempia sivuotsikoita varten.",
          "Testasin MD → HTML ja DOCX → PDF -muuntimia Toolando.techissä 20–40 KB tiedostoilla; suomalaiset merkit ja koodilohkot toimivat jos MD on UTF-8.",
        ],
      },
      {
        title: "Mikä polku milloin",
        paragraphs: [
          "Nopea esikatselu: MD → HTML, avaa selaimessa.",
          "Virallinen dokumentti sivunumeroilla: MD → DOCX (tai editori), yritystyyli, sitten DOCX → PDF.",
          "Pelkät muistiinpanot ilman tyyliä: MD → TXT riittää.",
        ],
      },
      {
        title: "Hyvät MD-tavat",
        paragraphs: [
          "Yksi tiedosto = yksi aihe; jaa pitkät dokumentit lukuiksi.",
          "Linkitä kuvat suhteellisesti — tarkista polut muunnoksen jälkeen.",
          "MD-taulukot voivat rikkoutua PDF:ssä — harkitse CSV:tä tai DOCX:ää taulukkodataan.",
        ],
      },
    ],
  },
  "merge-pdf-online-guide": {
    ...guidesEn["merge-pdf-online-guide"],
    title: "Useiden PDF:ien yhdistäminen yhdeksi — milloin se on järkevää",
    description: "Laskujen, skannausten ja liitteiden yhdistäminen — sivujärjestys, laatu ja yksityisyys.",
    sections: [
      {
        paragraphs: [
          "PDF:ien yhdistäminen on päivittäistä toimistotyötä: lasku + sopimus + henkilöllisyystodistuksen skannaus yhdessä liitteessä. Toolando.tech yhdistää tiedostot valitsemassasi järjestyksessä.",
          "PDF säilyttää vektoritekstin ja bitmap-skannaukset — yhdistäminen ei heikennä skannausresoluutiota, jos lähteitä ei ole ylipakattu.",
        ],
      },
      {
        title: "Ennen lähettämistä",
        paragraphs: [
          "Järjestä tiedostot loogisesti (kansi → sisältö → liitteet).",
          "Poista päällekkäiset sivut skannauksista.",
          "Jos vastaanottaja käyttää puhelinta, tähtää ≤10–15 MB:een tai jaa pilvilinkillä.",
        ],
      },
      {
        title: "Yksityisyys",
        paragraphs: [
          "Käsittele liike- ja henkilökohtaisia dokumentteja luottamuksellisina. Toolando poistaa tiedostot käsittelyn jälkeen; noudata silti yrityksen käytäntöjä arkaluonteiselle datalle.",
        ],
      },
    ],
  },
  "mortgage-loan-calculator-guide": {
    ...guidesEn["mortgage-loan-calculator-guide"],
    title: "Lainalaskuri — erä, korot ja mitä seurata",
    description: "Annuiteetti, maksut ja vakuutukset — miten lukea asuntolainalaskurin tulos.",
    sections: [
      {
        paragraphs: [
          "Toolandon lainalaskuri laskee annuiteettierän: kiinteä kuukausierä pääomasta ja koroista. Pidempi laina-aika laskee erää — mutta nostaa kokonaiskorkokustannuksia.",
          "Käsittele tätä lähtökohtana pankkikeskusteluun, ei tarjouksena. Todellinen erä riippuu viitekorosta, marginaalista, maksuista, henkivakuutuksesta ja käsirahasta.",
        ],
      },
      {
        title: "Mitä lisätä laskurin ulkopuolelta",
        paragraphs: [
          "Perustamismaksut ja ennenaikaisen takaisinmaksun maksu (jos sopimuksessa).",
          "Kiinteistö- ja henkivakuutus — pankki usein vaatii.",
          "Notaari- ja varainsiirtovero asunnon oston yhteydessä.",
        ],
      },
    ],
  },
  "mp3-vs-wav": {
    ...guidesEn["mp3-vs-wav"],
    title: "MP3 vs WAV — milloin äänen kannattaa muuntaa?",
    description: "MP3 vs WAV vertailussa: häviöllinen vs häviötön pakkaus, tiedostokoko, DAW-muokkaus ja oikea formaatin valinta.",
    sections: [
      {
        paragraphs: [
          "MP3 käyttää häviöllistä pakkausta — tiedostot ovat pieniä, mutta osa äänidatasta katoaa pysyvästi. WAV säilyttää täyden laadun (häviötön tai pakkaamaton), mutta tiedostot voivat olla 10× suurempia kuin MP3.",
          "Käytännössä: kuuntelu puhelimella → MP3 riittää. Podcastin editointi Audacityssä tai miksaus FL Studiossa → työskentele WAV- tai FLAC-muodossa.",
        ],
      },
      {
        title: "Milloin muuntaa MP3 → WAV",
        paragraphs: [
          "Kun alusta tai sovellus vaatii häviötöntä formaattia jatkomuokkaukseen.",
          "Kun suunnittelet useita leikkauksia, efektejä ja masterointia — jokainen MP3-käsittely heikentää laatua.",
          "Huom: MP3 → WAV ei palauta menetettyä laatua, mutta estää lisäheikkenemisen muokkauksen aikana.",
        ],
      },
      {
        title: "Milloin muuntaa WAV → MP3",
        paragraphs: [
          "Tallenteen lähettäminen sähköpostilla tai chatissa — pienempi tiedosto = nopeampi siirto.",
          "Podcastin tai musiikin julkaisu kuuntelua varten, ei muokkausta.",
          "Levytilan säästäminen suuressa äänikirjastossa.",
        ],
      },
    ],
  },
  "online-file-security": {
    ...guidesEn["online-file-security"],
    title: "Tiedostoturvallisuus verkkotyökaluissa",
    description: "Miten Toolando.tech käsittelee tiedostoja, milloin työkalut toimivat paikallisesti selaimessa ja yksityisyys.",
    sections: [
      {
        paragraphs: [
          "Tiedostojen lataaminen verkkotyökaluihin herättää luonnollisia huolia. Toolando.techissä tiedostoja käytetään vain pyytämääsi toimintoon — muunnokseen, pakkaamiseen tai esikatseluun.",
          "Työn valmistuttua tiedostot poistetaan palvelimelta. Jotkut työkalut (yleisavaaja) toimivat kokonaan selaimessasi — tiedosto ei koskaan poistu tietokoneeltasi. Yhteys on salattu (HTTPS).",
        ],
      },
    ],
  },
  "pdf-to-jpg": {
    ...guidesEn["pdf-to-jpg"],
    title: "Näin muunnat PDF:n JPG:ksi tulostusta ja verkkoa varten",
    description: "Milloin PDF-sivut kannattaa viedä JPG:nä, mikä resoluutio valitaan ja milloin PNG on parempi.",
    sections: [
      {
        paragraphs: [
          "PDF säilyttää sivun asettelun. Joskus tarvitset yksittäisiä sivuja kuvina — verkkosivulle, PowerPointiin tai yhden sivun tulostukseen.",
          "Toolando.techin PDF → JPG -muunnin renderöi jokaisen sivun erilliseksi JPG:ksi. Tiedostoja ei koskaan tallenneta — ne poistetaan heti muunnoksen jälkeen.",
        ],
      },
      {
        title: "JPG vai PNG PDF:stä?",
        paragraphs: [
          "JPG — pienemmät tiedostot, ihanteellinen valokuville ja dokumenteille ilman läpinäkyvyyttä.",
          "PNG — häviötön ja läpinäkyvyyden tuki; parempi tekstiä ja teräviä reunoja sisältävälle grafiikalle.",
        ],
      },
    ],
  },
  "pdf-vs-docx": {
    ...guidesEn["pdf-vs-docx"],
    title: "PDF vs DOCX — kumpi formaatti milloin?",
    description: "PDF:n ja DOCX:n erot: muokkaus, tulostus, arkistointi ja milloin muuntaa kumpaan suuntaan.",
    sections: [
      {
        paragraphs: [
          "DOCX (Word) on tekstin muokkausta varten — sisältö, tyylit, otsikot. PDF lukitsee asettelun — identtinen kaikilla laitteilla, ihanteellinen laskuille, sopimuksille ja CV:lle.",
          "Muunna DOCX → PDF ennen \"vain luettavaksi\" -lähettämistä. Muunna PDF → DOCX vain kun tekstiä pitää muokata — asettelu voi rikkoutua. Arkistointiin ja tulostukseen valitse aina PDF.",
        ],
      },
    ],
  },
  "png-vs-jpg-photos-and-graphics": {
    ...guidesEn["png-vs-jpg-photos-and-graphics"],
    title: "PNG vs JPG — valokuvat vs tekstiä sisältävä grafiikka",
    description: "Käytännön valinnat: valokuvat, kuvakaappaukset, läpinäkyvät logot ja tulostus.",
    sections: [
      {
        paragraphs: [
          "PNG ja JPG ovat kaksi sekoitetuinta formaattia. JPG pakkaa valokuvat hyvin — taivas, iho, maisemat — mutta tuhoaa terävät reunat ja tekstin. PNG säilyttää jokaisen pikselin tarkasti, mukaan lukien läpinäkyvyys (alpha), mutta tiedostot ovat usein 5–10× suurempia kuin JPG samalla resoluutiolla.",
          "Toolando.tech-testeissä käyttämäni sääntö: galleria- tai somekuva → JPG (tai WebP JPG-varalla). Kuvake, logo, kaavio, UI-kuvakaappaus → PNG. Sekoitettu kuva + teksti (esim. kansi) → usein PNG tai häviötön WebP.",
        ],
      },
      {
        title: "Milloin valita JPG",
        paragraphs: [
          "Kamera- tai puhelinvalokuvat ilman läpinäkyvyyttä.",
          "Tuotepikkukuvat kun tausta on yksivärinen etkä tarvitse alpha-kanavaa.",
          "Sähköpostiliitteet — JPG-laatu 80–85 on yleensä hyvä kompromissi.",
          "Kotitulostus — monet liikkeet hyväksyvät korkearesoluutioisen JPG:n (300 DPI vastaava).",
        ],
      },
      {
        title: "Milloin valita PNG",
        paragraphs: [
          "Verkkosivun logo läpinäkyvällä taustalla — JPG täyttää aina valkoisella tai mustalla.",
          "UI:n, kaavioiden, koodin kuvakaappaukset — teksti pysyy terävänä.",
          "Litteä grafiikka vähällä värillä (infografiikka, sovelluskuvakkeet).",
          "Kun suunnittelet jatkomuokkausta kerroksittain — häviötön PNG ei lisää artefakteja jokaisella tallennuksella (toisin kuin toistuva JPG).",
        ],
      },
      {
        title: "Yleiset virheet",
        paragraphs: [
          "Logon tallentaminen JPG:nä — rosoiset reunat eikä läpinäkyvyyttä.",
          "4000×3000-kuvan tallentaminen PNG:nä \"laadun vuoksi\" — turha 15 MB 2 MB JPG:n sijaan.",
          "PNG → JPG → PNG -silmukat — jokainen JPG-kierros heikentää laatua; pidä master PNG:nä.",
        ],
      },
    ],
  },
  "podcast-export-mp3-aac-settings": {
    ...guidesEn["podcast-export-mp3-aac-settings"],
    title: "Podcast-vienti — MP3 vai AAC ja mikä bittinopeus",
    description: "Asetukset Audacity-, Reaper- tai puhelintallennuksen jälkeen: mono, 44,1 kHz, järkevä pakkaus.",
    sections: [
      {
        paragraphs: [
          "Podcast on pääasiassa puhetta — et tarvitse stereo 320 kbps kuten studiomusiikissa. Useimmat alustat (Spotify, Apple Podcasts, RSS-isännät) uudelleenkoodaavat lataukset joka tapauksessa. Lähetä silti kunnollinen master: mono tai stereo, 44,1 tai 48 kHz, MP3 128–192 kbps tai AAC/M4A 128 kbps.",
          "Tallennettu WAV:na tai FLAC:na? Lopullinen vienti on lähes aina MP3 tai AAC — testasin WAV → MP3 Toolando.techissä 30–60 minuutin jaksoilla; ~30 MB WAV putoaa ~28 MB:een 128 kbps stereolla (mono puhe voi olla ~15 MB).",
        ],
      },
      {
        title: "Suositellut asetukset",
        paragraphs: [
          "Solo / yhden äänen haastattelu: mono, MP3 96–128 kbps.",
          "Kaksi ääntä eri raidoilla: stereo 128 kbps.",
          "Musiikki intro/outro stereona, loput monona — vie kaikki stereo 128 kbps yksinkertaisuuden vuoksi.",
          "Vältä 64 kbps — kova s-kirjain ja taustakohina halvoilla mikrofoneilla.",
        ],
      },
      {
        title: "MP3 vs AAC (M4A)",
        paragraphs: [
          "AAC samalla bittinopeudella voittaa yleensä MP3:n — Apple suosii M4A:ta.",
          "MP3:lla laajin yhteensopivuus vanhoissa soittimissa ja autoissa.",
          "Älä lataa raakaa WAV:ia podcast-isännille — lataus kestää ikuisuuden.",
        ],
      },
    ],
  },
  "prepare-images-for-web": {
    ...guidesEn["prepare-images-for-web"],
    title: "Kuvien valmistelu verkkoa varten (JPG, WebP, AVIF)",
    description: "Resoluutio, pakkaus ja formaatti — nopeampi sivusto ilman näkyvää laadun heikkenemistä.",
    sections: [
      {
        paragraphs: [
          "Valtavat kamerakuvat (4000×3000 px) hidastavat jokaista sivua. Ennen latausta blogiin tai kauppaan, muuta koko todelliseen näyttökokoon — esim. 1600 px leveys hero-bannerille.",
          "JPG on edelleen turvallinen yleisvalinta. WebP ja AVIF tuottavat pienempiä tiedostoja samalla visuaalisella laadulla — käytä niitä moderneissa pinossa <picture>-varalla vanhoille selaimille.",
        ],
      },
      {
        title: "Milloin PNG JPG:n sijaan",
        paragraphs: [
          "Logot, kuvakkeet ja UI-kuvakaappaukset — PNG tai häviötön WebP säilyttää terävät reunat.",
          "Tuotekuvat valkoisella taustalla pakataan usein hyvin JPG-laadulla 80–85.",
          "Vältä saman bannerin tallentamista JPG:nä toistuvasti — jokainen kierros lisää artefakteja.",
        ],
      },
      {
        title: "Tarkistuslista ennen julkaisua",
        paragraphs: [
          "1) Muuta koko kohdeleveyteen px:nä. 2) Valitse formaatti (JPG/WebP/AVIF). 3) Tarkista tiedostokoko (<200 KB pikkukuvat, <500 KB isot blogikuvat). 4) Aja PageSpeed Insights ja vertaa LCP ennen/jälkeen.",
        ],
      },
    ],
  },
  "remove-exif-privacy-guide": {
    ...guidesEn["remove-exif-privacy-guide"],
    title: "EXIF kuvissa — mitä poistaa ennen julkaisua",
    description: "GPS, kameramalli ja päivämäärä EXIF-metadatassa — yksityisyysriskit ja poisto.",
    sections: [
      {
        paragraphs: [
          "EXIF on piilotettua metadataa JPEG-, PNG- tai HEIC-tiedostoissa: GPS-sijainti, puhelinmalli, suunta, joskus esikatselukuva. Someverkot poistavat sen usein, mutta oma sivustosi, uutiskirje tai sähköpostiliite eivät välttämättä.",
          "Ennen lasten, kodin sisustuksen tai pöydällä olevien dokumenttien kuvien julkaisua poista EXIF erityistyökalulla — Toolandossa käsittely tapahtuu palvelimella eikä tiedosto mene ulkoiseen tekoälypilveen.",
        ],
      },
      {
        title: "Mitä jää EXIF-poiston jälkeen",
        paragraphs: [
          "Kuvan pikselit pysyvät muuttumattomina. Vain metadata poistetaan — resoluutio ei muutu.",
          "EXIF-puhdistuksen jälkeen voit silti pakata tiedoston tai lisätä vesileiman ennen portfoliojulkaisua.",
        ],
      },
    ],
  },
  "split-pdf-pages-guide": {
    ...guidesEn["split-pdf-pages-guide"],
    title: "PDF:n jakaminen erillisiksi sivuiksi verkossa",
    description: "Milloin jakaa PDF:itä, miten valita sivualueet ja mitä tehdä ZIP-tuloksella.",
    sections: [
      {
        paragraphs: [
          "PDF:n jakaminen on yleistä monisivuisen sopimuksen tai laskun skannauksen jälkeen — saatat joutua lähettämään yhden sivun sähköpostilla tai liittämään katkelman muualle.",
          "Toolando.techissä voit viedä jokaisen sivun erikseen tai määrittää alueen (esim. 1-3,5). Tulos on ZIP PDF-tiedostoista, kukin säilyttää alkuperäisen vektori- tai skannauslaadun.",
        ],
      },
      {
        title: "Milloin jakaa vs yhdistää",
        paragraphs: [
          "Jaa — kun vastaanottaja tarvitsee vain katkelman (allekirjoitussivu, liite, kansi).",
          "Yhdistä — kun kokoat skannaukset yhdeksi arkistoksi tai lähetykseksi.",
          "Jaon jälkeen harkitse sivunumerointia tai isojen skannausten pakkaamista.",
        ],
      },
    ],
  },
  "spreadsheet-csv-json-guide": {
    ...guidesEn["spreadsheet-csv-json-guide"],
    title: "CSV, JSON ja Excel — datan siirtäminen taulukoiden ja API:en välillä",
    description: "Milloin valita CSV vs JSON ja kuinka välttää rikkinäiset desimaalit ja koodaus.",
    sections: [
      {
        paragraphs: [
          "CSV on pelkkää tekstiä — avautuu Excelissä, Google Sheetsissä ja BI-työkaluissa. JSON käsittelee sisäkkäisiä rakenteita (API:t, konfiguraatiot). XLSX lisää solutyyppejä ja useita arkkia.",
          "Tyypillinen kulku: API-vienti JSON:ina → JSON CSV:ksi → analyysi Excelissä. Toisin päin: asiakaslista CSV → JSON → REST API.",
        ],
      },
      {
        title: "Koodaus ja Excel",
        paragraphs: [
          "Käytä UTF-8 CSV:tä ei-ASCII-merkeille. Jos Excel vääristää tekstiä, tuo Data → Tekstitiedostosta ja valitse UTF-8.",
          "CSV-erottimet vaihtelevat kielen mukaan (pilkku vs puolipiste). TSV (sarkain) on turvallisempi, kun kuvauksissa on pilkkuja.",
        ],
      },
      {
        title: "Validoi muunnoksen jälkeen",
        paragraphs: [
          "Vertaa rivimääriä ennen ja jälkeen.",
          "JSON:ssa tarkista avaimet ja tyypit — yksi puuttuva lainausmerkki rikkoo koko tiedoston.",
        ],
      },
    ],
  },
  "svg-vs-png-logos-and-icons": {
    ...guidesEn["svg-vs-png-logos-and-icons"],
    title: "SVG vs PNG — logot ja kuvakkeet verkkoon",
    description: "Vektori vs rasteri: milloin toimittaa SVG ja milloin @2x PNG riittää.",
    sections: [
      {
        paragraphs: [
          "SVG on matemaattisesti kuvattu vektorigrafiikka — skaalautuu kaikilla näytöillä ilman pikselöitymistä. PNG on kiinteäresoluutioinen bittikartta; retinanäytöllä tarvitset usein 2×-version. Verkkosivuilla logojen ja yksinkertaisten kuvakkeiden pitäisi lähes aina olla SVG (tai ikonifontti), ellei tiedosto sisällä upotettua valokuvaa.",
          "Toolando.techin SVG → PNG -muunnin auttaa, kun painotalo haluaa PNG 300 DPI tai järjestelmä hylkää SVG:n.",
        ],
      },
      {
        title: "SVG:n edut",
        paragraphs: [
          "Yksi tiedosto mobiiliin ja työpöydälle — vähemmän CSS:ää, ei srcsetiä.",
          "Helppo värimuutos CSS fill:llä yksinkertaisissa kuvakkeissa.",
          "Paremmat Lighthouse-tulokset kuin raskaat PNG-herot.",
        ],
      },
      {
        title: "Milloin PNG SVG:n sijaan",
        paragraphs: [
          "Logo gradienteilla, varjoilla tai efekteillä, jotka vienti vektorista huonosti.",
          "Open Graph / some-esikatselut — alustat rasteroivat joka tapauksessa.",
          "Työpöytäsovellukset ilman SVG-moottoria.",
          "Vie @2x PNG (esim. 512×512) varaksi <img>-tagiin inline SVG:n rinnalle.",
        ],
      },
    ],
  },
  "tiff-and-png-for-document-scans": {
    ...guidesEn["tiff-and-png-for-document-scans"],
    title: "Dokumenttiskannaukset — TIFF, PNG vai JPG",
    description: "Laskut ja sopimukset: häviötön tallennus, monisivuisuus ja milloin PDF riittää.",
    sections: [
      {
        paragraphs: [
          "Laskun tai sopimuksen skannaus eroaa lomakuvasta. Teksti ja leimat vaativat teräviä reunoja — aggressiivinen JPG sumeuttaa kirjaimia. TIFF (usein LZW häviötön) ja PNG ovat turvallisempia arkistoon. Lähetykseen ja OCR:ään päädyt usein PDF:ään tai kohtuulaatuiseen JPG:hen.",
          "Monisivuinen TIFF voi olla yksi tiedosto useilla kerroksilla — kaikki katseluohjelmat eivät tue sitä; toimistolle ja asiakkaalle monisivuinen PDF on selkeämpi (yhdistä PDF Toolando.techissä).",
        ],
      },
      {
        title: "Suositeltu työnkulku",
        paragraphs: [
          "Skanneri → PNG tai TIFF sivua kohti (300 DPI tulostukseen, 150 DPI esikatseluun).",
          "Korjaa kierto/rajaus editorissa.",
          "Yhdistä sivut yhdeksi PDF:ksi toimitusta varten.",
          "Valinnainen JPG-laatu 90 vain jos vastaanottaja ei hyväksy PDF:ää.",
        ],
      },
      {
        title: "Mitä välttää",
        paragraphs: [
          "JPG-laatu 60 laskulla — summat voivat muuttua lukukelvottomiksi.",
          "Toistuvat TIFF → JPG → TIFF -syklit.",
          "Väriskannaus 600 DPI \"varmuuden vuoksi\" — gigatavuja ilman hyötyä A4-tekstille.",
        ],
      },
    ],
  },
  "toolando-editorial-standards": {
    ...guidesEn["toolando-editorial-standards"],
    title: "Toolando.techin toimitukselliset standardit — miten oppaat kirjoitetaan",
    description: "Miten artikkelit, muunnintestit ja formaattien tietosanakirja tuotetaan — läpinäkyvyys lukijoille ja arvioijille.",
    sections: [
      {
        paragraphs: [
          "Toolando.techin rakentaa yksin Szymon Badyl (Badyl-Tech). Oppaita ei massatuoteta eikä kopioida Wikipediasta — ne perustuvat oikeisiin muunnostesteihin.",
          "Jokaisella artikkelilla on julkaisu- ja päivityspäivä. Kun alustavaatimukset tai kirjastot muuttuvat, tarkistan tekstin.",
        ],
      },
      {
        title: "Mitä testaan",
        paragraphs: [
          "Ääni-/videomuuntimet: aika, tulosteen koko, toisto VLC:ssä ja puhelimella.",
          "Kuvat: visuaalinen ennen/jälkeen, PNG-läpinäkyvyys, WebP vs JPG -koko.",
          "Dokumentit: asettelu PDF ↔ DOCX -muunnoksen jälkeen, koodaus CSV/JSON:ssa.",
        ],
      },
      {
        title: "Mitä en lupaa",
        paragraphs: [
          "Ei \"100 % laatua\" häviöllinen → häviöllinen -muunnoksessa.",
          "Ei muiden YouTube/TikTok-videoiden latausta — vain lailliset toiminnot omilla tiedostoillasi.",
          "Google-mainoksia voi näkyä, mutta toimituksellinen sisältö kirjoitetaan riippumatta mainostajista.",
        ],
      },
    ],
  },
  "video-compress-before-sharing": {
    ...guidesEn["video-compress-before-sharing"],
    title: "Pienennä video ennen sähköpostia tai WhatsAppia",
    description: "MP4, resoluutio, bittinopeus — käytännön kokorajat ja konttimuunnos.",
    sections: [
      {
        paragraphs: [
          "Puhelintallenteet MOV/MKV-muodossa voivat olla satoja MB. Monet postilaatikot estävät liitteet >25 MB. Ratkaisu: muunna MP4:ksi (H.264 + AAC) ja laske resoluutiota tarvittaessa.",
          "720p riittää usein puhelimen esikatseluun; pidä 1080p TV-katselua varten.",
        ],
      },
      {
        title: "Vaiheet ennen lähettämistä",
        paragraphs: [
          "1) Muunna MOV/MKV → MP4. 2) Tarkista tiedostokoko. 3) Leikkaa tarpeeton intro/outro editorissa jos edelleen liian suuri. 4) Käytä pilvilinkkiä jos >25 MB.",
        ],
      },
    ],
  },
  "video-social-media": {
    ...guidesEn["video-social-media"],
    title: "Video sosiaaliseen mediaan — MP4, resoluutio ja bittinopeus",
    description: "Videon valmistelu Instagramiin, TikTokiin, YouTubeen: MP4-formaatti, H.264, 1080p-resoluutio.",
    sections: [
      {
        paragraphs: [
          "Instagram, TikTok, YouTube ja Facebook suosivat MP4:ää H.264-videolla ja AAC-äänellä. Muunna MOV, AVI tai MKV MP4:ksi ennen julkaisua välttääksesi latausvirheet.",
          "1080p (1920×1080) riittää useimmille alustoille. Korkeampi bittinopeus = parempi laatu mutta suurempi tiedosto. Katso formaattien tietosanakirjasta MP4-, WebM- ja MOV-tiedot.",
        ],
      },
    ],
  },
  "webp-avif-images": {
    ...guidesEn["webp-avif-images"],
    title: "WebP ja AVIF — modernit kuvamuodot verkkosivuille",
    description: "WebP ja AVIF vs JPG/PNG: pakkaus, selaintuki ja PageSpeed-optimointi.",
    sections: [
      {
        paragraphs: [
          "JPG ja PNG ovat hallinneet verkkoa vuosia, mutta WebP tuottaa tiedostoja 25–35 % pienempiä kuin JPG samalla visuaalisella laadulla. AVIF menee pidemmälle — tiedostot voivat olla puolet WebP:n koosta.",
          "Kaikki modernit selaimet tukevat WebP:tä. AVIF:llä on hieman heikompi tuki vanhemmissa Safari-versioissa.",
        ],
      },
      {
        title: "Käyttöönotto",
        paragraphs: [
          "Muunna JPG → WebP tuotekuville ja bannereille — nopeuttaa sivun latautumista.",
          "Pidä JPG varavaihtoehtona vanhoille selaimille (HTML <picture>-tagi).",
          "Läpinäkyvät logot: PNG → WebP JPG:n sijaan.",
        ],
      },
    ],
  },
  "when-not-to-convert-files": {
    ...guidesEn["when-not-to-convert-files"],
    title: "Milloin EI kannata muuntaa tiedostoa — 7 tilannetta, jotka heikentävät laatua",
    description: "Ohita tarpeettomat muunnokset: säilytä alkuperäiset, häviöttömät arkistot ja varmuuskopioi ennen kokeiluja.",
    sections: [
      {
        paragraphs: [
          "Verkkomuuntimet ovat käteviä, mutta jokainen toiminto ei auta. Joskus pidä alkuperäinen tai käytä häviöttömiä arkistoja (ZIP, FLAC).",
          "Sääntö: älä odota ihmettä häviöllinen → häviötön -muunnoksessa — MP3 → WAV ei palauta menetettyä dataa.",
        ],
      },
      {
        title: "Jätä sellaisenaan",
        paragraphs: [
          "Sinulla on jo PNG läpinäkyvyydellä — älä muunna JPG:ksi ilman syytä.",
          "Suunnitteluprojektit — pidä kerroslähteet (PSD, SVG); vie JPG vasta lopussa.",
          "Studio WAV/FLAC — älä litistä MP3:ksi ennen lopullista miksausta.",
          "Digitaalisesti allekirjoitettu PDF — muunnos voi mitätöidä allekirjoituksen.",
        ],
      },
      {
        title: "Ennen Muunna-napsautusta",
        paragraphs: [
          "Pidä kopio alkuperäisestä.",
          "Tarkista hyväksyykö kohdealusta jo lähdeformaattisi.",
          "Lue formaattien vertailu Toolando-tietosanakirjasta ohittaaksesi turhan vaiheen.",
        ],
      },
    ],
  },
  "zip-7z-rar-when-to-use": {
    ...guidesEn["zip-7z-rar-when-to-use"],
    title: "ZIP, 7z ja RAR — minkä arkiston lähettää",
    description: "Koko, yhteensopivuus ja salaus — milloin ZIP riittää ja milloin 7z tai RAR auttaa.",
    sections: [
      {
        paragraphs: [
          "Arkisto pakkaa monta tiedostoa yhdeksi — kätevä sähköpostiin, pilveen ja kansion varmuuskopiointiin. ZIP on yleisstandardi: avautuu Windowsilla, macOS:llä ja Linuxilla ilman lisäohjelmistoa. 7z antaa yleensä pienemmän tuloksen, mutta vastaanottaja voi tarvita 7-Zipin. RAR esiintyy vanhoissa työnkuluissa; RAR:n luonti verkossa on lisenssirajoitteinen — useammin muunnat RAR → ZIP kuin päinvastoin.",
        ],
      },
      {
        title: "Milloin ZIP",
        paragraphs: [
          "Lähetys asiakkaille tai viranomaisille — pienin \"ei aukea\" -riski.",
          "Koodin, toimistodokumenttien, JPG-kuvasarjan arkistointi.",
          "Järjestelmät, jotka hyväksyvät vain .zip-lataukset.",
        ],
      },
      {
        title: "Milloin 7z",
        paragraphs: [
          "Isot pelikansiot, videoprojektit, varmuuskopio ennen ulkoista levyä — pienempi tiedosto = nopeampi lataus.",
          "Kun vastaanottaja on tekninen ja käyttää 7-Zipiä.",
          "ZIP → 7z -muunnos kannattaa kerran — älä pakkaa samoja dataa uudelleen silmukassa.",
        ],
      },
      {
        title: "Turvallisuus",
        paragraphs: [
          "Arkistosalasana estää satunnaisen avaamisen, mutta ei korvaa päästä päähän -salausta arkaluonteisille dokumenteille.",
          "Älä pura tuntemattomista lähteistä tulevia arkistoja ilman virustarkistusta.",
          "Toolando käsittelee arkistoja vain konttimuunnoksen ajan — sisällön pitää olla laillista ja sinun.",
        ],
      },
    ],
  },
}
