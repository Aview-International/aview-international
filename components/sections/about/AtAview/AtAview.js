import GradientFullWidth from '../../../layout/GradientFullWidth/GradientFullWidth';
import styles from "./AtAview.module.css";

function AtAview() {
  return (
    <section className="section">
      <GradientFullWidth>
        <h2 className={`section-title ${styles['section-title']}`}>
          At Aview we
        </h2>
        <p className={`section-description ${styles['section-description']}`}>
        Ensure your content is translated accurately,
        guaranteeing a positive return.
        </p>
      </GradientFullWidth>
    </section>
  );
}

export default AtAview;
