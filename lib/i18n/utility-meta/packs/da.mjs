export const daTools = {
  "przelicznik-walut": {
    "cat": "finance",
    "name": "Valutakonverter",
    "desc": "Konverter valutaer online med aktuelle ECB-referencerates. PLN, EUR, USD og dusinvis af andre par — uden tilmelding.",
    "steps": [
      "Indtast beløb og kildevaluta.",
      "Vælg målvaluta.",
      "Læs resultat og dagens kurs."
    ],
    "faq": [
      {
        "q": "Hvor kommer kurserne fra?",
        "a": "Referencerates fra Den Europæiske Centralbank via Frankfurter API, opdateret på hverdage."
      },
      {
        "q": "Er kurserne realtid?",
        "a": "Det er ECB-referencerates, ikke bank- eller vekslingskurser."
      }
    ]
  },
  "kalkulator-dat": {
    "cat": "time",
    "name": "Datokalkulator",
    "desc": "Beregn dage mellem to datoer, arbejdsdage og ugedag — nyttigt til kontrakter og deadlines.",
    "steps": [
      "Vælg start- og slutdato.",
      "Se forskel i dage og uger.",
      "Tæl eventuelt kun hverdage."
    ],
    "faq": [
      {
        "q": "Ekskluderes helligdage?",
        "a": "Som standard ekskluderer vi lørdag og søndag. Helligdage afhænger af landet."
      }
    ]
  },
  "strefy-czasowe": {
    "cat": "time",
    "name": "Tidszoneforskel",
    "desc": "Sammenlign lokale tider mellem byer, se timeforskel og find steder på et simpelt kort.",
    "steps": [
      "Vælg kilde- og målby.",
      "Sammenlign aktuelle lokale tider.",
      "Se offset og kortmarkører."
    ],
    "faq": [
      {
        "q": "Håndterer I sommertid?",
        "a": "Ja — vi bruger IANA-zoner (f.eks. Europe/Warsaw) der automatisk anvender DST."
      }
    ]
  },
  "przelicznik-jednostek": {
    "cat": "units",
    "name": "Enhedskonverter",
    "desc": "Konverter længde, masse, temperatur og volumen: cm↔tommer, kg↔lb, °C↔°F og mere.",
    "steps": [
      "Vælg en enhedskategori.",
      "Indtast værdi og enheder.",
      "Få resultatet med det samme."
    ],
    "faq": [
      {
        "q": "Er konverteringerne nøjagtige?",
        "a": "Ja — standard SI-faktorer. Temperatur bruger egne formler, ikke simpel multiplikation."
      }
    ]
  },
  "kalkulator-vat": {
    "cat": "finance",
    "name": "Moms- og procentberegner",
    "desc": "Tilføj eller træk moms fra (23%, 8%, 5%), beregn netto/brutto og simple procenter af et beløb.",
    "steps": [
      "Indtast netto- eller bruttobeløb.",
      "Vælg momssats eller brugerdefineret procent.",
      "Se opdeling netto, moms og brutto."
    ],
    "faq": [
      {
        "q": "Hvilke momssatser findes i Polen?",
        "a": "Standard 23%, reducerede 8% og 5%. Du kan også indtaste egen sats."
      }
    ]
  },
  "kalkulator-wieku": {
    "cat": "time",
    "name": "Alder- og nedtællingsberegner",
    "desc": "Beregn præcis alder i år, måneder og dage — eller hvor mange dage til en dato.",
    "steps": [
      "Indtast fødselsdato eller måldato.",
      "Se alder eller nedtælling.",
      "Tjek også næste fødselsdag."
    ],
    "faq": [
      {
        "q": "Hvordan beregnes alder?",
        "a": "Fra fødselsdato til i dag, med år, måneder og dage — ikke kun kalenderår."
      }
    ]
  },
  "generator-hasel": {
    "cat": "dev",
    "name": "Adgangskodegenerator",
    "desc": "Generer en stærk adgangskode lokalt i browseren. Indstil længde og tegnsæt — intet sendes til server.",
    "steps": [
      "Indstil længde og tegnindstillinger.",
      "Klik Generer.",
      "Kopiér med ét klik."
    ],
    "faq": [
      {
        "q": "Uploades adgangskoden?",
        "a": "Nej — generering sker helt i din browser."
      }
    ]
  },
  "licznik-znakow": {
    "cat": "text",
    "name": "Tegn- og ordtæller",
    "desc": "Tæl tegn, ord, sætninger og afsnit — praktisk til SEO, sociale medier og formulargrænser.",
    "steps": [
      "Indsæt eller skriv tekst.",
      "Se live-statistik.",
      "Tjek længde uden mellemrum."
    ],
    "faq": [
      {
        "q": "Hvordan tælles ord?",
        "a": "Ord er sekvenser adskilt af mellemrum eller linjeskift."
      }
    ]
  },
  "generator-qr": {
    "cat": "dev",
    "name": "QR-kodegenerator",
    "desc": "Opret en QR-kode fra link eller tekst og download som PNG. Kører lokalt i browseren.",
    "steps": [
      "Indtast tekst eller URL.",
      "Generer QR-forhåndsvisning.",
      "Download PNG-billede."
    ],
    "faq": [
      {
        "q": "Uploades QR-indhold?",
        "a": "Nej — koden oprettes lokalt. Vi gemmer ikke indholdet."
      }
    ]
  },
  "kalkulator-bitrate": {
    "cat": "media",
    "name": "Filstørrelse- og bitrateberegner",
    "desc": "Estimer hvor stor en lyd-/videofil bliver ved given bitrate og varighed — eller hvilken bitrate der passer i en MB-grænse.",
    "steps": [
      "Vælg størrelse fra bitrate eller bitrate fra grænse.",
      "Indtast varighed og værdier.",
      "Læs resultat i MB / kbps."
    ],
    "faq": [
      {
        "q": "Inkluderer det beholderen?",
        "a": "Det estimerer råstrømmen. Beholdere og ekstra spor tilføjer normalt et par procent."
      }
    ]
  },
  "konwerter-kolorow": {
    "cat": "dev",
    "name": "HEX RGB HSL farvekonverter",
    "desc": "Konverter farver mellem HEX, RGB og HSL og tjek WCAG-kontrast mod baggrund.",
    "steps": [
      "Indtast farve i ethvert format.",
      "Se HEX/RGB/HSL-ækvivalenter.",
      "Tjek kontrast mod baggrund."
    ],
    "faq": [
      {
        "q": "Hvad betyder AA / AAA?",
        "a": "WCAG-tilgængelighedsniveauer for tekstkontrast mod baggrund."
      }
    ]
  },
  "base64": {
    "cat": "dev",
    "name": "Base64 encode / decode",
    "desc": "Kod tekst til Base64 eller dekod Base64. Lokalt, uden upload.",
    "steps": [
      "Indsæt tekst eller Base64.",
      "Vælg Encode eller Decode.",
      "Kopiér resultatet."
    ],
    "faq": [
      {
        "q": "Understøtter det UTF-8?",
        "a": "Ja — Unicode-tegn understøttes."
      }
    ]
  },
  "unix-timestamp": {
    "cat": "dev",
    "name": "Unix-tidsstempel ↔ dato",
    "desc": "Konverter Unix-tidsstempel (sekunder/ms) til dato og tilbage. Nyttigt til logs og API'er.",
    "steps": [
      "Indsæt tidsstempel eller vælg dato.",
      "Se ISO- og lokale resultater.",
      "Kopiér værdien."
    ],
    "faq": [
      {
        "q": "Sekunder eller millisekunder?",
        "a": "Vi detekterer automatisk efter længde. Du kan også tvinge enheden."
      }
    ]
  },
  "generator-uuid": {
    "cat": "dev",
    "name": "UUID-generator",
    "desc": "Generer UUID v4 (tilfældig) med ét klik. Opret flere ad gangen ved behov.",
    "steps": [
      "Indstil antal UUID.",
      "Klik Generer.",
      "Kopiér listen."
    ],
    "faq": [
      {
        "q": "Hvilken UUID-version?",
        "a": "UUID v4 — tilfældig, RFC 4122, genereret i browseren."
      }
    ]
  },
  "generator-hash": {
    "cat": "dev",
    "name": "SHA / MD5-hash",
    "desc": "Beregn SHA-1, SHA-256, SHA-512 eller MD5 af tekst. Lokalt via Web Crypto.",
    "steps": [
      "Indsæt tekst.",
      "Vælg algoritme.",
      "Kopiér hex-hash."
    ],
    "faq": [
      {
        "q": "Er MD5 sikkert?",
        "a": "MD5 er ikke til adgangskoder. Brug SHA-256+ til sikkerhed; MD5 kun til checksum."
      }
    ]
  },
  "json-formatter": {
    "cat": "dev",
    "name": "JSON-formater",
    "desc": "Formater og minificer JSON i browseren — ingen serverupload.",
    "steps": [
      "Indsæt JSON.",
      "Klik Formater eller Minificer.",
      "Kopiér resultatet."
    ],
    "faq": [
      {
        "q": "Uploades data?",
        "a": "Nej — behandling sker lokalt i din browser."
      }
    ]
  },
  "diff-tekstu": {
    "cat": "text",
    "name": "Tekst-diff",
    "desc": "Sammenlign to tekstudsnit linje for linje og fremhæv forskelle.",
    "steps": [
      "Indsæt tekst A og B.",
      "Gennemgå fremhævede forskelle."
    ],
    "faq": [
      {
        "q": "Er dette en fuld diff?",
        "a": "Det er en linje-for-linje-sammenligning — ideel til korte udsnit og lister."
      }
    ]
  },
  "konwerter-wielkosci-liter": {
    "cat": "text",
    "name": "Store/små bogstaver",
    "desc": "Konverter tekst til store, små bogstaver, Title Case eller sentence case.",
    "steps": [
      "Indsæt tekst.",
      "Vælg tilstand.",
      "Kopiér resultatet."
    ],
    "faq": []
  },
  "usun-duplikaty-linii": {
    "cat": "text",
    "name": "Fjern duplikatlinjer",
    "desc": "Fjern gentagne linjer fra e-maillister, SKU'er eller tags.",
    "steps": [
      "Indsæt liste.",
      "Indstil muligheder.",
      "Kopiér renset liste."
    ],
    "faq": []
  },
  "dekoder-jwt": {
    "cat": "dev",
    "name": "JWT-dekoder",
    "desc": "Læs header og payload for en JWT uden at verificere signaturen.",
    "steps": [
      "Indsæt token.",
      "Inspicer header og payload."
    ],
    "faq": [
      {
        "q": "Verificerer den signaturen?",
        "a": "Nej — den dekoder kun Base64URL for token."
      }
    ]
  },
  "walidator-nip-pesel": {
    "cat": "dev",
    "name": "NIP / PESEL / REGON-validator",
    "desc": "Valider polske skatte- og ID-numre efter checksumregler.",
    "steps": [
      "Indtast nummer.",
      "Se valideringsresultat."
    ],
    "faq": [
      {
        "q": "Forespørger den GUS?",
        "a": "Nej — kun checksum og længde."
      }
    ]
  },
  "kalkulator-kredytu": {
    "cat": "finance",
    "name": "Låneberegner",
    "desc": "Beregn annuitet, samlet tilbagebetaling og renteomkostning.",
    "steps": [
      "Indtast beløb, rente og løbetid.",
      "Læs månedlig betaling."
    ],
    "faq": [
      {
        "q": "Inkluderer bankgebyrer?",
        "a": "Dette er en forenklet simulering uden gebyrer eller forsikring."
      }
    ]
  },
  "markdown-preview": {
    "cat": "text",
    "name": "Markdown-forhåndsvisning",
    "desc": "Skriv Markdown og se live HTML-forhåndsvisning i browseren.",
    "steps": [
      "Skriv Markdown.",
      "Forhåndsvisning opdateres automatisk."
    ],
    "faq": []
  },
  "sila-hasla": {
    "cat": "dev",
    "name": "Adgangskodestyrke",
    "desc": "Vurder adgangskodestyrke efter længde, tegnvariation og almindelige mønstre.",
    "steps": [
      "Indtast adgangskode.",
      "Se score og tips."
    ],
    "faq": [
      {
        "q": "Uploades adgangskoden?",
        "a": "Nej — vurdering sker lokalt i din browser."
      }
    ]
  },
  "konwerter-napisow": {
    "cat": "media",
    "name": "SRT / VTT undertekstkonverter",
    "desc": "Konverter undertekster mellem SRT- og WebVTT-format.",
    "steps": [
      "Indsæt undertekster.",
      "Vælg retning eller auto.",
      "Kopiér resultatet."
    ],
    "faq": []
  },
  "generator-nazw-plikow": {
    "cat": "text",
    "name": "Batch filomdøber",
    "desc": "Omdøb filer i bulk med mønster {name}, {ext}, {index}.",
    "steps": [
      "Indsæt filliste.",
      "Indstil mønster.",
      "Kopiér nye navne."
    ],
    "faq": []
  },
  "walidator-iban": {
    "cat": "dev",
    "name": "IBAN-validator",
    "desc": "Valider IBAN-checksum (mod 97) og landsspecifik længde.",
    "steps": [
      "Indsæt IBAN.",
      "Se formateret output og validering."
    ],
    "faq": [
      {
        "q": "Verificerer den bankkontoen?",
        "a": "Nej — kun format og checksum."
      }
    ]
  },
  "kalkulator-b2b": {
    "cat": "finance",
    "name": "B2B vs ansættelsesberegner",
    "desc": "Sammenlign nettoløn fra ansættelse med B2B-fakturaindtægt (flat eller lineær skat).",
    "steps": [
      "Indtast brutto løn og B2B-indtægt.",
      "Vælg skatteform.",
      "Sammenlign resultater."
    ],
    "faq": [
      {
        "q": "Er dette skatterådgivning?",
        "a": "Nej — forenklet simulering til diskussion med revisor."
      }
    ]
  }
};
