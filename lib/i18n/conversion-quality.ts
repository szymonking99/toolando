import { FORMAT_META } from "./formats/format-meta"

type CompressionPair = { from: string; to: string }

const LOSSY = new Set(["lossy", "both"])
const LOSSLESS = new Set(["lossless", "none", "text", "vector"])

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

  if (locale === "pl") {
    if (fromLossy && toLossless)
      return `Konwersja ${from.toUpperCase()} → ${to.toUpperCase()} nie poprawi jakości utraconej wcześniej przez kompresję stratną, ale zachowa obecny poziom dźwięku/obrazu w formacie bezstratnym. Unikaj wielokrotnej konwersji przez formaty stratne.`
    if (fromLossy && toLossy)
      return `Konwersja między formatami stratnymi (${from.toUpperCase()} → ${to.toUpperCase()}) może nieznacznie obniżyć jakość. Jeśli to możliwe, konwertuj ze źródła najwyższej jakości i ustaw wysoki bitrate/jakość.`
    if (fromLossless && toLossy)
      return `Konwersja z bezstratnego ${from.toUpperCase()} na stratny ${to.toUpperCase()} zmniejszy rozmiar pliku, ale spowoduje utratę części danych. To normalne — wybierz wyższą jakość, jeśli zależy Ci na detalach.`
    if (fromLossless && toLossless)
      return `Konwersja ${from.toUpperCase()} → ${to.toUpperCase()} w formatach bezstratnych zachowuje pełną jakość — idealna do archiwizacji i edycji.`
    if (fm.category === "document" || fm.category === "data")
      return `Konwersja dokumentów/danych ${from.toUpperCase()} → ${to.toUpperCase()} zachowuje treść, ale formatowanie może wymagać korekty w zależności od docelowego formatu.`
  }

  if (fromLossy && toLossless)
    return `${from.toUpperCase()} → ${to.toUpperCase()} won't recover quality lost by earlier lossy compression but preserves the current level in a lossless container. Avoid repeated lossy conversions.`
  if (fromLossy && toLossy)
    return `Converting between lossy formats (${from.toUpperCase()} → ${to.toUpperCase()}) may slightly reduce quality. Convert from the highest-quality source and use a high bitrate/quality setting when possible.`
  if (fromLossless && toLossy)
    return `Converting lossless ${from.toUpperCase()} to lossy ${to.toUpperCase()} shrinks the file but discards data — expected tradeoff. Choose higher quality if details matter.`
  if (fromLossless && toLossless)
    return `${from.toUpperCase()} → ${to.toUpperCase()} between lossless formats preserves full quality — ideal for archiving and editing.`
  if (fm.category === "document" || fm.category === "data")
    return `${from.toUpperCase()} → ${to.toUpperCase()} keeps content but formatting may need adjustment depending on the target format.`

  return undefined
}

export function getConversionTips(
  locale: string,
  from: string,
  to: string,
): string[] {
  if (locale === "pl") {
    return [
      `Przed konwersją ${from.toUpperCase()} → ${to.toUpperCase()} upewnij się, że masz kopię oryginału.`,
      `Dla plików większych niż 100 MB konwersja może potrwać dłużej — nie zamykaj karty przeglądarki.`,
      `Więcej o formatach ${from.toUpperCase()} i ${to.toUpperCase()} znajdziesz w naszej encyklopedii formatów.`,
    ]
  }
  return [
    `Before converting ${from.toUpperCase()} → ${to.toUpperCase()}, keep a backup of the original.`,
    `Files over 100 MB may take longer — don't close the browser tab.`,
    `Learn more about ${from.toUpperCase()} and ${to.toUpperCase()} in our formats encyclopedia.`,
  ]
}
