import type { GuidesHubMeta } from "./types"
import { pickLocalized } from "../content-locale"

const hubPl: GuidesHubMeta = {
  eyebrow: "Poradniki",
  title: "Poradniki i przewodniki po konwersji plików",
  intro:
    "Praktyczne artykuły o formatach plików, konwersji i najlepszych praktykach. Każdy poradnik wyjaśnia, kiedy i dlaczego warto przekonwertować plik oraz jak zrobić to bezpiecznie w Toolando.tech.",
  readArticle: "Czytaj artykuł",
  backToHub: "Wszystkie poradniki",
  authorLabel: "Autor",
  publishedLabel: "Opublikowano",
  updatedLabel: "Aktualizacja",
  relatedFormatsTitle: "Powiązane formaty",
  relatedToolsTitle: "Powiązane konwertery",
}

const hubEn: GuidesHubMeta = {
  eyebrow: "Guides",
  title: "File conversion guides and tutorials",
  intro:
    "Practical articles about file formats, conversion, and best practices. Each guide explains when and why to convert a file and how to do it safely with Toolando.tech.",
  readArticle: "Read article",
  backToHub: "All guides",
  authorLabel: "Author",
  publishedLabel: "Published",
  updatedLabel: "Updated",
  relatedFormatsTitle: "Related formats",
  relatedToolsTitle: "Related converters",
}

const hubDe: GuidesHubMeta = {
  eyebrow: "Ratgeber",
  title: "Anleitungen zur Dateikonvertierung",
  intro:
    "Praktische Artikel über Dateiformate, Konvertierung und Best Practices. Jeder Ratgeber erklärt, wann und warum Sie eine Datei konvertieren sollten und wie Sie das sicher mit Toolando.tech tun.",
  readArticle: "Artikel lesen",
  backToHub: "Alle Ratgeber",
  authorLabel: "Autor",
  publishedLabel: "Veröffentlicht",
  updatedLabel: "Aktualisiert",
  relatedFormatsTitle: "Verwandte Formate",
  relatedToolsTitle: "Verwandte Konverter",
}

const hubEs: GuidesHubMeta = {
  eyebrow: "Guías",
  title: "Guías y tutoriales de conversión de archivos",
  intro:
    "Artículos prácticos sobre formatos de archivo, conversión y buenas prácticas. Cada guía explica cuándo y por qué convertir un archivo y cómo hacerlo de forma segura con Toolando.tech.",
  readArticle: "Leer artículo",
  backToHub: "Todas las guías",
  authorLabel: "Autor",
  publishedLabel: "Publicado",
  updatedLabel: "Actualizado",
  relatedFormatsTitle: "Formatos relacionados",
  relatedToolsTitle: "Convertidores relacionados",
}

const hubUk: GuidesHubMeta = {
  eyebrow: "Порадники",
  title: "Порадники з конвертації файлів",
  intro:
    "Практичні статті про формати файлів, конвертацію та найкращі практики. Кожен порадник пояснює, коли і навіщо конвертувати файл і як зробити це безпечно в Toolando.tech.",
  readArticle: "Читати статтю",
  backToHub: "Усі порадники",
  authorLabel: "Автор",
  publishedLabel: "Опубліковано",
  updatedLabel: "Оновлено",
  relatedFormatsTitle: "Пов’язані формати",
  relatedToolsTitle: "Пов’язані конвертери",
}

const hubFr: GuidesHubMeta = {
  eyebrow: "Guides",
  title: "Guides et tutoriels de conversion de fichiers",
  intro:
    "Articles pratiques sur les formats de fichiers, la conversion et les bonnes pratiques. Chaque guide explique quand et pourquoi convertir un fichier et comment le faire en toute sécurité avec Toolando.tech.",
  readArticle: "Lire l'article",
  backToHub: "Tous les guides",
  authorLabel: "Auteur",
  publishedLabel: "Publié",
  updatedLabel: "Mis à jour",
  relatedFormatsTitle: "Formats associés",
  relatedToolsTitle: "Convertisseurs associés",
}

const hubIt: GuidesHubMeta = {
  eyebrow: "Guide",
  title: "Guide e tutorial sulla conversione dei file",
  intro:
    "Articoli pratici su formati di file, conversione e best practice. Ogni guida spiega quando e perché convertire un file e come farlo in sicurezza con Toolando.tech.",
  readArticle: "Leggi l'articolo",
  backToHub: "Tutte le guide",
  authorLabel: "Autore",
  publishedLabel: "Pubblicato",
  updatedLabel: "Aggiornato",
  relatedFormatsTitle: "Formati correlati",
  relatedToolsTitle: "Convertitori correlati",
}

const hubPt: GuidesHubMeta = {
  eyebrow: "Guias",
  title: "Guias e tutoriais de conversão de ficheiros",
  intro:
    "Artigos práticos sobre formatos de ficheiros, conversão e boas práticas. Cada guia explica quando e por que converter um ficheiro e como fazê-lo com segurança no Toolando.tech.",
  readArticle: "Ler artigo",
  backToHub: "Todos os guias",
  authorLabel: "Autor",
  publishedLabel: "Publicado",
  updatedLabel: "Atualizado",
  relatedFormatsTitle: "Formatos relacionados",
  relatedToolsTitle: "Conversores relacionados",
}

const hubNl: GuidesHubMeta = {
  eyebrow: "Gidsen",
  title: "Gidsen voor bestandsconversie",
  intro:
    "Praktische artikelen over bestandsformaten, conversie en best practices. Elke gids legt uit wanneer en waarom je een bestand converteert en hoe je dat veilig doet met Toolando.tech.",
  readArticle: "Artikel lezen",
  backToHub: "Alle gidsen",
  authorLabel: "Auteur",
  publishedLabel: "Gepubliceerd",
  updatedLabel: "Bijgewerkt",
  relatedFormatsTitle: "Gerelateerde formaten",
  relatedToolsTitle: "Gerelateerde converters",
}

const hubSv: GuidesHubMeta = {
  eyebrow: "Guider",
  title: "Guider för filkonvertering",
  intro:
    "Praktiska artiklar om filformat, konvertering och bästa praxis. Varje guide förklarar när och varför du ska konvertera en fil och hur du gör det säkert med Toolando.tech.",
  readArticle: "Läs artikel",
  backToHub: "Alla guider",
  authorLabel: "Författare",
  publishedLabel: "Publicerad",
  updatedLabel: "Uppdaterad",
  relatedFormatsTitle: "Relaterade format",
  relatedToolsTitle: "Relaterade konverterare",
}

const hubNo: GuidesHubMeta = {
  eyebrow: "Guider",
  title: "Guider for filkonvertering",
  intro:
    "Praktiske artikler om filformater, konvertering og beste praksis. Hver guide forklarer når og hvorfor du bør konvertere en fil og hvordan du gjør det trygt med Toolando.tech.",
  readArticle: "Les artikkel",
  backToHub: "Alle guider",
  authorLabel: "Forfatter",
  publishedLabel: "Publisert",
  updatedLabel: "Oppdatert",
  relatedFormatsTitle: "Relaterte formater",
  relatedToolsTitle: "Relaterte konverterere",
}

const hubDa: GuidesHubMeta = {
  eyebrow: "Guider",
  title: "Guider til filkonvertering",
  intro:
    "Praktiske artikler om filformater, konvertering og bedste praksis. Hver guide forklarer, hvornår og hvorfor du skal konvertere en fil, og hvordan du gør det sikkert med Toolando.tech.",
  readArticle: "Læs artikel",
  backToHub: "Alle guider",
  authorLabel: "Forfatter",
  publishedLabel: "Publiceret",
  updatedLabel: "Opdateret",
  relatedFormatsTitle: "Relaterede formater",
  relatedToolsTitle: "Relaterede konvertere",
}

const hubFi: GuidesHubMeta = {
  eyebrow: "Oppaat",
  title: "Tiedostomuunnosoppaat",
  intro:
    "Käytännön artikkeleita tiedostomuodoista, muunnoksista ja parhaista käytännöistä. Jokainen opas selittää, milloin ja miksi tiedosto kannattaa muuntaa ja miten se tehdään turvallisesti Toolando.techissä.",
  readArticle: "Lue artikkeli",
  backToHub: "Kaikki oppaat",
  authorLabel: "Tekijä",
  publishedLabel: "Julkaistu",
  updatedLabel: "Päivitetty",
  relatedFormatsTitle: "Liittyvät formaatit",
  relatedToolsTitle: "Liittyvät muuntimet",
}

const hubCs: GuidesHubMeta = {
  eyebrow: "Průvodci",
  title: "Průvodci konverzí souborů",
  intro:
    "Praktické články o formátech souborů, konverzi a osvědčených postupech. Každý průvodce vysvětluje, kdy a proč soubor konvertovat a jak to bezpečně provést v Toolando.tech.",
  readArticle: "Číst článek",
  backToHub: "Všechny průvodce",
  authorLabel: "Autor",
  publishedLabel: "Publikováno",
  updatedLabel: "Aktualizováno",
  relatedFormatsTitle: "Související formáty",
  relatedToolsTitle: "Související konvertory",
}

const hubRo: GuidesHubMeta = {
  eyebrow: "Ghiduri",
  title: "Ghiduri de conversie a fișierelor",
  intro:
    "Articole practice despre formate de fișiere, conversie și bune practici. Fiecare ghid explică când și de ce să convertești un fișier și cum să o faci în siguranță cu Toolando.tech.",
  readArticle: "Citește articolul",
  backToHub: "Toate ghidurile",
  authorLabel: "Autor",
  publishedLabel: "Publicat",
  updatedLabel: "Actualizat",
  relatedFormatsTitle: "Formate conexe",
  relatedToolsTitle: "Convertoare conexe",
}

const hubHu: GuidesHubMeta = {
  eyebrow: "Útmutatók",
  title: "Fájlkonverziós útmutatók",
  intro:
    "Gyakorlati cikkek fájlformátumokról, konverzióról és bevált gyakorlatokról. Minden útmutató elmagyarázza, mikor és miért érdemes fájlt konvertálni, és hogyan teheted ezt biztonságosan a Toolando.tech-en.",
  readArticle: "Cikk olvasása",
  backToHub: "Összes útmutató",
  authorLabel: "Szerző",
  publishedLabel: "Közzétéve",
  updatedLabel: "Frissítve",
  relatedFormatsTitle: "Kapcsolódó formátumok",
  relatedToolsTitle: "Kapcsolódó konverterek",
}

const hubEl: GuidesHubMeta = {
  eyebrow: "Οδηγοί",
  title: "Οδηγοί μετατροπής αρχείων",
  intro:
    "Πρακτικά άρθρα για μορφές αρχείων, μετατροπές και βέλτιστες πρακτικές. Κάθε οδηγός εξηγεί πότε και γιατί να μετατρέψετε ένα αρχείο και πώς να το κάνετε με ασφάλεια στο Toolando.tech.",
  readArticle: "Διαβάστε το άρθρο",
  backToHub: "Όλοι οι οδηγοί",
  authorLabel: "Συγγραφέας",
  publishedLabel: "Δημοσιεύτηκε",
  updatedLabel: "Ενημερώθηκε",
  relatedFormatsTitle: "Σχετικές μορφές",
  relatedToolsTitle: "Σχετικοί μετατροπείς",
}

const hubTr: GuidesHubMeta = {
  eyebrow: "Rehberler",
  title: "Dosya dönüştürme rehberleri",
  intro:
    "Dosya formatları, dönüştürme ve en iyi uygulamalar hakkında pratik makaleler. Her rehber, bir dosyayı ne zaman ve neden dönüştürmeniz gerektiğini ve Toolando.tech ile bunu nasıl güvenle yapacağınızı açıklar.",
  readArticle: "Makaleyi oku",
  backToHub: "Tüm rehberler",
  authorLabel: "Yazar",
  publishedLabel: "Yayınlandı",
  updatedLabel: "Güncellendi",
  relatedFormatsTitle: "İlgili formatlar",
  relatedToolsTitle: "İlgili dönüştürücüler",
}

const hubRu: GuidesHubMeta = {
  eyebrow: "Руководства",
  title: "Руководства по конвертации файлов",
  intro:
    "Практические статьи о форматах файлов, конвертации и лучших практиках. Каждое руководство объясняет, когда и зачем конвертировать файл и как сделать это безопасно в Toolando.tech.",
  readArticle: "Читать статью",
  backToHub: "Все руководства",
  authorLabel: "Автор",
  publishedLabel: "Опубликовано",
  updatedLabel: "Обновлено",
  relatedFormatsTitle: "Связанные форматы",
  relatedToolsTitle: "Связанные конвертеры",
}

const hubAr: GuidesHubMeta = {
  eyebrow: "الأدلة",
  title: "أدلة تحويل الملفات",
  intro:
    "مقالات عملية حول صيغ الملفات والتحويل وأفضل الممارسات. يشرح كل دليل متى ولماذا تحوّل ملفًا وكيف تفعل ذلك بأمان على Toolando.tech.",
  readArticle: "اقرأ المقال",
  backToHub: "جميع الأدلة",
  authorLabel: "المؤلف",
  publishedLabel: "تاريخ النشر",
  updatedLabel: "تاريخ التحديث",
  relatedFormatsTitle: "الصيغ ذات الصلة",
  relatedToolsTitle: "محولات ذات صلة",
}

const hubZh: GuidesHubMeta = {
  eyebrow: "指南",
  title: "文件转换指南",
  intro:
    "关于文件格式、转换和最佳实践的实用文章。每篇指南说明何时、为何转换文件，以及如何在 Toolando.tech 上安全操作。",
  readArticle: "阅读文章",
  backToHub: "所有指南",
  authorLabel: "作者",
  publishedLabel: "发布日期",
  updatedLabel: "更新日期",
  relatedFormatsTitle: "相关格式",
  relatedToolsTitle: "相关转换器",
}

const hubJa: GuidesHubMeta = {
  eyebrow: "ガイド",
  title: "ファイル変換ガイド",
  intro:
    "ファイル形式、変換、ベストプラクティスに関する実践的な記事。各ガイドでは、いつ・なぜ変換するか、Toolando.tech で安全に行う方法を説明します。",
  readArticle: "記事を読む",
  backToHub: "すべてのガイド",
  authorLabel: "著者",
  publishedLabel: "公開日",
  updatedLabel: "更新日",
  relatedFormatsTitle: "関連フォーマット",
  relatedToolsTitle: "関連コンバーター",
}

const hubKo: GuidesHubMeta = {
  eyebrow: "가이드",
  title: "파일 변환 가이드",
  intro:
    "파일 형식, 변환 및 모범 사례에 대한 실용적인 글. 각 가이드는 언제, 왜 파일을 변환해야 하는지, Toolando.tech에서 안전하게 하는 방법을 설명합니다.",
  readArticle: "글 읽기",
  backToHub: "모든 가이드",
  authorLabel: "작성자",
  publishedLabel: "게시일",
  updatedLabel: "업데이트",
  relatedFormatsTitle: "관련 형식",
  relatedToolsTitle: "관련 변환기",
}

const hubHi: GuidesHubMeta = {
  eyebrow: "गाइड",
  title: "फ़ाइल रूपांतरण गाइड",
  intro:
    "फ़ाइल प्रारूप, रूपांतरण और सर्वोत्तम अभ्यास पर व्यावहारिक लेख। प्रत्येक गाइड बताता है कि फ़ाइल कब और क्यों बदलें और Toolando.tech पर सुरक्षित रूप से कैसे करें।",
  readArticle: "लेख पढ़ें",
  backToHub: "सभी गाइड",
  authorLabel: "लेखक",
  publishedLabel: "प्रकाशित",
  updatedLabel: "अपडेट",
  relatedFormatsTitle: "संबंधित प्रारूप",
  relatedToolsTitle: "संबंधित कनवर्टर",
}

const hubId: GuidesHubMeta = {
  eyebrow: "Panduan",
  title: "Panduan konversi file",
  intro:
    "Artikel praktis tentang format file, konversi, dan praktik terbaik. Setiap panduan menjelaskan kapan dan mengapa mengonversi file serta cara melakukannya dengan aman di Toolando.tech.",
  readArticle: "Baca artikel",
  backToHub: "Semua panduan",
  authorLabel: "Penulis",
  publishedLabel: "Dipublikasikan",
  updatedLabel: "Diperbarui",
  relatedFormatsTitle: "Format terkait",
  relatedToolsTitle: "Konverter terkait",
}

const hubs: Record<string, GuidesHubMeta> = {
  pl: hubPl,
  en: hubEn,
  de: hubDe,
  es: hubEs,
  uk: hubUk,
  fr: hubFr,
  it: hubIt,
  pt: hubPt,
  nl: hubNl,
  sv: hubSv,
  no: hubNo,
  da: hubDa,
  fi: hubFi,
  cs: hubCs,
  ro: hubRo,
  hu: hubHu,
  el: hubEl,
  tr: hubTr,
  ru: hubRu,
  ar: hubAr,
  zh: hubZh,
  ja: hubJa,
  ko: hubKo,
  hi: hubHi,
  id: hubId,
}

export function getGuidesHubMeta(locale: string): GuidesHubMeta {
  return pickLocalized(locale, hubs, hubEn)
}
