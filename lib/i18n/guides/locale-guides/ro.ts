import type { GuideArticle } from "../types"
import type { GuideSlug } from "../slugs"
import { guidesEn } from "../guides-en"

export const guidesRo: Record<GuideSlug, GuideArticle> = {
  "choose-audio-bitrate": {
    ...guidesEn["choose-audio-bitrate"],
    title: "Ce bitrate MP3 sau AAC alegi?",
    description: "128 vs 192 vs 320 kbps — alegeri practice pentru podcasturi, muzică și video fără a irosi spațiu pe disc.",
    sections: [
      {
        paragraphs: [
          "Bitrate-ul e cantitatea de date pe secundă de audio. Bitrate mai mare înseamnă de obicei sunet mai bun dar fișiere mai mari. La MP3, diferența între 128 și 320 kbps se aude cel mai mult pe boxe bune și muzică densă.",
          "Pentru vorbire (podcasturi, interviuri) 96–128 kbps mono e adesea suficient. Pentru muzică în căști, 192–256 kbps stereo e un compromis solid. 320 kbps e plafonul practic MP3 — mai mult ajută rar, formatul rămâne cu pierderi.",
        ],
      },
      {
        title: "MP3, AAC și Opus — comparație rapidă",
        paragraphs: [
          "AAC (M4A) la același bitrate bate de obicei MP3 — de aceea YouTube și Apple Music îl folosesc.",
          "Opus excelează în VoIP și streaming la bitrate mic (64–128 kbps).",
          "Pentru arhive de studio păstrează WAV sau FLAC — un bitrate cu pierderi nu restaurează datele lipsă.",
        ],
      },
      {
        title: "Greșeli frecvente",
        paragraphs: [
          "Creșterea bitrate-ului unui MP3 de calitate slabă nu îmbunătățește sunetul — doar mărește fișierul.",
          "Re-encodarea aceleiași piese de mai multe ori (MP3 → AAC → MP3) degradează calitatea la fiecare rundă.",
          "Pentru proiecte video extrage audio din propriul MP4 în loc să descarci muzica altcuiva — drepturile de autor contează.",
        ],
      },
    ],
  },
  "compress-images-without-quality-loss": {
    ...guidesEn["compress-images-without-quality-loss"],
    title: "Cum comprimi imagini JPG și PNG fără pierdere vizibilă de calitate",
    description: "Când folosești compresorul, ce nivel de calitate alegi și compresie vs conversie de format.",
    sections: [
      {
        paragraphs: [
          "Comprimarea unei imagini micșorează fișierul fără a schimba formatul — rămâi cu JPG sau PNG, doar mai ușor. Conversia JPG → WebP schimbă formatul și e adesea mai bună pentru site-uri, dar fluxurile de tipar pot cere JPG.",
          "Pe Toolando.tech am testat compresorul de imagini pe fotografii produse 2000×2000 px: la calitate 80%, dimensiunea scade cu 40–60% fără artefacte vizibile pe ecran.",
        ],
      },
      {
        title: "Când comprimi vs convertești",
        paragraphs: [
          "Comprimă când formatul e OK (ex. magazinul cere JPG) dar fișierul e prea greu pentru e-mail sau CMS.",
          "Convertește în WebP/AVIF când publici pe propriul site cu fallback <picture>.",
          "Nu re-salva același JPG de multe ori — fiecare trecere adaugă artefacte.",
        ],
      },
      {
        title: "Scenarii tipice",
        paragraphs: [
          "Atașament e-mail: JPG calitate ~75–85, lățime max 1600 px.",
          "E-commerce: WebP cu fallback JPG; miniaturi 800 px.",
          "Capturi UI cu text: PNG sau WebP fără pierderi — evită JPG agresiv.",
        ],
      },
    ],
  },
  "convert-video-to-gif-properly": {
    ...guidesEn["convert-video-to-gif-properly"],
    title: "Cum faci un GIF bun din video — rezoluție, FPS, durată",
    description: "MP4/MOV în GIF fără fișier uriaș: limite practice și alternative.",
    sections: [
      {
        paragraphs: [
          "GIF nu are sunet și nu folosește H.264 — fiecare cadru e bitmap complet (adesea paletă 256 culori). Deci un clip 1080p de 10 secunde ca GIF poate cântări mai mult decât video-ul original. Obiectiv: scurt, mic, rezoluție joasă.",
          "Înainte de MP4 → GIF taie clipul la 2–4 secunde într-un editor extern și folosește 10–15 FPS în loc de 30 — GIF oricum nu recuperează fluiditatea filmului.",
        ],
      },
      {
        title: "Parametri de start",
        paragraphs: [
          "Lățime max 480–640 px pentru meme-uri și reacții.",
          "Durată max 5 s — peste asta consideră MP4 în buclă.",
          "Fundal simplu (greenscreen) se comprimă mai ușor decât gradiente și zgomot.",
        ],
      },
      {
        title: "După conversie",
        paragraphs: [
          "Verifică dimensiunea — GIF peste 5 MB rar are sens pe o pagină.",
          "Dacă GIF e prea mare, GIF → MP4 și embed <video> rezolvă adesea situația.",
          "Toolando procesează video-ul tău doar pe durata conversiei — nu găzduiește public GIF-uri finite.",
        ],
      },
    ],
  },
  "docx-pdf-workflow": {
    ...guidesEn["docx-pdf-workflow"],
    title: "DOCX → PDF pentru birou — când și cum convertești",
    description: "Trimiterea CV-urilor, facturilor și contractelor: de ce PDF bate DOCX și cum eviți fonturile stricate.",
    sections: [
      {
        paragraphs: [
          "DOCX e pentru editare — excelent când destinatarul are Word și trebuie să modifice textul. PDF e pentru citire — layout, fonturi și margini arată identic pe Windows, Mac și telefon.",
          "Înainte de a trimite un CV, propunere sau contract convertește DOCX → PDF. Destinatarii nu vor edita conținutul din greșeală și eviți fonturile substitut care strică branding-ul.",
        ],
      },
      {
        title: "Când NU converti PDF → DOCX",
        paragraphs: [
          "Facturi scanate și contracte semnate — păstrează PDF ca arhivă; OCR e pas separat.",
          "Layout-uri complexe multipagină ( cataloage, broșuri) — conversia DOCX strică adesea paginarea.",
          "Dacă ai nevoie doar de un fragment de text, copiază din PDF în loc să convertești tot fișierul.",
        ],
      },
      {
        title: "Securitate și confidențialitate",
        paragraphs: [
          "La Toolando.tech fișierele DOCX și PDF sunt folosite doar pentru conversie și șterse la final.",
          "Pentru documente sensibile (acte de identitate, date bancare) folosește HTTPS și nu lăsa copii pe cloud-uri publice fără criptare.",
        ],
      },
    ],
  },
  "extract-audio-from-video": {
    ...guidesEn["extract-audio-from-video"],
    title: "Extragerea audio din video — alternativa legală",
    description: "Cum extragi legal o pistă audio din propriul fișier video (MP4, MOV, MKV).",
    sections: [
      {
        paragraphs: [
          "Uneori ai un fișier video și ai nevoie doar de audio. Toolando.tech extrage audio din MP4, MOV, AVI, MKV și îl salvează ca MP3, WAV, FLAC sau AAC.",
          "E legal pe propriul fișier — spre deosebire de descărcarea muzicii de pe YouTube sau TikTok, pe care Toolando.tech nu o oferă în mod deliberat.",
        ],
      },
    ],
  },
  "extract-images-from-pdf-pages": {
    ...guidesEn["extract-images-from-pdf-pages"],
    title: "Cum extragi imagini din pagini PDF (JPG, PNG, WebP)",
    description: "Slide-uri, cataloage și scanări — când exportul unei pagini ca imagine are sens și ce rezoluție.",
    sections: [
      {
        paragraphs: [
          "PDF e un container — în interior pot fi vectori, fonturi și bitmap-uri încorporate. PDF → JPG redă fiecare pagină ca imagine raster. Nu e același lucru cu extragerea unui logo încorporat izolat (asta cere editor PDF), dar pentru slide-uri, postere și scanări funcționează bine.",
          "O prezentare 16:9 exportată în PNG la 1920 px lățime arată clar pe ecran; pentru tipar A4 țintește ~2480×3508 px (300 DPI) dacă instrumentul suportă rezoluție înaltă.",
        ],
      },
      {
        title: "JPG vs PNG vs WebP",
        paragraphs: [
          "Slide cu fundal foto → JPG sau WebP.",
          "Slide cu grafice și text → PNG (tipografie mai clară).",
          "Miniatură site → WebP cu fallback JPG după conversie ulterioară.",
        ],
      },
      {
        title: "PDF multipagină",
        paragraphs: [
          "Exportă pagini individuale dacă ai nevoie doar de slide-urile 5 și 12.",
          "Pentru galerie cu toate paginile — convertește tot fișierul și sortează după număr în nume.",
          "Respectă drepturile de autor — PDF-ul altcuiva nu e al tău de publicat liber.",
        ],
      },
    ],
  },
  "flac-music-archive-guide": {
    ...guidesEn["flac-music-archive-guide"],
    title: "FLAC ca arhivă muzicală — când merită vs MP3",
    description: "FLAC fără pierderi vs MP3 320 kbps: backup-uri, streaming acasă și playere auto.",
    sections: [
      {
        paragraphs: [
          "FLAC (Free Lossless Audio Codec) e compresie fără pierderi — ca un ZIP pentru audio. Decodat obții același semnal ca WAV, dar fișierul ocupă aproximativ jumătate din spațiu. MP3 elimină date permanent; chiar 320 kbps nu e identic bit cu bit cu un rip CD.",
          "În practică: dacă cumperi muzică fără pierderi sau ripezi propriile discuri, FLAC e format de arhivă sensat. Pe telefon cu căști Bluetooth FLAC vs MP3 256 kbps e adesea inaudibil — conversia în MP3 economisește gigabytes.",
        ],
      },
      {
        title: "Flux de arhivare",
        paragraphs: [
          "1) Master în FLAC (sau WAV) pe NAS / backup cloud.",
          "2) Copii de lucru MP3/AAC pentru telefon și mașină.",
          "3) Nu converti niciodată MP3 → FLAC „pentru calitate” — doar mărește fișierul fără a recupera date.",
          "Am testat convertorul FLAC → MP3 pe Toolando.tech pe albume de 40–60 min; verifică metadata (titlu, artist) în player după conversie.",
        ],
      },
      {
        title: "Compatibilitate",
        paragraphs: [
          "FLAC: VLC, Foobar2000, majoritatea playerelor Android; suport mai slab în Apple Music nativ (ALAC se potrivește mai bine Apple).",
          "Sistemele auto citesc adesea doar MP3/WMA/AAC de pe USB — FLAC → MP3 e necesar.",
          "Streaming acasă (Plex, Jellyfin) gestionează FLAC fără probleme.",
        ],
      },
    ],
  },
  "font-woff2-for-websites": {
    ...guidesEn["font-woff2-for-websites"],
    title: "TTF, OTF, WOFF, WOFF2 — fonturi pentru web",
    description: "Conversia fonturilor pentru @font-face, licențe și impact asupra vitezei paginii.",
    sections: [
      {
        paragraphs: [
          "Browserele au nevoie de WOFF/WOFF2 în CSS (@font-face), nu fișiere font Windows brute. WOFF2 oferă cel mai mic transfer.",
          "Convertorul TTF/OTF → WOFF2 de la Toolando pregătește fișiere gata pentru web. Verifică licența fontului înainte de embed.",
        ],
      },
      {
        title: "Performanță",
        paragraphs: [
          "Subsetează fonturile la glifele folosite în instrumente pro dacă fișierele sunt mari.",
          "Preîncarcă WOFF2 critic în <head> pentru text above-the-fold.",
          "Folosește font-display: swap ca textul să rămână lizibil în timpul încărcării.",
        ],
      },
    ],
  },
  "gif-vs-mp4-for-animations": {
    ...guidesEn["gif-vs-mp4-for-animations"],
    title: "GIF vs MP4 — animații pe site-uri și rețele sociale",
    description: "Când GIF-ul clasic are sens și când un MP4 sau WebM scurt economisește megabytes.",
    sections: [
      {
        paragraphs: [
          "GIF se redă peste tot, dar e tehnic o secvență de cadre fără compresie video modernă — o animație 720p de 5 secunde poate cântări 10–20 MB. Aceeași în MP4 (H.264) încape adesea în 500 KB–1 MB la calitate acceptabilă.",
          "MP4 → GIF pe Toolando.tech are sens pentru bucle scurte (loader, reacție Slack) când platforma nu permite embed video. Pe propriul site preferă <video autoplay loop muted playsinline> cu MP4 sau WebM.",
        ],
      },
      {
        title: "Când GIF",
        paragraphs: [
          "Bucli scurtă (<5 s), rezoluție mică (≤480 px lățime).",
          "Cerință platformă (unele forumuri acceptă doar GIF).",
          "Grafică simplă cu puține culori — atunci GIF poate fi cu adevărat ușor.",
        ],
      },
      {
        title: "Când MP4/WebM",
        paragraphs: [
          "Animație cu multe culori, gradiente sau clipuri video.",
          "Site-uri web — LCP mai bun și mai puțină bandă.",
          "Instagram/TikTok cer video, nu GIF.",
        ],
      },
      {
        title: "Sfaturi pentru MP4 → GIF",
        paragraphs: [
          "Taie durata — fiecare secundă înseamnă zeci de cadre.",
          "Reduce rezoluția înainte de conversie.",
          "Limitează paleta de culori dacă instrumentul o oferă (mai puțin banding).",
        ],
      },
    ],
  },
  "heic-iphone-jpg": {
    ...guidesEn["heic-iphone-jpg"],
    title: "HEIC de pe iPhone — cum deschizi și convertești în JPG",
    description: "De ce iPhone salvează HEIC, probleme de compatibilitate și cum convertești în JPG sau PNG.",
    sections: [
      {
        paragraphs: [
          "Apple salvează fotografiile implicit în HEIC — mai mic decât JPG la aceeași calitate. Problemă: Windows fără extensie, aplicații vechi și multe servicii nu suportă HEIC.",
          "Soluție: convertește HEIC → JPG sau HEIC → PNG pe Toolando.tech înainte de e-mail, upload sau tipar. Poți seta iPhone pe „Cel mai compatibil” (JPG) în Setări.",
        ],
      },
    ],
  },
  "json-csv-xml": {
    ...guidesEn["json-csv-xml"],
    title: "JSON, CSV și XML — convertirea datelor între formate",
    description: "Când folosești JSON, CSV, TSV și XML și cum convertești între ele fără a pierde structura.",
    sections: [
      {
        paragraphs: [
          "JSON este standardul pentru API REST și configurații de aplicații. CSV și TSV se folosesc pentru import în Excel. XML se folosește în sisteme enterprise vechi și RSS.",
          "JSON → CSV deschide un răspuns API în Excel. CSV → JSON pregătește datele pentru un API REST. Toolando.tech păstrează structura datelor la conversie.",
        ],
      },
    ],
  },
  "jwt-decode-safely-guide": {
    ...guidesEn["jwt-decode-safely-guide"],
    title: "JWT — cum citești un token fără a verifica semnătura",
    description: "Header, payload și Base64URL — când decodezi local și ce să nu faci.",
    sections: [
      {
        paragraphs: [
          "Un JSON Web Token are trei părți separate prin puncte: header, payload și signature. Decodorul JWT de pe Toolando arată header și payload după decodare Base64URL — fără a trimite tokenul la server (rulează în browser).",
          "Asta nu înlocuiește verificarea semnăturii pe backend. Decodarea e pentru debugging (ex. `exp` expirat, `aud` greșit) — nu trata payload-ul singur ca dovadă de identitate.",
        ],
      },
      {
        title: "Practici sigure",
        paragraphs: [
          "Nu lipi tokenuri de producție cu date personale pe site-uri publice — folosește un decodor local sau mediu de test.",
          "Verifică `exp` și `nbf` înainte de a depana erori 401.",
          "După analiză, șterge tokenul din istoricul clipboard-ului și din loguri.",
        ],
      },
    ],
  },
  "lossy-vs-lossless": {
    ...guidesEn["lossy-vs-lossless"],
    title: "Compresie cu pierderi vs fără pierderi — ghid simplu",
    description: "Cum diferă compresia cu și fără pierderi și cum eviți pierderea calității la conversie.",
    sections: [
      {
        paragraphs: [
          "Formatele cu pierderi (MP3, JPG, AAC, H.264) elimină date pentru a micșora fișierele. Formatele fără pierderi (FLAC, PNG, WAV, ZIP) păstrează toate datele dar produc fișiere mai mari.",
          "Regulă: convertește cu pierderi → fără pierderi doar când trebuie — nu vei recupera calitatea pierdută. Convertește cu pierderi → cu pierderi o singură dată — fiecare reconversie degradează rezultatul.",
        ],
      },
    ],
  },
  "markdown-to-pdf-workflow": {
    ...guidesEn["markdown-to-pdf-workflow"],
    title: "De la Markdown la PDF — documentație, README și note",
    description: "MD → HTML → PDF/DOCX: când exportul din editor e suficient și când ajută un convertor online.",
    sections: [
      {
        paragraphs: [
          "Markdown e pentru scris — titluri, liste, cod — fără layout WYSIWYG. Dezvoltatorii păstrează README.md în repo-uri; apoi ai nevoie de PDF pentru client sau tipar. Cale tipică: MD → HTML (render) → PDF prin Print to PDF din browser, sau MD → DOCX → PDF pentru anteturi de pagină mai bune.",
          "Am testat convertorii MD → HTML și DOCX → PDF pe Toolando.tech pe fișiere de 20–40 KB; caracterele românești și blocurile de cod trec bine dacă MD e UTF-8.",
        ],
      },
      {
        title: "Ce cale când",
        paragraphs: [
          "Previzualizare rapidă: MD → HTML, deschide în browser.",
          "Document formal cu numere de pagină: MD → DOCX (sau editor), stil companie, apoi DOCX → PDF.",
          "Note simple fără stil: MD → TXT e suficient.",
        ],
      },
      {
        title: "Obiceiuri bune MD",
        paragraphs: [
          "Un fișier = un subiect; împarte documentele lungi în capitole.",
          "Leagă imaginile relativ — verifică căile după conversie.",
          "Tabelele MD se pot strica în PDF — consideră CSV sau DOCX pentru date tabulare.",
        ],
      },
    ],
  },
  "merge-pdf-online-guide": {
    ...guidesEn["merge-pdf-online-guide"],
    title: "Combinarea mai multor PDF într-unul — când are sens",
    description: "Combinarea facturilor, scanărilor și atașamentelor — ordinea paginilor, calitate și confidențialitate.",
    sections: [
      {
        paragraphs: [
          "Combinarea PDF e muncă de birou zilnică: factură + contract + scan act de identitate într-un singur atașament. Toolando.tech combină fișierele în ordinea pe care o selectezi.",
          "PDF păstrează text vectorial și scanări bitmap — combinarea nu reduce rezoluția scanărilor dacă sursele nu erau supra-comprimate.",
        ],
      },
      {
        title: "Înainte de trimitere",
        paragraphs: [
          "Ordonează fișierele logic (copertă → conținut → atașamente).",
          "Elimină paginile duplicate din scanări.",
          "Dacă destinatarul e pe mobil, țintește ≤10–15 MB sau partajează prin link cloud.",
        ],
      },
      {
        title: "Confidențialitate",
        paragraphs: [
          "Tratează documentele de afaceri și personale ca confidențiale. Toolando șterge fișierele după procesare; respectă totuși politica companiei pentru date sensibile.",
        ],
      },
    ],
  },
  "mortgage-loan-calculator-guide": {
    ...guidesEn["mortgage-loan-calculator-guide"],
    title: "Calculator credit — rată, dobânzi și la ce să fii atent",
    description: "Anuitate, comisioane și asigurări — cum citești rezultatul unui calculator ipotecar.",
    sections: [
      {
        paragraphs: [
          "Calculatorul de credit de pe Toolando calculează o plată anuitară: sumă fixă lunară de principal plus dobândă. Termen mai lung scade rata — dar crește costul total al dobânzii.",
          "Tratează asta ca punct de plecare pentru discuția cu banca, nu ca ofertă. Rata reală depinde de rata de referință, marjă, comisioane, asigurare de viață și avans.",
        ],
      },
      {
        title: "Ce adaugi dincolo de calculator",
        paragraphs: [
          "Comision de acordare și comision pentru rambursare anticipată (dacă e în contract).",
          "Asigurare proprietate și viață — adesea cerute de bancă.",
          "Costuri notariale și taxe de transfer la cumpărarea unei locuințe.",
        ],
      },
    ],
  },
  "mp3-vs-wav": {
    ...guidesEn["mp3-vs-wav"],
    title: "MP3 vs WAV — când să convertești audio?",
    description: "MP3 vs WAV comparate: compresie cu pierderi vs fără pierderi, dimensiune fișier, editare în DAW și ce format alegi.",
    sections: [
      {
        paragraphs: [
          "MP3 folosește compresie cu pierderi — fișierele sunt mici, dar o parte din datele audio se pierd definitiv. WAV păstrează calitatea integrală (fără pierderi sau necomprimat), dar fișierele pot fi de 10× mai mari decât MP3.",
          "În practică: ascultat pe telefon → MP3 e suficient. Editat un podcast în Audacity sau mixat în FL Studio → lucrează cu WAV sau FLAC.",
        ],
      },
      {
        title: "Când să convertești MP3 → WAV",
        paragraphs: [
          "Când o platformă sau aplicație cere un format fără pierderi pentru editări ulterioare.",
          "Când plănuiești tăieturi multiple, efecte și mastering — fiecare operație pe MP3 degradează calitatea.",
          "Notă: MP3 → WAV nu recuperează calitatea pierdută, dar oprește degradarea suplimentară în timpul editării.",
        ],
      },
      {
        title: "Când să convertești WAV → MP3",
        paragraphs: [
          "Trimiterea unei înregistrări prin e-mail sau chat — fișier mai mic = transfer mai rapid.",
          "Publicarea unui podcast sau a muzicii pentru ascultare, nu pentru editare.",
          "Economisirea spațiului pe disc într-o bibliotecă audio mare.",
        ],
      },
    ],
  },
  "online-file-security": {
    ...guidesEn["online-file-security"],
    title: "Securitatea fișierelor în instrumentele online",
    description: "Cum procesează Toolando.tech fișierele, când instrumentele rulează local în browser și detalii despre confidențialitate.",
    sections: [
      {
        paragraphs: [
          "Încărcarea fișierelor în instrumente online ridică îngrijorări firești. La Toolando.tech fișierele sunt folosite doar pentru operația solicitată — conversie, compresie sau previzualizare.",
          "După finalizarea lucrării, fișierele sunt șterse de pe server. Unele instrumente (deschizător universal) rulează complet în browser — fișierul nu părăsește computerul. Conexiunea este criptată (HTTPS).",
        ],
      },
    ],
  },
  "pdf-to-jpg": {
    ...guidesEn["pdf-to-jpg"],
    title: "Cum să convertești PDF în JPG pentru tipar și web",
    description: "Când exportezi pagini PDF ca JPG, ce rezoluție folosești și când e mai bun PNG.",
    sections: [
      {
        paragraphs: [
          "PDF păstrează layout-ul paginii. Uneori ai nevoie de pagini individuale ca imagini — pentru site, PowerPoint sau tipărirea unei singure pagini.",
          "Convertorul PDF → JPG de pe Toolando.tech redă fiecare pagină ca JPG separat. Fișierele nu sunt stocate — se șterg imediat după conversie.",
        ],
      },
      {
        title: "JPG sau PNG din PDF?",
        paragraphs: [
          "JPG — fișiere mai mici, ideal pentru fotografii și documente fără transparență.",
          "PNG — fără pierderi cu transparență; mai bun pentru grafică cu text și margini clare.",
        ],
      },
    ],
  },
  "pdf-vs-docx": {
    ...guidesEn["pdf-vs-docx"],
    title: "PDF vs DOCX — ce format și când?",
    description: "Diferențe PDF vs DOCX: editare, tipar, arhivare și când convertești în ce direcție.",
    sections: [
      {
        paragraphs: [
          "DOCX (Word) e pentru editarea textului — conținut, stiluri, titluri. PDF blochează layout-ul — identic pe fiecare dispozitiv, ideal pentru facturi, contracte și CV-uri.",
          "Convertește DOCX → PDF înainte de trimitere „doar pentru citire”. Convertește PDF → DOCX doar când trebuie să editezi textul — layout-ul se poate strica. Pentru arhivare și tipar, alege mereu PDF.",
        ],
      },
    ],
  },
  "png-vs-jpg-photos-and-graphics": {
    ...guidesEn["png-vs-jpg-photos-and-graphics"],
    title: "PNG vs JPG — fotografii vs grafică cu text",
    description: "Alegeri practice: fotografii, capturi de ecran, logo-uri cu transparență și tipar.",
    sections: [
      {
        paragraphs: [
          "PNG și JPG sunt cele două formate confundate cel mai des. JPG comprimă bine fotografiile — cer, piele, peisaje — dar strică marginile clare și textul. PNG păstrează fiecare pixel exact, inclusiv transparența (alpha), dar fișierele sunt adesea de 5–10× mai mari decât JPG la aceeași rezoluție.",
          "Regula pe care o folosesc în testele Toolando.tech: fotografie galerie sau social → JPG (sau WebP cu fallback JPG). Pictogramă, logo, diagramă, captură UI → PNG. Mix foto + text (ex. copertă ofertă) → adesea PNG sau WebP fără pierderi.",
        ],
      },
      {
        title: "Când alegi JPG",
        paragraphs: [
          "Fotografii cameră sau telefon fără transparență.",
          "Miniaturi produse când fundalul e uniform și nu ai nevoie de alpha.",
          "Atașamente e-mail — JPG calitate 80–85 e de obicei un compromis rezonabil.",
          "Tipar foto acasă — multe servicii acceptă JPG înaltă rezoluție (echivalent 300 DPI).",
        ],
      },
      {
        title: "Când alegi PNG",
        paragraphs: [
          "Logo site pe fundal transparent — JPG umple mereu cu alb sau negru.",
          "Capturi UI, grafice, cod — textul rămâne clar.",
          "Grafică plată cu puține culori (infografice, pictograme aplicații).",
          "Când plănuiești editare stratificată — PNG fără pierderi nu adaugă artefacte la fiecare salvare (spre deosebire de JPG repetat).",
        ],
      },
      {
        title: "Greșeli frecvente",
        paragraphs: [
          "Salvare logo ca JPG — margini zimțate și fără transparență.",
          "Salvare foto 4000×3000 ca PNG „pentru calitate” — 15 MB inutil în loc de 2 MB JPG.",
          "Bucle PNG → JPG → PNG — fiecare trecere JPG pierde calitate; păstrează master-ul în PNG.",
        ],
      },
    ],
  },
  "podcast-export-mp3-aac-settings": {
    ...guidesEn["podcast-export-mp3-aac-settings"],
    title: "Export podcast — MP3 sau AAC și ce bitrate",
    description: "Setări după înregistrare în Audacity, Reaper sau pe telefon: mono, 44,1 kHz, compresie rezonabilă.",
    sections: [
      {
        paragraphs: [
          "Podcasturile sunt în principal vorbire — nu ai nevoie de stereo 320 kbps ca la muzică de studio. Majoritatea platformelor (Spotify, Apple Podcasts, gazde RSS) re-encodează upload-urile oricum. Trimite totuși un master decent: mono sau stereo, 44,1 sau 48 kHz, MP3 128–192 kbps sau AAC/M4A 128 kbps.",
          "Înregistrat în WAV sau FLAC? Exportul final e aproape mereu MP3 sau AAC — am testat WAV → MP3 pe Toolando.tech pe episoade de 30–60 min; ~30 MB WAV scade la ~28 MB la 128 kbps stereo (vorbire mono poate fi ~15 MB).",
        ],
      },
      {
        title: "Setări recomandate",
        paragraphs: [
          "Solo / interviu o voce: mono, MP3 96–128 kbps.",
          "Două voci pe piste separate: stereo 128 kbps.",
          "Intro/outro muzică în stereo, rest mono — exportă tot stereo 128 kbps pentru simplitate.",
          "Evită 64 kbps — sibilante dure și zgomot de fundal pe microfoane ieftine.",
        ],
      },
      {
        title: "MP3 vs AAC (M4A)",
        paragraphs: [
          "AAC la același bitrate bate de obicei MP3 — Apple preferă M4A.",
          "MP3 are cea mai largă compatibilitate pe playere vechi și mașini.",
          "Nu încărca WAV brut pe gazde podcast — upload-ul durează la nesfârșit.",
        ],
      },
    ],
  },
  "prepare-images-for-web": {
    ...guidesEn["prepare-images-for-web"],
    title: "Cum pregătești imagini pentru web (JPG, WebP, AVIF)",
    description: "Rezoluție, compresie și format — accelerează site-ul fără pierdere vizibilă de calitate.",
    sections: [
      {
        paragraphs: [
          "Fotografiile uriașe de la cameră (4000×3000 px) încetinesc fiecare pagină. Înainte de upload pe blog sau magazin, redimensionează la dimensiunea reală de afișare — ex. 1600 px lățime pentru banner hero.",
          "JPG rămâne alegerea universală sigură. WebP și AVIF produc fișiere mai mici la aceeași calitate vizuală — folosește-le în stack-uri moderne cu fallback <picture> pentru browsere vechi.",
        ],
      },
      {
        title: "Când PNG în loc de JPG",
        paragraphs: [
          "Logo-uri, pictograme și capturi de interfață — PNG sau WebP fără pierderi păstrează margini clare.",
          "Fotografii produse pe fundal alb se comprimă adesea bine ca JPG calitate 80–85.",
          "Evită re-salvarea aceluiași banner ca JPG repetat — fiecare trecere adaugă artefacte.",
        ],
      },
      {
        title: "Checklist înainte de publicare",
        paragraphs: [
          "1) Redimensionează la lățimea țintă în px. 2) Alege formatul (JPG/WebP/AVIF). 3) Verifică greutatea (<200 KB miniaturi, <500 KB imagini mari de blog). 4) Rulează PageSpeed Insights și compară LCP înainte/după.",
        ],
      },
    ],
  },
  "remove-exif-privacy-guide": {
    ...guidesEn["remove-exif-privacy-guide"],
    title: "EXIF în fotografii — ce elimini înainte de publicare",
    description: "GPS, model cameră și date în metadata EXIF — riscuri de confidențialitate și eliminare.",
    sections: [
      {
        paragraphs: [
          "EXIF e metadata ascunsă în JPEG, PNG sau HEIC: locație GPS, model telefon, orientare, uneori miniatură previzualizare. Rețelele sociale le elimină adesea, dar propriul site, newsletter sau atașament e-mail nu mereu.",
          "Înainte de a publica fotografii cu copii, interioare de casă sau documente pe birou, elimină EXIF cu un instrument dedicat — pe Toolando procesarea e pe server și fișierul nu merge într-un cloud AI extern.",
        ],
      },
      {
        title: "Ce rămâne după eliminarea EXIF",
        paragraphs: [
          "Pixelii imaginii rămân neschimbați. Se elimină doar metadata — rezoluția nu e afectată.",
          "După curățarea EXIF poți comprima fișierul sau adăuga filigran înainte de a publica un portofoliu.",
        ],
      },
    ],
  },
  "split-pdf-pages-guide": {
    ...guidesEn["split-pdf-pages-guide"],
    title: "Cum împarți un PDF în pagini separate online",
    description: "Când împarți PDF-uri, cum alegi intervale de pagini și ce faci cu rezultatul ZIP.",
    sections: [
      {
        paragraphs: [
          "Împărțirea unui PDF e frecventă după scanarea unui contract sau factură multipagină — poate trebuie să trimiți o singură pagină prin e-mail sau să atașezi un fragment în altă parte.",
          "Pe Toolando.tech poți exporta fiecare pagină separat sau specifica un interval (ex. 1-3,5). Rezultatul e un ZIP de fișiere PDF, fiecare păstrând calitatea vectorială sau de scan originală.",
        ],
      },
      {
        title: "Când împarți vs combini",
        paragraphs: [
          "Împarte — când destinatarul are nevoie doar de un fragment (pagină semnătură, atașament, copertă).",
          "Combină — când aduni scanări într-un singur fișier pentru arhivă sau trimitere.",
          "După împărțire, consideră numerotarea paginilor sau comprimarea scanărilor mari.",
        ],
      },
    ],
  },
  "spreadsheet-csv-json-guide": {
    ...guidesEn["spreadsheet-csv-json-guide"],
    title: "CSV, JSON și Excel — mutarea datelor între foi și API-uri",
    description: "Când alegi CSV vs JSON și cum eviți zecimale și codare stricate.",
    sections: [
      {
        paragraphs: [
          "CSV e text simplu — se deschide în Excel, Google Sheets și instrumente BI. JSON gestionează structuri imbricate (API-uri, configurații). XLSX adaugă tipuri de celule și foi multiple.",
          "Flux tipic: export API ca JSON → JSON în CSV → analiză în Excel. Invers: listă clienți CSV → JSON → API REST.",
        ],
      },
      {
        title: "Codare și Excel",
        paragraphs: [
          "Folosește CSV UTF-8 pentru caractere non-ASCII. Dacă Excel strică textul, importă prin Date → Din text și alege UTF-8.",
          "Delimitatorii CSV variază după locală (virgulă vs punct și virgulă). TSV (tab) e mai sigur când descrierile conțin virgule.",
        ],
      },
      {
        title: "Validare după conversie",
        paragraphs: [
          "Compară numărul de rânduri înainte și după.",
          "Pentru JSON verifică cheile și tipurile — o ghilimea lipsă strică tot fișierul.",
        ],
      },
    ],
  },
  "svg-vs-png-logos-and-icons": {
    ...guidesEn["svg-vs-png-logos-and-icons"],
    title: "SVG vs PNG — logo-uri și pictograme pentru web",
    description: "Vector vs raster: când livrezi SVG și când e suficient PNG @2x.",
    sections: [
      {
        paragraphs: [
          "SVG e grafică vectorială descrisă matematic — se scalează pe orice ecran fără pixelare. PNG e bitmap la rezoluție fixă; pe retina ai adesea nevoie de versiune 2×. Pentru site-uri, logo-urile și pictogramele simple ar trebui aproape mereu SVG (sau font de pictograme), dacă fișierul nu încorporează o fotografie.",
          "Convertorul SVG → PNG de pe Toolando.tech ajută când tipografia vrea PNG 300 DPI sau un sistem respinge SVG.",
        ],
      },
      {
        title: "Avantaje SVG",
        paragraphs: [
          "Un singur fișier pentru mobil și desktop — mai puțin CSS, fără srcset.",
          "Schimbare ușoară de culoare prin CSS fill pe pictograme simple.",
          "Scoruri Lighthouse mai bune decât bannere PNG grele.",
        ],
      },
      {
        title: "Când PNG în loc de SVG",
        paragraphs: [
          "Logo cu gradiente, umbre sau efecte exportate prost din vector.",
          "Miniaturi Open Graph / previzualizare social — platformele rasterizează oricum.",
          "Aplicații desktop fără motor SVG.",
          "Export PNG @2x (ex. 512×512) ca fallback în <img> lângă SVG inline.",
        ],
      },
    ],
  },
  "tiff-and-png-for-document-scans": {
    ...guidesEn["tiff-and-png-for-document-scans"],
    title: "Scanări documente — TIFF, PNG sau JPG",
    description: "Facturi și contracte: stocare fără pierderi, multipagină și când PDF e suficient.",
    sections: [
      {
        paragraphs: [
          "Scanarea unei facturi sau contract diferă de o fotografie de vacanță. Textul și ștampilele au nevoie de margini clare — JPG agresiv estompează literele. TIFF (adesea LZW fără pierderi) și PNG sunt mai sigure pentru arhivă. Pentru trimitere și OCR ajungi adesea oricum la PDF sau JPG calitate moderată.",
          "TIFF multipagină poate fi un singur fișier cu straturi multiple — nu orice viewer le gestionează; pentru birouri și clienți PDF multipagină e mai clar (combină PDF pe Toolando.tech).",
        ],
      },
      {
        title: "Flux recomandat",
        paragraphs: [
          "Scanner → PNG sau TIFF per pagină (300 DPI pentru tipar, 150 DPI pentru previzualizare).",
          "Corectează rotația/decuparea într-un editor.",
          "Combină paginile într-un PDF pentru livrare.",
          "JPG calitate 90 opțional doar dacă destinatarul nu acceptă PDF.",
        ],
      },
      {
        title: "Ce să eviți",
        paragraphs: [
          "JPG calitate 60 pe factură — sumele pot deveni ilizibile.",
          "Cicluri repetate TIFF → JPG → TIFF.",
          "Scanări color la 600 DPI „de precauție” — gigabytes fără beneficiu pentru text A4.",
        ],
      },
    ],
  },
  "toolando-editorial-standards": {
    ...guidesEn["toolando-editorial-standards"],
    title: "Standarde editoriale Toolando.tech — cum sunt scrise ghidurile",
    description: "Cum sunt produse articolele, testele convertorilor și enciclopedia formatelor — transparență pentru cititori și recenzori.",
    sections: [
      {
        paragraphs: [
          "Toolando.tech e construit singur de Szymon. Ghidurile nu sunt generate în masă sau copiate de pe Wikipedia — urmează teste reale de conversie.",
          "Fiecare articol are date de publicare și actualizare. Când cerințele platformelor sau bibliotecile se schimbă, revizuiesc textul.",
        ],
      },
      {
        title: "Ce testez",
        paragraphs: [
          "Convertori audio/video: timp, dimensiune rezultat, redare în VLC și pe telefon.",
          "Imagini: comparație vizuală înainte/după, transparență PNG, dimensiune WebP vs JPG.",
          "Documente: layout după PDF ↔ DOCX, codare în CSV/JSON.",
        ],
      },
      {
        title: "Ce nu promit",
        paragraphs: [
          "Fără „100% calitate” la conversie cu pierderi → cu pierderi.",
          "Fără descărcare video YouTube/TikTok al altora — doar operații legale pe fișierele tale.",
          "Reclame Google pot apărea, dar conținutul editorial e scris independent de advertiseri.",
        ],
      },
    ],
  },
  "video-compress-before-sharing": {
    ...guidesEn["video-compress-before-sharing"],
    title: "Micșorează video înainte de e-mail sau WhatsApp",
    description: "MP4, rezoluție, bitrate — limite practice de dimensiune și conversie de container.",
    sections: [
      {
        paragraphs: [
          "Înregistrările telefon în MOV/MKV pot avea sute de MB. Multe cutii poștale blochează atașamente >25 MB. Soluție: convertește în MP4 (H.264 + AAC) și coboară rezoluția dacă e nevoie.",
          "720p e adesea suficient pentru previzualizare pe telefon; păstrează 1080p pentru televizor.",
        ],
      },
      {
        title: "Pași înainte de trimitere",
        paragraphs: [
          "1) Convertește MOV/MKV → MP4. 2) Verifică dimensiunea. 3) Dacă încă prea mare — taie intro/outro inutile într-un editor video. 4) Folosește link cloud dacă >25 MB.",
        ],
      },
    ],
  },
  "video-social-media": {
    ...guidesEn["video-social-media"],
    title: "Video pentru rețele sociale — MP4, rezoluție și bitrate",
    description: "Cum pregătești video pentru Instagram, TikTok, YouTube: format MP4, H.264, rezoluție 1080p.",
    sections: [
      {
        paragraphs: [
          "Instagram, TikTok, YouTube și Facebook preferă MP4 cu video H.264 și audio AAC. Convertește MOV, AVI sau MKV în MP4 înainte de publicare pentru a evita erorile la upload.",
          "1080p (1920×1080) e suficient pentru majoritatea platformelor. Bitrate mai mare = calitate mai bună dar fișier mai mare. Vezi enciclopedia formatelor pentru detalii MP4, WebM și MOV.",
        ],
      },
    ],
  },
  "webp-avif-images": {
    ...guidesEn["webp-avif-images"],
    title: "WebP și AVIF — formate moderne de imagini pentru site-uri",
    description: "WebP și AVIF vs JPG/PNG: compresie, suport browser și optimizare PageSpeed.",
    sections: [
      {
        paragraphs: [
          "JPG și PNG domină webul de ani de zile, dar WebP produce fișiere cu 25–35% mai mici decât JPG la aceeași calitate vizuală. AVIF merge mai departe — fișierele pot fi jumătate din dimensiunea WebP.",
          "Toate browserele moderne suportă WebP. AVIF are suport puțin mai slab în versiuni vechi de Safari.",
        ],
      },
      {
        title: "Strategie de implementare",
        paragraphs: [
          "Convertește JPG → WebP pentru fotografii produse și bannere — accelerează încărcarea paginii.",
          "Păstrează JPG ca fallback pentru browsere vechi (tag HTML <picture>).",
          "Pentru logo-uri cu transparență: PNG → WebP în loc de JPG.",
        ],
      },
    ],
  },
  "when-not-to-convert-files": {
    ...guidesEn["when-not-to-convert-files"],
    title: "Când NU converti un fișier — 7 situații care strică calitatea",
    description: "Evită conversiile inutile: păstrează originalele, arhive fără pierderi și backup înainte de experimente.",
    sections: [
      {
        paragraphs: [
          "Convertorii online sunt comozi, dar nu orice operație ajută. Uneori păstrează originalul sau folosește arhive fără pierderi (ZIP, FLAC).",
          "Regulă: nu trece cu pierderi → fără pierderi așteptând minuni — MP3 → WAV nu restaurează datele pierdute.",
        ],
      },
      {
        title: "Lasă așa cum e",
        paragraphs: [
          "Ai deja PNG cu transparență — nu-l pune în JPG fără motiv.",
          "Proiecte design — păstrează surse stratificate (PSD, SVG); exportă JPG doar la final.",
          "WAV/FLAC studio — nu comprima în MP3 până la mixul final.",
          "PDF semnat digital — conversia poate invalida semnătura.",
        ],
      },
      {
        title: "Înainte să apeși Convertire",
        paragraphs: [
          "Păstrează o copie a originalului.",
          "Verifică dacă platforma țintă acceptă deja formatul sursă.",
          "Citește comparațiile de formate din enciclopedia Toolando ca să eviți un pas inutil.",
        ],
      },
    ],
  },
  "zip-7z-rar-when-to-use": {
    ...guidesEn["zip-7z-rar-when-to-use"],
    title: "ZIP, 7z și RAR — ce arhivă trimiți",
    description: "Dimensiune, compatibilitate și criptare — când ZIP e suficient și când ajută 7z sau RAR.",
    sections: [
      {
        paragraphs: [
          "O arhivă împachetează multe fișiere într-unul — practic pentru e-mail, cloud și backup de foldere. ZIP e standardul universal: se deschide pe Windows, macOS și Linux fără software extra. 7z produce de obicei rezultat mai mic, dar destinatarul poate avea nevoie de 7-Zip. RAR apare în fluxuri vechi; crearea RAR online are limite de licență — convertești mai des RAR → ZIP decât invers.",
        ],
      },
      {
        title: "Când ZIP",
        paragraphs: [
          "Trimitere la clienți sau instituții — cel mai mic risc „nu se deschide”.",
          "Arhivare cod, documente birou, set de fotografii JPG.",
          "Sisteme care acceptă doar upload .zip.",
        ],
      },
      {
        title: "Când 7z",
        paragraphs: [
          "Foldere mari de jocuri, proiecte video, backup înainte de disc extern — fișier mai mic = upload mai rapid.",
          "Când destinatarul e tehnic și are 7-Zip.",
          "Conversia ZIP → 7z are sens o singură dată — nu re-împacheta aceleași date în cerc.",
        ],
      },
      {
        title: "Securitate",
        paragraphs: [
          "Parola pe arhivă oprește deschiderea accidentală, dar nu înlocuiește criptarea end-to-end pentru documente sensibile.",
          "Nu despacheta arhive din surse necunoscute fără scan antivirus.",
          "Toolando procesează arhivele doar pe durata conversiei containerului — conținutul trebuie să fie legal și al tău.",
        ],
      },
    ],
  },
}
