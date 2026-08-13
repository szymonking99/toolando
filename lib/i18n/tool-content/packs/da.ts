import type { ToolContentTemplates } from "../locale-factory"

/** Danish template — placeholders {fromName}, {from}, {to}, {FROM}, {TO} stay as-is. */
export const daToolContentTemplates: ToolContentTemplates = {
  extendedDesc:
    "Denne gratis onlinekonverter omdanner {fromName}-filer ({FROM}) til formatet {toName} ({TO}) uden at installere software. Upload din fil, så behandler Toolando.tech den på serveren og returnerer resultatet til download. Filer gemmes aldrig — de slettes straks efter konvertering.",
  whenToUseBase: [
    "Når du har brug for en {TO}-fil, men kun har den i {FROM}-format.",
    "Når enheden eller appen, du bruger, ikke understøtter {FROM}-filer.",
  ],
  whenToUseCategory: {
    audio: "Når du vil reducere størrelsen på en lydfil eller forbedre kompatibiliteten med din afspiller.",
    video: "Når du skal publicere video på en hjemmeside eller sociale medier i et andet format.",
    image: "Når du vil optimere et billede til web, e-mail eller print.",
    pdf: "Når du skal udtrække PDF-sider som billeder eller konvertere et dokument til et redigerbart format.",
    doc: "Når du arbejder med tekstdokumenter og har brug for et andet format til redigering eller udgivelse.",
    data: "Når du flytter data mellem systemer, API'er eller regneark i et andet format.",
    font: "Når du forbereder webfonts til brug på en hjemmeside.",
    archive: "Når du skal ændre arkivformat for at udpakke det på et andet system.",
  },
  steps: [
    'Klik på "Vælg fil" eller træk din {FROM}-fil ind i uploadområdet.',
    "Vent på, at upload og konvertering er færdig — det tager normalt et par sekunder.",
    "Download den færdige {TO}-fil med ét klik.",
    "Kildefilen slettes fra serveren straks efter, at operationen er afsluttet.",
  ],
  faq: [
    {
      q: "Er konvertering fra {FROM} til {TO} gratis?",
      a: "Ja. Denne konverter er helt gratis og kræver ingen konto. Du kan konvertere filer uden begrænsninger.",
    },
    {
      q: "Er min {FROM}-fil sikker?",
      a: "Ja. Din fil behandles udelukkende til konvertering og slettes straks bagefter. Vi gemmer eller deler aldrig dine filer.",
    },
    {
      q: "Hvad er den maksimale filstørrelse?",
      a: "Du kan uploade filer på op til 500 MB. Større filer kan tage længere tid at behandle.",
    },
    {
      q: "Bliver kvaliteten af {TO} god?",
      a: "Toolando.tech bruger professionelle biblioteker (FFmpeg, Sharp, MuPDF) til konvertering. Kvaliteten afhænger af kilde- og målformat — konvertering fra tabsgivende til tabsløs gendanner ikke tabt data, men resultatet er teknisk korrekt.",
    },
  ],
  extraFaq: [
    {
      q: "Hvor kan jeg læse mere om {FROM}?",
      a: "Læs den fulde {FROM}-formatguide i Toolando.techs formatencyklopædi — anvendelser, fordele, ulemper og sammenligninger.",
    },
    {
      q: "Kan jeg konvertere {TO} tilbage til {FROM}?",
      a: "Ja — vælg konverteren {TO} → {FROM} på værktøjslisten. Konvertering fra et tabsgivende format gendanner ikke tabt kvalitet.",
    },
  ],
}
