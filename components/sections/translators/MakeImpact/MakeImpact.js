import GradientFullWidth from '../../../layout/GradientFullWidth/GradientFullWidth';
import styles from './MakeImpact.module.css';


function MakeImpact() {
  return (
    <section className="section">
      <GradientFullWidth>
        <h2 className={`section-title ${styles['section-title']}`}>
          Make Your Impact Today!
        </h2>
        <p className={`section-description ${styles['section-description']}`}>
        Aview works with the largest influencers in the world. 
        Our translations are seen by millions of international fans.
        </p>
      </GradientFullWidth>
    </section>
  );
}

export default MakeImpact;
