export type MtLocation = {
  slug: string;
  city: string;
  ibgeUrl: string;
  title: string;
  description: string;
  lead: string;
  context: string[];
  localPoints: { title: string; text: string }[];
  processNotes: string[];
  faqs: { question: string; answer: string }[];
  nearby: string[];
  hasOffice?: boolean;
  // Bloco de profundidade local: comarca, fórum e prática regional.
  // Diferencia a página de um template com nome de cidade trocado.
  judicial?: { title: string; text: string }[];
};

export const mtLocations: MtLocation[] = [
  {
    slug: "cuiaba",
    city: "Cuiabá",
    ibgeUrl: "https://www.ibge.gov.br/cidades-e-estados/mt/cuiaba.html",
    title: "Advogado de Busca e Apreensão em Cuiabá",
    description: "Defesa em busca e apreensão de veículo em Cuiabá, com análise de contrato, notificação, liminar e prazos.",
    lead: "Seu veículo foi apreendido em Cuiabá ou existe risco de busca e apreensão? Entenda as opções jurídicas aplicáveis ao caso e os prazos relevantes.",
    context: [
      "Cuiabá é a capital de Mato Grosso e concentra a sede do Tribunal de Justiça do estado, além de varas e unidades judiciárias que processam demandas bancárias. A localização física do escritório permite combinar atendimento digital com reunião presencial quando isso for útil ao caso.",
      "A retirada do veículo pode ocorrer em residência, trabalho, estacionamento ou via pública, conforme a ordem judicial. A prioridade é identificar o processo e a data da apreensão, não reunir uma lista extensa de documentos antes do primeiro contato.",
      "A MRM Advogados está na Rua Estevão de Mendonça, 471, Sala 14, bairro Popular, Cuiabá. Este é o único endereço divulgado como sede e corresponde aos dados institucionais do escritório.",
    ],
    localPoints: [
      { title: "Sede em Cuiabá", text: "Atendimento na Rua Estevão de Mendonça, bairro Popular, com agendamento prévio." },
      { title: "Consulta do processo", text: "Verificação da ação, decisão, mandado e certidão de cumprimento no sistema do tribunal competente." },
      { title: "Atuação urgente", text: "Organização dos prazos a partir da data em que o veículo foi efetivamente apreendido." },
    ],
    processNotes: [
      "Informe se o veículo já foi apreendido e, se souber, o número do processo.",
      "O contrato, a notificação e os comprovantes podem ser enviados depois do contato inicial.",
      "A estratégia considera tanto o procedimento de busca e apreensão quanto as cobranças do financiamento.",
    ],
    faqs: [
      { question: "A MRM Advogados possui escritório em Cuiabá?", answer: "Sim. A sede fica na Rua Estevão de Mendonça, 471, Sala 14, bairro Popular, Cuiabá-MT, CEP 78045-420. O atendimento presencial é feito mediante agendamento." },
      { question: "Preciso ir ao escritório para começar?", answer: "Não. O primeiro contato pode ser feito pelo WhatsApp e os documentos podem ser enviados digitalmente. A reunião presencial é combinada se for útil." },
      { question: "O veículo apreendido em Várzea Grande pode ser analisado na sede de Cuiabá?", answer: "Sim. A proximidade metropolitana permite atendimento digital ou reunião na sede, sem alterar o juízo responsável pelo processo." },
    ],
    nearby: ["varzea-grande", "rondonopolis", "primavera-do-leste"],
    hasOffice: true,
  },
  {
    slug: "sinop",
    city: "Sinop",
    ibgeUrl: "https://www.ibge.gov.br/cidades-e-estados/mt/sinop.html",
    title: "Advogado de Busca e Apreensão em Sinop",
    description: "Defesa em busca e apreensão de veículo em Sinop, com análise de processo, contrato, notificação e prazos.",
    lead: "Seu veículo foi apreendido em Sinop ou existe risco de busca e apreensão? Entenda as opções jurídicas aplicáveis ao caso e os prazos relevantes.",
    context: [
      "Sinop é um dos principais centros urbanos do norte de Mato Grosso e atende uma extensa região. Em um processo urgente de busca e apreensão, aguardar uma viagem até Cuiabá pode consumir parte do tempo disponível; por isso, o fluxo foi estruturado para começar digitalmente.",
      "O atendimento local não significa a existência de unidade física em Sinop. A sede da MRM Advogados permanece em Cuiabá, enquanto a análise do processo, as reuniões e o envio de documentos podem ocorrer online.",
      "Veículos usados em deslocamentos longos, trabalho e atividades empresariais podem ter grande importância prática para a rotina do cliente. Essa urgência é considerada na organização do atendimento, sem prometer resultado antes de verificar o processo.",
    ],
    localPoints: [
      { title: "Atendimento online", text: "Contato inicial e reunião por vídeo, com sede institucional da MRM em Cuiabá." },
      { title: "Norte de Mato Grosso", text: "Página dedicada à intenção de busca de quem está em Sinop e municípios próximos." },
      { title: "Processo eletrônico", text: "A decisão e os documentos podem ser examinados remotamente quando disponíveis no tribunal." },
    ],
    processNotes: [
      "Envie o número do processo ou uma foto do mandado, caso tenha recebido.",
      "Informe a data e o local da apreensão para organizar a linha do tempo.",
      "Se o veículo ainda não foi tomado, comunique qualquer abordagem ou aviso do banco.",
    ],
    faqs: [
      { question: "Há escritório físico da MRM em Sinop?", answer: "Não. O atendimento em Sinop é online e a sede física fica em Cuiabá. Essa informação é mantida de forma transparente em todos os dados institucionais." },
      { question: "É possível atuar em processo que tramita em Sinop?", answer: "Processos eletrônicos permitem análise e prática de atos à distância, observadas as regras de representação e a necessidade concreta do caso." },
      { question: "Atendem também cidades próximas de Sinop?", answer: "Sim, o atendimento online pode alcançar municípios da região. Para Sorriso e Lucas do Rio Verde, há páginas próprias com informações específicas." },
    ],
    nearby: ["sorriso", "lucas-do-rio-verde", "cuiaba"],
  },
  {
    slug: "rondonopolis",
    city: "Rondonópolis",
    ibgeUrl: "https://www.ibge.gov.br/cidades-e-estados/mt/rondonopolis.html",
    title: "Advogado de Busca e Apreensão em Rondonópolis",
    description: "Defesa em busca e apreensão de veículo em Rondonópolis, com análise de mandado, mora, contrato e saldo devedor.",
    lead: "Seu veículo foi apreendido em Rondonópolis ou existe risco de busca e apreensão? Entenda as opções jurídicas aplicáveis ao caso e os prazos relevantes.",
    context: [
      "Rondonópolis é um polo regional do sul de Mato Grosso e possui fluxo intenso de veículos particulares, utilitários e de trabalho. Quando um bem financiado é apreendido, a consequência prática pode ser imediata, mas a resposta jurídica precisa ser construída a partir dos autos.",
      "O atendimento é prestado online a partir da sede da MRM Advogados em Cuiabá. Não divulgamos endereço ou unidade inexistente em Rondonópolis; a localização da página serve para responder às dúvidas e à intenção de busca de moradores da região.",
      "A conferência deve abranger a notificação enviada ao endereço do contrato, a planilha apresentada pelo banco, a decisão e o modo como o mandado foi cumprido. Se houver proposta de acordo, ela também deve ser confrontada com o saldo e o estágio do processo.",
    ],
    localPoints: [
      { title: "Resposta sem viagem inicial", text: "O caso começa por WhatsApp e reunião online, com troca segura dos documentos disponíveis." },
      { title: "Análise do mandado", text: "Verificação do juízo, veículo, partes e alcance da decisão que autorizou a medida." },
      { title: "Financiamento e saldo", text: "Conferência dos pagamentos, encargos e valor que o banco afirma ser devido." },
    ],
    processNotes: [
      "Não aguarde ter o contrato completo para informar que a apreensão ocorreu.",
      "Guarde o termo entregue durante a diligência e evite assinar nova confissão sem análise.",
      "Se o veículo for essencial ao trabalho, informe isso no atendimento e reúna os comprovantes possíveis.",
    ],
    faqs: [
      { question: "O atendimento em Rondonópolis é presencial?", answer: "O atendimento é online, pois a sede física da MRM fica em Cuiabá. A maior parte da análise e do acompanhamento de processos eletrônicos pode ser realizada a distância." },
      { question: "A apreensão em rodovia muda o processo?", answer: "O local do cumprimento deve constar da certidão, mas a estratégia depende da decisão, da competência e da regularidade dos atos. A documentação concreta precisa ser conferida." },
      { question: "Posso enviar apenas uma foto do mandado?", answer: "Sim. Uma imagem legível pode permitir identificar o número do processo e iniciar a localização dos autos. Os demais documentos são solicitados na sequência." },
    ],
    nearby: ["primavera-do-leste", "cuiaba", "varzea-grande"],
  },
  {
    slug: "varzea-grande",
    city: "Várzea Grande",
    ibgeUrl: "https://www.ibge.gov.br/cidades-e-estados/mt/varzea-grande.html",
    title: "Advogado de Busca e Apreensão em Várzea Grande",
    description: "Defesa em busca e apreensão de veículo em Várzea Grande, com análise de processo, contrato, notificação e prazos.",
    lead: "Seu veículo foi apreendido em Várzea Grande ou existe risco de busca e apreensão? Entenda as opções jurídicas aplicáveis ao caso e os prazos relevantes.",
    context: [
      "Várzea Grande integra a região metropolitana da capital e possui ligação diária intensa com Cuiabá. Essa proximidade permite um modelo híbrido: a urgência é tratada pelo WhatsApp e, quando fizer sentido, a reunião ocorre na sede do escritório no bairro Popular, em Cuiabá.",
      "Não existe unidade física da MRM Advogados em Várzea Grande. A página identifica a área de atendimento e fornece informações locais sem criar endereço artificial ou duplicar o perfil empresarial da sede.",
      "Em caso de apreensão, a data do cumprimento e o número do processo são mais importantes para o contato inicial do que uma pasta completa. Contrato, notificação, comprovantes e propostas podem ser organizados depois que a situação urgente for identificada.",
    ],
    localPoints: [
      { title: "Região metropolitana", text: "Atendimento digital imediato e opção de reunião agendada na sede em Cuiabá." },
      { title: "Sem endereço fictício", text: "A página informa a área atendida, preservando o único NAP institucional na capital." },
      { title: "Documentos depois", text: "O primeiro contato não depende de localizar todos os papéis antes de falar com o especialista." },
    ],
    processNotes: [
      "Informe se a retirada ocorreu em Várzea Grande ou em outro município.",
      "Envie foto do termo ou mandado, se tiver, para localizar rapidamente a ação.",
      "Reunião presencial em Cuiabá pode ser marcada sem interromper o trabalho online sobre o caso.",
    ],
    faqs: [
      { question: "A MRM possui endereço em Várzea Grande?", answer: "Não. A sede fica em Cuiabá. Várzea Grande é atendida online, com possibilidade de reunião presencial agendada na capital." },
      { question: "A proximidade de Cuiabá ajuda no atendimento?", answer: "Ela facilita uma eventual reunião presencial, mas a análise urgente normalmente começa online para evitar perda de tempo." },
      { question: "O atendimento abrange veículos apreendidos no aeroporto ou em estacionamento?", answer: "O local deve ser registrado e analisado com a certidão de cumprimento. O que define as medidas são a ordem judicial e as circunstâncias documentadas." },
    ],
    nearby: ["cuiaba", "rondonopolis", "primavera-do-leste"],
  },
  {
    slug: "lucas-do-rio-verde",
    city: "Lucas do Rio Verde",
    ibgeUrl: "https://www.ibge.gov.br/cidades-e-estados/mt/lucas-do-rio-verde.html",
    title: "Advogado de Busca e Apreensão em Lucas do Rio Verde",
    description: "Defesa em busca e apreensão de veículo em Lucas do Rio Verde, com análise de processo, contrato e prazos.",
    lead: "Seu veículo foi apreendido em Lucas do Rio Verde ou existe risco de busca e apreensão? Entenda as opções jurídicas aplicáveis ao caso e os prazos relevantes.",
    context: [
      "Lucas do Rio Verde está no eixo da BR-163 e possui forte circulação regional. Veículos particulares e de trabalho participam diretamente da rotina urbana e das atividades econômicas, tornando a perda da posse um problema que exige organização rápida.",
      "A página não representa uma filial no município. A MRM Advogados atende online a partir de Cuiabá e utiliza os autos eletrônicos para conferir decisão, mandado, notificação e valores apresentados pelo credor.",
      "A orientação considera o estágio concreto: ameaça ainda informal, liminar expedida, mandado em tentativa de cumprimento ou veículo já apreendido. Cada estágio muda a prioridade, os documentos e os pedidos que podem ser avaliados.",
    ],
    localPoints: [
      { title: "Eixo da BR-163", text: "Atendimento pensado para evitar que distância e deslocamento atrasem a análise urgente." },
      { title: "Etapa do processo", text: "Identificação rápida de ameaça, liminar, mandado ou apreensão já realizada." },
      { title: "Uso profissional", text: "A função do veículo pode ser documentada e considerada na construção do caso, sem assegurar resultado." },
    ],
    processNotes: [
      "Diga em qual data percebeu a ameaça ou ocorreu a retirada.",
      "Informe banco, modelo do veículo e CPF para ajudar na localização inicial.",
      "Encaminhe propostas de acordo antes de assinar, especialmente se houver entrega do bem.",
    ],
    faqs: [
      { question: "Preciso viajar de Lucas do Rio Verde para Cuiabá?", answer: "Normalmente não para iniciar. O atendimento, a reunião e a análise de documentos podem ser feitos online. Eventual necessidade presencial é avaliada caso a caso." },
      { question: "Veículo de trabalho recebe tratamento diferente?", answer: "A destinação pode ser relevante para alguns pedidos e para demonstrar urgência, mas não impede automaticamente a apreensão. É necessário provar as circunstâncias." },
      { question: "Atendem produtores e empresas?", answer: "A análise pode envolver pessoas físicas ou jurídicas, desde que a situação esteja dentro da atuação bancária do escritório e seja avaliada individualmente." },
    ],
    nearby: ["sorriso", "sinop", "cuiaba"],
  },
  {
    slug: "primavera-do-leste",
    city: "Primavera do Leste",
    ibgeUrl: "https://www.ibge.gov.br/cidades-e-estados/mt/primavera-do-leste.html",
    title: "Advogado de Busca e Apreensão em Primavera do Leste",
    description: "Defesa em busca e apreensão de veículo em Primavera do Leste, com análise de mora, liminar, contrato e prazos.",
    lead: "Seu veículo foi apreendido em Primavera do Leste ou existe risco de busca e apreensão? Entenda as opções jurídicas aplicáveis ao caso e os prazos relevantes.",
    context: [
      "Primavera do Leste é um centro regional do sudeste mato-grossense e mantém conexões rodoviárias importantes com outros municípios. Em situações de busca e apreensão, o atendimento digital reduz o tempo entre o cumprimento da medida e a leitura técnica do processo.",
      "A MRM Advogados não possui unidade física em Primavera do Leste. A sede institucional fica em Cuiabá, e a atuação na cidade é oferecida online, com transparência de endereço e registro profissional.",
      "Além do processo, é necessário confrontar a notificação e a memória de cálculo com o contrato. Uma proposta do banco pode ser considerada, mas deve deixar claro o valor, a destinação do veículo e o efeito sobre eventual saldo remanescente.",
    ],
    localPoints: [
      { title: "Sudeste de Mato Grosso", text: "Conteúdo e atendimento dirigidos a moradores de Primavera e à sua realidade regional." },
      { title: "Proposta do banco", text: "Leitura das condições de pagamento, entrega ou renegociação antes da assinatura." },
      { title: "Linha do tempo", text: "Organização de notificação, decisão, diligência e prazos a partir das datas documentadas." },
    ],
    processNotes: [
      "Fotografe o documento entregue no momento da apreensão.",
      "Não dependa de comparecimento presencial para iniciar a consulta do processo.",
      "Se houver coobrigado ou avalista, envie também os documentos que o banco encaminhou a essa pessoa.",
    ],
    faqs: [
      { question: "A distância até Cuiabá impede a defesa?", answer: "Não por si só. Processos eletrônicos e reuniões online permitem iniciar e acompanhar a análise a distância, conforme as necessidades do caso." },
      { question: "Posso negociar enquanto o processo tramita?", answer: "Em muitos casos há espaço para negociação, mas o acordo precisa ser compatível com os prazos e formalizado de forma a produzir os efeitos esperados no processo." },
      { question: "A página significa que existe filial em Primavera do Leste?", answer: "Não. Trata-se de área de atendimento online. A única sede divulgada pela MRM Advogados fica em Cuiabá." },
    ],
    nearby: ["rondonopolis", "cuiaba", "varzea-grande"],
  },
  {
    slug: "sorriso",
    city: "Sorriso",
    ibgeUrl: "https://www.ibge.gov.br/cidades-e-estados/mt/sorriso.html",
    title: "Advogado de Busca e Apreensão em Sorriso",
    description: "Defesa em busca e apreensão de veículo em Sorriso, com avaliação do processo, do financiamento e das alternativas jurídicas.",
    lead: "Seu veículo foi apreendido em Sorriso ou existe risco de busca e apreensão? Entenda as opções jurídicas aplicáveis ao caso e os prazos relevantes.",
    context: [
      "Sorriso ocupa posição relevante no corredor da BR-163 e mantém intensa integração com Sinop e Lucas do Rio Verde. A distância até Cuiabá torna o atendimento online especialmente útil quando há mandado em circulação ou apreensão recente.",
      "Não há escritório físico da MRM Advogados em Sorriso. A sede fica em Cuiabá e os dados locais desta página descrevem a área atendida, sem criar endereço virtual, filial ou perfil empresarial artificial.",
      "Contratos de veículos particulares, utilitários ou vinculados à atividade empresarial podem apresentar garantias e responsáveis diferentes. Antes de definir a medida, é necessário identificar quem contratou, qual bem foi dado em garantia e o que o banco pediu no processo.",
    ],
    localPoints: [
      { title: "Corredor regional", text: "Atendimento digital adequado à distância entre Sorriso e a sede do escritório em Cuiabá." },
      { title: "Pessoa física ou jurídica", text: "Identificação do contratante, garantidores e uso do veículo antes da definição da estratégia." },
      { title: "Apreensão recente", text: "Priorização da data, do processo e da decisão, sem exigir todos os documentos no primeiro contato." },
    ],
    processNotes: [
      "Informe se o financiamento está em nome de pessoa física ou empresa.",
      "Envie notificação, proposta ou foto do mandado se esses documentos estiverem disponíveis.",
      "Diga se houve entrega voluntária, apreensão judicial ou apenas ameaça de cobrança.",
    ],
    faqs: [
      { question: "A MRM atende empresas em Sorriso?", answer: "O escritório pode avaliar contratos e processos de pessoas jurídicas dentro da área bancária, após identificar partes, garantias e finalidade da operação." },
      { question: "A análise online tem validade?", answer: "A reunião e o envio digital de documentos são formas de atendimento. Petições e atos no processo seguem as exigências legais e a representação formal do cliente." },
      { question: "Também atendem a região de Sinop e Lucas?", answer: "Sim. Sinop e Lucas do Rio Verde possuem páginas próprias e o atendimento é realizado online a partir da sede de Cuiabá." },
    ],
    nearby: ["lucas-do-rio-verde", "sinop", "cuiaba"],
  },
  {
    slug: "tangara-da-serra",
    city: "Tangará da Serra",
    ibgeUrl: "https://www.ibge.gov.br/cidades-e-estados/mt/tangara-da-serra.html",
    title: "Advogado de Busca e Apreensão em Tangará da Serra",
    description:
      "Defesa em busca e apreensão de veículo em Tangará da Serra, com análise do processo na comarca local, contrato, notificação e prazos.",
    lead: "Seu veículo foi apreendido em Tangará da Serra ou existe risco de busca e apreensão? Entenda as opções jurídicas aplicáveis ao caso e os prazos relevantes.",
    context: [
      "Tangará da Serra é um dos principais municípios do médio-norte de Mato Grosso, com cerca de 104 mil habitantes no Censo 2022 do IBGE. O acesso à capital é feito pela MT-358 e rodovias integradas, em um trajeto de aproximadamente 240 km — distância que torna o atendimento digital a via mais rápida quando há mandado em circulação ou veículo já apreendido.",
      "A economia regional, fortemente ligada ao agronegócio, ao comércio e aos serviços, mantém circulação intensa de veículos financiados: caminhonetes de trabalho, utilitários de fazenda e carros de passeio. Quando um desses bens é apreendido, a rotina da família ou da atividade produtiva é atingida de imediato, e a resposta jurídica precisa partir da leitura do processo, não de promessas.",
      "A MRM Advogados não possui unidade física em Tangará da Serra. A sede fica em Cuiabá e o atendimento na cidade é online, com transparência sobre endereço e registro profissional — sem filial artificial nem perfil empresarial duplicado.",
    ],
    judicial: [
      {
        title: "Comarca própria",
        text: "Tangará da Serra sedia comarca do Tribunal de Justiça de Mato Grosso, com varas que processam as ações de busca e apreensão ajuizadas contra moradores e empresas da região.",
      },
      {
        title: "Processo eletrônico (PJe)",
        text: "As ações tramitam em meio eletrônico no TJMT, o que permite consultar a liminar, o mandado e a certidão de cumprimento à distância e praticar atos sem deslocamento até o fórum.",
      },
      {
        title: "Prazos contados do cumprimento",
        text: "Os 5 dias para pagamento da integralidade e os 15 dias para resposta (Decreto-Lei 911/69) correm a partir da execução do mandado pelo oficial de justiça da comarca — por isso a data exata da apreensão é a primeira informação a confirmar.",
      },
    ],
    localPoints: [
      { title: "Médio-norte de MT", text: "Página dedicada a quem está em Tangará da Serra e municípios do entorno, com atendimento digital imediato." },
      { title: "Veículo de trabalho", text: "Caminhonetes e utilitários ligados à atividade rural ou empresarial têm essa função considerada na análise do caso." },
      { title: "Sem viagem inicial", text: "Consulta, envio de documentos e reunião por vídeo — a ida a Cuiabá só ocorre se for útil ao processo." },
    ],
    processNotes: [
      "Confirme a data em que o mandado foi cumprido em Tangará da Serra e, se possível, o número do processo.",
      "Fotografe o termo entregue pelo oficial de justiça — ele identifica o juízo e a ação.",
      "Se o veículo é usado na atividade rural ou empresarial, separe comprovantes desse uso para a análise.",
    ],
    faqs: [
      {
        question: "A MRM Advogados tem escritório em Tangará da Serra?",
        answer: "Não. A sede fica em Cuiabá e o atendimento em Tangará da Serra é online. Essa informação é mantida com transparência: não divulgamos endereço ou filial que não existe.",
      },
      {
        question: "O processo tramita na comarca de Tangará da Serra. Um advogado de Cuiabá pode atuar?",
        answer: "Sim. As ações tramitam em meio eletrônico (PJe/TJMT), o que permite análise dos autos, peticionamento e acompanhamento à distância, observadas as regras de representação.",
      },
      {
        question: "Meu veículo foi apreendido na estrada, fora da cidade. Isso muda a defesa?",
        answer: "O local do cumprimento deve constar da certidão do oficial de justiça. O que define a estratégia são a decisão, a competência e a regularidade dos atos — a certidão é um dos documentos conferidos.",
      },
      {
        question: "Atendem financiamento de caminhonete ou veículo usado na fazenda?",
        answer: "Sim, desde que se trate de operação bancária com garantia sobre o veículo. O uso produtivo do bem pode ser documentado e considerado na condução do caso, sem promessa de resultado.",
      },
      {
        question: "Qual o prazo para agir depois da apreensão em Tangará da Serra?",
        answer: "Pela regra do Decreto-Lei 911/69, são 5 dias para pagamento da integralidade da dívida apresentada pelo banco e 15 dias para apresentar resposta no processo, contados do cumprimento do mandado. A contagem concreta depende dos autos.",
      },
    ],
    nearby: ["cuiaba", "varzea-grande", "sorriso"],
  },
];

export function getMtLocation(slug: string) {
  return mtLocations.find((location) => location.slug === slug);
}
