import Image from 'next/image';

import Card from '../Card/Card';

import styles from './Profile.module.css';

function Profile({ name, description, picture }) {
  return (
    <div className={styles.profile}>
      <div className={styles.picture}>
        <Image src={picture} alt={`${name} picuture`} />
      </div>
      <div className={styles.card}>
        <Card>
          <div className={styles.text}>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.description}>{description}</p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Profile;
