import type { LegalDocumentData } from "@/components/legal-document"

export const termsFi: LegalDocumentData = {
  eyebrow: "Käyttöehdot",
  title: "Toolando.techin käyttöehdot",
  intro:
    "Nämä käyttöehdot säätelevät Toolando.tech-verkkosivuston käyttöä osoitteessa toolando.tech. Käyttämällä palvelua — mukaan lukien sivujen selaaminen, tiedostojen lataaminen, tilin luominen tai Premium-tilauksen hankkiminen — hyväksyt nämä ehdot kokonaisuudessaan. Jos et hyväksy ehtoja, älä käytä palvelua.",
  lastUpdated: "Viimeksi päivitetty: 23. heinäkuuta 2026",
  sections: [
    {
      title: "§1. Yleiset määräykset",
      paragraphs: [
        "1.1. Toolando.tech-palvelun (\"Palvelu\") omistaja ja ylläpitäjä on Szymon (\"Palveluntarjoaja\").",
        "1.2. Yhteystieto: {{email}}. Muodollista kirjeenvaihtoa vaativissa asioissa Palveluntarjoaja antaa tunnistetiedot sovellettavan lainsäädännön mukaisesti perustellusta pyynnöstä.",
        "1.3. Palvelu tarjoaa selainpohjaisia verkkotyökaluja, mukaan lukien tiedostomuuntimet, erikoistyökalut, tekoälypohjaiset työkalut ja tiedotusaineistoa (oppaat, UKK).",
        "1.4. Nämä ehdot tarjotaan maksutta palvelussa muodossa, joka mahdollistaa lataamisen, tallentamisen ja tulostamisen.",
      ],
    },
    {
      title: "§2. Määritelmät",
      definitions: [
        {
          term: "Käyttäjä",
          description:
            "Jokainen luonnollinen tai oikeushenkilö, joka käyttää palvelua, mukaan lukien vieraat (ilman tiliä) ja rekisteröityneet käyttäjät.",
        },
        {
          term: "Tili",
          description:
            "Yksilöllinen käyttäjäprofiili, joka luodaan rekisteröitymistä vaativien toimintojen, mukaan lukien Premium-tilausten, käyttöä varten.",
        },
        {
          term: "Ilmaistyökalut",
          description:
            "Palvelun toiminnot, jotka ovat saatavilla maksutta ja ilman tilin luomista, ellei näissä ehdoissa toisin määrätä.",
        },
        {
          term: "Premium",
          description:
            "Maksullinen tilaus, joka tarjoaa pääsyn laajennettuihin toimintoihin, mukaan lukien valitut tekoälytyökalut ja korkeammat rajat.",
        },
        {
          term: "Käyttäjän tiedosto",
          description:
            "Mikä tahansa tiedosto, tekstisisältö tai data, jonka käyttäjä lataa palvelun työkaluun käsiteltäväksi.",
        },
        {
          term: "Luotu sisältö",
          description:
            "Palvelun työkalujen tuottamat tulokset, mukaan lukien muunnetut tiedostot, tekstit tai tekoälytyökalujen luomat kuvat.",
        },
      ],
    },
    {
      title: "§3. Tekniset vaatimukset ja ikä",
      paragraphs: [
        "3.1. Palvelun käyttö edellyttää laitetta, jossa on internetyhteys, ajantasainen verkkoselain JavaScript-tuella ja — joissakin työkaluissa — mahdollisuus ladata tiedostoja laitteellesi.",
        "3.2. Palvelu on tarkoitettu vähintään 16-vuotiaille henkilöille. Alle 16-vuotiaat käyttäjät voivat käyttää palvelua vain vanhemman tai huoltajan suostumuksella ja valvonnalla.",
        "3.3. Käyttäjä vakuuttaa olevansa täysi-ikäinen tai käyttävänsä palvelua huoltajan suostumuksella.",
      ],
    },
    {
      title: "§4. Palvelun laajuus",
      paragraphs: [
        "4.1. Palvelu tarjotaan \"sellaisenaan\". Palveluntarjoaja pyrkii siihen, että työkalut toimivat oikein, mutta ei takaa keskeytymätöntä saatavuutta, yhteensopivuutta kaikkien tiedostomuotojen kanssa tai tiettyä tulosta.",
        "4.2. Jotkut toiminnot suoritetaan paikallisesti käyttäjän selaimessa (esim. yleinen tiedostonavaaja). Jotkut vaativat väliaikaista palvelinkäsittelyä — yksityiskohdat ovat tietosuojakäytännössä ja \"Näin se toimii\" -sivulla.",
        "4.3. Palveluntarjoaja voi lisätä, muuttaa, rajoittaa tai poistaa työkaluja, toimintoja tai tiedostomuotoja, mukaan lukien muuntimien merkitseminen \"tulossa pian\" tai tilapäisesti poissa käytöstä.",
        "4.4. Oppaiden, UKK:n ja työkalukuvausten tiedot ovat vain informatiivisia eivätkä muodosta ammatillista oikeudellista, lääketieteellistä, taloudellista tai teknistä neuvontaa.",
      ],
    },
    {
      title: "§5. Käyttäjätili",
      paragraphs: [
        "5.1. Tilin luominen edellyttää voimassa olevaa sähköpostiosoitetta ja salasanaa. Käyttäjä sitoutuu antamaan oikeat tiedot ja pitämään ne ajan tasalla.",
        "5.2. Käyttäjä on vastuussa kirjautumistietojensa luottamuksellisuudesta ja kaikesta tilillään tapahtuvasta toiminnasta. Epäillessäsi luvatonta pääsyä, ota välittömästi yhteyttä osoitteeseen {{email}}.",
        "5.3. Palveluntarjoaja voi estää tai poistaa tilin ehtojen rikkomisen, väärinkäytön epäilyn, palvelun turvallisuutta uhkaavien toimien tai viranomaismääräyksen perusteella, sovellettavan lain puitteissa.",
        "5.4. Käyttäjä voi milloin tahansa lopettaa tilinsä käytön. Tilin poistamista voi pyytää osoitteesta {{email}}.",
      ],
    },
    {
      title: "§6. Ilmaistyökalut ja Premium",
      paragraphs: [
        "6.1. Ilmaistyökalut ovat saatavilla maksutta. Palveluntarjoaja voi soveltaa teknisiä rajoja (esim. tiedostokoko, toimintojen määrä), jotka ilmoitetaan palvelun käyttöliittymässä.",
        "6.2. Premium on toistuva maksullinen tilaus laajennettuihin toimintoihin, mukaan lukien tekoälytyökalut. Ajankohtainen Premium-laajuus näytetään palvelussa ennen ostoa.",
        "6.3. Premium-maksut veloitetaan etukäteen kullekin laskutuskaudelle (esim. kuukausittain) Stripen kautta. Hinnat näytetään kassalla ilmoitetussa valuutassa ja sisältävät verot lain vaatiessa.",
        "6.4. Premium voidaan peruuttaa milloin tahansa tilin tilausten hallintapaneelin (Stripe Customer Portal) kautta. Peruutus tarkoittaa, ettei tilausta uusita nykyisen maksetun kauden jälkeen — Premium-pääsy jatkuu kyseisen kauden loppuun asti.",
        "6.5. Aloitetun ja maksetun tilauskauden maksuja ei palauteta, ellei pakottava kuluttajalainsäädäntö toisin määrää. Teknisistä häiriöistä, jotka estävät Premium-käytön pitkään, käyttäjä voi tehdä valituksen osoitteeseen {{email}}.",
        "6.6. Kuluttajilla voi olla 14 päivän peruutusoikeus etämyyntisopimuksissa, ellei Palveluntarjoaja ole käyttäjän nimenomaisella suostumuksella aloittanut Premium-toimitusta ennen peruutusajan päättymistä — sovellettavan EU-/puolalaisen kuluttajalainsäädännön mukaisesti. Premiumin käyttö ennen 14 päivän päättymistä voi merkitä suostumusta välittömään toimitukseen ja peruutusoikeuden menettämistä laissa sallitussa laajuudessa.",
      ],
    },
    {
      title: "§7. Käyttäjän tiedostot ja tietojen käsittely",
      paragraphs: [
        "7.1. Palvelun työkaluihin ladattuja tiedostoja käytetään yksinomaan käyttäjän pyytämän toiminnon (muunnos, pakkaus, esikatselu, sisällön luonti jne.) suorittamiseen.",
        "7.2. Palvelimella käsiteltyjä tiedostoja ei tallenneta toiminnon valmistuttua eikä käytetä muihin tarkoituksiin, mukaan lukien tekoälymallien koulutus, myynti tai luovutus kolmansille osapuolille.",
        "7.3. Käyttäjä on yksin vastuussa ladattujen tiedostojen sisällöstä, laillisuudesta, luottamuksellisuudesta ja oikeuksista.",
        "7.4. Henkilötietojen käsittelyä säätelee tietosuojakäytäntö osoitteessa /polityka-prywatnosci.",
      ],
    },
    {
      title: "§8. Sallittu ja kielletty käyttö",
      paragraphs: [
        "8.1. Käyttäjän on käytettävä palvelua laillisesti, näiden ehtojen ja hyvän tavan mukaisesti.",
        "8.2. Seuraava on erityisesti kielletty:",
      ],
      list: [
        "Laitonta sisältöä tai kolmannen osapuolen oikeuksia loukkaavan sisällön lataaminen, mukaan lukien tekijänoikeudet, immateriaalioikeudet, yksityisyydensuoja ja liikesalaisuudet;",
        "materiaalien käsittely, joita käyttäjällä ei ole oikeutta käyttää (esim. suojattu musiikki, elokuvat, ohjelmistot);",
        "palvelun käyttö sisällön lataamiseen, muuntamiseen tai levittämiseen suoratoistoalustoilta, sosiaalisesta mediasta tai muista lähteistä tavalla, joka rikkoo näiden alustojen ehtoja tai lakia;",
        "virusten, haittaohjelmien, hyökkäyscodejen tai palvelua tai muiden käyttäjien laitteita vahingoittavien tiedostojen lataaminen;",
        "automaattinen, massa- tai liiallinen käyttö (botit, scraperit, palvelimen ylikuormitus), mukaan lukien teknisten rajojen kiertäminen;",
        "yritys saada luvaton pääsy palvelun järjestelmiin, muiden käyttäjien tileihin tai Palveluntarjoajan infrastruktuuriin;",
        "toisen henkilön tai organisaation esittäminen tai virheellinen yhteyden esittäminen Palveluntarjoajaan;",
        "tekoälytyökalujen käyttö laittoman, syrjivän, harhaanjohtavan sisällön tai kolmannen osapuolen oikeuksia loukkaavan sisällön luomiseen.",
      ],
    },
    {
      title: "§9. Tekoälytyökalut (AI)",
      paragraphs: [
        "9.1. Tekoälytyökalut luovat sisältöä automaattisesti ulkoisten mallien avulla. Palveluntarjoaja ei takaa luodun sisällön tarkkuutta, täydellisyyttä, ajantasaisuutta tai sopivuutta tiettyyn tarkoitukseen.",
        "9.2. Tekoälyn luoma sisältö ei ole ammatillista neuvontaa (oikeudellista, lääketieteellistä, taloudellista, teknistä). Käyttäjien on tarkistettava tulokset ennen käyttöä.",
        "9.3. Käyttäjä on täysin vastuussa luodun sisällön käytöstä, mukaan lukien tekijänoikeusloukkaukset. Palveluntarjoaja ei vaadi omistusoikeutta käyttäjän tiedostoihin tai luotuun sisältöön, joka kuuluu käyttäjälle sovellettavan lain mukaan.",
        "9.4. Palveluntarjoaja voi asettaa päivittäisiä rajoja, moderointia tai tilapäisesti poistaa tekoälytyökalut väärinkäytön, infrastruktuurin ylikuormituksen tai tekoälytoimittajien vaatimusten vuoksi.",
      ],
    },
    {
      title: "§10. Äänen poiminta- ja lataustyökalut",
      paragraphs: [
        "10.1. Palvelu mahdollistaa ääniraitojen poiminnan käyttäjän lataamista videotiedostoista (esim. omat tallenteet, materiaalit, joihin käyttäjällä on oikeuksia).",
        "10.2. Palvelu ei ole tarkoitettu sisällön lataamiseen suoratoistopalveluista, VOD-alustoilta, sosiaalisesta mediasta tai muista lähteistä tavalla, joka rikkoo tekijänoikeuksia tai alustaehtoja. Käyttäjä vakuuttaa olevansa oikeutettu käsittelemään ladattuja materiaaleja.",
        "10.3. Palveluntarjoaja ei tarkista ladattujen tiedostojen lähdettä, mutta voi estää pääsyn oikeusloukkauksista tai vakavasta väärinkäytöstä ilmoitettua.",
      ],
    },
    {
      title: "§11. Mainonta",
      paragraphs: [
        "11.1. Palvelu voi näyttää mainontaa, mukaan lukien Google AdSense, ilmaistyökalujen ja kehityksen tukemiseksi.",
        "11.2. Mainontatoimittajat (mukaan lukien Google) voivat käyttää evästeitä ja vastaavia teknologioita tietosuojakäytännön ja omien käytäntöjensä mukaisesti. Käyttäjät voivat hallita evästesuostumuksia palvelun bannerin ja selaimen asetusten kautta.",
        "11.3. Mainossisältöä tarjoavat kolmannet osapuolet. Palveluntarjoaja ei vastaa mainossisällöstä tai mainostajien tuotteista/palveluista.",
      ],
    },
    {
      title: "§12. Tekijänoikeudet ja immateriaalioikeudet",
      paragraphs: [
        "12.1. Toolando.tech-nimi, logo, palvelun ulkoasu, tekstit, työkalukuvaukset, oppaat ja lähdekoodi ovat suojattuja. Kaupallinen kopiointi ilman Palveluntarjoajan suostumusta on kielletty.",
        "12.2. Käyttäjät säilyttävät oikeudet käyttäjän tiedostoihin. Lataaminen ei siirrä tekijänoikeuksia Palveluntarjoajalle.",
        "12.3. Käyttäjä myöntää Palveluntarjoajalle ei-yksinomaisen, maksuttoman lisenssin käyttäjän tiedostojen tekniseen käsittelyyn tarvittavan ajan yksinomaan pyydetyn toiminnon suorittamiseksi.",
        "12.4. Palvelun kopiointi, reverse engineering, dekompilointi tai automaattinen scraping ilman kirjallista suostumusta on kielletty.",
      ],
    },
    {
      title: "§13. Palveluntarjoajan vastuu",
      paragraphs: [
        "13.1. Palvelu tarjotaan ilman minkäänlaista takuuta laissa sallitussa laajuudessa.",
        "13.2. Palveluntarjoaja ei vastaa:",
      ],
      list: [
        "käyttäjän luodun tai muunnetun sisällön käytön seurauksista;",
        "tietojen menetyksestä käyttäjän toimien, käyttäjän laitteen vian tai force majeure -tilanteen vuoksi;",
        "palvelukatkoksista huollon, hosting-/pilvikatosten tai internetkatosten vuoksi;",
        "epäsuorista vahingoista, menetetystä voitosta, maineen tai tietojen menetyksestä laissa sallitussa laajuudessa;",
        "kolmansien osapuolten toimista (Stripe, Google, tekoälytoimittajat, hosting).",
      ],
    },
    {
      title: "§14. Force majeure",
      paragraphs: [
        "14.1. Palveluntarjoaja ei vastaa suorittamatta jättämisestä tai puutteellisesta suorittamisesta force majeure -tilanteen vuoksi, mukaan lukien kriittiset infrastruktuurikatkokset, luonnonkatastrofit, sota, työtaistelut, epidemiat, viranomaispäätökset tai massiiviset IT-hyökkäykset.",
      ],
    },
    {
      title: "§15. Valitukset",
      paragraphs: [
        "15.1. Valitukset palvelusta, Premium-tilauksista tai ehtojen rikkomisesta voidaan lähettää osoitteeseen {{email}}.",
        "15.2. Valituksessa tulisi kuvata ongelma, sen esiintymispäivä ja tiedot käyttäjän tunnistamiseksi (tilin sähköposti).",
        "15.3. Palveluntarjoaja vastaa 14 päivän kuluessa vastaanottamisesta, ellei erityissäännökset määrää toista määräaikaa.",
        "15.4. Kuluttajat voivat käyttää oikeudenkäynnin ulkopuolista riidanratkaisua, mukaan lukien EU:n ODR-alusta: https://ec.europa.eu/consumers/odr",
      ],
    },
    {
      title: "§16. Muutokset ehtoihin ja palveluun",
      paragraphs: [
        "16.1. Palveluntarjoaja voi muuttaa näitä ehtoja tärkeistä syistä, mukaan lukien lainsäädännön muutokset, palvelutoimintojen muutokset, uudet työkalut tai liiketoimintamallin muutokset.",
        "16.2. Rekisteröityneille käyttäjille ilmoitetaan olennaisista ehtomuutoksista vähintään 14 päivää etukäteen sähköpostitse tai palvelun kautta, ellei laki vaadi pidempää määräaikaa.",
        "16.3. Palvelun jatkuva käyttö muutosten voimaantulon jälkeen merkitsee hyväksymistä. Jos et hyväksy muutoksia, lopeta käyttö ja peru Premium ennen seuraavaa laskutuskausia.",
      ],
    },
    {
      title: "§17. Päätös määräykset",
      paragraphs: [
        "17.1. Asioihin, joita nämä ehdot eivät säätele, sovelletaan puolalaista lakia, mukaan lukien siviilioikeus ja kuluttajalainsäädäntö kuluttajille.",
        "17.2. Riidat ratkaistaan yleisten sääntöjen mukaisesti toimivaltaisissa tuomioistuimissa. Kuluttajille sovelletaan pakottavia kuluttajansuojasääntöjä toimivallasta.",
        "17.3. Jos jokin määräys on pätemätön, muut määräykset pysyvät voimassa. Pätemättömät määräykset korvataan sovellettavilla laillisilla säännöillä.",
        "17.4. Nämä ehdot tulevat voimaan palvelussa julkaisemisen yhteydessä. Ajankohtainen versio on aina saatavilla osoitteessa /regulamin.",
      ],
    },
  ],
  footerNote:
    "Kysymyksissä ehdoista, valituksista tai kuluttajaoikeuksista ota yhteyttä osoitteeseen {{email}}. Tietosuojakäytäntö on olennainen osa näitä ehtoja.",
}
