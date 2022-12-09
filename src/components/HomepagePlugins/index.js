import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Exchange Plugin',
    link: 'https://github.com/GraphLinq/GraphLinq.Exchange',
    button: 'View on GitHub',
    subs: ['.NET', 'C#'],
    Svg: require('@site/static/img/doc.svg').default,
    description: ['Centralized Exchanges', 'Decentralized Exchanges'],
  },
  {
    title: 'Blockchain Plugins',
    link: 'https://github.com/GraphLinq/GraphLinq.Ethereum',
    button: 'View on GitHub',
    subs: ['.NET', 'C#'],
    Svg: require('@site/static/img/undraw_questions.svg').default,
    description: ['Ethereum', 'Bitcoin', 'BSC', 'Polygon', 'Avalanche'],
  },
  {
    title: 'Messaging Plugins',
    link: 'https://github.com/GraphLinq/GraphLinq.Messaging',
    button: 'View on GitHub',
    subs: ['.NET', 'C#'],
    Svg: require('@site/static/img/undraw_online_connection.svg').default,
    description: ['Telegram', 'Discord', 'Twitter', 'PushOver', 'PushBullet'],
  },
  {
    title: 'Price Feeds',
    link: '/docs/category/tutorial---basics/',
    button: 'View on GitHub',
    subs: ['.NET', 'C#'],
    Svg: require('@site/static/img/undraw_programming.svg').default,
    description: ['LiveCoinWatch', 'CoinGecko', 'CoinMarketCap'],
  },
  {
    title: 'Smart Contracts',
    link: '/docs/category/tutorial---basics/',
    button: 'View on GitHub',
    subs: ['Solidity', 'JavaScript'],
    Svg: require('@site/static/img/undraw_programming.svg').default,
    description: ['ERC-20 GLQ Token', 'Engine Depositor Contact', 'Marketplace Smart Contract'],
  },
];

function Feature({Svg, title, link, subs, button, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="libraries__cards">
        <div className="libraries__card">
          <div className="libraries__section">
            <div className="libraries__head">
              <div className="libraries__icon">
                <Svg className={styles.featureSvg} role="img" />
              </div>
              <div className="languages">
              {subs.map ((sub) => (
                <Link to="/docs/category/tutorial---basics/" className="language button button--outline button--primary button-sm">{sub}</Link>
              ))}
              </div>
            </div>
            <h3 className="libraries__header">{title}</h3>
            <ul class="libraries__features">
              {description.map ((desc) => (
                <li class="libraries__feature">{desc}</li>
              ))}
            </ul>
            <Link
              className="libraries__button button button--outline button--primary"
              to={link}>
              {button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepagePlugins() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={styles.feathead}>
            <h2>Open Source Plugins</h2>
            <p>Plugins for the GraphLinq Engine that extend the functionality of the GraphLinq IDE</p>
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
