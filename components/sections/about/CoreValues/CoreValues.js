import styles from './CoreValues.module.css';

const CORE_VALUES = [
  {
    title: 'Fast Turnaround',
    description:
      'Aview will guarantee a 24-hour turnaround on subtitle work and 48 hours turnaround on dubbed content. We understand the importance of being timely to maximize views.',
  },
  {
    title: 'Taliored for Creators',
    description:
      'Aview understands each creator is different and will work closely with your team to find the best service and languages. No one service fits all. We will ensure you receive what is best for you and your brand.',
  },
  {
    title: 'Flexable Payment Plans',
    description:
      'Aview creates personalized payment plans for each creator to ensure your needs and ROI is met. We will work closely with you and your brand to find a plan that works for you.',
  },
];

/**
 * @author Andrew Qiao
 */
function CoreValues() {
  return (
    <section className={`section m-horizontal`}>
      <h2 className={`section-title ${styles.title}`}>
        Our <span className="gradient-text">Core Values</span>
      </h2>
      <p className={`section-description ${styles.description}`}>
        Aview focuses on three main items when it comes to our service. We know
        every creator is different and tailor our approach.
      </p>
      {CORE_VALUES.map((value, i) => (
        <div className={styles.value} key={`value-${i}`}>
          <h3 className={`section-title ${styles.subheading}`}>
            <span className="gradient-text">{value.title}</span>
          </h3>
          <p className={`section-description`}>{value.description}</p>
        </div>
      ))}
    </section>
  );
}

export default CoreValues;
