import styles from './HowItWorks.module.css';
import Card from '../../../UI/Card/Card';
import Row2 from '../../../layout/Row2/Row2';
import Border from '../../../UI/Border/Border';
import Shadow from '../../../UI/Shadow/Shadow';



function HowItWorks() {
  return (
    <section className={`section m-horizontal ${styles.section} `}>
      <h2 className={`section-title ${styles['section-title']}`}>
      <span className="gradient-text">How it Works</span>
      </h2>
      <h3 className={`section-title ${styles['section-title']}`}>
        Video Uploaded
      </h3>
      <div className={styles.arrow}>
        <div className={styles.point} />
        <div className={styles.line} />
         </div>
      <h3 className={`section-title ${styles['section-title']}`}>
        Translations <br/>Completed
      </h3>

      <div className={styles.arrow_top}>
        <div className={styles.line_top} />
         </div>

         <div className={styles.arrow_middle}>
         <div className={styles.point_left} />
         <div className={styles.point_right} />
         </div>
    
    <div className={styles.container}>
      <div className={`card1 ${styles.card1}`}>  
      <div className={styles.border1}>
      <div className={styles.border}>
      <div className={styles.header}>
          <h2 className={`section-title gradient-text ${styles['section-title']}`}>
             Subtitles
          </h2>
          </div>
          <div className={styles.text}>
          <h3 className={`section-title ${styles['section-title']}`}>
            Sent to Creator
          </h3>
          <div className={styles.arrow}>
        <div className={styles.point_bot} />
        <div className={styles.line_bot} />
         </div>
          <h3 className={`section-title ${styles['section-title']}`}>
            Upload to Main Channel
          </h3>
          </div>
      </div>
      </div>
      </div>

      <div className={`card1 ${styles.card2}`}>
      <div className={styles.border1}>
          <div className={styles.border}>
          <div className={styles.header}>
          <h2 className={`section-title gradient-text ${styles['section-title']}`}>
             Dubbing
          </h2>
          </div>
          <div className={styles.text}>
          <h3 className={`section-title ${styles['section-title']}`}>
            Voice Actors
          </h3>
          <div className={styles.arrow}>
        <div className={styles.point_bot} />
        <div className={styles.line_bot} />
         </div>
          <h3 className={`section-title ${styles['section-title']}`}>
            Video Editing
          </h3>
          <div className={styles.arrow}>
        <div className={styles.point_bot} />
        <div className={styles.line_bot} />
         </div>
          <h3 className={`section-title ${styles['section-title']}`}>
            Sent to creator
          </h3>
          <div className={styles.arrow}>
        <div className={styles.point_bot} />
        <div className={styles.line_bot} />
         </div>
          <h3 className={`section-title ${styles['section-title']}`}>
            Upload to International Channel
          </h3>
          </div>
      </div>
      </div>
      </div>
      </div>
   

    </section>
  );
};

export default HowItWorks;

