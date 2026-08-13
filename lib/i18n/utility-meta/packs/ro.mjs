export const roTools = {
  "przelicznik-walut": {
    "cat": "finance",
    "name": "Convertor valutar",
    "desc": "Convertiți valute online cu cursurile de referință BCE. PLN, EUR, USD și zeci de alte perechi — fără înregistrare.",
    "steps": [
      "Introduceți suma și moneda sursă.",
      "Alegeți moneda țintă.",
      "Consultați rezultatul și cursul zilei."
    ],
    "faq": [
      {
        "q": "De unde provin cursurile?",
        "a": "Cursuri de referință ale Băncii Centrale Europene prin API Frankfurter, actualizate în zilele lucrătoare."
      },
      {
        "q": "Sunt cursurile în timp real?",
        "a": "Sunt cursuri de referință BCE, nu cotații bancare sau de schimb valutar."
      }
    ]
  },
  "kalkulator-dat": {
    "cat": "time",
    "name": "Calculator de date",
    "desc": "Calculați zilele între două date, zilele lucrătoare și ziua săptămânii — util pentru contracte și termene.",
    "steps": [
      "Alegeți datele de început și sfârșit.",
      "Vedeți diferența în zile și săptămâni.",
      "Opțional numărați doar zilele lucrătoare."
    ],
    "faq": [
      {
        "q": "Sunt excluse sărbătorile?",
        "a": "Implicit excludem sâmbăta și duminica. Sărbătorile depind de țară."
      }
    ]
  },
  "strefy-czasowe": {
    "cat": "time",
    "name": "Diferență fusuri orare",
    "desc": "Comparați orele locale între orașe, vedeți diferența de ore și găsiți locurile pe o hartă simplă.",
    "steps": [
      "Alegeți orașele sursă și destinație.",
      "Comparați orele locale actuale.",
      "Vedeți decalajul și marcajele pe hartă."
    ],
    "faq": [
      {
        "q": "Țineți cont de ora de vară?",
        "a": "Da — folosim zone IANA (ex. Europe/Warsaw) care aplică DST automat."
      }
    ]
  },
  "przelicznik-jednostek": {
    "cat": "units",
    "name": "Convertor unități",
    "desc": "Convertiți lungime, masă, temperatură și volum: cm↔inch, kg↔lb, °C↔°F și altele.",
    "steps": [
      "Alegeți o categorie de unități.",
      "Introduceți valoarea și unitățile.",
      "Obțineți rezultatul instant."
    ],
    "faq": [
      {
        "q": "Conversiile sunt exacte?",
        "a": "Da — factori SI standard. Temperatura folosește formule dedicate, nu înmulțire simplă."
      }
    ]
  },
  "kalkulator-vat": {
    "cat": "finance",
    "name": "Calculator TVA și procente",
    "desc": "Adăugați sau scădeți TVA (23%, 8%, 5%), calculați net/brut și procente simple dintr-o sumă.",
    "steps": [
      "Introduceți suma netă sau brută.",
      "Alegeți cota TVA sau procent personalizat.",
      "Vedeți defalcarea net, TVA și brut."
    ],
    "faq": [
      {
        "q": "Ce cote TVA există în Polonia?",
        "a": "Standard 23%, reduse 8% și 5%. Puteți introduce și o cotă personalizată."
      }
    ]
  },
  "kalkulator-wieku": {
    "cat": "time",
    "name": "Calculator vârstă și countdown",
    "desc": "Calculați vârsta exactă în ani, luni și zile — sau câte zile rămân până la o dată.",
    "steps": [
      "Introduceți data nașterii sau data țintă.",
      "Vedeți vârsta sau countdown-ul.",
      "Verificați și următorul zi de naștere."
    ],
    "faq": [
      {
        "q": "Cum se calculează vârsta?",
        "a": "De la data nașterii până azi, numărând ani, luni și zile — nu doar ani calendaristici."
      }
    ]
  },
  "generator-hasel": {
    "cat": "dev",
    "name": "Generator parole",
    "desc": "Generați o parolă puternică local în browser. Setați lungimea și seturile de caractere — nimic nu se trimite pe server.",
    "steps": [
      "Setați lungimea și opțiunile de caractere.",
      "Faceți clic pe Generează.",
      "Copiați cu un clic."
    ],
    "faq": [
      {
        "q": "Parola este încărcată?",
        "a": "Nu — generarea are loc complet în browserul dvs."
      }
    ]
  },
  "licznik-znakow": {
    "cat": "text",
    "name": "Contor caractere și cuvinte",
    "desc": "Numărați caractere, cuvinte, propoziții și paragrafe — util pentru SEO, social media și limite formulare.",
    "steps": [
      "Lipiți sau tastați text.",
      "Urmăriți statisticile live.",
      "Verificați lungimea fără spații."
    ],
    "faq": [
      {
        "q": "Cum se numără cuvintele?",
        "a": "Cuvintele sunt secvențe separate prin spații sau linii noi."
      }
    ]
  },
  "generator-qr": {
    "cat": "dev",
    "name": "Generator coduri QR",
    "desc": "Creați un cod QR din link sau text și descărcați ca PNG. Rulează local în browser.",
    "steps": [
      "Introduceți text sau URL.",
      "Generați previzualizarea QR.",
      "Descărcați imagine PNG."
    ],
    "faq": [
      {
        "q": "Conținutul QR este încărcat?",
        "a": "Nu — codul se creează local. Nu stocăm conținutul."
      }
    ]
  },
  "kalkulator-bitrate": {
    "cat": "media",
    "name": "Calculator dimensiune fișier și bitrate",
    "desc": "Estimați cât de mare va fi un fișier audio/video la bitrate și durată date — sau bitrate-ul care încape într-o limită MB.",
    "steps": [
      "Alegeți dimensiune din bitrate sau bitrate din limită.",
      "Introduceți durata și valorile.",
      "Citiți rezultatul în MB / kbps."
    ],
    "faq": [
      {
        "q": "Include containerul?",
        "a": "Estimează fluxul brut. Containerele și pistele extra adaugă de obicei câteva procente."
      }
    ]
  },
  "konwerter-kolorow": {
    "cat": "dev",
    "name": "Convertor culori HEX RGB HSL",
    "desc": "Convertiți culori între HEX, RGB și HSL și verificați contrastul WCAG față de fundal.",
    "steps": [
      "Introduceți culoarea în orice format.",
      "Vedeți echivalentele HEX/RGB/HSL.",
      "Verificați contrastul față de fundal."
    ],
    "faq": [
      {
        "q": "Ce înseamnă AA / AAA?",
        "a": "Niveluri de accesibilitate WCAG pentru contrastul textului față de fundal."
      }
    ]
  },
  "base64": {
    "cat": "dev",
    "name": "Base64 codare / decodare",
    "desc": "Codificați text în Base64 sau decodificați Base64. Local, fără încărcare de date.",
    "steps": [
      "Lipiți text sau Base64.",
      "Alegeți Codare sau Decodare.",
      "Copiați rezultatul."
    ],
    "faq": [
      {
        "q": "Suportă UTF-8?",
        "a": "Da — caracterele Unicode sunt suportate."
      }
    ]
  },
  "unix-timestamp": {
    "cat": "dev",
    "name": "Timestamp Unix ↔ dată",
    "desc": "Convertiți timestamp Unix (secunde/ms) în dată și invers. Util pentru loguri și API-uri.",
    "steps": [
      "Lipiți timestamp sau alegeți o dată.",
      "Vedeți rezultate ISO și locale.",
      "Copiați valoarea."
    ],
    "faq": [
      {
        "q": "Secunde sau milisecunde?",
        "a": "Detectăm automat după lungime. Puteți forța unitatea."
      }
    ]
  },
  "generator-uuid": {
    "cat": "dev",
    "name": "Generator UUID",
    "desc": "Generați UUID v4 (aleator) cu un clic. Creați mai multe deodată dacă e nevoie.",
    "steps": [
      "Setați câte UUID.",
      "Faceți clic pe Generează.",
      "Copiați lista."
    ],
    "faq": [
      {
        "q": "Ce versiune UUID?",
        "a": "UUID v4 — aleator, RFC 4122, generat în browser."
      }
    ]
  },
  "generator-hash": {
    "cat": "dev",
    "name": "Hash SHA / MD5",
    "desc": "Calculați SHA-1, SHA-256, SHA-512 sau MD5 al unui text. Local via Web Crypto.",
    "steps": [
      "Lipiți text.",
      "Alegeți algoritm.",
      "Copiați hash hex."
    ],
    "faq": [
      {
        "q": "MD5 este sigur?",
        "a": "MD5 nu e pentru parole. Folosiți SHA-256+ pentru securitate; MD5 doar pentru checksum."
      }
    ]
  },
  "json-formatter": {
    "cat": "dev",
    "name": "Formator JSON",
    "desc": "Formatați și minificați JSON în browser — fără încărcare pe server.",
    "steps": [
      "Lipiți JSON.",
      "Faceți clic pe Formatare sau Minificare.",
      "Copiați rezultatul."
    ],
    "faq": [
      {
        "q": "Datele sunt încărcate?",
        "a": "Nu — procesarea are loc local în browserul dvs."
      }
    ]
  },
  "diff-tekstu": {
    "cat": "text",
    "name": "Diff text",
    "desc": "Comparați două fragmente de text linie cu linie și evidențiați diferențele.",
    "steps": [
      "Lipiți textul A și B.",
      "Revizuiți diferențele evidențiate."
    ],
    "faq": [
      {
        "q": "Este un diff complet?",
        "a": "E o comparație linie cu linie — ideală pentru fragmente scurte și liste."
      }
    ]
  },
  "konwerter-wielkosci-liter": {
    "cat": "text",
    "name": "Convertor majuscule/minuscule",
    "desc": "Convertiți text în majuscule, minuscule, Title Case sau sentence case.",
    "steps": [
      "Lipiți text.",
      "Alegeți modul.",
      "Copiați rezultatul."
    ],
    "faq": []
  },
  "usun-duplikaty-linii": {
    "cat": "text",
    "name": "Elimină linii duplicate",
    "desc": "Eliminați liniile repetate din liste de e-mail, SKU sau taguri.",
    "steps": [
      "Lipiți o listă.",
      "Setați opțiuni.",
      "Copiați lista curățată."
    ],
    "faq": []
  },
  "dekoder-jwt": {
    "cat": "dev",
    "name": "Decodificator JWT",
    "desc": "Citiți header-ul și payload-ul unui JWT fără a verifica semnătura.",
    "steps": [
      "Lipiți un token.",
      "Inspectați header și payload."
    ],
    "faq": [
      {
        "q": "Verifică semnătura?",
        "a": "Nu — doar decodează Base64URL al tokenului."
      }
    ]
  },
  "walidator-nip-pesel": {
    "cat": "dev",
    "name": "Validator NIP / PESEL / REGON",
    "desc": "Validați numere fiscale și de identificare poloneze conform regulilor de checksum.",
    "steps": [
      "Introduceți un număr.",
      "Vedeți rezultatul validării."
    ],
    "faq": [
      {
        "q": "Interoghează registrul GUS?",
        "a": "Nu — doar checksum și lungime."
      }
    ]
  },
  "kalkulator-kredytu": {
    "cat": "finance",
    "name": "Calculator credit",
    "desc": "Calculați rata anuită, rambursarea totală și costul dobânzii.",
    "steps": [
      "Introduceți suma, rata și termenul.",
      "Citiți rata lunară."
    ],
    "faq": [
      {
        "q": "Include comisioane bancare?",
        "a": "Simulare simplificată fără comisioane sau asigurări."
      }
    ]
  },
  "markdown-preview": {
    "cat": "text",
    "name": "Previzualizare Markdown",
    "desc": "Scrieți Markdown și vedeți previzualizare HTML live în browser.",
    "steps": [
      "Tastați Markdown.",
      "Previzualizarea se actualizează automat."
    ],
    "faq": []
  },
  "sila-hasla": {
    "cat": "dev",
    "name": "Puterea parolei",
    "desc": "Evaluați puterea parolei după lungime, varietate de caractere și modele comune.",
    "steps": [
      "Introduceți parola.",
      "Vedeți scorul și sfaturile."
    ],
    "faq": [
      {
        "q": "Parola este încărcată?",
        "a": "Nu — evaluarea are loc local în browserul dvs."
      }
    ]
  },
  "konwerter-napisow": {
    "cat": "media",
    "name": "Convertor subtitrări SRT / VTT",
    "desc": "Convertiți subtitrări între formatele SRT și WebVTT.",
    "steps": [
      "Lipiți subtitrările.",
      "Alegeți direcția sau auto.",
      "Copiați rezultatul."
    ],
    "faq": []
  },
  "generator-nazw-plikow": {
    "cat": "text",
    "name": "Redenumire fișiere în lot",
    "desc": "Redenumiți fișiere în masă cu un șablon {name}, {ext}, {index}.",
    "steps": [
      "Lipiți lista de fișiere.",
      "Setați șablonul.",
      "Copiați noile nume."
    ],
    "faq": []
  },
  "walidator-iban": {
    "cat": "dev",
    "name": "Validator IBAN",
    "desc": "Validați checksum IBAN (mod 97) și lungimea specifică țării.",
    "steps": [
      "Lipiți un IBAN.",
      "Vedeți output formatat și validare."
    ],
    "faq": [
      {
        "q": "Verifică contul bancar?",
        "a": "Nu — doar format și checksum."
      }
    ]
  },
  "kalkulator-b2b": {
    "cat": "finance",
    "name": "Calculator B2B vs angajare",
    "desc": "Comparați salariul net din angajare cu veniturile din factură B2B (impozit forfetar sau liniar).",
    "steps": [
      "Introduceți brutul angajării și veniturile B2B.",
      "Alegeți forma fiscală.",
      "Comparați rezultatele."
    ],
    "faq": [
      {
        "q": "Este consultanță fiscală?",
        "a": "Nu — simulare simplificată pentru discuție cu contabilul."
      }
    ]
  }
};
