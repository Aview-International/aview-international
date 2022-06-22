import Image from 'next/image';

import TextWithImage from '../../../layout/TextWithImage/TextWithImage';
import Button from '../../../../components/UI/Button/Button';

import globalGraphic from '../../../../public/img/graphics/global.png';
import styles from './WeTranslate.module.css';

/**
 * Container for You Create. We Translate. section of homepage
 *
 * @author Andrew Qiao
 */
function WeTranslate() {
  return (
    <section className="section m-horizontal">
      <TextWithImage>
        <div>
          <h2 className={`section-title ${styles['section-title']}`}>
            You <span className="gradient-text">Create.</span> We&nbsp;
            <span className="gradient-text">Translate.</span>
          </h2>
          <p className={`section-description ${styles['section-description']}`}>
            AVIEW hand picks the best translators and voice actors for your
            content. We cater our approach to each individual creator and their
            brand. Our team is ready to help you gain a AVIEW on your
            competition.
          </p>
          <div className="desktop-only">
            <Button type="primary" isRoute={false} link="#generate-aview">
              Go Global Now!
            </Button>
          </div>
        </div>
        <div className={styles['global-graphic']}>
          <Image src={globalGraphic} alt="Global graphic" />
        </div>
      </TextWithImage>
    </section>
  );
}

export default WeTranslate;
