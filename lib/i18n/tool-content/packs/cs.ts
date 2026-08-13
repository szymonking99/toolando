import type { ToolContentTemplates } from "../locale-factory"

/** Czech template — placeholders {fromName}, {from}, {to}, {FROM}, {TO} stay as-is. */
export const csToolContentTemplates: ToolContentTemplates = {
  extendedDesc:
    "Tento bezplatný online převodník přemění soubory {fromName} ({FROM}) do formátu {toName} ({TO}) bez instalace softwaru. Nahraj soubor a Toolando.tech ho zpracuje na serveru a vrátí výsledek ke stažení. Soubory se nikdy neukládají — po převodu se okamžitě smažou.",
  whenToUseBase: [
    "Když potřebuješ soubor {TO}, ale máš ho jen ve formátu {FROM}.",
    "Když zařízení nebo aplikace, kterou používáš, nepodporuje soubory {FROM}.",
  ],
  whenToUseCategory: {
    audio: "Když chceš zmenšit velikost audio souboru nebo zlepšit kompatibilitu s přehrávačem.",
    video: "Když potřebuješ publikovat video na webu nebo na sociálních sítích v jiném formátu.",
    image: "Když chceš optimalizovat obrázek pro web, e-mail nebo tisk.",
    pdf: "Když potřebuješ extrahovat stránky PDF jako obrázky nebo převést dokument do editovatelného formátu.",
    doc: "Když pracuješ s textovými dokumenty a potřebuješ jiný formát pro úpravy nebo publikaci.",
    data: "Když přesouváš data mezi systémy, API nebo tabulkami v jiném formátu.",
    font: "Když připravuješ webové fonty pro nasazení na web.",
    archive: "Když potřebuješ změnit formát archivu, abys ho mohl rozbalit v jiném systému.",
  },
  steps: [
    'Klikni na „Vybrat soubor" nebo přetáhni soubor {FROM} do oblasti pro nahrání.',
    "Počkej, až se dokončí nahrání a převod — obvykle to trvá pár sekund.",
    "Stáhni hotový soubor {TO} jedním kliknutím.",
    "Zdrojový soubor se ze serveru smaže hned po dokončení operace.",
  ],
  faq: [
    {
      q: "Je převod {FROM} → {TO} zdarma?",
      a: "Ano. Tento převodník je zcela zdarma a nevyžaduje účet. Soubory můžeš převádět bez omezení.",
    },
    {
      q: "Je můj soubor {FROM} v bezpečí?",
      a: "Ano. Soubor se zpracovává výhradně kvůli převodu a hned poté se smaže. Nikdy neukládáme ani nesdílíme tvé soubory.",
    },
    {
      q: "Jaká je maximální velikost souboru?",
      a: "Můžeš nahrát soubory do 500 MB. Větší soubory mohou trvat déle.",
    },
    {
      q: "Bude kvalita {TO} dobrá?",
      a: "Toolando.tech používá profesionální knihovny (FFmpeg, Sharp, MuPDF) pro převod. Kvalita závisí na zdrojovém a cílovém formátu — převod ze ztrátového do bezeztrátového formátu neobnoví ztracená data, ale výsledek bude technicky správný.",
    },
  ],
  extraFaq: [
    {
      q: "Kde se dozvím víc o formátu {FROM}?",
      a: "Přečti si kompletní průvodce formátem {FROM} v encyklopedii formátů Toolando.tech — použití, výhody, nevýhody a srovnání.",
    },
    {
      q: "Můžu převést {TO} zpět na {FROM}?",
      a: "Ano — vyber v seznamu nástrojů převodník {TO} → {FROM}. Převod ze ztrátového formátu neobnoví ztracenou kvalitu.",
    },
  ],
}
