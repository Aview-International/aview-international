import Button from '../../../UI/Button/Button';

import landingImage from '../../../../public/img/graphics/about-landing.png';
import styles from './Landing.module.css';
import Image from 'next/image';

/**
 * @author Andrew Qiao
 */
function Landing() {
  return (
    <section className={`section m-left ${styles.section}`}>
      <div className={styles.text}>
        <p className={styles.mission}>Our Mission</p>
        <p className={`section-title ${styles.title}`}>
          To help build content creator brands globally through translated
          subtitles and voiceovers; a client, a language, and
          <span className="gradient-text"> Aview</span> at a time.
        </p>
        <Button type="primary" link="/">
          Contact Us
        </Button>
      </div>
      <div className={styles['landing-image']}>
        <Image src={landingImage} alt="landing graphic" />
      </div>
    </section>
  );
}

export default Landing;
