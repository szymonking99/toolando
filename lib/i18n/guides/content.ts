import type { GuideArticle, GuidesHubMeta, GuideSection } from "./types"
import { GUIDE_SLUGS, type GuideSlug } from "./slugs"
import { contentLocales, resolveContentLocale } from "../content-locale"
import { getGuidesHubMeta } from "./hubs"
import {
  guidesBatch4De,
  guidesBatch4Es,
  guidesBatch4Uk,
} from "./batch-4"
import { guidesBatch23De, guidesBatch23Es, guidesBatch23Uk } from "./batch-2-3-locales"
import { guidesPl } from "./guides-pl"
import { guidesEn } from "./guides-en"
import {
  guidesAr,
  guidesCs,
  guidesDa,
  guidesEl,
  guidesFi,
  guidesFr,
  guidesHi,
  guidesHu,
  guidesId,
  guidesIt,
  guidesJa,
  guidesKo,
  guidesNl,
  guidesNo,
  guidesPt,
  guidesRo,
  guidesRu,
  guidesSv,
  guidesTr,
  guidesZh,
} from "./locale-guides"


export { getGuidesHubMeta }
export { GUIDE_SLUGS, type GuideSlug } from "./slugs"
export type { GuideArticle, GuidesHubMeta, GuideSection } from "./types"


const guidesDe: Record<GuideSlug, GuideArticle> = {
  "mp3-vs-wav": {
    ...guidesEn["mp3-vs-wav"],
    title: "MP3 vs WAV — wann Audio konvertieren?",
    description:
      "MP3 vs WAV im Vergleich: verlustbehaftete vs verlustfreie Kompression, Dateigröße und DAW-Bearbeitung.",
    sections: [
      {
        paragraphs: [
          "MP3 nutzt verlustbehaftete Kompression — Dateien sind klein, aber ein Teil der Audiodaten geht dauerhaft verloren. WAV bewahrt die volle Qualität (verlustfrei oder unkomprimiert), Dateien können aber 10× größer als MP3 sein.",
          "In der Praxis: Hören auf dem Handy → MP3 reicht. Podcast in Audacity schneiden oder in FL Studio mischen → mit WAV oder FLAC arbeiten.",
        ],
      },
      {
        title: "Wann MP3 → WAV konvertieren",
        paragraphs: [
          "Wenn eine Plattform oder App ein verlustfreies Format für die weitere Bearbeitung verlangt.",
          "Wenn Sie mehrere Schnitte, Effekte und Mastering planen — jede Operation an MP3 verschlechtert die Qualität.",
          "Hinweis: MP3 → WAV stellt verlorene Qualität nicht wieder her, stoppt aber weitere Degradation während der Bearbeitung.",
        ],
      },
      {
        title: "Wann WAV → MP3 konvertieren",
        paragraphs: [
          "Aufnahme per E-Mail oder Chat senden — kleinere Datei = schnellerer Transfer.",
          "Podcast oder Musik zum Anhören veröffentlichen, nicht zum Bearbeiten.",
          "Speicherplatz in einer großen Audiobibliothek sparen.",
        ],
      },
    ],
  },
  "pdf-to-jpg": {
    ...guidesEn["pdf-to-jpg"],
    title: "PDF in JPG konvertieren — für Druck und Web",
    description: "Wann PDF-Seiten als JPG exportieren und wann PNG besser ist.",
    sections: [
      {
        paragraphs: [
          "PDF bewahrt das Seitenlayout. Manchmal brauchen Sie einzelne Seiten als Bilder — für eine Website, PowerPoint oder den Druck einer einzelnen Seite.",
          "Der PDF → JPG-Konverter in Toolando.tech rendert jede Seite als separates JPG. Dateien werden nicht gespeichert — nach der Konvertierung sofort gelöscht.",
        ],
      },
      {
        title: "JPG oder PNG aus PDF?",
        paragraphs: [
          "JPG — kleinere Dateien, ideal für Fotos und Dokumente ohne Transparenz.",
          "PNG — verlustfrei mit Transparenz; besser für Grafiken mit Text und scharfen Kanten.",
        ],
      },
    ],
  },
  "webp-avif-images": {
    ...guidesEn["webp-avif-images"],
    title: "WebP und AVIF — moderne Bildformate für Websites",
    description: "WebP und AVIF vs JPG/PNG: Kompression und Browser-Unterstützung.",
    sections: [
      {
        paragraphs: [
          "JPG und PNG dominieren das Web seit Jahren, aber WebP erzeugt Dateien 25–35 % kleiner als JPG bei gleicher visueller Qualität. AVIF geht weiter — Dateien können halb so groß wie WebP sein.",
          "Alle modernen Browser unterstützen WebP. AVIF hat etwas schwächere Unterstützung in älteren Safari-Versionen.",
        ],
      },
      {
        title: "Einführungsstrategie",
        paragraphs: [
          "JPG → WebP für Produktfotos und Banner konvertieren — beschleunigt den Seitenaufbau.",
          "JPG als Fallback für ältere Browser behalten (HTML-<picture>-Tag).",
          "Für Logos mit Transparenz: PNG → WebP statt JPG.",
        ],
      },
    ],
  },
  "extract-audio-from-video": {
    ...guidesEn["extract-audio-from-video"],
    title: "Audio aus Video extrahieren — die legale Alternative",
    description: "Wie Sie legal Audio aus eigenen Videodateien extrahieren.",
    sections: [
      {
        paragraphs: [
          "Manchmal haben Sie eine Videodatei und brauchen nur den Ton. Toolando.tech extrahiert Audio aus MP4, MOV, AVI, MKV und speichert es als MP3, WAV, FLAC oder AAC.",
          "Das ist legal an Ihrer eigenen Datei — anders als Musik von YouTube oder TikTok herunterzuladen, was Toolando.tech bewusst nicht anbietet.",
        ],
      },
    ],
  },
  "json-csv-xml": {
    ...guidesEn["json-csv-xml"],
    title: "JSON, CSV und XML — Daten zwischen Formaten konvertieren",
    description: "Wann JSON, CSV, TSV und XML verwenden.",
    sections: [
      {
        paragraphs: [
          "JSON ist der Standard für REST-APIs und App-Konfiguration. CSV und TSV dienen dem Excel-Import. XML kommt in älteren Enterprise-Systemen und RSS vor.",
          "JSON → CSV öffnet eine API-Antwort in Excel. CSV → JSON bereitet Daten für eine REST-API vor. Toolando.tech erhält die Datenstruktur bei der Konvertierung.",
        ],
      },
    ],
  },
  "online-file-security": {
    ...guidesEn["online-file-security"],
    title: "Dateisicherheit in Online-Tools",
    description: "Wie Toolando.tech Dateien verarbeitet und Datenschutz.",
    sections: [
      {
        paragraphs: [
          "Dateien an Online-Tools zu senden wirft berechtigte Fragen auf. Bei Toolando.tech dienen Dateien ausschließlich der gewünschten Operation — Konvertierung, Kompression oder Vorschau.",
          "Nach Abschluss werden Dateien vom Server gelöscht. Manche Tools (universeller Öffner) laufen komplett im Browser — die Datei verlässt Ihren Rechner nicht. Die Verbindung ist verschlüsselt (HTTPS).",
        ],
      },
      {
        title: "Was wir NICHT mit Ihren Dateien tun",
        paragraphs: [
          "Wir verkaufen keine Dateien oder Metadaten an Dritte.",
          "Wir nutzen Uploads nicht zum Training von KI-Modellen.",
          "Wir behalten keine Kopien „für alle Fälle“ — nach dem Job verschwindet die Datei vom Server.",
        ],
      },
      {
        title: "Wann die Datei länger auf dem Server bleibt",
        paragraphs: [
          "Nur während der Konvertierung (meist Sekunden bis eine Minute). Bei großen Videos bis 500 MB kann es länger dauern — die Datei wird danach trotzdem gelöscht.",
          "Eine Premium-Option mit Konto kann Operationshistorie speichern (Metadaten, nicht Dateien) — Details in der Datenschutzrichtlinie.",
        ],
      },
    ],
  },
  "lossy-vs-lossless": {
    ...guidesEn["lossy-vs-lossless"],
    title: "Verlustbehaftet vs verlustfrei — ein einfacher Leitfaden",
    description: "Unterschiede und wie Sie Qualitätsverlust vermeiden.",
    sections: [
      {
        paragraphs: [
          "Verlustbehaftete Formate (MP3, JPG, AAC, H.264) verwerfen Daten, um Dateien zu verkleinern. Verlustfreie Formate (FLAC, PNG, WAV, ZIP) behalten alle Daten, erzeugen aber größere Dateien.",
          "Regel: nur dann verlustbehaftet → verlustfrei konvertieren, wenn nötig — verlorene Qualität kommt nicht zurück. Verlustbehaftet → verlustbehaftet nur einmal — jede erneute Konvertierung verschlechtert das Ergebnis.",
        ],
      },
      {
        title: "Beispiele aus der Praxis",
        paragraphs: [
          "Musik: FLAC → MP3 vor dem Versand an Freunde OK; MP3 → FLAC vor dem Mastering NEIN.",
          "Fotos: RAW/JPG aus der Kamera → JPG-Export fürs Web OK; wiederholtes JPG → JPG im Messenger verschlechtert die Qualität.",
          "Video: MP4 (H.264) ist verlustbehaftet, aber Standard — nicht ohne Grund neu encodieren.",
        ],
      },
      {
        title: "Wo Sie den Formattyp prüfen",
        paragraphs: [
          "In der Format-Enzyklopädie von Toolando ist jedes Format als verlustbehaftet/verlustfrei/Container gekennzeichnet.",
          "Vergleiche MP3 vs FLAC und JPG vs WebP erklären das Urteil auf einer Seite.",
        ],
      },
    ],
  },
  "heic-iphone-jpg": {
    ...guidesEn["heic-iphone-jpg"],
    title: "HEIC vom iPhone — öffnen und in JPG konvertieren",
    description: "Kompatibilitätsprobleme und Konvertierung zu JPG/PNG.",
    sections: [
      {
        paragraphs: [
          "Apple speichert Fotos standardmäßig als HEIC — kleiner als JPG bei gleicher Qualität. Problem: Windows ohne Erweiterung, ältere Apps und viele Dienste unterstützen HEIC nicht.",
          "Lösung: HEIC → JPG oder HEIC → PNG in Toolando.tech konvertieren, bevor Sie per E-Mail senden, hochladen oder drucken. Im iPhone können Sie unter Einstellungen auch „Maximale Kompatibilität“ (JPG) aktivieren.",
        ],
      },
    ],
  },
  "pdf-vs-docx": {
    ...guidesEn["pdf-vs-docx"],
    title: "PDF vs DOCX — welches Format wann?",
    description: "Unterschiede bei Bearbeitung, Druck und Archivierung.",
    sections: [
      {
        paragraphs: [
          "DOCX (Word) dient der Textbearbeitung — Inhalt, Styles, Überschriften. PDF friert das Layout ein — identisch auf jedem Gerät, ideal für Rechnungen, Verträge und Lebensläufe.",
          "DOCX → PDF konvertieren, bevor Sie „nur zum Lesen“ senden. PDF → DOCX nur, wenn Sie Text bearbeiten müssen — das Layout kann brechen. Für Archiv und Druck immer PDF wählen.",
        ],
      },
    ],
  },
  "video-social-media": {
    ...guidesEn["video-social-media"],
    title: "Video für Social Media — MP4, Auflösung und Bitrate",
    description: "Vorbereitung für Instagram, TikTok, YouTube.",
    sections: [
      {
        paragraphs: [
          "Instagram, TikTok, YouTube und Facebook bevorzugen MP4 mit H.264-Video und AAC-Audio. Konvertieren Sie MOV, AVI oder MKV vor dem Upload zu MP4, um Fehler zu vermeiden.",
          "1080p (1920×1080) reicht für die meisten Plattformen. Höhere Bitrate = bessere Qualität, aber größere Datei. Details zu MP4, WebM und MOV finden Sie in der Format-Enzyklopädie.",
        ],
      },
    ],
  },
  "choose-audio-bitrate": {
    ...guidesEn["choose-audio-bitrate"],
    title: "Welche MP3- oder AAC-Bitrate wählen?",
    description: "128 vs 192 vs 320 kbps — praktische Empfehlungen.",
    sections: [
      {
        paragraphs: [
          "Bitrate ist die Datenmenge pro Sekunde Audio. Höhere Bitrate bedeutet meist besseren Klang, aber größere Dateien. Bei MP3 ist der Unterschied zwischen 128 und 320 kbps vor allem an guten Lautsprechern und dichter Musik hörbar.",
          "Für Sprache (Podcasts, Interviews) reichen oft 96–128 kbps Mono. Für Musik mit Kopfhörern sind 192–256 kbps Stereo ein solider Kompromiss. 320 kbps ist die praktische MP3-Obergrenze — höher bringt selten Gewinn, weil das Format weiterhin verlustbehaftet ist.",
        ],
      },
      {
        title: "MP3, AAC und Opus — kurzer Vergleich",
        paragraphs: [
          "AAC (M4A) klingt bei gleicher Bitrate meist besser als MP3 — deshalb nutzen YouTube und Apple Music es.",
          "Opus glänzt in VoIP und Streaming bei niedrigen Bitraten (64–128 kbps).",
          "Für Studioarchive WAV oder FLAC behalten — eine verlustbehaftete Bitrate stellt fehlende Daten nicht wieder her.",
        ],
      },
      {
        title: "Typische Fehler",
        paragraphs: [
          "Ein niedriges MP3 auf höhere Bitrate hochzurechnen verbessert den Klang nicht — nur die Dateigröße wächst.",
          "Mehrfaches Neuencodieren desselben Tracks (MP3 → AAC → MP3) verschlechtert die Qualität jedes Mal.",
          "Für Videoprojekte Audio aus dem eigenen MP4 extrahieren statt fremde Musik herunterzuladen — Urheberrecht zählt.",
        ],
      },
    ],
  },
  "prepare-images-for-web": {
    ...guidesEn["prepare-images-for-web"],
    title: "Bilder fürs Web vorbereiten (JPG, WebP, AVIF)",
    description: "Auflösung, Kompression und Formate für schnellere Seiten.",
    sections: [
      {
        paragraphs: [
          "Riesige Kamerabilder (4000×3000 px) verlangsamen jede Seite. Vor dem Upload auf Blog oder Shop auf die echte Anzeigegröße skalieren — z. B. 1600 px Breite für ein Hero-Banner.",
          "JPG bleibt die sichere Universalwahl. WebP und AVIF erzeugen kleinere Dateien bei gleicher visueller Qualität — in modernen Stacks mit <picture>-Fallback für ältere Browser nutzen.",
        ],
      },
      {
        title: "Wann PNG statt JPG",
        paragraphs: [
          "Logos, Icons und UI-Screenshots — PNG oder verlustfreies WebP halten Kanten scharf.",
          "Produktfotos auf weißem Hintergrund komprimieren oft gut als JPG Qualität 80–85.",
          "Denselben Banner nicht wiederholt als JPG speichern — jeder Durchgang erzeugt Artefakte.",
        ],
      },
      {
        title: "Checkliste vor der Veröffentlichung",
        paragraphs: [
          "1) Auf Zielbreite in px skalieren. 2) Format wählen (JPG/WebP/AVIF). 3) Dateigröße prüfen (<200 KB Thumbnails, <500 KB große Blogbilder). 4) PageSpeed Insights ausführen und LCP vor/nach vergleichen.",
        ],
      },
    ],
  },
  "docx-pdf-workflow": {
    ...guidesEn["docx-pdf-workflow"],
    title: "DOCX → PDF im Büroalltag",
    description: "Wann PDF statt DOCX senden und typische Fehler vermeiden.",
    sections: [
      {
        paragraphs: [
          "DOCX ist zum Bearbeiten — ideal, wenn der Empfänger Word hat und Text ändern soll. PDF ist zum Lesen — Layout, Schriften und Ränder wirken auf Windows, Mac und Handy identisch.",
          "Vor dem Versand von Lebenslauf, Angebot oder Vertrag DOCX → PDF konvertieren. Empfänger ändern den Inhalt nicht versehentlich, und Ersatzschriften zerstören nicht Ihr Branding.",
        ],
      },
      {
        title: "Wann NICHT PDF → DOCX konvertieren",
        paragraphs: [
          "Gescannte Rechnungen und unterschriebene Verträge — PDF als Archiv behalten; OCR ist ein eigener Schritt.",
          "Komplexe mehrseitige Layouts (Kataloge, Broschüren) — DOCX-Konvertierung zerstört oft die Paginierung.",
          "Wenn Sie nur einen Textausschnitt brauchen, aus dem PDF kopieren statt die ganze Datei zu konvertieren.",
        ],
      },
      {
        title: "Sicherheit und Datenschutz",
        paragraphs: [
          "Bei Toolando.tech dienen DOCX- und PDF-Dateien nur der Konvertierung und werden nach dem Job gelöscht.",
          "Bei sensiblen Dokumenten (Ausweise, Kontonummern) HTTPS nutzen und keine Kopien unverschlüsselt auf öffentlichen Cloud-Laufwerken lassen.",
        ],
      },
    ],
  },
  ...guidesBatch23De,
  ...guidesBatch4De,
}

const guidesEs: Record<GuideSlug, GuideArticle> = {
  "mp3-vs-wav": {
    ...guidesEn["mp3-vs-wav"],
    title: "MP3 vs WAV — ¿cuándo convertir audio?",
    description: "Comparación MP3 y WAV: compresión con y sin pérdida.",
    sections: [
      {
        paragraphs: [
          "MP3 usa compresión con pérdida: los archivos son pequeños, pero parte de los datos de audio se pierde para siempre. WAV conserva la calidad completa (sin pérdida o sin comprimir), pero los archivos pueden ser 10× mayores que MP3.",
          "En la práctica: escuchar en el móvil → MP3 basta. Editar un podcast en Audacity o mezclar en FL Studio → trabaje con WAV o FLAC.",
        ],
      },
      {
        title: "Cuándo convertir MP3 → WAV",
        paragraphs: [
          "Cuando una plataforma o app exige un formato sin pérdida para seguir editando.",
          "Cuando planea varios cortes, efectos y mastering: cada operación sobre MP3 degrada la calidad.",
          "Nota: MP3 → WAV no recupera la calidad perdida, pero detiene más degradación durante la edición.",
        ],
      },
      {
        title: "Cuándo convertir WAV → MP3",
        paragraphs: [
          "Enviar una grabación por correo o chat: archivo más pequeño = transferencia más rápida.",
          "Publicar un podcast o música para escuchar, no para editar.",
          "Ahorrar espacio en una biblioteca de audio grande.",
        ],
      },
    ],
  },
  "pdf-to-jpg": {
    ...guidesEn["pdf-to-jpg"],
    title: "Cómo convertir PDF a JPG para impresión y web",
    description: "Cuándo exportar páginas PDF como JPG o PNG.",
    sections: [
      {
        paragraphs: [
          "PDF conserva el diseño de página. A veces necesita páginas sueltas como imágenes: para una web, PowerPoint o imprimir una sola página.",
          "El convertidor PDF → JPG de Toolando.tech renderiza cada página como un JPG aparte. Los archivos no se almacenan: se eliminan justo después de la conversión.",
        ],
      },
      {
        title: "¿JPG o PNG desde PDF?",
        paragraphs: [
          "JPG — archivos más pequeños, ideal para fotos y documentos sin transparencia.",
          "PNG — sin pérdida y con transparencia; mejor para gráficos con texto y bordes nítidos.",
        ],
      },
    ],
  },
  "webp-avif-images": {
    ...guidesEn["webp-avif-images"],
    title: "WebP y AVIF — formatos modernos para sitios web",
    description: "WebP y AVIF vs JPG/PNG: compresión y compatibilidad.",
    sections: [
      {
        paragraphs: [
          "JPG y PNG dominan la web desde hace años, pero WebP genera archivos un 25–35 % más pequeños que JPG con la misma calidad visual. AVIF va más allá: los archivos pueden ser la mitad que WebP.",
          "Todos los navegadores modernos admiten WebP. AVIF tiene un soporte algo más débil en versiones antiguas de Safari.",
        ],
      },
      {
        title: "Estrategia de despliegue",
        paragraphs: [
          "Convierta JPG → WebP para fotos de producto y banners: acelera la carga.",
          "Mantenga JPG como alternativa para navegadores antiguos (etiqueta HTML <picture>).",
          "Para logos con transparencia: PNG → WebP en lugar de JPG.",
        ],
      },
    ],
  },
  "extract-audio-from-video": {
    ...guidesEn["extract-audio-from-video"],
    title: "Extraer audio de video — la alternativa legal",
    description: "Cómo extraer audio legalmente de tus propios videos.",
    sections: [
      {
        paragraphs: [
          "A veces tiene un vídeo y solo necesita el audio. Toolando.tech extrae audio de MP4, MOV, AVI, MKV y lo guarda como MP3, WAV, FLAC o AAC.",
          "Es legal sobre su propio archivo — a diferencia de descargar música de YouTube o TikTok, que Toolando.tech deliberadamente no ofrece.",
        ],
      },
    ],
  },
  "json-csv-xml": {
    ...guidesEn["json-csv-xml"],
    title: "JSON, CSV y XML — convertir datos entre formatos",
    description: "Cuándo usar JSON, CSV, TSV y XML.",
    sections: [
      {
        paragraphs: [
          "JSON es el estándar de APIs REST y configuración de apps. CSV y TSV sirven para importar a Excel. XML se usa en sistemas enterprise antiguos y RSS.",
          "JSON → CSV abre una respuesta de API en Excel. CSV → JSON prepara datos para una API REST. Toolando.tech conserva la estructura de datos en la conversión.",
        ],
      },
    ],
  },
  "online-file-security": {
    ...guidesEn["online-file-security"],
    title: "Seguridad de archivos en herramientas online",
    description: "Cómo Toolando.tech procesa archivos y privacidad.",
    sections: [
      {
        paragraphs: [
          "Subir archivos a herramientas online genera dudas naturales. En Toolando.tech los archivos solo sirven para la operación que pide: conversión, compresión o vista previa.",
          "Al terminar, se eliminan del servidor. Algunas herramientas (abridor universal) funcionan por completo en el navegador: el archivo no sale de su ordenador. La conexión va cifrada (HTTPS).",
        ],
      },
      {
        title: "Qué NO hacemos con sus archivos",
        paragraphs: [
          "No vendemos archivos ni metadatos a terceros.",
          "No usamos las subidas para entrenar modelos de IA.",
          "No guardamos copias «por si acaso»: tras el trabajo el archivo desaparece del disco del servidor.",
        ],
      },
      {
        title: "Cuándo el archivo permanece más tiempo en el servidor",
        paragraphs: [
          "Solo durante la conversión (suele ser de segundos a un minuto). Con vídeos grandes de hasta 500 MB puede tardar más; el archivo se elimina al terminar igual.",
          "Una opción premium con cuenta puede guardar historial de operaciones (metadatos, no archivos): detalles en la política de privacidad.",
        ],
      },
    ],
  },
  "lossy-vs-lossless": {
    ...guidesEn["lossy-vs-lossless"],
    title: "Compresión con vs sin pérdida — guía simple",
    description: "Diferencias y cómo evitar pérdida de calidad.",
    sections: [
      {
        paragraphs: [
          "Los formatos con pérdida (MP3, JPG, AAC, H.264) descartan datos para reducir el tamaño. Los sin pérdida (FLAC, PNG, WAV, ZIP) conservan todos los datos, pero generan archivos mayores.",
          "Regla: convierta con pérdida → sin pérdida solo cuando deba; no recupera la calidad perdida. Convierta con pérdida → con pérdida solo una vez; cada reconversión degrada el resultado.",
        ],
      },
      {
        title: "Ejemplos prácticos",
        paragraphs: [
          "Música: FLAC → MP3 antes de enviarlo a un amigo OK; MP3 → FLAC antes del mastering NO.",
          "Fotos: RAW/JPG de la cámara → exportación JPG para la web OK; JPG → JPG repetido en el mensajero empeora la calidad.",
          "Vídeo: MP4 (H.264) es con pérdida, pero es el estándar — no lo recodifique sin motivo.",
        ],
      },
      {
        title: "Dónde comprobar el tipo de formato",
        paragraphs: [
          "En la enciclopedia de formatos de Toolando cada formato indica con pérdida / sin pérdida / contenedor.",
          "Las comparaciones MP3 vs FLAC y JPG vs WebP resumen el veredicto en una página.",
        ],
      },
    ],
  },
  "heic-iphone-jpg": {
    ...guidesEn["heic-iphone-jpg"],
    title: "HEIC del iPhone — abrir y convertir a JPG",
    description: "Problemas de compatibilidad y conversión a JPG/PNG.",
    sections: [
      {
        paragraphs: [
          "Apple guarda las fotos en HEIC por defecto: más pequeño que JPG con la misma calidad. Problema: Windows sin extensión, apps antiguas y muchos servicios no admiten HEIC.",
          "Solución: convierta HEIC → JPG o HEIC → PNG en Toolando.tech antes de enviar por correo, subir o imprimir. También puede activar «Más compatible» (JPG) en Ajustes del iPhone.",
        ],
      },
    ],
  },
  "pdf-vs-docx": {
    ...guidesEn["pdf-vs-docx"],
    title: "PDF vs DOCX — ¿qué formato cuándo?",
    description: "Diferencias en edición, impresión y archivo.",
    sections: [
      {
        paragraphs: [
          "DOCX (Word) sirve para editar texto: contenido, estilos, encabezados. PDF fija el diseño: idéntico en cada dispositivo, ideal para facturas, contratos y CV.",
          "Convierta DOCX → PDF antes de enviar «solo para lectura». Convierta PDF → DOCX solo si debe editar texto: el diseño puede romperse. Para archivo e impresión, elija siempre PDF.",
        ],
      },
    ],
  },
  "video-social-media": {
    ...guidesEn["video-social-media"],
    title: "Video para redes sociales — MP4, resolución y bitrate",
    description: "Preparación para Instagram, TikTok, YouTube.",
    sections: [
      {
        paragraphs: [
          "Instagram, TikTok, YouTube y Facebook prefieren MP4 con vídeo H.264 y audio AAC. Convierta MOV, AVI o MKV a MP4 antes de publicar para evitar errores de subida.",
          "1080p (1920×1080) basta para la mayoría de plataformas. Mayor bitrate = mejor calidad, pero archivo más grande. Consulte la enciclopedia de formatos para MP4, WebM y MOV.",
        ],
      },
    ],
  },
  "choose-audio-bitrate": {
    ...guidesEn["choose-audio-bitrate"],
    title: "¿Qué bitrate MP3 o AAC elegir?",
    description: "128 vs 192 vs 320 kbps — guía práctica.",
    sections: [
      {
        paragraphs: [
          "El bitrate es la cantidad de datos por segundo de audio. Más bitrate suele sonar mejor, pero el archivo crece. En MP3, la diferencia entre 128 y 320 kbps se nota sobre todo en buenos altavoces y música densa.",
          "Para voz (podcasts, entrevistas) suelen bastar 96–128 kbps mono. Para música con auriculares, 192–256 kbps estéreo es un buen equilibrio. 320 kbps es el techo práctico de MP3: subir más rara vez ayuda porque el formato sigue siendo con pérdida.",
        ],
      },
      {
        title: "MP3, AAC y Opus — comparación rápida",
        paragraphs: [
          "AAC (M4A) con el mismo bitrate suele superar a MP3: por eso lo usan YouTube y Apple Music.",
          "Opus brilla en VoIP y streaming a bitrates bajos (64–128 kbps).",
          "Para archivos de estudio conserve WAV o FLAC: un bitrate con pérdida no restaura datos faltantes.",
        ],
      },
      {
        title: "Errores habituales",
        paragraphs: [
          "Subir un MP3 de baja calidad a mayor bitrate no mejora el sonido: solo crece el archivo.",
          "Recodificar la misma pista varias veces (MP3 → AAC → MP3) degrada la calidad en cada paso.",
          "Para proyectos de vídeo extraiga audio de su propio MP4 en lugar de descargar música ajena: importa el copyright.",
        ],
      },
    ],
  },
  "prepare-images-for-web": {
    ...guidesEn["prepare-images-for-web"],
    title: "Preparar imágenes para la web (JPG, WebP, AVIF)",
    description: "Resolución, compresión y formatos.",
    sections: [
      {
        paragraphs: [
          "Fotos enormes de cámara (4000×3000 px) ralentizan cualquier página. Antes de subirlas a un blog o tienda, redimensione al tamaño real de visualización: p. ej. 1600 px de ancho para un banner hero.",
          "JPG sigue siendo la opción universal segura. WebP y AVIF producen archivos más pequeños con la misma calidad visual: úselos en stacks modernos con fallback <picture> para navegadores antiguos.",
        ],
      },
      {
        title: "Cuándo PNG en lugar de JPG",
        paragraphs: [
          "Logos, iconos y capturas de UI: PNG o WebP sin pérdida mantienen bordes nítidos.",
          "Fotos de producto sobre fondo blanco suelen comprimir bien como JPG calidad 80–85.",
          "Evite guardar el mismo banner como JPG una y otra vez: cada pasada añade artefactos.",
        ],
      },
      {
        title: "Lista antes de publicar",
        paragraphs: [
          "1) Escale al ancho objetivo en px. 2) Elija formato (JPG/WebP/AVIF). 3) Compruebe el peso (<200 KB miniaturas, <500 KB imágenes grandes de blog). 4) Ejecute PageSpeed Insights y compare el LCP antes/después.",
        ],
      },
    ],
  },
  "docx-pdf-workflow": {
    ...guidesEn["docx-pdf-workflow"],
    title: "DOCX → PDF en el trabajo de oficina",
    description: "Cuándo enviar PDF y evitar fuentes rotas.",
    sections: [
      {
        paragraphs: [
          "DOCX es para editar: ideal cuando el destinatario tiene Word y debe cambiar el texto. PDF es para leer: maquetación, fuentes y márgenes se ven iguales en Windows, Mac y móvil.",
          "Antes de enviar un CV, propuesta o contrato convierta DOCX → PDF. El destinatario no editará el contenido por accidente y evitará fuentes sustitutas que rompan su marca.",
        ],
      },
      {
        title: "Cuándo NO convertir PDF → DOCX",
        paragraphs: [
          "Facturas escaneadas y contratos firmados: conserve el PDF como archivo; el OCR es un paso aparte.",
          "Maquetaciones multipágina complejas (catálogos, folletos): la conversión a DOCX suele romper la paginación.",
          "Si solo necesita un fragmento de texto, cópielo del PDF en lugar de convertir todo el archivo.",
        ],
      },
      {
        title: "Seguridad y privacidad",
        paragraphs: [
          "En Toolando.tech los archivos DOCX y PDF solo se usan para la conversión y se eliminan al terminar el trabajo.",
          "Con documentos sensibles (DNI, números de cuenta) use HTTPS y no deje copias en nubes públicas sin cifrado.",
        ],
      },
    ],
  },
  ...guidesBatch23Es,
  ...guidesBatch4Es,
}

const guidesUk: Record<GuideSlug, GuideArticle> = {
  "mp3-vs-wav": {
    ...guidesEn["mp3-vs-wav"],
    title: "MP3 vs WAV — коли конвертувати аудіо?",
    description: "Порівняння MP3 і WAV: стиснення з втратами та без втрат.",
    sections: [
      {
        paragraphs: [
          "MP3 використовує стиснення з втратами — файли малі, але частина аудіоданих втрачається назавжди. WAV зберігає повну якість (без втрат або несжатий), але файли можуть бути в 10 разів більші за MP3.",
          "На практиці: слухаєте на телефоні → MP3 достатньо. Монтуєте подкаст у Audacity чи зводить у FL Studio → працюйте з WAV або FLAC.",
        ],
      },
      {
        title: "Коли конвертувати MP3 → WAV",
        paragraphs: [
          "Коли платформа чи програма вимагає формат без втрат для подальшого редагування.",
          "Коли плануєте багато нарізок, ефектів і мастерінгу — кожна операція з MP3 погіршує якість.",
          "Пам’ятайте: MP3 → WAV не повертає втрачену якість, але зупиняє подальшу деградацію під час редагування.",
        ],
      },
      {
        title: "Коли конвертувати WAV → MP3",
        paragraphs: [
          "Надсилання запису електронною поштою чи в месенджері — менший файл = швидша передача.",
          "Публікація подкасту чи музики для прослуховування, а не для редагування.",
          "Економія місця на диску у великій аудіобібліотеці.",
        ],
      },
    ],
  },
  "pdf-to-jpg": {
    ...guidesEn["pdf-to-jpg"],
    title: "Як конвертувати PDF у JPG для друку та вебу",
    description: "Коли експортувати сторінки PDF як JPG або PNG.",
    sections: [
      {
        paragraphs: [
          "PDF зберігає макет сторінки. Іноді потрібні окремі сторінки як зображення — для сайту, PowerPoint чи друку однієї сторінки.",
          "Конвертер PDF → JPG у Toolando.tech рендерить кожну сторінку окремим JPG. Файли не зберігаються — одразу видаляються після конвертації.",
        ],
      },
      {
        title: "JPG чи PNG з PDF?",
        paragraphs: [
          "JPG — менші файли, ідеально для фото й документів без прозорості.",
          "PNG — без втрат і з прозорістю; краще для графіки з текстом і чіткими краями.",
        ],
      },
    ],
  },
  "webp-avif-images": {
    ...guidesEn["webp-avif-images"],
    title: "WebP і AVIF — сучасні формати зображень для сайтів",
    description: "WebP і AVIF vs JPG/PNG: стиснення та підтримка браузерів.",
    sections: [
      {
        paragraphs: [
          "JPG і PNG домінують в інтернеті роками, але WebP дає файли на 25–35% менші за JPG за тієї ж візуальної якості. AVIF іде далі — файли можуть бути вдвічі менші за WebP.",
          "Усі сучасні браузери підтримують WebP. AVIF має трохи слабшу підтримку в старих версіях Safari.",
        ],
      },
      {
        title: "Стратегія впровадження",
        paragraphs: [
          "Конвертуйте JPG → WebP для фото товарів і банерів — це прискорить завантаження сторінки.",
          "Залиште JPG як запасний варіант для старих браузерів (тег HTML <picture>).",
          "Для логотипів із прозорістю: PNG → WebP замість JPG.",
        ],
      },
    ],
  },
  "extract-audio-from-video": {
    ...guidesEn["extract-audio-from-video"],
    title: "Витягнути аудіо з відео — легальна альтернатива",
    description: "Як легально витягнути аудіо з власного відео.",
    sections: [
      {
        paragraphs: [
          "Іноді є відеофайл, а потрібна лише звукова доріжка. Toolando.tech витягує аудіо з MP4, MOV, AVI, MKV і зберігає як MP3, WAV, FLAC або AAC.",
          "Це легальна операція з вашим власним файлом — на відміну від завантаження музики з YouTube чи TikTok, чого Toolando.tech свідомо не пропонує.",
        ],
      },
    ],
  },
  "json-csv-xml": {
    ...guidesEn["json-csv-xml"],
    title: "JSON, CSV і XML — конвертація даних між форматами",
    description: "Коли використовувати JSON, CSV, TSV і XML.",
    sections: [
      {
        paragraphs: [
          "JSON — стандарт REST API та конфігурацій застосунків. CSV і TSV служать для імпорту в Excel. XML використовують у старіших корпоративних системах і RSS.",
          "JSON → CSV відкриває відповідь API в Excel. CSV → JSON готує дані для REST API. Toolando.tech зберігає структуру даних під час конвертації.",
        ],
      },
    ],
  },
  "online-file-security": {
    ...guidesEn["online-file-security"],
    title: "Безпека файлів в онлайн-інструментах",
    description: "Як Toolando.tech обробляє файли та конфіденційність.",
    sections: [
      {
        paragraphs: [
          "Завантаження файлів в онлайн-інструменти викликає природні занепокоєння. У Toolando.tech файли служать лише для операції, яку ви запитуєте — конвертації, стиснення чи перегляду.",
          "Після завершення роботи файли видаляються з сервера. Деякі інструменти (універсальний відкривач) працюють повністю в браузері — тоді файл взагалі не покидає ваш комп’ютер. З’єднання шифрується (HTTPS).",
        ],
      },
      {
        title: "Чого ми НЕ робимо з вашими файлами",
        paragraphs: [
          "Не продаємо файли чи метадані третім сторонам.",
          "Не використовуємо завантаження для навчання моделей ШІ.",
          "Не тримаємо копії «про всяк випадок» — після завдання файл зникає з диска сервера.",
        ],
      },
      {
        title: "Коли файл залишається на сервері довше",
        paragraphs: [
          "Лише на час конвертації (зазвичай секунди до хвилини). Для великих відео до 500 МБ операція може тривати довше — файл усе одно видаляється після завершення.",
          "Преміум-опція з обліковим записом може зберігати історію операцій (метадані, не файли) — деталі в політиці конфіденційності.",
        ],
      },
    ],
  },
  "lossy-vs-lossless": {
    ...guidesEn["lossy-vs-lossless"],
    title: "Стиснення з втратами vs без втрат — простий посібник",
    description: "Відмінності та як уникнути втрати якості.",
    sections: [
      {
        paragraphs: [
          "Формати з втратами (MP3, JPG, AAC, H.264) відкидають дані, щоб зменшити розмір. Формати без втрат (FLAC, PNG, WAV, ZIP) зберігають усі дані, але файли більші.",
          "Правило: конвертуйте з втратами → без втрат лише коли мусите — втрачену якість не повернете. Конвертуйте з втратами → з втратами лише один раз — кожна повторна конвертація погіршує результат.",
        ],
      },
      {
        title: "Приклади на практиці",
        paragraphs: [
          "Музика: FLAC → MP3 перед надсиланням другу OK; MP3 → FLAC перед мастерінгом НІ.",
          "Фото: RAW/JPG з камери → експорт JPG для вебу OK; багаторазове JPG → JPG у месенджері псує якість.",
          "Відео: MP4 (H.264) зі стисненням з втратами, але це стандарт — не перекодовуйте без причини.",
        ],
      },
      {
        title: "Де перевірити тип формату",
        paragraphs: [
          "В енциклопедії форматів Toolando кожен формат має позначку з втратами / без втрат / контейнер.",
          "Порівняння MP3 vs FLAC і JPG vs WebP пояснюють вердикт на одній сторінці.",
        ],
      },
    ],
  },
  "heic-iphone-jpg": {
    ...guidesEn["heic-iphone-jpg"],
    title: "HEIC з iPhone — відкрити та конвертувати в JPG",
    description: "Проблеми сумісності та конвертація в JPG/PNG.",
    sections: [
      {
        paragraphs: [
          "Apple за замовчуванням зберігає фото в HEIC — менший за JPG за тієї ж якості. Проблема: Windows без розширення, старі програми та багато сервісів не підтримують HEIC.",
          "Рішення: конвертуйте HEIC → JPG або HEIC → PNG у Toolando.tech перед надсиланням поштою, завантаженням на сайт чи друком. У налаштуваннях iPhone також можна увімкнути «Найбільш сумісні» (JPG).",
        ],
      },
    ],
  },
  "pdf-vs-docx": {
    ...guidesEn["pdf-vs-docx"],
    title: "PDF vs DOCX — який формат коли?",
    description: "Відмінності в редагуванні, друку та архівуванні.",
    sections: [
      {
        paragraphs: [
          "DOCX (Word) служить для редагування тексту — зміст, стилі, заголовки. PDF фіксує макет — однаково на кожному пристрої, ідеально для рахунків, договорів і резюме.",
          "Конвертуйте DOCX → PDF перед надсиланням «лише для читання». Конвертуйте PDF → DOCX лише коли потрібно редагувати текст — макет може роз’їхатися. Для архіву та друку завжди обирайте PDF.",
        ],
      },
    ],
  },
  "video-social-media": {
    ...guidesEn["video-social-media"],
    title: "Відео для соцмереж — MP4, роздільність і bitrate",
    description: "Підготовка для Instagram, TikTok, YouTube.",
    sections: [
      {
        paragraphs: [
          "Instagram, TikTok, YouTube і Facebook віддають перевагу MP4 з кодеком H.264 і аудіо AAC. Перед публікацією конвертуйте MOV, AVI чи MKV у MP4 — уникнете помилок завантаження.",
          "Роздільність 1080p (1920×1080) достатня для більшості платформ. Вищий bitrate = краща якість, але більший файл. Деталі про MP4, WebM і MOV — в енциклопедії форматів Toolando.tech.",
        ],
      },
    ],
  },
  "choose-audio-bitrate": {
    ...guidesEn["choose-audio-bitrate"],
    title: "Який bitrate MP3 або AAC обрати?",
    description: "128 vs 192 vs 320 kbps — практичний посібник.",
    sections: [
      {
        paragraphs: [
          "Bitrate — це обсяг даних на секунду звуку. Вищий bitrate зазвичай означає кращу якість, але й більший файл. У MP3 різниця між 128 і 320 kbps чутна переважно на хорошій апаратурі та в музиці з великою динамікою.",
          "Для мови (подкаст, інтерв’ю) часто вистачає 96–128 kbps моно. Для музики в навушниках розумний компроміс — 192–256 kbps стерео. 320 kbps — практична «стеля» MP3: подальше підвищення рідко дає вигоду, бо формат усе одно з втратами.",
        ],
      },
      {
        title: "MP3, AAC і Opus — коротке порівняння",
        paragraphs: [
          "AAC (M4A) за того ж bitrate зазвичай звучить краще за MP3 — звідси популярність у YouTube і Apple Music.",
          "Opus чудово працює у VoIP і стримінгу на низьких bitrate (64–128 kbps).",
          "Якщо архівуєте студійні записи, тримайте WAV або FLAC — bitrate формату з втратами не відновить втрачені дані.",
        ],
      },
      {
        title: "Типові помилки",
        paragraphs: [
          "Конвертація низькоякісного MP3 → вищий bitrate не покращує звучання — лише збільшує файл.",
          "Багаторазове перекодування того самого треку (MP3 → AAC → MP3) щоразу погіршує якість.",
          "Перед публікацією відео витягніть аудіо з власного MP4 замість завантажувати чужу музику з інтернету — це питання авторських прав.",
        ],
      },
    ],
  },
  "prepare-images-for-web": {
    ...guidesEn["prepare-images-for-web"],
    title: "Підготовка зображень для вебу (JPG, WebP, AVIF)",
    description: "Роздільність, стиснення та формати.",
    sections: [
      {
        paragraphs: [
          "Великі фото з камери (4000×3000 px) сповільнюють будь-яку сторінку. Перш ніж завантажувати на блог чи в магазин, зменште роздільність до реального розміру відображення — наприклад 1600 px ширини для hero-банера.",
          "JPG лишається безпечним універсальним вибором. WebP і AVIF дають менші файли за тієї ж візуальної якості — варто використовувати в сучасних проєктах із тегом <picture> як запасний варіант для старих браузерів.",
        ],
      },
      {
        title: "Коли PNG замість JPG",
        paragraphs: [
          "Логотипи, іконки, знімки екрана з текстом і UI — PNG або WebP без втрат збережуть чіткі краї.",
          "Фото товарів на білому тлі часто спокійно стискаються JPG quality 80–85 без помітних артефактів.",
          "Уникайте багаторазового збереження того самого банера як JPG — кожне наступне збереження погіршує якість.",
        ],
      },
      {
        title: "Чекліст перед публікацією",
        paragraphs: [
          "1) Масштабуйте до цільової ширини в px. 2) Оберіть формат (JPG/WebP/AVIF). 3) Перевірте вагу файлу (<200 КБ для мініатюр, <500 КБ для великих фото блогу). 4) Відкрийте PageSpeed Insights і порівняйте LCP до/після.",
        ],
      },
    ],
  },
  "docx-pdf-workflow": {
    ...guidesEn["docx-pdf-workflow"],
    title: "DOCX → PDF у офісній роботі",
    description: "Коли надсилати PDF і уникати зламаних шрифтів.",
    sections: [
      {
        paragraphs: [
          "DOCX — формат для редагування: зручний, коли отримувач має Word і має щось виправити. PDF — формат для читання: макет, шрифти й поля виглядають однаково на Windows, Mac і телефоні.",
          "Перед надсиланням резюме, пропозиції чи договору клієнту конвертуйте DOCX → PDF. Отримувач випадково не змінить зміст, і ви не побачите «замінних шрифтів» замість фірмового накреслення.",
        ],
      },
      {
        title: "Коли НЕ конвертувати PDF → DOCX",
        paragraphs: [
          "Скани рахунків і власноруч підписаних договорів — PDF лишається архівом; OCR — окремий процес.",
          "Багатосторінкові документи зі складним макетом (каталоги, брошури) — конвертація в DOCX часто ламає пагінацію.",
          "Якщо потрібен лише фрагмент тексту, скопіюйте його з PDF замість конвертувати весь файл.",
        ],
      },
      {
        title: "Безпека та конфіденційність",
        paragraphs: [
          "У Toolando.tech файли DOCX і PDF служать лише для конвертації й видаляються після завершення завдання.",
          "Для документів із чутливими даними (паспорт, номери рахунків) використовуйте HTTPS і не зберігайте копії на публічних хмарних дисках без шифрування.",
        ],
      },
    ],
  },
  ...guidesBatch23Uk,
  ...guidesBatch4Uk,
}

const byLocale: Record<string, Record<GuideSlug, GuideArticle>> = {
  pl: guidesPl,
  en: guidesEn,
  de: guidesDe,
  es: guidesEs,
  uk: guidesUk,
  fr: guidesFr,
  it: guidesIt,
  pt: guidesPt,
  nl: guidesNl,
  sv: guidesSv,
  no: guidesNo,
  da: guidesDa,
  fi: guidesFi,
  cs: guidesCs,
  ro: guidesRo,
  hu: guidesHu,
  el: guidesEl,
  tr: guidesTr,
  ru: guidesRu,
  ar: guidesAr,
  zh: guidesZh,
  ja: guidesJa,
  ko: guidesKo,
  hi: guidesHi,
  id: guidesId,
}

for (const loc of contentLocales) {
  if (!byLocale[loc]) byLocale[loc] = guidesEn
}

export function getGuide(locale: string, slug: string): GuideArticle | undefined {
  const loc = resolveContentLocale(locale)
  const guides = byLocale[loc] ?? byLocale.en
  return guides[slug as GuideSlug] ?? byLocale.en[slug as GuideSlug]
}

export function getAllGuides(locale: string): GuideArticle[] {
  const loc = resolveContentLocale(locale)
  const guides = byLocale[loc] ?? byLocale.en
  return GUIDE_SLUGS.map((slug) => guides[slug]).filter(Boolean)
}
