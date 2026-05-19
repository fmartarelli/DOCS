export type FaqIndexEntry = {
  category: string;
  categoryLabel: string;
  sourceTitle: string;
  to: string;
  question: string;
  answerText: string;
  normalizedQuestion: string;
  normalizedAnswer: string;
  normalizedSourceTitle: string;
};

export const faqIndex: FaqIndexEntry[] = [
  {
    "category": "cadastros",
    "categoryLabel": "Cadastros",
    "sourceTitle": "Categorias",
    "to": "/docs/cadastros/categorias",
    "question": "Posso cadastrar uma subcategoria sem escolher uma categoria?",
    "answerText": "Não. A subcategoria depende de uma categoria pai.",
    "normalizedQuestion": "posso cadastrar uma subcategoria sem escolher uma categoria?",
    "normalizedAnswer": "nao. a subcategoria depende de uma categoria pai.",
    "normalizedSourceTitle": "categorias"
  },
  {
    "category": "cadastros",
    "categoryLabel": "Cadastros",
    "sourceTitle": "Categorias",
    "to": "/docs/cadastros/categorias",
    "question": "Posso repetir a mesma descrição?",
    "answerText": "Não no mesmo contexto. O sistema valida nome repetido dentro do mesmo nível e do mesmo pai.",
    "normalizedQuestion": "posso repetir a mesma descricao?",
    "normalizedAnswer": "nao no mesmo contexto. o sistema valida nome repetido dentro do mesmo nivel e do mesmo pai.",
    "normalizedSourceTitle": "categorias"
  },
  {
    "category": "cadastros",
    "categoryLabel": "Cadastros",
    "sourceTitle": "Categorias",
    "to": "/docs/cadastros/categorias",
    "question": "Quantos níveis a estrutura pode ter?",
    "answerText": "A análise encontrou até 2 níveis: categoria subcategoria",
    "normalizedQuestion": "quantos niveis a estrutura pode ter?",
    "normalizedAnswer": "a analise encontrou ate 2 niveis: categoria subcategoria",
    "normalizedSourceTitle": "categorias"
  },
  {
    "category": "cadastros",
    "categoryLabel": "Cadastros",
    "sourceTitle": "Categorias",
    "to": "/docs/cadastros/categorias",
    "question": "Posso alterar uma categoria depois?",
    "answerText": "Sim. Existe a ação de alteração.",
    "normalizedQuestion": "posso alterar uma categoria depois?",
    "normalizedAnswer": "sim. existe a acao de alteracao.",
    "normalizedSourceTitle": "categorias"
  },
  {
    "category": "cadastros",
    "categoryLabel": "Cadastros",
    "sourceTitle": "Categorias",
    "to": "/docs/cadastros/categorias",
    "question": "Posso excluir um item da árvore?",
    "answerText": "Sim. Existe ação de exclusão por nível.",
    "normalizedQuestion": "posso excluir um item da arvore?",
    "normalizedAnswer": "sim. existe acao de exclusao por nivel.",
    "normalizedSourceTitle": "categorias"
  },
  {
    "category": "cadastros",
    "categoryLabel": "Cadastros",
    "sourceTitle": "Categorias",
    "to": "/docs/cadastros/categorias",
    "question": "Para que serve o caminho selecionado?",
    "answerText": "Serve para mostrar exatamente onde você está dentro da estrutura.",
    "normalizedQuestion": "para que serve o caminho selecionado?",
    "normalizedAnswer": "serve para mostrar exatamente onde voce esta dentro da estrutura.",
    "normalizedSourceTitle": "categorias"
  },
  {
    "category": "cadastros",
    "categoryLabel": "Cadastros",
    "sourceTitle": "Categorias",
    "to": "/docs/cadastros/categorias",
    "question": "Posso filtrar os itens por nome?",
    "answerText": "Sim. A tela possui filtro por descrição.",
    "normalizedQuestion": "posso filtrar os itens por nome?",
    "normalizedAnswer": "sim. a tela possui filtro por descricao.",
    "normalizedSourceTitle": "categorias"
  },
  {
    "category": "cadastros",
    "categoryLabel": "Cadastros",
    "sourceTitle": "Pessoas",
    "to": "/docs/cadastros/clientes",
    "question": "Posso cadastrar a mesma pessoa como cliente e fornecedor?",
    "answerText": "Sim. O mesmo cadastro pode ter mais de uma função.",
    "normalizedQuestion": "posso cadastrar a mesma pessoa como cliente e fornecedor?",
    "normalizedAnswer": "sim. o mesmo cadastro pode ter mais de uma funcao.",
    "normalizedSourceTitle": "pessoas"
  },
  {
    "category": "cadastros",
    "categoryLabel": "Cadastros",
    "sourceTitle": "Pessoas",
    "to": "/docs/cadastros/clientes",
    "question": "O sistema busca dados automaticamente pelo CNPJ?",
    "answerText": "Sim. Quando o documento é CNPJ, a tela pode buscar informações para ajudar no preenchimento.",
    "normalizedQuestion": "o sistema busca dados automaticamente pelo cnpj?",
    "normalizedAnswer": "sim. quando o documento e cnpj, a tela pode buscar informacoes para ajudar no preenchimento.",
    "normalizedSourceTitle": "pessoas"
  },
  {
    "category": "cadastros",
    "categoryLabel": "Cadastros",
    "sourceTitle": "Pessoas",
    "to": "/docs/cadastros/clientes",
    "question": "O que acontece se o CPF/CNPJ já estiver cadastrado?",
    "answerText": "O sistema avisa que já existe um cadastro e pode direcionar para a alteração desse registro.",
    "normalizedQuestion": "o que acontece se o cpf/cnpj ja estiver cadastrado?",
    "normalizedAnswer": "o sistema avisa que ja existe um cadastro e pode direcionar para a alteracao desse registro.",
    "normalizedSourceTitle": "pessoas"
  },
  {
    "category": "cadastros",
    "categoryLabel": "Cadastros",
    "sourceTitle": "Pessoas",
    "to": "/docs/cadastros/clientes",
    "question": "Posso salvar sem terminar de preencher um telefone ou endereço?",
    "answerText": "Não. Se houver item em preenchimento ou alteração, é preciso concluir ou cancelar antes.",
    "normalizedQuestion": "posso salvar sem terminar de preencher um telefone ou endereco?",
    "normalizedAnswer": "nao. se houver item em preenchimento ou alteracao, e preciso concluir ou cancelar antes.",
    "normalizedSourceTitle": "pessoas"
  },
  {
    "category": "cadastros",
    "categoryLabel": "Cadastros",
    "sourceTitle": "Pessoas",
    "to": "/docs/cadastros/clientes",
    "question": "Para que serve o limite de crédito?",
    "answerText": "Ele ajuda a controlar valores permitidos para aquele cadastro, quando a empresa usa esse recurso.",
    "normalizedQuestion": "para que serve o limite de credito?",
    "normalizedAnswer": "ele ajuda a controlar valores permitidos para aquele cadastro, quando a empresa usa esse recurso.",
    "normalizedSourceTitle": "pessoas"
  },
  {
    "category": "cadastros",
    "categoryLabel": "Cadastros",
    "sourceTitle": "Produtos e serviços",
    "to": "/docs/cadastros/produtos-e-servicos",
    "question": "Produto e serviço são cadastrados na mesma tela?",
    "answerText": "Sim. A mesma tela permite escolher entre Produto e Serviço .",
    "normalizedQuestion": "produto e servico sao cadastrados na mesma tela?",
    "normalizedAnswer": "sim. a mesma tela permite escolher entre produto e servico .",
    "normalizedSourceTitle": "produtos e servicos"
  },
  {
    "category": "cadastros",
    "categoryLabel": "Cadastros",
    "sourceTitle": "Produtos e serviços",
    "to": "/docs/cadastros/produtos-e-servicos",
    "question": "Posso cadastrar um serviço sem estoque?",
    "answerText": "Sim. O controle de estoque é mais importante para produtos físicos.",
    "normalizedQuestion": "posso cadastrar um servico sem estoque?",
    "normalizedAnswer": "sim. o controle de estoque e mais importante para produtos fisicos.",
    "normalizedSourceTitle": "produtos e servicos"
  },
  {
    "category": "operacao",
    "categoryLabel": "Operacao",
    "sourceTitle": "Agenda do Dia",
    "to": "/docs/operacao/agenda-do-dia",
    "question": "A Agenda do Dia mostra apenas Ordens de Serviço?",
    "answerText": "Não. A tela pode mostrar Ordens de Serviço , Orçamentos , Contas a Receber e Contas a Pagar .",
    "normalizedQuestion": "a agenda do dia mostra apenas ordens de servico?",
    "normalizedAnswer": "nao. a tela pode mostrar ordens de servico , orcamentos , contas a receber e contas a pagar .",
    "normalizedSourceTitle": "agenda do dia"
  },
  {
    "category": "operacao",
    "categoryLabel": "Operacao",
    "sourceTitle": "Agenda do Dia",
    "to": "/docs/operacao/agenda-do-dia",
    "question": "A agenda mostra os dados de qual dia?",
    "answerText": "Ela mostra os dados da data selecionada no topo da tela.",
    "normalizedQuestion": "a agenda mostra os dados de qual dia?",
    "normalizedAnswer": "ela mostra os dados da data selecionada no topo da tela.",
    "normalizedSourceTitle": "agenda do dia"
  },
  {
    "category": "operacao",
    "categoryLabel": "Operacao",
    "sourceTitle": "Agenda do Dia",
    "to": "/docs/operacao/agenda-do-dia",
    "question": "Posso abrir a agenda já filtrada?",
    "answerText": "Sim. A tela aceita abertura com parâmetros de data e também de tipo .",
    "normalizedQuestion": "posso abrir a agenda ja filtrada?",
    "normalizedAnswer": "sim. a tela aceita abertura com parametros de data e tambem de tipo .",
    "normalizedSourceTitle": "agenda do dia"
  },
  {
    "category": "operacao",
    "categoryLabel": "Operacao",
    "sourceTitle": "Agenda do Dia",
    "to": "/docs/operacao/agenda-do-dia",
    "question": "Posso ver somente contas ou somente orçamentos?",
    "answerText": "Sim. Basta clicar no card correspondente no topo da página.",
    "normalizedQuestion": "posso ver somente contas ou somente orcamentos?",
    "normalizedAnswer": "sim. basta clicar no card correspondente no topo da pagina.",
    "normalizedSourceTitle": "agenda do dia"
  },
  {
    "category": "operacao",
    "categoryLabel": "Operacao",
    "sourceTitle": "Agenda do Dia",
    "to": "/docs/operacao/agenda-do-dia",
    "question": "O que entra na agenda de Ordens de Serviço?",
    "answerText": "Entram O.S. agendadas, previstas para concluir no período e também ordens em execução ou em execução de garantia, conforme a regra encontrada no sistema.",
    "normalizedQuestion": "o que entra na agenda de ordens de servico?",
    "normalizedAnswer": "entram o.s. agendadas, previstas para concluir no periodo e tambem ordens em execucao ou em execucao de garantia, conforme a regra encontrada no sistema.",
    "normalizedSourceTitle": "agenda do dia"
  },
  {
    "category": "operacao",
    "categoryLabel": "Operacao",
    "sourceTitle": "Agenda do Dia",
    "to": "/docs/operacao/agenda-do-dia",
    "question": "O que entra na agenda de Orçamentos?",
    "answerText": "Entram orçamentos em aberto que tenham próximo contato ou validade dentro da data escolhida.",
    "normalizedQuestion": "o que entra na agenda de orcamentos?",
    "normalizedAnswer": "entram orcamentos em aberto que tenham proximo contato ou validade dentro da data escolhida.",
    "normalizedSourceTitle": "agenda do dia"
  },
  {
    "category": "operacao",
    "categoryLabel": "Operacao",
    "sourceTitle": "Agenda do Dia",
    "to": "/docs/operacao/agenda-do-dia",
    "question": "O que entra na agenda de Contas a Receber?",
    "answerText": "Entram contas em aberto com vencimento na data escolhida.",
    "normalizedQuestion": "o que entra na agenda de contas a receber?",
    "normalizedAnswer": "entram contas em aberto com vencimento na data escolhida.",
    "normalizedSourceTitle": "agenda do dia"
  },
  {
    "category": "operacao",
    "categoryLabel": "Operacao",
    "sourceTitle": "Agenda do Dia",
    "to": "/docs/operacao/agenda-do-dia",
    "question": "O que entra na agenda de Contas a Pagar?",
    "answerText": "Entram contas em aberto com vencimento na data escolhida.",
    "normalizedQuestion": "o que entra na agenda de contas a pagar?",
    "normalizedAnswer": "entram contas em aberto com vencimento na data escolhida.",
    "normalizedSourceTitle": "agenda do dia"
  },
  {
    "category": "operacao",
    "categoryLabel": "Operacao",
    "sourceTitle": "Listagem de Ordens de Serviço",
    "to": "/docs/operacao/listagem-de-ordens-de-servico",
    "question": "Posso ver as Ordens de Serviço em outro formato além da lista?",
    "answerText": "Sim. A tela permite alternar entre Lista e Board .",
    "normalizedQuestion": "posso ver as ordens de servico em outro formato alem da lista?",
    "normalizedAnswer": "sim. a tela permite alternar entre lista e board .",
    "normalizedSourceTitle": "listagem de ordens de servico"
  },
  {
    "category": "operacao",
    "categoryLabel": "Operacao",
    "sourceTitle": "Orçamentos",
    "to": "/docs/operacao/orcamentos",
    "question": "Posso criar um orçamento sem produtos ou serviços?",
    "answerText": "Sim. Nesse caso, você pode usar o campo valor orçado manual .",
    "normalizedQuestion": "posso criar um orcamento sem produtos ou servicos?",
    "normalizedAnswer": "sim. nesse caso, voce pode usar o campo valor orcado manual .",
    "normalizedSourceTitle": "orcamentos"
  },
  {
    "category": "operacao",
    "categoryLabel": "Operacao",
    "sourceTitle": "Ordens de serviço",
    "to": "/docs/operacao/ordens-de-servico",
    "question": "Posso abrir uma Ordem de Serviço sem orçamento?",
    "answerText": "Sim. A Ordem de Serviço pode ser criada diretamente no sistema.",
    "normalizedQuestion": "posso abrir uma ordem de servico sem orcamento?",
    "normalizedAnswer": "sim. a ordem de servico pode ser criada diretamente no sistema.",
    "normalizedSourceTitle": "ordens de servico"
  },
  {
    "category": "operacao",
    "categoryLabel": "Operacao",
    "sourceTitle": "Ordens de serviço",
    "to": "/docs/operacao/ordens-de-servico",
    "question": "Posso gerar uma Ordem de Serviço a partir de um orçamento?",
    "answerText": "Sim. Esse fluxo existe e ajuda a aproveitar as informações de um orçamento já aprovado.",
    "normalizedQuestion": "posso gerar uma ordem de servico a partir de um orcamento?",
    "normalizedAnswer": "sim. esse fluxo existe e ajuda a aproveitar as informacoes de um orcamento ja aprovado.",
    "normalizedSourceTitle": "ordens de servico"
  },
  {
    "category": "operacao",
    "categoryLabel": "Operacao",
    "sourceTitle": "Ordens de serviço",
    "to": "/docs/operacao/ordens-de-servico",
    "question": "Posso usar valor manual junto com produtos e serviços?",
    "answerText": "Não. O valor manual deve ser usado apenas quando não houver itens lançados.",
    "normalizedQuestion": "posso usar valor manual junto com produtos e servicos?",
    "normalizedAnswer": "nao. o valor manual deve ser usado apenas quando nao houver itens lancados.",
    "normalizedSourceTitle": "ordens de servico"
  },
  {
    "category": "operacao",
    "categoryLabel": "Operacao",
    "sourceTitle": "Ordens de serviço",
    "to": "/docs/operacao/ordens-de-servico",
    "question": "O pagamento é obrigatório?",
    "answerText": "Sim. A ordem precisa ter os dados de pagamento preenchidos de forma correta.",
    "normalizedQuestion": "o pagamento e obrigatorio?",
    "normalizedAnswer": "sim. a ordem precisa ter os dados de pagamento preenchidos de forma correta.",
    "normalizedSourceTitle": "ordens de servico"
  },
  {
    "category": "operacao",
    "categoryLabel": "Operacao",
    "sourceTitle": "Ordens de serviço",
    "to": "/docs/operacao/ordens-de-servico",
    "question": "Posso parcelar o valor da Ordem de Serviço?",
    "answerText": "Sim. A tela permite pagamento à vista, entrada com parcelamento ou parcelamento.",
    "normalizedQuestion": "posso parcelar o valor da ordem de servico?",
    "normalizedAnswer": "sim. a tela permite pagamento a vista, entrada com parcelamento ou parcelamento.",
    "normalizedSourceTitle": "ordens de servico"
  },
  {
    "category": "operacao",
    "categoryLabel": "Operacao",
    "sourceTitle": "Ordens de serviço",
    "to": "/docs/operacao/ordens-de-servico",
    "question": "O que acontece depois que a ordem é concluída?",
    "answerText": "Ela passa para a situação Concluída e não pode mais ser alterada normalmente.",
    "normalizedQuestion": "o que acontece depois que a ordem e concluida?",
    "normalizedAnswer": "ela passa para a situacao concluida e nao pode mais ser alterada normalmente.",
    "normalizedSourceTitle": "ordens de servico"
  },
  {
    "category": "fiscal",
    "categoryLabel": "Fiscal",
    "sourceTitle": "Nota Fiscal de Produto",
    "to": "/docs/fiscal/nota-fiscal-de-produto",
    "question": "Posso salvar a nota sem transmitir?",
    "answerText": "Sim. A tela oferece a opcao Apenas salvar .",
    "normalizedQuestion": "posso salvar a nota sem transmitir?",
    "normalizedAnswer": "sim. a tela oferece a opcao apenas salvar .",
    "normalizedSourceTitle": "nota fiscal de produto"
  },
  {
    "category": "fiscal",
    "categoryLabel": "Fiscal",
    "sourceTitle": "Nota Fiscal de Produto",
    "to": "/docs/fiscal/nota-fiscal-de-produto",
    "question": "Posso transmitir depois?",
    "answerText": "Sim. Depois do salvamento, a transmissao pode ser feita pela lista da nota.",
    "normalizedQuestion": "posso transmitir depois?",
    "normalizedAnswer": "sim. depois do salvamento, a transmissao pode ser feita pela lista da nota.",
    "normalizedSourceTitle": "nota fiscal de produto"
  },
  {
    "category": "fiscal",
    "categoryLabel": "Fiscal",
    "sourceTitle": "Nota Fiscal de Produto",
    "to": "/docs/fiscal/nota-fiscal-de-produto",
    "question": "Posso emitir uma nota a partir de uma Ordem de Servico?",
    "answerText": "Sim. O sistema possui esse fluxo.",
    "normalizedQuestion": "posso emitir uma nota a partir de uma ordem de servico?",
    "normalizedAnswer": "sim. o sistema possui esse fluxo.",
    "normalizedSourceTitle": "nota fiscal de produto"
  },
  {
    "category": "fiscal",
    "categoryLabel": "Fiscal",
    "sourceTitle": "Nota Fiscal de Produto",
    "to": "/docs/fiscal/nota-fiscal-de-produto",
    "question": "Posso usar uma nota de entrada para gerar uma devolucao?",
    "answerText": "Sim. Esse carregamento existe no modulo.",
    "normalizedQuestion": "posso usar uma nota de entrada para gerar uma devolucao?",
    "normalizedAnswer": "sim. esse carregamento existe no modulo.",
    "normalizedSourceTitle": "nota fiscal de produto"
  },
  {
    "category": "fiscal",
    "categoryLabel": "Fiscal",
    "sourceTitle": "Nota Fiscal de Serviço",
    "to": "/docs/fiscal/nota-fiscal-de-servico",
    "question": "Posso salvar a NFSe sem transmitir?",
    "answerText": "Sim. A tela oferece a opção Apenas salvar .",
    "normalizedQuestion": "posso salvar a nfse sem transmitir?",
    "normalizedAnswer": "sim. a tela oferece a opcao apenas salvar .",
    "normalizedSourceTitle": "nota fiscal de servico"
  },
  {
    "category": "fiscal",
    "categoryLabel": "Fiscal",
    "sourceTitle": "Nota Fiscal de Serviço",
    "to": "/docs/fiscal/nota-fiscal-de-servico",
    "question": "Posso transmitir depois?",
    "answerText": "Sim. A transmissão pode ser feita depois pela lista.",
    "normalizedQuestion": "posso transmitir depois?",
    "normalizedAnswer": "sim. a transmissao pode ser feita depois pela lista.",
    "normalizedSourceTitle": "nota fiscal de servico"
  },
  {
    "category": "fiscal",
    "categoryLabel": "Fiscal",
    "sourceTitle": "Nota Fiscal de Serviço",
    "to": "/docs/fiscal/nota-fiscal-de-servico",
    "question": "Posso emitir a NFSe a partir de uma Ordem de Serviço?",
    "answerText": "Sim. Esse fluxo existe no sistema.",
    "normalizedQuestion": "posso emitir a nfse a partir de uma ordem de servico?",
    "normalizedAnswer": "sim. esse fluxo existe no sistema.",
    "normalizedSourceTitle": "nota fiscal de servico"
  },
  {
    "category": "fiscal",
    "categoryLabel": "Fiscal",
    "sourceTitle": "Nota Fiscal de Serviço",
    "to": "/docs/fiscal/nota-fiscal-de-servico",
    "question": "Posso emitir a NFSe a partir de uma Conta a Receber?",
    "answerText": "Sim. O sistema possui esse carregamento.",
    "normalizedQuestion": "posso emitir a nfse a partir de uma conta a receber?",
    "normalizedAnswer": "sim. o sistema possui esse carregamento.",
    "normalizedSourceTitle": "nota fiscal de servico"
  },
  {
    "category": "fiscal",
    "categoryLabel": "Fiscal",
    "sourceTitle": "Nota Fiscal de Serviço",
    "to": "/docs/fiscal/nota-fiscal-de-servico",
    "question": "O tomador é sempre obrigatório?",
    "answerText": "A tela possui cenário para trabalhar sem tomador, dependendo do caso usado no sistema.",
    "normalizedQuestion": "o tomador e sempre obrigatorio?",
    "normalizedAnswer": "a tela possui cenario para trabalhar sem tomador, dependendo do caso usado no sistema.",
    "normalizedSourceTitle": "nota fiscal de servico"
  },
  {
    "category": "fiscal",
    "categoryLabel": "Fiscal",
    "sourceTitle": "Nota Fiscal de Serviço",
    "to": "/docs/fiscal/nota-fiscal-de-servico",
    "question": "O que preciso revisar antes de transmitir?",
    "answerText": "Revise principalmente: tomador código do serviço código NBS discriminação valor dados de tributação",
    "normalizedQuestion": "o que preciso revisar antes de transmitir?",
    "normalizedAnswer": "revise principalmente: tomador codigo do servico codigo nbs discriminacao valor dados de tributacao",
    "normalizedSourceTitle": "nota fiscal de servico"
  },
  {
    "category": "financeiro",
    "categoryLabel": "Financeiro",
    "sourceTitle": "Contas a Receber",
    "to": "/docs/financeiro/contas-a-receber",
    "question": "Posso receber só parte da conta?",
    "answerText": "Sim. O sistema permite informar um valor menor, mantendo o restante em aberto.",
    "normalizedQuestion": "posso receber so parte da conta?",
    "normalizedAnswer": "sim. o sistema permite informar um valor menor, mantendo o restante em aberto.",
    "normalizedSourceTitle": "contas a receber"
  },
  {
    "category": "financeiro",
    "categoryLabel": "Financeiro",
    "sourceTitle": "Contas a Receber",
    "to": "/docs/financeiro/contas-a-receber",
    "question": "Posso alterar o vencimento depois?",
    "answerText": "Sim, desde que a conta ainda esteja em aberto.",
    "normalizedQuestion": "posso alterar o vencimento depois?",
    "normalizedAnswer": "sim, desde que a conta ainda esteja em aberto.",
    "normalizedSourceTitle": "contas a receber"
  },
  {
    "category": "financeiro",
    "categoryLabel": "Financeiro",
    "sourceTitle": "Contas a Receber",
    "to": "/docs/financeiro/contas-a-receber",
    "question": "Posso cancelar uma conta que já foi recebida?",
    "answerText": "Não diretamente. Quando a conta já está quitada, primeiro é necessário estornar o recebimento.",
    "normalizedQuestion": "posso cancelar uma conta que ja foi recebida?",
    "normalizedAnswer": "nao diretamente. quando a conta ja esta quitada, primeiro e necessario estornar o recebimento.",
    "normalizedSourceTitle": "contas a receber"
  },
  {
    "category": "financeiro",
    "categoryLabel": "Financeiro",
    "sourceTitle": "Contas a Receber",
    "to": "/docs/financeiro/contas-a-receber",
    "question": "O sistema gera recibo?",
    "answerText": "Sim. Depois do recebimento, o sistema pode perguntar se você deseja imprimir o recibo.",
    "normalizedQuestion": "o sistema gera recibo?",
    "normalizedAnswer": "sim. depois do recebimento, o sistema pode perguntar se voce deseja imprimir o recibo.",
    "normalizedSourceTitle": "contas a receber"
  },
  {
    "category": "financeiro",
    "categoryLabel": "Financeiro",
    "sourceTitle": "Contas a Receber",
    "to": "/docs/financeiro/contas-a-receber",
    "question": "Para que serve a conta recorrente?",
    "answerText": "Ela serve para programar contas que o sistema deve lançar automaticamente ao longo do tempo.",
    "normalizedQuestion": "para que serve a conta recorrente?",
    "normalizedAnswer": "ela serve para programar contas que o sistema deve lancar automaticamente ao longo do tempo.",
    "normalizedSourceTitle": "contas a receber"
  },
  {
    "category": "financeiro",
    "categoryLabel": "Financeiro",
    "sourceTitle": "Contas a Receber",
    "to": "/docs/financeiro/contas-a-receber",
    "question": "Quais situações a conta pode ter?",
    "answerText": "As principais situações encontradas são: Aberta Quitada Cancelada",
    "normalizedQuestion": "quais situacoes a conta pode ter?",
    "normalizedAnswer": "as principais situacoes encontradas sao: aberta quitada cancelada",
    "normalizedSourceTitle": "contas a receber"
  },
  {
    "category": "financeiro",
    "categoryLabel": "Financeiro",
    "sourceTitle": "Lançamento de Contas Recorrentes",
    "to": "/docs/financeiro/contas-recorrentes",
    "question": "A conta recorrente já fica paga ou recebida automaticamente?",
    "answerText": "Não. A recorrência serve para criar os lançamentos futuros. Depois disso, cada conta precisa ser tratada normalmente.",
    "normalizedQuestion": "a conta recorrente ja fica paga ou recebida automaticamente?",
    "normalizedAnswer": "nao. a recorrencia serve para criar os lancamentos futuros. depois disso, cada conta precisa ser tratada normalmente.",
    "normalizedSourceTitle": "lancamento de contas recorrentes"
  },
  {
    "category": "financeiro",
    "categoryLabel": "Financeiro",
    "sourceTitle": "Lançamento de Contas Recorrentes",
    "to": "/docs/financeiro/contas-recorrentes",
    "question": "Posso usar conta recorrente em contas a receber e contas a pagar?",
    "answerText": "Sim. O sistema possui essa opção nos dois módulos.",
    "normalizedQuestion": "posso usar conta recorrente em contas a receber e contas a pagar?",
    "normalizedAnswer": "sim. o sistema possui essa opcao nos dois modulos.",
    "normalizedSourceTitle": "lancamento de contas recorrentes"
  },
  {
    "category": "gestao",
    "categoryLabel": "Gestao",
    "sourceTitle": "Dashboard",
    "to": "/docs/gestao/dashboard",
    "question": "O Dashboard abre em qual visao?",
    "answerText": "A tela abre primeiro na .",
    "normalizedQuestion": "o dashboard abre em qual visao?",
    "normalizedAnswer": "a tela abre primeiro na .",
    "normalizedSourceTitle": "dashboard"
  },
  {
    "category": "gestao",
    "categoryLabel": "Gestao",
    "sourceTitle": "Dashboard",
    "to": "/docs/gestao/dashboard",
    "question": "Posso trocar de visao sem sair da pagina?",
    "answerText": "Sim. Basta selecionar a visao desejada dentro do proprio Dashboard.",
    "normalizedQuestion": "posso trocar de visao sem sair da pagina?",
    "normalizedAnswer": "sim. basta selecionar a visao desejada dentro do proprio dashboard.",
    "normalizedSourceTitle": "dashboard"
  },
  {
    "category": "gestao",
    "categoryLabel": "Gestao",
    "sourceTitle": "Dashboard Financeiro",
    "to": "/docs/gestao/dashboard-financeiro",
    "question": "O que e valor em aberto?",
    "answerText": "E o valor que ja foi lancado, mas ainda nao foi pago ou recebido.",
    "normalizedQuestion": "o que e valor em aberto?",
    "normalizedAnswer": "e o valor que ja foi lancado, mas ainda nao foi pago ou recebido.",
    "normalizedSourceTitle": "dashboard financeiro"
  },
  {
    "category": "gestao",
    "categoryLabel": "Gestao",
    "sourceTitle": "Dashboard Financeiro",
    "to": "/docs/gestao/dashboard-financeiro",
    "question": "O que e valor atrasado?",
    "answerText": "E o valor que ja venceu e ainda continua pendente.",
    "normalizedQuestion": "o que e valor atrasado?",
    "normalizedAnswer": "e o valor que ja venceu e ainda continua pendente.",
    "normalizedSourceTitle": "dashboard financeiro"
  },
  {
    "category": "gestao",
    "categoryLabel": "Gestao",
    "sourceTitle": "Dashboard Financeiro",
    "to": "/docs/gestao/dashboard-financeiro",
    "question": "O saldo do periodo mostra tudo o que foi lancado?",
    "answerText": "Nao. Esse bloco considera o que ja foi quitado no periodo.",
    "normalizedQuestion": "o saldo do periodo mostra tudo o que foi lancado?",
    "normalizedAnswer": "nao. esse bloco considera o que ja foi quitado no periodo.",
    "normalizedSourceTitle": "dashboard financeiro"
  },
  {
    "category": "gestao",
    "categoryLabel": "Gestao",
    "sourceTitle": "Dashboard Financeiro",
    "to": "/docs/gestao/dashboard-financeiro",
    "question": "Para que serve a DRE?",
    "answerText": "Ela ajuda a resumir o resultado da empresa no periodo, mostrando entradas, saidas e resultado final.",
    "normalizedQuestion": "para que serve a dre?",
    "normalizedAnswer": "ela ajuda a resumir o resultado da empresa no periodo, mostrando entradas, saidas e resultado final.",
    "normalizedSourceTitle": "dashboard financeiro"
  },
  {
    "category": "gestao",
    "categoryLabel": "Gestao",
    "sourceTitle": "Relatórios",
    "to": "/docs/gestao/relatorios",
    "question": "Por que um relatorio pode nao aparecer para mim?",
    "answerText": "Porque o acesso pode depender da permissao do usuario ou do plano contratado.",
    "normalizedQuestion": "por que um relatorio pode nao aparecer para mim?",
    "normalizedAnswer": "porque o acesso pode depender da permissao do usuario ou do plano contratado.",
    "normalizedSourceTitle": "relatorios"
  },
  {
    "category": "gestao",
    "categoryLabel": "Gestao",
    "sourceTitle": "Visão Gerencial",
    "to": "/docs/gestao/visao-gerencial",
    "question": "O que e saude financeira?",
    "answerText": "E uma nota usada pelo sistema para resumir a situacao financeira da empresa.",
    "normalizedQuestion": "o que e saude financeira?",
    "normalizedAnswer": "e uma nota usada pelo sistema para resumir a situacao financeira da empresa.",
    "normalizedSourceTitle": "visao gerencial"
  },
  {
    "category": "gestao",
    "categoryLabel": "Gestao",
    "sourceTitle": "Visão Gerencial",
    "to": "/docs/gestao/visao-gerencial",
    "question": "O que significa inadimplencia?",
    "answerText": "E a parte do valor a receber que ja venceu e ainda nao foi recebida.",
    "normalizedQuestion": "o que significa inadimplencia?",
    "normalizedAnswer": "e a parte do valor a receber que ja venceu e ainda nao foi recebida.",
    "normalizedSourceTitle": "visao gerencial"
  },
  {
    "category": "gestao",
    "categoryLabel": "Gestao",
    "sourceTitle": "Visão Gerencial",
    "to": "/docs/gestao/visao-gerencial",
    "question": "Saldo em caixa e igual a valor a receber?",
    "answerText": "Nao. O saldo em caixa mostra o que ja entrou e saiu. O valor a receber mostra o que ainda falta entrar.",
    "normalizedQuestion": "saldo em caixa e igual a valor a receber?",
    "normalizedAnswer": "nao. o saldo em caixa mostra o que ja entrou e saiu. o valor a receber mostra o que ainda falta entrar.",
    "normalizedSourceTitle": "visao gerencial"
  },
  {
    "category": "gestao",
    "categoryLabel": "Gestao",
    "sourceTitle": "Visão Gerencial",
    "to": "/docs/gestao/visao-gerencial",
    "question": "Posso usar essa visao para acompanhar estoque?",
    "answerText": "Sim. A tela mostra giro, margem, estoque parado e valor do estoque.",
    "normalizedQuestion": "posso usar essa visao para acompanhar estoque?",
    "normalizedAnswer": "sim. a tela mostra giro, margem, estoque parado e valor do estoque.",
    "normalizedSourceTitle": "visao gerencial"
  },
  {
    "category": "configuracoes",
    "categoryLabel": "Configuracoes",
    "sourceTitle": "Perfis de Usuários",
    "to": "/docs/configuracoes/usuarios-e-permissoes",
    "question": "Posso criar dois perfis com o mesmo nome?",
    "answerText": "Não. O nome do perfil precisa ser único.",
    "normalizedQuestion": "posso criar dois perfis com o mesmo nome?",
    "normalizedAnswer": "nao. o nome do perfil precisa ser unico.",
    "normalizedSourceTitle": "perfis de usuarios"
  },
  {
    "category": "configuracoes",
    "categoryLabel": "Configuracoes",
    "sourceTitle": "Perfis de Usuários",
    "to": "/docs/configuracoes/usuarios-e-permissoes",
    "question": "Um perfil pode ficar sem nenhum módulo?",
    "answerText": "Não. O sistema exige pelo menos um módulo liberado.",
    "normalizedQuestion": "um perfil pode ficar sem nenhum modulo?",
    "normalizedAnswer": "nao. o sistema exige pelo menos um modulo liberado.",
    "normalizedSourceTitle": "perfis de usuarios"
  },
  {
    "category": "configuracoes",
    "categoryLabel": "Configuracoes",
    "sourceTitle": "Perfis de Usuários",
    "to": "/docs/configuracoes/usuarios-e-permissoes",
    "question": "Posso alterar as permissões depois?",
    "answerText": "Sim. O perfil pode ser alterado quando necessário.",
    "normalizedQuestion": "posso alterar as permissoes depois?",
    "normalizedAnswer": "sim. o perfil pode ser alterado quando necessario.",
    "normalizedSourceTitle": "perfis de usuarios"
  },
  {
    "category": "configuracoes",
    "categoryLabel": "Configuracoes",
    "sourceTitle": "Perfis de Usuários",
    "to": "/docs/configuracoes/usuarios-e-permissoes",
    "question": "Posso excluir um perfil que já está em uso?",
    "answerText": "Não normalmente. A exclusão pode ser bloqueada quando existem colaboradores vinculados a esse perfil.",
    "normalizedQuestion": "posso excluir um perfil que ja esta em uso?",
    "normalizedAnswer": "nao normalmente. a exclusao pode ser bloqueada quando existem colaboradores vinculados a esse perfil.",
    "normalizedSourceTitle": "perfis de usuarios"
  },
  {
    "category": "configuracoes",
    "categoryLabel": "Configuracoes",
    "sourceTitle": "Perfis de Usuários",
    "to": "/docs/configuracoes/usuarios-e-permissoes",
    "question": "Posso controlar acesso por módulo?",
    "answerText": "Sim. Esse é justamente o objetivo da tela de perfis.",
    "normalizedQuestion": "posso controlar acesso por modulo?",
    "normalizedAnswer": "sim. esse e justamente o objetivo da tela de perfis.",
    "normalizedSourceTitle": "perfis de usuarios"
  },
  {
    "category": "configuracoes",
    "categoryLabel": "Configuracoes",
    "sourceTitle": "Perfis de Usuários",
    "to": "/docs/configuracoes/usuarios-e-permissoes",
    "question": "Preciso criar um perfil para cada colaborador?",
    "answerText": "Não. O ideal é criar perfis por função ou equipe e reaproveitar esse padrão no cadastro dos colaboradores.",
    "normalizedQuestion": "preciso criar um perfil para cada colaborador?",
    "normalizedAnswer": "nao. o ideal e criar perfis por funcao ou equipe e reaproveitar esse padrao no cadastro dos colaboradores.",
    "normalizedSourceTitle": "perfis de usuarios"
  }
];
