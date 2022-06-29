import Card from '../../../UI/Card/Card';
import { useState, useRef, useEffect } from 'react';
import styles from './Milestones.module.css';
import { DetectScrollIntoView } from '../../../../utils/regex';

const MILESTONES = [
  {
    number: 500,
    suffix: 'M+',
    description: 'International Creator Views',
  },
  {
    number: 15,
    suffix: '+',
    description: 'Languages',
  },
  {
    number: 10,
    suffix: 'M+',
    description: 'International Gained Subscribers',
  },
];

/**
 * Container for Milestones component of homepage
 *
 * @author Andrew Qiao, Victor Ogunjobi
 */
function Milestones({}) {
  return (
    <div className={`m-horizontal ${styles['m-milestones']}`}>
      <Card>
        <div className={styles.milestones}>
          {MILESTONES.map((milestone, i) => (
            <MilestoneItem {...milestone} key={`milestone-${i}`} />
          ))}
        </div>
      </Card>
    </div>
  );
}

function MilestoneItem({ number, suffix, description }) {
  const [count, setCount] = useState(0);
  const ref = useRef();

  const inViewport = DetectScrollIntoView(ref, '-10px');
  useEffect(() => {
    const updateCount = () => {
      if (inViewport) {
        const speed = 2000 / number;
        // const target = number;
        // const increment = Math.trunc(target / speed);

        if (count < number) {
          // if (number < 50) {
          //   setCount((count += 1));
          //   setTimeout(updateCount, 500);
          // } else {
          setCount((count += 2));
          setTimeout(updateCount, 2000 / number);
          // }
        } else {
          setCount(number);
        }
      }
    };
    updateCount();
  }, [inViewport]);

  return (
    <div className={styles['milestone-item']} ref={ref}>
      <h2 className={`gradient-text ${styles['milestone-title']}`}>
        {count}
        {suffix}
      </h2>
      <p className={styles['milestone-description']}>{description}</p>
    </div>
  );
}

export default Milestones;
