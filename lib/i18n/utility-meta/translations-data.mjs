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

export const toolTranslations = {
  "fr": {
    "przelicznik-walut": {
      "cat": "finance",
      "name": "Convertisseur de devises",
      "desc": "Convertissez des devises en ligne avec les taux de référence BCE. PLN, EUR, USD et des dizaines d'autres paires — sans inscription.",
      "steps": [
        "Saisissez un montant et la devise source.",
        "Choisissez la devise cible.",
        "Consultez le résultat et le taux du jour."
      ],
      "faq": [
        {
          "q": "D'où viennent les taux ?",
          "a": "Taux de référence de la Banque centrale européenne via l'API Frankfurter, mis à jour les jours ouvrables."
        },
        {
          "q": "Les taux sont-ils en temps réel ?",
          "a": "Ce sont des taux de référence BCE, pas des cours bancaires ou de bureaux de change."
        }
      ]
    },
    "kalkulator-dat": {
      "cat": "time",
      "name": "Calculateur de dates",
      "desc": "Calculez les jours entre deux dates, les jours ouvrables et le jour de la semaine — utile pour les contrats et les délais.",
      "steps": [
        "Choisissez les dates de début et de fin.",
        "Consultez la différence en jours et semaines.",
        "Comptez éventuellement uniquement les jours ouvrables."
      ],
      "faq": [
        {
          "q": "Les jours fériés sont-ils exclus ?",
          "a": "Par défaut nous excluons les samedis et dimanches. Les fériés dépendent du pays."
        }
      ]
    },
    "strefy-czasowe": {
      "cat": "time",
      "name": "Différence de fuseaux horaires",
      "desc": "Comparez les heures locales entre villes, voyez l'écart horaire et repérez les lieux sur une carte simple.",
      "steps": [
        "Choisissez les villes source et cible.",
        "Comparez les heures locales actuelles.",
        "Consultez le décalage et les marqueurs sur la carte."
      ],
      "faq": [
        {
          "q": "Gérez-vous l'heure d'été ?",
          "a": "Oui — nous utilisons les zones IANA (ex. Europe/Warsaw) qui appliquent automatiquement l'heure d'été."
        }
      ]
    },
    "przelicznik-jednostek": {
      "cat": "units",
      "name": "Convertisseur d'unités",
      "desc": "Convertissez longueur, masse, température et volume : cm↔pouces, kg↔lb, °C↔°F et plus.",
      "steps": [
        "Choisissez une catégorie d'unités.",
        "Saisissez une valeur et les unités.",
        "Obtenez le résultat instantanément."
      ],
      "faq": [
        {
          "q": "Les conversions sont-elles exactes ?",
          "a": "Oui — facteurs SI standard. La température utilise des formules dédiées, pas une simple multiplication."
        }
      ]
    },
    "kalkulator-vat": {
      "cat": "finance",
      "name": "Calculateur TVA et pourcentages",
      "desc": "Ajoutez ou retirez la TVA (23 %, 8 %, 5 %), calculez net/brut et des pourcentages simples d'un montant.",
      "steps": [
        "Saisissez un montant net ou brut.",
        "Choisissez un taux de TVA ou un pourcentage personnalisé.",
        "Consultez la ventilation net, TVA et brut."
      ],
      "faq": [
        {
          "q": "Quels taux de TVA en Pologne ?",
          "a": "Standard 23 %, réduits 8 % et 5 %. Vous pouvez aussi saisir un taux personnalisé."
        }
      ]
    },
    "kalkulator-wieku": {
      "cat": "time",
      "name": "Calculateur d'âge et compte à rebours",
      "desc": "Calculez l'âge exact en années, mois et jours — ou combien de jours restent jusqu'à une date.",
      "steps": [
        "Saisissez une date de naissance ou une date cible.",
        "Consultez l'âge ou le compte à rebours.",
        "Vérifiez aussi le prochain anniversaire."
      ],
      "faq": [
        {
          "q": "Comment l'âge est-il calculé ?",
          "a": "De la date de naissance à aujourd'hui, en comptant années, mois et jours — pas seulement les années calendaires."
        }
      ]
    },
    "generator-hasel": {
      "cat": "dev",
      "name": "Générateur de mots de passe",
      "desc": "Générez un mot de passe fort localement dans votre navigateur. Définissez la longueur et les jeux de caractères — rien n'est envoyé au serveur.",
      "steps": [
        "Définissez la longueur et les options de caractères.",
        "Cliquez sur Générer.",
        "Copiez en un clic."
      ],
      "faq": [
        {
          "q": "Le mot de passe est-il envoyé ?",
          "a": "Non — la génération se fait entièrement dans votre navigateur."
        }
      ]
    },
    "licznik-znakow": {
      "cat": "text",
      "name": "Compteur de caractères et mots",
      "desc": "Comptez caractères, mots, phrases et paragraphes — pratique pour le SEO, les réseaux sociaux et les limites de formulaires.",
      "steps": [
        "Collez ou saisissez du texte.",
        "Consultez les statistiques en direct.",
        "Vérifiez la longueur sans espaces."
      ],
      "faq": [
        {
          "q": "Comment les mots sont-ils comptés ?",
          "a": "Les mots sont des séquences séparées par des espaces ou des retours à la ligne."
        }
      ]
    },
    "generator-qr": {
      "cat": "dev",
      "name": "Générateur de codes QR",
      "desc": "Créez un code QR à partir d'un lien ou d'un texte et téléchargez-le en PNG. Fonctionne localement dans le navigateur.",
      "steps": [
        "Saisissez du texte ou une URL.",
        "Générez l'aperçu QR.",
        "Téléchargez une image PNG."
      ],
      "faq": [
        {
          "q": "Le contenu QR est-il envoyé ?",
          "a": "Non — le code est créé localement. Nous ne stockons pas le contenu."
        }
      ]
    },
    "kalkulator-bitrate": {
      "cat": "media",
      "name": "Calculateur taille de fichier et bitrate",
      "desc": "Estimez la taille d'un fichier audio/vidéo pour un bitrate et une durée donnés — ou le bitrate qui tient dans une limite en Mo.",
      "steps": [
        "Choisissez taille depuis bitrate ou bitrate depuis limite.",
        "Saisissez la durée et les valeurs.",
        "Consultez le résultat en Mo / kbps."
      ],
      "faq": [
        {
          "q": "Le conteneur est-il inclus ?",
          "a": "Cela estime le flux brut. Les conteneurs et pistes supplémentaires ajoutent généralement quelques pourcents."
        }
      ]
    },
    "konwerter-kolorow": {
      "cat": "dev",
      "name": "Convertisseur couleur HEX RGB HSL",
      "desc": "Convertissez les couleurs entre HEX, RGB et HSL et vérifiez le contraste WCAG par rapport à un fond.",
      "steps": [
        "Saisissez une couleur dans n'importe quel format.",
        "Consultez les équivalents HEX/RGB/HSL.",
        "Vérifiez le contraste par rapport à un fond."
      ],
      "faq": [
        {
          "q": "Que signifient AA / AAA ?",
          "a": "Niveaux d'accessibilité WCAG pour le contraste du texte par rapport à un fond."
        }
      ]
    },
    "base64": {
      "cat": "dev",
      "name": "Base64 encoder / décoder",
      "desc": "Encodez du texte en Base64 ou décodez du Base64. Localement, sans envoi de données.",
      "steps": [
        "Collez du texte ou du Base64.",
        "Choisissez Encoder ou Décoder.",
        "Copiez le résultat."
      ],
      "faq": [
        {
          "q": "Prend-il en charge UTF-8 ?",
          "a": "Oui — les caractères Unicode sont pris en charge."
        }
      ]
    },
    "unix-timestamp": {
      "cat": "dev",
      "name": "Timestamp Unix ↔ date",
      "desc": "Convertissez un timestamp Unix (secondes/ms) en date et inversement. Utile pour les logs et les API.",
      "steps": [
        "Collez un timestamp ou choisissez une date.",
        "Consultez les résultats ISO et locaux.",
        "Copiez la valeur."
      ],
      "faq": [
        {
          "q": "Secondes ou millisecondes ?",
          "a": "Nous détectons automatiquement selon la longueur. Vous pouvez aussi forcer l'unité."
        }
      ]
    },
    "generator-uuid": {
      "cat": "dev",
      "name": "Générateur UUID",
      "desc": "Générez un UUID v4 (aléatoire) en un clic. Créez-en plusieurs à la fois si besoin.",
      "steps": [
        "Définissez le nombre d'UUID.",
        "Cliquez sur Générer.",
        "Copiez la liste."
      ],
      "faq": [
        {
          "q": "Quelle version d'UUID ?",
          "a": "UUID v4 — aléatoire, RFC 4122, généré dans le navigateur."
        }
      ]
    },
    "generator-hash": {
      "cat": "dev",
      "name": "Hash SHA / MD5",
      "desc": "Calculez SHA-1, SHA-256, SHA-512 ou MD5 d'un texte. Localement via Web Crypto.",
      "steps": [
        "Collez du texte.",
        "Choisissez un algorithme.",
        "Copiez le hash hex."
      ],
      "faq": [
        {
          "q": "Le MD5 est-il sûr ?",
          "a": "Le MD5 ne convient pas aux mots de passe. Utilisez SHA-256+ pour la sécurité ; MD5 uniquement pour les sommes de contrôle."
        }
      ]
    },
    "json-formatter": {
      "cat": "dev",
      "name": "Formateur JSON",
      "desc": "Formatez et minifiez du JSON dans le navigateur — sans envoi au serveur.",
      "steps": [
        "Collez du JSON.",
        "Cliquez sur Formater ou Minifier.",
        "Copiez le résultat."
      ],
      "faq": [
        {
          "q": "Les données sont-elles envoyées ?",
          "a": "Non — le traitement se fait localement dans votre navigateur."
        }
      ]
    },
    "diff-tekstu": {
      "cat": "text",
      "name": "Diff de texte",
      "desc": "Comparez deux extraits de texte ligne par ligne et mettez en évidence les différences.",
      "steps": [
        "Collez le texte A et B.",
        "Examinez les différences surlignées."
      ],
      "faq": [
        {
          "q": "Est-ce un diff complet ?",
          "a": "C'est une comparaison ligne par ligne — idéale pour de courts extraits et des listes."
        }
      ]
    },
    "konwerter-wielkosci-liter": {
      "cat": "text",
      "name": "Convertisseur de casse",
      "desc": "Convertissez du texte en majuscules, minuscules, Title Case ou sentence case.",
      "steps": [
        "Collez du texte.",
        "Choisissez un mode.",
        "Copiez le résultat."
      ],
      "faq": []
    },
    "usun-duplikaty-linii": {
      "cat": "text",
      "name": "Supprimer les lignes en double",
      "desc": "Supprimez les lignes répétées des listes d'e-mails, SKU ou tags.",
      "steps": [
        "Collez une liste.",
        "Définissez les options.",
        "Copiez la liste nettoyée."
      ],
      "faq": []
    },
    "dekoder-jwt": {
      "cat": "dev",
      "name": "Décodeur JWT",
      "desc": "Lisez l'en-tête et le payload d'un JWT sans vérifier la signature.",
      "steps": [
        "Collez un token.",
        "Inspectez l'en-tête et le payload."
      ],
      "faq": [
        {
          "q": "Vérifie-t-il la signature ?",
          "a": "Non — il décode uniquement le Base64URL du token."
        }
      ]
    },
    "walidator-nip-pesel": {
      "cat": "dev",
      "name": "Validateur NIP / PESEL / REGON",
      "desc": "Validez les numéros fiscaux et d'identité polonais selon les règles de clé de contrôle.",
      "steps": [
        "Saisissez un numéro.",
        "Consultez le résultat de validation."
      ],
      "faq": [
        {
          "q": "Interroge-t-il le registre GUS ?",
          "a": "Non — clé de contrôle et longueur uniquement."
        }
      ]
    },
    "kalkulator-kredytu": {
      "cat": "finance",
      "name": "Calculateur de prêt",
      "desc": "Calculez les mensualités, le remboursement total et le coût des intérêts.",
      "steps": [
        "Saisissez le montant, le taux et la durée.",
        "Consultez la mensualité."
      ],
      "faq": [
        {
          "q": "Inclut-il les frais bancaires ?",
          "a": "Simulation simplifiée sans frais ni assurance."
        }
      ]
    },
    "markdown-preview": {
      "cat": "text",
      "name": "Aperçu Markdown",
      "desc": "Écrivez du Markdown et voyez un aperçu HTML en direct dans le navigateur.",
      "steps": [
        "Saisissez du Markdown.",
        "L'aperçu se met à jour automatiquement."
      ],
      "faq": []
    },
    "sila-hasla": {
      "cat": "dev",
      "name": "Force du mot de passe",
      "desc": "Évaluez la force d'un mot de passe selon la longueur, la variété des caractères et les motifs courants.",
      "steps": [
        "Saisissez un mot de passe.",
        "Consultez le score et les conseils."
      ],
      "faq": [
        {
          "q": "Le mot de passe est-il envoyé ?",
          "a": "Non — l'évaluation se fait localement dans votre navigateur."
        }
      ]
    },
    "konwerter-napisow": {
      "cat": "media",
      "name": "Convertisseur de sous-titres SRT / VTT",
      "desc": "Convertissez des sous-titres entre les formats SRT et WebVTT.",
      "steps": [
        "Collez les sous-titres.",
        "Choisissez la direction ou auto.",
        "Copiez le résultat."
      ],
      "faq": []
    },
    "generator-nazw-plikow": {
      "cat": "text",
      "name": "Renommage de fichiers par lot",
      "desc": "Renommez des fichiers en masse avec un modèle {name}, {ext}, {index}.",
      "steps": [
        "Collez une liste de fichiers.",
        "Définissez un modèle.",
        "Copiez les nouveaux noms."
      ],
      "faq": []
    },
    "walidator-iban": {
      "cat": "dev",
      "name": "Validateur IBAN",
      "desc": "Validez la somme de contrôle IBAN (mod 97) et la longueur spécifique au pays.",
      "steps": [
        "Collez un IBAN.",
        "Consultez le résultat formaté et la validation."
      ],
      "faq": [
        {
          "q": "Vérifie-t-il le compte bancaire ?",
          "a": "Non — format et somme de contrôle uniquement."
        }
      ]
    },
    "kalkulator-b2b": {
      "cat": "finance",
      "name": "Calculateur B2B vs salariat",
      "desc": "Comparez le salaire net en emploi avec les revenus en facturation B2B (impôt forfaitaire ou linéaire).",
      "steps": [
        "Saisissez le brut salarial et le revenu B2B.",
        "Choisissez la forme fiscale.",
        "Comparez les résultats."
      ],
      "faq": [
        {
          "q": "Est-ce un conseil fiscal ?",
          "a": "Non — simulation simplifiée pour en discuter avec un comptable."
        }
      ]
    }
  },
  "it": {
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
  },
  "pt": {
    "przelicznik-walut": {
      "cat": "finance",
      "name": "Conversor de moedas",
      "desc": "Converta moedas online com taxas de referência do BCE. PLN, EUR, USD e dezenas de outros pares — sem registo.",
      "steps": [
        "Introduza um montante e a moeda de origem.",
        "Escolha a moeda de destino.",
        "Consulte o resultado e a taxa do dia."
      ],
      "faq": [
        {
          "q": "De onde vêm as taxas?",
          "a": "Taxas de referência do Banco Central Europeu via API Frankfurter, atualizadas em dias úteis."
        },
        {
          "q": "As taxas são em tempo real?",
          "a": "São taxas de referência do BCE, não cotações bancárias ou de casas de câmbio."
        }
      ]
    },
    "kalkulator-dat": {
      "cat": "time",
      "name": "Calculadora de datas",
      "desc": "Calcule os dias entre duas datas, dias úteis e o dia da semana — útil para contratos e prazos.",
      "steps": [
        "Escolha as datas de início e fim.",
        "Veja a diferença em dias e semanas.",
        "Opcionalmente conte apenas dias úteis."
      ],
      "faq": [
        {
          "q": "Os feriados são excluídos?",
          "a": "Por predefinição excluímos sábados e domingos. Os feriados dependem do país."
        }
      ]
    },
    "strefy-czasowe": {
      "cat": "time",
      "name": "Diferença de fusos horários",
      "desc": "Compare horas locais entre cidades, veja a diferença horária e localize os lugares num mapa simples.",
      "steps": [
        "Escolha as cidades de origem e destino.",
        "Compare as horas locais atuais.",
        "Veja o desvio e os marcadores no mapa."
      ],
      "faq": [
        {
          "q": "Consideram o horário de verão?",
          "a": "Sim — usamos zonas IANA (ex. Europe/Warsaw) que aplicam o DST automaticamente."
        }
      ]
    },
    "przelicznik-jednostek": {
      "cat": "units",
      "name": "Conversor de unidades",
      "desc": "Converta comprimento, massa, temperatura e volume: cm↔pol., kg↔lb, °C↔°F e mais.",
      "steps": [
        "Escolha uma categoria de unidades.",
        "Introduza um valor e as unidades.",
        "Obtenha o resultado instantaneamente."
      ],
      "faq": [
        {
          "q": "As conversões são exatas?",
          "a": "Sim — fatores SI padrão. A temperatura usa fórmulas próprias, não multiplicação simples."
        }
      ]
    },
    "kalkulator-vat": {
      "cat": "finance",
      "name": "Calculadora de IVA e percentagens",
      "desc": "Adicione ou remova IVA (23%, 8%, 5%), calcule líquido/bruto e percentagens simples de um montante.",
      "steps": [
        "Introduza um montante líquido ou bruto.",
        "Escolha uma taxa de IVA ou percentagem personalizada.",
        "Veja o detalhe líquido, IVA e bruto."
      ],
      "faq": [
        {
          "q": "Que taxas de IVA existem na Polónia?",
          "a": "Padrão 23%, reduzidas 8% e 5%. Também pode introduzir uma taxa personalizada."
        }
      ]
    },
    "kalkulator-wieku": {
      "cat": "time",
      "name": "Calculadora de idade e contagem decrescente",
      "desc": "Calcule a idade exata em anos, meses e dias — ou quantos dias faltam até uma data.",
      "steps": [
        "Introduza uma data de nascimento ou data alvo.",
        "Veja a idade ou a contagem decrescente.",
        "Verifique também o próximo aniversário."
      ],
      "faq": [
        {
          "q": "Como é calculada a idade?",
          "a": "Da data de nascimento até hoje, contando anos, meses e dias — não apenas anos de calendário."
        }
      ]
    },
    "generator-hasel": {
      "cat": "dev",
      "name": "Gerador de palavras-passe",
      "desc": "Gere uma palavra-passe forte localmente no navegador. Defina comprimento e conjuntos de caracteres — nada é enviado para o servidor.",
      "steps": [
        "Defina comprimento e opções de caracteres.",
        "Clique em Gerar.",
        "Copie com um clique."
      ],
      "faq": [
        {
          "q": "A palavra-passe é enviada?",
          "a": "Não — a geração acontece inteiramente no seu navegador."
        }
      ]
    },
    "licznik-znakow": {
      "cat": "text",
      "name": "Contador de caracteres e palavras",
      "desc": "Conte caracteres, palavras, frases e parágrafos — útil para SEO, redes sociais e limites de formulários.",
      "steps": [
        "Cole ou escreva texto.",
        "Veja estatísticas em tempo real.",
        "Verifique o comprimento sem espaços."
      ],
      "faq": [
        {
          "q": "Como são contadas as palavras?",
          "a": "Palavras são sequências separadas por espaços ou quebras de linha."
        }
      ]
    },
    "generator-qr": {
      "cat": "dev",
      "name": "Gerador de códigos QR",
      "desc": "Crie um código QR a partir de um link ou texto e descarregue como PNG. Funciona localmente no navegador.",
      "steps": [
        "Introduza texto ou URL.",
        "Gere a pré-visualização QR.",
        "Descarregue uma imagem PNG."
      ],
      "faq": [
        {
          "q": "O conteúdo QR é enviado?",
          "a": "Não — o código é criado localmente. Não armazenamos o conteúdo."
        }
      ]
    },
    "kalkulator-bitrate": {
      "cat": "media",
      "name": "Calculadora de tamanho de ficheiro e bitrate",
      "desc": "Estime o tamanho de um ficheiro áudio/vídeo com bitrate e duração dados — ou o bitrate que cabe num limite de MB.",
      "steps": [
        "Escolha tamanho a partir de bitrate ou bitrate a partir de limite.",
        "Introduza duração e valores.",
        "Leia o resultado em MB / kbps."
      ],
      "faq": [
        {
          "q": "Inclui o contentor?",
          "a": "Estima o fluxo bruto. Contentores e faixas extra acrescentam normalmente alguns percentuais."
        }
      ]
    },
    "konwerter-kolorow": {
      "cat": "dev",
      "name": "Conversor de cores HEX RGB HSL",
      "desc": "Converta cores entre HEX, RGB e HSL e verifique o contraste WCAG face a um fundo.",
      "steps": [
        "Introduza uma cor em qualquer formato.",
        "Veja equivalentes HEX/RGB/HSL.",
        "Verifique o contraste face a um fundo."
      ],
      "faq": [
        {
          "q": "O que significam AA / AAA?",
          "a": "Níveis de acessibilidade WCAG para contraste de texto face a um fundo."
        }
      ]
    },
    "base64": {
      "cat": "dev",
      "name": "Base64 codificar / descodificar",
      "desc": "Codifique texto para Base64 ou descodifique Base64. Localmente, sem enviar dados.",
      "steps": [
        "Cole texto ou Base64.",
        "Escolha Codificar ou Descodificar.",
        "Copie o resultado."
      ],
      "faq": [
        {
          "q": "Suporta UTF-8?",
          "a": "Sim — caracteres Unicode são suportados."
        }
      ]
    },
    "unix-timestamp": {
      "cat": "dev",
      "name": "Timestamp Unix ↔ data",
      "desc": "Converta um timestamp Unix (segundos/ms) em data e vice-versa. Útil para logs e APIs.",
      "steps": [
        "Cole um timestamp ou escolha uma data.",
        "Veja resultados ISO e locais.",
        "Copie o valor."
      ],
      "faq": [
        {
          "q": "Segundos ou milissegundos?",
          "a": "Detetamos automaticamente pela extensão. Também pode forçar a unidade."
        }
      ]
    },
    "generator-uuid": {
      "cat": "dev",
      "name": "Gerador UUID",
      "desc": "Gere UUID v4 (aleatório) com um clique. Crie vários de uma vez se precisar.",
      "steps": [
        "Defina quantos UUID.",
        "Clique em Gerar.",
        "Copie a lista."
      ],
      "faq": [
        {
          "q": "Que versão de UUID?",
          "a": "UUID v4 — aleatório, RFC 4122, gerado no navegador."
        }
      ]
    },
    "generator-hash": {
      "cat": "dev",
      "name": "Hash SHA / MD5",
      "desc": "Calcule SHA-1, SHA-256, SHA-512 ou MD5 de um texto. Localmente via Web Crypto.",
      "steps": [
        "Cole texto.",
        "Escolha um algoritmo.",
        "Copie o hash hex."
      ],
      "faq": [
        {
          "q": "MD5 é seguro?",
          "a": "MD5 não serve para palavras-passe. Use SHA-256+ para segurança; MD5 apenas para checksums."
        }
      ]
    },
    "json-formatter": {
      "cat": "dev",
      "name": "Formatador JSON",
      "desc": "Formate e minifique JSON no navegador — sem envio para o servidor.",
      "steps": [
        "Cole JSON.",
        "Clique em Formatar ou Minificar.",
        "Copie o resultado."
      ],
      "faq": [
        {
          "q": "Os dados são enviados?",
          "a": "Não — o processamento acontece localmente no navegador."
        }
      ]
    },
    "diff-tekstu": {
      "cat": "text",
      "name": "Diff de texto",
      "desc": "Compare dois excertos de texto linha a linha e destaque as diferenças.",
      "steps": [
        "Cole o texto A e B.",
        "Revise as diferenças destacadas."
      ],
      "faq": [
        {
          "q": "É um diff completo?",
          "a": "É uma comparação linha a linha — ideal para excertos curtos e listas."
        }
      ]
    },
    "konwerter-wielkosci-liter": {
      "cat": "text",
      "name": "Conversor de maiúsculas/minúsculas",
      "desc": "Converta texto para maiúsculas, minúsculas, Title Case ou sentence case.",
      "steps": [
        "Cole texto.",
        "Escolha um modo.",
        "Copie o resultado."
      ],
      "faq": []
    },
    "usun-duplikaty-linii": {
      "cat": "text",
      "name": "Remover linhas duplicadas",
      "desc": "Remova linhas repetidas de listas de e-mail, SKU ou etiquetas.",
      "steps": [
        "Cole uma lista.",
        "Defina opções.",
        "Copie a lista limpa."
      ],
      "faq": []
    },
    "dekoder-jwt": {
      "cat": "dev",
      "name": "Descodificador JWT",
      "desc": "Leia o cabeçalho e payload de um JWT sem verificar a assinatura.",
      "steps": [
        "Cole um token.",
        "Inspecione cabeçalho e payload."
      ],
      "faq": [
        {
          "q": "Verifica a assinatura?",
          "a": "Não — apenas descodifica Base64URL do token."
        }
      ]
    },
    "walidator-nip-pesel": {
      "cat": "dev",
      "name": "Validador NIP / PESEL / REGON",
      "desc": "Valide números fiscais e de identificação polacos segundo regras de checksum.",
      "steps": [
        "Introduza um número.",
        "Veja o resultado da validação."
      ],
      "faq": [
        {
          "q": "Consulta o registo GUS?",
          "a": "Não — apenas checksum e comprimento."
        }
      ]
    },
    "kalkulator-kredytu": {
      "cat": "finance",
      "name": "Calculadora de empréstimo",
      "desc": "Calcule prestações de anuidade, reembolso total e custo de juros.",
      "steps": [
        "Introduza montante, taxa e prazo.",
        "Leia a prestação mensal."
      ],
      "faq": [
        {
          "q": "Inclui comissões bancárias?",
          "a": "Simulação simplificada sem comissões ou seguros."
        }
      ]
    },
    "markdown-preview": {
      "cat": "text",
      "name": "Pré-visualização Markdown",
      "desc": "Escreva Markdown e veja uma pré-visualização HTML em tempo real no navegador.",
      "steps": [
        "Escreva Markdown.",
        "A pré-visualização atualiza-se automaticamente."
      ],
      "faq": []
    },
    "sila-hasla": {
      "cat": "dev",
      "name": "Força da palavra-passe",
      "desc": "Avalie a força de uma palavra-passe por comprimento, variedade de caracteres e padrões comuns.",
      "steps": [
        "Introduza uma palavra-passe.",
        "Veja a pontuação e sugestões."
      ],
      "faq": [
        {
          "q": "A palavra-passe é enviada?",
          "a": "Não — a avaliação acontece localmente no navegador."
        }
      ]
    },
    "konwerter-napisow": {
      "cat": "media",
      "name": "Conversor de legendas SRT / VTT",
      "desc": "Converta legendas entre formatos SRT e WebVTT.",
      "steps": [
        "Cole as legendas.",
        "Escolha direção ou auto.",
        "Copie o resultado."
      ],
      "faq": []
    },
    "generator-nazw-plikow": {
      "cat": "text",
      "name": "Renomeador de ficheiros em lote",
      "desc": "Renomeie ficheiros em massa com um padrão {name}, {ext}, {index}.",
      "steps": [
        "Cole uma lista de ficheiros.",
        "Defina um padrão.",
        "Copie os novos nomes."
      ],
      "faq": []
    },
    "walidator-iban": {
      "cat": "dev",
      "name": "Validador IBAN",
      "desc": "Valide checksum IBAN (mod 97) e comprimento específico do país.",
      "steps": [
        "Cole um IBAN.",
        "Veja saída formatada e validação."
      ],
      "faq": [
        {
          "q": "Verifica a conta bancária?",
          "a": "Não — apenas formato e checksum."
        }
      ]
    },
    "kalkulator-b2b": {
      "cat": "finance",
      "name": "Calculadora B2B vs emprego",
      "desc": "Compare salário líquido de emprego com rendimentos de fatura B2B (imposto fixo ou linear).",
      "steps": [
        "Introduza bruto de emprego e rendimentos B2B.",
        "Escolha a forma fiscal.",
        "Compare os resultados."
      ],
      "faq": [
        {
          "q": "Isto é aconselhamento fiscal?",
          "a": "Não — simulação simplificada para discutir com um contabilista."
        }
      ]
    }
  },
  "nl": {
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
  },
  "sv": {
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
  },
  "no": {
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
  },
  "da": {
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
  },
  "fi": {
    "przelicznik-walut": {
      "cat": "finance",
      "name": "Valuuttamuunnin",
      "desc": "Muunna valuuttoja verkossa ECB:n viitekurssien mukaan. PLN, EUR, USD ja kymmeniä muita pareja — ilman rekisteröitymistä.",
      "steps": [
        "Syötä summa ja lähdevaluutta.",
        "Valitse kohdevaluutta.",
        "Katso tulos ja päivän kurssi."
      ],
      "faq": [
        {
          "q": "Mistä kurssit tulevat?",
          "a": "Euroopan keskuspankin viitekurssit Frankfurter API:n kautta, päivitetään arkipäivisin."
        },
        {
          "q": "Ovatko kurssit reaaliaikaisia?",
          "a": "Nämä ovat EKP:n viitekurssit, eivät pankki- tai vaihtokurssit."
        }
      ]
    },
    "kalkulator-dat": {
      "cat": "time",
      "name": "Päivämäärälaskin",
      "desc": "Laske päivät kahden päivämäärän välillä, arkipäivät ja viikonpäivä — hyödyllinen sopimuksiin ja määräaikoihin.",
      "steps": [
        "Valitse alku- ja loppupäivä.",
        "Katso ero päivinä ja viikkoina.",
        "Laske halutessasi vain arkipäivät."
      ],
      "faq": [
        {
          "q": "Jätetäänkö pyhäpäivät pois?",
          "a": "Oletuksena poissuljemme lauantait ja sunnuntait. Pyhät riippuvat maasta."
        }
      ]
    },
    "strefy-czasowe": {
      "cat": "time",
      "name": "Aikavyöhyke-ero",
      "desc": "Vertaa paikallisia aikoja kaupunkien välillä, katso tuntiero ja löydä paikat yksinkertaiselta kartalta.",
      "steps": [
        "Valitse lähde- ja kohdekaupunki.",
        "Vertaa nykyisiä paikallisia aikoja.",
        "Katso offset ja karttamerkit."
      ],
      "faq": [
        {
          "q": "Huomioitteko kesäajan?",
          "a": "Kyllä — käytämme IANA-vyöhykkeitä (esim. Europe/Warsaw), jotka soveltavat DST:tä automaattisesti."
        }
      ]
    },
    "przelicznik-jednostek": {
      "cat": "units",
      "name": "Yksikkömuunnin",
      "desc": "Muunna pituus, massa, lämpötila ja tilavuus: cm↔tuuma, kg↔lb, °C↔°F ja muuta.",
      "steps": [
        "Valitse yksikkökategoria.",
        "Syötä arvo ja yksiköt.",
        "Saa tulos heti."
      ],
      "faq": [
        {
          "q": "Ovatko muunnokset tarkkoja?",
          "a": "Kyllä — standardi SI-kertoimet. Lämpötila käyttää omia kaavoja, ei yksinkertaista kertolaskua."
        }
      ]
    },
    "kalkulator-vat": {
      "cat": "finance",
      "name": "ALV- ja prosenttilaskin",
      "desc": "Lisää tai vähennä ALV (23%, 8%, 5%), laske netto/brutto ja yksinkertaiset prosentit summasta.",
      "steps": [
        "Syötä netto- tai bruttosumma.",
        "Valitse ALV-kanta tai mukautettu prosentti.",
        "Katso erittely netto, ALV ja brutto."
      ],
      "faq": [
        {
          "q": "Mitä ALV-kantoja Puolassa on?",
          "a": "Vakio 23%, alennetut 8% ja 5%. Voit myös syöttää oman kannan."
        }
      ]
    },
    "kalkulator-wieku": {
      "cat": "time",
      "name": "Ikä- ja lähtölaskuri",
      "desc": "Laske tarkka ikä vuosina, kuukausina ja päivinä — tai kuinka monta päivää päivämäärään.",
      "steps": [
        "Syötä syntymäpäivä tai kohdepäivä.",
        "Katso ikä tai lähtölaskenta.",
        "Tarkista myös seuraava syntymäpäivä."
      ],
      "faq": [
        {
          "q": "Miten ikä lasketaan?",
          "a": "Syntymäpäivästä tähän päivään, vuosineen, kuukausineen ja päivineen — ei pelkkiä kalenterivuosia."
        }
      ]
    },
    "generator-hasel": {
      "cat": "dev",
      "name": "Salasanageneraattori",
      "desc": "Luo vahva salasana paikallisesti selaimessa. Aseta pituus ja merkkijoukot — mitään ei lähetetä palvelimelle.",
      "steps": [
        "Aseta pituus ja merkkiasetukset.",
        "Napsauta Luo.",
        "Kopioi yhdellä napsautuksella."
      ],
      "faq": [
        {
          "q": "Ladataanko salasana?",
          "a": "Ei — luonti tapahtuu kokonaan selaimessasi."
        }
      ]
    },
    "licznik-znakow": {
      "cat": "text",
      "name": "Merkki- ja sanalaskuri",
      "desc": "Laske merkit, sanat, lauseet ja kappaleet — kätevä SEO:lle, someen ja lomakerajoille.",
      "steps": [
        "Liitä tai kirjoita teksti.",
        "Katso live-tilastot.",
        "Tarkista pituus ilman välilyöntejä."
      ],
      "faq": [
        {
          "q": "Miten sanat lasketaan?",
          "a": "Sanat ovat välilyönnillä tai rivinvaihdolla erotettuja sarjoja."
        }
      ]
    },
    "generator-qr": {
      "cat": "dev",
      "name": "QR-koodigeneraattori",
      "desc": "Luo QR-koodi linkistä tai tekstistä ja lataa PNG:nä. Toimii paikallisesti selaimessa.",
      "steps": [
        "Syötä teksti tai URL.",
        "Luo QR-esikatselu.",
        "Lataa PNG-kuva."
      ],
      "faq": [
        {
          "q": "Ladataanko QR-sisältö?",
          "a": "Ei — koodi luodaan paikallisesti. Emme tallenna sisältöä."
        }
      ]
    },
    "kalkulator-bitrate": {
      "cat": "media",
      "name": "Tiedostokoko- ja bittinopeuslaskin",
      "desc": "Arvioi kuinka suuri audio-/videotiedosto on annetulla bittinopeudella ja kestolla — tai mikä bittinopeus mahtuu MB-rajaan.",
      "steps": [
        "Valitse koko bittinopeudesta tai bittinopeus rajasta.",
        "Syötä kesto ja arvot.",
        "Lue tulos MB / kbps."
      ],
      "faq": [
        {
          "q": "Sisältääkö se säiliön?",
          "a": "Se arvioi raakavirtaa. Säiliöt ja ylimääräiset raidat lisäävät yleensä muutaman prosentin."
        }
      ]
    },
    "konwerter-kolorow": {
      "cat": "dev",
      "name": "HEX RGB HSL värimuunnin",
      "desc": "Muunna värejä HEX-, RGB- ja HSL-muotojen välillä ja tarkista WCAG-kontrasti taustaan.",
      "steps": [
        "Syötä väri missä tahansa muodossa.",
        "Katso HEX/RGB/HSL-vastineet.",
        "Tarkista kontrasti taustaan."
      ],
      "faq": [
        {
          "q": "Mitä AA / AAA tarkoittaa?",
          "a": "WCAG-saavutettavuustasot tekstin kontrastille taustaan nähden."
        }
      ]
    },
    "base64": {
      "cat": "dev",
      "name": "Base64 koodaa / purkaa",
      "desc": "Koodaa teksti Base64:ään tai pura Base64. Paikallisesti, ilman latausta.",
      "steps": [
        "Liitä teksti tai Base64.",
        "Valitse Koodaa tai Pura.",
        "Kopioi tulos."
      ],
      "faq": [
        {
          "q": "Tukeeko se UTF-8:aa?",
          "a": "Kyllä — Unicode-merkit tuetaan."
        }
      ]
    },
    "unix-timestamp": {
      "cat": "dev",
      "name": "Unix-aikaleima ↔ päivämäärä",
      "desc": "Muunna Unix-aikaleima (sekunnit/ms) päivämääräksi ja takaisin. Hyödyllinen lokeihin ja API:hin.",
      "steps": [
        "Liitä aikaleima tai valitse päivämäärä.",
        "Katso ISO- ja paikalliset tulokset.",
        "Kopioi arvo."
      ],
      "faq": [
        {
          "q": "Sekunnit vai millisekunnit?",
          "a": "Tunnistamme automaattisesti pituudesta. Voit myös pakottaa yksikön."
        }
      ]
    },
    "generator-uuid": {
      "cat": "dev",
      "name": "UUID-generaattori",
      "desc": "Luo UUID v4 (satunnainen) yhdellä napsautuksella. Luo useita kerralla tarvittaessa.",
      "steps": [
        "Aseta UUID-määrä.",
        "Napsauta Luo.",
        "Kopioi lista."
      ],
      "faq": [
        {
          "q": "Mikä UUID-versio?",
          "a": "UUID v4 — satunnainen, RFC 4122, luotu selaimessa."
        }
      ]
    },
    "generator-hash": {
      "cat": "dev",
      "name": "SHA / MD5-tiiviste",
      "desc": "Laske SHA-1, SHA-256, SHA-512 tai MD5 tekstistä. Paikallisesti Web Cryptolla.",
      "steps": [
        "Liitä teksti.",
        "Valitse algoritmi.",
        "Kopioi hex-tiiviste."
      ],
      "faq": [
        {
          "q": "Onko MD5 turvallinen?",
          "a": "MD5 ei sovellu salasanoihin. Käytä SHA-256+ turvallisuuteen; MD5 vain tarkistussummiin."
        }
      ]
    },
    "json-formatter": {
      "cat": "dev",
      "name": "JSON-muotoilija",
      "desc": "Muotoile ja minifioi JSON selaimessa — ei palvelinlatausta.",
      "steps": [
        "Liitä JSON.",
        "Napsauta Muotoile tai Minifioi.",
        "Kopioi tulos."
      ],
      "faq": [
        {
          "q": "Ladataanko data?",
          "a": "Ei — käsittely tapahtuu paikallisesti selaimessasi."
        }
      ]
    },
    "diff-tekstu": {
      "cat": "text",
      "name": "Tekstidiff",
      "desc": "Vertaa kahta tekstikatkelmaa rivi riviltä ja korosta erot.",
      "steps": [
        "Liitä teksti A ja B.",
        "Tarkastele korostettuja eroja."
      ],
      "faq": [
        {
          "q": "Onko tämä täydellinen diff?",
          "a": "Se on rivi-rivi-vertailu — ihanteellinen lyhyille katkelmille ja listoille."
        }
      ]
    },
    "konwerter-wielkosci-liter": {
      "cat": "text",
      "name": "Kirjainkoon muunnin",
      "desc": "Muunna teksti isoiksi, pieniksi kirjaimiksi, Title Caseksi tai sentence caseksi.",
      "steps": [
        "Liitä teksti.",
        "Valitse tila.",
        "Kopioi tulos."
      ],
      "faq": []
    },
    "usun-duplikaty-linii": {
      "cat": "text",
      "name": "Poista kaksoisrivit",
      "desc": "Poista toistuvat rivit sähköpostilistojen, SKU:iden tai tagien joukosta.",
      "steps": [
        "Liitä lista.",
        "Aseta vaihtoehdot.",
        "Kopioi puhdistettu lista."
      ],
      "faq": []
    },
    "dekoder-jwt": {
      "cat": "dev",
      "name": "JWT-dekooderi",
      "desc": "Lue JWT:n header ja payload ilman allekirjoituksen tarkistusta.",
      "steps": [
        "Liitä token.",
        "Tarkastele headeria ja payloadia."
      ],
      "faq": [
        {
          "q": "Tarkistaako se allekirjoituksen?",
          "a": "Ei — se purkaa vain tokenin Base64URL:n."
        }
      ]
    },
    "walidator-nip-pesel": {
      "cat": "dev",
      "name": "NIP / PESEL / REGON-validaattori",
      "desc": "Validoi puolalaiset vero- ja henkilötunnukset tarkistussummasääntöjen mukaan.",
      "steps": [
        "Syötä numero.",
        "Katso validointitulos."
      ],
      "faq": [
        {
          "q": "Kysyykö se GUS:ia?",
          "a": "Ei — vain tarkistussumma ja pituus."
        }
      ]
    },
    "kalkulator-kredytu": {
      "cat": "finance",
      "name": "Lainalaskin",
      "desc": "Laske annuiteetti, kokonaismaksu ja korkokustannus.",
      "steps": [
        "Syötä summa, korko ja aika.",
        "Lue kuukausierä."
      ],
      "faq": [
        {
          "q": "Sisältääkö pankkimaksut?",
          "a": "Tämä on yksinkertaistettu simulaatio ilman maksuja tai vakuutuksia."
        }
      ]
    },
    "markdown-preview": {
      "cat": "text",
      "name": "Markdown-esikatselu",
      "desc": "Kirjoita Markdownia ja näe live HTML-esikatselu selaimessa.",
      "steps": [
        "Kirjoita Markdownia.",
        "Esikatselu päivittyy automaattisesti."
      ],
      "faq": []
    },
    "sila-hasla": {
      "cat": "dev",
      "name": "Salasanan vahvuus",
      "desc": "Arvioi salasanan vahvuus pituuden, merkkivalikoiman ja yleisten kuvioiden perusteella.",
      "steps": [
        "Syötä salasana.",
        "Katso pistemäärä ja vinkit."
      ],
      "faq": [
        {
          "q": "Ladataanko salasana?",
          "a": "Ei — arviointi tapahtuu paikallisesti selaimessasi."
        }
      ]
    },
    "konwerter-napisow": {
      "cat": "media",
      "name": "SRT / VTT tekstitysmuunnin",
      "desc": "Muunna tekstitykset SRT- ja WebVTT-muotojen välillä.",
      "steps": [
        "Liitä tekstitykset.",
        "Valitse suunta tai auto.",
        "Kopioi tulos."
      ],
      "faq": []
    },
    "generator-nazw-plikow": {
      "cat": "text",
      "name": "Erän tiedostonimien muuttaja",
      "desc": "Nimeä tiedostoja uudelleen joukkona kaavalla {name}, {ext}, {index}.",
      "steps": [
        "Liitä tiedostolista.",
        "Aseta kaava.",
        "Kopioi uudet nimet."
      ],
      "faq": []
    },
    "walidator-iban": {
      "cat": "dev",
      "name": "IBAN-validaattori",
      "desc": "Validoi IBAN-tarkistussumma (mod 97) ja maakohtainen pituus.",
      "steps": [
        "Liitä IBAN.",
        "Katso muotoiltu tulos ja validointi."
      ],
      "faq": [
        {
          "q": "Tarkistaako se pankkitilin?",
          "a": "Ei — vain muoto ja tarkistussumma."
        }
      ]
    },
    "kalkulator-b2b": {
      "cat": "finance",
      "name": "B2B vs työsuhde-laskin",
      "desc": "Vertaa työsuhteen nettopalkkaa B2B-laskutuloon (flat tai lineaarinen vero).",
      "steps": [
        "Syötä bruttopalkka ja B2B-tulot.",
        "Valitse veromuoto.",
        "Vertaa tuloksia."
      ],
      "faq": [
        {
          "q": "Onko tämä veroneuvontaa?",
          "a": "Ei — yksinkertaistettu simulaatio keskusteltavaksi kirjanpitäjän kanssa."
        }
      ]
    }
  },
  "cs": {
    "przelicznik-walut": {
      "cat": "finance",
      "name": "Převodník měn",
      "desc": "Převádějte měny online podle aktuálních referenčních kurzů ECB. PLN, EUR, USD a desítky dalších párů — bez registrace.",
      "steps": [
        "Zadejte částku a zdrojovou měnu.",
        "Vyberte cílovou měnu.",
        "Zobrazte výsledek a denní kurz."
      ],
      "faq": [
        {
          "q": "Odkud kurzy pocházejí?",
          "a": "Referenční kurzy Evropské centrální banky přes API Frankfurter, aktualizované v pracovní dny."
        },
        {
          "q": "Jsou kurzy v reálném čase?",
          "a": "Jde o referenční kurzy ECB, ne bankovní ani směnárenské kurzy."
        }
      ]
    },
    "kalkulator-dat": {
      "cat": "time",
      "name": "Kalkulačka dat",
      "desc": "Spočítejte dny mezi dvěma daty, pracovní dny a den v týdnu — užitečné pro smlouvy a termíny.",
      "steps": [
        "Vyberte počáteční a koncové datum.",
        "Zobrazte rozdíl ve dnech a týdnech.",
        "Volitelně počítejte pouze pracovní dny."
      ],
      "faq": [
        {
          "q": "Jsou vyloučeny státní svátky?",
          "a": "Ve výchozím nastavení vylučujeme soboty a neděle. Svátky závisí na zemi."
        }
      ]
    },
    "strefy-czasowe": {
      "cat": "time",
      "name": "Rozdíl časových pásem",
      "desc": "Porovnejte místní časy ve městech, uvidíte rozdíl hodin a najdete místa na jednoduché mapě.",
      "steps": [
        "Vyberte zdrojové a cílové město.",
        "Porovnejte aktuální místní časy.",
        "Zobrazte posun a značky na mapě."
      ],
      "faq": [
        {
          "q": "Zohledňujete letní čas?",
          "a": "Ano — používáme zóny IANA (např. Europe/Warsaw), které automaticky aplikují DST."
        }
      ]
    },
    "przelicznik-jednostek": {
      "cat": "units",
      "name": "Převodník jednotek",
      "desc": "Převádějte délku, hmotnost, teplotu a objem: cm↔palce, kg↔lb, °C↔°F a další.",
      "steps": [
        "Vyberte kategorii jednotek.",
        "Zadejte hodnotu a jednotky.",
        "Získejte výsledek okamžitě."
      ],
      "faq": [
        {
          "q": "Jsou převody přesné?",
          "a": "Ano — standardní SI koeficienty. Teplota používá vlastní vzorce, ne jednoduché násobení."
        }
      ]
    },
    "kalkulator-vat": {
      "cat": "finance",
      "name": "Kalkulačka DPH a procent",
      "desc": "Přidejte nebo odečtěte DPH (23 %, 8 %, 5 %), spočítejte netto/brutto a jednoduchá procenta z částky.",
      "steps": [
        "Zadejte částku netto nebo brutto.",
        "Vyberte sazbu DPH nebo vlastní procento.",
        "Zobrazte rozpis netto, DPH a brutto."
      ],
      "faq": [
        {
          "q": "Jaké sazby DPH jsou v Polsku?",
          "a": "Standardní 23 %, snížené 8 % a 5 %. Můžete také zadat vlastní sazbu."
        }
      ]
    },
    "kalkulator-wieku": {
      "cat": "time",
      "name": "Kalkulačka věku a odpočtu",
      "desc": "Spočítejte přesný věk v letech, měsících a dnech — nebo kolik dní zbývá do data.",
      "steps": [
        "Zadejte datum narození nebo cílové datum.",
        "Zobrazte věk nebo odpočet.",
        "Zkontrolujte také příští narozeniny."
      ],
      "faq": [
        {
          "q": "Jak se počítá věk?",
          "a": "Od data narození do dneška, včetně let, měsíců a dnů — ne jen kalendářní roky."
        }
      ]
    },
    "generator-hasel": {
      "cat": "dev",
      "name": "Generátor hesel",
      "desc": "Vygenerujte silné heslo lokálně v prohlížeči. Nastavte délku a sady znaků — nic se neodesílá na server.",
      "steps": [
        "Nastavte délku a možnosti znaků.",
        "Klikněte na Generovat.",
        "Zkopírujte jedním kliknutím."
      ],
      "faq": [
        {
          "q": "Je heslo nahráváno?",
          "a": "Ne — generování probíhá zcela ve vašem prohlížeči."
        }
      ]
    },
    "licznik-znakow": {
      "cat": "text",
      "name": "Počítadlo znaků a slov",
      "desc": "Počítejte znaky, slova, věty a odstavce — praktické pro SEO, sociální sítě a limity formulářů.",
      "steps": [
        "Vložte nebo napište text.",
        "Sledujte statistiky v reálném čase.",
        "Zkontrolujte délku bez mezer."
      ],
      "faq": [
        {
          "q": "Jak se počítají slova?",
          "a": "Slova jsou sekvence oddělené mezerou nebo novým řádkem."
        }
      ]
    },
    "generator-qr": {
      "cat": "dev",
      "name": "Generátor QR kódů",
      "desc": "Vytvořte QR kód z odkazu nebo textu a stáhněte jako PNG. Běží lokálně v prohlížeči.",
      "steps": [
        "Zadejte text nebo URL.",
        "Vygenerujte náhled QR.",
        "Stáhněte PNG obrázek."
      ],
      "faq": [
        {
          "q": "Je obsah QR nahráván?",
          "a": "Ne — kód se vytváří lokálně. Obsah neukládáme."
        }
      ]
    },
    "kalkulator-bitrate": {
      "cat": "media",
      "name": "Kalkulačka velikosti souboru a bitrate",
      "desc": "Odhadněte velikost audio/video souboru při daném bitrate a délce — nebo bitrate, který se vejde do limitu MB.",
      "steps": [
        "Zvolte velikost z bitrate nebo bitrate z limitu.",
        "Zadejte délku a hodnoty.",
        "Přečtěte výsledek v MB / kbps."
      ],
      "faq": [
        {
          "q": "Zahrnuje to kontejner?",
          "a": "Odhaduje surový stream. Kontejnery a extra stopy obvykle přidají několik procent."
        }
      ]
    },
    "konwerter-kolorow": {
      "cat": "dev",
      "name": "Převodník barev HEX RGB HSL",
      "desc": "Převádějte barvy mezi HEX, RGB a HSL a kontrolujte kontrast WCAG vůči pozadí.",
      "steps": [
        "Zadejte barvu v libovolném formátu.",
        "Zobrazte ekvivalenty HEX/RGB/HSL.",
        "Zkontrolujte kontrast vůči pozadí."
      ],
      "faq": [
        {
          "q": "Co znamená AA / AAA?",
          "a": "Úrovně přístupnosti WCAG pro kontrast textu vůči pozadí."
        }
      ]
    },
    "base64": {
      "cat": "dev",
      "name": "Base64 kódování / dekódování",
      "desc": "Zakódujte text do Base64 nebo dekódujte Base64. Lokálně, bez nahrávání dat.",
      "steps": [
        "Vložte text nebo Base64.",
        "Zvolte Kódovat nebo Dekódovat.",
        "Zkopírujte výsledek."
      ],
      "faq": [
        {
          "q": "Podporuje UTF-8?",
          "a": "Ano — podporovány jsou znaky Unicode."
        }
      ]
    },
    "unix-timestamp": {
      "cat": "dev",
      "name": "Unix timestamp ↔ datum",
      "desc": "Převádějte Unix timestamp (sekundy/ms) na datum a zpět. Užitečné pro logy a API.",
      "steps": [
        "Vložte timestamp nebo vyberte datum.",
        "Zobrazte ISO a místní výsledky.",
        "Zkopírujte hodnotu."
      ],
      "faq": [
        {
          "q": "Sekundy nebo milisekundy?",
          "a": "Automaticky rozpoznáme podle délky. Můžete také vynutit jednotku."
        }
      ]
    },
    "generator-uuid": {
      "cat": "dev",
      "name": "Generátor UUID",
      "desc": "Vygenerujte UUID v4 (náhodné) jedním kliknutím. Vytvořte jich více najednou.",
      "steps": [
        "Nastavte počet UUID.",
        "Klikněte na Generovat.",
        "Zkopírujte seznam."
      ],
      "faq": [
        {
          "q": "Která verze UUID?",
          "a": "UUID v4 — náhodné, RFC 4122, generované v prohlížeči."
        }
      ]
    },
    "generator-hash": {
      "cat": "dev",
      "name": "Hash SHA / MD5",
      "desc": "Spočítejte SHA-1, SHA-256, SHA-512 nebo MD5 textu. Lokálně přes Web Crypto.",
      "steps": [
        "Vložte text.",
        "Vyberte algoritmus.",
        "Zkopírujte hex hash."
      ],
      "faq": [
        {
          "q": "Je MD5 bezpečné?",
          "a": "MD5 není pro hesla. Pro bezpečnost používejte SHA-256+; MD5 jen pro kontrolní součty."
        }
      ]
    },
    "json-formatter": {
      "cat": "dev",
      "name": "Formátovač JSON",
      "desc": "Formátujte a minifikujte JSON v prohlížeči — bez nahrání na server.",
      "steps": [
        "Vložte JSON.",
        "Klikněte Formátovat nebo Minifikovat.",
        "Zkopírujte výsledek."
      ],
      "faq": [
        {
          "q": "Jsou data nahrávána?",
          "a": "Ne — zpracování probíhá lokálně ve vašem prohlížeči."
        }
      ]
    },
    "diff-tekstu": {
      "cat": "text",
      "name": "Diff textu",
      "desc": "Porovnejte dva textové úryvky řádek po řádku a zvýrazněte rozdíly.",
      "steps": [
        "Vložte text A a B.",
        "Projděte zvýrazněné rozdíly."
      ],
      "faq": [
        {
          "q": "Je to úplný diff?",
          "a": "Jde o porovnání řádek po řádku — ideální pro krátké úryvky a seznamy."
        }
      ]
    },
    "konwerter-wielkosci-liter": {
      "cat": "text",
      "name": "Převodník velikosti písmen",
      "desc": "Převeďte text na velká, malá písmena, Title Case nebo sentence case.",
      "steps": [
        "Vložte text.",
        "Vyberte režim.",
        "Zkopírujte výsledek."
      ],
      "faq": []
    },
    "usun-duplikaty-linii": {
      "cat": "text",
      "name": "Odstranit duplicitní řádky",
      "desc": "Odstraňte opakující se řádky ze seznamů e-mailů, SKU nebo tagů.",
      "steps": [
        "Vložte seznam.",
        "Nastavte možnosti.",
        "Zkopírujte vyčištěný seznam."
      ],
      "faq": []
    },
    "dekoder-jwt": {
      "cat": "dev",
      "name": "Dekodér JWT",
      "desc": "Přečtěte hlavičku a payload JWT bez ověření podpisu.",
      "steps": [
        "Vložte token.",
        "Prohlédněte header a payload."
      ],
      "faq": [
        {
          "q": "Ověřuje podpis?",
          "a": "Ne — pouze dekóduje Base64URL tokenu."
        }
      ]
    },
    "walidator-nip-pesel": {
      "cat": "dev",
      "name": "Validátor NIP / PESEL / REGON",
      "desc": "Ověřte polská daňová a identifikační čísla podle pravidel kontrolního součtu.",
      "steps": [
        "Zadejte číslo.",
        "Zobrazte výsledek validace."
      ],
      "faq": [
        {
          "q": "Dotazuje se registru GUS?",
          "a": "Ne — pouze kontrolní součet a délka."
        }
      ]
    },
    "kalkulator-kredytu": {
      "cat": "finance",
      "name": "Kalkulačka úvěru",
      "desc": "Spočítejte anuitní splátku, celkovou splátku a náklady na úroky.",
      "steps": [
        "Zadejte částku, úrok a dobu.",
        "Přečtěte měsíční splátku."
      ],
      "faq": [
        {
          "q": "Zahrnuje bankovní poplatky?",
          "a": "Jde o zjednodušenou simulaci bez poplatků a pojištění."
        }
      ]
    },
    "markdown-preview": {
      "cat": "text",
      "name": "Náhled Markdown",
      "desc": "Pište Markdown a sledujte živý HTML náhled v prohlížeči.",
      "steps": [
        "Pište Markdown.",
        "Náhled se aktualizuje automaticky."
      ],
      "faq": []
    },
    "sila-hasla": {
      "cat": "dev",
      "name": "Síla hesla",
      "desc": "Ohodnoťte sílu hesla podle délky, rozmanitosti znaků a běžných vzorů.",
      "steps": [
        "Zadejte heslo.",
        "Zobrazte skóre a tipy."
      ],
      "faq": [
        {
          "q": "Je heslo nahráváno?",
          "a": "Ne — hodnocení probíhá lokálně ve vašem prohlížeči."
        }
      ]
    },
    "konwerter-napisow": {
      "cat": "media",
      "name": "Převodník titulků SRT / VTT",
      "desc": "Převádějte titulky mezi formáty SRT a WebVTT.",
      "steps": [
        "Vložte titulky.",
        "Vyberte směr nebo auto.",
        "Zkopírujte výsledek."
      ],
      "faq": []
    },
    "generator-nazw-plikow": {
      "cat": "text",
      "name": "Hromadné přejmenování souborů",
      "desc": "Hromadně přejmenujte soubory podle vzoru {name}, {ext}, {index}.",
      "steps": [
        "Vložte seznam souborů.",
        "Nastavte vzor.",
        "Zkopírujte nové názvy."
      ],
      "faq": []
    },
    "walidator-iban": {
      "cat": "dev",
      "name": "Validátor IBAN",
      "desc": "Ověřte kontrolní součet IBAN (mod 97) a délku specifickou pro zemi.",
      "steps": [
        "Vložte IBAN.",
        "Zobrazte formátovaný výstup a validaci."
      ],
      "faq": [
        {
          "q": "Ověřuje bankovní účet?",
          "a": "Ne — pouze formát a kontrolní součet."
        }
      ]
    },
    "kalkulator-b2b": {
      "cat": "finance",
      "name": "Kalkulačka B2B vs zaměstnání",
      "desc": "Porovnejte čistou mzdu ze zaměstnání s příjmem z faktury B2B (paušální nebo lineární daň).",
      "steps": [
        "Zadejte hrubou mzdu a příjem B2B.",
        "Vyberte daňovou formu.",
        "Porovnejte výsledky."
      ],
      "faq": [
        {
          "q": "Je to daňové poradenství?",
          "a": "Ne — zjednodušená simulace k diskusi s účetním."
        }
      ]
    }
  },
  "ro": {
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
  },
  "hu": {
    "przelicznik-walut": {
      "cat": "finance",
      "name": "Valutaátváltó",
      "desc": "Váltson valutát online az ECB aktuális referenciaárfolyamai szerint. PLN, EUR, USD és tucatnyi más pár — regisztráció nélkül.",
      "steps": [
        "Adjon meg összeget és forrásvalutát.",
        "Válassza ki a célvalutát.",
        "Olvassa le az eredményt és a napi árfolyamot."
      ],
      "faq": [
        {
          "q": "Honnan származnak az árfolyamok?",
          "a": "Az Európai Központi Bank referenciaárfolyamai a Frankfurter API-n keresztül, munkanapokon frissítve."
        },
        {
          "q": "Valós idejűek az árfolyamok?",
          "a": "Ezek ECB referenciaárfolyamok, nem banki vagy pénzváltói árfolyamok."
        }
      ]
    },
    "kalkulator-dat": {
      "cat": "time",
      "name": "Dátumkalkulátor",
      "desc": "Számítsa ki két dátum közötti napokat, munkanapokat és a hét napját — hasznos szerződésekhez és határidőkhöz.",
      "steps": [
        "Válassza ki a kezdő és záró dátumot.",
        "Tekintse meg a különbséget napokban és hetekben.",
        "Opcionálisan csak munkanapokat számol."
      ],
      "faq": [
        {
          "q": "Kizáródnak az ünnepnapok?",
          "a": "Alapértelmezetten kizárjuk a szombatot és vasárnapot. Az ünnepnapok országonként eltérnek."
        }
      ]
    },
    "strefy-czasowe": {
      "cat": "time",
      "name": "Időzóna-különbség",
      "desc": "Hasonlítsa össze a helyi időket városok között, lássa az órák különbségét és találja meg a helyeket egy egyszerű térképen.",
      "steps": [
        "Válassza ki a forrás- és célvárost.",
        "Hasonlítsa össze az aktuális helyi időket.",
        "Tekintse meg az eltolást és a térkép jelölőit."
      ],
      "faq": [
        {
          "q": "Figyelembe veszik a nyári időszámítást?",
          "a": "Igen — IANA zónákat használunk (pl. Europe/Warsaw), amelyek automatikusan alkalmazzák a DST-t."
        }
      ]
    },
    "przelicznik-jednostek": {
      "cat": "units",
      "name": "Mértékegység-átváltó",
      "desc": "Váltson hosszúságot, tömeget, hőmérsékletet és térfogatot: cm↔hüvelyk, kg↔lb, °C↔°F és egyebek.",
      "steps": [
        "Válasszon mértékegység-kategóriát.",
        "Adjon meg értéket és egységeket.",
        "Azonnal megkapja az eredményt."
      ],
      "faq": [
        {
          "q": "Pontosak az átváltások?",
          "a": "Igen — standard SI tényezők. A hőmérséklet külön képleteket használ, nem egyszerű szorzást."
        }
      ]
    },
    "kalkulator-vat": {
      "cat": "finance",
      "name": "ÁFA- és százalékkalkulátor",
      "desc": "Adjon hozzá vagy vonjon le ÁFÁ-t (23%, 8%, 5%), számítson nettó/bruttót és egyszerű százalékokat.",
      "steps": [
        "Adjon meg nettó vagy bruttó összeget.",
        "Válasszon ÁFA-kulcsot vagy egyedi százalékot.",
        "Tekintse meg a nettó, ÁFA és bruttó bontást."
      ],
      "faq": [
        {
          "q": "Milyen ÁFA-kulcsok vannak Lengyelországban?",
          "a": "Normál 23%, csökkentett 8% és 5%. Egyedi kulcsot is megadhat."
        }
      ]
    },
    "kalkulator-wieku": {
      "cat": "time",
      "name": "Korkalkulátor és visszaszámláló",
      "desc": "Számítsa ki a pontos kort években, hónapokban és napokban — vagy hány nap van hátra egy dátumig.",
      "steps": [
        "Adja meg a születési vagy céldátumot.",
        "Tekintse meg a kort vagy a visszaszámlálást.",
        "Ellenőrizze a következő születésnapot is."
      ],
      "faq": [
        {
          "q": "Hogyan számítják a kort?",
          "a": "A születési dátumtól a mai napig, évekkel, hónapokkal és napokkal — nem csak naptári évekkel."
        }
      ]
    },
    "generator-hasel": {
      "cat": "dev",
      "name": "Jelszógenerátor",
      "desc": "Erős jelszó generálása helyileg a böngészőben. Állítsa be a hosszt és karakterkészleteket — semmi nem kerül a szerverre.",
      "steps": [
        "Állítsa be a hosszt és karakterbeállításokat.",
        "Kattintson a Generálás gombra.",
        "Másolás egy kattintással."
      ],
      "faq": [
        {
          "q": "Feltöltődik a jelszó?",
          "a": "Nem — a generálás teljes egészében a böngészőben történik."
        }
      ]
    },
    "licznik-znakow": {
      "cat": "text",
      "name": "Karakter- és szószámláló",
      "desc": "Számoljon karaktereket, szavakat, mondatokat és bekezdéseket — hasznos SEO-hoz, közösségi médiához és űrlapkorlátokhoz.",
      "steps": [
        "Illessze be vagy írjon szöveget.",
        "Nézze az élő statisztikákat.",
        "Ellenőrizze a hosszt szóközök nélkül."
      ],
      "faq": [
        {
          "q": "Hogyan számolják a szavakat?",
          "a": "A szavak szóközzel vagy sortöréssel elválasztott sorozatok."
        }
      ]
    },
    "generator-qr": {
      "cat": "dev",
      "name": "QR-kód generátor",
      "desc": "QR-kód készítése linkből vagy szövegből és letöltés PNG-ként. Helyileg fut a böngészőben.",
      "steps": [
        "Adjon meg szöveget vagy URL-t.",
        "Generálja a QR előnézetet.",
        "Töltse le PNG-ként."
      ],
      "faq": [
        {
          "q": "Feltöltődik a QR tartalom?",
          "a": "Nem — a kód helyileg készül. Nem tároljuk a tartalmat."
        }
      ]
    },
    "kalkulator-bitrate": {
      "cat": "media",
      "name": "Fájlméret- és bitsebesség-kalkulátor",
      "desc": "Becsülje meg egy audio/video fájl méretét adott bitsebesség és időtartam mellett — vagy a bitsebességet MB-korláton belül.",
      "steps": [
        "Válasszon méretet bitsebességből vagy bitsebességet korlátból.",
        "Adja meg az időtartamot és értékeket.",
        "Olvassa le az eredményt MB / kbps-ben."
      ],
      "faq": [
        {
          "q": "Tartalmazza a konténert?",
          "a": "A nyers streamet becsüli. A konténerek és extra sávok általában néhány százalékot adnak hozzá."
        }
      ]
    },
    "konwerter-kolorow": {
      "cat": "dev",
      "name": "HEX RGB HSL színkonverter",
      "desc": "Színek konvertálása HEX, RGB és HSL között, WCAG kontraszt ellenőrzése háttérhez képest.",
      "steps": [
        "Adjon meg színt bármilyen formátumban.",
        "Tekintse meg a HEX/RGB/HSL megfelelőket.",
        "Ellenőrizze a kontrasztot a háttérhez képest."
      ],
      "faq": [
        {
          "q": "Mit jelent az AA / AAA?",
          "a": "WCAG akadálymentességi szintek a szöveg kontrasztjához a háttérhez képest."
        }
      ]
    },
    "base64": {
      "cat": "dev",
      "name": "Base64 kódolás / dekódolás",
      "desc": "Szöveg kódolása Base64-be vagy Base64 dekódolása. Helyileg, adatfeltöltés nélkül.",
      "steps": [
        "Illessze be a szöveget vagy Base64-et.",
        "Válasszon Kódolás vagy Dekódolás.",
        "Másolja az eredményt."
      ],
      "faq": [
        {
          "q": "Támogatja az UTF-8-at?",
          "a": "Igen — Unicode karakterek támogatottak."
        }
      ]
    },
    "unix-timestamp": {
      "cat": "dev",
      "name": "Unix időbélyeg ↔ dátum",
      "desc": "Unix időbélyeg (mp/ms) konvertálása dátumra és vissza. Hasznos naplókhoz és API-khoz.",
      "steps": [
        "Illessze be az időbélyeget vagy válasszon dátumot.",
        "Tekintse meg az ISO és helyi eredményeket.",
        "Másolja az értéket."
      ],
      "faq": [
        {
          "q": "Másodperc vagy milliszekundum?",
          "a": "Automatikusan felismerjük a hossz alapján. Kényszerítheti az egységet is."
        }
      ]
    },
    "generator-uuid": {
      "cat": "dev",
      "name": "UUID generátor",
      "desc": "UUID v4 (véletlen) generálása egy kattintással. Többet is készíthet egyszerre.",
      "steps": [
        "Állítsa be az UUID-k számát.",
        "Kattintson a Generálás gombra.",
        "Másolja a listát."
      ],
      "faq": [
        {
          "q": "Melyik UUID verzió?",
          "a": "UUID v4 — véletlen, RFC 4122, a böngészőben generálva."
        }
      ]
    },
    "generator-hash": {
      "cat": "dev",
      "name": "SHA / MD5 hash",
      "desc": "SHA-1, SHA-256, SHA-512 vagy MD5 számítása szövegből. Helyileg Web Crypto-val.",
      "steps": [
        "Illessze be a szöveget.",
        "Válasszon algoritmust.",
        "Másolja a hex hash-t."
      ],
      "faq": [
        {
          "q": "Biztonságos az MD5?",
          "a": "Az MD5 nem jelszavakhoz való. Biztonsághoz SHA-256+; MD5 csak ellenőrzőösszegekhez."
        }
      ]
    },
    "json-formatter": {
      "cat": "dev",
      "name": "JSON formázó",
      "desc": "JSON formázása és minifikálása a böngészőben — szerverfeltöltés nélkül.",
      "steps": [
        "Illessze be a JSON-t.",
        "Kattintson Formázás vagy Minifikálás.",
        "Másolja az eredményt."
      ],
      "faq": [
        {
          "q": "Feltöltődnek az adatok?",
          "a": "Nem — a feldolgozás helyileg történik a böngészőben."
        }
      ]
    },
    "diff-tekstu": {
      "cat": "text",
      "name": "Szöveg diff",
      "desc": "Két szövegrészlet összehasonlítása soronként, különbségek kiemelése.",
      "steps": [
        "Illessze be az A és B szöveget.",
        "Tekintse át a kiemelt különbségeket."
      ],
      "faq": [
        {
          "q": "Ez teljes diff?",
          "a": "Soronkénti összehasonlítás — ideális rövid részletekhez és listákhoz."
        }
      ]
    },
    "konwerter-wielkosci-liter": {
      "cat": "text",
      "name": "Kis- és nagybetű konverter",
      "desc": "Szöveg konvertálása nagybetűs, kisbetűs, Title Case vagy sentence case formátumra.",
      "steps": [
        "Illessze be a szöveget.",
        "Válasszon módot.",
        "Másolja az eredményt."
      ],
      "faq": []
    },
    "usun-duplikaty-linii": {
      "cat": "text",
      "name": "Duplikált sorok eltávolítása",
      "desc": "Ismétlődő sorok eltávolítása e-mail listákból, SKU-kból vagy címkékből.",
      "steps": [
        "Illessze be a listát.",
        "Állítsa be az opciókat.",
        "Másolja a tisztított listát."
      ],
      "faq": []
    },
    "dekoder-jwt": {
      "cat": "dev",
      "name": "JWT dekóder",
      "desc": "JWT fejléc és payload olvasása aláírás ellenőrzése nélkül.",
      "steps": [
        "Illessze be a tokent.",
        "Ellenőrizze a fejlécet és payloadot."
      ],
      "faq": [
        {
          "q": "Ellenőrzi az aláírást?",
          "a": "Nem — csak a token Base64URL dekódolása."
        }
      ]
    },
    "walidator-nip-pesel": {
      "cat": "dev",
      "name": "NIP / PESEL / REGON validátor",
      "desc": "Lengyel adó- és azonosítószámok ellenőrzése ellenőrzőösszeg szabályok szerint.",
      "steps": [
        "Adjon meg számot.",
        "Tekintse meg az ellenőrzés eredményét."
      ],
      "faq": [
        {
          "q": "Lekérdezi a GUS nyilvántartást?",
          "a": "Nem — csak ellenőrzőösszeg és hossz."
        }
      ]
    },
    "kalkulator-kredytu": {
      "cat": "finance",
      "name": "Hitelkalkulátor",
      "desc": "Anuitás, teljes visszafizetés és kamatköltség számítása.",
      "steps": [
        "Adja meg az összeget, kamatot és futamidőt.",
        "Olvassa le a havi törlesztést."
      ],
      "faq": [
        {
          "q": "Tartalmaz banki díjakat?",
          "a": "Egyszerűsített szimuláció díjak és biztosítások nélkül."
        }
      ]
    },
    "markdown-preview": {
      "cat": "text",
      "name": "Markdown előnézet",
      "desc": "Markdown írása és élő HTML előnézet a böngészőben.",
      "steps": [
        "Írjon Markdown-t.",
        "Az előnézet automatikusan frissül."
      ],
      "faq": []
    },
    "sila-hasla": {
      "cat": "dev",
      "name": "Jelszóerősség",
      "desc": "Jelszóerősség értékelése hossz, karakterválaszték és gyakori minták alapján.",
      "steps": [
        "Adjon meg jelszót.",
        "Tekintse meg a pontszámot és tippeket."
      ],
      "faq": [
        {
          "q": "Feltöltődik a jelszó?",
          "a": "Nem — az értékelés helyileg történik a böngészőben."
        }
      ]
    },
    "konwerter-napisow": {
      "cat": "media",
      "name": "SRT / VTT feliratkonverter",
      "desc": "Feliratok konvertálása SRT és WebVTT formátumok között.",
      "steps": [
        "Illessze be a feliratokat.",
        "Válasszon irányt vagy auto.",
        "Másolja az eredményt."
      ],
      "faq": []
    },
    "generator-nazw-plikow": {
      "cat": "text",
      "name": "Tömeges fájlátnevező",
      "desc": "Fájlok tömeges átnevezése {name}, {ext}, {index} mintával.",
      "steps": [
        "Illessze be a fájllistát.",
        "Állítson be mintát.",
        "Másolja az új neveket."
      ],
      "faq": []
    },
    "walidator-iban": {
      "cat": "dev",
      "name": "IBAN validátor",
      "desc": "IBAN ellenőrzőösszeg (mod 97) és országspecifikus hossz ellenőrzése.",
      "steps": [
        "Illessze be az IBAN-t.",
        "Tekintse meg a formázott kimenetet és validációt."
      ],
      "faq": [
        {
          "q": "Ellenőrzi a bankszámlát?",
          "a": "Nem — csak formátum és ellenőrzőösszeg."
        }
      ]
    },
    "kalkulator-b2b": {
      "cat": "finance",
      "name": "B2B vs alkalmazotti kalkulátor",
      "desc": "Nettó alkalmazotti fizetés összehasonlítása B2B számlabevétellel (átalány vagy lineáris adó).",
      "steps": [
        "Adja meg a bruttó fizetést és B2B bevételt.",
        "Válasszon adóformát.",
        "Hasonlítsa össze az eredményeket."
      ],
      "faq": [
        {
          "q": "Ez adótanácsadás?",
          "a": "Nem — egyszerűsített szimuláció könyvelővel való megbeszéléshez."
        }
      ]
    }
  },
  "el": {
    "przelicznik-walut": {
      "cat": "finance",
      "name": "Μετατροπέας νομισμάτων",
      "desc": "Μετατρέψτε νομίσματα online με τρέχουσες τιμές αναφοράς της ECB. PLN, EUR, USD και δεκάδες άλλα ζεύγη — χωρίς εγγραφή.",
      "steps": [
        "Εισαγάγετε ποσό και νόμισμα προέλευσης.",
        "Επιλέξτε νόμισμα προορισμού.",
        "Δείτε το αποτέλεσμα και την ημερήσια ισοτιμία."
      ],
      "faq": [
        {
          "q": "Από πού προέρχονται οι ισοτιμίες;",
          "a": "Τιμές αναφοράς της Ευρωπαϊκής Κεντρικής Τράπεζας μέσω Frankfurter API, ενημερωμένες τις εργάσιμες ημέρες."
        },
        {
          "q": "Είναι οι ισοτιμίες σε πραγματικό χρόνο;",
          "a": "Πρόκειται για τιμές αναφοράς ECB, όχι τραπεζικές ή συναλλακτηριακές ισοτιμίες."
        }
      ]
    },
    "kalkulator-dat": {
      "cat": "time",
      "name": "Υπολογιστής ημερομηνιών",
      "desc": "Υπολογίστε ημέρες μεταξύ δύο ημερομηνιών, εργάσιμες ημέρες και ημέρα εβδομάδας — χρήσιμο για συμβόλαια και προθεσμίες.",
      "steps": [
        "Επιλέξτε ημερομηνίες έναρξης και λήξης.",
        "Δείτε τη διαφορά σε ημέρες και εβδομάδες.",
        "Προαιρετικά μετρήστε μόνο εργάσιμες ημέρες."
      ],
      "faq": [
        {
          "q": "Εξαιρούνται οι αργίες;",
          "a": "Από προεπιλογή εξαιρούμε Σάββατο και Κυριακή. Οι αργίες εξαρτώνται από τη χώρα."
        }
      ]
    },
    "strefy-czasowe": {
      "cat": "time",
      "name": "Διαφορά ζωνών ώρας",
      "desc": "Συγκρίνετε τοπικές ώρες μεταξύ πόλεων, δείτε τη διαφορά ωρών και εντοπίστε τοποθεσίες σε απλό χάρτη.",
      "steps": [
        "Επιλέξτε πόλεις προέλευσης και προορισμού.",
        "Συγκρίνετε τρέχουσες τοπικές ώρες.",
        "Δείτε τη μετατόπιση και δείκτες στον χάρτη."
      ],
      "faq": [
        {
          "q": "Λαμβάνεται υπόψη η θερινή ώρα;",
          "a": "Ναι — χρησιμοποιούμε ζώνες IANA (π.χ. Europe/Warsaw) που εφαρμόζουν αυτόματα DST."
        }
      ]
    },
    "przelicznik-jednostek": {
      "cat": "units",
      "name": "Μετατροπέας μονάδων",
      "desc": "Μετατρέψτε μήκος, μάζα, θερμοκρασία και όγκο: cm↔ίν., kg↔lb, °C↔°F και άλλα.",
      "steps": [
        "Επιλέξτε κατηγορία μονάδων.",
        "Εισαγάγετε τιμή και μονάδες.",
        "Λάβετε το αποτέλεσμα αμέσως."
      ],
      "faq": [
        {
          "q": "Είναι ακριβείς οι μετατροπές;",
          "a": "Ναι — τυπικοί συντελεστές SI. Η θερμοκρασία χρησιμοποιεί ειδικούς τύπους, όχι απλό πολλαπλασιασμό."
        }
      ]
    },
    "kalkulator-vat": {
      "cat": "finance",
      "name": "Υπολογιστής ΦΠΑ και ποσοστών",
      "desc": "Προσθέστε ή αφαιρέστε ΦΠΑ (23%, 8%, 5%), υπολογίστε καθαρό/μικτό και απλά ποσοστά ποσού.",
      "steps": [
        "Εισαγάγετε καθαρό ή μικτό ποσό.",
        "Επιλέξτε συντελεστή ΦΠΑ ή προσαρμοσμένο ποσοστό.",
        "Δείτε ανάλυση καθαρού, ΦΠΑ και μικτού."
      ],
      "faq": [
        {
          "q": "Ποιοι συντελεστές ΦΠΑ ισχύουν στην Πολωνία;",
          "a": "Κανονικός 23%, μειωμένοι 8% και 5%. Μπορείτε επίσης να ορίσετε δικό σας συντελεστή."
        }
      ]
    },
    "kalkulator-wieku": {
      "cat": "time",
      "name": "Υπολογιστής ηλικίας και αντίστροφης μέτρησης",
      "desc": "Υπολογίστε ακριβή ηλικία σε χρόνια, μήνες και ημέρες — ή πόσες ημέρες απομένουν μέχρι μια ημερομηνία.",
      "steps": [
        "Εισαγάγετε ημερομηνία γέννησης ή στόχο.",
        "Δείτε ηλικία ή αντίστροφη μέτρηση.",
        "Ελέγξτε και το επόμενο γενέθλιο."
      ],
      "faq": [
        {
          "q": "Πώς υπολογίζεται η ηλικία;",
          "a": "Από την ημερομηνία γέννησης μέχρι σήμερα, με χρόνια, μήνες και ημέρες — όχι μόνο ημερολογιακά έτη."
        }
      ]
    },
    "generator-hasel": {
      "cat": "dev",
      "name": "Γεννήτρια κωδικών πρόσβασης",
      "desc": "Δημιουργήστε ισχυρό κωδικό τοπικά στον browser. Ορίστε μήκος και σύνολα χαρακτήρων — τίποτα δεν αποστέλλεται σε server.",
      "steps": [
        "Ορίστε μήκος και επιλογές χαρακτήρων.",
        "Κάντε κλικ στη Δημιουργία.",
        "Αντιγράψτε με ένα κλικ."
      ],
      "faq": [
        {
          "q": "Ανεβαίνει ο κωδικός;",
          "a": "Όχι — η δημιουργία γίνεται εξ ολοκλήρου στον browser σας."
        }
      ]
    },
    "licznik-znakow": {
      "cat": "text",
      "name": "Μετρητής χαρακτήρων και λέξεων",
      "desc": "Μετρήστε χαρακτήρες, λέξεις, προτάσεις και παραγράφους — χρήσιμο για SEO, social media και όρια φορμών.",
      "steps": [
        "Επικολλήστε ή πληκτρολογήστε κείμενο.",
        "Παρακολουθήστε ζωντανά στατιστικά.",
        "Ελέγξτε μήκος χωρίς κενά."
      ],
      "faq": [
        {
          "q": "Πώς μετριούνται οι λέξεις;",
          "a": "Οι λέξεις είναι ακολουθίες διαχωρισμένες με κενό ή αλλαγή γραμμής."
        }
      ]
    },
    "generator-qr": {
      "cat": "dev",
      "name": "Γεννήτρια QR κωδικών",
      "desc": "Δημιουργήστε QR κωδικό από σύνδεσμο ή κείμενο και κατεβάστε ως PNG. Εκτελείται τοπικά στον browser.",
      "steps": [
        "Εισαγάγετε κείμενο ή URL.",
        "Δημιουργήστε προεπισκόπηση QR.",
        "Κατεβάστε εικόνα PNG."
      ],
      "faq": [
        {
          "q": "Ανεβαίνει το περιεχόμενο QR;",
          "a": "Όχι — ο κωδικός δημιουργείται τοπικά. Δεν αποθηκεύουμε το περιεχόμενο."
        }
      ]
    },
    "kalkulator-bitrate": {
      "cat": "media",
      "name": "Υπολογιστής μεγέθους αρχείου και bitrate",
      "desc": "Εκτιμήστε πόσο μεγάλο θα είναι αρχείο ήχου/βίντεο σε δεδομένο bitrate και διάρκεια — ή το bitrate που χωράει σε όριο MB.",
      "steps": [
        "Επιλέξτε μέγεθος από bitrate ή bitrate από όριο.",
        "Εισαγάγετε διάρκεια και τιμές.",
        "Δείτε αποτέλεσμα σε MB / kbps."
      ],
      "faq": [
        {
          "q": "Συμπεριλαμβάνει το container;",
          "a": "Εκτιμά το ακατέργαστο stream. Containers και επιπλέον tracks συνήθως προσθέτουν μερικά ποσοστά."
        }
      ]
    },
    "konwerter-kolorow": {
      "cat": "dev",
      "name": "Μετατροπέας χρωμάτων HEX RGB HSL",
      "desc": "Μετατρέψτε χρώματα μεταξύ HEX, RGB και HSL και ελέγξτε αντίθεση WCAG σε σχέση με φόντο.",
      "steps": [
        "Εισαγάγετε χρώμα σε οποιαδήποτε μορφή.",
        "Δείτε ισοδύναμα HEX/RGB/HSL.",
        "Ελέγξτε αντίθεση σε σχέση με φόντο."
      ],
      "faq": [
        {
          "q": "Τι σημαίνουν AA / AAA;",
          "a": "Επίπεδα προσβασιμότητας WCAG για αντίθεση κειμένου σε σχέση με φόντο."
        }
      ]
    },
    "base64": {
      "cat": "dev",
      "name": "Base64 κωδικοποίηση / αποκωδικοποίηση",
      "desc": "Κωδικοποιήστε κείμενο σε Base64 ή αποκωδικοποιήστε Base64. Τοπικά, χωρίς ανέβασμα δεδομένων.",
      "steps": [
        "Επικολλήστε κείμενο ή Base64.",
        "Επιλέξτε Κωδικοποίηση ή Αποκωδικοποίηση.",
        "Αντιγράψτε το αποτέλεσμα."
      ],
      "faq": [
        {
          "q": "Υποστηρίζει UTF-8;",
          "a": "Ναι — υποστηρίζονται χαρακτήρες Unicode."
        }
      ]
    },
    "unix-timestamp": {
      "cat": "dev",
      "name": "Unix timestamp ↔ ημερομηνία",
      "desc": "Μετατρέψτε Unix timestamp (δευτ./ms) σε ημερομηνία και αντίστροφα. Χρήσιμο για logs και API.",
      "steps": [
        "Επικολλήστε timestamp ή επιλέξτε ημερομηνία.",
        "Δείτε αποτελέσματα ISO και τοπικά.",
        "Αντιγράψτε την τιμή."
      ],
      "faq": [
        {
          "q": "Δευτερόλεπτα ή χιλιοστά;",
          "a": "Ανιχνεύουμε αυτόματα από το μήκος. Μπορείτε επίσης να επιβάλλετε μονάδα."
        }
      ]
    },
    "generator-uuid": {
      "cat": "dev",
      "name": "Γεννήτρια UUID",
      "desc": "Δημιουργήστε UUID v4 (τυχαίο) με ένα κλικ. Δημιουργήστε πολλά ταυτόχρονα αν χρειάζεται.",
      "steps": [
        "Ορίστε πόσα UUID.",
        "Κάντε κλικ στη Δημιουργία.",
        "Αντιγράψτε τη λίστα."
      ],
      "faq": [
        {
          "q": "Ποια έκδοση UUID;",
          "a": "UUID v4 — τυχαίο, RFC 4122, δημιουργημένο στον browser."
        }
      ]
    },
    "generator-hash": {
      "cat": "dev",
      "name": "Hash SHA / MD5",
      "desc": "Υπολογίστε SHA-1, SHA-256, SHA-512 ή MD5 κειμένου. Τοπικά μέσω Web Crypto.",
      "steps": [
        "Επικολλήστε κείμενο.",
        "Επιλέξτε αλγόριθμο.",
        "Αντιγράψτε hex hash."
      ],
      "faq": [
        {
          "q": "Είναι ασφαλές το MD5;",
          "a": "Το MD5 δεν είναι για κωδικούς. Χρησιμοποιήστε SHA-256+ για ασφάλεια· MD5 μόνο για checksums."
        }
      ]
    },
    "json-formatter": {
      "cat": "dev",
      "name": "Μορφοποιητής JSON",
      "desc": "Μορφοποιήστε και συμπυκνώστε JSON στον browser — χωρίς ανέβασμα σε server.",
      "steps": [
        "Επικολλήστε JSON.",
        "Κάντε κλικ σε Μορφοποίηση ή Συμπύκνωση.",
        "Αντιγράψτε το αποτέλεσμα."
      ],
      "faq": [
        {
          "q": "Ανεβαίνουν τα δεδομένα;",
          "a": "Όχι — η επεξεργασία γίνεται τοπικά στον browser σας."
        }
      ]
    },
    "diff-tekstu": {
      "cat": "text",
      "name": "Diff κειμένου",
      "desc": "Συγκρίνετε δύο αποσπάσματα κειμένου γραμμή προς γραμμή και επισημάνετε διαφορές.",
      "steps": [
        "Επικολλήστε κείμενο A και B.",
        "Ελέγξτε τις επισημασμένες διαφορές."
      ],
      "faq": [
        {
          "q": "Είναι πλήρες diff;",
          "a": "Είναι σύγκριση γραμμή προς γραμμή — ιδανικό για σύντομα αποσπάσματα και λίστες."
        }
      ]
    },
    "konwerter-wielkosci-liter": {
      "cat": "text",
      "name": "Μετατροπέας πεζών/κεφαλαίων",
      "desc": "Μετατρέψτε κείμενο σε κεφαλαία, πεζά, Title Case ή sentence case.",
      "steps": [
        "Επικολλήστε κείμενο.",
        "Επιλέξτε λειτουργία.",
        "Αντιγράψτε το αποτέλεσμα."
      ],
      "faq": []
    },
    "usun-duplikaty-linii": {
      "cat": "text",
      "name": "Αφαίρεση διπλότυπων γραμμών",
      "desc": "Αφαιρέστε επαναλαμβανόμενες γραμμές από λίστες email, SKU ή tags.",
      "steps": [
        "Επικολλήστε λίστα.",
        "Ορίστε επιλογές.",
        "Αντιγράψτε την καθαρισμένη λίστα."
      ],
      "faq": []
    },
    "dekoder-jwt": {
      "cat": "dev",
      "name": "Αποκωδικοποιητής JWT",
      "desc": "Διαβάστε header και payload JWT χωρίς επαλήθευση υπογραφής.",
      "steps": [
        "Επικολλήστε token.",
        "Ελέγξτε header και payload."
      ],
      "faq": [
        {
          "q": "Επαληθεύει την υπογραφή;",
          "a": "Όχι — αποκωδικοποιεί μόνο Base64URL του token."
        }
      ]
    },
    "walidator-nip-pesel": {
      "cat": "dev",
      "name": "Επικυρωτής NIP / PESEL / REGON",
      "desc": "Επικυρώστε πολωνικά φορολογικά και ταυτοποιητικά νούμερα με κανόνες checksum.",
      "steps": [
        "Εισαγάγετε αριθμό.",
        "Δείτε αποτέλεσμα επικύρωσης."
      ],
      "faq": [
        {
          "q": "Ρωτά το μητρώο GUS;",
          "a": "Όχι — μόνο checksum και μήκος."
        }
      ]
    },
    "kalkulator-kredytu": {
      "cat": "finance",
      "name": "Υπολογιστής δανείου",
      "desc": "Υπολογίστε δόσεις αναδρομικού, συνολική αποπληρωμή και κόστος τόκων.",
      "steps": [
        "Εισαγάγετε ποσό, επιτόκιο και διάρκεια.",
        "Δείτε μηνιαία δόση."
      ],
      "faq": [
        {
          "q": "Συμπεριλαμβάνει τραπεζικά τέλη;",
          "a": "Απλοποιημένη προσομοίωση χωρίς τέλη ή ασφάλιση."
        }
      ]
    },
    "markdown-preview": {
      "cat": "text",
      "name": "Προεπισκόπηση Markdown",
      "desc": "Γράψτε Markdown και δείτε ζωντανή HTML προεπισκόπηση στον browser.",
      "steps": [
        "Πληκτρολογήστε Markdown.",
        "Η προεπισκόπηση ενημερώνεται αυτόματα."
      ],
      "faq": []
    },
    "sila-hasla": {
      "cat": "dev",
      "name": "Ισχύς κωδικού πρόσβασης",
      "desc": "Αξιολογήστε ισχύ κωδικού βάσει μήκους, ποικιλίας χαρακτήρων και κοινών μοτίβων.",
      "steps": [
        "Εισαγάγετε κωδικό.",
        "Δείτε βαθμολογία και συμβουλές."
      ],
      "faq": [
        {
          "q": "Ανεβαίνει ο κωδικός;",
          "a": "Όχι — η αξιολόγηση γίνεται τοπικά στον browser σας."
        }
      ]
    },
    "konwerter-napisow": {
      "cat": "media",
      "name": "Μετατροπέας υποτίτλων SRT / VTT",
      "desc": "Μετατρέψτε υπότιτλους μεταξύ μορφών SRT και WebVTT.",
      "steps": [
        "Επικολλήστε υπότιτλους.",
        "Επιλέξτε κατεύθυνση ή auto.",
        "Αντιγράψτε το αποτέλεσμα."
      ],
      "faq": []
    },
    "generator-nazw-plikow": {
      "cat": "text",
      "name": "Μαζική μετονομασία αρχείων",
      "desc": "Μετονομάστε μαζικά αρχεία με μοτίβο {name}, {ext}, {index}.",
      "steps": [
        "Επικολλήστε λίστα αρχείων.",
        "Ορίστε μοτίβο.",
        "Αντιγράψτε νέα ονόματα."
      ],
      "faq": []
    },
    "walidator-iban": {
      "cat": "dev",
      "name": "Επικυρωτής IBAN",
      "desc": "Επικυρώστε checksum IBAN (mod 97) και μήκος ανά χώρα.",
      "steps": [
        "Επικολλήστε IBAN.",
        "Δείτε μορφοποιημένη έξοδο και επικύρωση."
      ],
      "faq": [
        {
          "q": "Επαληθεύει τραπεζικό λογαριασμό;",
          "a": "Όχι — μόνο μορφή και checksum."
        }
      ]
    },
    "kalkulator-b2b": {
      "cat": "finance",
      "name": "Υπολογιστής B2B vs εργασία",
      "desc": "Συγκρίνετε καθαρό μισθό εργασίας με εισόδημα τιμολογίου B2B (επίπεδος ή γραμμικός φόρος).",
      "steps": [
        "Εισαγάγετε μικτό μισθό και έσοδα B2B.",
        "Επιλέξτε φορολογική μορφή.",
        "Συγκρίνετε αποτελέσματα."
      ],
      "faq": [
        {
          "q": "Είναι φορολογική συμβουλή;",
          "a": "Όχι — απλοποιημένη προσομοίωση για συζήτηση με λογιστή."
        }
      ]
    }
  },
  "tr": {
    "przelicznik-walut": {
      "cat": "finance",
      "name": "Döviz çevirici",
      "desc": "Güncel ECB referans kurlarıyla online döviz çevirin. PLN, EUR, USD ve onlarca başka çift — kayıt gerekmez.",
      "steps": [
        "Tutar ve kaynak para birimini girin.",
        "Hedef para birimini seçin.",
        "Sonucu ve günlük kuru okuyun."
      ],
      "faq": [
        {
          "q": "Kurlar nereden geliyor?",
          "a": "Frankfurter API üzerinden Avrupa Merkez Bankası referans kurları, iş günlerinde güncellenir."
        },
        {
          "q": "Kurlar gerçek zamanlı mı?",
          "a": "Bunlar ECB referans kurlarıdır, banka veya döviz bürosu kurları değildir."
        }
      ]
    },
    "kalkulator-dat": {
      "cat": "time",
      "name": "Tarih hesaplayıcı",
      "desc": "İki tarih arasındaki günleri, iş günlerini ve haftanın gününü hesaplayın — sözleşmeler ve son tarihler için kullanışlı.",
      "steps": [
        "Başlangıç ve bitiş tarihlerini seçin.",
        "Gün ve hafta farkını görün.",
        "İsteğe bağlı yalnızca iş günlerini sayın."
      ],
      "faq": [
        {
          "q": "Resmi tatiller hariç mi?",
          "a": "Varsayılan olarak Cumartesi ve Pazar hariç tutulur. Tatiller ülkeye göre değişir."
        }
      ]
    },
    "strefy-czasowe": {
      "cat": "time",
      "name": "Saat dilimi farkı",
      "desc": "Şehirler arasında yerel saatleri karşılaştırın, saat farkını görün ve konumları basit bir haritada bulun.",
      "steps": [
        "Kaynak ve hedef şehirleri seçin.",
        "Güncel yerel saatleri karşılaştırın.",
        "Farkı ve harita işaretlerini görün."
      ],
      "faq": [
        {
          "q": "Yaz saati uygulaması dikkate alınıyor mu?",
          "a": "Evet — DST'yi otomatik uygulayan IANA bölgeleri (ör. Europe/Warsaw) kullanıyoruz."
        }
      ]
    },
    "przelicznik-jednostek": {
      "cat": "units",
      "name": "Birim dönüştürücü",
      "desc": "Uzunluk, kütle, sıcaklık ve hacim dönüştürün: cm↔inç, kg↔lb, °C↔°F ve daha fazlası.",
      "steps": [
        "Birim kategorisi seçin.",
        "Değer ve birimleri girin.",
        "Sonucu anında alın."
      ],
      "faq": [
        {
          "q": "Dönüşümler doğru mu?",
          "a": "Evet — standart SI katsayıları. Sıcaklık basit çarpma değil, özel formüller kullanır."
        }
      ]
    },
    "kalkulator-vat": {
      "cat": "finance",
      "name": "KDV ve yüzde hesaplayıcı",
      "desc": "KDV ekleyin veya çıkarın (23%, 8%, 5%), net/brüt hesaplayın ve basit yüzdeleri bulun.",
      "steps": [
        "Net veya brüt tutar girin.",
        "KDV oranı veya özel yüzde seçin.",
        "Net, KDV ve brüt dökümünü görün."
      ],
      "faq": [
        {
          "q": "Polonya'da hangi KDV oranları var?",
          "a": "Standart 23%, indirimli 8% ve 5%. Özel oran da girebilirsiniz."
        }
      ]
    },
    "kalkulator-wieku": {
      "cat": "time",
      "name": "Yaş ve geri sayım hesaplayıcı",
      "desc": "Tam yaşı yıl, ay ve gün olarak hesaplayın — veya bir tarihe kaç gün kaldığını bulun.",
      "steps": [
        "Doğum veya hedef tarihi girin.",
        "Yaşı veya geri sayımı görün.",
        "Bir sonraki doğum gününü de kontrol edin."
      ],
      "faq": [
        {
          "q": "Yaş nasıl hesaplanır?",
          "a": "Doğum tarihinden bugüne, yıl, ay ve gün sayarak — yalnızca takvim yılı değil."
        }
      ]
    },
    "generator-hasel": {
      "cat": "dev",
      "name": "Parola oluşturucu",
      "desc": "Tarayıcınızda yerel olarak güçlü parola oluşturun. Uzunluk ve karakter kümelerini ayarlayın — sunucuya hiçbir şey gönderilmez.",
      "steps": [
        "Uzunluk ve karakter seçeneklerini ayarlayın.",
        "Oluştur'a tıklayın.",
        "Tek tıkla kopyalayın."
      ],
      "faq": [
        {
          "q": "Parola yükleniyor mu?",
          "a": "Hayır — oluşturma tamamen tarayıcınızda gerçekleşir."
        }
      ]
    },
    "licznik-znakow": {
      "cat": "text",
      "name": "Karakter ve kelime sayacı",
      "desc": "Karakter, kelime, cümle ve paragraf sayın — SEO, sosyal medya ve form limitleri için pratik.",
      "steps": [
        "Metin yapıştırın veya yazın.",
        "Canlı istatistikleri izleyin.",
        "Boşluksuz uzunluğu kontrol edin."
      ],
      "faq": [
        {
          "q": "Kelimeler nasıl sayılır?",
          "a": "Kelimeler boşluk veya satır sonuyla ayrılmış dizilerdir."
        }
      ]
    },
    "generator-qr": {
      "cat": "dev",
      "name": "QR kod oluşturucu",
      "desc": "Bağlantı veya metinden QR kod oluşturun ve PNG olarak indirin. Tarayıcıda yerel çalışır.",
      "steps": [
        "Metin veya URL girin.",
        "QR önizlemesini oluşturun.",
        "PNG görseli indirin."
      ],
      "faq": [
        {
          "q": "QR içeriği yükleniyor mu?",
          "a": "Hayır — kod yerel oluşturulur. İçeriği saklamıyoruz."
        }
      ]
    },
    "kalkulator-bitrate": {
      "cat": "media",
      "name": "Dosya boyutu ve bitrate hesaplayıcı",
      "desc": "Verilen bitrate ve sürede ses/video dosyasının ne kadar büyük olacağını — veya MB limitine sığacak bitrate'i tahmin edin.",
      "steps": [
        "Bitrate'ten boyut veya limitten bitrate seçin.",
        "Süre ve değerleri girin.",
        "Sonucu MB / kbps olarak okuyun."
      ],
      "faq": [
        {
          "q": "Konteyner dahil mi?",
          "a": "Ham akışı tahmin eder. Konteynerler ve ek parçalar genelde birkaç yüzde ekler."
        }
      ]
    },
    "konwerter-kolorow": {
      "cat": "dev",
      "name": "HEX RGB HSL renk dönüştürücü",
      "desc": "HEX, RGB ve HSL arasında renk dönüştürün ve arka plana karşı WCAG kontrastını kontrol edin.",
      "steps": [
        "Herhangi bir formatta renk girin.",
        "HEX/RGB/HSL eşdeğerlerini görün.",
        "Arka plana karşı kontrastı kontrol edin."
      ],
      "faq": [
        {
          "q": "AA / AAA ne anlama gelir?",
          "a": "Metin kontrastı için WCAG erişilebilirlik seviyeleri."
        }
      ]
    },
    "base64": {
      "cat": "dev",
      "name": "Base64 kodlama / çözme",
      "desc": "Metni Base64'e kodlayın veya Base64'ü çözün. Yerel, veri yüklemeden.",
      "steps": [
        "Metin veya Base64 yapıştırın.",
        "Kodla veya Çöz seçin.",
        "Sonucu kopyalayın."
      ],
      "faq": [
        {
          "q": "UTF-8 destekliyor mu?",
          "a": "Evet — Unicode karakterler desteklenir."
        }
      ]
    },
    "unix-timestamp": {
      "cat": "dev",
      "name": "Unix timestamp ↔ tarih",
      "desc": "Unix timestamp'i (sn/ms) tarihe ve tersine dönüştürün. Loglar ve API'ler için kullanışlı.",
      "steps": [
        "Timestamp yapıştırın veya tarih seçin.",
        "ISO ve yerel sonuçları görün.",
        "Değeri kopyalayın."
      ],
      "faq": [
        {
          "q": "Saniye mi milisaniye mi?",
          "a": "Uzunluğa göre otomatik algılarız. Birimi zorlayabilirsiniz de."
        }
      ]
    },
    "generator-uuid": {
      "cat": "dev",
      "name": "UUID oluşturucu",
      "desc": "Tek tıkla UUID v4 (rastgele) oluşturun. Gerekirse birden fazla oluşturun.",
      "steps": [
        "Kaç UUID olduğunu ayarlayın.",
        "Oluştur'a tıklayın.",
        "Listeyi kopyalayın."
      ],
      "faq": [
        {
          "q": "Hangi UUID sürümü?",
          "a": "UUID v4 — rastgele, RFC 4122, tarayıcıda oluşturulur."
        }
      ]
    },
    "generator-hash": {
      "cat": "dev",
      "name": "SHA / MD5 hash",
      "desc": "Metnin SHA-1, SHA-256, SHA-512 veya MD5'ini hesaplayın. Web Crypto ile yerel.",
      "steps": [
        "Metin yapıştırın.",
        "Algoritma seçin.",
        "Hex hash'i kopyalayın."
      ],
      "faq": [
        {
          "q": "MD5 güvenli mi?",
          "a": "MD5 parolalar için değildir. Güvenlik için SHA-256+ kullanın; MD5 yalnızca checksum için."
        }
      ]
    },
    "json-formatter": {
      "cat": "dev",
      "name": "JSON biçimlendirici",
      "desc": "JSON'u tarayıcıda biçimlendirin ve küçültün — sunucuya yükleme yok.",
      "steps": [
        "JSON yapıştırın.",
        "Biçimlendir veya Küçült'e tıklayın.",
        "Sonucu kopyalayın."
      ],
      "faq": [
        {
          "q": "Veriler yükleniyor mu?",
          "a": "Hayır — işlem tarayıcınızda yerel gerçekleşir."
        }
      ]
    },
    "diff-tekstu": {
      "cat": "text",
      "name": "Metin diff",
      "desc": "İki metin parçasını satır satır karşılaştırın ve farkları vurgulayın.",
      "steps": [
        "A ve B metnini yapıştırın.",
        "Vurgulanan farkları inceleyin."
      ],
      "faq": [
        {
          "q": "Bu tam bir diff mi?",
          "a": "Satır satır karşılaştırmadır — kısa parçalar ve listeler için ideal."
        }
      ]
    },
    "konwerter-wielkosci-liter": {
      "cat": "text",
      "name": "Büyük/küçük harf dönüştürücü",
      "desc": "Metni büyük, küçük harf, Title Case veya sentence case'e dönüştürün.",
      "steps": [
        "Metin yapıştırın.",
        "Mod seçin.",
        "Sonucu kopyalayın."
      ],
      "faq": []
    },
    "usun-duplikaty-linii": {
      "cat": "text",
      "name": "Yinelenen satırları kaldır",
      "desc": "E-posta listeleri, SKU veya etiketlerden tekrarlayan satırları kaldırın.",
      "steps": [
        "Liste yapıştırın.",
        "Seçenekleri ayarlayın.",
        "Temizlenmiş listeyi kopyalayın."
      ],
      "faq": []
    },
    "dekoder-jwt": {
      "cat": "dev",
      "name": "JWT çözücü",
      "desc": "İmza doğrulamadan JWT başlık ve payload'unu okuyun.",
      "steps": [
        "Token yapıştırın.",
        "Başlık ve payload'u inceleyin."
      ],
      "faq": [
        {
          "q": "İmzayı doğruluyor mu?",
          "a": "Hayır — yalnızca token'ın Base64URL çözümünü yapar."
        }
      ]
    },
    "walidator-nip-pesel": {
      "cat": "dev",
      "name": "NIP / PESEL / REGON doğrulayıcı",
      "desc": "Polonya vergi ve kimlik numaralarını checksum kurallarına göre doğrulayın.",
      "steps": [
        "Numara girin.",
        "Doğrulama sonucunu görün."
      ],
      "faq": [
        {
          "q": "GUS kaydını sorguluyor mu?",
          "a": "Hayır — yalnızca checksum ve uzunluk."
        }
      ]
    },
    "kalkulator-kredytu": {
      "cat": "finance",
      "name": "Kredi hesaplayıcı",
      "desc": "Anüite taksitlerini, toplam geri ödemeyi ve faiz maliyetini hesaplayın.",
      "steps": [
        "Tutar, faiz ve vade girin.",
        "Aylık taksiti okuyun."
      ],
      "faq": [
        {
          "q": "Banka ücretleri dahil mi?",
          "a": "Ücret ve sigorta olmadan basitleştirilmiş simülasyon."
        }
      ]
    },
    "markdown-preview": {
      "cat": "text",
      "name": "Markdown önizleme",
      "desc": "Markdown yazın ve tarayıcıda canlı HTML önizlemesini görün.",
      "steps": [
        "Markdown yazın.",
        "Önizleme otomatik güncellenir."
      ],
      "faq": []
    },
    "sila-hasla": {
      "cat": "dev",
      "name": "Parola gücü",
      "desc": "Parola gücünü uzunluk, karakter çeşitliliği ve yaygın kalıplara göre puanlayın.",
      "steps": [
        "Parola girin.",
        "Puan ve ipuçlarını görün."
      ],
      "faq": [
        {
          "q": "Parola yükleniyor mu?",
          "a": "Hayır — puanlama tarayıcınızda yerel gerçekleşir."
        }
      ]
    },
    "konwerter-napisow": {
      "cat": "media",
      "name": "SRT / VTT altyazı dönüştürücü",
      "desc": "Altyazıları SRT ve WebVTT formatları arasında dönüştürün.",
      "steps": [
        "Altyazıları yapıştırın.",
        "Yön veya otomatik seçin.",
        "Sonucu kopyalayın."
      ],
      "faq": []
    },
    "generator-nazw-plikow": {
      "cat": "text",
      "name": "Toplu dosya yeniden adlandırma",
      "desc": "{name}, {ext}, {index} kalıbıyla dosyaları toplu yeniden adlandırın.",
      "steps": [
        "Dosya listesi yapıştırın.",
        "Kalıp ayarlayın.",
        "Yeni adları kopyalayın."
      ],
      "faq": []
    },
    "walidator-iban": {
      "cat": "dev",
      "name": "IBAN doğrulayıcı",
      "desc": "IBAN checksum'unu (mod 97) ve ülkeye özel uzunluğu doğrulayın.",
      "steps": [
        "IBAN yapıştırın.",
        "Biçimlendirilmiş çıktı ve doğrulamayı görün."
      ],
      "faq": [
        {
          "q": "Banka hesabını doğruluyor mu?",
          "a": "Hayır — yalnızca format ve checksum."
        }
      ]
    },
    "kalkulator-b2b": {
      "cat": "finance",
      "name": "B2B vs istihdam hesaplayıcı",
      "desc": "İstihdam net maaşını B2B fatura geliriyle karşılaştırın (sabit veya doğrusal vergi).",
      "steps": [
        "Brüt maaş ve B2B gelirini girin.",
        "Vergi formunu seçin.",
        "Sonuçları karşılaştırın."
      ],
      "faq": [
        {
          "q": "Bu vergi danışmanlığı mı?",
          "a": "Hayır — muhasebeciyle görüşmek için basitleştirilmiş simülasyon."
        }
      ]
    }
  },
  "ru": {
    "przelicznik-walut": {
      "cat": "finance",
      "name": "Конвертер валют",
      "desc": "Конвертируйте валюты онлайн по актуальным справочным курсам ECB. PLN, EUR, USD и десятки других пар — без регистрации.",
      "steps": [
        "Введите сумму и исходную валюту.",
        "Выберите целевую валюту.",
        "Посмотрите результат и дневной курс."
      ],
      "faq": [
        {
          "q": "Откуда берутся курсы?",
          "a": "Справочные курсы Европейского центрального банка через Frankfurter API, обновляются в рабочие дни."
        },
        {
          "q": "Курсы в реальном времени?",
          "a": "Это справочные курсы ECB, а не банковские или обменные."
        }
      ]
    },
    "kalkulator-dat": {
      "cat": "time",
      "name": "Калькулятор дат",
      "desc": "Считайте дни между двумя датами, рабочие дни и день недели — полезно для договоров и сроков.",
      "steps": [
        "Выберите начальную и конечную дату.",
        "Посмотрите разницу в днях и неделях.",
        "При необходимости считайте только рабочие дни."
      ],
      "faq": [
        {
          "q": "Исключаются праздники?",
          "a": "По умолчанию исключаем субботу и воскресенье. Праздники зависят от страны."
        }
      ]
    },
    "strefy-czasowe": {
      "cat": "time",
      "name": "Разница часовых поясов",
      "desc": "Сравнивайте местное время в городах, смотрите разницу в часах и находите места на простой карте.",
      "steps": [
        "Выберите исходный и целевой город.",
        "Сравните текущее местное время.",
        "Посмотрите смещение и метки на карте."
      ],
      "faq": [
        {
          "q": "Учитывается летнее время?",
          "a": "Да — используем зоны IANA (напр. Europe/Warsaw), которые автоматически применяют DST."
        }
      ]
    },
    "przelicznik-jednostek": {
      "cat": "units",
      "name": "Конвертер единиц",
      "desc": "Конвертируйте длину, массу, температуру и объём: см↔дюйм, кг↔lb, °C↔°F и др.",
      "steps": [
        "Выберите категорию единиц.",
        "Введите значение и единицы.",
        "Получите результат мгновенно."
      ],
      "faq": [
        {
          "q": "Конвертации точны?",
          "a": "Да — стандартные коэффициенты SI. Температура использует отдельные формулы, а не простое умножение."
        }
      ]
    },
    "kalkulator-vat": {
      "cat": "finance",
      "name": "Калькулятор НДС и процентов",
      "desc": "Добавляйте или вычитайте НДС (23%, 8%, 5%), считайте нетто/брутто и простые проценты от суммы.",
      "steps": [
        "Введите сумму нетто или брутто.",
        "Выберите ставку НДС или свой процент.",
        "Посмотрите разбивку нетто, НДС и брутто."
      ],
      "faq": [
        {
          "q": "Какие ставки НДС в Польше?",
          "a": "Стандартная 23%, пониженные 8% и 5%. Можно указать свою ставку."
        }
      ]
    },
    "kalkulator-wieku": {
      "cat": "time",
      "name": "Калькулятор возраста и обратного отсчёта",
      "desc": "Считайте точный возраст в годах, месяцах и днях — или сколько дней до даты.",
      "steps": [
        "Введите дату рождения или целевую дату.",
        "Посмотрите возраст или обратный отсчёт.",
        "Проверьте и следующий день рождения."
      ],
      "faq": [
        {
          "q": "Как считается возраст?",
          "a": "От даты рождения до сегодня, с годами, месяцами и днями — не только календарные годы."
        }
      ]
    },
    "generator-hasel": {
      "cat": "dev",
      "name": "Генератор паролей",
      "desc": "Создайте надёжный пароль локально в браузере. Задайте длину и наборы символов — ничего не отправляется на сервер.",
      "steps": [
        "Задайте длину и параметры символов.",
        "Нажмите Сгенерировать.",
        "Скопируйте одним кликом."
      ],
      "faq": [
        {
          "q": "Пароль загружается?",
          "a": "Нет — генерация полностью в вашем браузере."
        }
      ]
    },
    "licznik-znakow": {
      "cat": "text",
      "name": "Счётчик символов и слов",
      "desc": "Считайте символы, слова, предложения и абзацы — удобно для SEO, соцсетей и лимитов форм.",
      "steps": [
        "Вставьте или введите текст.",
        "Смотрите статистику в реальном времени.",
        "Проверьте длину без пробелов."
      ],
      "faq": [
        {
          "q": "Как считаются слова?",
          "a": "Слова — последовательности, разделённые пробелом или переводом строки."
        }
      ]
    },
    "generator-qr": {
      "cat": "dev",
      "name": "Генератор QR-кодов",
      "desc": "Создайте QR-код из ссылки или текста и скачайте как PNG. Работает локально в браузере.",
      "steps": [
        "Введите текст или URL.",
        "Сгенерируйте предпросмотр QR.",
        "Скачайте PNG-изображение."
      ],
      "faq": [
        {
          "q": "Содержимое QR загружается?",
          "a": "Нет — код создаётся локально. Мы не храним содержимое."
        }
      ]
    },
    "kalkulator-bitrate": {
      "cat": "media",
      "name": "Калькулятор размера файла и bitrate",
      "desc": "Оцените размер аудио/видео при заданном bitrate и длительности — или bitrate, который уложится в лимит MB.",
      "steps": [
        "Выберите размер из bitrate или bitrate из лимита.",
        "Введите длительность и значения.",
        "Читайте результат в MB / kbps."
      ],
      "faq": [
        {
          "q": "Включён контейнер?",
          "a": "Оценивается сырой поток. Контейнеры и доп. дорожки обычно добавляют несколько процентов."
        }
      ]
    },
    "konwerter-kolorow": {
      "cat": "dev",
      "name": "Конвертер цветов HEX RGB HSL",
      "desc": "Конвертируйте цвета между HEX, RGB и HSL и проверяйте контраст WCAG на фоне.",
      "steps": [
        "Введите цвет в любом формате.",
        "Посмотрите эквиваленты HEX/RGB/HSL.",
        "Проверьте контраст на фоне."
      ],
      "faq": [
        {
          "q": "Что означают AA / AAA?",
          "a": "Уровни доступности WCAG для контраста текста на фоне."
        }
      ]
    },
    "base64": {
      "cat": "dev",
      "name": "Base64 кодирование / декодирование",
      "desc": "Кодируйте текст в Base64 или декодируйте Base64. Локально, без загрузки данных.",
      "steps": [
        "Вставьте текст или Base64.",
        "Выберите Кодировать или Декодировать.",
        "Скопируйте результат."
      ],
      "faq": [
        {
          "q": "Поддерживает UTF-8?",
          "a": "Да — поддерживаются символы Unicode."
        }
      ]
    },
    "unix-timestamp": {
      "cat": "dev",
      "name": "Unix timestamp ↔ дата",
      "desc": "Конвертируйте Unix timestamp (сек/мс) в дату и обратно. Полезно для логов и API.",
      "steps": [
        "Вставьте timestamp или выберите дату.",
        "Посмотрите ISO и локальные результаты.",
        "Скопируйте значение."
      ],
      "faq": [
        {
          "q": "Секунды или миллисекунды?",
          "a": "Определяем автоматически по длине. Можно принудительно задать единицу."
        }
      ]
    },
    "generator-uuid": {
      "cat": "dev",
      "name": "Генератор UUID",
      "desc": "Сгенерируйте UUID v4 (случайный) одним кликом. Создайте несколько сразу при необходимости.",
      "steps": [
        "Задайте количество UUID.",
        "Нажмите Сгенерировать.",
        "Скопируйте список."
      ],
      "faq": [
        {
          "q": "Какая версия UUID?",
          "a": "UUID v4 — случайный, RFC 4122, генерируется в браузере."
        }
      ]
    },
    "generator-hash": {
      "cat": "dev",
      "name": "Hash SHA / MD5",
      "desc": "Вычислите SHA-1, SHA-256, SHA-512 или MD5 текста. Локально через Web Crypto.",
      "steps": [
        "Вставьте текст.",
        "Выберите алгоритм.",
        "Скопируйте hex hash."
      ],
      "faq": [
        {
          "q": "MD5 безопасен?",
          "a": "MD5 не для паролей. Для безопасности используйте SHA-256+; MD5 только для checksum."
        }
      ]
    },
    "json-formatter": {
      "cat": "dev",
      "name": "Форматтер JSON",
      "desc": "Форматируйте и минифицируйте JSON в браузере — без загрузки на сервер.",
      "steps": [
        "Вставьте JSON.",
        "Нажмите Форматировать или Минифицировать.",
        "Скопируйте результат."
      ],
      "faq": [
        {
          "q": "Данные загружаются?",
          "a": "Нет — обработка происходит локально в браузере."
        }
      ]
    },
    "diff-tekstu": {
      "cat": "text",
      "name": "Diff текста",
      "desc": "Сравнивайте два фрагмента текста построчно и выделяйте различия.",
      "steps": [
        "Вставьте текст A и B.",
        "Просмотрите выделенные различия."
      ],
      "faq": [
        {
          "q": "Это полный diff?",
          "a": "Построчное сравнение — отлично для коротких фрагментов и списков."
        }
      ]
    },
    "konwerter-wielkosci-liter": {
      "cat": "text",
      "name": "Конвертер регистра",
      "desc": "Преобразуйте текст в верхний, нижний регистр, Title Case или sentence case.",
      "steps": [
        "Вставьте текст.",
        "Выберите режим.",
        "Скопируйте результат."
      ],
      "faq": []
    },
    "usun-duplikaty-linii": {
      "cat": "text",
      "name": "Удалить дубликаты строк",
      "desc": "Удалите повторяющиеся строки из списков email, SKU или тегов.",
      "steps": [
        "Вставьте список.",
        "Задайте параметры.",
        "Скопируйте очищенный список."
      ],
      "faq": []
    },
    "dekoder-jwt": {
      "cat": "dev",
      "name": "Декодер JWT",
      "desc": "Прочитайте header и payload JWT без проверки подписи.",
      "steps": [
        "Вставьте token.",
        "Просмотрите header и payload."
      ],
      "faq": [
        {
          "q": "Проверяет подпись?",
          "a": "Нет — только декодирует Base64URL токена."
        }
      ]
    },
    "walidator-nip-pesel": {
      "cat": "dev",
      "name": "Валидатор NIP / PESEL / REGON",
      "desc": "Проверяйте польские налоговые и идентификационные номера по правилам checksum.",
      "steps": [
        "Введите номер.",
        "Посмотрите результат проверки."
      ],
      "faq": [
        {
          "q": "Запрашивает реестр GUS?",
          "a": "Нет — только checksum и длина."
        }
      ]
    },
    "kalkulator-kredytu": {
      "cat": "finance",
      "name": "Кредитный калькулятор",
      "desc": "Считайте аннуитетный платёж, общую сумму и стоимость процентов.",
      "steps": [
        "Введите сумму, ставку и срок.",
        "Посмотрите ежемесячный платёж."
      ],
      "faq": [
        {
          "q": "Включены банковские комиссии?",
          "a": "Упрощённая симуляция без комиссий и страховки."
        }
      ]
    },
    "markdown-preview": {
      "cat": "text",
      "name": "Предпросмотр Markdown",
      "desc": "Пишите Markdown и смотрите живой HTML-предпросмотр в браузере.",
      "steps": [
        "Введите Markdown.",
        "Предпросмотр обновляется автоматически."
      ],
      "faq": []
    },
    "sila-hasla": {
      "cat": "dev",
      "name": "Надёжность пароля",
      "desc": "Оцените надёжность пароля по длине, разнообразию символов и типичным шаблонам.",
      "steps": [
        "Введите пароль.",
        "Посмотрите оценку и советы."
      ],
      "faq": [
        {
          "q": "Пароль загружается?",
          "a": "Нет — оценка происходит локально в браузере."
        }
      ]
    },
    "konwerter-napisow": {
      "cat": "media",
      "name": "Конвертер субтитров SRT / VTT",
      "desc": "Конвертируйте субтитры между форматами SRT и WebVTT.",
      "steps": [
        "Вставьте субтитры.",
        "Выберите направление или auto.",
        "Скопируйте результат."
      ],
      "faq": []
    },
    "generator-nazw-plikow": {
      "cat": "text",
      "name": "Пакетное переименование файлов",
      "desc": "Массово переименуйте файлы по шаблону {name}, {ext}, {index}.",
      "steps": [
        "Вставьте список файлов.",
        "Задайте шаблон.",
        "Скопируйте новые имена."
      ],
      "faq": []
    },
    "walidator-iban": {
      "cat": "dev",
      "name": "Валидатор IBAN",
      "desc": "Проверяйте checksum IBAN (mod 97) и длину для страны.",
      "steps": [
        "Вставьте IBAN.",
        "Посмотрите форматированный вывод и проверку."
      ],
      "faq": [
        {
          "q": "Проверяет банковский счёт?",
          "a": "Нет — только формат и checksum."
        }
      ]
    },
    "kalkulator-b2b": {
      "cat": "finance",
      "name": "Калькулятор B2B vs найm",
      "desc": "Сравните чистую зарплату по найму с доходом от счёта B2B (фиксированный или линейный налог).",
      "steps": [
        "Введите брутто зарплату и доход B2B.",
        "Выберите налоговую форму.",
        "Сравните результаты."
      ],
      "faq": [
        {
          "q": "Это налоговая консультация?",
          "a": "Нет — упрощённая симуляция для обсуждения с бухгалтером."
        }
      ]
    }
  },
  "ar": {
    "przelicznik-walut": {
      "cat": "finance",
      "name": "محوّل العملات",
      "desc": "حوّل العملات عبر الإنترنت بأسعار مرجعية حالية من ECB. PLN وEUR وUSD وعشرات الأزواج الأخرى — دون تسجيل.",
      "steps": [
        "أدخل المبلغ وعملة المصدر.",
        "اختر عملة الهدف.",
        "اطّلع على النتيجة والسعر اليومي."
      ],
      "faq": [
        {
          "q": "من أين تأتي الأسعار؟",
          "a": "أسعار مرجعية من البنك المركزي الأوروبي عبر Frankfurter API، تُحدَّث في أيام العمل."
        },
        {
          "q": "هل الأسعار لحظية؟",
          "a": "هذه أسعار مرجعية من ECB، وليست أسعار بنوك أو صرافات."
        }
      ]
    },
    "kalkulator-dat": {
      "cat": "time",
      "name": "حاسبة التواريخ",
      "desc": "احسب الأيام بين تاريخين وأيام العمل ويوم الأسبوع — مفيد للعقود والمواعيد النهائية.",
      "steps": [
        "اختر تاريخي البداية والنهاية.",
        "اطّلع على الفرق بالأيام والأسابيع.",
        "يمكنك عد أيام العمل فقط."
      ],
      "faq": [
        {
          "q": "هل تُستبعد العطلات؟",
          "a": "افتراضيًا نستبعد السبت والأحد. العطلات تعتمد على البلد."
        }
      ]
    },
    "strefy-czasowe": {
      "cat": "time",
      "name": "فرق المناطق الزمنية",
      "desc": "قارن الأوقات المحلية بين المدن، واطّلع على فرق الساعات وحدّد المواقع على خريطة بسيطة.",
      "steps": [
        "اختر مدينتي المصدر والهدف.",
        "قارن الأوقات المحلية الحالية.",
        "اطّلع على الإزاحة وعلامات الخريطة."
      ],
      "faq": [
        {
          "q": "هل يُؤخذ التوقيت الصيفي بعين الاعتبار؟",
          "a": "نعم — نستخدم مناطق IANA (مثل Europe/Warsaw) التي تطبّق DST تلقائيًا."
        }
      ]
    },
    "przelicznik-jednostek": {
      "cat": "units",
      "name": "محوّل الوحدات",
      "desc": "حوّل الطول والكتلة ودرجة الحرارة والحجم: cm↔بوصة، kg↔lb، °C↔°F والمزيد.",
      "steps": [
        "اختر فئة الوحدات.",
        "أدخل القيمة والوحدات.",
        "احصل على النتيجة فورًا."
      ],
      "faq": [
        {
          "q": "هل التحويلات دقيقة؟",
          "a": "نعم — معاملات SI قياسية. درجة الحرارة تستخدم صيغًا خاصة وليس ضربًا بسيطًا."
        }
      ]
    },
    "kalkulator-vat": {
      "cat": "finance",
      "name": "حاسبة ضريبة القيمة المضافة والنسب",
      "desc": "أضف أو اطرح ضريبة القيمة المضافة (23%، 8%، 5%)، واحسب الصافي/الإجمالي والنسب البسيطة.",
      "steps": [
        "أدخل مبلغًا صافيًا أو إجماليًا.",
        "اختر معدل ضريبة القيمة المضافة أو نسبة مخصصة.",
        "اطّلع على تفصيل الصافي والضريبة والإجمالي."
      ],
      "faq": [
        {
          "q": "ما معدلات ضريبة القيمة المضافة في بولندا؟",
          "a": "القياسي 23%، والمخفّض 8% و5%. يمكنك أيضًا إدخال معدل مخصص."
        }
      ]
    },
    "kalkulator-wieku": {
      "cat": "time",
      "name": "حاسبة العمر والعد التنازلي",
      "desc": "احسب العمر بدقة بالسنوات والأشهر والأيام — أو كم يومًا متبقيًا حتى تاريخ.",
      "steps": [
        "أدخل تاريخ الميلاد أو التاريخ المستهدف.",
        "اطّلع على العمر أو العد التنازلي.",
        "تحقّق أيضًا من عيد الميلاد القادم."
      ],
      "faq": [
        {
          "q": "كيف يُحسب العمر؟",
          "a": "من تاريخ الميلاد حتى اليوم، بالسنوات والأشهر والأيام — وليس السنوات التقويمية فقط."
        }
      ]
    },
    "generator-hasel": {
      "cat": "dev",
      "name": "مولّد كلمات المرور",
      "desc": "أنشئ كلمة مرور قوية محليًا في المتصفح. حدّد الطول ومجموعات الأحرف — لا يُرسل شيء إلى الخادم.",
      "steps": [
        "حدّد الطول وخيارات الأحرف.",
        "انقر على إنشاء.",
        "انسخ بنقرة واحدة."
      ],
      "faq": [
        {
          "q": "هل تُرفع كلمة المرور؟",
          "a": "لا — الإنشاء يتم بالكامل في متصفحك."
        }
      ]
    },
    "licznik-znakow": {
      "cat": "text",
      "name": "عداد الأحرف والكلمات",
      "desc": "عدّ الأحرف والكلمات والجمل والفقرات — مفيد لـ SEO ووسائل التواصل وحدود النماذج.",
      "steps": [
        "الصق أو اكتب النص.",
        "تابع الإحصائيات المباشرة.",
        "تحقّق من الطول دون مسافات."
      ],
      "faq": [
        {
          "q": "كيف تُعدّ الكلمات؟",
          "a": "الكلمات هي تسلسلات مفصولة بمسافة أو سطر جديد."
        }
      ]
    },
    "generator-qr": {
      "cat": "dev",
      "name": "مولّد رموز QR",
      "desc": "أنشئ رمز QR من رابط أو نص وحمّله كـ PNG. يعمل محليًا في المتصفح.",
      "steps": [
        "أدخل نصًا أو URL.",
        "أنشئ معاينة QR.",
        "حمّل صورة PNG."
      ],
      "faq": [
        {
          "q": "هل يُرفع محتوى QR؟",
          "a": "لا — يُنشأ الرمز محليًا. لا نخزّن المحتوى."
        }
      ]
    },
    "kalkulator-bitrate": {
      "cat": "media",
      "name": "حاسبة حجم الملف وbitrate",
      "desc": "قدّر حجم ملف صوت/فيديو عند bitrate ومدة معيّنين — أو bitrate الذي يناسب حد MB.",
      "steps": [
        "اختر الحجم من bitrate أو bitrate من الحد.",
        "أدخل المدة والقيم.",
        "اقرأ النتيجة بـ MB / kbps."
      ],
      "faq": [
        {
          "q": "هل يشمل الحاوية؟",
          "a": "يقدّر التدفق الخام. الحاويات والمسارات الإضافية تضيف عادةً بضع نقاط مئوية."
        }
      ]
    },
    "konwerter-kolorow": {
      "cat": "dev",
      "name": "محوّل الألوان HEX RGB HSL",
      "desc": "حوّل الألوان بين HEX وRGB وHSL وتحقّق من تباين WCAG على الخلفية.",
      "steps": [
        "أدخل لونًا بأي صيغة.",
        "اطّلع على المكافئات HEX/RGB/HSL.",
        "تحقّق من التباين على الخلفية."
      ],
      "faq": [
        {
          "q": "ماذا يعني AA / AAA؟",
          "a": "مستويات إتاحة WCAG لتباين النص على الخلفية."
        }
      ]
    },
    "base64": {
      "cat": "dev",
      "name": "Base64 ترميز / فك ترميز",
      "desc": "رمّز النص إلى Base64 أو فكّ ترميز Base64. محليًا، دون رفع بيانات.",
      "steps": [
        "الصق نصًا أو Base64.",
        "اختر ترميز أو فك ترميز.",
        "انسخ النتيجة."
      ],
      "faq": [
        {
          "q": "هل يدعم UTF-8؟",
          "a": "نعم — أحرف Unicode مدعومة."
        }
      ]
    },
    "unix-timestamp": {
      "cat": "dev",
      "name": "Unix timestamp ↔ تاريخ",
      "desc": "حوّل Unix timestamp (ثوانٍ/ms) إلى تاريخ والعكس. مفيد للسجلات وواجهات API.",
      "steps": [
        "الصق timestamp أو اختر تاريخًا.",
        "اطّلع على نتائج ISO والمحلية.",
        "انسخ القيمة."
      ],
      "faq": [
        {
          "q": "ثوانٍ أم مللي ثانية؟",
          "a": "نكتشف تلقائيًا حسب الطول. يمكنك أيضًا فرض الوحدة."
        }
      ]
    },
    "generator-uuid": {
      "cat": "dev",
      "name": "مولّد UUID",
      "desc": "أنشئ UUID v4 (عشوائي) بنقرة واحدة. أنشئ عدة UUID دفعة واحدة عند الحاجة.",
      "steps": [
        "حدّد عدد UUID.",
        "انقر على إنشاء.",
        "انسخ القائمة."
      ],
      "faq": [
        {
          "q": "أي إصدار UUID؟",
          "a": "UUID v4 — عشوائي، RFC 4122، يُنشأ في المتصفح."
        }
      ]
    },
    "generator-hash": {
      "cat": "dev",
      "name": "Hash SHA / MD5",
      "desc": "احسب SHA-1 أو SHA-256 أو SHA-512 أو MD5 للنص. محليًا عبر Web Crypto.",
      "steps": [
        "الصق النص.",
        "اختر الخوارزمية.",
        "انسخ hex hash."
      ],
      "faq": [
        {
          "q": "هل MD5 آمن؟",
          "a": "MD5 ليس لكلمات المرور. استخدم SHA-256+ للأمان؛ MD5 للـ checksums فقط."
        }
      ]
    },
    "json-formatter": {
      "cat": "dev",
      "name": "منسّق JSON",
      "desc": "نسّق JSON وصغّره في المتصفح — دون رفع إلى الخادم.",
      "steps": [
        "الصق JSON.",
        "انقر على تنسيق أو تصغير.",
        "انسخ النتيجة."
      ],
      "faq": [
        {
          "q": "هل تُرفع البيانات؟",
          "a": "لا — المعالجة تتم محليًا في متصفحك."
        }
      ]
    },
    "diff-tekstu": {
      "cat": "text",
      "name": "مقارنة النص diff",
      "desc": "قارن مقطعين نصيين سطرًا بسطر وسلّط الضوء على الاختلافات.",
      "steps": [
        "الصق النص A وB.",
        "راجع الاختلافات المميّزة."
      ],
      "faq": [
        {
          "q": "هل هذا diff كامل؟",
          "a": "مقارنة سطر بسطر — مثالي للمقاطع القصيرة والقوائم."
        }
      ]
    },
    "konwerter-wielkosci-liter": {
      "cat": "text",
      "name": "محوّل حالة الأحرف",
      "desc": "حوّل النص إلى أحرف كبيرة أو صغيرة أو Title Case أو sentence case.",
      "steps": [
        "الصق النص.",
        "اختر الوضع.",
        "انسخ النتيجة."
      ],
      "faq": []
    },
    "usun-duplikaty-linii": {
      "cat": "text",
      "name": "إزالة الأسطر المكررة",
      "desc": "أزل الأسطر المتكررة من قوائم البريد أو SKU أو الوسوم.",
      "steps": [
        "الصق قائمة.",
        "حدّد الخيارات.",
        "انسخ القائمة المنظّفة."
      ],
      "faq": []
    },
    "dekoder-jwt": {
      "cat": "dev",
      "name": "فك JWT",
      "desc": "اقرأ header وpayload لـ JWT دون التحقق من التوقيع.",
      "steps": [
        "الصق token.",
        "افحص header وpayload."
      ],
      "faq": [
        {
          "q": "هل يتحقق من التوقيع؟",
          "a": "لا — يفك Base64URL للـ token فقط."
        }
      ]
    },
    "walidator-nip-pesel": {
      "cat": "dev",
      "name": "مدقّق NIP / PESEL / REGON",
      "desc": "تحقّق من الأرقام الضريبية والهوية البولندية وفق قواعد checksum.",
      "steps": [
        "أدخل رقمًا.",
        "اطّلع على نتيجة التحقق."
      ],
      "faq": [
        {
          "q": "هل يستعلم سجل GUS؟",
          "a": "لا — checksum والطول فقط."
        }
      ]
    },
    "kalkulator-kredytu": {
      "cat": "finance",
      "name": "حاسبة القروض",
      "desc": "احسب أقساط الأقساط الثابتة والسداد الإجمالي وتكلفة الفائدة.",
      "steps": [
        "أدخل المبلغ والمعدل والمدة.",
        "اقرأ القسط الشهري."
      ],
      "faq": [
        {
          "q": "هل تشمل رسوم البنك؟",
          "a": "محاكاة مبسّطة دون رسوم أو تأمين."
        }
      ]
    },
    "markdown-preview": {
      "cat": "text",
      "name": "معاينة Markdown",
      "desc": "اكتب Markdown واطّلع على معاينة HTML مباشرة في المتصفح.",
      "steps": [
        "اكتب Markdown.",
        "تُحدَّث المعاينة تلقائيًا."
      ],
      "faq": []
    },
    "sila-hasla": {
      "cat": "dev",
      "name": "قوة كلمة المرور",
      "desc": "قيّم قوة كلمة المرور حسب الطول وتنوّع الأحرف والأنماط الشائعة.",
      "steps": [
        "أدخل كلمة مرور.",
        "اطّلع على النتيجة والنصائح."
      ],
      "faq": [
        {
          "q": "هل تُرفع كلمة المرور؟",
          "a": "لا — التقييم يتم محليًا في متصفحك."
        }
      ]
    },
    "konwerter-napisow": {
      "cat": "media",
      "name": "محوّل ترجمات SRT / VTT",
      "desc": "حوّل الترجمات بين صيغ SRT وWebVTT.",
      "steps": [
        "الصق الترجمات.",
        "اختر الاتجاه أو تلقائي.",
        "انسخ النتيجة."
      ],
      "faq": []
    },
    "generator-nazw-plikow": {
      "cat": "text",
      "name": "إعادة تسمية الملفات دفعة واحدة",
      "desc": "أعد تسمية الملفات جماعيًا بنمط {name} و{ext} و{index}.",
      "steps": [
        "الصق قائمة الملفات.",
        "حدّد النمط.",
        "انسخ الأسماء الجديدة."
      ],
      "faq": []
    },
    "walidator-iban": {
      "cat": "dev",
      "name": "مدقّق IBAN",
      "desc": "تحقّق من checksum IBAN (mod 97) والطول حسب البلد.",
      "steps": [
        "الصق IBAN.",
        "اطّلع على المخرجات المنسّقة والتحقق."
      ],
      "faq": [
        {
          "q": "هل يتحقق من الحساب البنكي؟",
          "a": "لا — الصيغة وchecksum فقط."
        }
      ]
    },
    "kalkulator-b2b": {
      "cat": "finance",
      "name": "حاسبة B2B مقابل التوظيف",
      "desc": "قارن صافي راتب التوظيف مع دخل فاتورة B2B (ضريبة ثابتة أو خطية).",
      "steps": [
        "أدخل الراتب الإجمالي وإيراد B2B.",
        "اختر الشكل الضريبي.",
        "قارن النتائج."
      ],
      "faq": [
        {
          "q": "هل هذا استشارة ضريبية؟",
          "a": "لا — محاكاة مبسّطة للنقاش مع محاسب."
        }
      ]
    }
  },
  "zh": {
    "przelicznik-walut": {
      "cat": "finance",
      "name": "货币转换器",
      "desc": "使用 ECB 当前参考汇率在线转换货币。PLN、EUR、USD 及数十种其他货币对 — 无需注册。",
      "steps": [
        "输入金额和源货币。",
        "选择目标货币。",
        "查看结果和当日汇率。"
      ],
      "faq": [
        {
          "q": "汇率来自哪里？",
          "a": "通过 Frankfurter API 获取欧洲中央银行参考汇率，工作日更新。"
        },
        {
          "q": "汇率是实时的吗？",
          "a": "这是 ECB 参考汇率，不是银行或兑换处汇率。"
        }
      ]
    },
    "kalkulator-dat": {
      "cat": "time",
      "name": "日期计算器",
      "desc": "计算两个日期之间的天数、工作日和星期几 — 适用于合同和截止日期。",
      "steps": [
        "选择开始和结束日期。",
        "查看天数和周数差异。",
        "可选仅计算工作日。"
      ],
      "faq": [
        {
          "q": "是否排除节假日？",
          "a": "默认排除周六和周日。节假日因国家而异。"
        }
      ]
    },
    "strefy-czasowe": {
      "cat": "time",
      "name": "时区差异",
      "desc": "比较城市间的本地时间，查看时差，并在简单世界地图上定位。",
      "steps": [
        "选择源城市和目标城市。",
        "比较当前本地时间。",
        "查看偏移量和地图标记。"
      ],
      "faq": [
        {
          "q": "是否考虑夏令时？",
          "a": "是 — 我们使用 IANA 时区（如 Europe/Warsaw），自动应用 DST。"
        }
      ]
    },
    "przelicznik-jednostek": {
      "cat": "units",
      "name": "单位转换器",
      "desc": "转换长度、质量、温度和体积：cm↔英寸、kg↔lb、°C↔°F 等。",
      "steps": [
        "选择单位类别。",
        "输入数值和单位。",
        "立即获得结果。"
      ],
      "faq": [
        {
          "q": "转换是否精确？",
          "a": "是 — 标准 SI 系数。温度使用专用公式，而非简单乘法。"
        }
      ]
    },
    "kalkulator-vat": {
      "cat": "finance",
      "name": "增值税和百分比计算器",
      "desc": "添加或扣除增值税（23%、8%、5%），计算净/毛额及简单百分比。",
      "steps": [
        "输入净额或毛额。",
        "选择增值税率或自定义百分比。",
        "查看净额、增值税和毛额明细。"
      ],
      "faq": [
        {
          "q": "波兰有哪些增值税率？",
          "a": "标准 23%，降低税率 8% 和 5%。也可输入自定义税率。"
        }
      ]
    },
    "kalkulator-wieku": {
      "cat": "time",
      "name": "年龄和倒计时计算器",
      "desc": "精确计算年龄（年、月、日）— 或距离某日期的剩余天数。",
      "steps": [
        "输入出生日期或目标日期。",
        "查看年龄或倒计时。",
        "也可查看下一个生日。"
      ],
      "faq": [
        {
          "q": "年龄如何计算？",
          "a": "从出生日期到今天，按年、月、日计算 — 不仅是日历年。"
        }
      ]
    },
    "generator-hasel": {
      "cat": "dev",
      "name": "密码生成器",
      "desc": "在浏览器中本地生成强密码。设置长度和字符集 — 不会发送到服务器。",
      "steps": [
        "设置长度和字符选项。",
        "点击生成。",
        "一键复制。"
      ],
      "faq": [
        {
          "q": "密码会上传吗？",
          "a": "不会 — 生成完全在您的浏览器中进行。"
        }
      ]
    },
    "licznik-znakow": {
      "cat": "text",
      "name": "字符和字数统计",
      "desc": "统计字符、单词、句子和段落 — 适用于 SEO、社交媒体和表单限制。",
      "steps": [
        "粘贴或输入文本。",
        "查看实时统计。",
        "检查不含空格的字符数。"
      ],
      "faq": [
        {
          "q": "单词如何计数？",
          "a": "单词是由空格或换行分隔的序列。"
        }
      ]
    },
    "generator-qr": {
      "cat": "dev",
      "name": "QR 码生成器",
      "desc": "从链接或文本创建 QR 码并下载为 PNG。在浏览器中本地运行。",
      "steps": [
        "输入文本或 URL。",
        "生成 QR 预览。",
        "下载 PNG 图片。"
      ],
      "faq": [
        {
          "q": "QR 内容会上传吗？",
          "a": "不会 — 码在本地生成。我们不存储内容。"
        }
      ]
    },
    "kalkulator-bitrate": {
      "cat": "media",
      "name": "文件大小和 bitrate 计算器",
      "desc": "估算给定 bitrate 和时长下音视频文件的大小 — 或符合 MB 限制的 bitrate。",
      "steps": [
        "选择从 bitrate 算大小或从限制算 bitrate。",
        "输入时长和数值。",
        "查看 MB / kbps 结果。"
      ],
      "faq": [
        {
          "q": "是否包含容器？",
          "a": "估算原始流。容器和额外轨道通常会增加几个百分点。"
        }
      ]
    },
    "konwerter-kolorow": {
      "cat": "dev",
      "name": "HEX RGB HSL 颜色转换器",
      "desc": "在 HEX、RGB 和 HSL 之间转换颜色，并检查与背景的 WCAG 对比度。",
      "steps": [
        "以任意格式输入颜色。",
        "查看 HEX/RGB/HSL 等效值。",
        "检查与背景的对比度。"
      ],
      "faq": [
        {
          "q": "AA / AAA 是什么意思？",
          "a": "WCAG 文本与背景对比度的无障碍等级。"
        }
      ]
    },
    "base64": {
      "cat": "dev",
      "name": "Base64 编码 / 解码",
      "desc": "将文本编码为 Base64 或解码 Base64。本地处理，不上传数据。",
      "steps": [
        "粘贴文本或 Base64。",
        "选择编码或解码。",
        "复制结果。"
      ],
      "faq": [
        {
          "q": "支持 UTF-8 吗？",
          "a": "是 — 支持 Unicode 字符。"
        }
      ]
    },
    "unix-timestamp": {
      "cat": "dev",
      "name": "Unix timestamp ↔ 日期",
      "desc": "将 Unix timestamp（秒/ms）转换为日期及反向转换。适用于日志和 API。",
      "steps": [
        "粘贴 timestamp 或选择日期。",
        "查看 ISO 和本地结果。",
        "复制值。"
      ],
      "faq": [
        {
          "q": "秒还是毫秒？",
          "a": "根据长度自动检测。也可强制指定单位。"
        }
      ]
    },
    "generator-uuid": {
      "cat": "dev",
      "name": "UUID 生成器",
      "desc": "一键生成 UUID v4（随机）。需要时可一次生成多个。",
      "steps": [
        "设置 UUID 数量。",
        "点击生成。",
        "复制列表。"
      ],
      "faq": [
        {
          "q": "哪个 UUID 版本？",
          "a": "UUID v4 — 随机，RFC 4122，在浏览器中生成。"
        }
      ]
    },
    "generator-hash": {
      "cat": "dev",
      "name": "SHA / MD5 hash",
      "desc": "计算文本的 SHA-1、SHA-256、SHA-512 或 MD5。通过 Web Crypto 本地计算。",
      "steps": [
        "粘贴文本。",
        "选择算法。",
        "复制 hex hash。"
      ],
      "faq": [
        {
          "q": "MD5 安全吗？",
          "a": "MD5 不适用于密码。安全用途请用 SHA-256+；MD5 仅用于 checksum。"
        }
      ]
    },
    "json-formatter": {
      "cat": "dev",
      "name": "JSON 格式化器",
      "desc": "在浏览器中格式化和压缩 JSON — 不上传到服务器。",
      "steps": [
        "粘贴 JSON。",
        "点击格式化或压缩。",
        "复制结果。"
      ],
      "faq": [
        {
          "q": "数据会上传吗？",
          "a": "不会 — 处理在浏览器中本地进行。"
        }
      ]
    },
    "diff-tekstu": {
      "cat": "text",
      "name": "文本 diff",
      "desc": "逐行比较两段文本并高亮差异。",
      "steps": [
        "粘贴文本 A 和 B。",
        "查看高亮的差异。"
      ],
      "faq": [
        {
          "q": "这是完整 diff 吗？",
          "a": "逐行比较 — 适合短片段和列表。"
        }
      ]
    },
    "konwerter-wielkosci-liter": {
      "cat": "text",
      "name": "大小写转换器",
      "desc": "将文本转换为大写、小写、Title Case 或 sentence case。",
      "steps": [
        "粘贴文本。",
        "选择模式。",
        "复制结果。"
      ],
      "faq": []
    },
    "usun-duplikaty-linii": {
      "cat": "text",
      "name": "删除重复行",
      "desc": "从邮件列表、SKU 或标签中删除重复行。",
      "steps": [
        "粘贴列表。",
        "设置选项。",
        "复制清理后的列表。"
      ],
      "faq": []
    },
    "dekoder-jwt": {
      "cat": "dev",
      "name": "JWT 解码器",
      "desc": "读取 JWT 的 header 和 payload，不验证签名。",
      "steps": [
        "粘贴 token。",
        "检查 header 和 payload。"
      ],
      "faq": [
        {
          "q": "会验证签名吗？",
          "a": "不会 — 仅解码 token 的 Base64URL。"
        }
      ]
    },
    "walidator-nip-pesel": {
      "cat": "dev",
      "name": "NIP / PESEL / REGON 验证器",
      "desc": "按 checksum 规则验证波兰税务和身份号码。",
      "steps": [
        "输入号码。",
        "查看验证结果。"
      ],
      "faq": [
        {
          "q": "会查询 GUS 注册库吗？",
          "a": "不会 — 仅 checksum 和长度。"
        }
      ]
    },
    "kalkulator-kredytu": {
      "cat": "finance",
      "name": "贷款计算器",
      "desc": "计算等额本息还款、总还款额和利息成本。",
      "steps": [
        "输入金额、利率和期限。",
        "查看月供。"
      ],
      "faq": [
        {
          "q": "包含银行手续费吗？",
          "a": "简化模拟，不含手续费或保险。"
        }
      ]
    },
    "markdown-preview": {
      "cat": "text",
      "name": "Markdown 预览",
      "desc": "编写 Markdown 并在浏览器中查看实时 HTML 预览。",
      "steps": [
        "输入 Markdown。",
        "预览自动更新。"
      ],
      "faq": []
    },
    "sila-hasla": {
      "cat": "dev",
      "name": "密码强度",
      "desc": "根据长度、字符多样性和常见模式评估密码强度。",
      "steps": [
        "输入密码。",
        "查看评分和建议。"
      ],
      "faq": [
        {
          "q": "密码会上传吗？",
          "a": "不会 — 评分在浏览器中本地进行。"
        }
      ]
    },
    "konwerter-napisow": {
      "cat": "media",
      "name": "SRT / VTT 字幕转换器",
      "desc": "在 SRT 和 WebVTT 格式之间转换字幕。",
      "steps": [
        "粘贴字幕。",
        "选择方向或自动。",
        "复制结果。"
      ],
      "faq": []
    },
    "generator-nazw-plikow": {
      "cat": "text",
      "name": "批量文件重命名",
      "desc": "使用 {name}、{ext}、{index} 模式批量重命名文件。",
      "steps": [
        "粘贴文件列表。",
        "设置模式。",
        "复制新名称。"
      ],
      "faq": []
    },
    "walidator-iban": {
      "cat": "dev",
      "name": "IBAN 验证器",
      "desc": "验证 IBAN checksum（mod 97）和国家特定长度。",
      "steps": [
        "粘贴 IBAN。",
        "查看格式化输出和验证结果。"
      ],
      "faq": [
        {
          "q": "会验证银行账户吗？",
          "a": "不会 — 仅格式和 checksum。"
        }
      ]
    },
    "kalkulator-b2b": {
      "cat": "finance",
      "name": "B2B 与雇佣计算器",
      "desc": "比较雇佣净薪与 B2B 发票收入（固定税或线性税）。",
      "steps": [
        "输入雇佣毛薪和 B2B 收入。",
        "选择税务形式。",
        "比较结果。"
      ],
      "faq": [
        {
          "q": "这是税务建议吗？",
          "a": "不是 — 简化模拟，供与会计师讨论。"
        }
      ]
    }
  },
  "ja": {
    "przelicznik-walut": {
      "cat": "finance",
      "name": "通貨コンバーター",
      "desc": "ECB の最新参照レートでオンライン通貨換算。PLN、EUR、USD など多数の通貨ペア — 登録不要。",
      "steps": [
        "金額と換算元通貨を入力。",
        "換算先通貨を選択。",
        "結果と当日レートを確認。"
      ],
      "faq": [
        {
          "q": "レートはどこから？",
          "a": "Frankfurter API 経由の欧州中央銀行参照レート。営業日に更新。"
        },
        {
          "q": "リアルタイムのレート？",
          "a": "ECB 参照レートであり、銀行や両替所のレートではありません。"
        }
      ]
    },
    "kalkulator-dat": {
      "cat": "time",
      "name": "日付計算機",
      "desc": "2つの日付間の日数、営業日、曜日を計算 — 契約や締切に便利。",
      "steps": [
        "開始日と終了日を選択。",
        "日数と週数の差を確認。",
        "必要に応じて営業日のみカウント。"
      ],
      "faq": [
        {
          "q": "祝日は除外されますか？",
          "a": "デフォルトでは土日を除外。祝日は国によって異なります。"
        }
      ]
    },
    "strefy-czasowe": {
      "cat": "time",
      "name": "タイムゾーン差",
      "desc": "都市間の現地時刻を比較し、時差を確認。簡易地図で位置も表示。",
      "steps": [
        "出発地と到着地の都市を選択。",
        "現在の現地時刻を比較。",
        "オフセットと地図マーカーを確認。"
      ],
      "faq": [
        {
          "q": "夏時間は考慮されますか？",
          "a": "はい — IANA ゾーン（例: Europe/Warsaw）を使用し、DST を自動適用。"
        }
      ]
    },
    "przelicznik-jednostek": {
      "cat": "units",
      "name": "単位変換器",
      "desc": "長さ、質量、温度、体積を変換: cm↔インチ、kg↔lb、°C↔°F など。",
      "steps": [
        "単位カテゴリを選択。",
        "値と単位を入力。",
        "結果を即座に取得。"
      ],
      "faq": [
        {
          "q": "変換は正確ですか？",
          "a": "はい — 標準 SI 係数。温度は単純な乗算ではなく専用式を使用。"
        }
      ]
    },
    "kalkulator-vat": {
      "cat": "finance",
      "name": "VAT・パーセント計算機",
      "desc": "VAT（23%、8%、5%）の加算・控除、税抜/税込、簡単な割合計算。",
      "steps": [
        "税抜または税込金額を入力。",
        "VAT 率またはカスタム率を選択。",
        "税抜、VAT、税込の内訳を確認。"
      ],
      "faq": [
        {
          "q": "ポーランドの VAT 率は？",
          "a": "標準 23%、軽減 8% と 5%。カスタム率も入力可能。"
        }
      ]
    },
    "kalkulator-wieku": {
      "cat": "time",
      "name": "年齢・カウントダウン計算機",
      "desc": "正確な年齢（年・月・日）を計算 — または指定日までの残日数。",
      "steps": [
        "生年月日または目標日を入力。",
        "年齢またはカウントダウンを表示。",
        "次の誕生日も確認。"
      ],
      "faq": [
        {
          "q": "年齢の計算方法は？",
          "a": "生年月日から今日まで、年・月・日で計算 — 暦年だけではありません。"
        }
      ]
    },
    "generator-hasel": {
      "cat": "dev",
      "name": "パスワード生成器",
      "desc": "ブラウザ内でローカルに強力なパスワードを生成。長さと文字セットを設定 — サーバーには送信されません。",
      "steps": [
        "長さと文字オプションを設定。",
        "生成をクリック。",
        "ワンクリックでコピー。"
      ],
      "faq": [
        {
          "q": "パスワードはアップロードされますか？",
          "a": "いいえ — 生成は完全にブラウザ内で行われます。"
        }
      ]
    },
    "licznik-znakow": {
      "cat": "text",
      "name": "文字・単語カウンター",
      "desc": "文字、単語、文、段落をカウント — SEO、SNS、フォーム制限に便利。",
      "steps": [
        "テキストを貼り付けまたは入力。",
        "リアルタイム統計を確認。",
        "スペースなしの文字数も確認。"
      ],
      "faq": [
        {
          "q": "単語の数え方は？",
          "a": "単語はスペースまたは改行で区切られた連続です。"
        }
      ]
    },
    "generator-qr": {
      "cat": "dev",
      "name": "QR コード生成器",
      "desc": "リンクまたはテキストから QR コードを作成し PNG でダウンロード。ブラウザ内でローカル実行。",
      "steps": [
        "テキストまたは URL を入力。",
        "QR プレビューを生成。",
        "PNG 画像をダウンロード。"
      ],
      "faq": [
        {
          "q": "QR 内容はアップロードされますか？",
          "a": "いいえ — コードはローカル生成。内容は保存しません。"
        }
      ]
    },
    "kalkulator-bitrate": {
      "cat": "media",
      "name": "ファイルサイズ・bitrate 計算機",
      "desc": "指定 bitrate と時間での音声/動画ファイルサイズ — または MB 制限に収まる bitrate を推定。",
      "steps": [
        "bitrate からサイズ、または制限から bitrate を選択。",
        "時間と値を入力。",
        "MB / kbps で結果を確認。"
      ],
      "faq": [
        {
          "q": "コンテナは含まれますか？",
          "a": "生ストリームを推定。コンテナや追加トラックで数%増えることがあります。"
        }
      ]
    },
    "konwerter-kolorow": {
      "cat": "dev",
      "name": "HEX RGB HSL カラーコンバーター",
      "desc": "HEX、RGB、HSL 間で色を変換し、背景に対する WCAG コントラストを確認。",
      "steps": [
        "任意形式で色を入力。",
        "HEX/RGB/HSL 等価値を表示。",
        "背景に対するコントラストを確認。"
      ],
      "faq": [
        {
          "q": "AA / AAA とは？",
          "a": "テキストと背景のコントラストに関する WCAG アクセシビリティレベル。"
        }
      ]
    },
    "base64": {
      "cat": "dev",
      "name": "Base64 エンコード / デコード",
      "desc": "テキストを Base64 にエンコードまたはデコード。ローカル処理、データアップロードなし。",
      "steps": [
        "テキストまたは Base64 を貼り付け。",
        "エンコードまたはデコードを選択。",
        "結果をコピー。"
      ],
      "faq": [
        {
          "q": "UTF-8 に対応？",
          "a": "はい — Unicode 文字に対応。"
        }
      ]
    },
    "unix-timestamp": {
      "cat": "dev",
      "name": "Unix timestamp ↔ 日付",
      "desc": "Unix timestamp（秒/ms）を日付に変換、またはその逆。ログや API に便利。",
      "steps": [
        "timestamp を貼り付けまたは日付を選択。",
        "ISO とローカル結果を表示。",
        "値をコピー。"
      ],
      "faq": [
        {
          "q": "秒かミリ秒か？",
          "a": "長さから自動判定。単位の強制指定も可能。"
        }
      ]
    },
    "generator-uuid": {
      "cat": "dev",
      "name": "UUID 生成器",
      "desc": "ワンクリックで UUID v4（ランダム）を生成。必要なら複数同時生成。",
      "steps": [
        "UUID の数を設定。",
        "生成をクリック。",
        "リストをコピー。"
      ],
      "faq": [
        {
          "q": "UUID のバージョンは？",
          "a": "UUID v4 — ランダム、RFC 4122、ブラウザ内生成。"
        }
      ]
    },
    "generator-hash": {
      "cat": "dev",
      "name": "SHA / MD5 hash",
      "desc": "テキストの SHA-1、SHA-256、SHA-512 または MD5 を計算。Web Crypto でローカル実行。",
      "steps": [
        "テキストを貼り付け。",
        "アルゴリズムを選択。",
        "hex hash をコピー。"
      ],
      "faq": [
        {
          "q": "MD5 は安全？",
          "a": "MD5 はパスワード向きではありません。セキュリティには SHA-256+ を。MD5 は checksum 用。"
        }
      ]
    },
    "json-formatter": {
      "cat": "dev",
      "name": "JSON フォーマッター",
      "desc": "ブラウザ内で JSON を整形・圧縮 — サーバーアップロードなし。",
      "steps": [
        "JSON を貼り付け。",
        "整形または圧縮をクリック。",
        "結果をコピー。"
      ],
      "faq": [
        {
          "q": "データはアップロードされますか？",
          "a": "いいえ — 処理はブラウザ内でローカル実行。"
        }
      ]
    },
    "diff-tekstu": {
      "cat": "text",
      "name": "テキスト diff",
      "desc": "2つのテキスト断片を行ごとに比較し、差分をハイライト。",
      "steps": [
        "テキスト A と B を貼り付け。",
        "ハイライトされた差分を確認。"
      ],
      "faq": [
        {
          "q": "完全な diff ですか？",
          "a": "行ごとの比較 — 短い断片やリストに最適。"
        }
      ]
    },
    "konwerter-wielkosci-liter": {
      "cat": "text",
      "name": "大文字小文字変換器",
      "desc": "テキストを大文字、小文字、Title Case、sentence case に変換。",
      "steps": [
        "テキストを貼り付け。",
        "モードを選択。",
        "結果をコピー。"
      ],
      "faq": []
    },
    "usun-duplikaty-linii": {
      "cat": "text",
      "name": "重複行の削除",
      "desc": "メールリスト、SKU、タグから重複行を削除。",
      "steps": [
        "リストを貼り付け。",
        "オプションを設定。",
        "クリーンなリストをコピー。"
      ],
      "faq": []
    },
    "dekoder-jwt": {
      "cat": "dev",
      "name": "JWT デコーダー",
      "desc": "署名検証なしで JWT の header と payload を読み取り。",
      "steps": [
        "token を貼り付け。",
        "header と payload を確認。"
      ],
      "faq": [
        {
          "q": "署名を検証しますか？",
          "a": "いいえ — token の Base64URL デコードのみ。"
        }
      ]
    },
    "walidator-nip-pesel": {
      "cat": "dev",
      "name": "NIP / PESEL / REGON バリデーター",
      "desc": "ポーランドの税務・ID 番号を checksum 規則で検証。",
      "steps": [
        "番号を入力。",
        "検証結果を表示。"
      ],
      "faq": [
        {
          "q": "GUS レジストリを照会しますか？",
          "a": "いいえ — checksum と長さのみ。"
        }
      ]
    },
    "kalkulator-kredytu": {
      "cat": "finance",
      "name": "ローン計算機",
      "desc": "元利均等返済、総返済額、利息コストを計算。",
      "steps": [
        "金額、金利、期間を入力。",
        "月々の返済額を確認。"
      ],
      "faq": [
        {
          "q": "銀行手数料は含まれますか？",
          "a": "手数料や保険を除いた簡易シミュレーション。"
        }
      ]
    },
    "markdown-preview": {
      "cat": "text",
      "name": "Markdown プレビュー",
      "desc": "Markdown を書いてブラウザ内でライブ HTML プレビューを表示。",
      "steps": [
        "Markdown を入力。",
        "プレビューは自動更新。"
      ],
      "faq": []
    },
    "sila-hasla": {
      "cat": "dev",
      "name": "パスワード強度",
      "desc": "長さ、文字の多様性、一般的なパターンでパスワード強度を評価。",
      "steps": [
        "パスワードを入力。",
        "スコアとヒントを表示。"
      ],
      "faq": [
        {
          "q": "パスワードはアップロードされますか？",
          "a": "いいえ — 評価はブラウザ内でローカル実行。"
        }
      ]
    },
    "konwerter-napisow": {
      "cat": "media",
      "name": "SRT / VTT 字幕コンバーター",
      "desc": "SRT と WebVTT 形式間で字幕を変換。",
      "steps": [
        "字幕を貼り付け。",
        "方向または自動を選択。",
        "結果をコピー。"
      ],
      "faq": []
    },
    "generator-nazw-plikow": {
      "cat": "text",
      "name": "一括ファイル名変更",
      "desc": "{name}、{ext}、{index} パターンでファイルを一括リネーム。",
      "steps": [
        "ファイルリストを貼り付け。",
        "パターンを設定。",
        "新しい名前をコピー。"
      ],
      "faq": []
    },
    "walidator-iban": {
      "cat": "dev",
      "name": "IBAN バリデーター",
      "desc": "IBAN checksum（mod 97）と国別長さを検証。",
      "steps": [
        "IBAN を貼り付け。",
        "整形出力と検証結果を表示。"
      ],
      "faq": [
        {
          "q": "銀行口座を検証しますか？",
          "a": "いいえ — 形式と checksum のみ。"
        }
      ]
    },
    "kalkulator-b2b": {
      "cat": "finance",
      "name": "Калькулятор B2B vs найм",
      "desc": "Сравните чистую зарплату по найму с доходом от счёта B2B (фиксированный или линейный налог).",
      "steps": [
        "Введите брутто зарплату и доход B2B.",
        "Выберите налоговую форму.",
        "Сравните результаты."
      ],
      "faq": [
        {
          "q": "Это налоговая консультация?",
          "a": "Нет — упрощённая симуляция для обсуждения с бухгалтером."
        }
      ]
    }
  },
  "ko": {
    "przelicznik-walut": {
      "cat": "finance",
      "name": "환율 변환기",
      "desc": "ECB 최신 기준환율로 온라인 환전. PLN, EUR, USD 및 수십 개 통화쌍 — 가입 불필요.",
      "steps": [
        "금액과 원본 통화를 입력하세요.",
        "대상 통화를 선택하세요.",
        "결과와 당일 환율을 확인하세요."
      ],
      "faq": [
        {
          "q": "환율은 어디서 오나요?",
          "a": "Frankfurter API를 통한 유럽중앙은행 기준환율, 영업일에 업데이트됩니다."
        },
        {
          "q": "실시간 환율인가요?",
          "a": "ECB 기준환율이며, 은행이나 환전소 환율이 아닙니다."
        }
      ]
    },
    "kalkulator-dat": {
      "cat": "time",
      "name": "날짜 계산기",
      "desc": "두 날짜 사이의 일수, 근무일, 요일을 계산 — 계약 및 마감일에 유용.",
      "steps": [
        "시작일과 종료일을 선택하세요.",
        "일수 및 주수 차이를 확인하세요.",
        "선택적으로 근무일만 계산하세요."
      ],
      "faq": [
        {
          "q": "공휴일은 제외되나요?",
          "a": "기본적으로 토·일요일을 제외합니다. 공휴일은 국가마다 다릅니다."
        }
      ]
    },
    "strefy-czasowe": {
      "cat": "time",
      "name": "시간대 차이",
      "desc": "도시 간 현지 시간을 비교하고, 시차를 확인하며, 간단한 지도에서 위치를 찾으세요.",
      "steps": [
        "출발 및 도착 도시를 선택하세요.",
        "현재 현지 시간을 비교하세요.",
        "오프셋과 지도 마커를 확인하세요."
      ],
      "faq": [
        {
          "q": "일광 절약 시간을 고려하나요?",
          "a": "예 — IANA 시간대(예: Europe/Warsaw)를 사용하며 DST를 자동 적용합니다."
        }
      ]
    },
    "przelicznik-jednostek": {
      "cat": "units",
      "name": "단위 변환기",
      "desc": "길이, 질량, 온도, 부피 변환: cm↔인치, kg↔lb, °C↔°F 등.",
      "steps": [
        "단위 카테고리를 선택하세요.",
        "값과 단위를 입력하세요.",
        "즉시 결과를 확인하세요."
      ],
      "faq": [
        {
          "q": "변환이 정확한가요?",
          "a": "예 — 표준 SI 계수. 온도는 단순 곱셈이 아닌 전용 공식을 사용합니다."
        }
      ]
    },
    "kalkulator-vat": {
      "cat": "finance",
      "name": "VAT 및 백분율 계산기",
      "desc": "VAT(23%, 8%, 5%) 추가/차감, 순/총액 계산 및 간단한 백분율.",
      "steps": [
        "순액 또는 총액을 입력하세요.",
        "VAT율 또는 사용자 지정 비율을 선택하세요.",
        "순액, VAT, 총액 내역을 확인하세요."
      ],
      "faq": [
        {
          "q": "폴란드 VAT율은?",
          "a": "표준 23%, 감면 8% 및 5%. 사용자 지정율도 입력 가능합니다."
        }
      ]
    },
    "kalkulator-wieku": {
      "cat": "time",
      "name": "나이 및 카운트다운 계산기",
      "desc": "정확한 나이(년, 월, 일) 계산 — 또는 특정 날짜까지 남은 일수.",
      "steps": [
        "생년월일 또는 목표 날짜를 입력하세요.",
        "나이 또는 카운트다운을 확인하세요.",
        "다음 생일도 확인하세요."
      ],
      "faq": [
        {
          "q": "나이는 어떻게 계산되나요?",
          "a": "생년월일부터 오늘까지 년, 월, 일로 계산 — 단순 역년만이 아닙니다."
        }
      ]
    },
    "generator-hasel": {
      "cat": "dev",
      "name": "비밀번호 생성기",
      "desc": "브라우저에서 로컬로 강력한 비밀번호 생성. 길이 및 문자 집합 설정 — 서버로 전송되지 않습니다.",
      "steps": [
        "길이 및 문자 옵션을 설정하세요.",
        "생성을 클릭하세요.",
        "한 번의 클릭으로 복사하세요."
      ],
      "faq": [
        {
          "q": "비밀번호가 업로드되나요?",
          "a": "아니요 — 생성은 브라우저에서 완전히 로컬로 이루어집니다."
        }
      ]
    },
    "licznik-znakow": {
      "cat": "text",
      "name": "글자 및 단어 수 세기",
      "desc": "글자, 단어, 문장, 단락 수 계산 — SEO, SNS, 양식 제한에 유용.",
      "steps": [
        "텍스트를 붙여넣거나 입력하세요.",
        "실시간 통계를 확인하세요.",
        "공백 제외 길이를 확인하세요."
      ],
      "faq": [
        {
          "q": "단어는 어떻게 세나요?",
          "a": "단어는 공백 또는 줄바꿈으로 구분된 연속입니다."
        }
      ]
    },
    "generator-qr": {
      "cat": "dev",
      "name": "QR 코드 생성기",
      "desc": "링크 또는 텍스트에서 QR 코드를 만들고 PNG로 다운로드. 브라우저에서 로컬 실행.",
      "steps": [
        "텍스트 또는 URL을 입력하세요.",
        "QR 미리보기를 생성하세요.",
        "PNG 이미지를 다운로드하세요."
      ],
      "faq": [
        {
          "q": "QR 내용이 업로드되나요?",
          "a": "아니요 — 코드는 로컬에서 생성됩니다. 내용을 저장하지 않습니다."
        }
      ]
    },
    "kalkulator-bitrate": {
      "cat": "media",
      "name": "파일 크기 및 bitrate 계산기",
      "desc": "주어진 bitrate와 길이에서 오디오/비디오 파일 크기 추정 — 또는 MB 한도에 맞는 bitrate.",
      "steps": [
        "bitrate에서 크기 또는 한도에서 bitrate 선택.",
        "길이와 값을 입력하세요.",
        "MB / kbps 결과를 확인하세요."
      ],
      "faq": [
        {
          "q": "컨테이너가 포함되나요?",
          "a": "원시 스트림을 추정합니다. 컨테이너와 추가 트랙은 보통 몇 % 추가됩니다."
        }
      ]
    },
    "konwerter-kolorow": {
      "cat": "dev",
      "name": "HEX RGB HSL 색상 변환기",
      "desc": "HEX, RGB, HSL 간 색상 변환 및 배경 대비 WCAG 대비 확인.",
      "steps": [
        "모든 형식으로 색상 입력.",
        "HEX/RGB/HSL 등가값 확인.",
        "배경 대비 대비 확인."
      ],
      "faq": [
        {
          "q": "AA / AAA란?",
          "a": "텍스트와 배경 대비에 대한 WCAG 접근성 등급."
        }
      ]
    },
    "base64": {
      "cat": "dev",
      "name": "Base64 인코딩 / 디코딩",
      "desc": "텍스트를 Base64로 인코딩하거나 디코딩. 로컬 처리, 데이터 업로드 없음.",
      "steps": [
        "텍스트 또는 Base64 붙여넣기.",
        "인코딩 또는 디코딩 선택.",
        "결과 복사."
      ],
      "faq": [
        {
          "q": "UTF-8을 지원하나요?",
          "a": "예 — Unicode 문자를 지원합니다."
        }
      ]
    },
    "unix-timestamp": {
      "cat": "dev",
      "name": "Unix timestamp ↔ 날짜",
      "desc": "Unix timestamp(초/ms)를 날짜로 변환 및 역변환. 로그 및 API에 유용.",
      "steps": [
        "timestamp 붙여넣기 또는 날짜 선택.",
        "ISO 및 로컬 결과 확인.",
        "값 복사."
      ],
      "faq": [
        {
          "q": "초인가요 밀리초인가요?",
          "a": "길이에 따라 자동 감지. 단위 강제 지정도 가능."
        }
      ]
    },
    "generator-uuid": {
      "cat": "dev",
      "name": "UUID 생성기",
      "desc": "한 번의 클릭으로 UUID v4(무작위) 생성. 필요 시 여러 개 동시 생성.",
      "steps": [
        "UUID 개수 설정.",
        "생성 클릭.",
        "목록 복사."
      ],
      "faq": [
        {
          "q": "UUID 버전은?",
          "a": "UUID v4 — 무작위, RFC 4122, 브라우저에서 생성."
        }
      ]
    },
    "generator-hash": {
      "cat": "dev",
      "name": "SHA / MD5 hash",
      "desc": "텍스트의 SHA-1, SHA-256, SHA-512 또는 MD5 계산. Web Crypto로 로컬 실행.",
      "steps": [
        "텍스트 붙여넣기.",
        "알고리즘 선택.",
        "hex hash 복사."
      ],
      "faq": [
        {
          "q": "MD5가 안전한가요?",
          "a": "MD5는 비밀번호용이 아닙니다. 보안에는 SHA-256+ 사용; MD5는 checksum용."
        }
      ]
    },
    "json-formatter": {
      "cat": "dev",
      "name": "JSON 포맷터",
      "desc": "브라우저에서 JSON 포맷 및 압축 — 서버 업로드 없음.",
      "steps": [
        "JSON 붙여넣기.",
        "포맷 또는 압축 클릭.",
        "결과 복사."
      ],
      "faq": [
        {
          "q": "데이터가 업로드되나요?",
          "a": "아니요 — 처리는 브라우저에서 로컬로 이루어집니다."
        }
      ]
    },
    "diff-tekstu": {
      "cat": "text",
      "name": "텍스트 diff",
      "desc": "두 텍스트 조각을 줄별로 비교하고 차이점 강조.",
      "steps": [
        "텍스트 A와 B 붙여넣기.",
        "강조된 차이점 검토."
      ],
      "faq": [
        {
          "q": "완전한 diff인가요?",
          "a": "줄별 비교 — 짧은 조각과 목록에 적합."
        }
      ]
    },
    "konwerter-wielkosci-liter": {
      "cat": "text",
      "name": "대소문자 변환기",
      "desc": "텍스트를 대문자, 소문자, Title Case, sentence case로 변환.",
      "steps": [
        "텍스트 붙여넣기.",
        "모드 선택.",
        "결과 복사."
      ],
      "faq": []
    },
    "usun-duplikaty-linii": {
      "cat": "text",
      "name": "중복 줄 제거",
      "desc": "이메일 목록, SKU 또는 태그에서 반복 줄 제거.",
      "steps": [
        "목록 붙여넣기.",
        "옵션 설정.",
        "정리된 목록 복사."
      ],
      "faq": []
    },
    "dekoder-jwt": {
      "cat": "dev",
      "name": "JWT 디코더",
      "desc": "서명 검증 없이 JWT header 및 payload 읽기.",
      "steps": [
        "token 붙여넣기.",
        "header 및 payload 확인."
      ],
      "faq": [
        {
          "q": "서명을 검증하나요?",
          "a": "아니요 — token의 Base64URL 디코딩만 수행."
        }
      ]
    },
    "walidator-nip-pesel": {
      "cat": "dev",
      "name": "NIP / PESEL / REGON 검증기",
      "desc": "checksum 규칙으로 폴란드 세금 및 ID 번호 검증.",
      "steps": [
        "번호 입력.",
        "검증 결과 확인."
      ],
      "faq": [
        {
          "q": "GUS 등록부를 조회하나요?",
          "a": "아니요 — checksum 및 길이만."
        }
      ]
    },
    "kalkulator-kredytu": {
      "cat": "finance",
      "name": "대출 계산기",
      "desc": "원리금균등 상환, 총 상환액 및 이자 비용 계산.",
      "steps": [
        "금액, 금리, 기간 입력.",
        "월 상환액 확인."
      ],
      "faq": [
        {
          "q": "은행 수수료가 포함되나요?",
          "a": "수수료 및 보험 없는 단순 시뮬레이션."
        }
      ]
    },
    "markdown-preview": {
      "cat": "text",
      "name": "Markdown 미리보기",
      "desc": "Markdown을 작성하고 브라우저에서 실시간 HTML 미리보기.",
      "steps": [
        "Markdown 입력.",
        "미리보기 자동 업데이트."
      ],
      "faq": []
    },
    "sila-hasla": {
      "cat": "dev",
      "name": "비밀번호 강도",
      "desc": "길이, 문자 다양성, 일반적인 패턴으로 비밀번호 강도 평가.",
      "steps": [
        "비밀번호 입력.",
        "점수 및 팁 확인."
      ],
      "faq": [
        {
          "q": "비밀번호가 업로드되나요?",
          "a": "아니요 — 평가는 브라우저에서 로컬로 이루어집니다."
        }
      ]
    },
    "konwerter-napisow": {
      "cat": "media",
      "name": "SRT / VTT 자막 변환기",
      "desc": "SRT와 WebVTT 형식 간 자막 변환.",
      "steps": [
        "자막 붙여넣기.",
        "방향 또는 자동 선택.",
        "결과 복사."
      ],
      "faq": []
    },
    "generator-nazw-plikow": {
      "cat": "text",
      "name": "일괄 파일 이름 변경",
      "desc": "{name}, {ext}, {index} 패턴으로 파일 일괄 이름 변경.",
      "steps": [
        "파일 목록 붙여넣기.",
        "패턴 설정.",
        "새 이름 복사."
      ],
      "faq": []
    },
    "walidator-iban": {
      "cat": "dev",
      "name": "IBAN 검증기",
      "desc": "IBAN checksum(mod 97) 및 국가별 길이 검증.",
      "steps": [
        "IBAN 붙여넣기.",
        "포맷된 출력 및 검증 확인."
      ],
      "faq": [
        {
          "q": "은행 계좌를 검증하나요?",
          "a": "아니요 — 형식 및 checksum만."
        }
      ]
    },
    "kalkulator-b2b": {
      "cat": "finance",
      "name": "B2B vs 고용 계산기",
      "desc": "고용 순급여와 B2B 송장 수입(정액세 또는 선형세) 비교.",
      "steps": [
        "고용 총급여 및 B2B 수입 입력.",
        "세금 형태 선택.",
        "결과 비교."
      ],
      "faq": [
        {
          "q": "세무 자문인가요?",
          "a": "아니요 — 회계사와 논의용 단순 시뮬레이션."
        }
      ]
    }
  },
  "hi": {
    "przelicznik-walut": {
      "cat": "finance",
      "name": "मुद्रा परिवर्तक",
      "desc": "ECB की वर्तमान संदर्भ दरों से ऑनलाइन मुद्रा बदलें। PLN, EUR, USD और दर्जनों अन्य जोड़े — बिना साइन-अप।",
      "steps": [
        "राशि और स्रोत मुद्रा दर्ज करें।",
        "लक्ष्य मुद्रा चुनें।",
        "परिणाम और दैनिक दर देखें।"
      ],
      "faq": [
        {
          "q": "दरें कहाँ से आती हैं?",
          "a": "Frankfurter API के माध्यम से यूरोपीय केंद्रीय बैंक की संदर्भ दरें, कार्य दिवसों पर अपडेट।"
        },
        {
          "q": "क्या दरें रियल-टाइम हैं?",
          "a": "ये ECB संदर्भ दरें हैं, बैंक या एक्सचेंज दरें नहीं।"
        }
      ]
    },
    "kalkulator-dat": {
      "cat": "time",
      "name": "तिथि कैलकुलेटर",
      "desc": "दो तिथियों के बीच दिन, कार्य दिवस और सप्ताह का दिन गिनें — अनुबंध और समय सीमा के लिए उपयोगी।",
      "steps": [
        "प्रारंभ और समाप्ति तिथि चुनें।",
        "दिनों और सप्ताहों में अंतर देखें।",
        "वैकल्पिक रूप से केवल कार्य दिवस गिनें।"
      ],
      "faq": [
        {
          "q": "क्या छुट्टियाँ बाहर हैं?",
          "a": "डिफ़ॉल्ट रूप से शनिवार और रविवार बाहर। छुट्टियाँ देश पर निर्भर।"
        }
      ]
    },
    "strefy-czasowe": {
      "cat": "time",
      "name": "समय क्षेत्र अंतर",
      "desc": "शहरों के बीच स्थानीय समय की तुलना करें, घंटे का अंतर देखें और सरल मानचित्र पर स्थान खोजें।",
      "steps": [
        "स्रोत और लक्ष्य शहर चुनें।",
        "वर्तमान स्थानीय समय की तुलना करें।",
        "ऑफ़सेट और मानचित्र मार्कर देखें।"
      ],
      "faq": [
        {
          "q": "क्या DST ध्यान में रखा जाता है?",
          "a": "हाँ — IANA ज़ोन (जैसे Europe/Warsaw) का उपयोग, DST स्वचालित लागू।"
        }
      ]
    },
    "przelicznik-jednostek": {
      "cat": "units",
      "name": "इकाई परिवर्तक",
      "desc": "लंबाई, द्रव्यमान, तापमान और आयतन बदलें: cm↔इंच, kg↔lb, °C↔°F और अधिक।",
      "steps": [
        "इकाई श्रेणी चुनें।",
        "मान और इकाइयाँ दर्ज करें।",
        "तुरंत परिणाम पाएँ।"
      ],
      "faq": [
        {
          "q": "क्या रूपांतरण सटीक हैं?",
          "a": "हाँ — मानक SI गुणक। तापमान सरल गुणा नहीं, विशेष सूत्र।"
        }
      ]
    },
    "kalkulator-vat": {
      "cat": "finance",
      "name": "VAT और प्रतिशत कैलकुलेटर",
      "desc": "VAT (23%, 8%, 5%) जोड़ें या हटाएँ, शुद्ध/सकल और सरल प्रतिशत गिनें।",
      "steps": [
        "शुद्ध या सकल राशि दर्ज करें।",
        "VAT दर या कस्टम प्रतिशत चुनें।",
        "शुद्ध, VAT और सकल विवरण देखें।"
      ],
      "faq": [
        {
          "q": "पोलैंड में VAT दरें?",
          "a": "मानक 23%, कम 8% और 5%। कस्टम दर भी दर्ज कर सकते हैं।"
        }
      ]
    },
    "kalkulator-wieku": {
      "cat": "time",
      "name": "आयु और उलटी गिनती कैलकुलेटर",
      "desc": "सटीक आयु वर्ष, महीने और दिनों में — या तिथि तक कितने दिन बचे।",
      "steps": [
        "जन्म या लक्ष्य तिथि दर्ज करें।",
        "आयु या उलटी गिनती देखें।",
        "अगला जन्मदिन भी जाँचें।"
      ],
      "faq": [
        {
          "q": "आयु कैसे गिनी जाती है?",
          "a": "जन्म तिथि से आज तक, वर्ष, महीने, दिन — केवल कैलेंडर वर्ष नहीं।"
        }
      ]
    },
    "generator-hasel": {
      "cat": "dev",
      "name": "पासवर्ड जनरेटर",
      "desc": "ब्राउज़र में स्थानीय रूप से मजबूत पासवर्ड बनाएँ। लंबाई और वर्ण सेट — सर्वर पर कुछ नहीं भेजा जाता।",
      "steps": [
        "लंबाई और वर्ण विकल्प सेट करें।",
        "जनरेट पर क्लिक करें।",
        "एक क्लिक से कॉपी करें।"
      ],
      "faq": [
        {
          "q": "क्या पासवर्ड अपलोड होता है?",
          "a": "नहीं — जनरेशन पूरी तरह आपके ब्राउज़र में।"
        }
      ]
    },
    "licznik-znakow": {
      "cat": "text",
      "name": "वर्ण और शब्द गिनती",
      "desc": "वर्ण, शब्द, वाक्य और पैराग्राफ गिनें — SEO, सोशल और फॉर्म सीमा के लिए।",
      "steps": [
        "टेक्स्ट पेस्ट या टाइप करें।",
        "लाइव आँकड़े देखें।",
        "बिना रिक्त स्थान की लंबाई जाँचें।"
      ],
      "faq": [
        {
          "q": "शब्द कैसे गिने जाते हैं?",
          "a": "शब्द रिक्त स्थान या नई पंक्ति से अलग अनुक्रम हैं।"
        }
      ]
    },
    "generator-qr": {
      "cat": "dev",
      "name": "QR कोड जनरेटर",
      "desc": "लिंक या टेक्स्ट से QR कोड बनाएँ और PNG डाउनलोड करें। ब्राउज़र में स्थानीय।",
      "steps": [
        "टेक्स्ट या URL दर्ज करें।",
        "QR पूर्वावलोकन जनरेट करें।",
        "PNG छवि डाउनलोड करें।"
      ],
      "faq": [
        {
          "q": "क्या QR सामग्री अपलोड होती है?",
          "a": "नहीं — कोड स्थानीय बनता है। हम सामग्री संग्रहीत नहीं करते।"
        }
      ]
    },
    "kalkulator-bitrate": {
      "cat": "media",
      "name": "फ़ाइल आकार और bitrate कैलकुलेटर",
      "desc": "दिए bitrate और अवधि पर ऑडियो/वीडियो फ़ाइल का अनुमान — या MB सीमा में bitrate।",
      "steps": [
        "bitrate से आकार या सीमा से bitrate चुनें।",
        "अवधि और मान दर्ज करें।",
        "MB / kbps में परिणाम पढ़ें।"
      ],
      "faq": [
        {
          "q": "क्या कंटेनर शामिल है?",
          "a": "कच्ची स्ट्रीम का अनुमान। कंटेनर और अतिरिक्त ट्रैक आमतौर पर कुछ प्रतिशत जोड़ते हैं।"
        }
      ]
    },
    "konwerter-kolorow": {
      "cat": "dev",
      "name": "HEX RGB HSL रंग परिवर्तक",
      "desc": "HEX, RGB और HSL के बीच रंग बदलें और पृष्ठभूमी पर WCAG कंट्रास्ट जाँचें।",
      "steps": [
        "किसी भी प्रारूप में रंग दर्ज करें।",
        "HEX/RGB/HSL समकक्ष देखें।",
        "पृष्ठभूमी पर कंट्रास्ट जाँचें।"
      ],
      "faq": [
        {
          "q": "AA / AAA का क्या अर्थ?",
          "a": "पाठ और पृष्ठभूमी कंट्रास्ट के लिए WCAG पहुँच स्तर।"
        }
      ]
    },
    "base64": {
      "cat": "dev",
      "name": "Base64 एन्कोड / डिकोड",
      "desc": "टेक्स्ट को Base64 में एन्कोड या डिकोड करें। स्थानीय, डेटा अपलोड नहीं।",
      "steps": [
        "टेक्स्ट या Base64 पेस्ट करें।",
        "एन्कोड या डिकोड चुनें।",
        "परिणाम कॉपी करें।"
      ],
      "faq": [
        {
          "q": "UTF-8 समर्थित?",
          "a": "हाँ — Unicode वर्ण समर्थित।"
        }
      ]
    },
    "unix-timestamp": {
      "cat": "dev",
      "name": "Unix timestamp ↔ तिथि",
      "desc": "Unix timestamp (सेकंड/ms) को तिथि में और वापस बदलें। लॉग और API के लिए।",
      "steps": [
        "timestamp पेस्ट करें या तिथि चुनें।",
        "ISO और स्थानीय परिणाम देखें।",
        "मान कॉपी करें।"
      ],
      "faq": [
        {
          "q": "सेकंड या मिलीसेकंड?",
          "a": "लंबाई से स्वचालित पहचान। इकाई बलपूर्वक भी सेट कर सकते हैं।"
        }
      ]
    },
    "generator-uuid": {
      "cat": "dev",
      "name": "UUID जनरेटर",
      "desc": "एक क्लिक से UUID v4 (यादृच्छिक) जनरेट करें। जरूरत हो तो कई एक साथ।",
      "steps": [
        "UUID की संख्या सेट करें।",
        "जनरेट पर क्लिक करें।",
        "सूची कॉपी करें।"
      ],
      "faq": [
        {
          "q": "कौन सा UUID संस्करण?",
          "a": "UUID v4 — यादृच्छिक, RFC 4122, ब्राउज़र में जनरेट।"
        }
      ]
    },
    "generator-hash": {
      "cat": "dev",
      "name": "SHA / MD5 hash",
      "desc": "टेक्स्ट का SHA-1, SHA-256, SHA-512 या MD5 गणना। Web Crypto से स्थानीय।",
      "steps": [
        "टेक्स्ट पेस्ट करें।",
        "एल्गोरिदम चुनें।",
        "hex hash कॉपी करें।"
      ],
      "faq": [
        {
          "q": "क्या MD5 सुरक्षित है?",
          "a": "MD5 पासवर्ड के लिए नहीं। सुरक्षा के लिए SHA-256+; MD5 केवल checksum।"
        }
      ]
    },
    "json-formatter": {
      "cat": "dev",
      "name": "JSON फ़ॉर्मेटर",
      "desc": "ब्राउज़र में JSON फ़ॉर्मेट और मिनify — सर्वर अपलोड नहीं।",
      "steps": [
        "JSON पेस्ट करें।",
        "फ़ॉर्मेट या मिनify क्लिक करें।",
        "परिणाम कॉपी करें।"
      ],
      "faq": [
        {
          "q": "क्या डेटा अपलोड होता है?",
          "a": "नहीं — प्रसंस्करण स्थानीय रूप से ब्राउज़र में।"
        }
      ]
    },
    "diff-tekstu": {
      "cat": "text",
      "name": "टेक्स्ट diff",
      "desc": "दो टेक्स्ट अंशों की पंक्ति-दर-पंक्ति तुलना और अंतर हाइलाइट।",
      "steps": [
        "टेक्स्ट A और B पेस्ट करें।",
        "हाइलाइट अंतर देखें।"
      ],
      "faq": [
        {
          "q": "क्या यह पूर्ण diff है?",
          "a": "पंक्ति-दर-पंक्ति तुलना — छोटे अंश और सूचियों के लिए।"
        }
      ]
    },
    "konwerter-wielkosci-liter": {
      "cat": "text",
      "name": "केस परिवर्तक",
      "desc": "टेक्स्ट को बड़े, छोटे, Title Case या sentence case में बदलें।",
      "steps": [
        "टेक्स्ट पेस्ट करें।",
        "मोड चुनें।",
        "परिणाम कॉपी करें।"
      ],
      "faq": []
    },
    "usun-duplikaty-linii": {
      "cat": "text",
      "name": "डुप्लिकेट पंक्तियाँ हटाएँ",
      "desc": "ईमेल सूची, SKU या टैग से दोहराई पंक्तियाँ हटाएँ।",
      "steps": [
        "सूची पेस्ट करें।",
        "विकल्प सेट करें।",
        "साफ़ सूची कॉपी करें।"
      ],
      "faq": []
    },
    "dekoder-jwt": {
      "cat": "dev",
      "name": "JWT डिकोडर",
      "desc": "हस्ताक्षर सत्यापन के बिना JWT header और payload पढ़ें।",
      "steps": [
        "token पेस्ट करें।",
        "header और payload जाँचें।"
      ],
      "faq": [
        {
          "q": "क्या हस्ताक्षर सत्यापित करता है?",
          "a": "नहीं — केवल token का Base64URL डिकोड।"
        }
      ]
    },
    "walidator-nip-pesel": {
      "cat": "dev",
      "name": "NIP / PESEL / REGON वैलिडेटर",
      "desc": "checksum नियमों से पोलिश कर और ID नंबर सत्यापित करें।",
      "steps": [
        "नंबर दर्ज करें।",
        "सत्यापन परिणाम देखें।"
      ],
      "faq": [
        {
          "q": "क्या GUS register से पूछता है?",
          "a": "नहीं — केवल checksum और लंबाई।"
        }
      ]
    },
    "kalkulator-kredytu": {
      "cat": "finance",
      "name": "ऋण कैलकुलेटर",
      "desc": "वAnnual भुगतान, कुल चुकौती और ब्याज लागत की गणना।",
      "steps": [
        "राशि, दर और अवधि दर्ज करें।",
        "मासिक भुगतान पढ़ें।"
      ],
      "faq": [
        {
          "q": "क्या बैंक शुल्क शामिल?",
          "a": "शुल्क और बीमा के बिना सरलीकृत सिमुलेशन।"
        }
      ]
    },
    "markdown-preview": {
      "cat": "text",
      "name": "Markdown पूर्वावलोकन",
      "desc": "Markdown लिखें और ब्राउज़र में लाइव HTML पूर्वावलोकन देखें।",
      "steps": [
        "Markdown टाइप करें।",
        "पूर्वावलोकन स्वचालित अपडेट।"
      ],
      "faq": []
    },
    "sila-hasla": {
      "cat": "dev",
      "name": "पासवर्ड शक्ति",
      "desc": "लंबाई, वर्ण विविधता और सामान्य पैटर्न से पासवर्ड शक्ति स्कोर।",
      "steps": [
        "पासवर्ड दर्ज करें।",
        "स्कोर और सुझाव देखें।"
      ],
      "faq": [
        {
          "q": "क्या पासवर्ड अपलोड होता है?",
          "a": "नहीं — स्कोरिंग स्थानीय रूप से ब्राउज़र में।"
        }
      ]
    },
    "konwerter-napisow": {
      "cat": "media",
      "name": "SRT / VTT उपशीर्षक परिवर्तक",
      "desc": "SRT और WebVTT प्रारूपों के बीच उपशीर्षक बदलें।",
      "steps": [
        "उपशीर्षक पेस्ट करें।",
        "दिशा या ऑटो चुनें।",
        "परिणाम कॉपी करें।"
      ],
      "faq": []
    },
    "generator-nazw-plikow": {
      "cat": "text",
      "name": "बैच फ़ाइल नाम बदलना",
      "desc": "{name}, {ext}, {index} पैटर्न से फ़ाइलों का बल्क नाम बदलें।",
      "steps": [
        "फ़ाइल सूची पेस्ट करें।",
        "पैटर्न सेट करें।",
        "नए नाम कॉपी करें।"
      ],
      "faq": []
    },
    "walidator-iban": {
      "cat": "dev",
      "name": "IBAN वैलिडेटर",
      "desc": "IBAN checksum (mod 97) और देश-विशिष्ट लंबाई सत्यापित करें।",
      "steps": [
        "IBAN पेस्ट करें।",
        "फ़ॉर्मेट आउटपुट और सत्यापन देखें।"
      ],
      "faq": [
        {
          "q": "क्या बैंक खाता सत्यापित?",
          "a": "नहीं — केवल प्रारूप और checksum।"
        }
      ]
    },
    "kalkulator-b2b": {
      "cat": "finance",
      "name": "B2B vs रोजगार कैलकुलेटर",
      "desc": "रोजगार शुद्ध वेतन vs B2B चालान आय (फ्लैट या रैखिक कर) की तुलना।",
      "steps": [
        "सकल वेतन और B2B राजस्व दर्ज करें।",
        "कर रूप चुनें।",
        "परिणाम तुलना करें।"
      ],
      "faq": [
        {
          "q": "क्या यह कर सलाह है?",
          "a": "नहीं — लेखाकार से चर्चा के लिए सरलीकृत सिमुलेशन।"
        }
      ]
    }
  },
  "id": {
    "przelicznik-walut": {
      "cat": "finance",
      "name": "Konverter mata uang",
      "desc": "Konversi mata uang online dengan kurs referensi ECB terkini. PLN, EUR, USD dan puluhan pasangan lain — tanpa pendaftaran.",
      "steps": [
        "Masukkan jumlah dan mata uang sumber.",
        "Pilih mata uang tujuan.",
        "Lihat hasil dan kurs harian."
      ],
      "faq": [
        {
          "q": "Dari mana kurs berasal?",
          "a": "Kurs referensi Bank Sentral Eropa via Frankfurter API, diperbarui pada hari kerja."
        },
        {
          "q": "Apakah kurs real-time?",
          "a": "Ini kurs referensi ECB, bukan kurs bank atau money changer."
        }
      ]
    },
    "kalkulator-dat": {
      "cat": "time",
      "name": "Kalkulator tanggal",
      "desc": "Hitung hari antara dua tanggal, hari kerja, dan hari dalam seminggu — berguna untuk kontrak dan tenggat.",
      "steps": [
        "Pilih tanggal mulai dan akhir.",
        "Lihat selisih dalam hari dan minggu.",
        "Opsional hanya hitung hari kerja."
      ],
      "faq": [
        {
          "q": "Apakah libur dikecualikan?",
          "a": "Secara default kami kecualikan Sabtu dan Minggu. Libur tergantung negara."
        }
      ]
    },
    "strefy-czasowe": {
      "cat": "time",
      "name": "Selisih zona waktu",
      "desc": "Bandingkan waktu lokal antarkota, lihat selisih jam, dan temukan lokasi di peta sederhana.",
      "steps": [
        "Pilih kota asal dan tujuan.",
        "Bandingkan waktu lokal saat ini.",
        "Lihat offset dan penanda peta."
      ],
      "faq": [
        {
          "q": "Apakah DST dipertimbangkan?",
          "a": "Ya — kami gunakan zona IANA (mis. Europe/Warsaw) yang menerapkan DST otomatis."
        }
      ]
    },
    "przelicznik-jednostek": {
      "cat": "units",
      "name": "Konverter satuan",
      "desc": "Konversi panjang, massa, suhu, dan volume: cm↔inci, kg↔lb, °C↔°F, dan lainnya.",
      "steps": [
        "Pilih kategori satuan.",
        "Masukkan nilai dan satuan.",
        "Dapatkan hasil segera."
      ],
      "faq": [
        {
          "q": "Apakah konversi akurat?",
          "a": "Ya — faktor SI standar. Suhu memakai rumus khusus, bukan perkalian sederhana."
        }
      ]
    },
    "kalkulator-vat": {
      "cat": "finance",
      "name": "Kalkulator PPN dan persen",
      "desc": "Tambah atau kurangi PPN (23%, 8%, 5%), hitung netto/bruto, dan persentase sederhana.",
      "steps": [
        "Masukkan jumlah netto atau bruto.",
        "Pilih tarif PPN atau persen kustom.",
        "Lihat rincian netto, PPN, dan bruto."
      ],
      "faq": [
        {
          "q": "Tarif PPN apa di Polandia?",
          "a": "Standar 23%, reduksi 8% dan 5%. Anda juga bisa masukkan tarif kustom."
        }
      ]
    },
    "kalkulator-wieku": {
      "cat": "time",
      "name": "Kalkulator usia dan hitung mundur",
      "desc": "Hitung usia tepat dalam tahun, bulan, dan hari — atau berapa hari tersisa hingga tanggal.",
      "steps": [
        "Masukkan tanggal lahir atau tanggal target.",
        "Lihat usia atau hitung mundur.",
        "Periksa juga ulang tahun berikutnya."
      ],
      "faq": [
        {
          "q": "Bagaimana usia dihitung?",
          "a": "Dari tanggal lahir hingga hari ini, dengan tahun, bulan, dan hari — bukan hanya tahun kalender."
        }
      ]
    },
    "generator-hasel": {
      "cat": "dev",
      "name": "Generator kata sandi",
      "desc": "Buat kata sandi kuat secara lokal di browser. Atur panjang dan set karakter — tidak ada yang dikirim ke server.",
      "steps": [
        "Atur panjang dan opsi karakter.",
        "Klik Buat.",
        "Salin dengan satu klik."
      ],
      "faq": [
        {
          "q": "Apakah kata sandi diunggah?",
          "a": "Tidak — pembuatan sepenuhnya di browser Anda."
        }
      ]
    },
    "licznik-znakow": {
      "cat": "text",
      "name": "Penghitung karakter dan kata",
      "desc": "Hitung karakter, kata, kalimat, dan paragraf — praktis untuk SEO, media sosial, dan batas formulir.",
      "steps": [
        "Tempel atau ketik teks.",
        "Pantau statistik langsung.",
        "Periksa panjang tanpa spasi."
      ],
      "faq": [
        {
          "q": "Bagaimana kata dihitung?",
          "a": "Kata adalah urutan yang dipisah spasi atau baris baru."
        }
      ]
    },
    "generator-qr": {
      "cat": "dev",
      "name": "Generator kode QR",
      "desc": "Buat kode QR dari tautan atau teks dan unduh sebagai PNG. Berjalan lokal di browser.",
      "steps": [
        "Masukkan teks atau URL.",
        "Buat pratinjau QR.",
        "Unduh gambar PNG."
      ],
      "faq": [
        {
          "q": "Apakah konten QR diunggah?",
          "a": "Tidak — kode dibuat lokal. Kami tidak menyimpan konten."
        }
      ]
    },
    "kalkulator-bitrate": {
      "cat": "media",
      "name": "Kalkulator ukuran file dan bitrate",
      "desc": "Perkirakan ukuran file audio/video pada bitrate dan durasi tertentu — atau bitrate yang muat dalam batas MB.",
      "steps": [
        "Pilih ukuran dari bitrate atau bitrate dari batas.",
        "Masukkan durasi dan nilai.",
        "Baca hasil dalam MB / kbps."
      ],
      "faq": [
        {
          "q": "Apakah termasuk container?",
          "a": "Memperkirakan stream mentah. Container dan trek tambahan biasanya menambah beberapa persen."
        }
      ]
    },
    "konwerter-kolorow": {
      "cat": "dev",
      "name": "Konverter warna HEX RGB HSL",
      "desc": "Konversi warna antara HEX, RGB, dan HSL serta periksa kontras WCAG terhadap latar.",
      "steps": [
        "Masukkan warna dalam format apa pun.",
        "Lihat setara HEX/RGB/HSL.",
        "Periksa kontras terhadap latar."
      ],
      "faq": [
        {
          "q": "Apa arti AA / AAA?",
          "a": "Tingkat aksesibilitas WCAG untuk kontras teks terhadap latar."
        }
      ]
    },
    "base64": {
      "cat": "dev",
      "name": "Base64 enkode / dekode",
      "desc": "Enkode teks ke Base64 atau dekode Base64. Lokal, tanpa mengunggah data.",
      "steps": [
        "Tempel teks atau Base64.",
        "Pilih Enkode atau Dekode.",
        "Salin hasil."
      ],
      "faq": [
        {
          "q": "Apakah mendukung UTF-8?",
          "a": "Ya — karakter Unicode didukung."
        }
      ]
    },
    "unix-timestamp": {
      "cat": "dev",
      "name": "Unix timestamp ↔ tanggal",
      "desc": "Konversi Unix timestamp (detik/ms) ke tanggal dan sebaliknya. Berguna untuk log dan API.",
      "steps": [
        "Tempel timestamp atau pilih tanggal.",
        "Lihat hasil ISO dan lokal.",
        "Salin nilai."
      ],
      "faq": [
        {
          "q": "Detik atau milidetik?",
          "a": "Kami deteksi otomatis dari panjang. Anda juga bisa paksa satuan."
        }
      ]
    },
    "generator-uuid": {
      "cat": "dev",
      "name": "Generator UUID",
      "desc": "Buat UUID v4 (acak) dengan satu klik. Buat banyak sekaligus jika perlu.",
      "steps": [
        "Atur jumlah UUID.",
        "Klik Buat.",
        "Salin daftar."
      ],
      "faq": [
        {
          "q": "Versi UUID apa?",
          "a": "UUID v4 — acak, RFC 4122, dibuat di browser."
        }
      ]
    },
    "generator-hash": {
      "cat": "dev",
      "name": "Hash SHA / MD5",
      "desc": "Hitung SHA-1, SHA-256, SHA-512, atau MD5 teks. Lokal via Web Crypto.",
      "steps": [
        "Tempel teks.",
        "Pilih algoritma.",
        "Salin hex hash."
      ],
      "faq": [
        {
          "q": "Apakah MD5 aman?",
          "a": "MD5 bukan untuk kata sandi. Gunakan SHA-256+ untuk keamanan; MD5 hanya untuk checksum."
        }
      ]
    },
    "json-formatter": {
      "cat": "dev",
      "name": "Formatter JSON",
      "desc": "Format dan minify JSON di browser — tanpa unggah ke server.",
      "steps": [
        "Tempel JSON.",
        "Klik Format atau Minify.",
        "Salin hasil."
      ],
      "faq": [
        {
          "q": "Apakah data diunggah?",
          "a": "Tidak — pemrosesan terjadi lokal di browser Anda."
        }
      ]
    },
    "diff-tekstu": {
      "cat": "text",
      "name": "Diff teks",
      "desc": "Bandingkan dua cuplikan teks baris demi baris dan sorot perbedaan.",
      "steps": [
        "Tempel teks A dan B.",
        "Tinjau perbedaan yang disorot."
      ],
      "faq": [
        {
          "q": "Apakah ini diff penuh?",
          "a": "Perbandingan baris demi baris — ideal untuk cuplikan pendek dan daftar."
        }
      ]
    },
    "konwerter-wielkosci-liter": {
      "cat": "text",
      "name": "Konverter huruf besar/kecil",
      "desc": "Konversi teks ke huruf besar, kecil, Title Case, atau sentence case.",
      "steps": [
        "Tempel teks.",
        "Pilih mode.",
        "Salin hasil."
      ],
      "faq": []
    },
    "usun-duplikaty-linii": {
      "cat": "text",
      "name": "Hapus baris duplikat",
      "desc": "Hapus baris berulang dari daftar email, SKU, atau tag.",
      "steps": [
        "Tempel daftar.",
        "Atur opsi.",
        "Salin daftar bersih."
      ],
      "faq": []
    },
    "dekoder-jwt": {
      "cat": "dev",
      "name": "Dekoder JWT",
      "desc": "Baca header dan payload JWT tanpa memverifikasi tanda tangan.",
      "steps": [
        "Tempel token.",
        "Periksa header dan payload."
      ],
      "faq": [
        {
          "q": "Apakah memverifikasi tanda tangan?",
          "a": "Tidak — hanya mendekode Base64URL token."
        }
      ]
    },
    "walidator-nip-pesel": {
      "cat": "dev",
      "name": "Validator NIP / PESEL / REGON",
      "desc": "Validasi nomor pajak dan ID Polandia menurut aturan checksum.",
      "steps": [
        "Masukkan nomor.",
        "Lihat hasil validasi."
      ],
      "faq": [
        {
          "q": "Apakah menanyakan register GUS?",
          "a": "Tidak — hanya checksum dan panjang."
        }
      ]
    },
    "kalkulator-kredytu": {
      "cat": "finance",
      "name": "Kalkulator pinjaman",
      "desc": "Hitung anuitas, total pelunasan, dan biaya bunga.",
      "steps": [
        "Masukkan jumlah, suku bunga, dan tenor.",
        "Baca cicilan bulanan."
      ],
      "faq": [
        {
          "q": "Apakah termasuk biaya bank?",
          "a": "Simulasi sederhana tanpa biaya atau asuransi."
        }
      ]
    },
    "markdown-preview": {
      "cat": "text",
      "name": "Pratinjau Markdown",
      "desc": "Tulis Markdown dan lihat pratinjau HTML langsung di browser.",
      "steps": [
        "Ketik Markdown.",
        "Pratinjau diperbarui otomatis."
      ],
      "faq": []
    },
    "sila-hasla": {
      "cat": "dev",
      "name": "Kekuatan kata sandi",
      "desc": "Nilai kekuatan kata sandi berdasarkan panjang, variasi karakter, dan pola umum.",
      "steps": [
        "Masukkan kata sandi.",
        "Lihat skor dan tips."
      ],
      "faq": [
        {
          "q": "Apakah kata sandi diunggah?",
          "a": "Tidak — penilaian terjadi lokal di browser Anda."
        }
      ]
    },
    "konwerter-napisow": {
      "cat": "media",
      "name": "Konverter subtitle SRT / VTT",
      "desc": "Konversi subtitle antara format SRT dan WebVTT.",
      "steps": [
        "Tempel subtitle.",
        "Pilih arah atau otomatis.",
        "Salin hasil."
      ],
      "faq": []
    },
    "generator-nazw-plikow": {
      "cat": "text",
      "name": "Penamaan file massal",
      "desc": "Ganti nama file secara massal dengan pola {name}, {ext}, {index}.",
      "steps": [
        "Tempel daftar file.",
        "Atur pola.",
        "Salin nama baru."
      ],
      "faq": []
    },
    "walidator-iban": {
      "cat": "dev",
      "name": "Validator IBAN",
      "desc": "Validasi checksum IBAN (mod 97) dan panjang spesifik negara.",
      "steps": [
        "Tempel IBAN.",
        "Lihat output terformat dan validasi."
      ],
      "faq": [
        {
          "q": "Apakah memverifikasi rekening bank?",
          "a": "Tidak — hanya format dan checksum."
        }
      ]
    },
    "kalkulator-b2b": {
      "cat": "finance",
      "name": "Kalkulator B2B vs pekerjaan",
      "desc": "Bandingkan gaji bersih pekerjaan dengan pendapatan faktur B2B (pajak flat atau linear).",
      "steps": [
        "Masukkan gaji kotor dan pendapatan B2B.",
        "Pilih bentuk pajak.",
        "Bandingkan hasil."
      ],
      "faq": [
        {
          "q": "Apakah ini saran pajak?",
          "a": "Tidak — simulasi sederhana untuk diskusi dengan akuntan."
        }
      ]
    }
  }
};
