export const extraCategoryLabels = {
  fr: {
    finance: "Finances",
    time: "Temps et dates",
    units: "Unités",
    text: "Texte",
    dev: "Développeur",
    media: "Médias",
  },
  it: {
    finance: "Finanza",
    time: "Tempo e date",
    units: "Unità",
    text: "Testo",
    dev: "Sviluppatore",
    media: "Media",
  },
  pt: {
    finance: "Finanças",
    time: "Tempo e datas",
    units: "Unidades",
    text: "Texto",
    dev: "Desenvolvedor",
    media: "Mídia",
  },
  nl: {
    finance: "Financiën",
    time: "Tijd en datums",
    units: "Eenheden",
    text: "Tekst",
    dev: "Ontwikkelaar",
    media: "Media",
  },
  sv: {
    finance: "Ekonomi",
    time: "Tid och datum",
    units: "Enheter",
    text: "Text",
    dev: "Utvecklare",
    media: "Media",
  },
  no: {
    finance: "Økonomi",
    time: "Tid og dato",
    units: "Enheter",
    text: "Tekst",
    dev: "Utvikler",
    media: "Media",
  },
  da: {
    finance: "Økonomi",
    time: "Tid og dato",
    units: "Enheder",
    text: "Tekst",
    dev: "Udvikler",
    media: "Medier",
  },
  fi: {
    finance: "Talous",
    time: "Aika ja päivämäärät",
    units: "Yksiköt",
    text: "Teksti",
    dev: "Kehittäjä",
    media: "Media",
  },
  cs: {
    finance: "Finance",
    time: "Čas a data",
    units: "Jednotky",
    text: "Text",
    dev: "Vývojář",
    media: "Média",
  },
  ro: {
    finance: "Finanțe",
    time: "Timp și date",
    units: "Unități",
    text: "Text",
    dev: "Dezvoltator",
    media: "Media",
  },
  hu: {
    finance: "Pénzügy",
    time: "Idő és dátum",
    units: "Mértékegységek",
    text: "Szöveg",
    dev: "Fejlesztő",
    media: "Média",
  },
  el: {
    finance: "Οικονομικά",
    time: "Χρόνος και ημερομηνίες",
    units: "Μονάδες",
    text: "Κείμενο",
    dev: "Προγραμματιστής",
    media: "Πολυμέσα",
  },
  tr: {
    finance: "Finans",
    time: "Zaman ve tarihler",
    units: "Birimler",
    text: "Metin",
    dev: "Geliştirici",
    media: "Medya",
  },
  ru: {
    finance: "Финансы",
    time: "Время и даты",
    units: "Единицы",
    text: "Текст",
    dev: "Разработчик",
    media: "Медиа",
  },
  ar: {
    finance: "المالية",
    time: "الوقت والتواريخ",
    units: "الوحدات",
    text: "النص",
    dev: "المطور",
    media: "الوسائط",
  },
  zh: {
    finance: "财务",
    time: "时间与日期",
    units: "单位",
    text: "文本",
    dev: "开发者",
    media: "媒体",
  },
  ja: {
    finance: "ファイナンス",
    time: "時間と日付",
    units: "単位",
    text: "テキスト",
    dev: "開発者",
    media: "メディア",
  },
  ko: {
    finance: "금융",
    time: "시간 및 날짜",
    units: "단위",
    text: "텍스트",
    dev: "개발자",
    media: "미디어",
  },
  hi: {
    finance: "वित्त",
    time: "समय और तिथियाँ",
    units: "इकाइयाँ",
    text: "पाठ",
    dev: "डेवलपर",
    media: "मीडिया",
  },
  id: {
    finance: "Keuangan",
    time: "Waktu & tanggal",
    units: "Satuan",
    text: "Teks",
    dev: "Pengembang",
    media: "Media",
  },
};

/** @type {Record<string, Record<string, { cat: keyof typeof extraCategoryLabels.fr, name: string, desc: string, steps: string[], faq: {q:string,a:string}[] }>>} */
export const toolTranslations = {};

export function reg(locale, id, cat, name, desc, steps, faq = []) {
  if (!toolTranslations[locale]) toolTranslations[locale] = {};
  toolTranslations[locale][id] = { cat, name, desc, steps, faq };
}

// --- FRENCH ---
const fr = extraCategoryLabels.fr;
reg("fr", "przelicznik-walut", "finance", "Convertisseur de devises", "Convertissez des devises en ligne avec les taux de référence BCE. PLN, EUR, USD et des dizaines d'autres paires — sans inscription.", ["Saisissez un montant et la devise source.", "Choisissez la devise cible.", "Consultez le résultat et le taux du jour."], [{ q: "D'où viennent les taux ?", a: "Taux de référence de la Banque centrale européenne via l'API Frankfurter, mis à jour les jours ouvrables." }, { q: "Les taux sont-ils en temps réel ?", a: "Ce sont des taux de référence BCE, pas des cours bancaires ou de bureaux de change." }]);
reg("fr", "kalkulator-dat", "time", "Calculateur de dates", "Calculez les jours entre deux dates, les jours ouvrables et le jour de la semaine — utile pour les contrats et les délais.", ["Choisissez les dates de début et de fin.", "Consultez la différence en jours et semaines.", "Comptez éventuellement uniquement les jours ouvrables."], [{ q: "Les jours fériés sont-ils exclus ?", a: "Par défaut nous excluons les samedis et dimanches. Les fériés dépendent du pays." }]);
reg("fr", "strefy-czasowe", "time", "Différence de fuseaux horaires", "Comparez les heures locales entre villes, voyez l'écart horaire et repérez les lieux sur une carte simple.", ["Choisissez les villes source et cible.", "Comparez les heures locales actuelles.", "Consultez le décalage et les marqueurs sur la carte."], [{ q: "Gérez-vous l'heure d'été ?", a: "Oui — nous utilisons les zones IANA (ex. Europe/Warsaw) qui appliquent automatiquement l'heure d'été." }]);
reg("fr", "przelicznik-jednostek", "units", "Convertisseur d'unités", "Convertissez longueur, masse, température et volume : cm↔pouces, kg↔lb, °C↔°F et plus.", ["Choisissez une catégorie d'unités.", "Saisissez une valeur et les unités.", "Obtenez le résultat instantanément."], [{ q: "Les conversions sont-elles exactes ?", a: "Oui — facteurs SI standard. La température utilise des formules dédiées, pas une simple multiplication." }]);
reg("fr", "kalkulator-vat", "finance", "Calculateur TVA et pourcentages", "Ajoutez ou retirez la TVA (23 %, 8 %, 5 %), calculez net/brut et des pourcentages simples d'un montant.", ["Saisissez un montant net ou brut.", "Choisissez un taux de TVA ou un pourcentage personnalisé.", "Consultez la ventilation net, TVA et brut."], [{ q: "Quels taux de TVA en Pologne ?", a: "Standard 23 %, réduits 8 % et 5 %. Vous pouvez aussi saisir un taux personnalisé." }]);
reg("fr", "kalkulator-wieku", "time", "Calculateur d'âge et compte à rebours", "Calculez l'âge exact en années, mois et jours — ou combien de jours restent jusqu'à une date.", ["Saisissez une date de naissance ou une date cible.", "Consultez l'âge ou le compte à rebours.", "Vérifiez aussi le prochain anniversaire."], [{ q: "Comment l'âge est-il calculé ?", a: "De la date de naissance à aujourd'hui, en comptant années, mois et jours — pas seulement les années calendaires." }]);
reg("fr", "generator-hasel", "dev", "Générateur de mots de passe", "Générez un mot de passe fort localement dans votre navigateur. Définissez la longueur et les jeux de caractères — rien n'est envoyé au serveur.", ["Définissez la longueur et les options de caractères.", "Cliquez sur Générer.", "Copiez en un clic."], [{ q: "Le mot de passe est-il envoyé ?", a: "Non — la génération se fait entièrement dans votre navigateur." }]);
reg("fr", "licznik-znakow", "text", "Compteur de caractères et mots", "Comptez caractères, mots, phrases et paragraphes — pratique pour le SEO, les réseaux sociaux et les limites de formulaires.", ["Collez ou saisissez du texte.", "Consultez les statistiques en direct.", "Vérifiez la longueur sans espaces."], [{ q: "Comment les mots sont-ils comptés ?", a: "Les mots sont des séquences séparées par des espaces ou des retours à la ligne." }]);
reg("fr", "generator-qr", "dev", "Générateur de codes QR", "Créez un code QR à partir d'un lien ou d'un texte et téléchargez-le en PNG. Fonctionne localement dans le navigateur.", ["Saisissez du texte ou une URL.", "Générez l'aperçu QR.", "Téléchargez une image PNG."], [{ q: "Le contenu QR est-il envoyé ?", a: "Non — le code est créé localement. Nous ne stockons pas le contenu." }]);
reg("fr", "kalkulator-bitrate", "media", "Calculateur taille de fichier et bitrate", "Estimez la taille d'un fichier audio/vidéo pour un bitrate et une durée donnés — ou le bitrate qui tient dans une limite en Mo.", ["Choisissez taille depuis bitrate ou bitrate depuis limite.", "Saisissez la durée et les valeurs.", "Consultez le résultat en Mo / kbps."], [{ q: "Le conteneur est-il inclus ?", a: "Cela estime le flux brut. Les conteneurs et pistes supplémentaires ajoutent généralement quelques pourcents." }]);
reg("fr", "konwerter-kolorow", "dev", "Convertisseur couleur HEX RGB HSL", "Convertissez les couleurs entre HEX, RGB et HSL et vérifiez le contraste WCAG par rapport à un fond.", ["Saisissez une couleur dans n'importe quel format.", "Consultez les équivalents HEX/RGB/HSL.", "Vérifiez le contraste par rapport à un fond."], [{ q: "Que signifient AA / AAA ?", a: "Niveaux d'accessibilité WCAG pour le contraste du texte par rapport à un fond." }]);
reg("fr", "base64", "dev", "Base64 encoder / décoder", "Encodez du texte en Base64 ou décodez du Base64. Localement, sans envoi de données.", ["Collez du texte ou du Base64.", "Choisissez Encoder ou Décoder.", "Copiez le résultat."], [{ q: "Prend-il en charge UTF-8 ?", a: "Oui — les caractères Unicode sont pris en charge." }]);
reg("fr", "unix-timestamp", "dev", "Timestamp Unix ↔ date", "Convertissez un timestamp Unix (secondes/ms) en date et inversement. Utile pour les logs et les API.", ["Collez un timestamp ou choisissez une date.", "Consultez les résultats ISO et locaux.", "Copiez la valeur."], [{ q: "Secondes ou millisecondes ?", a: "Nous détectons automatiquement selon la longueur. Vous pouvez aussi forcer l'unité." }]);
reg("fr", "generator-uuid", "dev", "Générateur UUID", "Générez un UUID v4 (aléatoire) en un clic. Créez-en plusieurs à la fois si besoin.", ["Définissez le nombre d'UUID.", "Cliquez sur Générer.", "Copiez la liste."], [{ q: "Quelle version d'UUID ?", a: "UUID v4 — aléatoire, RFC 4122, généré dans le navigateur." }]);
reg("fr", "generator-hash", "dev", "Hash SHA / MD5", "Calculez SHA-1, SHA-256, SHA-512 ou MD5 d'un texte. Localement via Web Crypto.", ["Collez du texte.", "Choisissez un algorithme.", "Copiez le hash hex."], [{ q: "Le MD5 est-il sûr ?", a: "Le MD5 ne convient pas aux mots de passe. Utilisez SHA-256+ pour la sécurité ; MD5 uniquement pour les sommes de contrôle." }]);
reg("fr", "json-formatter", "dev", "Formateur JSON", "Formatez et minifiez du JSON dans le navigateur — sans envoi au serveur.", ["Collez du JSON.", "Cliquez sur Formater ou Minifier.", "Copiez le résultat."], [{ q: "Les données sont-elles envoyées ?", a: "Non — le traitement se fait localement dans votre navigateur." }]);
reg("fr", "diff-tekstu", "text", "Diff de texte", "Comparez deux extraits de texte ligne par ligne et mettez en évidence les différences.", ["Collez le texte A et B.", "Examinez les différences surlignées."], [{ q: "Est-ce un diff complet ?", a: "C'est une comparaison ligne par ligne — idéale pour de courts extraits et des listes." }]);
reg("fr", "konwerter-wielkosci-liter", "text", "Convertisseur de casse", "Convertissez du texte en majuscules, minuscules, Title Case ou sentence case.", ["Collez du texte.", "Choisissez un mode.", "Copiez le résultat."], []);
reg("fr", "usun-duplikaty-linii", "text", "Supprimer les lignes en double", "Supprimez les lignes répétées des listes d'e-mails, SKU ou tags.", ["Collez une liste.", "Définissez les options.", "Copiez la liste nettoyée."], []);
reg("fr", "dekoder-jwt", "dev", "Décodeur JWT", "Lisez l'en-tête et le payload d'un JWT sans vérifier la signature.", ["Collez un token.", "Inspectez l'en-tête et le payload."], [{ q: "Vérifie-t-il la signature ?", a: "Non — il décode uniquement le Base64URL du token." }]);
reg("fr", "walidator-nip-pesel", "dev", "Validateur NIP / PESEL / REGON", "Validez les numéros fiscaux et d'identité polonais selon les règles de clé de contrôle.", ["Saisissez un numéro.", "Consultez le résultat de validation."], [{ q: "Interroge-t-il le registre GUS ?", a: "Non — clé de contrôle et longueur uniquement." }]);
reg("fr", "kalkulator-kredytu", "finance", "Calculateur de prêt", "Calculez les mensualités, le remboursement total et le coût des intérêts.", ["Saisissez le montant, le taux et la durée.", "Consultez la mensualité."], [{ q: "Inclut-il les frais bancaires ?", a: "Simulation simplifiée sans frais ni assurance." }]);
reg("fr", "markdown-preview", "text", "Aperçu Markdown", "Écrivez du Markdown et voyez un aperçu HTML en direct dans le navigateur.", ["Saisissez du Markdown.", "L'aperçu se met à jour automatiquement."], []);
reg("fr", "sila-hasla", "dev", "Force du mot de passe", "Évaluez la force d'un mot de passe selon la longueur, la variété des caractères et les motifs courants.", ["Saisissez un mot de passe.", "Consultez le score et les conseils."], [{ q: "Le mot de passe est-il envoyé ?", a: "Non — l'évaluation se fait localement dans votre navigateur." }]);
reg("fr", "konwerter-napisow", "media", "Convertisseur de sous-titres SRT / VTT", "Convertissez des sous-titres entre les formats SRT et WebVTT.", ["Collez les sous-titres.", "Choisissez la direction ou auto.", "Copiez le résultat."], []);
reg("fr", "generator-nazw-plikow", "text", "Renommage de fichiers par lot", "Renommez des fichiers en masse avec un modèle {name}, {ext}, {index}.", ["Collez une liste de fichiers.", "Définissez un modèle.", "Copiez les nouveaux noms."], []);
reg("fr", "walidator-iban", "dev", "Validateur IBAN", "Validez la somme de contrôle IBAN (mod 97) et la longueur spécifique au pays.", ["Collez un IBAN.", "Consultez le résultat formaté et la validation."], [{ q: "Vérifie-t-il le compte bancaire ?", a: "Non — format et somme de contrôle uniquement." }]);
reg("fr", "kalkulator-b2b", "finance", "Calculateur B2B vs salariat", "Comparez le salaire net en emploi avec les revenus en facturation B2B (impôt forfaitaire ou linéaire).", ["Saisissez le brut salarial et le revenu B2B.", "Choisissez la forme fiscale.", "Comparez les résultats."], [{ q: "Est-ce un conseil fiscal ?", a: "Non — simulation simplifiée pour en discuter avec un comptable." }]);

// --- ITALIAN ---
reg("it", "przelicznik-walut", "finance", "Convertitore valute", "Converti valute online con i tassi di riferimento BCE. PLN, EUR, USD e decine di altre coppie — senza registrazione.", ["Inserisci un importo e la valuta di origine.", "Scegli la valuta di destinazione.", "Leggi il risultato e il tasso del giorno."], [{ q: "Da dove provengono i tassi?", a: "Tassi di riferimento della Banca centrale europea tramite API Frankfurter, aggiornati nei giorni lavorativi." }, { q: "I tassi sono in tempo reale?", a: "Sono tassi di riferimento BCE, non quotazioni bancarie o di cambio." }]);
reg("it", "kalkulator-dat", "time", "Calcolatore date", "Calcola i giorni tra due date, i giorni lavorativi e il giorno della settimana — utile per contratti e scadenze.", ["Scegli le date di inizio e fine.", "Vedi la differenza in giorni e settimane.", "Opzionalmente conta solo i giorni lavorativi."], [{ q: "I festivi sono esclusi?", a: "Per impostazione predefinita escludiamo sabato e domenica. I festivi dipendono dal paese." }]);
reg("it", "strefy-czasowe", "time", "Differenza fusi orari", "Confronta gli orari locali tra città, vedi la differenza di ore e individua i luoghi su una mappa semplice.", ["Scegli le città di origine e destinazione.", "Confronta gli orari locali attuali.", "Vedi lo scostamento e i marcatori sulla mappa."], [{ q: "Gestite l'ora legale?", a: "Sì — usiamo zone IANA (es. Europe/Warsaw) che applicano automaticamente l'ora legale." }]);
reg("it", "przelicznik-jednostek", "units", "Convertitore unità", "Converti lunghezza, massa, temperatura e volume: cm↔pollici, kg↔lb, °C↔°F e altro.", ["Scegli una categoria di unità.", "Inserisci un valore e le unità.", "Ottieni il risultato istantaneamente."], [{ q: "Le conversioni sono accurate?", a: "Sì — fattori SI standard. La temperatura usa formule dedicate, non una semplice moltiplicazione." }]);
reg("it", "kalkulator-vat", "finance", "Calcolatore IVA e percentuali", "Aggiungi o rimuovi IVA (23%, 8%, 5%), calcola netto/lordo e semplici percentuali di un importo.", ["Inserisci un importo netto o lordo.", "Scegli un'aliquota IVA o percentuale personalizzata.", "Vedi la ripartizione netto, IVA e lordo."], [{ q: "Quali aliquote IVA in Polonia?", a: "Standard 23%, ridotte 8% e 5%. Puoi anche inserire un'aliquota personalizzata." }]);
reg("it", "kalkulator-wieku", "time", "Calcolatore età e countdown", "Calcola l'età esatta in anni, mesi e giorni — o quanti giorni mancano a una data.", ["Inserisci una data di nascita o una data obiettivo.", "Vedi l'età o il countdown.", "Controlla anche il prossimo compleanno."], [{ q: "Come viene calcolata l'età?", a: "Dalla data di nascita a oggi, contando anni, mesi e giorni — non solo anni di calendario." }]);
reg("it", "generator-hasel", "dev", "Generatore password", "Genera una password forte localmente nel browser. Imposta lunghezza e set di caratteri — nulla viene inviato al server.", ["Imposta lunghezza e opzioni caratteri.", "Clicca Genera.", "Copia con un clic."], [{ q: "La password viene caricata?", a: "No — la generazione avviene interamente nel tuo browser." }]);
reg("it", "licznik-znakow", "text", "Contatore caratteri e parole", "Conta caratteri, parole, frasi e paragrafi — utile per SEO, social e limiti dei moduli.", ["Incolla o digita testo.", "Guarda le statistiche in tempo reale.", "Controlla la lunghezza senza spazi."], [{ q: "Come vengono contate le parole?", a: "Le parole sono sequenze separate da spazi o a capo." }]);
reg("it", "generator-qr", "dev", "Generatore codici QR", "Crea un codice QR da un link o testo e scaricalo come PNG. Funziona localmente nel browser.", ["Inserisci testo o URL.", "Genera l'anteprima QR.", "Scarica un'immagine PNG."], [{ q: "Il contenuto QR viene caricato?", a: "No — il codice viene creato localmente. Non memorizziamo il contenuto." }]);
reg("it", "kalkulator-bitrate", "media", "Calcolatore dimensione file e bitrate", "Stima quanto sarà grande un file audio/video con bitrate e durata dati — o il bitrate che rientra in un limite MB.", ["Scegli dimensione da bitrate o bitrate da limite.", "Inserisci durata e valori.", "Leggi il risultato in MB / kbps."], [{ q: "Include il contenitore?", a: "Stima il flusso grezzo. Contenitori e tracce extra aggiungono di solito qualche percento." }]);
reg("it", "konwerter-kolorow", "dev", "Convertitore colori HEX RGB HSL", "Converti colori tra HEX, RGB e HSL e verifica il contrasto WCAG rispetto a uno sfondo.", ["Inserisci un colore in qualsiasi formato.", "Vedi gli equivalenti HEX/RGB/HSL.", "Verifica il contrasto rispetto a uno sfondo."], [{ q: "Cosa significano AA / AAA?", a: "Livelli di accessibilità WCAG per il contrasto del testo rispetto a uno sfondo." }]);
reg("it", "base64", "dev", "Base64 codifica / decodifica", "Codifica testo in Base64 o decodifica Base64. Localmente, senza caricare dati.", ["Incolla testo o Base64.", "Scegli Codifica o Decodifica.", "Copia il risultato."], [{ q: "Supporta UTF-8?", a: "Sì — sono supportati i caratteri Unicode." }]);
reg("it", "unix-timestamp", "dev", "Timestamp Unix ↔ data", "Converti un timestamp Unix (secondi/ms) in data e viceversa. Utile per log e API.", ["Incolla un timestamp o scegli una data.", "Vedi risultati ISO e locali.", "Copia il valore."], [{ q: "Secondi o millisecondi?", a: "Rileviamo automaticamente in base alla lunghezza. Puoi anche forzare l'unità." }]);
reg("it", "generator-uuid", "dev", "Generatore UUID", "Genera UUID v4 (casuale) con un clic. Creane molti insieme se serve.", ["Imposta quanti UUID.", "Clicca Genera.", "Copia l'elenco."], [{ q: "Quale versione UUID?", a: "UUID v4 — casuale, RFC 4122, generato nel browser." }]);
reg("it", "generator-hash", "dev", "Hash SHA / MD5", "Calcola SHA-1, SHA-256, SHA-512 o MD5 di un testo. Localmente via Web Crypto.", ["Incolla testo.", "Scegli un algoritmo.", "Copia l'hash hex."], [{ q: "MD5 è sicuro?", a: "MD5 non va usato per le password. Usa SHA-256+ per la sicurezza; MD5 solo per checksum." }]);
reg("it", "json-formatter", "dev", "Formattatore JSON", "Formatta e minifica JSON nel browser — senza caricamento sul server.", ["Incolla JSON.", "Clicca Formatta o Minifica.", "Copia il risultato."], [{ q: "I dati vengono caricati?", a: "No — l'elaborazione avviene localmente nel browser." }]);
reg("it", "diff-tekstu", "text", "Diff testo", "Confronta due frammenti di testo riga per riga ed evidenzia le differenze.", ["Incolla testo A e B.", "Esamina le differenze evidenziate."], [{ q: "È un diff completo?", a: "È un confronto riga per riga — ideale per brevi frammenti ed elenchi." }]);
reg("it", "konwerter-wielkosci-liter", "text", "Convertitore maiuscole/minuscole", "Converti testo in maiuscolo, minuscolo, Title Case o sentence case.", ["Incolla testo.", "Scegli una modalità.", "Copia il risultato."], []);
reg("it", "usun-duplikaty-linii", "text", "Rimuovi righe duplicate", "Rimuovi righe ripetute da elenchi email, SKU o tag.", ["Incolla un elenco.", "Imposta le opzioni.", "Copia l'elenco pulito."], []);
reg("it", "dekoder-jwt", "dev", "Decodificatore JWT", "Leggi header e payload di un JWT senza verificare la firma.", ["Incolla un token.", "Ispeziona header e payload."], [{ q: "Verifica la firma?", a: "No — decodifica solo Base64URL del token." }]);
reg("it", "walidator-nip-pesel", "dev", "Validatore NIP / PESEL / REGON", "Valida numeri fiscali e identificativi polacchi secondo le regole di checksum.", ["Inserisci un numero.", "Vedi il risultato della validazione."], [{ q: "Interroga il registro GUS?", a: "No — solo checksum e lunghezza." }]);
reg("it", "kalkulator-kredytu", "finance", "Calcolatore prestito", "Calcola rate annue, rimborso totale e costo degli interessi.", ["Inserisci importo, tasso e durata.", "Leggi la rata mensile."], [{ q: "Include commissioni bancarie?", a: "Simulazione semplificata senza commissioni o assicurazioni." }]);
reg("it", "markdown-preview", "text", "Anteprima Markdown", "Scrivi Markdown e vedi un'anteprima HTML live nel browser.", ["Digita Markdown.", "L'anteprima si aggiorna automaticamente."], []);
reg("it", "sila-hasla", "dev", "Forza password", "Valuta la forza di una password per lunghezza, varietà di caratteri e pattern comuni.", ["Inserisci una password.", "Vedi punteggio e suggerimenti."], [{ q: "La password viene caricata?", a: "No — la valutazione avviene localmente nel browser." }]);
reg("it", "konwerter-napisow", "media", "Convertitore sottotitoli SRT / VTT", "Converti sottotitoli tra formati SRT e WebVTT.", ["Incolla i sottotitoli.", "Scegli direzione o auto.", "Copia il risultato."], []);
reg("it", "generator-nazw-plikow", "text", "Rinomina file in batch", "Rinomina file in massa con un pattern {name}, {ext}, {index}.", ["Incolla un elenco di file.", "Imposta un pattern.", "Copia i nuovi nomi."], []);
reg("it", "walidator-iban", "dev", "Validatore IBAN", "Valida checksum IBAN (mod 97) e lunghezza specifica per paese.", ["Incolla un IBAN.", "Vedi output formattato e validazione."], [{ q: "Verifica il conto bancario?", a: "No — solo formato e checksum." }]);
reg("it", "kalkulator-b2b", "finance", "Calcolatore B2B vs dipendente", "Confronta lo stipendio netto da dipendente con i ricavi da fattura B2B (tassazione forfettaria o lineare).", ["Inserisci lordo dipendente e ricavi B2B.", "Scegli la forma fiscale.", "Confronta i risultati."], [{ q: "È consulenza fiscale?", a: "No — simulazione semplificata per discuterne con un commercialista." }]);

