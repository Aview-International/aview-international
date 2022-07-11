import Button from '../../../UI/Button/Button';
import styles from './Preparing.module.css';
import graphic from '../../../../public/img/graphics/bill-c96-landing.png';
import Image from 'next/image';

function Preparing() {
  return (
    <section className={`section m-left ${styles.section}`}>
      <div>
        <h2 className={`section-title ${styles.title}`}>
          Preparing for <span className="gradient-text">Bill C-96</span>
        </h2>
        <p className={`section-description ${styles.description}`}>
          Aview will ensure you are ready and prepared for the roll out of Bill
          C-96.
        </p>
        <Button type="primary" link="/bill-c96#generate-aview">
          Contact Us
        </Button>
      </div>
      <div className={styles.graphic}>
        <Image src={graphic} alt="Bill C-96 graphic" layout="responsive" />
      </div>
    </section>
  );
}

export default Preparing;
