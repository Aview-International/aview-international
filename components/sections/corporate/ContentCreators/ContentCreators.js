import styles from './ContentCreators.module.css';
import maverickMedia from '../../../../public/img/creators/logos/logan-paul.png';
import markRober from '../../../../public/img/creators/logos/mark-rober.png';
import saudBrothers from '../../../../public/img/creators/logos/saud-brothers.png';
import whatIf from '../../../../public/img/creators/logos/what-if.png';
import yesTheory from '../../../../public/img/creators/logos/yes-theory.png';
import nextCanada from '../../../../public/img/creators/logos/next-canada.png';
import rippleVentures from '../../../../public/img/creators/logos/ripple-ventures.png';
import wayfoundHealth from '../../../../public/img/creators/logos/wayfound-health.png';
import valnetMedia from '../../../../public/img/creators/logos/valnet-media.png';
import underknownMedia from '../../../../public/img/creators/logos/underknown-media.png';
import Image from 'next/image';
import Button from '../../../UI/Button/Button';

const CREATORS = [
  { name: 'Maverick Media', logo: maverickMedia },
  { name: 'Mark Rober', logo: markRober },
  { name: 'Saud Brothers', logo: saudBrothers },
  { name: 'What If', logo: whatIf },
  { name: 'Yes Theory', logo: yesTheory },
  { name: 'Next Canada', logo: nextCanada },
  // { name: 'Ripple Ventures', logo: rippleVentures },
  { name: 'Wayfound Health', logo: wayfoundHealth },
  { name: 'Valnet Media', logo: valnetMedia },
  { name: 'Underknown Media', logo: underknownMedia },
];

function ContentCreators() {
  return (
    <section className={`section m-horizontal ${styles.section}`}>
      <p className={styles.intro}>
        <span className="gradient-text">
          Content Creators We&apos;ve Worked With
        </span>
      </p>
      <h2 className={`section-title ${styles.title}`}>
        Growing our customers internationally
      </h2>
      <div className={styles.row}>
          {CREATORS.map(({ name, logo }, i) => (
            <div key={`creator-${i}`}>
              <Image src={logo} alt={name} height="125" width="125" />
              <p className={styles.creator}>{name}</p>
            </div>
          ))}
      </div>
      <Button type="primary" link="#">
        Contact Us
      </Button>
    </section>
  );
}

export default ContentCreators;
