import type { GuideArticle } from "../types"
import type { GuideSlug } from "../slugs"
import { guidesEn } from "../guides-en"

export const guidesIt: Record<GuideSlug, GuideArticle> = {
  "choose-audio-bitrate": {
    ...guidesEn["choose-audio-bitrate"],
    title: "Quale bitrate MP3 o AAC scegliere?",
    description: "128 vs 192 vs 320 kbps — scelte pratiche per podcast, musica e video senza sprecare spazio su disco.",
    sections: [
      {
        paragraphs: [
          "Il bitrate è la quantità di dati per secondo di audio. Bitrate più alto di solito significa suono migliore, ma file più grandi. Con MP3, il divario tra 128 e 320 kbps si sente soprattutto su buoni altoparlanti e musica densa.",
          "Per la voce (podcast, interviste) spesso bastano 96–128 kbps mono. Per musica in cuffia, 192–256 kbps stereo è un buon compromesso. 320 kbps è il limite pratico dell'MP3: salire oltre raramente aiuta perché il formato resta con perdita.",
        ],
      },
      {
        title: "MP3, AAC e Opus — confronto rapido",
        paragraphs: [
          "AAC (M4A) a pari bitrate di solito batte MP3 — per questo YouTube e Apple Music lo usano.",
          "Opus eccelle in VoIP e streaming a bitrate bassi (64–128 kbps).",
          "Per archivi da studio conservate WAV o FLAC: un bitrate con perdita non ripristina i dati mancanti.",
        ],
      },
      {
        title: "Errori comuni",
        paragraphs: [
          "Portare un MP3 di bassa qualità a bitrate più alto non migliora il suono: cresce solo la dimensione del file.",
          "Ricodificare la stessa traccia più volte (MP3 → AAC → MP3) degrada la qualità a ogni passaggio.",
          "Per progetti video estraete l'audio dal vostro MP4 invece di scaricare musica altrui: il copyright conta.",
        ],
      },
    ],
  },
  "compress-images-without-quality-loss": {
    ...guidesEn["compress-images-without-quality-loss"],
    title: "Come comprimere immagini JPG e PNG senza perdita visibile di qualità",
    description: "Quando usare il compressore, quale livello di qualità scegliere e differenza tra compressione e conversione di formato.",
    sections: [
      {
        paragraphs: [
          "Comprimere un'immagine riduce la dimensione senza cambiare formato: resta JPG o PNG, solo più leggera. Convertire JPG → WebP cambia formato ed è spesso migliore per i siti web, ma i flussi di stampa possono richiedere JPG.",
          "Su Toolando.tech ho testato il compressore di immagini su foto prodotto 2000×2000 px: a qualità 80%, la dimensione calava del 40–60% senza artefatti visibili a schermo.",
        ],
      },
      {
        title: "Quando comprimere e quando convertire",
        paragraphs: [
          "Comprimete quando il formato va bene (es. il negozio richiede JPG) ma il file è troppo pesante per e-mail o CMS.",
          "Convertite in WebP/AVIF quando pubblicate sul vostro sito con fallback <picture>.",
          "Non risalvate lo stesso JPG molte volte: ogni passaggio aggiunge artefatti.",
        ],
      },
      {
        title: "Scenari tipici",
        paragraphs: [
          "Allegato e-mail: JPG qualità ~75–85, larghezza max 1600 px.",
          "E-commerce: WebP con fallback JPG; miniature 800 px.",
          "Screenshot UI con testo: PNG o WebP senza perdita — evitate JPG aggressivo.",
        ],
      },
    ],
  },
  "convert-video-to-gif-properly": {
    ...guidesEn["convert-video-to-gif-properly"],
    title: "Come fare un buon GIF dal video — risoluzione, FPS e durata",
    description: "MP4/MOV in GIF senza file gigante: limiti pratici e alternative.",
    sections: [
      {
        paragraphs: [
          "GIF non ha audio e non usa H.264 — ogni fotogramma è un bitmap completo (spesso palette 256 colori). Quindi una clip 10 s a 1080p come GIF può pesare più del video originale. Obiettivo: breve, piccolo, bassa risoluzione.",
          "Prima di MP4 → GIF tagliate la clip a 2–4 secondi in un editor esterno e usate 10–15 FPS invece di 30 — il GIF non recupererà comunque la fluidità del filmato.",
        ],
      },
      {
        title: "Parametri iniziali",
        paragraphs: [
          "Larghezza max 480–640 px per meme e reazioni.",
          "Durata max 5 s — oltre considerate MP4 in loop.",
          "Sfondi semplici (greenscreen) si comprimono meglio di gradienti e rumore.",
        ],
      },
      {
        title: "Dopo la conversione",
        paragraphs: [
          "Controllate la dimensione — GIF oltre 5 MB raramente ha senso su una pagina.",
          "Se il GIF è troppo grande, GIF → MP4 e un embed <video> spesso risolve.",
          "Toolando elabora il vostro video solo per la conversione — non ospita pubblicamente GIF finiti.",
        ],
      },
    ],
  },
  "docx-pdf-workflow": {
    ...guidesEn["docx-pdf-workflow"],
    title: "DOCX → PDF per l'ufficio — quando e come convertire",
    description: "Invio di CV, fatture e contratti: perché PDF batte DOCX e come evitare font rotti.",
    sections: [
      {
        paragraphs: [
          "DOCX serve per modificare — ottimo quando il destinatario ha Word e deve cambiare il testo. PDF serve per leggere: impaginazione, font e margini identici su Windows, Mac e telefono.",
          "Prima di inviare un CV, una proposta o un contratto convertite DOCX → PDF. Il destinatario non modificherà il contenuto per errore e eviterete font sostitutivi che rovinano il branding.",
        ],
      },
      {
        title: "Quando NON convertire PDF → DOCX",
        paragraphs: [
          "Fatture scansionate e contratti firmati: conservate il PDF come archivio; l'OCR è un passaggio separato.",
          "Impaginazioni multipagina complesse (cataloghi, brochure): la conversione in DOCX spesso rompe la paginazione.",
          "Se vi serve solo un frammento di testo, copiatelo dal PDF invece di convertire l'intero file.",
        ],
      },
      {
        title: "Sicurezza e privacy",
        paragraphs: [
          "Su Toolando.tech i file DOCX e PDF servono solo per la conversione e vengono eliminati al termine del lavoro.",
          "Per documenti sensibili (documenti d'identità, numeri di conto) usate HTTPS e non lasciate copie su cloud pubblici senza crittografia.",
        ],
      },
    ],
  },
  "extract-audio-from-video": {
    ...guidesEn["extract-audio-from-video"],
    title: "Estrarre l'audio dal video — l'alternativa legale",
    description: "Come estrarre legalmente la traccia audio dal proprio file video (MP4, MOV, MKV).",
    sections: [
      {
        paragraphs: [
          "A volte avete un file video e vi serve solo l'audio. Toolando.tech estrae l'audio da MP4, MOV, AVI, MKV e lo salva come MP3, WAV, FLAC o AAC.",
          "È legale sul proprio file — a differenza del download di musica da YouTube o TikTok, che Toolando.tech non offre deliberatamente.",
        ],
      },
    ],
  },
  "extract-images-from-pdf-pages": {
    ...guidesEn["extract-images-from-pdf-pages"],
    title: "Come estrarre immagini dalle pagine PDF (JPG, PNG, WebP)",
    description: "Presentazioni, cataloghi e scansioni — quando esportare una pagina come immagine e quale risoluzione.",
    sections: [
      {
        paragraphs: [
          "PDF è un contenitore — dentro possono esserci vettori, font e bitmap incorporate. PDF → JPG renderizza ogni pagina come immagine raster. Non è la stessa cosa dell'estrazione di un singolo logo incorporato (serve un editor PDF), ma per slide, poster e scansioni funziona molto bene.",
          "Una presentazione 16:9 esportata in PNG a 1920 px di larghezza appare nitida a schermo; per stampa A4 puntate a ~2480×3508 px (300 DPI) se lo strumento supporta alta risoluzione.",
        ],
      },
      {
        title: "JPG vs PNG vs WebP",
        paragraphs: [
          "Slide con foto di sfondo → JPG o WebP.",
          "Slide con grafici e testo → PNG (tipografia più nitida).",
          "Miniatura web → WebP con fallback JPG dopo ulteriore conversione.",
        ],
      },
      {
        title: "PDF multipagina",
        paragraphs: [
          "Esportate pagine singole se vi servono solo le slide 5 e 12.",
          "Per una galleria di tutte le pagine — convertite l'intero file e ordinate per numero nel nome.",
          "Rispettate il copyright — il PDF altrui non è vostro da pubblicare liberamente.",
        ],
      },
    ],
  },
  "flac-music-archive-guide": {
    ...guidesEn["flac-music-archive-guide"],
    title: "FLAC come archivio musicale — quando conviene vs MP3",
    description: "FLAC senza perdita vs MP3 320 kbps: backup, streaming domestico e lettori in auto.",
    sections: [
      {
        paragraphs: [
          "FLAC (Free Lossless Audio Codec) è compressione senza perdita — come ZIP per l'audio. Decodificato ottenete lo stesso segnale del WAV, ma il file occupa circa la metà dello spazio. MP3 rimuove dati in modo permanente; anche 320 kbps non è identico bit per bit a un rip da CD.",
          "Nella pratica: se acquistate musica senza perdita o fate rip dei vostri dischi, FLAC è un formato di archivio sensato. Su telefono con cuffie Bluetooth FLAC vs MP3 256 kbps spesso è inudibile — allora convertire in MP3 risparmia gigabyte.",
        ],
      },
      {
        title: "Flusso di archivio",
        paragraphs: [
          "1) Master in FLAC (o WAV) su NAS / backup cloud.",
          "2) Copie di lavoro MP3/AAC per telefono e auto.",
          "3) Non convertite mai MP3 → FLAC «per qualità» — gonfia solo il file senza recuperare dati.",
          "Ho testato il convertitore FLAC → MP3 su Toolando.tech su album da 40–60 minuti; controllate i metadati (titolo, artista) nel lettore dopo la conversione.",
        ],
      },
      {
        title: "Compatibilità",
        paragraphs: [
          "FLAC: VLC, Foobar2000, la maggior parte dei lettori Android; supporto più debole in Apple Music nativo (ALAC si adatta meglio all'ecosistema Apple).",
          "Gli autoradio spesso leggono solo MP3/WMA/AAC da USB — FLAC → MP3 è necessario.",
          "Lo streaming domestico (Plex, Jellyfin) gestisce FLAC senza problemi.",
        ],
      },
    ],
  },
  "font-woff2-for-websites": {
    ...guidesEn["font-woff2-for-websites"],
    title: "TTF, OTF, WOFF, WOFF2 — font per il web",
    description: "Convertire font per @font-face, licenze e impatto sulla velocità di caricamento.",
    sections: [
      {
        paragraphs: [
          "I browser richiedono WOFF/WOFF2 nel CSS (@font-face), non i file font grezzi di Windows. WOFF2 offre la dimensione di trasferimento minima.",
          "Il convertitore TTF/OTF → WOFF2 di Toolando prepara file pronti per il web. Verificate la licenza del font prima dell'incorporamento.",
        ],
      },
      {
        title: "Prestazioni",
        paragraphs: [
          "Fate subset dei font ai glifi usati in strumenti professionali se i file sono grandi.",
          "Precaricate il WOFF2 critico in <head> per il testo above-the-fold.",
          "Usate font-display: swap così il testo resta leggibile durante il caricamento.",
        ],
      },
    ],
  },
  "gif-vs-mp4-for-animations": {
    ...guidesEn["gif-vs-mp4-for-animations"],
    title: "GIF vs MP4 — animazioni su siti e social",
    description: "Quando ha senso il GIF classico e quando un MP4 o WebM corto risparmia megabyte.",
    sections: [
      {
        paragraphs: [
          "GIF si riproduce ovunque, ma tecnicamente è una sequenza di fotogrammi senza compressione video moderna — 5 secondi a 720p possono pesare 10–20 MB. Lo stesso in MP4 (H.264) spesso sta in 500 KB–1 MB a qualità accettabile.",
          "MP4 → GIF su Toolando.tech ha senso per loop corti (loader, reazione Slack) quando la piattaforma non permette di incorporare video. Sul vostro sito preferite <video autoplay loop muted playsinline> con MP4 o WebM.",
        ],
      },
      {
        title: "Quando GIF",
        paragraphs: [
          "Loop corto (<5 s), risoluzione piccola (≤480 px di larghezza).",
          "Requisito della piattaforma (alcuni forum accettano solo GIF).",
          "Grafica semplice con pochi colori — allora GIF può essere davvero leggero.",
        ],
      },
      {
        title: "Quando MP4/WebM",
        paragraphs: [
          "Animazione con molti colori, gradienti o clip video.",
          "Siti web — LCP migliore e meno banda.",
          "Instagram/TikTok richiedono video, non GIF.",
        ],
      },
      {
        title: "Consigli per MP4 → GIF",
        paragraphs: [
          "Tagliate la durata — ogni secondo sono decine di fotogrammi.",
          "Riducete la risoluzione prima della conversione.",
          "Limitate la palette colori se lo strumento lo offre (meno banding).",
        ],
      },
    ],
  },
  "heic-iphone-jpg": {
    ...guidesEn["heic-iphone-jpg"],
    title: "HEIC da iPhone — come aprire e convertire in JPG",
    description: "Perché iPhone salva in HEIC, problemi di compatibilità e come convertire in JPG o PNG.",
    sections: [
      {
        paragraphs: [
          "Apple salva le foto in HEIC per impostazione predefinita: più piccole del JPG a parità di qualità. Problema: Windows senza estensione, app datate e molti servizi non supportano HEIC.",
          "Soluzione: convertite HEIC → JPG o HEIC → PNG su Toolando.tech prima di inviare via e-mail, caricare o stampare. Potete anche impostare iPhone su «Massima compatibilità» (JPG) nelle Impostazioni.",
        ],
      },
    ],
  },
  "json-csv-xml": {
    ...guidesEn["json-csv-xml"],
    title: "JSON, CSV e XML — convertire dati tra formati",
    description: "Quando usare JSON, CSV, TSV e XML e come convertire tra loro senza perdere la struttura.",
    sections: [
      {
        paragraphs: [
          "JSON è lo standard per API REST e configurazioni delle app. CSV e TSV servono per l'importazione in Excel. XML si usa in sistemi enterprise più datati e in RSS.",
          "JSON → CSV apre una risposta API in Excel. CSV → JSON prepara i dati per un'API REST. Toolando.tech preserva la struttura dei dati durante la conversione.",
        ],
      },
    ],
  },
  "jwt-decode-safely-guide": {
    ...guidesEn["jwt-decode-safely-guide"],
    title: "JWT — come leggere un token senza verificare la firma",
    description: "Header, payload e Base64URL — quando decodificare in locale e cosa non fare.",
    sections: [
      {
        paragraphs: [
          "Un JSON Web Token ha tre parti separate da punti: header, payload e signature. Il decoder JWT in Toolando mostra header e payload dopo decodifica Base64URL — senza inviare il token a un server (funziona nel browser).",
          "Non sostituisce la verifica della firma sul backend. La decodifica serve per il debug (es. `exp` scaduto, `aud` errato) — non trattate il solo payload come prova d'identità.",
        ],
      },
      {
        title: "Pratiche sicure",
        paragraphs: [
          "Non incollate token di produzione con dati personali su siti pubblici — usate un decoder locale o un ambiente di test.",
          "Controllate `exp` e `nbf` prima di debuggare errori 401.",
          "Dopo l'analisi, cancellate il token dalla cronologia degli appunti e dai log.",
        ],
      },
    ],
  },
  "lossy-vs-lossless": {
    ...guidesEn["lossy-vs-lossless"],
    title: "Compressione con vs senza perdita — guida semplice",
    description: "Come differiscono compressione con e senza perdita e come evitare perdite di qualità durante la conversione.",
    sections: [
      {
        paragraphs: [
          "I formati con perdita (MP3, JPG, AAC, H.264) scartano dati per ridurre i file. I formati senza perdita (FLAC, PNG, WAV, ZIP) conservano tutti i dati, ma producono file più grandi.",
          "Regola: convertite con perdita → senza perdita solo quando necessario — non recupererete la qualità persa. Convertite con perdita → con perdita una sola volta: ogni riconversione degrada il risultato.",
        ],
      },
    ],
  },
  "markdown-to-pdf-workflow": {
    ...guidesEn["markdown-to-pdf-workflow"],
    title: "Da Markdown a PDF — documentazione, README e note",
    description: "Percorso MD → HTML → PDF/DOCX: quando basta l'export dall'editor e quando aiuta un convertitore online.",
    sections: [
      {
        paragraphs: [
          "Markdown serve per scrivere — titoli, liste, codice — senza impaginazione WYSIWYG. Gli sviluppatori tengono README.md nei repository; poi serve PDF per un cliente o la stampa. Percorso tipico: MD → HTML (render) → PDF via Stampa in PDF del browser, oppure MD → DOCX → PDF per un controllo migliore delle intestazioni.",
          "Ho testato i convertitori MD → HTML e DOCX → PDF su Toolando.tech su file da 20–40 KB: caratteri accentati e blocchi codice passano bene se il file MD è UTF-8.",
        ],
      },
      {
        title: "Quale percorso e quando",
        paragraphs: [
          "Anteprima rapida: MD → HTML, aprire nel browser.",
          "Documento formale con numerazione pagine: MD → DOCX (o editor), stile aziendale, poi DOCX → PDF.",
          "Solo note senza stile: basta MD → TXT.",
        ],
      },
      {
        title: "Buone abitudini MD",
        paragraphs: [
          "Un file = un argomento; dividete documenti lunghi in capitoli.",
          "Linkate le immagini in modo relativo — controllate i percorsi dopo la conversione.",
          "Le tabelle in MD possono rompersi in PDF — considerate CSV o DOCX per dati tabulari.",
        ],
      },
    ],
  },
  "merge-pdf-online-guide": {
    ...guidesEn["merge-pdf-online-guide"],
    title: "Unire più PDF in uno — quando ha senso",
    description: "Combinare fatture, scansioni e allegati: ordine delle pagine, qualità e privacy.",
    sections: [
      {
        paragraphs: [
          "Unire PDF è lavoro quotidiano in ufficio: fattura + contratto + scansione documento in un solo allegato. Toolando.tech unisce i file nell'ordine che selezionate.",
          "PDF mantiene testo vettoriale e scansioni bitmap: l'unione non riduce la risoluzione delle scansioni se le fonti non erano sovracompresse.",
        ],
      },
      {
        title: "Prima di inviare",
        paragraphs: [
          "Ordinate i file in modo logico (copertina → corpo → allegati).",
          "Rimuovete pagine duplicate dalle scansioni.",
          "Se il destinatario usa solo il telefono, puntate a ≤10–15 MB o condividete tramite link cloud.",
        ],
      },
      {
        title: "Privacy",
        paragraphs: [
          "Trattate documenti aziendali e personali come riservati. Toolando elimina i file dopo l'elaborazione; rispettate comunque la policy aziendale per dati sensibili.",
        ],
      },
    ],
  },
  "mortgage-loan-calculator-guide": {
    ...guidesEn["mortgage-loan-calculator-guide"],
    title: "Calcolatore mutuo — rata, interessi e cosa tenere d'occhio",
    description: "Annuity, commissioni e assicurazioni — come interpretare il risultato di un calcolatore ipotecario.",
    sections: [
      {
        paragraphs: [
          "Il calcolatore mutuo su Toolando calcola una rata ad ammortamento costante: un importo mensile fisso di capitale più interessi. Un termine più lungo abbassa la rata — ma aumenta il costo totale degli interessi.",
          "Consideratelo un punto di partenza per il dialogo con la banca, non un'offerta. La rata reale dipende dal tasso di riferimento, margine, commissioni, assicurazione vita e anticipo.",
        ],
      },
      {
        title: "Cosa aggiungere oltre al calcolatore",
        paragraphs: [
          "Commissioni di istruttoria e penali per estinzione anticipata (se previste nel contratto).",
          "Assicurazione immobile e vita — spesso richieste dalla banca.",
          "Spese notarili e imposte di trasferimento all'acquisto di un immobile.",
        ],
      },
    ],
  },
  "mp3-vs-wav": {
    ...guidesEn["mp3-vs-wav"],
    title: "MP3 vs WAV — quando convertire l'audio?",
    description: "MP3 e WAV a confronto: compressione con e senza perdita, dimensione del file, editing in DAW e quale formato scegliere.",
    sections: [
      {
        paragraphs: [
          "MP3 usa compressione con perdita: i file sono piccoli, ma parte dei dati audio si perde per sempre. WAV conserva la qualità integrale (senza perdita o non compresso), ma i file possono essere 10 volte più grandi dell'MP3.",
          "Nella pratica: ascolto sul telefono → MP3 va bene. Modifica di un podcast in Audacity o mix in FL Studio → lavorate con WAV o FLAC.",
        ],
      },
      {
        title: "Quando convertire MP3 → WAV",
        paragraphs: [
          "Quando una piattaforma o un'app richiede un formato senza perdita per ulteriori modifiche.",
          "Quando prevedete tagli multipli, effetti e mastering: ogni operazione sull'MP3 degrada la qualità.",
          "Nota: MP3 → WAV non recupera la qualità persa, ma ferma ulteriori degradazioni durante l'editing.",
        ],
      },
      {
        title: "Quando convertire WAV → MP3",
        paragraphs: [
          "Inviare una registrazione via e-mail o chat: file più piccolo = trasferimento più rapido.",
          "Pubblicare un podcast o musica per l'ascolto, non per l'editing.",
          "Risparmiare spazio su disco in una grande libreria audio.",
        ],
      },
    ],
  },
  "online-file-security": {
    ...guidesEn["online-file-security"],
    title: "Sicurezza dei file negli strumenti online",
    description: "Come Toolando.tech elabora i file, quando gli strumenti girano localmente nel browser e dettagli sulla privacy.",
    sections: [
      {
        paragraphs: [
          "Caricare file su strumenti online suscita preoccupazioni naturali. Su Toolando.tech i file servono esclusivamente all'operazione richiesta: conversione, compressione o anteprima.",
          "Al termine del lavoro, i file vengono eliminati dal server. Alcuni strumenti (apri-file universale) funzionano interamente nel browser: il file non lascia mai il computer. La connessione è cifrata (HTTPS).",
        ],
      },
    ],
  },
  "pdf-to-jpg": {
    ...guidesEn["pdf-to-jpg"],
    title: "Come convertire PDF in JPG per stampa e web",
    description: "Quando esportare le pagine PDF come JPG, quale risoluzione usare e quando il PNG è preferibile.",
    sections: [
      {
        paragraphs: [
          "Il PDF mantiene l'impaginazione. A volte servono pagine singole come immagini — per un sito web, PowerPoint o la stampa di una sola pagina.",
          "Il convertitore PDF → JPG su Toolando.tech renderizza ogni pagina come JPG separato. I file non vengono archiviati: vengono eliminati subito dopo la conversione.",
        ],
      },
      {
        title: "JPG o PNG dal PDF?",
        paragraphs: [
          "JPG — file più piccoli, ideale per foto e documenti senza trasparenza.",
          "PNG — senza perdita e con trasparenza; migliore per grafica con testo e bordi netti.",
        ],
      },
    ],
  },
  "pdf-vs-docx": {
    ...guidesEn["pdf-vs-docx"],
    title: "PDF vs DOCX — quale formato e quando?",
    description: "Differenze PDF vs DOCX: editing, stampa, archiviazione e quando convertire in un senso o nell'altro.",
    sections: [
      {
        paragraphs: [
          "DOCX (Word) serve per modificare il testo: contenuto, stili, titoli. PDF blocca l'impaginazione: identico su ogni dispositivo, ideale per fatture, contratti e CV.",
          "Convertite DOCX → PDF prima di inviare «solo per lettura». Convertite PDF → DOCX solo se dovete modificare il testo: l'impaginazione può rompersi. Per archivio e stampa, scegliete sempre PDF.",
        ],
      },
    ],
  },
  "png-vs-jpg-photos-and-graphics": {
    ...guidesEn["png-vs-jpg-photos-and-graphics"],
    title: "PNG vs JPG — foto vs grafica con testo",
    description: "Scelte pratiche: foto, screenshot, loghi con trasparenza e stampa.",
    sections: [
      {
        paragraphs: [
          "PNG e JPG sono i due formati più confusi. JPG comprime bene le foto — cieli, pelle, paesaggi — ma rovina bordi netti e testo. PNG conserva ogni pixel esattamente, inclusa la trasparenza (canale alpha), ma i file sono spesso 5–10 volte più grandi del JPG a pari risoluzione.",
          "Regola che uso nei test su Toolando.tech: foto per galleria o social → JPG (o WebP con fallback JPG). Icona, logo, diagramma, screenshot UI → PNG. Mix foto + testo (es. copertina offerta) → spesso PNG o WebP senza perdita.",
        ],
      },
      {
        title: "Quando scegliere JPG",
        paragraphs: [
          "Foto da fotocamera o telefono senza trasparenza.",
          "Miniature prodotto quando lo sfondo è uniforme e non serve alpha.",
          "Allegati e-mail — JPG qualità 80–85 di solito è un buon compromesso.",
          "Stampa foto domestica — molti servizi accettano JPG ad alta risoluzione (300 DPI equivalenti).",
        ],
      },
      {
        title: "Quando scegiere PNG",
        paragraphs: [
          "Logo web su sfondo trasparente — JPG riempie sempre con bianco o nero.",
          "Screenshot di UI, grafici, codice — il testo resta nitido.",
          "Grafica piatta con pochi colori (infografiche, icone app).",
          "Quando prevedete ulteriore editing a livelli — PNG senza perdita non aggiunge artefatti a ogni salvataggio (a differenza del JPG ripetuto).",
        ],
      },
      {
        title: "Errori comuni",
        paragraphs: [
          "Salvare un logo come JPG — bordi frastagliati e niente trasparenza.",
          "Salvare una foto 4000×3000 come PNG «per qualità» — 15 MB inutili invece di 2 MB JPG.",
          "Loop PNG → JPG → PNG — ogni passaggio JPG perde qualità; tenete il master in PNG.",
        ],
      },
    ],
  },
  "podcast-export-mp3-aac-settings": {
    ...guidesEn["podcast-export-mp3-aac-settings"],
    title: "Export podcast — MP3 o AAC e quale bitrate",
    description: "Impostazioni dopo la registrazione in Audacity, Reaper o sul telefono: mono, 44,1 kHz, compressione sensata.",
    sections: [
      {
        paragraphs: [
          "I podcast sono soprattutto voce — non serve stereo 320 kbps come per musica da studio. La maggior parte delle piattaforme (Spotify, Apple Podcasts, host RSS) ricodifica comunque l'upload. Inviate comunque un master decente: mono o stereo, 44,1 o 48 kHz, MP3 128–192 kbps o AAC/M4A 128 kbps.",
          "Registrato in WAV o FLAC? L'export finale è quasi sempre MP3 o AAC — ho testato WAV → MP3 su Toolando.tech su episodi da 30–60 minuti; ~30 MB WAV scende a ~28 MB a 128 kbps stereo (voce mono può essere ~15 MB).",
        ],
      },
      {
        title: "Impostazioni consigliate",
        paragraphs: [
          "Solo / intervista mono: mono, MP3 96–128 kbps.",
          "Due voci su tracce separate: stereo 128 kbps.",
          "Intro/outro musicale in stereo, resto mono — esportate tutto stereo 128 kbps per semplicità.",
          "Evitate 64 kbps — sibilanti dure e rumore di fondo con microfoni economici.",
        ],
      },
      {
        title: "MP3 vs AAC (M4A)",
        paragraphs: [
          "AAC a pari bitrate di solito batte MP3 — Apple preferisce M4A.",
          "MP3 ha la compatibilità più ampia su lettori datati e auto.",
          "Non caricate WAV grezzo sugli host podcast — upload troppo lunghi.",
        ],
      },
    ],
  },
  "prepare-images-for-web": {
    ...guidesEn["prepare-images-for-web"],
    title: "Come preparare immagini per il web (JPG, WebP, AVIF)",
    description: "Risoluzione, compressione e formato — velocizzate il sito senza perdita visibile di qualità.",
    sections: [
      {
        paragraphs: [
          "Foto enormi dalla fotocamera (4000×3000 px) rallentano ogni pagina. Prima di caricarle su un blog o un negozio, ridimensionate alla dimensione reale di visualizzazione — ad es. 1600 px di larghezza per un banner hero.",
          "JPG resta la scelta universale sicura. WebP e AVIF producono file più piccoli a parità di qualità visiva: usateli negli stack moderni con fallback <picture> per browser più vecchi.",
        ],
      },
      {
        title: "Quando PNG invece di JPG",
        paragraphs: [
          "Loghi, icone e screenshot dell'interfaccia: PNG o WebP senza perdita mantengono bordi netti.",
          "Foto prodotto su sfondo bianco spesso si comprimono bene come JPG qualità 80–85.",
          "Evitate di risalvare lo stesso banner come JPG più volte: ogni passaggio aggiunge artefatti.",
        ],
      },
      {
        title: "Checklist pre-pubblicazione",
        paragraphs: [
          "1) Ridimensionate alla larghezza target in px. 2) Scegliete il formato (JPG/WebP/AVIF). 3) Controllate il peso del file (<200 KB miniature, <500 KB immagini grandi del blog). 4) Eseguite PageSpeed Insights e confrontate LCP prima/dopo.",
        ],
      },
    ],
  },
  "remove-exif-privacy-guide": {
    ...guidesEn["remove-exif-privacy-guide"],
    title: "EXIF nelle foto — cosa rimuovere prima di pubblicare",
    description: "GPS, modello fotocamera e date nei metadati EXIF — rischi privacy e rimozione.",
    sections: [
      {
        paragraphs: [
          "EXIF sono metadati nascosti in JPEG, PNG o HEIC: posizione GPS, modello telefono, orientamento, a volte una miniatura di anteprima. I social spesso li rimuovono, ma il vostro sito, newsletter o allegato e-mail potrebbero non farlo.",
          "Prima di pubblicare foto di bambini, interni di casa o documenti sulla scrivania, rimuovete EXIF con uno strumento dedicato — su Toolando l'elaborazione avviene sul server e il file non viene inviato a un cloud IA esterno.",
        ],
      },
      {
        title: "Cosa resta dopo la rimozione EXIF",
        paragraphs: [
          "I pixel dell'immagine restano invariati. Vengono rimossi solo i metadati — la risoluzione non cambia.",
          "Dopo aver rimosso EXIF potete ancora comprimere il file o aggiungere filigrana prima di pubblicare un portfolio.",
        ],
      },
    ],
  },
  "split-pdf-pages-guide": {
    ...guidesEn["split-pdf-pages-guide"],
    title: "Come dividere un PDF in pagine separate online",
    description: "Quando dividere i PDF, come scegliere intervalli di pagine e cosa fare con l'output ZIP.",
    sections: [
      {
        paragraphs: [
          "Dividere un PDF è frequente dopo la scansione di un contratto o fattura multipagina — potreste dover inviare via e-mail una sola pagina o allegare un frammento altrove.",
          "Su Toolando.tech potete esportare ogni pagina separatamente o indicare un intervallo (es. 1-3,5). Il risultato è un ZIP di file PDF, ciascuno con la qualità vettoriale o di scansione originale.",
        ],
      },
      {
        title: "Quando dividere e quando unire",
        paragraphs: [
          "Dividete — quando il destinatario ha bisogno solo di un frammento (pagina firma, allegato, copertina).",
          "Unite — quando assemblate scansioni in un archivio o invio unico.",
          "Dopo la divisione, considerate numerazione pagine o compressione di scansioni grandi.",
        ],
      },
    ],
  },
  "spreadsheet-csv-json-guide": {
    ...guidesEn["spreadsheet-csv-json-guide"],
    title: "CSV, JSON e Excel — spostare dati tra fogli e API",
    description: "Quando scegliere CSV o JSON e come evitare decimali e codifica corrotti.",
    sections: [
      {
        paragraphs: [
          "CSV è testo semplice: si apre in Excel, Google Sheets e strumenti BI. JSON gestisce strutture annidate (API, configurazioni). XLSX aggiunge tipi di cella e più fogli.",
          "Flusso tipico: export API come JSON → JSON in CSV → analisi in Excel. Al contrario: elenco clienti CSV → JSON → API REST.",
        ],
      },
      {
        title: "Codifica ed Excel",
        paragraphs: [
          "Usate CSV UTF-8 per caratteri non ASCII. Se Excel corrompe il testo, importate tramite Dati → Da testo e scegliete UTF-8.",
          "I delimitatori CSV variano per locale (virgola vs punto e virgola). TSV (tab) è più sicuro quando le descrizioni contengono virgole.",
        ],
      },
      {
        title: "Validazione dopo la conversione",
        paragraphs: [
          "Confrontate il numero di righe prima e dopo.",
          "Per JSON controllate chiavi e tipi: una virgoletta mancante rompe l'intero file.",
        ],
      },
    ],
  },
  "svg-vs-png-logos-and-icons": {
    ...guidesEn["svg-vs-png-logos-and-icons"],
    title: "SVG vs PNG — loghi e icone per il web",
    description: "Vettoriale vs raster: quando pubblicare SVG e quando basta PNG @2x.",
    sections: [
      {
        paragraphs: [
          "SVG è grafica vettoriale descritta matematicamente — scala su ogni schermo senza pixelizzazione. PNG è una mappa di pixel a risoluzione fissa; su retina spesso serve una versione 2×. Per i siti web, loghi e icone semplici dovrebbero quasi sempre essere SVG (o icon font), a meno che il file non incorpori una foto.",
          "Il convertitore SVG → PNG su Toolando.tech aiuta quando la tipografia vuole PNG 300 DPI o un sistema rifiuta SVG.",
        ],
      },
      {
        title: "Vantaggi SVG",
        paragraphs: [
          "Un file per mobile e desktop — meno CSS, niente srcset.",
          "Cambio colore facile via CSS fill su icone semplici.",
          "Punteggi Lighthouse migliori rispetto a PNG hero pesanti.",
        ],
      },
      {
        title: "Quando PNG invece di SVG",
        paragraphs: [
          "Logo con gradienti, ombre o effetti che esportano male dal vettoriale.",
          "Miniature Open Graph / anteprima social — le piattaforme rasterizzano comunque.",
          "App desktop senza motore SVG.",
          "Esportare PNG @2x (es. 512×512) come fallback in <img> accanto all'SVG inline.",
        ],
      },
    ],
  },
  "tiff-and-png-for-document-scans": {
    ...guidesEn["tiff-and-png-for-document-scans"],
    title: "Scansioni documenti — TIFF, PNG o JPG",
    description: "Fatture e contratti: archiviazione senza perdita, multipagina e quando basta il PDF.",
    sections: [
      {
        paragraphs: [
          "Scansionare una fattura o un contratto è diverso da una foto vacanza. Testo e timbri richiedono bordi netti — un JPG aggressivo sfoca le lettere. TIFF (spesso LZW senza perdita) e PNG sono più sicuri per l'archivio. Per invio e OCR spesso si finisce comunque con PDF o JPG a qualità moderata.",
          "Un TIFF multipagina può essere un solo file con più livelli — non ogni visualizzatore lo gestisce; per uffici e clienti un PDF multipagina è più chiaro (unire PDF su Toolando.tech).",
        ],
      },
      {
        title: "Flusso consigliato",
        paragraphs: [
          "Scanner → PNG o TIFF per pagina (300 DPI per stampa, 150 DPI per anteprima).",
          "Correggete rotazione/ritaglio in un editor.",
          "Unite le pagine in un PDF per l'invio.",
          "Opzionale JPG qualità 90 solo se il destinatario non accetta PDF.",
        ],
      },
      {
        title: "Cosa evitare",
        paragraphs: [
          "JPG qualità 60 su fatture — gli importi possono diventare illeggibili.",
          "Cicli ripetuti TIFF → JPG → TIFF.",
          "Scansione a colori a 600 DPI «per sicurezza» — gigabyte senza beneficio per testo A4.",
        ],
      },
    ],
  },
  "toolando-editorial-standards": {
    ...guidesEn["toolando-editorial-standards"],
    title: "Standard editoriali Toolando.tech — come nascono le guide",
    description: "Come vengono prodotti articoli, test dei convertitori e l'enciclopedia dei formati — trasparenza per lettori e revisori.",
    sections: [
      {
        paragraphs: [
          "Toolando.tech è sviluppato in autonomia da Szymon Badyl (Badyl-Tech). Le guide non sono generate in massa né copiate da Wikipedia: seguono test di conversione su file reali.",
          "Ogni articolo ha date di pubblicazione e aggiornamento. Quando cambiano i requisiti delle piattaforme o le librerie, rivedo il testo.",
        ],
      },
      {
        title: "Cosa testo",
        paragraphs: [
          "Convertitori audio/video: tempo, dimensione output, riproduzione in VLC e su telefono.",
          "Immagini: confronto visivo prima/dopo, trasparenza PNG, dimensione WebP vs JPG.",
          "Documenti: impaginazione dopo PDF ↔ DOCX, codifica in CSV/JSON.",
        ],
      },
      {
        title: "Cosa non prometto",
        paragraphs: [
          "Niente «100% di qualità» quando si converte con perdita → con perdita.",
          "Niente download di video altrui da YouTube/TikTok — solo operazioni legali sui vostri file.",
          "Possono comparire annunci Google, ma i contenuti editoriali sono scritti indipendentemente dagli inserzionisti.",
        ],
      },
    ],
  },
  "video-compress-before-sharing": {
    ...guidesEn["video-compress-before-sharing"],
    title: "Ridurre un video prima di e-mail o WhatsApp",
    description: "MP4, risoluzione, bitrate — limiti pratici di dimensione e conversione del contenitore.",
    sections: [
      {
        paragraphs: [
          "Le registrazioni del telefono in MOV/MKV possono pesare centinaia di MB. Molte caselle e-mail bloccano allegati >25 MB. Soluzione: convertire in MP4 (H.264 + AAC) e abbassare la risoluzione se necessario.",
          "720p spesso basta per l'anteprima sul telefono; mantenete 1080p per la visione in TV.",
        ],
      },
      {
        title: "Passaggi prima di inviare",
        paragraphs: [
          "1) Convertite MOV/MKV → MP4. 2) Controllate la dimensione del file. 3) Se è ancora troppo grande, tagliate intro/outro non necessari in un editor. 4) Usate un link cloud se >25 MB.",
        ],
      },
    ],
  },
  "video-social-media": {
    ...guidesEn["video-social-media"],
    title: "Video per i social — MP4, risoluzione e bitrate",
    description: "Come preparare video per Instagram, TikTok, YouTube: formato MP4, H.264, risoluzione 1080p.",
    sections: [
      {
        paragraphs: [
          "Instagram, TikTok, YouTube e Facebook preferiscono MP4 con video H.264 e audio AAC. Convertite MOV, AVI o MKV in MP4 prima di pubblicare per evitare errori di upload.",
          "1080p (1920×1080) basta per la maggior parte delle piattaforme. Bitrate più alto = qualità migliore, ma file più grande. Consultate l'enciclopedia dei formati per dettagli su MP4, WebM e MOV.",
        ],
      },
    ],
  },
  "webp-avif-images": {
    ...guidesEn["webp-avif-images"],
    title: "WebP e AVIF — formati immagine moderni per i siti web",
    description: "WebP e AVIF vs JPG/PNG: compressione, compatibilità browser e ottimizzazione PageSpeed.",
    sections: [
      {
        paragraphs: [
          "JPG e PNG dominano il web da anni, ma WebP produce file del 25–35% più piccoli del JPG a parità di qualità visiva. AVIF va oltre: i file possono essere la metà di WebP.",
          "Tutti i browser moderni supportano WebP. AVIF ha un supporto leggermente più debole nelle versioni più vecchie di Safari.",
        ],
      },
      {
        title: "Strategia di distribuzione",
        paragraphs: [
          "Convertite JPG → WebP per foto prodotto e banner: accelera il caricamento della pagina.",
          "Mantenete JPG come fallback per browser più vecchi (tag HTML <picture>).",
          "Per loghi con trasparenza: PNG → WebP invece di JPG.",
        ],
      },
    ],
  },
  "when-not-to-convert-files": {
    ...guidesEn["when-not-to-convert-files"],
    title: "Quando NON convertire un file — 7 situazioni che rovinano la qualità",
    description: "Evitate conversioni inutili: conservate gli originali, archivi senza perdita e backup prima degli esperimenti.",
    sections: [
      {
        paragraphs: [
          "I convertitori online sono comodi, ma non ogni operazione aiuta. A volte conviene tenere l'originale o usare archivi senza perdita (ZIP, FLAC).",
          "Regola: non convertite con perdita → senza perdita aspettandovi un miracolo — MP3 → WAV non ripristina i dati persi.",
        ],
      },
      {
        title: "Lasciatelo com'è",
        paragraphs: [
          "Avete già PNG con trasparenza — non passatelo a JPG senza motivo.",
          "Progetti grafici: conservate sorgenti a livelli (PSD, SVG); esportate JPG solo alla fine.",
          "WAV/FLAC da studio: non appiattite in MP3 finché non avete il mix finale.",
          "PDF con firma digitale: la conversione può invalidare la firma.",
        ],
      },
      {
        title: "Prima di cliccare Converti",
        paragraphs: [
          "Conservate una copia dell'originale.",
          "Verificate se la piattaforma di destinazione accetta già il formato sorgente.",
          "Leggete i confronti tra formati nell'enciclopedia Toolando per evitare un passaggio inutile.",
        ],
      },
    ],
  },
  "zip-7z-rar-when-to-use": {
    ...guidesEn["zip-7z-rar-when-to-use"],
    title: "ZIP, 7z e RAR — quale archivio inviare",
    description: "Dimensione, compatibilità e crittografia — quando basta ZIP e quando aiutano 7z o RAR.",
    sections: [
      {
        paragraphs: [
          "Un archivio racchiude molti file in uno — comodo per e-mail, cloud e backup di cartelle. ZIP è lo standard universale: si apre su Windows, macOS e Linux senza software aggiuntivo. 7z di solito produce un risultato più piccolo, ma il destinatario può aver bisogno di 7-Zip. RAR compare in flussi legacy; creare RAR online ha limiti di licenza — più spesso convertite RAR → ZIP che il contrario.",
        ],
      },
      {
        title: "Quando ZIP",
        paragraphs: [
          "Invio a clienti o uffici — minimo rischio «non si apre».",
          "Archivio di codice, documenti d'ufficio, set di foto JPG.",
          "Sistemi che accettano solo upload .zip.",
        ],
      },
      {
        title: "Quando 7z",
        paragraphs: [
          "Cartelle grandi di giochi, progetti video, backup prima del disco esterno — file più piccolo = upload più veloce.",
          "Quando il destinatario è tecnico e ha 7-Zip.",
          "ZIP → 7z ha senso una volta — non impacchettate gli stessi dati a ripetizione.",
        ],
      },
      {
        title: "Sicurezza",
        paragraphs: [
          "La password sull'archivio ferma aperture casuali, ma non sostituisce la crittografia end-to-end per documenti sensibili.",
          "Non decomprimete archivi da fonti sconosciute senza scansione antivirus.",
          "Toolando elabora gli archivi solo per la durata della conversione del contenitore — il contenuto deve essere legale e vostro.",
        ],
      },
    ],
  },
}
