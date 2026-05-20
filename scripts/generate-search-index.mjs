import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const docsDir = path.join(projectRoot, 'docs');
const outputDir = path.join(projectRoot, 'src', 'generated');
const outputFile = path.join(outputDir, 'docsSearchIndex.ts');
const faqOutputFile = path.join(docsDir, 'faq', 'faq-principal.mdx');
const faqIndexOutputFile = path.join(outputDir, 'faqIndex.ts');

const ignoredPrefixes = ['padrao/'];
const validExtensions = new Set(['.md', '.mdx']);
const faqCategoryOrder = [
  'comecar',
  'cadastros',
  'operacao',
  'fiscal',
  'financeiro',
  'gestao',
  'configuracoes',
  'suporte',
];
const faqCategoryLabels = {
  comecar: 'Acesso e primeiros passos',
  cadastros: 'Cadastros',
  operacao: 'Operacao',
  fiscal: 'Fiscal',
  financeiro: 'Financeiro',
  gestao: 'Gestao',
  configuracoes: 'Configuracoes',
  suporte: 'Suporte',
};

function normalizeText(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\r/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function walkDocs(directory) {
  const entries = fs.readdirSync(directory, {withFileTypes: true});
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...walkDocs(absolutePath));
      continue;
    }

    if (!validExtensions.has(path.extname(entry.name))) {
      continue;
    }

    files.push(absolutePath);
  }

  return files;
}

function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  return match?.[1] ?? '';
}

function extractFrontmatterValue(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  if (!match) {
    return '';
  }

  return match[1].replace(/^['"]|['"]$/g, '').trim();
}

function stripFrontmatter(content) {
  if (!content.startsWith('---')) {
    return content;
  }

  const endIndex = content.indexOf('\n---', 3);
  if (endIndex === -1) {
    return content;
  }

  return content.slice(endIndex + 4).trimStart();
}

function stripMarkup(content) {
  return content
    .replace(/^(import|export)\s+.+$/gm, ' ')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/^:::[\s\S]*?^:::$/gm, ' ')
    .replace(/^>\s?/gm, '')
    .replace(/[#*_>-]/g, ' ')
    .replace(/\|/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function isIgnorableContentLine(line) {
  return (
    line.startsWith('import ') ||
    line.startsWith('export ') ||
    /^<[^>]+\/?>$/.test(line) ||
    /^<\/[^>]+>$/.test(line)
  );
}

function extractFirstParagraph(content) {
  const lines = content.split('\n').map((line) => line.trim());
  const parts = [];

  for (const line of lines) {
    if (!line) {
      if (parts.length > 0) {
        break;
      }
      continue;
    }

    if (isIgnorableContentLine(line)) {
      if (parts.length > 0) {
        break;
      }
      continue;
    }

    if (
      line.startsWith('#') ||
      line.startsWith(':::') ||
      line.startsWith('---') ||
      line.startsWith('- ') ||
      line.startsWith('* ') ||
      /^\d+\./.test(line)
    ) {
      if (parts.length > 0) {
        break;
      }
      continue;
    }

    parts.push(line);
  }

  return parts.join(' ').trim();
}

function toDocRoute(relativePath) {
  const withoutExtension = relativePath.replace(/\.(md|mdx)$/i, '');

  if (withoutExtension === 'intro') {
    return '/docs/intro';
  }

  return `/docs/${withoutExtension.replace(/\\/g, '/')}`;
}

function shouldIgnore(relativePath) {
  return ignoredPrefixes.some((prefix) => relativePath.startsWith(prefix));
}

function getTopLevelSegment(relativePath) {
  return relativePath.split('/')[0] ?? '';
}

function extractFaqEntries(content) {
  const sectionMatch = content.match(/^##\s+(Perguntas frequentes|FAQ)\s*$([\s\S]*?)(?=^##\s+|\Z)/im);
  if (!sectionMatch) {
    return [];
  }

  const sectionBody = sectionMatch[2] ?? '';
  const questionRegex = /^###\s+(.+)\s*$([\s\S]*?)(?=^###\s+|\Z)/gm;
  const entries = [];

  for (const match of sectionBody.matchAll(questionRegex)) {
    const question = match[1]?.trim();
    const answer = (match[2] ?? '').trim();

    if (!question || !answer) {
      continue;
    }

    entries.push({question, answer});
  }

  return entries;
}

function buildSearchEntry(absolutePath) {
  const relativePath = path.relative(docsDir, absolutePath).replace(/\\/g, '/');

  if (shouldIgnore(relativePath)) {
    return null;
  }

  const rawContent = fs.readFileSync(absolutePath, 'utf8');
  const frontmatter = extractFrontmatter(rawContent);
  const content = stripFrontmatter(rawContent);

  const title =
    extractFrontmatterValue(frontmatter, 'title') ||
    content.match(/^#\s+(.+)$/m)?.[1]?.trim() ||
    relativePath.replace(/\.(md|mdx)$/i, '').split('/').pop()?.replace(/-/g, ' ') ||
    '';

  const headings = [...content.matchAll(/^#{1,3}\s+(.+)$/gm)].map((match) => match[1].trim());
  const faq = [...content.matchAll(/^###\s+(.+)$/gm)].map((match) => match[1].trim());
  const description = extractFirstParagraph(content) || headings[0] || title;
  const normalizedContent = normalizeText(stripMarkup(content));

  return {
    title,
    to: toDocRoute(relativePath),
    description,
    headings,
    faq,
    normalizedTitle: normalizeText(title),
    normalizedDescription: normalizeText(description),
    normalizedHeadings: headings.map(normalizeText).filter(Boolean),
    normalizedFaq: faq.map(normalizeText).filter(Boolean),
    normalizedContent,
  };
}

function buildFaqSourceEntry(absolutePath) {
  const relativePath = path.relative(docsDir, absolutePath).replace(/\\/g, '/');

  if (
    shouldIgnore(relativePath) ||
    relativePath === 'faq/faq-principal.mdx' ||
    relativePath.startsWith('faq/')
  ) {
    return null;
  }

  const rawContent = fs.readFileSync(absolutePath, 'utf8');
  const frontmatter = extractFrontmatter(rawContent);
  const content = stripFrontmatter(rawContent);
  const faqEntries = extractFaqEntries(content);

  if (faqEntries.length === 0) {
    return null;
  }

  const title =
    extractFrontmatterValue(frontmatter, 'title') ||
    content.match(/^#\s+(.+)$/m)?.[1]?.trim() ||
    relativePath.replace(/\.(md|mdx)$/i, '').split('/').pop()?.replace(/-/g, ' ') ||
    '';

  return {
    category: getTopLevelSegment(relativePath),
    title,
    to: toDocRoute(relativePath),
    entries: faqEntries.map((entry) => ({
      ...entry,
      answerText: stripMarkup(entry.answer),
      normalizedQuestion: normalizeText(entry.question),
      normalizedAnswer: normalizeText(stripMarkup(entry.answer)),
      normalizedSourceTitle: normalizeText(title),
    })),
  };
}

function sortFaqSources(first, second) {
  const categoryDiff =
    faqCategoryOrder.indexOf(first.category) - faqCategoryOrder.indexOf(second.category);

  if (categoryDiff !== 0) {
    return categoryDiff;
  }

  return first.title.localeCompare(second.title, 'pt-BR');
}

function renderFaqPrincipal(faqSources) {
  const lines = [
    '---',
    'title: FAQ principal',
    'sidebar_position: 1',
    '---',
    '',
    "import FaqSearch from '@site/src/components/FaqSearch';",
    '',
    '# FAQ principal',
    '',
    '<FaqSearch />',
    '',
    '> Esta pagina e gerada automaticamente a partir das secoes `Perguntas frequentes` e `FAQ` dos tutoriais.',
    '',
  ];

  for (const category of faqCategoryOrder) {
    const categorySources = faqSources.filter((source) => source.category === category);

    if (categorySources.length === 0) {
      continue;
    }

    lines.push(`## ${faqCategoryLabels[category] ?? category}`);
    lines.push('');

    for (const source of categorySources) {
      for (const entry of source.entries) {
        lines.push(`### ${entry.question}`);
        lines.push('');
        lines.push(...entry.answer.split('\n'));
        lines.push('');
        lines.push(`Saiba mais: [${source.title}](${source.to})`);
        lines.push('');
      }
    }
  }

  return `${lines.join('\n').trim()}\n`;
}

const docsSearchIndex = walkDocs(docsDir)
  .map(buildSearchEntry)
  .filter(Boolean)
  .sort((first, second) => first.title.localeCompare(second.title, 'pt-BR'));

const faqSources = walkDocs(docsDir)
  .map(buildFaqSourceEntry)
  .filter(Boolean)
  .sort(sortFaqSources);

const faqIndex = faqSources.flatMap((source) =>
  source.entries.map((entry) => ({
    category: source.category,
    categoryLabel: faqCategoryLabels[source.category] ?? source.category,
    sourceTitle: source.title,
    to: source.to,
    question: entry.question,
    answerText: entry.answerText,
    normalizedQuestion: entry.normalizedQuestion,
    normalizedAnswer: entry.normalizedAnswer,
    normalizedSourceTitle: entry.normalizedSourceTitle,
  })),
);

const fileContents = `export type DocsSearchEntry = {
  title: string;
  to: string;
  description: string;
  headings: string[];
  faq: string[];
  normalizedTitle: string;
  normalizedDescription: string;
  normalizedHeadings: string[];
  normalizedFaq: string[];
  normalizedContent: string;
};

export const docsSearchIndex: DocsSearchEntry[] = ${JSON.stringify(docsSearchIndex, null, 2)};
`;

const faqIndexFileContents = `export type FaqIndexEntry = {
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

export const faqIndex: FaqIndexEntry[] = ${JSON.stringify(faqIndex, null, 2)};
`;

fs.mkdirSync(outputDir, {recursive: true});
fs.writeFileSync(outputFile, fileContents, 'utf8');
fs.writeFileSync(faqIndexOutputFile, faqIndexFileContents, 'utf8');
fs.mkdirSync(path.dirname(faqOutputFile), {recursive: true});
fs.writeFileSync(faqOutputFile, renderFaqPrincipal(faqSources), 'utf8');

console.log(`Search index generated with ${docsSearchIndex.length} documents.`);
console.log(`FAQ principal generated with ${faqSources.reduce((total, source) => total + source.entries.length, 0)} perguntas.`);
