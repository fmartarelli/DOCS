import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DOCS',
  tagline:
    'Central de ajuda do Maxflow para oficinas, prestadores de serviço e empresas de serviços',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.maxflow.com.br',
  baseUrl: '/',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'DOCS',
      hideOnScroll: true,
      logo: {
        alt: 'Maxflow DOCS',
        src: 'img/maxflow-logo.png',
        srcDark: 'img/maxflow-logo-dark.png',
      },
      items: [
        { to: '/docs/intro', label: 'Comece aqui', position: 'left' },
        {
          type: 'docSidebar',
          sidebarId: 'helpCenterSidebar',
          position: 'left',
          label: 'Central de Ajuda',
        },
        { to: '/docs/faq/faq-principal', label: 'FAQ', position: 'left' },
        { to: '/docs/suporte/contato', label: 'Suporte', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Primeiros passos',
          items: [
            { label: 'Visao geral', to: '/docs/comecar/visao-geral-do-maxflow' },
            {
              label: 'Configuracao inicial',
              to: '/docs/comecar/configuracao-inicial',
            },
          ],
        },
        {
          title: 'Operacao',
          items: [
            { label: 'Clientes', to: '/docs/cadastros/clientes' },
            { label: 'Orcamentos', to: '/docs/operacao/orcamentos' },
            {
              label: 'Ordens de servico',
              to: '/docs/operacao/ordens-de-servico',
            },
          ],
        },
        {
          title: 'Ajuda',
          items: [
            { label: 'FAQ principal', to: '/docs/faq/faq-principal' },
            { label: 'Contato com suporte', to: '/docs/suporte/contato' },
          ],
        },
      ],
      copyright: `Copyright (c) ${new Date().getFullYear()} Maxflow. Construido com Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
