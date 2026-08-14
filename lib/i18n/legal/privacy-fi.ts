import type { LegalDocumentData } from "@/components/legal-document"

export const privacyFi: LegalDocumentData = {
  eyebrow: "Tietosuojakäytäntö",
  title: "Toolando.techin tietosuojakäytäntö",
  intro:
    "Tämä tietosuojakäytäntö kuvaa, mitä tietoja Toolando.tech-palvelussa käsitellään, mihin tarkoituksiin, millä oikeusperusteella ja mitä oikeuksia sinulla on. Käsittelen henkilötietoja asetuksen (EU) 2016/679 (GDPR) ja sovellettavan puolalaisen tietosuojalainsäädännön mukaisesti.",
  lastUpdated: "Viimeksi päivitetty: 23. heinäkuuta 2026",
  sections: [
    {
      title: "§1. Rekisterinpitäjä",
      paragraphs: [
        "1.1. Henkilötietojen käsittelystä vastaava rekisterinpitäjä (\"Rekisterinpitäjä\") on Szymon, Toolando.tech-palvelun omistaja, joka tarjoaa verkkopohjaisia työkalupalveluja.",
        "1.2. Tietosuojaan liittyvä yhteystieto: {{email}}.",
        "1.3. Rekisterinpitäjä ei ole nimennyt tietosuojavastaavaa, koska GDPR ei edellytä sitä tässä toiminnassa.",
      ],
    },
    {
      title: "§2. Mitä tietoja käsittelemme",
      paragraphs: ["2.1. Palvelun käytön mukaan käsittelemme seuraavia tietoluokkia:"],
      list: [
        "Tekniset ja käyttötiedot: IP-osoite, selaimen tyyppi ja versio, käyttöjärjestelmä, kieli, pyynnön päivämäärä ja kellonaika, vieraillut sivut, liikenteen lähde, evästeiden tunnisteet (suostumuksen jälkeen).",
        "Tilitiedot: sähköpostiosoite, salasana (hash), käyttäjätunnus, rekisteröitymispäivä, Premium-tila, Stripe-asiakastunnus (tarvittaessa).",
        "Maksutiedot: käsitellään Stripen toimesta — Rekisterinpitäjä ei tallenna täydellisiä maksukorttinumeroita.",
        "Viestintätiedot: sähköpostiosoite, viestin sisältö, yhteydenottopäivä — kun kirjoitat osoitteeseen {{email}} tai käytät yhteydenottolomaketta.",
        "Käyttäjän tiedostot: käsitellään vain väliaikaisesti työkalutoimintojen suorittamiseksi — ei tallenneta muunnoksen valmistuttua.",
      ],
    },
    {
      title: "§3. Tarkoitukset ja oikeusperusteet",
      paragraphs: ["3.1. Käsittelemme tietoja seuraaviin tarkoituksiin:"],
      definitions: [
        {
          term: "Palvelun tarjoaminen",
          description:
            "Tiedostomuunnos, työkalujen toiminta, tilinhallinta — oikeusperuste: GDPR art. 6(1)(b) (sopimus) tai (f) (oikeutettu etu: palvelun toiminta).",
        },
        {
          term: "Premium-tilaus",
          description:
            "Maksujen ja tilausten käsittely — oikeusperuste: GDPR art. 6(1)(b); kirjanpito: art. 6(1)(c) (lakisääteinen velvoite).",
        },
        {
          term: "Liikenneanalyysi",
          description:
            "Google Analytics — vain analytiikkaevästeiden suostumuksen jälkeen — oikeusperuste: GDPR art. 6(1)(a) (suostumus).",
        },
        {
          term: "Mainonta",
          description:
            "Google AdSense — vain mainontaevästeiden suostumuksen jälkeen — oikeusperuste: GDPR art. 6(1)(a) (suostumus).",
        },
        {
          term: "Turvallisuus",
          description:
            "Väärinkäytön ehkäisy, palvelinlokeja — oikeusperuste: GDPR art. 6(1)(f) (oikeutettu etu).",
        },
        {
          term: "Yhteydenotto ja valitukset",
          description:
            "Viestien vastaaminen — oikeusperuste: GDPR art. 6(1)(f) tai (b) (sopimukseen liittyvä).",
        },
      ],
    },
    {
      title: "§4. Evästeet ja vastaavat teknologiat",
      paragraphs: [
        "4.1. Palvelu käyttää evästeitä ja vastaavia teknologioita. Ensimmäisellä vierailulla näytämme suostumusbannerin, jossa voit hyväksyä kaikki evästeet tai rajoittua välttämättömiin.",
        "4.2. Evästetyypit:",
      ],
      list: [
        "Välttämättömät — tarvitaan palvelun toimintaan (esim. kieli, istunto, evästeasetukset). Suostumusta ei vaadita.",
        "Analytiikka — Google Analytics, kootut vierailutilastot. Suostumus vaaditaan.",
        "Mainonta — Google AdSense, mainonnan personointi. Suostumus vaaditaan.",
      ],
      afterList: [
        "4.3. Voit milloin tahansa muuttaa evästeasetuksiasi bannerin tai selaimen asetusten kautta.",
      ],
    },
    {
      title: "§5. Vastaanottajat ja henkilötietojen käsittelijät",
      paragraphs: ["5.1. Tietoja voidaan luovuttaa luotettaville henkilötietojen käsittelijöille, jotka toimivat Rekisterinpitäjän puolesta:"],
      list: [
        "Vercel Inc. — hosting ja infrastruktuuri (USA, EU:n vakiolausekkeet).",
        "Stripe, Inc. — Premium-maksujen käsittely (USA/Irlanti, PCI DSS).",
        "Google LLC — Analytics ja AdSense (suostumuksen jälkeen; kumppanikäytäntö: https://policies.google.com/technologies/partner-sites).",
        "Resend — transaktiiviset sähköpostit (esim. tervetulosähköposti rekisteröitymisen jälkeen), jos konfiguroitu.",
        "Tekoälymallien tarjoajat — kehotteiden ja tiedostojen käsittely vain Premium-tekoälytyökaluissa, ilman tallennusta valmistumisen jälkeen.",
      ],
      afterList: ["5.2. Rekisterinpitäjä ei myy henkilötietoja kolmansille osapuolille."],
    },
    {
      title: "§6. Työkaluihin ladatut tiedostot",
      paragraphs: [
        "6.1. Muuntimiin ja muihin työkaluihin ladattuja tiedostoja ei tallenneta toiminnon valmistuttua.",
        "6.2. Tiedostoja ei käytetä tekoälymallien koulutukseen, profilointiin tai markkinointiin.",
        "6.3. Jotkut työkalut (esim. yleinen tiedostonavaaja) käsittelevät tiedostoja täysin paikallisesti selaimessa — tiedosto ei koskaan poistu laitteeltasi.",
        "6.4. Älä lataa arkaluonteisia tietoja sisältäviä tiedostoja (esim. terveystiedot, henkilötunnus), ellei se ole ehdottoman välttämätöntä — se tapahtuu omalla vastuullasi.",
      ],
    },
    {
      title: "§7. Säilytysajat",
      paragraphs: ["7.1. Säilytämme tietoja seuraavat ajat:"],
      list: [
        "Tilitiedot — kunnes tili poistetaan tai poistopyyntö vastaanotetaan.",
        "Palvelinlokeja — enintään 90 päivää, ellei pidempää säilytystä vaadita vaatimusten esittämiseen.",
        "Viestintä — enintään 3 vuotta tapauksen päättymisestä.",
        "Laskutustiedot (Stripe) — verolainsäädännön mukaisesti (yleensä 5 vuotta).",
        "Käyttäjän tiedostot — poistetaan välittömästi käsittelyn jälkeen (yleensä sekunneista minuutteihin).",
        "Evästeasetukset — enintään 12 kuukautta tai kunnes suostumus peruutetaan.",
      ],
    },
    {
      title: "§8. Oikeutesi (GDPR)",
      paragraphs: ["8.1. Sinulla on seuraavat oikeudet:"],
      list: [
        "Oikeus saada pääsy tietoihin (GDPR art. 15).",
        "Oikeus tietojen oikaisemiseen (GDPR art. 16).",
        "Oikeus tietojen poistamiseen — \"oikeus tulla unohdetuksi\" (GDPR art. 17).",
        "Oikeus käsittelyn rajoittamiseen (GDPR art. 18).",
        "Oikeus tietojen siirrettävyyteen (GDPR art. 20).",
        "Oikeus vastustaa GDPR art. 6(1)(f) -perusteista käsittelyä (GDPR art. 21).",
        "Oikeus peruuttaa suostumus milloin tahansa — ilman, että se vaikuttaa ennen peruutusta tapahtuneen käsittelyn laillisuuteen (GDPR art. 7(3)).",
        "Oikeus tehdä valitus valvontaviranomaiselle (Puolassa: PUODO, uodo.gov.pl).",
      ],
      afterList: [
        "8.2. Oikeuksiesi käyttämiseksi kirjoita osoitteeseen {{email}}. Vastaan viipymättä, viimeistään 30 päivän kuluessa.",
      ],
    },
    {
      title: "§9. Tietoturva",
      paragraphs: [
        "9.1. Soveltan riskiin suhteutettuja teknisiä ja organisatorisia toimenpiteitä, mukaan lukien HTTPS-salaus, rajoitettu järjestelmäpääsy ja tiedostojen poistaminen käsittelyn jälkeen.",
        "9.2. Mikään järjestelmä ei ole 100 % turvallinen. Henkilötietoturvaloukkauksesta, joka todennäköisesti aiheuttaa korkean riskin oikeuksillesi, ilmoitan sinulle GDPR art. 34 mukaisesti.",
      ],
    },
    {
      title: "§10. Lapset",
      paragraphs: [
        "10.1. Palvelu ei ole tarkoitettu alle 16-vuotiaille lapsille. En tietoisesti käsittele alle 16-vuotiaiden lasten tietoja ilman huoltajan suostumusta.",
        "10.2. Jos uskot, että lapsi on antanut tietoja ilman huoltajan suostumusta, ota yhteyttä osoitteeseen {{email}} — tiedot poistetaan.",
      ],
    },
    {
      title: "§11. Muutokset tähän käytäntöön",
      paragraphs: [
        "11.1. Tätä käytäntöä voidaan päivittää palvelun, teknologian tai lainsäädännön muutosten heijastamiseksi.",
        "11.2. Olennaisista muutoksista ilmoitetaan palvelun kautta tai sähköpostitse (tileillä oleville käyttäjille).",
        "11.3. Ajankohtainen versio on aina saatavilla osoitteessa /polityka-prywatnosci.",
      ],
    },
  ],
  footerNote:
    "Tietosuojaan liittyvät kysymykset: {{email}}. Käyttöehdot saatavilla osoitteessa /regulamin.",
}
