import styles from './PerksAview.module.css';
import Image from 'next/image';
import image from '../../../../public/img/graphics/perks.png';

const PERKS = [
  {
    number: '01',
    title: 'Flexible Hours',
    description:
    "At Aview, you have the flexibility to work the hours that fit your schedule. An average translator will spend ~10 hours per week translating new content."
  },
  {
    number: '02',
    title: 'Work With Internet Super Stars',
    description:
    "You will get the unique opportunity to work closely with some of the largest influencers in the world! Watch content even before it's released to the public."
  },
  {
    number: '03',
    title: 'Great Compensation',
    description:
    "Aview offers some of the best compensation and bonus plans to our employees. Earn competitive rates based on the work and services completed."
  },
];

function PerksAview() {
  return (
    <section className={`section m-horizontal ${styles.section}`}>
      <div className='index'>
      <h2 className={`gradient-text section-title ${styles['section-title']}`}>
        Perks of Being with Aview
      </h2>
      {PERKS.map((list, i) => (
        <div className={styles.list} key={`list-${i}`}>
          <h1 className='section-title'>
            <span className="gradient-text">{list.number}</span>
          </h1>
          <div className='list-info'>
          <h3 className={`section-title`}>{list.title}</h3>
          <p className={`section-description`}>{list.description}</p>
          </div>
          </div>
      ))}
          </div>
        <div className={styles.image}>
          <Image src={image} alt="perks" />
        </div>
    </section>
  );
}

export default PerksAview;