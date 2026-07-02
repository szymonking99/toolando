export type AiToolId =
  | "generator-tekstu"
  | "podsumowanie"
  | "generator-obrazow"
  | "tlumacz"
  | "asystent"

export type AiEngine =
  | "text-copywriting"
  | "text-summarize"
  | "image"
  | "text-translate"
  | "chat"

export type AiToolConfig = {
  id: AiToolId
  engine: AiEngine
  /** Lucide icon name used on cards (resolved in the component). */
  icon: string
  category: string
  name: string
  tagline: string
  description: string
}

export const aiTools: AiToolConfig[] = [
  {
    id: "generator-tekstu",
    engine: "text-copywriting",
    icon: "PenLine",
    category: "AI · Tekst",
    name: "Generator tekstu",
    tagline: "Copywriting w kilka sekund",
    description:
      "Twórz opisy produktów, posty, e-maile i teksty marketingowe. Podaj temat, wybierz ton, a AI napisze gotowy tekst.",
  },
  {
    id: "podsumowanie",
    engine: "text-summarize",
    icon: "FileText",
    category: "AI · Dokumenty",
    name: "Podsumowanie dokumentów",
    tagline: "Streszczenie PDF, DOCX i tekstu",
    description:
      "Wgraj dokument, a AI zwróci zwięzłe streszczenie i najważniejsze punkty. Obsługuje PDF, DOCX oraz pliki tekstowe.",
  },
  {
    id: "generator-obrazow",
    engine: "image",
    icon: "ImagePlus",
    category: "AI · Obrazy",
    name: "Generator obrazów AI",
    tagline: "Grafika z opisu tekstowego",
    description:
      "Opisz, co chcesz zobaczyć, a AI wygeneruje unikalny obraz. Wybierz format kwadratowy, poziomy lub pionowy.",
  },
  {
    id: "tlumacz",
    engine: "text-translate",
    icon: "Languages",
    category: "AI · Tekst",
    name: "Tłumacz AI",
    tagline: "Naturalne tłumaczenia",
    description:
      "Tłumacz tekst na dowolny język z zachowaniem tonu i kontekstu. Znacznie lepsze niż klasyczne tłumaczenia słowo w słowo.",
  },
  {
    id: "asystent",
    engine: "chat",
    icon: "MessageSquare",
    category: "AI · Czat",
    name: "Asystent AI",
    tagline: "Zadaj dowolne pytanie",
    description:
      "Rozmawiaj z inteligentnym asystentem — zadawaj pytania, proś o pomoc przy pisaniu, pomysłach i zadaniach technicznych.",
  },
]

export function getAiTool(id: string): AiToolConfig | undefined {
  return aiTools.find((t) => t.id === id)
}
