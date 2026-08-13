import type { ToolContentTemplates } from "../locale-factory"

export const frToolContentTemplates: ToolContentTemplates = {
  extendedDesc:
    "Ce convertisseur en ligne gratuit transforme les fichiers {fromName} ({FROM}) au format {toName} ({TO}) sans installer de logiciel. Téléversez votre fichier : Toolando.tech le traite sur le serveur, puis vous renvoie le résultat à télécharger. Les fichiers ne sont jamais stockés — ils sont supprimés immédiatement après la conversion.",
  whenToUseBase: [
    "Quand vous avez besoin d'un fichier {TO} mais que vous ne l'avez qu'au format {FROM}.",
    "Quand l'appareil ou l'application que vous utilisez ne prend pas en charge les fichiers {FROM}.",
  ],
  whenToUseCategory: {
    audio: "Quand vous voulez réduire la taille d'un fichier audio ou améliorer la compatibilité avec votre lecteur.",
    video: "Quand vous devez publier une vidéo sur un site web ou les réseaux sociaux dans un autre format.",
    image: "Quand vous voulez optimiser une image pour le web, l'e-mail ou l'impression.",
    pdf: "Quand vous devez extraire des pages PDF en images ou convertir un document en format modifiable.",
    doc: "Quand vous travaillez avec des documents texte et avez besoin d'un autre format pour les modifier ou les publier.",
    data: "Quand vous transférez des données entre systèmes, API ou feuilles de calcul dans un autre format.",
    font: "Quand vous préparez des polices web pour les déployer sur un site.",
    archive: "Quand vous devez changer le format d'archive pour l'extraire sur un autre système.",
  },
  steps: [
    'Cliquez sur « Choisir un fichier » ou faites glisser votre fichier {FROM} dans la zone de téléversement.',
    "Attendez la fin du téléversement et de la conversion — cela prend généralement quelques secondes.",
    "Téléchargez le fichier {TO} prêt en un clic.",
    "Le fichier source est supprimé du serveur immédiatement après la fin de l'opération.",
  ],
  faq: [
    {
      q: "La conversion {FROM} → {TO} est-elle gratuite ?",
      a: "Oui. Ce convertisseur est entièrement gratuit et ne nécessite aucun compte. Vous pouvez convertir des fichiers sans limite.",
    },
    {
      q: "Mon fichier {FROM} est-il en sécurité ?",
      a: "Oui. Votre fichier est traité uniquement pour la conversion et supprimé immédiatement ensuite. Nous ne stockons ni ne partageons jamais vos fichiers.",
    },
    {
      q: "Quelle est la taille maximale des fichiers ?",
      a: "Vous pouvez téléverser des fichiers jusqu'à 500 Mo. Les fichiers plus volumineux peuvent prendre plus de temps à traiter.",
    },
    {
      q: "La qualité du {TO} sera-t-elle bonne ?",
      a: "Toolando.tech utilise des bibliothèques professionnelles (FFmpeg, Sharp, MuPDF) pour la conversion. La qualité dépend des formats source et cible — convertir d'un format avec perte vers un format sans perte ne récupère pas les données perdues, mais le résultat sera techniquement correct.",
    },
  ],
  extraFaq: [
    {
      q: "Où en savoir plus sur {FROM} ?",
      a: "Consultez le guide complet du format {FROM} dans l'encyclopédie des formats Toolando.tech — cas d'usage, avantages, inconvénients et comparaisons.",
    },
    {
      q: "Puis-je reconvertir {TO} en {FROM} ?",
      a: "Oui — choisissez le convertisseur {TO} → {FROM} dans la liste des outils. La conversion depuis un format avec perte ne restaure pas la qualité perdue.",
    },
  ],
}
