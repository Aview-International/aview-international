import GradientFullWidth from '../../../layout/GradientFullWidth/GradientFullWidth';

import styles from './BreadAndButter.module.css';

/**
 * Container for Translating Content, It's Our Bread and Butter section of homepage
 *
 * @author Andrew Qiao
 */
function BreadAndButter() {
  return (
    <section className="section">
      <GradientFullWidth>
        <h2 className={`section-title ${styles['section-title']}`}>
          Translating Content, It&apos;s Our Bread and Butter
        </h2>
        <p className={`section-description ${styles['section-description']}`}>
          We know how to help expand our creators global fanbase. The clients we
          work with speak for itself.
        </p>
      </GradientFullWidth>
    </section>
  );
}

export default BreadAndButter;
