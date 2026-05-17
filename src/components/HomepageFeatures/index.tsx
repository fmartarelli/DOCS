import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type CategoryItem = {
  title: string;
  slug: string;
  description: string;
  icon: string;
};

const categoryList: CategoryItem[] = [
  {
    title: 'Comece aqui',
    slug: '/docs/comecar/primeiros-passos',
    description: 'Onboarding, configuracao inicial e ordem ideal de aprendizado.',
    icon: 'IN',
  },
  {
    title: 'Cadastros',
    slug: '/docs/cadastros/clientes',
    description: 'Clientes, produtos e servicos com linguagem simples.',
    icon: 'CD',
  },
  {
    title: 'Operacao',
    slug: '/docs/operacao/orcamentos',
    description: 'Orcamentos, ordens de servico e processos do dia a dia.',
    icon: 'OP',
  },
  {
    title: 'Financeiro',
    slug: '/docs/financeiro/contas-a-receber',
    description: 'Contas a receber, contas a pagar e rotina financeira.',
    icon: 'FN',
  },
  {
    title: 'Gestao',
    slug: '/docs/gestao/dashboard',
    description: 'Dashboard, relatorios e acompanhamento de resultados.',
    icon: 'GS',
  },
  {
    title: 'FAQ e suporte',
    slug: '/docs/faq/faq-principal',
    description: 'Respostas rapidas, erros comuns e canais de atendimento.',
    icon: 'FA',
  },
];

const tutorialSections = [
  'Resumo objetivo',
  'Passo a passo numerado',
  'Dicas praticas',
  'Erros comuns',
  'FAQ relacionado',
];

function CategoryCard({title, slug, description, icon}: CategoryItem) {
  return (
    <article className={clsx('col col--4', styles.cardWrap)}>
      <Link className={styles.categoryCard} to={slug}>
        <span className={styles.iconBadge}>{icon}</span>
        <Heading as="h3" className={styles.cardTitle}>
          {title}
        </Heading>
        <p className={styles.cardDescription}>{description}</p>
        <span className={styles.cardLink}>Ver conteudo</span>
      </Link>
    </article>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>Estrutura da central de ajuda</span>
          <Heading as="h2">Categorias claras para usuarios leigos encontrarem o que precisam</Heading>
          <p>
            A navegacao foi organizada para reduzir atrito, facilitar a busca e
            manter o suporte visivel em todos os momentos.
          </p>
        </div>

        <div className="row">
          {categoryList.map((item) => (
            <CategoryCard key={item.title} {...item} />
          ))}
        </div>

        <div className={styles.splitSection}>
          <div className={styles.tutorialCard}>
            <span className={styles.sectionEyebrow}>Padrao de tutorial</span>
            <Heading as="h2">Cada tutorial segue a mesma estrutura</Heading>
            <div className={styles.tutorialList}>
              {tutorialSections.map((section, index) => (
                <div key={section} className={styles.tutorialItem}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{section}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.supportCard}>
            <span className={styles.sectionEyebrow}>CTA de suporte</span>
            <Heading as="h2">Nao encontrou o que precisava?</Heading>
            <p>
              Nossa equipe pode ajudar voce a concluir a tarefa com seguranca e
              sem perder tempo.
            </p>
            <div className={styles.supportActions}>
              <Link className="button button--primary" to="/docs/suporte/contato">
                Falar com o suporte
              </Link>
              <Link className="button button--outline" to="/docs/faq/faq-principal">
                Ver FAQ principal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
