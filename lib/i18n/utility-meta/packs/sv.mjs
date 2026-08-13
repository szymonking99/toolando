export const svTools = {
  "przelicznik-walut": {
    "cat": "finance",
    "name": "Valutakonverterare",
    "desc": "Konvertera valutor online med aktuella ECB-referenskurser. PLN, EUR, USD och dussintals andra par — utan registrering.",
    "steps": [
      "Ange belopp och källvaluta.",
      "Välj målvaluta.",
      "Läs resultat och dagens kurs."
    ],
    "faq": [
      {
        "q": "Var kommer kurserna ifrån?",
        "a": "Referenskurser från Europeiska centralbanken via Frankfurter API, uppdaterade på vardagar."
      },
      {
        "q": "Är kurserna i realtid?",
        "a": "Det är ECB-referenskurser, inte bank- eller växlingskurser."
      }
    ]
  },
  "kalkulator-dat": {
    "cat": "time",
    "name": "Datumkalkylator",
    "desc": "Beräkna dagar mellan två datum, arbetsdagar och veckodag — användbart för avtal och deadlines.",
    "steps": [
      "Välj start- och slutdatum.",
      "Se skillnad i dagar och veckor.",
      "Räkna valfritt bara vardagar."
    ],
    "faq": [
      {
        "q": "Exkluderas helgdagar?",
        "a": "Som standard exkluderar vi lördag och söndag. Helgdagar beror på landet."
      }
    ]
  },
  "strefy-czasowe": {
    "cat": "time",
    "name": "Tidszonsskillnad",
    "desc": "Jämför lokala tider mellan städer, se timskillnad och hitta platser på en enkel karta.",
    "steps": [
      "Välj käll- och målstad.",
      "Jämför aktuella lokala tider.",
      "Se offset och kartmarkörer."
    ],
    "faq": [
      {
        "q": "Hanterar ni sommartid?",
        "a": "Ja — vi använder IANA-zoner (t.ex. Europe/Warsaw) som tillämpar DST automatiskt."
      }
    ]
  },
  "przelicznik-jednostek": {
    "cat": "units",
    "name": "Enhetsomvandlare",
    "desc": "Konvertera längd, massa, temperatur och volym: cm↔tum, kg↔lb, °C↔°F med mera.",
    "steps": [
      "Välj en enhetskategori.",
      "Ange värde och enheter.",
      "Få resultatet direkt."
    ],
    "faq": [
      {
        "q": "Är omvandlingarna exakta?",
        "a": "Ja — standard SI-faktorer. Temperatur använder egna formler, inte enkel multiplikation."
      }
    ]
  },
  "kalkulator-vat": {
    "cat": "finance",
    "name": "Moms- och procenträknare",
    "desc": "Lägg till eller dra av moms (23%, 8%, 5%), beräkna netto/brutto och enkla procent av ett belopp.",
    "steps": [
      "Ange netto- eller bruttobelopp.",
      "Välj momssats eller egen procent.",
      "Se uppdelning netto, moms och brutto."
    ],
    "faq": [
      {
        "q": "Vilka momssatser finns i Polen?",
        "a": "Standard 23%, reducerade 8% och 5%. Du kan också ange egen sats."
      }
    ]
  },
  "kalkulator-wieku": {
    "cat": "time",
    "name": "Ålder- och nedräkningskalkylator",
    "desc": "Beräkna exakt ålder i år, månader och dagar — eller hur många dagar kvar till ett datum.",
    "steps": [
      "Ange födelsedatum eller måldatum.",
      "Se ålder eller nedräkning.",
      "Kontrollera även nästa födelsedag."
    ],
    "faq": [
      {
        "q": "Hur beräknas ålder?",
        "a": "Från födelsedatum till idag, med år, månader och dagar — inte bara kalenderår."
      }
    ]
  },
  "generator-hasel": {
    "cat": "dev",
    "name": "Lösenordsgenerator",
    "desc": "Generera ett starkt lösenord lokalt i webbläsaren. Ställ in längd och teckenuppsättningar — inget skickas till server.",
    "steps": [
      "Ställ in längd och teckenalternativ.",
      "Klicka Generera.",
      "Kopiera med ett klick."
    ],
    "faq": [
      {
        "q": "Laddas lösenordet upp?",
        "a": "Nej — generering sker helt i din webbläsare."
      }
    ]
  },
  "licznik-znakow": {
    "cat": "text",
    "name": "Tecken- och ordrräknare",
    "desc": "Räkna tecken, ord, meningar och stycken — praktiskt för SEO, sociala medier och formulärgränser.",
    "steps": [
      "Klistra in eller skriv text.",
      "Se live-statistik.",
      "Kontrollera längd utan mellanslag."
    ],
    "faq": [
      {
        "q": "Hur räknas ord?",
        "a": "Ord är sekvenser separerade av mellanslag eller radbrytningar."
      }
    ]
  },
  "generator-qr": {
    "cat": "dev",
    "name": "QR-kodgenerator",
    "desc": "Skapa en QR-kod från länk eller text och ladda ner som PNG. Körs lokalt i webbläsaren.",
    "steps": [
      "Ange text eller URL.",
      "Generera QR-förhandsvisning.",
      "Ladda ner PNG-bild."
    ],
    "faq": [
      {
        "q": "Laddas QR-innehåll upp?",
        "a": "Nej — koden skapas lokalt. Vi lagrar inte innehållet."
      }
    ]
  },
  "kalkulator-bitrate": {
    "cat": "media",
    "name": "Filstorlek- och bitratekalkylator",
    "desc": "Uppskatta hur stor en ljud-/videofil blir vid given bitrate och varaktighet — eller vilken bitrate som ryms i en MB-gräns.",
    "steps": [
      "Välj storlek från bitrate eller bitrate från gräns.",
      "Ange varaktighet och värden.",
      "Läs resultat i MB / kbps."
    ],
    "faq": [
      {
        "q": "Ingår containern?",
        "a": "Det uppskattar råströmmen. Containrar och extra spår lägger vanligtvis till några procent."
      }
    ]
  },
  "konwerter-kolorow": {
    "cat": "dev",
    "name": "HEX RGB HSL färgomvandlare",
    "desc": "Konvertera färger mellan HEX, RGB och HSL och kontrollera WCAG-kontrast mot bakgrund.",
    "steps": [
      "Ange färg i valfritt format.",
      "Se HEX/RGB/HSL-motsvarigheter.",
      "Kontrollera kontrast mot bakgrund."
    ],
    "faq": [
      {
        "q": "Vad betyder AA / AAA?",
        "a": "WCAG-tillgänglighetsnivåer för textkontrast mot bakgrund."
      }
    ]
  },
  "base64": {
    "cat": "dev",
    "name": "Base64 koda / avkoda",
    "desc": "Koda text till Base64 eller avkoda Base64. Lokalt, utan att ladda upp data.",
    "steps": [
      "Klistra in text eller Base64.",
      "Välj Koda eller Avkoda.",
      "Kopiera resultatet."
    ],
    "faq": [
      {
        "q": "Stöder det UTF-8?",
        "a": "Ja — Unicode-tecken stöds."
      }
    ]
  },
  "unix-timestamp": {
    "cat": "dev",
    "name": "Unix-tidsstämpel ↔ datum",
    "desc": "Konvertera Unix-tidsstämpel (sekunder/ms) till datum och tillbaka. Användbart för loggar och API:er.",
    "steps": [
      "Klistra in tidsstämpel eller välj datum.",
      "Se ISO- och lokala resultat.",
      "Kopiera värdet."
    ],
    "faq": [
      {
        "q": "Sekunder eller millisekunder?",
        "a": "Vi detekterar automatiskt efter längd. Du kan också tvinga enheten."
      }
    ]
  },
  "generator-uuid": {
    "cat": "dev",
    "name": "UUID-generator",
    "desc": "Generera UUID v4 (slumpmässig) med ett klick. Skapa flera samtidigt vid behov.",
    "steps": [
      "Ställ in antal UUID.",
      "Klicka Generera.",
      "Kopiera listan."
    ],
    "faq": [
      {
        "q": "Vilken UUID-version?",
        "a": "UUID v4 — slumpmässig, RFC 4122, genererad i webbläsaren."
      }
    ]
  },
  "generator-hash": {
    "cat": "dev",
    "name": "SHA / MD5-hash",
    "desc": "Beräkna SHA-1, SHA-256, SHA-512 eller MD5 av text. Lokalt via Web Crypto.",
    "steps": [
      "Klistra in text.",
      "Välj algoritm.",
      "Kopiera hex-hash."
    ],
    "faq": [
      {
        "q": "Är MD5 säkert?",
        "a": "MD5 är inte för lösenord. Använd SHA-256+ för säkerhet; MD5 endast för checksums."
      }
    ]
  },
  "json-formatter": {
    "cat": "dev",
    "name": "JSON-formaterare",
    "desc": "Formatera och minifiera JSON i webbläsaren — ingen serveruppladdning.",
    "steps": [
      "Klistra in JSON.",
      "Klicka Formatera eller Minifiera.",
      "Kopiera resultatet."
    ],
    "faq": [
      {
        "q": "Laddas data upp?",
        "a": "Nej — bearbetning sker lokalt i din webbläsare."
      }
    ]
  },
  "diff-tekstu": {
    "cat": "text",
    "name": "Text-diff",
    "desc": "Jämför två textutdrag rad för rad och markera skillnader.",
    "steps": [
      "Klistra in text A och B.",
      "Granska markerade skillnader."
    ],
    "faq": [
      {
        "q": "Är detta en fullständig diff?",
        "a": "Det är en rad-för-rad-jämförelse — idealisk för korta utdrag och listor."
      }
    ]
  },
  "konwerter-wielkosci-liter": {
    "cat": "text",
    "name": "Versalconverter",
    "desc": "Konvertera text till versaler, gemener, Title Case eller sentence case.",
    "steps": [
      "Klistra in text.",
      "Välj läge.",
      "Kopiera resultatet."
    ],
    "faq": []
  },
  "usun-duplikaty-linii": {
    "cat": "text",
    "name": "Ta bort dubblettrader",
    "desc": "Ta bort upprepade rader från e-postlistor, SKU:er eller taggar.",
    "steps": [
      "Klistra in lista.",
      "Ställ in alternativ.",
      "Kopiera renad lista."
    ],
    "faq": []
  },
  "dekoder-jwt": {
    "cat": "dev",
    "name": "JWT-dekoder",
    "desc": "Läs header och payload för en JWT utan att verifiera signaturen.",
    "steps": [
      "Klistra in token.",
      "Inspektera header och payload."
    ],
    "faq": [
      {
        "q": "Verifierar den signaturen?",
        "a": "Nej — den avkodar bara Base64URL för token."
      }
    ]
  },
  "walidator-nip-pesel": {
    "cat": "dev",
    "name": "NIP / PESEL / REGON-validator",
    "desc": "Validera polska skatte- och ID-nummer enligt checksumregler.",
    "steps": [
      "Ange nummer.",
      "Se valideringsresultat."
    ],
    "faq": [
      {
        "q": "Frågar den GUS?",
        "a": "Nej — endast checksum och längd."
      }
    ]
  },
  "kalkulator-kredytu": {
    "cat": "finance",
    "name": "Lånekalkylator",
    "desc": "Beräkna annuitet, total återbetalning och räntekostnad.",
    "steps": [
      "Ange belopp, ränta och löptid.",
      "Läs månadsbetalning."
    ],
    "faq": [
      {
        "q": "Ingår bankavgifter?",
        "a": "Detta är en förenklad simulering utan avgifter eller försäkringar."
      }
    ]
  },
  "markdown-preview": {
    "cat": "text",
    "name": "Markdown-förhandsvisning",
    "desc": "Skriv Markdown och se live HTML-förhandsvisning i webbläsaren.",
    "steps": [
      "Skriv Markdown.",
      "Förhandsvisning uppdateras automatiskt."
    ],
    "faq": []
  },
  "sila-hasla": {
    "cat": "dev",
    "name": "Lösenordsstyrka",
    "desc": "Bedöm lösenordsstyrka efter längd, teckenvariation och vanliga mönster.",
    "steps": [
      "Ange lösenord.",
      "Se poäng och tips."
    ],
    "faq": [
      {
        "q": "Laddas lösenordet upp?",
        "a": "Nej — bedömning sker lokalt i din webbläsare."
      }
    ]
  },
  "konwerter-napisow": {
    "cat": "media",
    "name": "SRT / VTT undertextkonverterare",
    "desc": "Konvertera undertexter mellan SRT- och WebVTT-format.",
    "steps": [
      "Klistra in undertexter.",
      "Välj riktning eller auto.",
      "Kopiera resultatet."
    ],
    "faq": []
  },
  "generator-nazw-plikow": {
    "cat": "text",
    "name": "Batch filnamnsbytare",
    "desc": "Byt namn på filer i bulk med mönster {name}, {ext}, {index}.",
    "steps": [
      "Klistra in fillista.",
      "Ställ in mönster.",
      "Kopiera nya namn."
    ],
    "faq": []
  },
  "walidator-iban": {
    "cat": "dev",
    "name": "IBAN-validator",
    "desc": "Validera IBAN-checksum (mod 97) och landsspecifik längd.",
    "steps": [
      "Klistra in IBAN.",
      "Se formaterad output och validering."
    ],
    "faq": [
      {
        "q": "Verifierar den bankkontot?",
        "a": "Nej — endast format och checksum."
      }
    ]
  },
  "kalkulator-b2b": {
    "cat": "finance",
    "name": "B2B vs anställningskalkylator",
    "desc": "Jämför nettolön från anställning med B2B-fakturainkomst (schablon- eller linjär skatt).",
    "steps": [
      "Ange brutolön och B2B-intäkter.",
      "Välj skatteform.",
      "Jämför resultat."
    ],
    "faq": [
      {
        "q": "Är detta skatterådgivning?",
        "a": "Nej — förenklad simulering för diskussion med revisor."
      }
    ]
  }
};
