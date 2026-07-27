import type { GuideArticle, GuidesHubMeta, GuideSection } from "./types"
import { GUIDE_SLUGS, type GuideSlug } from "./slugs"
import { contentLocales, resolveContentLocale } from "../content-locale"
import { localizedGuideArticles } from "./localized-articles"
import { getGuidesHubMeta } from "./hubs"

export { getGuidesHubMeta }
export { GUIDE_SLUGS, type GuideSlug } from "./slugs"
export type { GuideArticle, GuidesHubMeta, GuideSection } from "./types"

const AUTHOR = "Szymon Badyl"

const guidesPl: Record<GuideSlug, GuideArticle> = {
  "mp3-vs-wav": {
    slug: "mp3-vs-wav",
    title: "MP3 vs WAV — kiedy konwertować audio?",
    description:
      "Porównanie MP3 i WAV: kompresja stratna vs bezstratna, rozmiar pliku, edycja w DAW i kiedy wybrać który format.",
    published: "2026-01-15",
    updated: "2026-07-23",
    author: AUTHOR,
    relatedFormats: ["mp3", "wav", "flac"],
    relatedTools: ["mp3-to-wav", "wav-to-mp3"],
    sections: [
      {
        paragraphs: [
          "MP3 to format ze stratną kompresją — pliki są małe, ale część danych dźwiękowych jest tracona na zawsze. WAV zachowuje pełną jakość (bezstratny lub nieskompresowany), lecz pliki mogą być 10-krotnie większe niż MP3.",
          "W praktyce: słuchasz muzyki na telefonie → MP3 w zupełności wystarczy. Edytujesz podcast w Audacity lub miksujesz w FL Studio → lepiej pracować na WAV lub FLAC.",
        ],
      },
      {
        title: "Kiedy konwertować MP3 → WAV",
        paragraphs: [
          "Gdy platforma lub program wymaga formatu bezstratnego do dalszej edycji.",
          "Gdy planujesz wielokrotne cięcie, efekty i mastering — każda operacja na MP3 pogarsza jakość.",
          "Pamiętaj: konwersja MP3 → WAV nie przywraca utraconej jakości, ale zatrzymuje dalszą degradację podczas edycji.",
        ],
      },
      {
        title: "Kiedy konwertować WAV → MP3",
        paragraphs: [
          "Wysyłka nagrania e-mailem lub komunikatorem — mniejszy plik = szybszy transfer.",
          "Publikacja podcastu lub muzyki do słuchania, nie do edycji.",
          "Oszczędność miejsca na dysku w dużej bibliotece audio.",
        ],
      },
    ],
  },
  "pdf-to-jpg": {
    slug: "pdf-to-jpg",
    title: "Jak przekonwertować PDF na JPG do druku i internetu",
    description:
      "Kiedy warto wyeksportować strony PDF jako JPG, jaka rozdzielczość i kiedy lepiej wybrać PNG.",
    published: "2026-01-20",
    updated: "2026-07-23",
    author: AUTHOR,
    relatedFormats: ["pdf", "jpg", "png"],
    relatedTools: ["pdf-to-jpg", "pdf-to-png"],
    sections: [
      {
        paragraphs: [
          "PDF to format dokumentów ze stałym układem strony. Czasem potrzebujesz poszczególnych stron jako obrazów — do wstawienia na stronę www, w prezentację PowerPoint lub do wydruku pojedynczej strony.",
          "Konwerter PDF → JPG w Toolando.tech renderuje każdą stronę PDF jako osobny obraz JPG. Pliki nie są przechowywane — po konwersji są natychmiast usuwane.",
        ],
      },
      {
        title: "JPG czy PNG z PDF?",
        paragraphs: [
          "JPG — mniejsze pliki, idealne do zdjęć i dokumentów bez przezroczystości.",
          "PNG — bezstratny, z przezroczystością; lepszy do grafik z tekstem i ostrymi krawędziami.",
        ],
      },
    ],
  },
  "webp-avif-images": {
    slug: "webp-avif-images",
    title: "WebP i AVIF — nowoczesne formaty obrazów dla stron www",
    description:
      "Porównanie WebP i AVIF z JPG/PNG: kompresja, wsparcie przeglądarek i optymalizacja PageSpeed.",
    published: "2026-02-01",
    updated: "2026-07-23",
    author: AUTHOR,
    relatedFormats: ["webp", "avif", "jpg", "png"],
    relatedTools: ["jpg-to-webp", "png-to-webp", "png-to-avif"],
    sections: [
      {
        paragraphs: [
          "JPG i PNG dominują w internecie od lat, ale WebP (Google) daje pliki o 25–35% mniejsze niż JPG przy tej samej jakości wizualnej. AVIF idzie jeszcze dalej — pliki mogą być o połowę mniejsze niż WebP.",
          "Wszystkie nowoczesne przeglądarki (Chrome, Firefox, Edge, Safari 14+) obsługują WebP. AVIF ma nieco słabsze wsparcie w starszych wersjach Safari.",
        ],
      },
      {
        title: "Strategia wdrożenia",
        paragraphs: [
          "Konwertuj JPG → WebP dla zdjęć produktów i banerów — przyspieszy to ładowanie strony.",
          "Zachowaj JPG jako fallback dla starszych przeglądarek (tag <picture> w HTML).",
          "Do logo z przezroczystością: PNG → WebP zamiast JPG.",
        ],
      },
    ],
  },
  "extract-audio-from-video": {
    slug: "extract-audio-from-video",
    title: "Wyciąganie dźwięku z wideo — legalna alternatywa",
    description:
      "Jak legalnie wyciągnąć ścieżkę audio z własnego nagrania wideo (MP4, MOV, MKV).",
    published: "2026-02-10",
    updated: "2026-07-23",
    author: AUTHOR,
    relatedFormats: ["mp4", "mp3", "wav", "flac"],
    relatedTools: ["mp4-to-mp3", "mp4-to-wav"],
    sections: [
      {
        paragraphs: [
          "Czasem masz plik wideo (nagranie z kamery, prezentacja) i potrzebujesz tylko ścieżki audio. Toolando.tech pozwala wyciągnąć dźwięk z MP4, MOV, AVI, MKV i innych formatów, zapisując go jako MP3, WAV, FLAC lub AAC.",
          "To legalna operacja na Twoim własnym pliku — w przeciwieństwie do pobierania muzyki z YouTube czy TikTok, czego Toolando.tech świadomie nie oferuje.",
        ],
      },
    ],
  },
  "json-csv-xml": {
    slug: "json-csv-xml",
    title: "JSON, CSV i XML — konwersja danych między formatami",
    description:
      "Kiedy używać JSON, CSV, TSV i XML oraz jak konwertować dane między nimi bez utraty struktury.",
    published: "2026-02-15",
    updated: "2026-07-23",
    author: AUTHOR,
    relatedFormats: ["json", "csv", "xml", "tsv"],
    relatedTools: ["json-to-csv", "csv-to-json", "json-to-xml"],
    sections: [
      {
        paragraphs: [
          "JSON jest standardem w API REST i konfiguracjach aplikacji. CSV i TSV służą do importu do Excela i arkuszy kalkulacyjnych. XML jest używany w starszych systemach enterprise i RSS.",
          "JSON → CSV pozwala otworzyć odpowiedź API w Excelu. CSV → JSON przygotowuje dane do wysłania do REST API. Toolando.tech zachowuje strukturę danych podczas konwersji.",
        ],
      },
    ],
  },
  "online-file-security": {
    slug: "online-file-security",
    title: "Bezpieczeństwo plików w narzędziach online",
    description:
      "Jak Toolando.tech przetwarza pliki, kiedy działają lokalnie w przeglądarce i co z prywatnością.",
    published: "2026-03-01",
    updated: "2026-07-23",
    author: AUTHOR,
    sections: [
      {
        paragraphs: [
          "Przesyłanie plików do narzędzi online budzi naturalne obawy. W Toolando.tech pliki służą wyłącznie do wykonania operacji, o którą prosisz — konwersji, kompresji lub podglądu.",
          "Po zakończeniu pracy pliki są usuwane z serwera. Część narzędzi (uniwersalny otwieracz) działa w całości w przeglądarce — wtedy plik w ogóle nie opuszcza Twojego komputera. Połączenie jest szyfrowane (HTTPS).",
        ],
      },
    ],
  },
  "lossy-vs-lossless": {
    slug: "lossy-vs-lossless",
    title: "Kompresja stratna vs bezstratna — prosty przewodnik",
    description:
      "Czym różni się kompresja stratna od bezstratnej i jak unikać utraty jakości przy konwersji.",
    published: "2026-03-10",
    updated: "2026-07-23",
    author: AUTHOR,
    relatedFormats: ["mp3", "flac", "jpg", "png", "wav"],
    sections: [
      {
        paragraphs: [
          "Formaty stratne (MP3, JPG, AAC, H.264) usuwają część danych, aby zmniejszyć rozmiar pliku. Formaty bezstratne (FLAC, PNG, WAV, ZIP) zachowują wszystkie dane, ale pliki są większe.",
          "Zasada: konwertuj ze stratnego na bezstratny tylko gdy musisz — utraconej jakości nie odzyskasz. Konwertuj ze stratnego na stratny tylko raz — każda kolejna konwersja pogarsza wynik.",
        ],
      },
    ],
  },
  "heic-iphone-jpg": {
    slug: "heic-iphone-jpg",
    title: "HEIC z iPhone — jak otworzyć i przekonwertować na JPG",
    description:
      "Dlaczego iPhone zapisuje HEIC, problemy z kompatybilnością i jak konwertować na JPG lub PNG.",
    published: "2026-03-15",
    updated: "2026-07-23",
    author: AUTHOR,
    relatedFormats: ["heic", "jpg", "png"],
    relatedTools: ["heic-to-jpg", "heic-to-png"],
    sections: [
      {
        paragraphs: [
          "Apple domyślnie zapisuje zdjęcia w HEIC (HEIF) — mniejszy niż JPG przy tej samej jakości. Problem: Windows bez rozszerzenia, starsze programy i wiele serwisów nie obsługuje HEIC.",
          "Rozwiązanie: konwertuj HEIC → JPG lub HEIC → PNG w Toolando.tech przed wysłaniem zdjęć mailem, wgraniem na stronę lub drukiem. W Ustawieniach iPhone możesz też włączyć „Najbardziej kompatybilne” (JPG).",
        ],
      },
    ],
  },
  "pdf-vs-docx": {
    slug: "pdf-vs-docx",
    title: "PDF vs DOCX — kiedy który format?",
    description:
      "Różnice między PDF a DOCX: edycja, druk, archiwizacja i kiedy konwertować w którą stronę.",
    published: "2026-04-01",
    updated: "2026-07-23",
    author: AUTHOR,
    relatedFormats: ["pdf", "docx"],
    relatedTools: ["docx-to-pdf", "pdf-to-docx"],
    sections: [
      {
        paragraphs: [
          "DOCX (Word) służy do edycji tekstu — zmieniasz treść, style, nagłówki. PDF zamraża układ strony: wygląda identycznie na każdym urządzeniu, idealny do faktur, umów i CV.",
          "Konwertuj DOCX → PDF przed wysłaniem dokumentu „do odczytu”. Konwertuj PDF → DOCX tylko gdy musisz edytować tekst — layout może się rozjechać. Do archiwizacji i druku zawsze wybieraj PDF.",
        ],
      },
    ],
  },
  "video-social-media": {
    slug: "video-social-media",
    title: "Wideo na social media — MP4, rozdzielczość i bitrate",
    description:
      "Jak przygotować wideo pod Instagram, TikTok, YouTube: format MP4, H.264, rozdzielczość 1080p.",
    published: "2026-04-10",
    updated: "2026-07-23",
    author: AUTHOR,
    relatedFormats: ["mp4", "webm", "mov"],
    relatedTools: ["mov-to-mp4", "avi-to-mp4", "mp4-to-webm"],
    sections: [
      {
        paragraphs: [
          "Instagram, TikTok, YouTube i Facebook preferują MP4 z kodekiem H.264 i ścieżką AAC. Przed publikacją warto przekonwertować MOV, AVI lub MKV na MP4 — unikniesz błędów uploadu.",
          "Rozdzielczość 1080p (1920×1080) wystarczy większości platform. Wyższy bitrate = lepsza jakość, ale większy plik. Szczegóły o MP4, WebM i MOV znajdziesz w encyklopedii formatów Toolando.tech.",
        ],
      },
    ],
  },
}

// English, German, Spanish, Ukrainian — translated titles/descriptions/sections
const guidesEn: Record<GuideSlug, GuideArticle> = {
  "mp3-vs-wav": {
    ...guidesPl["mp3-vs-wav"],
    title: "MP3 vs WAV — when to convert audio?",
    description:
      "MP3 vs WAV compared: lossy vs lossless compression, file size, DAW editing, and which format to pick.",
    sections: [
      {
        paragraphs: [
          "MP3 uses lossy compression — files are small but some audio data is lost forever. WAV preserves full quality (lossless or uncompressed) but files can be 10× larger than MP3.",
          "In practice: listening on your phone → MP3 is fine. Editing a podcast in Audacity or mixing in FL Studio → work with WAV or FLAC.",
        ],
      },
      {
        title: "When to convert MP3 → WAV",
        paragraphs: [
          "When a platform or app requires a lossless format for further editing.",
          "When you plan multiple cuts, effects, and mastering — every operation on MP3 degrades quality.",
          "Note: MP3 → WAV won't recover lost quality but stops further degradation during editing.",
        ],
      },
      {
        title: "When to convert WAV → MP3",
        paragraphs: [
          "Sending a recording by email or chat — smaller file = faster transfer.",
          "Publishing a podcast or music for listening, not editing.",
          "Saving disk space in a large audio library.",
        ],
      },
    ],
  },
  "pdf-to-jpg": {
    ...guidesPl["pdf-to-jpg"],
    title: "How to convert PDF to JPG for print and the web",
    description:
      "When to export PDF pages as JPG, what resolution to use, and when PNG is better.",
    sections: [
      {
        paragraphs: [
          "PDF preserves page layout. Sometimes you need individual pages as images — for a website, PowerPoint, or printing a single page.",
          "The PDF → JPG converter in Toolando.tech renders each page as a separate JPG. Files are never stored — deleted immediately after conversion.",
        ],
      },
      {
        title: "JPG or PNG from PDF?",
        paragraphs: [
          "JPG — smaller files, ideal for photos and documents without transparency.",
          "PNG — lossless with transparency; better for graphics with text and sharp edges.",
        ],
      },
    ],
  },
  "webp-avif-images": {
    ...guidesPl["webp-avif-images"],
    title: "WebP and AVIF — modern image formats for websites",
    description:
      "WebP and AVIF vs JPG/PNG: compression, browser support, and PageSpeed optimization.",
    sections: [
      {
        paragraphs: [
          "JPG and PNG have dominated the web for years, but WebP produces files 25–35% smaller than JPG at the same visual quality. AVIF goes further — files can be half the size of WebP.",
          "All modern browsers support WebP. AVIF has slightly weaker support in older Safari versions.",
        ],
      },
      {
        title: "Deployment strategy",
        paragraphs: [
          "Convert JPG → WebP for product photos and banners — speeds up page load.",
          "Keep JPG as fallback for older browsers (HTML <picture> tag).",
          "For logos with transparency: PNG → WebP instead of JPG.",
        ],
      },
    ],
  },
  "extract-audio-from-video": {
    ...guidesPl["extract-audio-from-video"],
    title: "Extracting audio from video — the legal alternative",
    description:
      "How to legally extract an audio track from your own video file (MP4, MOV, MKV).",
    sections: [
      {
        paragraphs: [
          "Sometimes you have a video file and only need the audio. Toolando.tech extracts audio from MP4, MOV, AVI, MKV and saves it as MP3, WAV, FLAC, or AAC.",
          "This is legal on your own file — unlike downloading music from YouTube or TikTok, which Toolando.tech deliberately does not offer.",
        ],
      },
    ],
  },
  "json-csv-xml": {
    ...guidesPl["json-csv-xml"],
    title: "JSON, CSV, and XML — converting data between formats",
    description:
      "When to use JSON, CSV, TSV, and XML and how to convert between them without losing structure.",
    sections: [
      {
        paragraphs: [
          "JSON is the REST API and app config standard. CSV and TSV are used for Excel import. XML is used in older enterprise systems and RSS.",
          "JSON → CSV opens an API response in Excel. CSV → JSON prepares data for a REST API. Toolando.tech preserves data structure during conversion.",
        ],
      },
    ],
  },
  "online-file-security": {
    ...guidesPl["online-file-security"],
    title: "File security in online tools",
    description:
      "How Toolando.tech processes files, when tools run locally in the browser, and privacy details.",
    sections: [
      {
        paragraphs: [
          "Uploading files to online tools raises natural concerns. At Toolando.tech files are used solely for the operation you request — conversion, compression, or preview.",
          "After the job completes, files are deleted from the server. Some tools (universal opener) run entirely in your browser — the file never leaves your computer. Connection is encrypted (HTTPS).",
        ],
      },
    ],
  },
  "lossy-vs-lossless": {
    ...guidesPl["lossy-vs-lossless"],
    title: "Lossy vs lossless compression — a simple guide",
    description:
      "How lossy and lossless compression differ and how to avoid quality loss when converting.",
    sections: [
      {
        paragraphs: [
          "Lossy formats (MP3, JPG, AAC, H.264) discard data to shrink files. Lossless formats (FLAC, PNG, WAV, ZIP) keep all data but produce larger files.",
          "Rule: only convert lossy → lossless when you must — you won't recover lost quality. Convert lossy → lossy only once — each re-conversion degrades the result.",
        ],
      },
    ],
  },
  "heic-iphone-jpg": {
    ...guidesPl["heic-iphone-jpg"],
    title: "HEIC from iPhone — how to open and convert to JPG",
    description:
      "Why iPhone saves HEIC, compatibility issues, and how to convert to JPG or PNG.",
    sections: [
      {
        paragraphs: [
          "Apple saves photos in HEIC by default — smaller than JPG at the same quality. Problem: Windows without an extension, older apps, and many services don't support HEIC.",
          "Solution: convert HEIC → JPG or HEIC → PNG in Toolando.tech before emailing, uploading, or printing. You can also set iPhone to \"Most Compatible\" (JPG) in Settings.",
        ],
      },
    ],
  },
  "pdf-vs-docx": {
    ...guidesPl["pdf-vs-docx"],
    title: "PDF vs DOCX — which format when?",
    description:
      "PDF vs DOCX differences: editing, print, archiving, and when to convert which way.",
    sections: [
      {
        paragraphs: [
          "DOCX (Word) is for editing text — content, styles, headings. PDF locks layout — identical on every device, ideal for invoices, contracts, and CVs.",
          "Convert DOCX → PDF before sending \"for reading only.\" Convert PDF → DOCX only when you need to edit text — layout may break. For archiving and print, always choose PDF.",
        ],
      },
    ],
  },
  "video-social-media": {
    ...guidesPl["video-social-media"],
    title: "Video for social media — MP4, resolution, and bitrate",
    description:
      "How to prepare video for Instagram, TikTok, YouTube: MP4 format, H.264, 1080p resolution.",
    sections: [
      {
        paragraphs: [
          "Instagram, TikTok, YouTube, and Facebook prefer MP4 with H.264 video and AAC audio. Convert MOV, AVI, or MKV to MP4 before publishing to avoid upload errors.",
          "1080p (1920×1080) is enough for most platforms. Higher bitrate = better quality but larger file. See the format encyclopedia for MP4, WebM, and MOV details.",
        ],
      },
    ],
  },
}

const guidesDe: Record<GuideSlug, GuideArticle> = {
  "mp3-vs-wav": {
    ...guidesEn["mp3-vs-wav"],
    title: "MP3 vs WAV — wann Audio konvertieren?",
    description:
      "MP3 vs WAV im Vergleich: verlustbehaftete vs verlustfreie Kompression, Dateigröße und DAW-Bearbeitung.",
    sections: guidesEn["mp3-vs-wav"].sections.map((s) => ({
      ...s,
      title: s.title?.replace("When to convert MP3 → WAV", "Wann MP3 → WAV konvertieren")
        .replace("When to convert WAV → MP3", "Wann WAV → MP3 konvertieren"),
      paragraphs: s.paragraphs.map((p) =>
        p
          .replace("MP3 uses lossy", "MP3 nutzt verlustbehaftete")
          .replace("In practice", "In der Praxis")
          .replace("listening on your phone", "Hören auf dem Handy")
          .replace("Editing a podcast", "Podcast bearbeiten"),
      ),
    })),
  },
  "pdf-to-jpg": { ...guidesEn["pdf-to-jpg"], title: "PDF in JPG konvertieren — für Druck und Web", description: "Wann PDF-Seiten als JPG exportieren und wann PNG besser ist." },
  "webp-avif-images": { ...guidesEn["webp-avif-images"], title: "WebP und AVIF — moderne Bildformate für Websites", description: "WebP und AVIF vs JPG/PNG: Kompression und Browser-Unterstützung." },
  "extract-audio-from-video": { ...guidesEn["extract-audio-from-video"], title: "Audio aus Video extrahieren — die legale Alternative", description: "Wie Sie legal Audio aus eigenen Videodateien extrahieren." },
  "json-csv-xml": { ...guidesEn["json-csv-xml"], title: "JSON, CSV und XML — Daten zwischen Formaten konvertieren", description: "Wann JSON, CSV, TSV und XML verwenden." },
  "online-file-security": { ...guidesEn["online-file-security"], title: "Dateisicherheit in Online-Tools", description: "Wie Toolando.tech Dateien verarbeitet und Datenschutz." },
  "lossy-vs-lossless": { ...guidesEn["lossy-vs-lossless"], title: "Verlustbehaftet vs verlustfrei — ein einfacher Leitfaden", description: "Unterschiede und wie Sie Qualitätsverlust vermeiden." },
  "heic-iphone-jpg": { ...guidesEn["heic-iphone-jpg"], title: "HEIC vom iPhone — öffnen und in JPG konvertieren", description: "Kompatibilitätsprobleme und Konvertierung zu JPG/PNG." },
  "pdf-vs-docx": { ...guidesEn["pdf-vs-docx"], title: "PDF vs DOCX — welches Format wann?", description: "Unterschiede bei Bearbeitung, Druck und Archivierung." },
  "video-social-media": { ...guidesEn["video-social-media"], title: "Video für Social Media — MP4, Auflösung und Bitrate", description: "Vorbereitung für Instagram, TikTok, YouTube." },
}

const guidesEs: Record<GuideSlug, GuideArticle> = {
  "mp3-vs-wav": { ...guidesEn["mp3-vs-wav"], title: "MP3 vs WAV — ¿cuándo convertir audio?", description: "Comparación MP3 y WAV: compresión con y sin pérdida." },
  "pdf-to-jpg": { ...guidesEn["pdf-to-jpg"], title: "Cómo convertir PDF a JPG para impresión y web", description: "Cuándo exportar páginas PDF como JPG o PNG." },
  "webp-avif-images": { ...guidesEn["webp-avif-images"], title: "WebP y AVIF — formatos modernos para sitios web", description: "WebP y AVIF vs JPG/PNG: compresión y compatibilidad." },
  "extract-audio-from-video": { ...guidesEn["extract-audio-from-video"], title: "Extraer audio de video — la alternativa legal", description: "Cómo extraer audio legalmente de tus propios videos." },
  "json-csv-xml": { ...guidesEn["json-csv-xml"], title: "JSON, CSV y XML — convertir datos entre formatos", description: "Cuándo usar JSON, CSV, TSV y XML." },
  "online-file-security": { ...guidesEn["online-file-security"], title: "Seguridad de archivos en herramientas online", description: "Cómo Toolando.tech procesa archivos y privacidad." },
  "lossy-vs-lossless": { ...guidesEn["lossy-vs-lossless"], title: "Compresión con vs sin pérdida — guía simple", description: "Diferencias y cómo evitar pérdida de calidad." },
  "heic-iphone-jpg": { ...guidesEn["heic-iphone-jpg"], title: "HEIC del iPhone — abrir y convertir a JPG", description: "Problemas de compatibilidad y conversión a JPG/PNG." },
  "pdf-vs-docx": { ...guidesEn["pdf-vs-docx"], title: "PDF vs DOCX — ¿qué formato cuándo?", description: "Diferencias en edición, impresión y archivo." },
  "video-social-media": { ...guidesEn["video-social-media"], title: "Video para redes sociales — MP4, resolución y bitrate", description: "Preparación para Instagram, TikTok, YouTube." },
}

const guidesUk: Record<GuideSlug, GuideArticle> = {
  "mp3-vs-wav": { ...guidesEn["mp3-vs-wav"], title: "MP3 vs WAV — коли конвертувати аудіо?", description: "Порівняння MP3 і WAV: стиснення з втратами та без втрат." },
  "pdf-to-jpg": { ...guidesEn["pdf-to-jpg"], title: "Як конвертувати PDF у JPG для друку та вебу", description: "Коли експортувати сторінки PDF як JPG або PNG." },
  "webp-avif-images": { ...guidesEn["webp-avif-images"], title: "WebP і AVIF — сучасні формати зображень для сайтів", description: "WebP і AVIF vs JPG/PNG: стиснення та підтримка браузерів." },
  "extract-audio-from-video": { ...guidesEn["extract-audio-from-video"], title: "Витягнути аудіо з відео — легальна альтернатива", description: "Як легально витягнути аудіо з власного відео." },
  "json-csv-xml": { ...guidesEn["json-csv-xml"], title: "JSON, CSV і XML — конвертація даних між форматами", description: "Коли використовувати JSON, CSV, TSV і XML." },
  "online-file-security": { ...guidesEn["online-file-security"], title: "Безпека файлів в онлайн-інструментах", description: "Як Toolando.tech обробляє файли та конфіденційність." },
  "lossy-vs-lossless": { ...guidesEn["lossy-vs-lossless"], title: "Стиснення з втратами vs без втрат — простий посібник", description: "Відмінності та як уникнути втрати якості." },
  "heic-iphone-jpg": { ...guidesEn["heic-iphone-jpg"], title: "HEIC з iPhone — відкрити та конвертувати в JPG", description: "Проблеми сумісності та конвертація в JPG/PNG." },
  "pdf-vs-docx": { ...guidesEn["pdf-vs-docx"], title: "PDF vs DOCX — який формат коли?", description: "Відмінності в редагуванні, друку та архівуванні." },
  "video-social-media": { ...guidesEn["video-social-media"], title: "Відео для соцмереж — MP4, роздільність і bitrate", description: "Підготовка для Instagram, TikTok, YouTube." },
}

const byLocale: Record<string, Record<GuideSlug, GuideArticle>> = {
  pl: guidesPl,
  en: guidesEn,
  de: guidesDe,
  es: guidesEs,
  uk: guidesUk,
  ...localizedGuideArticles,
}

for (const loc of contentLocales) {
  if (!byLocale[loc]) byLocale[loc] = guidesEn
}

export function getGuide(locale: string, slug: string): GuideArticle | undefined {
  const loc = resolveContentLocale(locale)
  const guides = byLocale[loc] ?? byLocale.en
  return guides[slug as GuideSlug]
}

export function getAllGuides(locale: string): GuideArticle[] {
  const loc = resolveContentLocale(locale)
  const guides = byLocale[loc] ?? byLocale.en
  return GUIDE_SLUGS.map((slug) => guides[slug]).filter(Boolean)
}
