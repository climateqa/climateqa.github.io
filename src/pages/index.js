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
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function EmbedSpace(){

  return (
    <div className="" style={{height: "calc(100vh - 80px)",width:"100%"}}>
      <iframe
        src="https://ekimetrics-climate-question-answering.hf.space/?__theme=light"
        frameBorder="0"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  )

}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Chat`}
      description="AI-powered conversational assistant grounded on climate and nature science">
      <main>
        <EmbedSpace />
      </main>
    </Layout>
  );
}
