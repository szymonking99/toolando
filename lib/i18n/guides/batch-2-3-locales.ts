import type { GuideArticle } from "./types"
import { guidesBatch2En } from "./batch-2"
import { guidesBatch3En } from "./batch-3"

type Batch23Slug = keyof typeof guidesBatch2En | keyof typeof guidesBatch3En

function pickEn(slug: Batch23Slug) {
  return (
    guidesBatch2En[slug as keyof typeof guidesBatch2En] ??
    guidesBatch3En[slug as keyof typeof guidesBatch3En]
  )
}

export const guidesBatch23De: Record<Batch23Slug, GuideArticle> = {
  "compress-images-without-quality-loss": {
    ...pickEn("compress-images-without-quality-loss"),
    title: "JPG- und PNG-Bilder komprimieren ohne sichtbaren Qualitätsverlust",
    description:
      "Praktischer Leitfaden: Wann der Kompressor sinnvoll ist, welche Qualitätsstufe passt und wie sich Kompression von Formatkonvertierung unterscheidet.",
    sections: [
      {
        paragraphs: [
          "Bildkompression verkleinert die Datei ohne Formatwechsel — Sie behalten JPG oder PNG, nur leichter. JPG → WebP ist ein Formatwechsel und oft besser für Websites, aber nicht immer möglich (z. B. verlangt der Druck JPG).",
          "Der Bildkompressor auf Toolando.tech erlaubt die Qualität per Schieberegler. Auf 2000×2000-Produktfotos: bei Qualität 80 % sank die Größe um 40–60 % ohne sichtbare Artefakte auf dem Bildschirm.",
        ],
      },
      {
        title: "Wann komprimieren, wann konvertieren",
        paragraphs: [
          "Komprimieren, wenn das Format passt (z. B. Shop verlangt JPG), die Datei aber zu schwer für E-Mail oder CMS ist.",
          "Zu WebP/AVIF konvertieren, wenn Sie auf der eigenen Seite publizieren und HTML kontrollieren (<picture> mit Fallback).",
          "Dasselbe JPG nicht mehrfach komprimieren — jedes Speichern verschlechtert die Qualität.",
        ],
      },
      {
        title: "Typische Szenarien",
        paragraphs: [
          "E-Mail-Anhang: JPG-Qualität ~75–85, max. Breite 1600 px.",
          "Onlineshop: WebP mit JPG-Fallback; Vorschaubilder 800 px.",
          "Screenshot mit Text: PNG oder verlustfreies WebP — aggressives JPG vermeiden.",
        ],
      },
    ],
  },
  "merge-pdf-online-guide": {
    ...pickEn("merge-pdf-online-guide"),
    title: "Mehrere PDFs zu einer Datei zusammenführen — wann es Sinn macht",
    description:
      "Rechnungen, Scans und Anhänge in einem PDF — Seitenreihenfolge, Qualität und Datenschutz.",
    sections: [
      {
        paragraphs: [
          "PDFs zusammenführen ist Alltag im Büro: Rechnung + Vertrag + Ausweisscan in einem Anhang. „PDF zusammenführen“ bei Toolando.tech verbindet Dateien in der von Ihnen gewählten Reihenfolge.",
          "PDF behält Vektortext und Bitmap-Scans — das Zusammenführen mindert die Scan-Auflösung nicht, wenn die Quellen nicht überkomprimiert waren.",
        ],
      },
      {
        title: "Gute Praxis vor dem Versand",
        paragraphs: [
          "Dateien logisch ordnen (Deckblatt → Inhalt → Anhänge).",
          "Prüfen, ob jeder Scan gerade ist (keine doppelten Seiten).",
          "Empfänger nur am Handy: max. 10–15 MB pro Datei — bei Bedarf Scans vor dem Zusammenführen komprimieren.",
        ],
      },
      {
        title: "Datenschutz",
        paragraphs: [
          "Geschäfts- und persönliche Dokumente als vertraulich behandeln. Toolando löscht Dateien nach der Operation; senden Sie dennoch keine sensiblen Daten, wenn die Firmenrichtlinie es verbietet.",
        ],
      },
    ],
  },
  "spreadsheet-csv-json-guide": {
    ...pickEn("spreadsheet-csv-json-guide"),
    title: "CSV, JSON und Excel — Daten zwischen Tabellen und APIs bewegen",
    description:
      "Wann CSV, wann JSON — und wie man kaputte Umlaute und Dezimaltrennzeichen vermeidet.",
    sections: [
      {
        paragraphs: [
          "CSV ist einfacher Text — öffnet in Excel, Google Sheets und den meisten BI-Tools. JSON beschreibt verschachtelte Strukturen besser (APIs, Konfigurationen). Excel (XLSX) fügt Zelltypen und mehrere Blätter hinzu.",
          "Typischer Ablauf: API-Export als JSON → JSON → CSV → Analyse in Excel. Umgekehrt: Kundenliste CSV → JSON → REST-API.",
        ],
      },
      {
        title: "Sonderzeichen und Excel",
        paragraphs: [
          "CSV mit Umlauten sollte UTF-8 sein. Wenn Excel Zeichen verstümmelt, Datei über „Daten → Aus Text/CSV“ öffnen und UTF-8 wählen.",
          "CSV-Trennzeichen sind oft Komma oder Semikolon (je nach Windows-Region). TSV (Tabulator) ist sicherer, wenn Beschreibungen Kommas enthalten.",
        ],
      },
      {
        title: "Validierung nach der Konvertierung",
        paragraphs: [
          "Zeilenanzahl vor und nach der Konvertierung vergleichen.",
          "Bei JSON Schlüssel und Typen (string vs number) prüfen — ein fehlendes Anführungszeichen zerstört die ganze Datei.",
        ],
      },
    ],
  },
  "video-compress-before-sharing": {
    ...pickEn("video-compress-before-sharing"),
    title: "Video verkleinern vor E-Mail oder WhatsApp",
    description:
      "MP4, Auflösung, Bitrate — praktische Größenlimits und wann Container-Konvertierung reicht.",
    sections: [
      {
        paragraphs: [
          "Handyaufnahmen in MOV oder MKV können hunderte MB wiegen. Viele Postfächer blockieren Anhänge >25 MB. Lösung: Konvertierung zu MP4 (H.264 + AAC) und ggf. niedrigere Auflösung.",
          "720p reicht oft für die Handy-Vorschau; 1080p behalten, wenn der Empfänger am Fernseher schaut.",
        ],
      },
      {
        title: "Schritte vor dem Versand",
        paragraphs: [
          "1) MOV/MKV → MP4 konvertieren. 2) Dateigröße prüfen. 3) Wenn noch zu groß — unnötigen Anfang/Ende im Videoeditor schneiden (Online-Tools machen das nicht). 4) Bei >25 MB per Cloud-Link senden.",
        ],
      },
    ],
  },
  "font-woff2-for-websites": {
    ...pickEn("font-woff2-for-websites"),
    title: "TTF, OTF, WOFF und WOFF2 — Schriften für die Website",
    description:
      "Schriften für Webfonts konvertieren, Lizenzen und Einfluss auf die Ladegeschwindigkeit.",
    sections: [
      {
        paragraphs: [
          "Browser laden keine Dateien direkt aus dem Windows-Fonts-Ordner — Sie brauchen WOFF oder WOFF2 in CSS (@font-face). WOFF2 hat die kleinste Transfergröße.",
          "Der TTF/OTF → WOFF2-Konverter auf Toolando.tech bereitet Dateien für @font-face vor. Schriftlizenz beachten — nicht jede erlaubt Einbettung in Webseiten.",
        ],
      },
      {
        title: "Performance",
        paragraphs: [
          "Schriften auf genutzte Glyphen subsetten in Profi-Tools, wenn die Datei groß ist.",
          "Kritisches WOFF2 in <head> preloaden für Above-the-fold-Text.",
          "font-display: swap nutzen, damit Text vor dem Font-Laden lesbar bleibt.",
        ],
      },
    ],
  },
  "toolando-editorial-standards": {
    ...pickEn("toolando-editorial-standards"),
    title: "Redaktionelle Standards von Toolando.tech — wie Ratgeber entstehen",
    description:
      "Wie Artikel, Konverter-Tests und die Format-Enzyklopädie entstehen — Transparenz für Leser und Prüfer.",
    sections: [
      {
        paragraphs: [
          "Toolando.tech entwickle ich allein (Szymon). Ratgeber werden nicht massenhaft generiert oder von Wikipedia kopiert — sie basieren auf Konvertierungstests mit echten Dateien.",
          "Jeder Artikel hat Veröffentlichungs- und Aktualisierungsdatum. Wenn Plattformanforderungen (z. B. Instagram-Video) oder Bibliotheken sich ändern, überarbeite ich den Text.",
        ],
      },
      {
        title: "Was ich teste",
        paragraphs: [
          "Audio-/Video-Konverter: Zeit, Ergebnisgröße, Wiedergabe in VLC und auf dem Handy.",
          "Bilder: visueller Vergleich vor/nach, PNG-Transparenz, WebP vs JPG-Größe.",
          "Dokumente: Layout nach PDF ↔ DOCX, Sonderzeichen, Tabellen in CSV/JSON.",
        ],
      },
      {
        title: "Was ich nicht verspreche",
        paragraphs: [
          "Keine „100 % Qualität“ bei verlustbehaftet → verlustbehaftet.",
          "Kein Download fremder YouTube/TikTok-Videos — nur legale Operationen an Ihren Dateien.",
          "Google-Anzeigen können erscheinen, aber redaktionelle Inhalte werden unabhängig von Werbetreibenden geschrieben.",
        ],
      },
    ],
  },
  "when-not-to-convert-files": {
    ...pickEn("when-not-to-convert-files"),
    title: "Wann Sie eine Datei NICHT konvertieren sollten — 7 Fälle, die Qualität zerstören",
    description:
      "Unnötige Konvertierungen vermeiden: Original behalten, verlustfreie Archive und Backup vor dem Experiment.",
    sections: [
      {
        paragraphs: [
          "Online-Konverter sind praktisch, aber nicht jede Operation hilft. Manchmal bleibt das Originalformat besser — oder ein verlustfreies Archiv (ZIP, FLAC).",
          "Regel: nicht verlustbehaftet „nach oben“ konvertieren und Wunder erwarten — MP3 → WAV stellt verlorene Daten nicht wieder her.",
        ],
      },
      {
        title: "Liste „so lassen“",
        paragraphs: [
          "Sie haben bereits PNG mit Transparenz — nicht grundlos zu JPG konvertieren.",
          "Grafikprojekt-Archiv — Ebenenquellen (PSD, SVG) behalten, JPG erst am Ende exportieren.",
          "Studio-WAV/FLAC — nicht zu MP3 flatten, bis der Final-Mix steht.",
          "PDF mit digitaler Signatur — Konvertierung kann die Signatur ungültig machen.",
        ],
      },
      {
        title: "Bevor Sie auf „Konvertieren“ klicken",
        paragraphs: [
          "Kopie des Originals anlegen.",
          "Prüfen, ob die Zielplattform das Quellformat schon akzeptiert (oft ja!).",
          "Formatvergleiche in der Toolando-Enzyklopädie lesen — spart einen nutzlosen Schritt.",
        ],
      },
    ],
  },
  "png-vs-jpg-photos-and-graphics": {
    ...pickEn("png-vs-jpg-photos-and-graphics"),
    title: "PNG vs JPG — wann Foto, wann Grafik mit Text",
    description:
      "Praktische Wahl zwischen PNG und JPG: Fotos, Screenshots, Logos mit Transparenz und Druck.",
    sections: [
      {
        paragraphs: [
          "PNG und JPG sind die am häufigsten verwechselten Formate. JPG komprimiert Fotos hervorragend — Himmelverläufe, Haut, Landschaft — aber zerstört scharfe Kanten und Text. PNG behält jeden Pixel exakt, inklusive Transparenz (Alpha), Dateien sind aber oft 5–10× größer als JPG bei gleicher Auflösung.",
          "Regel aus Toolando-Tests: Galerie- oder Social-Foto → JPG (oder WebP mit JPG-Fallback). Icon, Logo, Diagramm, UI-Screenshot → PNG. Mischung Foto + Text (z. B. Angebotsdeckblatt) → oft PNG oder verlustfreies WebP.",
        ],
      },
      {
        title: "Wann JPG wählen",
        paragraphs: [
          "Fotos von Kamera oder Handy ohne Transparenz.",
          "Produktvorschaubilder, wenn der Hintergrund einfarbig ist und kein Alpha nötig ist.",
          "E-Mail-Anhänge — JPG-Qualität 80–85 ist meist ein fairer Kompromiss.",
          "Heimdruck — viele Shops akzeptieren hochauflösendes JPG (300 DPI umgerechnet).",
        ],
      },
      {
        title: "Wann PNG wählen",
        paragraphs: [
          "Website-Logo mit transparentem Hintergrund — JPG füllt immer mit Weiß oder Schwarz.",
          "Screenshots von UI, Diagrammen, Code — Text bleibt scharf.",
          "Flache Grafik mit wenigen Farben (Infografiken, App-Icons).",
          "Bei geplanter Ebenenbearbeitung — verlustfreies PNG fügt bei jedem Speichern keine Artefakte hinzu (im Gegensatz zu wiederholtem JPG).",
        ],
      },
      {
        title: "Typische Fehler",
        paragraphs: [
          "Logo als JPG speichern — Treppeneffekt an Kanten und keine Transparenz.",
          "4000×3000-Foto als PNG „für Qualität“ — unnötig 15 MB statt 2 MB JPG.",
          "PNG → JPG → PNG-Schleife — jeder JPG-Durchgang verliert Qualität; Master in PNG behalten.",
        ],
      },
    ],
  },
  "flac-music-archive-guide": {
    ...pickEn("flac-music-archive-guide"),
    title: "FLAC als Musikarchiv — wann es sich lohnt vs MP3",
    description:
      "Verlustfreies FLAC vs MP3 320 kbps: Backup, Heim-Streaming und Autoradios.",
    sections: [
      {
        paragraphs: [
          "FLAC (Free Lossless Audio Codec) ist verlustfreie Kompression — wie ZIP für Audio. Beim Abspielen erhalten Sie dasselbe Signal wie aus WAV, die Datei braucht aber etwa halb so viel Platz. MP3 entfernt Daten dauerhaft; selbst 320 kbps ist nicht identisch mit der CD-Quelle.",
          "In der Praxis: Bei lossless gekaufter Musik oder eigenen Rips ist FLAC ein sinnvolles Archivformat. Am Handy mit Bluetooth-Kopfhörern ist FLAC vs MP3 256 kbps oft unhörbar — dann spart MP3 Gigabytes.",
        ],
      },
      {
        title: "Archiv-Workflow",
        paragraphs: [
          "1) Master in FLAC (oder WAV) auf NAS / Cloud-Backup.",
          "2) Arbeitskopien MP3/AAC für Handy und Auto.",
          "3) Niemals MP3 → FLAC „für Qualität“ — vergrößert nur die Datei ohne Datenwiederherstellung.",
          "FLAC → MP3 auf Toolando.tech: Batch bei 40–60-Minuten-Alben vorhersagbar; Metadaten (Titel, Künstler) nach Konvertierung im Player prüfen.",
        ],
      },
      {
        title: "Kompatibilität",
        paragraphs: [
          "FLAC: VLC, Foobar2000, die meisten Android-Player; schwächer in nativem Apple Music (ALAC passt besser zu Apple).",
          "Autoradios lesen oft nur MP3/WMA/AAC vom USB-Stick — FLAC → MP3 ist nötig.",
          "Heim-Streaming (Plex, Jellyfin) unterstützt FLAC problemlos.",
        ],
      },
    ],
  },
  "zip-7z-rar-when-to-use": {
    ...pickEn("zip-7z-rar-when-to-use"),
    title: "ZIP, 7z und RAR — welches Archiv zum Versenden",
    description:
      "Größe, Kompatibilität und Verschlüsselung — wann ZIP reicht und wann 7z oder RAR Sinn macht.",
    sections: [
      {
        paragraphs: [
          "Ein Archiv packt viele Dateien in eine — praktisch für E-Mail, Cloud und Ordner-Backup. ZIP ist universeller Standard: öffnet auf Windows, macOS und Linux ohne Zusatzsoftware. 7z liefert meist kleinere Ergebnisse, der Empfänger braucht aber ggf. 7-Zip. RAR in Legacy-Workflows; RAR online erstellen hat Lizenzlimits — öfter konvertieren Sie RAR → ZIP als umgekehrt.",
        ],
      },
      {
        title: "Wann ZIP",
        paragraphs: [
          "Versand an Kunden oder Behörden — geringstes „lässt sich nicht öffnen“-Risiko.",
          "Archiv von Code, Bürodokumenten, JPG-Fotosammlung.",
          "Systeme, die nur .zip-Uploads akzeptieren.",
        ],
      },
      {
        title: "Wann 7z",
        paragraphs: [
          "Großer Spieleordner, Videoprojekte, Backup vor externer Platte — kleinere Datei = schnellerer Upload.",
          "Wenn der Empfänger technisch ist und 7-Zip hat.",
          "ZIP → 7z einmal sinnvoll — nicht dieselben Daten endlos neu packen.",
        ],
      },
      {
        title: "Sicherheit",
        paragraphs: [
          "Archivpasswort schützt vor versehentlichem Öffnen, ersetzt aber kein End-to-End-Verschlüsselung für sensible Dokumente.",
          "Archive aus unbekannten Quellen nicht ohne Antivirus entpacken.",
          "Toolando verarbeitet Archive nur für die Dauer der Container-Konvertierung — Inhalt muss legal und Ihrer sein.",
        ],
      },
    ],
  },
  "svg-vs-png-logos-and-icons": {
    ...pickEn("svg-vs-png-logos-and-icons"),
    title: "SVG vs PNG — Logos und Icons für die Website",
    description:
      "Vektor vs Raster: wann Logo als SVG exportieren und wann @2x PNG reicht.",
    sections: [
      {
        paragraphs: [
          "SVG ist mathematisch beschriebene Vektorgrafik — skaliert auf jedem Bildschirm ohne Pixeligkeit. PNG ist eine Bitmap fester Auflösung; auf Retina brauchen Sie oft eine 2×-Version. Auf Websites sollten Logos und einfache Icons fast immer SVG sein (oder Icon-Font), sofern keine eingebettete Fotografie im File ist.",
          "SVG → PNG auf Toolando.tech hilft, wenn die Druckerei PNG 300 DPI verlangt oder ein System kein SVG akzeptiert.",
        ],
      },
      {
        title: "Vorteile von SVG",
        paragraphs: [
          "Eine Datei für Mobile und Desktop — weniger CSS, kein srcset.",
          "Einfache Farbänderung per CSS (fill) bei einfachen Icons.",
          "Bessere Lighthouse-Ergebnisse als schwere PNG-Hero-Bilder.",
        ],
      },
      {
        title: "Wann PNG statt SVG",
        paragraphs: [
          "Logo mit Verlauf, Schatten oder Effekt, der schlecht aus Vektor exportiert.",
          "Open-Graph- / Social-Vorschaubilder — Plattformen rasterisieren ohnehin.",
          "Desktop-Apps ohne SVG-Engine.",
          "@2x PNG (z. B. 512×512) als Fallback in <img> neben inline SVG.",
        ],
      },
    ],
  },
  "podcast-export-mp3-aac-settings": {
    ...pickEn("podcast-export-mp3-aac-settings"),
    title: "Podcast-Export — MP3 oder AAC und welche Bitrate",
    description:
      "Einstellungen nach Aufnahme in Audacity, Reaper oder am Handy: Mono, 44,1 kHz und sinnvolle Kompression.",
    sections: [
      {
        paragraphs: [
          "Podcasts sind vor allem Sprache — Sie brauchen kein Stereo 320 kbps wie bei Studiomusik. Die meisten Plattformen (Spotify, Apple Podcasts, RSS-Hosting) transkodieren Uploads ohnehin. Trotzdem sinnvolles Master senden: Mono oder Stereo, 44,1 oder 48 kHz, MP3 128–192 kbps oder AAC/M4A 128 kbps.",
          "Aufnahme in WAV oder FLAC? Endexport fast immer MP3 oder AAC — WAV → MP3 auf Toolando.tech: 30–60-Minuten-Episoden, ~30 MB WAV sinken auf ~28 MB bei 128 kbps Stereo (Mono-Sprache ~15 MB).",
        ],
      },
      {
        title: "Empfohlene Einstellungen",
        paragraphs: [
          "Solo / Ein-Stimmen-Interview: Mono, MP3 96–128 kbps — kleinere Datei, gleiche Verständlichkeit.",
          "Zwei Stimmen auf getrennten Spuren: Stereo 128 kbps.",
          "Musik-Intro/Outro in Stereo, Rest Mono — Gesamtexport Stereo 128 kbps der Einfachheit halber.",
          "64 kbps vermeiden — zischende „S“ und Hintergrundrauschen bei schwachen Mikrofonen.",
        ],
      },
      {
        title: "MP3 vs AAC (M4A)",
        paragraphs: [
          "AAC klingt bei gleicher Bitrate etwas besser als MP3 — Apple-Ökosystem bevorzugt M4A.",
          "MP3 hat die breiteste Kompatibilität in alten Playern und Autos.",
          "Kein rohes WAV an Podcast-Host senden — unnötig langer Upload.",
        ],
      },
    ],
  },
  "gif-vs-mp4-for-animations": {
    ...pickEn("gif-vs-mp4-for-animations"),
    title: "GIF vs MP4 — Animationen auf der Seite und in Social Media",
    description:
      "Wann klassisches GIF Sinn macht und wann kurzes MP4 oder WebM Megabytes spart.",
    sections: [
      {
        paragraphs: [
          "GIF spielt überall, ist technisch aber eine Bildsequenz ohne moderne Videokompression — 5 Sekunden 720p können 10–20 MB wiegen. Dasselbe in MP4 (H.264) passt oft in 500 KB–1 MB bei akzeptabler Qualität.",
          "MP4 → GIF auf Toolando.tech für kurze Loops (Loader, Slack-Reaktion), wenn die Plattform kein Video erlaubt. Auf der eigenen Seite besser <video autoplay loop muted playsinline> mit MP4 oder WebM.",
        ],
      },
      {
        title: "Wann GIF",
        paragraphs: [
          "Kurzer Loop (<5 s), kleine Auflösung (≤480 px Breite).",
          "Plattformvorgabe (manche Foren nur GIF).",
          "Einfache Grafik mit wenigen Farben — dann kann GIF wirklich leicht sein.",
        ],
      },
      {
        title: "Wann MP4/WebM",
        paragraphs: [
          "Animation mit vielen Farben, Verläufen, Videoclips.",
          "Website — besseres LCP und weniger Transfer.",
          "Instagram/TikTok verlangen Video, kein GIF.",
        ],
      },
      {
        title: "Tipps für MP4 → GIF",
        paragraphs: [
          "Länge kürzen — jede Sekunde sind Dutzende Frames.",
          "Auflösung vor Konvertierung reduzieren.",
          "Farbpalette begrenzen, wenn das Tool es bietet (weniger Banding).",
        ],
      },
    ],
  },
  "tiff-and-png-for-document-scans": {
    ...pickEn("tiff-and-png-for-document-scans"),
    title: "Dokumentscans — TIFF, PNG oder JPG",
    description:
      "Archivierung von Rechnungen und Verträgen: Verlustfreiheit, Mehrseitigkeit und wann PDF reicht.",
    sections: [
      {
        paragraphs: [
          "Rechnung oder Vertrag scannen ist ein anderer Fall als Urlaubsfoto. Text und Stempel brauchen scharfe Kanten — aggressives JPG verwischt Buchstaben. TIFF (oft LZW verlustfrei) und PNG sind sicherer fürs Archiv. Für Versand und OCR landen Sie oft bei PDF oder JPG in moderater Qualität.",
          "Mehrseitiger TIFF kann eine Datei mit vielen Ebenen sein — nicht jeder Viewer unterstützt das; für Behörde und Kunde ist mehrseitiges PDF klarer (PDF zusammenführen bei Toolando.tech).",
        ],
      },
      {
        title: "Empfohlener Workflow",
        paragraphs: [
          "Scanner → PNG oder TIFF pro Seite (300 DPI für Druck, 150 DPI für Vorschau).",
          "Drehung/Zuschnitt im Editor korrigieren.",
          "Seiten zu einem PDF für Versand zusammenführen.",
          "Optional JPG-Qualität 90 nur wenn Empfänger kein PDF akzeptiert.",
        ],
      },
      {
        title: "Was vermeiden",
        paragraphs: [
          "JPG-Qualität 60 bei Rechnungen — Beträge können unleserlich werden.",
          "Mehrfache TIFF → JPG → TIFF-Konvertierung.",
          "Farbs scan bei 600 DPI „für alle Fälle“ — Gigabytes ohne Nutzen für A4-Text.",
        ],
      },
    ],
  },
  "markdown-to-pdf-workflow": {
    ...pickEn("markdown-to-pdf-workflow"),
    title: "Von Markdown zu PDF — Dokumentation, README und Notizen",
    description:
      "Pfad MD → HTML → PDF/DOCX: wann Editor-Export reicht und wann ein Online-Konverter hilft.",
    sections: [
      {
        paragraphs: [
          "Markdown ist Schreibformat — Überschriften, Listen, Code — ohne WYSIWYG-Layout. Entwickler halten README.md im Repo; dann brauchen Sie PDF für den Kunden oder Druck. Typischer Pfad: MD → HTML (Render) → PDF per Browser „Als PDF drucken“ oder MD → DOCX → PDF für bessere Kopfzeilen.",
          "MD → HTML und DOCX → PDF auf Toolando.tech mit 20–40-KB-Dateien getestet: Umlaute und Codeblöcke passieren korrekt, wenn die MD-Datei UTF-8 ist.",
        ],
      },
      {
        title: "Welcher Pfad wann",
        paragraphs: [
          "Schnelle Vorschau: MD → HTML, im Browser öffnen.",
          "Formelles Dokument mit Seitennummern: MD → DOCX (oder Editor), Firmenstil, dann DOCX → PDF.",
          "Nur Notizen ohne Stil: MD → TXT reicht.",
        ],
      },
      {
        title: "Gute MD-Gewohnheiten",
        paragraphs: [
          "Eine Datei = ein Thema; lange Dokumente in Kapitel teilen.",
          "Bilder relativ verlinken — Pfade nach Konvertierung prüfen.",
          "MD-Tabellen können in PDF brechen — CSV oder DOCX für tabellarische Daten erwägen.",
        ],
      },
    ],
  },
  "extract-images-from-pdf-pages": {
    ...pickEn("extract-images-from-pdf-pages"),
    title: "Bilder aus PDF-Seiten extrahieren (JPG, PNG, WebP)",
    description:
      "Präsentationen, Kataloge und Scans — wann Seitenexport sinnvoll ist und welche Auflösung.",
    sections: [
      {
        paragraphs: [
          "PDF ist ein Container — darin können Vektoren, Fonts und eingebettete Bitmaps sein. PDF → JPG rendert jede Seite als Rasterbild. Das ist nicht dasselbe wie ein einzelnes eingebettetes Logo extrahieren (dafür braucht man einen PDF-Editor), aber für Folien, Poster und Scans funktioniert es gut.",
          "16:9-Präsentation als PNG mit 1920 px Breite wirkt scharf am Bildschirm; für A4-Druck ~2480×3508 px (300 DPI), wenn das Tool hohe Auflösung erlaubt.",
        ],
      },
      {
        title: "JPG vs PNG vs WebP",
        paragraphs: [
          "Folie mit Fotohintergrund → JPG oder WebP.",
          "Folie mit Diagramm und Text → PNG (schärfere Schrift).",
          "Website-Vorschaubild → WebP mit JPG-Fallback nach weiterer Konvertierung.",
        ],
      },
      {
        title: "Mehrseitige PDFs",
        paragraphs: [
          "Einzelne Seiten exportieren, wenn Sie nur Folie 5 und 12 brauchen.",
          "Galerie aller Seiten — gesamte Datei konvertieren und nach Nummer in Dateinamen sortieren.",
          "Urheberrecht beachten — fremdes PDF ist nicht frei zum Veröffentlichen.",
        ],
      },
    ],
  },
  "convert-video-to-gif-properly": {
    ...pickEn("convert-video-to-gif-properly"),
    title: "Gutes GIF aus Video — Auflösung, FPS und Länge",
    description:
      "MP4/MOV zu GIF ohne Riesendatei: praktische Limits und Alternativen.",
    sections: [
      {
        paragraphs: [
          "GIF hat keinen Ton und nutzt kein H.264 — jeder Frame ist eine volle Bitmap (oft 256-Farben-Palette). Deshalb kann ein 10-Sekunden-1080p-Clip als GIF mehr wiegen als das Originalvideo. Ziel: kurz, klein, niedrige Auflösung.",
          "Vor MP4 → GIF im externen Editor auf 2–4 Sekunden kürzen und 10–15 FPS statt 30 — GIF wird die Filmflüssigkeit ohnehin nicht zurückgeben.",
        ],
      },
      {
        title: "Startparameter",
        paragraphs: [
          "Max. Breite 480–640 px für Memes und Reaktionen.",
          "Max. Länge 5 s — darüber lieber loopendes MP4.",
          "Einfacher Hintergrund (Greenscreen) komprimiert leichter als Verlauf und Rauschen.",
        ],
      },
      {
        title: "Nach der Konvertierung",
        paragraphs: [
          "Dateigröße prüfen — GIFs über 5 MB sind auf einer Seite selten sinnvoll.",
          "Wenn das GIF zu groß ist, GIF → MP4 und <video>-Einbettung rettet oft die Situation.",
          "Toolando verarbeitet Ihr Video nur für die Konvertierung — fertige GIFs werden nicht öffentlich gehostet.",
        ],
      },
    ],
  },
}

export const guidesBatch23Es: Record<Batch23Slug, GuideArticle> = {
  "compress-images-without-quality-loss": {
    ...pickEn("compress-images-without-quality-loss"),
    title: "Cómo comprimir imágenes JPG y PNG sin pérdida visible de calidad",
    description:
      "Guía práctica: cuándo usar el compresor, qué nivel elegir y la diferencia entre compresión y conversión de formato.",
    sections: [
      {
        paragraphs: [
          "Comprimir una imagen reduce el tamaño sin cambiar el formato: sigue siendo JPG o PNG, solo más ligera. Convertir JPG → WebP cambia el formato y suele dar mejor resultado en webs, pero no siempre es posible (p. ej. la imprenta exige JPG).",
          "En Toolando.tech el compresor de imágenes permite ajustar la calidad con un control deslizante. En fotos de producto 2000×2000 px: con calidad 80 % el tamaño bajaba un 40–60 % sin artefactos visibles en pantalla.",
        ],
      },
      {
        title: "Cuándo comprimir y cuándo convertir",
        paragraphs: [
          "Comprima cuando el formato vale (p. ej. la tienda exige JPG) pero el archivo pesa demasiado para el correo o el CMS.",
          "Convierta a WebP/AVIF cuando publique en su propio sitio y controle el HTML (<picture> con alternativa).",
          "No comprima el mismo JPG varias veces: cada guardado empeora la calidad.",
        ],
      },
      {
        title: "Escenarios habituales",
        paragraphs: [
          "Adjunto de correo: JPG calidad ~75–85, ancho máx. 1600 px.",
          "Tienda online: WebP con fallback JPG; miniaturas 800 px.",
          "Captura con texto: PNG o WebP sin pérdida; evite JPG agresivo.",
        ],
      },
    ],
  },
  "merge-pdf-online-guide": {
    ...pickEn("merge-pdf-online-guide"),
    title: "Unir varios PDF en uno — cuándo tiene sentido",
    description:
      "Combinar facturas, escaneos y adjuntos en un PDF: orden de páginas, calidad y privacidad.",
    sections: [
      {
        paragraphs: [
          "Unir PDF es tarea diaria en la oficina: factura + contrato + escaneo de DNI en un solo adjunto. «Unir PDF» en Toolando.tech combina archivos en el orden que elija.",
          "PDF conserva texto vectorial y bitmaps de escaneo: la unión no reduce la resolución si los originales no estaban sobrecomprimidos.",
        ],
      },
      {
        title: "Buenas prácticas antes de enviar",
        paragraphs: [
          "Ordene los archivos con lógica (portada → contenido → adjuntos).",
          "Compruebe que cada escaneo esté recto (sin páginas duplicadas).",
          "Si el destinatario solo usa el móvil, apunte a 10–15 MB máx.; comprima escaneos antes de unir si hace falta.",
        ],
      },
      {
        title: "Privacidad",
        paragraphs: [
          "Trate documentos empresariales y personales como confidenciales. Toolando elimina los archivos tras la operación; no envíe datos sensibles si la política de su empresa lo prohíbe.",
        ],
      },
    ],
  },
  "spreadsheet-csv-json-guide": {
    ...pickEn("spreadsheet-csv-json-guide"),
    title: "CSV, JSON y Excel — mover datos entre hojas y APIs",
    description:
      "Cuándo elegir CSV o JSON y cómo evitar caracteres rotos y separadores decimales.",
    sections: [
      {
        paragraphs: [
          "CSV es texto plano: se abre en Excel, Google Sheets y la mayoría de herramientas BI. JSON describe mejor estructuras anidadas (APIs, configuraciones). Excel (XLSX) añade tipos de celda y varias hojas.",
          "Flujo típico: exportación de API como JSON → JSON → CSV → análisis en Excel. Al revés: lista de clientes CSV → JSON → API REST.",
        ],
      },
      {
        title: "Caracteres especiales y Excel",
        paragraphs: [
          "El CSV con tildes y eñes debe ser UTF-8. Si Excel corrompe caracteres, abra el archivo con Datos → Desde texto/CSV y elija UTF-8.",
          "El separador CSV suele ser coma o punto y coma (según la región de Windows). TSV (tabulador) es más seguro cuando las descripciones llevan comas.",
        ],
      },
      {
        title: "Validación tras la conversión",
        paragraphs: [
          "Compare el número de filas antes y después.",
          "En JSON compruebe claves y tipos (string vs number): una comilla faltante rompe todo el archivo.",
        ],
      },
    ],
  },
  "video-compress-before-sharing": {
    ...pickEn("video-compress-before-sharing"),
    title: "Reducir vídeo antes de enviarlo por correo o WhatsApp",
    description:
      "MP4, resolución, bitrate — límites prácticos de tamaño y cuándo basta con cambiar el contenedor.",
    sections: [
      {
        paragraphs: [
          "Las grabaciones del móvil en MOV o MKV pueden pesar cientos de MB. Muchos buzones bloquean adjuntos >25 MB. Solución: convertir a MP4 (H.264 + AAC) y, si hace falta, bajar la resolución.",
          "720p suele bastar para previsualizar en el móvil; mantenga 1080p si el destinatario verá en la tele.",
        ],
      },
      {
        title: "Pasos antes de enviar",
        paragraphs: [
          "1) Convertir MOV/MKV → MP4. 2) Comprobar el tamaño. 3) Si sigue siendo grande, recorte inicio/final innecesario en un editor (las herramientas online no lo hacen). 4) Si supera 25 MB, envíe un enlace en la nube.",
        ],
      },
    ],
  },
  "font-woff2-for-websites": {
    ...pickEn("font-woff2-for-websites"),
    title: "TTF, OTF, WOFF y WOFF2 — fuentes para la web",
    description:
      "Convertir fuentes para webfonts, licencias e impacto en la velocidad de carga.",
    sections: [
      {
        paragraphs: [
          "Los navegadores no cargan archivos directamente de la carpeta Fuentes de Windows: necesita WOFF o WOFF2 en CSS (@font-face). WOFF2 ofrece el menor tamaño de transferencia.",
          "El convertidor TTF/OTF → WOFF2 de Toolando.tech prepara archivos listos para @font-face. Recuerde la licencia de la fuente: no todas permiten incrustarla en la web.",
        ],
      },
      {
        title: "Rendimiento",
        paragraphs: [
          "Subsetee fuentes (solo glifos usados) en herramientas profesionales si el archivo es grande.",
          "Precargue el WOFF2 crítico en <head> para texto above-the-fold.",
          "Use font-display: swap para que el texto sea legible antes de cargar la fuente.",
        ],
      },
    ],
  },
  "toolando-editorial-standards": {
    ...pickEn("toolando-editorial-standards"),
    title: "Estándares editoriales de Toolando.tech — cómo se escriben las guías",
    description:
      "Cómo se producen artículos, pruebas de convertidores y la enciclopedia de formatos — transparencia para lectores y revisores.",
    sections: [
      {
        paragraphs: [
          "Toolando.tech lo desarrollo yo solo (Szymon). Las guías no se generan en masa ni se copian de Wikipedia: se basan en pruebas de conversión con archivos reales.",
          "Cada artículo tiene fecha de publicación y actualización. Cuando cambian requisitos de plataformas (p. ej. vídeo de Instagram) o bibliotecas, reviso el texto.",
        ],
      },
      {
        title: "Qué pruebo",
        paragraphs: [
          "Convertidores de audio/vídeo: tiempo, tamaño del resultado, reproducción en VLC y en el móvil.",
          "Imágenes: comparación visual antes/después, transparencia PNG, tamaño WebP vs JPG.",
          "Documentos: maquetación tras PDF ↔ DOCX, caracteres especiales, tablas en CSV/JSON.",
        ],
      },
      {
        title: "Qué no prometo",
        paragraphs: [
          "No prometo «100 % de calidad» al convertir con pérdida → con pérdida.",
          "No descargo vídeos ajenos de YouTube/TikTok — solo operaciones legales sobre sus archivos.",
          "Pueden aparecer anuncios de Google, pero el contenido editorial se escribe independientemente de los anunciantes.",
        ],
      },
    ],
  },
  "when-not-to-convert-files": {
    ...pickEn("when-not-to-convert-files"),
    title: "Cuándo NO convertir un archivo — 7 situaciones que estropean la calidad",
    description:
      "Evite conversiones innecesarias: conserve el original, archivos sin pérdida y copia de seguridad antes de experimentar.",
    sections: [
      {
        paragraphs: [
          "Los convertidores online son cómodos, pero no toda operación ayuda. A veces conviene dejar el formato original o usar un archivo sin pérdida (ZIP, FLAC).",
          "Regla: no convierta con pérdida «hacia arriba» esperando milagros — MP3 → WAV no recupera datos perdidos.",
        ],
      },
      {
        title: "Lista «déjelo como está»",
        paragraphs: [
          "Ya tiene PNG con transparencia — no lo pase a JPG sin motivo.",
          "Archivo de proyecto gráfico — conserve fuentes en capas (PSD, SVG); exporte JPG solo al final.",
          "Material de estudio WAV/FLAC — no lo aplaste a MP3 hasta el mix final.",
          "PDF con firma digital — la conversión puede invalidar la firma.",
        ],
      },
      {
        title: "Antes de pulsar «Convertir»",
        paragraphs: [
          "Haga una copia del original.",
          "Compruebe si la plataforma destino ya acepta su formato fuente (¡a menudo sí!).",
          "Lea comparaciones de formatos en la enciclopedia Toolando — evitará un paso inútil.",
        ],
      },
    ],
  },
  "png-vs-jpg-photos-and-graphics": {
    ...pickEn("png-vs-jpg-photos-and-graphics"),
    title: "PNG vs JPG — cuándo foto y cuándo gráfico con texto",
    description:
      "Elección práctica entre PNG y JPG: fotos, capturas, logos con transparencia e impresión.",
    sections: [
      {
        paragraphs: [
          "PNG y JPG son los formatos que más se confunden. JPG comprime muy bien las fotos — cielos, piel, paisajes — pero estropea bordes nítidos y texto. PNG conserva cada píxel exactamente, incluida la transparencia (canal alpha), pero los archivos suelen ser 5–10× mayores que JPG a la misma resolución.",
          "Regla que uso en pruebas de Toolando.tech: foto para galería o redes → JPG (o WebP con fallback JPG). Icono, logo, esquema, captura de UI → PNG. Mezcla foto + texto (p. ej. portada de oferta) → a menudo PNG o WebP sin pérdida.",
        ],
      },
      {
        title: "Cuándo elegir JPG",
        paragraphs: [
          "Fotos de cámara o móvil sin transparencia.",
          "Miniaturas de producto cuando el fondo es uniforme y no necesita alpha.",
          "Adjuntos de correo — JPG calidad 80–85 suele ser un buen equilibrio.",
          "Impresión casera — muchos servicios aceptan JPG en alta resolución (300 DPI equivalentes).",
        ],
      },
      {
        title: "Cuándo elegir PNG",
        paragraphs: [
          "Logo web con fondo transparente — JPG siempre rellena con blanco o negro.",
          "Capturas de UI, gráficos, código — el texto permanece nítido.",
          "Gráficos planos con pocos colores (infografías, iconos de app).",
          "Si planea edición por capas — PNG sin pérdida no añade artefactos en cada guardado (a diferencia del JPG repetido).",
        ],
      },
      {
        title: "Errores habituales",
        paragraphs: [
          "Guardar un logo como JPG — dientes en los bordes y sin transparencia.",
          "Guardar una foto 4000×3000 como PNG «por calidad» — 15 MB innecesarios en lugar de 2 MB JPG.",
          "Bucle PNG → JPG → PNG — cada paso por JPG pierde calidad; conserve el master en PNG.",
        ],
      },
    ],
  },
  "flac-music-archive-guide": {
    ...pickEn("flac-music-archive-guide"),
    title: "FLAC como archivo musical — cuándo compensa frente a MP3",
    description:
      "FLAC sin pérdida vs MP3 320 kbps: copias de seguridad, streaming en casa y reproductores del coche.",
    sections: [
      {
        paragraphs: [
          "FLAC (Free Lossless Audio Codec) es compresión sin pérdida — como ZIP para audio. Al reproducir obtiene la misma señal que del WAV, pero el archivo ocupa aproximadamente la mitad. MP3 elimina datos de forma permanente; incluso 320 kbps no es idéntico al original de CD.",
          "En la práctica: si compra música sin pérdida o rippea sus discos, FLAC es un formato de archivo sensato. En el móvil con auriculares Bluetooth, FLAC vs MP3 256 kbps a menudo es inaudible — entonces convertir a MP3 ahorra gigabytes.",
        ],
      },
      {
        title: "Flujo de archivo",
        paragraphs: [
          "1) Master en FLAC (o WAV) en NAS / copia en la nube.",
          "2) Copias de trabajo MP3/AAC para móvil y coche.",
          "3) Nunca convierta MP3 → FLAC «por calidad» — solo infla el archivo sin recuperar datos.",
          "Convertidor FLAC → MP3 en Toolando.tech: en álbumes de 40–60 min el batch es predecible; compruebe metadatos (título, artista) en el reproductor tras la conversión.",
        ],
      },
      {
        title: "Compatibilidad",
        paragraphs: [
          "FLAC: VLC, Foobar2000, la mayoría de reproductores Android; soporte más débil en Apple Music nativo (ALAC encaja mejor en el ecosistema Apple).",
          "Radios de coche suelen leer solo MP3/WMA/AAC desde USB — FLAC → MP3 es necesario.",
          "Streaming en casa (Plex, Jellyfin) maneja FLAC sin problema.",
        ],
      },
    ],
  },
  "zip-7z-rar-when-to-use": {
    ...pickEn("zip-7z-rar-when-to-use"),
    title: "ZIP, 7z y RAR — qué archivo elegir para enviar",
    description:
      "Tamaño, compatibilidad y cifrado — cuándo basta ZIP y cuándo tiene sentido 7z o RAR.",
    sections: [
      {
        paragraphs: [
          "Un archivo empaqueta muchos archivos en uno — útil para correo, nube y copia de carpetas. ZIP es el estándar universal: se abre en Windows, macOS y Linux sin software extra. 7z suele dar un resultado más pequeño, pero el destinatario puede necesitar 7-Zip. RAR aparece en flujos antiguos; crear RAR online tiene límites de licencia — más a menudo convierte RAR → ZIP que al revés.",
        ],
      },
      {
        title: "Cuándo ZIP",
        paragraphs: [
          "Envío a clientes u oficinas — menor riesgo de «no se abre».",
          "Archivo de código, documentos de oficina, conjunto de fotos JPG.",
          "Sistemas que solo aceptan subidas .zip.",
        ],
      },
      {
        title: "Cuándo 7z",
        paragraphs: [
          "Carpeta grande de juegos, proyectos de vídeo, backup antes de disco externo — archivo más pequeño = subida más rápida.",
          "Cuando el destinatario es técnico y tiene 7-Zip.",
          "ZIP → 7z tiene sentido una vez — no empaquete los mismos datos una y otra vez.",
        ],
      },
      {
        title: "Seguridad",
        paragraphs: [
          "La contraseña del archivo evita aperturas casuales, pero no sustituye el cifrado de extremo a extremo para documentos sensibles.",
          "No descomprima archivos de fuentes desconocidas sin un antivirus.",
          "Toolando procesa archivos solo durante la conversión de contenedor — el contenido debe ser legal y suyo.",
        ],
      },
    ],
  },
  "svg-vs-png-logos-and-icons": {
    ...pickEn("svg-vs-png-logos-and-icons"),
    title: "SVG vs PNG — logos e iconos para la web",
    description:
      "Vector vs raster: cuándo exportar logo a SVG y cuándo basta PNG @2x.",
    sections: [
      {
        paragraphs: [
          "SVG es gráfico vectorial descrito matemáticamente — escala en cualquier pantalla sin pixelado. PNG es un mapa de píxeles de resolución fija; en retina a menudo hace falta una versión 2×. En webs, logos e iconos simples deberían ser casi siempre SVG (o icon font), salvo que el archivo incluya una foto incrustada.",
          "SVG → PNG en Toolando.tech ayuda cuando la imprenta pide PNG 300 DPI o un sistema no acepta SVG.",
        ],
      },
      {
        title: "Ventajas de SVG",
        paragraphs: [
          "Un archivo para móvil y escritorio — menos CSS, sin srcset.",
          "Cambio de color fácil vía CSS (fill) en iconos simples.",
          "Mejor puntuación en Lighthouse que PNG hero pesados.",
        ],
      },
      {
        title: "Cuándo PNG en lugar de SVG",
        paragraphs: [
          "Logo con degradado, sombra o efecto que exporta mal desde vector.",
          "Miniaturas Open Graph / vista previa social — las plataformas rasterizan de todos modos.",
          "Apps de escritorio sin motor SVG.",
          "Exportar PNG @2x (p. ej. 512×512) como fallback en <img> junto al SVG inline.",
        ],
      },
    ],
  },
  "podcast-export-mp3-aac-settings": {
    ...pickEn("podcast-export-mp3-aac-settings"),
    title: "Exportar podcast — MP3 o AAC y qué bitrate",
    description:
      "Ajustes tras grabar en Audacity, Reaper o en el móvil: mono, 44,1 kHz y compresión sensata.",
    sections: [
      {
        paragraphs: [
          "Un podcast es sobre todo voz — no necesita stereo 320 kbps como música de estudio. La mayoría de plataformas (Spotify, Apple Podcasts, hosting RSS) recodifican la subida igualmente. Aun así conviene enviar un master razonable: mono o stereo, 44,1 o 48 kHz, MP3 128–192 kbps o AAC/M4A 128 kbps.",
          "¿Grabó en WAV o FLAC? La exportación final casi siempre es MP3 o AAC — WAV → MP3 en Toolando.tech: en episodios de 30–60 min, ~30 MB WAV bajan a ~28 MB a 128 kbps stereo (voz mono puede quedar en ~15 MB).",
        ],
      },
      {
        title: "Ajustes recomendados",
        paragraphs: [
          "Solo / entrevista una voz: mono, MP3 96–128 kbps — archivo más pequeño, misma claridad.",
          "Dos voces en pistas separadas: stereo 128 kbps.",
          "Intro/outro musical en stereo, resto mono — exporte todo en stereo 128 kbps por simplicidad.",
          "Evite 64 kbps — sibilantes ásperas y ruido de fondo con micrófonos débiles.",
        ],
      },
      {
        title: "MP3 vs AAC (M4A)",
        paragraphs: [
          "AAC con el mismo bitrate suele sonar mejor que MP3 — el ecosistema Apple prefiere M4A.",
          "MP3 tiene la compatibilidad más amplia en reproductores antiguos y coches.",
          "No suba WAV crudo al hosting de podcast — subida innecesariamente larga.",
        ],
      },
    ],
  },
  "gif-vs-mp4-for-animations": {
    ...pickEn("gif-vs-mp4-for-animations"),
    title: "GIF vs MP4 — animaciones en la web y redes sociales",
    description:
      "Cuándo tiene sentido el GIF clásico y cuándo un MP4 o WebM corto ahorra megabytes.",
    sections: [
      {
        paragraphs: [
          "GIF se reproduce en todas partes, pero técnicamente es una secuencia de fotogramas sin compresión de vídeo moderna — 5 segundos a 720p pueden pesar 10–20 MB. Lo mismo en MP4 (H.264) suele caber en 500 KB–1 MB con calidad aceptable.",
          "MP4 → GIF en Toolando.tech tiene sentido para bucles cortos (loader, reacción en Slack) cuando la plataforma no permite incrustar vídeo. En su propio sitio prefiera <video autoplay loop muted playsinline> con MP4 o WebM.",
        ],
      },
      {
        title: "Cuándo GIF",
        paragraphs: [
          "Bucle corto (<5 s), resolución pequeña (≤480 px de ancho).",
          "Requisito de la plataforma (algunos foros solo GIF).",
          "Gráfico simple con pocos colores — entonces GIF puede ser realmente ligero.",
        ],
      },
      {
        title: "Cuándo MP4/WebM",
        paragraphs: [
          "Animación con muchos colores, degradados o clips de vídeo.",
          "Sitio web — mejor LCP y menos transferencia.",
          "Instagram/TikTok exigen vídeo, no GIF.",
        ],
      },
      {
        title: "Consejos para MP4 → GIF",
        paragraphs: [
          "Recorte la duración — cada segundo son decenas de fotogramas.",
          "Reduzca la resolución antes de convertir.",
          "Limite la paleta de colores si la herramienta lo ofrece (menos banding).",
        ],
      },
    ],
  },
  "tiff-and-png-for-document-scans": {
    ...pickEn("tiff-and-png-for-document-scans"),
    title: "Escaneos de documentos — TIFF, PNG o JPG",
    description:
      "Archivo de facturas y contratos: sin pérdida, multipágina y cuándo basta PDF.",
    sections: [
      {
        paragraphs: [
          "Escanear una factura o contrato no es lo mismo que una foto de vacaciones. Texto y sellos exigen bordes nítidos — un JPG agresivo difumina las letras. TIFF (a menudo LZW sin pérdida) y PNG son más seguros para archivo. Para envío y OCR acaba convirtiendo a PDF o JPG en calidad moderada.",
          "Un TIFF multipágina puede ser un solo archivo con varias capas — no todo visor lo soporta; para oficina y cliente, PDF multipágina es más claro (unir PDF en Toolando.tech).",
        ],
      },
      {
        title: "Flujo recomendado",
        paragraphs: [
          "Escáner → PNG o TIFF por página (300 DPI para impresión, 150 DPI para vista previa).",
          "Corrija rotación/recorte en un editor.",
          "Una las páginas en un PDF para enviar.",
          "Opcional JPG calidad 90 solo si el destinatario no acepta PDF.",
        ],
      },
      {
        title: "Qué evitar",
        paragraphs: [
          "JPG calidad 60 en facturas — las cifras pueden volverse ilegibles.",
          "Conversiones repetidas TIFF → JPG → TIFF.",
          "Escaneo a color a 600 DPI «por si acaso» — gigabytes sin beneficio para texto A4.",
        ],
      },
    ],
  },
  "markdown-to-pdf-workflow": {
    ...pickEn("markdown-to-pdf-workflow"),
    title: "De Markdown a PDF — documentación, README y notas",
    description:
      "Ruta MD → HTML → PDF/DOCX: cuándo basta exportar del editor y cuándo ayuda un convertidor online.",
    sections: [
      {
        paragraphs: [
          "Markdown es formato de escritura — encabezados, listas, código — sin maquetación WYSIWYG. Los desarrolladores guardan README.md en el repositorio; luego hay que enviar PDF al cliente o imprimir una especificación. Ruta típica: MD → HTML (render) → PDF con «Imprimir a PDF» del navegador, o MD → DOCX → PDF para mejor control de encabezados.",
          "Convertidores MD → HTML y DOCX → PDF en Toolando.tech probados con archivos de 20–40 KB: tildes y bloques de código pasan bien si el MD está en UTF-8.",
        ],
      },
      {
        title: "Qué ruta cuándo",
        paragraphs: [
          "Vista previa rápida: MD → HTML, abrir en el navegador.",
          "Documento formal con numeración: MD → DOCX (o editor), estilo corporativo, luego DOCX → PDF.",
          "Solo notas sin estilo: basta MD → TXT.",
        ],
      },
      {
        title: "Buenas prácticas en MD",
        paragraphs: [
          "Un archivo = un tema; divida documentos largos en capítulos.",
          "Enlace imágenes de forma relativa — compruebe rutas tras la conversión.",
          "Las tablas en MD pueden romperse en PDF — considere CSV o DOCX para datos tabulares.",
        ],
      },
    ],
  },
  "extract-images-from-pdf-pages": {
    ...pickEn("extract-images-from-pdf-pages"),
    title: "Cómo extraer imágenes de páginas PDF (JPG, PNG, WebP)",
    description:
      "Presentaciones, catálogos y escaneos — cuándo exportar una página como imagen y qué resolución.",
    sections: [
      {
        paragraphs: [
          "PDF es un contenedor — dentro puede haber vectores, fuentes y bitmaps incrustados. PDF → JPG renderiza cada página como imagen raster. No es lo mismo que extraer un logo incrustado (requiere editor PDF), pero para diapositivas, pósters y escaneos funciona muy bien.",
          "Una presentación 16:9 exportada a PNG con 1920 px de ancho se ve nítida en pantalla; para impresión A4 apunte a ~2480×3508 px (300 DPI) si la herramienta permite alta resolución.",
        ],
      },
      {
        title: "JPG vs PNG vs WebP",
        paragraphs: [
          "Diapositiva con foto de fondo → JPG o WebP.",
          "Diapositiva con gráfico y texto → PNG (tipografía más nítida).",
          "Miniatura web → WebP con fallback JPG tras conversión adicional.",
        ],
      },
      {
        title: "PDF multipágina",
        paragraphs: [
          "Exporte páginas sueltas si solo necesita las diapositivas 5 y 12.",
          "Para galería de todas las páginas — convierta el archivo completo y ordene por número en el nombre.",
          "Respete derechos de autor — el PDF ajeno no es suyo para publicar libremente.",
        ],
      },
    ],
  },
  "convert-video-to-gif-properly": {
    ...pickEn("convert-video-to-gif-properly"),
    title: "Cómo hacer un buen GIF desde vídeo — resolución, FPS y duración",
    description:
      "MP4/MOV a GIF sin archivo gigante: límites prácticos y alternativas.",
    sections: [
      {
        paragraphs: [
          "GIF no tiene sonido ni usa H.264 — cada fotograma es un bitmap completo (a menudo paleta de 256 colores). Por eso un clip de 10 s a 1080p como GIF puede pesar más que el vídeo original. Objetivo: corto, pequeño, baja resolución.",
          "Antes de MP4 → GIF recorte el clip a 2–4 segundos en un editor externo y use 10–15 FPS en lugar de 30 — el GIF no recuperará la fluidez del vídeo.",
        ],
      },
      {
        title: "Parámetros iniciales",
        paragraphs: [
          "Ancho máx. 480–640 px para memes y reacciones.",
          "Duración máx. 5 s — por encima considere MP4 en bucle.",
          "Fondo simple (pantalla verde) comprime mejor que degradados y ruido.",
        ],
      },
      {
        title: "Tras la conversión",
        paragraphs: [
          "Compruebe el tamaño — GIFs de más de 5 MB rara vez tienen sentido en una página.",
          "Si el GIF es demasiado grande, GIF → MP4 y un <video> incrustado suele salvar la situación.",
          "Toolando procesa su vídeo solo durante la conversión — no aloja GIFs terminados públicamente.",
        ],
      },
    ],
  },
}

export const guidesBatch23Uk: Record<Batch23Slug, GuideArticle> = {
  "compress-images-without-quality-loss": {
    ...pickEn("compress-images-without-quality-loss"),
    title: "Як стискати зображення JPG і PNG без помітної втрати якості",
    description:
      "Практичний посібник: коли використовувати компресор, який рівень обрати та чим стиснення відрізняється від конвертації формату.",
    sections: [
      {
        paragraphs: [
          "Стиснення зображення зменшує розмір файлу без зміни формату — у вас лишається JPG або PNG, лише легший. Конвертація JPG → WebP — це зміна формату і часто кращий результат для сайтів, але не завжди можлива (наприклад, друк вимагає JPG).",
          "Компресор зображень на Toolando.tech дозволяє регулювати якість повзунком. На фото товарів 2000×2000 px: при якості 80 % розмір зменшувався на 40–60 % без видимих артефактів на екрані.",
        ],
      },
      {
        title: "Коли стискати, а коли конвертувати",
        paragraphs: [
          "Стискайте, коли формат підходить (наприклад, магазин вимагає JPG), але файл занадто важкий для пошти чи CMS.",
          "Конвертуйте в WebP/AVIF, коли публікуєте на власному сайті й контролюєте HTML (тег <picture> із запасним варіантом).",
          "Не стискайте той самий JPG багато разів — кожне збереження погіршує якість.",
        ],
      },
      {
        title: "Типові сценарії",
        paragraphs: [
          "Вкладення e-mail: JPG quality ~75–85, максимальна ширина 1600 px.",
          "Інтернет-магазин: WebP із JPG fallback; мініатюри 800 px.",
          "Скріншот із текстом: PNG або WebP без втрат — уникайте агресивного JPG.",
        ],
      },
    ],
  },
  "merge-pdf-online-guide": {
    ...pickEn("merge-pdf-online-guide"),
    title: "Об’єднання кількох PDF в один — коли це має сенс",
    description:
      "Злиття рахунків, сканів і вкладень в один PDF — порядок сторінок, якість і конфіденційність.",
    sections: [
      {
        paragraphs: [
          "Об’єднання PDF — щоденна офісна задача: рахунок + договір + скан посвідчення в одному вкладенні. Інструмент «Об’єднання PDF» на Toolando.tech з’єднує файли в обраному вами порядку.",
          "PDF зберігає векторний текст і растрові скани — злиття не псує роздільність сканів, якщо вихідні файли не були надмірно стиснуті.",
        ],
      },
      {
        title: "Добра практика перед надсиланням",
        paragraphs: [
          "Розкладіть файли в логічному порядку (обкладинка → зміст → вкладення).",
          "Перевірте, чи кожен скан рівний (без дублікатів сторінок).",
          "Якщо одержувач лише на телефоні — орієнтуйтеся на 10–15 МБ на файл; за потреби стисніть скани перед злиттям.",
        ],
      },
      {
        title: "Конфіденційність",
        paragraphs: [
          "Ділові та особисті документи трактуйте як конфіденційні. Toolando видаляє файли після операції; все одно не надсилайте чутливі дані, якщо політика компанії це забороняє.",
        ],
      },
    ],
  },
  "spreadsheet-csv-json-guide": {
    ...pickEn("spreadsheet-csv-json-guide"),
    title: "CSV, JSON і Excel — перенесення даних між таблицями та API",
    description:
      "Коли обрати CSV, коли JSON, як уникнути зламаних символів і десяткових роздільників.",
    sections: [
      {
        paragraphs: [
          "CSV — простий текст: відкривається в Excel, Google Sheets і більшості BI-систем. JSON краще описує вкладені структури (API, конфігурації). Excel (XLSX) додає типи комірок і кілька аркушів.",
          "Типовий workflow: експорт з API як JSON → конвертація JSON → CSV → аналіз в Excel. Навпаки: таблиця клієнтів CSV → JSON → надсилання в REST API.",
        ],
      },
      {
        title: "Спецсимволи та Excel",
        paragraphs: [
          "CSV з українськими/європейськими символами має бути UTF-8. Якщо Excel псує знаки, відкрийте файл через «Дані → З тексту/CSV» і оберіть UTF-8.",
          "У CSV роздільником часто буває кома або крапка з комою (залежно від регіону Windows). TSV (табуляція) безпечніший, коли описи містять коми.",
        ],
      },
      {
        title: "Валідація після конвертації",
        paragraphs: [
          "Перевірте кількість рядків до і після конвертації.",
          "Для JSON переконайтеся, що ключі та типи (string vs number) коректні — одна відсутня лапка ламає весь файл.",
        ],
      },
    ],
  },
  "video-compress-before-sharing": {
    ...pickEn("video-compress-before-sharing"),
    title: "Як зменшити відео перед надсиланням поштою чи в WhatsApp",
    description:
      "MP4, роздільність, bitrate — практичні ліміти розміру та коли достатня конвертація контейнера.",
    sections: [
      {
        paragraphs: [
          "Записи з телефону в MOV або MKV можуть важити сотні МБ. Багато поштових скриньок блокують вкладення >25 МБ. Рішення: конвертація в MP4 (H.264 + AAC) і за потреби нижча роздільність.",
          "720p часто вистачає для перегляду на телефоні; 1080p залишайте, якщо одержувач дивитиметься на телевізорі.",
        ],
      },
      {
        title: "Кроки перед надсиланням",
        paragraphs: [
          "1) Конвертуйте MOV/MKV → MP4. 2) Перевірте розмір файлу. 3) Якщо все ще занадто великий — обріжте зайвий початок/кінець у відеоредакторі (онлайн-інструменти цього не роблять). 4) Якщо >25 МБ — надішліть посиланням з хмари.",
        ],
      },
    ],
  },
  "font-woff2-for-websites": {
    ...pickEn("font-woff2-for-websites"),
    title: "TTF, OTF, WOFF і WOFF2 — які шрифти використовувати на сайті",
    description:
      "Конвертація шрифтів під webfont, ліцензії та вплив на швидкість завантаження сторінки.",
    sections: [
      {
        paragraphs: [
          "Браузери не завантажують файли напряму з папки Fonts у Windows — потрібен формат WOFF або WOFF2 у CSS (@font-face). WOFF2 дає найменший обсяг передачі.",
          "Конвертер TTF/OTF → WOFF2 на Toolando.tech готує файл для @font-face. Пам’ятайте про ліцензію шрифту — не кожна дозволяє вбудовування на сайт.",
        ],
      },
      {
        title: "Продуктивність",
        paragraphs: [
          "Робіть subset шрифтів (лише використані символи) у професійних інструментах, якщо файл великий.",
          "Preload критичного WOFF2 у <head> для тексту above-the-fold.",
          "Використовуйте font-display: swap, щоб текст був читабельним до завантаження шрифту.",
        ],
      },
    ],
  },
  "toolando-editorial-standards": {
    ...pickEn("toolando-editorial-standards"),
    title: "Редакційні стандарти Toolando.tech — звідки беруться посібники",
    description:
      "Як створюються статті, тести конвертерів і енциклопедія форматів — прозорість для читачів і рецензентів.",
    sections: [
      {
        paragraphs: [
          "Toolando.tech розробляю самостійно (Szymon). Посібники не копіюються з Wikipedia й не генеруються масово — вони базуються на тестах конвертації реальних файлів.",
          "Кожна стаття має дату публікації та оновлення. Коли змінюються вимоги платформ (наприклад, відео Instagram) або бібліотеки конвертації, я повертаюся до тексту й виправляю його.",
        ],
      },
      {
        title: "Що я тестую",
        paragraphs: [
          "Аудіо/відео конвертери: час, розмір результату, відтворення в VLC і на телефоні.",
          "Зображення: візуальне порівняння до/після, прозорість PNG, розмір WebP vs JPG.",
          "Документи: макет після PDF ↔ DOCX, спецсимволи, таблиці в CSV/JSON.",
        ],
      },
      {
        title: "Чого я не обіцяю",
        paragraphs: [
          "Не обіцяю «100 % якості» при конвертації з втратами → з втратами.",
          "Не надаю завантаження чужих відео з YouTube/TikTok — лише легальні операції з вашими файлами.",
          "Реклама Google може з’являтися, але редакційний контент пишеться незалежно від рекламодавців.",
        ],
      },
    ],
  },
  "when-not-to-convert-files": {
    ...pickEn("when-not-to-convert-files"),
    title: "Коли НЕ конвертувати файл — 7 ситуацій, що псують якість",
    description:
      "Уникайте зайвих конвертацій: коли залишити оригінал, архів без втрат і резервну копію перед експериментом.",
    sections: [
      {
        paragraphs: [
          "Онлайн-конвертери зручні, але не кожна операція має сенс. Іноді краще залишити файл у вихідному форматі або використати архів без втрат (ZIP, FLAC).",
          "Правило: не конвертуйте з втратами «вгору», очікуючи дива — MP3 → WAV не поверне втрачені дані.",
        ],
      },
      {
        title: "Список «залишити як є»",
        paragraphs: [
          "У вас уже є PNG із прозорістю — не конвертуйте в JPG без потреби.",
          "Архів графічного проєкту — зберігайте шаровий вихідник (PSD, SVG), експортуйте JPG лише наприкінці.",
          "Студійний матеріал WAV/FLAC — не стискайте в MP3, поки не готовий фінальний мікс.",
          "PDF із цифровим підписом — конвертація може анулювати підпис.",
        ],
      },
      {
        title: "Перед натисканням «Конвертувати»",
        paragraphs: [
          "Зробіть копію оригіналу.",
          "Перевірте, чи цільова платформа вже приймає вихідний формат (часто так!).",
          "Прочитайте порівняння форматів в енциклопедії Toolando — уникнете одного зайвого кроку.",
        ],
      },
    ],
  },
  "png-vs-jpg-photos-and-graphics": {
    ...pickEn("png-vs-jpg-photos-and-graphics"),
    title: "PNG vs JPG — коли фото, а коли графіка з текстом",
    description:
      "Практичний вибір між PNG і JPG: фотографії, скріншоти, логотипи з прозорістю та друк.",
    sections: [
      {
        paragraphs: [
          "PNG і JPG — два найчастіше плутають формати. JPG чудово стискає фотографії — градієнти неба, шкіра, пейзаж — але псує гострі краї та текст. PNG зберігає кожен піксель точно, включно з прозорістю (канал alpha), але файли часто в 5–10 разів більші за JPG тієї ж роздільності.",
          "Правило з тестів Toolando.tech: фото для галереї чи соцмереж → JPG (або WebP з JPG fallback). Іконка, логотип, схема, скріншот UI → PNG. Поєднання фото + текст (наприклад, обкладинка пропозиції) → часто PNG або WebP без втрат.",
        ],
      },
      {
        title: "Коли обрати JPG",
        paragraphs: [
          "Фотографії з камери або телефону без шару прозорості.",
          "Мініатюри товарів у магазині, коли фон однорідний і alpha не потрібна.",
          "Вкладення поштою — JPG quality 80–85 зазвичай дає розумний компроміс.",
          "Домашній друк фото — багато сервісів приймають JPG у високій роздільності (300 DPI після перерахунку).",
        ],
      },
      {
        title: "Коли обрати PNG",
        paragraphs: [
          "Логотип на сайті з прозорим тлом — JPG завжди заповнить тло білим або чорним.",
          "Скріншоти інтерфейсу, графіків, коду — текст лишається різким.",
          "Плоска графіка з кількома кольорами (інфографіка, іконки застосунків).",
          "Коли плануєте подальше шарове редагування — PNG без втрат не додає артефактів при кожному збереженні (на відміну від багаторазового JPG).",
        ],
      },
      {
        title: "Типові помилки",
        paragraphs: [
          "Збереження логотипу як JPG — «сходинки» біля країв і відсутність прозорості.",
          "Збереження фото 4000×3000 як PNG «для якості» — зайві 15 МБ замість 2 МБ JPG.",
          "Цикл PNG → JPG → PNG — кожен прохід через JPG втрачає якість; тримайте master у PNG.",
        ],
      },
    ],
  },
  "flac-music-archive-guide": {
    ...pickEn("flac-music-archive-guide"),
    title: "FLAC як архів музики — коли варто, а коли MP3 достатньо",
    description:
      "Безвтратний FLAC vs MP3 320 kbps: резервна копія колекції, домашній стримінг і автомагнітоли.",
    sections: [
      {
        paragraphs: [
          "FLAC (Free Lossless Audio Codec) — стиснення без втрат, як ZIP для звуку. Після відтворення ви маєте той самий сигнал, що й у WAV, але файл займає приблизно вдвічі менше місця. MP3 назавжди видаляє дані; навіть 320 kbps не ідентичне оригіналу з CD.",
          "На практиці: якщо купуєте музику у lossless або робите rip власних дисків, FLAC — розумний формат архіву. На телефоні в навушниках Bluetooth різниця FLAC vs MP3 256 kbps часто нечутна — тоді конвертація в MP3 економить гігабайти.",
        ],
      },
      {
        title: "Workflow архіву",
        paragraphs: [
          "1) Master у FLAC (або WAV) на NAS / хмарному backup.",
          "2) Робочі копії MP3/AAC для телефону та авто.",
          "3) Ніколи не конвертуйте MP3 → FLAC «для якості» — це лише збільшить файл без відновлення даних.",
          "Конвертер FLAC → MP3 на Toolando.tech: на альбомах 40–60 хв batch передбачуваний; перевірте metadata (назва, виконавець) у плеєрі після конвертації.",
        ],
      },
      {
        title: "Сумісність",
        paragraphs: [
          "FLAC: VLC, Foobar2000, більшість плеєрів на Android; слабша підтримка в нативному Apple Music (краще ALAC в екосистемі Apple).",
          "Автомагнітоли часто читають лише MP3/WMA/AAC з флешки — тут FLAC → MP3 необхідний.",
          "Домашній стримінг (Plex, Jellyfin) без проблем підтримує FLAC.",
        ],
      },
    ],
  },
  "zip-7z-rar-when-to-use": {
    ...pickEn("zip-7z-rar-when-to-use"),
    title: "ZIP, 7z і RAR — яке архів обрати для надсилання файлів",
    description:
      "Розмір, сумісність і шифрування — коли ZIP достатньо, а коли має сенс 7z або RAR.",
    sections: [
      {
        paragraphs: [
          "Архів — один файл, що пакує багато інших: зручно для пошти, хмари та backup папок. ZIP — універсальний стандарт: відкривається на Windows, macOS і Linux без додаткового софту. 7z зазвичай дає менший результат при тих самих даних, але одержувачу може знадобитися 7-Zip. RAR трапляється в старих workflow; створення RAR онлайн має ліцензійні обмеження — частіше конвертуєте RAR → ZIP, ніж навпаки.",
        ],
      },
      {
        title: "Коли ZIP",
        paragraphs: [
          "Надсилання клієнту чи установі — найменший ризик «не відкривається».",
          "Архів коду, офісних документів, набору фото JPG.",
          "Інтеграція з системами, що приймають лише .zip (деякі форми upload).",
        ],
      },
      {
        title: "Коли 7z",
        paragraphs: [
          "Велика папка ігор, відеопроєктів, backup перед відправкою на зовнішній диск — менший файл = швидший upload.",
          "Коли одержувач технічний і має 7-Zip або аналог.",
          "Конвертація ZIP → 7z має сенс лише раз — не пакуйте ті самі дані по колу.",
        ],
      },
      {
        title: "Безпека",
        paragraphs: [
          "Пароль на архів захищає від випадкового відкриття, але не замінює end-to-end шифрування для чутливих документів.",
          "Не розпаковуйте архіви з невідомих джерел без антивірусного сканування.",
          "Toolando обробляє архів лише на час конвертації формату контейнера — вміст має бути легальним і вашим.",
        ],
      },
    ],
  },
  "svg-vs-png-logos-and-icons": {
    ...pickEn("svg-vs-png-logos-and-icons"),
    title: "SVG vs PNG — логотипи та іконки для сайту",
    description:
      "Вектор vs растр: коли експортувати логотип у SVG, а коли достатньо PNG @2x.",
    sections: [
      {
        paragraphs: [
          "SVG — векторна графіка, описана математично: масштабується на будь-якому екрані без «пікселізації». PNG — карта пікселів фіксованої роздільності; на retina часто потрібна версія у 2× більшому розмірі. На сайтах логотипи та прості іконки майже завжди мають бути SVG (або icon font), якщо файл не містить вбудованої фотографії.",
          "Конвертер SVG → PNG на Toolando.tech корисний, коли треба надіслати логотип у друкарню (часто вимагають PNG 300 DPI) або в систему, що не приймає SVG.",
        ],
      },
      {
        title: "Переваги SVG",
        paragraphs: [
          "Один файл для mobile і desktop — менше CSS, без srcset.",
          "Легка зміна кольору через CSS (fill) у простих іконках.",
          "Кращий результат у Lighthouse, ніж важкі PNG hero.",
        ],
      },
      {
        title: "Коли PNG замість SVG",
        paragraphs: [
          "Логотип із градієнтом, тінню чи ефектом, який погано експортується з вектора.",
          "Мініатюри Open Graph / social preview — багато платформ усе одно растеризують.",
          "Десктопні застосунки без SVG-движка.",
          "Експорт @2x PNG (наприклад, 512×512) як fallback у <img> поруч із inline SVG.",
        ],
      },
    ],
  },
  "podcast-export-mp3-aac-settings": {
    ...pickEn("podcast-export-mp3-aac-settings"),
    title: "Експорт подкасту — MP3 чи AAC і який bitrate",
    description:
      "Налаштування після запису в Audacity, Reaper або на телефоні: mono, 44,1 kHz і розумне стиснення.",
    sections: [
      {
        paragraphs: [
          "Подкаст — це переважно мова; не потрібен stereo 320 kbps як для студійної музики. Більшість платформ (Spotify, Apple Podcasts, RSS-хостинг) усе одно перекодують upload у свої профілі. Все одно варто надіслати розумний master: mono або stereo, 44,1 або 48 kHz, MP3 128–192 kbps або AAC/M4A 128 kbps.",
          "Запис у WAV або FLAC? Фінальний експорт майже завжди MP3 або AAC — конвертер WAV → MP3 на Toolando.tech перевіряв на епізодах 30–60 хв; файл ~30 МБ WAV зменшується до ~28 МБ при 128 kbps stereo (для однієї мови mono — ~15 МБ).",
        ],
      },
      {
        title: "Рекомендовані налаштування",
        paragraphs: [
          "Solo / інтерв’ю з одним голосом: mono, MP3 96–128 kbps — менший файл, та сама зрозумілість.",
          "Два голоси на окремих доріжках: stereo 128 kbps.",
          "Музичний intro/outro в stereo, решта mono — експортуйте все stereo 128 kbps для простоти.",
          "Уникайте 64 kbps — шиплячі «с» і шум фону на слабких мікрофонах.",
        ],
      },
      {
        title: "MP3 vs AAC (M4A)",
        paragraphs: [
          "AAC при тій самій bitrate звучить трохи краще за MP3 — екосистема Apple надає перевагу M4A.",
          "MP3 має найширшу сумісність у старих плеєрах і автомобілях.",
          "Не надсилайте сирий WAV на хостинг подкасту — зайво довгий upload.",
        ],
      },
    ],
  },
  "gif-vs-mp4-for-animations": {
    ...pickEn("gif-vs-mp4-for-animations"),
    title: "GIF vs MP4 — анімації на сайті та в соцмережах",
    description:
      "Коли старий GIF має сенс, а коли коротке MP4 або WebM заощадить мегабайти.",
    sections: [
      {
        paragraphs: [
          "GIF відтворюється всюди, але технічно це послідовність кадрів без сучасного відеостиснення — 5-секундна анімація 720p може важити 10–20 МБ. Те саме в MP4 (H.264) часто вміщується в 500 КБ–1 МБ при прийнятній якості.",
          "Конвертація MP4 → GIF на Toolando.tech має сенс для коротких петель (loader, реакція в Slack), коли платформа не дозволяє вбудувати відео. На власному сайті краще <video autoplay loop muted playsinline> з MP4 або WebM.",
        ],
      },
      {
        title: "Коли GIF",
        paragraphs: [
          "Коротка петля (<5 с), мала роздільність (≤480 px ширини).",
          "Вимога платформи (деякі форуми лише GIF).",
          "Проста графіка з кількома кольорами — тоді GIF може бути справді легким.",
        ],
      },
      {
        title: "Коли MP4/WebM",
        paragraphs: [
          "Анімація з багатьма кольорами, градієнтами, відеокліпом.",
          "Сайт — кращий LCP і менший transfer.",
          "Instagram/TikTok усе одно вимагають відео, не GIF.",
        ],
      },
      {
        title: "Поради для MP4 → GIF",
        paragraphs: [
          "Обріжте довжину — кожна секунда це десятки кадрів.",
          "Зменште роздільність перед конвертацією.",
          "Обмежте палітру кольорів, якщо інструмент це пропонує (менше banding).",
        ],
      },
    ],
  },
  "tiff-and-png-for-document-scans": {
    ...pickEn("tiff-and-png-for-document-scans"),
    title: "Скани документів — TIFF, PNG чи JPG",
    description:
      "Архівування рахунків і договорів: безвтратність, багатосторінковість і коли можна обійтися PDF.",
    sections: [
      {
        paragraphs: [
          "Сканування рахунку чи договору — інший випадок, ніж відпускне фото. Текст і печатки потребують гострих країв — агресивний JPG створює «розмаз» навколо літер. TIFF (часто LZW без втрат) і PNG безпечніші на етапі архіву. Для надсилання та OCR у підсумку часто конвертуєте в PDF або JPG помірної якості.",
          "Багатосторінковий TIFF може бути одним файлом із кількома шарами — не кожен viewer це підтримує; для установи та клієнта багатосторінковий PDF зрозуміліший (об’єднання PDF на Toolando.tech).",
        ],
      },
      {
        title: "Рекомендований workflow",
        paragraphs: [
          "Сканер → PNG або TIFF на сторінку (300 DPI для друку, 150 DPI для перегляду).",
          "Виправлення обертання/кадрування в редакторі.",
          "З’єднати сторінки в один PDF для надсилання.",
          "Опційно JPG quality 90 лише якщо одержувач не приймає PDF.",
        ],
      },
      {
        title: "Чого уникати",
        paragraphs: [
          "JPG quality 60 на рахунку — суми можуть стати нечитабельними.",
          "Багаторазова конвертація TIFF → JPG → TIFF.",
          "Кольоровий скан у 600 DPI «про всяк випадок» — гігабайти без користі для A4 тексту.",
        ],
      },
    ],
  },
  "markdown-to-pdf-workflow": {
    ...pickEn("markdown-to-pdf-workflow"),
    title: "З Markdown у PDF — документація, README та нотатки",
    description:
      "Шлях MD → HTML → PDF/DOCX: коли достатньо експорту з редактора, а коли потрібен онлайн-конвертер.",
    sections: [
      {
        paragraphs: [
          "Markdown — формат письма: заголовки, списки, код — без WYSIWYG-макету. Розробники тримають README.md у репозиторії; потім треба надіслати PDF клієнту або друкувати специфікацію. Типовий шлях: MD → HTML (render) → PDF через «Друк у PDF» у браузері або MD → DOCX → PDF для кращого контролю колонтитулів.",
          "Конвертери MD → HTML і DOCX → PDF на Toolando.tech перевіряв на файлах 20–40 КБ: українські символи та блоки коду проходять коректно, якщо MD у UTF-8.",
        ],
      },
      {
        title: "Коли який шлях",
        paragraphs: [
          "Швидкий перегляд: MD → HTML, відкрити в браузері.",
          "Формальний документ з нумерацією сторінок: MD → DOCX (або редактор), корпоративний стиль, потім DOCX → PDF.",
          "Лише нотатки без стилю: достатньо MD → TXT.",
        ],
      },
      {
        title: "Добрі практики MD",
        paragraphs: [
          "Один файл = одна тема; довгі документи діліть на розділи.",
          "Зображення посилайте відносно — після конвертації перевірте шляхи.",
          "Таблиці в MD бувають проблемними в PDF — розгляньте CSV або DOCX для табличних даних.",
        ],
      },
    ],
  },
  "extract-images-from-pdf-pages": {
    ...pickEn("extract-images-from-pdf-pages"),
    title: "Як витягнути зображення зі сторінок PDF (JPG, PNG, WebP)",
    description:
      "Презентації, каталоги та скани — коли експорт сторінки як зображення має сенс і яка роздільність.",
    sections: [
      {
        paragraphs: [
          "PDF — контейнер: всередині можуть бути вектори, шрифти та вбудовані bitmap. PDF → JPG рендерить кожну сторінку як растр. Це не те саме, що витягнути окреме вбудоване лого (потрібен PDF-редактор), але для слайдів, плакатів і сканів працює чудово.",
          "Презентація 16:9 після експорту в PNG 1920 px ширини виглядає різко на екрані; для друку A4 ціль ~2480×3508 px (300 DPI), якщо інструмент дозволяє високу роздільність.",
        ],
      },
      {
        title: "JPG vs PNG vs WebP",
        paragraphs: [
          "Слайд із фото на тлі → JPG або WebP.",
          "Слайд із графіком і текстом → PNG (різкіші літери).",
          "Мініатюра для сайту → WebP з JPG fallback після подальшої конвертації.",
        ],
      },
      {
        title: "Багатосторінкові PDF",
        paragraphs: [
          "Експортуйте окремі сторінки, якщо потрібні лише слайди 5 і 12.",
          "Для галереї всіх сторінок — конвертуйте весь файл і сортуйте за номером у назві.",
          "Пам’ятайте про авторські права — чужий PDF не ваше фото для вільної публікації.",
        ],
      },
    ],
  },
  "convert-video-to-gif-properly": {
    ...pickEn("convert-video-to-gif-properly"),
    title: "Як зробити хороший GIF з відео — роздільність, FPS і довжина",
    description:
      "Конвертація MP4/MOV у GIF без гігантського файлу: практичні ліміти та альтернативи.",
    sections: [
      {
        paragraphs: [
          "GIF не має звуку і не використовує H.264 — кожен кадр це повний bitmap (часто палітра 256 кольорів). Тому 10-секундний кліп 1080p як GIF може важити більше за оригінальне відео. Ціль: коротко, мало, у низькій роздільності.",
          "Перед MP4 → GIF у зовнішньому редакторі обріжте кліп до 2–4 секунд і встановіть 10–15 FPS замість 30 — GIF усе одно не поверне плавність фільму.",
        ],
      },
      {
        title: "Стартові параметри",
        paragraphs: [
          "Максимальна ширина 480–640 px для мемів і реакцій.",
          "Максимальна довжина 5 с — вище розгляньте MP4 у петлі.",
          "Простий фон (green screen) легше стискається, ніж градієнт і шум.",
        ],
      },
      {
        title: "Після конвертації",
        paragraphs: [
          "Перевірте розмір файлу — GIF понад 5 МБ рідко має сенс на сторінці.",
          "Якщо GIF занадто великий, конвертація GIF → MP4 і вбудовування <video> часто рятує ситуацію.",
          "Toolando обробляє ваше відео лише на час конвертації — готові GIF не хостяться публічно.",
        ],
      },
    ],
  },
}
