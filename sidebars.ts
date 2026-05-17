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
      ],
    },
    {
      type: 'category',
      label: 'Operação',
      items: ['operacao/orcamentos', 'operacao/ordens-de-servico'],
    },
    {
      type: 'category',
      label: 'Fiscal',
      items: ['fiscal/notas-fiscais'],
    },
    {
      type: 'category',
      label: 'Financeiro',
      items: ['financeiro/contas-a-receber', 'financeiro/contas-a-pagar'],
    },
    {
      type: 'category',
      label: 'Gestão',
      items: ['gestao/dashboard', 'gestao/relatorios'],
    },
    {
      type: 'category',
      label: 'Configurações',
      items: [
        'configuracoes/configuracoes-gerais',
        'configuracoes/usuarios-e-permissoes',
      ],
    },
    {
      type: 'category',
      label: 'Padrão editorial',
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
