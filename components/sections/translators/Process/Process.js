import Border from '../../../UI/Border/Border';
import HorizontalLine from '../../../UI/HorizontalLine/HorizontalLine';
import styles from './Process.module.css';

const Process = () => {
  const process = [
    {
      department: 'Translator',
      requirement:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh et feugiat vivamus diam, feugiat feugiat.',
      steps: [
        {
          title: 'Accept Posting',
          description:
            'Translators and transcript writers can be either assigned to a channel or pick up jobs per their availability.',
        },
        {
          title: 'Translate Transcript',
          description:
            'Once the video is translated, you will send it to the next employee for review or dubbing based on the services offered.',
        },
        {
          title: 'Upload to Portal',
        },
      ],
    },
    {
      department: 'Dubber',
      requirement:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh et feugiat vivamus diam, feugiat feugiat.',
      steps: [
        {
          title: 'Assigned to a Creator',
          description:
            'All dubbers will be assigned directly to a content creator, where you will become the international voice for their channel.',
        },
        {
          title: 'Dub Video',
          description:
            'Once you get assigned, you will begin the dubbing process which will be reviewed and approved by the project manager',
        },
        {
          title: 'Upload to Portal',
        },
      ],
    },
    {
      department: 'Video Editor',
      requirement:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh et feugiat vivamus diam, feugiat feugiat.',
      steps: [
        {
          title: 'Accept Posting',
          description:
            'Editors will either be assigned to creator channels or complete videos per request. Depending on the service, you may creator short form content too.',
        },
        {
          title: 'Edit Video',
          description:
            'Editing will be completed and approved by the project manager and the creator. Often, editors will have direct communication with our creators.',
        },
        {
          title: 'Upload to Portal',
        },
      ],
    },
  ];
  return (
    <section className={`section m-horizontal ${styles.section}`}>
      <h2 className="section-title">
        <span className="gradient-text">Process</span>
      </h2>
      <p className="text-regular">
        Process for our translators, dubbers and editors made simple and
        effective{' '}
      </p>
      <div className={styles.grid}>
        {process.map((process, i) => (
          <Card key={`card-${i}`} {...process} />
        ))}
      </div>
    </section>
  );
};

export default Process;

/**
 * Single Card Compoent 
 * @prop department: Department name,
 * @prop steps: Array of steps
 * @prop requirement: Requirement description,
 * 
 * @author  Victor Ogunjobi
 */

const Card = ({ department, steps, requirement }) => {
  return (
    <div>
      <Border>
        <div className={styles.border}>
          <h3>
            <span className="gradient-text">{department}</span>
          </h3>
          <div className={styles['flex-container']}>
            <div className={styles['gradient-line']}>
              <div></div>
              <span></span>
              <div></div>
              <span></span>
              <div></div>
            </div>
            <ul className={styles['steps']}>
              <li>
                <small className="text-regular">Step 1</small>
                <h4>{steps[0].title}</h4>
                <p className="text-regular">{steps[0].description}</p>
              </li>
              <li>
                <small className="text-regular">Step 2</small>
                <h4>{steps[1].title}</h4>
                <p className="text-regular">{steps[1].description}</p>
              </li>
              <li>
                <small className="text-regular">Step 3</small>
                <h4>Upload to Portal</h4>
              </li>
            </ul>
          </div>
          <HorizontalLine />
          <p className={`text-regular ${styles.requirement}`}>
            <span className="gradient-text">Requirements:</span>
          </p>
          <p className="text-regular">{requirement}</p>
        </div>
      </Border>
    </div>
  );
};
