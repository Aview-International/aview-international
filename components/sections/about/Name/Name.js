import GradientFullWidth from '../../../layout/GradientFullWidth/GradientFullWidth';

import styles from './Name.module.css';

/**
 * @author Andrew Qiao
 */
function Name() {
  return (
    <section className="section">
      <GradientFullWidth>
        <h2 className={`section-title ${styles['section-title']}`}>
          Why the name Aview?
        </h2>
        <p className={`section-description ${styles['section-description']}`}>
          Our focus is simple, to expand your international fanbase, A-view at a
          time.
        </p>
      </GradientFullWidth>
    </section>
  );
}

export default Name;
