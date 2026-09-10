import type { GuideArticle } from "./types"

const AUTHOR = "Szymon"

type Batch5Slug =
  | "pdf-redaction-privacy-guide"
  | "ocr-scan-to-text-guide"
  | "prepare-files-for-email-guide"

export const guidesBatch5Pl: Record<Batch5Slug, GuideArticle> = {
  "pdf-redaction-privacy-guide": {
    slug: "pdf-redaction-privacy-guide",
    title: "Redakcja PDF — jak zaczernić PESEL i e-mail przed wysyłką",
    description:
      "Wizualne zaczernianie danych w PDF: kiedy wystarczy, czego nie robi, i jak połączyć z przygotowaniem do maila.",
    published: "2026-09-10",
    updated: "2026-09-10",
    author: AUTHOR,
    relatedFormats: ["pdf"],
    relatedTools: ["redakcja-pdf", "przygotuj-do-maila", "inspektor-prywatnosci"],
    sections: [
      {
        paragraphs: [
          "Zanim wyślesz umowę, fakturę albo skan dowodu mailem, często trzeba ukryć PESEL, numer konta albo adres e-mail współpracownika. W Toolando redakcja PDF rysuje czarne prostokąty nad znalezionym tekstem — to szybka, wizualna ochrona.",
          "To nie jest kryptograficzne usuwanie warstwy tekstowej. Przy wrażliwych dokumentach traktuj zaczernienie jako pierwszą linię, a nie jedyne zabezpieczenie. Po redakcji często warto od razu użyć „Przygotuj do maila”.",
        ],
      },
      {
        title: "Kiedy redakcja ma sens",
        paragraphs: [
          "PDF ma warstwę tekstową (nie jest samym skanem bez OCR) — wtedy wyszukiwanie PESEL/e-mail działa niezawodnie.",
          "Wysyłasz fragment umowy do osoby trzeciej i nie chcesz ujawniać danych osobowych w treści.",
          "Dla samych skanów najpierw zrób OCR albo ręcznie zaznacz frazy do zaczernienia.",
        ],
      },
    ],
  },
  "ocr-scan-to-text-guide": {
    slug: "ocr-scan-to-text-guide",
    title: "OCR skanu — jak wyciągnąć tekst ze zdjęcia dokumentu",
    description:
      "Kiedy użyć OCR, kiedy wystarczy warstwa tekstowa PDF i jak porównać dwie wersje dokumentu.",
    published: "2026-09-10",
    updated: "2026-09-10",
    author: AUTHOR,
    relatedFormats: ["pdf", "jpg", "png"],
    relatedTools: ["ocr-skanu", "pdf-do-tekstu", "porownaj-dokumenty"],
    sections: [
      {
        paragraphs: [
          "Skan faktury albo zdjęcie tablicy to obraz — kopiowanie tekstu nie działa. OCR rozpoznaje litery i zwraca plik TXT. W Toolando darmowy OCR obejmuje do 3 stron PDF; jeśli dokument ma już warstwę tekstową, wyodrębniamy ją bez AI.",
          "Po OCR możesz porównać dwie wersje umowy narzędziem „Porównaj dokumenty” albo wkleić tekst do edytora.",
        ],
      },
      {
        title: "Praktyczny workflow",
        paragraphs: [
          "Kilka zdjęć stron → „Zdjęcia / skany → PDF”, potem OCR albo rozdzielenie stron.",
          "Czytelne oświetlenie i proste kadrowanie poprawiają jakość rozpoznawania bardziej niż „magiczne” ustawienia.",
        ],
      },
    ],
  },
  "prepare-files-for-email-guide": {
    slug: "prepare-files-for-email-guide",
    title: "Plik za duży do maila — kompresja, EXIF i ZIP",
    description:
      "Jak przygotować zdjęcia i PDF do wysyłki: kompresja, usuwanie metadanych i spakowanie do ZIP.",
    published: "2026-09-10",
    updated: "2026-09-10",
    author: AUTHOR,
    relatedFormats: ["pdf", "jpg", "png", "heic"],
    relatedTools: ["przygotuj-do-maila", "kompresja-pdf", "usun-exif"],
    sections: [
      {
        paragraphs: [
          "Skrzynki pocztowe często odrzucają załączniki powyżej 10–25 MB. Zamiast wysyłać oryginalne HEIC z iPhone’a albo nieskompresowany skan, użyj „Przygotuj do maila”: rekodowanie bez EXIF, kompresja PDF i wynik w ZIP.",
          "Opcjonalnie złóż kilka zdjęć w jeden PDF — odbiorca dostaje jeden dokument zamiast dziesięciu załączników.",
        ],
      },
      {
        title: "Kiedy nie kompresować agresywnie",
        paragraphs: [
          "Archiwum prawne i dowody — zostaw oryginał lokalnie; do maila wyślij lekką kopię.",
          "Dokumenty z pieczęcią lub podpisem — po kompresji sprawdź czytelność.",
        ],
      },
    ],
  },
}

export const guidesBatch5En: Record<Batch5Slug, GuideArticle> = {
  "pdf-redaction-privacy-guide": {
    ...guidesBatch5Pl["pdf-redaction-privacy-guide"],
    title: "PDF redaction — black out IDs and emails before sending",
    description:
      "Visual PDF blackout: when it is enough, what it does not do, and how to pair it with email prep.",
    sections: [
      {
        paragraphs: [
          "Before you email a contract, invoice, or ID scan, you often need to hide a national ID, bank account, or coworker email. Toolando draws black rectangles over matched text — a fast visual safeguard.",
          "This is not cryptographic removal of the text layer. For sensitive documents treat blackout as a first line of defense, then run “Prepare for email”.",
        ],
      },
      {
        title: "When redaction helps",
        paragraphs: [
          "The PDF has a text layer (not a pure scan without OCR) — PESEL/email search works reliably.",
          "You are sharing a contract fragment and must hide personal data in the body.",
          "For pure scans, run OCR first or enter custom phrases to black out.",
        ],
      },
    ],
  },
  "ocr-scan-to-text-guide": {
    ...guidesBatch5Pl["ocr-scan-to-text-guide"],
    title: "Scan OCR — extract text from a document photo",
    description:
      "When to use OCR, when a PDF text layer is enough, and how to compare two document versions.",
    sections: [
      {
        paragraphs: [
          "An invoice scan or whiteboard photo is just pixels — copy-paste fails. OCR recognizes characters and returns a TXT file. Toolando’s free OCR covers up to 3 PDF pages; if a text layer already exists, we extract it without AI.",
          "After OCR you can compare two contract versions with “Compare documents” or paste the text into an editor.",
        ],
      },
      {
        title: "Practical workflow",
        paragraphs: [
          "Several page photos → “Photos / scans → PDF”, then OCR or split pages.",
          "Good lighting and straight framing improve recognition more than fancy settings.",
        ],
      },
    ],
  },
  "prepare-files-for-email-guide": {
    ...guidesBatch5Pl["prepare-files-for-email-guide"],
    title: "File too big for email — compress, strip EXIF, ZIP",
    description:
      "How to prepare photos and PDFs for sending: compression, metadata removal, and a ZIP pack.",
    sections: [
      {
        paragraphs: [
          "Mailboxes often reject attachments above 10–25 MB. Instead of sending original iPhone HEIC or an uncompressed scan, use “Prepare for email”: re-encode without EXIF, compress PDFs, deliver a ZIP.",
          "Optionally pack several photos into one PDF — the recipient gets one document instead of ten attachments.",
        ],
      },
      {
        title: "When not to crush quality",
        paragraphs: [
          "Legal archives and evidence — keep the original locally; send a light copy by email.",
          "Documents with seals or signatures — check readability after compression.",
        ],
      },
    ],
  },
}
