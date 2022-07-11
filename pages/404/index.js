import styles from './404.module.css';
import Image from 'next/image';
import Graphic from '../../public/img/graphics/404Image.png';
import Button from '../../components/UI/Button/Button';

function Error404() {
  return (
    <section className={`section m-horizontal ${styles.section}`}>
      <div className={styles.graphic}>
        <Image src={Graphic} alt="Page not found" layout="responsive" />
      </div>
      <h1 className={`section-title ${styles.title}`}>
        <span className="gradient-text">Page Not Found</span>
      </h1>
      <Button type="primary" link="/">
        Go Home
      </Button>
    </section>
  );
}

export default Error404;
