import Image from 'next/image';

import roadmap from '../../../../public/img/graphics/roadmap.png';
import styles from './HowItWorks.module.css';

/**
 * @author Andrew Qiao
 */
function HowItWorks() {
  return (
    <section className={`section m-horizontal ${styles.section}`}>
      <h2 className={`section-title ${styles.title}`}>
        <span className="gradient-text">How it Works</span>
      </h2>
      <div className={styles.image}>
        <Image src={roadmap} alt="Roadmap" />
      </div>
    </section>
  );
}

export default HowItWorks;
