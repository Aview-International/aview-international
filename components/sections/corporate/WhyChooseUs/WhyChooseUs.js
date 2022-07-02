import styles from './WhyChooseUs.module.css';
import GradientFullWidth from '../../../layout/GradientFullWidth/GradientFullWidth';

function WhyChooseUs() {
  return (
    <section className="section">
    <GradientFullWidth>
      <h2 className={`section-title ${styles['section-title']}`}>
        Why Choose Us?
      </h2>
      <p className={`section-description ${styles['section-description']}`}>
      Aview will ensure your content is accurately translated and distributed within the right channels. 
      Organizations around the world trust us with their content. 
      </p>
    </GradientFullWidth>
  </section>
  );
}

export default WhyChooseUs;
