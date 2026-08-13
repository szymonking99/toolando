export const nlTools = {
  "przelicznik-walut": {
    "cat": "finance",
    "name": "Valutaconverter",
    "desc": "Converteer valuta online met actuele ECB-referentiekoersen. PLN, EUR, USD en tientallen andere paren — zonder registratie.",
    "steps": [
      "Voer een bedrag en bronvaluta in.",
      "Kies de doelvaluta.",
      "Bekijk het resultaat en de dagkoers."
    ],
    "faq": [
      {
        "q": "Waar komen de koersen vandaan?",
        "a": "Referentiekoersen van de Europese Centrale Bank via de Frankfurter API, bijgewerkt op werkdagen."
      },
      {
        "q": "Zijn de koersen realtime?",
        "a": "Dit zijn ECB-referentiekoersen, geen bank- of wisselkantoorkoersen."
      }
    ]
  },
  "kalkulator-dat": {
    "cat": "time",
    "name": "Datumcalculator",
    "desc": "Bereken dagen tussen twee datums, werkdagen en de weekdag — handig voor contracten en deadlines.",
    "steps": [
      "Kies start- en einddatum.",
      "Bekijk het verschil in dagen en weken.",
      "Tel optioneel alleen werkdagen."
    ],
    "faq": [
      {
        "q": "Worden feestdagen uitgesloten?",
        "a": "Standaard sluiten we zaterdag en zondag uit. Feestdagen hangen af van het land."
      }
    ]
  },
  "strefy-czasowe": {
    "cat": "time",
    "name": "Tijdzonesverschil",
    "desc": "Vergelijk lokale tijden tussen steden, zie het uurverschil en vind locaties op een eenvoudige kaart.",
    "steps": [
      "Kies bron- en doelstad.",
      "Vergelijk de huidige lokale tijden.",
      "Bekijk het verschil en kaartmarkeringen."
    ],
    "faq": [
      {
        "q": "Houden jullie rekening met zomertijd?",
        "a": "Ja — we gebruiken IANA-zones (bijv. Europe/Warsaw) die DST automatisch toepassen."
      }
    ]
  },
  "przelicznik-jednostek": {
    "cat": "units",
    "name": "Eenhedenconverter",
    "desc": "Converteer lengte, massa, temperatuur en volume: cm↔inch, kg↔lb, °C↔°F en meer.",
    "steps": [
      "Kies een eenheidscategorie.",
      "Voer een waarde en eenheden in.",
      "Krijg direct het resultaat."
    ],
    "faq": [
      {
        "q": "Zijn conversies nauwkeurig?",
        "a": "Ja — standaard SI-factoren. Temperatuur gebruikt eigen formules, geen simpele vermenigvuldiging."
      }
    ]
  },
  "kalkulator-vat": {
    "cat": "finance",
    "name": "BTW- en percentagecalculator",
    "desc": "Voeg BTW toe of trek af (23%, 8%, 5%), bereken netto/bruto en eenvoudige percentages van een bedrag.",
    "steps": [
      "Voer een netto- of brutobedrag in.",
      "Kies een BTW-tarief of aangepast percentage.",
      "Bekijk de uitsplitsing netto, BTW en bruto."
    ],
    "faq": [
      {
        "q": "Welke BTW-tarieven zijn er in Polen?",
        "a": "Standaard 23%, verlaagd 8% en 5%. U kunt ook een eigen tarief invoeren."
      }
    ]
  },
  "kalkulator-wieku": {
    "cat": "time",
    "name": "Leeftijds- en aftelcalculator",
    "desc": "Bereken exacte leeftijd in jaren, maanden en dagen — of hoeveel dagen tot een datum.",
    "steps": [
      "Voer geboortedatum of doeldatum in.",
      "Bekijk leeftijd of aftelling.",
      "Controleer ook de volgende verjaardag."
    ],
    "faq": [
      {
        "q": "Hoe wordt leeftijd berekend?",
        "a": "Van geboortedatum tot vandaag, met jaren, maanden en dagen — niet alleen kalenderjaren."
      }
    ]
  },
  "generator-hasel": {
    "cat": "dev",
    "name": "Wachtwoordgenerator",
    "desc": "Genereer een sterk wachtwoord lokaal in uw browser. Stel lengte en tekensets in — niets wordt naar een server gestuurd.",
    "steps": [
      "Stel lengte en tekenopties in.",
      "Klik op Genereren.",
      "Kopieer met één klik."
    ],
    "faq": [
      {
        "q": "Wordt het wachtwoord geüpload?",
        "a": "Nee — generatie gebeurt volledig in uw browser."
      }
    ]
  },
  "licznik-znakow": {
    "cat": "text",
    "name": "Teken- en woordenteller",
    "desc": "Tel tekens, woorden, zinnen en alinea's — handig voor SEO, social media en formulierlimieten.",
    "steps": [
      "Plak of typ tekst.",
      "Bekijk live statistieken.",
      "Controleer lengte zonder spaties."
    ],
    "faq": [
      {
        "q": "Hoe worden woorden geteld?",
        "a": "Woorden zijn reeksen gescheiden door spaties of regels."
      }
    ]
  },
  "generator-qr": {
    "cat": "dev",
    "name": "QR-codegenerator",
    "desc": "Maak een QR-code van een link of tekst en download als PNG. Werkt lokaal in de browser.",
    "steps": [
      "Voer tekst of URL in.",
      "Genereer QR-voorbeeld.",
      "Download een PNG-afbeelding."
    ],
    "faq": [
      {
        "q": "Wordt QR-inhoud geüpload?",
        "a": "Nee — de code wordt lokaal gemaakt. We slaan de inhoud niet op."
      }
    ]
  },
  "kalkulator-bitrate": {
    "cat": "media",
    "name": "Bestandsgrootte- en bitratecalculator",
    "desc": "Schat hoe groot een audio-/videobestand wordt bij gegeven bitrate en duur — of welke bitrate in een MB-limiet past.",
    "steps": [
      "Kies grootte uit bitrate of bitrate uit limiet.",
      "Voer duur en waarden in.",
      "Lees resultaat in MB / kbps."
    ],
    "faq": [
      {
        "q": "Is de container inbegrepen?",
        "a": "Het schat de ruwe stream. Containers en extra tracks voegen meestal enkele procenten toe."
      }
    ]
  },
  "konwerter-kolorow": {
    "cat": "dev",
    "name": "HEX RGB HSL kleurconverter",
    "desc": "Converteer kleuren tussen HEX, RGB en HSL en controleer WCAG-contrast tegen een achtergrond.",
    "steps": [
      "Voer een kleur in elk formaat in.",
      "Bekijk HEX/RGB/HSL-equivalenten.",
      "Controleer contrast tegen een achtergrond."
    ],
    "faq": [
      {
        "q": "Wat betekenen AA / AAA?",
        "a": "WCAG-toegankelijkheidsniveaus voor tekstcontrast tegen een achtergrond."
      }
    ]
  },
  "base64": {
    "cat": "dev",
    "name": "Base64 encoderen / decoderen",
    "desc": "Codeer tekst naar Base64 of decodeer Base64 terug. Lokaal, zonder gegevens te uploaden.",
    "steps": [
      "Plak tekst of Base64.",
      "Kies Encoderen of Decoderen.",
      "Kopieer het resultaat."
    ],
    "faq": [
      {
        "q": "Ondersteunt het UTF-8?",
        "a": "Ja — Unicode-tekens worden ondersteund."
      }
    ]
  },
  "unix-timestamp": {
    "cat": "dev",
    "name": "Unix-timestamp ↔ datum",
    "desc": "Converteer een Unix-timestamp (seconden/ms) naar datum en terug. Handig voor logs en API's.",
    "steps": [
      "Plak een timestamp of kies een datum.",
      "Bekijk ISO- en lokale resultaten.",
      "Kopieer de waarde."
    ],
    "faq": [
      {
        "q": "Seconden of milliseconden?",
        "a": "We detecteren automatisch op lengte. U kunt de eenheid ook forceren."
      }
    ]
  },
  "generator-uuid": {
    "cat": "dev",
    "name": "UUID-generator",
    "desc": "Genereer UUID v4 (willekeurig) met één klik. Maak er desgewenst meerdere tegelijk.",
    "steps": [
      "Stel aantal UUID's in.",
      "Klik op Genereren.",
      "Kopieer de lijst."
    ],
    "faq": [
      {
        "q": "Welke UUID-versie?",
        "a": "UUID v4 — willekeurig, RFC 4122, gegenereerd in de browser."
      }
    ]
  },
  "generator-hash": {
    "cat": "dev",
    "name": "SHA / MD5-hash",
    "desc": "Bereken SHA-1, SHA-256, SHA-512 of MD5 van tekst. Lokaal via Web Crypto.",
    "steps": [
      "Plak tekst.",
      "Kies een algoritme.",
      "Kopieer de hex-hash."
    ],
    "faq": [
      {
        "q": "Is MD5 veilig?",
        "a": "MD5 is niet voor wachtwoorden. Gebruik SHA-256+ voor beveiliging; MD5 alleen voor checksums."
      }
    ]
  },
  "json-formatter": {
    "cat": "dev",
    "name": "JSON-formatter",
    "desc": "Formatteer en minificeer JSON in de browser — geen server-upload.",
    "steps": [
      "Plak JSON.",
      "Klik op Formatteren of Minificeren.",
      "Kopieer het resultaat."
    ],
    "faq": [
      {
        "q": "Worden gegevens geüpload?",
        "a": "Nee — verwerking gebeurt lokaal in uw browser."
      }
    ]
  },
  "diff-tekstu": {
    "cat": "text",
    "name": "Tekst-diff",
    "desc": "Vergelijk twee tekstfragmenten regel voor regel en markeer verschillen.",
    "steps": [
      "Plak tekst A en B.",
      "Bekijk gemarkeerde verschillen."
    ],
    "faq": [
      {
        "q": "Is dit een volledige diff?",
        "a": "Het is een regel-voor-regel vergelijking — ideaal voor korte fragmenten en lijsten."
      }
    ]
  },
  "konwerter-wielkosci-liter": {
    "cat": "text",
    "name": "Hoofdletterconverter",
    "desc": "Converteer tekst naar hoofdletters, kleine letters, Title Case of sentence case.",
    "steps": [
      "Plak tekst.",
      "Kies een modus.",
      "Kopieer het resultaat."
    ],
    "faq": []
  },
  "usun-duplikaty-linii": {
    "cat": "text",
    "name": "Dubbele regels verwijderen",
    "desc": "Verwijder herhaalde regels uit e-maillijsten, SKU's of tags.",
    "steps": [
      "Plak een lijst.",
      "Stel opties in.",
      "Kopieer de schone lijst."
    ],
    "faq": []
  },
  "dekoder-jwt": {
    "cat": "dev",
    "name": "JWT-decoder",
    "desc": "Lees de header en payload van een JWT zonder de handtekening te verifiëren.",
    "steps": [
      "Plak een token.",
      "Inspecteer header en payload."
    ],
    "faq": [
      {
        "q": "Verifieert het de handtekening?",
        "a": "Nee — het decodeert alleen Base64URL van het token."
      }
    ]
  },
  "walidator-nip-pesel": {
    "cat": "dev",
    "name": "NIP / PESEL / REGON-validator",
    "desc": "Valideer Poolse belasting- en ID-nummers volgens checksumregels.",
    "steps": [
      "Voer een nummer in.",
      "Bekijk het validatieresultaat."
    ],
    "faq": [
      {
        "q": "Raadpleegt het GUS-register?",
        "a": "Nee — alleen checksum en lengte."
      }
    ]
  },
  "kalkulator-kredytu": {
    "cat": "finance",
    "name": "Leningcalculator",
    "desc": "Bereken annuïteit, totale terugbetaling en rentekosten.",
    "steps": [
      "Voer bedrag, rente en looptijd in.",
      "Lees de maandelijkse betaling."
    ],
    "faq": [
      {
        "q": "Zijn bankkosten inbegrepen?",
        "a": "Dit is een vereenvoudigde simulatie zonder kosten of verzekeringen."
      }
    ]
  },
  "markdown-preview": {
    "cat": "text",
    "name": "Markdown-voorbeeld",
    "desc": "Schrijf Markdown en bekijk een live HTML-voorbeeld in de browser.",
    "steps": [
      "Typ Markdown.",
      "Voorbeeld wordt automatisch bijgewerkt."
    ],
    "faq": []
  },
  "sila-hasla": {
    "cat": "dev",
    "name": "Wachtwoordsterkte",
    "desc": "Beoordeel wachtwoordsterkte op lengte, tekenvariëteit en veelvoorkomende patronen.",
    "steps": [
      "Voer een wachtwoord in.",
      "Bekijk score en tips."
    ],
    "faq": [
      {
        "q": "Wordt het wachtwoord geüpload?",
        "a": "Nee — beoordeling gebeurt lokaal in uw browser."
      }
    ]
  },
  "konwerter-napisow": {
    "cat": "media",
    "name": "SRT / VTT ondertitelconverter",
    "desc": "Converteer ondertitels tussen SRT- en WebVTT-formaten.",
    "steps": [
      "Plak ondertitels.",
      "Kies richting of auto.",
      "Kopieer het resultaat."
    ],
    "faq": []
  },
  "generator-nazw-plikow": {
    "cat": "text",
    "name": "Batch bestandshernoemer",
    "desc": "Hernoem bestanden in bulk met een patroon {name}, {ext}, {index}.",
    "steps": [
      "Plak een bestandslijst.",
      "Stel een patroon in.",
      "Kopieer nieuwe namen."
    ],
    "faq": []
  },
  "walidator-iban": {
    "cat": "dev",
    "name": "IBAN-validator",
    "desc": "Valideer IBAN-checksum (mod 97) en landspecifieke lengte.",
    "steps": [
      "Plak een IBAN.",
      "Bekijk geformatteerde output en validatie."
    ],
    "faq": [
      {
        "q": "Verifieert het de bankrekening?",
        "a": "Nee — alleen formaat en checksum."
      }
    ]
  },
  "kalkulator-b2b": {
    "cat": "finance",
    "name": "B2B vs dienstverband calculator",
    "desc": "Vergelijk nettoloon uit dienstverband met B2B-factuurinkomen (forfaitaire of lineaire belasting).",
    "steps": [
      "Voer brutoloon en B2B-omzet in.",
      "Kies belastingvorm.",
      "Vergelijk resultaten."
    ],
    "faq": [
      {
        "q": "Is dit fiscaal advies?",
        "a": "Nee — vereenvoudigde simulatie om te bespreken met een accountant."
      }
    ]
  }
};
