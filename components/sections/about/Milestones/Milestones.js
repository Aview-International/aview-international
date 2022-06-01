import Row3 from '../../../layout/Row3/Row3';
import Card from '../../../UI/Card/Card';

import styles from './Milestones.module.css';

const MILESTONES = [
  {
    title: '500M+',
    text: 'International Creator Views',
  },
  {
    title: '15+',
    text: 'Languages',
  },
  {
    title: '10M+',
    text: 'International Gained Subscribers',
  },
  {
    title: '1600+',
    text: 'Completed Videos',
  },
  {
    title: '400+',
    text: 'Hours of Translated Content',
  },
  {
    title: '100M+',
    text: 'Client Subscriber Count',
  },
];

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
        <Card key={`milestone-${i}]`}>
          <div className={styles.milestone}>
            <h3 className={`gradient-text ${styles.title}`}>
              {milestone.title}
            </h3>
            <p className={styles.description}>{milestone.text}</p>
          </div>
        </Card>
      ))}
    </Row3>
  );
}

export default Milestones;
