import type { LegalDocumentData } from "@/components/legal-document"

export const termsCs: LegalDocumentData = {
  eyebrow: "Podmínky používání",
  title: "Podmínky používání Toolando.tech",
  intro:
    "Tyto podmínky používání upravují vaše používání webu Toolando.tech na adrese toolando.tech. Používáním služby — včetně prohlížení stránek, nahrávání souborů, vytvoření účtu nebo zakoupení Premium předplatného — plně přijímáte tyto podmínky. Pokud podmínky nepřijímáte, službu nepoužívejte.",
  lastUpdated: "Poslední aktualizace: 23. července 2026",
  sections: [
    {
      title: "§1. Obecná ustanovení",
      paragraphs: [
        "1.1. Vlastníkem a provozovatelem Toolando.tech (\"Služba\") je Szymon (\"Poskytovatel\").",
        "1.2. Kontakt: {{email}}. Pro záležitosti vyžadující formální korespondenci Poskytovatel poskytne identifikační údaje dle platných právních předpisů na oprávněnou žádost.",
        "1.3. Služba nabízí online nástroje v prohlížeči včetně konvertorů souborů, specializovaných nástrojů, nástrojů s umělou inteligencí a informačního obsahu (průvodci, FAQ).",
        "1.4. Tyto podmínky jsou poskytovány bezplatně ve službě ve formě umožňující stažení, uložení a tisk.",
      ],
    },
    {
      title: "§2. Definice",
      definitions: [
        {
          term: "Uživatel",
          description:
            "Každá fyzická nebo právnická osoba používající službu, včetně hostů (bez účtu) a registrovaných uživatelů.",
        },
        {
          term: "Účet",
          description:
            "Individuální uživatelský profil vytvořený pro přístup k funkcím vyžadujícím registraci, včetně Premium předplatného.",
        },
        {
          term: "Bezplatné nástroje",
          description:
            "Funkce služby dostupné zdarma a bez vytvoření účtu, pokud tyto podmínky nestanoví jinak.",
        },
        {
          term: "Premium",
          description:
            "Placené předplatné s přístupem k rozšířeným funkcím, včetně vybraných AI nástrojů a vyšších limitů.",
        },
        {
          term: "Soubor uživatele",
          description:
            "Jakýkoli soubor, textový obsah nebo data, která uživatel nahraje do nástroje ve službě ke zpracování.",
        },
        {
          term: "Generovaný obsah",
          description:
            "Výsledky vytvořené nástroji služby, včetně konvertovaných souborů, textů nebo obrázků generovaných AI nástroji.",
        },
      ],
    },
    {
      title: "§3. Technické požadavky a věk",
      paragraphs: [
        "3.1. Používání služby vyžaduje zařízení s přístupem k internetu, aktuální webový prohlížeč s podporou JavaScriptu a — u některých nástrojů — možnost stahovat soubory do vašeho zařízení.",
        "3.2. Služba je určena osobám od 16 let. Uživatelé mladší 16 let mohou službu používat pouze se souhlasem a dohledem rodiče nebo zákonného zástupce.",
        "3.3. Uživatel prohlašuje, že je plně svéprávný nebo službu používá se souhlasem zákonného zástupce.",
      ],
    },
    {
      title: "§4. Rozsah služby",
      paragraphs: [
        "4.1. Služba je poskytována \"tak, jak je\". Poskytovatel se přiměřeně snaží, aby nástroje fungovaly správně, ale nezaručuje nepřetržitou dostupnost, kompatibilitu se všemi formáty souborů ani konkrétní výsledek.",
        "4.2. Některé operace probíhají lokálně v prohlížeči uživatele (např. univerzální otevírač souborů). Některé vyžadují dočasné zpracování na serveru — podrobnosti jsou v zásadách ochrany osobních údajů a na stránce \"Jak to funguje\".",
        "4.3. Poskytovatel může přidávat, měnit, omezovat nebo odstraňovat nástroje, funkce nebo formáty souborů, včetně označení konvertorů jako \"brzy\" nebo dočasně nedostupných.",
        "4.4. Informace v průvodcích, FAQ a popisech nástrojů slouží pouze k informaci a nepředstavují profesionální právní, lékařské, finanční ani technické poradenství.",
      ],
    },
    {
      title: "§5. Uživatelský účet",
      paragraphs: [
        "5.1. Vytvoření účtu vyžaduje platnou e-mailovou adresu a heslo. Uživatel se zavazuje uvádět správné údaje a udržovat je aktuální.",
        "5.2. Uživatel odpovídá za důvěrnost přihlašovacích údajů a za veškerou aktivitu pod svým účtem. Při podezření na neoprávněný přístup okamžitě kontaktujte {{email}}.",
        "5.3. Poskytovatel může účet zablokovat nebo smazat při porušení podmínek, podezření ze zneužití, jednání ohrožujícím bezpečnost služby nebo na pokyn orgánů, s výhradou platných právních předpisů.",
        "5.4. Uživatel může kdykoli přestat svůj účet používat. O smazání účtu lze požádat na {{email}}.",
      ],
    },
    {
      title: "§6. Bezplatné nástroje a Premium",
      paragraphs: [
        "6.1. Bezplatné nástroje jsou dostupné bez poplatku. Poskytovatel může uplatňovat technické limity (např. velikost souboru, počet operací), které jsou uvedeny v rozhraní služby.",
        "6.2. Premium je opakované placené předplatné pro rozšířené funkce včetně AI nástrojů. Aktuální rozsah Premium je zobrazen ve službě před nákupem.",
        "6.3. Poplatky za Premium jsou účtovány předem za každé fakturační období (např. měsíčně) prostřednictvím Stripe. Ceny jsou zobrazeny v měně uvedené při checkoutu a zahrnují daně, kde to vyžaduje zákon.",
        "6.4. Premium lze kdykoli zrušit prostřednictvím panelu správy předplatného (Stripe Customer Portal) v účtu. Zrušení znamená, že předplatné se neobnoví po aktuálním zaplaceném období — přístup k Premium trvá do konce tohoto období.",
        "6.5. Poplatky za započaté a zaplacené období předplatného se nevracejí, pokud to nepřikazuje kogentní spotřebitelské právo. Při technických výpadcích bránících používání Premium po delší dobu může uživatel podat stížnost na {{email}}.",
        "6.6. Spotřebitelé mohou mít 14denní právo na odstoupení od smlouvy uzavřené na dálku, pokud Poskytovatel s výslovným souhlasem uživatele nezačal poskytovat Premium před uplynutím lhůty pro odstoupení — dle platného EU/polského spotřebitelského práva. Používání Premium před uplynutím 14 dnů může znamenat souhlas s okamžitým plněním a ztrátu práva na odstoupení v zákonem povoleném rozsahu.",
      ],
    },
    {
      title: "§7. Soubory uživatele a zpracování údajů",
      paragraphs: [
        "7.1. Soubory nahrané do nástrojů služby se používají výhradně k provedení operace požadované uživatelem (konverze, komprese, náhled, tvorba obsahu atd.).",
        "7.2. Soubory zpracované na serveru se po dokončení operace neukládají a nepoužívají se k jiným účelům, včetně trénování AI modelů, prodeje nebo předání třetím stranám.",
        "7.3. Uživatel je výhradně odpovědný za obsah, zákonnost, důvěrnost a práva týkající se nahraných souborů.",
        "7.4. Zpracování osobních údajů se řídí zásadami ochrany osobních údajů na /polityka-prywatnosci.",
      ],
    },
    {
      title: "§8. Povolené a zakázané používání",
      paragraphs: [
        "8.1. Uživatel musí službu používat legálně, v souladu s těmito podmínkami a dobrou praxí.",
        "8.2. Zejména je zakázáno:",
      ],
      list: [
        "nahrávat nelegální obsah nebo obsah porušující práva třetích stran, včetně autorských práv, práv duševního vlastnictví, osobnostních práv nebo obchodního tajemství;",
        "zpracovávat materiály, které uživatel nemá právo používat (např. chráněná hudba, filmy, software);",
        "používat službu ke stahování, konverzi nebo šíření obsahu ze streamingových platforem, sociálních sítí nebo jiných zdrojů způsobem porušujícím podmínky těchto platforem nebo zákon;",
        "nahrávat viry, malware, exploity nebo soubory určené k poškození služby nebo zařízení jiných uživatelů;",
        "automatizované, hromadné nebo nadměrné používání (boti, scrapery, přetížení serveru), včetně obcházení technických limitů;",
        "pokus o neoprávněný přístup k systémům služby, účtům jiných uživatelů nebo infrastruktuře Poskytovatele;",
        "vydávat se za jinou osobu nebo organizaci nebo nepravdivě uvádět příslušnost k Poskytovateli;",
        "používat AI nástroje k vytváření nelegálního, diskriminačního, klamavého obsahu nebo obsahu porušujícího práva třetích stran.",
      ],
    },
    {
      title: "§9. Nástroje s umělou inteligencí (AI)",
      paragraphs: [
        "9.1. AI nástroje automaticky generují obsah pomocí externích modelů. Poskytovatel nezaručuje přesnost, úplnost, aktuálnost ani vhodnost generovaného obsahu pro konkrétní účel.",
        "9.2. Obsah generovaný AI nepředstavuje profesionální poradenství (právní, lékařské, finanční, technické). Uživatelé musí výsledky před použitím ověřit.",
        "9.3. Uživatel je plně odpovědný za použití generovaného obsahu, včetně porušení autorských práv. Poskytovatel si nečiní nárok na vlastnictví souborů uživatele ani generovaného obsahu, který patří uživateli dle platných právních předpisů.",
        "9.4. Poskytovatel může zavést denní limity, moderaci nebo dočasně deaktivovat AI nástroje při zneužití, přetížení infrastruktury nebo požadavcích poskytovatelů AI.",
      ],
    },
    {
      title: "§10. Nástroje pro extrakci a stahování audia",
      paragraphs: [
        "10.1. Služba umožňuje extrakci zvukových stop z videí nahraných uživatelem (např. vlastní nahrávky, materiály, ke kterým má uživatel práva).",
        "10.2. Služba není určena ke stahování obsahu ze streamingových služeb, VOD platforem, sociálních sítí nebo jiných zdrojů způsobem porušujícím autorská práva nebo podmínky platforem. Uživatel prohlašuje, že má právo zpracovávat nahrané materiály.",
        "10.3. Poskytovatel neověřuje zdroj nahraných souborů, ale může zablokovat přístup při hlášeních o porušení práv nebo závažném zneužití.",
      ],
    },
    {
      title: "§11. Reklama",
      paragraphs: [
        "11.1. Služba může zobrazovat reklamu, včetně Google AdSense, na podporu bezplatných nástrojů a vývoje.",
        "11.2. Poskytovatelé reklamy (včetně Google) mohou používat cookies a podobné technologie dle zásad ochrany osobních údajů a vlastních pravidel. Uživatelé mohou spravovat souhlasy s cookies prostřednictvím banneru služby a nastavení prohlížeče.",
        "11.3. Reklamní obsah poskytují třetí strany. Poskytovatel neodpovídá za reklamní obsah ani za produkty/služby inzerentů.",
      ],
    },
    {
      title: "§12. Autorská práva a duševní vlastnictví",
      paragraphs: [
        "12.1. Název Toolando.tech, logo, rozvržení služby, texty, popisy nástrojů, průvodci a zdrojový kód jsou chráněny. Komerční kopírování bez souhlasu Poskytovatele je zakázáno.",
        "12.2. Uživatelé si ponechávají práva k souborům uživatele. Nahráním se autorská práva na Poskytovatele nepřevádějí.",
        "12.3. Uživatel uděluje Poskytovateli nevýhradní, bezplatnou licenci po dobu nutnou pro technické zpracování souborů uživatele výhradně k provedení požadované operace.",
        "12.4. Kopírování, reverse engineering, dekompilace nebo automatizované scrapování služby bez písemného souhlasu je zakázáno.",
      ],
    },
    {
      title: "§13. Odpovědnost Poskytovatele",
      paragraphs: [
        "13.1. Služba je poskytována bez jakékoli záruky v zákonem povoleném rozsahu.",
        "13.2. Poskytovatel neodpovídá za:",
      ],
      list: [
        "důsledky použití generovaného nebo konvertovaného obsahu uživatelem;",
        "ztrátu dat v důsledku jednání uživatele, poruchy zařízení uživatele nebo vyšší moci;",
        "přerušení služby z důvodu údržby, výpadků hostingu/cloudu nebo internetu;",
        "nepřímé škody, ušlý zisk, ztrátu pověsti nebo dat v zákonem povoleném rozsahu;",
        "jednání třetích stran (Stripe, Google, poskytovatelé AI, hosting).",
      ],
    },
    {
      title: "§14. Vyšší moc",
      paragraphs: [
        "14.1. Poskytovatel neodpovídá za neplnění nebo vadné plnění z důvodu vyšší moci, včetně kritických výpadků infrastruktury, přírodních katastrof, války, stávek, epidemií, rozhodnutí orgánů nebo rozsáhlých IT útoků.",
      ],
    },
    {
      title: "§15. Stížnosti",
      paragraphs: [
        "15.1. Stížnosti týkající se služby, Premium předplatného nebo porušení podmínek lze zasílat na {{email}}.",
        "15.2. Stížnost by měla popisovat problém, datum výskytu a informace pro identifikaci uživatele (e-mail účtu).",
        "15.3. Poskytovatel odpoví do 14 dnů od obdržení, pokud zvláštní pravidla nestanoví jinou lhůtu.",
        "15.4. Spotřebitelé mohou využít mimosoudní řešení sporů, včetně platformy EU ODR: https://ec.europa.eu/consumers/odr",
      ],
    },
    {
      title: "§16. Změny podmínek a služby",
      paragraphs: [
        "16.1. Poskytovatel může tyto podmínky změnit z důležitých důvodů, včetně změn právních předpisů, funkcí služby, nových nástrojů nebo změn obchodního modelu.",
        "16.2. Registrovaní uživatelé budou informováni o podstatných změnách podmínek nejméně 14 dní předem e-mailem nebo oznámením ve službě, pokud zákon nevyžaduje delší lhůtu.",
        "16.3. Pokračující používání po nabytí účinnosti změn znamená přijetí. Pokud změny nepřijímáte, přestaňte službu používat a zrušte Premium před dalším fakturačním obdobím.",
      ],
    },
    {
      title: "§17. Závěrečná ustanovení",
      paragraphs: [
        "17.1. Pro záležitosti neupravené těmito podmínkami platí polské právo, včetně občanského zákoníku a spotřebitelského práva pro spotřebitele.",
        "17.2. Spory řeší soudy příslušné dle obecně platných pravidel. Pro spotřebitele platí kogentní pravidla ochrany spotřebitele o příslušnosti.",
        "17.3. Je-li některé ustanovení neplatné, ostatní ustanovení zůstávají v platnosti. Neplatná ustanovení jsou nahrazena platnými právními pravidly.",
        "17.4. Tyto podmínky nabývají účinnosti zveřejněním ve službě. Aktuální verze je vždy dostupná na /regulamin.",
      ],
    },
  ],
  footerNote:
    "V případě dotazů k podmínkám, stížností nebo spotřebitelských práv kontaktujte {{email}}. Zásady ochrany osobních údajů jsou nedílnou součástí těchto podmínek.",
}
