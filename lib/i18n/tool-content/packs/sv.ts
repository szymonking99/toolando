import type { ToolContentTemplates } from "../locale-factory"

export const svToolContentTemplates: ToolContentTemplates = {
  extendedDesc:
    "Den här kostnadsfria onlinekonverteraren omvandlar {fromName}-filer ({FROM}) till formatet {toName} ({TO}) utan att du behöver installera någon programvara. Ladda upp din fil: Toolando.tech bearbetar den på servern och returnerar resultatet för nedladdning. Filer lagras aldrig — de raderas direkt efter konverteringen.",
  whenToUseBase: [
    "När du behöver en {TO}-fil men bara har den i {FROM}-format.",
    "När enheten eller appen du använder inte stöder {FROM}-filer.",
  ],
  whenToUseCategory: {
    audio: "När du vill minska storleken på en ljudfil eller förbättra kompatibiliteten med din spelare.",
    video: "När du behöver publicera video på en webbplats eller i sociala medier i ett annat format.",
    image: "När du vill optimera en bild för webb, e-post eller utskrift.",
    pdf: "När du behöver extrahera PDF-sidor som bilder eller konvertera ett dokument till ett redigerbart format.",
    doc: "När du arbetar med textdokument och behöver ett annat format för redigering eller publicering.",
    data: "När du flyttar data mellan system, API:er eller kalkylark i ett annat format.",
    font: "När du förbereder webbtypsnitt för publicering på en webbplats.",
    archive: "När du behöver byta arkivformat för att packa upp det i ett annat system.",
  },
  steps: [
    'Klicka på « Välj fil » eller dra din {FROM}-fil till uppladdningsområdet.',
    "Vänta tills uppladdning och konvertering är klara — det tar vanligtvis några sekunder.",
    "Ladda ner den färdiga {TO}-filen med ett klick.",
    "Källfilen raderas från servern direkt när åtgärden är slutförd.",
  ],
  faq: [
    {
      q: "Är konvertering från {FROM} till {TO} gratis?",
      a: "Ja. Den här konverteraren är helt gratis och kräver inget konto. Du kan konvertera filer utan begränsning.",
    },
    {
      q: "Är min {FROM}-fil säker?",
      a: "Ja. Din fil bearbetas enbart för konvertering och raderas direkt därefter. Vi lagrar eller delar aldrig dina filer.",
    },
    {
      q: "Vilken är den maximala filstorleken?",
      a: "Du kan ladda upp filer på upp till 500 MB. Större filer kan ta längre tid att bearbeta.",
    },
    {
      q: "Blir kvaliteten på {TO} bra?",
      a: "Toolando.tech använder professionella bibliotek (FFmpeg, Sharp, MuPDF) för konvertering. Kvaliteten beror på käll- och målformat — att konvertera från förlustformat till förlustfritt återställer inte förlorad data, men resultatet blir tekniskt korrekt.",
    },
  ],
  extraFaq: [
    {
      q: "Var kan jag läsa mer om {FROM}?",
      a: "Läs den fullständiga {FROM}-formatguiden i Toolando.techs formatencyklopedi — användningsfall, fördelar, nackdelar och jämförelser.",
    },
    {
      q: "Kan jag konvertera {TO} tillbaka till {FROM}?",
      a: "Ja — välj konverteraren {TO} → {FROM} i verktygslistan. Att konvertera från ett förlustformat återställer inte förlorad kvalitet.",
    },
  ],
}
