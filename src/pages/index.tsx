import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={styles.heroBanner}>
      <div className={clsx('container', styles.heroGrid)}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Central de ajuda SaaS</span>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <p className={styles.heroDescription}>
            Uma experiencia de documentacao simples, profissional e pensada para
            usuarios leigos do Maxflow.
          </p>

          <div className={styles.searchCard}>
            <span className={styles.searchLabel}>Busca em destaque</span>
            <div className={styles.searchBox}>
              <span className={styles.searchIcon}>BUSCA</span>
              <span className={styles.searchPlaceholder}>
                Ex: como emitir nota fiscal
              </span>
            </div>
            <div className={styles.searchChips}>
              <Link to="/docs/cadastros/clientes">Cadastrar cliente</Link>
              <Link to="/docs/operacao/orcamentos">Criar orcamento</Link>
              <Link to="/docs/operacao/ordens-de-servico">Abrir ordem</Link>
              <Link to="/docs/faq/faq-principal">FAQ principal</Link>
            </div>
          </div>

          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Comecar agora
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
              <li>Operacao</li>
              <li>Fiscal</li>
              <li>Financeiro</li>
              <li>Gestao e configuracoes</li>
            </ul>
          </div>

          <div className={styles.panelMeta}>
            <div>
              <strong>Publico</strong>
              <span>Oficinas, servicos e pequenas empresas</span>
            </div>
            <div>
              <strong>Formato</strong>
              <span>Tutoriais, FAQ, boas praticas e suporte</span>
            </div>
            <div>
              <strong>Foco</strong>
              <span>Onboarding simples e operacao do dia a dia</span>
            </div>
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
      description="Documentacao profissional do Maxflow com foco em tutoriais, FAQ e suporte.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
