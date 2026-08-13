export const ptTools = {
  "przelicznik-walut": {
    "cat": "finance",
    "name": "Conversor de moedas",
    "desc": "Converta moedas online com taxas de referência do BCE. PLN, EUR, USD e dezenas de outros pares — sem registo.",
    "steps": [
      "Introduza um montante e a moeda de origem.",
      "Escolha a moeda de destino.",
      "Consulte o resultado e a taxa do dia."
    ],
    "faq": [
      {
        "q": "De onde vêm as taxas?",
        "a": "Taxas de referência do Banco Central Europeu via API Frankfurter, atualizadas em dias úteis."
      },
      {
        "q": "As taxas são em tempo real?",
        "a": "São taxas de referência do BCE, não cotações bancárias ou de casas de câmbio."
      }
    ]
  },
  "kalkulator-dat": {
    "cat": "time",
    "name": "Calculadora de datas",
    "desc": "Calcule os dias entre duas datas, dias úteis e o dia da semana — útil para contratos e prazos.",
    "steps": [
      "Escolha as datas de início e fim.",
      "Veja a diferença em dias e semanas.",
      "Opcionalmente conte apenas dias úteis."
    ],
    "faq": [
      {
        "q": "Os feriados são excluídos?",
        "a": "Por predefinição excluímos sábados e domingos. Os feriados dependem do país."
      }
    ]
  },
  "strefy-czasowe": {
    "cat": "time",
    "name": "Diferença de fusos horários",
    "desc": "Compare horas locais entre cidades, veja a diferença horária e localize os lugares num mapa simples.",
    "steps": [
      "Escolha as cidades de origem e destino.",
      "Compare as horas locais atuais.",
      "Veja o desvio e os marcadores no mapa."
    ],
    "faq": [
      {
        "q": "Consideram o horário de verão?",
        "a": "Sim — usamos zonas IANA (ex. Europe/Warsaw) que aplicam o DST automaticamente."
      }
    ]
  },
  "przelicznik-jednostek": {
    "cat": "units",
    "name": "Conversor de unidades",
    "desc": "Converta comprimento, massa, temperatura e volume: cm↔pol., kg↔lb, °C↔°F e mais.",
    "steps": [
      "Escolha uma categoria de unidades.",
      "Introduza um valor e as unidades.",
      "Obtenha o resultado instantaneamente."
    ],
    "faq": [
      {
        "q": "As conversões são exatas?",
        "a": "Sim — fatores SI padrão. A temperatura usa fórmulas próprias, não multiplicação simples."
      }
    ]
  },
  "kalkulator-vat": {
    "cat": "finance",
    "name": "Calculadora de IVA e percentagens",
    "desc": "Adicione ou remova IVA (23%, 8%, 5%), calcule líquido/bruto e percentagens simples de um montante.",
    "steps": [
      "Introduza um montante líquido ou bruto.",
      "Escolha uma taxa de IVA ou percentagem personalizada.",
      "Veja o detalhe líquido, IVA e bruto."
    ],
    "faq": [
      {
        "q": "Que taxas de IVA existem na Polónia?",
        "a": "Padrão 23%, reduzidas 8% e 5%. Também pode introduzir uma taxa personalizada."
      }
    ]
  },
  "kalkulator-wieku": {
    "cat": "time",
    "name": "Calculadora de idade e contagem decrescente",
    "desc": "Calcule a idade exata em anos, meses e dias — ou quantos dias faltam até uma data.",
    "steps": [
      "Introduza uma data de nascimento ou data alvo.",
      "Veja a idade ou a contagem decrescente.",
      "Verifique também o próximo aniversário."
    ],
    "faq": [
      {
        "q": "Como é calculada a idade?",
        "a": "Da data de nascimento até hoje, contando anos, meses e dias — não apenas anos de calendário."
      }
    ]
  },
  "generator-hasel": {
    "cat": "dev",
    "name": "Gerador de palavras-passe",
    "desc": "Gere uma palavra-passe forte localmente no navegador. Defina comprimento e conjuntos de caracteres — nada é enviado para o servidor.",
    "steps": [
      "Defina comprimento e opções de caracteres.",
      "Clique em Gerar.",
      "Copie com um clique."
    ],
    "faq": [
      {
        "q": "A palavra-passe é enviada?",
        "a": "Não — a geração acontece inteiramente no seu navegador."
      }
    ]
  },
  "licznik-znakow": {
    "cat": "text",
    "name": "Contador de caracteres e palavras",
    "desc": "Conte caracteres, palavras, frases e parágrafos — útil para SEO, redes sociais e limites de formulários.",
    "steps": [
      "Cole ou escreva texto.",
      "Veja estatísticas em tempo real.",
      "Verifique o comprimento sem espaços."
    ],
    "faq": [
      {
        "q": "Como são contadas as palavras?",
        "a": "Palavras são sequências separadas por espaços ou quebras de linha."
      }
    ]
  },
  "generator-qr": {
    "cat": "dev",
    "name": "Gerador de códigos QR",
    "desc": "Crie um código QR a partir de um link ou texto e descarregue como PNG. Funciona localmente no navegador.",
    "steps": [
      "Introduza texto ou URL.",
      "Gere a pré-visualização QR.",
      "Descarregue uma imagem PNG."
    ],
    "faq": [
      {
        "q": "O conteúdo QR é enviado?",
        "a": "Não — o código é criado localmente. Não armazenamos o conteúdo."
      }
    ]
  },
  "kalkulator-bitrate": {
    "cat": "media",
    "name": "Calculadora de tamanho de ficheiro e bitrate",
    "desc": "Estime o tamanho de um ficheiro áudio/vídeo com bitrate e duração dados — ou o bitrate que cabe num limite de MB.",
    "steps": [
      "Escolha tamanho a partir de bitrate ou bitrate a partir de limite.",
      "Introduza duração e valores.",
      "Leia o resultado em MB / kbps."
    ],
    "faq": [
      {
        "q": "Inclui o contentor?",
        "a": "Estima o fluxo bruto. Contentores e faixas extra acrescentam normalmente alguns percentuais."
      }
    ]
  },
  "konwerter-kolorow": {
    "cat": "dev",
    "name": "Conversor de cores HEX RGB HSL",
    "desc": "Converta cores entre HEX, RGB e HSL e verifique o contraste WCAG face a um fundo.",
    "steps": [
      "Introduza uma cor em qualquer formato.",
      "Veja equivalentes HEX/RGB/HSL.",
      "Verifique o contraste face a um fundo."
    ],
    "faq": [
      {
        "q": "O que significam AA / AAA?",
        "a": "Níveis de acessibilidade WCAG para contraste de texto face a um fundo."
      }
    ]
  },
  "base64": {
    "cat": "dev",
    "name": "Base64 codificar / descodificar",
    "desc": "Codifique texto para Base64 ou descodifique Base64. Localmente, sem enviar dados.",
    "steps": [
      "Cole texto ou Base64.",
      "Escolha Codificar ou Descodificar.",
      "Copie o resultado."
    ],
    "faq": [
      {
        "q": "Suporta UTF-8?",
        "a": "Sim — caracteres Unicode são suportados."
      }
    ]
  },
  "unix-timestamp": {
    "cat": "dev",
    "name": "Timestamp Unix ↔ data",
    "desc": "Converta um timestamp Unix (segundos/ms) em data e vice-versa. Útil para logs e APIs.",
    "steps": [
      "Cole um timestamp ou escolha uma data.",
      "Veja resultados ISO e locais.",
      "Copie o valor."
    ],
    "faq": [
      {
        "q": "Segundos ou milissegundos?",
        "a": "Detetamos automaticamente pela extensão. Também pode forçar a unidade."
      }
    ]
  },
  "generator-uuid": {
    "cat": "dev",
    "name": "Gerador UUID",
    "desc": "Gere UUID v4 (aleatório) com um clique. Crie vários de uma vez se precisar.",
    "steps": [
      "Defina quantos UUID.",
      "Clique em Gerar.",
      "Copie a lista."
    ],
    "faq": [
      {
        "q": "Que versão de UUID?",
        "a": "UUID v4 — aleatório, RFC 4122, gerado no navegador."
      }
    ]
  },
  "generator-hash": {
    "cat": "dev",
    "name": "Hash SHA / MD5",
    "desc": "Calcule SHA-1, SHA-256, SHA-512 ou MD5 de um texto. Localmente via Web Crypto.",
    "steps": [
      "Cole texto.",
      "Escolha um algoritmo.",
      "Copie o hash hex."
    ],
    "faq": [
      {
        "q": "MD5 é seguro?",
        "a": "MD5 não serve para palavras-passe. Use SHA-256+ para segurança; MD5 apenas para checksums."
      }
    ]
  },
  "json-formatter": {
    "cat": "dev",
    "name": "Formatador JSON",
    "desc": "Formate e minifique JSON no navegador — sem envio para o servidor.",
    "steps": [
      "Cole JSON.",
      "Clique em Formatar ou Minificar.",
      "Copie o resultado."
    ],
    "faq": [
      {
        "q": "Os dados são enviados?",
        "a": "Não — o processamento acontece localmente no navegador."
      }
    ]
  },
  "diff-tekstu": {
    "cat": "text",
    "name": "Diff de texto",
    "desc": "Compare dois excertos de texto linha a linha e destaque as diferenças.",
    "steps": [
      "Cole o texto A e B.",
      "Revise as diferenças destacadas."
    ],
    "faq": [
      {
        "q": "É um diff completo?",
        "a": "É uma comparação linha a linha — ideal para excertos curtos e listas."
      }
    ]
  },
  "konwerter-wielkosci-liter": {
    "cat": "text",
    "name": "Conversor de maiúsculas/minúsculas",
    "desc": "Converta texto para maiúsculas, minúsculas, Title Case ou sentence case.",
    "steps": [
      "Cole texto.",
      "Escolha um modo.",
      "Copie o resultado."
    ],
    "faq": []
  },
  "usun-duplikaty-linii": {
    "cat": "text",
    "name": "Remover linhas duplicadas",
    "desc": "Remova linhas repetidas de listas de e-mail, SKU ou etiquetas.",
    "steps": [
      "Cole uma lista.",
      "Defina opções.",
      "Copie a lista limpa."
    ],
    "faq": []
  },
  "dekoder-jwt": {
    "cat": "dev",
    "name": "Descodificador JWT",
    "desc": "Leia o cabeçalho e payload de um JWT sem verificar a assinatura.",
    "steps": [
      "Cole um token.",
      "Inspecione cabeçalho e payload."
    ],
    "faq": [
      {
        "q": "Verifica a assinatura?",
        "a": "Não — apenas descodifica Base64URL do token."
      }
    ]
  },
  "walidator-nip-pesel": {
    "cat": "dev",
    "name": "Validador NIP / PESEL / REGON",
    "desc": "Valide números fiscais e de identificação polacos segundo regras de checksum.",
    "steps": [
      "Introduza um número.",
      "Veja o resultado da validação."
    ],
    "faq": [
      {
        "q": "Consulta o registo GUS?",
        "a": "Não — apenas checksum e comprimento."
      }
    ]
  },
  "kalkulator-kredytu": {
    "cat": "finance",
    "name": "Calculadora de empréstimo",
    "desc": "Calcule prestações de anuidade, reembolso total e custo de juros.",
    "steps": [
      "Introduza montante, taxa e prazo.",
      "Leia a prestação mensal."
    ],
    "faq": [
      {
        "q": "Inclui comissões bancárias?",
        "a": "Simulação simplificada sem comissões ou seguros."
      }
    ]
  },
  "markdown-preview": {
    "cat": "text",
    "name": "Pré-visualização Markdown",
    "desc": "Escreva Markdown e veja uma pré-visualização HTML em tempo real no navegador.",
    "steps": [
      "Escreva Markdown.",
      "A pré-visualização atualiza-se automaticamente."
    ],
    "faq": []
  },
  "sila-hasla": {
    "cat": "dev",
    "name": "Força da palavra-passe",
    "desc": "Avalie a força de uma palavra-passe por comprimento, variedade de caracteres e padrões comuns.",
    "steps": [
      "Introduza uma palavra-passe.",
      "Veja a pontuação e sugestões."
    ],
    "faq": [
      {
        "q": "A palavra-passe é enviada?",
        "a": "Não — a avaliação acontece localmente no navegador."
      }
    ]
  },
  "konwerter-napisow": {
    "cat": "media",
    "name": "Conversor de legendas SRT / VTT",
    "desc": "Converta legendas entre formatos SRT e WebVTT.",
    "steps": [
      "Cole as legendas.",
      "Escolha direção ou auto.",
      "Copie o resultado."
    ],
    "faq": []
  },
  "generator-nazw-plikow": {
    "cat": "text",
    "name": "Renomeador de ficheiros em lote",
    "desc": "Renomeie ficheiros em massa com um padrão {name}, {ext}, {index}.",
    "steps": [
      "Cole uma lista de ficheiros.",
      "Defina um padrão.",
      "Copie os novos nomes."
    ],
    "faq": []
  },
  "walidator-iban": {
    "cat": "dev",
    "name": "Validador IBAN",
    "desc": "Valide checksum IBAN (mod 97) e comprimento específico do país.",
    "steps": [
      "Cole um IBAN.",
      "Veja saída formatada e validação."
    ],
    "faq": [
      {
        "q": "Verifica a conta bancária?",
        "a": "Não — apenas formato e checksum."
      }
    ]
  },
  "kalkulator-b2b": {
    "cat": "finance",
    "name": "Calculadora B2B vs emprego",
    "desc": "Compare salário líquido de emprego com rendimentos de fatura B2B (imposto fixo ou linear).",
    "steps": [
      "Introduza bruto de emprego e rendimentos B2B.",
      "Escolha a forma fiscal.",
      "Compare os resultados."
    ],
    "faq": [
      {
        "q": "Isto é aconselhamento fiscal?",
        "a": "Não — simulação simplificada para discutir com um contabilista."
      }
    ]
  }
};
