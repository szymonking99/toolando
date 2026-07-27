import type { ComparisonsHubMeta } from "./types"
import { pickLocalized } from "../content-locale"

const hubPl: ComparisonsHubMeta = {
  title: "Porównania formatów plików",
  intro:
    "Bezpośrednie porównania popularnych formatów — zalety, wady i werdykt, który wybrać w danej sytuacji.",
  readComparison: "Czytaj porównanie",
  backToHub: "Wszystkie porównania",
  verdictTitle: "Podsumowanie — co wybrać?",
}

const hubEn: ComparisonsHubMeta = {
  title: "File format comparisons",
  intro:
    "Head-to-head comparisons of popular formats — pros, cons, and a verdict on which to pick.",
  readComparison: "Read comparison",
  backToHub: "All comparisons",
  verdictTitle: "Verdict — which to choose?",
}

const hubDe: ComparisonsHubMeta = {
  title: "Dateiformat-Vergleiche",
  intro: "Direkte Vergleiche beliebter Formate — Vor- und Nachteile und ein Fazit.",
  readComparison: "Vergleich lesen",
  backToHub: "Alle Vergleiche",
  verdictTitle: "Fazit — was wählen?",
}

const hubEs: ComparisonsHubMeta = {
  title: "Comparaciones de formatos",
  intro: "Comparaciones directas de formatos populares — pros, contras y veredicto.",
  readComparison: "Leer comparación",
  backToHub: "Todas las comparaciones",
  verdictTitle: "Veredicto — ¿cuál elegir?",
}

const hubUk: ComparisonsHubMeta = {
  title: "Порівняння форматів файлів",
  intro: "Прямі порівняння популярних форматів — плюси, мінуси та вердикт.",
  readComparison: "Читати порівняння",
  backToHub: "Усі порównання",
  verdictTitle: "Вердикт — що обрати?",
}

const hubFr: ComparisonsHubMeta = {
  title: "Comparaisons de formats de fichiers",
  intro: "Comparaisons directes de formats populaires — avantages, inconvénients et verdict.",
  readComparison: "Lire la comparaison",
  backToHub: "Toutes les comparaisons",
  verdictTitle: "Verdict — que choisir ?",
}

const hubIt: ComparisonsHubMeta = {
  title: "Confronti tra formati di file",
  intro: "Confronti diretti tra formati popolari — pro, contro e verdetto.",
  readComparison: "Leggi il confronto",
  backToHub: "Tutti i confronti",
  verdictTitle: "Verdetto — quale scegliere?",
}

const hubPt: ComparisonsHubMeta = {
  title: "Comparações de formatos de ficheiro",
  intro: "Comparações diretas de formatos populares — prós, contras e veredicto.",
  readComparison: "Ler comparação",
  backToHub: "Todas as comparações",
  verdictTitle: "Veredicto — o que escolher?",
}

const hubNl: ComparisonsHubMeta = {
  title: "Vergelijkingen van bestandsformaten",
  intro: "Directe vergelijkingen van populaire formaten — voor- en nadelen en een oordeel.",
  readComparison: "Vergelijking lezen",
  backToHub: "Alle vergelijkingen",
  verdictTitle: "Oordeel — wat kiezen?",
}

const hubSv: ComparisonsHubMeta = {
  title: "Jämförelser av filformat",
  intro: "Direkta jämförelser av populära format — för- och nackdelar samt ett omdöme.",
  readComparison: "Läs jämförelse",
  backToHub: "Alla jämförelser",
  verdictTitle: "Omdöme — vad välja?",
}

const hubNo: ComparisonsHubMeta = {
  title: "Sammenligning av filformater",
  intro: "Direkte sammenligninger av populære formater — fordeler, ulemper og dom.",
  readComparison: "Les sammenligning",
  backToHub: "Alle sammenligninger",
  verdictTitle: "Dom — hva velge?",
}

const hubDa: ComparisonsHubMeta = {
  title: "Sammenligning af filformater",
  intro: "Direkte sammenligninger af populære formater — fordele, ulemper og dom.",
  readComparison: "Læs sammenligning",
  backToHub: "Alle sammenligninger",
  verdictTitle: "Dom — hvad vælge?",
}

const hubFi: ComparisonsHubMeta = {
  title: "Tiedostomuotojen vertailut",
  intro: "Suorat vertailut suosituista muodoista — edut, haitat ja päätös.",
  readComparison: "Lue vertailu",
  backToHub: "Kaikki vertailut",
  verdictTitle: "Päätös — mitä valita?",
}

const hubCs: ComparisonsHubMeta = {
  title: "Porovnání formátů souborů",
  intro: "Přímá porovnání oblíbených formátů — výhody, nevýhody a verdikt.",
  readComparison: "Číst porovnání",
  backToHub: "Všechna porovnání",
  verdictTitle: "Verdikt — co zvolit?",
}

const hubRo: ComparisonsHubMeta = {
  title: "Comparații de formate de fișiere",
  intro: "Comparații directe ale formatelor populare — avantaje, dezavantaje și verdict.",
  readComparison: "Citește comparația",
  backToHub: "Toate comparațiile",
  verdictTitle: "Verdict — ce alegi?",
}

const hubHu: ComparisonsHubMeta = {
  title: "Fájlformátum-összehasonlítások",
  intro: "Közvetlen összehasonlítások népszerű formátumokról — előnyök, hátrányok és ítélet.",
  readComparison: "Összehasonlítás olvasása",
  backToHub: "Összes összehasonlítás",
  verdictTitle: "Ítélet — mit válassz?",
}

const hubEl: ComparisonsHubMeta = {
  title: "Συγκρίσεις μορφών αρχείων",
  intro: "Άμεσες συγκρίσεις δημοφιλών μορφών — πλεονεκτήματα, μειονεκτήματα και επίλυση.",
  readComparison: "Διαβάστε τη σύγκριση",
  backToHub: "Όλες οι συγκρίσεις",
  verdictTitle: "Επίλυση — τι να επιλέξετε;",
}

const hubTr: ComparisonsHubMeta = {
  title: "Dosya biçimi karşılaştırmaları",
  intro: "Popüler biçimlerin doğrudan karşılaştırması — artılar, eksiler ve karar.",
  readComparison: "Karşılaştırmayı oku",
  backToHub: "Tüm karşılaştırmalar",
  verdictTitle: "Karar — hangisini seçmeli?",
}

const hubRu: ComparisonsHubMeta = {
  title: "Сравнение форматов файлов",
  intro: "Прямые сравнения популярных форматов — плюсы, минусы и вердикт.",
  readComparison: "Читать сравнение",
  backToHub: "Все сравнения",
  verdictTitle: "Вердикт — что выбрать?",
}

const hubAr: ComparisonsHubMeta = {
  title: "مقارنات صيغ الملفات",
  intro: "مقارنات مباشرة بين الصيغ الشائعة — المزايا والعيوب والحكم.",
  readComparison: "اقرأ المقارنة",
  backToHub: "جميع المقارنات",
  verdictTitle: "الحكم — ماذا تختار؟",
}

const hubZh: ComparisonsHubMeta = {
  title: "文件格式对比",
  intro: "热门格式的直接对比——优缺点与结论。",
  readComparison: "阅读对比",
  backToHub: "所有对比",
  verdictTitle: "结论——选哪个？",
}

const hubJa: ComparisonsHubMeta = {
  title: "ファイル形式の比較",
  intro: "人気形式の直接比較 — メリット、デメリット、結論。",
  readComparison: "比較を読む",
  backToHub: "すべての比較",
  verdictTitle: "結論 — どれを選ぶ？",
}

const hubKo: ComparisonsHubMeta = {
  title: "파일 형식 비교",
  intro: "인기 형식의 직접 비교 — 장단점과 결론.",
  readComparison: "비교 읽기",
  backToHub: "모든 비교",
  verdictTitle: "결론 — 무엇을 선택할까?",
}

const hubHi: ComparisonsHubMeta = {
  title: "फ़ाइल प्रारूप तुलना",
  intro: "लोकप्रिय प्रारूपों की सीधी तुलना — फायदे, नुकसान और निर्णय.",
  readComparison: "तुलना पढ़ें",
  backToHub: "सभी तुलनाएँ",
  verdictTitle: "निर्णय — क्या चुनें?",
}

const hubId: ComparisonsHubMeta = {
  title: "Perbandingan format file",
  intro: "Perbandingan langsung format populer — kelebihan, kekurangan, dan kesimpulan.",
  readComparison: "Baca perbandingan",
  backToHub: "Semua perbandingan",
  verdictTitle: "Kesimpulan — pilih yang mana?",
}

const hubs: Record<string, ComparisonsHubMeta> = {
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

export function getComparisonsHubMeta(locale: string): ComparisonsHubMeta {
  return pickLocalized(locale, hubs, hubEn)
}
