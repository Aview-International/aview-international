import Border from '../../../UI/Border/Border';
import Button from '../../../UI/Button/Button';
import styles from './GrowthWithAview.module.css';
import Image from 'next/image';
import LoganPaul from '../../../../public/img/creators/profiles/logan-paul.png';
import YesTheory from '../../../../public/img/creators/profiles/yes-theory.png';
import ActiveSelfProtection from '../../../../public/img/creators/profiles/active-self-protecttion.png';
import Shadow from '../../../UI/Shadow/Shadow';

const GrowthWithAview = () => {
  const creators = [
    {
      name: 'Logan Paul',
      subscribers: '2M+',
      picture: LoganPaul,
      growth1: 'XXX%',
      growth2: 'XXX%',
      growth3: 'XXX%',
    },
    {
      name: 'Yes Theory',
      subscribers: '2M+',
      picture: YesTheory,
      growth1: 'XXX%',
      growth2: 'XXX%',
      growth3: 'XXX%',
    },
    {
      name: 'Active Self Protection',
      subscribers: '2M+',
      picture: ActiveSelfProtection,
      growth1: 'XXX%',
      growth2: 'XXX%',
      growth3: 'XXX%',
    },
  ];
  return (
    <section className={`section m-horizontal ${styles.parent}`}>
      <h2 className={`section-title ${styles['title']}`}>
        <span className="gradient-text">Growth </span>with Aview
      </h2>
      <div>
        {creators.map((item, i) => (
          <Cards key={`creator-${i}`} {...item} />
        ))}
      </div>
    </section>
  );
};

export default GrowthWithAview;

const Cards = ({ name, subscribers, picture, growth1, growth2, growth3 }) => {
  return (
    <div>
      <div className={styles.profile_card}>
        <div>
          <div className={`${styles.profile}`}>
            <div className={styles.creator_icon}>
              <div className={styles.creator_img}>
                <Image src={picture} alt="Logan Paul" />
              </div>
            </div>
            <div>
              <h4>{name}</h4>
              <p className="text-regular">{subscribers} Subscribers</p>
            </div>
          </div>
          <div className={styles.stats_container}>
            <Border borderRadius="5px">
              <div className={`${styles.profile_stats} shadow-parent`}>
                <Shadow />
                <div>
                  <h3 className="gradient-text">{growth1}</h3>
                  <p>growth in x</p>
                </div>
                <div>
                  <h3 className="gradient-text">{growth2}</h3>
                  <p>growth in x</p>
                </div>
                <div>
                  <h3 className="gradient-text">{growth3}</h3>
                  <p>growth in x</p>
                </div>
              </div>
            </Border>
          </div>
        </div>
        <Border borderRadius="5px">
          <div className={`shadow-parent ${styles.iframe_container}`}>
            <Shadow />
          </div>
        </Border>
      </div>
      <div className={styles.btn}>
        <Button isOnClick type="secondary">
          Download
        </Button>
      </div>
    </div>
  );
};
