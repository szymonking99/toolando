import type { GuideArticle } from "../types"
import type { GuideSlug } from "../slugs"
import { guidesEn } from "../guides-en"

export const guidesPt: Record<GuideSlug, GuideArticle> = {
  "choose-audio-bitrate": {
    ...guidesEn["choose-audio-bitrate"],
    title: "Que bitrate MP3 ou AAC deve escolher?",
    description: "128 vs 192 vs 320 kbps — escolhas práticas para podcasts, música e vídeo sem desperdiçar espaço em disco.",
    sections: [
      {
        paragraphs: [
          "Bitrate é a quantidade de dados por segundo de áudio. Bitrate mais alto significa normalmente melhor som, mas ficheiros maiores. Com MP3, a diferença entre 128 e 320 kbps é mais audível em bons altifalantes e música densa.",
          "Para voz (podcasts, entrevistas) 96–128 kbps mono chega muitas vezes. Para música em auriculares, 192–256 kbps estéreo é um bom compromisso. 320 kbps é o teto prático do MP3 — ir mais alto raramente ajuda porque o formato continua com perdas.",
        ],
      },
      {
        title: "MP3, AAC e Opus — comparação rápida",
        paragraphs: [
          "AAC (M4A) com o mesmo bitrate costuma superar o MP3 — por isso YouTube e Apple Music o usam.",
          "Opus destaca-se em VoIP e streaming com bitrates baixos (64–128 kbps).",
          "Para arquivo de estúdio mantenha WAV ou FLAC — um bitrate com perdas não restaura dados em falta.",
        ],
      },
      {
        title: "Erros comuns",
        paragraphs: [
          "Aumentar a qualidade de um MP3 de baixa qualidade para bitrate mais alto não melhora o som — só o tamanho do ficheiro cresce.",
          "Reencodificar a mesma faixa várias vezes (MP3 → AAC → MP3) degrada a qualidade a cada ronda.",
          "Em projetos de vídeo extraia áudio do seu próprio MP4 em vez de descarregar música de terceiros — direitos de autor importam.",
        ],
      },
    ],
  },
  "compress-images-without-quality-loss": {
    ...guidesEn["compress-images-without-quality-loss"],
    title: "Como comprimir imagens JPG e PNG sem perda de qualidade visível",
    description: "Quando usar o compressor, que nível de qualidade escolher e compressão vs conversão de formato.",
    sections: [
      {
        paragraphs: [
          "Comprimir uma imagem reduz o tamanho do ficheiro sem mudar o formato — continua com JPG ou PNG, só mais leve. Converter JPG → WebP muda o formato e é muitas vezes melhor para sites, mas fluxos de impressão podem exigir JPG.",
          "No Toolando.tech testei o compressor de imagens em fotos de produtos 2000×2000: com qualidade 80%, o tamanho caiu 40–60% sem artefactos visíveis no ecrã.",
        ],
      },
      {
        title: "Quando comprimir vs converter",
        paragraphs: [
          "Comprima quando o formato está OK (p. ex. loja exige JPG) mas o ficheiro é pesado demais para e-mail ou CMS.",
          "Converta para WebP/AVIF quando publica no seu site com alternativa <picture>.",
          "Nunca regrave o mesmo JPG muitas vezes — cada passagem adiciona artefactos.",
        ],
      },
      {
        title: "Cenários típicos",
        paragraphs: [
          "Anexo de e-mail: JPG qualidade ~75–85, largura máx. 1600 px.",
          "E-commerce: WebP com alternativa JPG; miniaturas 800 px.",
          "Capturas de ecrã de UI com texto: PNG ou WebP sem perdas — evite JPG agressivo.",
        ],
      },
    ],
  },
  "convert-video-to-gif-properly": {
    ...guidesEn["convert-video-to-gif-properly"],
    title: "Como fazer um bom GIF a partir de vídeo — resolução, FPS e duração",
    description: "MP4/MOV para GIF sem ficheiro gigante: limites práticos e alternativas.",
    sections: [
      {
        paragraphs: [
          "GIF não tem áudio e não usa H.264 — cada fotograma é bitmap completo (muitas vezes paleta de 256 cores). Por isso um clip de 10 segundos a 1080p como GIF pode pesar mais que o vídeo original. Objetivo: curto, pequeno, baixa resolução.",
          "Antes de MP4 → GIF corte o clip para 2–4 segundos num editor e use 10–15 FPS em vez de 30 — o GIF não recupera fluidez cinematográfica.",
        ],
      },
      {
        title: "Parâmetros iniciais",
        paragraphs: [
          "Largura máx. 480–640 px para memes e reações.",
          "Duração máx. 5 s — acima disso considere MP4 em loop.",
          "Fundos simples (ecrã verde) comprimem melhor que gradientes e ruído.",
        ],
      },
      {
        title: "Após conversão",
        paragraphs: [
          "Verifique o tamanho do ficheiro — GIFs acima de 5 MB raramente fazem sentido numa página.",
          "Se o GIF for grande demais, GIF → MP4 e incorporação <video> muitas vezes resolve.",
          "O Toolando processa o seu vídeo só durante a conversão — não aloja GIFs prontos publicamente.",
        ],
      },
    ],
  },
  "docx-pdf-workflow": {
    ...guidesEn["docx-pdf-workflow"],
    title: "DOCX → PDF para trabalho de escritório — quando e como converter",
    description: "Enviar CVs, faturas e contratos: porque o PDF supera o DOCX e como evitar tipos de letra partidos.",
    sections: [
      {
        paragraphs: [
          "DOCX serve para editar — ótimo quando o destinatário tem Word e precisa de alterar texto. PDF serve para leitura — layout, tipos de letra e margens ficam idênticos em Windows, Mac e telemóvel.",
          "Antes de enviar um CV, proposta ou contrato converta DOCX → PDF. Os destinatários não editam o conteúdo por acidente e evita tipos de letra substitutos que partem a sua identidade visual.",
        ],
      },
      {
        title: "Quando NÃO converter PDF → DOCX",
        paragraphs: [
          "Faturas digitalizadas e contratos assinados — mantenha PDF como arquivo; OCR é um passo separado.",
          "Layouts complexos de várias páginas (catálogos, brochuras) — a conversão para DOCX costuma partir a paginação.",
          "Se só precisa de um excerto de texto, copie do PDF em vez de converter o ficheiro inteiro.",
        ],
      },
      {
        title: "Segurança e privacidade",
        paragraphs: [
          "No Toolando.tech ficheiros DOCX e PDF são usados apenas para conversão e eliminados quando a tarefa termina.",
          "Para documentos sensíveis (IDs, números bancários) use HTTPS e não deixe cópias em drives na cloud pública sem encriptação.",
        ],
      },
    ],
  },
  "extract-audio-from-video": {
    ...guidesEn["extract-audio-from-video"],
    title: "Extrair áudio de vídeo — a alternativa legal",
    description: "Como extrair legalmente uma faixa de áudio do seu próprio ficheiro de vídeo (MP4, MOV, MKV).",
    sections: [
      {
        paragraphs: [
          "Por vezes tem um ficheiro de vídeo e só precisa do áudio. O Toolando.tech extrai áudio de MP4, MOV, AVI, MKV e guarda como MP3, WAV, FLAC ou AAC.",
          "Isto é legal no seu próprio ficheiro — ao contrário de descarregar música do YouTube ou TikTok, o que o Toolando.tech deliberadamente não oferece.",
        ],
      },
    ],
  },
  "extract-images-from-pdf-pages": {
    ...guidesEn["extract-images-from-pdf-pages"],
    title: "Como extrair imagens de páginas PDF (JPG, PNG, WebP)",
    description: "Apresentações, catálogos e digitalizações — quando exportar página como imagem faz sentido e que resolução.",
    sections: [
      {
        paragraphs: [
          "PDF é um contentor — dentro pode haver vetores, tipos de letra e bitmaps incorporados. PDF → JPG renderiza cada página como imagem raster. Não é o mesmo que extrair um logótipo incorporado isolado (isso exige editor PDF), mas para slides, cartazes e digitalizações funciona bem.",
          "Apresentação 16:9 exportada para PNG a 1920 px de largura fica nítida no ecrã; para impressão A4 aponte para ~2480×3508 px (300 DPI) se a ferramenta suportar alta resolução.",
        ],
      },
      {
        title: "JPG vs PNG vs WebP",
        paragraphs: [
          "Slide com foto de fundo → JPG ou WebP.",
          "Slide com gráficos e texto → PNG (tipo mais nítido).",
          "Miniatura para site → WebP com alternativa JPG após conversão adicional.",
        ],
      },
      {
        title: "PDFs multipágina",
        paragraphs: [
          "Exporte páginas individuais se só precisa dos slides 5 e 12.",
          "Para galeria de todas as páginas — converta o ficheiro inteiro e ordene por número no nome.",
          "Respeite direitos de autor — PDF alheio não é seu para publicar livremente.",
        ],
      },
    ],
  },
  "flac-music-archive-guide": {
    ...guidesEn["flac-music-archive-guide"],
    title: "FLAC como arquivo de música — quando compensa vs MP3",
    description: "FLAC sem perdas vs MP3 320 kbps: cópias de segurança, streaming em casa e leitores de carro.",
    sections: [
      {
        paragraphs: [
          "FLAC (Free Lossless Audio Codec) é compressão sem perdas — como ZIP para áudio. Ao descodificar obtém o mesmo sinal que WAV, mas o ficheiro ocupa cerca de metade do espaço. MP3 remove dados permanentemente; mesmo 320 kbps não é bit-idêntico a um rip de CD.",
          "Na prática: se compra música sem perdas ou faz rip dos seus discos, FLAC é um formato de arquivo sensato. No telemóvel com auriculares Bluetooth FLAC vs MP3 256 kbps é muitas vezes inaudível — converter para MP3 poupa gigabytes.",
        ],
      },
      {
        title: "Fluxo de arquivo",
        paragraphs: [
          "1) Master em FLAC (ou WAV) no NAS / backup na cloud.",
          "2) Cópias de trabalho MP3/AAC para telemóvel e carro.",
          "3) Nunca converta MP3 → FLAC «pela qualidade» — só infla o ficheiro sem recuperar dados.",
          "Testei o conversor FLAC → MP3 no Toolando.tech em álbuns de 40–60 min; verifique metadados (título, artista) no leitor após conversão.",
        ],
      },
      {
        title: "Compatibilidade",
        paragraphs: [
          "FLAC: VLC, Foobar2000, maioria dos leitores Android; suporte mais fraco no Apple Music nativo (ALAC encaixa melhor na Apple).",
          "Rádios de carro leem muitas vezes só MP3/WMA/AAC de USB — FLAC → MP3 é obrigatório.",
          "Streaming em casa (Plex, Jellyfin) gere FLAC sem problemas.",
        ],
      },
    ],
  },
  "font-woff2-for-websites": {
    ...guidesEn["font-woff2-for-websites"],
    title: "TTF, OTF, WOFF, WOFF2 — tipos de letra para a web",
    description: "Converter tipos de letra para @font-face, licenças e impacto na velocidade da página.",
    sections: [
      {
        paragraphs: [
          "Os navegadores precisam de WOFF/WOFF2 em CSS (@font-face), não ficheiros de tipos de letra brutos do Windows. WOFF2 dá o menor tamanho de transferência.",
          "O conversor TTF/OTF → WOFF2 do Toolando prepara ficheiros prontos para a web. Verifique a licença do tipo de letra antes de incorporar.",
        ],
      },
      {
        title: "Desempenho",
        paragraphs: [
          "Faça subset dos tipos de letra aos glifos usados em ferramentas profissionais se os ficheiros forem grandes.",
          "Pré-carregue WOFF2 crítico em <head> para texto above-the-fold.",
          "Use font-display: swap para o texto ficar legível enquanto carrega.",
        ],
      },
    ],
  },
  "gif-vs-mp4-for-animations": {
    ...guidesEn["gif-vs-mp4-for-animations"],
    title: "GIF vs MP4 — animações em sites e redes sociais",
    description: "Quando o GIF clássico faz sentido e quando MP4 ou WebM curto poupa megabytes.",
    sections: [
      {
        paragraphs: [
          "GIF reproduz em todo o lado, mas tecnicamente é sequência de fotogramas sem compressão de vídeo moderna — animação de 5 segundos a 720p pode pesar 10–20 MB. O mesmo em MP4 (H.264) cabe muitas vezes em 500 KB–1 MB com qualidade aceitável.",
          "MP4 → GIF no Toolando.tech faz sentido para loops curtos (loader, reação no Slack) quando a plataforma não permite incorporar vídeo. No seu site prefira <video autoplay loop muted playsinline> com MP4 ou WebM.",
        ],
      },
      {
        title: "Quando GIF",
        paragraphs: [
          "Loop curto (<5 s), resolução pequena (≤480 px de largura).",
          "Exigência da plataforma (alguns fóruns só GIF).",
          "Gráficos simples com poucas cores — aí o GIF pode ser mesmo leve.",
        ],
      },
      {
        title: "Quando MP4/WebM",
        paragraphs: [
          "Animação com muitas cores, gradientes ou clipes de vídeo.",
          "Sites — melhor LCP e menos largura de banda.",
          "Instagram/TikTok exigem vídeo, não GIF.",
        ],
      },
      {
        title: "Dicas para MP4 → GIF",
        paragraphs: [
          "Corte a duração — cada segundo são dezenas de fotogramas.",
          "Reduza a resolução antes da conversão.",
          "Limite a paleta de cores se a ferramenta oferecer (menos banding).",
        ],
      },
    ],
  },
  "heic-iphone-jpg": {
    ...guidesEn["heic-iphone-jpg"],
    title: "HEIC do iPhone — como abrir e converter para JPG",
    description: "Porque o iPhone guarda em HEIC, problemas de compatibilidade e como converter para JPG ou PNG.",
    sections: [
      {
        paragraphs: [
          "A Apple guarda fotos em HEIC por defeito — mais pequeno que JPG com a mesma qualidade. Problema: Windows sem extensão, aplicações antigas e muitos serviços não suportam HEIC.",
          "Solução: converta HEIC → JPG ou HEIC → PNG no Toolando.tech antes de enviar por e-mail, carregar ou imprimir. Também pode definir o iPhone para «Mais compatível» (JPG) nas Definições.",
        ],
      },
    ],
  },
  "json-csv-xml": {
    ...guidesEn["json-csv-xml"],
    title: "JSON, CSV e XML — converter dados entre formatos",
    description: "Quando usar JSON, CSV, TSV e XML e como converter entre eles sem perder estrutura.",
    sections: [
      {
        paragraphs: [
          "JSON é o padrão de APIs REST e configuração de aplicações. CSV e TSV servem para importação no Excel. XML é usado em sistemas empresariais antigos e RSS.",
          "JSON → CSV abre uma resposta de API no Excel. CSV → JSON prepara dados para uma API REST. O Toolando.tech preserva a estrutura dos dados durante a conversão.",
        ],
      },
    ],
  },
  "jwt-decode-safely-guide": {
    ...guidesEn["jwt-decode-safely-guide"],
    title: "JWT — como ler um token sem verificar a assinatura",
    description: "Header, payload e Base64URL — quando descodificar localmente e o que não fazer.",
    sections: [
      {
        paragraphs: [
          "Um JSON Web Token tem três partes separadas por pontos: header, payload e signature. O descodificador JWT no Toolando mostra header e payload após descodificação Base64URL — sem enviar o token para um servidor (corre no navegador).",
          "Isto não substitui verificação de assinatura no backend. Descodificar serve para depuração (p. ex. `exp` expirado, `aud` errado) — nunca trate o payload sozinho como prova de identidade.",
        ],
      },
      {
        title: "Práticas seguras",
        paragraphs: [
          "Não cole tokens de produção com dados pessoais em sites públicos — use descodificador local ou ambiente de teste.",
          "Verifique `exp` e `nbf` antes de depurar erros 401.",
          "Após análise, limpe o token do histórico da área de transferência e dos logs.",
        ],
      },
    ],
  },
  "lossy-vs-lossless": {
    ...guidesEn["lossy-vs-lossless"],
    title: "Compressão com e sem perdas — guia simples",
    description: "Como a compressão com e sem perdas difere e como evitar perda de qualidade ao converter.",
    sections: [
      {
        paragraphs: [
          "Formatos com perdas (MP3, JPG, AAC, H.264) descartam dados para reduzir ficheiros. Formatos sem perdas (FLAC, PNG, WAV, ZIP) mantêm todos os dados, mas produzem ficheiros maiores.",
          "Regra: só converta com perdas → sem perdas quando for obrigatório — não recuperará qualidade perdida. Converta com perdas → com perdas apenas uma vez — cada reconversão degrada o resultado.",
        ],
      },
    ],
  },
  "markdown-to-pdf-workflow": {
    ...guidesEn["markdown-to-pdf-workflow"],
    title: "Markdown para PDF — documentação, README e notas",
    description: "MD → HTML → PDF/DOCX: quando a exportação do editor chega e quando um conversor online ajuda.",
    sections: [
      {
        paragraphs: [
          "Markdown serve para escrever — títulos, listas, código — sem layout WYSIWYG. Programadores mantêm README.md nos repositórios; depois precisam de PDF para cliente ou impressão. Caminho típico: MD → HTML (render) → PDF via «Imprimir para PDF» do navegador, ou MD → DOCX → PDF para melhor controlo de cabeçalhos.",
          "Testei conversores MD → HTML e DOCX → PDF no Toolando.tech em ficheiros de 20–40 KB; caracteres portugueses e blocos de código passam bem se o MD estiver em UTF-8.",
        ],
      },
      {
        title: "Que caminho quando",
        paragraphs: [
          "Pré-visualização rápida: MD → HTML, abrir no navegador.",
          "Documento formal com numeração de páginas: MD → DOCX (ou editor), estilo da empresa, depois DOCX → PDF.",
          "Notas simples sem estilo: MD → TXT chega.",
        ],
      },
      {
        title: "Boas práticas MD",
        paragraphs: [
          "Um ficheiro = um tema; divida documentos longos em capítulos.",
          "Ligue imagens relativamente — verifique caminhos após conversão.",
          "Tabelas MD podem partir em PDF — considere CSV ou DOCX para dados tabulares.",
        ],
      },
    ],
  },
  "merge-pdf-online-guide": {
    ...guidesEn["merge-pdf-online-guide"],
    title: "Juntar vários PDF num só — quando faz sentido",
    description: "Combinar faturas, digitalizações e anexos — ordem das páginas, qualidade e privacidade.",
    sections: [
      {
        paragraphs: [
          "Juntar PDFs é trabalho diário de escritório: fatura + contrato + digitalização de ID num só anexo. O Toolando.tech junta ficheiros na ordem que selecionar.",
          "O PDF mantém texto vetorial e digitalizações bitmap — juntar não reduz a resolução das digitalizações se as fontes não estiverem sobre-comprimidas.",
        ],
      },
      {
        title: "Antes de enviar",
        paragraphs: [
          "Ordene os ficheiros logicamente (capa → conteúdo → anexos).",
          "Remova páginas duplicadas das digitalizações.",
          "Se o destinatário está no telemóvel, aponte para ≤10–15 MB ou partilhe por link na cloud.",
        ],
      },
      {
        title: "Privacidade",
        paragraphs: [
          "Trate documentos empresariais e pessoais como confidenciais. O Toolando elimina ficheiros após o processamento; ainda assim siga a política da empresa para dados sensíveis.",
        ],
      },
    ],
  },
  "mortgage-loan-calculator-guide": {
    ...guidesEn["mortgage-loan-calculator-guide"],
    title: "Calculadora de crédito — prestação, juros e o que ter em atenção",
    description: "Anuidade, comissões e seguros — como interpretar o resultado de uma calculadora hipotecária.",
    sections: [
      {
        paragraphs: [
          "A calculadora de crédito no Toolando calcula uma prestação anuidade: valor mensal fixo de capital mais juros. Prazo mais longo baixa a prestação — mas aumenta o custo total de juros.",
          "Trate isto como ponto de partida para conversa com o banco, não como oferta. A prestação real depende da taxa de referência, margem, comissões, seguro de vida e entrada.",
        ],
      },
      {
        title: "O que somar além da calculadora",
        paragraphs: [
          "Comissões de abertura e de amortização antecipada (se no contrato).",
          "Seguro de imóvel e de vida — muitas vezes exigidos pelo banco.",
          "Custos notariais e impostos de transmissão na compra de casa.",
        ],
      },
    ],
  },
  "mp3-vs-wav": {
    ...guidesEn["mp3-vs-wav"],
    title: "MP3 vs WAV — quando converter áudio?",
    description: "MP3 vs WAV comparados: compressão com e sem perdas, tamanho do ficheiro, edição em DAW e qual formato escolher.",
    sections: [
      {
        paragraphs: [
          "O MP3 usa compressão com perdas — os ficheiros são pequenos, mas parte dos dados de áudio perde-se para sempre. O WAV preserva a qualidade total (sem perdas ou não comprimido), mas os ficheiros podem ser 10× maiores que o MP3.",
          "Na prática: ouvir no telemóvel → MP3 chega. Editar um podcast no Audacity ou misturar no FL Studio → trabalhe com WAV ou FLAC.",
        ],
      },
      {
        title: "Quando converter MP3 → WAV",
        paragraphs: [
          "Quando uma plataforma ou aplicação exige um formato sem perdas para edição posterior.",
          "Quando planear vários cortes, efeitos e masterização — cada operação em MP3 degrada a qualidade.",
          "Nota: MP3 → WAV não recupera qualidade perdida, mas evita mais degradação durante a edição.",
        ],
      },
      {
        title: "Quando converter WAV → MP3",
        paragraphs: [
          "Enviar uma gravação por e-mail ou chat — ficheiro mais pequeno = transferência mais rápida.",
          "Publicar um podcast ou música para ouvir, não para editar.",
          "Poupar espaço em disco numa biblioteca de áudio grande.",
        ],
      },
    ],
  },
  "online-file-security": {
    ...guidesEn["online-file-security"],
    title: "Segurança de ficheiros em ferramentas online",
    description: "Como o Toolando.tech processa ficheiros, quando as ferramentas correm localmente no navegador e detalhes de privacidade.",
    sections: [
      {
        paragraphs: [
          "Carregar ficheiros para ferramentas online levanta preocupações naturais. No Toolando.tech os ficheiros são usados apenas para a operação que pede — conversão, compressão ou pré-visualização.",
          "Após concluir a tarefa, os ficheiros são eliminados do servidor. Algumas ferramentas (abridor universal) correm inteiramente no seu navegador — o ficheiro nunca sai do seu computador. A ligação é encriptada (HTTPS).",
        ],
      },
    ],
  },
  "pdf-to-jpg": {
    ...guidesEn["pdf-to-jpg"],
    title: "Como converter PDF em JPG para impressão e web",
    description: "Quando exportar páginas PDF como JPG, que resolução usar e quando o PNG é melhor.",
    sections: [
      {
        paragraphs: [
          "O PDF preserva o layout da página. Por vezes precisa de páginas individuais como imagens — para um site, PowerPoint ou imprimir uma única página.",
          "O conversor PDF → JPG no Toolando.tech renderiza cada página como um JPG separado. Os ficheiros nunca são armazenados — eliminados imediatamente após a conversão.",
        ],
      },
      {
        title: "JPG ou PNG a partir de PDF?",
        paragraphs: [
          "JPG — ficheiros mais pequenos, ideal para fotografias e documentos sem transparência.",
          "PNG — sem perdas com transparência; melhor para gráficos com texto e bordas nítidas.",
        ],
      },
    ],
  },
  "pdf-vs-docx": {
    ...guidesEn["pdf-vs-docx"],
    title: "PDF vs DOCX — qual formato e quando?",
    description: "Diferenças PDF vs DOCX: edição, impressão, arquivo e quando converter em cada direção.",
    sections: [
      {
        paragraphs: [
          "DOCX (Word) serve para editar texto — conteúdo, estilos, títulos. O PDF fixa o layout — idêntico em todos os dispositivos, ideal para faturas, contratos e CVs.",
          "Converta DOCX → PDF antes de enviar «apenas para leitura». Converta PDF → DOCX só quando precisar de editar texto — o layout pode partir-se. Para arquivo e impressão, escolha sempre PDF.",
        ],
      },
    ],
  },
  "png-vs-jpg-photos-and-graphics": {
    ...guidesEn["png-vs-jpg-photos-and-graphics"],
    title: "PNG vs JPG — fotos vs gráficos com texto",
    description: "Escolhas práticas: fotos, capturas de ecrã, logótipos com transparência e impressão.",
    sections: [
      {
        paragraphs: [
          "PNG e JPG são os dois formatos mais confundidos. JPG comprime bem fotografias — céus, pele, paisagens — mas estraga bordas nítidas e texto. PNG mantém cada píxel exatamente, incluindo transparência (alpha), mas ficheiros são muitas vezes 5–10× maiores que JPG na mesma resolução.",
          "Regra que uso nos testes Toolando.tech: foto de galeria ou redes sociais → JPG (ou WebP com alternativa JPG). Ícone, logótipo, diagrama, captura de UI → PNG. Mistura foto + texto (p. ex. capa de oferta) → muitas vezes PNG ou WebP sem perdas.",
        ],
      },
      {
        title: "Quando escolher JPG",
        paragraphs: [
          "Fotos de câmara ou telemóvel sem transparência.",
          "Miniaturas de produtos quando o fundo é sólido e não precisa de alpha.",
          "Anexos de e-mail — JPG qualidade 80–85 é normalmente um bom compromisso.",
          "Impressão doméstica de fotos — muitas lojas aceitam JPG em alta resolução (equivalente a 300 DPI).",
        ],
      },
      {
        title: "Quando escolher PNG",
        paragraphs: [
          "Logótipo de site com fundo transparente — JPG preenche sempre com branco ou preto.",
          "Capturas de UI, gráficos, código — o texto fica nítido.",
          "Gráficos planos com poucas cores (infográficos, ícones de apps).",
          "Quando planear edição em camadas — PNG sem perdas não adiciona artefactos a cada gravação (ao contrário de JPG repetido).",
        ],
      },
      {
        title: "Erros comuns",
        paragraphs: [
          "Guardar logótipo como JPG — bordas denteadas e sem transparência.",
          "Guardar foto 4000×3000 como PNG «pela qualidade» — 15 MB desnecessários em vez de 2 MB JPG.",
          "Ciclos PNG → JPG → PNG — cada passagem JPG perde qualidade; mantenha o master em PNG.",
        ],
      },
    ],
  },
  "podcast-export-mp3-aac-settings": {
    ...guidesEn["podcast-export-mp3-aac-settings"],
    title: "Exportar podcast — MP3 ou AAC e que bitrate",
    description: "Definições após gravar no Audacity, Reaper ou no telemóvel: mono, 44,1 kHz, compressão sensata.",
    sections: [
      {
        paragraphs: [
          "Podcasts são sobretudo voz — não precisa de estéreo 320 kbps como música de estúdio. A maioria das plataformas (Spotify, Apple Podcasts, hosts RSS) reencodifica uploads na mesma. Ainda assim envie um master decente: mono ou estéreo, 44,1 ou 48 kHz, MP3 128–192 kbps ou AAC/M4A 128 kbps.",
          "Gravou em WAV ou FLAC? A exportação final é quase sempre MP3 ou AAC — testei WAV → MP3 no Toolando.tech em episódios de 30–60 min; ~30 MB WAV desce para ~28 MB a 128 kbps estéreo (voz mono pode ficar ~15 MB).",
        ],
      },
      {
        title: "Definições recomendadas",
        paragraphs: [
          "Solo / entrevista uma voz: mono, MP3 96–128 kbps.",
          "Duas vozes em faixas separadas: estéreo 128 kbps.",
          "Música intro/outro em estéreo, resto mono — exporte tudo estéreo 128 kbps por simplicidade.",
          "Evite 64 kbps — sibilantes ásperos e ruído de fundo com microfones baratos.",
        ],
      },
      {
        title: "MP3 vs AAC (M4A)",
        paragraphs: [
          "AAC com o mesmo bitrate costuma superar MP3 — Apple prefere M4A.",
          "MP3 tem a compatibilidade mais ampla em leitores antigos e carros.",
          "Não carregue WAV bruto para hosts de podcast — uploads demoram uma eternidade.",
        ],
      },
    ],
  },
  "prepare-images-for-web": {
    ...guidesEn["prepare-images-for-web"],
    title: "Como preparar imagens para a web (JPG, WebP, AVIF)",
    description: "Resolução, compressão e formato — acelere o seu site sem perda de qualidade visível.",
    sections: [
      {
        paragraphs: [
          "Fotos enormes de câmara (4000×3000 px) abrandam todas as páginas. Antes de carregar num blogue ou loja, redimensione ao tamanho real de exibição — p. ex. 1600 px de largura para um banner principal.",
          "JPG continua a ser a escolha universal segura. WebP e AVIF produzem ficheiros mais pequenos com a mesma qualidade visual — use-os em stacks modernas com alternativa <picture> para navegadores antigos.",
        ],
      },
      {
        title: "Quando PNG em vez de JPG",
        paragraphs: [
          "Logótipos, ícones e capturas de ecrã de UI — PNG ou WebP sem perdas mantêm bordas nítidas.",
          "Fotos de produtos com fundo branco comprimem bem em JPG qualidade 80–85.",
          "Evite regravar o mesmo banner como JPG repetidamente — cada passagem adiciona artefactos.",
        ],
      },
      {
        title: "Lista de verificação antes de publicar",
        paragraphs: [
          "1) Redimensione à largura alvo em px. 2) Escolha o formato (JPG/WebP/AVIF). 3) Verifique o peso do ficheiro (<200 KB miniaturas, <500 KB imagens grandes de blogue). 4) Execute PageSpeed Insights e compare LCP antes/depois.",
        ],
      },
    ],
  },
  "remove-exif-privacy-guide": {
    ...guidesEn["remove-exif-privacy-guide"],
    title: "EXIF em fotos — o que remover antes de publicar",
    description: "GPS, modelo de câmara e datas nos metadados EXIF — riscos de privacidade e remoção.",
    sections: [
      {
        paragraphs: [
          "EXIF são metadados ocultos em JPEG, PNG ou HEIC: localização GPS, modelo do telemóvel, orientação, por vezes miniatura de pré-visualização. Redes sociais removem-nos muitas vezes, mas o seu site, newsletter ou anexo de e-mail nem sempre.",
          "Antes de publicar fotos de crianças, interiores de casa ou documentos na secretária, remova EXIF com ferramenta dedicada — no Toolando o processamento é no servidor e o ficheiro não vai para cloud de IA externa.",
        ],
      },
      {
        title: "O que fica após remover EXIF",
        paragraphs: [
          "Os píxeis da imagem mantêm-se. Só metadados são removidos — a resolução não é afetada.",
          "Após limpar EXIF pode comprimir o ficheiro ou adicionar marca de água antes de publicar um portefólio.",
        ],
      },
    ],
  },
  "split-pdf-pages-guide": {
    ...guidesEn["split-pdf-pages-guide"],
    title: "Como dividir um PDF em páginas separadas online",
    description: "Quando dividir PDFs, como escolher intervalos de páginas e o que fazer com o ZIP resultante.",
    sections: [
      {
        paragraphs: [
          "Dividir um PDF é comum após digitalizar um contrato ou fatura multipágina — pode precisar de enviar uma só página por e-mail ou anexar um fragmento noutro documento.",
          "No Toolando.tech pode exportar cada página separadamente ou indicar um intervalo (p. ex. 1-3,5). O resultado é um ZIP de ficheiros PDF, cada um mantendo a qualidade vetorial ou de digitalização original.",
        ],
      },
      {
        title: "Quando dividir vs juntar",
        paragraphs: [
          "Divida — quando o destinatário só precisa de um fragmento (página de assinatura, anexo, capa).",
          "Junte — quando reúne digitalizações num arquivo ou envio único.",
          "Após dividir, considere numeração de páginas ou comprimir digitalizações grandes.",
        ],
      },
    ],
  },
  "spreadsheet-csv-json-guide": {
    ...guidesEn["spreadsheet-csv-json-guide"],
    title: "CSV, JSON e Excel — mover dados entre folhas e APIs",
    description: "Quando escolher CSV vs JSON e como evitar decimais e codificação partidos.",
    sections: [
      {
        paragraphs: [
          "CSV é texto simples — abre no Excel, Google Sheets e ferramentas BI. JSON gere estruturas aninhadas (APIs, configs). XLSX adiciona tipos de células e várias folhas.",
          "Fluxo típico: exportação de API como JSON → JSON para CSV → análise no Excel. Inverso: lista de clientes CSV → JSON → API REST.",
        ],
      },
      {
        title: "Codificação e Excel",
        paragraphs: [
          "Use CSV UTF-8 para caracteres não ASCII. Se o Excel corrompe texto, importe via Dados → De texto e escolha UTF-8.",
          "Delimitadores CSV variam consoante a região (vírgula vs ponto e vírgula). TSV (tab) é mais seguro quando descrições contêm vírgulas.",
        ],
      },
      {
        title: "Validar após conversão",
        paragraphs: [
          "Compare contagens de linhas antes e depois.",
          "Para JSON verifique chaves e tipos — uma aspas em falta parte o ficheiro inteiro.",
        ],
      },
    ],
  },
  "svg-vs-png-logos-and-icons": {
    ...guidesEn["svg-vs-png-logos-and-icons"],
    title: "SVG vs PNG — logótipos e ícones para a web",
    description: "Vetor vs raster: quando usar SVG e quando @2x PNG chega.",
    sections: [
      {
        paragraphs: [
          "SVG é gráfico vetorial descrito matematicamente — escala em qualquer ecrã sem pixelização. PNG é bitmap de resolução fixa; em retina muitas vezes precisa de versão 2×. Em sites, logótipos e ícones simples devem ser quase sempre SVG (ou icon font), salvo se o ficheiro incorporar uma foto.",
          "O conversor SVG → PNG do Toolando.tech ajuda quando uma gráfica quer PNG 300 DPI ou um sistema rejeita SVG.",
        ],
      },
      {
        title: "Vantagens do SVG",
        paragraphs: [
          "Um ficheiro para mobile e desktop — menos CSS, sem srcset.",
          "Mudanças de cor fáceis via CSS fill em ícones simples.",
          "Melhores pontuações Lighthouse que PNG hero pesados.",
        ],
      },
      {
        title: "Quando PNG em vez de SVG",
        paragraphs: [
          "Logótipo com gradientes, sombras ou efeitos que exportam mal do vetor.",
          "Miniaturas Open Graph / pré-visualização social — plataformas rasterizam na mesma.",
          "Apps desktop sem motor SVG.",
          "Exporte PNG @2x (p. ex. 512×512) como alternativa em <img> junto ao SVG inline.",
        ],
      },
    ],
  },
  "tiff-and-png-for-document-scans": {
    ...guidesEn["tiff-and-png-for-document-scans"],
    title: "Digitalizações de documentos — TIFF, PNG ou JPG",
    description: "Faturas e contratos: armazenamento sem perdas, multipágina e quando PDF chega.",
    sections: [
      {
        paragraphs: [
          "Digitalizar uma fatura ou contrato é diferente de uma foto de férias. Texto e carimbos precisam de bordas nítidas — JPG agressivo desfoca letras. TIFF (muitas vezes LZW sem perdas) e PNG são mais seguros para arquivo. Para envio e OCR acaba muitas vezes em PDF ou JPG de qualidade moderada.",
          "TIFF multipágina pode ser um ficheiro com várias camadas — nem todos os visualizadores suportam; para escritórios e clientes PDF multipágina é mais claro (junte PDFs no Toolando.tech).",
        ],
      },
      {
        title: "Fluxo recomendado",
        paragraphs: [
          "Digitalizador → PNG ou TIFF por página (300 DPI para impressão, 150 DPI para pré-visualização).",
          "Corrija rotação/recorte num editor.",
          "Junte páginas num PDF para entrega.",
          "JPG qualidade 90 opcional só se o destinatário não aceitar PDF.",
        ],
      },
      {
        title: "O que evitar",
        paragraphs: [
          "JPG qualidade 60 em faturas — valores podem ficar ilegíveis.",
          "Ciclos repetidos TIFF → JPG → TIFF.",
          "Digitalizações a cores a 600 DPI «por precaução» — gigabytes sem benefício para texto A4.",
        ],
      },
    ],
  },
  "toolando-editorial-standards": {
    ...guidesEn["toolando-editorial-standards"],
    title: "Padrões editoriais do Toolando.tech — como os guias são escritos",
    description: "Como são produzidos artigos, testes de conversores e a enciclopédia de formatos — transparência para leitores e revisores.",
    sections: [
      {
        paragraphs: [
          "O Toolando.tech é construído a solo por Szymon Badyl (Badyl-Tech). Os guias não são gerados em massa nem copiados da Wikipedia — seguem testes de conversão reais.",
          "Cada artigo tem datas de publicação e atualização. Quando requisitos de plataformas ou bibliotecas mudam, reviso o texto.",
        ],
      },
      {
        title: "O que testo",
        paragraphs: [
          "Conversores de áudio/vídeo: tempo, tamanho do resultado, reprodução no VLC e no telemóvel.",
          "Imagens: comparação visual antes/depois, transparência PNG, tamanho WebP vs JPG.",
          "Documentos: layout após PDF ↔ DOCX, codificação em CSV/JSON.",
        ],
      },
      {
        title: "O que não prometo",
        paragraphs: [
          "Sem «100% de qualidade» ao converter com perdas → com perdas.",
          "Sem descarregar vídeos alheios do YouTube/TikTok — apenas operações legais nos seus ficheiros.",
          "Anúncios Google podem aparecer, mas o conteúdo editorial é escrito independentemente dos anunciantes.",
        ],
      },
    ],
  },
  "video-compress-before-sharing": {
    ...guidesEn["video-compress-before-sharing"],
    title: "Reduzir vídeo antes de e-mail ou WhatsApp",
    description: "MP4, resolução, bitrate — limites práticos de tamanho e conversão de contentor.",
    sections: [
      {
        paragraphs: [
          "Gravações de telemóvel em MOV/MKV podem ter centenas de MB. Muitas caixas de correio bloqueiam anexos >25 MB. Solução: converter para MP4 (H.264 + AAC) e baixar resolução se necessário.",
          "720p chega muitas vezes para pré-visualização no telemóvel; mantenha 1080p para ver na TV.",
        ],
      },
      {
        title: "Passos antes de enviar",
        paragraphs: [
          "1) Converta MOV/MKV → MP4. 2) Verifique o tamanho do ficheiro. 3) Se ainda for grande demais — corte intro/outro desnecessários num editor de vídeo. 4) Use link na cloud se >25 MB.",
        ],
      },
    ],
  },
  "video-social-media": {
    ...guidesEn["video-social-media"],
    title: "Vídeo para redes sociais — MP4, resolução e bitrate",
    description: "Como preparar vídeo para Instagram, TikTok, YouTube: formato MP4, H.264, resolução 1080p.",
    sections: [
      {
        paragraphs: [
          "Instagram, TikTok, YouTube e Facebook preferem MP4 com vídeo H.264 e áudio AAC. Converta MOV, AVI ou MKV para MP4 antes de publicar para evitar erros de carregamento.",
          "1080p (1920×1080) chega para a maioria das plataformas. Bitrate mais alto = melhor qualidade, mas ficheiro maior. Consulte a enciclopédia de formatos para detalhes sobre MP4, WebM e MOV.",
        ],
      },
    ],
  },
  "webp-avif-images": {
    ...guidesEn["webp-avif-images"],
    title: "WebP e AVIF — formatos de imagem modernos para sites",
    description: "WebP e AVIF vs JPG/PNG: compressão, suporte nos navegadores e otimização PageSpeed.",
    sections: [
      {
        paragraphs: [
          "JPG e PNG dominaram a web durante anos, mas o WebP produz ficheiros 25–35% mais pequenos que o JPG com a mesma qualidade visual. O AVIF vai mais longe — os ficheiros podem ter metade do tamanho do WebP.",
          "Todos os navegadores modernos suportam WebP. O AVIF tem suporte ligeiramente mais fraco em versões antigas do Safari.",
        ],
      },
      {
        title: "Estratégia de implementação",
        paragraphs: [
          "Converta JPG → WebP para fotos de produtos e banners — acelera o carregamento da página.",
          "Mantenha JPG como alternativa para navegadores antigos (etiqueta HTML <picture>).",
          "Para logótipos com transparência: PNG → WebP em vez de JPG.",
        ],
      },
    ],
  },
  "when-not-to-convert-files": {
    ...guidesEn["when-not-to-convert-files"],
    title: "Quando NÃO converter um ficheiro — 7 situações que prejudicam a qualidade",
    description: "Evite conversões desnecessárias: mantenha originais, arquivos sem perdas e cópia de segurança antes de experimentar.",
    sections: [
      {
        paragraphs: [
          "Conversores online são convenientes, mas nem toda a operação ajuda. Por vezes mantenha o original ou use arquivos sem perdas (ZIP, FLAC).",
          "Regra: não converta com perdas → sem perdas esperando milagres — MP3 → WAV não restaura dados perdidos.",
        ],
      },
      {
        title: "Deixe como está",
        paragraphs: [
          "Já tem PNG com transparência — não passe para JPG sem motivo.",
          "Projetos de design — mantenha fontes em camadas (PSD, SVG); exporte JPG só no fim.",
          "WAV/FLAC de estúdio — não aplique MP3 até ao mix final.",
          "PDF com assinatura digital — a conversão pode invalidar a assinatura.",
        ],
      },
      {
        title: "Antes de clicar em Converter",
        paragraphs: [
          "Guarde uma cópia do original.",
          "Verifique se a plataforma de destino já aceita o seu formato de origem.",
          "Leia comparações de formatos na enciclopédia Toolando para saltar um passo inútil.",
        ],
      },
    ],
  },
  "zip-7z-rar-when-to-use": {
    ...guidesEn["zip-7z-rar-when-to-use"],
    title: "ZIP, 7z e RAR — que arquivo enviar",
    description: "Tamanho, compatibilidade e encriptação — quando ZIP chega e quando 7z ou RAR ajudam.",
    sections: [
      {
        paragraphs: [
          "Um arquivo envolve muitos ficheiros num só — prático para e-mail, cloud e backup de pastas. ZIP é o padrão universal: abre em Windows, macOS e Linux sem software extra. 7z costuma dar resultado mais pequeno, mas destinatários podem precisar de 7-Zip. RAR aparece em fluxos antigos; criar RAR online tem limites de licença — converte-se mais RAR → ZIP do que o contrário.",
        ],
      },
      {
        title: "Quando ZIP",
        paragraphs: [
          "Enviar a clientes ou escritórios — menor risco de «não abre».",
          "Arquivar código, documentos de escritório, conjunto de fotos JPG.",
          "Sistemas que só aceitam uploads .zip.",
        ],
      },
      {
        title: "Quando 7z",
        paragraphs: [
          "Pastas grandes de jogos, projetos de vídeo, backup antes de disco externo — ficheiro mais pequeno = upload mais rápido.",
          "Quando o destinatário é técnico e tem 7-Zip.",
          "Conversão ZIP → 7z faz sentido uma vez — não reempacote os mesmos dados em ciclo.",
        ],
      },
      {
        title: "Segurança",
        paragraphs: [
          "Palavras-passe no arquivo impedem abertura casual, mas não substituem encriptação ponta a ponta para documentos sensíveis.",
          "Não descompacte arquivos de fontes desconhecidas sem análise antivírus.",
          "O Toolando processa arquivos só durante a conversão de contentor — o conteúdo deve ser legal e seu.",
        ],
      },
    ],
  },
}
