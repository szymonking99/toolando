import type { LegalDocumentData } from "@/components/legal-document"

export const privacyPt: LegalDocumentData = {
  eyebrow: "Política de privacidade",
  title: "Política de privacidade da Toolando.tech",
  intro:
    "Esta política de privacidade descreve quais dados são tratados na Toolando.tech, para que finalidades, com que base legal e quais direitos lhe assistem. Trato os dados pessoais em conformidade com o Regulamento (UE) 2016/679 (RGPD) e com a legislação polaca aplicável em matéria de proteção de dados.",
  lastUpdated: "Última atualização: 23 de julho de 2026",
  sections: [
    {
      title: "§1. Responsável pelo tratamento",
      paragraphs: [
        "1.1. O responsável pelo tratamento (« Responsável ») é Szymon, operador da Toolando.tech, que presta serviços de ferramentas online.",
        "1.2. Contacto para questões de privacidade: {{email}}.",
        "1.3. O Responsável não designou um encarregado de proteção de dados, pois tal não é exigido para esta atividade ao abrigo do RGPD.",
      ],
    },
    {
      title: "§2. Dados que tratamos",
      paragraphs: ["2.1. Conforme a utilização do serviço, tratamos as seguintes categorias:"],
      list: [
        "Dados técnicos e de utilização: endereço IP, tipo e versão do navegador, sistema operativo, idioma, data e hora do pedido, páginas visitadas, origem do tráfego, identificadores de cookies (mediante consentimento).",
        "Dados de conta: endereço de e-mail, palavra-passe (hash), ID de utilizador, data de registo, estado Premium, ID de cliente Stripe (se aplicável).",
        "Dados de pagamento: tratados pela Stripe — o Responsável não armazena números completos de cartões de pagamento.",
        "Dados de correspondência: endereço de e-mail, conteúdo da mensagem, data de contacto — quando escreve para {{email}} ou utiliza o formulário de contacto.",
        "Ficheiros do utilizador: tratados temporariamente apenas para executar operações das ferramentas — não são conservados após a conclusão da conversão.",
      ],
    },
    {
      title: "§3. Finalidades e bases legais",
      paragraphs: ["3.1. Tratamos dados para as seguintes finalidades:"],
      definitions: [
        {
          term: "Prestação do serviço",
          description:
            "Conversão de ficheiros, funcionamento das ferramentas, gestão de conta — base legal: art.º 6.º, n.º 1, al. b) RGPD (contrato) ou al. f) (interesse legítimo: operação do serviço).",
        },
        {
          term: "Subscrição Premium",
          description:
            "Processamento de pagamentos e subscrição — base legal: art.º 6.º, n.º 1, al. b) RGPD; contabilidade: art.º 6.º, n.º 1, al. c) (obrigação legal).",
        },
        {
          term: "Análise de tráfego",
          description:
            "Google Analytics — apenas após consentimento para cookies analíticos — base legal: art.º 6.º, n.º 1, al. a) RGPD (consentimento).",
        },
        {
          term: "Publicidade",
          description:
            "Google AdSense — apenas após consentimento para cookies publicitários — base legal: art.º 6.º, n.º 1, al. a) RGPD (consentimento).",
        },
        {
          term: "Segurança",
          description:
            "Prevenção de abusos, registos do servidor — base legal: art.º 6.º, n.º 1, al. f) RGPD (interesse legítimo).",
        },
        {
          term: "Contacto e reclamações",
          description:
            "Resposta a mensagens — base legal: art.º 6.º, n.º 1, al. f) RGPD ou al. b) (se relacionado com contrato).",
        },
      ],
    },
    {
      title: "§4. Cookies e tecnologias similares",
      paragraphs: [
        "4.1. O serviço utiliza cookies e tecnologias similares. Na primeira visita, apresentamos um banner de consentimento onde pode aceitar todos os cookies ou limitar-se aos essenciais.",
        "4.2. Tipos de cookies:",
      ],
      list: [
        "Essenciais — necessários ao funcionamento do serviço (p. ex. idioma, sessão, preferências de cookies). Não requerem consentimento.",
        "Analíticos — Google Analytics, estatísticas agregadas de visitas. Requerem consentimento.",
        "Publicitários — Google AdSense, personalização de anúncios. Requerem consentimento.",
      ],
      afterList: [
        "4.3. Pode alterar as suas preferências de cookies a qualquer momento através do banner ou das definições do navegador.",
      ],
    },
    {
      title: "§5. Destinatários e subcontratantes",
      paragraphs: [
        "5.1. Os dados podem ser comunicados a subcontratantes de confiança que atuam em nome do Responsável:",
      ],
      list: [
        "Vercel Inc. — alojamento e infraestrutura (EUA, cláusulas contratuais-tipo da UE).",
        "Stripe, Inc. — processamento de pagamentos Premium (EUA/Irlanda, PCI DSS).",
        "Google LLC — Analytics e AdSense (mediante consentimento; política de parceiros: https://policies.google.com/technologies/partner-sites).",
        "Resend — e-mails transacionais (p. ex. e-mail de boas-vindas após registo), se configurado.",
        "Fornecedores de modelos de IA — tratamento de prompts e ficheiros apenas dentro das ferramentas IA Premium, sem conservação após conclusão.",
      ],
      afterList: ["5.2. O Responsável não vende dados pessoais a terceiros."],
    },
    {
      title: "§6. Ficheiros carregados nas ferramentas",
      paragraphs: [
        "6.1. Os ficheiros carregados em conversores e outras ferramentas não são conservados após a conclusão da operação.",
        "6.2. Os ficheiros não são utilizados para treino de modelos de IA, criação de perfis ou marketing.",
        "6.3. Algumas ferramentas (p. ex. o abridor universal de ficheiros) processam ficheiros inteiramente localmente no navegador — o ficheiro nunca sai do seu dispositivo.",
        "6.4. Não carregue ficheiros com dados sensíveis (p. ex. dados de saúde, números de documento de identidade), salvo se for absolutamente necessário — fazê-lo é por sua conta e risco.",
      ],
    },
    {
      title: "§7. Prazos de conservação",
      paragraphs: ["7.1. Conservamos os dados pelos seguintes períodos:"],
      list: [
        "Dados de conta — até à eliminação da conta ou pedido de eliminação.",
        "Registos do servidor — até 90 dias, salvo se for necessária conservação mais longa para fazer valer direitos.",
        "Correspondência — até 3 anos após encerramento do caso.",
        "Dados de faturação (Stripe) — conforme a legislação fiscal (geralmente 5 anos).",
        "Ficheiros do utilizador — eliminados imediatamente após processamento (geralmente segundos a minutos).",
        "Preferências de cookies — até 12 meses ou até revogação do consentimento.",
      ],
    },
    {
      title: "§8. Os seus direitos (RGPD)",
      paragraphs: ["8.1. Tem os seguintes direitos:"],
      list: [
        "Direito de acesso (art.º 15.º RGPD).",
        "Direito de retificação (art.º 16.º RGPD).",
        "Direito ao apagamento — «direito ao esquecimento» (art.º 17.º RGPD).",
        "Direito à limitação do tratamento (art.º 18.º RGPD).",
        "Direito à portabilidade dos dados (art.º 20.º RGPD).",
        "Direito de oposição ao tratamento com base no art.º 6.º, n.º 1, al. f) RGPD (art.º 21.º RGPD).",
        "Direito de retirar o consentimento a qualquer momento — sem afetar a licitude do tratamento anterior à retirada (art.º 7.º, n.º 3 RGPD).",
        "Direito de apresentar reclamação junto de uma autoridade de controlo (na Polónia: PUODO, uodo.gov.pl).",
      ],
      afterList: [
        "8.2. Para exercer os seus direitos, escreva para {{email}}. Responderei sem demora injustificada, no prazo máximo de 30 dias.",
      ],
    },
    {
      title: "§9. Segurança dos dados",
      paragraphs: [
        "9.1. Aplico medidas técnicas e organizativas proporcionais ao risco, incluindo encriptação HTTPS, acesso restrito aos sistemas e eliminação de ficheiros após processamento.",
        "9.2. Nenhum sistema é 100% seguro. Em caso de violação de dados pessoais suscetível de representar um risco elevado para os seus direitos, informá-lo-ei nos termos do art.º 34.º RGPD.",
      ],
    },
    {
      title: "§10. Crianças",
      paragraphs: [
        "10.1. O serviço não se destina a crianças com menos de 16 anos. Não trato conscientemente dados de crianças com menos de 16 anos sem consentimento de um titular das responsabilidades parentais.",
        "10.2. Se acreditar que uma criança forneceu dados sem consentimento parental, contacte {{email}} — os dados serão eliminados.",
      ],
    },
    {
      title: "§11. Alterações a esta política",
      paragraphs: [
        "11.1. Esta política pode ser atualizada para refletir alterações no serviço, nas tecnologias ou na legislação.",
        "11.2. Alterações significativas serão comunicadas através de notificação no serviço ou por e-mail (para utilizadores com conta).",
        "11.3. A versão em vigor está sempre disponível em /polityka-prywatnosci.",
      ],
    },
  ],
  footerNote:
    "Questões de privacidade: {{email}}. Termos de utilização disponíveis em /regulamin.",
}
