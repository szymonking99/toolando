import type { LegalDocumentData } from "@/components/legal-document"

export const privacyRo: LegalDocumentData = {
  eyebrow: "Politica de confidențialitate",
  title: "Politica de confidențialitate Toolando.tech",
  intro:
    "Această Politică de confidențialitate descrie ce date sunt prelucrate pe Toolando.tech, în ce scopuri, pe ce temei juridic și ce drepturi vă revin. Prelucrez datele cu caracter personal în conformitate cu Regulamentul (UE) 2016/679 (GDPR) și legislația poloneză aplicabilă privind protecția datelor.",
  lastUpdated: "Ultima actualizare: 23 iulie 2026",
  sections: [
    {
      title: "§1. Operatorul de date",
      paragraphs: [
        "1.1. Operatorul de date („Operatorul”) este Szymon Badyl, proprietarul Toolando.tech, care furnizează servicii de instrumente online.",
        "1.2. Contact pentru confidențialitate: {{email}}.",
        "1.3. Operatorul nu a desemnat un Responsabil cu protecția datelor, deoarece acest lucru nu este necesar pentru această activitate conform GDPR.",
      ],
    },
    {
      title: "§2. Ce date prelucrăm",
      paragraphs: ["2.1. În funcție de modul în care utilizați Serviciul, prelucrăm următoarele categorii:"],
      list: [
        "Date tehnice și de utilizare: adresă IP, tip și versiune browser, sistem de operare, limbă, data și ora solicitării, pagini vizitate, sursa traficului, identificatori cookie (după consimțământ).",
        "Date de cont: adresă de e-mail, parolă (hash), ID utilizator, data înregistrării, statut Premium, ID client Stripe (dacă este cazul).",
        "Date de plată: prelucrate de Stripe — Operatorul nu stochează numerele complete ale cardurilor de plată.",
        "Date de corespondență: adresă de e-mail, conținutul mesajului, data contactului — când scrieți la {{email}} sau utilizați formularul de contact.",
        "Fișiere ale utilizatorului: prelucrate temporar doar pentru a efectua operațiile instrumentelor — nu sunt stocate după finalizarea conversiei.",
      ],
    },
    {
      title: "§3. Scopuri și temeiuri juridice",
      paragraphs: ["3.1. Prelucrăm datele în următoarele scopuri:"],
      definitions: [
        {
          term: "Furnizarea Serviciului",
          description:
            "Conversia fișierelor, funcționarea instrumentelor, gestionarea contului — temei juridic: art. 6 alin. (1) lit. b GDPR (contract) sau lit. f (interes legitim: funcționarea Serviciului).",
        },
        {
          term: "Abonament Premium",
          description:
            "Procesarea plăților și a abonamentelor — temei juridic: art. 6 alin. (1) lit. b GDPR; contabilitate: art. 6 alin. (1) lit. c (obligație legală).",
        },
        {
          term: "Analiza traficului",
          description:
            "Google Analytics — doar după consimțământul pentru cookie-uri analitice — temei juridic: art. 6 alin. (1) lit. a GDPR (consimțământ).",
        },
        {
          term: "Publicitate",
          description:
            "Google AdSense — doar după consimțământul pentru cookie-uri publicitare — temei juridic: art. 6 alin. (1) lit. a GDPR (consimțământ).",
        },
        {
          term: "Securitate",
          description:
            "Prevenirea abuzurilor, jurnale de server — temei juridic: art. 6 alin. (1) lit. f GDPR (interes legitim).",
        },
        {
          term: "Contact și reclamații",
          description:
            "Răspunsuri la mesaje — temei juridic: art. 6 alin. (1) lit. f GDPR sau lit. b (când este legat de contract).",
        },
      ],
    },
    {
      title: "§4. Cookie-uri și tehnologii similare",
      paragraphs: [
        "4.1. Serviciul utilizează cookie-uri și tehnologii similare. La prima vizită afișăm un banner de consimțământ în care puteți accepta toate cookie-urile sau limita la cele esențiale.",
        "4.2. Tipuri de cookie-uri:",
      ],
      list: [
        "Esențiale — necesare pentru funcționarea Serviciului (de ex. limbă, sesiune, setări cookie). Nu este necesar consimțământ.",
        "Analitice — Google Analytics, statistici agregate de vizite. Este necesar consimțământ.",
        "Publicitare — Google AdSense, personalizarea reclamelor. Este necesar consimțământ.",
      ],
      afterList: [
        "4.3. Puteți modifica setările cookie-urilor oricând prin banner sau setările browserului.",
      ],
    },
    {
      title: "§5. Destinatari și împuterniciți",
      paragraphs: ["5.1. Datele pot fi transmise unor împuterniciți de încredere care acționează în numele Operatorului:"],
      list: [
        "Vercel Inc. — găzduire și infrastructură (SUA, clauze contractuale standard UE).",
        "Stripe, Inc. — procesarea plăților Premium (SUA/Irlanda, PCI DSS).",
        "Google LLC — Analytics și AdSense (după consimțământ; politica partenerilor: https://policies.google.com/technologies/partner-sites).",
        "Resend — e-mailuri tranzacționale (de ex. e-mail de bun venit după înregistrare), dacă este configurat.",
        "Furnizori de modele AI — prelucrarea prompturilor și fișierelor doar în cadrul instrumentelor AI Premium, fără stocare după finalizare.",
      ],
      afterList: ["5.2. Operatorul nu vinde datele cu caracter personal către terți."],
    },
    {
      title: "§6. Fișiere încărcate în instrumente",
      paragraphs: [
        "6.1. Fișierele încărcate în convertoare și alte instrumente nu sunt stocate după finalizarea operației.",
        "6.2. Fișierele nu sunt utilizate pentru antrenarea modelelor AI, profilare sau marketing.",
        "6.3. Unele instrumente (de ex. deschizătorul universal de fișiere) prelucrează fișierele complet local în browser — fișierul nu părăsește dispozitivul dvs.",
        "6.4. Nu încărcați fișiere cu date sensibile (de ex. date medicale, numere de act de identitate), decât dacă este absolut necesar — acest lucru se face pe propriul risc.",
      ],
    },
    {
      title: "§7. Perioade de păstrare",
      paragraphs: ["7.1. Păstrăm datele pentru următoarele perioade:"],
      list: [
        "Date de cont — până la ștergerea contului sau o solicitare de ștergere.",
        "Jurnale de server — până la 90 de zile, dacă nu este necesară o păstrare mai lungă pentru exercitarea drepturilor.",
        "Corespondență — până la 3 ani după finalizarea cazului.",
        "Date de facturare (Stripe) — conform legislației fiscale (de obicei 5 ani).",
        "Fișiere ale utilizatorului — șterse imediat după prelucrare (de obicei secunde până la minute).",
        "Setări cookie — până la 12 luni sau până la retragerea consimțământului.",
      ],
    },
    {
      title: "§8. Drepturile dvs. (GDPR)",
      paragraphs: ["8.1. Vă revin următoarele drepturi:"],
      list: [
        "Dreptul de acces (art. 15 GDPR).",
        "Dreptul la rectificare (art. 16 GDPR).",
        "Dreptul la ștergere — „dreptul de a fi uitat” (art. 17 GDPR).",
        "Dreptul la restricționarea prelucrării (art. 18 GDPR).",
        "Dreptul la portabilitatea datelor (art. 20 GDPR).",
        "Dreptul de opoziție față de prelucrarea bazată pe art. 6 alin. (1) lit. f GDPR (art. 21 GDPR).",
        "Dreptul de a retrage consimțământul oricând — fără a afecta legalitatea prelucrării anterioare retragerii (art. 7 alin. (3) GDPR).",
        "Dreptul de a depune plângere la o autoritate de supraveghere (în Polonia: PUODO, uodo.gov.pl).",
      ],
      afterList: [
        "8.2. Pentru a vă exercita drepturile, scrieți la {{email}}. Răspund fără întârziere, cel târziu în termen de 30 de zile.",
      ],
    },
    {
      title: "§9. Securitatea datelor",
      paragraphs: [
        "9.1. Aplic măsuri tehnice și organizatorice adecvate riscului, inclusiv criptare HTTPS, acces restricționat la sisteme și ștergerea fișierelor după prelucrare.",
        "9.2. Niciun sistem nu este 100% sigur. În cazul unei încălcări a protecției datelor cu caracter personal care prezintă probabil un risc ridicat pentru drepturile dvs., vă voi informa conform art. 34 GDPR.",
      ],
    },
    {
      title: "§10. Copii",
      paragraphs: [
        "10.1. Serviciul nu se adresează copiilor sub 16 ani. Nu prelucrez în mod conștient date ale copiilor sub 16 ani fără consimțământul unui părinte sau tutore.",
        "10.2. Dacă considerați că un copil a furnizat date fără consimțământul unui părinte sau tutore, contactați {{email}} — datele vor fi șterse.",
      ],
    },
    {
      title: "§11. Modificări ale acestei politici",
      paragraphs: [
        "11.1. Această politică poate fi actualizată pentru a reflecta modificări ale Serviciului, tehnologiilor sau legislației.",
        "11.2. Modificările semnificative vor fi comunicate printr-o notificare în Serviciu sau prin e-mail (pentru utilizatorii cu cont).",
        "11.3. Versiunea actuală este întotdeauna disponibilă la /polityka-prywatnosci.",
      ],
    },
  ],
  footerNote:
    "Întrebări privind confidențialitatea: {{email}}. Termenii de utilizare sunt disponibili la /regulamin.",
}
