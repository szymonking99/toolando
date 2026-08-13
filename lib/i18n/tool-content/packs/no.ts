import type { ToolContentTemplates } from "../locale-factory"

export const noToolContentTemplates: ToolContentTemplates = {
  extendedDesc:
    "Denne gratis nettkonvertereren gjør {fromName}-filer ({FROM}) om til formatet {toName} ({TO}) uten at du trenger å installere programvare. Last opp filen din: Toolando.tech behandler den på serveren og returnerer resultatet for nedlasting. Filer lagres aldri — de slettes umiddelbart etter konverteringen.",
  whenToUseBase: [
    "Når du trenger en {TO}-fil, men bare har den i {FROM}-format.",
    "Når enheten eller appen du bruker ikke støtter {FROM}-filer.",
  ],
  whenToUseCategory: {
    audio: "Når du vil redusere størrelsen på en lydfil eller forbedre kompatibiliteten med spilleren din.",
    video: "Når du må publisere video på et nettsted eller i sosiale medier i et annet format.",
    image: "Når du vil optimalisere et bilde for web, e-post eller utskrift.",
    pdf: "Når du må hente ut PDF-sider som bilder eller konvertere et dokument til et redigerbart format.",
    doc: "Når du jobber med tekstdokumenter og trenger et annet format for redigering eller publisering.",
    data: "Når du flytter data mellom systemer, API-er eller regneark i et annet format.",
    font: "Når du forbereder webfonter for bruk på et nettsted.",
    archive: "Når du må endre arkivformat for å pakke det ut på et annet system.",
  },
  steps: [
    'Klikk « Velg fil » eller dra {FROM}-filen din til opplastingsområdet.',
    "Vent til opplasting og konvertering er ferdig — det tar vanligvis noen sekunder.",
    "Last ned den ferdige {TO}-filen med ett klikk.",
    "Kildefilen slettes fra serveren umiddelbart etter at operasjonen er fullført.",
  ],
  faq: [
    {
      q: "Er konvertering fra {FROM} til {TO} gratis?",
      a: "Ja. Denne konvertereren er helt gratis og krever ingen konto. Du kan konvertere filer uten begrensning.",
    },
    {
      q: "Er {FROM}-filen min trygg?",
      a: "Ja. Filen din behandles kun for konvertering og slettes umiddelbart etterpå. Vi lagrer eller deler aldri filene dine.",
    },
    {
      q: "Hva er maksimal filstørrelse?",
      a: "Du kan laste opp filer på opptil 500 MB. Større filer kan ta lengre tid å behandle.",
    },
    {
      q: "Blir kvaliteten på {TO} god?",
      a: "Toolando.tech bruker profesjonelle biblioteker (FFmpeg, Sharp, MuPDF) for konvertering. Kvaliteten avhenger av kilde- og målformat — å konvertere fra et tapsformat til et tapsfritt format gjenoppretter ikke tapt data, men resultatet blir teknisk korrekt.",
    },
  ],
  extraFaq: [
    {
      q: "Hvor kan jeg lese mer om {FROM}?",
      a: "Les den fullstendige {FROM}-formatguiden i Toolando.techs formatencyklopedi — bruksområder, fordeler, ulemper og sammenligninger.",
    },
    {
      q: "Kan jeg konvertere {TO} tilbake til {FROM}?",
      a: "Ja — velg konvertereren {TO} → {FROM} i verktøylisten. Å konvertere fra et tapsformat gjenoppretter ikke tapt kvalitet.",
    },
  ],
}
