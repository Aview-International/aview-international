import Image from "next/image";

import Button from "../../../UI/Button/Button";
import Milestones from "../Milestones/Milestones";

import landingGraphic from "../../../../public/img/graphics/home-landing.png";
import styles from "./Landing.module.css";

/**
 * Container for landing section of homepage
 */
function Landing() {
  return (
    <section className={`section`}>
      <div className={`m-horizontal ${styles["landing-text"]}`}>
        <h1 className={`section-title ${styles["section-title"]}`}>
          Translate your
          <span className="gradient-text"> Social Media Content</span>
        </h1>
        <p className={`section-description ${styles["section-description"]}`}>
          AVIEW is a leading multi-media translation service. We help you expand
          your international viewership.
        </p>
        <Button type="primary" isRoute={false} link="#generate-aview">
          Start Now!
        </Button>
      </div>
      <div className={styles["landing-graphic"]}>
        <Image src={landingGraphic} alt="Landing graphic" />
      </div>
      <Milestones />
    </section>
  );
}

export default Landing;
