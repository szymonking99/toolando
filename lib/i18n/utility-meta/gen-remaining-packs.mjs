/**
 * Generates remaining locale pack files (pt, nl, sv, no, da, fi, cs, ro, hu, el, tr, ru, ar, zh, ja, ko, hi, id).
 * Run: node lib/i18n/utility-meta/gen-remaining-packs.mjs
 */
import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { registerPart2 } from "./gen-packs-part2.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const packsDir = join(__dirname, "packs");
mkdirSync(packsDir, { recursive: true });

const TOOL_IDS = [
  "przelicznik-walut",
  "kalkulator-dat",
  "strefy-czasowe",
  "przelicznik-jednostek",
  "kalkulator-vat",
  "kalkulator-wieku",
  "generator-hasel",
  "licznik-znakow",
  "generator-qr",
  "kalkulator-bitrate",
  "konwerter-kolorow",
  "base64",
  "unix-timestamp",
  "generator-uuid",
  "generator-hash",
  "json-formatter",
  "diff-tekstu",
  "konwerter-wielkosci-liter",
  "usun-duplikaty-linii",
  "dekoder-jwt",
  "walidator-nip-pesel",
  "kalkulator-kredytu",
  "markdown-preview",
  "sila-hasla",
  "konwerter-napisow",
  "generator-nazw-plikow",
  "walidator-iban",
  "kalkulator-b2b",
];

/** @type {Record<string, Record<string, { cat: string; name: string; desc: string; steps: string[]; faq: { q: string; a: string }[] }>>} */
const ALL = {};

function T(cat, name, desc, steps, faq = []) {
  return { cat, name, desc, steps, faq };
}

function locale(code, tools) {
  if (tools.length !== 28) throw new Error(`${code}: expected 28 tools, got ${tools.length}`);
  ALL[code] = Object.fromEntries(TOOL_IDS.map((id, i) => [id, tools[i]]));
}

// PORTUGUESE
locale("pt", [
  T("finance", "Conversor de moedas", "Converta moedas online com taxas de referência do BCE. PLN, EUR, USD e dezenas de outros pares — sem registo.", ["Introduza um montante e a moeda de origem.", "Escolha a moeda de destino.", "Consulte o resultado e a taxa do dia."], [{ q: "De onde vêm as taxas?", a: "Taxas de referência do Banco Central Europeu via API Frankfurter, atualizadas em dias úteis." }, { q: "As taxas são em tempo real?", a: "São taxas de referência do BCE, não cotações bancárias ou de casas de câmbio." }]),
  T("time", "Calculadora de datas", "Calcule os dias entre duas datas, dias úteis e o dia da semana — útil para contratos e prazos.", ["Escolha as datas de início e fim.", "Veja a diferença em dias e semanas.", "Opcionalmente conte apenas dias úteis."], [{ q: "Os feriados são excluídos?", a: "Por predefinição excluímos sábados e domingos. Os feriados dependem do país." }]),
  T("time", "Diferença de fusos horários", "Compare horas locais entre cidades, veja a diferença horária e localize os lugares num mapa simples.", ["Escolha as cidades de origem e destino.", "Compare as horas locais atuais.", "Veja o desvio e os marcadores no mapa."], [{ q: "Consideram o horário de verão?", a: "Sim — usamos zonas IANA (ex. Europe/Warsaw) que aplicam o DST automaticamente." }]),
  T("units", "Conversor de unidades", "Converta comprimento, massa, temperatura e volume: cm↔pol., kg↔lb, °C↔°F e mais.", ["Escolha uma categoria de unidades.", "Introduza um valor e as unidades.", "Obtenha o resultado instantaneamente."], [{ q: "As conversões são exatas?", a: "Sim — fatores SI padrão. A temperatura usa fórmulas próprias, não multiplicação simples." }]),
  T("finance", "Calculadora de IVA e percentagens", "Adicione ou remova IVA (23%, 8%, 5%), calcule líquido/bruto e percentagens simples de um montante.", ["Introduza um montante líquido ou bruto.", "Escolha uma taxa de IVA ou percentagem personalizada.", "Veja o detalhe líquido, IVA e bruto."], [{ q: "Que taxas de IVA existem na Polónia?", a: "Padrão 23%, reduzidas 8% e 5%. Também pode introduzir uma taxa personalizada." }]),
  T("time", "Calculadora de idade e contagem decrescente", "Calcule a idade exata em anos, meses e dias — ou quantos dias faltam até uma data.", ["Introduza uma data de nascimento ou data alvo.", "Veja a idade ou a contagem decrescente.", "Verifique também o próximo aniversário."], [{ q: "Como é calculada a idade?", a: "Da data de nascimento até hoje, contando anos, meses e dias — não apenas anos de calendário." }]),
  T("dev", "Gerador de palavras-passe", "Gere uma palavra-passe forte localmente no navegador. Defina comprimento e conjuntos de caracteres — nada é enviado para o servidor.", ["Defina comprimento e opções de caracteres.", "Clique em Gerar.", "Copie com um clique."], [{ q: "A palavra-passe é enviada?", a: "Não — a geração acontece inteiramente no seu navegador." }]),
  T("text", "Contador de caracteres e palavras", "Conte caracteres, palavras, frases e parágrafos — útil para SEO, redes sociais e limites de formulários.", ["Cole ou escreva texto.", "Veja estatísticas em tempo real.", "Verifique o comprimento sem espaços."], [{ q: "Como são contadas as palavras?", a: "Palavras são sequências separadas por espaços ou quebras de linha." }]),
  T("dev", "Gerador de códigos QR", "Crie um código QR a partir de um link ou texto e descarregue como PNG. Funciona localmente no navegador.", ["Introduza texto ou URL.", "Gere a pré-visualização QR.", "Descarregue uma imagem PNG."], [{ q: "O conteúdo QR é enviado?", a: "Não — o código é criado localmente. Não armazenamos o conteúdo." }]),
  T("media", "Calculadora de tamanho de ficheiro e bitrate", "Estime o tamanho de um ficheiro áudio/vídeo com bitrate e duração dados — ou o bitrate que cabe num limite de MB.", ["Escolha tamanho a partir de bitrate ou bitrate a partir de limite.", "Introduza duração e valores.", "Leia o resultado em MB / kbps."], [{ q: "Inclui o contentor?", a: "Estima o fluxo bruto. Contentores e faixas extra acrescentam normalmente alguns percentuais." }]),
  T("dev", "Conversor de cores HEX RGB HSL", "Converta cores entre HEX, RGB e HSL e verifique o contraste WCAG face a um fundo.", ["Introduza uma cor em qualquer formato.", "Veja equivalentes HEX/RGB/HSL.", "Verifique o contraste face a um fundo."], [{ q: "O que significam AA / AAA?", a: "Níveis de acessibilidade WCAG para contraste de texto face a um fundo." }]),
  T("dev", "Base64 codificar / descodificar", "Codifique texto para Base64 ou descodifique Base64. Localmente, sem enviar dados.", ["Cole texto ou Base64.", "Escolha Codificar ou Descodificar.", "Copie o resultado."], [{ q: "Suporta UTF-8?", a: "Sim — caracteres Unicode são suportados." }]),
  T("dev", "Timestamp Unix ↔ data", "Converta um timestamp Unix (segundos/ms) em data e vice-versa. Útil para logs e APIs.", ["Cole um timestamp ou escolha uma data.", "Veja resultados ISO e locais.", "Copie o valor."], [{ q: "Segundos ou milissegundos?", a: "Detetamos automaticamente pela extensão. Também pode forçar a unidade." }]),
  T("dev", "Gerador UUID", "Gere UUID v4 (aleatório) com um clique. Crie vários de uma vez se precisar.", ["Defina quantos UUID.", "Clique em Gerar.", "Copie a lista."], [{ q: "Que versão de UUID?", a: "UUID v4 — aleatório, RFC 4122, gerado no navegador." }]),
  T("dev", "Hash SHA / MD5", "Calcule SHA-1, SHA-256, SHA-512 ou MD5 de um texto. Localmente via Web Crypto.", ["Cole texto.", "Escolha um algoritmo.", "Copie o hash hex."], [{ q: "MD5 é seguro?", a: "MD5 não serve para palavras-passe. Use SHA-256+ para segurança; MD5 apenas para checksums." }]),
  T("dev", "Formatador JSON", "Formate e minifique JSON no navegador — sem envio para o servidor.", ["Cole JSON.", "Clique em Formatar ou Minificar.", "Copie o resultado."], [{ q: "Os dados são enviados?", a: "Não — o processamento acontece localmente no navegador." }]),
  T("text", "Diff de texto", "Compare dois excertos de texto linha a linha e destaque as diferenças.", ["Cole o texto A e B.", "Revise as diferenças destacadas."], [{ q: "É um diff completo?", a: "É uma comparação linha a linha — ideal para excertos curtos e listas." }]),
  T("text", "Conversor de maiúsculas/minúsculas", "Converta texto para maiúsculas, minúsculas, Title Case ou sentence case.", ["Cole texto.", "Escolha um modo.", "Copie o resultado."], []),
  T("text", "Remover linhas duplicadas", "Remova linhas repetidas de listas de e-mail, SKU ou etiquetas.", ["Cole uma lista.", "Defina opções.", "Copie a lista limpa."], []),
  T("dev", "Descodificador JWT", "Leia o cabeçalho e payload de um JWT sem verificar a assinatura.", ["Cole um token.", "Inspecione cabeçalho e payload."], [{ q: "Verifica a assinatura?", a: "Não — apenas descodifica Base64URL do token." }]),
  T("dev", "Validador NIP / PESEL / REGON", "Valide números fiscais e de identificação polacos segundo regras de checksum.", ["Introduza um número.", "Veja o resultado da validação."], [{ q: "Consulta o registo GUS?", a: "Não — apenas checksum e comprimento." }]),
  T("finance", "Calculadora de empréstimo", "Calcule prestações de anuidade, reembolso total e custo de juros.", ["Introduza montante, taxa e prazo.", "Leia a prestação mensal."], [{ q: "Inclui comissões bancárias?", a: "Simulação simplificada sem comissões ou seguros." }]),
  T("text", "Pré-visualização Markdown", "Escreva Markdown e veja uma pré-visualização HTML em tempo real no navegador.", ["Escreva Markdown.", "A pré-visualização atualiza-se automaticamente."], []),
  T("dev", "Força da palavra-passe", "Avalie a força de uma palavra-passe por comprimento, variedade de caracteres e padrões comuns.", ["Introduza uma palavra-passe.", "Veja a pontuação e sugestões."], [{ q: "A palavra-passe é enviada?", a: "Não — a avaliação acontece localmente no navegador." }]),
  T("media", "Conversor de legendas SRT / VTT", "Converta legendas entre formatos SRT e WebVTT.", ["Cole as legendas.", "Escolha direção ou auto.", "Copie o resultado."], []),
  T("text", "Renomeador de ficheiros em lote", "Renomeie ficheiros em massa com um padrão {name}, {ext}, {index}.", ["Cole uma lista de ficheiros.", "Defina um padrão.", "Copie os novos nomes."], []),
  T("dev", "Validador IBAN", "Valide checksum IBAN (mod 97) e comprimento específico do país.", ["Cole um IBAN.", "Veja saída formatada e validação."], [{ q: "Verifica a conta bancária?", a: "Não — apenas formato e checksum." }]),
  T("finance", "Calculadora B2B vs emprego", "Compare salário líquido de emprego com rendimentos de fatura B2B (imposto fixo ou linear).", ["Introduza bruto de emprego e rendimentos B2B.", "Escolha a forma fiscal.", "Compare os resultados."], [{ q: "Isto é aconselhamento fiscal?", a: "Não — simulação simplificada para discutir com um contabilista." }]),
]);

// DUTCH
locale("nl", [
  T("finance", "Valutaconverter", "Converteer valuta online met actuele ECB-referentiekoersen. PLN, EUR, USD en tientallen andere paren — zonder registratie.", ["Voer een bedrag en bronvaluta in.", "Kies de doelvaluta.", "Bekijk het resultaat en de dagkoers."], [{ q: "Waar komen de koersen vandaan?", a: "Referentiekoersen van de Europese Centrale Bank via de Frankfurter API, bijgewerkt op werkdagen." }, { q: "Zijn de koersen realtime?", a: "Dit zijn ECB-referentiekoersen, geen bank- of wisselkantoorkoersen." }]),
  T("time", "Datumcalculator", "Bereken dagen tussen twee datums, werkdagen en de weekdag — handig voor contracten en deadlines.", ["Kies start- en einddatum.", "Bekijk het verschil in dagen en weken.", "Tel optioneel alleen werkdagen."], [{ q: "Worden feestdagen uitgesloten?", a: "Standaard sluiten we zaterdag en zondag uit. Feestdagen hangen af van het land." }]),
  T("time", "Tijdzonesverschil", "Vergelijk lokale tijden tussen steden, zie het uurverschil en vind locaties op een eenvoudige kaart.", ["Kies bron- en doelstad.", "Vergelijk de huidige lokale tijden.", "Bekijk het verschil en kaartmarkeringen."], [{ q: "Houden jullie rekening met zomertijd?", a: "Ja — we gebruiken IANA-zones (bijv. Europe/Warsaw) die DST automatisch toepassen." }]),
  T("units", "Eenhedenconverter", "Converteer lengte, massa, temperatuur en volume: cm↔inch, kg↔lb, °C↔°F en meer.", ["Kies een eenheidscategorie.", "Voer een waarde en eenheden in.", "Krijg direct het resultaat."], [{ q: "Zijn conversies nauwkeurig?", a: "Ja — standaard SI-factoren. Temperatuur gebruikt eigen formules, geen simpele vermenigvuldiging." }]),
  T("finance", "BTW- en percentagecalculator", "Voeg BTW toe of trek af (23%, 8%, 5%), bereken netto/bruto en eenvoudige percentages van een bedrag.", ["Voer een netto- of brutobedrag in.", "Kies een BTW-tarief of aangepast percentage.", "Bekijk de uitsplitsing netto, BTW en bruto."], [{ q: "Welke BTW-tarieven zijn er in Polen?", a: "Standaard 23%, verlaagd 8% en 5%. U kunt ook een eigen tarief invoeren." }]),
  T("time", "Leeftijds- en aftelcalculator", "Bereken exacte leeftijd in jaren, maanden en dagen — of hoeveel dagen tot een datum.", ["Voer geboortedatum of doeldatum in.", "Bekijk leeftijd of aftelling.", "Controleer ook de volgende verjaardag."], [{ q: "Hoe wordt leeftijd berekend?", a: "Van geboortedatum tot vandaag, met jaren, maanden en dagen — niet alleen kalenderjaren." }]),
  T("dev", "Wachtwoordgenerator", "Genereer een sterk wachtwoord lokaal in uw browser. Stel lengte en tekensets in — niets wordt naar een server gestuurd.", ["Stel lengte en tekenopties in.", "Klik op Genereren.", "Kopieer met één klik."], [{ q: "Wordt het wachtwoord geüpload?", a: "Nee — generatie gebeurt volledig in uw browser." }]),
  T("text", "Teken- en woordenteller", "Tel tekens, woorden, zinnen en alinea's — handig voor SEO, social media en formulierlimieten.", ["Plak of typ tekst.", "Bekijk live statistieken.", "Controleer lengte zonder spaties."], [{ q: "Hoe worden woorden geteld?", a: "Woorden zijn reeksen gescheiden door spaties of regels." }]),
  T("dev", "QR-codegenerator", "Maak een QR-code van een link of tekst en download als PNG. Werkt lokaal in de browser.", ["Voer tekst of URL in.", "Genereer QR-voorbeeld.", "Download een PNG-afbeelding."], [{ q: "Wordt QR-inhoud geüpload?", a: "Nee — de code wordt lokaal gemaakt. We slaan de inhoud niet op." }]),
  T("media", "Bestandsgrootte- en bitratecalculator", "Schat hoe groot een audio-/videobestand wordt bij gegeven bitrate en duur — of welke bitrate in een MB-limiet past.", ["Kies grootte uit bitrate of bitrate uit limiet.", "Voer duur en waarden in.", "Lees resultaat in MB / kbps."], [{ q: "Is de container inbegrepen?", a: "Het schat de ruwe stream. Containers en extra tracks voegen meestal enkele procenten toe." }]),
  T("dev", "HEX RGB HSL kleurconverter", "Converteer kleuren tussen HEX, RGB en HSL en controleer WCAG-contrast tegen een achtergrond.", ["Voer een kleur in elk formaat in.", "Bekijk HEX/RGB/HSL-equivalenten.", "Controleer contrast tegen een achtergrond."], [{ q: "Wat betekenen AA / AAA?", a: "WCAG-toegankelijkheidsniveaus voor tekstcontrast tegen een achtergrond." }]),
  T("dev", "Base64 encoderen / decoderen", "Codeer tekst naar Base64 of decodeer Base64 terug. Lokaal, zonder gegevens te uploaden.", ["Plak tekst of Base64.", "Kies Encoderen of Decoderen.", "Kopieer het resultaat."], [{ q: "Ondersteunt het UTF-8?", a: "Ja — Unicode-tekens worden ondersteund." }]),
  T("dev", "Unix-timestamp ↔ datum", "Converteer een Unix-timestamp (seconden/ms) naar datum en terug. Handig voor logs en API's.", ["Plak een timestamp of kies een datum.", "Bekijk ISO- en lokale resultaten.", "Kopieer de waarde."], [{ q: "Seconden of milliseconden?", a: "We detecteren automatisch op lengte. U kunt de eenheid ook forceren." }]),
  T("dev", "UUID-generator", "Genereer UUID v4 (willekeurig) met één klik. Maak er desgewenst meerdere tegelijk.", ["Stel aantal UUID's in.", "Klik op Genereren.", "Kopieer de lijst."], [{ q: "Welke UUID-versie?", a: "UUID v4 — willekeurig, RFC 4122, gegenereerd in de browser." }]),
  T("dev", "SHA / MD5-hash", "Bereken SHA-1, SHA-256, SHA-512 of MD5 van tekst. Lokaal via Web Crypto.", ["Plak tekst.", "Kies een algoritme.", "Kopieer de hex-hash."], [{ q: "Is MD5 veilig?", a: "MD5 is niet voor wachtwoorden. Gebruik SHA-256+ voor beveiliging; MD5 alleen voor checksums." }]),
  T("dev", "JSON-formatter", "Formatteer en minificeer JSON in de browser — geen server-upload.", ["Plak JSON.", "Klik op Formatteren of Minificeren.", "Kopieer het resultaat."], [{ q: "Worden gegevens geüpload?", a: "Nee — verwerking gebeurt lokaal in uw browser." }]),
  T("text", "Tekst-diff", "Vergelijk twee tekstfragmenten regel voor regel en markeer verschillen.", ["Plak tekst A en B.", "Bekijk gemarkeerde verschillen."], [{ q: "Is dit een volledige diff?", a: "Het is een regel-voor-regel vergelijking — ideaal voor korte fragmenten en lijsten." }]),
  T("text", "Hoofdletterconverter", "Converteer tekst naar hoofdletters, kleine letters, Title Case of sentence case.", ["Plak tekst.", "Kies een modus.", "Kopieer het resultaat."], []),
  T("text", "Dubbele regels verwijderen", "Verwijder herhaalde regels uit e-maillijsten, SKU's of tags.", ["Plak een lijst.", "Stel opties in.", "Kopieer de schone lijst."], []),
  T("dev", "JWT-decoder", "Lees de header en payload van een JWT zonder de handtekening te verifiëren.", ["Plak een token.", "Inspecteer header en payload."], [{ q: "Verifieert het de handtekening?", a: "Nee — het decodeert alleen Base64URL van het token." }]),
  T("dev", "NIP / PESEL / REGON-validator", "Valideer Poolse belasting- en ID-nummers volgens checksumregels.", ["Voer een nummer in.", "Bekijk het validatieresultaat."], [{ q: "Raadpleegt het GUS-register?", a: "Nee — alleen checksum en lengte." }]),
  T("finance", "Leningcalculator", "Bereken annuïteit, totale terugbetaling en rentekosten.", ["Voer bedrag, rente en looptijd in.", "Lees de maandelijkse betaling."], [{ q: "Zijn bankkosten inbegrepen?", a: "Dit is een vereenvoudigde simulatie zonder kosten of verzekeringen." }]),
  T("text", "Markdown-voorbeeld", "Schrijf Markdown en bekijk een live HTML-voorbeeld in de browser.", ["Typ Markdown.", "Voorbeeld wordt automatisch bijgewerkt."], []),
  T("dev", "Wachtwoordsterkte", "Beoordeel wachtwoordsterkte op lengte, tekenvariëteit en veelvoorkomende patronen.", ["Voer een wachtwoord in.", "Bekijk score en tips."], [{ q: "Wordt het wachtwoord geüpload?", a: "Nee — beoordeling gebeurt lokaal in uw browser." }]),
  T("media", "SRT / VTT ondertitelconverter", "Converteer ondertitels tussen SRT- en WebVTT-formaten.", ["Plak ondertitels.", "Kies richting of auto.", "Kopieer het resultaat."], []),
  T("text", "Batch bestandshernoemer", "Hernoem bestanden in bulk met een patroon {name}, {ext}, {index}.", ["Plak een bestandslijst.", "Stel een patroon in.", "Kopieer nieuwe namen."], []),
  T("dev", "IBAN-validator", "Valideer IBAN-checksum (mod 97) en landspecifieke lengte.", ["Plak een IBAN.", "Bekijk geformatteerde output en validatie."], [{ q: "Verifieert het de bankrekening?", a: "Nee — alleen formaat en checksum." }]),
  T("finance", "B2B vs dienstverband calculator", "Vergelijk nettoloon uit dienstverband met B2B-factuurinkomen (forfaitaire of lineaire belasting).", ["Voer brutoloon en B2B-omzet in.", "Kies belastingvorm.", "Vergelijk resultaten."], [{ q: "Is dit fiscaal advies?", a: "Nee — vereenvoudigde simulatie om te bespreken met een accountant." }]),
]);

// SWEDISH
locale("sv", [
  T("finance", "Valutakonverterare", "Konvertera valutor online med aktuella ECB-referenskurser. PLN, EUR, USD och dussintals andra par — utan registrering.", ["Ange belopp och källvaluta.", "Välj målvaluta.", "Läs resultat och dagens kurs."], [{ q: "Var kommer kurserna ifrån?", a: "Referenskurser från Europeiska centralbanken via Frankfurter API, uppdaterade på vardagar." }, { q: "Är kurserna i realtid?", a: "Det är ECB-referenskurser, inte bank- eller växlingskurser." }]),
  T("time", "Datumkalkylator", "Beräkna dagar mellan två datum, arbetsdagar och veckodag — användbart för avtal och deadlines.", ["Välj start- och slutdatum.", "Se skillnad i dagar och veckor.", "Räkna valfritt bara vardagar."], [{ q: "Exkluderas helgdagar?", a: "Som standard exkluderar vi lördag och söndag. Helgdagar beror på landet." }]),
  T("time", "Tidszonsskillnad", "Jämför lokala tider mellan städer, se timskillnad och hitta platser på en enkel karta.", ["Välj käll- och målstad.", "Jämför aktuella lokala tider.", "Se offset och kartmarkörer."], [{ q: "Hanterar ni sommartid?", a: "Ja — vi använder IANA-zoner (t.ex. Europe/Warsaw) som tillämpar DST automatiskt." }]),
  T("units", "Enhetsomvandlare", "Konvertera längd, massa, temperatur och volym: cm↔tum, kg↔lb, °C↔°F med mera.", ["Välj en enhetskategori.", "Ange värde och enheter.", "Få resultatet direkt."], [{ q: "Är omvandlingarna exakta?", a: "Ja — standard SI-faktorer. Temperatur använder egna formler, inte enkel multiplikation." }]),
  T("finance", "Moms- och procenträknare", "Lägg till eller dra av moms (23%, 8%, 5%), beräkna netto/brutto och enkla procent av ett belopp.", ["Ange netto- eller bruttobelopp.", "Välj momssats eller egen procent.", "Se uppdelning netto, moms och brutto."], [{ q: "Vilka momssatser finns i Polen?", a: "Standard 23%, reducerade 8% och 5%. Du kan också ange egen sats." }]),
  T("time", "Ålder- och nedräkningskalkylator", "Beräkna exakt ålder i år, månader och dagar — eller hur många dagar kvar till ett datum.", ["Ange födelsedatum eller måldatum.", "Se ålder eller nedräkning.", "Kontrollera även nästa födelsedag."], [{ q: "Hur beräknas ålder?", a: "Från födelsedatum till idag, med år, månader och dagar — inte bara kalenderår." }]),
  T("dev", "Lösenordsgenerator", "Generera ett starkt lösenord lokalt i webbläsaren. Ställ in längd och teckenuppsättningar — inget skickas till server.", ["Ställ in längd och teckenalternativ.", "Klicka Generera.", "Kopiera med ett klick."], [{ q: "Laddas lösenordet upp?", a: "Nej — generering sker helt i din webbläsare." }]),
  T("text", "Tecken- och ordrräknare", "Räkna tecken, ord, meningar och stycken — praktiskt för SEO, sociala medier och formulärgränser.", ["Klistra in eller skriv text.", "Se live-statistik.", "Kontrollera längd utan mellanslag."], [{ q: "Hur räknas ord?", a: "Ord är sekvenser separerade av mellanslag eller radbrytningar." }]),
  T("dev", "QR-kodgenerator", "Skapa en QR-kod från länk eller text och ladda ner som PNG. Körs lokalt i webbläsaren.", ["Ange text eller URL.", "Generera QR-förhandsvisning.", "Ladda ner PNG-bild."], [{ q: "Laddas QR-innehåll upp?", a: "Nej — koden skapas lokalt. Vi lagrar inte innehållet." }]),
  T("media", "Filstorlek- och bitratekalkylator", "Uppskatta hur stor en ljud-/videofil blir vid given bitrate och varaktighet — eller vilken bitrate som ryms i en MB-gräns.", ["Välj storlek från bitrate eller bitrate från gräns.", "Ange varaktighet och värden.", "Läs resultat i MB / kbps."], [{ q: "Ingår containern?", a: "Det uppskattar råströmmen. Containrar och extra spår lägger vanligtvis till några procent." }]),
  T("dev", "HEX RGB HSL färgomvandlare", "Konvertera färger mellan HEX, RGB och HSL och kontrollera WCAG-kontrast mot bakgrund.", ["Ange färg i valfritt format.", "Se HEX/RGB/HSL-motsvarigheter.", "Kontrollera kontrast mot bakgrund."], [{ q: "Vad betyder AA / AAA?", a: "WCAG-tillgänglighetsnivåer för textkontrast mot bakgrund." }]),
  T("dev", "Base64 koda / avkoda", "Koda text till Base64 eller avkoda Base64. Lokalt, utan att ladda upp data.", ["Klistra in text eller Base64.", "Välj Koda eller Avkoda.", "Kopiera resultatet."], [{ q: "Stöder det UTF-8?", a: "Ja — Unicode-tecken stöds." }]),
  T("dev", "Unix-tidsstämpel ↔ datum", "Konvertera Unix-tidsstämpel (sekunder/ms) till datum och tillbaka. Användbart för loggar och API:er.", ["Klistra in tidsstämpel eller välj datum.", "Se ISO- och lokala resultat.", "Kopiera värdet."], [{ q: "Sekunder eller millisekunder?", a: "Vi detekterar automatiskt efter längd. Du kan också tvinga enheten." }]),
  T("dev", "UUID-generator", "Generera UUID v4 (slumpmässig) med ett klick. Skapa flera samtidigt vid behov.", ["Ställ in antal UUID.", "Klicka Generera.", "Kopiera listan."], [{ q: "Vilken UUID-version?", a: "UUID v4 — slumpmässig, RFC 4122, genererad i webbläsaren." }]),
  T("dev", "SHA / MD5-hash", "Beräkna SHA-1, SHA-256, SHA-512 eller MD5 av text. Lokalt via Web Crypto.", ["Klistra in text.", "Välj algoritm.", "Kopiera hex-hash."], [{ q: "Är MD5 säkert?", a: "MD5 är inte för lösenord. Använd SHA-256+ för säkerhet; MD5 endast för checksums." }]),
  T("dev", "JSON-formaterare", "Formatera och minifiera JSON i webbläsaren — ingen serveruppladdning.", ["Klistra in JSON.", "Klicka Formatera eller Minifiera.", "Kopiera resultatet."], [{ q: "Laddas data upp?", a: "Nej — bearbetning sker lokalt i din webbläsare." }]),
  T("text", "Text-diff", "Jämför två textutdrag rad för rad och markera skillnader.", ["Klistra in text A och B.", "Granska markerade skillnader."], [{ q: "Är detta en fullständig diff?", a: "Det är en rad-för-rad-jämförelse — idealisk för korta utdrag och listor." }]),
  T("text", "Versalconverter", "Konvertera text till versaler, gemener, Title Case eller sentence case.", ["Klistra in text.", "Välj läge.", "Kopiera resultatet."], []),
  T("text", "Ta bort dubblettrader", "Ta bort upprepade rader från e-postlistor, SKU:er eller taggar.", ["Klistra in lista.", "Ställ in alternativ.", "Kopiera renad lista."], []),
  T("dev", "JWT-dekoder", "Läs header och payload för en JWT utan att verifiera signaturen.", ["Klistra in token.", "Inspektera header och payload."], [{ q: "Verifierar den signaturen?", a: "Nej — den avkodar bara Base64URL för token." }]),
  T("dev", "NIP / PESEL / REGON-validator", "Validera polska skatte- och ID-nummer enligt checksumregler.", ["Ange nummer.", "Se valideringsresultat."], [{ q: "Frågar den GUS?", a: "Nej — endast checksum och längd." }]),
  T("finance", "Lånekalkylator", "Beräkna annuitet, total återbetalning och räntekostnad.", ["Ange belopp, ränta och löptid.", "Läs månadsbetalning."], [{ q: "Ingår bankavgifter?", a: "Detta är en förenklad simulering utan avgifter eller försäkringar." }]),
  T("text", "Markdown-förhandsvisning", "Skriv Markdown och se live HTML-förhandsvisning i webbläsaren.", ["Skriv Markdown.", "Förhandsvisning uppdateras automatiskt."], []),
  T("dev", "Lösenordsstyrka", "Bedöm lösenordsstyrka efter längd, teckenvariation och vanliga mönster.", ["Ange lösenord.", "Se poäng och tips."], [{ q: "Laddas lösenordet upp?", a: "Nej — bedömning sker lokalt i din webbläsare." }]),
  T("media", "SRT / VTT undertextkonverterare", "Konvertera undertexter mellan SRT- och WebVTT-format.", ["Klistra in undertexter.", "Välj riktning eller auto.", "Kopiera resultatet."], []),
  T("text", "Batch filnamnsbytare", "Byt namn på filer i bulk med mönster {name}, {ext}, {index}.", ["Klistra in fillista.", "Ställ in mönster.", "Kopiera nya namn."], []),
  T("dev", "IBAN-validator", "Validera IBAN-checksum (mod 97) och landsspecifik längd.", ["Klistra in IBAN.", "Se formaterad output och validering."], [{ q: "Verifierar den bankkontot?", a: "Nej — endast format och checksum." }]),
  T("finance", "B2B vs anställningskalkylator", "Jämför nettolön från anställning med B2B-fakturainkomst (schablon- eller linjär skatt).", ["Ange brutolön och B2B-intäkter.", "Välj skatteform.", "Jämför resultat."], [{ q: "Är detta skatterådgivning?", a: "Nej — förenklad simulering för diskussion med revisor." }]),
]);

registerPart2(locale, T);

// Write pack files
for (const [code, tools] of Object.entries(ALL)) {
  writeFileSync(join(packsDir, `${code}.mjs`), `export const ${code}Tools = ${JSON.stringify(tools, null, 2)};\n`);
  console.log("Wrote", code);
}

console.log("Done:", Object.keys(ALL).length, "locales");
