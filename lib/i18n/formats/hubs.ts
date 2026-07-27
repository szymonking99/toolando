import type { FormatsHubMeta } from "./types"
import {
  formatsHubDe,
  formatsHubEn,
  formatsHubEs,
  formatsHubPl,
  formatsHubUk,
} from "./hub-meta"
import { pickLocalized } from "../content-locale"

function hubFromEn(overrides: Partial<FormatsHubMeta>): FormatsHubMeta {
  return {
    ...formatsHubEn,
    ...overrides,
    categoryLabels: {
      ...formatsHubEn.categoryLabels,
      ...overrides.categoryLabels,
    },
    basicsParagraphs:
      overrides.basicsParagraphs ?? formatsHubEn.basicsParagraphs,
  }
}

const hubFr = hubFromEn({
  title: "Encyclopédie des formats de fichiers",
  intro:
    "Explorez les formats pris en charge par Toolando.tech — différences, MP3 ou FLAC, pourquoi WebP est plus rapide que JPG, et comment convertir en ligne en toute sécurité.",
  categoryLabels: {
    audio: "Audio",
    video: "Vidéo",
    image: "Images",
    document: "Documents",
    data: "Données",
    font: "Polices",
    archive: "Archives",
  },
  compressionTitle: "Type de compression",
  useCasesTitle: "Quand utiliser ce format",
  prosTitle: "Avantages",
  consTitle: "Inconvénients",
  compatibilityTitle: "Compatibilité",
  faqTitle: "Questions fréquentes",
  comparisonsTitle: "Comparaison avec d'autres formats",
  convertFromTitle: "Convertir depuis ce format",
  convertToTitle: "Convertir vers ce format",
  viewFormat: "En savoir plus",
  allFormats: "Tous les formats",
  basicsTitle: "Bases de la conversion de fichiers",
  basicsParagraphs: [
    "Convertir un fichier change la façon dont les données sont stockées — par ex. de WAV (sans perte, volumineux) à MP3 (avec perte, léger). Chaque conversion affecte qualité, taille et compatibilité.",
    "Les formats avec perte (MP3, JPG, AAC) suppriment des données. Les formats sans perte (FLAC, PNG, WAV) les conservent. Convertir avec perte → sans perte ne restaure pas la qualité perdue.",
    "Sur Toolando.tech, les fichiers sont traités sur le serveur puis supprimés. Utilisez le convertisseur ou la page du format pour voir toutes les options.",
  ],
})

const hubIt = hubFromEn({
  title: "Enciclopedia dei formati di file",
  intro:
    "Esplora i formati supportati da Toolando.tech — differenze, MP3 o FLAC, perché WebP è più veloce di JPG e come convertire online in sicurezza.",
  categoryLabels: {
    video: "Video",
    image: "Immagini",
    document: "Documenti",
    data: "Dati",
    font: "Font",
    archive: "Archivi",
  },
  compressionTitle: "Tipo di compressione",
  useCasesTitle: "Quando usare questo formato",
  prosTitle: "Vantaggi",
  consTitle: "Svantaggi",
  compatibilityTitle: "Compatibilità",
  faqTitle: "Domande frequenti",
  comparisonsTitle: "Confronto con altri formati",
  convertFromTitle: "Converti da questo formato",
  convertToTitle: "Converti in questo formato",
  viewFormat: "Leggi di più",
  allFormats: "Tutti i formati",
  basicsTitle: "Basi della conversione dei file",
  basicsParagraphs: [
    "Convertire un file cambia il modo in cui i dati sono memorizzati — ad es. da WAV (lossless, grande) a MP3 (lossy, piccolo). Ogni conversione influisce su qualità, dimensione e compatibilità.",
    "I formati lossy (MP3, JPG, AAC) eliminano dati. I formati lossless (FLAC, PNG, WAV) li conservano. Convertire da lossy a lossless non recupera la qualità persa.",
    "Su Toolando.tech i file vengono elaborati sul server e poi eliminati. Usa il convertitore o la pagina del formato per tutte le opzioni.",
  ],
})

const hubPt = hubFromEn({
  title: "Enciclopédia de formatos de ficheiro",
  intro:
    "Explore os formatos suportados pelo Toolando.tech — diferenças, MP3 ou FLAC, porque o WebP é mais rápido que JPG e como converter online com segurança.",
  categoryLabels: {
    video: "Vídeo",
    image: "Imagens",
    document: "Documentos",
    data: "Dados",
    font: "Fontes",
    archive: "Arquivos",
  },
  compressionTitle: "Tipo de compressão",
  useCasesTitle: "Quando usar este formato",
  prosTitle: "Vantagens",
  consTitle: "Desvantagens",
  compatibilityTitle: "Compatibilidade",
  faqTitle: "Perguntas frequentes",
  comparisonsTitle: "Comparação com outros formatos",
  convertFromTitle: "Converter deste formato",
  convertToTitle: "Converter para este formato",
  viewFormat: "Ler mais",
  allFormats: "Todos os formatos",
  basicsTitle: "Fundamentos da conversão de ficheiros",
})

const hubNl = hubFromEn({
  title: "Encyclopedie van bestandsformaten",
  intro:
    "Ontdek de formaten die Toolando.tech ondersteunt — verschillen, MP3 vs FLAC, waarom WebP sneller laadt dan JPG en hoe je veilig online converteert.",
  categoryLabels: {
    image: "Afbeeldingen",
    document: "Documenten",
    data: "Gegevens",
    font: "Lettertypen",
    archive: "Archieven",
  },
  compressionTitle: "Compressietype",
  useCasesTitle: "Wanneer dit formaat gebruiken",
  prosTitle: "Voordelen",
  consTitle: "Nadelen",
  compatibilityTitle: "Compatibiliteit",
  faqTitle: "Veelgestelde vragen",
  comparisonsTitle: "Vergelijking met andere formaten",
  convertFromTitle: "Converteren vanaf dit formaat",
  convertToTitle: "Converteren naar dit formaat",
  viewFormat: "Meer lezen",
  allFormats: "Alle formaten",
  basicsTitle: "Basisprincipes van bestandsconversie",
})

const hubs: Record<string, FormatsHubMeta> = {
  pl: formatsHubPl,
  en: formatsHubEn,
  de: formatsHubDe,
  es: formatsHubEs,
  uk: formatsHubUk,
  fr: hubFr,
  it: hubIt,
  pt: hubPt,
  nl: hubNl,
  sv: hubFromEn({ title: "Uppslagsverk för filformat", intro: "Utforska format som Toolando.tech stöder — skillnader, MP3 vs FLAC, varför WebP laddar snabbare än JPG och hur du konverterar säkert online.", allFormats: "Alla format", viewFormat: "Läs mer", basicsTitle: "Grunderna i filkonvertering" }),
  no: hubFromEn({ title: "Filformat-encyklopedi", intro: "Utforsk formatene Toolando.tech støtter — forskjeller, MP3 vs FLAC, hvorfor WebP laster raskere enn JPG og hvordan du konverterer trygt på nett.", allFormats: "Alle formater", viewFormat: "Les mer", basicsTitle: "Grunnleggende filkonvertering" }),
  da: hubFromEn({ title: "Filformat-encyklopædi", intro: "Udforsk formater som Toolando.tech understøtter — forskelle, MP3 vs FLAC, hvorfor WebP loader hurtigere end JPG, og hvordan du konverterer sikkert online.", allFormats: "Alle formater", viewFormat: "Læs mere", basicsTitle: "Grundlæggende filkonvertering" }),
  fi: hubFromEn({ title: "Tiedostomuotojen tietosanakirja", intro: "Tutustu Toolando.techin tukemiin muotoihin — erot, MP3 vs FLAC, miksi WebP latautuu nopeammin kuin JPG ja miten muunnat turvallisesti verkossa.", allFormats: "Kaikki muodot", viewFormat: "Lue lisää", basicsTitle: "Tiedostomuunnoksen perusteet" }),
  cs: hubFromEn({ title: "Encyklopedie formátů souborů", intro: "Prozkoumejte formáty podporované Toolando.tech — rozdíly, MP3 vs FLAC, proč se WebP načítá rychleji než JPG a jak bezpečně konvertovat online.", allFormats: "Všechny formáty", viewFormat: "Číst dále", basicsTitle: "Základy konverze souborů" }),
  ro: hubFromEn({ title: "Enciclopedia formatelor de fișiere", intro: "Explorați formatele suportate de Toolando.tech — diferențe, MP3 vs FLAC, de ce WebP se încarcă mai rapid decât JPG și cum convertiți în siguranță online.", allFormats: "Toate formatele", viewFormat: "Citește mai mult", basicsTitle: "Noțiuni de bază despre conversia fișierelor" }),
  hu: hubFromEn({ title: "Fájlformátum-enciklopédia", intro: "Fedezze fel a Toolando.tech által támogatott formátumokat — különbségek, MP3 vs FLAC, miért töltődik gyorsabban a WebP mint a JPG, és hogyan konvertáljon biztonságosan online.", allFormats: "Összes formátum", viewFormat: "Tovább olvasom", basicsTitle: "Fájlkonverzió alapjai" }),
  el: hubFromEn({ title: "Εγκυκλοπαίδεια μορφών αρχείων", intro: "Εξερευνήστε τις μορφές που υποστηρίζει το Toolando.tech — διαφορές, MP3 vs FLAC, γιατί το WebP φορτώνει πιο γρήγορα από JPG και πώς να μετατρέψετε με ασφάλεια online.", allFormats: "Όλες οι μορφές", viewFormat: "Διαβάστε περισσότερα", basicsTitle: "Βασικές αρχές μετατροπής αρχείων" }),
  tr: hubFromEn({ title: "Dosya biçimi ansiklopedisi", intro: "Toolando.tech'in desteklediği biçimleri keşfedin — farklar, MP3 vs FLAC, WebP'nin JPG'den neden daha hızlı yüklendiği ve çevrimiçi güvenli dönüştürme.", allFormats: "Tüm biçimler", viewFormat: "Daha fazla oku", basicsTitle: "Dosya dönüştürme temelleri" }),
  ru: hubFromEn({ title: "Энциклопедия форматов файлов", intro: "Изучите форматы, поддерживаемые Toolando.tech — отличия, MP3 vs FLAC, почему WebP загружается быстрее JPG и как безопасно конвертировать онлайн.", allFormats: "Все форматы", viewFormat: "Подробнее", basicsTitle: "Основы конвертации файлов" }),
  ar: hubFromEn({ title: "موسوعة صيغ الملفات", intro: "استكشف الصيغ التي يدعمها Toolando.tech — الاختلافات، MP3 مقابل FLAC، لماذا WebP أسرع من JPG، وكيفية التحويل بأمان عبر الإنترنت.", allFormats: "جميع الصيغ", viewFormat: "اقرأ المزيد", basicsTitle: "أساسيات تحويل الملفات" }),
  zh: hubFromEn({ title: "文件格式百科", intro: "了解 Toolando.tech 支持的格式——差异、MP3 与 FLAC、WebP 为何比 JPG 加载更快，以及如何安全在线转换。", allFormats: "所有格式", viewFormat: "阅读更多", basicsTitle: "文件转换基础" }),
  ja: hubFromEn({ title: "ファイル形式百科事典", intro: "Toolando.tech がサポートする形式を調べましょう — 違い、MP3 と FLAC、WebP が JPG より速い理由、安全なオンライン変換。", allFormats: "すべての形式", viewFormat: "続きを読む", basicsTitle: "ファイル変換の基礎" }),
  ko: hubFromEn({ title: "파일 형식 백과사전", intro: "Toolando.tech가 지원하는 형식을 살펴보세요 — 차이점, MP3 vs FLAC, WebP가 JPG보다 빠른 이유, 안전한 온라인 변환.", allFormats: "모든 형식", viewFormat: "더 읽기", basicsTitle: "파일 변환 기초" }),
  hi: hubFromEn({ title: "फ़ाइल प्रारूप विश्वकोश", intro: "Toolando.tech द्वारा समर्थित प्रारूप देखें — अंतर, MP3 vs FLAC, WebP JPG से तेज़ क्यों लोड होता है, और ऑनलाइन सुरक्षित रूपांतरण।", allFormats: "सभी प्रारूप", viewFormat: "और पढ़ें", basicsTitle: "फ़ाइल रूपांतरण की मूल बातें" }),
  id: hubFromEn({ title: "Ensiklopedia format file", intro: "Jelajahi format yang didukung Toolando.tech — perbedaan, MP3 vs FLAC, mengapa WebP lebih cepat dari JPG, dan cara mengonversi online dengan aman.", allFormats: "Semua format", viewFormat: "Baca selengkapnya", basicsTitle: "Dasar-dasar konversi file" }),
}

export function getFormatsHubMeta(locale: string): FormatsHubMeta {
  return pickLocalized(locale, hubs, formatsHubEn)
}
