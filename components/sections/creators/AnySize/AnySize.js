import GradientFullWidth from '../../../layout/GradientFullWidth/GradientFullWidth';
import Button from '../../../UI/Button/Button';

import styles from './AnySize.module.css';

/**
 * @author Andrew Qiao
 */
function AnySize() {
  return (
    <section className="section">
      <GradientFullWidth>
        <h2 className={`section-title ${styles['section-title']}`}>
          At Aview, our services fit any size creator! We have an offering that
          would work for you.
        </h2>
        <p className={`section-description ${styles['section-description']}`}>
          Want to learn more about our services? Contact us below!
        </p>
        <Button type="tertiary" link={'#'}>
          Contact Us
        </Button>
      </GradientFullWidth>
    </section>
  );
}

export default AnySize;
