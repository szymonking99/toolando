import { fallbackLocale, normalizeToSupported } from "./config"

export type CategoryEssay = {
  paragraphs: string[]
  searchHint: string
}

const pl: Record<string, CategoryEssay> = {
  audio: {
    paragraphs: [
      "Audio w Toolando to nie lista stu klonów „X na MP3”. Indeksuję tylko te pary, przy których mam pomiar: MP3↔WAV, FLAC→MP3 i wyciągnięcie dźwięku z własnego pliku wideo.",
      "Stratna kompresja jest jednokierunkowa. Jeśli ktoś obiecuje, że WAV z MP3 brzmi jak master ze studia, kłamie — piszę o tym w poradniku MP3 vs WAV i w notatkach przy konwerterze.",
      "Pozostałe rozszerzenia (OGG, M4A, WMA…) nadal działają po wyszukaniu narzędzia. Nie produkuję pod nie osobnych stron-drzwi, bo treść byłaby skopiowanym szablonem.",
    ],
    searchHint: "Inna para formatów? Wpisz ją w wyszukiwarkę na górze — konwerter jest, strony katalogowej nie mnożę.",
  },
  video: {
    paragraphs: [
      "Wideo indeksuję tam, gdzie decyzja formatu ma konsekwencję: MP4 na WebM pod HTML albo MP4 na MP3 z własnego nagrania.",
      "Nie jest to serwis do ściągania z platform. Wrzuć plik z dysku (OBS, telefon, kamera). Social media i tak najczęściej chcą MP4 — WebM zostawiam pod własne strony.",
    ],
    searchHint: "AVI, MKV, MOV i pozostałe pary są w wyszukiwarce, bez osobnej farmy podstron.",
  },
  image: {
    paragraphs: [
      "Obrazy: PNG↔JPG, JPG→WebP, HEIC z iPhone’a i SVG→PNG. To konkretne kłopoty (przezroczystość, Windows, PageSpeed, logo), nie macierz wszystkich rozszerzeń.",
      "Kompresor i usuwanie EXIF opisuję osobno, bo to nie jest „zamiana literki w URL”, tylko inna decyzja: jakość vs prywatność vs waga pliku.",
    ],
    searchHint: "AVIF, TIFF i pozostałe konwersje znajdziesz przez wyszukiwarkę.",
  },
  documents: {
    paragraphs: [
      "Dokumenty sprowadzają się do dwóch uczciwych historii: strona PDF jako obraz (podgląd, slajd) oraz DOCX↔PDF przez LibreOffice, bo JS psuje tabele.",
      "PDF będący skanem nie stanie się magicznie edytowalnym Wordem. Piszę o tym przy PDF→DOCX, żebyś nie tracił czasu.",
    ],
    searchHint: "Markdown, HTML i TXT są w katalogu narzędzi — bez powielania tego samego artykułu pod każdym slugiem.",
  },
  data: {
    paragraphs: [
      "JSON, CSV, XML i YAML to dane, nie „konwersja filmu”. Nie indeksuję każdej pary, bo różnica to głównie parser, nie nowa wiedza.",
      "Jeśli importujesz tabelę do arkusza albo config do CI, użyj wyszukiwarki. Poradnik JSON/CSV/XML zostaje jednym artykułem, nie dwunastoma stronami.",
    ],
    searchHint: "Otwórz katalog narzędzi albo wpisz json csv w wyszukiwarce.",
  },
  font: {
    paragraphs: [
      "Fonty webowe sprowadzają się do WOFF2. Indeksuję temat w poradniku, nie jako siatkę TTF/OTF/WOFF pod każdy kierunek.",
      "Konwertery czcionek zostają w wyszukiwarce dla osób, które wiedzą, czego chcą.",
    ],
    searchHint: "Szukaj woff2 albo otwórz poradnik o fontach na stronę.",
  },
  archive: {
    paragraphs: [
      "ZIP i RAR to kompresja archiwum, nie magiczna zamiana wideo. RAR na Windows wymaga innego silnika niż ZIP — stąd osobna ostrożność, nie 40 podstron „archiwum na archiwum”.",
      "Poradnik ZIP / 7z / RAR mówi, kiedy którego użyć. Same konwertery są w katalogu.",
    ],
    searchHint: "Wpisz zip albo rar w wyszukiwarce, jeśli potrzebujesz konkretnej pary.",
  },
}

const en: Record<string, CategoryEssay> = {
  audio: {
    paragraphs: [
      "Audio on Toolando is not a hundred clones of “X to MP3”. I index only pairs I have measured: MP3↔WAV, FLAC→MP3, and audio from your own video file.",
      "Lossy compression is one-way. Anyone promising studio sound from an MP3-sourced WAV is lying — I say so in the MP3 vs WAV guide and in the converter lab note.",
      "Other extensions (OGG, M4A, WMA…) still work via search. I do not mint a doorway page for each of them.",
    ],
    searchHint: "Need another pair? Use the search box — the converter exists; I will not duplicate the article.",
  },
  video: {
    paragraphs: [
      "I index video where the format choice matters: MP4 to WebM for HTML, or MP4 to MP3 from a file you already have.",
      "This is not a downloader. Upload from disk (OBS, phone, camera). Social apps still want MP4 — WebM is for your own site.",
    ],
    searchHint: "AVI, MKV, MOV and the rest are in search, without a farm of extra URLs.",
  },
  image: {
    paragraphs: [
      "Images: PNG↔JPG, JPG→WebP, iPhone HEIC, and SVG→PNG. Those are real problems (transparency, Windows, PageSpeed, logos), not an extension matrix.",
      "The compressor and EXIF stripper are separate because they are different decisions: quality vs privacy vs file weight.",
    ],
    searchHint: "AVIF, TIFF and other conversions are in search.",
  },
  documents: {
    paragraphs: [
      "Documents come down to two honest stories: a PDF page as an image, and DOCX↔PDF through LibreOffice, because JS wrecks tables.",
      "A scanned PDF will not magically become editable Word. I say that on PDF→DOCX so you do not waste the upload.",
    ],
    searchHint: "Markdown, HTML and TXT live in the tools catalogue without cloning this article.",
  },
  data: {
    paragraphs: [
      "JSON, CSV, XML and YAML are data, not “video conversion”. I do not index every pair — the difference is mostly a parser.",
      "The JSON/CSV/XML guide stays one article, not twelve URLs.",
    ],
    searchHint: "Open the tools catalogue or search for json csv.",
  },
  font: {
    paragraphs: [
      "Web fonts come down to WOFF2. I cover that in a guide, not as a TTF/OTF/WOFF grid for every direction.",
      "Font converters stay in search for people who already know the pair they need.",
    ],
    searchHint: "Search for woff2 or open the webfont guide.",
  },
  archive: {
    paragraphs: [
      "ZIP and RAR are archive compression, not a video trick. RAR on Windows uses a different engine than ZIP — that is a caution, not 40 “archive to archive” pages.",
      "The ZIP / 7z / RAR guide says when to use which. The converters stay in the catalogue.",
    ],
    searchHint: "Search zip or rar if you need a specific pair.",
  },
}

export function getCategoryEssay(
  locale: string,
  slug: string,
): CategoryEssay | null {
  const resolved = normalizeToSupported(locale) ?? fallbackLocale
  return (pl[slug] && resolved === "pl" ? pl[slug] : en[slug]) ?? pl[slug] ?? null
}
