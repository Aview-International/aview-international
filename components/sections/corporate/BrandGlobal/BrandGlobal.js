import Image from 'next/image';
import Button from '../../../UI/Button/Button';
import styles from './BrandGlobal.module.css';
import BrandGlobalImage from '../../../../public/img/graphics/brand-global.png';
import BrandIcon1 from '../../../../public/img/graphics/brand-icon1.png';
import BrandIcon2 from '../../../../public/img/graphics/brand-icon2.png';
import BrandIcon3 from '../../../../public/img/graphics/brand-icon3.png';
import BrandIcon4 from '../../../../public/img/graphics/brand-icon4.png';

const BrandGlobal = () => {
  return (
    <section className={`section m-horizontal`}>
      <div className={styles.section}>
        <span className={styles['icon1']}>
          <Image src={BrandIcon1} alt="" />
        </span>
        <span className={styles['icon2']}>
          <Image src={BrandIcon2} alt="" />
        </span>
        <span className={styles['icon3']}>
          <Image src={BrandIcon3} alt="" />
        </span>
        {/* <span className={styles['icon4']}>
          <Image src={BrandIcon4} alt="" />
        </span> */}
        <div>
          <h1 className={`section-title ${styles.title}`}>
            <span className="gradient-text">Take your brand global</span>
          </h1>
          <p className={`section-description ${styles.description}`}>
            Globalize your brand and media content through translations and
            dubbing.
          </p>
          <Button type="primary" link="/corporate#generate-aview">
            Contact Us
          </Button>
        </div>
        <div className={styles['landing-image']}>
          <span>
            <Image src={BrandGlobalImage} alt="landing graphic" />
          </span>
        </div>
      </div>
   
    </section>
  );
};

export default BrandGlobal;
