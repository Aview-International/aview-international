import GradientFullWidth from '../../../layout/GradientFullWidth/GradientFullWidth';
import styles from './AtAview.module.css';

/**
 * @author Andrew Qiao
 */
function AtAview() {
  return (
    <section className="section">
      <GradientFullWidth>
        <p className={`section-title ${styles.subheading}`}>At Aview we</p>
        <h2 className={`section-title ${styles.title}`}>
          Ensure your content is translated accurately, guaranteeing a positive
          return.
        </h2>
      </GradientFullWidth>
    </section>
  );
}

export default AtAview;
