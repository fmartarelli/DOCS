import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  helpCenterSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Comece aqui',
      items: [
        'comecar/visao-geral-do-maxflow',
      ],
    },
    {
      type: 'category',
      label: 'Cadastros',
      items: [
        'cadastros/clientes',
        'cadastros/produtos-e-servicos',
        'cadastros/colaboradores',
        'cadastros/categorias',
      ],
    },
    {
      type: 'category',
      label: 'Operação',
      items: [
        'operacao/orcamentos',
        'operacao/listagem-de-orcamentos',
        'operacao/ordens-de-servico',
        'operacao/listagem-de-ordens-de-servico',
        'operacao/agenda-do-dia',
      ],
    },
    {
      type: 'category',
      label: 'Fiscal',
      items: [
        'fiscal/notas-fiscais',
        'fiscal/nota-fiscal-de-produto',
        'fiscal/nota-fiscal-de-servico',
        'fiscal/entrada-de-notas-fiscais',
      ],
    },
    {
      type: 'category',
      label: 'Financeiro',
      items: [
        'financeiro/contas-a-receber',
        'financeiro/contas-a-pagar',
        'financeiro/contas-recorrentes',
      ],
    },
    {
      type: 'category',
      label: 'Gestão',
      items: [
        'gestao/dashboard',
        'gestao/visao-gerencial',
        'gestao/dashboard-operacional',
        'gestao/dashboard-financeiro',
        'gestao/relatorios',
        'gestao/relatorios-ordens-de-servico',
        'gestao/relatorios-orcamentos',
        'gestao/relatorios-financeiros',
        'gestao/relatorios-estoques',
        'gestao/relatorios-produtividade',
        'gestao/relatorios-comissoes',
        'gestao/relatorios-notas-fiscais-de-entrada',
      ],
    },
    {
      type: 'category',
      label: 'Configurações',
      items: [
        'configuracoes/configuracoes-gerais',
        'configuracoes/usuarios-e-permissoes',
        'configuracoes/campos-personalizados',
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: ['faq/faq-principal'],
    },
    {
      type: 'category',
      label: 'Suporte',
      items: ['suporte/contato', 'suporte/chamado'],
    },
  ],
};

export default sidebars;
