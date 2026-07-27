import type { Dictionary } from "../../dictionaries"
import de from "./de"
import es from "./es"
import uk from "./uk"
import fr from "./fr"
import it from "./it"
import pt from "./pt"
import nl from "./nl"
import sv from "./sv"
import no from "./no"
import da from "./da"
import fi from "./fi"
import cs from "./cs"
import ro from "./ro"
import hu from "./hu"
import el from "./el"
import tr from "./tr"
import ru from "./ru"
import ar from "./ar"
import zh from "./zh"
import ja from "./ja"
import ko from "./ko"
import hi from "./hi"
import id from "./id"

type PagesMeta = Pick<
  Dictionary["pages"],
  "contact" | "about" | "howItWorks" | "faq"
>

const pagesByLocale: Record<string, PagesMeta> = { de, es, uk, fr, it, pt, nl, sv, no, da, fi, cs, ro, hu, el, tr, ru, ar, zh, ja, ko, hi, id }

export function getPagesMeta(locale: string): PagesMeta | undefined {
  return pagesByLocale[locale]
}
