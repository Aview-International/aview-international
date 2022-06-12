import GraphicCardRow from '../GraphicCardRow/GraphicCardRow';
import GraphicCard from '../../UI/GraphicCard/GraphicCard';

import styles from './GraphicCardSection.module.css';

/**
 * Section of graphic cards. Includes the title, description, and row of cards
 *
 * @prop title: Title of the section
 * @prop description: Description of section
 * @prop cardData: Data for cards
 *
 * @author Andrew Qiao
 */
function GraphicCardSection({ title, description, cardData }) {
  return (
    <section className={`section m-horizontal ${styles.section}`}>
      <div className={styles.text}>
        <h2 className={`section-title ${styles['section-title']}`}>{title}</h2>
        {description && (
          <p className={`section-description ${styles['section-description']}`}>
            {description}
          </p>
        )}
      </div>
      <GraphicCardRow>
        {cardData.map((data, i) => (
          <GraphicCard {...data} key={`graphic-card-${i}`} />
        ))}
      </GraphicCardRow>
    </section>
  );
}

export default GraphicCardSection;
