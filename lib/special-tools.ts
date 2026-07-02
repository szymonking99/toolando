export type SpecialToolId =
  | "kompresor-obrazow"
  | "laczenie-pdf"
  | "usuwanie-tla"

export type SpecialEngine = "compress-image" | "merge-pdf" | "remove-bg"

export type SpecialToolConfig = {
  id: SpecialToolId
  engine: SpecialEngine
  category: string
  name: string
  description: string
  /** Comma-separated accept attribute for the file input. */
  accept: string
  /** Human-readable list of accepted formats. */
  acceptLabel: string
  /** Whether the tool accepts multiple files at once. */
  multiple: boolean
  /** Label for the primary action button. */
  actionLabel: string
  /** Whether the tool exposes a quality slider. */
  hasQuality: boolean
}

export const specialTools: SpecialToolConfig[] = [
  {
    id: "kompresor-obrazow",
    engine: "compress-image",
    category: "Obrazy",
    name: "Kompresor obrazów",
    description:
      "Zmniejsz rozmiar zdjęć JPG, PNG, WebP lub AVIF bez widocznej utraty jakości. Dostosuj poziom kompresji suwakiem.",
    accept: ".jpg,.jpeg,.png,.webp,.avif,.tiff,.gif",
    acceptLabel: "JPG, PNG, WebP, AVIF, TIFF, GIF",
    multiple: false,
    actionLabel: "Kompresuj obraz",
    hasQuality: true,
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
  },
]

export function getSpecialTool(id: string): SpecialToolConfig | undefined {
  return specialTools.find((t) => t.id === id)
}
