import Image from 'next/image';
import Card from '../Card/Card';

import styles from './IconCard.module.css';

/**
 * Graphic cards displayed on homepage
 *
 * @prop title: Title of card
 * @prop description: Description of card
 * @prop graphic: Image of card
 * @prop alt: Alt text of card image
 * @prop horizontal: Whether the card is horizontal on desktop or not
 *
 * @author Andrew Qiao
 */
function IconCard({ title, description, graphic, alt, horizontal }) {
  return (
    <div
      className={`${styles['graphic-card']} ${
        horizontal && styles['horizontal-card']
      }`}
    >
      <Card>
      <div className={horizontal && styles.horizontal}>
          <div className={styles.text}>
            <h3 className={styles.title}>{title}</h3>
          </div>
          <div className={styles.graphic}>
            <Image src={graphic} alt={alt} />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default IconCard;
