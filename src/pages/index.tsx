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
  searchTerms?: string[];
  faqTerms?: string[];
};

type SearchResult = {
  item: SearchItem;
  matchLabel?: string;
  score: number;
};

const tutorialLinks: SearchItem[] = [
  {
    title: 'Primeiros passos no Maxflow',
    to: '/docs/comecar/primeiros-passos',
    description: 'Entenda a ordem ideal para começar a usar o sistema.',
    searchTerms: [
      'primeiro acesso',
      'por onde começar',
      'primeiras configurações',
      'início do sistema',
    ],
  },
  {
    title: 'Configuração inicial',
    to: '/docs/comecar/configuracao-inicial',
    description: 'Prepare o sistema antes de iniciar a operação do dia a dia.',
    searchTerms: [
      'configurar sistema',
      'ajustes iniciais',
      'preparar ambiente',
      'cadastros iniciais',
    ],
  },
  {
    title: 'Clientes',
    to: '/docs/cadastros/clientes',
    description: 'Cadastre e organize seus clientes no Maxflow.',
    searchTerms: [
      'cadastrar cliente',
      'alterar cliente',
      'dados do cliente',
      'contato do cliente',
    ],
  },
  {
    title: 'Produtos e serviços',
    to: '/docs/cadastros/produtos-e-servicos',
    description: 'Aprenda a organizar os itens usados nos atendimentos.',
    searchTerms: [
      'cadastrar produto',
      'cadastrar serviço',
      'itens do atendimento',
      'materiais',
    ],
  },
  {
    title: 'Criar e acompanhar orçamentos',
    to: '/docs/operacao/orcamentos',
    description: 'Monte propostas, revise valores e acompanhe aprovações.',
    searchTerms: [
      'criar orçamento',
      'aprovar orçamento',
      'recusar orçamento',
      'valor orçado manual',
      'condição de pagamento',
      'data do próximo contato',
      'validade do orçamento',
      'desconto no orçamento',
      'acréscimo no orçamento',
      'transformar orçamento em ordem de serviço',
    ],
    faqTerms: [
      'posso criar um orçamento sem produtos ou serviços',
      'posso usar valor manual junto com produtos e serviços',
      'o que acontece quando o orçamento é aprovado',
      'posso alterar um orçamento depois que ele foi aprovado',
      'para que serve a data do próximo contato',
    ],
  },
  {
    title: 'Abrir e acompanhar ordens de serviço',
    to: '/docs/operacao/ordens-de-servico',
    description: 'Controle atendimento, andamento, pagamento e conclusão.',
    searchTerms: [
      'abrir ordem de serviço',
      'status da ordem',
      'situação da ordem',
      'pagamento da ordem de serviço',
      'parcelamento',
      'plano de conta',
      'anexos',
      'garantia',
      'observação interna',
      'ordem criada a partir de orçamento',
      'concluir ordem',
      'técnico responsável',
      'data agendada',
    ],
    faqTerms: [
      'posso abrir uma ordem de serviço sem orçamento',
      'posso gerar uma ordem de serviço a partir de um orçamento',
      'posso usar valor manual junto com produtos e serviços',
      'o pagamento é obrigatório',
      'posso parcelar o valor da ordem de serviço',
      'o que acontece depois que a ordem é concluída',
      'posso anexar arquivos na ordem de serviço',
      'para que serve a observação interna',
    ],
  },
  {
    title: 'Notas fiscais',
    to: '/docs/fiscal/notas-fiscais',
    description: 'Consulte orientações da área fiscal do sistema.',
    searchTerms: [
      'emitir nota fiscal',
      'erro na nota',
      'nota de serviço',
      'nota de produto',
    ],
  },
  {
    title: 'Contas a receber',
    to: '/docs/financeiro/contas-a-receber',
    description: 'Acompanhe recebimentos ligados aos atendimentos.',
    searchTerms: [
      'registrar recebimento',
      'baixa de título',
      'recebimento do cliente',
    ],
  },
  {
    title: 'Contas a pagar',
    to: '/docs/financeiro/contas-a-pagar',
    description: 'Organize pagamentos e compromissos financeiros.',
    searchTerms: [
      'lançar conta a pagar',
      'despesa',
      'pagamento fornecedor',
    ],
  },
  {
    title: 'FAQ principal',
    to: '/docs/faq/faq-principal',
    description: 'Veja respostas rápidas para dúvidas comuns.',
    faqTerms: [
      'como entrar no sistema pela primeira vez',
      'esqueci minha senha',
      'como criar um novo usuário',
      'como alterar permissões',
      'como cadastrar um cliente',
      'como corrigir um cadastro errado',
      'como cadastrar um serviço',
      'posso inativar um item sem apagar o histórico',
      'como criar um orçamento',
      'como transformar um orçamento em ordem de serviço',
      'como acompanhar o status de uma ordem',
      'como reabrir uma ordem finalizada',
      'como emitir uma nota fiscal',
      'o que fazer quando a nota retorna erro',
      'como registrar um recebimento',
      'como lançar uma conta a pagar',
      'como fazer baixa de um título',
      'como ler o dashboard',
      'como gerar um relatório',
    ],
  },
];

function normalizeText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .trim();
}

function scoreItem(item: SearchItem, query: string): SearchResult | null {
  const normalizedQuery = normalizeText(query);

  if (!normalizedQuery) {
    return {item, score: 0};
  }

  const title = normalizeText(item.title);
  const description = normalizeText(item.description);
  const searchTerms = (item.searchTerms ?? []).map(normalizeText);
  const faqTerms = (item.faqTerms ?? []).map(normalizeText);

  let score = 0;
  let matchLabel: string | undefined;

  if (title.includes(normalizedQuery)) {
    score += 100;
    matchLabel = item.title;
  }

  if (description.includes(normalizedQuery)) {
    score += 40;
    matchLabel ??= item.description;
  }

  const matchedSearchTerm = searchTerms.find((term) => term.includes(normalizedQuery));
  if (matchedSearchTerm) {
    score += 60;
    matchLabel ??= matchedSearchTerm;
  }

  const matchedFaqTerm = faqTerms.find((term) => term.includes(normalizedQuery));
  if (matchedFaqTerm) {
    score += 80;
    matchLabel ??= matchedFaqTerm;
  }

  if (!score) {
    return null;
  }

  return {item, matchLabel, score};
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const history = useHistory();
  const [query, setQuery] = useState('');

  const normalizedQuery = query.trim();
  const filteredTutorials = normalizedQuery
    ? tutorialLinks
        .map((item) => scoreItem(item, normalizedQuery))
        .filter((item): item is SearchResult => item !== null)
        .sort((first, second) => second.score - first.score)
    : tutorialLinks.slice(0, 4).map((item) => ({item, score: 0}));

  const hasResults = filteredTutorials.length > 0;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (filteredTutorials[0]) {
      history.push(filteredTutorials[0].item.to);
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
                  placeholder="Ex: posso parcelar ordem de serviço"
                />
              </label>
              <button className={styles.searchButton} type="submit">
                Buscar
              </button>
            </form>

            <div className={styles.searchResults}>
              {hasResults ? (
                filteredTutorials.map(({item, matchLabel}) => (
                  <Link key={item.to} className={styles.searchResult} to={item.to}>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                    {matchLabel && normalizeText(matchLabel) !== normalizeText(item.title) && (
                      <small className={styles.searchMatch}>
                        Encontrado por: {matchLabel}
                      </small>
                    )}
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
