import Card from '../../../UI/Card/Card';
import { useState } from 'react';
import styles from './Milestones.module.css';

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
  const updateCount = () => {
    const speed = number * 0.07;
    const target = number;
    const increment = Math.trunc(target / speed);

    if (count < target) {
      if (number < 50) setCount((count += 1));
      else setCount((count += increment));
      setTimeout(updateCount, 100);
    } else {
      setCount(target);
    }
  };
  const run_count = () => {
    setCount(0);
    updateCount();
  };
  return (
    <div className={styles['milestone-item']} onMouseEnter={run_count}>
      <h2 className={`gradient-text ${styles['milestone-title']}`}>
        {count || number}
        {suffix}
      </h2>
      <p className={styles['milestone-description']}>{description}</p>
    </div>
  );
}

export default Milestones;
