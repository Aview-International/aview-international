import Image from 'next/image';
import Card from '../Card/Card';

import styles from './GraphicCard.module.css';

/**
 * Graphic cards displayed on homepage
 *
 * @prop title: Title of card
 * @prop description: Description of card
 * @prop graphic: Image of card
 * @prop alt: Alt text of card image
 */
function GraphicCard({ title, description, graphic, alt }) {
  return (
    <div className={styles['graphic-card']}>
      <Card>
        <div className={styles.graphic}>
          <Image src={graphic} alt={alt} />
        </div>
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
          <p className={`text-regular ${styles.description}`}>{description}</p>
        </div>
      </Card>
    </div>
  );
}

export default GraphicCard;
