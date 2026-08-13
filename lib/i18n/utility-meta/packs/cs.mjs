export const csTools = {
  "przelicznik-walut": {
    "cat": "finance",
    "name": "Převodník měn",
    "desc": "Převádějte měny online podle aktuálních referenčních kurzů ECB. PLN, EUR, USD a desítky dalších párů — bez registrace.",
    "steps": [
      "Zadejte částku a zdrojovou měnu.",
      "Vyberte cílovou měnu.",
      "Zobrazte výsledek a denní kurz."
    ],
    "faq": [
      {
        "q": "Odkud kurzy pocházejí?",
        "a": "Referenční kurzy Evropské centrální banky přes API Frankfurter, aktualizované v pracovní dny."
      },
      {
        "q": "Jsou kurzy v reálném čase?",
        "a": "Jde o referenční kurzy ECB, ne bankovní ani směnárenské kurzy."
      }
    ]
  },
  "kalkulator-dat": {
    "cat": "time",
    "name": "Kalkulačka dat",
    "desc": "Spočítejte dny mezi dvěma daty, pracovní dny a den v týdnu — užitečné pro smlouvy a termíny.",
    "steps": [
      "Vyberte počáteční a koncové datum.",
      "Zobrazte rozdíl ve dnech a týdnech.",
      "Volitelně počítejte pouze pracovní dny."
    ],
    "faq": [
      {
        "q": "Jsou vyloučeny státní svátky?",
        "a": "Ve výchozím nastavení vylučujeme soboty a neděle. Svátky závisí na zemi."
      }
    ]
  },
  "strefy-czasowe": {
    "cat": "time",
    "name": "Rozdíl časových pásem",
    "desc": "Porovnejte místní časy ve městech, uvidíte rozdíl hodin a najdete místa na jednoduché mapě.",
    "steps": [
      "Vyberte zdrojové a cílové město.",
      "Porovnejte aktuální místní časy.",
      "Zobrazte posun a značky na mapě."
    ],
    "faq": [
      {
        "q": "Zohledňujete letní čas?",
        "a": "Ano — používáme zóny IANA (např. Europe/Warsaw), které automaticky aplikují DST."
      }
    ]
  },
  "przelicznik-jednostek": {
    "cat": "units",
    "name": "Převodník jednotek",
    "desc": "Převádějte délku, hmotnost, teplotu a objem: cm↔palce, kg↔lb, °C↔°F a další.",
    "steps": [
      "Vyberte kategorii jednotek.",
      "Zadejte hodnotu a jednotky.",
      "Získejte výsledek okamžitě."
    ],
    "faq": [
      {
        "q": "Jsou převody přesné?",
        "a": "Ano — standardní SI koeficienty. Teplota používá vlastní vzorce, ne jednoduché násobení."
      }
    ]
  },
  "kalkulator-vat": {
    "cat": "finance",
    "name": "Kalkulačka DPH a procent",
    "desc": "Přidejte nebo odečtěte DPH (23 %, 8 %, 5 %), spočítejte netto/brutto a jednoduchá procenta z částky.",
    "steps": [
      "Zadejte částku netto nebo brutto.",
      "Vyberte sazbu DPH nebo vlastní procento.",
      "Zobrazte rozpis netto, DPH a brutto."
    ],
    "faq": [
      {
        "q": "Jaké sazby DPH jsou v Polsku?",
        "a": "Standardní 23 %, snížené 8 % a 5 %. Můžete také zadat vlastní sazbu."
      }
    ]
  },
  "kalkulator-wieku": {
    "cat": "time",
    "name": "Kalkulačka věku a odpočtu",
    "desc": "Spočítejte přesný věk v letech, měsících a dnech — nebo kolik dní zbývá do data.",
    "steps": [
      "Zadejte datum narození nebo cílové datum.",
      "Zobrazte věk nebo odpočet.",
      "Zkontrolujte také příští narozeniny."
    ],
    "faq": [
      {
        "q": "Jak se počítá věk?",
        "a": "Od data narození do dneška, včetně let, měsíců a dnů — ne jen kalendářní roky."
      }
    ]
  },
  "generator-hasel": {
    "cat": "dev",
    "name": "Generátor hesel",
    "desc": "Vygenerujte silné heslo lokálně v prohlížeči. Nastavte délku a sady znaků — nic se neodesílá na server.",
    "steps": [
      "Nastavte délku a možnosti znaků.",
      "Klikněte na Generovat.",
      "Zkopírujte jedním kliknutím."
    ],
    "faq": [
      {
        "q": "Je heslo nahráváno?",
        "a": "Ne — generování probíhá zcela ve vašem prohlížeči."
      }
    ]
  },
  "licznik-znakow": {
    "cat": "text",
    "name": "Počítadlo znaků a slov",
    "desc": "Počítejte znaky, slova, věty a odstavce — praktické pro SEO, sociální sítě a limity formulářů.",
    "steps": [
      "Vložte nebo napište text.",
      "Sledujte statistiky v reálném čase.",
      "Zkontrolujte délku bez mezer."
    ],
    "faq": [
      {
        "q": "Jak se počítají slova?",
        "a": "Slova jsou sekvence oddělené mezerou nebo novým řádkem."
      }
    ]
  },
  "generator-qr": {
    "cat": "dev",
    "name": "Generátor QR kódů",
    "desc": "Vytvořte QR kód z odkazu nebo textu a stáhněte jako PNG. Běží lokálně v prohlížeči.",
    "steps": [
      "Zadejte text nebo URL.",
      "Vygenerujte náhled QR.",
      "Stáhněte PNG obrázek."
    ],
    "faq": [
      {
        "q": "Je obsah QR nahráván?",
        "a": "Ne — kód se vytváří lokálně. Obsah neukládáme."
      }
    ]
  },
  "kalkulator-bitrate": {
    "cat": "media",
    "name": "Kalkulačka velikosti souboru a bitrate",
    "desc": "Odhadněte velikost audio/video souboru při daném bitrate a délce — nebo bitrate, který se vejde do limitu MB.",
    "steps": [
      "Zvolte velikost z bitrate nebo bitrate z limitu.",
      "Zadejte délku a hodnoty.",
      "Přečtěte výsledek v MB / kbps."
    ],
    "faq": [
      {
        "q": "Zahrnuje to kontejner?",
        "a": "Odhaduje surový stream. Kontejnery a extra stopy obvykle přidají několik procent."
      }
    ]
  },
  "konwerter-kolorow": {
    "cat": "dev",
    "name": "Převodník barev HEX RGB HSL",
    "desc": "Převádějte barvy mezi HEX, RGB a HSL a kontrolujte kontrast WCAG vůči pozadí.",
    "steps": [
      "Zadejte barvu v libovolném formátu.",
      "Zobrazte ekvivalenty HEX/RGB/HSL.",
      "Zkontrolujte kontrast vůči pozadí."
    ],
    "faq": [
      {
        "q": "Co znamená AA / AAA?",
        "a": "Úrovně přístupnosti WCAG pro kontrast textu vůči pozadí."
      }
    ]
  },
  "base64": {
    "cat": "dev",
    "name": "Base64 kódování / dekódování",
    "desc": "Zakódujte text do Base64 nebo dekódujte Base64. Lokálně, bez nahrávání dat.",
    "steps": [
      "Vložte text nebo Base64.",
      "Zvolte Kódovat nebo Dekódovat.",
      "Zkopírujte výsledek."
    ],
    "faq": [
      {
        "q": "Podporuje UTF-8?",
        "a": "Ano — podporovány jsou znaky Unicode."
      }
    ]
  },
  "unix-timestamp": {
    "cat": "dev",
    "name": "Unix timestamp ↔ datum",
    "desc": "Převádějte Unix timestamp (sekundy/ms) na datum a zpět. Užitečné pro logy a API.",
    "steps": [
      "Vložte timestamp nebo vyberte datum.",
      "Zobrazte ISO a místní výsledky.",
      "Zkopírujte hodnotu."
    ],
    "faq": [
      {
        "q": "Sekundy nebo milisekundy?",
        "a": "Automaticky rozpoznáme podle délky. Můžete také vynutit jednotku."
      }
    ]
  },
  "generator-uuid": {
    "cat": "dev",
    "name": "Generátor UUID",
    "desc": "Vygenerujte UUID v4 (náhodné) jedním kliknutím. Vytvořte jich více najednou.",
    "steps": [
      "Nastavte počet UUID.",
      "Klikněte na Generovat.",
      "Zkopírujte seznam."
    ],
    "faq": [
      {
        "q": "Která verze UUID?",
        "a": "UUID v4 — náhodné, RFC 4122, generované v prohlížeči."
      }
    ]
  },
  "generator-hash": {
    "cat": "dev",
    "name": "Hash SHA / MD5",
    "desc": "Spočítejte SHA-1, SHA-256, SHA-512 nebo MD5 textu. Lokálně přes Web Crypto.",
    "steps": [
      "Vložte text.",
      "Vyberte algoritmus.",
      "Zkopírujte hex hash."
    ],
    "faq": [
      {
        "q": "Je MD5 bezpečné?",
        "a": "MD5 není pro hesla. Pro bezpečnost používejte SHA-256+; MD5 jen pro kontrolní součty."
      }
    ]
  },
  "json-formatter": {
    "cat": "dev",
    "name": "Formátovač JSON",
    "desc": "Formátujte a minifikujte JSON v prohlížeči — bez nahrání na server.",
    "steps": [
      "Vložte JSON.",
      "Klikněte Formátovat nebo Minifikovat.",
      "Zkopírujte výsledek."
    ],
    "faq": [
      {
        "q": "Jsou data nahrávána?",
        "a": "Ne — zpracování probíhá lokálně ve vašem prohlížeči."
      }
    ]
  },
  "diff-tekstu": {
    "cat": "text",
    "name": "Diff textu",
    "desc": "Porovnejte dva textové úryvky řádek po řádku a zvýrazněte rozdíly.",
    "steps": [
      "Vložte text A a B.",
      "Projděte zvýrazněné rozdíly."
    ],
    "faq": [
      {
        "q": "Je to úplný diff?",
        "a": "Jde o porovnání řádek po řádku — ideální pro krátké úryvky a seznamy."
      }
    ]
  },
  "konwerter-wielkosci-liter": {
    "cat": "text",
    "name": "Převodník velikosti písmen",
    "desc": "Převeďte text na velká, malá písmena, Title Case nebo sentence case.",
    "steps": [
      "Vložte text.",
      "Vyberte režim.",
      "Zkopírujte výsledek."
    ],
    "faq": []
  },
  "usun-duplikaty-linii": {
    "cat": "text",
    "name": "Odstranit duplicitní řádky",
    "desc": "Odstraňte opakující se řádky ze seznamů e-mailů, SKU nebo tagů.",
    "steps": [
      "Vložte seznam.",
      "Nastavte možnosti.",
      "Zkopírujte vyčištěný seznam."
    ],
    "faq": []
  },
  "dekoder-jwt": {
    "cat": "dev",
    "name": "Dekodér JWT",
    "desc": "Přečtěte hlavičku a payload JWT bez ověření podpisu.",
    "steps": [
      "Vložte token.",
      "Prohlédněte header a payload."
    ],
    "faq": [
      {
        "q": "Ověřuje podpis?",
        "a": "Ne — pouze dekóduje Base64URL tokenu."
      }
    ]
  },
  "walidator-nip-pesel": {
    "cat": "dev",
    "name": "Validátor NIP / PESEL / REGON",
    "desc": "Ověřte polská daňová a identifikační čísla podle pravidel kontrolního součtu.",
    "steps": [
      "Zadejte číslo.",
      "Zobrazte výsledek validace."
    ],
    "faq": [
      {
        "q": "Dotazuje se registru GUS?",
        "a": "Ne — pouze kontrolní součet a délka."
      }
    ]
  },
  "kalkulator-kredytu": {
    "cat": "finance",
    "name": "Kalkulačka úvěru",
    "desc": "Spočítejte anuitní splátku, celkovou splátku a náklady na úroky.",
    "steps": [
      "Zadejte částku, úrok a dobu.",
      "Přečtěte měsíční splátku."
    ],
    "faq": [
      {
        "q": "Zahrnuje bankovní poplatky?",
        "a": "Jde o zjednodušenou simulaci bez poplatků a pojištění."
      }
    ]
  },
  "markdown-preview": {
    "cat": "text",
    "name": "Náhled Markdown",
    "desc": "Pište Markdown a sledujte živý HTML náhled v prohlížeči.",
    "steps": [
      "Pište Markdown.",
      "Náhled se aktualizuje automaticky."
    ],
    "faq": []
  },
  "sila-hasla": {
    "cat": "dev",
    "name": "Síla hesla",
    "desc": "Ohodnoťte sílu hesla podle délky, rozmanitosti znaků a běžných vzorů.",
    "steps": [
      "Zadejte heslo.",
      "Zobrazte skóre a tipy."
    ],
    "faq": [
      {
        "q": "Je heslo nahráváno?",
        "a": "Ne — hodnocení probíhá lokálně ve vašem prohlížeči."
      }
    ]
  },
  "konwerter-napisow": {
    "cat": "media",
    "name": "Převodník titulků SRT / VTT",
    "desc": "Převádějte titulky mezi formáty SRT a WebVTT.",
    "steps": [
      "Vložte titulky.",
      "Vyberte směr nebo auto.",
      "Zkopírujte výsledek."
    ],
    "faq": []
  },
  "generator-nazw-plikow": {
    "cat": "text",
    "name": "Hromadné přejmenování souborů",
    "desc": "Hromadně přejmenujte soubory podle vzoru {name}, {ext}, {index}.",
    "steps": [
      "Vložte seznam souborů.",
      "Nastavte vzor.",
      "Zkopírujte nové názvy."
    ],
    "faq": []
  },
  "walidator-iban": {
    "cat": "dev",
    "name": "Validátor IBAN",
    "desc": "Ověřte kontrolní součet IBAN (mod 97) a délku specifickou pro zemi.",
    "steps": [
      "Vložte IBAN.",
      "Zobrazte formátovaný výstup a validaci."
    ],
    "faq": [
      {
        "q": "Ověřuje bankovní účet?",
        "a": "Ne — pouze formát a kontrolní součet."
      }
    ]
  },
  "kalkulator-b2b": {
    "cat": "finance",
    "name": "Kalkulačka B2B vs zaměstnání",
    "desc": "Porovnejte čistou mzdu ze zaměstnání s příjmem z faktury B2B (paušální nebo lineární daň).",
    "steps": [
      "Zadejte hrubou mzdu a příjem B2B.",
      "Vyberte daňovou formu.",
      "Porovnejte výsledky."
    ],
    "faq": [
      {
        "q": "Je to daňové poradenství?",
        "a": "Ne — zjednodušená simulace k diskusi s účetním."
      }
    ]
  }
};
