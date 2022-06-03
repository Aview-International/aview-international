import Image from "next/image";
import TextWithImage from "../../../layout/TextWithImage/TextWithImage";
import Button from "../../../../components/UI/Button/Button";
import aboutlandingGraphic from "../../../../public/img/graphics/about-landing.png";
import styles from "./Landing.module.css";

function Landing() {
  return (
    <section className="section m-horizontal">
      <TextWithImage>
          <div>
          <h2 className={`section-title ${styles["section-title"]}`}>
            Our Mission
          </h2>
          <p className={`section-description ${styles["section-description"]}`}>
            To help build content creator brands globally through translated 
            subtitles and voiceovers; a client, a language, and
            <span className="gradient-text"> Aview </span> at a time.
          </p>
            <Button type="primary" isRoute={false} link="#generate-aview">
              Contact Us
            </Button>
        </div>
        <div className={styles["about-landing-graphic"]}>
          <Image src={aboutlandingGraphic} alt="about landing graphic" />
        </div>
      </TextWithImage>
    </section>
  );
}

export default Landing;
