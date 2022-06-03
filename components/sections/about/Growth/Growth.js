import Border from '../../../UI/Border/Border';
import styles from './Growth.module.css';
import { Dotted_gradient_line } from '../../../../utils/svgs';
import Shadow from '../../../UI/Shadow/Shadow';

const Growth = () => {
  return (
    <section className={`section m-horizontal ${styles.section} `}>
      <h2 className={`section-title ${styles['section-title']}`}>
        <span className="gradient-text">Aview&apos;s</span> Growth
      </h2>
      <Card
        title="Our First Client - Logan Paul"
        message="  Aview was founded in 2017 initially by two high school students. Our services were simple yet effective and allowed creators like Logan Paul to expand into new international audiences and globalize their brand. Aview is a leading translation service for many media influencers and brands."
        direction="ltr"
      />

      <div className={styles.svg_line}>
        <Dotted_gradient_line />
      </div>
      <Card
        title="Hitting Our Key Metics"
        message=" Our mission has been simple, to help take influencers and brands to global markets. In 2021, We hit our milestone of receiving over
        500 million international views across our international content!
        We are creeping up very quickly on our next milestone of 1 billion
        views!"
        direction="rtl"
      />
      <div className={`${styles.reverse_svg} ${styles.svg_line}`}>
        <Dotted_gradient_line />
      </div>
      <Card
        title="Expanding Our Services"
        message="  Given the increase in demand from content creators to go global, we expanded our offerings to include video dubbing and translated
        short-form content. With this fast expansion, Aview is always
        looking for more translators, dubbers and editors to join our
        team!"
        direction="ltr"
      />
    </section>
  );
};

export default Growth;

const Card = ({ title, message, direction }) => {
  return (
    <div className={`${styles.container} ${styles[direction]}`}>
      <Border>
        <div className={`shadow-parent ${styles.child_container}`}>
          <Shadow />
          <h3 className="gradient-text">{title}</h3>
          <p className="text-regular">{message}</p>
        </div>
      </Border>
    </div>
  );
};
