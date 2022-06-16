import Image from 'next/image';

import Button from '../../../UI/Button/Button';

import loganPaulLogo from '../../../../public/img/creators/logos/logan-paul.png';
import ninjaLogo from '../../../../public/img/creators/logos/ninja.png';
import saudBrothersLogo from '../../../../public/img/creators/logos/saud-brothers.png';
import whatIfLogo from '../../../../public/img/creators/logos/what-if.png';
import yesTheoryLogo from '../../../../public/img/creators/logos/yes-theory.png';
import markRoberLogo from '../../../../public/img/creators/logos/mark-rober.png';
import styles from './ContentCreators.module.css';

const CONTENT_CREATORS = [
  {
    name: 'Logan Paul',
    logo: loganPaulLogo,
    alt: 'Logan Paul logo',
    link: 'https://www.youtube.com/c/loganpaulvlogs',
  },
  {
    name: 'Ninja',
    logo: ninjaLogo,
    alt: 'Ninja logo',
    link: 'https://www.youtube.com/c/Ninja',
  },
  {
    name: 'Saud Brothers',
    logo: saudBrothersLogo,
    alt: 'Saud Brothers logo',
    link: 'https://www.youtube.com/c/SaudBrothers',
  },
  {
    name: 'What If',
    logo: whatIfLogo,
    alt: 'What If logo',
    link: 'https://www.youtube.com/c/WhatIfScienceShow',
  },
  {
    name: 'Yes Theory',
    logo: yesTheoryLogo,
    alt: 'Yes Theory logo',
    link: 'https://www.youtube.com/c/Ninja',
  },
  {
    name: 'Mark Rober',
    logo: markRoberLogo,
    alt: 'Mark Rober logo',
    link: 'https://www.youtube.com/c/Ninja',
  },
];

/**
 * Container for Content Creators We’ve Worked With section of homepage
 *
 * @author Andrew Qiao
 */
function ContentCreators() {
  return (
    <section className={`section m-horizontal ${styles.section}`}>
      <h2 className={`section-title ${styles['section-title']}`}>
        <span className="gradient-text">Content Creators</span> We&apos;ve
        Worked With
      </h2>
      <CreatorsGrid />
      <Button type="primary" isRoute={false} link="#generate-aview">
        Become a Creator!
      </Button>
    </section>
  );
}

/**
 * Grid of creators
 */
function CreatorsGrid() {
  return (
    <div className={styles['creators-grid']}>
      {CONTENT_CREATORS.map((creator, i) => (
        <div className={styles.creator} key={`creator-${i}`}>
          <a
            href={creator.link}
            target="_blank"
            rel="noreferrer"
            alt={creator.alt}
            className={`${styles['creator-logo']} shadow-parent`}
          >
            <Image src={creator.logo} alt={creator.alt} />
            <p className={styles['creator-name']}>{creator.name}</p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default ContentCreators;
