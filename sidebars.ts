import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  helpCenterSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Comece aqui',
      items: [
        'comecar/visao-geral-do-maxflow',
        'comecar/primeiros-passos',
        'comecar/configuracao-inicial',
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
      label: 'Operacao',
      items: ['operacao/orcamentos', 'operacao/ordens-de-servico'],
    },
    {
      type: 'category',
      label: 'Fiscal',
      items: [
        'fiscal/notas-fiscais',
        'fiscal/nota-fiscal-de-produto',
        'fiscal/nota-fiscal-de-servico',
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
      label: 'Gestao',
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
      label: 'Configuracoes',
      items: [
        'configuracoes/configuracoes-gerais',
        'configuracoes/usuarios-e-permissoes',
        'configuracoes/campos-personalizados',
      ],
    },
    {
      type: 'category',
      label: 'Padrao editorial',
      items: ['padrao/geracao-automatica-de-tutoriais', 'padrao/template-de-tutorial'],
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
