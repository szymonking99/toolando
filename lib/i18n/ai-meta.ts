import type { Locale } from "./config"
import type { AiToolId } from "@/lib/ai-tools"

export type AiMeta = { name: string; tagline: string; description: string }

type MetaMap = Record<AiToolId, AiMeta>

const pl: MetaMap = {
  "generator-tekstu": {
    name: "Generator tekstu",
    tagline: "Copywriting w kilka sekund",
    description:
      "Twórz opisy produktów, posty, e-maile i teksty marketingowe. Podaj temat, wybierz ton, a AI napisze gotowy tekst.",
  },
  podsumowanie: {
    name: "Podsumowanie dokumentów",
    tagline: "Streszczenie PDF, DOCX i tekstu",
    description:
      "Wgraj dokument, a AI zwróci zwięzłe streszczenie i najważniejsze punkty. Obsługuje PDF, DOCX oraz pliki tekstowe.",
  },
  "generator-obrazow": {
    name: "Generator obrazów AI",
    tagline: "Grafika z opisu tekstowego",
    description:
      "Opisz, co chcesz zobaczyć, a AI wygeneruje unikalny obraz. Wybierz format kwadratowy, poziomy lub pionowy.",
  },
  tlumacz: {
    name: "Tłumacz AI",
    tagline: "Naturalne tłumaczenia",
    description:
      "Tłumacz tekst na dowolny język z zachowaniem tonu i kontekstu. Znacznie lepsze niż klasyczne tłumaczenia słowo w słowo.",
  },
  asystent: {
    name: "Asystent AI",
    tagline: "Zadaj dowolne pytanie",
    description:
      "Rozmawiaj z inteligentnym asystentem — zadawaj pytania, proś o pomoc przy pisaniu, pomysłach i zadaniach technicznych.",
  },
}

const en: MetaMap = {
  "generator-tekstu": {
    name: "Text generator",
    tagline: "Copywriting in seconds",
    description:
      "Create product descriptions, posts, emails and marketing copy. Give a topic, pick a tone, and AI writes ready-to-use text.",
  },
  podsumowanie: {
    name: "Document summarizer",
    tagline: "Summarize PDF, DOCX and text",
    description:
      "Upload a document and AI returns a concise summary and the key points. Supports PDF, DOCX and text files.",
  },
  "generator-obrazow": {
    name: "AI image generator",
    tagline: "Graphics from a text prompt",
    description:
      "Describe what you want to see and AI generates a unique image. Choose square, landscape or portrait format.",
  },
  tlumacz: {
    name: "AI translator",
    tagline: "Natural translations",
    description:
      "Translate text into any language while keeping tone and context. Far better than word-for-word translation.",
  },
  asystent: {
    name: "AI assistant",
    tagline: "Ask anything",
    description:
      "Chat with an intelligent assistant — ask questions and get help with writing, ideas and technical tasks.",
  },
}

const de: MetaMap = {
  "generator-tekstu": {
    name: "Textgenerator",
    tagline: "Copywriting in Sekunden",
    description:
      "Erstelle Produktbeschreibungen, Posts, E-Mails und Marketingtexte. Gib ein Thema an, wähle einen Ton, und die KI schreibt den fertigen Text.",
  },
  podsumowanie: {
    name: "Dokumenten-Zusammenfassung",
    tagline: "PDF, DOCX und Text zusammenfassen",
    description:
      "Lade ein Dokument hoch und die KI liefert eine prägnante Zusammenfassung mit den wichtigsten Punkten. Unterstützt PDF, DOCX und Textdateien.",
  },
  "generator-obrazow": {
    name: "KI-Bildgenerator",
    tagline: "Grafik aus einem Text-Prompt",
    description:
      "Beschreibe, was du sehen möchtest, und die KI erzeugt ein einzigartiges Bild. Wähle Quadrat-, Quer- oder Hochformat.",
  },
  tlumacz: {
    name: "KI-Übersetzer",
    tagline: "Natürliche Übersetzungen",
    description:
      "Übersetze Text in jede Sprache und behalte dabei Ton und Kontext bei. Deutlich besser als Wort-für-Wort-Übersetzungen.",
  },
  asystent: {
    name: "KI-Assistent",
    tagline: "Frag alles",
    description:
      "Unterhalte dich mit einem intelligenten Assistenten — stelle Fragen und erhalte Hilfe beim Schreiben, bei Ideen und technischen Aufgaben.",
  },
}

const es: MetaMap = {
  "generator-tekstu": {
    name: "Generador de texto",
    tagline: "Copywriting en segundos",
    description:
      "Crea descripciones de productos, publicaciones, correos y textos de marketing. Da un tema, elige un tono y la IA escribe el texto listo para usar.",
  },
  podsumowanie: {
    name: "Resumen de documentos",
    tagline: "Resume PDF, DOCX y texto",
    description:
      "Sube un documento y la IA devuelve un resumen conciso y los puntos clave. Admite PDF, DOCX y archivos de texto.",
  },
  "generator-obrazow": {
    name: "Generador de imágenes IA",
    tagline: "Gráficos a partir de un texto",
    description:
      "Describe lo que quieres ver y la IA genera una imagen única. Elige formato cuadrado, horizontal o vertical.",
  },
  tlumacz: {
    name: "Traductor IA",
    tagline: "Traducciones naturales",
    description:
      "Traduce texto a cualquier idioma manteniendo el tono y el contexto. Mucho mejor que la traducción palabra por palabra.",
  },
  asystent: {
    name: "Asistente IA",
    tagline: "Pregunta lo que quieras",
    description:
      "Conversa con un asistente inteligente — haz preguntas y obtén ayuda con la redacción, ideas y tareas técnicas.",
  },
}

const uk: MetaMap = {
  "generator-tekstu": {
    name: "Генератор тексту",
    tagline: "Копірайтинг за секунди",
    description:
      "Створюй описи товарів, пости, листи й маркетингові тексти. Вкажи тему, обери тон — і ШІ напише готовий текст.",
  },
  podsumowanie: {
    name: "Підсумовування документів",
    tagline: "Стислий виклад PDF, DOCX і тексту",
    description:
      "Завантаж документ, і ШІ поверне стислий підсумок та ключові пункти. Підтримує PDF, DOCX і текстові файли.",
  },
  "generator-obrazow": {
    name: "ШІ-генератор зображень",
    tagline: "Графіка з текстового опису",
    description:
      "Опиши, що хочеш побачити, і ШІ згенерує унікальне зображення. Обери квадратний, горизонтальний чи вертикальний формат.",
  },
  tlumacz: {
    name: "ШІ-перекладач",
    tagline: "Природні переклади",
    description:
      "Перекладай текст будь-якою мовою зі збереженням тону й контексту. Набагато краще, ніж переклад слово в слово.",
  },
  asystent: {
    name: "ШІ-асистент",
    tagline: "Запитай про будь-що",
    description:
      "Спілкуйся з розумним асистентом — став запитання й отримуй допомогу з написанням, ідеями та технічними завданнями.",
  },
}

export const aiMeta: Record<Locale, MetaMap> = { pl, en, de, es, uk }
