import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageLibraries from '@site/src/components/HomepageLibraries';
import HomepageExtensions from '../components/HomepageExtensions';
import HomepagePlugins from '../components/HomepagePlugins';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.contain}>
          <div className={clsx('col col--6')}>
            <div className={styles.one}>
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <div className={styles.buttons}>
                <Link
                  className="button button--primary button--md"
                  to="/docs/intro">
                  Learn about GraphLinq
                </Link>
                <div className={styles.buttons}>
                  <Link
                    className="button button--secondary button--md"
                    to="/docs/intro">
                    Start Building
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={clsx('col col--6')}>
            <div className={styles.two}>
              <img src="/img/ide.svg" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Full Documentation for GraphLinq Protocol">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageLibraries />
        <HomepageExtensions />
        <HomepagePlugins />
      </main>
    </Layout>
  );
}
