import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'GraphLinq App Interface',
    link: 'https://app.graphlinq.com',
    button: 'Launch App',
    Svg: require('@site/static/img/flam2.svg').default,
    description: (
      <>
        Dashboard for managing your GraphLinq projects.
      </>
    ),
  },
  {
    title: 'GraphLinq IDE',
    link: 'https://ide.graphlinq.io',
    button: 'Launch IDE',
    Svg: require('@site/static/img/flam2.svg').default,
    description: (
      <>
        Itegrated Development Enviornment for building graphs.
      </>
    ),
  },
  {
    title: 'GraphLinq Marketplace',
    link: 'https://marketplace.graphlinq.io',
    button: 'Launch Marketplace',
    Svg: require('@site/static/img/flam1.svg').default,
    description: (
      <>
        Buy and sell Graphs with the community. Post bounties for Graphs.
      </>
    ),
  },
  {
    title: 'GraphLinq Analytics',
    link: 'https://analytics.graphlinq.io',
    button: 'Launch Analytics',
    Svg: require('@site/static/img/flam3.svg').default,
    description: (
      <>
        Realtime on-chain analytics for GraphLinq, Polygon, and Unicrypt.
      </>
    ),
  },
  {
    title: 'GraphLinq PoS Blockchain',
    link: '#',
    button: 'Coming Soon',
    Svg: require('@site/static/img/svg-export/svgexport-22.svg').default,
    description: (
      <>
        Coming soon. Application Specific Proof of Stake Blockchain.
      </>
    ),
  },
  {
    title: 'Online Learning',
    link: '#',
    button: 'Coming Soon.',
    Svg: require('@site/static/img/svg-export/svgexport-20.svg').default,
    description: (
      <>
        Coming soon. Learn how to use GraphLinq like a pro!
      </>
    ),
  },
];

function Feature({Svg, title, link, button, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="about__cards">
        <div className="about__card">
          <div className="about__section">
            <div className="about__icon">
              <Svg className={styles.featureSvg} role="img" />
            </div>
            <h3 className="about__header">{title}</h3>
            <p className="about__description">{description}</p>< br />
            <Link to={link} className="libraries__button button button--outline button--primary">{button}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageExtensions() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={styles.feathead}>
            <h2>Ecosystem</h2>
            <p>Explore what GraphLinq has to offer</p>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

