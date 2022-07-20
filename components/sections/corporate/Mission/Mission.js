import HorizontalLine from '../../../UI/HorizontalLine/HorizontalLine';
import styles from './Mission.module.css';

function Mission() {
  return (
    <section className="section m-horizontal">
      <div className={styles.mission}>
        <small>
          <span className="gradient-text">Our Mission</span>
        </small>
        <h1 className={`section-title ${styles.title}`}>
          To help build content creator brands globally through translated
          subtitles and voiceovers; a client, a language, and{' '}
          <span className="gradient-text">Aview</span> at a time.
        </h1>
      </div>
      <HorizontalLine />
    </section>
  );
}

export default Mission;
