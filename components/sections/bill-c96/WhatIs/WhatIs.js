import styles from './WhatIs.module.css';

function WhatIs() {
  return (
    <section className={`section m-horizontal ${styles.section}`}>
      <p className={styles.intro}>
        <span className="gradient-text">
          What is Bill C-96
        </span>
      </p>
      <h2 className={`section-title ${styles.title}`}>
      Bill C-96 reinforces the obligation of businesses offering goods and services to consumers to respect their right to be served in French.
      </h2>
    </section>
  );
}

export default WhatIs;
