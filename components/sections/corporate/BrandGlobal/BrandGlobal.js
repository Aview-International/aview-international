import Image from 'next/image';
import Button from '../../../UI/Button/Button';
import styles from './BrandGlobal.module.css';
import BrandGlobalImage from '../../../../public/img/graphics/corporate-landing.png';
import HorizontalLine from '../../../UI/HorizontalLine/HorizontalLine';

const BrandGlobal = () => {
  return (
    <section className={`section m-horizontal`}>
      <div className={styles.section}>
        <div>
          <h1 className={`section-title ${styles.title}`}>
            <span className="gradient-text">Take your brand global</span>
          </h1>
          <p className={`section-description ${styles.description}`}>
            Globalize your brand and media content through translations and
            dubbing.
          </p>
          <Button type="primary" link="/translators#apply-today">
            Contact Us
          </Button>
        </div>
        <div className={styles['landing-image']}>
          <Image src={BrandGlobalImage} alt="landing graphic" />
        </div>
      </div>
      <div className={styles.mission}>
        <small>
          <span className="gradient-text">Our Mission</span>
        </small>
        <h1 className={`section-title ${styles.title}`}>
          To help build content creator brands globally through translated
          subtitles and voiceovers; a client, a language, and{' '}
          <span className="gradient-text">Aview</span> at a time.
        </h1>
      </div>
      <HorizontalLine />
    </section>
  );
};

export default BrandGlobal;
