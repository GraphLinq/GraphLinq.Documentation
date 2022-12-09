import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'What is GraphLinq?',
    link: '/docs/intro',
    Svg: require('@site/static/img/undraw_questions.svg').default,
    description: (
      <>
        Find out the basics about the GraphLinq project, our goals,
        vision, and plans for the future.
      </>
    ),
  },
  {
    title: 'Online Learning',
    link: 'https://graphlinq.talentlms.com/',
    Svg: require('@site/static/img/undraw_road_to_knowledge.svg').default,
    description: (
      <>
        Learn how to use GraphLinq with guided lessons. Earn certificates.
        Compete in challenges.
      </>
    ),
  },
  {
    title: 'Developer Documentation',
    link: '/docs/category/tutorial---extras',
    Svg: require('@site/static/img/undraw_bookshelves.svg').default,
    description: (
      <>
        Thanks to Docusaurus and xxx, you can search the full GraphLinq
        Documentation.
      </>
    ),
  },
];

function Feature({Svg, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Link
          to={link}
        >
          <h3>{title}</h3>
          <p>{description}</p>
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={styles.feathead}>
          <h2>The GraphLinq Protocol</h2>
          <p>Learn more and start using GraphLinq</p>
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
