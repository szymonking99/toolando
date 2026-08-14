import type { GuideArticle } from "./types"

const AUTHOR = "Szymon"

type Batch4Slug =
  | "split-pdf-pages-guide"
  | "remove-exif-privacy-guide"
  | "jwt-decode-safely-guide"
  | "mortgage-loan-calculator-guide"

export const guidesBatch4Pl: Record<Batch4Slug, GuideArticle> = {
  "split-pdf-pages-guide": {
    slug: "split-pdf-pages-guide",
    title: "Jak podzielić PDF na osobne strony online",
    description:
      "Kiedy rozdzielać PDF na pliki, jak wybrać zakres stron i co zrobić z wynikiem ZIP.",
    published: "2026-08-01",
    updated: "2026-08-12",
    author: AUTHOR,
    relatedFormats: ["pdf"],
    relatedTools: ["podzial-pdf", "laczenie-pdf", "kompresja-pdf"],
    sections: [
      {
        paragraphs: [
          "Podział PDF to najczęstsze zadanie po skanowaniu wielostronicowej umowy lub faktury — potrzebujesz wysłać tylko jedną stronę mailem albo dołączyć fragment do innego dokumentu.",
          "W Toolando.tech możesz wyeksportować każdą stronę osobno albo wskazać zakres (np. 1-3,5). Wynik to archiwum ZIP z plikami PDF — każdy plik zachowuje oryginalną jakość wektorową lub skanu.",
        ],
      },
      {
        title: "Kiedy dzielić, a kiedy scalać",
        paragraphs: [
          "Dziel — gdy odbiorca potrzebuje tylko fragmentu (podpis, załącznik, strona tytułowa).",
          "Scal — gdy składasz skany w jeden plik do archiwum lub wysyłki.",
          "Po podziale często warto dodać numerację stron lub skompresować duże skany.",
        ],
      },
    ],
  },
  "remove-exif-privacy-guide": {
    slug: "remove-exif-privacy-guide",
    title: "EXIF w zdjęciach — co usunąć przed publikacją",
    description:
      "GPS, model aparatu i data w metadanych EXIF — ryzyko prywatności i jak je usunąć.",
    published: "2026-08-02",
    updated: "2026-08-12",
    author: AUTHOR,
    relatedFormats: ["jpg", "png", "heic"],
    relatedTools: ["usun-exif", "kompresor-obrazow", "znak-wodny"],
    sections: [
      {
        paragraphs: [
          "EXIF to ukryte metadane w plikach JPEG, PNG czy HEIC: lokalizacja GPS, model telefonu, orientacja, czasem miniatura podglądu. Social media często je usuwają, ale własna strona, newsletter czy załącznik mailowy — nie zawsze.",
          "Przed publikacją zdjęć dzieci, wnętrz domu lub dokumentów na biurku usuń EXIF narzędziem lokalnym — w Toolando przetwarzanie odbywa się na serwerze i plik nie trafia do zewnętrznej chmury AI.",
        ],
      },
      {
        title: "Co zostaje po usunięciu EXIF",
        paragraphs: [
          "Piksele obrazu — bez zmian. Usuwane są tylko metadane, nie wpływa to na rozdzielczość.",
          "Po usunięciu EXIF możesz dodatkowo skompresować plik lub dodać znak wodny przed publikacją portfolio.",
        ],
      },
    ],
  },
  "jwt-decode-safely-guide": {
    slug: "jwt-decode-safely-guide",
    title: "JWT — jak odczytać token bez weryfikacji podpisu",
    description:
      "Header, payload i Base64URL w tokenach JWT — kiedy dekodować lokalnie i czego nie robić.",
    published: "2026-08-03",
    updated: "2026-08-12",
    author: AUTHOR,
    relatedFormats: [],
    relatedTools: ["dekoder-jwt", "json-formatter"],
    sections: [
      {
        paragraphs: [
          "JSON Web Token składa się z trzech części oddzielonych kropkami: header, payload i signature. Dekoder JWT w Toolando pokazuje header i payload po dekodowaniu Base64URL — bez wysyłania tokena na serwer (działa w przeglądarce).",
          "To nie zastępuje weryfikacji podpisu po stronie backendu. Dekodowanie służy debugowaniu (np. wygasły `exp`, zły `aud`) — nigdy nie traktuj samego payloadu jako dowodu tożsamości.",
        ],
      },
      {
        title: "Bezpieczne praktyki",
        paragraphs: [
          "Nie wklejaj produkcyjnych tokenów z danymi osobowymi na publicznych stronach — użyj lokalnego dekodera lub środowiska testowego.",
          "Sprawdź `exp` i `nbf` przed debugowaniem błędów 401.",
          "Po analizie usuń token z historii schowka i logów.",
        ],
      },
    ],
  },
  "mortgage-loan-calculator-guide": {
    slug: "mortgage-loan-calculator-guide",
    title: "Kalkulator kredytu — rata, odsetki i na co uważać",
    description:
      "Annuitet, WIBOR, prowizje i ubezpieczenia — jak czytać wynik kalkulatora kredytu hipotecznego.",
    published: "2026-08-04",
    updated: "2026-08-12",
    author: AUTHOR,
    relatedFormats: [],
    relatedTools: ["kalkulator-kredytu", "kalkulator-b2b", "kalkulator-vat"],
    sections: [
      {
        paragraphs: [
          "Kalkulator kredytu w Toolando liczy ratę annuitetową: stała miesięczna spłata składająca się z kapitału i odsetek. Im dłuższy okres, tym niższa rata — ale wyższy koszt odsetek łącznie.",
          "To punkt wyjścia do rozmowy z bankiem, nie oferta. Rzeczywista rata zależy od WIBOR, marży, prowizji, ubezpieczenia na życie i wkładu własnego.",
        ],
      },
      {
        title: "Co doliczyć poza kalkulatorem",
        paragraphs: [
          "Prowizja od udzielenia i prowizja za wcześniejszą spłatę (jeśli w umowie).",
          "Ubezpieczenie nieruchomości i na życie — często wymagane przez bank.",
          "Koszty notarialne i podatek PCC — przy zakupie mieszkania.",
        ],
      },
    ],
  },
}

export const guidesBatch4En: Record<Batch4Slug, GuideArticle> = {
  "split-pdf-pages-guide": {
    ...guidesBatch4Pl["split-pdf-pages-guide"],
    title: "How to split a PDF into separate pages online",
    description:
      "When to split PDFs, how to pick page ranges, and what to do with the ZIP output.",
    sections: [
      {
        paragraphs: [
          "Splitting a PDF is common after scanning a multi-page contract or invoice — you may need to email a single page or attach a fragment elsewhere.",
          "On Toolando.tech you can export every page separately or specify a range (e.g. 1-3,5). The result is a ZIP of PDF files, each keeping the original vector or scan quality.",
        ],
      },
      {
        title: "When to split vs merge",
        paragraphs: [
          "Split — when the recipient needs only a fragment (signature page, attachment, cover).",
          "Merge — when assembling scans into one archive or send-out.",
          "After splitting, consider page numbering or compressing large scans.",
        ],
      },
    ],
  },
  "remove-exif-privacy-guide": {
    ...guidesBatch4Pl["remove-exif-privacy-guide"],
    title: "EXIF in photos — what to remove before publishing",
    description: "GPS, camera model and dates in EXIF metadata — privacy risks and removal.",
    sections: [
      {
        paragraphs: [
          "EXIF is hidden metadata in JPEG, PNG, or HEIC files: GPS location, phone model, orientation, sometimes a preview thumbnail. Social networks often strip it, but your own site, newsletter, or email attachment may not.",
          "Before publishing photos of children, home interiors, or documents on a desk, remove EXIF with a dedicated tool — on Toolando processing happens on the server and the file is not sent to an external AI cloud.",
        ],
      },
      {
        title: "What remains after removing EXIF",
        paragraphs: [
          "Image pixels stay unchanged. Only metadata is removed — resolution is unaffected.",
          "After stripping EXIF you can still compress the file or add a watermark before publishing a portfolio.",
        ],
      },
    ],
  },
  "jwt-decode-safely-guide": {
    ...guidesBatch4Pl["jwt-decode-safely-guide"],
    title: "JWT — how to read a token without verifying the signature",
    description: "Header, payload and Base64URL — when to decode locally and what not to do.",
    sections: [
      {
        paragraphs: [
          "A JSON Web Token has three dot-separated parts: header, payload, and signature. The JWT decoder in Toolando shows header and payload after Base64URL decoding — without sending the token to a server (it runs in the browser).",
          "This does not replace signature verification on the backend. Decoding is for debugging (e.g. expired `exp`, wrong `aud`) — never treat the payload alone as proof of identity.",
        ],
      },
      {
        title: "Safe practices",
        paragraphs: [
          "Do not paste production tokens with personal data on public sites — use a local decoder or a test environment.",
          "Check `exp` and `nbf` before debugging 401 errors.",
          "After analysis, clear the token from clipboard history and logs.",
        ],
      },
    ],
  },
  "mortgage-loan-calculator-guide": {
    ...guidesBatch4Pl["mortgage-loan-calculator-guide"],
    title: "Loan calculator — payment, interest and what to watch for",
    description: "Annuity, fees and insurance — how to read a mortgage calculator result.",
    sections: [
      {
        paragraphs: [
          "The loan calculator on Toolando computes an annuity payment: a fixed monthly amount of principal plus interest. A longer term lowers the payment — but raises total interest cost.",
          "Treat this as a starting point for a bank conversation, not an offer. The real payment depends on the reference rate, margin, fees, life insurance, and down payment.",
        ],
      },
      {
        title: "What to add beyond the calculator",
        paragraphs: [
          "Origination fees and early-repayment fees (if in the contract).",
          "Property and life insurance — often required by the bank.",
          "Notary costs and transfer taxes when buying a home.",
        ],
      },
    ],
  },
}

export const guidesBatch4Uk: Record<Batch4Slug, GuideArticle> = {
  "split-pdf-pages-guide": {
    ...guidesBatch4En["split-pdf-pages-guide"],
    title: "Як розділити PDF на окремі сторінки онлайн",
    description:
      "Коли ділити PDF на файли, як обрати діапазон сторінок і що робити з ZIP-результатом.",
    sections: [
      {
        paragraphs: [
          "Розділення PDF — типове завдання після сканування багатосторінкового договору чи рахунку: потрібно надіслати лише одну сторінку або вкласти фрагмент в інший документ.",
          "У Toolando.tech можна експортувати кожну сторінку окремо або вказати діапазон (наприклад 1-3,5). Результат — ZIP-архів з PDF-файлами; кожен зберігає оригінальну векторну якість або якість скану.",
        ],
      },
      {
        title: "Коли ділити, а коли об’єднувати",
        paragraphs: [
          "Діліть — коли отримувачу потрібен лише фрагмент (підпис, вкладення, титульна сторінка).",
          "Об’єднуйте — коли збираєте скани в один файл для архіву чи розсилки.",
          "Після розділення часто варто додати нумерацію сторінок або стиснути великі скани.",
        ],
      },
    ],
  },
  "remove-exif-privacy-guide": {
    ...guidesBatch4En["remove-exif-privacy-guide"],
    title: "EXIF у фото — що видалити перед публікацією",
    description:
      "GPS, модель камери та дата в метаданих EXIF — ризики для приватності та як їх прибрати.",
    sections: [
      {
        paragraphs: [
          "EXIF — приховані метадані в JPEG, PNG чи HEIC: GPS-локація, модель телефону, орієнтація, іноді мініатюра попереднього перегляду. Соцмережі часто їх знімають, але власний сайт, розсилка чи вкладення в лист — не завжди.",
          "Перед публікацією фото дітей, інтер’єру дому чи документів на столі видаліть EXIF спеціалізованим інструментом — у Toolando обробка йде на сервері, і файл не потрапляє в зовнішню хмару ШІ.",
        ],
      },
      {
        title: "Що залишається після видалення EXIF",
        paragraphs: [
          "Пікселі зображення без змін. Видаляються лише метадані — роздільність не змінюється.",
          "Після очищення EXIF можна додатково стиснути файл або додати водяний знак перед публікацією портфоліо.",
        ],
      },
    ],
  },
  "jwt-decode-safely-guide": {
    ...guidesBatch4En["jwt-decode-safely-guide"],
    title: "JWT — як прочитати токен без перевірки підпису",
    description:
      "Header, payload і Base64URL у JWT — коли декодувати локально і чого не робити.",
    sections: [
      {
        paragraphs: [
          "JSON Web Token складається з трьох частин, розділених крапками: header, payload і signature. Декодер JWT у Toolando показує header і payload після декодування Base64URL — без надсилання токена на сервер (працює в браузері).",
          "Це не замінює перевірку підпису на бекенді. Декодування потрібне для налагодження (наприклад прострочений `exp`, неправильний `aud`) — ніколи не сприймайте сам payload як доказ особи.",
        ],
      },
      {
        title: "Безпечні практики",
        paragraphs: [
          "Не вставляйте продакшен-токени з персональними даними на публічних сайтах — користуйтеся локальним декодером або тестовим середовищем.",
          "Перевірте `exp` і `nbf` перед налагодженням помилок 401.",
          "Після аналізу видаліть токен з історії буфера обміну та логів.",
        ],
      },
    ],
  },
  "mortgage-loan-calculator-guide": {
    ...guidesBatch4En["mortgage-loan-calculator-guide"],
    title: "Калькулятор кредиту — платіж, відсотки і на що зважати",
    description:
      "Ануїтет, комісії та страхування — як читати результат іпотечного калькулятора.",
    sections: [
      {
        paragraphs: [
          "Калькулятор кредиту в Toolando рахує ануїтетний платіж: фіксована щомісячна сума з капіталу та відсотків. Довший строк знижує платіж — але підвищує загальну вартість відсотків.",
          "Це відправна точка для розмови з банком, а не оферта. Реальний платіж залежить від базової ставки, маржі, комісій, страхування життя та початкового внеску.",
        ],
      },
      {
        title: "Що додати поза калькулятором",
        paragraphs: [
          "Комісія за видачу та комісія за дострокове погашення (якщо є в договорі).",
          "Страхування нерухомості та життя — часто вимагає банк.",
          "Нотаріальні витрати та податки при купівлі житла.",
        ],
      },
    ],
  },
}

export const guidesBatch4De: Record<Batch4Slug, GuideArticle> = {
  "split-pdf-pages-guide": {
    ...guidesBatch4En["split-pdf-pages-guide"],
    title: "PDF online in einzelne Seiten aufteilen",
    description:
      "Wann PDFs splitten, wie Seitenbereiche wählen und was mit dem ZIP-Ergebnis tun.",
    sections: [
      {
        paragraphs: [
          "PDF-Seiten zu trennen ist üblich nach dem Scannen eines mehrseitigen Vertrags oder einer Rechnung — oft brauchen Sie nur eine Seite per E-Mail oder einen Ausschnitt für ein anderes Dokument.",
          "Auf Toolando.tech können Sie jede Seite einzeln exportieren oder einen Bereich angeben (z. B. 1-3,5). Ergebnis ist ein ZIP mit PDF-Dateien — jede behält die originale Vektor- oder Scanqualität.",
        ],
      },
      {
        title: "Wann splitten, wann zusammenfügen",
        paragraphs: [
          "Splitten — wenn der Empfänger nur einen Ausschnitt braucht (Unterschrift, Anhang, Titelseite).",
          "Zusammenfügen — wenn Sie Scans zu einer Archiv- oder Versanddatei bündeln.",
          "Nach dem Splitten lohnen sich oft Seitenzahlen oder die Kompression großer Scans.",
        ],
      },
    ],
  },
  "remove-exif-privacy-guide": {
    ...guidesBatch4En["remove-exif-privacy-guide"],
    title: "EXIF in Fotos — was vor der Veröffentlichung entfernen",
    description:
      "GPS, Kameramodell und Datum in EXIF-Metadaten — Datenschutzrisiken und Entfernung.",
    sections: [
      {
        paragraphs: [
          "EXIF sind versteckte Metadaten in JPEG-, PNG- oder HEIC-Dateien: GPS-Standort, Telefonmodell, Ausrichtung, manchmal ein Vorschaubild. Soziale Netzwerke entfernen sie oft, die eigene Website, der Newsletter oder ein E-Mail-Anhang nicht immer.",
          "Bevor Sie Fotos von Kindern, Wohnungsinnenräumen oder Dokumenten auf dem Schreibtisch veröffentlichen, entfernen Sie EXIF mit einem eigenen Tool — bei Toolando läuft die Verarbeitung auf dem Server, die Datei geht nicht in eine externe KI-Cloud.",
        ],
      },
      {
        title: "Was nach dem Entfernen von EXIF bleibt",
        paragraphs: [
          "Die Bildpixel bleiben unverändert. Es werden nur Metadaten entfernt — die Auflösung ändert sich nicht.",
          "Nach dem EXIF-Strip können Sie die Datei zusätzlich komprimieren oder vor der Portfolio-Veröffentlichung ein Wasserzeichen setzen.",
        ],
      },
    ],
  },
  "jwt-decode-safely-guide": {
    ...guidesBatch4En["jwt-decode-safely-guide"],
    title: "JWT — Token lesen ohne Signaturprüfung",
    description:
      "Header, Payload und Base64URL — wann lokal dekodieren und was Sie vermeiden sollten.",
    sections: [
      {
        paragraphs: [
          "Ein JSON Web Token besteht aus drei durch Punkte getrennten Teilen: Header, Payload und Signature. Der JWT-Decoder in Toolando zeigt Header und Payload nach Base64URL-Dekodierung — ohne den Token an einen Server zu senden (läuft im Browser).",
          "Das ersetzt keine Signaturprüfung im Backend. Dekodieren dient dem Debugging (z. B. abgelaufenes `exp`, falsches `aud`) — behandeln Sie den Payload allein nie als Identitätsnachweis.",
        ],
      },
      {
        title: "Sichere Praktiken",
        paragraphs: [
          "Fügen Sie keine Produktions-Token mit personenbezogenen Daten auf öffentlichen Seiten ein — nutzen Sie einen lokalen Decoder oder eine Testumgebung.",
          "Prüfen Sie `exp` und `nbf`, bevor Sie 401-Fehler debuggen.",
          "Löschen Sie den Token nach der Analyse aus Zwischenablage-Verlauf und Logs.",
        ],
      },
    ],
  },
  "mortgage-loan-calculator-guide": {
    ...guidesBatch4En["mortgage-loan-calculator-guide"],
    title: "Kreditrechner — Rate, Zinsen und worauf achten",
    description:
      "Annuität, Gebühren und Versicherungen — so lesen Sie das Ergebnis eines Hypothekenrechners.",
    sections: [
      {
        paragraphs: [
          "Der Kreditrechner auf Toolando berechnet eine Annuitätenrate: eine feste monatliche Zahlung aus Tilgung und Zinsen. Längere Laufzeit senkt die Rate — erhöht aber die gesamten Zinskosten.",
          "Das ist ein Einstieg für das Bankgespräch, kein Angebot. Die echte Rate hängt von Referenzzins, Marge, Gebühren, Lebensversicherung und Eigenkapital ab.",
        ],
      },
      {
        title: "Was zusätzlich zum Rechner zählen",
        paragraphs: [
          "Bearbeitungsgebühr und Vorfälligkeitsentschädigung (falls vertraglich vorgesehen).",
          "Gebäude- und Lebensversicherung — oft von der Bank verlangt.",
          "Notarkosten und Grunderwerbsteuer beim Immobilienkauf.",
        ],
      },
    ],
  },
}

export const guidesBatch4Es: Record<Batch4Slug, GuideArticle> = {
  "split-pdf-pages-guide": {
    ...guidesBatch4En["split-pdf-pages-guide"],
    title: "Cómo dividir un PDF en páginas sueltas online",
    description:
      "Cuándo dividir PDF, cómo elegir rangos de páginas y qué hacer con el ZIP resultante.",
    sections: [
      {
        paragraphs: [
          "Dividir un PDF es habitual tras escanear un contrato o factura multipágina: a menudo solo necesita enviar una página por correo o adjuntar un fragmento a otro documento.",
          "En Toolando.tech puede exportar cada página por separado o indicar un rango (p. ej. 1-3,5). El resultado es un ZIP de archivos PDF; cada uno conserva la calidad vectorial o de escaneo original.",
        ],
      },
      {
        title: "Cuándo dividir y cuándo unir",
        paragraphs: [
          "Divida — cuando el destinatario solo necesita un fragmento (firma, anexo, portada).",
          "Una — cuando reúne escaneos en un solo archivo para archivo o envío.",
          "Tras dividir, suele convenir numerar páginas o comprimir escaneos grandes.",
        ],
      },
    ],
  },
  "remove-exif-privacy-guide": {
    ...guidesBatch4En["remove-exif-privacy-guide"],
    title: "EXIF en fotos — qué quitar antes de publicar",
    description:
      "GPS, modelo de cámara y fecha en metadatos EXIF — riesgos de privacidad y cómo eliminarlos.",
    sections: [
      {
        paragraphs: [
          "EXIF son metadatos ocultos en JPEG, PNG o HEIC: ubicación GPS, modelo del teléfono, orientación, a veces una miniatura. Las redes sociales a menudo los eliminan; su web, newsletter o adjunto de correo no siempre.",
          "Antes de publicar fotos de niños, interiores del hogar o documentos sobre el escritorio, quite el EXIF con una herramienta dedicada — en Toolando el procesamiento es en el servidor y el archivo no se envía a una nube de IA externa.",
        ],
      },
      {
        title: "Qué queda tras quitar el EXIF",
        paragraphs: [
          "Los píxeles de la imagen no cambian. Solo se eliminan metadatos — la resolución no se ve afectada.",
          "Tras limpiar el EXIF puede comprimir el archivo o añadir una marca de agua antes de publicar un portfolio.",
        ],
      },
    ],
  },
  "jwt-decode-safely-guide": {
    ...guidesBatch4En["jwt-decode-safely-guide"],
    title: "JWT — cómo leer un token sin verificar la firma",
    description:
      "Header, payload y Base64URL — cuándo decodificar en local y qué no hacer.",
    sections: [
      {
        paragraphs: [
          "Un JSON Web Token tiene tres partes separadas por puntos: header, payload y signature. El decodificador JWT de Toolando muestra header y payload tras decodificar Base64URL — sin enviar el token a un servidor (funciona en el navegador).",
          "Esto no sustituye la verificación de firma en el backend. La decodificación sirve para depurar (p. ej. `exp` caducado, `aud` incorrecto) — nunca trate el payload solo como prueba de identidad.",
        ],
      },
      {
        title: "Prácticas seguras",
        paragraphs: [
          "No pegue tokens de producción con datos personales en sitios públicos — use un decodificador local o un entorno de prueba.",
          "Compruebe `exp` y `nbf` antes de depurar errores 401.",
          "Tras el análisis, borre el token del historial del portapapeles y de los logs.",
        ],
      },
    ],
  },
  "mortgage-loan-calculator-guide": {
    ...guidesBatch4En["mortgage-loan-calculator-guide"],
    title: "Calculadora de préstamo — cuota, intereses y qué vigilar",
    description:
      "Anualidad, comisiones y seguros — cómo interpretar el resultado de una calculadora hipotecaria.",
    sections: [
      {
        paragraphs: [
          "La calculadora de préstamo de Toolando calcula una cuota de anualidad: un pago mensual fijo de capital más intereses. Un plazo más largo baja la cuota — pero sube el coste total de intereses.",
          "Tómelo como punto de partida para hablar con el banco, no como oferta. La cuota real depende del tipo de referencia, margen, comisiones, seguro de vida y entrada.",
        ],
      },
      {
        title: "Qué sumar fuera de la calculadora",
        paragraphs: [
          "Comisión de apertura y comisión por amortización anticipada (si figura en el contrato).",
          "Seguro de inmueble y de vida — a menudo exigidos por el banco.",
          "Gastos notariales e impuestos de transmisión al comprar vivienda.",
        ],
      },
    ],
  },
}
