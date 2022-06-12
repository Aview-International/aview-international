import Row2 from '../../../layout/Row2/Row2';
import GraphicCard from '../../../UI/GraphicCard/GraphicCard';

import visibilityGraphic from '../../../../public/img/graphics/visibility.png';
import growthGraphic from '../../../../public/img/graphics/growth.png';
import friendlyGraphic from '../../../../public/img/graphics/user-friendly.png';
import expandGraphic from '../../../../public/img/graphics/expand.png';
import styles from './TranslationBenefits.module.css';

const CARD_CONTENT = [
  {
    title: 'Visibility',
    description:
      "Translated metadata will help increase your visibility on Youtube's algorithm.",
    graphic: visibilityGraphic,
    alt: 'visibility graphic',
  },
  {
    title: 'Growth',
    description:
      'Increase the growth of your channel by tapping into new communities.',
    graphic: growthGraphic,
    alt: 'growth graphic',
  },
  {
    title: 'User-friendly',
    description: 'Make your videos more accessible to different groups. ',
    graphic: friendlyGraphic,
    alt: 'user-friendly graphic',
  },
  {
    title: 'Expand',
    description: 'Grow an international audience and increase engagement. ',
    graphic: expandGraphic,
    alt: 'expand graphic',
  },
];

/**
 * @author Andrew Qiao
 */
function TranslationBenefits() {
  return (
    <section className="section m-horizontal">
      <h2 className={`gradient-text section-title ${styles['section-title']}`}>
        Benefits of Translations
      </h2>
      <Row2>
        {CARD_CONTENT.map((content, i) => (
          <GraphicCard
            key={`card-${i}`}
            title={content.title}
            description={content.description}
            graphic={content.graphic}
            alt={content.alt}
            horizontal={true}
          />
        ))}
      </Row2>
    </section>
  );
}

export default TranslationBenefits;
