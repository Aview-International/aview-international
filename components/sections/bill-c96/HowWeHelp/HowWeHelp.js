import styles from './HowWeHelp.module.css';
import Image from 'next/image';
import image from '../../../../public/img/graphics/bill-c96-help.png';

const PERKS = [
  {
    title: 'Media Translations',
    description:
    "Aview specializes in media translations. We will take care of any marketing material that will need to be translated."
  },
  {
    title: 'Document Translations',
    description:
    "Aview will translate and format any documents that need to be translated. Receive accurate translations in a timely manner."
  },
  {
    title: 'Module Translations',
    description:
    "Training your team members to releasing an educational workshop, Aview can provide voiceover translations that fit within the modules."
  },
];

function HowWeHelp() {
  return (
    <section className={`section m-horizontal ${styles.section}`}>
      <p className={styles.intro}>
        <span className="gradient-text">
          How We Can Help
        </span>
      </p>
      <h2 className={`section-title ${styles.title}`}>
      Avoid the hassle of translations. Trust Aview.
      </h2>
      <div className={`list-container ${styles.list_container}`}>
      <div className={styles.image}>
          <Image src={image} alt="howhelp" />
        </div>
        <div className='list_info2'>
      {PERKS.map((list, i) => (
        <div className={styles.list} key={`list-${i}`}>
          <h2 className='section-title'>
            <span className="gradient-text">{list.title}</span>
          </h2>
          <p className={`section-description`}>{list.description}</p>
          </div>
      ))}
      </div>
      </div>
    </section>
  );
}

export default HowWeHelp;
