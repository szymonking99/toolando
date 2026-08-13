export const huTools = {
  "przelicznik-walut": {
    "cat": "finance",
    "name": "Valutaátváltó",
    "desc": "Váltson valutát online az ECB aktuális referenciaárfolyamai szerint. PLN, EUR, USD és tucatnyi más pár — regisztráció nélkül.",
    "steps": [
      "Adjon meg összeget és forrásvalutát.",
      "Válassza ki a célvalutát.",
      "Olvassa le az eredményt és a napi árfolyamot."
    ],
    "faq": [
      {
        "q": "Honnan származnak az árfolyamok?",
        "a": "Az Európai Központi Bank referenciaárfolyamai a Frankfurter API-n keresztül, munkanapokon frissítve."
      },
      {
        "q": "Valós idejűek az árfolyamok?",
        "a": "Ezek ECB referenciaárfolyamok, nem banki vagy pénzváltói árfolyamok."
      }
    ]
  },
  "kalkulator-dat": {
    "cat": "time",
    "name": "Dátumkalkulátor",
    "desc": "Számítsa ki két dátum közötti napokat, munkanapokat és a hét napját — hasznos szerződésekhez és határidőkhöz.",
    "steps": [
      "Válassza ki a kezdő és záró dátumot.",
      "Tekintse meg a különbséget napokban és hetekben.",
      "Opcionálisan csak munkanapokat számol."
    ],
    "faq": [
      {
        "q": "Kizáródnak az ünnepnapok?",
        "a": "Alapértelmezetten kizárjuk a szombatot és vasárnapot. Az ünnepnapok országonként eltérnek."
      }
    ]
  },
  "strefy-czasowe": {
    "cat": "time",
    "name": "Időzóna-különbség",
    "desc": "Hasonlítsa össze a helyi időket városok között, lássa az órák különbségét és találja meg a helyeket egy egyszerű térképen.",
    "steps": [
      "Válassza ki a forrás- és célvárost.",
      "Hasonlítsa össze az aktuális helyi időket.",
      "Tekintse meg az eltolást és a térkép jelölőit."
    ],
    "faq": [
      {
        "q": "Figyelembe veszik a nyári időszámítást?",
        "a": "Igen — IANA zónákat használunk (pl. Europe/Warsaw), amelyek automatikusan alkalmazzák a DST-t."
      }
    ]
  },
  "przelicznik-jednostek": {
    "cat": "units",
    "name": "Mértékegység-átváltó",
    "desc": "Váltson hosszúságot, tömeget, hőmérsékletet és térfogatot: cm↔hüvelyk, kg↔lb, °C↔°F és egyebek.",
    "steps": [
      "Válasszon mértékegység-kategóriát.",
      "Adjon meg értéket és egységeket.",
      "Azonnal megkapja az eredményt."
    ],
    "faq": [
      {
        "q": "Pontosak az átváltások?",
        "a": "Igen — standard SI tényezők. A hőmérséklet külön képleteket használ, nem egyszerű szorzást."
      }
    ]
  },
  "kalkulator-vat": {
    "cat": "finance",
    "name": "ÁFA- és százalékkalkulátor",
    "desc": "Adjon hozzá vagy vonjon le ÁFÁ-t (23%, 8%, 5%), számítson nettó/bruttót és egyszerű százalékokat.",
    "steps": [
      "Adjon meg nettó vagy bruttó összeget.",
      "Válasszon ÁFA-kulcsot vagy egyedi százalékot.",
      "Tekintse meg a nettó, ÁFA és bruttó bontást."
    ],
    "faq": [
      {
        "q": "Milyen ÁFA-kulcsok vannak Lengyelországban?",
        "a": "Normál 23%, csökkentett 8% és 5%. Egyedi kulcsot is megadhat."
      }
    ]
  },
  "kalkulator-wieku": {
    "cat": "time",
    "name": "Korkalkulátor és visszaszámláló",
    "desc": "Számítsa ki a pontos kort években, hónapokban és napokban — vagy hány nap van hátra egy dátumig.",
    "steps": [
      "Adja meg a születési vagy céldátumot.",
      "Tekintse meg a kort vagy a visszaszámlálást.",
      "Ellenőrizze a következő születésnapot is."
    ],
    "faq": [
      {
        "q": "Hogyan számítják a kort?",
        "a": "A születési dátumtól a mai napig, évekkel, hónapokkal és napokkal — nem csak naptári évekkel."
      }
    ]
  },
  "generator-hasel": {
    "cat": "dev",
    "name": "Jelszógenerátor",
    "desc": "Erős jelszó generálása helyileg a böngészőben. Állítsa be a hosszt és karakterkészleteket — semmi nem kerül a szerverre.",
    "steps": [
      "Állítsa be a hosszt és karakterbeállításokat.",
      "Kattintson a Generálás gombra.",
      "Másolás egy kattintással."
    ],
    "faq": [
      {
        "q": "Feltöltődik a jelszó?",
        "a": "Nem — a generálás teljes egészében a böngészőben történik."
      }
    ]
  },
  "licznik-znakow": {
    "cat": "text",
    "name": "Karakter- és szószámláló",
    "desc": "Számoljon karaktereket, szavakat, mondatokat és bekezdéseket — hasznos SEO-hoz, közösségi médiához és űrlapkorlátokhoz.",
    "steps": [
      "Illessze be vagy írjon szöveget.",
      "Nézze az élő statisztikákat.",
      "Ellenőrizze a hosszt szóközök nélkül."
    ],
    "faq": [
      {
        "q": "Hogyan számolják a szavakat?",
        "a": "A szavak szóközzel vagy sortöréssel elválasztott sorozatok."
      }
    ]
  },
  "generator-qr": {
    "cat": "dev",
    "name": "QR-kód generátor",
    "desc": "QR-kód készítése linkből vagy szövegből és letöltés PNG-ként. Helyileg fut a böngészőben.",
    "steps": [
      "Adjon meg szöveget vagy URL-t.",
      "Generálja a QR előnézetet.",
      "Töltse le PNG-ként."
    ],
    "faq": [
      {
        "q": "Feltöltődik a QR tartalom?",
        "a": "Nem — a kód helyileg készül. Nem tároljuk a tartalmat."
      }
    ]
  },
  "kalkulator-bitrate": {
    "cat": "media",
    "name": "Fájlméret- és bitsebesség-kalkulátor",
    "desc": "Becsülje meg egy audio/video fájl méretét adott bitsebesség és időtartam mellett — vagy a bitsebességet MB-korláton belül.",
    "steps": [
      "Válasszon méretet bitsebességből vagy bitsebességet korlátból.",
      "Adja meg az időtartamot és értékeket.",
      "Olvassa le az eredményt MB / kbps-ben."
    ],
    "faq": [
      {
        "q": "Tartalmazza a konténert?",
        "a": "A nyers streamet becsüli. A konténerek és extra sávok általában néhány százalékot adnak hozzá."
      }
    ]
  },
  "konwerter-kolorow": {
    "cat": "dev",
    "name": "HEX RGB HSL színkonverter",
    "desc": "Színek konvertálása HEX, RGB és HSL között, WCAG kontraszt ellenőrzése háttérhez képest.",
    "steps": [
      "Adjon meg színt bármilyen formátumban.",
      "Tekintse meg a HEX/RGB/HSL megfelelőket.",
      "Ellenőrizze a kontrasztot a háttérhez képest."
    ],
    "faq": [
      {
        "q": "Mit jelent az AA / AAA?",
        "a": "WCAG akadálymentességi szintek a szöveg kontrasztjához a háttérhez képest."
      }
    ]
  },
  "base64": {
    "cat": "dev",
    "name": "Base64 kódolás / dekódolás",
    "desc": "Szöveg kódolása Base64-be vagy Base64 dekódolása. Helyileg, adatfeltöltés nélkül.",
    "steps": [
      "Illessze be a szöveget vagy Base64-et.",
      "Válasszon Kódolás vagy Dekódolás.",
      "Másolja az eredményt."
    ],
    "faq": [
      {
        "q": "Támogatja az UTF-8-at?",
        "a": "Igen — Unicode karakterek támogatottak."
      }
    ]
  },
  "unix-timestamp": {
    "cat": "dev",
    "name": "Unix időbélyeg ↔ dátum",
    "desc": "Unix időbélyeg (mp/ms) konvertálása dátumra és vissza. Hasznos naplókhoz és API-khoz.",
    "steps": [
      "Illessze be az időbélyeget vagy válasszon dátumot.",
      "Tekintse meg az ISO és helyi eredményeket.",
      "Másolja az értéket."
    ],
    "faq": [
      {
        "q": "Másodperc vagy milliszekundum?",
        "a": "Automatikusan felismerjük a hossz alapján. Kényszerítheti az egységet is."
      }
    ]
  },
  "generator-uuid": {
    "cat": "dev",
    "name": "UUID generátor",
    "desc": "UUID v4 (véletlen) generálása egy kattintással. Többet is készíthet egyszerre.",
    "steps": [
      "Állítsa be az UUID-k számát.",
      "Kattintson a Generálás gombra.",
      "Másolja a listát."
    ],
    "faq": [
      {
        "q": "Melyik UUID verzió?",
        "a": "UUID v4 — véletlen, RFC 4122, a böngészőben generálva."
      }
    ]
  },
  "generator-hash": {
    "cat": "dev",
    "name": "SHA / MD5 hash",
    "desc": "SHA-1, SHA-256, SHA-512 vagy MD5 számítása szövegből. Helyileg Web Crypto-val.",
    "steps": [
      "Illessze be a szöveget.",
      "Válasszon algoritmust.",
      "Másolja a hex hash-t."
    ],
    "faq": [
      {
        "q": "Biztonságos az MD5?",
        "a": "Az MD5 nem jelszavakhoz való. Biztonsághoz SHA-256+; MD5 csak ellenőrzőösszegekhez."
      }
    ]
  },
  "json-formatter": {
    "cat": "dev",
    "name": "JSON formázó",
    "desc": "JSON formázása és minifikálása a böngészőben — szerverfeltöltés nélkül.",
    "steps": [
      "Illessze be a JSON-t.",
      "Kattintson Formázás vagy Minifikálás.",
      "Másolja az eredményt."
    ],
    "faq": [
      {
        "q": "Feltöltődnek az adatok?",
        "a": "Nem — a feldolgozás helyileg történik a böngészőben."
      }
    ]
  },
  "diff-tekstu": {
    "cat": "text",
    "name": "Szöveg diff",
    "desc": "Két szövegrészlet összehasonlítása soronként, különbségek kiemelése.",
    "steps": [
      "Illessze be az A és B szöveget.",
      "Tekintse át a kiemelt különbségeket."
    ],
    "faq": [
      {
        "q": "Ez teljes diff?",
        "a": "Soronkénti összehasonlítás — ideális rövid részletekhez és listákhoz."
      }
    ]
  },
  "konwerter-wielkosci-liter": {
    "cat": "text",
    "name": "Kis- és nagybetű konverter",
    "desc": "Szöveg konvertálása nagybetűs, kisbetűs, Title Case vagy sentence case formátumra.",
    "steps": [
      "Illessze be a szöveget.",
      "Válasszon módot.",
      "Másolja az eredményt."
    ],
    "faq": []
  },
  "usun-duplikaty-linii": {
    "cat": "text",
    "name": "Duplikált sorok eltávolítása",
    "desc": "Ismétlődő sorok eltávolítása e-mail listákból, SKU-kból vagy címkékből.",
    "steps": [
      "Illessze be a listát.",
      "Állítsa be az opciókat.",
      "Másolja a tisztított listát."
    ],
    "faq": []
  },
  "dekoder-jwt": {
    "cat": "dev",
    "name": "JWT dekóder",
    "desc": "JWT fejléc és payload olvasása aláírás ellenőrzése nélkül.",
    "steps": [
      "Illessze be a tokent.",
      "Ellenőrizze a fejlécet és payloadot."
    ],
    "faq": [
      {
        "q": "Ellenőrzi az aláírást?",
        "a": "Nem — csak a token Base64URL dekódolása."
      }
    ]
  },
  "walidator-nip-pesel": {
    "cat": "dev",
    "name": "NIP / PESEL / REGON validátor",
    "desc": "Lengyel adó- és azonosítószámok ellenőrzése ellenőrzőösszeg szabályok szerint.",
    "steps": [
      "Adjon meg számot.",
      "Tekintse meg az ellenőrzés eredményét."
    ],
    "faq": [
      {
        "q": "Lekérdezi a GUS nyilvántartást?",
        "a": "Nem — csak ellenőrzőösszeg és hossz."
      }
    ]
  },
  "kalkulator-kredytu": {
    "cat": "finance",
    "name": "Hitelkalkulátor",
    "desc": "Anuitás, teljes visszafizetés és kamatköltség számítása.",
    "steps": [
      "Adja meg az összeget, kamatot és futamidőt.",
      "Olvassa le a havi törlesztést."
    ],
    "faq": [
      {
        "q": "Tartalmaz banki díjakat?",
        "a": "Egyszerűsített szimuláció díjak és biztosítások nélkül."
      }
    ]
  },
  "markdown-preview": {
    "cat": "text",
    "name": "Markdown előnézet",
    "desc": "Markdown írása és élő HTML előnézet a böngészőben.",
    "steps": [
      "Írjon Markdown-t.",
      "Az előnézet automatikusan frissül."
    ],
    "faq": []
  },
  "sila-hasla": {
    "cat": "dev",
    "name": "Jelszóerősség",
    "desc": "Jelszóerősség értékelése hossz, karakterválaszték és gyakori minták alapján.",
    "steps": [
      "Adjon meg jelszót.",
      "Tekintse meg a pontszámot és tippeket."
    ],
    "faq": [
      {
        "q": "Feltöltődik a jelszó?",
        "a": "Nem — az értékelés helyileg történik a böngészőben."
      }
    ]
  },
  "konwerter-napisow": {
    "cat": "media",
    "name": "SRT / VTT feliratkonverter",
    "desc": "Feliratok konvertálása SRT és WebVTT formátumok között.",
    "steps": [
      "Illessze be a feliratokat.",
      "Válasszon irányt vagy auto.",
      "Másolja az eredményt."
    ],
    "faq": []
  },
  "generator-nazw-plikow": {
    "cat": "text",
    "name": "Tömeges fájlátnevező",
    "desc": "Fájlok tömeges átnevezése {name}, {ext}, {index} mintával.",
    "steps": [
      "Illessze be a fájllistát.",
      "Állítson be mintát.",
      "Másolja az új neveket."
    ],
    "faq": []
  },
  "walidator-iban": {
    "cat": "dev",
    "name": "IBAN validátor",
    "desc": "IBAN ellenőrzőösszeg (mod 97) és országspecifikus hossz ellenőrzése.",
    "steps": [
      "Illessze be az IBAN-t.",
      "Tekintse meg a formázott kimenetet és validációt."
    ],
    "faq": [
      {
        "q": "Ellenőrzi a bankszámlát?",
        "a": "Nem — csak formátum és ellenőrzőösszeg."
      }
    ]
  },
  "kalkulator-b2b": {
    "cat": "finance",
    "name": "B2B vs alkalmazotti kalkulátor",
    "desc": "Nettó alkalmazotti fizetés összehasonlítása B2B számlabevétellel (átalány vagy lineáris adó).",
    "steps": [
      "Adja meg a bruttó fizetést és B2B bevételt.",
      "Válasszon adóformát.",
      "Hasonlítsa össze az eredményeket."
    ],
    "faq": [
      {
        "q": "Ez adótanácsadás?",
        "a": "Nem — egyszerűsített szimuláció könyvelővel való megbeszéléshez."
      }
    ]
  }
};
