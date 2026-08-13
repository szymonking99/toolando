import type { ToolContentTemplates } from "../locale-factory"

/** Hungarian template — placeholders {fromName}, {from}, {to}, {FROM}, {TO} stay as-is. */
export const huToolContentTemplates: ToolContentTemplates = {
  extendedDesc:
    "Ez az ingyenes online konverter {fromName} ({FROM}) fájlokat alakít át {toName} ({TO}) formátumra szoftver telepítése nélkül. Töltsd fel a fájlodat, a Toolando.tech feldolgozza a szerveren, majd letölthető eredményt ad vissza. A fájlokat soha nem tároljuk — az átalakítás után azonnal töröljük őket.",
  whenToUseBase: [
    "Amikor {TO} fájlra van szükséged, de csak {FROM} formátumban rendelkezel vele.",
    "Amikor az eszközöd vagy az alkalmazásod nem támogatja a {FROM} fájlokat.",
  ],
  whenToUseCategory: {
    audio: "Amikor csökkenteni szeretnéd a hangfájl méretét vagy javítani a lejátszóval való kompatibilitást.",
    video: "Amikor videót kell közzétenned egy weboldalon vagy közösségi médiában más formátumban.",
    image: "Amikor képet szeretnél optimalizálni webre, e-mailre vagy nyomtatásra.",
    pdf: "Amikor PDF-oldalakat kell képekként kinyerned vagy dokumentumot szerkeszthető formátumra alakítanod.",
    doc: "Amikor szöveges dokumentumokkal dolgozol, és más formátumra van szükséged szerkesztéshez vagy publikáláshoz.",
    data: "Amikor adatokat mozgatsz rendszerek, API-k vagy táblázatok között más formátumban.",
    font: "Amikor webfontokat készítesz elő egy weboldalon való használatra.",
    archive: "Amikor meg kell változtatnod az archívum formátumát, hogy más rendszeren kicsomagolhasd.",
  },
  steps: [
    'Kattints a „Fájl kiválasztása" gombra, vagy húzd a {FROM} fájlodat a feltöltési területre.',
    "Várj, amíg a feltöltés és az átalakítás befejeződik — ez általában néhány másodperc.",
    "Töltsd le az elkészült {TO} fájlt egy kattintással.",
    "A forrásfájl a művelet befejezése után azonnal törlődik a szerverről.",
  ],
  faq: [
    {
      q: "Ingyenes a {FROM} → {TO} átalakítás?",
      a: "Igen. Ez a konverter teljesen ingyenes, és nem igényel fiókot. Korlátlan számú fájlt alakíthatsz át.",
    },
    {
      q: "Biztonságban van a {FROM} fájlom?",
      a: "Igen. A fájlodat kizárólag az átalakítás céljából dolgozzuk fel, majd azonnal töröljük. Soha nem tároljuk és nem osztjuk meg a fájljaidat.",
    },
    {
      q: "Mi a maximális fájlméret?",
      a: "Legfeljebb 500 MB méretű fájlokat tölthetsz fel. A nagyobb fájlok feldolgozása tovább tarthat.",
    },
    {
      q: "Jó lesz a {TO} minősége?",
      a: "A Toolando.tech professzionális könyvtárakat (FFmpeg, Sharp, MuPDF) használ az átalakításhoz. A minőség a forrás- és célformátumtól függ — veszteséges formátumból veszteségmentesbe konvertálva nem állítható vissza az elveszett adat, de az eredmény technikailag helyes lesz.",
    },
  ],
  extraFaq: [
    {
      q: "Hol tudhatok meg többet a {FROM} formátumról?",
      a: "Olvasd el a teljes {FROM} formátum-útmutatót a Toolando.tech formátum-enciklopédiájában — felhasználási esetek, előnyök, hátrányok és összehasonlítások.",
    },
    {
      q: "Vissza tudom alakítani a {TO} fájlt {FROM} formátumra?",
      a: "Igen — válaszd ki az eszközlistában a {TO} → {FROM} konvertert. Veszteséges formátumból való konvertálás nem állítja vissza az elveszett minőséget.",
    },
  ],
}
