/**
 * Container for FAQ section of homepage
 */
import HorizontalLine from '../../../UI/HorizontalLine/HorizontalLine';
import styles from './FAQs.module.css';

const dataArray = [
  {
    question: 'Who have you worked with?',
    answer: `We have been generating AVIEW for Logan Paul, Mark Rober, YesTheory, Ninja, Vitalyzdtv, Active Self Protection, Saud Brothers, Amanda Cerny, Marlin and many more! AVIEW has helped these creators expand into international markets and become known worldwide.`,
    _id: 'question3',
  },
  {
    question: 'How much does it cost?',
    answer: `AVIEW creates a pricing plan for each creator. We ensure that you see a return on our services! If you would like a quote, please click here!`,
    _id: 'question4',
  },
  {
    question: 'How large does my audience need to be?',
    answer: `To see the greatest results, we recommend you have an average of 25,000 views per video`,
    _id: 'question5',
  },
  {
    question: 'Can you translate for other platforms like TikTok?',
    answer: `Yes! We are a multimedia translation service. We can translate and edit the content on any platform for you so they are ready to be uploaded.`,
    _id: 'question6',
  },
  {
    question: 'How can I get started?',
    answer: `Click here to get started!`,
    _id: 'question7',
  },
];

const FAQs = () => {
  return (
    <section className={`section ${styles.parent}`}>
      <h2 className={`section-title`}>
        <span className="gradient-text">FAQ</span>
      </h2>
      <p className={`section-description ${styles['section-description']}`}>
        Question not answered below? Email us at julia@aviewint.com
      </p>
      <HorizontalLine />
      <label htmlFor={'question1'} className={styles.questions_label}>
        <input id={'question1'} type="checkbox" />
        <div className={styles.questions_container}>
          <div>
            <h4>How does it work?</h4>
            <span className={styles.minus_sign}></span>
            <div className={styles.plus_sign}>
              <span></span>
              <span></span>
            </div>
          </div>
          <p>
            Three simple steps to increase your international viewership.
            <br />
            1. Select from our translations or voiceover services <br />
            2. Indicate what languages would work best for you <br />
            3. Receive 100% accurate translations or voice-overs within 48
            hours, edited and ready to be posted
          </p>
        </div>
      </label>
      <HorizontalLine />
      <label htmlFor={'question2'} className={styles.questions_label}>
        <input id={'question2'} type="checkbox" />
        <div className={styles.questions_container}>
          <div>
            <h4>What are your services?</h4>
            <span className={styles.minus_sign}></span>
            <div className={styles.plus_sign}>
              <span></span>
              <span></span>
            </div>
          </div>
          <p>
            AVIEW offers 3 services.
            <br />
            <br />
            1. Subtitles Translations <br />
            Receive a translation file that can be uploaded directly to your
            YouTube video. The file will be sent within 24 hours and will
            auto-match the audio from the video. Simply add the translations and
            target new global fans! <br />
            <br />
            2. Voiceover Translations <br />
            Receive your videos completely translated with voice-overs in the
            language of your choosing. Aview will edit and post the video on a
            new YouTube channel within 48 hours. Complete passive income!
            <br />
            <br />
            3. Short-form Content
            <br />
            Receive translated short-form content that can be uploaded to
            YouTube, Instagram, TikTok and Facebook. The file will be sent
            within 48 hours and dubbed or translated with subtitles. Go viral in
            several languages!
          </p>
        </div>
      </label>
      <HorizontalLine />
      {dataArray.map((item, i) => (
        <Questions question={item.question} key={`label-${i}`} {...item} />
      ))}
    </section>
  );
};

export default FAQs;

const Questions = ({ _id, question, answer }) => {
  return (
    <>
      <label htmlFor={_id} className={styles.questions_label}>
        <input id={_id} type="checkbox" />
        <div className={styles.questions_container}>
          <div>
            <h4>{question}</h4>
            <span className={styles.minus_sign}></span>
            <div className={styles.plus_sign}>
              <span></span>
              <span></span>
            </div>
          </div>
          <p className={`text-regular`}>{answer}</p>
        </div>
      </label>
      <HorizontalLine />
    </>
  );
};
