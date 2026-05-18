import type {ChangeEvent, ReactNode} from 'react';
import {useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import {faqIndex, type FaqIndexEntry} from '@site/src/generated/faqIndex';

import styles from './styles.module.css';

type SearchResult = FaqIndexEntry & {
  excerpt: string;
  score: number;
};

const MAX_RESULTS = 12;
const EXCERPT_LENGTH = 180;

function normalizeText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .replace(/\s+/g, ' ')
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

function buildExcerpt(answer: string, normalizedAnswer: string, normalizedQuery: string): string {
  const plainAnswer = answer.trim();

  if (!plainAnswer) {
    return '';
  }

  if (!normalizedQuery) {
    return plainAnswer.length > EXCERPT_LENGTH
      ? `${plainAnswer.slice(0, EXCERPT_LENGTH).trimEnd()}...`
      : plainAnswer;
  }

  const matchIndex = normalizedAnswer.indexOf(normalizedQuery);

  if (matchIndex === -1) {
    return plainAnswer.length > EXCERPT_LENGTH
      ? `${plainAnswer.slice(0, EXCERPT_LENGTH).trimEnd()}...`
      : plainAnswer;
  }

  const start = Math.max(0, matchIndex - 50);
  const end = Math.min(plainAnswer.length, start + EXCERPT_LENGTH);
  const prefix = start > 0 ? '...' : '';
  const suffix = end < plainAnswer.length ? '...' : '';

  return `${prefix}${plainAnswer.slice(start, end).trim()}${suffix}`;
}

function scoreEntry(entry: FaqIndexEntry, query: string): SearchResult | null {
  const normalizedQuery = normalizeText(query);
  const tokens = tokenizeQuery(query);

  if (!normalizedQuery) {
    return null;
  }

  let score = 0;
  let matchedTokens = 0;

  if (entry.normalizedQuestion.includes(normalizedQuery)) {
    score += 140;
  }

  if (entry.normalizedSourceTitle.includes(normalizedQuery)) {
    score += 90;
  }

  if (entry.normalizedAnswer.includes(normalizedQuery)) {
    score += 70;
  }

  for (const token of tokens) {
    let tokenMatched = false;

    if (entry.normalizedQuestion.includes(token)) {
      score += 40;
      tokenMatched = true;
    }

    if (entry.normalizedSourceTitle.includes(token)) {
      score += 24;
      tokenMatched = true;
    }

    if (entry.normalizedAnswer.includes(token)) {
      score += 10;
      tokenMatched = true;
    }

    if (tokenMatched) {
      matchedTokens += 1;
    }
  }

  if (tokens.length > 0 && matchedTokens === tokens.length) {
    score += 30;
  }

  if (!score) {
    return null;
  }

  return {
    ...entry,
    excerpt: buildExcerpt(entry.answerText, entry.normalizedAnswer, normalizedQuery),
    score,
  };
}

function renderSummary(query: string, resultCount: number): string {
  if (!query.trim()) {
    return `Pesquise entre ${faqIndex.length} perguntas frequentes.`;
  }

  if (!resultCount) {
    return 'Nenhuma pergunta encontrada para essa busca.';
  }

  return `${resultCount} pergunta(s) encontrada(s).`;
}

export default function FaqSearch(): ReactNode {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) {
      return [];
    }

    return faqIndex
      .map((entry) => scoreEntry(entry, query))
      .filter((entry): entry is SearchResult => entry !== null)
      .sort((first, second) => {
        if (second.score !== first.score) {
          return second.score - first.score;
        }

        return first.question.localeCompare(second.question, 'pt-BR');
      })
      .slice(0, MAX_RESULTS);
  }, [query]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Busca na FAQ</p>
          <h2 className={styles.title}>Encontre a dúvida com mais rapidez</h2>
        </div>
        <p className={styles.description}>
          Digite uma palavra, uma dúvida ou o nome de uma funcionalidade para localizar
          perguntas e respostas já documentadas.
        </p>
      </div>

      <label className={styles.searchBox} htmlFor="faq-search">
        <span className={styles.searchLabel}>Buscar</span>
        <input
          id="faq-search"
          className={styles.searchInput}
          type="search"
          value={query}
          onChange={handleChange}
          placeholder="Ex: valor manual, cancelar nota, ordem de serviço"
        />
      </label>

      <div className={styles.summary}>{renderSummary(query, results.length)}</div>

      <div className={styles.results}>
        {query.trim() ? (
          results.length > 0 ? (
            results.map((result) => (
              <article key={`${result.to}-${result.question}`} className={styles.resultCard}>
                <div className={styles.resultMeta}>
                  <span>{result.categoryLabel}</span>
                  <span>{result.sourceTitle}</span>
                </div>
                <h3 className={styles.resultQuestion}>{result.question}</h3>
                <p className={styles.resultAnswer}>{result.excerpt}</p>
                <Link className={styles.resultLink} to={result.to}>
                  Abrir tutorial
                </Link>
              </article>
            ))
          ) : (
            <div className={styles.emptyState}>
              Tente buscar por um termo mais simples, como nome da tela, campo ou ação.
            </div>
          )
        ) : (
          <div className={styles.emptyState}>
            Exemplos de busca: <strong>cliente</strong>, <strong>parcelamento</strong>,{' '}
            <strong>natureza da operação</strong>, <strong>cancelamento</strong>.
          </div>
        )}
      </div>
    </section>
  );
}
