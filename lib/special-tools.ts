export type SpecialToolId =
  | "kompresor-obrazow"
  | "laczenie-pdf"
  | "usuwanie-tla"
  | "podzial-pdf"
  | "kompresja-pdf"
  | "obrot-pdf"
  | "zmiana-rozmiaru-obrazu"
  | "usun-exif"
  | "znak-wodny"
  | "wyciszenie-wideo"
  | "przyciecie-wideo"
  | "kompresja-wideo"
  | "numeracja-pdf"
  | "pdf-do-tekstu"
  | "naprawa-plikow"
  | "zdjecia-do-pdf"
  | "ocr-skanu"
  | "podpis-pdf"
  | "przygotuj-do-maila"
  | "porownaj-dokumenty"

export type SpecialEngine =
  | "compress-image"
  | "merge-pdf"
  | "remove-bg"
  | "split-pdf"
  | "compress-pdf"
  | "rotate-pdf"
  | "resize-image"
  | "strip-exif"
  | "mute-video"
  | "trim-video"
  | "compress-video"
  | "pdf-page-numbers"
  | "watermark-image"
  | "pdf-to-text"
  | "repair-file"
  | "images-to-pdf"
  | "ocr-document"
  | "stamp-pdf"
  | "prepare-email"
  | "compare-documents"

export type SpecialToolConfig = {
  id: SpecialToolId
  engine: SpecialEngine
  category: string
  name: string
  description: string
  accept: string
  acceptLabel: string
  multiple: boolean
  actionLabel: string
  hasQuality: boolean
  /** Show image preview for the result blob. */
  previewImage: boolean
}

export const specialTools: SpecialToolConfig[] = [
  {
    id: "kompresor-obrazow",
    engine: "compress-image",
    category: "Obrazy",
    name: "Kompresor obrazów",
    description:
      "Zmniejsz rozmiar zdjęć JPG, PNG, WebP lub AVIF bez widocznej utraty jakości. Dostosuj poziom kompresji suwakiem. Możesz wrzucić wiele plików — wynik w ZIP.",
    accept: ".jpg,.jpeg,.png,.webp,.avif,.tiff,.gif",
    acceptLabel: "JPG, PNG, WebP, AVIF, TIFF, GIF (batch OK)",
    multiple: true,
    actionLabel: "Kompresuj obraz",
    hasQuality: true,
    previewImage: true,
  },
  {
    id: "laczenie-pdf",
    engine: "merge-pdf",
    category: "Dokumenty",
    name: "Łączenie plików PDF",
    description:
      "Scal wiele dokumentów PDF w jeden plik, zachowując kolejność i pełną jakość treści. Dodaj co najmniej dwa pliki.",
    accept: ".pdf",
    acceptLabel: "PDF (co najmniej 2 pliki)",
    multiple: true,
    actionLabel: "Połącz pliki PDF",
    hasQuality: false,
    previewImage: false,
  },
  {
    id: "usuwanie-tla",
    engine: "remove-bg",
    category: "Obrazy",
    name: "Usuwanie tła ze zdjęcia",
    description:
      "Automatycznie wytnij tło ze zdjęcia jednym kliknięciem dzięki sztucznej inteligencji. Wynik zapisywany jest jako PNG z przezroczystością.",
    accept: ".jpg,.jpeg,.png,.webp",
    acceptLabel: "JPG, PNG, WebP",
    multiple: false,
    actionLabel: "Usuń tło",
    hasQuality: false,
    previewImage: true,
  },
  {
    id: "podzial-pdf",
    engine: "split-pdf",
    category: "Dokumenty",
    name: "Podział PDF na strony",
    description:
      "Rozdziel dokument PDF na osobne pliki — każda strona osobno albo wybrany zakres. Wynik w archiwum ZIP.",
    accept: ".pdf",
    acceptLabel: "PDF",
    multiple: false,
    actionLabel: "Podziel PDF",
    hasQuality: false,
    previewImage: false,
  },
  {
    id: "kompresja-pdf",
    engine: "compress-pdf",
    category: "Dokumenty",
    name: "Kompresja PDF",
    description:
      "Zmniejsz rozmiar pliku PDF przez optymalizację struktury dokumentu. Najlepsze efekty przy skanach i dużych PDF.",
    accept: ".pdf",
    acceptLabel: "PDF",
    multiple: false,
    actionLabel: "Kompresuj PDF",
    hasQuality: false,
    previewImage: false,
  },
  {
    id: "obrot-pdf",
    engine: "rotate-pdf",
    category: "Dokumenty",
    name: "Obrót stron PDF",
    description:
      "Obróć wszystkie strony dokumentu PDF o 90°, 180° lub 270° — przydatne po skanowaniu lub imporcie.",
    accept: ".pdf",
    acceptLabel: "PDF",
    multiple: false,
    actionLabel: "Obróć PDF",
    hasQuality: false,
    previewImage: false,
  },
  {
    id: "pdf-do-tekstu",
    engine: "pdf-to-text",
    category: "Dokumenty",
    name: "PDF do tekstu",
    description:
      "Wyodrębnij tekst z pliku PDF do pliku TXT. Działa lokalnie na serwerze — bez wysyłania do zewnętrznej chmury AI.",
    accept: ".pdf",
    acceptLabel: "PDF",
    multiple: false,
    actionLabel: "Wyodrębnij tekst",
    hasQuality: false,
    previewImage: false,
  },
  {
    id: "zmiana-rozmiaru-obrazu",
    engine: "resize-image",
    category: "Obrazy",
    name: "Zmiana rozmiaru obrazu",
    description:
      "Zmień wymiary zdjęcia w pikselach z zachowaniem proporcji. Idealne pod social media, miniatury i formularze. Batch: wiele plików → ZIP.",
    accept: ".jpg,.jpeg,.png,.webp,.avif,.tiff,.gif",
    acceptLabel: "JPG, PNG, WebP, AVIF, TIFF, GIF (batch OK)",
    multiple: true,
    actionLabel: "Zmień rozmiar",
    hasQuality: false,
    previewImage: true,
  },
  {
    id: "usun-exif",
    engine: "strip-exif",
    category: "Obrazy",
    name: "Usuń metadane EXIF",
    description:
      "Usuń dane EXIF (lokalizacja GPS, model aparatu, daty) ze zdjęcia przed publikacją w internecie. Batch: wiele zdjęć → jeden ZIP.",
    accept: ".jpg,.jpeg,.png,.webp,.tiff,.heic",
    acceptLabel: "JPG, PNG, WebP, TIFF, HEIC (batch OK)",
    multiple: true,
    actionLabel: "Usuń EXIF",
    hasQuality: false,
    previewImage: true,
  },
  {
    id: "znak-wodny",
    engine: "watermark-image",
    category: "Obrazy",
    name: "Znak wodny na zdjęciu",
    description:
      "Dodaj półprzezroczysty tekstowy znak wodny na dole obrazu — ochrona przed nieautoryzowanym użyciem.",
    accept: ".jpg,.jpeg,.png,.webp",
    acceptLabel: "JPG, PNG, WebP",
    multiple: false,
    actionLabel: "Dodaj znak wodny",
    hasQuality: false,
    previewImage: true,
  },
  {
    id: "wyciszenie-wideo",
    engine: "mute-video",
    category: "Wideo",
    name: "Wyciszenie wideo",
    description:
      "Usuń ścieżkę dźwiękową z pliku wideo, zachowując obraz bez ponownego kodowania (gdy to możliwe).",
    accept: ".mp4,.webm,.mov,.mkv",
    acceptLabel: "MP4, WebM, MOV, MKV",
    multiple: false,
    actionLabel: "Wycisz wideo",
    hasQuality: false,
    previewImage: false,
  },
  {
    id: "przyciecie-wideo",
    engine: "trim-video",
    category: "Wideo",
    name: "Przycięcie wideo",
    description:
      "Wytnij fragment wideo między podanym czasem początku i końca (sekundy lub MM:SS).",
    accept: ".mp4,.webm,.mov,.mkv",
    acceptLabel: "MP4, WebM, MOV, MKV",
    multiple: false,
    actionLabel: "Przytnij wideo",
    hasQuality: false,
    previewImage: false,
  },
  {
    id: "kompresja-wideo",
    engine: "compress-video",
    category: "Wideo",
    name: "Kompresja wideo",
    description:
      "Zmniejsz rozmiar pliku wideo przez ponowne kodowanie H.264. Dostosuj jakość suwakiem.",
    accept: ".mp4,.webm,.mov,.mkv",
    acceptLabel: "MP4, WebM, MOV, MKV",
    multiple: false,
    actionLabel: "Kompresuj wideo",
    hasQuality: true,
    previewImage: false,
  },
  {
    id: "numeracja-pdf",
    engine: "pdf-page-numbers",
    category: "Dokumenty",
    name: "Numeracja stron PDF",
    description:
      "Dodaj numerację „1 / N” na dole lub górze każdej strony dokumentu PDF.",
    accept: ".pdf",
    acceptLabel: "PDF",
    multiple: false,
    actionLabel: "Dodaj numery stron",
    hasQuality: false,
    previewImage: false,
  },
  {
    id: "naprawa-plikow",
    engine: "repair-file",
    category: "Pliki",
    name: "Naprawa plików",
    description:
      "Spróbuj uratować uszkodzony PDF, obraz, wideo/audio, ZIP/DOCX albo JSON. Narzędzie diagnozuje typ pliku i przepisuje kontener — bez magicznego odzysku jakości ze stratnych formatów.",
    accept:
      ".pdf,.jpg,.jpeg,.png,.webp,.gif,.avif,.tiff,.tif,.heic,.heif,.mp4,.mov,.webm,.mkv,.avi,.mp3,.wav,.flac,.ogg,.m4a,.aac,.zip,.docx,.xlsx,.pptx,.json",
    acceptLabel: "PDF, obrazy, wideo/audio, ZIP/Office, JSON",
    multiple: false,
    actionLabel: "Napraw plik",
    hasQuality: false,
    previewImage: false,
  },
  {
    id: "zdjecia-do-pdf",
    engine: "images-to-pdf",
    category: "Dokumenty",
    name: "Zdjęcia / skany → PDF",
    description:
      "Zrób jeden PDF ze zdjęć lub skanów (JPG, PNG, WebP, HEIC…). Kolejność plików = kolejność stron. Idealne do CV, umów i skanów do maila.",
    accept: ".jpg,.jpeg,.png,.webp,.gif,.avif,.tiff,.tif,.heic,.heif,.bmp",
    acceptLabel: "JPG, PNG, WebP, HEIC, TIFF, GIF (wiele plików)",
    multiple: true,
    actionLabel: "Zrób PDF",
    hasQuality: true,
    previewImage: false,
  },
  {
    id: "ocr-skanu",
    engine: "ocr-document",
    category: "Dokumenty",
    name: "OCR skanu → tekst",
    description:
      "Wyodrębnij tekst ze skanu, zdjęcia dokumentu albo PDF bez warstwy tekstowej. PDF: najpierw warstwa tekstowa, inaczej OCR do 3 stron.",
    accept: ".jpg,.jpeg,.png,.webp,.gif,.tif,.tiff,.heic,.heif,.pdf,.bmp",
    acceptLabel: "Obraz lub PDF (skan)",
    multiple: false,
    actionLabel: "Wyodrębnij tekst",
    hasQuality: false,
    previewImage: false,
  },
  {
    id: "podpis-pdf",
    engine: "stamp-pdf",
    category: "Dokumenty",
    name: "Podpis / pieczątka PDF",
    description:
      "Dodaj tekstową pieczątkę lub podpis na każdą stronę PDF. Opcjonalnie dołącz obraz pieczątki jako drugi plik.",
    accept: ".pdf,.png,.jpg,.jpeg,.webp",
    acceptLabel: "PDF (+ opcjonalnie obraz pieczątki)",
    multiple: true,
    actionLabel: "Dodaj podpis",
    hasQuality: false,
    previewImage: false,
  },
  {
    id: "przygotuj-do-maila",
    engine: "prepare-email",
    category: "Pliki",
    name: "Przygotuj do maila",
    description:
      "Skompresuj, usuń EXIF i nadaj lekkie nazwy. Obrazy i PDF → ZIP gotowy do wysyłki; opcjonalnie złóż obrazy w jeden PDF.",
    accept:
      ".jpg,.jpeg,.png,.webp,.gif,.avif,.tiff,.tif,.heic,.heif,.bmp,.pdf",
    acceptLabel: "Obrazy i PDF (wiele plików)",
    multiple: true,
    actionLabel: "Przygotuj",
    hasQuality: true,
    previewImage: false,
  },
  {
    id: "porownaj-dokumenty",
    engine: "compare-documents",
    category: "Dokumenty",
    name: "Porównaj dokumenty",
    description:
      "Porównaj dwa PDF lub DOCX (warstwa tekstowa) i pobierz prosty diff. Przy samych skanach najpierw użyj OCR.",
    accept: ".pdf,.docx,.txt,.md",
    acceptLabel: "Dokładnie 2 pliki: PDF / DOCX / TXT",
    multiple: true,
    actionLabel: "Porównaj",
    hasQuality: false,
    previewImage: false,
  },
]

export function getSpecialTool(id: string): SpecialToolConfig | undefined {
  return specialTools.find((t) => t.id === id)
}
