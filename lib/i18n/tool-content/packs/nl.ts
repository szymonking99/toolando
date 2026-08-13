import type { ToolContentTemplates } from "../locale-factory"

export const nlToolContentTemplates: ToolContentTemplates = {
  extendedDesc:
    "Deze gratis online converter zet {fromName}-bestanden ({FROM}) om naar het formaat {toName} ({TO}) zonder software te installeren. Upload je bestand: Toolando.tech verwerkt het op de server en levert het resultaat ter download aan. Bestanden worden nooit opgeslagen — ze worden direct na de conversie verwijderd.",
  whenToUseBase: [
    "Wanneer je een {TO}-bestand nodig hebt, maar het alleen in {FROM}-formaat hebt.",
    "Wanneer het apparaat of de app die je gebruikt geen {FROM}-bestanden ondersteunt.",
  ],
  whenToUseCategory: {
    audio: "Wanneer je de bestandsgrootte van een audiobestand wilt verkleinen of de compatibiliteit met je speler wilt verbeteren.",
    video: "Wanneer je video op een website of social media in een ander formaat wilt publiceren.",
    image: "Wanneer je een afbeelding wilt optimaliseren voor web, e-mail of print.",
    pdf: "Wanneer je PDF-pagina's als afbeeldingen wilt exporteren of een document naar een bewerkbaar formaat wilt omzetten.",
    doc: "Wanneer je met tekstdocumenten werkt en een ander formaat nodig hebt om te bewerken of te publiceren.",
    data: "Wanneer je gegevens in een ander formaat tussen systemen, API's of spreadsheets verplaatst.",
    font: "Wanneer je webfonts voorbereidt voor gebruik op een website.",
    archive: "Wanneer je het archiefformaat moet wijzigen om het op een ander systeem uit te pakken.",
  },
  steps: [
    'Klik op « Bestand kiezen » of sleep je {FROM}-bestand naar het uploadgebied.',
    "Wacht tot upload en conversie klaar zijn — dat duurt meestal een paar seconden.",
    "Download het klaarstaande {TO}-bestand met één klik.",
    "Het bronbestand wordt direct na afloop van de bewerking van de server verwijderd.",
  ],
  faq: [
    {
      q: "Is conversie van {FROM} naar {TO} gratis?",
      a: "Ja. Deze converter is volledig gratis en vereist geen account. Je kunt onbeperkt bestanden converteren.",
    },
    {
      q: "Is mijn {FROM}-bestand veilig?",
      a: "Ja. Je bestand wordt uitsluitend voor de conversie verwerkt en daarna direct verwijderd. We slaan je bestanden nooit op en delen ze nooit.",
    },
    {
      q: "Wat is de maximale bestandsgrootte?",
      a: "Je kunt bestanden tot 500 MB uploaden. Grotere bestanden kunnen langer duren om te verwerken.",
    },
    {
      q: "Wordt de kwaliteit van {TO} goed?",
      a: "Toolando.tech gebruikt professionele bibliotheken (FFmpeg, Sharp, MuPDF) voor conversie. De kwaliteit hangt af van bron- en doelformaat — converteren van verliesgevend naar verliesvrij herstelt verloren gegevens niet, maar het resultaat is technisch correct.",
    },
  ],
  extraFaq: [
    {
      q: "Waar kan ik meer leren over {FROM}?",
      a: "Lees de volledige {FROM}-formaatgids in de formaatencyclopedie van Toolando.tech — toepassingen, voor- en nadelen en vergelijkingen.",
    },
    {
      q: "Kan ik {TO} terug converteren naar {FROM}?",
      a: "Ja — kies de converter {TO} → {FROM} in de toollijst. Converteren vanuit een verliesgevend formaat herstelt verloren kwaliteit niet.",
    },
  ],
}
