/**
 * Container for Our Translated Content section of homepage
 */
import Border from '../../../UI/Border/Border';
import LoganPaulLogo from '../../../../public/img/creators/logos/logan-paul.png';
import NinjaLogo from '../../../../public/img/creators/logos/ninja.png';
import SaudBrothersLogo from '../../../../public/img/creators/logos/saud-brothers.png';
import WhatIfLogo from '../../../../public/img/creators/logos/what-if.png';
import Image from 'next/image';
import styles from './Videos.module.css';

const creators = [
  {
    embed_link: 'https://www.youtube.com/embed/D0UnqGm_miA',
    logo: LoganPaulLogo,
    creator_name: 'Logan Paul',
    creator_subscriptions: 'XM Subscribers',
    creator_views: 'XM + views',
  },

  {
    embed_link: 'https://www.youtube.com/embed/u31qwQUeGuM',
    logo: NinjaLogo,
    creator_name: 'Ninja',
    creator_subscriptions: 'XM Subscribers',
    creator_views: 'XM + views',
  },
  {
    embed_link: 'https://youtube.com/embed/nWwpyclIEu4',
    logo: SaudBrothersLogo,
    creator_name: 'Saud Brothers',
    creator_subscriptions: 'XM Subscribers',
    creator_views: 'XM + views',
  },
  {
    embed_link: 'https://www.youtube.com/embed/ScMzIvxBSi4',
    logo: WhatIfLogo,
    creator_name: 'What If',
    creator_subscriptions: 'XM Subscribers',
    creator_views: 'XM + views',
  },
];
const Videos = () => {
  return (
    <section className={`section`}>
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
