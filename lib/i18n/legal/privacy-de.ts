import type { LegalDocumentData } from "@/components/legal-document"

export const privacyDe: LegalDocumentData = {
  eyebrow: "Datenschutzerklärung",
  title: "Datenschutzerklärung von Toolando.tech",
  intro:
    "Diese Datenschutzerklärung beschreibt, welche Daten auf Toolando.tech verarbeitet werden, zu welchen Zwecken, auf welcher Rechtsgrundlage und welche Rechte Ihnen zustehen. Ich verarbeite personenbezogene Daten gemäß der Verordnung (EU) 2016/679 (DSGVO) und dem anwendbaren polnischen Datenschutzrecht.",
  lastUpdated: "Letzte Aktualisierung: 23. Juli 2026",
  sections: [
    {
      title: "§1. Verantwortlicher",
      paragraphs: [
        "1.1. Verantwortlicher für die Datenverarbeitung („Verantwortlicher“) ist Szymon Badyl, Inhaber von Toolando.tech, der Online-Tools-Dienste betreibt.",
        "1.2. Datenschutzkontakt: {{email}}.",
        "1.3. Der Verantwortliche hat keinen Datenschutzbeauftragten bestellt, da dies für diese Tätigkeit nach der DSGVO nicht erforderlich ist.",
      ],
    },
    {
      title: "§2. Welche Daten wir verarbeiten",
      paragraphs: ["2.1. Je nach Nutzung des Dienstes verarbeiten wir folgende Kategorien:"],
      list: [
        "Technische und Nutzungsdaten: IP-Adresse, Browsertyp und -version, Betriebssystem, Sprache, Datum und Uhrzeit der Anfrage, besuchte Seiten, Traffic-Quelle, Cookie-Kennungen (nach Einwilligung).",
        "Kontodaten: E-Mail-Adresse, Passwort (Hash), Benutzer-ID, Registrierungsdatum, Premium-Status, Stripe-Kunden-ID (falls zutreffend).",
        "Zahlungsdaten: verarbeitet durch Stripe — der Verantwortliche speichert keine vollständigen Zahlungskartennummern.",
        "Korrespondenzdaten: E-Mail-Adresse, Nachrichteninhalt, Kontaktdatum — wenn Sie an {{email}} schreiben oder das Kontaktformular nutzen.",
        "Benutzerdateien: werden nur vorübergehend verarbeitet, um Tool-Operationen durchzuführen — nicht gespeichert nach Abschluss der Konvertierung.",
      ],
    },
    {
      title: "§3. Zwecke und Rechtsgrundlagen",
      paragraphs: ["3.1. Wir verarbeiten Daten für folgende Zwecke:"],
      definitions: [
        {
          term: "Bereitstellung des Dienstes",
          description:
            "Dateikonvertierung, Tool-Betrieb, Kontoverwaltung — Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertrag) oder lit. f (berechtigtes Interesse: Betrieb des Dienstes).",
        },
        {
          term: "Premium-Abonnement",
          description:
            "Zahlungs- und Abonnementabwicklung — Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO; Buchhaltung: Art. 6 Abs. 1 lit. c (gesetzliche Verpflichtung).",
        },
        {
          term: "Traffic-Analyse",
          description:
            "Google Analytics — nur nach Einwilligung zu Analyse-Cookies — Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).",
        },
        {
          term: "Werbung",
          description:
            "Google AdSense — nur nach Einwilligung zu Werbe-Cookies — Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).",
        },
        {
          term: "Sicherheit",
          description:
            "Missbrauchsprävention, Server-Logs — Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).",
        },
        {
          term: "Kontakt und Beschwerden",
          description:
            "Beantwortung von Nachrichten — Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO oder lit. b (wenn vertragsbezogen).",
        },
      ],
    },
    {
      title: "§4. Cookies und ähnliche Technologien",
      paragraphs: [
        "4.1. Der Dienst verwendet Cookies und ähnliche Technologien. Beim ersten Besuch zeigen wir ein Einwilligungsbanner, in dem Sie alle Cookies akzeptieren oder sich auf essenzielle beschränken können.",
        "4.2. Arten von Cookies:",
      ],
      list: [
        "Essenziell — erforderlich für die Funktion des Dienstes (z. B. Sprache, Sitzung, Cookie-Einstellungen). Keine Einwilligung erforderlich.",
        "Analyse — Google Analytics, aggregierte Besuchsstatistiken. Einwilligung erforderlich.",
        "Werbung — Google AdSense, Anzeigenpersonalisierung. Einwilligung erforderlich.",
      ],
      afterList: [
        "4.3. Sie können Ihre Cookie-Einstellungen jederzeit über das Banner oder die Browsereinstellungen ändern.",
      ],
    },
    {
      title: "§5. Empfänger und Auftragsverarbeiter",
      paragraphs: ["5.1. Daten können an vertrauenswürdige Auftragsverarbeiter weitergegeben werden, die im Auftrag des Verantwortlichen handeln:"],
      list: [
        "Vercel Inc. — Hosting und Infrastruktur (USA, EU-Standardvertragsklauseln).",
        "Stripe, Inc. — Premium-Zahlungsabwicklung (USA/Irland, PCI DSS).",
        "Google LLC — Analytics und AdSense (nach Einwilligung; Partner-Richtlinie: https://policies.google.com/technologies/partner-sites).",
        "Resend — Transaktions-E-Mails (z. B. Willkommens-E-Mail nach Registrierung), falls konfiguriert.",
        "KI-Modellanbieter — Verarbeitung von Prompts und Dateien nur innerhalb von Premium-KI-Tools, ohne Speicherung nach Abschluss.",
      ],
      afterList: ["5.2. Der Verantwortliche verkauft keine personenbezogenen Daten an Dritte."],
    },
    {
      title: "§6. In Tools hochgeladene Dateien",
      paragraphs: [
        "6.1. In Konverter und andere Tools hochgeladene Dateien werden nach Abschluss der Operation nicht gespeichert.",
        "6.2. Dateien werden nicht für KI-Modelltraining, Profiling oder Marketing verwendet.",
        "6.3. Einige Tools (z. B. der universelle Datei-Öffner) verarbeiten Dateien vollständig lokal im Browser — die Datei verlässt Ihr Gerät nie.",
        "6.4. Laden Sie keine Dateien mit sensiblen Daten hoch (z. B. Gesundheitsdaten, Personalausweisnummern), es sei denn, es ist unbedingt erforderlich — dies geschieht auf eigenes Risiko.",
      ],
    },
    {
      title: "§7. Aufbewahrungsfristen",
      paragraphs: ["7.1. Wir bewahren Daten für folgende Zeiträume auf:"],
      list: [
        "Kontodaten — bis zur Kontolöschung oder einem Löschantrag.",
        "Server-Logs — bis zu 90 Tage, sofern keine längere Aufbewahrung zur Geltendmachung von Ansprüchen erforderlich ist.",
        "Korrespondenz — bis zu 3 Jahre nach Abschluss des Falls.",
        "Abrechnungsdaten (Stripe) — gemäß Steuerrecht (in der Regel 5 Jahre).",
        "Benutzerdateien — sofort nach Verarbeitung gelöscht (in der Regel Sekunden bis Minuten).",
        "Cookie-Einstellungen — bis zu 12 Monate oder bis zum Widerruf der Einwilligung.",
      ],
    },
    {
      title: "§8. Ihre Rechte (DSGVO)",
      paragraphs: ["8.1. Ihnen stehen folgende Rechte zu:"],
      list: [
        "Recht auf Auskunft (Art. 15 DSGVO).",
        "Recht auf Berichtigung (Art. 16 DSGVO).",
        "Recht auf Löschung — „Recht auf Vergessenwerden“ (Art. 17 DSGVO).",
        "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO).",
        "Recht auf Datenübertragbarkeit (Art. 20 DSGVO).",
        "Widerspruchsrecht gegen Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21 DSGVO).",
        "Recht, die Einwilligung jederzeit zu widerrufen — ohne Beeinträchtigung der Rechtmäßigkeit der Verarbeitung vor dem Widerruf (Art. 7 Abs. 3 DSGVO).",
        "Recht, Beschwerde bei einer Aufsichtsbehörde einzureichen (in Polen: PUODO, uodo.gov.pl).",
      ],
      afterList: [
        "8.2. Um Ihre Rechte auszuüben, schreiben Sie an {{email}}. Ich antworte unverzüglich, spätestens innerhalb von 30 Tagen.",
      ],
    },
    {
      title: "§9. Datensicherheit",
      paragraphs: [
        "9.1. Ich wende technische und organisatorische Maßnahmen an, die dem Risiko angemessen sind, einschließlich HTTPS-Verschlüsselung, eingeschränktem Systemzugang und Löschung von Dateien nach Verarbeitung.",
        "9.2. Kein System ist zu 100 % sicher. Bei einer Verletzung des Schutzes personenbezogener Daten, die voraussichtlich ein hohes Risiko für Ihre Rechte darstellt, informiere ich Sie gemäß Art. 34 DSGVO.",
      ],
    },
    {
      title: "§10. Kinder",
      paragraphs: [
        "10.1. Der Dienst richtet sich nicht an Kinder unter 16 Jahren. Ich verarbeite wissentlich keine Daten von Kindern unter 16 Jahren ohne Einwilligung eines Erziehungsberechtigten.",
        "10.2. Wenn Sie glauben, dass ein Kind ohne Einwilligung eines Erziehungsberechtigten Daten bereitgestellt hat, kontaktieren Sie {{email}} — die Daten werden gelöscht.",
      ],
    },
    {
      title: "§11. Änderungen dieser Erklärung",
      paragraphs: [
        "11.1. Diese Erklärung kann aktualisiert werden, um Änderungen am Dienst, an Technologien oder am Recht widerzuspiegeln.",
        "11.2. Wesentliche Änderungen werden über eine Mitteilung im Dienst oder per E-Mail (für Nutzer mit Konten) mitgeteilt.",
        "11.3. Die aktuelle Version ist stets unter /polityka-prywatnosci verfügbar.",
      ],
    },
  ],
  footerNote:
    "Datenschutzfragen: {{email}}. Nutzungsbedingungen verfügbar unter /regulamin.",
}
