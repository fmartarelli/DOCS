import type {ChangeEvent, FormEvent, ReactNode} from 'react';
import {useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useHistory} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

type SearchItem = {
  title: string;
  to: string;
  description: string;
};

const tutorialLinks: SearchItem[] = [
  {
    title: 'Primeiros passos no Maxflow',
    to: '/docs/comecar/primeiros-passos',
    description: 'Entenda a ordem ideal para começar a usar o sistema.',
  },
  {
    title: 'Configuração inicial',
    to: '/docs/comecar/configuracao-inicial',
    description: 'Prepare o sistema antes de iniciar a operação do dia a dia.',
  },
  {
    title: 'Clientes',
    to: '/docs/cadastros/clientes',
    description: 'Cadastre e organize seus clientes no Maxflow.',
  },
  {
    title: 'Produtos e serviços',
    to: '/docs/cadastros/produtos-e-servicos',
    description: 'Aprenda a organizar os itens usados nos atendimentos.',
  },
  {
    title: 'Criar e acompanhar orçamentos',
    to: '/docs/operacao/orcamentos',
    description: 'Monte propostas, revise valores e acompanhe aprovações.',
  },
  {
    title: 'Abrir e acompanhar ordens de serviço',
    to: '/docs/operacao/ordens-de-servico',
    description: 'Controle atendimento, andamento, pagamento e conclusão.',
  },
  {
    title: 'Notas fiscais',
    to: '/docs/fiscal/notas-fiscais',
    description: 'Consulte orientações da área fiscal do sistema.',
  },
  {
    title: 'Contas a receber',
    to: '/docs/financeiro/contas-a-receber',
    description: 'Acompanhe recebimentos ligados aos atendimentos.',
  },
  {
    title: 'Contas a pagar',
    to: '/docs/financeiro/contas-a-pagar',
    description: 'Organize pagamentos e compromissos financeiros.',
  },
  {
    title: 'FAQ principal',
    to: '/docs/faq/faq-principal',
    description: 'Veja respostas rápidas para dúvidas comuns.',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const history = useHistory();
  const [query, setQuery] = useState('');

  const normalizedQuery = query.trim().toLocaleLowerCase('pt-BR');
  const filteredTutorials = normalizedQuery
    ? tutorialLinks.filter((item) => {
        const haystack = `${item.title} ${item.description}`.toLocaleLowerCase(
          'pt-BR',
        );

        return haystack.includes(normalizedQuery);
      })
    : tutorialLinks.slice(0, 4);

  const hasResults = filteredTutorials.length > 0;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (filteredTutorials[0]) {
      history.push(filteredTutorials[0].to);
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  return (
    <header className={styles.heroBanner}>
      <div className={clsx('container', styles.heroGrid)}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Central de ajuda MaxFlow</span>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <p className={styles.heroDescription}>
            Uma experiência de documentação simples, profissional e pensada para
            a operação do dia a dia no Maxflow.
          </p>

          <div className={styles.searchCard}>
            <span className={styles.searchLabel}>Busca por tutoriais</span>
            <form className={styles.searchForm} onSubmit={handleSubmit}>
              <label className={styles.searchBox} htmlFor="docs-home-search">
                <span className={styles.searchIcon}>BUSCA</span>
                <input
                  id="docs-home-search"
                  className={styles.searchInput}
                  type="search"
                  value={query}
                  onChange={handleChange}
                  placeholder="Ex: como abrir ordem de serviço"
                />
              </label>
              <button className={styles.searchButton} type="submit">
                Buscar
              </button>
            </form>

            <div className={styles.searchResults}>
              {hasResults ? (
                filteredTutorials.map((item) => (
                  <Link key={item.to} className={styles.searchResult} to={item.to}>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </Link>
                ))
              ) : (
                <div className={styles.searchEmpty}>
                  Nenhum tutorial encontrado para essa busca.
                </div>
              )}
            </div>

            <div className={styles.searchChips}>
              <Link to="/docs/cadastros/clientes">Cadastrar cliente</Link>
              <Link to="/docs/operacao/orcamentos">Criar orçamento</Link>
              <Link to="/docs/operacao/ordens-de-servico">Abrir ordem</Link>
              <Link to="/docs/faq/faq-principal">FAQ principal</Link>
            </div>
          </div>

          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Começar agora
            </Link>
            <Link
              className="button button--outline button--lg"
              to="/docs/suporte/contato">
              Falar com suporte
            </Link>
          </div>
        </div>

        <div className={styles.heroPanel}>
          <div className={styles.panelCard}>
            <span className={styles.panelLabel}>Categorias principais</span>
            <ul className={styles.panelList}>
              <li>Comece aqui</li>
              <li>Cadastros</li>
              <li>Operação</li>
              <li>Fiscal</li>
              <li>Financeiro</li>
              <li>Gestão e configurações</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Central de ajuda do Maxflow"
      description="Documentação profissional do Maxflow com foco em tutoriais, FAQ e suporte.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
