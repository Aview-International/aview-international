import GradientFullWidth from '../../../layout/GradientFullWidth/GradientFullWidth';

import styles from './YouCreate.module.css';

/**
 * @author Andrew Qiao
 */
function YouCreate() {
  return (
    <section className="section">
      <GradientFullWidth>
        <h2 className={`section-title ${styles['section-title']}`}>
          You Create. We Translate.
        </h2>
        <p className={`section-description ${styles['section-description']}`}>
          At Aview, you focus on making the content, and we will take care of
          the rest. Our tailored approach ensures you receive the best service
          for your brand.
        </p>
      </GradientFullWidth>
    </section>
  );
}

export default YouCreate;
