import type { ToolContentTemplates } from "../locale-factory"

export const itToolContentTemplates: ToolContentTemplates = {
  extendedDesc:
    "Questo convertitore online gratuito trasforma i file {fromName} ({FROM}) nel formato {toName} ({TO}) senza installare alcun software. Carica il tuo file: Toolando.tech lo elabora sul server e ti restituisce il risultato da scaricare. I file non vengono mai archiviati — vengono eliminati subito dopo la conversione.",
  whenToUseBase: [
    "Quando ti serve un file {TO} ma lo hai solo in formato {FROM}.",
    "Quando il dispositivo o l'app che usi non supporta i file {FROM}.",
  ],
  whenToUseCategory: {
    audio: "Quando vuoi ridurre la dimensione di un file audio o migliorare la compatibilità con il lettore.",
    video: "Quando devi pubblicare un video su un sito web o sui social in un formato diverso.",
    image: "Quando vuoi ottimizzare un'immagine per web, e-mail o stampa.",
    pdf: "Quando devi estrarre pagine PDF come immagini o convertire un documento in un formato modificabile.",
    doc: "Quando lavori con documenti di testo e ti serve un formato diverso per modificarli o pubblicarli.",
    data: "Quando sposti dati tra sistemi, API o fogli di calcolo in un formato diverso.",
    font: "Quando prepari font web per la pubblicazione su un sito.",
    archive: "Quando devi cambiare il formato dell'archivio per estrarlo su un altro sistema.",
  },
  steps: [
    'Fai clic su « Scegli un file » o trascina il tuo file {FROM} nell\'area di caricamento.',
    "Attendi il completamento del caricamento e della conversione — di solito bastano pochi secondi.",
    "Scarica il file {TO} pronto con un clic.",
    "Il file sorgente viene eliminato dal server subito dopo il completamento dell'operazione.",
  ],
  faq: [
    {
      q: "La conversione {FROM} → {TO} è gratuita?",
      a: "Sì. Questo convertitore è completamente gratuito e non richiede un account. Puoi convertire file senza limiti.",
    },
    {
      q: "Il mio file {FROM} è al sicuro?",
      a: "Sì. Il tuo file viene elaborato solo per la conversione e subito dopo eliminato. Non archiviamo né condividiamo mai i tuoi file.",
    },
    {
      q: "Qual è la dimensione massima del file?",
      a: "Puoi caricare file fino a 500 MB. I file più grandi possono richiedere più tempo.",
    },
    {
      q: "La qualità del {TO} sarà buona?",
      a: "Toolando.tech usa librerie professionali (FFmpeg, Sharp, MuPDF) per la conversione. La qualità dipende dai formati di origine e destinazione — convertire da un formato con perdita a uno senza perdita non recupera i dati persi, ma l'output sarà tecnicamente corretto.",
    },
  ],
  extraFaq: [
    {
      q: "Dove posso saperne di più su {FROM}?",
      a: "Leggi la guida completa al formato {FROM} nell'enciclopedia dei formati Toolando.tech — casi d'uso, pro, contro e confronti.",
    },
    {
      q: "Posso riconvertire {TO} in {FROM}?",
      a: "Sì — scegli il convertitore {TO} → {FROM} nell'elenco degli strumenti. Convertire da un formato con perdita non ripristina la qualità persa.",
    },
  ],
}
