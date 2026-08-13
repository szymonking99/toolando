import type { LegalDocumentData } from "@/components/legal-document"

export const privacyIt: LegalDocumentData = {
  eyebrow: "Informativa sulla privacy",
  title: "Informativa sulla privacy di Toolando.tech",
  intro:
    "La presente informativa descrive quali dati vengono trattati su Toolando.tech, per quali finalità, su quale base giuridica e quali diritti vi spettano. Tratto i dati personali conformemente al regolamento (UE) 2016/679 (GDPR) e alla normativa polacca applicabile in materia di protezione dei dati.",
  lastUpdated: "Ultimo aggiornamento: 23 luglio 2026",
  sections: [
    {
      title: "§1. Titolare del trattamento",
      paragraphs: [
        "1.1. Il titolare del trattamento (« Titolare ») è Szymon Badyl, gestore di Toolando.tech, che fornisce servizi di strumenti online.",
        "1.2. Contatto per la privacy: {{email}}.",
        "1.3. Il Titolare non ha nominato un responsabile della protezione dei dati, poiché non è richiesto per questa attività ai sensi del GDPR.",
      ],
    },
    {
      title: "§2. Dati che trattiamo",
      paragraphs: ["2.1. A seconda dell'utilizzo del servizio, trattiamo le seguenti categorie:"],
      list: [
        "Dati tecnici e di utilizzo: indirizzo IP, tipo e versione del browser, sistema operativo, lingua, data e ora della richiesta, pagine visitate, fonte del traffico, identificatori dei cookie (previo consenso).",
        "Dati dell'account: indirizzo e-mail, password (hash), ID utente, data di registrazione, stato Premium, ID cliente Stripe (se applicabile).",
        "Dati di pagamento: trattati da Stripe — il Titolare non memorizza i numeri completi delle carte di pagamento.",
        "Dati di corrispondenza: indirizzo e-mail, contenuto del messaggio, data del contatto — quando scrivete a {{email}} o utilizzate il modulo di contatto.",
        "File dell'utente: trattati temporaneamente solo per eseguire le operazioni degli strumenti — non conservati al termine della conversione.",
      ],
    },
    {
      title: "§3. Finalità e basi giuridiche",
      paragraphs: ["3.1. Trattiamo i dati per le seguenti finalità:"],
      definitions: [
        {
          term: "Fornitura del servizio",
          description:
            "Conversione file, funzionamento degli strumenti, gestione dell'account — base giuridica: art. 6, par. 1, lett. b GDPR (contratto) o lett. f (interesse legittimo: gestione del servizio).",
        },
        {
          term: "Abbonamento Premium",
          description:
            "Gestione pagamenti e abbonamento — base giuridica: art. 6, par. 1, lett. b GDPR; contabilità: art. 6, par. 1, lett. c (obbligo legale).",
        },
        {
          term: "Analisi del traffico",
          description:
            "Google Analytics — solo previo consenso ai cookie analitici — base giuridica: art. 6, par. 1, lett. a GDPR (consenso).",
        },
        {
          term: "Pubblicità",
          description:
            "Google AdSense — solo previo consenso ai cookie pubblicitari — base giuridica: art. 6, par. 1, lett. a GDPR (consenso).",
        },
        {
          term: "Sicurezza",
          description:
            "Prevenzione degli abusi, log del server — base giuridica: art. 6, par. 1, lett. f GDPR (interesse legittimo).",
        },
        {
          term: "Contatto e reclami",
          description:
            "Risposta ai messaggi — base giuridica: art. 6, par. 1, lett. f GDPR o lett. b (se relativo al contratto).",
        },
      ],
    },
    {
      title: "§4. Cookie e tecnologie simili",
      paragraphs: [
        "4.1. Il servizio utilizza cookie e tecnologie simili. Al primo accesso mostriamo un banner di consenso che consente di accettare tutti i cookie o limitarsi a quelli essenziali.",
        "4.2. Tipi di cookie:",
      ],
      list: [
        "Essenziali — necessari per il funzionamento del servizio (es. lingua, sessione, preferenze cookie). Nessun consenso richiesto.",
        "Analitici — Google Analytics, statistiche di visita aggregate. Consenso richiesto.",
        "Pubblicitari — Google AdSense, personalizzazione degli annunci. Consenso richiesto.",
      ],
      afterList: [
        "4.3. Potete modificare le preferenze sui cookie in qualsiasi momento tramite il banner o le impostazioni del browser.",
      ],
    },
    {
      title: "§5. Destinatari e responsabili del trattamento",
      paragraphs: [
        "5.1. I dati possono essere comunicati a responsabili del trattamento fidati che agiscono per conto del Titolare:",
      ],
      list: [
        "Vercel Inc. — hosting e infrastruttura (USA, clausole contrattuali standard UE).",
        "Stripe, Inc. — elaborazione pagamenti Premium (USA/Irlanda, PCI DSS).",
        "Google LLC — Analytics e AdSense (previo consenso; policy partner: https://policies.google.com/technologies/partner-sites).",
        "Resend — e-mail transazionali (es. e-mail di benvenuto dopo la registrazione), se configurato.",
        "Fornitori di modelli IA — trattamento di prompt e file solo all'interno degli strumenti IA Premium, senza conservazione al termine.",
      ],
      afterList: ["5.2. Il Titolare non vende dati personali a terzi."],
    },
    {
      title: "§6. File caricati negli strumenti",
      paragraphs: [
        "6.1. I file caricati nei convertitori e in altri strumenti non vengono conservati al termine dell'operazione.",
        "6.2. I file non vengono utilizzati per l'addestramento di modelli IA, profilazione o marketing.",
        "6.3. Alcuni strumenti (es. l'apri-file universale) elaborano i file interamente in locale nel browser — il file non lascia mai il vostro dispositivo.",
        "6.4. Non caricate file contenenti dati sensibili (es. dati sanitari, numeri di documento d'identità), salvo assoluta necessità — ciò avviene a vostro rischio.",
      ],
    },
    {
      title: "§7. Periodi di conservazione",
      paragraphs: ["7.1. Conserviamo i dati per i seguenti periodi:"],
      list: [
        "Dati dell'account — fino alla cancellazione dell'account o a una richiesta di eliminazione.",
        "Log del server — fino a 90 giorni, salvo necessità di conservazione più lunga per far valere diritti.",
        "Corrispondenza — fino a 3 anni dalla chiusura del caso.",
        "Dati di fatturazione (Stripe) — conformemente alla normativa fiscale (generalmente 5 anni).",
        "File dell'utente — eliminati immediatamente dopo l'elaborazione (generalmente da secondi a minuti).",
        "Preferenze cookie — fino a 12 mesi o fino alla revoca del consenso.",
      ],
    },
    {
      title: "§8. I vostri diritti (GDPR)",
      paragraphs: ["8.1. Vi spettano i seguenti diritti:"],
      list: [
        "Diritto di accesso (art. 15 GDPR).",
        "Diritto di rettifica (art. 16 GDPR).",
        "Diritto alla cancellazione — «diritto all'oblio» (art. 17 GDPR).",
        "Diritto di limitazione del trattamento (art. 18 GDPR).",
        "Diritto alla portabilità dei dati (art. 20 GDPR).",
        "Diritto di opposizione al trattamento basato sull'art. 6, par. 1, lett. f GDPR (art. 21 GDPR).",
        "Diritto di revocare il consenso in qualsiasi momento — senza pregiudicare la liceità del trattamento precedente alla revoca (art. 7, par. 3 GDPR).",
        "Diritto di proporre reclamo a un'autorità di controllo (in Polonia: PUODO, uodo.gov.pl).",
      ],
      afterList: [
        "8.2. Per esercitare i vostri diritti, scrivete a {{email}}. Risponderò senza indebito ritardo, entro 30 giorni al massimo.",
      ],
    },
    {
      title: "§9. Sicurezza dei dati",
      paragraphs: [
        "9.1. Applico misure tecniche e organizzative proporzionate al rischio, inclusa la crittografia HTTPS, l'accesso limitato ai sistemi e l'eliminazione dei file dopo l'elaborazione.",
        "9.2. Nessun sistema è sicuro al 100%. In caso di violazione dei dati personali che comporti un rischio elevato per i vostri diritti, vi informerò conformemente all'art. 34 GDPR.",
      ],
    },
    {
      title: "§10. Minori",
      paragraphs: [
        "10.1. Il servizio non è destinato a minori di 16 anni. Non trattiamo consapevolmente dati di minori di 16 anni senza il consenso di un genitore o tutore.",
        "10.2. Se ritenete che un minore abbia fornito dati senza consenso genitoriale, contattate {{email}} — i dati saranno eliminati.",
      ],
    },
    {
      title: "§11. Modifiche alla presente informativa",
      paragraphs: [
        "11.1. La presente informativa può essere aggiornata per riflettere cambiamenti nel servizio, nelle tecnologie o nella normativa.",
        "11.2. Le modifiche sostanziali saranno comunicate tramite notifica nel servizio o e-mail (per gli utenti con account).",
        "11.3. La versione vigente è sempre disponibile su /polityka-prywatnosci.",
      ],
    },
  ],
  footerNote:
    "Domande sulla privacy: {{email}}. Termini di utilizzo disponibili su /regulamin.",
}
