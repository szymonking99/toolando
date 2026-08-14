import type { LegalDocumentData } from "@/components/legal-document"

export const privacyHu: LegalDocumentData = {
  eyebrow: "Adatvédelmi tájékoztató",
  title: "Toolando.tech adatvédelmi tájékoztató",
  intro:
    "Ez az adatvédelmi tájékoztató ismerteti, milyen adatokat dolgozunk fel a Toolando.tech oldalon, milyen célból, milyen jogalapon, és milyen jogai illetik meg Önt. A személyes adatokat az (EU) 2016/679 rendelet (GDPR) és az alkalmazandó lengyel adatvédelmi jogszabályok szerint kezelem.",
  lastUpdated: "Utolsó frissítés: 2026. július 23.",
  sections: [
    {
      title: "§1. Adatkezelő",
      paragraphs: [
        "1.1. Az adatkezelő („Adatkezelő”) Szymon, a Toolando.tech tulajdonosa, aki online eszközszolgáltatásokat üzemeltet.",
        "1.2. Adatvédelmi kapcsolat: {{email}}.",
        "1.3. Az Adatkezelő nem nevezett ki adatvédelmi tisztviselőt, mivel a GDPR szerint ez nem kötelező e tevékenység esetén.",
      ],
    },
    {
      title: "§2. Milyen adatokat dolgozunk fel",
      paragraphs: ["2.1. A Szolgáltatás használatától függően a következő kategóriákat dolgozzuk fel:"],
      list: [
        "Technikai és használati adatok: IP-cím, böngésző típusa és verziója, operációs rendszer, nyelv, kérés dátuma és ideje, meglátogatott oldalak, forgalom forrása, cookie-azonosítók (hozzájárulás után).",
        "Fiókadatok: e-mail cím, jelszó (hash), felhasználói azonosító, regisztráció dátuma, Premium státusz, Stripe ügyfélazonosító (ha van).",
        "Fizetési adatok: a Stripe dolgozza fel — az Adatkezelő nem tárolja a teljes bankkártyaszámokat.",
        "Levelezési adatok: e-mail cím, üzenet tartalma, kapcsolatfelvétel dátuma — amikor a {{email}} címre ír vagy a kapcsolatfelvételi űrlapot használja.",
        "Felhasználói fájlok: csak ideiglenesen dolgozzuk fel az eszközműveletek végrehajtásához — a konvertálás befejezése után nem tároljuk.",
      ],
    },
    {
      title: "§3. Célok és jogalapok",
      paragraphs: ["3.1. Az adatokat a következő célokból dolgozzuk fel:"],
      definitions: [
        {
          term: "Szolgáltatás nyújtása",
          description:
            "Fájlkonvertálás, eszközök működtetése, fiókkezelés — jogalap: GDPR 6. cikk (1) bekezdés b) pont (szerződés) vagy f) pont (jogos érdek: a Szolgáltatás működtetése).",
        },
        {
          term: "Premium előfizetés",
          description:
            "Fizetések és előfizetések feldolgozása — jogalap: GDPR 6. cikk (1) bekezdés b) pont; könyvelés: GDPR 6. cikk (1) bekezdés c) pont (jogi kötelezettség).",
        },
        {
          term: "Forgalomelemzés",
          description:
            "Google Analytics — csak analitikai cookie-khoz való hozzájárulás után — jogalap: GDPR 6. cikk (1) bekezdés a) pont (hozzájárulás).",
        },
        {
          term: "Hirdetés",
          description:
            "Google AdSense — csak hirdetési cookie-khoz való hozzájárulás után — jogalap: GDPR 6. cikk (1) bekezdés a) pont (hozzájárulás).",
        },
        {
          term: "Biztonság",
          description:
            "Visszaélések megelőzése, szervernaplók — jogalap: GDPR 6. cikk (1) bekezdés f) pont (jogos érdek).",
        },
        {
          term: "Kapcsolat és panaszok",
          description:
            "Üzenetek megválaszolása — jogalap: GDPR 6. cikk (1) bekezdés f) pont vagy b) pont (ha szerződéshez kapcsolódik).",
        },
      ],
    },
    {
      title: "§4. Cookie-k és hasonló technológiák",
      paragraphs: [
        "4.1. A Szolgáltatás cookie-kat és hasonló technológiákat használ. Az első látogatáskor hozzájárulási bannert jelenítünk meg, ahol elfogadhatja az összes cookie-t, vagy csak az alapvetőkre korlátozhatja magát.",
        "4.2. Cookie-típusok:",
      ],
      list: [
        "Alapvető — a Szolgáltatás működéséhez szükségesek (pl. nyelv, munkamenet, cookie-beállítások). Hozzájárulás nem szükséges.",
        "Analitikai — Google Analytics, aggregált látogatási statisztikák. Hozzájárulás szükséges.",
        "Hirdetési — Google AdSense, hirdetések személyre szabása. Hozzájárulás szükséges.",
      ],
      afterList: [
        "4.3. Cookie-beállításait bármikor módosíthatja a banneren vagy a böngésző beállításaiban.",
      ],
    },
    {
      title: "§5. Címzettek és adatfeldolgozók",
      paragraphs: ["5.1. Az adatokat megbízható adatfeldolgozóknak továbbíthatjuk, akik az Adatkezelő nevében járnak el:"],
      list: [
        "Vercel Inc. — tárhely és infrastruktúra (USA, EU standard szerződéses kikötések).",
        "Stripe, Inc. — Premium fizetések feldolgozása (USA/Írország, PCI DSS).",
        "Google LLC — Analytics és AdSense (hozzájárulás után; partner irányelvek: https://policies.google.com/technologies/partner-sites).",
        "Resend — tranzakciós e-mailek (pl. üdvözlő e-mail regisztráció után), ha be van állítva.",
        "MI-modellszolgáltatók — promptok és fájlok feldolgozása csak Premium MI-eszközökön belül, befejezés után tárolás nélkül.",
      ],
      afterList: ["5.2. Az Adatkezelő nem ad el személyes adatokat harmadik feleknek."],
    },
    {
      title: "§6. Az eszközökbe feltöltött fájlok",
      paragraphs: [
        "6.1. A konverterekbe és más eszközökbe feltöltött fájlokat a művelet befejezése után nem tároljuk.",
        "6.2. A fájlokat nem használjuk MI-modellképzésre, profilalkotásra vagy marketingre.",
        "6.3. Egyes eszközök (pl. az univerzális fájlmegnyitó) teljesen helyben, a böngészőben dolgozzák fel a fájlokat — a fájl soha nem hagyja el az eszközét.",
        "6.4. Ne töltsön fel érzékeny adatokat tartalmazó fájlokat (pl. egészségügyi adatok, személyi igazolványszámok), hacsak nem feltétlenül szükséges — ez saját felelősségére történik.",
      ],
    },
    {
      title: "§7. Megőrzési időszakok",
      paragraphs: ["7.1. Az adatokat a következő időtartamokig őrizzük meg:"],
      list: [
        "Fiókadatok — a fiók törléséig vagy törlési kérelemig.",
        "Szervernaplók — legfeljebb 90 napig, hacsak nem szükséges hosszabb megőrzés igények érvényesítéséhez.",
        "Levelezés — legfeljebb 3 évig az ügy lezárása után.",
        "Számlázási adatok (Stripe) — adójog szerint (általában 5 év).",
        "Felhasználói fájlok — azonnal törölve feldolgozás után (általában másodpercektől percekig).",
        "Cookie-beállítások — legfeljebb 12 hónapig vagy a hozzájárulás visszavonásáig.",
      ],
    },
    {
      title: "§8. Az Ön jogai (GDPR)",
      paragraphs: ["8.1. Az alábbi jogok illetik meg:"],
      list: [
        "Hozzáférés joga (GDPR 15. cikk).",
        "Helyesbítés joga (GDPR 16. cikk).",
        "Törlés joga — „elfeledtetéshez való jog” (GDPR 17. cikk).",
        "Az adatkezelés korlátozásának joga (GDPR 18. cikk).",
        "Adathordozhatóság joga (GDPR 20. cikk).",
        "Tiltakozás joga a GDPR 6. cikk (1) bekezdés f) pontja alapján történő adatkezelés ellen (GDPR 21. cikk).",
        "Hozzájárulás bármikori visszavonásának joga — anélkül, hogy ez befolyásolná a visszavonás előtti adatkezelés jogszerűségét (GDPR 7. cikk (3) bekezdés).",
        "Panasztétel joga felügyeleti hatóságnál (Lengyelországban: PUODO, uodo.gov.pl).",
      ],
      afterList: [
        "8.2. Jogai gyakorlásához írjon a {{email}} címre. Késedelem nélkül, legkésőbb 30 napon belül válaszolok.",
      ],
    },
    {
      title: "§9. Adatbiztonság",
      paragraphs: [
        "9.1. A kockázattal arányos technikai és szervezési intézkedéseket alkalmazok, beleértve a HTTPS titkosítást, a rendszerhez való korlátozott hozzáférést és a fájlok törlését feldolgozás után.",
        "9.2. Egyetlen rendszer sem 100%-ig biztonságos. Személyes adatok védelmének olyan megsértése esetén, amely valószínűleg magas kockázatot jelent az Ön jogaira, a GDPR 34. cikke szerint tájékoztatom Önt.",
      ],
    },
    {
      title: "§10. Gyermekek",
      paragraphs: [
        "10.1. A Szolgáltatás nem 16 év alatti gyermekek számára készült. Tudatosan nem dolgozok fel 16 év alatti gyermekek adatait szülői vagy gondviselői hozzájárulás nélkül.",
        "10.2. Ha úgy gondolja, hogy egy gyermek szülői vagy gondviselői hozzájárulás nélkül adott meg adatokat, lépjen kapcsolatba a {{email}} címmel — az adatokat töröljük.",
      ],
    },
    {
      title: "§11. A tájékoztató módosításai",
      paragraphs: [
        "11.1. Ez a tájékoztató frissíthető a Szolgáltatás, technológiák vagy jogszabályok változásainak tükrözésére.",
        "11.2. A lényeges változásokat értesítésen keresztül vagy e-mailben (fiókkal rendelkező felhasználóknak) közöljük.",
        "11.3. Az aktuális verzió mindig elérhető a /polityka-prywatnosci címen.",
      ],
    },
  ],
  footerNote:
    "Adatvédelmi kérdések: {{email}}. A felhasználási feltételek elérhetők a /regulamin címen.",
}
