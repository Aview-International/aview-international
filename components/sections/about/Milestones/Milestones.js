import { useState, useRef, useEffect, useCallback } from 'react';
import { DetectScrollIntoView } from '../../../../utils/regex';
import Row3 from '../../../layout/Row3/Row3';
import Card from '../../../UI/Card/Card';
import styles from './Milestones.module.css';

const MILESTONES = [
  {
    value: 500,
    suffix: 'M',
    text: 'International Creator Views',
  },
  {
    value: 15,
    suffix: '',
    text: 'Languages',
  },
  {
    value: 10,
    suffix: 'M',
    text: 'International Gained Subscribers',
  },
  {
    value: 1600,
    suffix: '',
    text: 'Completed Videos',
  },
  {
    value: 400,
    suffix: '',
    text: 'Hours of Translated Content',
  },
  {
    value: 100,
    suffix: 'M',
    text: 'Client Subscriber Count',
  },
];

/**
 * @author Andrew Qiao, Victor Ogunjobi
 */
function Milestones() {
  return (
    <>
      <section className="m-horizontal section">
        <h2 className={`section-title ${styles['section-title']}`}>
          <span className="gradient-text">Aview&apos;s</span> Milestones
        </h2>
        <MilestonesGrid />
      </section>
    </>
  );
}

function MilestonesGrid() {
  return (
    <Row3>
      {MILESTONES.map((milestone, i) => (
        <Cards key={`milestone-${i}]`} {...milestone} />
      ))}
    </Row3>
  );
}

export default Milestones;

export const Cards = ({ value, suffix, text, i }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();

  const inViewport = DetectScrollIntoView(ref, '-150px');
  useEffect(() => {
    const updateCount = () => {
      if (inViewport) {
        const speed = value * 0.07;
        const target = value;
        const increment = Math.trunc(target / speed);

        if (count < target) {
          // if (value < 50) {
          setCount((count += 1));
          setTimeout(updateCount, 500);
          // } else {
          //   setCount((count += increment));
          //   setTimeout(updateCount, 150);
          // }
        } else {
          setCount(target);
        }
      }
    };
    updateCount();
  }, [inViewport]);
  return (
    <Card>
      <div className={styles.milestone} ref={ref}>
        <h3 className={`gradient-text ${styles.title}`}>
          {value}
          {`${suffix}+`}
        </h3>
        <p className={styles.description}>{text}</p>
      </div>
    </Card>
  );
};
