import Image from 'next/image';

import styles from './AboutAview.module.css';
import image from '../../../../public/img/graphics/about.png';

function AboutAview() {
  return (
    <section className={`section m-horizontal ${styles.section}`}>
      <div className={styles.text}>
        <h2 className={`section-title ${styles.title}`}>
          About <span className="gradient-text">Aview</span>
        </h2>
        <p className={`section-description`}>
          Aview is a multimedia translation company designed to help content
          creators and entertainers expand their fan base through social media
          platforms. Aview focuses on content creators who have developed a
          loyal fan base in their local market and seek international expansion.
        </p>
      </div>
      <div className={styles.image}>
        <Image src={image} alt="about Aview" />
      </div>
    </section>
  );
}

export default AboutAview;
