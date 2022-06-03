import Image from 'next/image';

import blob1 from '../../../public/img/blobs/blob-1.png';
import blob2 from '../../../public/img/blobs/blob-2.png';
import blob3 from '../../../public/img/blobs/blob-3.png';
import blob4 from '../../../public/img/blobs/blob-4.png';
import styles from './Blobs.module.css';

function Blobs() {
  return (
    <>
      <div className={`${styles.blob} ${styles['blob-1']}`}>
        <Image src={blob1} alt="blob1" />
      </div>
      <div className={`${styles.blob} ${styles['blob-2']}`}>
        <Image src={blob2} alt="blob2" />
      </div>
      <div className={`${styles.blob} ${styles['blob-3']}`}>
        <Image src={blob3} alt="blob3" />
      </div>
      <div className={`${styles.blob} ${styles['blob-4']}`}>
        <Image src={blob4} alt="blob4" />
      </div>
    </>
  );
}

export default Blobs;
