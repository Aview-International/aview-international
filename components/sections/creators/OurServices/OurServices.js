import subtitlesGraphic from '../../../../public/img/graphics/subtitles.png';
import dubbingGraphic from '../../../../public/img/graphics/dubbing.png';
import shortsGraphic from '../../../../public/img/graphics/shorts.png';
import GraphicCardSection from '../../../layout/GraphicCardSection/GraphicCardSection';

const CARD_DATA = [
  {
    title: 'Subtitles',
    description:
      'Receive a translation file that can be uploaded directly to your YouTube video.',
    graphic: subtitlesGraphic,
    alt: 'Subtitles graphic',
  },
  {
    title: 'Dubbing',
    description:
      'We offer a personalized payment plan and tailor our process to your needs.',
    graphic: dubbingGraphic,
    alt: 'Flexible graphic',
  },
  {
    title: 'Shorts',
    description:
      'Receive translated short form content that can be uploaded to YouTube, Instagram, TikTok and Facebook.',
    graphic: shortsGraphic,
    alt: 'Accurate graphic',
  },
];

function OurServices() {
  return (
    <GraphicCardSection
      title={
        <>
          Our <span className="gradient-text">Services</span>
        </>
      }
      cardData={CARD_DATA}
    />
  );
}

export default OurServices;
