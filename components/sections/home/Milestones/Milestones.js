import Card from "../../../UI/Card/Card";

import styles from "./Milestones.module.css";

const MILESTONES = [
  {
    number: 500,
    suffix: "M+",
    description: "International Creator Views",
  },
  {
    number: 15,
    suffix: "+",
    description: "Languages",
  },
  {
    number: 10,
    suffix: "M+",
    description: "International Gained Subscribers",
  },
];

/**
 * Container for Milestones component of homepage
 */
function Milestones() {
  return (
    <div className={`m-horizontal ${styles["m-milestones"]}`}>
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
  return (
    <div className={styles["milestone-item"]}>
      <h2 className={`gradient-text ${styles["milestone-title"]}`}>
        {number}
        {suffix}
      </h2>
      <p className={styles["milestone-description"]}>{description}</p>
    </div>
  );
}

export default Milestones;
