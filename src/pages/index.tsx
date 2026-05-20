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

type SearchSection = {
  label: string;
  normalizedLabel: string;
  weightSingle: number;
  weightPhrase: number;
  weightContext: number;
};

const searchStopWords = new Set([
  'a',
  'as',
  'como',
  'com',
  'da',
  'das',
  'de',
  'do',
  'dos',
  'e',
  'em',
  'na',
  'nas',
  'no',
  'nos',
  'o',
  'os',
  'para',
  'por',
  'pra',
  'qual',
  'quais',
  'que',
  'um',
  'uma',
]);

const homeSearchEntries = docsSearchIndex.filter((item) => item.to !== '/docs/intro');

function normalizeText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenizeQuery(value: string, removeStopWords = false): string[] {
  const tokens = Array.from(
    new Set(
      normalizeText(value)
        .split(/[^a-z0-9]+/i)
        .map((token) => token.trim())
        .filter((token) => token.length >= 2),
    ),
  );

  if (!removeStopWords) {
    return tokens;
  }

  const filteredTokens = tokens.filter((token) => !searchStopWords.has(token));

  return filteredTokens.length > 0 ? filteredTokens : tokens;
}

function buildSections(item: DocsSearchEntry): SearchSection[] {
  return [
    {
      label: item.title,
      normalizedLabel: item.normalizedTitle,
      weightSingle: 150,
      weightPhrase: 220,
      weightContext: 180,
    },
    ...item.faq.map((entry, index) => ({
      label: entry,
      normalizedLabel: item.normalizedFaq[index] ?? normalizeText(entry),
      weightSingle: 110,
      weightPhrase: 180,
      weightContext: 145,
    })),
    ...item.headings.map((entry, index) => ({
      label: entry,
      normalizedLabel: item.normalizedHeadings[index] ?? normalizeText(entry),
      weightSingle: 90,
      weightPhrase: 150,
      weightContext: 120,
    })),
    {
      label: item.description,
      normalizedLabel: item.normalizedDescription,
      weightSingle: 70,
      weightPhrase: 120,
      weightContext: 100,
    },
  ];
}

function hasContextualMatch(normalizedText: string, tokens: string[]): boolean {
  if (tokens.length < 2 || !normalizedText) {
    return false;
  }

  const words = normalizedText.split(' ').filter(Boolean);
  const maxWindowSize = Math.min(Math.max(tokens.length + 6, 8), 16);

  if (words.length <= maxWindowSize) {
    const fullWindow = words.join(' ');
    return tokens.every((token) => fullWindow.includes(token));
  }

  for (let startIndex = 0; startIndex <= words.length - maxWindowSize; startIndex += 1) {
    const windowText = words.slice(startIndex, startIndex + maxWindowSize).join(' ');

    if (tokens.every((token) => windowText.includes(token))) {
      return true;
    }
  }

  return false;
}

function findBestMatch(item: DocsSearchEntry, normalizedQuery: string, tokens: string[]) {
  const sections = buildSections(item);
  const isSingleWordQuery = tokens.length === 1;

  return sections.find((section) => {
    if (isSingleWordQuery) {
      return section.normalizedLabel.includes(tokens[0]);
    }

    return (
      section.normalizedLabel.includes(normalizedQuery) ||
      hasContextualMatch(section.normalizedLabel, tokens)
    );
  })?.label;
}

function scoreSingleWordItem(item: DocsSearchEntry, token: string): SearchResult | null {
  const sections = buildSections(item);
  let score = 0;
  let bestMatchLabel: string | undefined;

  for (const section of sections) {
    if (!section.normalizedLabel.includes(token)) {
      continue;
    }

    score += section.weightSingle;
    bestMatchLabel ??= section.label;
  }

  if (item.normalizedContent.includes(token)) {
    score += 24;
  }

  if (!score) {
    return null;
  }

  return {
    item,
    matchLabel: bestMatchLabel,
    score,
  };
}

function scoreContextItem(
  item: DocsSearchEntry,
  normalizedQuery: string,
  tokens: string[],
): SearchResult | null {
  const sections = buildSections(item);
  let score = 0;
  let bestMatchLabel: string | undefined;
  let hasPhraseMatch = false;
  let hasContextMatch = false;

  for (const section of sections) {
    if (section.normalizedLabel.includes(normalizedQuery)) {
      score += section.weightPhrase;
      hasPhraseMatch = true;
      bestMatchLabel ??= section.label;
      continue;
    }

    if (hasContextualMatch(section.normalizedLabel, tokens)) {
      score += section.weightContext;
      hasContextMatch = true;
      bestMatchLabel ??= section.label;
    }
  }

  if (item.normalizedContent.includes(normalizedQuery)) {
    score += 48;
    hasPhraseMatch = true;
  } else if (hasContextualMatch(item.normalizedContent, tokens)) {
    score += 26;
    hasContextMatch = true;
  }

  if (!hasPhraseMatch && !hasContextMatch) {
    return null;
  }

  if (hasPhraseMatch) {
    score += 40;
  } else if (hasContextMatch) {
    score += 18;
  }

  return {
    item,
    matchLabel: bestMatchLabel ?? findBestMatch(item, normalizedQuery, tokens),
    score,
  };
}

function scoreItem(item: DocsSearchEntry, query: string): SearchResult | null {
  const normalizedQuery = normalizeText(query);
  const tokens = tokenizeQuery(query, true);

  if (!normalizedQuery || tokens.length === 0) {
    return {item, score: 0};
  }

  if (tokens.length === 1) {
    return scoreSingleWordItem(item, tokens[0]);
  }

  return scoreContextItem(item, normalizedQuery, tokens);
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const history = useHistory();
  const [query, setQuery] = useState('');

  const filteredTutorials = useMemo(() => {
    const normalizedQuery = query.trim();

    if (!normalizedQuery) {
      return homeSearchEntries
        .slice(0, 8)
        .map((item): SearchResult => ({item, score: 0}));
    }

    return homeSearchEntries
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
