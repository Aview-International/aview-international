import CardRow from "../../../layout/CardRow/CardRow";

import fastGraphic from "../../../../public/img/graphics/fast-and-easy.png";
import flexibleGraphic from "../../../../public/img/graphics/flexible.png";
import accurateGraphic from "../../../../public/img/graphics/accurate.png";
import styles from "./LeadInTranslations.module.css";
import GraphicCard from "../../../UI/GraphicCard/GraphicCard";

const CARD_DATA = [
  {
    title: "Fast & Easy",
    description:
      "AVIEW guarantees a 24-hour turnaround on subtitle and 48 hours on dubbed content.",
    graphic: fastGraphic,
    alt: "Fast graphic",
  },
  {
    title: "Flexible",
    description:
      "We offer a personalized payment plan and tailor our process to your needs.",
    graphic: flexibleGraphic,
    alt: "Flexible graphic",
  },
  {
    title: "Accurate",
    description:
      "We will ensure that our translations are accurate no matter the content. ",
    graphic: accurateGraphic,
    alt: "Accurate graphic",
  },
];

/**
 * Container for Why We Lead in Translations section of homepage
 */
function LeadInTranslations() {
  return (
    <section
      className={`section m-horizontal ${styles["lead-in-translations"]}`}
    >
      <h2 className={`section-title ${styles["section-title"]}`}>
        Why We <span className="gradient-text">Lead in Translations</span>
      </h2>
      <p className={`section-description ${styles["section-description"]}`}>
        AVIEW focuses on making our services 100% catered to our creators.
        Whether you need subtitles, dubbing, or shorts, AVIEW will help you
        along your journey.
      </p>
      <CardRow>
        {CARD_DATA.map((data, i) => (
          <GraphicCard {...data} key={`graphic-card-${i}`} />
        ))}
      </CardRow>
    </section>
  );
}

export default LeadInTranslations;
