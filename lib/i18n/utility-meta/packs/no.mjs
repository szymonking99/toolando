export const noTools = {
  "przelicznik-walut": {
    "cat": "finance",
    "name": "Valutakonverter",
    "desc": "Konverter valutaer online med aktuelle ECB-referansekurser. PLN, EUR, USD og dusinvis av andre par — uten registrering.",
    "steps": [
      "Angi beløp og kildevaluta.",
      "Velg målvaluta.",
      "Les resultat og dagens kurs."
    ],
    "faq": [
      {
        "q": "Hvor kommer kursene fra?",
        "a": "Referansekurser fra Den europeiske sentralbanken via Frankfurter API, oppdatert på virkedager."
      },
      {
        "q": "Er kursene sanntid?",
        "a": "Dette er ECB-referansekurser, ikke bank- eller vekslingskurser."
      }
    ]
  },
  "kalkulator-dat": {
    "cat": "time",
    "name": "Datokalkulator",
    "desc": "Beregn dager mellom to datoer, arbeidsdager og ukedag — nyttig for kontrakter og frister.",
    "steps": [
      "Velg start- og sluttdato.",
      "Se differanse i dager og uker.",
      "Tell eventuelt bare virkedager."
    ],
    "faq": [
      {
        "q": "Ekskluderes helligdager?",
        "a": "Som standard ekskluderer vi lørdag og søndag. Helligdager avhenger av landet."
      }
    ]
  },
  "strefy-czasowe": {
    "cat": "time",
    "name": "Tidssoneforskjell",
    "desc": "Sammenlign lokale tider mellom byer, se timesforskjell og finn steder på et enkelt kart.",
    "steps": [
      "Velg kilde- og målby.",
      "Sammenlign aktuelle lokale tider.",
      "Se offset og kartmarkører."
    ],
    "faq": [
      {
        "q": "Håndterer dere sommertid?",
        "a": "Ja — vi bruker IANA-soner (f.eks. Europe/Warsaw) som automatisk bruker DST."
      }
    ]
  },
  "przelicznik-jednostek": {
    "cat": "units",
    "name": "Enhetskonverter",
    "desc": "Konverter lengde, masse, temperatur og volum: cm↔tommer, kg↔lb, °C↔°F og mer.",
    "steps": [
      "Velg en enhetskategori.",
      "Angi verdi og enheter.",
      "Få resultatet umiddelbart."
    ],
    "faq": [
      {
        "q": "Er konverteringene nøyaktige?",
        "a": "Ja — standard SI-faktorer. Temperatur bruker egne formler, ikke enkel multiplikasjon."
      }
    ]
  },
  "kalkulator-vat": {
    "cat": "finance",
    "name": "MVA- og prosentkalkulator",
    "desc": "Legg til eller trekk fra MVA (23%, 8%, 5%), beregn netto/brutto og enkle prosenter av et beløp.",
    "steps": [
      "Angi netto- eller bruttobeløp.",
      "Velg MVA-sats eller egendefinert prosent.",
      "Se oppdeling netto, MVA og brutto."
    ],
    "faq": [
      {
        "q": "Hvilke MVA-satser finnes i Polen?",
        "a": "Standard 23%, reduserte 8% og 5%. Du kan også angi egen sats."
      }
    ]
  },
  "kalkulator-wieku": {
    "cat": "time",
    "name": "Alder- og nedtellingskalkulator",
    "desc": "Beregn nøyaktig alder i år, måneder og dager — eller hvor mange dager til en dato.",
    "steps": [
      "Angi fødselsdato eller måldato.",
      "Se alder eller nedtelling.",
      "Sjekk også neste bursdag."
    ],
    "faq": [
      {
        "q": "Hvordan beregnes alder?",
        "a": "Fra fødselsdato til i dag, med år, måneder og dager — ikke bare kalenderår."
      }
    ]
  },
  "generator-hasel": {
    "cat": "dev",
    "name": "Passordgenerator",
    "desc": "Generer et sterkt passord lokalt i nettleseren. Sett lengde og tegnsett — ingenting sendes til server.",
    "steps": [
      "Sett lengde og tegnalternativer.",
      "Klikk Generer.",
      "Kopier med ett klikk."
    ],
    "faq": [
      {
        "q": "Lastes passordet opp?",
        "a": "Nei — generering skjer helt i nettleseren din."
      }
    ]
  },
  "licznik-znakow": {
    "cat": "text",
    "name": "Tegn- og ordteller",
    "desc": "Tell tegn, ord, setninger og avsnitt — praktisk for SEO, sosiale medier og skjemagrenser.",
    "steps": [
      "Lim inn eller skriv tekst.",
      "Se live-statistikk.",
      "Sjekk lengde uten mellomrom."
    ],
    "faq": [
      {
        "q": "Hvordan telles ord?",
        "a": "Ord er sekvenser separert med mellomrom eller linjeskift."
      }
    ]
  },
  "generator-qr": {
    "cat": "dev",
    "name": "QR-kodegenerator",
    "desc": "Lag en QR-kode fra lenke eller tekst og last ned som PNG. Kjører lokalt i nettleseren.",
    "steps": [
      "Angi tekst eller URL.",
      "Generer QR-forhåndsvisning.",
      "Last ned PNG-bilde."
    ],
    "faq": [
      {
        "q": "Lastes QR-innhold opp?",
        "a": "Nei — koden lages lokalt. Vi lagrer ikke innholdet."
      }
    ]
  },
  "kalkulator-bitrate": {
    "cat": "media",
    "name": "Filstørrelse- og bitratekalkulator",
    "desc": "Estimer hvor stor en lyd-/videofil blir ved gitt bitrate og varighet — eller hvilken bitrate som passer i en MB-grense.",
    "steps": [
      "Velg størrelse fra bitrate eller bitrate fra grense.",
      "Angi varighet og verdier.",
      "Les resultat i MB / kbps."
    ],
    "faq": [
      {
        "q": "Inkluderer dette containeren?",
        "a": "Det estimerer råstrømmen. Containere og ekstra spor legger vanligvis til noen prosent."
      }
    ]
  },
  "konwerter-kolorow": {
    "cat": "dev",
    "name": "HEX RGB HSL fargekonverter",
    "desc": "Konverter farger mellom HEX, RGB og HSL og sjekk WCAG-kontrast mot bakgrunn.",
    "steps": [
      "Angi farge i hvilket som helst format.",
      "Se HEX/RGB/HSL-ekvivalenter.",
      "Sjekk kontrast mot bakgrunn."
    ],
    "faq": [
      {
        "q": "Hva betyr AA / AAA?",
        "a": "WCAG-tilgjengelighetsnivåer for tekstkontrast mot bakgrunn."
      }
    ]
  },
  "base64": {
    "cat": "dev",
    "name": "Base64 kode / dekode",
    "desc": "Kode tekst til Base64 eller dekode Base64. Lokalt, uten opplasting.",
    "steps": [
      "Lim inn tekst eller Base64.",
      "Velg Kode eller Dekode.",
      "Kopier resultatet."
    ],
    "faq": [
      {
        "q": "Støtter det UTF-8?",
        "a": "Ja — Unicode-tegn støttes."
      }
    ]
  },
  "unix-timestamp": {
    "cat": "dev",
    "name": "Unix-tidsstempel ↔ dato",
    "desc": "Konverter Unix-tidsstempel (sekunder/ms) til dato og tilbake. Nyttig for logger og API-er.",
    "steps": [
      "Lim inn tidsstempel eller velg dato.",
      "Se ISO- og lokale resultater.",
      "Kopier verdien."
    ],
    "faq": [
      {
        "q": "Sekunder eller millisekunder?",
        "a": "Vi oppdager automatisk etter lengde. Du kan også tvinge enheten."
      }
    ]
  },
  "generator-uuid": {
    "cat": "dev",
    "name": "UUID-generator",
    "desc": "Generer UUID v4 (tilfeldig) med ett klikk. Lag flere samtidig ved behov.",
    "steps": [
      "Sett antall UUID.",
      "Klikk Generer.",
      "Kopier listen."
    ],
    "faq": [
      {
        "q": "Hvilken UUID-versjon?",
        "a": "UUID v4 — tilfeldig, RFC 4122, generert i nettleseren."
      }
    ]
  },
  "generator-hash": {
    "cat": "dev",
    "name": "SHA / MD5-hash",
    "desc": "Beregn SHA-1, SHA-256, SHA-512 eller MD5 av tekst. Lokalt via Web Crypto.",
    "steps": [
      "Lim inn tekst.",
      "Velg algoritme.",
      "Kopier hex-hash."
    ],
    "faq": [
      {
        "q": "Er MD5 trygt?",
        "a": "MD5 er ikke for passord. Bruk SHA-256+ for sikkerhet; MD5 kun for sjekksum."
      }
    ]
  },
  "json-formatter": {
    "cat": "dev",
    "name": "JSON-formaterer",
    "desc": "Formater og minifiser JSON i nettleseren — ingen serveropplasting.",
    "steps": [
      "Lim inn JSON.",
      "Klikk Formater eller Minifiser.",
      "Kopier resultatet."
    ],
    "faq": [
      {
        "q": "Lastes data opp?",
        "a": "Nei — behandling skjer lokalt i nettleseren din."
      }
    ]
  },
  "diff-tekstu": {
    "cat": "text",
    "name": "Tekst-diff",
    "desc": "Sammenlign to tekstutdrag linje for linje og fremhev forskjeller.",
    "steps": [
      "Lim inn tekst A og B.",
      "Gjennomgå fremhevede forskjeller."
    ],
    "faq": [
      {
        "q": "Er dette en full diff?",
        "a": "Det er en linje-for-linje-sammenligning — ideell for korte utdrag og lister."
      }
    ]
  },
  "konwerter-wielkosci-liter": {
    "cat": "text",
    "name": "Store/små bokstaver",
    "desc": "Konverter tekst til store, små bokstaver, Title Case eller sentence case.",
    "steps": [
      "Lim inn tekst.",
      "Velg modus.",
      "Kopier resultatet."
    ],
    "faq": []
  },
  "usun-duplikaty-linii": {
    "cat": "text",
    "name": "Fjern duplikatlinjer",
    "desc": "Fjern gjentatte linjer fra e-postlister, SKU-er eller tagger.",
    "steps": [
      "Lim inn liste.",
      "Sett alternativer.",
      "Kopier renset liste."
    ],
    "faq": []
  },
  "dekoder-jwt": {
    "cat": "dev",
    "name": "JWT-dekoder",
    "desc": "Les header og payload for en JWT uten å verifisere signaturen.",
    "steps": [
      "Lim inn token.",
      "Inspiser header og payload."
    ],
    "faq": [
      {
        "q": "Verifiserer den signaturen?",
        "a": "Nei — den dekoder bare Base64URL for token."
      }
    ]
  },
  "walidator-nip-pesel": {
    "cat": "dev",
    "name": "NIP / PESEL / REGON-validator",
    "desc": "Valider polske skatte- og ID-numre etter sjekksumregler.",
    "steps": [
      "Angi nummer.",
      "Se valideringsresultat."
    ],
    "faq": [
      {
        "q": "Spør den GUS?",
        "a": "Nei — kun sjekksum og lengde."
      }
    ]
  },
  "kalkulator-kredytu": {
    "cat": "finance",
    "name": "Lånekalkulator",
    "desc": "Beregn annuitet, total tilbakebetaling og rentekostnad.",
    "steps": [
      "Angi beløp, rente og løpetid.",
      "Les månedlig betaling."
    ],
    "faq": [
      {
        "q": "Inkluderer bankgebyrer?",
        "a": "Dette er en forenklet simulering uten gebyrer eller forsikring."
      }
    ]
  },
  "markdown-preview": {
    "cat": "text",
    "name": "Markdown-forhåndsvisning",
    "desc": "Skriv Markdown og se live HTML-forhåndsvisning i nettleseren.",
    "steps": [
      "Skriv Markdown.",
      "Forhåndsvisning oppdateres automatisk."
    ],
    "faq": []
  },
  "sila-hasla": {
    "cat": "dev",
    "name": "Passordstyrke",
    "desc": "Vurder passordstyrke etter lengde, tegnvariasjon og vanlige mønstre.",
    "steps": [
      "Angi passord.",
      "Se poengsum og tips."
    ],
    "faq": [
      {
        "q": "Lastes passordet opp?",
        "a": "Nei — vurdering skjer lokalt i nettleseren din."
      }
    ]
  },
  "konwerter-napisow": {
    "cat": "media",
    "name": "SRT / VTT undertekstkonverter",
    "desc": "Konverter undertekster mellom SRT- og WebVTT-format.",
    "steps": [
      "Lim inn undertekster.",
      "Velg retning eller auto.",
      "Kopier resultatet."
    ],
    "faq": []
  },
  "generator-nazw-plikow": {
    "cat": "text",
    "name": "Batch filnavnsendring",
    "desc": "Gi filer nytt navn i bulk med mønster {name}, {ext}, {index}.",
    "steps": [
      "Lim inn filliste.",
      "Sett mønster.",
      "Kopier nye navn."
    ],
    "faq": []
  },
  "walidator-iban": {
    "cat": "dev",
    "name": "IBAN-validator",
    "desc": "Valider IBAN-sjekksum (mod 97) og landsspecifikk lengde.",
    "steps": [
      "Lim inn IBAN.",
      "Se formatert output og validering."
    ],
    "faq": [
      {
        "q": "Verifiserer den bankkontoen?",
        "a": "Nei — kun format og sjekksum."
      }
    ]
  },
  "kalkulator-b2b": {
    "cat": "finance",
    "name": "B2B vs ansettelseskalkulator",
    "desc": "Sammenlign nettolønn fra ansettelse med B2B-fakturainntekt (flat eller lineær skatt).",
    "steps": [
      "Angi brutto lønn og B2B-inntekt.",
      "Velg skatteform.",
      "Sammenlign resultater."
    ],
    "faq": [
      {
        "q": "Er dette skatterådgivning?",
        "a": "Nei — forenklet simulering for diskusjon med regnskapsfører."
      }
    ]
  }
};
