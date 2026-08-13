import type { GuideArticle } from "../types"
import type { GuideSlug } from "../slugs"
import { guidesEn } from "../guides-en"

export const guidesFr: Record<GuideSlug, GuideArticle> = {
  "choose-audio-bitrate": {
    ...guidesEn["choose-audio-bitrate"],
    title: "Quel débit MP3 ou AAC choisir ?",
    description: "128 vs 192 vs 320 kbps — choix pratiques pour podcasts, musique et vidéo sans gaspiller d'espace disque.",
    sections: [
      {
        paragraphs: [
          "Le débit binaire est la quantité de données par seconde d'audio. Un débit plus élevé signifie généralement un meilleur son mais des fichiers plus volumineux. En MP3, l'écart entre 128 et 320 kbps se perçoit surtout sur de bons haut-parleurs et une musique dense.",
          "Pour la parole (podcasts, interviews), 96–128 kbps mono suffit souvent. Pour la musique au casque, 192–256 kbps stéréo est un bon compromis. 320 kbps est le plafond pratique du MP3 — aller plus haut aide rarement car le format reste avec perte.",
        ],
      },
      {
        title: "MP3, AAC et Opus — comparaison rapide",
        paragraphs: [
          "L'AAC (M4A) à débit égal surpasse généralement le MP3 — c'est pourquoi YouTube et Apple Music l'utilisent.",
          "Opus excelle en VoIP et streaming à faible débit (64–128 kbps).",
          "Pour les archives studio, conservez WAV ou FLAC — un débit avec perte ne restaure pas les données manquantes.",
        ],
      },
      {
        title: "Erreurs courantes",
        paragraphs: [
          "Augmenter le débit d'un MP3 de mauvaise qualité n'améliore pas le son — seule la taille du fichier augmente.",
          "Réencoder plusieurs fois la même piste (MP3 → AAC → MP3) dégrade la qualité à chaque passage.",
          "Pour les projets vidéo, extrayez l'audio de votre propre MP4 plutôt que de télécharger la musique d'autrui — le droit d'auteur compte.",
        ],
      },
    ],
  },
  "compress-images-without-quality-loss": {
    ...guidesEn["compress-images-without-quality-loss"],
    title: "Comment compresser des images JPG et PNG sans perte visible",
    description: "Quand utiliser le compresseur, quel niveau de qualité choisir, et compression vs conversion de format.",
    sections: [
      {
        paragraphs: [
          "Compresser une image réduit la taille sans changer le format — vous gardez JPG ou PNG, juste plus léger. Convertir JPG → WebP change le format et convient souvent mieux aux sites web, mais les flux d'impression peuvent exiger le JPG.",
          "Sur Toolando.tech, j'ai testé le compresseur d'images sur des photos produits 2000×2000 : à qualité 80 %, la taille chute de 40 à 60 % sans artefacts visibles à l'écran.",
        ],
      },
      {
        title: "Quand compresser vs convertir",
        paragraphs: [
          "Compressez quand le format convient (ex. boutique exige JPG) mais le fichier est trop lourd pour e-mail ou CMS.",
          "Convertissez en WebP/AVIF quand vous publiez sur votre propre site avec un repli <picture>.",
          "Ne resauvegardez jamais le même JPG plusieurs fois — chaque passage ajoute des artefacts.",
        ],
      },
      {
        title: "Scénarios typiques",
        paragraphs: [
          "Pièce jointe e-mail : JPG qualité ~75–85, largeur max 1600 px.",
          "E-commerce : WebP avec repli JPG ; vignettes 800 px.",
          "Captures d'interface avec texte : PNG ou WebP sans perte — évitez le JPG agressif.",
        ],
      },
    ],
  },
  "convert-video-to-gif-properly": {
    ...guidesEn["convert-video-to-gif-properly"],
    title: "Comment faire un bon GIF depuis une vidéo — résolution, FPS, durée",
    description: "MP4/MOV vers GIF sans fichier géant : limites pratiques et alternatives.",
    sections: [
      {
        paragraphs: [
          "Le GIF n'a pas de son et n'utilise pas H.264 — chaque image est une bitmap complète (souvent palette 256 couleurs). Un clip 1080p de 10 secondes en GIF peut peser plus que la vidéo originale. Objectif : court, petit, basse résolution.",
          "Avant MP4 → GIF, coupez le clip à 2–4 secondes dans un éditeur externe et utilisez 10–15 FPS au lieu de 30 — le GIF ne retrouvera pas la fluidité du film.",
        ],
      },
      {
        title: "Paramètres de départ",
        paragraphs: [
          "Largeur max 480–640 px pour mèmes et réactions.",
          "Durée max 5 s — au-delà, envisagez un MP4 en boucle.",
          "Fonds simples (fond vert) se compressent mieux que dégradés et bruit.",
        ],
      },
      {
        title: "Après conversion",
        paragraphs: [
          "Vérifiez la taille — un GIF >5 Mo a rarement du sens sur une page.",
          "Si le GIF est trop lourd, GIF → MP4 et un embed <video> règle souvent le problème.",
          "Toolando ne traite votre vidéo que le temps de la conversion — il n'héberge pas publiquement les GIF finis.",
        ],
      },
    ],
  },
  "docx-pdf-workflow": {
    ...guidesEn["docx-pdf-workflow"],
    title: "DOCX → PDF pour le bureau — quand et comment convertir",
    description: "Envoi de CV, factures et contrats : pourquoi le PDF bat le DOCX et comment éviter les polices cassées.",
    sections: [
      {
        paragraphs: [
          "Le DOCX sert à l'édition — idéal quand le destinataire a Word et doit modifier le texte. Le PDF sert à la lecture — mise en page, polices et marges identiques sur Windows, Mac et mobile.",
          "Avant d'envoyer un CV, une proposition ou un contrat, convertissez DOCX → PDF. Les destinataires ne modifieront pas le contenu par accident et vous évitez les polices de substitution qui cassent votre charte graphique.",
        ],
      },
      {
        title: "Quand NE PAS convertir PDF → DOCX",
        paragraphs: [
          "Factures scannées et contrats signés — conservez le PDF comme archive ; l'OCR est une étape séparée.",
          "Mises en page complexes multipages (catalogues, brochures) — la conversion DOCX casse souvent la pagination.",
          "Si vous n'avez besoin que d'un extrait de texte, copiez depuis le PDF plutôt que de convertir tout le fichier.",
        ],
      },
      {
        title: "Sécurité et confidentialité",
        paragraphs: [
          "Chez Toolando.tech, les fichiers DOCX et PDF servent uniquement à la conversion et sont supprimés à la fin du traitement.",
          "Pour les documents sensibles (pièces d'identité, coordonnées bancaires), utilisez HTTPS et ne laissez pas de copies sur des clouds publics sans chiffrement.",
        ],
      },
    ],
  },
  "extract-audio-from-video": {
    ...guidesEn["extract-audio-from-video"],
    title: "Extraire l'audio d'une vidéo — l'alternative légale",
    description: "Comment extraire légalement une piste audio de votre propre fichier vidéo (MP4, MOV, MKV).",
    sections: [
      {
        paragraphs: [
          "Parfois, vous avez un fichier vidéo et n'avez besoin que de l'audio. Toolando.tech extrait l'audio des MP4, MOV, AVI, MKV et l'enregistre en MP3, WAV, FLAC ou AAC.",
          "C'est légal sur votre propre fichier — contrairement au téléchargement de musique depuis YouTube ou TikTok, que Toolando.tech ne propose pas volontairement.",
        ],
      },
    ],
  },
  "extract-images-from-pdf-pages": {
    ...guidesEn["extract-images-from-pdf-pages"],
    title: "Comment extraire des images des pages PDF (JPG, PNG, WebP)",
    description: "Diapositives, catalogues et scans — quand exporter une page en image a du sens et quelle résolution.",
    sections: [
      {
        paragraphs: [
          "Le PDF est un conteneur — à l'intérieur peuvent se trouver vecteurs, polices et bitmaps intégrées. PDF → JPG rend chaque page en image raster. Ce n'est pas la même chose qu'extraire un logo intégré isolé (cela demande un éditeur PDF), mais pour diapositives, affiches et scans, ça fonctionne bien.",
          "Une présentation 16:9 exportée en PNG à 1920 px de large paraît nette à l'écran ; pour impression A4, visez ~2480×3508 px (300 DPI) si l'outil supporte haute résolution.",
        ],
      },
      {
        title: "JPG vs PNG vs WebP",
        paragraphs: [
          "Diapositive avec photo de fond → JPG ou WebP.",
          "Diapositive avec graphiques et texte → PNG (typographie plus nette).",
          "Vignette site web → WebP avec repli JPG après conversion ultérieure.",
        ],
      },
      {
        title: "PDF multipages",
        paragraphs: [
          "Exportez des pages isolées si vous n'avez besoin que des diapositives 5 et 12.",
          "Pour une galerie de toutes les pages — convertissez tout le fichier et triez par numéro dans les noms.",
          "Respectez le droit d'auteur — le PDF d'autrui n'est pas votre image à publier librement.",
        ],
      },
    ],
  },
  "flac-music-archive-guide": {
    ...guidesEn["flac-music-archive-guide"],
    title: "FLAC comme archive musicale — quand ça vaut le coup vs MP3",
    description: "FLAC sans perte vs MP3 320 kbps : sauvegardes, streaming domestique et lecteurs auto.",
    sections: [
      {
        paragraphs: [
          "Le FLAC (Free Lossless Audio Codec) est une compression sans perte — comme un ZIP pour l'audio. Une fois décodé, vous obtenez le même signal qu'en WAV, mais le fichier occupe environ la moitié de l'espace. Le MP3 supprime des données définitivement ; même 320 kbps n'est pas identique bit à bit à un rip CD.",
          "En pratique : si vous achetez de la musique sans perte ou rippez vos propres disques, le FLAC est un format d'archive sensé. Sur téléphone avec écouteurs Bluetooth, FLAC vs MP3 256 kbps est souvent inaudible — convertir en MP3 économise des gigaoctets.",
        ],
      },
      {
        title: "Workflow d'archive",
        paragraphs: [
          "1) Master en FLAC (ou WAV) sur NAS / sauvegarde cloud.",
          "2) Copies de travail MP3/AAC pour téléphone et voiture.",
          "3) Ne convertissez jamais MP3 → FLAC « pour la qualité » — cela ne fait qu'enfler le fichier sans récupérer de données.",
          "J'ai testé le convertisseur FLAC → MP3 sur Toolando.tech sur des albums de 40–60 min ; vérifiez les métadonnées (titre, artiste) dans votre lecteur après conversion.",
        ],
      },
      {
        title: "Compatibilité",
        paragraphs: [
          "FLAC : VLC, Foobar2000, la plupart des lecteurs Android ; support plus faible dans Apple Music natif (ALAC convient mieux à Apple).",
          "Les autoradios lisent souvent uniquement MP3/WMA/AAC depuis clé USB — FLAC → MP3 est nécessaire.",
          "Le streaming domestique (Plex, Jellyfin) gère le FLAC sans problème.",
        ],
      },
    ],
  },
  "font-woff2-for-websites": {
    ...guidesEn["font-woff2-for-websites"],
    title: "TTF, OTF, WOFF, WOFF2 — polices pour le web",
    description: "Convertir des polices pour @font-face, licences et impact sur la vitesse de page.",
    sections: [
      {
        paragraphs: [
          "Les navigateurs ont besoin de WOFF/WOFF2 en CSS (@font-face), pas de fichiers polices Windows bruts. WOFF2 offre le transfert le plus léger.",
          "Le convertisseur TTF/OTF → WOFF2 de Toolando prépare des fichiers prêts pour le web. Vérifiez la licence de la police avant l'intégration.",
        ],
      },
      {
        title: "Performance",
        paragraphs: [
          "Subsettez les polices aux glyphes utilisés dans des outils pro si les fichiers sont lourds.",
          "Préchargez le WOFF2 critique dans <head> pour le texte above-the-fold.",
          "Utilisez font-display: swap pour que le texte reste lisible pendant le chargement.",
        ],
      },
    ],
  },
  "gif-vs-mp4-for-animations": {
    ...guidesEn["gif-vs-mp4-for-animations"],
    title: "GIF vs MP4 — animations sur sites et réseaux sociaux",
    description: "Quand le GIF classique a du sens et quand un court MP4 ou WebM économise des mégaoctets.",
    sections: [
      {
        paragraphs: [
          "Le GIF se lit partout, mais c'est techniquement une séquence d'images sans compression vidéo moderne — une animation 720p de 5 secondes peut peser 10–20 Mo. La même en MP4 (H.264) tient souvent en 500 Ko–1 Mo à qualité acceptable.",
          "MP4 → GIF sur Toolando.tech a du sens pour de courtes boucles (loader, réaction Slack) quand la plateforme n'accepte pas la vidéo. Sur votre site, préférez <video autoplay loop muted playsinline> avec MP4 ou WebM.",
        ],
      },
      {
        title: "Quand GIF",
        paragraphs: [
          "Courte boucle (<5 s), petite résolution (≤480 px de large).",
          "Exigence de plateforme (certains forums n'acceptent que le GIF).",
          "Graphiques simples avec peu de couleurs — alors le GIF peut être vraiment léger.",
        ],
      },
      {
        title: "Quand MP4/WebM",
        paragraphs: [
          "Animation avec beaucoup de couleurs, dégradés ou extraits vidéo.",
          "Sites web — meilleur LCP et moins de bande passante.",
          "Instagram/TikTok exigent de la vidéo, pas du GIF.",
        ],
      },
      {
        title: "Conseils pour MP4 → GIF",
        paragraphs: [
          "Coupez la durée — chaque seconde représente des dizaines d'images.",
          "Réduisez la résolution avant conversion.",
          "Limitez la palette de couleurs si l'outil le propose (moins de banding).",
        ],
      },
    ],
  },
  "heic-iphone-jpg": {
    ...guidesEn["heic-iphone-jpg"],
    title: "HEIC depuis iPhone — comment ouvrir et convertir en JPG",
    description: "Pourquoi l'iPhone enregistre en HEIC, problèmes de compatibilité et comment convertir en JPG ou PNG.",
    sections: [
      {
        paragraphs: [
          "Apple enregistre les photos en HEIC par défaut — plus léger que le JPG à qualité équivalente. Problème : Windows sans extension, anciennes applications et de nombreux services ne prennent pas en charge le HEIC.",
          "Solution : convertissez HEIC → JPG ou HEIC → PNG sur Toolando.tech avant d'envoyer par e-mail, de téléverser ou d'imprimer. Vous pouvez aussi régler l'iPhone sur « Le plus compatible » (JPG) dans Réglages.",
        ],
      },
    ],
  },
  "json-csv-xml": {
    ...guidesEn["json-csv-xml"],
    title: "JSON, CSV et XML — convertir des données entre formats",
    description: "Quand utiliser JSON, CSV, TSV et XML et comment convertir entre eux sans perdre la structure.",
    sections: [
      {
        paragraphs: [
          "Le JSON est la norme pour les API REST et la configuration d'applications. Le CSV et le TSV servent à l'import Excel. Le XML est utilisé dans les anciens systèmes d'entreprise et le RSS.",
          "JSON → CSV ouvre une réponse d'API dans Excel. CSV → JSON prépare les données pour une API REST. Toolando.tech préserve la structure des données lors de la conversion.",
        ],
      },
    ],
  },
  "jwt-decode-safely-guide": {
    ...guidesEn["jwt-decode-safely-guide"],
    title: "JWT — comment lire un token sans vérifier la signature",
    description: "Header, payload et Base64URL — quand décoder localement et quoi ne pas faire.",
    sections: [
      {
        paragraphs: [
          "Un JSON Web Token comporte trois parties séparées par des points : header, payload et signature. Le décodeur JWT de Toolando affiche header et payload après décodage Base64URL — sans envoyer le token à un serveur (s'exécute dans le navigateur).",
          "Cela ne remplace pas la vérification de signature côté backend. Le décodage sert au débogage (ex. `exp` expiré, mauvais `aud`) — ne traitez jamais le payload seul comme preuve d'identité.",
        ],
      },
      {
        title: "Pratiques sûres",
        paragraphs: [
          "Ne collez pas de tokens de production avec données personnelles sur des sites publics — utilisez un décodeur local ou un environnement de test.",
          "Vérifiez `exp` et `nbf` avant de déboguer des erreurs 401.",
          "Après analyse, effacez le token de l'historique du presse-papiers et des logs.",
        ],
      },
    ],
  },
  "lossy-vs-lossless": {
    ...guidesEn["lossy-vs-lossless"],
    title: "Compression avec ou sans perte — guide simple",
    description: "Comment diffèrent la compression avec et sans perte et comment éviter la dégradation lors des conversions.",
    sections: [
      {
        paragraphs: [
          "Les formats avec perte (MP3, JPG, AAC, H.264) suppriment des données pour réduire la taille. Les formats sans perte (FLAC, PNG, WAV, ZIP) conservent toutes les données mais produisent des fichiers plus volumineux.",
          "Règle : ne convertissez avec perte → sans perte que si nécessaire — vous ne récupérerez pas la qualité perdue. Convertissez avec perte → avec perte une seule fois — chaque reconversion dégrade le résultat.",
        ],
      },
    ],
  },
  "markdown-to-pdf-workflow": {
    ...guidesEn["markdown-to-pdf-workflow"],
    title: "Markdown vers PDF — docs, README et notes",
    description: "MD → HTML → PDF/DOCX : quand l'export de l'éditeur suffit et quand un convertisseur en ligne aide.",
    sections: [
      {
        paragraphs: [
          "Markdown sert à écrire — titres, listes, code — sans mise en page WYSIWYG. Les développeurs gardent README.md dans les dépôts ; puis il faut un PDF pour un client ou l'impression. Chemin typique : MD → HTML (rendu) → PDF via Imprimer en PDF du navigateur, ou MD → DOCX → PDF pour de meilleurs en-têtes de page.",
          "J'ai testé les convertisseurs MD → HTML et DOCX → PDF sur Toolando.tech sur des fichiers de 20–40 Ko ; caractères accentués et blocs de code passent bien si le MD est en UTF-8.",
        ],
      },
      {
        title: "Quel chemin quand",
        paragraphs: [
          "Aperçu rapide : MD → HTML, ouvrir dans le navigateur.",
          "Document formel avec numéros de page : MD → DOCX (ou éditeur), style entreprise, puis DOCX → PDF.",
          "Notes simples sans style : MD → TXT suffit.",
        ],
      },
      {
        title: "Bonnes habitudes MD",
        paragraphs: [
          "Un fichier = un sujet ; divisez les longs documents en chapitres.",
          "Liez les images en relatif — vérifiez les chemins après conversion.",
          "Les tableaux MD peuvent casser en PDF — envisagez CSV ou DOCX pour les données tabulaires.",
        ],
      },
    ],
  },
  "merge-pdf-online-guide": {
    ...guidesEn["merge-pdf-online-guide"],
    title: "Fusionner plusieurs PDF en un — quand cela a du sens",
    description: "Combiner factures, scans et pièces jointes — ordre des pages, qualité et confidentialité.",
    sections: [
      {
        paragraphs: [
          "Fusionner des PDF est du quotidien au bureau : facture + contrat + scan de pièce d'identité en une pièce jointe. Toolando.tech fusionne les fichiers dans l'ordre que vous sélectionnez.",
          "Le PDF conserve le texte vectoriel et les scans bitmap — la fusion ne réduit pas la résolution des scans si les sources n'étaient pas surcompressées.",
        ],
      },
      {
        title: "Avant l'envoi",
        paragraphs: [
          "Ordonnez les fichiers logiquement (couverture → contenu → pièces jointes).",
          "Supprimez les pages en double des scans.",
          "Si le destinataire est sur mobile, visez ≤10–15 Mo ou partagez via un lien cloud.",
        ],
      },
      {
        title: "Confidentialité",
        paragraphs: [
          "Traitez documents professionnels et personnels comme confidentiels. Toolando supprime les fichiers après traitement ; respectez tout de même la politique de votre entreprise pour les données sensibles.",
        ],
      },
    ],
  },
  "mortgage-loan-calculator-guide": {
    ...guidesEn["mortgage-loan-calculator-guide"],
    title: "Calculateur de prêt — mensualité, intérêts et points de vigilance",
    description: "Annuité, frais et assurances — comment lire le résultat d'un calculateur hypothécaire.",
    sections: [
      {
        paragraphs: [
          "Le calculateur de prêt sur Toolando calcule une mensualité constante : un montant fixe mensuel de capital plus intérêts. Un terme plus long abaisse la mensualité — mais augmente le coût total des intérêts.",
          "Considérez cela comme point de départ pour un échange avec la banque, pas comme une offre. La mensualité réelle dépend du taux de référence, de la marge, des frais, de l'assurance vie et de l'apport.",
        ],
      },
      {
        title: "Ce qu'il faut ajouter au-delà du calculateur",
        paragraphs: [
          "Frais de dossier et frais de remboursement anticipé (si prévus au contrat).",
          "Assurance habitation et assurance vie — souvent exigées par la banque.",
          "Frais de notaire et droits de mutation lors de l'achat d'un logement.",
        ],
      },
    ],
  },
  "mp3-vs-wav": {
    ...guidesEn["mp3-vs-wav"],
    title: "MP3 vs WAV — quand convertir l'audio ?",
    description: "MP3 vs WAV comparés : compression avec ou sans perte, taille de fichier, édition en DAW et quel format choisir.",
    sections: [
      {
        paragraphs: [
          "Le MP3 utilise une compression avec perte — les fichiers sont petits, mais une partie des données audio est perdue à jamais. Le WAV conserve une qualité intégrale (sans perte ou non compressé), mais les fichiers peuvent être 10× plus volumineux que le MP3.",
          "En pratique : écouter sur votre téléphone → le MP3 suffit. Monter un podcast dans Audacity ou mixer dans FL Studio → travaillez en WAV ou FLAC.",
        ],
      },
      {
        title: "Quand convertir MP3 → WAV",
        paragraphs: [
          "Lorsqu'une plateforme ou une application exige un format sans perte pour une édition ultérieure.",
          "Lorsque vous prévoyez plusieurs découpes, effets et mastering — chaque opération sur du MP3 dégrade la qualité.",
          "Note : MP3 → WAV ne restaure pas la qualité perdue, mais évite une dégradation supplémentaire pendant l'édition.",
        ],
      },
      {
        title: "Quand convertir WAV → MP3",
        paragraphs: [
          "Envoyer un enregistrement par e-mail ou messagerie — fichier plus léger = transfert plus rapide.",
          "Publier un podcast ou de la musique pour l'écoute, pas pour l'édition.",
          "Économiser de l'espace disque dans une grande bibliothèque audio.",
        ],
      },
    ],
  },
  "online-file-security": {
    ...guidesEn["online-file-security"],
    title: "Sécurité des fichiers dans les outils en ligne",
    description: "Comment Toolando.tech traite les fichiers, quand les outils s'exécutent localement dans le navigateur et détails sur la confidentialité.",
    sections: [
      {
        paragraphs: [
          "Envoyer des fichiers à des outils en ligne soulève des questions légitimes. Chez Toolando.tech, les fichiers servent uniquement à l'opération demandée — conversion, compression ou aperçu.",
          "Une fois le traitement terminé, les fichiers sont supprimés du serveur. Certains outils (ouvreur universel) s'exécutent entièrement dans votre navigateur — le fichier ne quitte jamais votre ordinateur. La connexion est chiffrée (HTTPS).",
        ],
      },
    ],
  },
  "pdf-to-jpg": {
    ...guidesEn["pdf-to-jpg"],
    title: "Comment convertir un PDF en JPG pour l'impression et le web",
    description: "Quand exporter des pages PDF en JPG, quelle résolution utiliser et quand le PNG est préférable.",
    sections: [
      {
        paragraphs: [
          "Le PDF préserve la mise en page. Parfois, vous avez besoin de pages individuelles sous forme d'images — pour un site web, PowerPoint ou l'impression d'une seule page.",
          "Le convertisseur PDF → JPG de Toolando.tech rend chaque page en JPG séparé. Les fichiers ne sont jamais stockés — supprimés immédiatement après la conversion.",
        ],
      },
      {
        title: "JPG ou PNG depuis un PDF ?",
        paragraphs: [
          "JPG — fichiers plus légers, idéal pour les photos et documents sans transparence.",
          "PNG — sans perte avec transparence ; mieux pour les graphiques avec texte et contours nets.",
        ],
      },
    ],
  },
  "pdf-vs-docx": {
    ...guidesEn["pdf-vs-docx"],
    title: "PDF vs DOCX — quel format et quand ?",
    description: "Différences PDF vs DOCX : édition, impression, archivage et quand convertir dans quel sens.",
    sections: [
      {
        paragraphs: [
          "Le DOCX (Word) sert à éditer du texte — contenu, styles, titres. Le PDF fige la mise en page — identique sur chaque appareil, idéal pour factures, contrats et CV.",
          "Convertissez DOCX → PDF avant d'envoyer « en lecture seule ». Convertissez PDF → DOCX uniquement si vous devez modifier le texte — la mise en page peut se casser. Pour l'archivage et l'impression, choisissez toujours le PDF.",
        ],
      },
    ],
  },
  "png-vs-jpg-photos-and-graphics": {
    ...guidesEn["png-vs-jpg-photos-and-graphics"],
    title: "PNG vs JPG — photos vs graphiques avec texte",
    description: "Choix pratiques : photos, captures d'écran, logos avec transparence et impression.",
    sections: [
      {
        paragraphs: [
          "PNG et JPG sont les deux formats les plus confondus. Le JPG compresse bien les photos — ciels, peau, paysages — mais abîme les contours nets et le texte. Le PNG conserve chaque pixel exactement, y compris la transparence (alpha), mais les fichiers sont souvent 5 à 10× plus lourds que le JPG à même résolution.",
          "Règle que j'utilise dans les tests Toolando.tech : photo galerie ou réseaux sociaux → JPG (ou WebP avec repli JPG). Icône, logo, schéma, capture d'interface → PNG. Mix photo + texte (ex. couverture d'offre) → souvent PNG ou WebP sans perte.",
        ],
      },
      {
        title: "Quand choisir JPG",
        paragraphs: [
          "Photos appareil ou téléphone sans transparence.",
          "Vignettes produits quand le fond est uni et que vous n'avez pas besoin d'alpha.",
          "Pièces jointes e-mail — JPG qualité 80–85 est souvent un bon compromis.",
          "Impression photo maison — beaucoup de services acceptent JPG haute résolution (équivalent 300 DPI).",
        ],
      },
      {
        title: "Quand choisir PNG",
        paragraphs: [
          "Logo site web sur fond transparent — le JPG remplit toujours en blanc ou noir.",
          "Captures d'interface, graphiques, code — le texte reste net.",
          "Graphiques plats avec peu de couleurs (infographies, icônes d'app).",
          "Si vous prévoyez une édition en couches — PNG sans perte n'ajoute pas d'artefacts à chaque sauvegarde (contrairement au JPG répété).",
        ],
      },
      {
        title: "Erreurs courantes",
        paragraphs: [
          "Enregistrer un logo en JPG — crénelage sur les bords et pas de transparence.",
          "Enregistrer une photo 4000×3000 en PNG « pour la qualité » — 15 Mo inutilement au lieu de 2 Mo en JPG.",
          "Boucles PNG → JPG → PNG — chaque passage JPG perd de la qualité ; gardez le master en PNG.",
        ],
      },
    ],
  },
  "podcast-export-mp3-aac-settings": {
    ...guidesEn["podcast-export-mp3-aac-settings"],
    title: "Export podcast — MP3 ou AAC et quel débit",
    description: "Réglages après enregistrement dans Audacity, Reaper ou sur téléphone : mono, 44,1 kHz, compression raisonnable.",
    sections: [
      {
        paragraphs: [
          "Les podcasts, c'est surtout de la parole — pas besoin de stéréo 320 kbps comme pour la musique studio. La plupart des plateformes (Spotify, Apple Podcasts, hébergeurs RSS) réencodent les téléversements. Envoyez quand même un master correct : mono ou stéréo, 44,1 ou 48 kHz, MP3 128–192 kbps ou AAC/M4A 128 kbps.",
          "Enregistré en WAV ou FLAC ? L'export final est presque toujours MP3 ou AAC — j'ai testé WAV → MP3 sur Toolando.tech sur des épisodes de 30–60 min ; ~30 Mo WAV descendent à ~28 Mo en 128 kbps stéréo (mono parole peut être ~15 Mo).",
        ],
      },
      {
        title: "Réglages recommandés",
        paragraphs: [
          "Solo / interview une voix : mono, MP3 96–128 kbps.",
          "Deux voix sur pistes séparées : stéréo 128 kbps.",
          "Intro/outro musique en stéréo, reste en mono — exportez tout en stéréo 128 kbps pour simplifier.",
          "Évitez 64 kbps — sifflantes agressives et bruit de fond sur micros bon marché.",
        ],
      },
      {
        title: "MP3 vs AAC (M4A)",
        paragraphs: [
          "L'AAC à débit égal bat généralement le MP3 — Apple préfère le M4A.",
          "Le MP3 a la compatibilité la plus large sur anciens lecteurs et voitures.",
          "Ne téléversez pas de WAV brut sur un hébergeur podcast — téléversement interminable.",
        ],
      },
    ],
  },
  "prepare-images-for-web": {
    ...guidesEn["prepare-images-for-web"],
    title: "Comment préparer des images pour le web (JPG, WebP, AVIF)",
    description: "Résolution, compression et format — accélérez votre site sans perte de qualité visible.",
    sections: [
      {
        paragraphs: [
          "Les photos d'appareil énormes (4000×3000 px) ralentissent chaque page. Avant de téléverser sur un blog ou une boutique, redimensionnez à la taille d'affichage réelle — par ex. 1600 px de large pour une bannière hero.",
          "Le JPG reste le choix universel sûr. WebP et AVIF produisent des fichiers plus légers à qualité visuelle équivalente — utilisez-les dans les stacks modernes avec un repli <picture> pour les navigateurs anciens.",
        ],
      },
      {
        title: "Quand PNG plutôt que JPG",
        paragraphs: [
          "Logos, icônes et captures d'interface — PNG ou WebP sans perte conservent des contours nets.",
          "Les photos produits sur fond blanc se compressent souvent bien en JPG qualité 80–85.",
          "Évitez de resauvegarder la même bannière en JPG à répétition — chaque passage ajoute des artefacts.",
        ],
      },
      {
        title: "Checklist avant publication",
        paragraphs: [
          "1) Redimensionner à la largeur cible en px. 2) Choisir le format (JPG/WebP/AVIF). 3) Vérifier le poids (<200 Ko vignettes, <500 Ko grandes images de blog). 4) Lancer PageSpeed Insights et comparer le LCP avant/après.",
        ],
      },
    ],
  },
  "remove-exif-privacy-guide": {
    ...guidesEn["remove-exif-privacy-guide"],
    title: "EXIF dans les photos — quoi supprimer avant publication",
    description: "GPS, modèle d'appareil et dates dans les métadonnées EXIF — risques de confidentialité et suppression.",
    sections: [
      {
        paragraphs: [
          "L'EXIF regroupe des métadonnées cachées dans JPEG, PNG ou HEIC : position GPS, modèle de téléphone, orientation, parfois une miniature d'aperçu. Les réseaux sociaux les suppriment souvent, mais votre site, newsletter ou pièce jointe e-mail pas toujours.",
          "Avant de publier des photos d'enfants, d'intérieurs ou de documents sur un bureau, supprimez l'EXIF avec un outil dédié — sur Toolando, le traitement se fait sur le serveur et le fichier n'est pas envoyé vers un cloud IA externe.",
        ],
      },
      {
        title: "Ce qui reste après suppression de l'EXIF",
        paragraphs: [
          "Les pixels de l'image restent inchangés. Seules les métadonnées sont supprimées — la résolution n'est pas affectée.",
          "Après nettoyage EXIF, vous pouvez encore compresser le fichier ou ajouter un filigrane avant de publier un portfolio.",
        ],
      },
    ],
  },
  "split-pdf-pages-guide": {
    ...guidesEn["split-pdf-pages-guide"],
    title: "Comment diviser un PDF en pages séparées en ligne",
    description: "Quand scinder des PDF, comment choisir des plages de pages et quoi faire avec le ZIP résultant.",
    sections: [
      {
        paragraphs: [
          "Scinder un PDF est courant après le scan d'un contrat ou d'une facture multipages — vous devez parfois envoyer une seule page par e-mail ou joindre un fragment ailleurs.",
          "Sur Toolando.tech, vous pouvez exporter chaque page séparément ou indiquer une plage (ex. 1-3,5). Le résultat est un ZIP de fichiers PDF, chacun conservant la qualité vectorielle ou de scan d'origine.",
        ],
      },
      {
        title: "Quand scinder vs fusionner",
        paragraphs: [
          "Scinder — quand le destinataire n'a besoin que d'un fragment (page de signature, pièce jointe, couverture).",
          "Fusionner — quand vous assemblez des scans en un seul fichier pour archive ou envoi.",
          "Après scission, pensez à numéroter les pages ou compresser les gros scans.",
        ],
      },
    ],
  },
  "spreadsheet-csv-json-guide": {
    ...guidesEn["spreadsheet-csv-json-guide"],
    title: "CSV, JSON et Excel — faire circuler les données entre feuilles et API",
    description: "Quand choisir CSV vs JSON, et comment éviter décimales et encodage cassés.",
    sections: [
      {
        paragraphs: [
          "Le CSV est du texte brut — s'ouvre dans Excel, Google Sheets et outils BI. Le JSON gère les structures imbriquées (API, configs). Le XLSX ajoute types de cellules et feuilles multiples.",
          "Flux typique : export API en JSON → JSON vers CSV → analyse dans Excel. Inverse : liste clients CSV → JSON → API REST.",
        ],
      },
      {
        title: "Encodage et Excel",
        paragraphs: [
          "Utilisez CSV UTF-8 pour les caractères non ASCII. Si Excel affiche mal le texte, importez via Données → À partir d'un fichier texte et choisissez UTF-8.",
          "Les séparateurs CSV varient selon la locale (virgule vs point-virgule). Le TSV (tabulation) est plus sûr quand les descriptions contiennent des virgules.",
        ],
      },
      {
        title: "Valider après conversion",
        paragraphs: [
          "Comparez le nombre de lignes avant et après.",
          "Pour le JSON, vérifiez clés et types — une guillemet manquante casse tout le fichier.",
        ],
      },
    ],
  },
  "svg-vs-png-logos-and-icons": {
    ...guidesEn["svg-vs-png-logos-and-icons"],
    title: "SVG vs PNG — logos et icônes pour le web",
    description: "Vecteur vs raster : quand livrer du SVG et quand un PNG @2x suffit.",
    sections: [
      {
        paragraphs: [
          "Le SVG est du graphique vectoriel décrit mathématiquement — s'adapte à tout écran sans pixellisation. Le PNG est une bitmap à résolution fixe ; sur écran retina, il faut souvent une version 2×. Pour les sites web, logos et icônes simples devraient presque toujours être en SVG (ou police d'icônes), sauf si le fichier intègre une photo.",
          "Le convertisseur SVG → PNG de Toolando.tech aide quand une imprimerie veut du PNG 300 DPI ou un système refuse le SVG.",
        ],
      },
      {
        title: "Avantages du SVG",
        paragraphs: [
          "Un seul fichier pour mobile et desktop — moins de CSS, pas de srcset.",
          "Changement de couleur facile via CSS fill sur les icônes simples.",
          "Meilleurs scores Lighthouse que de lourdes bannières PNG.",
        ],
      },
      {
        title: "Quand PNG plutôt que SVG",
        paragraphs: [
          "Logo avec dégradés, ombres ou effets mal exportés depuis le vecteur.",
          "Vignettes Open Graph / aperçu social — les plateformes rasterisent de toute façon.",
          "Applications desktop sans moteur SVG.",
          "Export PNG @2x (ex. 512×512) comme repli dans <img> à côté du SVG inline.",
        ],
      },
    ],
  },
  "tiff-and-png-for-document-scans": {
    ...guidesEn["tiff-and-png-for-document-scans"],
    title: "Scans de documents — TIFF, PNG ou JPG",
    description: "Factures et contrats : stockage sans perte, multipages et quand le PDF suffit.",
    sections: [
      {
        paragraphs: [
          "Scanner une facture ou un contrat diffère d'une photo de vacances. Texte et tampons exigent des contours nets — un JPG agressif floute les lettres. TIFF (souvent LZW sans perte) et PNG sont plus sûrs pour l'archive. Pour l'envoi et l'OCR, on finit souvent en PDF ou JPG qualité modérée.",
          "Un TIFF multipages peut être un seul fichier avec plusieurs calques — tous les visionneuses ne le gèrent pas ; pour bureaux et clients, un PDF multipages est plus clair (fusionnez des PDF sur Toolando.tech).",
        ],
      },
      {
        title: "Workflow recommandé",
        paragraphs: [
          "Scanner → PNG ou TIFF par page (300 DPI pour impression, 150 DPI pour aperçu).",
          "Corriger rotation/recadrage dans un éditeur.",
          "Fusionner les pages en un PDF pour l'envoi.",
          "JPG qualité 90 optionnel seulement si le destinataire n'accepte pas le PDF.",
        ],
      },
      {
        title: "Ce qu'il faut éviter",
        paragraphs: [
          "JPG qualité 60 sur une facture — les montants peuvent devenir illisibles.",
          "Cycles répétés TIFF → JPG → TIFF.",
          "Scans couleur à 600 DPI « au cas où » — gigaoctets sans bénéfice pour du texte A4.",
        ],
      },
    ],
  },
  "toolando-editorial-standards": {
    ...guidesEn["toolando-editorial-standards"],
    title: "Standards éditoriaux Toolando.tech — comment les guides sont rédigés",
    description: "Comment sont produits articles, tests de convertisseurs et encyclopédie des formats — transparence pour lecteurs et relecteurs.",
    sections: [
      {
        paragraphs: [
          "Toolando.tech est développé seul par Szymon Badyl (Badyl-Tech). Les guides ne sont ni générés en masse ni copiés de Wikipédia — ils reposent sur de vrais tests de conversion.",
          "Chaque article a des dates de publication et de mise à jour. Quand les exigences des plateformes ou les bibliothèques changent, je révise le texte.",
        ],
      },
      {
        title: "Ce que je teste",
        paragraphs: [
          "Convertisseurs audio/vidéo : durée, taille de sortie, lecture dans VLC et sur téléphone.",
          "Images : comparaison visuelle avant/après, transparence PNG, taille WebP vs JPG.",
          "Documents : mise en page après PDF ↔ DOCX, encodage dans CSV/JSON.",
        ],
      },
      {
        title: "Ce que je ne promets pas",
        paragraphs: [
          "Pas de « 100 % qualité » en conversion avec perte → avec perte.",
          "Pas de téléchargement de vidéos YouTube/TikTok d'autrui — uniquement des opérations légales sur vos fichiers.",
          "Des annonces Google peuvent apparaître, mais le contenu éditorial est rédigé indépendamment des annonceurs.",
        ],
      },
    ],
  },
  "video-compress-before-sharing": {
    ...guidesEn["video-compress-before-sharing"],
    title: "Réduire une vidéo avant e-mail ou WhatsApp",
    description: "MP4, résolution, débit — limites pratiques de taille et conversion de conteneur.",
    sections: [
      {
        paragraphs: [
          "Les enregistrements téléphone en MOV/MKV peuvent peser des centaines de Mo. Beaucoup de boîtes mail bloquent les pièces jointes >25 Mo. Solution : convertir en MP4 (H.264 + AAC) et baisser la résolution si besoin.",
          "Le 720p suffit souvent pour un aperçu sur téléphone ; gardez le 1080p pour la télévision.",
        ],
      },
      {
        title: "Étapes avant l'envoi",
        paragraphs: [
          "1) Convertir MOV/MKV → MP4. 2) Vérifier la taille. 3) Si encore trop lourd — couper intro/outro inutiles dans un éditeur vidéo. 4) Utiliser un lien cloud si >25 Mo.",
        ],
      },
    ],
  },
  "video-social-media": {
    ...guidesEn["video-social-media"],
    title: "Vidéo pour les réseaux sociaux — MP4, résolution et débit",
    description: "Comment préparer une vidéo pour Instagram, TikTok, YouTube : format MP4, H.264, résolution 1080p.",
    sections: [
      {
        paragraphs: [
          "Instagram, TikTok, YouTube et Facebook préfèrent le MP4 avec vidéo H.264 et audio AAC. Convertissez MOV, AVI ou MKV en MP4 avant publication pour éviter les erreurs de téléversement.",
          "Le 1080p (1920×1080) suffit pour la plupart des plateformes. Un débit plus élevé = meilleure qualité mais fichier plus lourd. Consultez l'encyclopédie des formats pour les détails MP4, WebM et MOV.",
        ],
      },
    ],
  },
  "webp-avif-images": {
    ...guidesEn["webp-avif-images"],
    title: "WebP et AVIF — formats d'image modernes pour les sites web",
    description: "WebP et AVIF vs JPG/PNG : compression, prise en charge par les navigateurs et optimisation PageSpeed.",
    sections: [
      {
        paragraphs: [
          "Le JPG et le PNG dominent le web depuis des années, mais le WebP produit des fichiers 25 à 35 % plus petits que le JPG à qualité visuelle équivalente. L'AVIF va plus loin — les fichiers peuvent faire la moitié de la taille du WebP.",
          "Tous les navigateurs modernes prennent en charge le WebP. L'AVIF est un peu moins bien supporté sur les anciennes versions de Safari.",
        ],
      },
      {
        title: "Stratégie de déploiement",
        paragraphs: [
          "Convertissez JPG → WebP pour les photos produits et bannières — accélère le chargement des pages.",
          "Conservez le JPG comme solution de repli pour les navigateurs anciens (balise HTML <picture>).",
          "Pour les logos avec transparence : PNG → WebP plutôt que JPG.",
        ],
      },
    ],
  },
  "when-not-to-convert-files": {
    ...guidesEn["when-not-to-convert-files"],
    title: "Quand NE PAS convertir un fichier — 7 situations qui dégradent la qualité",
    description: "Évitez les conversions inutiles : gardez les originaux, archives sans perte et sauvegarde avant d'expérimenter.",
    sections: [
      {
        paragraphs: [
          "Les convertisseurs en ligne sont pratiques, mais toute opération n'est pas utile. Parfois, gardez l'original ou utilisez des archives sans perte (ZIP, FLAC).",
          "Règle : ne passez pas avec perte → sans perte en espérant un miracle — MP3 → WAV ne restaure pas les données perdues.",
        ],
      },
      {
        title: "Laisser tel quel",
        paragraphs: [
          "Vous avez déjà un PNG avec transparence — ne le passez pas en JPG sans raison.",
          "Projets graphiques — gardez les sources en couches (PSD, SVG) ; exportez JPG seulement à la fin.",
          "WAV/FLAC studio — ne compressez pas en MP3 avant le mix final.",
          "PDF signé numériquement — la conversion peut invalider la signature.",
        ],
      },
      {
        title: "Avant de cliquer sur Convertir",
        paragraphs: [
          "Conservez une copie de l'original.",
          "Vérifiez si la plateforme cible accepte déjà votre format source.",
          "Lisez les comparaisons de formats dans l'encyclopédie Toolando pour éviter une étape inutile.",
        ],
      },
    ],
  },
  "zip-7z-rar-when-to-use": {
    ...guidesEn["zip-7z-rar-when-to-use"],
    title: "ZIP, 7z et RAR — quelle archive envoyer",
    description: "Taille, compatibilité et chiffrement — quand le ZIP suffit et quand 7z ou RAR aident.",
    sections: [
      {
        paragraphs: [
          "Une archive regroupe plusieurs fichiers en un seul — pratique pour e-mail, cloud et sauvegarde de dossiers. Le ZIP est le standard universel : ouvert sur Windows, macOS et Linux sans logiciel supplémentaire. Le 7z produit généralement un résultat plus petit, mais le destinataire peut avoir besoin de 7-Zip. Le RAR apparaît dans d'anciens flux ; créer du RAR en ligne a des limites de licence — on convertit plus souvent RAR → ZIP que l'inverse.",
        ],
      },
      {
        title: "Quand ZIP",
        paragraphs: [
          "Envoi à clients ou administrations — risque minimal de « ça ne s'ouvre pas ».",
          "Archivage de code, documents bureau, lot de photos JPG.",
          "Systèmes qui n'acceptent que les téléversements .zip.",
        ],
      },
      {
        title: "Quand 7z",
        paragraphs: [
          "Gros dossiers de jeux, projets vidéo, sauvegarde avant disque externe — fichier plus petit = téléversement plus rapide.",
          "Quand le destinataire est technique et a 7-Zip.",
          "La conversion ZIP → 7z n'a de sens qu'une fois — ne recompressez pas les mêmes données en boucle.",
        ],
      },
      {
        title: "Sécurité",
        paragraphs: [
          "Un mot de passe sur l'archive empêche l'ouverture accidentelle, mais ne remplace pas le chiffrement de bout en bout pour documents sensibles.",
          "Ne décompressez pas d'archives de sources inconnues sans analyse antivirus.",
          "Toolando ne traite les archives que le temps de la conversion de conteneur — le contenu doit être légal et vous appartenir.",
        ],
      },
    ],
  },
}
