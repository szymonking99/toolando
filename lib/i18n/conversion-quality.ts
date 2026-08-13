import { FORMAT_META } from "./formats/format-meta"

const LOSSY = new Set(["lossy", "both"])
const LOSSLESS = new Set(["lossless", "none", "text", "vector"])

type QualityCopy = {
  lossyToLossless: (from: string, to: string) => string
  lossyToLossy: (from: string, to: string) => string
  losslessToLossy: (from: string, to: string) => string
  losslessToLossless: (from: string, to: string) => string
  documentOrData: (from: string, to: string) => string
  tips: (from: string, to: string) => string[]
}

const QUALITY_COPY: Record<string, QualityCopy> = {
  pl: {
    lossyToLossless: (f, t) =>
      `Konwersja ${f} → ${t} nie poprawi jakości utraconej wcześniej przez kompresję stratną, ale zachowa obecny poziom dźwięku/obrazu w formacie bezstratnym. Unikaj wielokrotnej konwersji przez formaty stratne.`,
    lossyToLossy: (f, t) =>
      `Konwersja między formatami stratnymi (${f} → ${t}) może nieznacznie obniżyć jakość. Jeśli to możliwe, konwertuj ze źródła najwyższej jakości i ustaw wysoki bitrate/jakość.`,
    losslessToLossy: (f, t) =>
      `Konwersja z bezstratnego ${f} na stratny ${t} zmniejszy rozmiar pliku, ale spowoduje utratę części danych. To normalne — wybierz wyższą jakość, jeśli zależy Ci na detalach.`,
    losslessToLossless: (f, t) =>
      `Konwersja ${f} → ${t} w formatach bezstratnych zachowuje pełną jakość — idealna do archiwizacji i edycji.`,
    documentOrData: (f, t) =>
      `Konwersja dokumentów/danych ${f} → ${t} zachowuje treść, ale formatowanie może wymagać korekty w zależności od docelowego formatu.`,
    tips: (f, t) => [
      `Przed konwersją ${f} → ${t} upewnij się, że masz kopię oryginału.`,
      `Dla plików większych niż 100 MB konwersja może potrwać dłużej — nie zamykaj karty przeglądarki.`,
      `Więcej o formatach ${f} i ${t} znajdziesz w naszej encyklopedii formatów.`,
    ],
  },
  en: {
    lossyToLossless: (f, t) =>
      `${f} → ${t} won't recover quality lost by earlier lossy compression but preserves the current level in a lossless container. Avoid repeated lossy conversions.`,
    lossyToLossy: (f, t) =>
      `Converting between lossy formats (${f} → ${t}) may slightly reduce quality. Convert from the highest-quality source and use a high bitrate/quality setting when possible.`,
    losslessToLossy: (f, t) =>
      `Converting lossless ${f} to lossy ${t} shrinks the file but discards data — expected tradeoff. Choose higher quality if details matter.`,
    losslessToLossless: (f, t) =>
      `${f} → ${t} between lossless formats preserves full quality — ideal for archiving and editing.`,
    documentOrData: (f, t) =>
      `${f} → ${t} keeps content but formatting may need adjustment depending on the target format.`,
    tips: (f, t) => [
      `Before converting ${f} → ${t}, keep a backup of the original.`,
      `Files over 100 MB may take longer — don't close the browser tab.`,
      `Learn more about ${f} and ${t} in our formats encyclopedia.`,
    ],
  },
  de: {
    lossyToLossless: (f, t) =>
      `Die Konvertierung ${f} → ${t} stellt keine Qualität wieder her, die durch frühere verlustbehaftete Kompression verloren ging, bewahrt das aktuelle Niveau aber in einem verlustfreien Container. Vermeide mehrfache verlustbehaftete Konvertierungen.`,
    lossyToLossy: (f, t) =>
      `Die Konvertierung zwischen verlustbehafteten Formaten (${f} → ${t}) kann die Qualität leicht verringern. Konvertiere nach Möglichkeit von der Quelle mit der höchsten Qualität und wähle eine hohe Bitrate bzw. Qualitätsstufe.`,
    losslessToLossy: (f, t) =>
      `Die Konvertierung vom verlustfreien ${f} in das verlustbehaftete ${t} verkleinert die Datei, verwirft dabei aber Daten — ein üblicher Kompromiss. Wähle eine höhere Qualität, wenn dir Details wichtig sind.`,
    losslessToLossless: (f, t) =>
      `${f} → ${t} zwischen verlustfreien Formaten bewahrt die volle Qualität — ideal zum Archivieren und Bearbeiten.`,
    documentOrData: (f, t) =>
      `${f} → ${t} behält den Inhalt bei, die Formatierung musst du je nach Zielformat aber eventuell nachjustieren.`,
    tips: (f, t) => [
      `Bevor du ${f} → ${t} konvertierst, solltest du eine Sicherungskopie des Originals behalten.`,
      `Dateien über 100 MB brauchen länger — schließe den Browser-Tab nicht.`,
      `Mehr über ${f} und ${t} erfährst du in unserer Formate-Enzyklopädie.`,
    ],
  },
  es: {
    lossyToLossless: (f, t) =>
      `La conversión ${f} → ${t} no recupera la calidad perdida por una compresión con pérdida anterior, pero conserva el nivel actual en un contenedor sin pérdida. Evita convertir repetidamente entre formatos con pérdida.`,
    lossyToLossy: (f, t) =>
      `Convertir entre formatos con pérdida (${f} → ${t}) puede reducir ligeramente la calidad. Siempre que puedas, convierte desde la fuente de mayor calidad y usa un bitrate o nivel de calidad alto.`,
    losslessToLossy: (f, t) =>
      `Convertir ${f} sin pérdida a ${t} con pérdida reduce el tamaño del archivo, pero descarta datos: es el compromiso habitual. Elige una calidad más alta si los detalles te importan.`,
    losslessToLossless: (f, t) =>
      `${f} → ${t} entre formatos sin pérdida conserva toda la calidad: ideal para archivar y editar.`,
    documentOrData: (f, t) =>
      `${f} → ${t} mantiene el contenido, pero puede que tengas que ajustar el formato según el formato de destino.`,
    tips: (f, t) => [
      `Antes de convertir ${f} → ${t}, guarda una copia de seguridad del original.`,
      `Los archivos de más de 100 MB tardan más: no cierres la pestaña del navegador.`,
      `Aprende más sobre ${f} y ${t} en nuestra enciclopedia de formatos.`,
    ],
  },
  uk: {
    lossyToLossless: (f, t) =>
      `Конвертація ${f} → ${t} не поверне якість, втрачену під час попереднього стиснення з втратами, але збереже поточний рівень звуку чи зображення у форматі без втрат. Уникайте багаторазової конвертації через формати з втратами.`,
    lossyToLossy: (f, t) =>
      `Конвертація між форматами зі стисненням із втратами (${f} → ${t}) може дещо погіршити якість. Якщо це можливо, конвертуйте з джерела найвищої якості та обирайте високий бітрейт або рівень якості.`,
    losslessToLossy: (f, t) =>
      `Конвертація з формату без втрат ${f} у формат із втратами ${t} зменшить розмір файлу, але частину даних буде відкинуто — це очікуваний компроміс. Оберіть вищу якість, якщо для вас важливі деталі.`,
    losslessToLossless: (f, t) =>
      `Конвертація ${f} → ${t} між форматами без втрат зберігає повну якість — ідеально для архівування та редагування.`,
    documentOrData: (f, t) =>
      `Конвертація документів або даних ${f} → ${t} зберігає вміст, але форматування може потребувати коригування залежно від цільового формату.`,
    tips: (f, t) => [
      `Перед конвертацією ${f} → ${t} переконайтеся, що у вас збережена копія оригіналу.`,
      `Файли, більші за 100 МБ, оброблятимуться довше — не закривайте вкладку браузера.`,
      `Більше про формати ${f} і ${t} читайте в нашій енциклопедії форматів.`,
    ],
  },
}

function getQualityCopy(locale: string): QualityCopy {
  return QUALITY_COPY[locale] ?? QUALITY_COPY.en
}

export function getConversionQualityNote(
  locale: string,
  from: string,
  to: string,
): string | undefined {
  const fm = FORMAT_META[from]
  const tm = FORMAT_META[to]
  if (!fm || !tm) return undefined

  const fromLossy = LOSSY.has(fm.compression)
  const toLossy = LOSSY.has(tm.compression)
  const fromLossless = LOSSLESS.has(fm.compression)
  const toLossless = LOSSLESS.has(tm.compression)

  const copy = getQualityCopy(locale)
  const f = from.toUpperCase()
  const t = to.toUpperCase()

  if (fromLossy && toLossless) return copy.lossyToLossless(f, t)
  if (fromLossy && toLossy) return copy.lossyToLossy(f, t)
  if (fromLossless && toLossy) return copy.losslessToLossy(f, t)
  if (fromLossless && toLossless) return copy.losslessToLossless(f, t)
  if (fm.category === "document" || fm.category === "data")
    return copy.documentOrData(f, t)

  return undefined
}

export function getConversionTips(
  locale: string,
  from: string,
  to: string,
): string[] {
  return getQualityCopy(locale).tips(from.toUpperCase(), to.toUpperCase())
}
