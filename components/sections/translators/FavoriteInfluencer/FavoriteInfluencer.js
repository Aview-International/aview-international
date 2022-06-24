import Image from 'next/image';
import Button from '../../../UI/Button/Button';
import styles from './FavoriteInfluencer.module.css';
import landingImage from '../../../../public/img/graphics/translator-landing.png';

function FavoriteInfluencer() {
  return (
    <section className={`section m-horizontal ${styles.section}`}>
      <div>
        <h1 className={`section-title ${styles.title}`}>
          <span className="gradient-text">
            Translate Your Favorite Influencer Videos!
          </span>
        </h1>
        <p className={`section-description ${styles.description}`}>
          Apply now to join our team of translators, dubbers and editors.
        </p>
        <Button type="primary" link="/translators#apply-today">
          Contact Us
        </Button>
      </div>
      <div className={styles['landing-image']}>
        <Image src={landingImage} alt="landing graphic" />
      </div>
    </section>
  );
}

export default FavoriteInfluencer;
