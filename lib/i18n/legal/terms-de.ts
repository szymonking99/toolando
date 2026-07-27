import type { LegalDocumentData } from "@/components/legal-document"

export const termsDe: LegalDocumentData = {
  eyebrow: "Nutzungsbedingungen",
  title: "Nutzungsbedingungen für Toolando.tech",
  intro:
    "Diese Nutzungsbedingungen regeln Ihre Nutzung der Website Toolando.tech unter toolando.tech. Durch die Nutzung des Dienstes — einschließlich des Durchsuchens von Seiten, Hochladens von Dateien, Erstellens eines Kontos oder Erwerbens eines Premium-Abonnements — akzeptieren Sie diese Bedingungen vollständig. Wenn Sie die Bedingungen nicht akzeptieren, nutzen Sie den Dienst nicht.",
  lastUpdated: "Letzte Aktualisierung: 23. Juli 2026",
  sections: [
    {
      title: "§1. Allgemeine Bestimmungen",
      paragraphs: [
        "1.1. Inhaber und Betreiber von Toolando.tech (der „Dienst“) ist Szymon Badyl (der „Anbieter“).",
        "1.2. Kontakt: {{email}}. Für Angelegenheiten, die formelle Korrespondenz erfordern, stellt der Anbieter auf berechtigte Anfrage Identifikationsdaten gemäß geltendem Recht zur Verfügung.",
        "1.3. Der Dienst bietet browserbasierte Online-Tools einschließlich Dateikonverter, Fach-Tools, KI-gestützte Tools und Informationsinhalte (Anleitungen, FAQ).",
        "1.4. Diese Bedingungen werden kostenlos im Dienst in einer Form bereitgestellt, die Herunterladen, Speichern und Drucken ermöglicht.",
      ],
    },
    {
      title: "§2. Definitionen",
      definitions: [
        {
          term: "Nutzer",
          description:
            "Jede natürliche oder juristische Person, die den Dienst nutzt, einschließlich Gäste (ohne Konto) und registrierte Nutzer.",
        },
        {
          term: "Konto",
          description:
            "Ein individuelles Nutzerprofil, erstellt für den Zugang zu Funktionen, die eine Registrierung erfordern, einschließlich Premium-Abonnements.",
        },
        {
          term: "Kostenlose Tools",
          description:
            "Dienstfunktionen, die kostenlos und ohne Erstellung eines Kontos verfügbar sind, sofern diese Bedingungen nichts anderes vorsehen.",
        },
        {
          term: "Premium",
          description:
            "Ein kostenpflichtiges Abonnement mit Zugang zu erweiterten Funktionen, einschließlich ausgewählter KI-Tools und höherer Limits.",
        },
        {
          term: "Benutzerdatei",
          description:
            "Jede Datei, Textinhalte oder Daten, die der Nutzer zu einem Tool im Dienst zur Verarbeitung hochlädt.",
        },
        {
          term: "Generierte Inhalte",
          description:
            "Ergebnisse, die von Dienst-Tools erzeugt werden, einschließlich konvertierter Dateien, Texte oder von KI-Tools generierter Bilder.",
        },
      ],
    },
    {
      title: "§3. Technische Anforderungen und Alter",
      paragraphs: [
        "3.1. Die Nutzung des Dienstes erfordert ein Gerät mit Internetzugang, einen aktuellen Webbrowser mit JavaScript-Unterstützung und — für einige Tools — die Möglichkeit, Dateien auf Ihr Gerät herunterzuladen.",
        "3.2. Der Dienst richtet sich an Personen ab 16 Jahren. Nutzer unter 16 Jahren dürfen den Dienst nur mit Einwilligung und Aufsicht eines Elternteils oder Erziehungsberechtigten nutzen.",
        "3.3. Der Nutzer erklärt, dass er voll geschäftsfähig ist oder den Dienst mit Einwilligung eines Erziehungsberechtigten nutzt.",
      ],
    },
    {
      title: "§4. Umfang des Dienstes",
      paragraphs: [
        "4.1. Der Dienst wird „wie besehen“ bereitgestellt. Der Anbieter bemüht sich angemessen, dass Tools korrekt funktionieren, garantiert jedoch keine unterbrechungsfreie Verfügbarkeit, Kompatibilität mit allen Dateiformaten oder ein bestimmtes Ergebnis.",
        "4.2. Einige Operationen laufen lokal im Browser des Nutzers (z. B. der universelle Datei-Öffner). Einige erfordern vorübergehende Serververarbeitung — Details stehen in der Datenschutzerklärung und auf der Seite „So funktioniert es“.",
        "4.3. Der Anbieter kann Tools, Funktionen oder Dateiformate hinzufügen, ändern, einschränken oder entfernen, einschließlich der Kennzeichnung von Konvertern als „demnächst“ oder vorübergehend nicht verfügbar.",
        "4.4. Informationen in Anleitungen, FAQ und Tool-Beschreibungen dienen nur der Information und stellen keine professionelle rechtliche, medizinische, finanzielle oder technische Beratung dar.",
      ],
    },
    {
      title: "§5. Benutzerkonto",
      paragraphs: [
        "5.1. Die Erstellung eines Kontos erfordert eine gültige E-Mail-Adresse und ein Passwort. Der Nutzer verpflichtet sich, korrekte Angaben zu machen und diese aktuell zu halten.",
        "5.2. Der Nutzer ist verantwortlich für die Vertraulichkeit der Anmeldedaten und für alle Aktivitäten unter seinem Konto. Bei Verdacht auf unbefugten Zugriff kontaktieren Sie umgehend {{email}}.",
        "5.3. Der Anbieter kann ein Konto bei Verstößen gegen die Bedingungen, bei Verdacht auf Missbrauch, bei Handlungen, die die Sicherheit des Dienstes gefährden, oder auf Anordnung von Behörden sperren oder löschen, vorbehaltlich geltenden Rechts.",
        "5.4. Der Nutzer kann die Nutzung seines Kontos jederzeit einstellen. Eine Kontolöschung kann unter {{email}} beantragt werden.",
      ],
    },
    {
      title: "§6. Kostenlose Tools und Premium",
      paragraphs: [
        "6.1. Kostenlose Tools sind unentgeltlich verfügbar. Der Anbieter kann technische Limits (z. B. Dateigröße, Anzahl der Operationen) anwenden, die in der Dienstschnittstelle mitgeteilt werden.",
        "6.2. Premium ist ein wiederkehrendes kostenpflichtiges Abonnement für erweiterte Funktionen einschließlich KI-Tools. Der aktuelle Premium-Umfang wird im Dienst vor dem Kauf angezeigt.",
        "6.3. Premium-Gebühren werden im Voraus für jeden Abrechnungszeitraum (z. B. monatlich) über Stripe erhoben. Preise werden in der beim Checkout angegebenen Währung angezeigt und enthalten Steuern, wo gesetzlich vorgeschrieben.",
        "6.4. Premium kann jederzeit über das Abonnement-Verwaltungspanel (Stripe Customer Portal) im Konto gekündigt werden. Eine Kündigung bedeutet, dass das Abonnement nach dem aktuellen bezahlten Zeitraum nicht verlängert wird — Premium-Zugang bleibt bis zum Ende dieses Zeitraums bestehen.",
        "6.5. Gebühren für einen begonnenen und bezahlten Abonnementzeitraum sind nicht erstattungsfähig, es sei denn, zwingendes Verbraucherrecht schreibt anderes vor. Bei technischen Ausfällen, die die Premium-Nutzung über längere Zeit verhindern, kann der Nutzer eine Beschwerde an {{email}} richten.",
        "6.6. Verbraucher können ein 14-tägiges Widerrufsrecht bei Fernabsatzverträgen haben, es sei denn, der Anbieter hat mit ausdrücklicher Einwilligung des Nutzers vor Ablauf der Widerrufsfrist mit der Premium-Bereitstellung begonnen — gemäß anwendbarem EU-/polnischem Verbraucherrecht. Die Nutzung von Premium vor Ablauf von 14 Tagen kann Einwilligung zur sofortigen Leistung und Verlust des Widerrufsrechts im gesetzlich zulässigen Umfang bedeuten.",
      ],
    },
    {
      title: "§7. Benutzerdateien und Datenverarbeitung",
      paragraphs: [
        "7.1. In Dienst-Tools hochgeladene Dateien werden ausschließlich zur Durchführung der vom Nutzer angeforderten Operation (Konvertierung, Komprimierung, Vorschau, Inhaltserstellung usw.) verwendet.",
        "7.2. Serververarbeitete Dateien werden nach Abschluss der Operation nicht gespeichert und nicht für andere Zwecke verwendet, einschließlich KI-Modelltraining, Verkauf oder Weitergabe an Dritte.",
        "7.3. Der Nutzer ist allein verantwortlich für Inhalt, Rechtmäßigkeit, Vertraulichkeit und Rechte in Bezug auf hochgeladene Benutzerdateien.",
        "7.4. Die Verarbeitung personenbezogener Daten wird durch die Datenschutzerklärung unter /polityka-prywatnosci geregelt.",
      ],
    },
    {
      title: "§8. Zulässige und unzulässige Nutzung",
      paragraphs: [
        "8.1. Der Nutzer muss den Dienst rechtmäßig, gemäß diesen Bedingungen und guter Praxis nutzen.",
        "8.2. Folgendes ist insbesondere untersagt:",
      ],
      list: [
        "Hochladen illegaler Inhalte oder Inhalte, die Rechte Dritter verletzen, einschließlich Urheberrecht, gewerbliche Schutzrechte, Persönlichkeitsrechte oder Geschäftsgeheimnisse;",
        "Verarbeitung von Materialien, die der Nutzer nicht nutzen darf (z. B. geschützte Musik, Filme, Software);",
        "Nutzung des Dienstes zum Herunterladen, Konvertieren oder Verbreiten von Inhalten von Streaming-Plattformen, sozialen Medien oder anderen Quellen unter Verletzung der Nutzungsbedingungen dieser Plattformen oder des Gesetzes;",
        "Hochladen von Viren, Malware, Exploits oder Dateien, die den Dienst oder Geräte anderer Nutzer beschädigen sollen;",
        "automatisierte, Massen- oder übermäßige Nutzung (Bots, Scraper, Serverüberlastung), einschließlich Umgehung technischer Limits;",
        "Versuch unbefugten Zugriffs auf Dienstsysteme, Konten anderer Nutzer oder Anbieter-Infrastruktur;",
        "Vortäuschung einer anderen Person oder Organisation oder falsche Darstellung der Zugehörigkeit zum Anbieter;",
        "Nutzung von KI-Tools zur Erzeugung illegaler, diskriminierender, irreführender Inhalte oder Inhalte, die Rechte Dritter verletzen.",
      ],
    },
    {
      title: "§9. Tools mit künstlicher Intelligenz (KI)",
      paragraphs: [
        "9.1. KI-Tools erzeugen Inhalte automatisch mit externen Modellen. Der Anbieter garantiert nicht die Genauigkeit, Vollständigkeit, Aktualität oder Eignung generierter Inhalte für einen bestimmten Zweck.",
        "9.2. KI-generierte Inhalte sind keine professionelle Beratung (rechtlich, medizinisch, finanziell, technisch). Nutzer müssen Ergebnisse vor der Nutzung überprüfen.",
        "9.3. Der Nutzer ist voll verantwortlich für die Nutzung generierter Inhalte, einschließlich Urheberrechtsverletzungen. Der Anbieter erhebt keinen Anspruch auf Eigentum an Benutzerdateien oder generierten Inhalten, die dem Nutzer nach geltendem Recht gehören.",
        "9.4. Der Anbieter kann tägliche Limits, Moderation oder vorübergehende Deaktivierung von KI-Tools bei Missbrauch, Infrastrukturüberlastung oder Anforderungen von KI-Anbietern verhängen.",
      ],
    },
    {
      title: "§10. Audio-Extraktions- und Download-Tools",
      paragraphs: [
        "10.1. Der Dienst ermöglicht die Extraktion von Audiospuren aus vom Nutzer hochgeladenen Videodateien (z. B. eigene Aufnahmen, Materialien, an denen der Nutzer Rechte hat).",
        "10.2. Der Dienst dient nicht zum Herunterladen von Inhalten von Streaming-Diensten, VOD-Plattformen, sozialen Medien oder anderen Quellen in Weise, die Urheberrecht oder Plattformbedingungen verletzen. Der Nutzer erklärt, dass er das Recht hat, hochgeladene Materialien zu verarbeiten.",
        "10.3. Der Anbieter überprüft nicht die Quelle hochgeladener Dateien, kann den Zugang jedoch bei Meldungen über Rechtsverletzungen oder schweren Missbrauch sperren.",
      ],
    },
    {
      title: "§11. Werbung",
      paragraphs: [
        "11.1. Der Dienst kann Werbung anzeigen, einschließlich Google AdSense, zur Unterstützung kostenloser Tools und der Entwicklung.",
        "11.2. Werbeanbieter (einschließlich Google) können Cookies und ähnliche Technologien gemäß Datenschutzerklärung und eigenen Richtlinien verwenden. Nutzer können Cookie-Einwilligungen über das Dienst-Banner und Browsereinstellungen verwalten.",
        "11.3. Werbeinhalte werden von Dritten bereitgestellt. Der Anbieter haftet nicht für Werbeinhalte oder Produkte/Dienstleistungen von Werbetreibenden.",
      ],
    },
    {
      title: "§12. Urheberrecht und geistiges Eigentum",
      paragraphs: [
        "12.1. Der Name Toolando.tech, Logo, Dienst-Layout, Texte, Tool-Beschreibungen, Anleitungen und Quellcode sind geschützt. Kommerzielles Kopieren ohne Einwilligung des Anbieters ist untersagt.",
        "12.2. Nutzer behalten Rechte an Benutzerdateien. Das Hochladen überträgt kein Urheberrecht an den Anbieter.",
        "12.3. Der Nutzer gewährt dem Anbieter eine nicht-exklusive, gebührenfreie Lizenz für die zur technischen Verarbeitung von Benutzerdateien erforderliche Zeit ausschließlich zur Durchführung der angeforderten Operation.",
        "12.4. Kopieren, Reverse Engineering, Dekompilieren oder automatisiertes Scraping des Dienstes ohne schriftliche Einwilligung ist untersagt.",
      ],
    },
    {
      title: "§13. Haftung des Anbieters",
      paragraphs: [
        "13.1. Der Dienst wird ohne jegliche Gewährleistung im gesetzlich zulässigen Umfang bereitgestellt.",
        "13.2. Der Anbieter haftet nicht für:",
      ],
      list: [
        "Folgen der Nutzung generierter oder konvertierter Inhalte durch den Nutzer;",
        "Datenverlust durch Handlungen des Nutzers, Geräteausfall des Nutzers oder höhere Gewalt;",
        "Dienstunterbrechungen durch Wartung, Hosting-/Cloud-Ausfälle oder Internetausfälle;",
        "indirekte Schäden, entgangenen Gewinn, Verlust von Reputation oder Daten, im gesetzlich zulässigen Umfang;",
        "Handlungen Dritter (Stripe, Google, KI-Anbieter, Hosting).",
      ],
    },
    {
      title: "§14. Höhere Gewalt",
      paragraphs: [
        "14.1. Der Anbieter haftet nicht für Nichterfüllung oder mangelhafte Erfüllung aufgrund höherer Gewalt, einschließlich kritischer Infrastrukturausfälle, Naturkatastrophen, Krieg, Streiks, Epidemien, behördlicher Entscheidungen oder massiver IT-Angriffe.",
      ],
    },
    {
      title: "§15. Beschwerden",
      paragraphs: [
        "15.1. Beschwerden über den Dienst, Premium-Abonnements oder Verstöße gegen die Bedingungen können an {{email}} gesendet werden.",
        "15.2. Eine Beschwerde sollte das Problem, das Auftretensdatum und Informationen zur Identifizierung des Nutzers (Konto-E-Mail) beschreiben.",
        "15.3. Der Anbieter antwortet innerhalb von 14 Tagen nach Eingang, sofern besondere Regeln keinen anderen Zeitraum vorschreiben.",
        "15.4. Verbraucher können außergerichtliche Streitbeilegung nutzen, einschließlich der EU-OS-Plattform: https://ec.europa.eu/consumers/odr",
      ],
    },
    {
      title: "§16. Änderungen der Bedingungen und des Dienstes",
      paragraphs: [
        "16.1. Der Anbieter kann diese Bedingungen aus wichtigen Gründen ändern, einschließlich Rechtsänderungen, Dienstfunktionsänderungen, neuer Tools oder Geschäftsmodelländerungen.",
        "16.2. Registrierte Nutzer werden über wesentliche Bedingungsänderungen mindestens 14 Tage im Voraus per E-Mail oder Dienstmitteilung informiert, sofern das Gesetz keinen längeren Zeitraum vorschreibt.",
        "16.3. Fortgesetzte Nutzung nach Inkrafttreten der Änderungen bedeutet Akzeptanz. Wenn Sie Änderungen nicht akzeptieren, stellen Sie die Nutzung ein und kündigen Sie Premium vor dem nächsten Abrechnungszeitraum.",
      ],
    },
    {
      title: "§17. Schlussbestimmungen",
      paragraphs: [
        "17.1. Für nicht in diesen Bedingungen geregelte Angelegenheiten gilt polnisches Recht, einschließlich des Zivilgesetzbuches und des Verbraucherrechtsgesetzes für Verbraucher.",
        "17.2. Streitigkeiten werden von Gerichten mit Zuständigkeit nach allgemein geltenden Regeln beigelegt. Für Verbraucher gelten zwingende Verbraucherschutzregeln zur Gerichtsbarkeit.",
        "17.3. Sollte eine Bestimmung unwirksam sein, bleiben die übrigen Bestimmungen in Kraft. Unwirksame Bestimmungen werden durch anwendbare gesetzliche Regeln ersetzt.",
        "17.4. Diese Bedingungen treten mit Veröffentlichung im Dienst in Kraft. Die aktuelle Version ist stets unter /regulamin verfügbar.",
      ],
    },
  ],
  footerNote:
    "Bei Fragen zu den Bedingungen, Beschwerden oder Verbraucherrechten kontaktieren Sie {{email}}. Die Datenschutzerklärung ist integraler Bestandteil dieser Bedingungen.",
}
