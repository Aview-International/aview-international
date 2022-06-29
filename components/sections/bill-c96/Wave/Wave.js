import Image from 'next/image';
import styles from './Wave.module.css';
import wave from '../../../../public/img/graphics/bill-c96-wave.svg';

function Wave() {
  return (
    <div className={styles.wave}>
      <Image src={wave} alt="wave" />
    </div>
  );
}

export default Wave;
