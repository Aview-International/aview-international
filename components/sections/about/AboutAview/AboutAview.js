import Image from "next/image";
import TextWithImage from "../../../layout/TextWithImage/TextWithImage";
import aboutGraphic from "../../../../public/img/graphics/about.png";
import styles from "./AboutAview.module.css";

function AboutAview() {
  return (
       <section className="section m-horizontal">
         <TextWithImage>
        <div>
        <h2 className={`section-title ${styles["section-title"]}`}>
            About <span className="gradient-text">Aview</span>
        </h2>
          <p className="section-description">
            Aview is a multimedia translation company designed to help content creators 
            and entertainers expand their fan base through social media platforms. Aview 
            focuses on content creators who have developed a loyal fan base in their local 
            market and seek international expansion.
          </p>
          </div>
          <div className={styles["about-graphic"]}>
          <Image src={aboutGraphic} alt="about graphic" />
        </div>
  </TextWithImage>
  </section>
  );
}

export default AboutAview;