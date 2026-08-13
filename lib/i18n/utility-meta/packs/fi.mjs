export const fiTools = {
  "przelicznik-walut": {
    "cat": "finance",
    "name": "Valuuttamuunnin",
    "desc": "Muunna valuuttoja verkossa ECB:n viitekurssien mukaan. PLN, EUR, USD ja kymmeniä muita pareja — ilman rekisteröitymistä.",
    "steps": [
      "Syötä summa ja lähdevaluutta.",
      "Valitse kohdevaluutta.",
      "Katso tulos ja päivän kurssi."
    ],
    "faq": [
      {
        "q": "Mistä kurssit tulevat?",
        "a": "Euroopan keskuspankin viitekurssit Frankfurter API:n kautta, päivitetään arkipäivisin."
      },
      {
        "q": "Ovatko kurssit reaaliaikaisia?",
        "a": "Nämä ovat EKP:n viitekurssit, eivät pankki- tai vaihtokurssit."
      }
    ]
  },
  "kalkulator-dat": {
    "cat": "time",
    "name": "Päivämäärälaskin",
    "desc": "Laske päivät kahden päivämäärän välillä, arkipäivät ja viikonpäivä — hyödyllinen sopimuksiin ja määräaikoihin.",
    "steps": [
      "Valitse alku- ja loppupäivä.",
      "Katso ero päivinä ja viikkoina.",
      "Laske halutessasi vain arkipäivät."
    ],
    "faq": [
      {
        "q": "Jätetäänkö pyhäpäivät pois?",
        "a": "Oletuksena poissuljemme lauantait ja sunnuntait. Pyhät riippuvat maasta."
      }
    ]
  },
  "strefy-czasowe": {
    "cat": "time",
    "name": "Aikavyöhyke-ero",
    "desc": "Vertaa paikallisia aikoja kaupunkien välillä, katso tuntiero ja löydä paikat yksinkertaiselta kartalta.",
    "steps": [
      "Valitse lähde- ja kohdekaupunki.",
      "Vertaa nykyisiä paikallisia aikoja.",
      "Katso offset ja karttamerkit."
    ],
    "faq": [
      {
        "q": "Huomioitteko kesäajan?",
        "a": "Kyllä — käytämme IANA-vyöhykkeitä (esim. Europe/Warsaw), jotka soveltavat DST:tä automaattisesti."
      }
    ]
  },
  "przelicznik-jednostek": {
    "cat": "units",
    "name": "Yksikkömuunnin",
    "desc": "Muunna pituus, massa, lämpötila ja tilavuus: cm↔tuuma, kg↔lb, °C↔°F ja muuta.",
    "steps": [
      "Valitse yksikkökategoria.",
      "Syötä arvo ja yksiköt.",
      "Saa tulos heti."
    ],
    "faq": [
      {
        "q": "Ovatko muunnokset tarkkoja?",
        "a": "Kyllä — standardi SI-kertoimet. Lämpötila käyttää omia kaavoja, ei yksinkertaista kertolaskua."
      }
    ]
  },
  "kalkulator-vat": {
    "cat": "finance",
    "name": "ALV- ja prosenttilaskin",
    "desc": "Lisää tai vähennä ALV (23%, 8%, 5%), laske netto/brutto ja yksinkertaiset prosentit summasta.",
    "steps": [
      "Syötä netto- tai bruttosumma.",
      "Valitse ALV-kanta tai mukautettu prosentti.",
      "Katso erittely netto, ALV ja brutto."
    ],
    "faq": [
      {
        "q": "Mitä ALV-kantoja Puolassa on?",
        "a": "Vakio 23%, alennetut 8% ja 5%. Voit myös syöttää oman kannan."
      }
    ]
  },
  "kalkulator-wieku": {
    "cat": "time",
    "name": "Ikä- ja lähtölaskuri",
    "desc": "Laske tarkka ikä vuosina, kuukausina ja päivinä — tai kuinka monta päivää päivämäärään.",
    "steps": [
      "Syötä syntymäpäivä tai kohdepäivä.",
      "Katso ikä tai lähtölaskenta.",
      "Tarkista myös seuraava syntymäpäivä."
    ],
    "faq": [
      {
        "q": "Miten ikä lasketaan?",
        "a": "Syntymäpäivästä tähän päivään, vuosineen, kuukausineen ja päivineen — ei pelkkiä kalenterivuosia."
      }
    ]
  },
  "generator-hasel": {
    "cat": "dev",
    "name": "Salasanageneraattori",
    "desc": "Luo vahva salasana paikallisesti selaimessa. Aseta pituus ja merkkijoukot — mitään ei lähetetä palvelimelle.",
    "steps": [
      "Aseta pituus ja merkkiasetukset.",
      "Napsauta Luo.",
      "Kopioi yhdellä napsautuksella."
    ],
    "faq": [
      {
        "q": "Ladataanko salasana?",
        "a": "Ei — luonti tapahtuu kokonaan selaimessasi."
      }
    ]
  },
  "licznik-znakow": {
    "cat": "text",
    "name": "Merkki- ja sanalaskuri",
    "desc": "Laske merkit, sanat, lauseet ja kappaleet — kätevä SEO:lle, someen ja lomakerajoille.",
    "steps": [
      "Liitä tai kirjoita teksti.",
      "Katso live-tilastot.",
      "Tarkista pituus ilman välilyöntejä."
    ],
    "faq": [
      {
        "q": "Miten sanat lasketaan?",
        "a": "Sanat ovat välilyönnillä tai rivinvaihdolla erotettuja sarjoja."
      }
    ]
  },
  "generator-qr": {
    "cat": "dev",
    "name": "QR-koodigeneraattori",
    "desc": "Luo QR-koodi linkistä tai tekstistä ja lataa PNG:nä. Toimii paikallisesti selaimessa.",
    "steps": [
      "Syötä teksti tai URL.",
      "Luo QR-esikatselu.",
      "Lataa PNG-kuva."
    ],
    "faq": [
      {
        "q": "Ladataanko QR-sisältö?",
        "a": "Ei — koodi luodaan paikallisesti. Emme tallenna sisältöä."
      }
    ]
  },
  "kalkulator-bitrate": {
    "cat": "media",
    "name": "Tiedostokoko- ja bittinopeuslaskin",
    "desc": "Arvioi kuinka suuri audio-/videotiedosto on annetulla bittinopeudella ja kestolla — tai mikä bittinopeus mahtuu MB-rajaan.",
    "steps": [
      "Valitse koko bittinopeudesta tai bittinopeus rajasta.",
      "Syötä kesto ja arvot.",
      "Lue tulos MB / kbps."
    ],
    "faq": [
      {
        "q": "Sisältääkö se säiliön?",
        "a": "Se arvioi raakavirtaa. Säiliöt ja ylimääräiset raidat lisäävät yleensä muutaman prosentin."
      }
    ]
  },
  "konwerter-kolorow": {
    "cat": "dev",
    "name": "HEX RGB HSL värimuunnin",
    "desc": "Muunna värejä HEX-, RGB- ja HSL-muotojen välillä ja tarkista WCAG-kontrasti taustaan.",
    "steps": [
      "Syötä väri missä tahansa muodossa.",
      "Katso HEX/RGB/HSL-vastineet.",
      "Tarkista kontrasti taustaan."
    ],
    "faq": [
      {
        "q": "Mitä AA / AAA tarkoittaa?",
        "a": "WCAG-saavutettavuustasot tekstin kontrastille taustaan nähden."
      }
    ]
  },
  "base64": {
    "cat": "dev",
    "name": "Base64 koodaa / purkaa",
    "desc": "Koodaa teksti Base64:ään tai pura Base64. Paikallisesti, ilman latausta.",
    "steps": [
      "Liitä teksti tai Base64.",
      "Valitse Koodaa tai Pura.",
      "Kopioi tulos."
    ],
    "faq": [
      {
        "q": "Tukeeko se UTF-8:aa?",
        "a": "Kyllä — Unicode-merkit tuetaan."
      }
    ]
  },
  "unix-timestamp": {
    "cat": "dev",
    "name": "Unix-aikaleima ↔ päivämäärä",
    "desc": "Muunna Unix-aikaleima (sekunnit/ms) päivämääräksi ja takaisin. Hyödyllinen lokeihin ja API:hin.",
    "steps": [
      "Liitä aikaleima tai valitse päivämäärä.",
      "Katso ISO- ja paikalliset tulokset.",
      "Kopioi arvo."
    ],
    "faq": [
      {
        "q": "Sekunnit vai millisekunnit?",
        "a": "Tunnistamme automaattisesti pituudesta. Voit myös pakottaa yksikön."
      }
    ]
  },
  "generator-uuid": {
    "cat": "dev",
    "name": "UUID-generaattori",
    "desc": "Luo UUID v4 (satunnainen) yhdellä napsautuksella. Luo useita kerralla tarvittaessa.",
    "steps": [
      "Aseta UUID-määrä.",
      "Napsauta Luo.",
      "Kopioi lista."
    ],
    "faq": [
      {
        "q": "Mikä UUID-versio?",
        "a": "UUID v4 — satunnainen, RFC 4122, luotu selaimessa."
      }
    ]
  },
  "generator-hash": {
    "cat": "dev",
    "name": "SHA / MD5-tiiviste",
    "desc": "Laske SHA-1, SHA-256, SHA-512 tai MD5 tekstistä. Paikallisesti Web Cryptolla.",
    "steps": [
      "Liitä teksti.",
      "Valitse algoritmi.",
      "Kopioi hex-tiiviste."
    ],
    "faq": [
      {
        "q": "Onko MD5 turvallinen?",
        "a": "MD5 ei sovellu salasanoihin. Käytä SHA-256+ turvallisuuteen; MD5 vain tarkistussummiin."
      }
    ]
  },
  "json-formatter": {
    "cat": "dev",
    "name": "JSON-muotoilija",
    "desc": "Muotoile ja minifioi JSON selaimessa — ei palvelinlatausta.",
    "steps": [
      "Liitä JSON.",
      "Napsauta Muotoile tai Minifioi.",
      "Kopioi tulos."
    ],
    "faq": [
      {
        "q": "Ladataanko data?",
        "a": "Ei — käsittely tapahtuu paikallisesti selaimessasi."
      }
    ]
  },
  "diff-tekstu": {
    "cat": "text",
    "name": "Tekstidiff",
    "desc": "Vertaa kahta tekstikatkelmaa rivi riviltä ja korosta erot.",
    "steps": [
      "Liitä teksti A ja B.",
      "Tarkastele korostettuja eroja."
    ],
    "faq": [
      {
        "q": "Onko tämä täydellinen diff?",
        "a": "Se on rivi-rivi-vertailu — ihanteellinen lyhyille katkelmille ja listoille."
      }
    ]
  },
  "konwerter-wielkosci-liter": {
    "cat": "text",
    "name": "Kirjainkoon muunnin",
    "desc": "Muunna teksti isoiksi, pieniksi kirjaimiksi, Title Caseksi tai sentence caseksi.",
    "steps": [
      "Liitä teksti.",
      "Valitse tila.",
      "Kopioi tulos."
    ],
    "faq": []
  },
  "usun-duplikaty-linii": {
    "cat": "text",
    "name": "Poista kaksoisrivit",
    "desc": "Poista toistuvat rivit sähköpostilistojen, SKU:iden tai tagien joukosta.",
    "steps": [
      "Liitä lista.",
      "Aseta vaihtoehdot.",
      "Kopioi puhdistettu lista."
    ],
    "faq": []
  },
  "dekoder-jwt": {
    "cat": "dev",
    "name": "JWT-dekooderi",
    "desc": "Lue JWT:n header ja payload ilman allekirjoituksen tarkistusta.",
    "steps": [
      "Liitä token.",
      "Tarkastele headeria ja payloadia."
    ],
    "faq": [
      {
        "q": "Tarkistaako se allekirjoituksen?",
        "a": "Ei — se purkaa vain tokenin Base64URL:n."
      }
    ]
  },
  "walidator-nip-pesel": {
    "cat": "dev",
    "name": "NIP / PESEL / REGON-validaattori",
    "desc": "Validoi puolalaiset vero- ja henkilötunnukset tarkistussummasääntöjen mukaan.",
    "steps": [
      "Syötä numero.",
      "Katso validointitulos."
    ],
    "faq": [
      {
        "q": "Kysyykö se GUS:ia?",
        "a": "Ei — vain tarkistussumma ja pituus."
      }
    ]
  },
  "kalkulator-kredytu": {
    "cat": "finance",
    "name": "Lainalaskin",
    "desc": "Laske annuiteetti, kokonaismaksu ja korkokustannus.",
    "steps": [
      "Syötä summa, korko ja aika.",
      "Lue kuukausierä."
    ],
    "faq": [
      {
        "q": "Sisältääkö pankkimaksut?",
        "a": "Tämä on yksinkertaistettu simulaatio ilman maksuja tai vakuutuksia."
      }
    ]
  },
  "markdown-preview": {
    "cat": "text",
    "name": "Markdown-esikatselu",
    "desc": "Kirjoita Markdownia ja näe live HTML-esikatselu selaimessa.",
    "steps": [
      "Kirjoita Markdownia.",
      "Esikatselu päivittyy automaattisesti."
    ],
    "faq": []
  },
  "sila-hasla": {
    "cat": "dev",
    "name": "Salasanan vahvuus",
    "desc": "Arvioi salasanan vahvuus pituuden, merkkivalikoiman ja yleisten kuvioiden perusteella.",
    "steps": [
      "Syötä salasana.",
      "Katso pistemäärä ja vinkit."
    ],
    "faq": [
      {
        "q": "Ladataanko salasana?",
        "a": "Ei — arviointi tapahtuu paikallisesti selaimessasi."
      }
    ]
  },
  "konwerter-napisow": {
    "cat": "media",
    "name": "SRT / VTT tekstitysmuunnin",
    "desc": "Muunna tekstitykset SRT- ja WebVTT-muotojen välillä.",
    "steps": [
      "Liitä tekstitykset.",
      "Valitse suunta tai auto.",
      "Kopioi tulos."
    ],
    "faq": []
  },
  "generator-nazw-plikow": {
    "cat": "text",
    "name": "Erän tiedostonimien muuttaja",
    "desc": "Nimeä tiedostoja uudelleen joukkona kaavalla {name}, {ext}, {index}.",
    "steps": [
      "Liitä tiedostolista.",
      "Aseta kaava.",
      "Kopioi uudet nimet."
    ],
    "faq": []
  },
  "walidator-iban": {
    "cat": "dev",
    "name": "IBAN-validaattori",
    "desc": "Validoi IBAN-tarkistussumma (mod 97) ja maakohtainen pituus.",
    "steps": [
      "Liitä IBAN.",
      "Katso muotoiltu tulos ja validointi."
    ],
    "faq": [
      {
        "q": "Tarkistaako se pankkitilin?",
        "a": "Ei — vain muoto ja tarkistussumma."
      }
    ]
  },
  "kalkulator-b2b": {
    "cat": "finance",
    "name": "B2B vs työsuhde-laskin",
    "desc": "Vertaa työsuhteen nettopalkkaa B2B-laskutuloon (flat tai lineaarinen vero).",
    "steps": [
      "Syötä bruttopalkka ja B2B-tulot.",
      "Valitse veromuoto.",
      "Vertaa tuloksia."
    ],
    "faq": [
      {
        "q": "Onko tämä veroneuvontaa?",
        "a": "Ei — yksinkertaistettu simulaatio keskusteltavaksi kirjanpitäjän kanssa."
      }
    ]
  }
};
