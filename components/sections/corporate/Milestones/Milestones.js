import styles from './Milestones.module.css';
import { useState, useRef, useEffect } from 'react';
import { DetectScrollIntoView } from '../../../../utils/regex';
import Card from '../../../UI/Card/Card';
import GraphicCardSection from '../../../layout/GraphicCardSection/GraphicCardSection';

const MILESTONES = [
  {
    description: 'Aview has generated over 500M international views for content creators, brands and companies through our translations.',
    value: 500,
    suffix: 'M',
    text: 'International Creator Views',
  },
  {
    description: 'Aview can now translate up to 15 languages through subtitle or voiceover translations.',
    value: 15,
    suffix: '',
    text: 'Languages',
  },
  {
    description: "Aview has achieved the milestone of translating over 400 hours' worth of content.",
    value: 400,
    suffix: '',
    text: 'Hours of Translated Content',
  },
];


function Milestones() {
  return (
    <>
    <section className="m-horizontal section">
      <h2 className={`section-title ${styles['section-title']}`}>
        <span className="gradient-text"> Milestones Section</span>
      </h2>
      {MILESTONES.map((milestone, i) => (
        <Cards key={`milestone-${i}]`} {...milestone} />
      ))}
    </section>
  </>
  );
}

export const Cards = ({ description, value, suffix, text, i }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();

  const inViewport = DetectScrollIntoView(ref, '-150px');
  useEffect(() => {
    const updateCount = () => {
      if (inViewport) {
        const speed = 2000 / value;
        const target = value;

        if (count < target) {
          setCount((count += 1));
          setTimeout(updateCount, 500 / target);
        } else {
          setCount(target);
        }
      }
    };
    updateCount();
  }, [inViewport]);
  
  return (
    <div className={styles.card_container}>
    <Card>
      <div className={styles.milestone} ref={ref}>
      <p className={styles.card_description}>{description}</p>
      <div className={styles.card_text}>
        <h3 className={`gradient-text ${styles.title}`}>
          {count}
          {`${suffix}+`}
        </h3>
        <p className={styles.description}>{text}</p>
        </div>
      </div>
    </Card>
    </div>
  );
};

export default Milestones;
