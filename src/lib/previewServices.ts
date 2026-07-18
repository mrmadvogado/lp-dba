export type ServiceSection = {
  heading: string;
  paragraphs: string[];
  items?: { title: string; text: string }[];
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type PreviewService = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  intro: string;
  summary: string;
  points: string[];
  sections: ServiceSection[];
  alert: string;
  faqs: ServiceFaq[];
  relatedSlugs: string[];
};

export const previewServices: PreviewService[] = [
  {
    slug: "busca-apreensao-veiculos",
    title: "Busca e Apreensão de Veículos",
    description:
      "Entenda o processo, os prazos após a apreensão e os pontos que podem ser analisados na defesa do veículo financiado.",
    image: "/images/services/busca-apreensao-veiculos.jpg",
    imageAlt: "Veículo sendo transportado após busca e apreensão",
    intro:
      "A busca e apreensão de veículo financiado exige análise rápida do processo, do contrato e dos prazos. A apreensão não encerra automaticamente a possibilidade de defesa, mas a medida adequada depende dos documentos e da fase do caso.",
    summary:
      "O banco pode pedir a busca e apreensão quando sustenta que houve atraso em contrato com alienação fiduciária. Antes e depois da retirada do veículo, devem ser conferidos a constituição em mora, a decisão judicial, os valores apresentados e a regularidade do procedimento.",
    points: [
      "Data da apreensão, número do processo e conteúdo da decisão judicial",
      "Notificação extrajudicial e endereço informado no contrato",
      "Contrato, planilha do débito, juros, tarifas e evolução das parcelas",
      "Prazos para pagamento da integralidade da dívida e apresentação de defesa",
    ],
    sections: [
      {
        heading: "Como funciona a busca e apreensão de veículo financiado",
        paragraphs: [
          "Nos financiamentos com alienação fiduciária, o veículo permanece vinculado ao contrato até a quitação. Diante do atraso, a instituição financeira pode constituir o devedor em mora e ajuizar a ação prevista no Decreto-Lei 911/69. Se os requisitos iniciais forem aceitos, o juiz pode conceder liminar para a localização e apreensão do bem.",
          "A equipe responsável pelo cumprimento da ordem deve atuar dentro dos limites do mandado. Depois da apreensão, o processo continua: abrem-se prazos legais e o banco precisa demonstrar que cumpriu as exigências aplicáveis. Por isso, contrato, notificação, petição inicial, decisão e certidão de apreensão devem ser examinados em conjunto.",
        ],
        items: [
          { title: "Antes da apreensão", text: "É possível verificar se existe processo, acompanhar eventual decisão e organizar os documentos para uma resposta rápida." },
          { title: "Depois da apreensão", text: "A data exata da retirada do veículo passa a ser essencial para calcular os prazos e avaliar pagamento, contestação e outras medidas cabíveis." },
        ],
      },
      {
        heading: "Quais são os principais prazos após a apreensão",
        paragraphs: [
          "Executada a liminar, a legislação prevê cinco dias para o pagamento da integralidade da dívida apresentada pelo credor, hipótese em que o bem deve ser restituído livre do vínculo. Também existe prazo de quinze dias para apresentação de resposta, contado conforme as regras processuais aplicáveis ao caso.",
          "Esses prazos possuem finalidades diferentes e não devem ser confundidos. A viabilidade de pagar, discutir o valor cobrado ou apresentar defesa precisa ser definida com base no processo concreto. Mesmo quando o prazo de cinco dias já passou, ainda pode haver matéria defensiva a ser examinada.",
        ],
      },
      {
        heading: "O que pode ser contestado na ação",
        paragraphs: [
          "A defesa não se resume a afirmar que houve cobrança elevada. É necessário identificar fundamentos demonstráveis nos documentos. Entre os pontos frequentes estão a regularidade da notificação, a correspondência entre o endereço utilizado e o contrato, a composição da dívida, a legitimidade das partes e o cumprimento dos atos processuais.",
          "Questões contratuais também podem ser relevantes, mas a existência de uma ação revisional ou a simples alegação de abusividade não suspende automaticamente a busca e apreensão. O efeito jurídico depende do fundamento, da prova apresentada e da decisão do juízo.",
        ],
        items: [
          { title: "Constituição em mora", text: "Confere-se a documentação usada para demonstrar o atraso e a forma de envio da notificação." },
          { title: "Débito apresentado", text: "A planilha deve ser confrontada com o contrato, pagamentos realizados e encargos efetivamente previstos." },
          { title: "Regularidade processual", text: "São avaliados competência, representação, decisão, cumprimento do mandado e demais atos relevantes." },
        ],
      },
      {
        heading: "É possível recuperar o veículo apreendido?",
        paragraphs: [
          "A devolução pode ocorrer pelo pagamento da integralidade da dívida no prazo legal ou por decisão judicial quando houver fundamento para revogar a apreensão. Não existe resposta única: o resultado depende da fase do processo, dos documentos e da interpretação do juízo.",
          "Para uma análise inicial, normalmente são úteis o contrato, comprovantes de pagamento, notificação recebida, mandado ou termo de apreensão e o número do processo. Se algum documento ainda não estiver disponível, o número do CPF e os dados do veículo podem ajudar a localizar as informações básicas.",
        ],
      },
    ],
    alert:
      "Se o veículo já foi apreendido, registre a data e procure o número do processo. Não assine proposta de entrega, confissão ou renegociação sem compreender o saldo e os efeitos do documento.",
    faqs: [
      { question: "Uma parcela atrasada pode gerar busca e apreensão?", answer: "Em tese, o inadimplemento pode permitir a constituição em mora e o ajuizamento da ação, sem número mínimo universal de parcelas. O banco ainda precisa atender aos requisitos legais e contratuais." },
      { question: "Apreenderam o carro. Ainda posso apresentar defesa?", answer: "Sim. A apreensão não encerra o processo. Existem prazos para pagamento da integralidade da dívida apresentada e para resposta, além de matérias que podem ser analisadas conforme os documentos." },
      { question: "A ação revisional impede a apreensão?", answer: "Não automaticamente. A revisão contratual, por si só, não afasta a mora nem suspende a liminar. É necessária análise do fundamento, da prova e de eventual decisão judicial." },
      { question: "Quais documentos devo enviar?", answer: "Se disponíveis: contrato, parcelas pagas, notificação, mandado ou termo de apreensão, proposta do banco e número do processo. A falta de um documento não impede o contato inicial." },
    ],
    relatedSlugs: ["mandado-busca-apreensao", "defesa-alienacao-fiduciaria", "acao-revisional-financiamento"],
  },
  {
    slug: "mandado-busca-apreensao",
    title: "Mandado de Busca e Apreensão",
    description:
      "Saiba o que significa a expedição do mandado, como agir diante do cumprimento e quais documentos precisam ser conferidos.",
    image: "/images/services/mandado-busca-apreensao.jpg",
    imageAlt: "Mandado judicial e elementos de análise jurídica",
    intro:
      "A existência de mandado indica que já houve uma decisão no processo. Identificar o número da ação, o alcance da ordem e a data dos atos permite avaliar com precisão os próximos passos.",
    summary:
      "O mandado não é uma cobrança informal do banco: é uma ordem judicial expedida em processo específico. A atuação deve começar pela leitura do processo e pela verificação de quem está autorizado a cumprir a medida.",
    points: [
      "Autenticidade, origem e limites da ordem judicial apresentada",
      "Data da decisão, expedição e efetivo cumprimento do mandado",
      "Petição do banco, notificação e demonstrativo do débito",
      "Prazos em curso e medidas compatíveis com o estágio do processo",
    ],
    sections: [
      {
        heading: "O que significa receber ou tomar conhecimento do mandado",
        paragraphs: [
          "O mandado é expedido depois que o juiz analisa o pedido inicial do credor e concede a liminar. Ele identifica o processo, o veículo e as providências autorizadas. A ordem deve ser cumprida por agente autorizado, observando-se o conteúdo da decisão e as formalidades registradas nos autos.",
          "Mensagens de cobrança, telefonemas ou ameaças de empresas terceirizadas não substituem o mandado judicial. Se alguém se apresentar para retirar o bem, é importante pedir identificação, registrar os dados do processo e evitar confronto. A legalidade da diligência pode ser discutida pelos meios processuais adequados.",
        ],
      },
      {
        heading: "O que fazer quando o banco informa que existe uma ordem",
        paragraphs: [
          "O primeiro passo é localizar o processo e confirmar se há decisão vigente. Com essas informações, torna-se possível verificar o juízo responsável, a documentação apresentada pelo banco e se a ordem corresponde ao veículo e às partes do contrato.",
          "Também deve ser analisado se houve alguma tentativa anterior de citação, se o veículo já foi localizado e se existem recursos ou petições pendentes. Ocultar ou transferir irregularmente o bem pode ampliar o problema; a orientação deve ser construída dentro do processo.",
        ],
        items: [
          { title: "Confirme o processo", text: "Solicite o número completo, tribunal e vara. Não dependa apenas do que foi informado por telefone." },
          { title: "Preserve os documentos", text: "Guarde mensagens, notificações, propostas, comprovantes e qualquer documento recebido durante a diligência." },
          { title: "Evite assinatura precipitada", text: "Termos de entrega ou renegociação podem reconhecer valores e produzir efeitos adicionais." },
        ],
      },
      {
        heading: "Como o mandado pode ser analisado juridicamente",
        paragraphs: [
          "A análise alcança a decisão que autorizou a medida, a prova da mora, a descrição do veículo, o saldo indicado e a forma de cumprimento. Eventuais divergências precisam ser demonstradas objetivamente e levadas ao juízo competente.",
          "Quando a apreensão já ocorreu, a certidão do oficial ou o termo correspondente ajuda a estabelecer a data e as circunstâncias da retirada. Quando ainda não ocorreu, a urgência está em conhecer o processo e preparar a resposta antes que novos atos sejam praticados.",
        ],
      },
      {
        heading: "Mandado cumprido: quais caminhos podem existir",
        paragraphs: [
          "Depois do cumprimento, podem ser avaliados o pagamento da integralidade da dívida apresentada, a defesa processual e outras medidas relacionadas a irregularidades comprováveis. Nenhuma dessas alternativas é automática; elas dependem da capacidade de pagamento, do conteúdo do contrato e do que consta nos autos.",
          "A rapidez é relevante porque a consolidação da propriedade e a futura alienação do bem seguem o procedimento legal. Uma consulta objetiva deve indicar quais documentos faltam, quais prazos estão correndo e o que pode ser pedido de forma fundamentada.",
        ],
      },
    ],
    alert:
      "Diante de uma diligência, preserve sua segurança, peça identificação e anote o número do processo. A discussão sobre a validade do mandado deve ser feita no processo, sem resistência física.",
    faqs: [
      { question: "Como saber se o mandado é verdadeiro?", answer: "Confira o número do processo, o tribunal, a vara, os nomes das partes e a identificação do agente responsável. O processo pode ser confirmado no portal do tribunal ou por consulta profissional." },
      { question: "Posso impedir que levem o veículo?", answer: "Não é recomendável resistir fisicamente ao cumprimento de uma ordem judicial. Eventuais irregularidades devem ser documentadas e submetidas ao juízo pelos instrumentos adequados." },
      { question: "O banco pode entrar na minha residência?", answer: "O alcance da diligência depende da ordem judicial e das regras constitucionais e processuais aplicáveis. O conteúdo do mandado precisa ser examinado antes de qualquer conclusão." },
      { question: "Se eu não recebi citação, o mandado pode existir?", answer: "A liminar de busca e apreensão pode ser concedida antes da citação. Depois do cumprimento, o processo segue e os prazos de resposta devem ser observados." },
    ],
    relatedSlugs: ["busca-apreensao-veiculos", "defesa-alienacao-fiduciaria", "entrega-amigavel-veiculo"],
  },
  {
    slug: "defesa-alienacao-fiduciaria",
    title: "Defesa em Alienação Fiduciária",
    description:
      "Compreenda a garantia fiduciária, os direitos do consumidor e os pontos do contrato e do procedimento que podem ser analisados.",
    image: "/images/services/alienacao-fiduciaria.jpg",
    imageAlt: "Contrato de financiamento de veículo em análise",
    intro:
      "Na alienação fiduciária, o veículo garante o financiamento até a quitação. A defesa exige a leitura do contrato e a conferência do procedimento usado pelo credor para constituir a mora e pedir a apreensão.",
    summary:
      "Quem utiliza o veículo possui a posse direta, enquanto a propriedade fiduciária permanece vinculada ao credor. O atraso pode levar à busca e apreensão, mas o banco deve observar as exigências legais e prestar contas da dívida e da eventual venda do bem.",
    points: [
      "Cláusulas do financiamento e identificação da garantia fiduciária",
      "Notificação, demonstração do atraso e documentos apresentados pelo credor",
      "Composição do saldo, encargos de mora e pagamentos já realizados",
      "Consolidação da propriedade, venda do veículo e prestação de contas",
    ],
    sections: [
      {
        heading: "O que é alienação fiduciária de veículo",
        paragraphs: [
          "A alienação fiduciária é uma garantia comum nos contratos de financiamento. O comprador utiliza o veículo, mas o bem permanece juridicamente vinculado à dívida. Após a quitação, o gravame deve ser baixado; durante o contrato, o inadimplemento pode permitir que o credor busque a retomada judicial.",
          "Essa estrutura não elimina os direitos do consumidor nem autoriza qualquer forma de cobrança. Contrato, informação prévia, encargos e procedimento de recuperação do bem continuam sujeitos à legislação e ao controle judicial.",
        ],
      },
      {
        heading: "Como a mora é demonstrada",
        paragraphs: [
          "Para pedir a busca e apreensão, o credor precisa demonstrar a mora conforme a disciplina legal e a jurisprudência aplicável. Um ponto relevante é o envio da notificação ao endereço indicado no contrato, sem que isso signifique que toda correspondência devolvida torne a ação automaticamente inválida.",
          "Devem ser conferidos o endereço contratual, o comprovante de envio, a identificação do contrato e a documentação anexada ao processo. Divergências materiais podem ter importância, mas precisam ser interpretadas à luz do caso e dos precedentes vigentes.",
        ],
      },
      {
        heading: "Direitos após a apreensão e venda do bem",
        paragraphs: [
          "Após a apreensão, a lei estabelece prazo para o pagamento da integralidade da dívida apresentada. Se não houver pagamento e a propriedade se consolidar, o veículo pode ser vendido. O valor obtido deve ser aplicado ao débito e às despesas admitidas, com prestação de contas.",
          "Se houver saldo positivo, ele deve ser devolvido ao devedor. Se o produto da venda não cobrir o débito e as despesas, o credor pode sustentar a existência de saldo remanescente. Por isso, laudos, valores de venda, despesas e memória de cálculo precisam ser acompanhados.",
        ],
        items: [
          { title: "Valor de venda", text: "Deve ser identificado e confrontado com a prestação de contas apresentada pelo credor." },
          { title: "Despesas deduzidas", text: "Custos atribuídos ao contrato ou à venda precisam ter origem e demonstração." },
          { title: "Saldo final", text: "Tanto eventual crédito do consumidor quanto saldo remanescente devem ser apurados com clareza." },
        ],
      },
      {
        heading: "Quando buscar análise especializada",
        paragraphs: [
          "A análise é especialmente importante quando existe ameaça de apreensão, processo localizado, retirada recente do bem, proposta de entrega amigável ou cobrança após leilão. Quanto mais cedo forem reunidos contrato e dados do processo, melhor será a definição dos prazos.",
          "O atendimento pode começar online. A sede da MRM Advogados fica em Cuiabá, e processos eletrônicos permitem análise e acompanhamento em outras cidades, sem criar uma unidade física onde ela não existe.",
        ],
      },
    ],
    alert:
      "A entrega ou apreensão do veículo não significa, por si só, quitação do financiamento. Solicite e preserve documentos sobre avaliação, venda, despesas e saldo apurado.",
    faqs: [
      { question: "O veículo é meu durante o financiamento?", answer: "Você possui a posse e o uso do bem, mas a propriedade fiduciária fica vinculada ao credor até a quitação e baixa do gravame." },
      { question: "A notificação precisa ser recebida pessoalmente?", answer: "A jurisprudência atual considera especialmente o envio ao endereço indicado no contrato. O documento concreto, o endereço e a forma de envio devem ser conferidos." },
      { question: "O banco precisa prestar contas da venda?", answer: "Sim. O valor da alienação deve ser aplicado à dívida e às despesas admitidas, com apuração de eventual saldo credor ou devedor." },
      { question: "Posso vender o veículo com gravame?", answer: "A transferência regular depende da situação do financiamento e da anuência ou quitação necessária. Negociações informais podem gerar riscos civis e processuais." },
    ],
    relatedSlugs: ["busca-apreensao-veiculos", "acao-revisional-financiamento", "entrega-amigavel-veiculo"],
  },
  {
    slug: "acao-revisional-financiamento",
    title: "Ação Revisional de Financiamento",
    description:
      "Veja quando a revisão contratual pode ser considerada e como juros, tarifas, seguros e saldo devedor são examinados.",
    image: "/images/services/acao-revisional-financiamento.jpg",
    imageAlt: "Advogado analisando contrato e cálculos de financiamento",
    intro:
      "A revisão contratual busca identificar cobranças ou condições que possam ser discutidas juridicamente. Ela depende da leitura do contrato, de cálculos e de comparação com as regras aplicáveis à operação.",
    summary:
      "Nem todo financiamento caro contém ilegalidade. A análise revisional precisa separar o custo normal do crédito das cobranças sem informação adequada, encargos indevidos ou divergências entre o que foi contratado e o que efetivamente foi cobrado.",
    points: [
      "Taxa mensal e anual, custo efetivo total e sistema de amortização",
      "Tarifas, seguros, serviços agregados e informação sobre contratação",
      "Encargos de atraso, evolução do saldo e pagamentos realizados",
      "Efeito da discussão contratual sobre eventual busca e apreensão",
    ],
    sections: [
      {
        heading: "Quando uma ação revisional pode fazer sentido",
        paragraphs: [
          "A revisão pode ser avaliada quando o contrato apresenta divergência entre taxas informadas e cobradas, inclusão questionável de serviços, encargos incompatíveis com a operação ou falta de transparência sobre o custo total. A conclusão exige contrato completo e memória de cálculo.",
          "A comparação isolada da parcela com a renda do consumidor não demonstra abusividade. Também não existe um percentual universal que torne todo juro ilegal. O contexto da contratação, a modalidade, a data e as taxas praticadas no mercado são elementos relevantes.",
        ],
      },
      {
        heading: "O que é analisado no contrato de financiamento",
        paragraphs: [
          "A taxa de juros remuneratórios, o custo efetivo total, a capitalização, a tarifa de cadastro, os registros, seguros e produtos agregados devem ser identificados. Depois, os valores são relacionados às parcelas e ao saldo devedor para verificar se a cobrança corresponde ao documento assinado.",
          "Algumas cobranças podem ser válidas quando informadas e efetivamente contratadas; outras dependem de prova do serviço ou da liberdade de escolha. Por isso, uma avaliação responsável evita prometer redução antes de conhecer o instrumento e os pagamentos.",
        ],
        items: [
          { title: "Juros", text: "Compara-se a taxa contratual, a taxa efetiva e o contexto econômico da operação." },
          { title: "Tarifas e seguros", text: "Verifica-se a previsão, a prestação do serviço e as condições de contratação." },
          { title: "Saldo devedor", text: "Reconstituem-se pagamentos, encargos e amortização para localizar divergências." },
        ],
      },
      {
        heading: "A revisão impede a busca e apreensão?",
        paragraphs: [
          "O ajuizamento da ação revisional não impede automaticamente a busca e apreensão e não autoriza simplesmente deixar de pagar. Para produzir efeito sobre a mora ou sobre uma liminar, é necessária decisão judicial baseada em fundamento e prova adequados.",
          "Quando já existe atraso ou processo de apreensão, as duas situações precisam ser analisadas de forma coordenada. A estratégia deve considerar risco imediato, prazo processual, valores incontroversos e a possibilidade concreta de tutela judicial.",
        ],
      },
      {
        heading: "Quais resultados jurídicos podem ser buscados",
        paragraphs: [
          "Conforme o que for comprovado, podem ser formulados pedidos de recálculo do saldo, afastamento de cobranças específicas, restituição ou compensação de valores e adequação das parcelas. O acolhimento e a extensão desses pedidos dependem da prova e da decisão judicial.",
          "Em alguns casos, a melhor solução pode ser usar a análise técnica para negociar; em outros, a via judicial é necessária. A escolha deve levar em conta custo, tempo, situação do veículo e diferença econômica efetivamente identificada.",
        ],
      },
    ],
    alert:
      "Desconfie de promessas de reduzir qualquer financiamento pela metade. Uma revisão séria começa pelo contrato e pelos cálculos; o ajuizamento, sozinho, não suspende parcelas nem impede apreensão.",
    faqs: [
      { question: "Todo juro acima de 12% ao ano é abusivo?", answer: "Não. Contratos bancários não se tornam automaticamente ilegais por ultrapassar esse percentual. A taxa deve ser avaliada no contexto da operação e da jurisprudência aplicável." },
      { question: "Posso parar de pagar ao entrar com a ação?", answer: "Não há autorização automática para interromper pagamentos. Isso pode aumentar o débito e o risco de medidas do credor, salvo decisão judicial específica." },
      { question: "A parcela pode diminuir?", answer: "Pode haver recálculo se forem comprovadas cobranças revisáveis, mas o valor final depende do contrato, dos cálculos e da decisão ou negociação." },
      { question: "Preciso do contrato completo?", answer: "Ele é o principal documento. Também ajudam carnê, comprovantes, extrato da evolução da dívida, propostas e comunicações do banco." },
    ],
    relatedSlugs: ["juros-abusivos-financiamento", "busca-apreensao-veiculos", "defesa-alienacao-fiduciaria"],
  },
  {
    slug: "juros-abusivos-financiamento",
    title: "Juros Abusivos no Financiamento",
    description:
      "Entenda como juros e custo efetivo total são avaliados e quais cobranças do financiamento podem exigir revisão técnica.",
    image: "/images/services/juros-abusivos-financiamento.jpg",
    imageAlt: "Cálculo de juros em contrato de financiamento de veículo",
    intro:
      "A avaliação de possíveis juros abusivos não se limita à comparação de percentuais. É necessário examinar a taxa contratada, o custo efetivo total, a data da operação e os demais encargos que compõem as parcelas.",
    summary:
      "Juros altos e juros juridicamente revisáveis não são expressões equivalentes. A análise técnica verifica se a taxa foi informada, se os cálculos correspondem ao contrato e se há discrepância relevante diante das circunstâncias da operação.",
    points: [
      "Taxas mensal e anual e sua correspondência matemática",
      "Custo efetivo total, capitalização e sistema de amortização",
      "Tarifas, seguros e produtos incluídos no valor financiado",
      "Encargos de atraso e impacto sobre o saldo cobrado",
    ],
    sections: [
      {
        heading: "Como identificar sinais de cobrança excessiva",
        paragraphs: [
          "Diferença entre a taxa divulgada e a taxa aplicada, produtos não solicitados, custo total pouco claro e saldo que não corresponde aos pagamentos podem indicar a necessidade de análise. Esses sinais não provam sozinhos uma ilegalidade, mas orientam a conferência documental.",
          "A taxa média divulgada pelo Banco Central pode servir como referência econômica para operações semelhantes na época da contratação. Ela não funciona como teto automático. A revisão judicial costuma exigir discrepância relevante e avaliação das particularidades do contrato.",
        ],
      },
      {
        heading: "Por que o custo efetivo total é importante",
        paragraphs: [
          "O custo efetivo total reúne juros e despesas relacionadas à operação. Uma taxa nominal aparentemente competitiva pode resultar em custo maior quando seguros, tarifas, registros e serviços são financiados junto com o veículo.",
          "A análise separa cada componente, verifica a informação fornecida ao consumidor e examina se houve contratação válida. Também é conferido se taxas mensais e anuais guardam equivalência e se a evolução do saldo acompanha o sistema previsto.",
        ],
        items: [
          { title: "Taxa remuneratória", text: "É o preço do crédito e deve estar claramente indicada no contrato." },
          { title: "Encargos acessórios", text: "Seguros, tarifas e serviços podem elevar o valor financiado e precisam ser identificados." },
          { title: "Mora", text: "Multa, juros de atraso e outros encargos incidem após o inadimplemento e também devem ser conferidos." },
        ],
      },
      {
        heading: "Juros abusivos e busca e apreensão",
        paragraphs: [
          "Uma discussão sobre encargos da normalidade contratual pode ter reflexos na caracterização da mora, mas isso não acontece de forma automática. O fundamento precisa ser específico, acompanhado de cálculo e submetido ao juízo responsável.",
          "Se já houver ação de busca e apreensão, a prioridade é combinar a análise financeira com os documentos processuais. A existência de juros questionáveis não deve ser tratada como promessa de devolução do veículo ou cancelamento da dívida.",
        ],
      },
      {
        heading: "Como é feita uma análise responsável",
        paragraphs: [
          "O trabalho começa pela obtenção do contrato, histórico de pagamentos e demonstrativo atualizado. Depois são identificadas as taxas, tarifas e forma de amortização. Havendo divergência relevante, avaliam-se negociação, reclamação administrativa ou medida judicial.",
          "O objetivo é mostrar ao cliente, em números, o que foi contratado, o que foi cobrado e qual tese possui suporte. Essa transparência evita ações baseadas apenas em expectativa e permite decidir com melhor relação entre custo, risco e possível benefício.",
        ],
      },
    ],
    alert:
      "Cálculos sem acesso ao contrato completo podem gerar conclusões erradas. Antes de contratar uma promessa de redução, confirme quais cobranças foram identificadas e qual fundamento jurídico será utilizado.",
    faqs: [
      { question: "Como saber se a taxa é abusiva?", answer: "É preciso comparar contrato, modalidade, data, custo efetivo e referências de mercado, além de verificar como a jurisprudência trata a discrepância encontrada." },
      { question: "A taxa média do Banco Central é um limite?", answer: "Não é um teto automático. Ela serve como referência, e a análise considera a diferença concreta e as circunstâncias da contratação." },
      { question: "Seguro no financiamento é sempre ilegal?", answer: "Não. Deve-se verificar informação, liberdade de escolha, consentimento e efetiva contratação. A simples existência do seguro não define a resposta." },
      { question: "Posso revisar um contrato já quitado?", answer: "Dependendo das cobranças e dos prazos jurídicos, pode haver interesse em analisar valores pagos. A viabilidade exige documentos e exame individual." },
    ],
    relatedSlugs: ["acao-revisional-financiamento", "busca-apreensao-veiculos", "entrega-amigavel-veiculo"],
  },
  {
    slug: "entrega-amigavel-veiculo",
    title: "Entrega Amigável de Veículo",
    description:
      "Conheça os efeitos da devolução, os riscos de saldo remanescente e os cuidados necessários antes de assinar uma proposta.",
    image: "/images/services/entrega-amigavel-veiculo.jpg",
    imageAlt: "Entrega de chave de veículo e análise de documento",
    intro:
      "Entregar o veículo à instituição financeira nem sempre encerra a dívida. Antes de formalizar a devolução, é importante compreender como o bem será vendido, quais despesas serão descontadas e se poderá restar saldo.",
    summary:
      "A expressão “entrega amigável” pode transmitir ideia de quitação, mas o efeito depende do documento. Em muitos casos, o veículo é recebido para posterior venda e o consumidor continua responsável por eventual diferença entre o valor apurado e a dívida.",
    points: [
      "Se o termo prevê quitação total ou apenas recebimento do bem",
      "Forma de avaliação, venda e comunicação do valor obtido",
      "Despesas que poderão ser deduzidas e prestação de contas",
      "Saldo remanescente, restrições e alternativas antes da assinatura",
    ],
    sections: [
      {
        heading: "Entrega amigável quita o financiamento?",
        paragraphs: [
          "Somente a redação do acordo permite responder. Alguns documentos podem prever quitação expressa; outros apenas autorizam a retomada e venda do veículo. Nesta segunda hipótese, o valor obtido é abatido da dívida e pode permanecer saldo a cobrar.",
          "Promessas feitas por telefone precisam constar do instrumento. É importante verificar se haverá baixa do gravame, encerramento de cobranças, retirada de apontamentos e emissão de comprovante final. Sem isso, o consumidor pode perder o veículo e ainda enfrentar cobrança posterior.",
        ],
      },
      {
        heading: "O que conferir antes de entregar o veículo",
        paragraphs: [
          "O termo deve identificar veículo, contrato, saldo considerado e consequência da entrega. Também deve esclarecer quem arca com transporte, pátio, comissão, reparos e outras despesas, bem como a forma de prestação de contas após a venda.",
          "Registre o estado do veículo, quilometragem, acessórios e documentos entregues. Guarde cópia assinada do termo e do protocolo. Se houver ação judicial, a entrega administrativa não substitui automaticamente as providências que precisam ser adotadas no processo.",
        ],
        items: [
          { title: "Quitação expressa", text: "Procure redação clara sobre extinção integral da dívida, e não apenas frases genéricas de recebimento." },
          { title: "Venda e avaliação", text: "Entenda como o preço será definido e quando você receberá a prestação de contas." },
          { title: "Baixas e registros", text: "O acordo deve tratar de gravame, restrições, apontamentos e eventual processo em andamento." },
        ],
      },
      {
        heading: "Quais alternativas podem ser comparadas",
        paragraphs: [
          "Antes da entrega, podem ser comparadas renegociação direta, venda autorizada para quitação, portabilidade quando possível e revisão de cobranças específicas. Nenhuma alternativa serve para todos os casos; o valor de mercado do veículo e o saldo do financiamento são decisivos.",
          "Quando o veículo vale menos que a dívida, a negociação sobre o saldo é especialmente importante. Quando vale mais, uma venda organizada pode preservar parte do patrimônio. O cálculo deve considerar também parcelas vencidas, encargos e custos de encerramento.",
        ],
      },
      {
        heading: "E se já existir busca e apreensão",
        paragraphs: [
          "A proposta de entrega pode ocorrer quando já existe processo ou ameaça concreta. Nesse cenário, é necessário saber se o acordo inclui desistência da ação, custas, honorários, prazo para baixa e destinação do veículo.",
          "Assinar sem conhecer o processo pode eliminar alternativas ou reconhecer um saldo controvertido. A análise prévia não significa recusar toda composição; significa negociar com clareza sobre os efeitos econômicos e jurídicos.",
        ],
      },
    ],
    alert:
      "Não entregue chaves e documento sem protocolo e cópia do termo. Se a promessa for de quitação total, essa condição deve estar escrita de modo claro no acordo.",
    faqs: [
      { question: "Depois da entrega posso continuar devendo?", answer: "Sim, se o acordo não trouxer quitação total e o valor líquido da venda for inferior ao saldo e às despesas admitidas." },
      { question: "O banco é obrigado a aceitar a devolução?", answer: "A entrega amigável normalmente depende de acordo. As condições devem ser negociadas e formalizadas por escrito." },
      { question: "Posso vender o carro para pagar o banco?", answer: "Pode haver caminhos para venda com anuência e quitação do gravame. A operação precisa ser coordenada com a instituição para permitir transferência regular." },
      { question: "O processo acaba quando entrego o veículo?", answer: "Não necessariamente. O acordo deve indicar as providências processuais, custas, honorários e eventual saldo. É preciso acompanhar a formalização nos autos." },
    ],
    relatedSlugs: ["busca-apreensao-veiculos", "acao-revisional-financiamento", "juros-abusivos-financiamento"],
  },
];

export function getPreviewService(slug: string) {
  return previewServices.find((service) => service.slug === slug);
}
