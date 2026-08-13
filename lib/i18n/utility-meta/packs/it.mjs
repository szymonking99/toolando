export const itTools = {
  "przelicznik-walut": {
    "cat": "finance",
    "name": "Convertitore valute",
    "desc": "Converti valute online con i tassi di riferimento BCE. PLN, EUR, USD e decine di altre coppie — senza registrazione.",
    "steps": [
      "Inserisci un importo e la valuta di origine.",
      "Scegli la valuta di destinazione.",
      "Leggi il risultato e il tasso del giorno."
    ],
    "faq": [
      {
        "q": "Da dove provengono i tassi?",
        "a": "Tassi di riferimento della Banca centrale europea tramite API Frankfurter, aggiornati nei giorni lavorativi."
      },
      {
        "q": "I tassi sono in tempo reale?",
        "a": "Sono tassi di riferimento BCE, non quotazioni bancarie o di cambio."
      }
    ]
  },
  "kalkulator-dat": {
    "cat": "time",
    "name": "Calcolatore date",
    "desc": "Calcola i giorni tra due date, i giorni lavorativi e il giorno della settimana — utile per contratti e scadenze.",
    "steps": [
      "Scegli le date di inizio e fine.",
      "Vedi la differenza in giorni e settimane.",
      "Opzionalmente conta solo i giorni lavorativi."
    ],
    "faq": [
      {
        "q": "I festivi sono esclusi?",
        "a": "Per impostazione predefinita escludiamo sabato e domenica. I festivi dipendono dal paese."
      }
    ]
  },
  "strefy-czasowe": {
    "cat": "time",
    "name": "Differenza fusi orari",
    "desc": "Confronta gli orari locali tra città, vedi la differenza di ore e individua i luoghi su una mappa semplice.",
    "steps": [
      "Scegli le città di origine e destinazione.",
      "Confronta gli orari locali attuali.",
      "Vedi lo scostamento e i marcatori sulla mappa."
    ],
    "faq": [
      {
        "q": "Gestite l'ora legale?",
        "a": "Sì — usiamo zone IANA (es. Europe/Warsaw) che applicano automaticamente l'ora legale."
      }
    ]
  },
  "przelicznik-jednostek": {
    "cat": "units",
    "name": "Convertitore unità",
    "desc": "Converti lunghezza, massa, temperatura e volume: cm↔pollici, kg↔lb, °C↔°F e altro.",
    "steps": [
      "Scegli una categoria di unità.",
      "Inserisci un valore e le unità.",
      "Ottieni il risultato istantaneamente."
    ],
    "faq": [
      {
        "q": "Le conversioni sono accurate?",
        "a": "Sì — fattori SI standard. La temperatura usa formule dedicate, non una semplice moltiplicazione."
      }
    ]
  },
  "kalkulator-vat": {
    "cat": "finance",
    "name": "Calcolatore IVA e percentuali",
    "desc": "Aggiungi o rimuovi IVA (23%, 8%, 5%), calcola netto/lordo e semplici percentuali di un importo.",
    "steps": [
      "Inserisci un importo netto o lordo.",
      "Scegli un'aliquota IVA o percentuale personalizzata.",
      "Vedi la ripartizione netto, IVA e lordo."
    ],
    "faq": [
      {
        "q": "Quali aliquote IVA in Polonia?",
        "a": "Standard 23%, ridotte 8% e 5%. Puoi anche inserire un'aliquota personalizzata."
      }
    ]
  },
  "kalkulator-wieku": {
    "cat": "time",
    "name": "Calcolatore età e countdown",
    "desc": "Calcola l'età esatta in anni, mesi e giorni — o quanti giorni mancano a una data.",
    "steps": [
      "Inserisci una data di nascita o una data obiettivo.",
      "Vedi l'età o il countdown.",
      "Controlla anche il prossimo compleanno."
    ],
    "faq": [
      {
        "q": "Come viene calcolata l'età?",
        "a": "Dalla data di nascita a oggi, contando anni, mesi e giorni — non solo anni di calendario."
      }
    ]
  },
  "generator-hasel": {
    "cat": "dev",
    "name": "Generatore password",
    "desc": "Genera una password forte localmente nel browser. Imposta lunghezza e set di caratteri — nulla viene inviato al server.",
    "steps": [
      "Imposta lunghezza e opzioni caratteri.",
      "Clicca Genera.",
      "Copia con un clic."
    ],
    "faq": [
      {
        "q": "La password viene caricata?",
        "a": "No — la generazione avviene interamente nel tuo browser."
      }
    ]
  },
  "licznik-znakow": {
    "cat": "text",
    "name": "Contatore caratteri e parole",
    "desc": "Conta caratteri, parole, frasi e paragrafi — utile per SEO, social e limiti dei moduli.",
    "steps": [
      "Incolla o digita testo.",
      "Guarda le statistiche in tempo reale.",
      "Controlla la lunghezza senza spazi."
    ],
    "faq": [
      {
        "q": "Come vengono contate le parole?",
        "a": "Le parole sono sequenze separate da spazi o a capo."
      }
    ]
  },
  "generator-qr": {
    "cat": "dev",
    "name": "Generatore codici QR",
    "desc": "Crea un codice QR da un link o testo e scaricalo come PNG. Funziona localmente nel browser.",
    "steps": [
      "Inserisci testo o URL.",
      "Genera l'anteprima QR.",
      "Scarica un'immagine PNG."
    ],
    "faq": [
      {
        "q": "Il contenuto QR viene caricato?",
        "a": "No — il codice viene creato localmente. Non memorizziamo il contenuto."
      }
    ]
  },
  "kalkulator-bitrate": {
    "cat": "media",
    "name": "Calcolatore dimensione file e bitrate",
    "desc": "Stima quanto sarà grande un file audio/video con bitrate e durata dati — o il bitrate che rientra in un limite MB.",
    "steps": [
      "Scegli dimensione da bitrate o bitrate da limite.",
      "Inserisci durata e valori.",
      "Leggi il risultato in MB / kbps."
    ],
    "faq": [
      {
        "q": "Include il contenitore?",
        "a": "Stima il flusso grezzo. Contenitori e tracce extra aggiungono di solito qualche percento."
      }
    ]
  },
  "konwerter-kolorow": {
    "cat": "dev",
    "name": "Convertitore colori HEX RGB HSL",
    "desc": "Converti colori tra HEX, RGB e HSL e verifica il contrasto WCAG rispetto a uno sfondo.",
    "steps": [
      "Inserisci un colore in qualsiasi formato.",
      "Vedi gli equivalenti HEX/RGB/HSL.",
      "Verifica il contrasto rispetto a uno sfondo."
    ],
    "faq": [
      {
        "q": "Cosa significano AA / AAA?",
        "a": "Livelli di accessibilità WCAG per il contrasto del testo rispetto a uno sfondo."
      }
    ]
  },
  "base64": {
    "cat": "dev",
    "name": "Base64 codifica / decodifica",
    "desc": "Codifica testo in Base64 o decodifica Base64. Localmente, senza caricare dati.",
    "steps": [
      "Incolla testo o Base64.",
      "Scegli Codifica o Decodifica.",
      "Copia il risultato."
    ],
    "faq": [
      {
        "q": "Supporta UTF-8?",
        "a": "Sì — sono supportati i caratteri Unicode."
      }
    ]
  },
  "unix-timestamp": {
    "cat": "dev",
    "name": "Timestamp Unix ↔ data",
    "desc": "Converti un timestamp Unix (secondi/ms) in data e viceversa. Utile per log e API.",
    "steps": [
      "Incolla un timestamp o scegli una data.",
      "Vedi risultati ISO e locali.",
      "Copia il valore."
    ],
    "faq": [
      {
        "q": "Secondi o millisecondi?",
        "a": "Rileviamo automaticamente in base alla lunghezza. Puoi anche forzare l'unità."
      }
    ]
  },
  "generator-uuid": {
    "cat": "dev",
    "name": "Generatore UUID",
    "desc": "Genera UUID v4 (casuale) con un clic. Creane molti insieme se serve.",
    "steps": [
      "Imposta quanti UUID.",
      "Clicca Genera.",
      "Copia l'elenco."
    ],
    "faq": [
      {
        "q": "Quale versione UUID?",
        "a": "UUID v4 — casuale, RFC 4122, generato nel browser."
      }
    ]
  },
  "generator-hash": {
    "cat": "dev",
    "name": "Hash SHA / MD5",
    "desc": "Calcola SHA-1, SHA-256, SHA-512 o MD5 di un testo. Localmente via Web Crypto.",
    "steps": [
      "Incolla testo.",
      "Scegli un algoritmo.",
      "Copia l'hash hex."
    ],
    "faq": [
      {
        "q": "MD5 è sicuro?",
        "a": "MD5 non va usato per le password. Usa SHA-256+ per la sicurezza; MD5 solo per checksum."
      }
    ]
  },
  "json-formatter": {
    "cat": "dev",
    "name": "Formattatore JSON",
    "desc": "Formatta e minifica JSON nel browser — senza caricamento sul server.",
    "steps": [
      "Incolla JSON.",
      "Clicca Formatta o Minifica.",
      "Copia il risultato."
    ],
    "faq": [
      {
        "q": "I dati vengono caricati?",
        "a": "No — l'elaborazione avviene localmente nel browser."
      }
    ]
  },
  "diff-tekstu": {
    "cat": "text",
    "name": "Diff testo",
    "desc": "Confronta due frammenti di testo riga per riga ed evidenzia le differenze.",
    "steps": [
      "Incolla testo A e B.",
      "Esamina le differenze evidenziate."
    ],
    "faq": [
      {
        "q": "È un diff completo?",
        "a": "È un confronto riga per riga — ideale per brevi frammenti ed elenchi."
      }
    ]
  },
  "konwerter-wielkosci-liter": {
    "cat": "text",
    "name": "Convertitore maiuscole/minuscole",
    "desc": "Converti testo in maiuscolo, minuscolo, Title Case o sentence case.",
    "steps": [
      "Incolla testo.",
      "Scegli una modalità.",
      "Copia il risultato."
    ],
    "faq": []
  },
  "usun-duplikaty-linii": {
    "cat": "text",
    "name": "Rimuovi righe duplicate",
    "desc": "Rimuovi righe ripetute da elenchi email, SKU o tag.",
    "steps": [
      "Incolla un elenco.",
      "Imposta le opzioni.",
      "Copia l'elenco pulito."
    ],
    "faq": []
  },
  "dekoder-jwt": {
    "cat": "dev",
    "name": "Decodificatore JWT",
    "desc": "Leggi header e payload di un JWT senza verificare la firma.",
    "steps": [
      "Incolla un token.",
      "Ispeziona header e payload."
    ],
    "faq": [
      {
        "q": "Verifica la firma?",
        "a": "No — decodifica solo Base64URL del token."
      }
    ]
  },
  "walidator-nip-pesel": {
    "cat": "dev",
    "name": "Validatore NIP / PESEL / REGON",
    "desc": "Valida numeri fiscali e identificativi polacchi secondo le regole di checksum.",
    "steps": [
      "Inserisci un numero.",
      "Vedi il risultato della validazione."
    ],
    "faq": [
      {
        "q": "Interroga il registro GUS?",
        "a": "No — solo checksum e lunghezza."
      }
    ]
  },
  "kalkulator-kredytu": {
    "cat": "finance",
    "name": "Calcolatore prestito",
    "desc": "Calcola rate annue, rimborso totale e costo degli interessi.",
    "steps": [
      "Inserisci importo, tasso e durata.",
      "Leggi la rata mensile."
    ],
    "faq": [
      {
        "q": "Include commissioni bancarie?",
        "a": "Simulazione semplificata senza commissioni o assicurazioni."
      }
    ]
  },
  "markdown-preview": {
    "cat": "text",
    "name": "Anteprima Markdown",
    "desc": "Scrivi Markdown e vedi un'anteprima HTML live nel browser.",
    "steps": [
      "Digita Markdown.",
      "L'anteprima si aggiorna automaticamente."
    ],
    "faq": []
  },
  "sila-hasla": {
    "cat": "dev",
    "name": "Forza password",
    "desc": "Valuta la forza di una password per lunghezza, varietà di caratteri e pattern comuni.",
    "steps": [
      "Inserisci una password.",
      "Vedi punteggio e suggerimenti."
    ],
    "faq": [
      {
        "q": "La password viene caricata?",
        "a": "No — la valutazione avviene localmente nel browser."
      }
    ]
  },
  "konwerter-napisow": {
    "cat": "media",
    "name": "Convertitore sottotitoli SRT / VTT",
    "desc": "Converti sottotitoli tra formati SRT e WebVTT.",
    "steps": [
      "Incolla i sottotitoli.",
      "Scegli direzione o auto.",
      "Copia il risultato."
    ],
    "faq": []
  },
  "generator-nazw-plikow": {
    "cat": "text",
    "name": "Rinomina file in batch",
    "desc": "Rinomina file in massa con un pattern {name}, {ext}, {index}.",
    "steps": [
      "Incolla un elenco di file.",
      "Imposta un pattern.",
      "Copia i nuovi nomi."
    ],
    "faq": []
  },
  "walidator-iban": {
    "cat": "dev",
    "name": "Validatore IBAN",
    "desc": "Valida checksum IBAN (mod 97) e lunghezza specifica per paese.",
    "steps": [
      "Incolla un IBAN.",
      "Vedi output formattato e validazione."
    ],
    "faq": [
      {
        "q": "Verifica il conto bancario?",
        "a": "No — solo formato e checksum."
      }
    ]
  },
  "kalkulator-b2b": {
    "cat": "finance",
    "name": "Calcolatore B2B vs dipendente",
    "desc": "Confronta lo stipendio netto da dipendente con i ricavi da fattura B2B (tassazione forfettaria o lineare).",
    "steps": [
      "Inserisci lordo dipendente e ricavi B2B.",
      "Scegli la forma fiscale.",
      "Confronta i risultati."
    ],
    "faq": [
      {
        "q": "È consulenza fiscale?",
        "a": "No — simulazione semplificata per discuterne con un commercialista."
      }
    ]
  }
};
