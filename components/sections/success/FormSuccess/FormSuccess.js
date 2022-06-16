import Image from 'next/image';

import thankYou from '../../../../public/img/graphics/thank-you.png';
import Button from '../../../UI/Button/Button';
import styles from './FormSuccess.module.css';

function FormSuccess() {
  return (
    <div className={styles.container}>
      <div className={styles.success}>
        <div className={styles.image}>
          <Image src={thankYou} alt="thank you graphic" />
        </div>
        <h2 className={styles.title}>
          <span className="gradient-text">Thank You!</span>
        </h2>
        <p className={`section-description ${styles.description}`}>
          We have received your message. We&apos;ll get back to you shortly!
        </p>
        <Button type="primary" isRoute={true} link="/" isOnClick={false}>
          Go Home
        </Button>
      </div>
    </div>
  );
}

export default FormSuccess;
