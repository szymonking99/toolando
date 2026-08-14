import { fallbackLocale, normalizeToSupported } from "./config"

export type PublisherNotes = {
  title: string
  lead: string
  sections: { title: string; paragraphs: string[] }[]
}

const notesPl: PublisherNotes = {
  title: "Jak powstają narzędzia i poradniki",
  lead:
    "Nazywam się Szymon. Toolando buduję sam — od kodu po teksty. Zanim coś opiszę albo wypuszczę, sprawdzam to na własnych plikach. Poniżej krótko: jak to wygląda i na czym mi zależy.",
  sections: [
    {
      title: "Jak testuję konwersje",
      paragraphs: [
        "Przy audio sprawdzam, czy wynik ma sensowną długość i bitrate oraz czy otwiera się w zwykłym odtwarzaczu. Ważna rzecz: zamiana MP3 na WAV nie przywraca jakości, której MP3 już nie ma — i piszę o tym wprost.",
        "Przy obrazach patrzę na przezroczystość PNG, kompresję JPG i to, czy nowszy format (WebP, AVIF) w ogóle zadziała u Ciebie. Zdjęcia HEIC z iPhone’a testuję na Windows, bo właśnie wtedy ludzie najczęściej szukają pomocy.",
        "PDF zamieniam na obraz i sprawdzam, czy drobny tekst da się przeczytać. Dokumenty Word → PDF idą przez LibreOffice na serwerze — prostszy silnik w przeglądarce często psuje układ tabel i nagłówków.",
      ],
    },
    {
      title: "Czego tu nie znajdziesz",
      paragraphs: [
        "Nie ściągam filmów ani muzyki z YouTube, TikToka ani Spotify. Możesz wrzucić własny plik z dysku — na przykład nagranie z telefonu albo z OBS.",
        "Po konwersji nie trzymam Twoich plików i nie używam ich do trenowania AI. Kalkulatory (VAT, NIP, hasła) liczą się u Ciebie w przeglądarce, bez wysyłki na serwer.",
      ],
    },
    {
      title: "Jak z tego korzystać",
      paragraphs: [
        "Jeśli nie wiesz, czy w ogóle warto konwertować, zajrzyj najpierw do poradnika albo opisu formatu. Często lepiej zostawić oryginał.",
        "Narzędzie jest po to, żebyś szybko zrobił robotę. Poradnik — żebyś wiedział, kiedy tego nie robić. Staram się pisać uczciwie, nawet jeśli oznacza to „nie wrzucaj tego pliku online”.",
      ],
    },
  ],
}

const notesEn: PublisherNotes = {
  title: "How the tools and guides are made",
  lead:
    "I'm Szymon. I build Toolando myself — code and copy. Before I publish a guide or a converter note, I run real files through it. Here’s how that works and what I care about.",
  sections: [
    {
      title: "How I test conversions",
      paragraphs: [
        "For audio I check duration, bitrate, and whether the result opens in a normal player. Important: MP3 → WAV does not bring back quality that MP3 already threw away — and I say that clearly.",
        "For images I look at PNG transparency, JPEG compression, and whether newer formats (WebP, AVIF) actually work for you. I test iPhone HEIC on Windows, because that’s when people usually need help.",
        "For PDF I render pages to images and check whether small text stays readable. Word → PDF goes through LibreOffice on the server — a browser-only pipeline often breaks tables and headings.",
      ],
    },
    {
      title: "What you won’t find here",
      paragraphs: [
        "I don’t download video or music from YouTube, TikTok, or Spotify. You can upload a file you already have — a phone recording or an OBS export, for example.",
        "After conversion I don’t keep your files and I don’t use them to train AI. Calculators (VAT, tax IDs, passwords) run in your browser, without sending that data to the server.",
      ],
    },
    {
      title: "How to use the site",
      paragraphs: [
        "If you’re unsure whether to convert at all, start with a guide or a format page. Leaving the original is often better.",
        "The tool is there to get the job done. The guide is there so you know when not to. I try to stay honest — even when that means “don’t upload this file online”.",
      ],
    },
  ],
}

const byLocale: Record<string, PublisherNotes> = {
  pl: notesPl,
  en: notesEn,
}

export function getSocialProofLine(locale: string): string {
  const resolved = normalizeToSupported(locale) ?? fallbackLocale
  if (resolved === "pl") {
    return "Poradniki i narzędzia od jednej osoby — po testach na realnych plikach"
  }
  return "Guides and tools from one person — tested on real files"
}

export function getPublisherNotes(locale: string): PublisherNotes {
  const resolved = normalizeToSupported(locale) ?? fallbackLocale
  return byLocale[resolved] ?? notesEn
}
