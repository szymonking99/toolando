import type { LegalDocumentData } from "@/components/legal-document"

export const privacyFr: LegalDocumentData = {
  eyebrow: "Politique de confidentialité",
  title: "Politique de confidentialité de Toolando.tech",
  intro:
    "La présente politique de confidentialité décrit quelles données sont traitées sur Toolando.tech, dans quels buts, sur quelle base juridique et quels droits vous sont reconnus. Je traite les données personnelles conformément au règlement (UE) 2016/679 (RGPD) et à la législation polonaise applicable en matière de protection des données.",
  lastUpdated: "Dernière mise à jour : 23 juillet 2026",
  sections: [
    {
      title: "§1. Responsable du traitement",
      paragraphs: [
        "1.1. Le responsable du traitement (« Responsable ») est Szymon Badyl, exploitant de Toolando.tech, qui fournit des services d'outils en ligne.",
        "1.2. Contact pour les questions relatives à la protection des données : {{email}}.",
        "1.3. Le Responsable n'a pas désigné de délégué à la protection des données, car cela n'est pas requis pour cette activité au titre du RGPD.",
      ],
    },
    {
      title: "§2. Données que nous traitons",
      paragraphs: ["2.1. Selon votre utilisation du service, nous traitons les catégories suivantes :"],
      list: [
        "Données techniques et d'utilisation : adresse IP, type et version du navigateur, système d'exploitation, langue, date et heure de la requête, pages visitées, source de trafic, identifiants de cookies (avec consentement).",
        "Données de compte : adresse e-mail, mot de passe (haché), identifiant utilisateur, date d'inscription, statut Premium, identifiant client Stripe (le cas échéant).",
        "Données de paiement : traitées par Stripe — le Responsable ne stocke pas les numéros complets de cartes bancaires.",
        "Données de correspondance : adresse e-mail, contenu du message, date de contact — lorsque vous écrivez à {{email}} ou utilisez le formulaire de contact.",
        "Fichiers utilisateur : traités temporairement uniquement pour exécuter les opérations des outils — non conservés après la fin de la conversion.",
      ],
    },
    {
      title: "§3. Finalités et bases juridiques",
      paragraphs: ["3.1. Nous traitons les données aux fins suivantes :"],
      definitions: [
        {
          term: "Fourniture du service",
          description:
            "Conversion de fichiers, fonctionnement des outils, gestion du compte — base juridique : art. 6, par. 1, lit. b RGPD (contrat) ou lit. f (intérêt légitime : exploitation du service).",
        },
        {
          term: "Abonnement Premium",
          description:
            "Traitement des paiements et de l'abonnement — base juridique : art. 6, par. 1, lit. b RGPD ; comptabilité : art. 6, par. 1, lit. c (obligation légale).",
        },
        {
          term: "Analyse du trafic",
          description:
            "Google Analytics — uniquement après consentement aux cookies analytiques — base juridique : art. 6, par. 1, lit. a RGPD (consentement).",
        },
        {
          term: "Publicité",
          description:
            "Google AdSense — uniquement après consentement aux cookies publicitaires — base juridique : art. 6, par. 1, lit. a RGPD (consentement).",
        },
        {
          term: "Sécurité",
          description:
            "Prévention des abus, journaux serveur — base juridique : art. 6, par. 1, lit. f RGPD (intérêt légitime).",
        },
        {
          term: "Contact et réclamations",
          description:
            "Réponse aux messages — base juridique : art. 6, par. 1, lit. f RGPD ou lit. b (si lié au contrat).",
        },
      ],
    },
    {
      title: "§4. Cookies et technologies similaires",
      paragraphs: [
        "4.1. Le service utilise des cookies et technologies similaires. Lors de votre première visite, nous affichons une bannière de consentement vous permettant d'accepter tous les cookies ou de vous limiter aux cookies essentiels.",
        "4.2. Types de cookies :",
      ],
      list: [
        "Essentiels — nécessaires au fonctionnement du service (p. ex. langue, session, préférences de cookies). Aucun consentement requis.",
        "Analytiques — Google Analytics, statistiques de visite agrégées. Consentement requis.",
        "Publicitaires — Google AdSense, personnalisation des annonces. Consentement requis.",
      ],
      afterList: [
        "4.3. Vous pouvez modifier vos préférences de cookies à tout moment via la bannière ou les paramètres de votre navigateur.",
      ],
    },
    {
      title: "§5. Destinataires et sous-traitants",
      paragraphs: [
        "5.1. Les données peuvent être communiquées à des sous-traitants de confiance agissant pour le compte du Responsable :",
      ],
      list: [
        "Vercel Inc. — hébergement et infrastructure (États-Unis, clauses contractuelles types UE).",
        "Stripe, Inc. — traitement des paiements Premium (États-Unis/Irlande, PCI DSS).",
        "Google LLC — Analytics et AdSense (avec consentement ; politique partenaires : https://policies.google.com/technologies/partner-sites).",
        "Resend — e-mails transactionnels (p. ex. e-mail de bienvenue après inscription), le cas échéant.",
        "Fournisseurs de modèles d'IA — traitement des prompts et fichiers uniquement dans les outils IA Premium, sans conservation après achèvement.",
      ],
      afterList: ["5.2. Le Responsable ne vend pas de données personnelles à des tiers."],
    },
    {
      title: "§6. Fichiers téléversés dans les outils",
      paragraphs: [
        "6.1. Les fichiers téléversés dans les convertisseurs et autres outils ne sont pas conservés après la fin de l'opération.",
        "6.2. Les fichiers ne sont pas utilisés pour l'entraînement de modèles d'IA, le profilage ou le marketing.",
        "6.3. Certains outils (p. ex. l'ouvreur universel de fichiers) traitent les fichiers entièrement localement dans le navigateur — le fichier ne quitte jamais votre appareil.",
        "6.4. Ne téléversez pas de fichiers contenant des données sensibles (p. ex. données de santé, numéros de pièce d'identité), sauf si cela est absolument nécessaire — cela se fait à vos propres risques.",
      ],
    },
    {
      title: "§7. Durées de conservation",
      paragraphs: ["7.1. Nous conservons les données pour les durées suivantes :"],
      list: [
        "Données de compte — jusqu'à la suppression du compte ou une demande de suppression.",
        "Journaux serveur — jusqu'à 90 jours, sauf si une conservation plus longue est nécessaire pour faire valoir des droits.",
        "Correspondance — jusqu'à 3 ans après la clôture du dossier.",
        "Données de facturation (Stripe) — conformément à la législation fiscale (généralement 5 ans).",
        "Fichiers utilisateur — supprimés immédiatement après traitement (généralement quelques secondes à quelques minutes).",
        "Préférences de cookies — jusqu'à 12 mois ou jusqu'au retrait du consentement.",
      ],
    },
    {
      title: "§8. Vos droits (RGPD)",
      paragraphs: ["8.1. Vous disposez des droits suivants :"],
      list: [
        "Droit d'accès (art. 15 RGPD).",
        "Droit de rectification (art. 16 RGPD).",
        "Droit à l'effacement — « droit à l'oubli » (art. 17 RGPD).",
        "Droit à la limitation du traitement (art. 18 RGPD).",
        "Droit à la portabilité des données (art. 20 RGPD).",
        "Droit d'opposition au traitement fondé sur l'art. 6, par. 1, lit. f RGPD (art. 21 RGPD).",
        "Droit de retirer votre consentement à tout moment — sans affecter la licéité du traitement antérieur au retrait (art. 7, par. 3 RGPD).",
        "Droit d'introduire une réclamation auprès d'une autorité de contrôle (en Pologne : PUODO, uodo.gov.pl).",
      ],
      afterList: [
        "8.2. Pour exercer vos droits, écrivez à {{email}}. Je répondrai dans les meilleurs délais, au plus tard dans un délai de 30 jours.",
      ],
    },
    {
      title: "§9. Sécurité des données",
      paragraphs: [
        "9.1. J'applique des mesures techniques et organisationnelles proportionnées au risque, notamment le chiffrement HTTPS, un accès système restreint et la suppression des fichiers après traitement.",
        "9.2. Aucun système n'est sécurisé à 100 %. En cas de violation de données personnelles susceptible d'engendrer un risque élevé pour vos droits, je vous en informerai conformément à l'art. 34 RGPD.",
      ],
    },
    {
      title: "§10. Enfants",
      paragraphs: [
        "10.1. Le service ne s'adresse pas aux enfants de moins de 16 ans. Je ne traite pas sciemment de données d'enfants de moins de 16 ans sans le consentement d'un titulaire de l'autorité parentale.",
        "10.2. Si vous pensez qu'un enfant a fourni des données sans consentement parental, contactez {{email}} — les données seront supprimées.",
      ],
    },
    {
      title: "§11. Modifications de la présente politique",
      paragraphs: [
        "11.1. La présente politique peut être mise à jour pour refléter les évolutions du service, des technologies ou de la législation.",
        "11.2. Les modifications importantes seront communiquées via une notification dans le service ou par e-mail (pour les utilisateurs disposant d'un compte).",
        "11.3. La version en vigueur est toujours disponible sous /polityka-prywatnosci.",
      ],
    },
  ],
  footerNote:
    "Questions relatives à la protection des données : {{email}}. Conditions d'utilisation disponibles sous /regulamin.",
}
