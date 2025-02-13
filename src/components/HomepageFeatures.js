import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Multi Framework',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          Support training and serving workloads in a single controller with enhancements in scheduling, performance, metadata persistency and more.
      </>
    ),
  },
  {
    title: 'Model Versioning and Lineage',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          Manage and track a model version and lineage from the model generation to deployments natively in Kubernetes.
      </>
    ),
  },
  {
    title: 'Auto Tuning for Model Deployment',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          Automatic tuning of container configurations to maximize runtime and cost efficiency of model serving.
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
