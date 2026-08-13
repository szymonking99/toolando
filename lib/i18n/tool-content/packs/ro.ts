import type { ToolContentTemplates } from "../locale-factory"

/** Romanian template — placeholders {fromName}, {from}, {to}, {FROM}, {TO} stay as-is. */
export const roToolContentTemplates: ToolContentTemplates = {
  extendedDesc:
    "Acest convertor online gratuit transformă fișierele {fromName} ({FROM}) în formatul {toName} ({TO}) fără a instala software. Încarcă fișierul, iar Toolando.tech îl procesează pe server și returnează rezultatul pentru descărcare. Fișierele nu sunt niciodată stocate — sunt șterse imediat după conversie.",
  whenToUseBase: [
    "Când ai nevoie de un fișier {TO}, dar îl ai doar în format {FROM}.",
    "Când dispozitivul sau aplicația pe care o folosești nu acceptă fișiere {FROM}.",
  ],
  whenToUseCategory: {
    audio: "Când vrei să reduci dimensiunea unui fișier audio sau să îmbunătățești compatibilitatea cu playerul.",
    video: "Când trebuie să publici un videoclip pe un site web sau pe rețelele sociale într-un alt format.",
    image: "Când vrei să optimizezi o imagine pentru web, e-mail sau tipărire.",
    pdf: "Când trebuie să extragi pagini PDF ca imagini sau să convertești un document într-un format editabil.",
    doc: "Când lucrezi cu documente text și ai nevoie de un alt format pentru editare sau publicare.",
    data: "Când muți date între sisteme, API-uri sau foi de calcul într-un alt format.",
    font: "Când pregătești fonturi web pentru implementare pe un site.",
    archive: "Când trebuie să schimbi formatul arhivei pentru a o extrage pe alt sistem.",
  },
  steps: [
    'Apasă „Alege fișier" sau trage fișierul {FROM} în zona de încărcare.',
    "Așteaptă finalizarea încărcării și conversiei — de obicei durează câteva secunde.",
    "Descarcă fișierul {TO} gata cu un singur clic.",
    "Fișierul sursă este șters de pe server imediat după finalizarea operației.",
  ],
  faq: [
    {
      q: "Conversia {FROM} → {TO} este gratuită?",
      a: "Da. Acest convertor este complet gratuit și nu necesită cont. Poți converti fișiere fără limite.",
    },
    {
      q: "Fișierul meu {FROM} este în siguranță?",
      a: "Da. Fișierul tău este procesat exclusiv pentru conversie și șters imediat după aceea. Nu stocăm și nu partajăm niciodată fișierele tale.",
    },
    {
      q: "Care este dimensiunea maximă a fișierului?",
      a: "Poți încărca fișiere de până la 500 MB. Fișierele mai mari pot necesita mai mult timp de procesare.",
    },
    {
      q: "Calitatea fișierului {TO} va fi bună?",
      a: "Toolando.tech folosește biblioteci profesionale (FFmpeg, Sharp, MuPDF) pentru conversie. Calitatea depinde de formatele sursă și destinație — conversia de la un format cu pierderi la unul fără pierderi nu recuperează datele pierdute, dar rezultatul va fi corect din punct de vedere tehnic.",
    },
  ],
  extraFaq: [
    {
      q: "Unde pot afla mai multe despre formatul {FROM}?",
      a: "Citește ghidul complet al formatului {FROM} în enciclopedia de formate Toolando.tech — cazuri de utilizare, avantaje, dezavantaje și comparații.",
    },
    {
      q: "Pot converti {TO} înapoi în {FROM}?",
      a: "Da — alege convertorul {TO} → {FROM} din lista de instrumente. Conversia dintr-un format cu pierderi nu restaurează calitatea pierdută.",
    },
  ],
}
