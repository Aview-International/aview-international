import Image from 'next/image';

import Card from '../Card/Card';

import styles from './Profile.module.css';

/**
 * Profile including picutre, name, etc.
 *
 * @prop name
 * @prop description
 * @prop picture
 *
 * @author Andrew Qiao
 */
function Profile({ name, description, picture }) {
  return (
    <div className={styles.profile}>
      <div className={styles.picture}>
        <Image src={picture} alt={`${name} picture`} />
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
