import Image from "next/image";
import Card from "../Card/Card";

import styles from "./GraphicCard.module.css";

function GraphicCard({ title, description, graphic, alt }) {
  return (
    <div className={styles["graphic-card"]}>
      <Card>
        <div className={styles.graphic}>
          <Image src={graphic} alt={alt} />
        </div>
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </Card>
    </div>
  );
}

export default GraphicCard;
