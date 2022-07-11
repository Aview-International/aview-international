import styles from './404.module.css';
import Image from 'next/image';
import graphic from '../../public/img/graphics/404Image.png';
import Button from '../../components/UI/Button/Button';

function error404() {
  return (
    <section className={`section m-horizontal ${styles.section}`}>
      <div className={styles.graphic}>
      <Image src={graphic} />
      </div>
      <div className={styles.text}>
      <h1 className={`section-title ${styles.title}`}>
          <span className="gradient-text">Page Not Found</span></h1>
          <p className={`section-description ${styles['section-description']}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className={`section-description ${styles['section-description']}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className={`section-description ${styles['section-description']}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
      </div>
      <Button type="primary" isRoute={true} link="/">
        Go Back
      </Button>
    </section>
  );
}

export default error404;
