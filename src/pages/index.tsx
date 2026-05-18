import type {ChangeEvent, FormEvent, ReactNode} from 'react';
import {useMemo, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useHistory} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import {
  docsSearchIndex,
  type DocsSearchEntry,
} from '@site/src/generated/docsSearchIndex';

import styles from './index.module.css';

type SearchResult = {
  item: DocsSearchEntry;
  matchLabel?: string;
  score: number;
};

function normalizeText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .trim();
}

function tokenizeQuery(value: string): string[] {
  return Array.from(
    new Set(
      normalizeText(value)
        .split(/[^a-z0-9]+/i)
        .map((token) => token.trim())
        .filter((token) => token.length >= 2),
    ),
  );
}

function findBestMatch(item: DocsSearchEntry, normalizedQuery: string, tokens: string[]) {
  const sections = [item.title, ...item.faq, ...item.headings, item.description];

  return sections.find((section) => {
    const normalizedSection = normalizeText(section);
    return (
      normalizedSection.includes(normalizedQuery) ||
      tokens.every((token) => normalizedSection.includes(token))
    );
  });
}

function scoreItem(item: DocsSearchEntry, query: string): SearchResult | null {
  const normalizedQuery = normalizeText(query);
  const tokens = tokenizeQuery(query);

  if (!normalizedQuery || tokens.length === 0) {
    return {item, score: 0};
  }

  let score = 0;
  let matchedTokens = 0;

  if (item.normalizedTitle.includes(normalizedQuery)) {
    score += 160;
  }

  if (item.normalizedFaq.some((entry) => entry.includes(normalizedQuery))) {
    score += 120;
  }

  if (item.normalizedHeadings.some((entry) => entry.includes(normalizedQuery))) {
    score += 90;
  }

  if (item.normalizedDescription.includes(normalizedQuery)) {
    score += 80;
  }

  if (item.normalizedContent.includes(normalizedQuery)) {
    score += 50;
  }

  for (const token of tokens) {
    let tokenMatched = false;

    if (item.normalizedTitle.includes(token)) {
      score += 50;
      tokenMatched = true;
    }

    if (item.normalizedFaq.some((entry) => entry.includes(token))) {
      score += 36;
      tokenMatched = true;
    }

    if (item.normalizedHeadings.some((entry) => entry.includes(token))) {
      score += 28;
      tokenMatched = true;
    }

    if (item.normalizedDescription.includes(token)) {
      score += 18;
      tokenMatched = true;
    }

    if (item.normalizedContent.includes(token)) {
      score += 8;
      tokenMatched = true;
    }

    if (tokenMatched) {
      matchedTokens += 1;
    }
  }

  if (matchedTokens === tokens.length) {
    score += 60;
  } else if (matchedTokens > 0) {
    score += matchedTokens * 10;
  }

  if (!score) {
    return null;
  }

  return {
    item,
    matchLabel: findBestMatch(item, normalizedQuery, tokens),
    score,
  };
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const history = useHistory();
  const [query, setQuery] = useState('');

  const filteredTutorials = useMemo(() => {
    const normalizedQuery = query.trim();

    if (!normalizedQuery) {
      return docsSearchIndex.slice(0, 8).map((item) => ({item, score: 0}));
    }

    return docsSearchIndex
      .map((item) => scoreItem(item, normalizedQuery))
      .filter((item): item is SearchResult => item !== null)
      .sort((first, second) => {
        if (second.score !== first.score) {
          return second.score - first.score;
        }

        return first.item.title.localeCompare(second.item.title, 'pt-BR');
      })
      .slice(0, 8);
  }, [query]);

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
                  placeholder="Ex: parcelar ordem de serviço"
                />
              </label>
              <button className={styles.searchButton} type="submit">
                Buscar
              </button>
            </form>

            <div className={styles.searchSummary}>
              {query.trim()
                ? `${filteredTutorials.length} resultado(s) encontrado(s)`
                : 'Digite uma palavra ou uma dúvida para localizar os tutoriais'}
            </div>

            <div className={styles.searchResults}>
              {hasResults ? (
                filteredTutorials.map(({item, matchLabel}) => (
                  <Link key={item.to} className={styles.searchResult} to={item.to}>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                    {matchLabel && normalizeText(matchLabel) !== item.normalizedTitle && (
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
