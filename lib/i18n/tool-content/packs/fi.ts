import type { ToolContentTemplates } from "../locale-factory"

/** Finnish template — placeholders {fromName}, {from}, {to}, {FROM}, {TO} stay as-is. */
export const fiToolContentTemplates: ToolContentTemplates = {
  extendedDesc:
    "Tämä ilmainen verkkomuunnin muuttaa {fromName}-tiedostot ({FROM}) muotoon {toName} ({TO}) ilman ohjelmiston asentamista. Lataa tiedostosi, Toolando.tech käsittelee sen palvelimella ja palauttaa tuloksen ladattavaksi. Tiedostoja ei koskaan tallenneta — ne poistetaan heti muunnoksen jälkeen.",
  whenToUseBase: [
    "Kun tarvitset {TO}-tiedoston, mutta sinulla on se vain {FROM}-muodossa.",
    "Kun laitteesi tai sovelluksesi ei tue {FROM}-tiedostoja.",
  ],
  whenToUseCategory: {
    audio: "Kun haluat pienentää äänitiedoston kokoa tai parantaa yhteensopivuutta soittimen kanssa.",
    video: "Kun sinun täytyy julkaista video verkkosivulla tai sosiaalisessa mediassa eri muodossa.",
    image: "Kun haluat optimoida kuvan verkkoa, sähköpostia tai tulostusta varten.",
    pdf: "Kun sinun täytyy erottaa PDF-sivut kuviksi tai muuntaa asiakirja muokattavaan muotoon.",
    doc: "Kun työskentelet tekstiasiakirjojen kanssa ja tarvitset eri muodon muokkausta tai julkaisua varten.",
    data: "Kun siirrät tietoja järjestelmien, API:en tai laskentataulukoiden välillä eri muodossa.",
    font: "Kun valmistat verkkofontteja verkkosivun käyttöön.",
    archive: "Kun sinun täytyy vaihtaa arkistomuotoa purkaaksesi sen toisessa järjestelmässä.",
  },
  steps: [
    'Napsauta "Valitse tiedosto" tai vedä {FROM}-tiedostosi latausalueelle.',
    "Odota, että lataus ja muunnos valmistuvat — tämä kestää yleensä muutaman sekunnin.",
    "Lataa valmis {TO}-tiedosto yhdellä napsautuksella.",
    "Lähdetiedosto poistetaan palvelimelta heti, kun toimenpide on valmis.",
  ],
  faq: [
    {
      q: "Onko {FROM} → {TO} -muunnos ilmainen?",
      a: "Kyllä. Tämä muunnin on täysin ilmainen eikä vaadi tiliä. Voit muuntaa tiedostoja ilman rajoituksia.",
    },
    {
      q: "Onko {FROM}-tiedostoni turvassa?",
      a: "Kyllä. Tiedostoasi käsitellään vain muunnosta varten ja poistetaan heti sen jälkeen. Emme koskaan tallenna tai jaa tiedostojasi.",
    },
    {
      q: "Mikä on suurin sallittu tiedostokoko?",
      a: "Voit ladata tiedostoja enintään 500 MB. Suuremmat tiedostot voivat kestää kauemmin käsitellä.",
    },
    {
      q: "Onko {TO}-tiedoston laatu hyvä?",
      a: "Toolando.tech käyttää ammattikirjastoja (FFmpeg, Sharp, MuPDF) muunnokseen. Laatu riippuu lähde- ja kohdemuodoista — häviöllisestä häviöttömään muuntaminen ei palauta menetettyä dataa, mutta tulos on teknisesti oikea.",
    },
  ],
  extraFaq: [
    {
      q: "Mistä voin lukea lisää muodosta {FROM}?",
      a: "Lue kattava {FROM}-muoto-opas Toolando.techin formaattien tietosanakirjasta — käyttötapaukset, edut, haitat ja vertailut.",
    },
    {
      q: "Voinko muuntaa {TO}:n takaisin muotoon {FROM}?",
      a: "Kyllä — valitse työkalulistalta muunnin {TO} → {FROM}. Häviöllisestä muodosta muuntaminen ei palauta menetettyä laatua.",
    },
  ],
}
