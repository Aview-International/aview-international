import fastGraphic from '../../../../public/img/graphics/fast-and-easy.png';
import flexibleGraphic from '../../../../public/img/graphics/flexible.png';
import accurateGraphic from '../../../../public/img/graphics/accurate.png';
import GraphicCardSection from '../../../layout/GraphicCardSection/GraphicCardSection';

const CARD_DATA = [
  {
    title: 'Fast & Easy',
    description:
      'AVIEW guarantees a 24-hour turnaround on subtitle and 48 hours on dubbed content.',
    graphic: fastGraphic,
    alt: 'Fast graphic',
  },
  {
    title: 'Flexible',
    description:
      'We offer a personalized payment plan and tailor our process to your needs.',
    graphic: flexibleGraphic,
    alt: 'Flexible graphic',
  },
  {
    title: 'Accurate',
    description:
      'We will ensure that our translations are accurate no matter the content. ',
    graphic: accurateGraphic,
    alt: 'Accurate graphic',
  },
];

/**
 * Container for Why We Lead in Translations section of homepage
 *
 * @author Andrew Qiao
 */
function LeadInTranslations() {
  return (
    <GraphicCardSection
      title={
        <>
          Why We <span className="gradient-text">Lead in Translations</span>
        </>
      }
      description="AVIEW focuses on making our services 100% catered to our creators. Whether you need subtitles, dubbing, or shorts, AVIEW will help you along your journey."
      cardData={CARD_DATA}
    />
  );
}

export default LeadInTranslations;
