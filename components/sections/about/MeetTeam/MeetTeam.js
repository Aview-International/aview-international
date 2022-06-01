import GraphicCardRow from '../../../layout/GraphicCardRow/GraphicCardRow';
import Border from '../../../UI/Border/Border';
import styles from './MeetTeam.module.css';

const MeetTeam = () => {
  const founders = [
    { name: 'Lorem Ipsum', position: 'Lorem Ipsum', picture: '' },
    { name: 'Lorem Ipsum', position: 'Lorem Ipsum', picture: '' },
  ];
  const product_team = [
    { name: 'Lorem Ipsum', position: 'Lorem Ipsum', picture: '' },
    { name: 'Lorem Ipsum', position: 'Lorem Ipsum', picture: '' },
    { name: 'Lorem Ipsum', position: 'Lorem Ipsum', picture: '' },
    { name: 'Lorem Ipsum', position: 'Lorem Ipsum', picture: '' },
  ];
  const head_translators = [
    { name: 'Lorem Ipsum', position: 'Lorem Ipsum', picture: '' },
    { name: 'Lorem Ipsum', position: 'Lorem Ipsum', picture: '' },
    { name: 'Lorem Ipsum', position: 'Lorem Ipsum', picture: '' },
    { name: 'Lorem Ipsum', position: 'Lorem Ipsum', picture: '' },
  ];
  return (
    <section className={`section ${styles.section}`}>
      <h2 className={`section-title ${styles.title}`}>
        <span className={`gradient-text`}> Meet the Team</span>
      </h2>
      <h3>CoFounders</h3>
      <div className={styles.grid_container}>
        <GraphicCardRow>
          {founders.map((item) => (
            <Card {...item} />
          ))}
        </GraphicCardRow>
      </div>
      <h3>Product Team</h3>
      <div className={styles.grid_container}>
        <GraphicCardRow>
          {product_team.map((item) => (
            <Card {...item} />
          ))}
        </GraphicCardRow>
      </div>
      <h3>Head Translators</h3>
      <div className={styles.grid_container}>
        <GraphicCardRow>
          {head_translators.map((item) => (
            <Card {...item} />
          ))}
        </GraphicCardRow>
      </div>
    </section>
  );
};

export default MeetTeam;

const Card = ({ name, position }) => {
  return (
    <Border borderRadius="5px">
      <div className={styles.profile_card}>
        <div className={styles.profile_image}></div>
        <h4>{name}</h4>
        <p className={`text-regular`}>{position}</p>
      </div>
    </Border>
  );
};
