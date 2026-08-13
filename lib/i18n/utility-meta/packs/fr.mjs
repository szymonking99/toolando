export const frTools = {
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
};
