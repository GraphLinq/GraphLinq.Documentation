import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'GraphLinq Engine',
    link: 'https://github.com/GraphLinq/GraphLinq.Engine',
    subs: ['Manages Graph Execution', 'Manages Graph Storage'],
    languages: ['.NET', 'C#'],
    Svg: require('@site/static/img/engine1.svg').default,
    description: (
      <>
        GraphLinq described well in a single statement that is clear and
        to the point.
      </>
    ),
  },
  {
    title: 'GraphLinq IDE',
    link: 'https://github.com/GraphLinq/GraphLinq.IDE',
    subs: ['Interactive Development Enviornment', 'Visually Build Graphs'],
    languages: ['React', 'JavaScript', 'SCSS', 'Handlebars'],
    Svg: require('@site/static/img/ide1.svg').default,
    description: (
      <>
        GraphLinq described well in a single statement that is clear and
        to the point.
      </>
    ),
  },
  {
    title: 'GraphLinq Analytics',
    link: 'https://github.com/GraphLinq/GraphLinq.Analytics',
    subs: ['Realtime On-Chain Analytics', 'GraphLinq, Polygon, Unicrypt'],
    languages: ['React', 'JavaScript', 'TypeScript', 'CSS'],
    Svg: require('@site/static/img/analytics1.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'GraphLinq App Interface',
    link: 'https://github.com/GraphLinq/GraphLinq.AppInterface',
    subs: ['Dashboard for managing your GraphLinq projects'],
    languages: ['React', 'JavaScript', 'TypeScript', 'CSS'],
    Svg: require('@site/static/img/app1.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'GraphLinq Marketplace',
    link: 'https://github.com/GraphLinq/GraphLinq.Marketplace',
    subs: ['Marketplace for buying and selling Graphs'],
    languages: ['React', 'TypeScript'],
    Svg: require('@site/static/img/marketplace1.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'GraphLinq Documentation',
    link: 'https://github.com/GraphLinq/GraphLinq.Documentation',
    subs: ['Documentation for GraphLinq'],
    languages: ['Docusaurus', 'GraphLinq'],
    Svg: require('@site/static/img/doc1.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, link, subs, languages, description}) {
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
                {languages.map ((language) => (
                  <Link to="/docs/category/tutorial---basics/" className="language button button--outline button--primary button-sm">{language}</Link>
                ))}
              </div>
            </div>
            <h3 className="libraries__header">{title}</h3>
            <ul class="libraries__features">
              {subs.map ((sub) => (
                <li class="libraries__feature">{sub}</li>
              ))}
            </ul>
            <a class="libraries__button button button--outline button--primary" href={link}>View on GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageLibraries() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={styles.feathead}>
            <h2>Open Source</h2>
            <p>View our GitHub repositories</p>
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
