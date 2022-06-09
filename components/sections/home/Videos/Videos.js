/**
 * Container for Our Translated Content section of homepage
 */
import Border from '../../../UI/Border/Border';
import LoganPaulLogo from '../../../../public/img/creators/logos/logan-paul.png';
import MarkRoberLogo from '../../../../public/img/creators/logos/mark-rober.png';
import YesTheoryLogo from '../../../../public/img/creators/logos/yes-theory.png';
import SaudBrothersLogo from '../../../../public/img/creators/logos/saud-brothers.png';
import Image from 'next/image';
import styles from './Videos.module.css';

const creators = [
  {
    embed_link: 'https://www.youtube.com/embed/ThMCYT6sbHw',
    logo: LoganPaulLogo,
    creator_name: 'Logan Paul',
    creator_subscriptions: '23M+ Subscribers',
    creator_views: '27M+ views',
  },

  {
    embed_link: 'https://www.youtube.com/embed/tk_ZlWJ3qJI',
    logo: MarkRoberLogo,
    creator_name: 'Mark Rober',
    creator_subscriptions: '21M+ Subscribers',
    creator_views: '93M+ views',
  },
  {
    embed_link: 'https://www.youtube.com/embed/8cvhwquPqJ0',
    logo: YesTheoryLogo,
    creator_name: 'Yes Theory',
    creator_subscriptions: '7M+ Subscribers',
    creator_views: '16M+ views',
  },
  {
    embed_link: 'https://www.youtube.com/embed/2ov35705pFQ',
    logo: SaudBrothersLogo,
    creator_name: 'Saud Brothers',
    creator_subscriptions: '14M+ Subscribers',
    creator_views: '14M+ views',
  },
];
const Videos = () => {
  return (
    <section className={`section m-horizontal`}>
      <h2 className={`section-title ${styles.title}`}>
        Our Translated <span className={`gradient-text`}> Content</span>
      </h2>
      <div className={styles.grid_container}>
        {creators.map((item, i) => (
          <div className={styles.card} key={`creator_${i}`}>
            <Border>
              <div className={styles.container}>
                <div>
                  <iframe
                    width="950"
                    height="534"
                    src={item.embed_link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className={`${styles.creator_profile}`}>
                  <div className={styles.creator_logo}>
                    <Image src={item.logo} alt="logo" width={30} height={30} />
                  </div>
                  <div className={styles.creator_info}>
                    <div>
                      <strong>{item.creator_name}</strong>
                      <hr />
                      <span>{item.creator_subscriptions}</span>
                    </div>
                    <div>
                      <span>{item.creator_views}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Border>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Videos;
