import type { ToolContentTemplates } from "../locale-factory"

export const ptToolContentTemplates: ToolContentTemplates = {
  extendedDesc:
    "Este conversor online gratuito transforma arquivos {fromName} ({FROM}) no formato {toName} ({TO}) sem instalar nenhum software. Envie seu arquivo: a Toolando.tech processa no servidor e devolve o resultado para download. Os arquivos nunca são armazenados — são excluídos imediatamente após a conversão.",
  whenToUseBase: [
    "Quando você precisa de um arquivo {TO}, mas só o tem no formato {FROM}.",
    "Quando o dispositivo ou o app que você usa não suporta arquivos {FROM}.",
  ],
  whenToUseCategory: {
    audio: "Quando você quer reduzir o tamanho de um arquivo de áudio ou melhorar a compatibilidade com o player.",
    video: "Quando você precisa publicar um vídeo em um site ou nas redes sociais em outro formato.",
    image: "Quando você quer otimizar uma imagem para web, e-mail ou impressão.",
    pdf: "Quando você precisa extrair páginas de PDF como imagens ou converter um documento para um formato editável.",
    doc: "Quando você trabalha com documentos de texto e precisa de outro formato para editar ou publicar.",
    data: "Quando você move dados entre sistemas, APIs ou planilhas em outro formato.",
    font: "Quando você prepara fontes web para publicação em um site.",
    archive: "Quando você precisa alterar o formato do arquivo compactado para extrair em outro sistema.",
  },
  steps: [
    'Clique em « Escolher arquivo » ou arraste seu arquivo {FROM} para a área de upload.',
    "Aguarde o término do envio e da conversão — isso geralmente leva alguns segundos.",
    "Baixe o arquivo {TO} pronto com um clique.",
    "O arquivo de origem é excluído do servidor imediatamente após a conclusão da operação.",
  ],
  faq: [
    {
      q: "A conversão {FROM} → {TO} é gratuita?",
      a: "Sim. Este conversor é totalmente gratuito e não exige conta. Você pode converter arquivos sem limite.",
    },
    {
      q: "Meu arquivo {FROM} está seguro?",
      a: "Sim. Seu arquivo é processado apenas para a conversão e excluído logo em seguida. Nunca armazenamos nem compartilhamos seus arquivos.",
    },
    {
      q: "Qual é o tamanho máximo do arquivo?",
      a: "Você pode enviar arquivos de até 500 MB. Arquivos maiores podem demorar mais para processar.",
    },
    {
      q: "A qualidade do {TO} será boa?",
      a: "A Toolando.tech usa bibliotecas profissionais (FFmpeg, Sharp, MuPDF) para a conversão. A qualidade depende dos formatos de origem e destino — converter de um formato com perda para um sem perda não recupera dados perdidos, mas o resultado será tecnicamente correto.",
    },
  ],
  extraFaq: [
    {
      q: "Onde posso saber mais sobre {FROM}?",
      a: "Leia o guia completo do formato {FROM} na enciclopédia de formatos da Toolando.tech — casos de uso, vantagens, desvantagens e comparações.",
    },
    {
      q: "Posso converter {TO} de volta para {FROM}?",
      a: "Sim — escolha o conversor {TO} → {FROM} na lista de ferramentas. Converter a partir de um formato com perda não restaura a qualidade perdida.",
    },
  ],
}
