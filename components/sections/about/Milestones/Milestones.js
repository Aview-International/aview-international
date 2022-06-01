import { useState } from 'react';
import GraphicCardRow from '../../../layout/GraphicCardRow/GraphicCardRow';
import Card from '../../../UI/Card/Card';
import styles from './Milestones.module.css';

const Milestones = () => {
  const achievements = [
    {
      fixedValue: 500,
      symbol: 'M',
      description: 'International Creator Views',
    },
    { fixedValue: 15, symbol: '', description: 'Languages' },
    {
      fixedValue: 10,
      symbol: 'M',
      description: 'International Gained Subscribers',
    },
    { fixedValue: 1600, symbol: '', description: 'Completed Videos' },
    {
      fixedValue: 400,
      symbol: '',
      description: 'Hours of translated Content',
    },
    { fixedValue: 100, symbol: 'M', description: 'Client Subscriber Count' },
  ];

  return (
    <section className={`section ${styles.section}`}>
      <h2 className={`section-title ${styles.title}`}>
        <span className={`gradient-text`}> Aview&apos;s</span> Milestones
      </h2>
      <div className={styles.grid_container}>
        <GraphicCardRow>
          {achievements.map((item, index) => (
            <Cards key={`achievements-${index}`} {...item} />
          ))}
        </GraphicCardRow>
      </div>
    </section>
  );
};

export default Milestones;

export const Cards = ({ description, fixedValue, symbol }) => {
  const [count, setCount] = useState(0);
  const speed = fixedValue * 0.07;
  const updateCount = () => {
    const target = fixedValue;
    const increment = Math.trunc(target / speed);

    if (count < target) {
      if (fixedValue < 50) setCount((count += 1));
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
    <div className={styles.container}>
      <Card>
        <div
          className={styles.card}
          onMouseEnter={run_count}
          // onMouseLeave={() => {
          //   setCount(fixedValue);
          // }}
        >
          <span className={`gradient-text section-title`}>
            {count || fixedValue}
            {`${symbol}+`}
          </span>
          <p className={`text-regular`}>{description}</p>
        </div>
      </Card>
    </div>
  );
};
